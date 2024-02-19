import * as C from "react";
import S, { useCallback as fe, forwardRef as A, Children as Vt, isValidElement as sr, createElement as w, cloneElement as So, Fragment as qt, createContext as bt, useContext as Qe, useState as X, useEffect as Q, useRef as H, useMemo as Mt, useLayoutEffect as Da, useReducer as vi, useDebugValue as x0, useImperativeHandle as y0, Component as w0, createRef as Bo } from "react";
import * as $0 from "react-dom";
import Gl, { flushSync as gi, createPortal as Zl } from "react-dom";
var gt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var f = { exports: {} }, Ho = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ld;
function C0() {
  if (Ld)
    return Ho;
  Ld = 1;
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
  return Ho.Fragment = n, Ho.jsx = s, Ho.jsxs = s, Ho;
}
var Yo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fd;
function S0() {
  return Fd || (Fd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = S, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, v = "@@iterator";
    function g(O) {
      if (O === null || typeof O != "object")
        return null;
      var ie = h && O[h] || O[v];
      return typeof ie == "function" ? ie : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(O) {
      {
        for (var ie = arguments.length, be = new Array(ie > 1 ? ie - 1 : 0), Me = 1; Me < ie; Me++)
          be[Me - 1] = arguments[Me];
        y("error", O, be);
      }
    }
    function y(O, ie, be) {
      {
        var Me = x.ReactDebugCurrentFrame, Be = Me.getStackAddendum();
        Be !== "" && (ie += "%s", be = be.concat([Be]));
        var Je = be.map(function(Ve) {
          return String(Ve);
        });
        Je.unshift("Warning: " + ie), Function.prototype.apply.call(console[O], console, Je);
      }
    }
    var _ = !1, $ = !1, E = !1, N = !1, M = !1, R;
    R = Symbol.for("react.module.reference");
    function K(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === r || O === a || M || O === o || O === l || O === u || N || O === m || _ || $ || E || typeof O == "object" && O !== null && (O.$$typeof === p || O.$$typeof === d || O.$$typeof === s || O.$$typeof === i || O.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === R || O.getModuleId !== void 0));
    }
    function G(O, ie, be) {
      var Me = O.displayName;
      if (Me)
        return Me;
      var Be = ie.displayName || ie.name || "";
      return Be !== "" ? be + "(" + Be + ")" : be;
    }
    function W(O) {
      return O.displayName || "Context";
    }
    function Z(O) {
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
            var ie = O;
            return W(ie) + ".Consumer";
          case s:
            var be = O;
            return W(be._context) + ".Provider";
          case c:
            return G(O, O.render, "ForwardRef");
          case d:
            var Me = O.displayName || null;
            return Me !== null ? Me : Z(O.type) || "Memo";
          case p: {
            var Be = O, Je = Be._payload, Ve = Be._init;
            try {
              return Z(Ve(Je));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, j = 0, I, V, Y, D, k, B, q;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function te() {
      {
        if (j === 0) {
          I = console.log, V = console.info, Y = console.warn, D = console.error, k = console.group, B = console.groupCollapsed, q = console.groupEnd;
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
        j++;
      }
    }
    function ve() {
      {
        if (j--, j === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, O, {
              value: I
            }),
            info: F({}, O, {
              value: V
            }),
            warn: F({}, O, {
              value: Y
            }),
            error: F({}, O, {
              value: D
            }),
            group: F({}, O, {
              value: k
            }),
            groupCollapsed: F({}, O, {
              value: B
            }),
            groupEnd: F({}, O, {
              value: q
            })
          });
        }
        j < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var me = x.ReactCurrentDispatcher, re;
    function se(O, ie, be) {
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
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new he();
    }
    function U(O, ie) {
      if (!O || ue)
        return "";
      {
        var be = ne.get(O);
        if (be !== void 0)
          return be;
      }
      var Me;
      ue = !0;
      var Be = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Je;
      Je = me.current, me.current = null, te();
      try {
        if (ie) {
          var Ve = function() {
            throw Error();
          };
          if (Object.defineProperty(Ve.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ve, []);
            } catch (On) {
              Me = On;
            }
            Reflect.construct(O, [], Ve);
          } else {
            try {
              Ve.call();
            } catch (On) {
              Me = On;
            }
            O.call(Ve.prototype);
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
          for (var Le = On.stack.split(`
`), Tt = Me.stack.split(`
`), pt = Le.length - 1, ht = Tt.length - 1; pt >= 1 && ht >= 0 && Le[pt] !== Tt[ht]; )
            ht--;
          for (; pt >= 1 && ht >= 0; pt--, ht--)
            if (Le[pt] !== Tt[ht]) {
              if (pt !== 1 || ht !== 1)
                do
                  if (pt--, ht--, ht < 0 || Le[pt] !== Tt[ht]) {
                    var Yt = `
` + Le[pt].replace(" at new ", " at ");
                    return O.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", O.displayName)), typeof O == "function" && ne.set(O, Yt), Yt;
                  }
                while (pt >= 1 && ht >= 0);
              break;
            }
        }
      } finally {
        ue = !1, me.current = Je, ve(), Error.prepareStackTrace = Be;
      }
      var Qr = O ? O.displayName || O.name : "", Id = Qr ? se(Qr) : "";
      return typeof O == "function" && ne.set(O, Id), Id;
    }
    function ge(O, ie, be) {
      return U(O, !1);
    }
    function $e(O) {
      var ie = O.prototype;
      return !!(ie && ie.isReactComponent);
    }
    function Te(O, ie, be) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return U(O, $e(O));
      if (typeof O == "string")
        return se(O);
      switch (O) {
        case l:
          return se("Suspense");
        case u:
          return se("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case c:
            return ge(O.render);
          case d:
            return Te(O.type, ie, be);
          case p: {
            var Me = O, Be = Me._payload, Je = Me._init;
            try {
              return Te(Je(Be), ie, be);
            } catch {
            }
          }
        }
      return "";
    }
    var T = Object.prototype.hasOwnProperty, z = {}, J = x.ReactDebugCurrentFrame;
    function pe(O) {
      if (O) {
        var ie = O._owner, be = Te(O.type, O._source, ie ? ie.type : null);
        J.setExtraStackFrame(be);
      } else
        J.setExtraStackFrame(null);
    }
    function le(O, ie, be, Me, Be) {
      {
        var Je = Function.call.bind(T);
        for (var Ve in O)
          if (Je(O, Ve)) {
            var Le = void 0;
            try {
              if (typeof O[Ve] != "function") {
                var Tt = Error((Me || "React class") + ": " + be + " type `" + Ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[Ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tt.name = "Invariant Violation", Tt;
              }
              Le = O[Ve](ie, Ve, Me, be, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pt) {
              Le = pt;
            }
            Le && !(Le instanceof Error) && (pe(Be), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Me || "React class", be, Ve, typeof Le), pe(null)), Le instanceof Error && !(Le.message in z) && (z[Le.message] = !0, pe(Be), b("Failed %s type: %s", be, Le.message), pe(null));
          }
      }
    }
    var ae = Array.isArray;
    function _e(O) {
      return ae(O);
    }
    function He(O) {
      {
        var ie = typeof Symbol == "function" && Symbol.toStringTag, be = ie && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return be;
      }
    }
    function We(O) {
      try {
        return It(O), !1;
      } catch {
        return !0;
      }
    }
    function It(O) {
      return "" + O;
    }
    function qn(O) {
      if (We(O))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(O)), It(O);
    }
    var Lt = x.ReactCurrentOwner, Ne = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Ie, Ge;
    Ge = {};
    function tt(O) {
      if (T.call(O, "ref")) {
        var ie = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function nt(O) {
      if (T.call(O, "key")) {
        var ie = Object.getOwnPropertyDescriptor(O, "key").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function Pt(O, ie) {
      if (typeof O.ref == "string" && Lt.current && ie && Lt.current.stateNode !== ie) {
        var be = Z(Lt.current.type);
        Ge[be] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(Lt.current.type), O.ref), Ge[be] = !0);
      }
    }
    function $r(O, ie) {
      {
        var be = function() {
          Ee || (Ee = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        be.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: be,
          configurable: !0
        });
      }
    }
    function Wt(O, ie) {
      {
        var be = function() {
          Ie || (Ie = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        be.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: be,
          configurable: !0
        });
      }
    }
    var Xn = function(O, ie, be, Me, Be, Je, Ve) {
      var Le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: O,
        key: ie,
        ref: be,
        props: Ve,
        // Record the component responsible for creating this element.
        _owner: Je
      };
      return Le._store = {}, Object.defineProperty(Le._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Le, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Me
      }), Object.defineProperty(Le, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Be
      }), Object.freeze && (Object.freeze(Le.props), Object.freeze(Le)), Le;
    };
    function qr(O, ie, be, Me, Be) {
      {
        var Je, Ve = {}, Le = null, Tt = null;
        be !== void 0 && (qn(be), Le = "" + be), nt(ie) && (qn(ie.key), Le = "" + ie.key), tt(ie) && (Tt = ie.ref, Pt(ie, Be));
        for (Je in ie)
          T.call(ie, Je) && !Ne.hasOwnProperty(Je) && (Ve[Je] = ie[Je]);
        if (O && O.defaultProps) {
          var pt = O.defaultProps;
          for (Je in pt)
            Ve[Je] === void 0 && (Ve[Je] = pt[Je]);
        }
        if (Le || Tt) {
          var ht = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          Le && $r(Ve, ht), Tt && Wt(Ve, ht);
        }
        return Xn(O, Le, Tt, Be, Me, Lt.current, Ve);
      }
    }
    var Wo = x.ReactCurrentOwner, as = x.ReactDebugCurrentFrame;
    function Tn(O) {
      if (O) {
        var ie = O._owner, be = Te(O.type, O._source, ie ? ie.type : null);
        as.setExtraStackFrame(be);
      } else
        as.setExtraStackFrame(null);
    }
    var Xr;
    Xr = !1;
    function ic(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function Md() {
      {
        if (Wo.current) {
          var O = Z(Wo.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function d0(O) {
      {
        if (O !== void 0) {
          var ie = O.fileName.replace(/^.*[\\\/]/, ""), be = O.lineNumber;
          return `

Check your code at ` + ie + ":" + be + ".";
        }
        return "";
      }
    }
    var Dd = {};
    function f0(O) {
      {
        var ie = Md();
        if (!ie) {
          var be = typeof O == "string" ? O : O.displayName || O.name;
          be && (ie = `

Check the top-level render call using <` + be + ">.");
        }
        return ie;
      }
    }
    function Rd(O, ie) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var be = f0(ie);
        if (Dd[be])
          return;
        Dd[be] = !0;
        var Me = "";
        O && O._owner && O._owner !== Wo.current && (Me = " It was passed a child from " + Z(O._owner.type) + "."), Tn(O), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', be, Me), Tn(null);
      }
    }
    function jd(O, ie) {
      {
        if (typeof O != "object")
          return;
        if (_e(O))
          for (var be = 0; be < O.length; be++) {
            var Me = O[be];
            ic(Me) && Rd(Me, ie);
          }
        else if (ic(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var Be = g(O);
          if (typeof Be == "function" && Be !== O.entries)
            for (var Je = Be.call(O), Ve; !(Ve = Je.next()).done; )
              ic(Ve.value) && Rd(Ve.value, ie);
        }
      }
    }
    function p0(O) {
      {
        var ie = O.type;
        if (ie == null || typeof ie == "string")
          return;
        var be;
        if (typeof ie == "function")
          be = ie.propTypes;
        else if (typeof ie == "object" && (ie.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ie.$$typeof === d))
          be = ie.propTypes;
        else
          return;
        if (be) {
          var Me = Z(ie);
          le(be, O.props, "prop", Me, O);
        } else if (ie.PropTypes !== void 0 && !Xr) {
          Xr = !0;
          var Be = Z(ie);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Be || "Unknown");
        }
        typeof ie.getDefaultProps == "function" && !ie.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function m0(O) {
      {
        for (var ie = Object.keys(O.props), be = 0; be < ie.length; be++) {
          var Me = ie[be];
          if (Me !== "children" && Me !== "key") {
            Tn(O), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Me), Tn(null);
            break;
          }
        }
        O.ref !== null && (Tn(O), b("Invalid attribute `ref` supplied to `React.Fragment`."), Tn(null));
      }
    }
    function Ad(O, ie, be, Me, Be, Je) {
      {
        var Ve = K(O);
        if (!Ve) {
          var Le = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (Le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tt = d0(Be);
          Tt ? Le += Tt : Le += Md();
          var pt;
          O === null ? pt = "null" : _e(O) ? pt = "array" : O !== void 0 && O.$$typeof === t ? (pt = "<" + (Z(O.type) || "Unknown") + " />", Le = " Did you accidentally export a JSX literal instead of a component?") : pt = typeof O, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pt, Le);
        }
        var ht = qr(O, ie, be, Be, Je);
        if (ht == null)
          return ht;
        if (Ve) {
          var Yt = ie.children;
          if (Yt !== void 0)
            if (Me)
              if (_e(Yt)) {
                for (var Qr = 0; Qr < Yt.length; Qr++)
                  jd(Yt[Qr], O);
                Object.freeze && Object.freeze(Yt);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              jd(Yt, O);
        }
        return O === r ? m0(ht) : p0(ht), ht;
      }
    }
    function h0(O, ie, be) {
      return Ad(O, ie, be, !0);
    }
    function v0(O, ie, be) {
      return Ad(O, ie, be, !1);
    }
    var g0 = v0, b0 = h0;
    Yo.Fragment = r, Yo.jsx = g0, Yo.jsxs = b0;
  }()), Yo;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = C0() : e.exports = S0();
})(f);
function P() {
  return P = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, P.apply(this, arguments);
}
function E0(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ra(...e) {
  return (t) => e.forEach(
    (n) => E0(n, t)
  );
}
function Ce(...e) {
  return fe(Ra(...e), e);
}
const xn = /* @__PURE__ */ A((e, t) => {
  const { children: n, ...r } = e, o = Vt.toArray(n), a = o.find(N0);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Vt.count(s) > 1 ? Vt.only(null) : /* @__PURE__ */ sr(s) ? s.props.children : null : c);
    return /* @__PURE__ */ w(nl, P({}, r, {
      ref: t
    }), /* @__PURE__ */ sr(s) ? /* @__PURE__ */ So(s, void 0, i) : null);
  }
  return /* @__PURE__ */ w(nl, P({}, r, {
    ref: t
  }), n);
});
xn.displayName = "Slot";
const nl = /* @__PURE__ */ A((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ sr(n) ? /* @__PURE__ */ So(n, {
    ...P0(r, n.props),
    ref: t ? Ra(t, n.ref) : n.ref
  }) : Vt.count(n) > 1 ? Vt.only(null) : null;
});
nl.displayName = "SlotClone";
const ql = ({ children: e }) => /* @__PURE__ */ w(qt, null, e);
function N0(e) {
  return /* @__PURE__ */ sr(e) && e.type === ql;
}
function P0(e, t) {
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
function Hp(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Hp(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Yp() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Hp(e)) && (r && (r += " "), r += t);
  return r;
}
const Vd = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Ud = Yp, Eo = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return Ud(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], d = a == null ? void 0 : a[l];
    if (u === null)
      return null;
    const p = Vd(u) || Vd(d);
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
  return Ud(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function OD(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const kD = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, cc = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, MD = (e) => {
  const t = cc(e), n = cc(e, 0.1), r = cc(e, 0.3);
  return {
    colorOpacity1: t,
    colorOpacity2: n,
    colorOpacity3: r
  };
}, lc = {
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
}, DD = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), RD = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), jD = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), AD = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, Rs = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, ID = () => [...lc.DIGITAL, ...lc.MOVILNET, ...lc.MOVISTAR], Ko = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function T0() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Kp(t)) && (r && (r += " "), r += n);
  return r;
}
function Kp(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = Kp(e[r])) && (n && (n += " "), n += t);
  return n;
}
var Xl = "-";
function O0(e) {
  var t = M0(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function a(i) {
    var c = i.split(Xl);
    return c[0] === "" && c.length !== 1 && c.shift(), Gp(c, t) || k0(i);
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
function Gp(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? Gp(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var a = e.join(Xl);
    return (s = t.validators.find(function(i) {
      var c = i.validator;
      return c(a);
    })) == null ? void 0 : s.classGroupId;
  }
}
var zd = /^\[(.+)\]$/;
function k0(e) {
  if (zd.test(e)) {
    var t = zd.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function M0(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = R0(Object.entries(e.classGroups), n);
  return o.forEach(function(a) {
    var s = a[0], i = a[1];
    rl(i, r, s, t);
  }), r;
}
function rl(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var a = o === "" ? t : Wd(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (D0(o)) {
        rl(o(r), t, n, r);
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
      rl(c, Wd(t, i), n, r);
    });
  });
}
function Wd(e, t) {
  var n = e;
  return t.split(Xl).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function D0(e) {
  return e.isThemeGetter;
}
function R0(e, t) {
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
function j0(e) {
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
var Zp = "!";
function A0(e) {
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
    var m = i.length === 0 ? s : s.substring(l), h = m.startsWith(Zp), v = h ? m.substring(1) : m, g = u && u > l ? u - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
}
function I0(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function L0(e) {
  return {
    cache: j0(e.cacheSize),
    splitModifiers: A0(e),
    ...O0(e)
  };
}
var F0 = /\s+/;
function V0(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(F0).map(function(s) {
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
    var h = I0(c).join(":"), v = l ? h + Zp : h;
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
function U0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, a, s = i;
  function i(l) {
    var u = t[0], d = t.slice(1), p = d.reduce(function(m, h) {
      return h(m);
    }, u());
    return r = L0(p), o = r.cache.get, a = r.cache.set, s = c, c(l);
  }
  function c(l) {
    var u = o(l);
    if (u)
      return u;
    var d = V0(l, r);
    return a(l, d), d;
  }
  return function() {
    return s(T0.apply(null, arguments));
  };
}
function rt(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var qp = /^\[(?:([a-z-]+):)?(.+)\]$/i, z0 = /^\d+\/\d+$/, W0 = /* @__PURE__ */ new Set(["px", "full", "screen"]), B0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, H0 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Y0 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Jt(e) {
  return Er(e) || W0.has(e) || z0.test(e) || ol(e);
}
function ol(e) {
  return Ur(e, "length", Q0);
}
function K0(e) {
  return Ur(e, "size", Xp);
}
function G0(e) {
  return Ur(e, "position", Xp);
}
function Z0(e) {
  return Ur(e, "url", J0);
}
function ss(e) {
  return Ur(e, "number", Er);
}
function Er(e) {
  return !Number.isNaN(Number(e));
}
function q0(e) {
  return e.endsWith("%") && Er(e.slice(0, -1));
}
function Go(e) {
  return Bd(e) || Ur(e, "number", Bd);
}
function Fe(e) {
  return qp.test(e);
}
function Zo() {
  return !0;
}
function Qn(e) {
  return B0.test(e);
}
function X0(e) {
  return Ur(e, "", ey);
}
function Ur(e, t, n) {
  var r = qp.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function Q0(e) {
  return H0.test(e);
}
function Xp() {
  return !1;
}
function J0(e) {
  return e.startsWith("url(");
}
function Bd(e) {
  return Number.isInteger(Number(e));
}
function ey(e) {
  return Y0.test(e);
}
function ty() {
  var e = rt("colors"), t = rt("spacing"), n = rt("blur"), r = rt("brightness"), o = rt("borderColor"), a = rt("borderRadius"), s = rt("borderSpacing"), i = rt("borderWidth"), c = rt("contrast"), l = rt("grayscale"), u = rt("hueRotate"), d = rt("invert"), p = rt("gap"), m = rt("gradientColorStops"), h = rt("gradientColorStopPositions"), v = rt("inset"), g = rt("margin"), x = rt("opacity"), b = rt("padding"), y = rt("saturate"), _ = rt("scale"), $ = rt("sepia"), E = rt("skew"), N = rt("space"), M = rt("translate"), R = function() {
    return ["auto", "contain", "none"];
  }, K = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, G = function() {
    return ["auto", Fe, t];
  }, W = function() {
    return [Fe, t];
  }, Z = function() {
    return ["", Jt];
  }, F = function() {
    return ["auto", Er, Fe];
  }, j = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, I = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, V = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, Y = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, D = function() {
    return ["", "0", Fe];
  }, k = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, B = function() {
    return [Er, ss];
  }, q = function() {
    return [Er, Fe];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Zo],
      spacing: [Jt],
      blur: ["none", "", Qn, Fe],
      brightness: B(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Qn, Fe],
      borderSpacing: W(),
      borderWidth: Z(),
      contrast: B(),
      grayscale: D(),
      hueRotate: q(),
      invert: D(),
      gap: W(),
      gradientColorStops: [e],
      gradientColorStopPositions: [q0, ol],
      inset: G(),
      margin: G(),
      opacity: B(),
      padding: W(),
      saturate: B(),
      scale: B(),
      sepia: D(),
      skew: q(),
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
        aspect: ["auto", "square", "video", Fe]
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
        columns: [Qn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": k()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": k()
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
        object: [].concat(j(), [Fe])
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
        z: ["auto", Go]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: G()
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
        flex: ["1", "auto", "initial", "none", Fe]
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
        order: ["first", "last", "none", Go]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Zo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Go]
        }, Fe]
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
        "grid-rows": [Zo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Go]
        }, Fe]
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
        "auto-cols": ["auto", "min", "max", "fr", Fe]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Fe]
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
        "space-x": [N]
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
        "space-y": [N]
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
        w: ["auto", "min", "max", "fit", Fe, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", Fe, Jt]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Qn]
        }, Qn, Fe]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Fe, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", Fe, Jt]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Fe, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Qn, ol]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ss]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Zo]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Fe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Er, ss]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Fe, Jt]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Fe]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Fe]
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
        decoration: [].concat(I(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Jt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Fe, Jt]
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
        indent: W()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Fe]
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
        content: ["none", Fe]
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
        bg: [].concat(j(), [G0])
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
        bg: ["auto", "cover", "contain", K0]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Z0]
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
        "border-opacity": [x]
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
        "divide-opacity": [x]
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
        "outline-offset": [Fe, Jt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Jt]
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
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Jt]
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
        shadow: ["", "inner", "none", Qn, X0]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Zo]
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
        "drop-shadow": ["", "none", Qn, Fe]
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
        sepia: [$]
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
        "backdrop-sepia": [$]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Fe]
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
        ease: ["linear", "in", "out", "in-out", Fe]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", Fe]
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
        rotate: [Go, Fe]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Fe]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Fe]
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
        "will-change": ["auto", "scroll", "contents", "transform", Fe]
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
        stroke: [Jt, ss]
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
var ny = /* @__PURE__ */ U0(ty);
function L(...e) {
  return ny(Yp(e));
}
const Ql = ({ className: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: L(`spinner h-4 w-4 ${e}`) }), aa = Eo(
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
), Ue = C.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, isLoading: o, children: a, ...s }, i) => {
    const c = r ? xn : "button";
    return /* @__PURE__ */ f.exports.jsx(
      c,
      {
        className: L(aa({ variant: t, size: n, className: e })),
        ref: i,
        ...s,
        children: o ? /* @__PURE__ */ f.exports.jsx(Ql, {}) : a
      }
    );
  }
);
Ue.displayName = "Button";
var ry = {
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
const oy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ay = (e, t) => {
  const n = A(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: s, children: i, ...c }, l) => w(
      "svg",
      {
        ref: l,
        ...ry,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(a) * 24 / Number(o) : a,
        className: `lucide lucide-${oy(e)}`,
        ...c
      },
      [
        ...t.map(([u, d]) => w(u, d)),
        ...(Array.isArray(i) ? i : [i]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
var ft = ay;
const sy = ft("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]), iy = ft("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]), ln = ft("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), sa = ft("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), Jl = ft("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), No = ft("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), Hd = ft("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), al = ft("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), bi = ft("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), is = ft("EyeOff", [
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
]), cs = ft("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]), xi = ft("ImageOff", [
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
]), Qp = ft("ImagePlus", [
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
]), Jp = ft("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]), cy = ft("PanelLeftClose", [
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
]), ly = ft("PanelLeftOpen", [
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
]), em = ft("PanelLeft", [
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
]), tm = ft("PenSquare", [
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
]), js = ft("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), nm = ft("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]), uy = ft("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), yi = ft("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function uc(e) {
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
function Xo(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    var s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? fy(i, function(d) {
      return d.test(s);
    }) : dy(i, function(d) {
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
function dy(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function fy(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function py(e) {
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
function mo(e) {
  return mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mo(e);
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
  return e instanceof Date || mo(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Zt(e, t) {
  Pe(2, arguments);
  var n = Ae(e), r = xt(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function yn(e, t) {
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
function my(e, t) {
  Pe(2, arguments);
  var n = Ae(e).getTime(), r = xt(t);
  return new Date(n + r);
}
var hy = {};
function vr() {
  return hy;
}
function wn(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = vr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Ae(e), m = p.getDay(), h = (m < d ? 7 : 0) + m - d;
  return p.setDate(p.getDate() - h), p.setHours(0, 0, 0, 0), p;
}
function kr(e) {
  return Pe(1, arguments), wn(e, {
    weekStartsOn: 1
  });
}
function vy(e) {
  Pe(1, arguments);
  var t = Ae(e), n = t.getFullYear(), r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = kr(r), a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var s = kr(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function gy(e) {
  Pe(1, arguments);
  var t = vy(e), n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = kr(n);
  return r;
}
function ia(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function ho(e) {
  Pe(1, arguments);
  var t = Ae(e);
  return t.setHours(0, 0, 0, 0), t;
}
var by = 864e5;
function jn(e, t) {
  Pe(2, arguments);
  var n = ho(e), r = ho(t), o = n.getTime() - ia(n), a = r.getTime() - ia(r);
  return Math.round((o - a) / by);
}
function sl(e, t) {
  Pe(2, arguments);
  var n = xt(t), r = n * 7;
  return Zt(e, r);
}
function xy(e, t) {
  Pe(2, arguments);
  var n = xt(t);
  return yn(e, n * 12);
}
function yy(e) {
  Pe(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (mo(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = Ae(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || new Date(NaN);
}
function wy(e) {
  Pe(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (mo(e) === "object" && e !== null)
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
  var n = ho(e), r = ho(t);
  return n.getTime() === r.getTime();
}
function eu(e) {
  return Pe(1, arguments), e instanceof Date || mo(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function $y(e) {
  if (Pe(1, arguments), !eu(e) && typeof e != "number")
    return !1;
  var t = Ae(e);
  return !isNaN(Number(t));
}
function ca(e, t) {
  Pe(2, arguments);
  var n = Ae(e), r = Ae(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
var _y = 6048e5;
function Cy(e, t, n) {
  Pe(2, arguments);
  var r = wn(e, n), o = wn(t, n), a = r.getTime() - ia(r), s = o.getTime() - ia(o);
  return Math.round((a - s) / _y);
}
function tu(e) {
  Pe(1, arguments);
  var t = Ae(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Ut(e) {
  Pe(1, arguments);
  var t = Ae(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Sy(e) {
  Pe(1, arguments);
  var t = Ae(e), n = new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function nu(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = vr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Ae(e), m = p.getDay(), h = (m < d ? -7 : 0) + 6 - (m - d);
  return p.setDate(p.getDate() + h), p.setHours(23, 59, 59, 999), p;
}
function rm(e) {
  return Pe(1, arguments), nu(e, {
    weekStartsOn: 1
  });
}
function Ey(e, t) {
  Pe(2, arguments);
  var n = xt(t);
  return my(e, -n);
}
var Ny = 864e5;
function Py(e) {
  Pe(1, arguments);
  var t = Ae(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / Ny) + 1;
}
function As(e) {
  Pe(1, arguments);
  var t = 1, n = Ae(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function om(e) {
  Pe(1, arguments);
  var t = Ae(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = As(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = As(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Ty(e) {
  Pe(1, arguments);
  var t = om(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = As(n);
  return r;
}
var Oy = 6048e5;
function ky(e) {
  Pe(1, arguments);
  var t = Ae(e), n = As(t).getTime() - Ty(t).getTime();
  return Math.round(n / Oy) + 1;
}
function Is(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = vr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Ae(e), m = p.getUTCDay(), h = (m < d ? 7 : 0) + m - d;
  return p.setUTCDate(p.getUTCDate() - h), p.setUTCHours(0, 0, 0, 0), p;
}
function am(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = Ae(e), d = u.getUTCFullYear(), p = vr(), m = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setUTCFullYear(d + 1, 0, m), h.setUTCHours(0, 0, 0, 0);
  var v = Is(h, t), g = new Date(0);
  g.setUTCFullYear(d, 0, m), g.setUTCHours(0, 0, 0, 0);
  var x = Is(g, t);
  return u.getTime() >= v.getTime() ? d + 1 : u.getTime() >= x.getTime() ? d : d - 1;
}
function My(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = vr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = am(e, t), m = new Date(0);
  m.setUTCFullYear(p, 0, d), m.setUTCHours(0, 0, 0, 0);
  var h = Is(m, t);
  return h;
}
var Dy = 6048e5;
function Ry(e, t) {
  Pe(1, arguments);
  var n = Ae(e), r = Is(n, t).getTime() - My(n, t).getTime();
  return Math.round(r / Dy) + 1;
}
function Ze(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var jy = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return Ze(n === "yy" ? o % 100 : o, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : Ze(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return Ze(t.getUTCDate(), n.length);
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
    return Ze(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return Ze(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return Ze(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return Ze(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, o = t.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, r - 3));
    return Ze(a, n.length);
  }
};
const Jn = jy;
var Jr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ay = {
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
    return Jn.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, o) {
    var a = am(t, o), s = a > 0 ? a : 1 - a;
    if (n === "YY") {
      var i = s % 100;
      return Ze(i, 2);
    }
    return n === "Yo" ? r.ordinalNumber(s, {
      unit: "year"
    }) : Ze(s, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = om(t);
    return Ze(r, n.length);
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
    return Ze(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(o);
      case "QQ":
        return Ze(o, 2);
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
        return Ze(o, 2);
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
        return Jn.M(t, n);
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
        return Ze(o + 1, 2);
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
    var a = Ry(t, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : Ze(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var o = ky(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : Ze(o, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Jn.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var o = Py(t);
    return n === "Do" ? r.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : Ze(o, n.length);
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
        return Ze(s, 2);
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
        return Ze(s, n.length);
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
        return Ze(a, n.length);
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
    switch (o === 12 ? a = Jr.noon : o === 0 ? a = Jr.midnight : a = o / 12 >= 1 ? "pm" : "am", n) {
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
    switch (o >= 17 ? a = Jr.evening : o >= 12 ? a = Jr.afternoon : o >= 4 ? a = Jr.morning : a = Jr.night, n) {
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
    return Jn.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Jn.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, r) {
    var o = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : Ze(o, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var o = t.getUTCHours();
    return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : Ze(o, n.length);
  },
  // Minute
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : Jn.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Jn.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return Jn.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (n) {
      case "X":
        return Kd(s);
      case "XXXX":
      case "XX":
        return Cr(s);
      case "XXXXX":
      case "XXX":
      default:
        return Cr(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return Kd(s);
      case "xxxx":
      case "xx":
        return Cr(s);
      case "xxxxx":
      case "xxx":
      default:
        return Cr(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Yd(s, ":");
      case "OOOO":
      default:
        return "GMT" + Cr(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Yd(s, ":");
      case "zzzz":
      default:
        return "GMT" + Cr(s, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, o) {
    var a = o._originalDate || t, s = Math.floor(a.getTime() / 1e3);
    return Ze(s, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTime();
    return Ze(s, n.length);
  }
};
function Yd(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var s = t || "";
  return n + String(o) + s + Ze(a, 2);
}
function Kd(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + Ze(Math.abs(e) / 60, 2);
  }
  return Cr(e, t);
}
function Cr(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", o = Math.abs(e), a = Ze(Math.floor(o / 60), 2), s = Ze(o % 60, 2);
  return r + a + n + s;
}
const Iy = Ay;
var Gd = function(t, n) {
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
}, sm = function(t, n) {
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
}, Ly = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return Gd(t, n);
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
  return s.replace("{{date}}", Gd(o, n)).replace("{{time}}", sm(a, n));
}, Fy = {
  p: sm,
  P: Ly
};
const Vy = Fy;
var Uy = ["D", "DD"], zy = ["YY", "YYYY"];
function Wy(e) {
  return Uy.indexOf(e) !== -1;
}
function By(e) {
  return zy.indexOf(e) !== -1;
}
function Zd(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Hy = {
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
}, Yy = function(t, n, r) {
  var o, a = Hy[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const Ky = Yy;
var Gy = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Zy = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, qy = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Xy = {
  date: uc({
    formats: Gy,
    defaultWidth: "full"
  }),
  time: uc({
    formats: Zy,
    defaultWidth: "full"
  }),
  dateTime: uc({
    formats: qy,
    defaultWidth: "full"
  })
};
const Qy = Xy;
var Jy = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, e1 = function(t, n, r, o) {
  return Jy[t];
};
const t1 = e1;
var n1 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, r1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, o1 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, a1 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, s1 = {
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
}, i1 = {
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
}, c1 = function(t, n) {
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
}, l1 = {
  ordinalNumber: c1,
  era: qo({
    values: n1,
    defaultWidth: "wide"
  }),
  quarter: qo({
    values: r1,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: qo({
    values: o1,
    defaultWidth: "wide"
  }),
  day: qo({
    values: a1,
    defaultWidth: "wide"
  }),
  dayPeriod: qo({
    values: s1,
    defaultWidth: "wide",
    formattingValues: i1,
    defaultFormattingWidth: "wide"
  })
};
const u1 = l1;
var d1 = /^(\d+)(th|st|nd|rd)?/i, f1 = /\d+/i, p1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, m1 = {
  any: [/^b/i, /^(a|c)/i]
}, h1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, v1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, g1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, b1 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, x1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, y1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, w1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, $1 = {
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
}, _1 = {
  ordinalNumber: py({
    matchPattern: d1,
    parsePattern: f1,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Xo({
    matchPatterns: p1,
    defaultMatchWidth: "wide",
    parsePatterns: m1,
    defaultParseWidth: "any"
  }),
  quarter: Xo({
    matchPatterns: h1,
    defaultMatchWidth: "wide",
    parsePatterns: v1,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Xo({
    matchPatterns: g1,
    defaultMatchWidth: "wide",
    parsePatterns: b1,
    defaultParseWidth: "any"
  }),
  day: Xo({
    matchPatterns: x1,
    defaultMatchWidth: "wide",
    parsePatterns: y1,
    defaultParseWidth: "any"
  }),
  dayPeriod: Xo({
    matchPatterns: w1,
    defaultMatchWidth: "any",
    parsePatterns: $1,
    defaultParseWidth: "any"
  })
};
const C1 = _1;
var S1 = {
  code: "en-US",
  formatDistance: Ky,
  formatLong: Qy,
  formatRelative: t1,
  localize: u1,
  match: C1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const im = S1;
var E1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, N1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, P1 = /^'([^]*?)'?$/, T1 = /''/g, O1 = /[a-zA-Z]/;
function zr(e, t, n) {
  var r, o, a, s, i, c, l, u, d, p, m, h, v, g, x, b, y, _;
  Pe(2, arguments);
  var $ = String(t), E = vr(), N = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : E.locale) !== null && r !== void 0 ? r : im, M = xt((a = (s = (i = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && i !== void 0 ? i : E.firstWeekContainsDate) !== null && s !== void 0 ? s : (d = E.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(M >= 1 && M <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var R = xt((m = (h = (v = (g = n == null ? void 0 : n.weekStartsOn) !== null && g !== void 0 ? g : n == null || (x = n.locale) === null || x === void 0 || (b = x.options) === null || b === void 0 ? void 0 : b.weekStartsOn) !== null && v !== void 0 ? v : E.weekStartsOn) !== null && h !== void 0 ? h : (y = E.locale) === null || y === void 0 || (_ = y.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(R >= 0 && R <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!N.localize)
    throw new RangeError("locale must contain localize property");
  if (!N.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var K = Ae(e);
  if (!$y(K))
    throw new RangeError("Invalid time value");
  var G = ia(K), W = Ey(K, G), Z = {
    firstWeekContainsDate: M,
    weekStartsOn: R,
    locale: N,
    _originalDate: K
  }, F = $.match(N1).map(function(j) {
    var I = j[0];
    if (I === "p" || I === "P") {
      var V = Vy[I];
      return V(j, N.formatLong);
    }
    return j;
  }).join("").match(E1).map(function(j) {
    if (j === "''")
      return "'";
    var I = j[0];
    if (I === "'")
      return k1(j);
    var V = Iy[I];
    if (V)
      return !(n != null && n.useAdditionalWeekYearTokens) && By(j) && Zd(j, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && Wy(j) && Zd(j, t, String(e)), V(W, j, N.localize, Z);
    if (I.match(O1))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + I + "`");
    return j;
  }).join("");
  return F;
}
function k1(e) {
  var t = e.match(P1);
  return t ? t[1].replace(T1, "'") : e;
}
function M1(e) {
  Pe(1, arguments);
  var t = Ae(e), n = t.getFullYear(), r = t.getMonth(), o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var D1 = 6048e5;
function R1(e) {
  Pe(1, arguments);
  var t = Ae(e), n = kr(t).getTime() - gy(t).getTime();
  return Math.round(n / D1) + 1;
}
function j1(e) {
  Pe(1, arguments);
  var t = Ae(e), n = t.getTime();
  return n;
}
function A1(e) {
  return Pe(1, arguments), Math.floor(j1(e) / 1e3);
}
function I1(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = Ae(e), d = u.getFullYear(), p = vr(), m = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setFullYear(d + 1, 0, m), h.setHours(0, 0, 0, 0);
  var v = wn(h, t), g = new Date(0);
  g.setFullYear(d, 0, m), g.setHours(0, 0, 0, 0);
  var x = wn(g, t);
  return u.getTime() >= v.getTime() ? d + 1 : u.getTime() >= x.getTime() ? d : d - 1;
}
function L1(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = vr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = I1(e, t), m = new Date(0);
  m.setFullYear(p, 0, d), m.setHours(0, 0, 0, 0);
  var h = wn(m, t);
  return h;
}
var F1 = 6048e5;
function V1(e, t) {
  Pe(1, arguments);
  var n = Ae(e), r = wn(n, t).getTime() - L1(n, t).getTime();
  return Math.round(r / F1) + 1;
}
function U1(e) {
  Pe(1, arguments);
  var t = Ae(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function z1(e, t) {
  return Pe(1, arguments), Cy(U1(e), Ut(e), t) + 1;
}
function cm(e, t) {
  Pe(2, arguments);
  var n = Ae(e), r = Ae(t);
  return n.getTime() > r.getTime();
}
function lm(e, t) {
  Pe(2, arguments);
  var n = Ae(e), r = Ae(t);
  return n.getTime() < r.getTime();
}
function ru(e, t) {
  Pe(2, arguments);
  var n = Ae(e), r = Ae(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function W1(e, t) {
  Pe(2, arguments);
  var n = Ae(e), r = Ae(t);
  return n.getFullYear() === r.getFullYear();
}
function qd(e, t) {
  Pe(2, arguments);
  var n = xt(t);
  return Zt(e, -n);
}
function dc(e, t) {
  Pe(2, arguments);
  var n = Ae(e), r = xt(t), o = n.getFullYear(), a = n.getDate(), s = new Date(0);
  s.setFullYear(o, r, 15), s.setHours(0, 0, 0, 0);
  var i = M1(s);
  return n.setMonth(r, Math.min(a, i)), n;
}
function Xd(e, t) {
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
function B1(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function um(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function ja(e) {
  return e.mode === "multiple";
}
function Aa(e) {
  return e.mode === "range";
}
function wi(e) {
  return e.mode === "single";
}
var H1 = {
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
function Y1(e, t) {
  return zr(e, "LLLL y", t);
}
function K1(e, t) {
  return zr(e, "d", t);
}
function G1(e, t) {
  return zr(e, "LLLL", t);
}
function Z1(e) {
  return "".concat(e);
}
function q1(e, t) {
  return zr(e, "cccccc", t);
}
function X1(e, t) {
  return zr(e, "yyyy", t);
}
var Q1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: Y1,
  formatDay: K1,
  formatMonthCaption: G1,
  formatWeekNumber: Z1,
  formatWeekdayName: q1,
  formatYearCaption: X1
}), J1 = function(e, t, n) {
  return zr(e, "do MMMM (EEEE)", n);
}, ew = function() {
  return "Month: ";
}, tw = function() {
  return "Go to next month";
}, nw = function() {
  return "Go to previous month";
}, rw = function(e, t) {
  return zr(e, "cccc", t);
}, ow = function(e) {
  return "Week n. ".concat(e);
}, aw = function() {
  return "Year: ";
}, sw = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: J1,
  labelMonthDropdown: ew,
  labelNext: tw,
  labelPrevious: nw,
  labelWeekNumber: ow,
  labelWeekday: rw,
  labelYearDropdown: aw
});
function iw() {
  var e = "buttons", t = H1, n = im, r = {}, o = {}, a = 1, s = {}, i = new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: Q1,
    labels: sw,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function cw(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = Ut(r) : t && (a = new Date(t, 0, 1)), o ? s = tu(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? ho(a) : void 0,
    toDate: s ? ho(s) : void 0
  };
}
var dm = bt(void 0);
function lw(e) {
  var t, n = e.initialProps, r = iw(), o = cw(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (wi(n) || ja(n) || Aa(n)) && (c = n.onSelect);
  var l = Oe(Oe(Oe({}, r), n), { captionLayout: i, classNames: Oe(Oe({}, r.classNames), n.classNames), components: Oe({}, n.components), formatters: Oe(Oe({}, r.formatters), n.formatters), fromDate: a, labels: Oe(Oe({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: Oe(Oe({}, r.modifiers), n.modifiers), modifiersClassNames: Oe(Oe({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: Oe(Oe({}, r.styles), n.styles), toDate: s });
  return S.createElement(dm.Provider, { value: l }, e.children);
}
function ot() {
  var e = Qe(dm);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function fm(e) {
  var t = ot(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return S.createElement("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id }, a(e.displayMonth, { locale: n }));
}
function uw(e) {
  return S.createElement(
    "svg",
    Oe({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e),
    S.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function pm(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, l = ot(), u = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : uw;
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
function dw(e) {
  var t, n = ot(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return S.createElement(S.Fragment, null);
  if (!o)
    return S.createElement(S.Fragment, null);
  var d = [];
  if (W1(r, o))
    for (var p = Ut(r), m = r.getMonth(); m <= o.getMonth(); m++)
      d.push(dc(p, m));
  else
    for (var p = Ut(new Date()), m = 0; m <= 11; m++)
      d.push(dc(p, m));
  var h = function(g) {
    var x = Number(g.target.value), b = dc(Ut(e.displayMonth), x);
    e.onChange(b);
  }, v = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : pm;
  return S.createElement(v, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }) }, d.map(function(g) {
    return S.createElement("option", { key: g.getMonth(), value: g.getMonth() }, i(g, { locale: s }));
  }));
}
function fw(e) {
  var t, n = e.displayMonth, r = ot(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, l = r.components, u = r.formatters.formatYearCaption, d = r.labels.labelYearDropdown, p = [];
  if (!o)
    return S.createElement(S.Fragment, null);
  if (!a)
    return S.createElement(S.Fragment, null);
  for (var m = o.getFullYear(), h = a.getFullYear(), v = m; v <= h; v++)
    p.push(Xd(Sy(new Date()), v));
  var g = function(b) {
    var y = Xd(Ut(n), Number(b.target.value));
    e.onChange(y);
  }, x = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : pm;
  return S.createElement(x, { name: "years", "aria-label": d(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: u(n, { locale: s }) }, p.map(function(b) {
    return S.createElement("option", { key: b.getFullYear(), value: b.getFullYear() }, u(b, { locale: s }));
  }));
}
function pw(e, t) {
  var n = X(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function mw(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && ca(a, o) < 0) {
    var l = -1 * (c - 1);
    o = yn(a, l);
  }
  return s && ca(o, s) < 0 && (o = s), Ut(o);
}
function hw() {
  var e = ot(), t = mw(e), n = pw(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = Ut(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function vw(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Ut(e), a = Ut(yn(o, r)), s = ca(a, o), i = [], c = 0; c < s; c++) {
    var l = yn(o, c);
    i.push(l);
  }
  return n && (i = i.reverse()), i;
}
function gw(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Ut(e);
    if (!n)
      return yn(i, s);
    var c = ca(n, e);
    if (!(c < a))
      return yn(i, s);
  }
}
function bw(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Ut(e);
    if (!n)
      return yn(i, -s);
    var c = ca(i, n);
    if (!(c <= 0))
      return yn(i, -s);
  }
}
var mm = bt(void 0);
function xw(e) {
  var t = ot(), n = hw(), r = n[0], o = n[1], a = vw(r, t), s = gw(r, t), i = bw(r, t), c = function(d) {
    return a.some(function(p) {
      return ru(d, p);
    });
  }, l = function(d, p) {
    c(d) || (p && lm(d, p) ? o(yn(d, 1 + t.numberOfMonths * -1)) : o(d));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return S.createElement(mm.Provider, { value: u }, e.children);
}
function Ia() {
  var e = Qe(mm);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Qd(e) {
  var t, n = ot(), r = n.classNames, o = n.styles, a = n.components, s = Ia().goToMonth, i = function(u) {
    s(u);
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : fm, l = S.createElement(c, { id: e.id, displayMonth: e.displayMonth });
  return S.createElement(
    "div",
    { className: r.caption_dropdowns, style: o.caption_dropdowns },
    S.createElement("div", { className: r.vhidden }, l),
    S.createElement(dw, { onChange: i, displayMonth: e.displayMonth }),
    S.createElement(fw, { onChange: i, displayMonth: e.displayMonth })
  );
}
function yw(e) {
  return S.createElement(
    "svg",
    Oe({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    S.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function ww(e) {
  return S.createElement(
    "svg",
    Oe({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    S.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })
  );
}
var Ls = A(function(e, t) {
  var n = ot(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = Oe(Oe({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), S.createElement("button", Oe({}, e, { ref: t, type: "button", className: s, style: i }));
});
function $w(e) {
  var t, n, r = ot(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, l = c.labelPrevious, u = c.labelNext, d = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return S.createElement(S.Fragment, null);
  var p = l(e.previousMonth, { locale: a }), m = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), h = u(e.nextMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = d == null ? void 0 : d.IconRight) !== null && t !== void 0 ? t : ww, x = (n = d == null ? void 0 : d.IconLeft) !== null && n !== void 0 ? n : yw;
  return S.createElement(
    "div",
    { className: s.nav, style: i.nav },
    !e.hidePrevious && S.createElement(Ls, { name: "previous-month", "aria-label": p, className: m, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick }, o === "rtl" ? S.createElement(g, { className: s.nav_icon, style: i.nav_icon }) : S.createElement(x, { className: s.nav_icon, style: i.nav_icon })),
    !e.hideNext && S.createElement(Ls, { name: "next-month", "aria-label": h, className: v, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick }, o === "rtl" ? S.createElement(x, { className: s.nav_icon, style: i.nav_icon }) : S.createElement(g, { className: s.nav_icon, style: i.nav_icon }))
  );
}
function Jd(e) {
  var t = ot().numberOfMonths, n = Ia(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(h) {
    return ru(e.displayMonth, h);
  }), c = i === 0, l = i === s.length - 1, u = t > 1 && (c || !l), d = t > 1 && (l || !c), p = function() {
    r && a(r);
  }, m = function() {
    o && a(o);
  };
  return S.createElement($w, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: d, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: m });
}
function _w(e) {
  var t, n = ot(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : fm, l;
  return o ? l = S.createElement(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? l = S.createElement(Qd, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? l = S.createElement(
    S.Fragment,
    null,
    S.createElement(Qd, { displayMonth: e.displayMonth, id: e.id }),
    S.createElement(Jd, { displayMonth: e.displayMonth, id: e.id })
  ) : l = S.createElement(
    S.Fragment,
    null,
    S.createElement(c, { id: e.id, displayMonth: e.displayMonth }),
    S.createElement(Jd, { displayMonth: e.displayMonth, id: e.id })
  ), S.createElement("div", { className: r.caption, style: a.caption }, l);
}
function Cw(e) {
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
function Sw(e, t, n) {
  for (var r = n ? kr(new Date()) : wn(new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = Zt(r, a);
    o.push(s);
  }
  return o;
}
function Ew() {
  var e = ot(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = Sw(o, a, s);
  return S.createElement(
    "tr",
    { style: n.head_row, className: t.head_row },
    r && S.createElement("td", { style: n.head_cell, className: t.head_cell }),
    l.map(function(u, d) {
      return S.createElement("th", { key: d, scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(u, { locale: o }) }, i(u, { locale: o }));
    })
  );
}
function Nw() {
  var e, t = ot(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : Ew;
  return S.createElement(
    "thead",
    { style: r.head, className: n.head },
    S.createElement(a, null)
  );
}
function Pw(e) {
  var t = ot(), n = t.locale, r = t.formatters.formatDay;
  return S.createElement(S.Fragment, null, r(e.date, { locale: n }));
}
var ou = bt(void 0);
function Tw(e) {
  if (!ja(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return S.createElement(ou.Provider, { value: t }, e.children);
  }
  return S.createElement(Ow, { initialProps: e.initialProps, children: e.children });
}
function Ow(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, u, d) {
    var p, m;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, l, u, d);
    var h = Boolean(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!h) {
      var v = Boolean(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var g = r ? um([], r, !0) : [];
        if (u.selected) {
          var x = g.findIndex(function(b) {
            return Ft(l, b);
          });
          g.splice(x, 1);
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
  return S.createElement(ou.Provider, { value: c }, n);
}
function au() {
  var e = Qe(ou);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function kw(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  if (!r)
    return { from: e, to: void 0 };
  if (!o && Ft(r, e))
    return { from: r, to: e };
  if (!o && lm(e, r))
    return { from: e, to: r };
  if (!o)
    return { from: r, to: e };
  if (!(Ft(o, e) && Ft(r, e))) {
    if (Ft(o, e))
      return { from: o, to: void 0 };
    if (!Ft(r, e))
      return cm(r, e) ? { from: e, to: o } : { from: r, to: e };
  }
}
var su = bt(void 0);
function Mw(e) {
  if (!Aa(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return S.createElement(su.Provider, { value: t }, e.children);
  }
  return S.createElement(Dw, { initialProps: e.initialProps, children: e.children });
}
function Dw(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, l = function(m, h, v) {
    var g, x;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, m, h, v);
    var b = kw(m, r);
    (x = t.onSelect) === null || x === void 0 || x.call(t, b, m, h, v);
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
    after: qd(a, i - 1),
    before: Zt(a, i - 1)
  }), a && s && u.disabled.push({
    after: a,
    before: Zt(a, i - 1)
  })), c && (a && !s && (u.disabled.push({
    before: Zt(a, -c + 1)
  }), u.disabled.push({
    after: Zt(a, c - 1)
  })), a && s)) {
    var d = jn(s, a) + 1, p = c - d;
    u.disabled.push({
      before: qd(a, p)
    }), u.disabled.push({
      after: Zt(s, p)
    });
  }
  return S.createElement(su.Provider, { value: { selected: r, onDayClick: l, modifiers: u } }, n);
}
function iu() {
  var e = Qe(su);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Es(e) {
  return Array.isArray(e) ? um([], e, !0) : e !== void 0 ? [e] : [];
}
function Rw(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = Es(o);
  }), t;
}
var un;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(un || (un = {}));
var jw = un.Selected, kn = un.Disabled, Aw = un.Hidden, Iw = un.Today, fc = un.RangeEnd, pc = un.RangeMiddle, mc = un.RangeStart, Lw = un.Outside;
function Fw(e, t, n) {
  var r, o = (r = {}, r[jw] = Es(e.selected), r[kn] = Es(e.disabled), r[Aw] = Es(e.hidden), r[Iw] = [e.today], r[fc] = [], r[pc] = [], r[mc] = [], r[Lw] = [], r);
  return e.fromDate && o[kn].push({ before: e.fromDate }), e.toDate && o[kn].push({ after: e.toDate }), ja(e) ? o[kn] = o[kn].concat(t.modifiers[kn]) : Aa(e) && (o[kn] = o[kn].concat(n.modifiers[kn]), o[mc] = n.modifiers[mc], o[pc] = n.modifiers[pc], o[fc] = n.modifiers[fc]), o;
}
var hm = bt(void 0);
function Vw(e) {
  var t = ot(), n = au(), r = iu(), o = Fw(t, n, r), a = Rw(t.modifiers), s = Oe(Oe({}, o), a);
  return S.createElement(hm.Provider, { value: s }, e.children);
}
function vm() {
  var e = Qe(hm);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function Uw(e) {
  return Boolean(e && typeof e == "object" && "before" in e && "after" in e);
}
function zw(e) {
  return Boolean(e && typeof e == "object" && "from" in e);
}
function Ww(e) {
  return Boolean(e && typeof e == "object" && "after" in e);
}
function Bw(e) {
  return Boolean(e && typeof e == "object" && "before" in e);
}
function Hw(e) {
  return Boolean(e && typeof e == "object" && "dayOfWeek" in e);
}
function Yw(e, t) {
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
function Kw(e) {
  return eu(e);
}
function Gw(e) {
  return Array.isArray(e) && e.every(eu);
}
function Zw(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (Kw(n))
      return Ft(e, n);
    if (Gw(n))
      return n.includes(e);
    if (zw(n))
      return Yw(e, n);
    if (Hw(n))
      return n.dayOfWeek.includes(e.getDay());
    if (Uw(n)) {
      var r = jn(n.before, e), o = jn(n.after, e), a = r > 0, s = o < 0, i = cm(n.before, n.after);
      return i ? s && a : a || s;
    }
    return Ww(n) ? jn(e, n.after) > 0 : Bw(n) ? jn(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function cu(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return Zw(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !ru(e, n) && (o.outside = !0), o;
}
function qw(e, t) {
  for (var n = Ut(e[0]), r = tu(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = cu(s, t), c = !i.disabled && !i.hidden;
    if (!c) {
      s = Zt(s, 1);
      continue;
    }
    if (i.selected)
      return s;
    i.today && !a && (a = s), o || (o = s), s = Zt(s, 1);
  }
  return a || o;
}
var Xw = 365;
function gm(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, l = o.fromDate, u = o.toDate, d = o.locale, p = {
    day: Zt,
    week: sl,
    month: yn,
    year: xy,
    startOfWeek: function(g) {
      return o.ISOWeek ? kr(g) : wn(g, { locale: d, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? rm(g) : nu(g, { locale: d, weekStartsOn: c });
    }
  }, m = p[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? m = yy([l, m]) : r === "after" && u && (m = wy([u, m]));
  var h = !0;
  if (a) {
    var v = cu(m, a);
    h = !v.disabled && !v.hidden;
  }
  return h ? m : i.count > Xw ? i.lastFocused : gm(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: Oe(Oe({}, i), { count: i.count + 1 })
  });
}
var bm = bt(void 0);
function Qw(e) {
  var t = Ia(), n = vm(), r = X(), o = r[0], a = r[1], s = X(), i = s[0], c = s[1], l = qw(t.displayMonths, n), u = o ?? (i && t.isDateDisplayed(i)) ? i : l, d = function() {
    c(o), a(void 0);
  }, p = function(g) {
    a(g);
  }, m = ot(), h = function(g, x) {
    if (o) {
      var b = gm(o, {
        moveBy: g,
        direction: x,
        context: m,
        modifiers: n
      });
      Ft(o, b) || (t.goToDate(b, o), p(b));
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
  return S.createElement(bm.Provider, { value: v }, e.children);
}
function lu() {
  var e = Qe(bm);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function Jw(e, t) {
  var n = vm(), r = cu(e, n, t);
  return r;
}
var uu = bt(void 0);
function e$(e) {
  if (!wi(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return S.createElement(uu.Provider, { value: t }, e.children);
  }
  return S.createElement(t$, { initialProps: e.initialProps, children: e.children });
}
function t$(e) {
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
  return S.createElement(uu.Provider, { value: o }, n);
}
function xm() {
  var e = Qe(uu);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function n$(e, t) {
  var n = ot(), r = xm(), o = au(), a = iu(), s = lu(), i = s.focusDayAfter, c = s.focusDayBefore, l = s.focusWeekAfter, u = s.focusWeekBefore, d = s.blur, p = s.focus, m = s.focusMonthBefore, h = s.focusMonthAfter, v = s.focusYearBefore, g = s.focusYearAfter, x = s.focusStartOfWeek, b = s.focusEndOfWeek, y = function(V) {
    var Y, D, k, B;
    wi(n) ? (Y = r.onDayClick) === null || Y === void 0 || Y.call(r, e, t, V) : ja(n) ? (D = o.onDayClick) === null || D === void 0 || D.call(o, e, t, V) : Aa(n) ? (k = a.onDayClick) === null || k === void 0 || k.call(a, e, t, V) : (B = n.onDayClick) === null || B === void 0 || B.call(n, e, t, V);
  }, _ = function(V) {
    var Y;
    p(e), (Y = n.onDayFocus) === null || Y === void 0 || Y.call(n, e, t, V);
  }, $ = function(V) {
    var Y;
    d(), (Y = n.onDayBlur) === null || Y === void 0 || Y.call(n, e, t, V);
  }, E = function(V) {
    var Y;
    (Y = n.onDayMouseEnter) === null || Y === void 0 || Y.call(n, e, t, V);
  }, N = function(V) {
    var Y;
    (Y = n.onDayMouseLeave) === null || Y === void 0 || Y.call(n, e, t, V);
  }, M = function(V) {
    var Y;
    (Y = n.onDayPointerEnter) === null || Y === void 0 || Y.call(n, e, t, V);
  }, R = function(V) {
    var Y;
    (Y = n.onDayPointerLeave) === null || Y === void 0 || Y.call(n, e, t, V);
  }, K = function(V) {
    var Y;
    (Y = n.onDayTouchCancel) === null || Y === void 0 || Y.call(n, e, t, V);
  }, G = function(V) {
    var Y;
    (Y = n.onDayTouchEnd) === null || Y === void 0 || Y.call(n, e, t, V);
  }, W = function(V) {
    var Y;
    (Y = n.onDayTouchMove) === null || Y === void 0 || Y.call(n, e, t, V);
  }, Z = function(V) {
    var Y;
    (Y = n.onDayTouchStart) === null || Y === void 0 || Y.call(n, e, t, V);
  }, F = function(V) {
    var Y;
    (Y = n.onDayKeyUp) === null || Y === void 0 || Y.call(n, e, t, V);
  }, j = function(V) {
    var Y;
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
        V.preventDefault(), V.stopPropagation(), V.shiftKey ? v() : m();
        break;
      case "PageDown":
        V.preventDefault(), V.stopPropagation(), V.shiftKey ? g() : h();
        break;
      case "Home":
        V.preventDefault(), V.stopPropagation(), x();
        break;
      case "End":
        V.preventDefault(), V.stopPropagation(), b();
        break;
    }
    (Y = n.onDayKeyDown) === null || Y === void 0 || Y.call(n, e, t, V);
  }, I = {
    onClick: y,
    onFocus: _,
    onBlur: $,
    onKeyDown: j,
    onKeyUp: F,
    onMouseEnter: E,
    onMouseLeave: N,
    onPointerEnter: M,
    onPointerLeave: R,
    onTouchCancel: K,
    onTouchEnd: G,
    onTouchMove: W,
    onTouchStart: Z
  };
  return I;
}
function r$() {
  var e = ot(), t = xm(), n = au(), r = iu(), o = wi(e) ? t.selected : ja(e) ? n.selected : Aa(e) ? r.selected : void 0;
  return o;
}
function o$(e) {
  return Object.values(un).includes(e);
}
function a$(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (o$(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function s$(e, t) {
  var n = Oe({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = Oe(Oe({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function i$(e, t, n) {
  var r, o, a, s = ot(), i = lu(), c = Jw(e, t), l = n$(e, c), u = r$(), d = Boolean(s.onDayClick || s.mode !== "default");
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
  var p = a$(s, c).join(" "), m = s$(s, c), h = Boolean(c.outside && !s.showOutsideDays || c.hidden), v = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : Pw, g = S.createElement(v, { date: e, displayMonth: t, activeModifiers: c }), x = {
    style: m,
    className: p,
    children: g,
    role: "gridcell"
  }, b = i.focusTarget && Ft(i.focusTarget, e) && !c.outside, y = i.focusedDay && Ft(i.focusedDay, e), _ = Oe(Oe(Oe({}, x), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = y || b ? 0 : -1, r)), l), $ = {
    isButton: d,
    isHidden: h,
    activeModifiers: c,
    selectedDays: u,
    buttonProps: _,
    divProps: x
  };
  return $;
}
function c$(e) {
  var t = H(null), n = i$(e.date, e.displayMonth, t);
  return n.isHidden ? S.createElement("div", { role: "gridcell" }) : n.isButton ? S.createElement(Ls, Oe({ name: "day", ref: t }, n.buttonProps)) : S.createElement("div", Oe({}, n.divProps));
}
function l$(e) {
  var t = e.number, n = e.dates, r = ot(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(t), { locale: i });
  if (!o)
    return S.createElement("span", { className: s.weeknumber, style: a.weeknumber }, u);
  var d = c(Number(t), { locale: i }), p = function(m) {
    o(t, n, m);
  };
  return S.createElement(Ls, { name: "week-number", "aria-label": d, className: s.weeknumber, style: a.weeknumber, onClick: p }, u);
}
function u$(e) {
  var t, n, r = ot(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : c$, l = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : l$, u;
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
        { className: a.cell, style: o.cell, key: A1(d), role: "presentation" },
        S.createElement(c, { displayMonth: e.displayMonth, date: d })
      );
    })
  );
}
function ef(e, t, n) {
  for (var r = n != null && n.ISOWeek ? rm(t) : nu(t, n), o = n != null && n.ISOWeek ? kr(e) : wn(e, n), a = jn(r, o), s = [], i = 0; i <= a; i++)
    s.push(Zt(o, i));
  var c = s.reduce(function(l, u) {
    var d = n != null && n.ISOWeek ? R1(u) : V1(u, n), p = l.find(function(m) {
      return m.weekNumber === d;
    });
    return p ? (p.dates.push(u), l) : (l.push({
      weekNumber: d,
      dates: [u]
    }), l);
  }, []);
  return c;
}
function d$(e, t) {
  var n = ef(Ut(e), tu(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = z1(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = sl(a, 6 - r), i = ef(sl(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function f$(e) {
  var t, n, r, o = ot(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, l = o.fixedWeeks, u = o.components, d = o.weekStartsOn, p = o.firstWeekContainsDate, m = o.ISOWeek, h = d$(e.displayMonth, {
    useFixedWeeks: Boolean(l),
    ISOWeek: m,
    locale: a,
    weekStartsOn: d,
    firstWeekContainsDate: p
  }), v = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : Nw, g = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : u$, x = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : Cw;
  return S.createElement(
    "table",
    { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"] },
    !c && S.createElement(v, null),
    S.createElement("tbody", { className: s.tbody, style: i.tbody, role: "rowgroup" }, h.map(function(b) {
      return S.createElement(g, { displayMonth: e.displayMonth, key: b.weekNumber, dates: b.dates, weekNumber: b.weekNumber });
    })),
    S.createElement(x, { displayMonth: e.displayMonth })
  );
}
function p$() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var m$ = p$() ? C.useLayoutEffect : C.useEffect, hc = !1, h$ = 0;
function tf() {
  return "react-day-picker-".concat(++h$);
}
function v$(e) {
  var t, n = e ?? (hc ? tf() : null), r = C.useState(n), o = r[0], a = r[1];
  return m$(function() {
    o === null && a(tf());
  }, []), C.useEffect(function() {
    hc === !1 && (hc = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function g$(e) {
  var t, n, r = ot(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = Ia().displayMonths, l = v$(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, d = [a.month], p = s.month, m = e.displayIndex === 0, h = e.displayIndex === c.length - 1, v = !m && !h;
  o === "rtl" && (t = [m, h], h = t[0], m = t[1]), m && (d.push(a.caption_start), p = Oe(Oe({}, p), s.caption_start)), h && (d.push(a.caption_end), p = Oe(Oe({}, p), s.caption_end)), v && (d.push(a.caption_between), p = Oe(Oe({}, p), s.caption_between));
  var g = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : _w;
  return S.createElement(
    "div",
    { key: e.displayIndex, className: d.join(" "), style: p },
    S.createElement(g, { id: l, displayMonth: e.displayMonth }),
    S.createElement(f$, { id: u, "aria-labelledby": l, displayMonth: e.displayMonth })
  );
}
function b$(e) {
  var t = e.initialProps, n = ot(), r = lu(), o = Ia(), a = X(!1), s = a[0], i = a[1];
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
      return S.createElement(g$, { key: p, displayIndex: p, displayMonth: d });
    }))
  );
}
function x$(e) {
  var t = e.children, n = B1(e, ["children"]);
  return S.createElement(
    lw,
    { initialProps: n },
    S.createElement(
      xw,
      null,
      S.createElement(
        e$,
        { initialProps: n },
        S.createElement(
          Tw,
          { initialProps: n },
          S.createElement(
            Mw,
            { initialProps: n },
            S.createElement(
              Vw,
              null,
              S.createElement(Qw, null, t)
            )
          )
        )
      )
    )
  );
}
function y$(e) {
  return S.createElement(
    x$,
    Oe({}, e),
    S.createElement(b$, { initialProps: e })
  );
}
function w$({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ f.exports.jsx(
    y$,
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
          aa({ variant: "outline" }),
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
          aa({ variant: "ghost" }),
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
        IconLeft: ({ ...o }) => /* @__PURE__ */ f.exports.jsx(Jl, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ f.exports.jsx(No, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
w$.displayName = "Calendar";
function $$(e, t) {
  const n = /* @__PURE__ */ bt(t);
  function r(a) {
    const { children: s, ...i } = a, c = Mt(
      () => i,
      Object.values(i)
    );
    return /* @__PURE__ */ w(n.Provider, {
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
      const { scope: p, children: m, ...h } = d, v = (p == null ? void 0 : p[e][c]) || i, g = Mt(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ w(v.Provider, {
        value: g
      }, m);
    }
    function u(d, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, h = Qe(m);
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
    const a = n.map((s) => /* @__PURE__ */ bt(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return Mt(
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
    _$(o, ...t)
  ];
}
function _$(...e) {
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
      return Mt(
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
function qe(e) {
  const t = H(e);
  return Q(() => {
    t.current = e;
  }), Mt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const $t = Boolean(globalThis == null ? void 0 : globalThis.document) ? Da : () => {
}, C$ = [
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
], de = C$.reduce((e, t) => {
  const n = /* @__PURE__ */ A((r, o) => {
    const { asChild: a, ...s } = r, i = a ? xn : t;
    return Q(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ w(i, P({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Fs(e, t) {
  e && gi(
    () => e.dispatchEvent(t)
  );
}
const ym = "Avatar", [S$, LD] = at(ym), [E$, wm] = S$(ym), N$ = /* @__PURE__ */ A((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = X("idle");
  return /* @__PURE__ */ w(E$, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ w(de.span, P({}, r, {
    ref: t
  })));
}), P$ = "AvatarImage", T$ = /* @__PURE__ */ A((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = wm(P$, n), i = M$(r), c = qe((l) => {
    o(l), s.onImageLoadingStatusChange(l);
  });
  return $t(() => {
    i !== "idle" && c(i);
  }, [
    i,
    c
  ]), i === "loaded" ? /* @__PURE__ */ w(de.img, P({}, a, {
    ref: t,
    src: r
  })) : null;
}), O$ = "AvatarFallback", k$ = /* @__PURE__ */ A((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = wm(O$, n), [s, i] = X(r === void 0);
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
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ w(de.span, P({}, o, {
    ref: t
  })) : null;
});
function M$(e) {
  const [t, n] = X("idle");
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
const $m = N$, _m = T$, Cm = k$, La = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  $m,
  {
    ref: n,
    className: L(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
La.displayName = $m.displayName;
const vo = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  _m,
  {
    ref: n,
    className: L("aspect-square h-full w-full", e),
    ...t
  }
));
vo.displayName = _m.displayName;
const Fa = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Cm,
  {
    ref: n,
    className: L(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
Fa.displayName = Cm.displayName;
const D$ = Eo(
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
function Et({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ f.exports.jsx("div", { className: L(D$({ variant: t }), e), ...n });
}
function ee(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function gr(e) {
  const t = e + "CollectionProvider", [n, r] = at(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), s = (m) => {
    const { scope: h, children: v } = m, g = S.useRef(null), x = S.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ S.createElement(o, {
      scope: h,
      itemMap: x,
      collectionRef: g
    }, v);
  }, i = e + "CollectionSlot", c = /* @__PURE__ */ S.forwardRef((m, h) => {
    const { scope: v, children: g } = m, x = a(i, v), b = Ce(h, x.collectionRef);
    return /* @__PURE__ */ S.createElement(xn, {
      ref: b
    }, g);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ S.forwardRef((m, h) => {
    const { scope: v, children: g, ...x } = m, b = S.useRef(null), y = Ce(h, b), _ = a(l, v);
    return S.useEffect(() => (_.itemMap.set(b, {
      ref: b,
      ...x
    }), () => void _.itemMap.delete(b))), /* @__PURE__ */ S.createElement(xn, {
      [u]: "",
      ref: y
    }, g);
  });
  function p(m) {
    const h = a(e + "CollectionConsumer", m);
    return S.useCallback(() => {
      const g = h.collectionRef.current;
      if (!g)
        return [];
      const x = Array.from(g.querySelectorAll(`[${u}]`));
      return Array.from(h.itemMap.values()).sort(
        (_, $) => x.indexOf(_.ref.current) - x.indexOf($.ref.current)
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
const R$ = /* @__PURE__ */ bt(void 0);
function En(e) {
  const t = Qe(R$);
  return e || t || "ltr";
}
function j$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qe(e);
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
const il = "dismissableLayer.update", A$ = "dismissableLayer.pointerDownOutside", I$ = "dismissableLayer.focusOutside";
let nf;
const L$ = /* @__PURE__ */ bt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Wr = /* @__PURE__ */ A((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...l } = e, u = Qe(L$), [d, p] = X(null), m = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = X({}), v = Ce(
    t,
    (M) => p(M)
  ), g = Array.from(u.layers), [x] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), b = g.indexOf(x), y = d ? g.indexOf(d) : -1, _ = u.layersWithOutsidePointerEventsDisabled.size > 0, $ = y >= b, E = F$((M) => {
    const R = M.target, K = [
      ...u.branches
    ].some(
      (G) => G.contains(R)
    );
    !$ || K || (a == null || a(M), i == null || i(M), M.defaultPrevented || c == null || c());
  }, m), N = V$((M) => {
    const R = M.target;
    [
      ...u.branches
    ].some(
      (G) => G.contains(R)
    ) || (s == null || s(M), i == null || i(M), M.defaultPrevented || c == null || c());
  }, m);
  return j$((M) => {
    y === u.layers.size - 1 && (o == null || o(M), !M.defaultPrevented && c && (M.preventDefault(), c()));
  }, m), Q(() => {
    if (d)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (nf = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), rf(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = nf);
      };
  }, [
    d,
    m,
    r,
    u
  ]), Q(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), rf());
  }, [
    d,
    u
  ]), Q(() => {
    const M = () => h({});
    return document.addEventListener(il, M), () => document.removeEventListener(il, M);
  }, []), /* @__PURE__ */ w(de.div, P({}, l, {
    ref: v,
    style: {
      pointerEvents: _ ? $ ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ee(e.onFocusCapture, N.onFocusCapture),
    onBlurCapture: ee(e.onBlurCapture, N.onBlurCapture),
    onPointerDownCapture: ee(e.onPointerDownCapture, E.onPointerDownCapture)
  }));
});
function F$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qe(e), r = H(!1), o = H(() => {
  });
  return Q(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          Sm(A$, n, c, {
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
function V$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qe(e), r = H(!1);
  return Q(() => {
    const o = (a) => {
      a.target && !r.current && Sm(I$, n, {
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
function rf() {
  const e = new CustomEvent(il);
  document.dispatchEvent(e);
}
function Sm(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? Fs(o, a) : o.dispatchEvent(a);
}
let vc = 0;
function $i() {
  Q(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : of()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : of()), vc++, () => {
      vc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), vc--;
    };
  }, []);
}
function of() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const gc = "focusScope.autoFocusOnMount", bc = "focusScope.autoFocusOnUnmount", af = {
  bubbles: !1,
  cancelable: !0
}, _i = /* @__PURE__ */ A((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = X(null), l = qe(o), u = qe(a), d = H(null), p = Ce(
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
  Q(() => {
    if (r) {
      let v = function(y) {
        if (m.paused || !i)
          return;
        const _ = y.target;
        i.contains(_) ? d.current = _ : nr(d.current, {
          select: !0
        });
      }, g = function(y) {
        if (m.paused || !i)
          return;
        const _ = y.relatedTarget;
        _ !== null && (i.contains(_) || nr(d.current, {
          select: !0
        }));
      }, x = function(y) {
        const _ = document.activeElement;
        for (const $ of y)
          $.removedNodes.length > 0 && (i != null && i.contains(_) || nr(i));
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const b = new MutationObserver(x);
      return i && b.observe(i, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), b.disconnect();
      };
    }
  }, [
    r,
    i,
    m.paused
  ]), Q(() => {
    if (i) {
      cf.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const x = new CustomEvent(gc, af);
        i.addEventListener(gc, l), i.dispatchEvent(x), x.defaultPrevented || (U$(Y$(Em(i)), {
          select: !0
        }), document.activeElement === v && nr(i));
      }
      return () => {
        i.removeEventListener(gc, l), setTimeout(() => {
          const x = new CustomEvent(bc, af);
          i.addEventListener(bc, u), i.dispatchEvent(x), x.defaultPrevented || nr(v ?? document.body, {
            select: !0
          }), i.removeEventListener(bc, u), cf.remove(m);
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
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, x = document.activeElement;
    if (g && x) {
      const b = v.currentTarget, [y, _] = z$(b);
      y && _ ? !v.shiftKey && x === _ ? (v.preventDefault(), n && nr(y, {
        select: !0
      })) : v.shiftKey && x === y && (v.preventDefault(), n && nr(_, {
        select: !0
      })) : x === b && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ w(de.div, P({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: h
  }));
});
function U$(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (nr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function z$(e) {
  const t = Em(e), n = sf(t, e), r = sf(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Em(e) {
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
function sf(e, t) {
  for (const n of e)
    if (!W$(n, {
      upTo: t
    }))
      return n;
}
function W$(e, { upTo: t }) {
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
function B$(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function nr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && B$(e) && t && e.select();
  }
}
const cf = H$();
function H$() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = lf(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = lf(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function lf(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Y$(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const K$ = C["useId".toString()] || (() => {
});
let G$ = 0;
function mt(e) {
  const [t, n] = C.useState(K$());
  return $t(() => {
    e || n(
      (r) => r ?? String(G$++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Z$ = ["top", "right", "bottom", "left"], ir = Math.min, Bt = Math.max, Vs = Math.round, ls = Math.floor, cr = (e) => ({
  x: e,
  y: e
}), q$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, X$ = {
  start: "end",
  end: "start"
};
function cl(e, t, n) {
  return Bt(e, ir(t, n));
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
function du(e) {
  return e === "x" ? "y" : "x";
}
function fu(e) {
  return e === "y" ? "height" : "width";
}
function To(e) {
  return ["top", "bottom"].includes(Fn(e)) ? "y" : "x";
}
function pu(e) {
  return du(To(e));
}
function Q$(e, t, n) {
  n === void 0 && (n = !1);
  const r = Po(e), o = pu(e), a = fu(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Us(s)), [s, Us(s)];
}
function J$(e) {
  const t = Us(e);
  return [ll(e), t, ll(t)];
}
function ll(e) {
  return e.replace(/start|end/g, (t) => X$[t]);
}
function e_(e, t, n) {
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
function t_(e, t, n, r) {
  const o = Po(e);
  let a = e_(Fn(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(ll)))), a;
}
function Us(e) {
  return e.replace(/left|right|bottom|top/g, (t) => q$[t]);
}
function n_(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Nm(e) {
  return typeof e != "number" ? n_(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function zs(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function uf(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = To(t), s = pu(t), i = fu(s), c = Fn(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
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
const r_ = async (e, t, n) => {
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
  } = uf(l, r, c), p = r, m = {}, h = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: g,
      fn: x
    } = i[v], {
      x: b,
      y,
      data: _,
      reset: $
    } = await x({
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
    if (u = b ?? u, d = y ?? d, m = {
      ...m,
      [g]: {
        ...m[g],
        ..._
      }
    }, $ && h <= 50) {
      h++, typeof $ == "object" && ($.placement && (p = $.placement), $.rects && (l = $.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : $.rects), {
        x: u,
        y: d
      } = uf(l, p, c)), v = -1;
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
async function la(e, t) {
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
  } = Ln(t, e), h = Nm(m), g = i[p ? d === "floating" ? "reference" : "floating" : d], x = zs(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), b = d === "floating" ? {
    ...s.floating,
    x: r,
    y: o
  } : s.reference, y = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(y)) ? await (a.getScale == null ? void 0 : a.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = zs(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: y,
    strategy: c
  }) : b);
  return {
    top: (x.top - $.top + h.top) / _.y,
    bottom: ($.bottom - x.bottom + h.bottom) / _.y,
    left: (x.left - $.left + h.left) / _.x,
    right: ($.right - x.right + h.right) / _.x
  };
}
const df = (e) => ({
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
    const u = Nm(l), d = {
      x: n,
      y: r
    }, p = pu(o), m = fu(p), h = await s.getDimensions(c), v = p === "y", g = v ? "top" : "left", x = v ? "bottom" : "right", b = v ? "clientHeight" : "clientWidth", y = a.reference[m] + a.reference[p] - d[p] - a.floating[m], _ = d[p] - a.reference[p], $ = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let E = $ ? $[b] : 0;
    (!E || !await (s.isElement == null ? void 0 : s.isElement($))) && (E = i.floating[b] || a.floating[m]);
    const N = y / 2 - _ / 2, M = E / 2 - h[m] / 2 - 1, R = ir(u[g], M), K = ir(u[x], M), G = R, W = E - h[m] - K, Z = E / 2 - h[m] / 2 + N, F = cl(G, Z, W), I = Po(o) != null && Z != F && a.reference[m] / 2 - (Z < G ? R : K) - h[m] / 2 < 0 ? Z < G ? G - Z : W - Z : 0;
    return {
      [p]: d[p] - I,
      data: {
        [p]: F,
        centerOffset: Z - F + I
      }
    };
  }
}), o_ = function(e) {
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
      } = Ln(e, t), g = Fn(r), x = Fn(s) === s, b = await (i.isRTL == null ? void 0 : i.isRTL(c.floating)), y = d || (x || !h ? [Us(s)] : J$(s));
      !d && m !== "none" && y.push(...t_(s, h, m, b));
      const _ = [s, ...y], $ = await la(t, v), E = [];
      let N = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (l && E.push($[g]), u) {
        const G = Q$(r, a, b);
        E.push($[G[0]], $[G[1]]);
      }
      if (N = [...N, {
        placement: r,
        overflows: E
      }], !E.every((G) => G <= 0)) {
        var M, R;
        const G = (((M = o.flip) == null ? void 0 : M.index) || 0) + 1, W = _[G];
        if (W)
          return {
            data: {
              index: G,
              overflows: N
            },
            reset: {
              placement: W
            }
          };
        let Z = (R = N.filter((F) => F.overflows[0] <= 0).sort((F, j) => F.overflows[1] - j.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!Z)
          switch (p) {
            case "bestFit": {
              var K;
              const F = (K = N.map((j) => [j.placement, j.overflows.filter((I) => I > 0).reduce((I, V) => I + V, 0)]).sort((j, I) => j[1] - I[1])[0]) == null ? void 0 : K[0];
              F && (Z = F);
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
function ff(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function pf(e) {
  return Z$.some((t) => e[t] >= 0);
}
const a_ = function(e) {
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
          const a = await la(t, {
            ...o,
            elementContext: "reference"
          }), s = ff(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: pf(s)
            }
          };
        }
        case "escaped": {
          const a = await la(t, {
            ...o,
            altBoundary: !0
          }), s = ff(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: pf(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function s_(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Fn(n), i = Po(n), c = To(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, d = Ln(t, e);
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
const i_ = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await s_(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, c_ = function(e) {
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
              x,
              y: b
            } = g;
            return {
              x,
              y: b
            };
          }
        },
        ...c
      } = Ln(e, t), l = {
        x: n,
        y: r
      }, u = await la(t, c), d = To(Fn(o)), p = du(d);
      let m = l[p], h = l[d];
      if (a) {
        const g = p === "y" ? "top" : "left", x = p === "y" ? "bottom" : "right", b = m + u[g], y = m - u[x];
        m = cl(b, m, y);
      }
      if (s) {
        const g = d === "y" ? "top" : "left", x = d === "y" ? "bottom" : "right", b = h + u[g], y = h - u[x];
        h = cl(b, h, y);
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
}, l_ = function(e) {
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
      }, d = To(o), p = du(d);
      let m = u[p], h = u[d];
      const v = Ln(i, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const y = p === "y" ? "height" : "width", _ = a.reference[p] - a.floating[y] + g.mainAxis, $ = a.reference[p] + a.reference[y] - g.mainAxis;
        m < _ ? m = _ : m > $ && (m = $);
      }
      if (l) {
        var x, b;
        const y = p === "y" ? "width" : "height", _ = ["top", "left"].includes(Fn(o)), $ = a.reference[d] - a.floating[y] + (_ && ((x = s.offset) == null ? void 0 : x[d]) || 0) + (_ ? 0 : g.crossAxis), E = a.reference[d] + a.reference[y] + (_ ? 0 : ((b = s.offset) == null ? void 0 : b[d]) || 0) - (_ ? g.crossAxis : 0);
        h < $ ? h = $ : h > E && (h = E);
      }
      return {
        [p]: m,
        [d]: h
      };
    }
  };
}, u_ = function(e) {
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
      } = Ln(e, t), c = await la(t, i), l = Fn(n), u = Po(n), d = To(n) === "y", {
        width: p,
        height: m
      } = r.floating;
      let h, v;
      l === "top" || l === "bottom" ? (h = l, v = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = l, h = u === "end" ? "top" : "bottom");
      const g = m - c[h], x = p - c[v], b = !t.middlewareData.shift;
      let y = g, _ = x;
      if (d) {
        const E = p - c.left - c.right;
        _ = u || b ? ir(x, E) : E;
      } else {
        const E = m - c.top - c.bottom;
        y = u || b ? ir(g, E) : E;
      }
      if (b && !u) {
        const E = Bt(c.left, 0), N = Bt(c.right, 0), M = Bt(c.top, 0), R = Bt(c.bottom, 0);
        d ? _ = p - 2 * (E !== 0 || N !== 0 ? E + N : Bt(c.left, c.right)) : y = m - 2 * (M !== 0 || R !== 0 ? M + R : Bt(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: _,
        availableHeight: y
      });
      const $ = await o.getDimensions(a.floating);
      return p !== $.width || m !== $.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function lr(e) {
  return Pm(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ht(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Hn(e) {
  var t;
  return (t = (Pm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Pm(e) {
  return e instanceof Node || e instanceof Ht(e).Node;
}
function Vn(e) {
  return e instanceof Element || e instanceof Ht(e).Element;
}
function $n(e) {
  return e instanceof HTMLElement || e instanceof Ht(e).HTMLElement;
}
function mf(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ht(e).ShadowRoot;
}
function Va(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Xt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function d_(e) {
  return ["table", "td", "th"].includes(lr(e));
}
function mu(e) {
  const t = hu(), n = Xt(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function f_(e) {
  let t = go(e);
  for (; $n(t) && !Ci(t); ) {
    if (mu(t))
      return t;
    t = go(t);
  }
  return null;
}
function hu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ci(e) {
  return ["html", "body", "#document"].includes(lr(e));
}
function Xt(e) {
  return Ht(e).getComputedStyle(e);
}
function Si(e) {
  return Vn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function go(e) {
  if (lr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    mf(e) && e.host || // Fallback.
    Hn(e)
  );
  return mf(t) ? t.host : t;
}
function Tm(e) {
  const t = go(e);
  return Ci(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : $n(t) && Va(t) ? t : Tm(t);
}
function Ws(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Tm(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Ht(r);
  return o ? t.concat(a, a.visualViewport || [], Va(r) ? r : []) : t.concat(r, Ws(r));
}
function Om(e) {
  const t = Xt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = $n(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Vs(n) !== a || Vs(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function vu(e) {
  return Vn(e) ? e : e.contextElement;
}
function lo(e) {
  const t = vu(e);
  if (!$n(t))
    return cr(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Om(t);
  let s = (a ? Vs(n.width) : n.width) / r, i = (a ? Vs(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const p_ = /* @__PURE__ */ cr(0);
function km(e) {
  const t = Ht(e);
  return !hu() || !t.visualViewport ? p_ : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function m_(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ht(e) ? !1 : t;
}
function Mr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = vu(e);
  let s = cr(1);
  t && (r ? Vn(r) && (s = lo(r)) : s = lo(e));
  const i = m_(a, n, r) ? km(a) : cr(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (a) {
    const p = Ht(a), m = r && Vn(r) ? Ht(r) : r;
    let h = p.frameElement;
    for (; h && r && m !== p; ) {
      const v = lo(h), g = h.getBoundingClientRect(), x = Xt(h), b = g.left + (h.clientLeft + parseFloat(x.paddingLeft)) * v.x, y = g.top + (h.clientTop + parseFloat(x.paddingTop)) * v.y;
      c *= v.x, l *= v.y, u *= v.x, d *= v.y, c += b, l += y, h = Ht(h).frameElement;
    }
  }
  return zs({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function h_(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = $n(n), a = Hn(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = cr(1);
  const c = cr(0);
  if ((o || !o && r !== "fixed") && ((lr(n) !== "body" || Va(a)) && (s = Si(n)), $n(n))) {
    const l = Mr(n);
    i = lo(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - s.scrollLeft * i.x + c.x,
    y: t.y * i.y - s.scrollTop * i.y + c.y
  };
}
function v_(e) {
  return Array.from(e.getClientRects());
}
function Mm(e) {
  return Mr(Hn(e)).left + Si(e).scrollLeft;
}
function g_(e) {
  const t = Hn(e), n = Si(e), r = e.ownerDocument.body, o = Bt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Bt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Mm(e);
  const i = -n.scrollTop;
  return Xt(r).direction === "rtl" && (s += Bt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function b_(e, t) {
  const n = Ht(e), r = Hn(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = hu();
    (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function x_(e, t) {
  const n = Mr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = $n(e) ? lo(e) : cr(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function hf(e, t, n) {
  let r;
  if (t === "viewport")
    r = b_(e, n);
  else if (t === "document")
    r = g_(Hn(e));
  else if (Vn(t))
    r = x_(t, n);
  else {
    const o = km(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return zs(r);
}
function Dm(e, t) {
  const n = go(e);
  return n === t || !Vn(n) || Ci(n) ? !1 : Xt(n).position === "fixed" || Dm(n, t);
}
function y_(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ws(e).filter((i) => Vn(i) && lr(i) !== "body"), o = null;
  const a = Xt(e).position === "fixed";
  let s = a ? go(e) : e;
  for (; Vn(s) && !Ci(s); ) {
    const i = Xt(s), c = mu(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Va(s) && !c && Dm(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = go(s);
  }
  return t.set(e, r), r;
}
function w_(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? y_(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, u) => {
    const d = hf(t, u, o);
    return l.top = Bt(d.top, l.top), l.right = ir(d.right, l.right), l.bottom = ir(d.bottom, l.bottom), l.left = Bt(d.left, l.left), l;
  }, hf(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function $_(e) {
  return Om(e);
}
function __(e, t, n) {
  const r = $n(t), o = Hn(t), a = n === "fixed", s = Mr(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = cr(0);
  if (r || !r && !a)
    if ((lr(t) !== "body" || Va(o)) && (i = Si(t)), r) {
      const l = Mr(t, !0, a, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = Mm(o));
  return {
    x: s.left + i.scrollLeft - c.x,
    y: s.top + i.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function vf(e, t) {
  return !$n(e) || Xt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Rm(e, t) {
  const n = Ht(e);
  if (!$n(e))
    return n;
  let r = vf(e, t);
  for (; r && d_(r) && Xt(r).position === "static"; )
    r = vf(r, t);
  return r && (lr(r) === "html" || lr(r) === "body" && Xt(r).position === "static" && !mu(r)) ? n : r || f_(e) || n;
}
const C_ = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Rm, a = this.getDimensions;
  return {
    reference: __(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function S_(e) {
  return Xt(e).direction === "rtl";
}
const E_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: h_,
  getDocumentElement: Hn,
  getClippingRect: w_,
  getOffsetParent: Rm,
  getElementRects: C_,
  getClientRects: v_,
  getDimensions: $_,
  getScale: lo,
  isElement: Vn,
  isRTL: S_
};
function N_(e, t) {
  let n = null, r;
  const o = Hn(e);
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
    const m = ls(u), h = ls(o.clientWidth - (l + d)), v = ls(o.clientHeight - (u + p)), g = ls(l), b = {
      rootMargin: -m + "px " + -h + "px " + -v + "px " + -g + "px",
      threshold: Bt(0, ir(1, c)) || 1
    };
    let y = !0;
    function _($) {
      const E = $[0].intersectionRatio;
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
function P_(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = vu(e), u = o || a ? [...l ? Ws(l) : [], ...Ws(t)] : [];
  u.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), a && x.addEventListener("resize", n);
  });
  const d = l && i ? N_(l, n) : null;
  let p = -1, m = null;
  s && (m = new ResizeObserver((x) => {
    let [b] = x;
    b && b.target === l && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), l && !c && m.observe(l), m.observe(t));
  let h, v = c ? Mr(e) : null;
  c && g();
  function g() {
    const x = Mr(e);
    v && (x.x !== v.x || x.y !== v.y || x.width !== v.width || x.height !== v.height) && n(), v = x, h = requestAnimationFrame(g);
  }
  return n(), () => {
    u.forEach((x) => {
      o && x.removeEventListener("scroll", n), a && x.removeEventListener("resize", n);
    }), d && d(), m && m.disconnect(), m = null, c && cancelAnimationFrame(h);
  };
}
const T_ = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: E_,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return r_(e, t, {
    ...o,
    platform: a
  });
}, O_ = (e) => {
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
      return r && t(r) ? r.current != null ? df({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? df({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var Ns = typeof document < "u" ? Da : Q;
function Bs(e, t) {
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
        if (!Bs(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !Bs(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function jm(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function gf(e, t) {
  const n = jm(e);
  return Math.round(t * n) / n;
}
function bf(e) {
  const t = C.useRef(e);
  return Ns(() => {
    t.current = e;
  }), t;
}
function k_(e) {
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
  Bs(p, r) || m(r);
  const [h, v] = C.useState(null), [g, x] = C.useState(null), b = C.useCallback((I) => {
    I != E.current && (E.current = I, v(I));
  }, [v]), y = C.useCallback((I) => {
    I !== N.current && (N.current = I, x(I));
  }, [x]), _ = a || h, $ = s || g, E = C.useRef(null), N = C.useRef(null), M = C.useRef(u), R = bf(c), K = bf(o), G = C.useCallback(() => {
    if (!E.current || !N.current)
      return;
    const I = {
      placement: t,
      strategy: n,
      middleware: p
    };
    K.current && (I.platform = K.current), T_(E.current, N.current, I).then((V) => {
      const Y = {
        ...V,
        isPositioned: !0
      };
      W.current && !Bs(M.current, Y) && (M.current = Y, $0.flushSync(() => {
        d(Y);
      }));
    });
  }, [p, t, n, K]);
  Ns(() => {
    l === !1 && M.current.isPositioned && (M.current.isPositioned = !1, d((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [l]);
  const W = C.useRef(!1);
  Ns(() => (W.current = !0, () => {
    W.current = !1;
  }), []), Ns(() => {
    if (_ && (E.current = _), $ && (N.current = $), _ && $) {
      if (R.current)
        return R.current(_, $, G);
      G();
    }
  }, [_, $, G, R]);
  const Z = C.useMemo(() => ({
    reference: E,
    floating: N,
    setReference: b,
    setFloating: y
  }), [b, y]), F = C.useMemo(() => ({
    reference: _,
    floating: $
  }), [_, $]), j = C.useMemo(() => {
    const I = {
      position: n,
      left: 0,
      top: 0
    };
    if (!F.floating)
      return I;
    const V = gf(F.floating, u.x), Y = gf(F.floating, u.y);
    return i ? {
      ...I,
      transform: "translate(" + V + "px, " + Y + "px)",
      ...jm(F.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: V,
      top: Y
    };
  }, [n, i, F.floating, u.x, u.y]);
  return C.useMemo(() => ({
    ...u,
    update: G,
    refs: Z,
    elements: F,
    floatingStyles: j
  }), [u, G, Z, F, j]);
}
function Ua(e) {
  const [t, n] = X(void 0);
  return $t(() => {
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
const Am = "Popper", [Im, Nn] = at(Am), [M_, Lm] = Im(Am), D_ = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = X(null);
  return /* @__PURE__ */ w(M_, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, R_ = "PopperAnchor", j_ = /* @__PURE__ */ A((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = Lm(R_, n), s = H(null), i = Ce(t, s);
  return Q(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ w(de.div, P({}, o, {
    ref: i
  }));
}), Fm = "PopperContent", [A_, FD] = Im(Fm), I_ = /* @__PURE__ */ A((e, t) => {
  var n, r, o, a, s, i, c, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: p = 0, align: m = "center", alignOffset: h = 0, arrowPadding: v = 0, collisionBoundary: g = [], collisionPadding: x = 0, sticky: b = "partial", hideWhenDetached: y = !1, avoidCollisions: _ = !0, onPlaced: $, ...E } = e, N = Lm(Fm, u), [M, R] = X(null), K = Ce(
    t,
    ($e) => R($e)
  ), [G, W] = X(null), Z = Ua(G), F = (n = Z == null ? void 0 : Z.width) !== null && n !== void 0 ? n : 0, j = (r = Z == null ? void 0 : Z.height) !== null && r !== void 0 ? r : 0, I = d + (m !== "center" ? "-" + m : ""), V = typeof x == "number" ? x : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...x
  }, Y = Array.isArray(g) ? g : [
    g
  ], D = Y.length > 0, k = {
    padding: V,
    boundary: Y.filter(L_),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: D
  }, { refs: B, floatingStyles: q, placement: oe, isPositioned: te, middlewareData: ve } = k_({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: I,
    whileElementsMounted: P_,
    elements: {
      reference: N.anchor
    },
    middleware: [
      i_({
        mainAxis: p + j,
        alignmentAxis: h
      }),
      _ && c_({
        mainAxis: !0,
        crossAxis: !1,
        limiter: b === "partial" ? l_() : void 0,
        ...k
      }),
      _ && o_({
        ...k
      }),
      u_({
        ...k,
        apply: ({ elements: $e, rects: Te, availableWidth: T, availableHeight: z }) => {
          const { width: J, height: pe } = Te.reference, le = $e.floating.style;
          le.setProperty("--radix-popper-available-width", `${T}px`), le.setProperty("--radix-popper-available-height", `${z}px`), le.setProperty("--radix-popper-anchor-width", `${J}px`), le.setProperty("--radix-popper-anchor-height", `${pe}px`);
        }
      }),
      G && O_({
        element: G,
        padding: v
      }),
      F_({
        arrowWidth: F,
        arrowHeight: j
      }),
      y && a_({
        strategy: "referenceHidden"
      })
    ]
  }), [me, re] = Vm(oe), se = qe($);
  $t(() => {
    te && (se == null || se());
  }, [
    te,
    se
  ]);
  const ue = (o = ve.arrow) === null || o === void 0 ? void 0 : o.x, ne = (a = ve.arrow) === null || a === void 0 ? void 0 : a.y, he = ((s = ve.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [U, ge] = X();
  return $t(() => {
    M && ge(window.getComputedStyle(M).zIndex);
  }, [
    M
  ]), /* @__PURE__ */ w("div", {
    ref: B.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...q,
      transform: te ? q.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: U,
      ["--radix-popper-transform-origin"]: [
        (i = ve.transformOrigin) === null || i === void 0 ? void 0 : i.x,
        (c = ve.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ w(A_, {
    scope: u,
    placedSide: me,
    onArrowChange: W,
    arrowX: ue,
    arrowY: ne,
    shouldHideArrow: he
  }, /* @__PURE__ */ w(de.div, P({
    "data-side": me,
    "data-align": re
  }, E, {
    ref: K,
    style: {
      ...E.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: te ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = ve.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function L_(e) {
  return e !== null;
}
const F_ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: i, rects: c, middlewareData: l } = t, d = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = d ? 0 : e.arrowWidth, m = d ? 0 : e.arrowHeight, [h, v] = Vm(i), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[v], x = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + p / 2, b = ((a = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + m / 2;
    let y = "", _ = "";
    return h === "bottom" ? (y = d ? g : `${x}px`, _ = `${-m}px`) : h === "top" ? (y = d ? g : `${x}px`, _ = `${c.floating.height + m}px`) : h === "right" ? (y = `${-m}px`, _ = d ? g : `${b}px`) : h === "left" && (y = `${c.floating.width + m}px`, _ = d ? g : `${b}px`), {
      data: {
        x: y,
        y: _
      }
    };
  }
});
function Vm(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Oo = D_, za = j_, Wa = I_, Ei = /* @__PURE__ */ A((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Gl.createPortal(/* @__PURE__ */ w(de.div, P({}, o, {
    ref: t
  })), r) : null;
});
function V_(e, t) {
  return vi((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const it = (e) => {
  const { present: t, children: n } = e, r = U_(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Vt.only(n), a = Ce(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ So(o, {
    ref: a
  }) : null;
};
it.displayName = "Presence";
function U_(e) {
  const [t, n] = X(), r = H({}), o = H(e), a = H("none"), s = e ? "mounted" : "unmounted", [i, c] = V_(s, {
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
    const l = us(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), $t(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, m = us(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), $t(() => {
    if (t) {
      const l = (d) => {
        const m = us(r.current).includes(d.animationName);
        d.target === t && m && gi(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = us(r.current));
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
function us(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function dt({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = z_({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = qe(n), c = fe((l) => {
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
function z_({ defaultProp: e, onChange: t }) {
  const n = X(e), [r] = n, o = H(r), a = qe(t);
  return Q(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const xc = "rovingFocusGroup.onEntryFocus", W_ = {
  bubbles: !1,
  cancelable: !0
}, gu = "RovingFocusGroup", [ul, Um, B_] = gr(gu), [H_, br] = at(gu, [
  B_
]), [Y_, K_] = H_(gu), G_ = /* @__PURE__ */ A((e, t) => /* @__PURE__ */ w(ul.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ w(ul.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ w(Z_, P({}, e, {
  ref: t
}))))), Z_ = /* @__PURE__ */ A((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: l, ...u } = e, d = H(null), p = Ce(t, d), m = En(a), [h = null, v] = dt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [g, x] = X(!1), b = qe(l), y = Um(n), _ = H(!1), [$, E] = X(0);
  return Q(() => {
    const N = d.current;
    if (N)
      return N.addEventListener(xc, b), () => N.removeEventListener(xc, b);
  }, [
    b
  ]), /* @__PURE__ */ w(Y_, {
    scope: n,
    orientation: r,
    dir: m,
    loop: o,
    currentTabStopId: h,
    onItemFocus: fe(
      (N) => v(N),
      [
        v
      ]
    ),
    onItemShiftTab: fe(
      () => x(!0),
      []
    ),
    onFocusableItemAdd: fe(
      () => E(
        (N) => N + 1
      ),
      []
    ),
    onFocusableItemRemove: fe(
      () => E(
        (N) => N - 1
      ),
      []
    )
  }, /* @__PURE__ */ w(de.div, P({
    tabIndex: g || $ === 0 ? -1 : 0,
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
    onFocus: ee(e.onFocus, (N) => {
      const M = !_.current;
      if (N.target === N.currentTarget && M && !g) {
        const R = new CustomEvent(xc, W_);
        if (N.currentTarget.dispatchEvent(R), !R.defaultPrevented) {
          const K = y().filter(
            (j) => j.focusable
          ), G = K.find(
            (j) => j.active
          ), W = K.find(
            (j) => j.id === h
          ), F = [
            G,
            W,
            ...K
          ].filter(Boolean).map(
            (j) => j.ref.current
          );
          zm(F);
        }
      }
      _.current = !1;
    }),
    onBlur: ee(
      e.onBlur,
      () => x(!1)
    )
  })));
}), q_ = "RovingFocusGroupItem", X_ = /* @__PURE__ */ A((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = mt(), c = a || i, l = K_(q_, n), u = l.currentTabStopId === c, d = Um(n), { onFocusableItemAdd: p, onFocusableItemRemove: m } = l;
  return Q(() => {
    if (r)
      return p(), () => m();
  }, [
    r,
    p,
    m
  ]), /* @__PURE__ */ w(ul.ItemSlot, {
    scope: n,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ w(de.span, P({
    tabIndex: u ? 0 : -1,
    "data-orientation": l.orientation
  }, s, {
    ref: t,
    onMouseDown: ee(e.onMouseDown, (h) => {
      r ? l.onItemFocus(c) : h.preventDefault();
    }),
    onFocus: ee(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: ee(e.onKeyDown, (h) => {
      if (h.key === "Tab" && h.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (h.target !== h.currentTarget)
        return;
      const v = e2(h, l.orientation, l.dir);
      if (v !== void 0) {
        h.preventDefault();
        let x = d().filter(
          (b) => b.focusable
        ).map(
          (b) => b.ref.current
        );
        if (v === "last")
          x.reverse();
        else if (v === "prev" || v === "next") {
          v === "prev" && x.reverse();
          const b = x.indexOf(h.currentTarget);
          x = l.loop ? t2(x, b + 1) : x.slice(b + 1);
        }
        setTimeout(
          () => zm(x)
        );
      }
    })
  })));
}), Q_ = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function J_(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function e2(e, t, n) {
  const r = J_(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return Q_[r];
}
function zm(e) {
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
const Ni = G_, Pi = X_;
var n2 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, eo = /* @__PURE__ */ new WeakMap(), ds = /* @__PURE__ */ new WeakMap(), fs = {}, yc = 0, Wm = function(e) {
  return e && (e.host || Wm(e.parentNode));
}, r2 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Wm(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, o2 = function(e, t, n, r) {
  var o = r2(t, Array.isArray(e) ? e : [e]);
  fs[n] || (fs[n] = /* @__PURE__ */ new WeakMap());
  var a = fs[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || i.has(d) || (i.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (i.has(p))
        u(p);
      else {
        var m = p.getAttribute(r), h = m !== null && m !== "false", v = (eo.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
        eo.set(p, v), a.set(p, g), s.push(p), v === 1 && h && ds.set(p, !0), g === 1 && p.setAttribute(n, "true"), h || p.setAttribute(r, "true");
      }
    });
  };
  return u(t), i.clear(), yc++, function() {
    s.forEach(function(d) {
      var p = eo.get(d) - 1, m = a.get(d) - 1;
      eo.set(d, p), a.set(d, m), p || (ds.has(d) || d.removeAttribute(r), ds.delete(d)), m || d.removeAttribute(n);
    }), yc--, yc || (eo = /* @__PURE__ */ new WeakMap(), eo = /* @__PURE__ */ new WeakMap(), ds = /* @__PURE__ */ new WeakMap(), fs = {});
  };
}, Ba = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || n2(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), o2(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ct = function() {
  return Ct = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Ct.apply(this, arguments);
};
function bu(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Bm(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var ta = "right-scroll-bar-position", na = "width-before-scroll-bar", a2 = "with-scroll-bars-hidden", s2 = "--removed-body-scroll-bar-size";
function i2(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function c2(e, t) {
  var n = X(function() {
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
function Hm(e, t) {
  return c2(t || null, function(n) {
    return e.forEach(function(r) {
      return i2(r, n);
    });
  });
}
function l2(e) {
  return e;
}
function u2(e, t) {
  t === void 0 && (t = l2);
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
function Ym(e) {
  e === void 0 && (e = {});
  var t = u2(null);
  return t.options = Ct({ async: !0, ssr: !1 }, e), t;
}
var Km = function(e) {
  var t = e.sideCar, n = bu(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, Ct({}, n));
};
Km.isSideCarExport = !0;
function Gm(e, t) {
  return e.useMedium(t), Km;
}
var Zm = Ym(), wc = function() {
}, Ti = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: wc,
    onWheelCapture: wc,
    onTouchMoveCapture: wc
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, x = g === void 0 ? "div" : g, b = bu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = p, _ = Hm([n, t]), $ = Ct(Ct({}, b), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement(y, { sideCar: Zm, removeScrollBar: l, shards: d, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), Ct(Ct({}, $), { ref: _ })) : C.createElement(x, Ct({}, $, { className: c, ref: _ }), i)
  );
});
Ti.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ti.classNames = {
  fullWidth: na,
  zeroRight: ta
};
var xf, d2 = function() {
  if (xf)
    return xf;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function f2() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = d2();
  return t && e.setAttribute("nonce", t), e;
}
function p2(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function m2(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var h2 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = f2()) && (p2(t, n), m2(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, v2 = function() {
  var e = h2();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, xu = function() {
  var e = v2(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, g2 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, $c = function(e) {
  return parseInt(e || "", 10) || 0;
}, b2 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [$c(n), $c(r), $c(o)];
}, x2 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return g2;
  var t = b2(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, y2 = xu(), w2 = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(a2, ` {
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
  
  .`).concat(ta, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(na, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(ta, " .").concat(ta, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(na, " .").concat(na, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(s2, ": ").concat(i, `px;
  }
`);
}, qm = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, a = C.useMemo(function() {
    return x2(o);
  }, [o]);
  return C.createElement(y2, { styles: w2(a, !t, o, n ? "" : "!important") });
}, dl = !1;
if (typeof window < "u")
  try {
    var ps = Object.defineProperty({}, "passive", {
      get: function() {
        return dl = !0, !0;
      }
    });
    window.addEventListener("test", ps, ps), window.removeEventListener("test", ps, ps);
  } catch {
    dl = !1;
  }
var to = dl ? { passive: !1 } : !1, $2 = function(e) {
  return e.tagName === "TEXTAREA";
}, Xm = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !$2(e) && n[t] === "visible")
  );
}, _2 = function(e) {
  return Xm(e, "overflowY");
}, C2 = function(e) {
  return Xm(e, "overflowX");
}, yf = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Qm(e, n);
    if (r) {
      var o = Jm(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, S2 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, E2 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Qm = function(e, t) {
  return e === "v" ? _2(t) : C2(t);
}, Jm = function(e, t) {
  return e === "v" ? S2(t) : E2(t);
}, N2 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, P2 = function(e, t, n, r, o) {
  var a = N2(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, p = 0;
  do {
    var m = Jm(e, i), h = m[0], v = m[1], g = m[2], x = v - g - a * h;
    (h || x) && Qm(e, i) && (d += x, p += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, ms = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, wf = function(e) {
  return [e.deltaX, e.deltaY];
}, $f = function(e) {
  return e && "current" in e ? e.current : e;
}, T2 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, O2 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, k2 = 0, no = [];
function M2(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(k2++)[0], a = C.useState(function() {
    return xu();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Bm([e.lockRef.current], (e.shards || []).map($f), !0).filter(Boolean);
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
    var x = ms(v), b = n.current, y = "deltaX" in v ? v.deltaX : b[0] - x[0], _ = "deltaY" in v ? v.deltaY : b[1] - x[1], $, E = v.target, N = Math.abs(y) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && N === "h" && E.type === "range")
      return !1;
    var M = yf(N, E);
    if (!M)
      return !0;
    if (M ? $ = N : ($ = N === "v" ? "h" : "v", M = yf(N, E)), !M)
      return !1;
    if (!r.current && "changedTouches" in v && (y || _) && (r.current = $), !$)
      return !0;
    var R = r.current || $;
    return P2(R, g, v, R === "h" ? y : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!no.length || no[no.length - 1] !== a)) {
      var x = "deltaY" in g ? wf(g) : ms(g), b = t.current.filter(function($) {
        return $.name === g.type && $.target === g.target && T2($.delta, x);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var y = (s.current.shards || []).map($f).filter(Boolean).filter(function($) {
          return $.contains(g.target);
        }), _ = y.length > 0 ? i(g, y[0]) : !s.current.noIsolation;
        _ && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(v, g, x, b) {
    var y = { name: v, delta: g, target: x, should: b };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== y;
      });
    }, 1);
  }, []), u = C.useCallback(function(v) {
    n.current = ms(v), r.current = void 0;
  }, []), d = C.useCallback(function(v) {
    l(v.type, wf(v), v.target, i(v, e.lockRef.current));
  }, []), p = C.useCallback(function(v) {
    l(v.type, ms(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return no.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, to), document.addEventListener("touchmove", c, to), document.addEventListener("touchstart", u, to), function() {
      no = no.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, to), document.removeEventListener("touchmove", c, to), document.removeEventListener("touchstart", u, to);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    h ? C.createElement(a, { styles: O2(o) }) : null,
    m ? C.createElement(qm, { gapMode: "margin" }) : null
  );
}
const D2 = Gm(Zm, M2);
var eh = C.forwardRef(function(e, t) {
  return C.createElement(Ti, Ct({}, e, { ref: t, sideCar: D2 }));
});
eh.classNames = Ti.classNames;
const Oi = eh, fl = [
  "Enter",
  " "
], R2 = [
  "ArrowDown",
  "PageUp",
  "Home"
], th = [
  "ArrowUp",
  "PageDown",
  "End"
], j2 = [
  ...R2,
  ...th
], A2 = {
  ltr: [
    ...fl,
    "ArrowRight"
  ],
  rtl: [
    ...fl,
    "ArrowLeft"
  ]
}, I2 = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, ki = "Menu", [ua, L2, F2] = gr(ki), [Br, Ha] = at(ki, [
  F2,
  Nn,
  br
]), Mi = Nn(), nh = br(), [rh, xr] = Br(ki), [V2, Ya] = Br(ki), U2 = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = Mi(t), [c, l] = X(null), u = H(!1), d = qe(a), p = En(o);
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
  }, []), /* @__PURE__ */ w(Oo, i, /* @__PURE__ */ w(rh, {
    scope: t,
    open: n,
    onOpenChange: d,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ w(V2, {
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
}, oh = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = Mi(n);
  return /* @__PURE__ */ w(za, P({}, o, r, {
    ref: t
  }));
}), ah = "MenuPortal", [z2, sh] = Br(ah, {
  forceMount: void 0
}), W2 = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = xr(ah, t);
  return /* @__PURE__ */ w(z2, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ w(it, {
    present: n || a.open
  }, /* @__PURE__ */ w(Ei, {
    asChild: !0,
    container: o
  }, r)));
}, on = "MenuContent", [B2, yu] = Br(on), H2 = /* @__PURE__ */ A((e, t) => {
  const n = sh(on, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = xr(on, e.__scopeMenu), s = Ya(on, e.__scopeMenu);
  return /* @__PURE__ */ w(ua.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(it, {
    present: r || a.open
  }, /* @__PURE__ */ w(ua.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ w(Y2, P({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(K2, P({}, o, {
    ref: t
  })))));
}), Y2 = /* @__PURE__ */ A((e, t) => {
  const n = xr(on, e.__scopeMenu), r = H(null), o = Ce(t, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return Ba(a);
  }, []), /* @__PURE__ */ w(wu, P({}, e, {
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
}), K2 = /* @__PURE__ */ A((e, t) => {
  const n = xr(on, e.__scopeMenu);
  return /* @__PURE__ */ w(wu, P({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), wu = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ...v } = e, g = xr(on, n), x = Ya(on, n), b = Mi(n), y = nh(n), _ = L2(n), [$, E] = X(null), N = H(null), M = Ce(t, N, g.onContentChange), R = H(0), K = H(""), G = H(0), W = H(null), Z = H("right"), F = H(0), j = h ? Oi : qt, I = h ? {
    as: xn,
    allowPinchZoom: !0
  } : void 0, V = (D) => {
    var k, B;
    const q = K.current + D, oe = _().filter(
      (ue) => !ue.disabled
    ), te = document.activeElement, ve = (k = oe.find(
      (ue) => ue.ref.current === te
    )) === null || k === void 0 ? void 0 : k.textValue, me = oe.map(
      (ue) => ue.textValue
    ), re = fC(me, q, ve), se = (B = oe.find(
      (ue) => ue.textValue === re
    )) === null || B === void 0 ? void 0 : B.ref.current;
    (function ue(ne) {
      K.current = ne, window.clearTimeout(R.current), ne !== "" && (R.current = window.setTimeout(
        () => ue(""),
        1e3
      ));
    })(q), se && setTimeout(
      () => se.focus()
    );
  };
  Q(() => () => window.clearTimeout(R.current), []), $i();
  const Y = fe((D) => {
    var k, B;
    return Z.current === ((k = W.current) === null || k === void 0 ? void 0 : k.side) && mC(D, (B = W.current) === null || B === void 0 ? void 0 : B.area);
  }, []);
  return /* @__PURE__ */ w(B2, {
    scope: n,
    searchRef: K,
    onItemEnter: fe((D) => {
      Y(D) && D.preventDefault();
    }, [
      Y
    ]),
    onItemLeave: fe((D) => {
      var k;
      Y(D) || ((k = N.current) === null || k === void 0 || k.focus(), E(null));
    }, [
      Y
    ]),
    onTriggerLeave: fe((D) => {
      Y(D) && D.preventDefault();
    }, [
      Y
    ]),
    pointerGraceTimerRef: G,
    onPointerGraceIntentChange: fe((D) => {
      W.current = D;
    }, [])
  }, /* @__PURE__ */ w(j, I, /* @__PURE__ */ w(_i, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: ee(a, (D) => {
      var k;
      D.preventDefault(), (k = N.current) === null || k === void 0 || k.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ w(Wr, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: p,
    onDismiss: m
  }, /* @__PURE__ */ w(Ni, P({
    asChild: !0
  }, y, {
    dir: x.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: $,
    onCurrentTabStopIdChange: E,
    onEntryFocus: ee(c, (D) => {
      x.isUsingKeyboardRef.current || D.preventDefault();
    })
  }), /* @__PURE__ */ w(Wa, P({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": ph(g.open),
    "data-radix-menu-content": "",
    dir: x.dir
  }, b, v, {
    ref: M,
    style: {
      outline: "none",
      ...v.style
    },
    onKeyDown: ee(v.onKeyDown, (D) => {
      const B = D.target.closest("[data-radix-menu-content]") === D.currentTarget, q = D.ctrlKey || D.altKey || D.metaKey, oe = D.key.length === 1;
      B && (D.key === "Tab" && D.preventDefault(), !q && oe && V(D.key));
      const te = N.current;
      if (D.target !== te || !j2.includes(D.key))
        return;
      D.preventDefault();
      const me = _().filter(
        (re) => !re.disabled
      ).map(
        (re) => re.ref.current
      );
      th.includes(D.key) && me.reverse(), uC(me);
    }),
    onBlur: ee(e.onBlur, (D) => {
      D.currentTarget.contains(D.target) || (window.clearTimeout(R.current), K.current = "");
    }),
    onPointerMove: ee(e.onPointerMove, da((D) => {
      const k = D.target, B = F.current !== D.clientX;
      if (D.currentTarget.contains(k) && B) {
        const q = D.clientX > F.current ? "right" : "left";
        Z.current = q, F.current = D.clientX;
      }
    }))
  })))))));
}), ih = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(de.div, P({
    role: "group"
  }, r, {
    ref: t
  }));
}), G2 = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(de.div, P({}, r, {
    ref: t
  }));
}), pl = "MenuItem", _f = "menu.itemSelect", $u = /* @__PURE__ */ A((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = H(null), s = Ya(pl, e.__scopeMenu), i = yu(pl, e.__scopeMenu), c = Ce(t, a), l = H(!1), u = () => {
    const d = a.current;
    if (!n && d) {
      const p = new CustomEvent(_f, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        _f,
        (m) => r == null ? void 0 : r(m),
        {
          once: !0
        }
      ), Fs(d, p), p.defaultPrevented ? l.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ w(ch, P({}, o, {
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
      n || p && d.key === " " || fl.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), ch = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = yu(pl, n), i = nh(n), c = H(null), l = Ce(t, c), [u, d] = X(!1), [p, m] = X("");
  return Q(() => {
    const h = c.current;
    if (h) {
      var v;
      m(((v = h.textContent) !== null && v !== void 0 ? v : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ w(ua.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? p
  }, /* @__PURE__ */ w(Pi, P({
    asChild: !0
  }, i, {
    focusable: !r
  }), /* @__PURE__ */ w(de.div, P({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: ee(e.onPointerMove, da((h) => {
      r ? s.onItemLeave(h) : (s.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus());
    })),
    onPointerLeave: ee(e.onPointerLeave, da(
      (h) => s.onItemLeave(h)
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
}), Z2 = /* @__PURE__ */ A((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ w(uh, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ w($u, P({
    role: "menuitemcheckbox",
    "aria-checked": Hs(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": _u(n),
    onSelect: ee(
      o.onSelect,
      () => r == null ? void 0 : r(Hs(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), q2 = "MenuRadioGroup", [X2, Q2] = Br(q2, {
  value: void 0,
  onValueChange: () => {
  }
}), J2 = /* @__PURE__ */ A((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = qe(r);
  return /* @__PURE__ */ w(X2, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ w(ih, P({}, o, {
    ref: t
  })));
}), eC = "MenuRadioItem", tC = /* @__PURE__ */ A((e, t) => {
  const { value: n, ...r } = e, o = Q2(eC, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ w(uh, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ w($u, P({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": _u(a),
    onSelect: ee(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), lh = "MenuItemIndicator", [uh, nC] = Br(lh, {
  checked: !1
}), rC = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = nC(lh, n);
  return /* @__PURE__ */ w(it, {
    present: r || Hs(a.checked) || a.checked === !0
  }, /* @__PURE__ */ w(de.span, P({}, o, {
    ref: t,
    "data-state": _u(a.checked)
  })));
}), oC = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(de.div, P({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), dh = "MenuSub", [aC, fh] = Br(dh), sC = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = xr(dh, t), s = Mi(t), [i, c] = X(null), [l, u] = X(null), d = qe(o);
  return Q(() => (a.open === !1 && d(!1), () => d(!1)), [
    a.open,
    d
  ]), /* @__PURE__ */ w(Oo, s, /* @__PURE__ */ w(rh, {
    scope: t,
    open: r,
    onOpenChange: d,
    content: l,
    onContentChange: u
  }, /* @__PURE__ */ w(aC, {
    scope: t,
    contentId: mt(),
    triggerId: mt(),
    trigger: i,
    onTriggerChange: c
  }, n)));
}, hs = "MenuSubTrigger", iC = /* @__PURE__ */ A((e, t) => {
  const n = xr(hs, e.__scopeMenu), r = Ya(hs, e.__scopeMenu), o = fh(hs, e.__scopeMenu), a = yu(hs, e.__scopeMenu), s = H(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, l = {
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
  ]), /* @__PURE__ */ w(oh, P({
    asChild: !0
  }, l), /* @__PURE__ */ w(ch, P({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": ph(n.open)
  }, e, {
    ref: Ra(t, o.onTriggerChange),
    onClick: (d) => {
      var p;
      (p = e.onClick) === null || p === void 0 || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: ee(e.onPointerMove, da((d) => {
      a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: ee(e.onPointerLeave, da((d) => {
      var p;
      u();
      const m = (p = n.content) === null || p === void 0 ? void 0 : p.getBoundingClientRect();
      if (m) {
        var h;
        const v = (h = n.content) === null || h === void 0 ? void 0 : h.dataset.side, g = v === "right", x = g ? -5 : 5, b = m[g ? "left" : "right"], y = m[g ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: d.clientX + x,
              y: d.clientY
            },
            {
              x: b,
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
              x: b,
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
    onKeyDown: ee(e.onKeyDown, (d) => {
      const p = a.searchRef.current !== "";
      if (!(e.disabled || p && d.key === " ") && A2[r.dir].includes(d.key)) {
        var m;
        n.onOpenChange(!0), (m = n.content) === null || m === void 0 || m.focus(), d.preventDefault();
      }
    })
  })));
}), cC = "MenuSubContent", lC = /* @__PURE__ */ A((e, t) => {
  const n = sh(on, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = xr(on, e.__scopeMenu), s = Ya(on, e.__scopeMenu), i = fh(cC, e.__scopeMenu), c = H(null), l = Ce(t, c);
  return /* @__PURE__ */ w(ua.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(it, {
    present: r || a.open
  }, /* @__PURE__ */ w(ua.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(wu, P({
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
      const d = u.currentTarget.contains(u.target), p = I2[s.dir].includes(u.key);
      if (d && p) {
        var m;
        a.onOpenChange(!1), (m = i.trigger) === null || m === void 0 || m.focus(), u.preventDefault();
      }
    })
  })))));
});
function ph(e) {
  return e ? "open" : "closed";
}
function Hs(e) {
  return e === "indeterminate";
}
function _u(e) {
  return Hs(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function uC(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function dC(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function fC(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = dC(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function pC(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function mC(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return pC(n, t);
}
function da(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Cu = U2, Su = oh, Eu = W2, Nu = H2, Pu = ih, Tu = G2, Ou = $u, ku = Z2, Mu = J2, Du = tC, Ru = rC, ju = oC, Au = sC, Iu = iC, Lu = lC, mh = "ContextMenu", [hC, VD] = at(mh, [
  Ha
]), Rt = Ha(), [vC, hh] = hC(mh), gC = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = X(!1), c = Rt(t), l = qe(r), u = fe((d) => {
    i(d), l(d);
  }, [
    l
  ]);
  return /* @__PURE__ */ w(vC, {
    scope: t,
    open: s,
    onOpenChange: u,
    modal: a
  }, /* @__PURE__ */ w(Cu, P({}, c, {
    dir: o,
    open: s,
    onOpenChange: u,
    modal: a
  }), n));
}, bC = "ContextMenuTrigger", xC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = hh(bC, n), s = Rt(n), i = H({
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
  ), /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w(Su, P({}, s, {
    virtualRef: c
  })), /* @__PURE__ */ w(de.span, P({
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
    onPointerDown: r ? e.onPointerDown : ee(e.onPointerDown, vs((p) => {
      u(), l.current = window.setTimeout(
        () => d(p),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : ee(e.onPointerMove, vs(u)),
    onPointerCancel: r ? e.onPointerCancel : ee(e.onPointerCancel, vs(u)),
    onPointerUp: r ? e.onPointerUp : ee(e.onPointerUp, vs(u))
  })));
}), yC = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = Rt(t);
  return /* @__PURE__ */ w(Eu, P({}, r, n));
}, wC = "ContextMenuContent", $C = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = hh(wC, n), a = Rt(n), s = H(!1);
  return /* @__PURE__ */ w(Nu, P({}, a, r, {
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
}), _C = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Pu, P({}, o, r, {
    ref: t
  }));
}), CC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Tu, P({}, o, r, {
    ref: t
  }));
}), SC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Ou, P({}, o, r, {
    ref: t
  }));
}), EC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(ku, P({}, o, r, {
    ref: t
  }));
}), NC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Mu, P({}, o, r, {
    ref: t
  }));
}), PC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Du, P({}, o, r, {
    ref: t
  }));
}), TC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Ru, P({}, o, r, {
    ref: t
  }));
}), OC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(ju, P({}, o, r, {
    ref: t
  }));
}), kC = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = Rt(t), [i, c] = dt({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ w(Au, P({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, MC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Iu, P({}, o, r, {
    ref: t
  }));
}), DC = /* @__PURE__ */ A((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Lu, P({}, o, r, {
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
function vs(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const RC = gC, jC = xC, vh = yC, gh = $C, AC = _C, bh = CC, xh = SC, yh = EC, IC = NC, wh = PC, $h = TC, _h = OC, LC = kC, Ch = MC, Sh = DC, UD = RC, zD = jC, WD = AC, BD = vh, HD = LC, YD = IC, FC = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Ch,
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
      /* @__PURE__ */ f.exports.jsx(No, { className: "ml-auto h-4 w-4" })
    ]
  }
));
FC.displayName = Ch.displayName;
const VC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Sh,
  {
    ref: n,
    className: L(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
VC.displayName = Sh.displayName;
const UC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(vh, { children: /* @__PURE__ */ f.exports.jsx(
  gh,
  {
    ref: n,
    className: L(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
UC.displayName = gh.displayName;
const zC = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  xh,
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
zC.displayName = xh.displayName;
const WC = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  yh,
  {
    ref: o,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx($h, { children: /* @__PURE__ */ f.exports.jsx(ln, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
WC.displayName = yh.displayName;
const BC = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  wh,
  {
    ref: r,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx($h, { children: /* @__PURE__ */ f.exports.jsx(bi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
BC.displayName = wh.displayName;
const HC = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  bh,
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
HC.displayName = bh.displayName;
const YC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  _h,
  {
    ref: n,
    className: L("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
YC.displayName = _h.displayName;
const KC = ({
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
KC.displayName = "ContextMenuShortcut";
var Ka = (e) => e.type === "checkbox", co = (e) => e instanceof Date, Ot = (e) => e == null;
const Eh = (e) => typeof e == "object";
var vt = (e) => !Ot(e) && !Array.isArray(e) && Eh(e) && !co(e), Nh = (e) => vt(e) && e.target ? Ka(e.target) ? e.target.checked : e.target.value : e, GC = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Ph = (e, t) => e.has(GC(t)), ZC = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return vt(t) && t.hasOwnProperty("isPrototypeOf");
}, Fu = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function gn(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Fu && (e instanceof Blob || e instanceof FileList)) && (n || vt(e)))
    if (t = n ? [] : {}, !n && !ZC(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = gn(e[r]));
  else
    return e;
  return t;
}
var Ga = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ut = (e) => e === void 0, xe = (e, t, n) => {
  if (!t || !vt(e))
    return n;
  const r = Ga(t.split(/[,[\].]+?/)).reduce((o, a) => Ot(o) ? o : o[a], e);
  return ut(r) || r === e ? ut(e[t]) ? n : e[t] : r;
};
const Ys = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, nn = {
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
}, Th = S.createContext(null), Di = () => S.useContext(Th), qC = (e) => {
  const { children: t, ...n } = e;
  return S.createElement(Th.Provider, { value: n }, t);
};
var Oh = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== nn.all && (t._proxyFormState[s] = !r || nn.all), n && (n[s] = !0), e[s];
      }
    });
  return o;
}, Kt = (e) => vt(e) && !Object.keys(e).length, kh = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return Kt(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || nn.all));
}, Ps = (e) => Array.isArray(e) ? e : [e], Mh = (e, t, n) => n && t ? e === t : !e || !t || e === t || Ps(e).some((r) => r && (r.startsWith(t) || t.startsWith(r)));
function Vu(e) {
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
function XC(e) {
  const t = Di(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, i] = S.useState(n._formState), c = S.useRef(!0), l = S.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = S.useRef(o);
  return u.current = o, Vu({
    disabled: r,
    next: (d) => c.current && Mh(u.current, d.name, a) && kh(d, l.current, n._updateFormState) && i({
      ...n._formState,
      ...d
    }),
    subject: n._subjects.state
  }), S.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), Oh(s, n, l.current, !1);
}
var bn = (e) => typeof e == "string", Dh = (e, t, n, r, o) => bn(e) ? (r && t.watch.add(e), xe(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), xe(n, a))) : (r && (t.watchAll = !0), n);
function QC(e) {
  const t = Di(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, i = S.useRef(r);
  i.current = r, Vu({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      Mh(i.current, u.name, s) && l(gn(Dh(i.current, n._names, u.values || n._formValues, !1, o)));
    }
  });
  const [c, l] = S.useState(n._getWatch(r, o));
  return S.useEffect(() => n._removeUnmounted()), c;
}
var Uu = (e) => /^\w*$/.test(e), Rh = (e) => Ga(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Xe(e, t, n) {
  let r = -1;
  const o = Uu(t) ? [t] : Rh(t), a = o.length, s = a - 1;
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
function JC(e) {
  const t = Di(), { name: n, control: r = t.control, shouldUnregister: o } = e, a = Ph(r._names.array, n), s = QC({
    control: r,
    name: n,
    defaultValue: xe(r._formValues, n, xe(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), i = XC({
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
      const d = gn(xe(r._options.defaultValues, n));
      Xe(r._defaultValues, n, d), ut(xe(r._formValues, n)) && Xe(r._formValues, n, d);
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
          value: Nh(l),
          name: n
        },
        type: Ys.CHANGE
      }), [n]),
      onBlur: S.useCallback(() => c.current.onBlur({
        target: {
          value: xe(r._formValues, n),
          name: n
        },
        type: Ys.BLUR
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
const eS = (e) => e.render(JC(e));
var jh = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {};
const ml = (e, t, n) => {
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
        vt(s) && ml(s, t);
    }
  }
};
var Cf = (e) => ({
  isOnSubmit: !e || e === nn.onSubmit,
  isOnBlur: e === nn.onBlur,
  isOnChange: e === nn.onChange,
  isOnAll: e === nn.all,
  isOnTouch: e === nn.onTouched
}), Sf = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)))), tS = (e, t, n) => {
  const r = Ga(xe(e, n));
  return Xe(r, "root", t[n]), Xe(e, n, r), e;
}, uo = (e) => typeof e == "boolean", zu = (e) => e.type === "file", ar = (e) => typeof e == "function", Ks = (e) => {
  if (!Fu)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Ts = (e) => bn(e), Wu = (e) => e.type === "radio", Gs = (e) => e instanceof RegExp;
const Ef = {
  value: !1,
  isValid: !1
}, Nf = { value: !0, isValid: !0 };
var Ah = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !ut(e[0].attributes.value) ? ut(e[0].value) || e[0].value === "" ? Nf : { value: e[0].value, isValid: !0 } : Nf
    ) : Ef;
  }
  return Ef;
};
const Pf = {
  isValid: !1,
  value: null
};
var Ih = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Pf) : Pf;
function Tf(e, t, n = "validate") {
  if (Ts(e) || Array.isArray(e) && e.every(Ts) || uo(e) && !e)
    return {
      type: n,
      message: Ts(e) ? e : "",
      ref: t
    };
}
var ro = (e) => vt(e) && !Gs(e) ? e : {
  value: e,
  message: ""
}, Of = async (e, t, n, r, o) => {
  const { ref: a, refs: s, required: i, maxLength: c, minLength: l, min: u, max: d, pattern: p, validate: m, name: h, valueAsNumber: v, mount: g, disabled: x } = e._f, b = xe(t, h);
  if (!g || x)
    return {};
  const y = s ? s[0] : a, _ = (W) => {
    r && y.reportValidity && (y.setCustomValidity(uo(W) ? "" : W || ""), y.reportValidity());
  }, $ = {}, E = Wu(a), N = Ka(a), M = E || N, R = (v || zu(a)) && ut(a.value) && ut(b) || Ks(a) && a.value === "" || b === "" || Array.isArray(b) && !b.length, K = jh.bind(null, h, n, $), G = (W, Z, F, j = Mn.maxLength, I = Mn.minLength) => {
    const V = W ? Z : F;
    $[h] = {
      type: W ? j : I,
      message: V,
      ref: a,
      ...K(W ? j : I, V)
    };
  };
  if (o ? !Array.isArray(b) || !b.length : i && (!M && (R || Ot(b)) || uo(b) && !b || N && !Ah(s).isValid || E && !Ih(s).isValid)) {
    const { value: W, message: Z } = Ts(i) ? { value: !!i, message: i } : ro(i);
    if (W && ($[h] = {
      type: Mn.required,
      message: Z,
      ref: y,
      ...K(Mn.required, Z)
    }, !n))
      return _(Z), $;
  }
  if (!R && (!Ot(u) || !Ot(d))) {
    let W, Z;
    const F = ro(d), j = ro(u);
    if (!Ot(b) && !isNaN(b)) {
      const I = a.valueAsNumber || b && +b;
      Ot(F.value) || (W = I > F.value), Ot(j.value) || (Z = I < j.value);
    } else {
      const I = a.valueAsDate || new Date(b), V = (k) => new Date(new Date().toDateString() + " " + k), Y = a.type == "time", D = a.type == "week";
      bn(F.value) && b && (W = Y ? V(b) > V(F.value) : D ? b > F.value : I > new Date(F.value)), bn(j.value) && b && (Z = Y ? V(b) < V(j.value) : D ? b < j.value : I < new Date(j.value));
    }
    if ((W || Z) && (G(!!W, F.message, j.message, Mn.max, Mn.min), !n))
      return _($[h].message), $;
  }
  if ((c || l) && !R && (bn(b) || o && Array.isArray(b))) {
    const W = ro(c), Z = ro(l), F = !Ot(W.value) && b.length > +W.value, j = !Ot(Z.value) && b.length < +Z.value;
    if ((F || j) && (G(F, W.message, Z.message), !n))
      return _($[h].message), $;
  }
  if (p && !R && bn(b)) {
    const { value: W, message: Z } = ro(p);
    if (Gs(W) && !b.match(W) && ($[h] = {
      type: Mn.pattern,
      message: Z,
      ref: a,
      ...K(Mn.pattern, Z)
    }, !n))
      return _(Z), $;
  }
  if (m) {
    if (ar(m)) {
      const W = await m(b, t), Z = Tf(W, y);
      if (Z && ($[h] = {
        ...Z,
        ...K(Mn.validate, Z.message)
      }, !n))
        return _(Z.message), $;
    } else if (vt(m)) {
      let W = {};
      for (const Z in m) {
        if (!Kt(W) && !n)
          break;
        const F = Tf(await m[Z](b, t), y, Z);
        F && (W = {
          ...F,
          ...K(Z, F.message)
        }, _(F.message), n && ($[h] = W));
      }
      if (!Kt(W) && ($[h] = {
        ref: y,
        ...W
      }, !n))
        return $;
    }
  }
  return _(!0), $;
};
function nS(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = ut(e) ? r++ : e[t[r++]];
  return e;
}
function rS(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !ut(e[t]))
      return !1;
  return !0;
}
function yt(e, t) {
  const n = Array.isArray(t) ? t : Uu(t) ? [t] : Rh(t), r = n.length === 1 ? e : nS(e, n), o = n.length - 1, a = n[o];
  return r && delete r[a], o !== 0 && (vt(r) && Kt(r) || Array.isArray(r) && rS(r)) && yt(e, n.slice(0, -1)), e;
}
function _c() {
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
var Zs = (e) => Ot(e) || !Eh(e);
function Nr(e, t) {
  if (Zs(e) || Zs(t))
    return e === t;
  if (co(e) && co(t))
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
      if (co(a) && co(s) || vt(a) && vt(s) || Array.isArray(a) && Array.isArray(s) ? !Nr(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var Lh = (e) => e.type === "select-multiple", oS = (e) => Wu(e) || Ka(e), Cc = (e) => Ks(e) && e.isConnected, Fh = (e) => {
  for (const t in e)
    if (ar(e[t]))
      return !0;
  return !1;
};
function qs(e, t = {}) {
  const n = Array.isArray(e);
  if (vt(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || vt(e[r]) && !Fh(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, qs(e[r], t[r])) : Ot(e[r]) || (t[r] = !0);
  return t;
}
function Vh(e, t, n) {
  const r = Array.isArray(e);
  if (vt(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || vt(e[o]) && !Fh(e[o]) ? ut(t) || Zs(n[o]) ? n[o] = Array.isArray(e[o]) ? qs(e[o], []) : { ...qs(e[o]) } : Vh(e[o], Ot(t) ? {} : t[o], n[o]) : n[o] = !Nr(e[o], t[o]);
  return n;
}
var Sc = (e, t) => Vh(e, t, qs(t)), Uh = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => ut(e) ? e : t ? e === "" ? NaN : e && +e : n && bn(e) ? new Date(e) : r ? r(e) : e;
function Ec(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return zu(t) ? t.files : Wu(t) ? Ih(e.refs).value : Lh(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Ka(t) ? Ah(e.refs).value : Uh(ut(t.value) ? e.ref.value : t.value, e);
}
var aS = (e, t, n, r) => {
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
}, Qo = (e) => ut(e) ? e : Gs(e) ? e.source : vt(e) ? Gs(e.value) ? e.value.source : e.value : e, sS = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function kf(e, t, n) {
  const r = xe(e, n);
  if (r || Uu(n))
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
var iS = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, cS = (e, t) => !Ga(xe(e, t)).length && yt(e, t);
const lS = {
  mode: nn.onSubmit,
  reValidateMode: nn.onChange,
  shouldFocusError: !0
};
function uS(e = {}, t) {
  let n = {
    ...lS,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: ar(n.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: {}
  }, o = {}, a = vt(n.defaultValues) || vt(n.values) ? gn(n.defaultValues || n.values) || {} : {}, s = n.shouldUnregister ? {} : gn(a), i = {
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
    values: _c(),
    array: _c(),
    state: _c()
  }, m = e.resetOptions && e.resetOptions.keepDirtyValues, h = Cf(n.mode), v = Cf(n.reValidateMode), g = n.criteriaMode === nn.all, x = (T) => (z) => {
    clearTimeout(u), u = setTimeout(T, z);
  }, b = async (T) => {
    if (d.isValid || T) {
      const z = n.resolver ? Kt((await R()).errors) : await G(o, !0);
      z !== r.isValid && p.state.next({
        isValid: z
      });
    }
  }, y = (T) => d.isValidating && p.state.next({
    isValidating: T
  }), _ = (T, z = [], J, pe, le = !0, ae = !0) => {
    if (pe && J) {
      if (i.action = !0, ae && Array.isArray(xe(o, T))) {
        const _e = J(xe(o, T), pe.argA, pe.argB);
        le && Xe(o, T, _e);
      }
      if (ae && Array.isArray(xe(r.errors, T))) {
        const _e = J(xe(r.errors, T), pe.argA, pe.argB);
        le && Xe(r.errors, T, _e), cS(r.errors, T);
      }
      if (d.touchedFields && ae && Array.isArray(xe(r.touchedFields, T))) {
        const _e = J(xe(r.touchedFields, T), pe.argA, pe.argB);
        le && Xe(r.touchedFields, T, _e);
      }
      d.dirtyFields && (r.dirtyFields = Sc(a, s)), p.state.next({
        name: T,
        isDirty: Z(T, z),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      Xe(s, T, z);
  }, $ = (T, z) => {
    Xe(r.errors, T, z), p.state.next({
      errors: r.errors
    });
  }, E = (T, z, J, pe) => {
    const le = xe(o, T);
    if (le) {
      const ae = xe(s, T, ut(J) ? xe(a, T) : J);
      ut(ae) || pe && pe.defaultChecked || z ? Xe(s, T, z ? ae : Ec(le._f)) : I(T, ae), i.mount && b();
    }
  }, N = (T, z, J, pe, le) => {
    let ae = !1, _e = !1;
    const He = {
      name: T
    };
    if (!J || pe) {
      d.isDirty && (_e = r.isDirty, r.isDirty = He.isDirty = Z(), ae = _e !== He.isDirty);
      const We = Nr(xe(a, T), z);
      _e = xe(r.dirtyFields, T), We ? yt(r.dirtyFields, T) : Xe(r.dirtyFields, T, !0), He.dirtyFields = r.dirtyFields, ae = ae || d.dirtyFields && _e !== !We;
    }
    if (J) {
      const We = xe(r.touchedFields, T);
      We || (Xe(r.touchedFields, T, J), He.touchedFields = r.touchedFields, ae = ae || d.touchedFields && We !== J);
    }
    return ae && le && p.state.next(He), ae ? He : {};
  }, M = (T, z, J, pe) => {
    const le = xe(r.errors, T), ae = d.isValid && uo(z) && r.isValid !== z;
    if (e.delayError && J ? (l = x(() => $(T, J)), l(e.delayError)) : (clearTimeout(u), l = null, J ? Xe(r.errors, T, J) : yt(r.errors, T)), (J ? !Nr(le, J) : le) || !Kt(pe) || ae) {
      const _e = {
        ...pe,
        ...ae && uo(z) ? { isValid: z } : {},
        errors: r.errors,
        name: T
      };
      r = {
        ...r,
        ..._e
      }, p.state.next(_e);
    }
    y(!1);
  }, R = async (T) => n.resolver(s, n.context, aS(T || c.mount, o, n.criteriaMode, n.shouldUseNativeValidation)), K = async (T) => {
    const { errors: z } = await R();
    if (T)
      for (const J of T) {
        const pe = xe(z, J);
        pe ? Xe(r.errors, J, pe) : yt(r.errors, J);
      }
    else
      r.errors = z;
    return z;
  }, G = async (T, z, J = {
    valid: !0
  }) => {
    for (const pe in T) {
      const le = T[pe];
      if (le) {
        const { _f: ae, ..._e } = le;
        if (ae) {
          const He = c.array.has(ae.name), We = await Of(le, s, g, n.shouldUseNativeValidation && !z, He);
          if (We[ae.name] && (J.valid = !1, z))
            break;
          !z && (xe(We, ae.name) ? He ? tS(r.errors, We, ae.name) : Xe(r.errors, ae.name, We[ae.name]) : yt(r.errors, ae.name));
        }
        _e && await G(_e, z, J);
      }
    }
    return J.valid;
  }, W = () => {
    for (const T of c.unMount) {
      const z = xe(o, T);
      z && (z._f.refs ? z._f.refs.every((J) => !Cc(J)) : !Cc(z._f.ref)) && me(T);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, Z = (T, z) => (T && z && Xe(s, T, z), !Nr(B(), a)), F = (T, z, J) => Dh(T, c, {
    ...i.mount ? s : ut(z) ? a : bn(T) ? { [T]: z } : z
  }, J, z), j = (T) => Ga(xe(i.mount ? s : a, T, e.shouldUnregister ? xe(a, T, []) : [])), I = (T, z, J = {}) => {
    const pe = xe(o, T);
    let le = z;
    if (pe) {
      const ae = pe._f;
      ae && (!ae.disabled && Xe(s, T, Uh(z, ae)), le = Ks(ae.ref) && Ot(z) ? "" : z, Lh(ae.ref) ? [...ae.ref.options].forEach((_e) => _e.selected = le.includes(_e.value)) : ae.refs ? Ka(ae.ref) ? ae.refs.length > 1 ? ae.refs.forEach((_e) => (!_e.defaultChecked || !_e.disabled) && (_e.checked = Array.isArray(le) ? !!le.find((He) => He === _e.value) : le === _e.value)) : ae.refs[0] && (ae.refs[0].checked = !!le) : ae.refs.forEach((_e) => _e.checked = _e.value === le) : zu(ae.ref) ? ae.ref.value = "" : (ae.ref.value = le, ae.ref.type || p.values.next({
        name: T,
        values: { ...s }
      })));
    }
    (J.shouldDirty || J.shouldTouch) && N(T, le, J.shouldTouch, J.shouldDirty, !0), J.shouldValidate && k(T);
  }, V = (T, z, J) => {
    for (const pe in z) {
      const le = z[pe], ae = `${T}.${pe}`, _e = xe(o, ae);
      (c.array.has(T) || !Zs(le) || _e && !_e._f) && !co(le) ? V(ae, le, J) : I(ae, le, J);
    }
  }, Y = (T, z, J = {}) => {
    const pe = xe(o, T), le = c.array.has(T), ae = gn(z);
    Xe(s, T, ae), le ? (p.array.next({
      name: T,
      values: { ...s }
    }), (d.isDirty || d.dirtyFields) && J.shouldDirty && p.state.next({
      name: T,
      dirtyFields: Sc(a, s),
      isDirty: Z(T, ae)
    })) : pe && !pe._f && !Ot(ae) ? V(T, ae, J) : I(T, ae, J), Sf(T, c) && p.state.next({ ...r }), p.values.next({
      name: T,
      values: { ...s }
    }), !i.mount && t();
  }, D = async (T) => {
    const z = T.target;
    let J = z.name, pe = !0;
    const le = xe(o, J), ae = () => z.type ? Ec(le._f) : Nh(T);
    if (le) {
      let _e, He;
      const We = ae(), It = T.type === Ys.BLUR || T.type === Ys.FOCUS_OUT, qn = !sS(le._f) && !n.resolver && !xe(r.errors, J) && !le._f.deps || iS(It, xe(r.touchedFields, J), r.isSubmitted, v, h), Lt = Sf(J, c, It);
      Xe(s, J, We), It ? (le._f.onBlur && le._f.onBlur(T), l && l(0)) : le._f.onChange && le._f.onChange(T);
      const Ne = N(J, We, It, !1), Ee = !Kt(Ne) || Lt;
      if (!It && p.values.next({
        name: J,
        type: T.type,
        values: { ...s }
      }), qn)
        return d.isValid && b(), Ee && p.state.next({ name: J, ...Lt ? {} : Ne });
      if (!It && Lt && p.state.next({ ...r }), y(!0), n.resolver) {
        const { errors: Ie } = await R([J]), Ge = kf(r.errors, o, J), tt = kf(Ie, o, Ge.name || J);
        _e = tt.error, J = tt.name, He = Kt(Ie);
      } else
        _e = (await Of(le, s, g, n.shouldUseNativeValidation))[J], pe = isNaN(We) || We === xe(s, J, We), pe && (_e ? He = !1 : d.isValid && (He = await G(o, !0)));
      pe && (le._f.deps && k(le._f.deps), M(J, He, _e, Ne));
    }
  }, k = async (T, z = {}) => {
    let J, pe;
    const le = Ps(T);
    if (y(!0), n.resolver) {
      const ae = await K(ut(T) ? T : le);
      J = Kt(ae), pe = T ? !le.some((_e) => xe(ae, _e)) : J;
    } else
      T ? (pe = (await Promise.all(le.map(async (ae) => {
        const _e = xe(o, ae);
        return await G(_e && _e._f ? { [ae]: _e } : _e);
      }))).every(Boolean), !(!pe && !r.isValid) && b()) : pe = J = await G(o);
    return p.state.next({
      ...!bn(T) || d.isValid && J !== r.isValid ? {} : { name: T },
      ...n.resolver || !T ? { isValid: J } : {},
      errors: r.errors,
      isValidating: !1
    }), z.shouldFocus && !pe && ml(o, (ae) => ae && xe(r.errors, ae), T ? le : c.mount), pe;
  }, B = (T) => {
    const z = {
      ...a,
      ...i.mount ? s : {}
    };
    return ut(T) ? z : bn(T) ? xe(z, T) : T.map((J) => xe(z, J));
  }, q = (T, z) => ({
    invalid: !!xe((z || r).errors, T),
    isDirty: !!xe((z || r).dirtyFields, T),
    isTouched: !!xe((z || r).touchedFields, T),
    error: xe((z || r).errors, T)
  }), oe = (T) => {
    T && Ps(T).forEach((z) => yt(r.errors, z)), p.state.next({
      errors: T ? r.errors : {}
    });
  }, te = (T, z, J) => {
    const pe = (xe(o, T, { _f: {} })._f || {}).ref;
    Xe(r.errors, T, {
      ...z,
      ref: pe
    }), p.state.next({
      name: T,
      errors: r.errors,
      isValid: !1
    }), J && J.shouldFocus && pe && pe.focus && pe.focus();
  }, ve = (T, z) => ar(T) ? p.values.subscribe({
    next: (J) => T(F(void 0, z), J)
  }) : F(T, z, !0), me = (T, z = {}) => {
    for (const J of T ? Ps(T) : c.mount)
      c.mount.delete(J), c.array.delete(J), z.keepValue || (yt(o, J), yt(s, J)), !z.keepError && yt(r.errors, J), !z.keepDirty && yt(r.dirtyFields, J), !z.keepTouched && yt(r.touchedFields, J), !n.shouldUnregister && !z.keepDefaultValue && yt(a, J);
    p.values.next({
      values: { ...s }
    }), p.state.next({
      ...r,
      ...z.keepDirty ? { isDirty: Z() } : {}
    }), !z.keepIsValid && b();
  }, re = (T, z = {}) => {
    let J = xe(o, T);
    const pe = uo(z.disabled);
    return Xe(o, T, {
      ...J || {},
      _f: {
        ...J && J._f ? J._f : { ref: { name: T } },
        name: T,
        mount: !0,
        ...z
      }
    }), c.mount.add(T), ut(z.value) || Xe(s, T, z.value), J ? pe && Xe(s, T, z.disabled ? void 0 : xe(s, T, Ec(J._f))) : E(T, !0, z.value), {
      ...pe ? { disabled: z.disabled } : {},
      ...n.progressive ? {
        required: !!z.required,
        min: Qo(z.min),
        max: Qo(z.max),
        minLength: Qo(z.minLength),
        maxLength: Qo(z.maxLength),
        pattern: Qo(z.pattern)
      } : {},
      name: T,
      onChange: D,
      onBlur: D,
      ref: (le) => {
        if (le) {
          re(T, z), J = xe(o, T);
          const ae = ut(le.value) && le.querySelectorAll && le.querySelectorAll("input,select,textarea")[0] || le, _e = oS(ae), He = J._f.refs || [];
          if (_e ? He.find((We) => We === ae) : ae === J._f.ref)
            return;
          Xe(o, T, {
            _f: {
              ...J._f,
              ..._e ? {
                refs: [
                  ...He.filter(Cc),
                  ae,
                  ...Array.isArray(xe(a, T)) ? [{}] : []
                ],
                ref: { type: ae.type, name: T }
              } : { ref: ae }
            }
          }), E(T, !1, void 0, ae);
        } else
          J = xe(o, T, {}), J._f && (J._f.mount = !1), (n.shouldUnregister || z.shouldUnregister) && !(Ph(c.array, T) && i.action) && c.unMount.add(T);
      }
    };
  }, se = () => n.shouldFocusError && ml(o, (T) => T && xe(r.errors, T), c.mount), ue = (T, z) => async (J) => {
    J && (J.preventDefault && J.preventDefault(), J.persist && J.persist());
    let pe = gn(s);
    if (p.state.next({
      isSubmitting: !0
    }), n.resolver) {
      const { errors: le, values: ae } = await R();
      r.errors = le, pe = ae;
    } else
      await G(o);
    yt(r.errors, "root"), Kt(r.errors) ? (p.state.next({
      errors: {}
    }), await T(pe, J)) : (z && await z({ ...r.errors }, J), se(), setTimeout(se)), p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Kt(r.errors),
      submitCount: r.submitCount + 1,
      errors: r.errors
    });
  }, ne = (T, z = {}) => {
    xe(o, T) && (ut(z.defaultValue) ? Y(T, xe(a, T)) : (Y(T, z.defaultValue), Xe(a, T, z.defaultValue)), z.keepTouched || yt(r.touchedFields, T), z.keepDirty || (yt(r.dirtyFields, T), r.isDirty = z.defaultValue ? Z(T, xe(a, T)) : Z()), z.keepError || (yt(r.errors, T), d.isValid && b()), p.state.next({ ...r }));
  }, he = (T, z = {}) => {
    const J = T || a, pe = gn(J), le = T && !Kt(T) ? pe : a;
    if (z.keepDefaultValues || (a = J), !z.keepValues) {
      if (z.keepDirtyValues || m)
        for (const ae of c.mount)
          xe(r.dirtyFields, ae) ? Xe(le, ae, xe(s, ae)) : Y(ae, xe(le, ae));
      else {
        if (Fu && ut(T))
          for (const ae of c.mount) {
            const _e = xe(o, ae);
            if (_e && _e._f) {
              const He = Array.isArray(_e._f.refs) ? _e._f.refs[0] : _e._f.ref;
              if (Ks(He)) {
                const We = He.closest("form");
                if (We) {
                  We.reset();
                  break;
                }
              }
            }
          }
        o = {};
      }
      s = e.shouldUnregister ? z.keepDefaultValues ? gn(a) : {} : gn(le), p.array.next({
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
      isDirty: z.keepDirty ? r.isDirty : !!(z.keepDefaultValues && !Nr(T, a)),
      isSubmitted: z.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: z.keepDirtyValues ? r.dirtyFields : z.keepDefaultValues && T ? Sc(a, T) : {},
      touchedFields: z.keepTouched ? r.touchedFields : {},
      errors: z.keepErrors ? r.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, U = (T, z) => he(ar(T) ? T(s) : T, z);
  return {
    control: {
      register: re,
      unregister: me,
      getFieldState: q,
      handleSubmit: ue,
      setError: te,
      _executeSchema: R,
      _getWatch: F,
      _getDirty: Z,
      _updateValid: b,
      _removeUnmounted: W,
      _updateFieldArray: _,
      _getFieldArray: j,
      _reset: he,
      _resetDefaultValues: () => ar(n.defaultValues) && n.defaultValues().then((T) => {
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
    trigger: k,
    register: re,
    handleSubmit: ue,
    watch: ve,
    setValue: Y,
    getValues: B,
    reset: U,
    resetField: ne,
    clearErrors: oe,
    unregister: me,
    setError: te,
    setFocus: (T, z = {}) => {
      const J = xe(o, T), pe = J && J._f;
      if (pe) {
        const le = pe.refs ? pe.refs[0] : pe.ref;
        le.focus && (le.focus(), z.shouldSelect && le.select());
      }
    },
    getFieldState: q
  };
}
function zh(e = {}) {
  const t = S.useRef(), n = S.useRef(), [r, o] = S.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: ar(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: ar(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...uS(e, () => o((s) => ({ ...s }))),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, Vu({
    subject: a._subjects.state,
    next: (s) => {
      kh(s, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), S.useEffect(() => {
    e.values && !Nr(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values) : a._resetDefaultValues();
  }, [e.values, a]), S.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), t.current.formState = Oh(r, a), t.current;
}
const dS = /* @__PURE__ */ A((e, t) => /* @__PURE__ */ w(de.label, P({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), Wh = dS, fS = Eo(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Pn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Wh,
  {
    ref: n,
    className: L(fS(), e),
    ...t
  }
));
Pn.displayName = Wh.displayName;
const Bh = qC, Hh = C.createContext(
  {}
), Hr = ({
  ...e
}) => /* @__PURE__ */ f.exports.jsx(Hh.Provider, { value: { name: e.name }, children: /* @__PURE__ */ f.exports.jsx(eS, { ...e }) }), Ri = () => {
  const e = C.useContext(Hh), t = C.useContext(Yh), { getFieldState: n, formState: r } = Di(), o = n(e.name, r);
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
}, Yh = C.createContext(
  {}
), yr = C.forwardRef(({ className: e, ...t }, n) => {
  const r = C.useId();
  return /* @__PURE__ */ f.exports.jsx(Yh.Provider, { value: { id: r }, children: /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: L("space-y-2", e), ...t }) });
});
yr.displayName = "FormItem";
const Yr = C.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = Ri();
  return /* @__PURE__ */ f.exports.jsx(
    Pn,
    {
      ref: n,
      className: L(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
Yr.displayName = "FormLabel";
const Za = C.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = Ri();
  return /* @__PURE__ */ f.exports.jsx(
    xn,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
Za.displayName = "FormControl";
const ko = C.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = Ri();
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
ko.displayName = "FormDescription";
const pS = C.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = Ri(), s = o ? String(o == null ? void 0 : o.message) : t;
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
pS.displayName = "FormMessage";
const Kh = "Dialog", [Gh, Zh] = at(Kh), [mS, mn] = Gh(Kh), hS = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = H(null), c = H(null), [l = !1, u] = dt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w(mS, {
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
}, vS = "DialogTrigger", gS = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = mn(vS, n), a = Ce(t, o.triggerRef);
  return /* @__PURE__ */ w(de.button, P({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Bu(o.open)
  }, r, {
    ref: a,
    onClick: ee(e.onClick, o.onOpenToggle)
  }));
}), qh = "DialogPortal", [bS, Xh] = Gh(qh, {
  forceMount: void 0
}), xS = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = mn(qh, t);
  return /* @__PURE__ */ w(bS, {
    scope: t,
    forceMount: n
  }, Vt.map(
    r,
    (s) => /* @__PURE__ */ w(it, {
      present: n || a.open
    }, /* @__PURE__ */ w(Ei, {
      asChild: !0,
      container: o
    }, s))
  ));
}, hl = "DialogOverlay", yS = /* @__PURE__ */ A((e, t) => {
  const n = Xh(hl, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = mn(hl, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ w(it, {
    present: r || a.open
  }, /* @__PURE__ */ w(wS, P({}, o, {
    ref: t
  }))) : null;
}), wS = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = mn(hl, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ w(Oi, {
      as: xn,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ w(de.div, P({
      "data-state": Bu(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), bo = "DialogContent", $S = /* @__PURE__ */ A((e, t) => {
  const n = Xh(bo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = mn(bo, e.__scopeDialog);
  return /* @__PURE__ */ w(it, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ w(_S, P({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(CS, P({}, o, {
    ref: t
  })));
}), _S = /* @__PURE__ */ A((e, t) => {
  const n = mn(bo, e.__scopeDialog), r = H(null), o = Ce(t, n.contentRef, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return Ba(a);
  }, []), /* @__PURE__ */ w(Qh, P({}, e, {
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
}), CS = /* @__PURE__ */ A((e, t) => {
  const n = mn(bo, e.__scopeDialog), r = H(!1), o = H(!1);
  return /* @__PURE__ */ w(Qh, P({}, e, {
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
}), Qh = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = mn(bo, n), c = H(null), l = Ce(t, c);
  return $i(), /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w(_i, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ w(Wr, P({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": Bu(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), Jh = "DialogTitle", SS = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = mn(Jh, n);
  return /* @__PURE__ */ w(de.h2, P({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), ES = "DialogDescription", NS = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = mn(ES, n);
  return /* @__PURE__ */ w(de.p, P({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), PS = "DialogClose", TS = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = mn(PS, n);
  return /* @__PURE__ */ w(de.button, P({
    type: "button"
  }, r, {
    ref: t,
    onClick: ee(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function Bu(e) {
  return e ? "open" : "closed";
}
const OS = "DialogTitleWarning", [kS, KD] = $$(OS, {
  contentName: bo,
  titleName: Jh,
  docsSlug: "dialog"
}), ji = hS, Ai = gS, Mo = xS, Do = yS, Ro = $S, jo = SS, Ao = NS, Io = TS, MS = ji, GD = Ai, ev = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ f.exports.jsx(Mo, { className: L(e), ...n, children: /* @__PURE__ */ f.exports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-4", children: t }) });
ev.displayName = Mo.displayName;
const tv = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Do,
  {
    ref: n,
    className: L(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      e
    ),
    ...t
  }
));
tv.displayName = Do.displayName;
const nv = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(ev, { children: [
  /* @__PURE__ */ f.exports.jsx(tv, {}),
  /* @__PURE__ */ f.exports.jsxs(
    Ro,
    {
      ref: r,
      className: L(
        "fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
        e
      ),
      ...n,
      children: [
        t,
        !n["aria-modal"] && /* @__PURE__ */ f.exports.jsxs(Io, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ f.exports.jsx(yi, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
nv.displayName = Ro.displayName;
const DS = ({
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
DS.displayName = "DialogHeader";
const RS = ({
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
RS.displayName = "DialogFooter";
const jS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  jo,
  {
    ref: n,
    className: L(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
jS.displayName = jo.displayName;
const AS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ao,
  {
    ref: n,
    className: L("text-sm text-muted-foreground", e),
    ...t
  }
));
AS.displayName = Ao.displayName;
const IS = ({ id: e, form: t, label: n, description: r, iconDirection: o, classNameContainer: a, isLoading: s, validateInputIconClassNames: i, rest: c }) => {
  const [l, u] = C.useState(!1);
  return s ? /* @__PURE__ */ f.exports.jsxs("div", { className: L("w-full", a), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsx(St, { className: "h-5 w-full" }) }),
    r && /* @__PURE__ */ f.exports.jsx(St, { className: "h-5 w-full" }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
      o === "left" && /* @__PURE__ */ f.exports.jsx(St, { className: "h-4 w-4 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" }),
      /* @__PURE__ */ f.exports.jsx(
        St,
        {
          className: i()
        }
      ),
      o === "right" && /* @__PURE__ */ f.exports.jsx(St, { className: "h-4 w-4 absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none" })
    ] })
  ] }) : c.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: L("w-full", a), children: [
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
          children: l ? /* @__PURE__ */ f.exports.jsx(cs, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(is, { size: 18 })
        }
      ) }),
      /* @__PURE__ */ f.exports.jsx(
        fa,
        {
          ...c,
          className: L(i(), c.className),
          type: l ? "text" : "password"
        }
      ),
      o === "right" && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ f.exports.jsx(
        "button",
        {
          type: "button",
          tabIndex: -1,
          onClick: () => u((d) => !d),
          children: l ? /* @__PURE__ */ f.exports.jsx(cs, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(is, { size: 18 })
        }
      ) })
    ] })
  ] }) : /* @__PURE__ */ f.exports.jsx(
    Hr,
    {
      control: t.control,
      name: e,
      render: ({ field: d, formState: p }) => {
        var m;
        return /* @__PURE__ */ f.exports.jsxs(yr, { className: L("w-full", a), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            n && /* @__PURE__ */ f.exports.jsxs(Yr, { className: "flex", children: [
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
          /* @__PURE__ */ f.exports.jsx(Za, { children: /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
            o === "left" && /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
              "button",
              {
                type: "button",
                onClick: () => u((h) => !h),
                className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
                tabIndex: -1,
                disabled: c == null ? void 0 : c.disabled,
                children: l ? /* @__PURE__ */ f.exports.jsx(cs, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(is, { size: 18 })
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(
              fa,
              {
                ...d,
                ...c,
                disabled: c == null ? void 0 : c.disabled,
                className: L(i(), c.className),
                type: l ? "text" : "password"
              }
            ),
            o === "right" && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ f.exports.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => u((h) => !h),
                children: l ? /* @__PURE__ */ f.exports.jsx(cs, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(is, { size: 18 })
              }
            ) })
          ] }) })
        ] });
      }
    }
  );
}, LS = ({ id: e, form: t, icon: n, label: r, description: o, iconDirection: a, classNameContainer: s, validateInputIconClassNames: i, isLoading: c, rest: l }) => c ? /* @__PURE__ */ f.exports.jsxs("div", { className: L("w-full", s), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsx(St, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ f.exports.jsx(St, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "relative", children: /* @__PURE__ */ f.exports.jsx(
    St,
    {
      className: L(i(), "w-full h-9 mt-2")
    }
  ) })
] }) : l.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: L("w-full", s), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsxs(Pn, { className: "flex", htmlFor: e, children: [
    r,
    " "
  ] }) }),
  o && /* @__PURE__ */ f.exports.jsx("p", { className: "text-muted-foreground text-xs", children: o }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
  /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
    a === "left" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
    /* @__PURE__ */ f.exports.jsx(
      fa,
      {
        ...l,
        className: i()
      }
    ),
    a === "right" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
  ] })
] }) : /* @__PURE__ */ f.exports.jsx(
  Hr,
  {
    control: t.control,
    name: e,
    render: ({ field: u, formState: d }) => {
      var p;
      return /* @__PURE__ */ f.exports.jsxs(yr, { className: L("w-full", s), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          r && /* @__PURE__ */ f.exports.jsxs(Yr, { className: "flex", children: [
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
          /* @__PURE__ */ f.exports.jsx(Za, { children: /* @__PURE__ */ f.exports.jsx(
            fa,
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
), fa = C.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
    "input",
    {
      type: t,
      className: L(
        "w-full flex h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
fa.displayName = "InputUI";
function Hu({ children: e, id: t, label: n, classNameContainer: r, description: o, icon: a, isLoading: s, iconDirection: i = "left", ...c }) {
  const l = () => i === "left" && (a || c.type === "password") ? "pl-9" : i === "right" ? "pr-9" : "";
  return c.type === "password" ? /* @__PURE__ */ f.exports.jsx(
    IS,
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
    LS,
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
const FS = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), VS = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, Mf = (e) => {
  const t = [
    Ko.VENEZUELAN,
    Ko.JURIDICAL,
    Ko.FOREIGN,
    Ko.PASSPORT,
    Ko.GOVERNMENTAL
  ];
  return !e || e.length === 0 ? t.map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  })) : t.filter((o) => e.includes(o.value)).map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  }));
}, _t = {
  type: {
    id: "pidType",
    tabIndex: void 0,
    buttonClassName: "w-[80px]",
    popoverClassName: "w-[90px]",
    notFoundLabel: "Codigo No Encontrado",
    ctaPlaceholder: "Tipo",
    placeholder: "Buscar...",
    defaultValue: Mf(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: Mf(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: void 0,
    placeholder: "00.000.000",
    maxLength: 10,
    defaultValue: ""
  }
};
function ZD({ form: e, pid: t = _t }) {
  var r, o, a, s, i, c, l, u, d, p, m, h, v, g, x, b, y;
  const n = (_) => {
    var M;
    const { value: $ } = _.target, E = FS($), N = ((M = t == null ? void 0 : t.number) == null ? void 0 : M.id) || _t.number.id;
    e.setValue(N, E);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ f.exports.jsx(
      G7,
      {
        id: ((r = t == null ? void 0 : t.type) == null ? void 0 : r.id) || _t.type.id,
        form: e,
        label: ((o = t == null ? void 0 : t.type) == null ? void 0 : o.label) || _t.type.label,
        items: ((a = t == null ? void 0 : t.type) == null ? void 0 : a.items) || _t.type.items,
        tabIndex: ((s = t == null ? void 0 : t.type) == null ? void 0 : s.tabIndex) || _t.type.tabIndex,
        placeholder: ((i = t == null ? void 0 : t.type) == null ? void 0 : i.placeholder) || _t.type.placeholder,
        defaultValue: ((c = t == null ? void 0 : t.type) == null ? void 0 : c.defaultValue) || _t.type.defaultValue,
        notFoundLabel: ((l = t == null ? void 0 : t.type) == null ? void 0 : l.notFoundLabel) || _t.type.notFoundLabel,
        ctaPlaceholder: ((u = t == null ? void 0 : t.type) == null ? void 0 : u.ctaPlaceholder) || _t.type.ctaPlaceholder,
        buttonClassName: ((d = t == null ? void 0 : t.type) == null ? void 0 : d.buttonClassName) || _t.type.buttonClassName,
        popoverClassName: ((p = t == null ? void 0 : t.type) == null ? void 0 : p.popoverClassName) || _t.type.popoverClassName,
        disabled: (m = t == null ? void 0 : t.type) == null ? void 0 : m.disabled
      }
    ),
    /* @__PURE__ */ f.exports.jsx(
      Hu,
      {
        id: ((h = t == null ? void 0 : t.number) == null ? void 0 : h.id) || _t.number.id,
        form: e,
        type: "text",
        defaultValue: (v = t == null ? void 0 : t.number) == null ? void 0 : v.defaultValue,
        onKeyPress: VS,
        onKeyUp: n,
        tabIndex: ((g = t == null ? void 0 : t.number) == null ? void 0 : g.tabIndex) || _t.number.tabIndex,
        maxLength: ((x = t == null ? void 0 : t.number) == null ? void 0 : x.maxLength) || _t.number.maxLength,
        placeholder: ((b = t == null ? void 0 : t.number) == null ? void 0 : b.placeholder) || _t.number.placeholder,
        disabled: (y = t == null ? void 0 : t.number) == null ? void 0 : y.disabled
      }
    )
  ] });
}
const rv = "Popover", [ov, qD] = at(rv, [
  Nn
]), Yu = Nn(), [US, Lo] = ov(rv), zS = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, i = Yu(t), c = H(null), [l, u] = X(!1), [d = !1, p] = dt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w(Oo, i, /* @__PURE__ */ w(US, {
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
}, WS = "PopoverTrigger", BS = /* @__PURE__ */ A((e, t) => {
  const { __scopePopover: n, ...r } = e, o = Lo(WS, n), a = Yu(n), s = Ce(t, o.triggerRef), i = /* @__PURE__ */ w(de.button, P({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": iv(o.open)
  }, r, {
    ref: s,
    onClick: ee(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? i : /* @__PURE__ */ w(za, P({
    asChild: !0
  }, a), i);
}), av = "PopoverPortal", [HS, YS] = ov(av, {
  forceMount: void 0
}), KS = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Lo(av, t);
  return /* @__PURE__ */ w(HS, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ w(it, {
    present: n || a.open
  }, /* @__PURE__ */ w(Ei, {
    asChild: !0,
    container: o
  }, r)));
}, pa = "PopoverContent", GS = /* @__PURE__ */ A((e, t) => {
  const n = YS(pa, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Lo(pa, e.__scopePopover);
  return /* @__PURE__ */ w(it, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ w(ZS, P({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(qS, P({}, o, {
    ref: t
  })));
}), ZS = /* @__PURE__ */ A((e, t) => {
  const n = Lo(pa, e.__scopePopover), r = H(null), o = Ce(t, r), a = H(!1);
  return Q(() => {
    const s = r.current;
    if (s)
      return Ba(s);
  }, []), /* @__PURE__ */ w(Oi, {
    as: xn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ w(sv, P({}, e, {
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
}), qS = /* @__PURE__ */ A((e, t) => {
  const n = Lo(pa, e.__scopePopover), r = H(!1), o = H(!1);
  return /* @__PURE__ */ w(sv, P({}, e, {
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
}), sv = /* @__PURE__ */ A((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, p = Lo(pa, n), m = Yu(n);
  return $i(), /* @__PURE__ */ w(_i, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ w(Wr, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: u,
    onEscapeKeyDown: i,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ w(Wa, P({
    "data-state": iv(p.open),
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
function iv(e) {
  return e ? "open" : "closed";
}
const XS = zS, QS = BS, JS = KS, cv = GS, Un = XS, zn = QS, _n = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(JS, { children: /* @__PURE__ */ f.exports.jsx(
  cv,
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
_n.displayName = cv.displayName;
const lv = C.forwardRef(
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
lv.displayName = "TextareaUI";
const XD = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, isLoading: i, ...c }) => i ? /* @__PURE__ */ f.exports.jsxs("div", { className: L("w-full"), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsx(St, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ f.exports.jsx(St, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "relative", children: /* @__PURE__ */ f.exports.jsx(
    St,
    {
      className: L("w-full h-9 mt-2")
    }
  ) })
] }) : /* @__PURE__ */ f.exports.jsx(
  Hr,
  {
    control: t.control,
    name: e,
    render: ({ field: l, formState: u }) => {
      var d;
      return /* @__PURE__ */ f.exports.jsxs(yr, { className: L("w-full", s), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          n && /* @__PURE__ */ f.exports.jsxs(Yr, { className: "flex", children: [
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
        /* @__PURE__ */ f.exports.jsx(Za, { children: /* @__PURE__ */ f.exports.jsx(
          lv,
          {
            placeholder: a,
            className: L("resize-none", r),
            ...l,
            ...c
          }
        ) })
      ] });
    }
  }
);
function ma(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Fo(e) {
  const t = H({
    value: e,
    previous: e
  });
  return Mt(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const uv = /* @__PURE__ */ A((e, t) => /* @__PURE__ */ w(de.span, P({}, e, {
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
}))), dv = uv, eE = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], tE = [
  " ",
  "Enter"
], Ii = "Select", [Li, Ku, nE] = gr(Ii), [Vo, QD] = at(Ii, [
  nE,
  Nn
]), Gu = Nn(), [rE, Kr] = Vo(Ii), [oE, aE] = Vo(Ii), sE = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: i, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: p, required: m } = e, h = Gu(t), [v, g] = X(null), [x, b] = X(null), [y, _] = X(!1), $ = En(l), [E = !1, N] = dt({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [M, R] = dt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), K = H(null), G = v ? Boolean(v.closest("form")) : !0, [W, Z] = X(/* @__PURE__ */ new Set()), F = Array.from(W).map(
    (j) => j.props.value
  ).join(";");
  return /* @__PURE__ */ w(Oo, h, /* @__PURE__ */ w(rE, {
    required: m,
    scope: t,
    trigger: v,
    onTriggerChange: g,
    valueNode: x,
    onValueNodeChange: b,
    valueNodeHasChildren: y,
    onValueNodeHasChildrenChange: _,
    contentId: mt(),
    value: M,
    onValueChange: R,
    open: E,
    onOpenChange: N,
    dir: $,
    triggerPointerDownPosRef: K,
    disabled: p
  }, /* @__PURE__ */ w(Li.Provider, {
    scope: t
  }, /* @__PURE__ */ w(oE, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: fe((j) => {
      Z(
        (I) => new Set(I).add(j)
      );
    }, []),
    onNativeOptionRemove: fe((j) => {
      Z((I) => {
        const V = new Set(I);
        return V.delete(j), V;
      });
    }, [])
  }, n)), G ? /* @__PURE__ */ w(mv, {
    key: F,
    "aria-hidden": !0,
    required: m,
    tabIndex: -1,
    name: u,
    autoComplete: d,
    value: M,
    onChange: (j) => R(j.target.value),
    disabled: p
  }, M === void 0 ? /* @__PURE__ */ w("option", {
    value: ""
  }) : null, Array.from(W)) : null));
}, iE = "SelectTrigger", cE = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Gu(n), s = Kr(iE, n), i = s.disabled || r, c = Ce(t, s.onTriggerChange), l = Ku(n), [u, d, p] = hv((h) => {
    const v = l().filter(
      (b) => !b.disabled
    ), g = v.find(
      (b) => b.value === s.value
    ), x = vv(v, h, g);
    x !== void 0 && s.onValueChange(x.value);
  }), m = () => {
    i || (s.onOpenChange(!0), p());
  };
  return /* @__PURE__ */ w(za, P({
    asChild: !0
  }, a), /* @__PURE__ */ w(de.button, P({
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
    onClick: ee(o.onClick, (h) => {
      h.currentTarget.focus();
    }),
    onPointerDown: ee(o.onPointerDown, (h) => {
      const v = h.target;
      v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && (m(), s.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      }, h.preventDefault());
    }),
    onKeyDown: ee(o.onKeyDown, (h) => {
      const v = u.current !== "";
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && d(h.key), !(v && h.key === " ") && eE.includes(h.key) && (m(), h.preventDefault());
    })
  })));
}), lE = "SelectValue", uE = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s, ...i } = e, c = Kr(lE, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = Ce(t, c.onValueNodeChange);
  return $t(() => {
    l(u);
  }, [
    l,
    u
  ]), /* @__PURE__ */ w(de.span, P({}, i, {
    ref: d,
    style: {
      pointerEvents: "none"
    }
  }), c.value === void 0 && s !== void 0 ? s : a);
}), dE = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ w(de.span, P({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), fE = (e) => /* @__PURE__ */ w(Ei, P({
  asChild: !0
}, e)), xo = "SelectContent", pE = /* @__PURE__ */ A((e, t) => {
  const n = Kr(xo, e.__scopeSelect), [r, o] = X();
  if ($t(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ Zl(/* @__PURE__ */ w(fv, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ w(Li.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ w("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ w(mE, P({}, e, {
    ref: t
  }));
}), Dn = 10, [fv, Fi] = Vo(xo), mE = /* @__PURE__ */ A((e, t) => {
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
    ...x
  } = e, b = Kr(xo, n), [y, _] = X(null), [$, E] = X(null), N = Ce(
    t,
    (re) => _(re)
  ), [M, R] = X(null), [K, G] = X(null), W = Ku(n), [Z, F] = X(!1), j = H(!1);
  Q(() => {
    if (y)
      return Ba(y);
  }, [
    y
  ]), $i();
  const I = fe((re) => {
    const [se, ...ue] = W().map(
      (U) => U.ref.current
    ), [ne] = ue.slice(-1), he = document.activeElement;
    for (const U of re)
      if (U === he || (U == null || U.scrollIntoView({
        block: "nearest"
      }), U === se && $ && ($.scrollTop = 0), U === ne && $ && ($.scrollTop = $.scrollHeight), U == null || U.focus(), document.activeElement !== he))
        return;
  }, [
    W,
    $
  ]), V = fe(
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
  Q(() => {
    Z && V();
  }, [
    Z,
    V
  ]);
  const { onOpenChange: Y, triggerPointerDownPosRef: D } = b;
  Q(() => {
    if (y) {
      let re = {
        x: 0,
        y: 0
      };
      const se = (ne) => {
        var he, U, ge, $e;
        re = {
          x: Math.abs(Math.round(ne.pageX) - ((he = (U = D.current) === null || U === void 0 ? void 0 : U.x) !== null && he !== void 0 ? he : 0)),
          y: Math.abs(Math.round(ne.pageY) - ((ge = ($e = D.current) === null || $e === void 0 ? void 0 : $e.y) !== null && ge !== void 0 ? ge : 0))
        };
      }, ue = (ne) => {
        re.x <= 10 && re.y <= 10 ? ne.preventDefault() : y.contains(ne.target) || Y(!1), document.removeEventListener("pointermove", se), D.current = null;
      };
      return D.current !== null && (document.addEventListener("pointermove", se), document.addEventListener("pointerup", ue, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", se), document.removeEventListener("pointerup", ue, {
          capture: !0
        });
      };
    }
  }, [
    y,
    Y,
    D
  ]), Q(() => {
    const re = () => Y(!1);
    return window.addEventListener("blur", re), window.addEventListener("resize", re), () => {
      window.removeEventListener("blur", re), window.removeEventListener("resize", re);
    };
  }, [
    Y
  ]);
  const [k, B] = hv((re) => {
    const se = W().filter(
      (he) => !he.disabled
    ), ue = se.find(
      (he) => he.ref.current === document.activeElement
    ), ne = vv(se, re, ue);
    ne && setTimeout(
      () => ne.ref.current.focus()
    );
  }), q = fe((re, se, ue) => {
    const ne = !j.current && !ue;
    (b.value !== void 0 && b.value === se || ne) && (R(re), ne && (j.current = !0));
  }, [
    b.value
  ]), oe = fe(
    () => y == null ? void 0 : y.focus(),
    [
      y
    ]
  ), te = fe((re, se, ue) => {
    const ne = !j.current && !ue;
    (b.value !== void 0 && b.value === se || ne) && G(re);
  }, [
    b.value
  ]), ve = r === "popper" ? Df : hE, me = ve === Df ? {
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
  return /* @__PURE__ */ w(fv, {
    scope: n,
    content: y,
    viewport: $,
    onViewportChange: E,
    itemRefCallback: q,
    selectedItem: M,
    onItemLeave: oe,
    itemTextRefCallback: te,
    focusSelectedItem: V,
    selectedItemText: K,
    position: r,
    isPositioned: Z,
    searchRef: k
  }, /* @__PURE__ */ w(Oi, {
    as: xn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ w(_i, {
    asChild: !0,
    trapped: b.open,
    onMountAutoFocus: (re) => {
      re.preventDefault();
    },
    onUnmountAutoFocus: ee(o, (re) => {
      var se;
      (se = b.trigger) === null || se === void 0 || se.focus({
        preventScroll: !0
      }), re.preventDefault();
    })
  }, /* @__PURE__ */ w(Wr, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (re) => re.preventDefault(),
    onDismiss: () => b.onOpenChange(!1)
  }, /* @__PURE__ */ w(ve, P({
    role: "listbox",
    id: b.contentId,
    "data-state": b.open ? "open" : "closed",
    dir: b.dir,
    onContextMenu: (re) => re.preventDefault()
  }, x, me, {
    onPlaced: () => F(!0),
    ref: N,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...x.style
    },
    onKeyDown: ee(x.onKeyDown, (re) => {
      const se = re.ctrlKey || re.altKey || re.metaKey;
      if (re.key === "Tab" && re.preventDefault(), !se && re.key.length === 1 && B(re.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(re.key)) {
        let ne = W().filter(
          (he) => !he.disabled
        ).map(
          (he) => he.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(re.key) && (ne = ne.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(re.key)) {
          const he = re.target, U = ne.indexOf(he);
          ne = ne.slice(U + 1);
        }
        setTimeout(
          () => I(ne)
        ), re.preventDefault();
      }
    })
  }))))));
}), hE = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Kr(xo, n), s = Fi(xo, n), [i, c] = X(null), [l, u] = X(null), d = Ce(
    t,
    (N) => u(N)
  ), p = Ku(n), m = H(!1), h = H(!0), { viewport: v, selectedItem: g, selectedItemText: x, focusSelectedItem: b } = s, y = fe(() => {
    if (a.trigger && a.valueNode && i && l && v && g && x) {
      const N = a.trigger.getBoundingClientRect(), M = l.getBoundingClientRect(), R = a.valueNode.getBoundingClientRect(), K = x.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const he = K.left - M.left, U = R.left - he, ge = N.left - U, $e = N.width + ge, Te = Math.max($e, M.width), T = window.innerWidth - Dn, z = ma(U, [
          Dn,
          T - Te
        ]);
        i.style.minWidth = $e + "px", i.style.left = z + "px";
      } else {
        const he = M.right - K.right, U = window.innerWidth - R.right - he, ge = window.innerWidth - N.right - U, $e = N.width + ge, Te = Math.max($e, M.width), T = window.innerWidth - Dn, z = ma(U, [
          Dn,
          T - Te
        ]);
        i.style.minWidth = $e + "px", i.style.right = z + "px";
      }
      const G = p(), W = window.innerHeight - Dn * 2, Z = v.scrollHeight, F = window.getComputedStyle(l), j = parseInt(F.borderTopWidth, 10), I = parseInt(F.paddingTop, 10), V = parseInt(F.borderBottomWidth, 10), Y = parseInt(F.paddingBottom, 10), D = j + I + Z + Y + V, k = Math.min(g.offsetHeight * 5, D), B = window.getComputedStyle(v), q = parseInt(B.paddingTop, 10), oe = parseInt(B.paddingBottom, 10), te = N.top + N.height / 2 - Dn, ve = W - te, me = g.offsetHeight / 2, re = g.offsetTop + me, se = j + I + re, ue = D - se;
      if (se <= te) {
        const he = g === G[G.length - 1].ref.current;
        i.style.bottom = "0px";
        const U = l.clientHeight - v.offsetTop - v.offsetHeight, ge = Math.max(ve, me + (he ? oe : 0) + U + V), $e = se + ge;
        i.style.height = $e + "px";
      } else {
        const he = g === G[0].ref.current;
        i.style.top = "0px";
        const ge = Math.max(te, j + v.offsetTop + (he ? q : 0) + me) + ue;
        i.style.height = ge + "px", v.scrollTop = se - te + v.offsetTop;
      }
      i.style.margin = `${Dn}px 0`, i.style.minHeight = k + "px", i.style.maxHeight = W + "px", r == null || r(), requestAnimationFrame(
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
    x,
    a.dir,
    r
  ]);
  $t(
    () => y(),
    [
      y
    ]
  );
  const [_, $] = X();
  $t(() => {
    l && $(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const E = fe((N) => {
    N && h.current === !0 && (y(), b == null || b(), h.current = !1);
  }, [
    y,
    b
  ]);
  return /* @__PURE__ */ w(vE, {
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
      zIndex: _
    }
  }, /* @__PURE__ */ w(de.div, P({}, o, {
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
}), Df = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Dn, ...a } = e, s = Gu(n);
  return /* @__PURE__ */ w(Wa, P({}, s, a, {
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
}), [vE, gE] = Vo(xo, {}), Rf = "SelectViewport", bE = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Fi(Rf, n), a = gE(Rf, n), s = Ce(t, o.onViewportChange), i = H(0);
  return /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ w(Li.Slot, {
    scope: n
  }, /* @__PURE__ */ w(de.div, P({
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
          const m = window.innerHeight - Dn * 2, h = parseFloat(u.style.minHeight), v = parseFloat(u.style.height), g = Math.max(h, v);
          if (g < m) {
            const x = g + p, b = Math.min(m, x), y = x - b;
            u.style.height = b + "px", u.style.bottom === "0px" && (l.scrollTop = y > 0 ? y : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      i.current = l.scrollTop;
    })
  }))));
}), xE = "SelectGroup", [yE, wE] = Vo(xE), $E = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = mt();
  return /* @__PURE__ */ w(yE, {
    scope: n,
    id: o
  }, /* @__PURE__ */ w(de.div, P({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), _E = "SelectLabel", CE = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = wE(_E, n);
  return /* @__PURE__ */ w(de.div, P({
    id: o.id
  }, r, {
    ref: t
  }));
}), vl = "SelectItem", [SE, pv] = Vo(vl), EE = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, i = Kr(vl, n), c = Fi(vl, n), l = i.value === r, [u, d] = X(a ?? ""), [p, m] = X(!1), h = Ce(t, (x) => {
    var b;
    return (b = c.itemRefCallback) === null || b === void 0 ? void 0 : b.call(c, x, r, o);
  }), v = mt(), g = () => {
    o || (i.onValueChange(r), i.onOpenChange(!1));
  };
  return /* @__PURE__ */ w(SE, {
    scope: n,
    value: r,
    disabled: o,
    textId: v,
    isSelected: l,
    onItemTextChange: fe((x) => {
      d((b) => {
        var y;
        return b || ((y = x == null ? void 0 : x.textContent) !== null && y !== void 0 ? y : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ w(Li.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: u
  }, /* @__PURE__ */ w(de.div, P({
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
    onFocus: ee(
      s.onFocus,
      () => m(!0)
    ),
    onBlur: ee(
      s.onBlur,
      () => m(!1)
    ),
    onPointerUp: ee(s.onPointerUp, g),
    onPointerMove: ee(s.onPointerMove, (x) => {
      if (o) {
        var b;
        (b = c.onItemLeave) === null || b === void 0 || b.call(c);
      } else
        x.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: ee(s.onPointerLeave, (x) => {
      if (x.currentTarget === document.activeElement) {
        var b;
        (b = c.onItemLeave) === null || b === void 0 || b.call(c);
      }
    }),
    onKeyDown: ee(s.onKeyDown, (x) => {
      var b;
      ((b = c.searchRef) === null || b === void 0 ? void 0 : b.current) !== "" && x.key === " " || (tE.includes(x.key) && g(), x.key === " " && x.preventDefault());
    })
  }))));
}), gs = "SelectItemText", NE = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = Kr(gs, n), i = Fi(gs, n), c = pv(gs, n), l = aE(gs, n), [u, d] = X(null), p = Ce(
    t,
    (x) => d(x),
    c.onItemTextChange,
    (x) => {
      var b;
      return (b = i.itemTextRefCallback) === null || b === void 0 ? void 0 : b.call(i, x, c.value, c.disabled);
    }
  ), m = u == null ? void 0 : u.textContent, h = Mt(
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
  ), { onNativeOptionAdd: v, onNativeOptionRemove: g } = l;
  return $t(() => (v(h), () => g(h)), [
    v,
    g,
    h
  ]), /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w(de.span, P({
    id: c.textId
  }, a, {
    ref: p
  })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ Zl(a.children, s.valueNode) : null);
}), PE = "SelectItemIndicator", TE = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return pv(PE, n).isSelected ? /* @__PURE__ */ w(de.span, P({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), OE = /* @__PURE__ */ A((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ w(de.div, P({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
}), mv = /* @__PURE__ */ A((e, t) => {
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
  ]), /* @__PURE__ */ w(uv, {
    asChild: !0
  }, /* @__PURE__ */ w("select", P({}, r, {
    ref: a,
    defaultValue: n
  })));
});
mv.displayName = "BubbleSelect";
function hv(e) {
  const t = qe(e), n = H(""), r = H(0), o = fe((s) => {
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
function vv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = kE(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function kE(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const ME = sE, gv = cE, DE = uE, RE = dE, jE = fE, bv = pE, AE = bE, IE = $E, xv = CE, yv = EE, LE = NE, FE = TE, wv = OE, Zu = ME, VE = IE, qu = DE, Vi = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  gv,
  {
    ref: r,
    className: L(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(RE, { asChild: !0, children: /* @__PURE__ */ f.exports.jsx(sa, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Vi.displayName = gv.displayName;
const Ui = C.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ f.exports.jsx(jE, { children: /* @__PURE__ */ f.exports.jsx(
  bv,
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
      AE,
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
Ui.displayName = bv.displayName;
const UE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  xv,
  {
    ref: n,
    className: L("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
UE.displayName = xv.displayName;
const zi = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  yv,
  {
    ref: r,
    className: L(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(FE, { children: /* @__PURE__ */ f.exports.jsx(ln, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ f.exports.jsx(LE, { children: t })
    ]
  }
));
zi.displayName = yv.displayName;
const zE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  wv,
  {
    ref: n,
    className: L("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
zE.displayName = wv.displayName;
const $v = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
$v.displayName = "Card";
const WE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: L("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
WE.displayName = "CardHeader";
const BE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
BE.displayName = "CardTitle";
const HE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "p",
  {
    ref: n,
    className: L("text-sm text-muted-foreground", e),
    ...t
  }
));
HE.displayName = "CardDescription";
const YE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: L("p-6 pt-0", e), ...t }));
YE.displayName = "CardContent";
const KE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: L(" flex items-center p-6 pt-0", e),
    ...t
  }
));
KE.displayName = "CardFooter";
const _v = "Checkbox", [GE, JD] = at(_v), [ZE, qE] = GE(_v), XE = /* @__PURE__ */ A((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, p] = X(null), m = Ce(
    t,
    (y) => p(y)
  ), h = H(!1), v = d ? Boolean(d.closest("form")) : !0, [g = !1, x] = dt({
    prop: o,
    defaultProp: a,
    onChange: l
  }), b = H(g);
  return Q(() => {
    const y = d == null ? void 0 : d.form;
    if (y) {
      const _ = () => x(b.current);
      return y.addEventListener("reset", _), () => y.removeEventListener("reset", _);
    }
  }, [
    d,
    x
  ]), /* @__PURE__ */ w(ZE, {
    scope: n,
    state: g,
    disabled: i
  }, /* @__PURE__ */ w(de.button, P({
    type: "button",
    role: "checkbox",
    "aria-checked": Pr(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": Cv(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: m,
    onKeyDown: ee(e.onKeyDown, (y) => {
      y.key === "Enter" && y.preventDefault();
    }),
    onClick: ee(e.onClick, (y) => {
      x(
        (_) => Pr(_) ? !0 : !_
      ), v && (h.current = y.isPropagationStopped(), h.current || y.stopPropagation());
    })
  })), v && /* @__PURE__ */ w(eN, {
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
}), QE = "CheckboxIndicator", JE = /* @__PURE__ */ A((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = qE(QE, n);
  return /* @__PURE__ */ w(it, {
    present: r || Pr(a.state) || a.state === !0
  }, /* @__PURE__ */ w(de.span, P({
    "data-state": Cv(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), eN = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = H(null), s = Fo(n), i = Ua(t);
  return Q(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && d) {
      const p = new Event("click", {
        bubbles: r
      });
      c.indeterminate = Pr(n), d.call(c, Pr(n) ? !1 : n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ w("input", P({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: Pr(n) ? !1 : n
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
function Pr(e) {
  return e === "indeterminate";
}
function Cv(e) {
  return Pr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Sv = XE, tN = JE, Ev = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Sv,
  {
    ref: n,
    className: L(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.exports.jsx(
      tN,
      {
        className: L("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ f.exports.jsx(ln, { className: "h-4 w-4" })
      }
    )
  }
));
Ev.displayName = Sv.displayName;
const Nv = "DropdownMenu", [nN, e8] = at(Nv, [
  Ha
]), jt = Ha(), [rN, Pv] = nN(Nv), oN = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = jt(t), l = H(null), [u = !1, d] = dt({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ w(rN, {
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
  }, /* @__PURE__ */ w(Cu, P({}, c, {
    open: u,
    onOpenChange: d,
    dir: r,
    modal: i
  }), n));
}, aN = "DropdownMenuTrigger", sN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Pv(aN, n), s = jt(n);
  return /* @__PURE__ */ w(Su, P({
    asChild: !0
  }, s), /* @__PURE__ */ w(de.button, P({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: Ra(t, a.triggerRef),
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
}), iN = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = jt(t);
  return /* @__PURE__ */ w(Eu, P({}, r, n));
}, cN = "DropdownMenuContent", lN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Pv(cN, n), a = jt(n), s = H(!1);
  return /* @__PURE__ */ w(Nu, P({
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
}), uN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jt(n);
  return /* @__PURE__ */ w(Pu, P({}, o, r, {
    ref: t
  }));
}), dN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jt(n);
  return /* @__PURE__ */ w(Tu, P({}, o, r, {
    ref: t
  }));
}), fN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jt(n);
  return /* @__PURE__ */ w(Ou, P({}, o, r, {
    ref: t
  }));
}), pN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jt(n);
  return /* @__PURE__ */ w(ku, P({}, o, r, {
    ref: t
  }));
}), mN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jt(n);
  return /* @__PURE__ */ w(Mu, P({}, o, r, {
    ref: t
  }));
}), hN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jt(n);
  return /* @__PURE__ */ w(Du, P({}, o, r, {
    ref: t
  }));
}), vN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jt(n);
  return /* @__PURE__ */ w(Ru, P({}, o, r, {
    ref: t
  }));
}), gN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jt(n);
  return /* @__PURE__ */ w(ju, P({}, o, r, {
    ref: t
  }));
}), bN = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = jt(t), [i = !1, c] = dt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ w(Au, P({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, xN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jt(n);
  return /* @__PURE__ */ w(Iu, P({}, o, r, {
    ref: t
  }));
}), yN = /* @__PURE__ */ A((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = jt(n);
  return /* @__PURE__ */ w(Lu, P({}, o, r, {
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
}), wN = oN, $N = sN, Tv = iN, Ov = lN, _N = uN, kv = dN, Mv = fN, Dv = pN, CN = mN, Rv = hN, jv = vN, Av = gN, SN = bN, Iv = xN, Lv = yN, t8 = wN, n8 = $N, r8 = _N, o8 = Tv, a8 = SN, s8 = CN, EN = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Iv,
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
      /* @__PURE__ */ f.exports.jsx(No, { className: "ml-auto h-4 w-4" })
    ]
  }
));
EN.displayName = Iv.displayName;
const NN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Lv,
  {
    ref: n,
    className: L(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
NN.displayName = Lv.displayName;
const PN = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(Tv, { children: /* @__PURE__ */ f.exports.jsx(
  Ov,
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
PN.displayName = Ov.displayName;
const TN = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Mv,
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
TN.displayName = Mv.displayName;
const ON = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Dv,
  {
    ref: o,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(jv, { children: /* @__PURE__ */ f.exports.jsx(ln, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
ON.displayName = Dv.displayName;
const kN = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Rv,
  {
    ref: r,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(jv, { children: /* @__PURE__ */ f.exports.jsx(bi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
kN.displayName = Rv.displayName;
const MN = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  kv,
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
MN.displayName = kv.displayName;
const DN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Av,
  {
    ref: n,
    className: L("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
DN.displayName = Av.displayName;
const RN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: L("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
RN.displayName = "DropdownMenuShortcut";
const gl = "horizontal", jN = [
  "horizontal",
  "vertical"
], Fv = /* @__PURE__ */ A((e, t) => {
  const { decorative: n, orientation: r = gl, ...o } = e, a = Vv(r) ? r : gl, i = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ w(de.div, P({
    "data-orientation": a
  }, i, o, {
    ref: t
  }));
});
Fv.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Vv(r) ? new Error(AN(o, n)) : null;
  }
};
function AN(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${gl}\`.`;
}
function Vv(e) {
  return jN.includes(e);
}
const Uv = Fv, qa = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
    Uv,
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
qa.displayName = Uv.displayName;
function fo(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function IN(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function zv(...e) {
  return (t) => e.forEach(
    (n) => IN(n, t)
  );
}
function Xa(...e) {
  return fe(zv(...e), e);
}
function LN(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ bt(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: p, children: m, ...h } = d, v = (p == null ? void 0 : p[e][c]) || i, g = Mt(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ w(v.Provider, {
        value: g
      }, m);
    }
    function u(d, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, h = Qe(m);
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
    const a = n.map((s) => /* @__PURE__ */ bt(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return Mt(
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
    FN(o, ...t)
  ];
}
function FN(...e) {
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
      return Mt(
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
const bl = Boolean(globalThis == null ? void 0 : globalThis.document) ? Da : () => {
}, VN = C["useId".toString()] || (() => {
});
let UN = 0;
function Nc(e) {
  const [t, n] = C.useState(VN());
  return bl(() => {
    e || n(
      (r) => r ?? String(UN++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function Dr(e) {
  const t = H(e);
  return Q(() => {
    t.current = e;
  }), Mt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function zN({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = WN({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = Dr(n), c = fe((l) => {
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
function WN({ defaultProp: e, onChange: t }) {
  const n = X(e), [r] = n, o = H(r), a = Dr(t);
  return Q(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const Xu = /* @__PURE__ */ A((e, t) => {
  const { children: n, ...r } = e, o = Vt.toArray(n), a = o.find(HN);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Vt.count(s) > 1 ? Vt.only(null) : /* @__PURE__ */ sr(s) ? s.props.children : null : c);
    return /* @__PURE__ */ w(xl, P({}, r, {
      ref: t
    }), /* @__PURE__ */ sr(s) ? /* @__PURE__ */ So(s, void 0, i) : null);
  }
  return /* @__PURE__ */ w(xl, P({}, r, {
    ref: t
  }), n);
});
Xu.displayName = "Slot";
const xl = /* @__PURE__ */ A((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ sr(n) ? /* @__PURE__ */ So(n, {
    ...YN(r, n.props),
    ref: zv(t, n.ref)
  }) : Vt.count(n) > 1 ? Vt.only(null) : null;
});
xl.displayName = "SlotClone";
const BN = ({ children: e }) => /* @__PURE__ */ w(qt, null, e);
function HN(e) {
  return /* @__PURE__ */ sr(e) && e.type === BN;
}
function YN(e, t) {
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
const KN = [
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
], Wi = KN.reduce((e, t) => {
  const n = /* @__PURE__ */ A((r, o) => {
    const { asChild: a, ...s } = r, i = a ? Xu : t;
    return Q(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ w(i, P({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function GN(e, t) {
  e && gi(
    () => e.dispatchEvent(t)
  );
}
function ZN(e) {
  const t = Dr(e);
  Q(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const yl = "dismissableLayer.update", qN = "dismissableLayer.pointerDownOutside", XN = "dismissableLayer.focusOutside";
let jf;
const QN = /* @__PURE__ */ bt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), JN = /* @__PURE__ */ A((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, onDismiss: i, ...c } = e, l = Qe(QN), [u, d] = X(null), [, p] = X({}), m = Xa(
    t,
    (E) => d(E)
  ), h = Array.from(l.layers), [v] = [
    ...l.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = h.indexOf(v), x = u ? h.indexOf(u) : -1, b = l.layersWithOutsidePointerEventsDisabled.size > 0, y = x >= g, _ = e5((E) => {
    const N = E.target, M = [
      ...l.branches
    ].some(
      (R) => R.contains(N)
    );
    !y || M || (o == null || o(E), s == null || s(E), E.defaultPrevented || i == null || i());
  }), $ = t5((E) => {
    const N = E.target;
    [
      ...l.branches
    ].some(
      (R) => R.contains(N)
    ) || (a == null || a(E), s == null || s(E), E.defaultPrevented || i == null || i());
  });
  return ZN((E) => {
    x === l.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && i && (E.preventDefault(), i()));
  }), Q(() => {
    if (u)
      return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (jf = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Af(), () => {
        n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = jf);
      };
  }, [
    u,
    n,
    l
  ]), Q(() => () => {
    u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), Af());
  }, [
    u,
    l
  ]), Q(() => {
    const E = () => p({});
    return document.addEventListener(yl, E), () => document.removeEventListener(yl, E);
  }, []), /* @__PURE__ */ w(Wi.div, P({}, c, {
    ref: m,
    style: {
      pointerEvents: b ? y ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: fo(e.onFocusCapture, $.onFocusCapture),
    onBlurCapture: fo(e.onBlurCapture, $.onBlurCapture),
    onPointerDownCapture: fo(e.onPointerDownCapture, _.onPointerDownCapture)
  }));
});
function e5(e) {
  const t = Dr(e), n = H(!1), r = H(() => {
  });
  return Q(() => {
    const o = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          Wv(qN, t, i, {
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
function t5(e) {
  const t = Dr(e), n = H(!1);
  return Q(() => {
    const r = (o) => {
      o.target && !n.current && Wv(XN, t, {
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
function Af() {
  const e = new CustomEvent(yl);
  document.dispatchEvent(e);
}
function Wv(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? GN(o, a) : o.dispatchEvent(a);
}
const Pc = "focusScope.autoFocusOnMount", Tc = "focusScope.autoFocusOnUnmount", If = {
  bubbles: !1,
  cancelable: !0
}, n5 = /* @__PURE__ */ A((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = X(null), l = Dr(o), u = Dr(a), d = H(null), p = Xa(
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
  Q(() => {
    if (r) {
      let v = function(x) {
        if (m.paused || !i)
          return;
        const b = x.target;
        i.contains(b) ? d.current = b : Sr(d.current, {
          select: !0
        });
      }, g = function(x) {
        m.paused || !i || i.contains(x.relatedTarget) || Sr(d.current, {
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
  ]), Q(() => {
    if (i) {
      Ff.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const x = new CustomEvent(Pc, If);
        i.addEventListener(Pc, l), i.dispatchEvent(x), x.defaultPrevented || (r5(c5(Bv(i)), {
          select: !0
        }), document.activeElement === v && Sr(i));
      }
      return () => {
        i.removeEventListener(Pc, l), setTimeout(() => {
          const x = new CustomEvent(Tc, If);
          i.addEventListener(Tc, u), i.dispatchEvent(x), x.defaultPrevented || Sr(v ?? document.body, {
            select: !0
          }), i.removeEventListener(Tc, u), Ff.remove(m);
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
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, x = document.activeElement;
    if (g && x) {
      const b = v.currentTarget, [y, _] = o5(b);
      y && _ ? !v.shiftKey && x === _ ? (v.preventDefault(), n && Sr(y, {
        select: !0
      })) : v.shiftKey && x === y && (v.preventDefault(), n && Sr(_, {
        select: !0
      })) : x === b && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ w(Wi.div, P({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: h
  }));
});
function r5(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Sr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function o5(e) {
  const t = Bv(e), n = Lf(t, e), r = Lf(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Bv(e) {
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
function Lf(e, t) {
  for (const n of e)
    if (!a5(n, {
      upTo: t
    }))
      return n;
}
function a5(e, { upTo: t }) {
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
function s5(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Sr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && s5(e) && t && e.select();
  }
}
const Ff = i5();
function i5() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Vf(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Vf(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Vf(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function c5(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const l5 = /* @__PURE__ */ A((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Gl.createPortal(/* @__PURE__ */ w(Wi.div, P({}, o, {
    ref: t
  })), r) : null;
});
function u5(e, t) {
  return vi((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Bi = (e) => {
  const { present: t, children: n } = e, r = d5(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Vt.only(n), a = Xa(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ So(o, {
    ref: a
  }) : null;
};
Bi.displayName = "Presence";
function d5(e) {
  const [t, n] = X(), r = H({}), o = H(e), a = H("none"), s = e ? "mounted" : "unmounted", [i, c] = u5(s, {
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
    const l = bs(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), bl(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, m = bs(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), bl(() => {
    if (t) {
      const l = (d) => {
        const m = bs(r.current).includes(d.animationName);
        d.target === t && m && gi(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = bs(r.current));
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
function bs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let Oc = 0;
function f5() {
  Q(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Uf()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Uf()), Oc++, () => {
      Oc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Oc--;
    };
  }, []);
}
function Uf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Hv = Ym(), kc = function() {
}, Hi = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: kc,
    onWheelCapture: kc,
    onTouchMoveCapture: kc
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, x = g === void 0 ? "div" : g, b = bu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = p, _ = Hm([n, t]), $ = Ct(Ct({}, b), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement(y, { sideCar: Hv, removeScrollBar: l, shards: d, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), Ct(Ct({}, $), { ref: _ })) : C.createElement(x, Ct({}, $, { className: c, ref: _ }), i)
  );
});
Hi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Hi.classNames = {
  fullWidth: na,
  zeroRight: ta
};
var wl = !1;
if (typeof window < "u")
  try {
    var xs = Object.defineProperty({}, "passive", {
      get: function() {
        return wl = !0, !0;
      }
    });
    window.addEventListener("test", xs, xs), window.removeEventListener("test", xs, xs);
  } catch {
    wl = !1;
  }
var oo = wl ? { passive: !1 } : !1, p5 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, m5 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, zf = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Yv(e, n);
    if (r) {
      var o = Kv(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, h5 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, v5 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Yv = function(e, t) {
  return e === "v" ? p5(t) : m5(t);
}, Kv = function(e, t) {
  return e === "v" ? h5(t) : v5(t);
}, g5 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, b5 = function(e, t, n, r, o) {
  var a = g5(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, p = 0;
  do {
    var m = Kv(e, i), h = m[0], v = m[1], g = m[2], x = v - g - a * h;
    (h || x) && Yv(e, i) && (d += x, p += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, ys = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Wf = function(e) {
  return [e.deltaX, e.deltaY];
}, Bf = function(e) {
  return e && "current" in e ? e.current : e;
}, x5 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, y5 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, w5 = 0, ao = [];
function $5(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(w5++)[0], a = C.useState(function() {
    return xu();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Bm([e.lockRef.current], (e.shards || []).map(Bf), !0).filter(Boolean);
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
    var x = ys(v), b = n.current, y = "deltaX" in v ? v.deltaX : b[0] - x[0], _ = "deltaY" in v ? v.deltaY : b[1] - x[1], $, E = v.target, N = Math.abs(y) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && N === "h" && E.type === "range")
      return !1;
    var M = zf(N, E);
    if (!M)
      return !0;
    if (M ? $ = N : ($ = N === "v" ? "h" : "v", M = zf(N, E)), !M)
      return !1;
    if (!r.current && "changedTouches" in v && (y || _) && (r.current = $), !$)
      return !0;
    var R = r.current || $;
    return b5(R, g, v, R === "h" ? y : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!ao.length || ao[ao.length - 1] !== a)) {
      var x = "deltaY" in g ? Wf(g) : ys(g), b = t.current.filter(function($) {
        return $.name === g.type && $.target === g.target && x5($.delta, x);
      })[0];
      if (b && b.should) {
        g.preventDefault();
        return;
      }
      if (!b) {
        var y = (s.current.shards || []).map(Bf).filter(Boolean).filter(function($) {
          return $.contains(g.target);
        }), _ = y.length > 0 ? i(g, y[0]) : !s.current.noIsolation;
        _ && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(v, g, x, b) {
    var y = { name: v, delta: g, target: x, should: b };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== y;
      });
    }, 1);
  }, []), u = C.useCallback(function(v) {
    n.current = ys(v), r.current = void 0;
  }, []), d = C.useCallback(function(v) {
    l(v.type, Wf(v), v.target, i(v, e.lockRef.current));
  }, []), p = C.useCallback(function(v) {
    l(v.type, ys(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return ao.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, oo), document.addEventListener("touchmove", c, oo), document.addEventListener("touchstart", u, oo), function() {
      ao = ao.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, oo), document.removeEventListener("touchmove", c, oo), document.removeEventListener("touchstart", u, oo);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    h ? C.createElement(a, { styles: y5(o) }) : null,
    m ? C.createElement(qm, { gapMode: "margin" }) : null
  );
}
const _5 = Gm(Hv, $5);
var Gv = C.forwardRef(function(e, t) {
  return C.createElement(Hi, Ct({}, e, { ref: t, sideCar: _5 }));
});
Gv.classNames = Hi.classNames;
const C5 = Gv, Zv = "Dialog", [qv, i8] = LN(Zv), [S5, Gr] = qv(Zv), E5 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = H(null), c = H(null), [l = !1, u] = zN({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w(S5, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: Nc(),
    titleId: Nc(),
    descriptionId: Nc(),
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
}, Xv = "DialogPortal", [N5, Qv] = qv(Xv, {
  forceMount: void 0
}), P5 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Gr(Xv, t);
  return /* @__PURE__ */ w(N5, {
    scope: t,
    forceMount: n
  }, Vt.map(
    r,
    (s) => /* @__PURE__ */ w(Bi, {
      present: n || a.open
    }, /* @__PURE__ */ w(l5, {
      asChild: !0,
      container: o
    }, s))
  ));
}, $l = "DialogOverlay", T5 = /* @__PURE__ */ A((e, t) => {
  const n = Qv($l, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Gr($l, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ w(Bi, {
    present: r || a.open
  }, /* @__PURE__ */ w(O5, P({}, o, {
    ref: t
  }))) : null;
}), O5 = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Gr($l, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ w(C5, {
      as: Xu,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ w(Wi.div, P({
      "data-state": eg(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), ha = "DialogContent", k5 = /* @__PURE__ */ A((e, t) => {
  const n = Qv(ha, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Gr(ha, e.__scopeDialog);
  return /* @__PURE__ */ w(Bi, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ w(M5, P({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(D5, P({}, o, {
    ref: t
  })));
}), M5 = /* @__PURE__ */ A((e, t) => {
  const n = Gr(ha, e.__scopeDialog), r = H(null), o = Xa(t, n.contentRef, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return Ba(a);
  }, []), /* @__PURE__ */ w(Jv, P({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: fo(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: fo(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: fo(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), D5 = /* @__PURE__ */ A((e, t) => {
  const n = Gr(ha, e.__scopeDialog), r = H(!1);
  return /* @__PURE__ */ w(Jv, P({}, e, {
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
}), Jv = /* @__PURE__ */ A((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Gr(ha, n), c = H(null), l = Xa(t, c);
  return f5(), /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w(n5, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ w(JN, P({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": eg(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
});
function eg(e) {
  return e ? "open" : "closed";
}
const R5 = E5, j5 = P5, A5 = T5, I5 = k5;
var Hf = 1, L5 = 0.9, F5 = 0.3, Mc = 0.1, V5 = 0, Dc = 0.999, U5 = 0.9999, z5 = 0.99, Yf = /[\\\/\-_+.# \t"@\[\(\{&]/, W5 = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function _l(e, t, n, r, o, a) {
  if (a === t.length)
    return o === e.length ? Hf : z5;
  for (var s = r.charAt(a), i = n.indexOf(s, o), c = 0, l, u, d; i >= 0; )
    l = _l(e, t, n, r, i + 1, a + 1), l > c && (i === o ? l *= Hf : Yf.test(e.charAt(i - 1)) ? (l *= L5, d = e.slice(o, i - 1).match(W5), d && o > 0 && (l *= Math.pow(Dc, d.length))) : Yf.test(e.slice(o, i - 1)) ? (l *= V5, o > 0 && (l *= Math.pow(Dc, i - o))) : (l *= F5, o > 0 && (l *= Math.pow(Dc, i - o))), e.charAt(i) !== t.charAt(a) && (l *= U5)), l < Mc && n.charAt(i - 1) === r.charAt(a + 1) && n.charAt(i - 1) !== r.charAt(a) && (u = _l(e, t, n, r, i + 1, a + 2), u * Mc > l && (l = u * Mc)), l > c && (c = l), i = n.indexOf(s, i + 1);
  return c;
}
function B5(e, t) {
  return _l(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var H5 = B5, Y5 = '[cmdk-list-sizer=""]', Jo = '[cmdk-group=""]', Rc = '[cmdk-group-items=""]', K5 = '[cmdk-group-heading=""]', tg = '[cmdk-item=""]', Kf = `${tg}:not([aria-disabled="true"])`, Cl = "cmdk-item-select", rr = "data-value", G5 = (e, t) => H5(e, t), ng = C.createContext(void 0), Qa = () => C.useContext(ng), rg = C.createContext(void 0), Qu = () => C.useContext(rg), og = C.createContext(void 0), ag = C.forwardRef((e, t) => {
  let n = C.useRef(null), r = so(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = so(() => /* @__PURE__ */ new Set()), a = so(() => /* @__PURE__ */ new Map()), s = so(() => /* @__PURE__ */ new Map()), i = so(() => /* @__PURE__ */ new Set()), c = sg(e), { label: l, children: u, value: d, onValueChange: p, filter: m, shouldFilter: h, ...v } = e, g = C.useId(), x = C.useId(), b = C.useId(), y = aP();
  Uo(() => {
    if (d !== void 0) {
      let D = d.trim().toLowerCase();
      r.current.value = D, y(6, K), _.emit();
    }
  }, [d]);
  let _ = C.useMemo(() => ({ subscribe: (D) => (i.current.add(D), () => i.current.delete(D)), snapshot: () => r.current, setState: (D, k, B) => {
    var q, oe, te;
    if (!Object.is(r.current[D], k)) {
      if (r.current[D] = k, D === "search")
        R(), N(), y(1, M);
      else if (D === "value")
        if (((q = c.current) == null ? void 0 : q.value) !== void 0) {
          (te = (oe = c.current).onValueChange) == null || te.call(oe, k);
          return;
        } else
          B || y(5, K);
      _.emit();
    }
  }, emit: () => {
    i.current.forEach((D) => D());
  } }), []), $ = C.useMemo(() => ({ value: (D, k) => {
    k !== s.current.get(D) && (s.current.set(D, k), r.current.filtered.items.set(D, E(k)), y(2, () => {
      N(), _.emit();
    }));
  }, item: (D, k) => (o.current.add(D), k && (a.current.has(k) ? a.current.get(k).add(D) : a.current.set(k, /* @__PURE__ */ new Set([D]))), y(3, () => {
    R(), N(), r.current.value || M(), _.emit();
  }), () => {
    s.current.delete(D), o.current.delete(D), r.current.filtered.items.delete(D), y(4, () => {
      R(), M(), _.emit();
    });
  }), group: (D) => (a.current.has(D) || a.current.set(D, /* @__PURE__ */ new Set()), () => {
    s.current.delete(D), a.current.delete(D);
  }), filter: () => c.current.shouldFilter, label: l || e["aria-label"], listId: g, inputId: b, labelId: x }), []);
  function E(D) {
    var k;
    let B = ((k = c.current) == null ? void 0 : k.filter) ?? G5;
    return D ? B(D, r.current.search) : 0;
  }
  function N() {
    if (!n.current || !r.current.search || c.current.shouldFilter === !1)
      return;
    let D = r.current.filtered.items, k = [];
    r.current.filtered.groups.forEach((q) => {
      let oe = a.current.get(q), te = 0;
      oe.forEach((ve) => {
        let me = D.get(ve);
        te = Math.max(me, te);
      }), k.push([q, te]);
    });
    let B = n.current.querySelector(Y5);
    W().sort((q, oe) => {
      let te = q.getAttribute(rr), ve = oe.getAttribute(rr);
      return (D.get(ve) ?? 0) - (D.get(te) ?? 0);
    }).forEach((q) => {
      let oe = q.closest(Rc);
      oe ? oe.appendChild(q.parentElement === oe ? q : q.closest(`${Rc} > *`)) : B.appendChild(q.parentElement === B ? q : q.closest(`${Rc} > *`));
    }), k.sort((q, oe) => oe[1] - q[1]).forEach((q) => {
      let oe = n.current.querySelector(`${Jo}[${rr}="${q[0]}"]`);
      oe == null || oe.parentElement.appendChild(oe);
    });
  }
  function M() {
    let D = W().find((B) => !B.ariaDisabled), k = D == null ? void 0 : D.getAttribute(rr);
    _.setState("value", k || void 0);
  }
  function R() {
    if (!r.current.search || c.current.shouldFilter === !1) {
      r.current.filtered.count = o.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let D = 0;
    for (let k of o.current) {
      let B = s.current.get(k), q = E(B);
      r.current.filtered.items.set(k, q), q > 0 && D++;
    }
    for (let [k, B] of a.current)
      for (let q of B)
        if (r.current.filtered.items.get(q) > 0) {
          r.current.filtered.groups.add(k);
          break;
        }
    r.current.filtered.count = D;
  }
  function K() {
    var D, k, B;
    let q = G();
    q && (((D = q.parentElement) == null ? void 0 : D.firstChild) === q && ((B = (k = q.closest(Jo)) == null ? void 0 : k.querySelector(K5)) == null || B.scrollIntoView({ block: "nearest" })), q.scrollIntoView({ block: "nearest" }));
  }
  function G() {
    return n.current.querySelector(`${tg}[aria-selected="true"]`);
  }
  function W() {
    return Array.from(n.current.querySelectorAll(Kf));
  }
  function Z(D) {
    let k = W()[D];
    k && _.setState("value", k.getAttribute(rr));
  }
  function F(D) {
    var k;
    let B = G(), q = W(), oe = q.findIndex((ve) => ve === B), te = q[oe + D];
    (k = c.current) != null && k.loop && (te = oe + D < 0 ? q[q.length - 1] : oe + D === q.length ? q[0] : q[oe + D]), te && _.setState("value", te.getAttribute(rr));
  }
  function j(D) {
    let k = G(), B = k == null ? void 0 : k.closest(Jo), q;
    for (; B && !q; )
      B = D > 0 ? rP(B, Jo) : oP(B, Jo), q = B == null ? void 0 : B.querySelector(Kf);
    q ? _.setState("value", q.getAttribute(rr)) : F(D);
  }
  let I = () => Z(W().length - 1), V = (D) => {
    D.preventDefault(), D.metaKey ? I() : D.altKey ? j(1) : F(1);
  }, Y = (D) => {
    D.preventDefault(), D.metaKey ? Z(0) : D.altKey ? j(-1) : F(-1);
  };
  return C.createElement("div", { ref: Ja([n, t]), ...v, "cmdk-root": "", onKeyDown: (D) => {
    var k;
    if ((k = v.onKeyDown) == null || k.call(v, D), !D.defaultPrevented)
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
          D.ctrlKey && Y(D);
          break;
        }
        case "ArrowUp": {
          Y(D);
          break;
        }
        case "Home": {
          D.preventDefault(), Z(0);
          break;
        }
        case "End": {
          D.preventDefault(), I();
          break;
        }
        case "Enter": {
          D.preventDefault();
          let B = G();
          if (B) {
            let q = new Event(Cl);
            B.dispatchEvent(q);
          }
        }
      }
  } }, C.createElement("label", { "cmdk-label": "", htmlFor: $.inputId, id: $.labelId, style: sP }, l), C.createElement(rg.Provider, { value: _ }, C.createElement(ng.Provider, { value: $ }, u)));
}), Z5 = C.forwardRef((e, t) => {
  let n = C.useId(), r = C.useRef(null), o = C.useContext(og), a = Qa(), s = sg(e);
  Uo(() => a.item(n, o), []);
  let i = ig(n, r, [e.value, e.children, r]), c = Qu(), l = yo((x) => x.value && x.value === i.current), u = yo((x) => a.filter() === !1 ? !0 : x.search ? x.filtered.items.get(n) > 0 : !0);
  C.useEffect(() => {
    let x = r.current;
    if (!(!x || e.disabled))
      return x.addEventListener(Cl, d), () => x.removeEventListener(Cl, d);
  }, [u, e.onSelect, e.disabled]);
  function d() {
    var x, b;
    (b = (x = s.current).onSelect) == null || b.call(x, i.current);
  }
  function p() {
    c.setState("value", i.current, !0);
  }
  if (!u)
    return null;
  let { disabled: m, value: h, onSelect: v, ...g } = e;
  return C.createElement("div", { ref: Ja([r, t]), ...g, "cmdk-item": "", role: "option", "aria-disabled": m || void 0, "aria-selected": l || void 0, "data-selected": l || void 0, onPointerMove: m ? void 0 : p, onClick: m ? void 0 : d }, e.children);
}), q5 = C.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, a = C.useId(), s = C.useRef(null), i = C.useRef(null), c = C.useId(), l = Qa(), u = yo((p) => l.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(a) : !0);
  Uo(() => l.group(a), []), ig(a, s, [e.value, e.heading, i]);
  let d = C.createElement(og.Provider, { value: a }, r);
  return C.createElement("div", { ref: Ja([s, t]), ...o, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && C.createElement("div", { ref: i, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), C.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, d));
}), X5 = C.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = C.useRef(null), a = yo((s) => !s.search);
  return !n && !a ? null : C.createElement("div", { ref: Ja([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), Q5 = C.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = Qu(), s = yo((c) => c.search), i = Qa();
  return C.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), C.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": i.listId, "aria-labelledby": i.labelId, id: i.inputId, type: "text", value: o ? e.value : s, onChange: (c) => {
    o || a.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), J5 = C.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = C.useRef(null), a = C.useRef(null), s = Qa();
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
  }, []), C.createElement("div", { ref: Ja([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: s.listId, "aria-labelledby": s.inputId }, C.createElement("div", { ref: a, "cmdk-list-sizer": "" }, n));
}), eP = C.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...a } = e;
  return C.createElement(R5, { open: n, onOpenChange: r }, C.createElement(j5, { container: o }, C.createElement(A5, { "cmdk-overlay": "" }), C.createElement(I5, { "aria-label": e.label, "cmdk-dialog": "" }, C.createElement(ag, { ref: t, ...a }))));
}), tP = C.forwardRef((e, t) => {
  let n = C.useRef(!0), r = yo((o) => o.filtered.count === 0);
  return C.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : C.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), nP = C.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return C.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, C.createElement("div", { "aria-hidden": !0 }, r));
}), zt = Object.assign(ag, { List: J5, Item: Z5, Input: Q5, Group: q5, Separator: X5, Dialog: eP, Empty: tP, Loading: nP });
function rP(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function oP(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function sg(e) {
  let t = C.useRef(e);
  return Uo(() => {
    t.current = e;
  }), t;
}
var Uo = typeof window > "u" ? C.useEffect : C.useLayoutEffect;
function so(e) {
  let t = C.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Ja(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function yo(e) {
  let t = Qu(), n = () => e(t.snapshot());
  return C.useSyncExternalStore(t.subscribe, n, n);
}
function ig(e, t, n) {
  let r = C.useRef(), o = Qa();
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
    o.value(e, s), (a = t.current) == null || a.setAttribute(rr, s), r.current = s;
  }), r;
}
var aP = () => {
  let [e, t] = C.useState(), n = so(() => /* @__PURE__ */ new Map());
  return Uo(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, sP = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Wn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  zt,
  {
    ref: n,
    className: L(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Wn.displayName = zt.displayName;
const c8 = ({ children: e, ...t }) => /* @__PURE__ */ f.exports.jsx(MS, { ...t, children: /* @__PURE__ */ f.exports.jsx(nv, { className: "overflow-hidden p-0 shadow-2xl", children: /* @__PURE__ */ f.exports.jsx(Wn, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), ur = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ f.exports.jsx(js, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ f.exports.jsx(
    zt.Input,
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
ur.displayName = zt.Input.displayName;
const es = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  zt.List,
  {
    ref: n,
    className: L("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
es.displayName = zt.List.displayName;
const dr = C.forwardRef((e, t) => /* @__PURE__ */ f.exports.jsx(
  zt.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
dr.displayName = zt.Empty.displayName;
const dn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  zt.Group,
  {
    ref: n,
    className: L(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
dn.displayName = zt.Group.displayName;
const Yi = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  zt.Separator,
  {
    ref: n,
    className: L("-mx-1 h-px bg-border", e),
    ...t
  }
));
Yi.displayName = zt.Separator.displayName;
const fn = C.forwardRef(({ className: e, onClick: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  zt.Item,
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
fn.displayName = zt.Item.displayName;
const iP = ({
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
iP.displayName = "CommandShortcut";
const cP = /* @__PURE__ */ A((e, t) => {
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
  }, /* @__PURE__ */ w(de.div, P({}, o, {
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
}), lP = cP, l8 = lP;
function uP(e, t) {
  return vi((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const cg = "ScrollArea", [lg, u8] = at(cg), [dP, Qt] = lg(cg), fP = /* @__PURE__ */ A((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [i, c] = X(null), [l, u] = X(null), [d, p] = X(null), [m, h] = X(null), [v, g] = X(null), [x, b] = X(0), [y, _] = X(0), [$, E] = X(!1), [N, M] = X(!1), R = Ce(
    t,
    (G) => c(G)
  ), K = En(o);
  return /* @__PURE__ */ w(dP, {
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
    scrollbarXEnabled: $,
    onScrollbarXEnabledChange: E,
    scrollbarY: v,
    onScrollbarYChange: g,
    scrollbarYEnabled: N,
    onScrollbarYEnabledChange: M,
    onCornerWidthChange: b,
    onCornerHeightChange: _
  }, /* @__PURE__ */ w(de.div, P({
    dir: K
  }, s, {
    ref: R,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      ["--radix-scroll-area-corner-width"]: x + "px",
      ["--radix-scroll-area-corner-height"]: y + "px",
      ...e.style
    }
  })));
}), pP = "ScrollAreaViewport", mP = /* @__PURE__ */ A((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = Qt(pP, n), s = H(null), i = Ce(t, s, a.onViewportChange);
  return /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ w(de.div, P({
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
}), Yn = "ScrollAreaScrollbar", ug = /* @__PURE__ */ A((e, t) => {
  const { forceMount: n, ...r } = e, o = Qt(Yn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
  return Q(() => (i ? a(!0) : s(!0), () => {
    i ? a(!1) : s(!1);
  }), [
    i,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ w(hP, P({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ w(vP, P({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ w(dg, P({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ w(Ju, P({}, r, {
    ref: t
  })) : null;
}), hP = /* @__PURE__ */ A((e, t) => {
  const { forceMount: n, ...r } = e, o = Qt(Yn, e.__scopeScrollArea), [a, s] = X(!1);
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
  ]), /* @__PURE__ */ w(it, {
    present: n || a
  }, /* @__PURE__ */ w(dg, P({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), vP = /* @__PURE__ */ A((e, t) => {
  const { forceMount: n, ...r } = e, o = Qt(Yn, e.__scopeScrollArea), a = e.orientation === "horizontal", s = Gi(
    () => c("SCROLL_END"),
    100
  ), [i, c] = uP("hidden", {
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
  ]), /* @__PURE__ */ w(it, {
    present: n || i !== "hidden"
  }, /* @__PURE__ */ w(Ju, P({
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
}), dg = /* @__PURE__ */ A((e, t) => {
  const n = Qt(Yn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = X(!1), i = e.orientation === "horizontal", c = Gi(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? l : u);
    }
  }, 10);
  return wo(n.viewport, c), wo(n.content, c), /* @__PURE__ */ w(it, {
    present: r || a
  }, /* @__PURE__ */ w(Ju, P({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), Ju = /* @__PURE__ */ A((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Qt(Yn, e.__scopeScrollArea), a = H(null), s = H(0), [i, c] = X({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = hg(i.viewport, i.content), u = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: Boolean(l > 0 && l < 1),
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function d(p, m) {
    return CP(p, s.current, i, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ w(gP, P({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollLeft, m = Gf(p, i, o.dir);
        a.current.style.transform = `translate3d(${m}px, 0, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = d(p, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ w(bP, P({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollTop, m = Gf(p, i);
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
}), gP = /* @__PURE__ */ A((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Qt(Yn, e.__scopeScrollArea), [s, i] = X(), c = H(null), l = Ce(t, c, a.onScrollbarXChange);
  return Q(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ w(pg, P({
    "data-orientation": "horizontal"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: Ki(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const p = a.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(p), gg(p, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: Xs(s.paddingLeft),
          paddingEnd: Xs(s.paddingRight)
        }
      });
    }
  }));
}), bP = /* @__PURE__ */ A((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Qt(Yn, e.__scopeScrollArea), [s, i] = X(), c = H(null), l = Ce(t, c, a.onScrollbarYChange);
  return Q(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ w(pg, P({
    "data-orientation": "vertical"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: Ki(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const p = a.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(p), gg(p, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: Xs(s.paddingTop),
          paddingEnd: Xs(s.paddingBottom)
        }
      });
    }
  }));
}), [xP, fg] = lg(Yn), pg = /* @__PURE__ */ A((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: d, ...p } = e, m = Qt(Yn, n), [h, v] = X(null), g = Ce(
    t,
    (R) => v(R)
  ), x = H(null), b = H(""), y = m.viewport, _ = r.content - r.viewport, $ = qe(u), E = qe(c), N = Gi(d, 10);
  function M(R) {
    if (x.current) {
      const K = R.clientX - x.current.left, G = R.clientY - x.current.top;
      l({
        x: K,
        y: G
      });
    }
  }
  return Q(() => {
    const R = (K) => {
      const G = K.target;
      (h == null ? void 0 : h.contains(G)) && $(K, _);
    };
    return document.addEventListener("wheel", R, {
      passive: !1
    }), () => document.removeEventListener("wheel", R, {
      passive: !1
    });
  }, [
    y,
    h,
    _,
    $
  ]), Q(E, [
    r,
    E
  ]), wo(h, N), wo(m.content, N), /* @__PURE__ */ w(xP, {
    scope: n,
    scrollbar: h,
    hasThumb: o,
    onThumbChange: qe(a),
    onThumbPointerUp: qe(s),
    onThumbPositionChange: E,
    onThumbPointerDown: qe(i)
  }, /* @__PURE__ */ w(de.div, P({}, p, {
    ref: g,
    style: {
      position: "absolute",
      ...p.style
    },
    onPointerDown: ee(e.onPointerDown, (R) => {
      R.button === 0 && (R.target.setPointerCapture(R.pointerId), x.current = h.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", M(R));
    }),
    onPointerMove: ee(e.onPointerMove, M),
    onPointerUp: ee(e.onPointerUp, (R) => {
      const K = R.target;
      K.hasPointerCapture(R.pointerId) && K.releasePointerCapture(R.pointerId), document.body.style.webkitUserSelect = b.current, x.current = null;
    })
  })));
}), Sl = "ScrollAreaThumb", yP = /* @__PURE__ */ A((e, t) => {
  const { forceMount: n, ...r } = e, o = fg(Sl, e.__scopeScrollArea);
  return /* @__PURE__ */ w(it, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ w(wP, P({
    ref: t
  }, r)));
}), wP = /* @__PURE__ */ A((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = Qt(Sl, n), s = fg(Sl, n), { onThumbPositionChange: i } = s, c = Ce(
    t,
    (d) => s.onThumbChange(d)
  ), l = H(), u = Gi(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return Q(() => {
    const d = a.viewport;
    if (d) {
      const p = () => {
        if (u(), !l.current) {
          const m = SP(d, i);
          l.current = m, i();
        }
      };
      return i(), d.addEventListener("scroll", p), () => d.removeEventListener("scroll", p);
    }
  }, [
    a.viewport,
    u,
    i
  ]), /* @__PURE__ */ w(de.div, P({
    "data-state": s.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: c,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: ee(e.onPointerDownCapture, (d) => {
      const m = d.target.getBoundingClientRect(), h = d.clientX - m.left, v = d.clientY - m.top;
      s.onThumbPointerDown({
        x: h,
        y: v
      });
    }),
    onPointerUp: ee(e.onPointerUp, s.onThumbPointerUp)
  }));
}), mg = "ScrollAreaCorner", $P = /* @__PURE__ */ A((e, t) => {
  const n = Qt(mg, e.__scopeScrollArea), r = Boolean(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ w(_P, P({}, e, {
    ref: t
  })) : null;
}), _P = /* @__PURE__ */ A((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Qt(mg, n), [a, s] = X(0), [i, c] = X(0), l = Boolean(a && i);
  return wo(o.scrollbarX, () => {
    var u;
    const d = ((u = o.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(d), c(d);
  }), wo(o.scrollbarY, () => {
    var u;
    const d = ((u = o.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(d), s(d);
  }), l ? /* @__PURE__ */ w(de.div, P({}, r, {
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
function Xs(e) {
  return e ? parseInt(e, 10) : 0;
}
function hg(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Ki(e) {
  const t = hg(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function CP(e, t, n, r = "ltr") {
  const o = Ki(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, u = n.content - n.viewport, d = r === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return vg([
    c,
    l
  ], d)(e);
}
function Gf(e, t, n = "ltr") {
  const r = Ki(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], l = ma(e, c);
  return vg([
    0,
    s
  ], [
    0,
    i
  ])(l);
}
function vg(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function gg(e, t) {
  return e > 0 && e < t;
}
const SP = (e, t = () => {
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
function Gi(e, t) {
  const n = qe(e), r = H(0);
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
function wo(e, t) {
  const n = qe(t);
  $t(() => {
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
const bg = fP, EP = mP, NP = $P, PP = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  bg,
  {
    ref: r,
    className: L("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx(EP, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ f.exports.jsx(xg, {}),
      /* @__PURE__ */ f.exports.jsx(NP, {})
    ]
  }
));
PP.displayName = bg.displayName;
const xg = C.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  ug,
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
    children: /* @__PURE__ */ f.exports.jsx(yP, { className: "relative flex-1 rounded-full bg-border" })
  }
));
xg.displayName = ug.displayName;
const d8 = ji, f8 = Ai, p8 = Io, yg = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(Mo, { className: L(e), ...t });
yg.displayName = Mo.displayName;
const wg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Do,
  {
    className: L(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
wg.displayName = Do.displayName;
const TP = Eo(
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
), OP = C.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(yg, { children: [
  /* @__PURE__ */ f.exports.jsx(wg, {}),
  /* @__PURE__ */ f.exports.jsxs(
    Ro,
    {
      ref: o,
      className: L(TP({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ f.exports.jsxs(Io, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ f.exports.jsx(yi, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
OP.displayName = Ro.displayName;
const kP = ({
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
kP.displayName = "SheetHeader";
const MP = ({
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
MP.displayName = "SheetFooter";
const DP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  jo,
  {
    ref: n,
    className: L("text-lg font-semibold text-foreground", e),
    ...t
  }
));
DP.displayName = jo.displayName;
const RP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ao,
  {
    ref: n,
    className: L("text-sm text-muted-foreground", e),
    ...t
  }
));
RP.displayName = Ao.displayName;
const ed = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ f.exports.jsx(
  "table",
  {
    ref: n,
    className: L("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
ed.displayName = "TableUI";
const $g = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("thead", { ref: n, className: L("[&_tr]:border-b", e), ...t }));
$g.displayName = "TableHeader";
const _g = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tbody",
  {
    ref: n,
    className: L("[&_tr:last-child]:border-0", e),
    ...t
  }
));
_g.displayName = "TableBody";
const jP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tfoot",
  {
    ref: n,
    className: L("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
jP.displayName = "TableFooter";
const Zi = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
Zi.displayName = "TableRow";
const Cg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
Cg.displayName = "TableHead";
const td = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "td",
  {
    ref: n,
    className: L("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
td.displayName = "TableCell";
const AP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "caption",
  {
    ref: n,
    className: L("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
AP.displayName = "TableCaption";
const IP = "AlertDialog", [LP, m8] = at(IP, [
  Zh
]), Kn = Zh(), FP = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Kn(t);
  return /* @__PURE__ */ w(ji, P({}, r, n, {
    modal: !0
  }));
}, VP = /* @__PURE__ */ A((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Kn(n);
  return /* @__PURE__ */ w(Ai, P({}, o, r, {
    ref: t
  }));
}), UP = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Kn(t);
  return /* @__PURE__ */ w(Mo, P({}, r, n));
}, zP = /* @__PURE__ */ A((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Kn(n);
  return /* @__PURE__ */ w(Do, P({}, o, r, {
    ref: t
  }));
}), Sg = "AlertDialogContent", [WP, BP] = LP(Sg), HP = /* @__PURE__ */ A((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = Kn(n), s = H(null), i = Ce(t, s), c = H(null);
  return /* @__PURE__ */ w(kS, {
    contentName: Sg,
    titleName: YP,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ w(WP, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ w(Ro, P({
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
  }), /* @__PURE__ */ w(ql, null, r), !1)));
}), YP = "AlertDialogTitle", KP = /* @__PURE__ */ A((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Kn(n);
  return /* @__PURE__ */ w(jo, P({}, o, r, {
    ref: t
  }));
}), GP = /* @__PURE__ */ A((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Kn(n);
  return /* @__PURE__ */ w(Ao, P({}, o, r, {
    ref: t
  }));
}), ZP = /* @__PURE__ */ A((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Kn(n);
  return /* @__PURE__ */ w(Io, P({}, o, r, {
    ref: t
  }));
}), qP = "AlertDialogCancel", XP = /* @__PURE__ */ A((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = BP(qP, n), a = Kn(n), s = Ce(t, o);
  return /* @__PURE__ */ w(Io, P({}, a, r, {
    ref: s
  }));
}), QP = FP, JP = VP, Eg = UP, Ng = zP, Pg = HP, Tg = ZP, Og = XP, kg = KP, Mg = GP, h8 = QP, v8 = JP, Dg = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(Eg, { className: L(e), ...t });
Dg.displayName = Eg.displayName;
const Rg = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Ng,
  {
    className: L(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...n,
    ref: r
  }
));
Rg.displayName = Ng.displayName;
const eT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(Dg, { children: [
  /* @__PURE__ */ f.exports.jsx(Rg, {}),
  /* @__PURE__ */ f.exports.jsx(
    Pg,
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
eT.displayName = Pg.displayName;
const tT = ({
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
tT.displayName = "AlertDialogHeader";
const nT = ({
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
nT.displayName = "AlertDialogFooter";
const rT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  kg,
  {
    ref: n,
    className: L("text-lg font-semibold", e),
    ...t
  }
));
rT.displayName = kg.displayName;
const oT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Mg,
  {
    ref: n,
    className: L("text-sm text-muted-foreground", e),
    ...t
  }
));
oT.displayName = Mg.displayName;
const aT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Tg,
  {
    ref: n,
    className: L(aa(), e),
    ...t
  }
));
aT.displayName = Tg.displayName;
const sT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Og,
  {
    ref: n,
    className: L(
      aa({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
sT.displayName = Og.displayName;
function St({
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
const jg = "Collapsible", [iT, Ag] = at(jg), [cT, nd] = iT(jg), lT = /* @__PURE__ */ A((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...i } = e, [c = !1, l] = dt({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ w(cT, {
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
  }, /* @__PURE__ */ w(de.div, P({
    "data-state": rd(c),
    "data-disabled": a ? "" : void 0
  }, i, {
    ref: t
  })));
}), uT = "CollapsibleTrigger", Ig = /* @__PURE__ */ A((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = nd(uT, n);
  return /* @__PURE__ */ w(de.button, P({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": rd(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: ee(e.onClick, o.onOpenToggle)
  }));
}), Lg = "CollapsibleContent", Fg = /* @__PURE__ */ A((e, t) => {
  const { forceMount: n, ...r } = e, o = nd(Lg, e.__scopeCollapsible);
  return /* @__PURE__ */ w(
    it,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ w(dT, P({}, r, {
      ref: t,
      present: a
    }))
  );
}), dT = /* @__PURE__ */ A((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = nd(Lg, n), [i, c] = X(r), l = H(null), u = Ce(t, l), d = H(0), p = d.current, m = H(0), h = m.current, v = s.open || i, g = H(v), x = H();
  return Q(() => {
    const b = requestAnimationFrame(
      () => g.current = !1
    );
    return () => cancelAnimationFrame(b);
  }, []), $t(() => {
    const b = l.current;
    if (b) {
      x.current = x.current || {
        transitionDuration: b.style.transitionDuration,
        animationName: b.style.animationName
      }, b.style.transitionDuration = "0s", b.style.animationName = "none";
      const y = b.getBoundingClientRect();
      d.current = y.height, m.current = y.width, g.current || (b.style.transitionDuration = x.current.transitionDuration, b.style.animationName = x.current.animationName), c(r);
    }
  }, [
    s.open,
    r
  ]), /* @__PURE__ */ w(de.div, P({
    "data-state": rd(s.open),
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
function rd(e) {
  return e ? "open" : "closed";
}
const Vg = lT, fT = Ig, pT = Fg, wr = "Accordion", mT = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [od, hT, vT] = gr(wr), [qi, g8] = at(wr, [
  vT,
  Ag
]), ad = Ag(), Ug = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ S.createElement(od.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ S.createElement(yT, P({}, a, {
    ref: t
  })) : /* @__PURE__ */ S.createElement(xT, P({}, o, {
    ref: t
  })));
});
Ug.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [zg, gT] = qi(wr), [Wg, bT] = qi(wr, {
  collapsible: !1
}), xT = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [i, c] = dt({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ S.createElement(zg, {
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
  }, /* @__PURE__ */ S.createElement(Wg, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ S.createElement(Bg, P({}, s, {
    ref: t
  }))));
}), yT = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [s = [], i] = dt({
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
  return /* @__PURE__ */ S.createElement(zg, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ S.createElement(Wg, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ S.createElement(Bg, P({}, a, {
    ref: t
  }))));
}), [wT, Xi] = qi(wr), Bg = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = S.useRef(null), c = Ce(i, t), l = hT(n), d = En(o) === "ltr", p = ee(e.onKeyDown, (m) => {
    var h;
    if (!mT.includes(m.key))
      return;
    const v = m.target, g = l().filter((R) => {
      var K;
      return !((K = R.ref.current) !== null && K !== void 0 && K.disabled);
    }), x = g.findIndex(
      (R) => R.ref.current === v
    ), b = g.length;
    if (x === -1)
      return;
    m.preventDefault();
    let y = x;
    const _ = 0, $ = b - 1, E = () => {
      y = x + 1, y > $ && (y = _);
    }, N = () => {
      y = x - 1, y < _ && (y = $);
    };
    switch (m.key) {
      case "Home":
        y = _;
        break;
      case "End":
        y = $;
        break;
      case "ArrowRight":
        a === "horizontal" && (d ? E() : N());
        break;
      case "ArrowDown":
        a === "vertical" && E();
        break;
      case "ArrowLeft":
        a === "horizontal" && (d ? N() : E());
        break;
      case "ArrowUp":
        a === "vertical" && N();
        break;
    }
    const M = y % b;
    (h = g[M].ref.current) === null || h === void 0 || h.focus();
  });
  return /* @__PURE__ */ S.createElement(wT, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ S.createElement(od.Slot, {
    scope: n
  }, /* @__PURE__ */ S.createElement(de.div, P({}, s, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : p
  }))));
}), El = "AccordionItem", [$T, sd] = qi(El), _T = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = Xi(El, n), s = gT(El, n), i = ad(n), c = mt(), l = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ S.createElement($T, {
    scope: n,
    open: l,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ S.createElement(Vg, P({
    "data-orientation": a.orientation,
    "data-state": Hg(l)
  }, i, o, {
    ref: t,
    disabled: u,
    open: l,
    onOpenChange: (d) => {
      d ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), CT = "AccordionHeader", ST = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Xi(wr, n), a = sd(CT, n);
  return /* @__PURE__ */ S.createElement(de.h3, P({
    "data-orientation": o.orientation,
    "data-state": Hg(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), Zf = "AccordionTrigger", ET = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Xi(wr, n), a = sd(Zf, n), s = bT(Zf, n), i = ad(n);
  return /* @__PURE__ */ S.createElement(od.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ S.createElement(fT, P({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, i, r, {
    ref: t
  })));
}), NT = "AccordionContent", PT = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Xi(wr, n), a = sd(NT, n), s = ad(n);
  return /* @__PURE__ */ S.createElement(pT, P({
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
function Hg(e) {
  return e ? "open" : "closed";
}
const TT = Ug, OT = _T, kT = ST, Yg = ET, Kg = PT, b8 = TT, MT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  OT,
  {
    ref: n,
    className: L("border-b", e),
    ...t
  }
));
MT.displayName = "AccordionItem";
const DT = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(kT, { className: "flex", children: /* @__PURE__ */ f.exports.jsxs(
  Yg,
  {
    ref: r,
    className: L(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(sa, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
DT.displayName = Yg.displayName;
const RT = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Kg,
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
RT.displayName = Kg.displayName;
const x8 = Vg, y8 = Ig, w8 = Fg;
let jc;
const Gg = "HoverCard", [Zg, $8] = at(Gg, [
  Nn
]), id = Nn(), [jT, cd] = Zg(Gg), AT = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: i = 300 } = e, c = id(t), l = H(0), u = H(0), d = H(!1), p = H(!1), [m = !1, h] = dt({
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
  ]), x = fe(
    () => h(!1),
    [
      h
    ]
  );
  return Q(() => () => {
    clearTimeout(l.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ w(jT, {
    scope: t,
    open: m,
    onOpenChange: h,
    onOpen: v,
    onClose: g,
    onDismiss: x,
    hasSelectionRef: d,
    isPointerDownOnContentRef: p
  }, /* @__PURE__ */ w(Oo, c, n));
}, IT = "HoverCardTrigger", LT = /* @__PURE__ */ A((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = cd(IT, n), a = id(n);
  return /* @__PURE__ */ w(za, P({
    asChild: !0
  }, a), /* @__PURE__ */ w(de.a, P({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: ee(e.onPointerEnter, Qs(o.onOpen)),
    onPointerLeave: ee(e.onPointerLeave, Qs(o.onClose)),
    onFocus: ee(e.onFocus, o.onOpen),
    onBlur: ee(e.onBlur, o.onClose),
    onTouchStart: ee(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), FT = "HoverCardPortal", [_8, VT] = Zg(FT, {
  forceMount: void 0
}), Nl = "HoverCardContent", UT = /* @__PURE__ */ A((e, t) => {
  const n = VT(Nl, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = cd(Nl, e.__scopeHoverCard);
  return /* @__PURE__ */ w(it, {
    present: r || a.open
  }, /* @__PURE__ */ w(zT, P({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: ee(e.onPointerEnter, Qs(a.onOpen)),
    onPointerLeave: ee(e.onPointerLeave, Qs(a.onClose)),
    ref: t
  })));
}), zT = /* @__PURE__ */ A((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...i } = e, c = cd(Nl, n), l = id(n), u = H(null), d = Ce(t, u), [p, m] = X(!1);
  return Q(() => {
    if (p) {
      const h = document.body;
      return jc = h.style.userSelect || h.style.webkitUserSelect, h.style.userSelect = "none", h.style.webkitUserSelect = "none", () => {
        h.style.userSelect = jc, h.style.webkitUserSelect = jc;
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
    u.current && WT(u.current).forEach(
      (v) => v.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ w(Wr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: ee(a, (h) => {
      h.preventDefault();
    }),
    onDismiss: c.onDismiss
  }, /* @__PURE__ */ w(Wa, P({}, l, i, {
    onPointerDown: ee(i.onPointerDown, (h) => {
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
function Qs(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function WT(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const BT = AT, HT = LT, qg = UT, C8 = BT, S8 = HT, YT = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  qg,
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
YT.displayName = qg.displayName;
const E8 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), ld = "Menubar", [Pl, KT, GT] = gr(ld), [Xg, N8] = at(ld, [
  GT,
  br
]), At = Ha(), Qg = br(), [ZT, ud] = Xg(ld), qT = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: i, ...c } = e, l = En(i), u = Qg(n), [d = "", p] = dt({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [m, h] = X(null);
  return /* @__PURE__ */ w(ZT, {
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
  }, /* @__PURE__ */ w(Pl.Provider, {
    scope: n
  }, /* @__PURE__ */ w(Pl.Slot, {
    scope: n
  }, /* @__PURE__ */ w(Ni, P({
    asChild: !0
  }, u, {
    orientation: "horizontal",
    loop: s,
    dir: l,
    currentTabStopId: m,
    onCurrentTabStopIdChange: h
  }), /* @__PURE__ */ w(de.div, P({
    role: "menubar"
  }, c, {
    ref: t
  }))))));
}), Jg = "MenubarMenu", [XT, eb] = Xg(Jg), QT = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = mt(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = ud(Jg, t), i = At(t), c = H(null), l = H(!1), u = s.value === a;
  return Q(() => {
    u || (l.current = !1);
  }, [
    u
  ]), /* @__PURE__ */ w(XT, {
    scope: t,
    value: a,
    triggerId: mt(),
    triggerRef: c,
    contentId: mt(),
    wasKeyboardTriggerOpenRef: l
  }, /* @__PURE__ */ w(Cu, P({}, i, {
    open: u,
    onOpenChange: (d) => {
      d || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, qf = "MenubarTrigger", JT = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = Qg(n), s = At(n), i = ud(qf, n), c = eb(qf, n), l = H(null), u = Ce(t, l, c.triggerRef), [d, p] = X(!1), m = i.value === c.value;
  return /* @__PURE__ */ w(Pl.ItemSlot, {
    scope: n,
    value: c.value,
    disabled: r
  }, /* @__PURE__ */ w(Pi, P({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: c.value
  }), /* @__PURE__ */ w(Su, P({
    asChild: !0
  }, s), /* @__PURE__ */ w(de.button, P({
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
    onPointerDown: ee(e.onPointerDown, (h) => {
      !r && h.button === 0 && h.ctrlKey === !1 && (i.onMenuOpen(c.value), m || h.preventDefault());
    }),
    onPointerEnter: ee(e.onPointerEnter, () => {
      if (Boolean(i.value) && !m) {
        var v;
        i.onMenuOpen(c.value), (v = l.current) === null || v === void 0 || v.focus();
      }
    }),
    onKeyDown: ee(e.onKeyDown, (h) => {
      r || ([
        "Enter",
        " "
      ].includes(h.key) && i.onMenuToggle(c.value), h.key === "ArrowDown" && i.onMenuOpen(c.value), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(h.key) && (c.wasKeyboardTriggerOpenRef.current = !0, h.preventDefault()));
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
}), e6 = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = At(t);
  return /* @__PURE__ */ w(Eu, P({}, r, n));
}, Xf = "MenubarContent", t6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = At(n), s = ud(Xf, n), i = eb(Xf, n), c = KT(n), l = H(!1);
  return /* @__PURE__ */ w(Nu, P({
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
        var h;
        return (h = m.ref.current) === null || h === void 0 ? void 0 : h.contains(d);
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
        const d = u.target, p = d.hasAttribute("data-radix-menubar-subtrigger"), m = d.closest("[data-radix-menubar-content]") !== u.currentTarget, v = (s.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
        if (!v && p || m && v)
          return;
        let b = c().filter(
          ($) => !$.disabled
        ).map(
          ($) => $.value
        );
        v && b.reverse();
        const y = b.indexOf(i.value);
        b = s.loop ? p6(b, y + 1) : b.slice(y + 1);
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
}), n6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Pu, P({}, o, r, {
    ref: t
  }));
}), r6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Tu, P({}, o, r, {
    ref: t
  }));
}), o6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Ou, P({}, o, r, {
    ref: t
  }));
}), a6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(ku, P({}, o, r, {
    ref: t
  }));
}), s6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Mu, P({}, o, r, {
    ref: t
  }));
}), i6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Du, P({}, o, r, {
    ref: t
  }));
}), c6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Ru, P({}, o, r, {
    ref: t
  }));
}), l6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(ju, P({}, o, r, {
    ref: t
  }));
}), u6 = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = At(t), [i = !1, c] = dt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ w(Au, P({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, d6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Iu, P({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), f6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Lu, P({}, o, {
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
const tb = qT, m6 = QT, nb = JT, rb = e6, ob = t6, h6 = n6, ab = r6, sb = o6, ib = a6, v6 = s6, cb = i6, lb = c6, ub = l6, g6 = u6, db = d6, fb = f6, P8 = m6, T8 = h6, O8 = rb, k8 = g6, M8 = v6, b6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  tb,
  {
    ref: n,
    className: L(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
b6.displayName = tb.displayName;
const x6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  nb,
  {
    ref: n,
    className: L(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
x6.displayName = nb.displayName;
const y6 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  db,
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
      /* @__PURE__ */ f.exports.jsx(No, { className: "ml-auto h-4 w-4" })
    ]
  }
));
y6.displayName = db.displayName;
const w6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  fb,
  {
    ref: n,
    className: L(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
w6.displayName = fb.displayName;
const $6 = C.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ f.exports.jsx(rb, { children: /* @__PURE__ */ f.exports.jsx(
    ob,
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
$6.displayName = ob.displayName;
const _6 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  sb,
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
_6.displayName = sb.displayName;
const C6 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  ib,
  {
    ref: o,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(lb, { children: /* @__PURE__ */ f.exports.jsx(ln, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
C6.displayName = ib.displayName;
const S6 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  cb,
  {
    ref: r,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(lb, { children: /* @__PURE__ */ f.exports.jsx(bi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
S6.displayName = cb.displayName;
const E6 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  ab,
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
E6.displayName = ab.displayName;
const N6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ub,
  {
    ref: n,
    className: L("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
N6.displayName = ub.displayName;
const P6 = ({
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
P6.displayname = "MenubarShortcut";
const ts = "NavigationMenu", [dd, pb, T6] = gr(ts), [Tl, O6, k6] = gr(ts), [fd, D8] = at(ts, [
  T6,
  k6
]), [M6, hn] = fd(ts), [D6, R6] = fd(ts), j6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: i = 300, orientation: c = "horizontal", dir: l, ...u } = e, [d, p] = X(null), m = Ce(
    t,
    (R) => p(R)
  ), h = En(l), v = H(0), g = H(0), x = H(0), [b, y] = X(!0), [_ = "", $] = dt({
    prop: r,
    onChange: (R) => {
      const K = R !== "", G = i > 0;
      K ? (window.clearTimeout(x.current), G && y(!1)) : (window.clearTimeout(x.current), x.current = window.setTimeout(
        () => y(!0),
        i
      )), o == null || o(R);
    },
    defaultProp: a
  }), E = fe(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => $(""),
      150
    );
  }, [
    $
  ]), N = fe((R) => {
    window.clearTimeout(g.current), $(R);
  }, [
    $
  ]), M = fe((R) => {
    _ === R ? window.clearTimeout(g.current) : v.current = window.setTimeout(() => {
      window.clearTimeout(g.current), $(R);
    }, s);
  }, [
    _,
    $,
    s
  ]);
  return Q(() => () => {
    window.clearTimeout(v.current), window.clearTimeout(g.current), window.clearTimeout(x.current);
  }, []), /* @__PURE__ */ w(A6, {
    scope: n,
    isRootMenu: !0,
    value: _,
    dir: h,
    orientation: c,
    rootNavigationMenu: d,
    onTriggerEnter: (R) => {
      window.clearTimeout(v.current), b ? M(R) : N(R);
    },
    onTriggerLeave: () => {
      window.clearTimeout(v.current), E();
    },
    onContentEnter: () => window.clearTimeout(g.current),
    onContentLeave: E,
    onItemSelect: (R) => {
      $(
        (K) => K === R ? "" : R
      );
    },
    onItemDismiss: () => $("")
  }, /* @__PURE__ */ w(de.nav, P({
    "aria-label": "Main",
    "data-orientation": c,
    dir: h
  }, u, {
    ref: m
  })));
}), A6 = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: i, onItemSelect: c, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: d, onContentEnter: p, onContentLeave: m } = e, [h, v] = X(null), [g, x] = X(/* @__PURE__ */ new Map()), [b, y] = X(null);
  return /* @__PURE__ */ w(M6, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: i,
    previousValue: Fo(i),
    baseId: mt(),
    dir: o,
    orientation: a,
    viewport: h,
    onViewportChange: v,
    indicatorTrack: b,
    onIndicatorTrackChange: y,
    onTriggerEnter: qe(u),
    onTriggerLeave: qe(d),
    onContentEnter: qe(p),
    onContentLeave: qe(m),
    onItemSelect: qe(c),
    onItemDismiss: qe(l),
    onViewportContentChange: fe((_, $) => {
      x((E) => (E.set(_, $), new Map(E)));
    }, []),
    onViewportContentRemove: fe((_) => {
      x(($) => $.has(_) ? ($.delete(_), new Map($)) : $);
    }, [])
  }, /* @__PURE__ */ w(dd.Provider, {
    scope: t
  }, /* @__PURE__ */ w(D6, {
    scope: t,
    items: g
  }, s)));
}, I6 = "NavigationMenuList", L6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = hn(I6, n), a = /* @__PURE__ */ w(de.ul, P({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ w(de.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ w(dd.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ w(bb, {
    asChild: !0
  }, a) : a));
}), F6 = "NavigationMenuItem", [V6, mb] = fd(F6), U6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = mt(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = H(null), c = H(null), l = H(null), u = H(() => {
  }), d = H(!1), p = fe((h = "start") => {
    if (i.current) {
      u.current();
      const v = Ol(i.current);
      v.length && pd(h === "start" ? v : v.reverse());
    }
  }, []), m = fe(() => {
    if (i.current) {
      const h = Ol(i.current);
      h.length && (u.current = Q6(h));
    }
  }, []);
  return /* @__PURE__ */ w(V6, {
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
  }, /* @__PURE__ */ w(de.li, P({}, o, {
    ref: t
  })));
}), Qf = "NavigationMenuTrigger", z6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = hn(Qf, e.__scopeNavigationMenu), s = mb(Qf, e.__scopeNavigationMenu), i = H(null), c = Ce(i, s.triggerRef, t), l = yb(a.baseId, s.value), u = wb(a.baseId, s.value), d = H(!1), p = H(!1), m = s.value === a.value;
  return /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w(dd.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ w(xb, {
    asChild: !0
  }, /* @__PURE__ */ w(de.button, P({
    id: l,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": md(m),
    "aria-expanded": m,
    "aria-controls": u
  }, o, {
    ref: c,
    onPointerEnter: ee(e.onPointerEnter, () => {
      p.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: ee(e.onPointerMove, Js(() => {
      r || p.current || s.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(s.value), d.current = !0);
    })),
    onPointerLeave: ee(e.onPointerLeave, Js(() => {
      r || (a.onTriggerLeave(), d.current = !1);
    })),
    onClick: ee(e.onClick, () => {
      a.onItemSelect(s.value), p.current = m;
    }),
    onKeyDown: ee(e.onKeyDown, (h) => {
      const g = {
        horizontal: "ArrowDown",
        vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[a.orientation];
      m && h.key === g && (s.onEntryKeyDown(), h.preventDefault());
    })
  })))), m && /* @__PURE__ */ w(qt, null, /* @__PURE__ */ w(dv, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: s.focusProxyRef,
    onFocus: (h) => {
      const v = s.contentRef.current, g = h.relatedTarget, x = g === i.current, b = v == null ? void 0 : v.contains(g);
      (x || !b) && s.onFocusProxyEnter(x ? "start" : "end");
    }
  }), a.viewport && /* @__PURE__ */ w("span", {
    "aria-owns": u
  })));
}), Jf = "navigationMenu.linkSelect", W6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ w(xb, {
    asChild: !0
  }, /* @__PURE__ */ w(de.a, P({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: ee(e.onClick, (s) => {
      const i = s.target, c = new CustomEvent(Jf, {
        bubbles: !0,
        cancelable: !0
      });
      if (i.addEventListener(
        Jf,
        (l) => o == null ? void 0 : o(l),
        {
          once: !0
        }
      ), Fs(i, c), !c.defaultPrevented && !s.metaKey) {
        const l = new CustomEvent(Os, {
          bubbles: !0,
          cancelable: !0
        });
        Fs(i, l);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), hb = "NavigationMenuIndicator", B6 = /* @__PURE__ */ A((e, t) => {
  const { forceMount: n, ...r } = e, o = hn(hb, e.__scopeNavigationMenu), a = Boolean(o.value);
  return o.indicatorTrack ? /* @__PURE__ */ Gl.createPortal(/* @__PURE__ */ w(it, {
    present: n || a
  }, /* @__PURE__ */ w(H6, P({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), H6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = hn(hb, n), a = pb(n), [s, i] = X(null), [c, l] = X(null), u = o.orientation === "horizontal", d = Boolean(o.value);
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
    s && l({
      size: u ? s.offsetWidth : s.offsetHeight,
      offset: u ? s.offsetLeft : s.offsetTop
    });
  };
  return kl(s, p), kl(o.indicatorTrack, p), c ? /* @__PURE__ */ w(de.div, P({
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
}), va = "NavigationMenuContent", Y6 = /* @__PURE__ */ A((e, t) => {
  const { forceMount: n, ...r } = e, o = hn(va, e.__scopeNavigationMenu), a = mb(va, e.__scopeNavigationMenu), s = Ce(a.contentRef, t), i = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ w(K6, P({
    forceMount: n
  }, c, {
    ref: s
  })) : /* @__PURE__ */ w(it, {
    present: n || i
  }, /* @__PURE__ */ w(vb, P({
    "data-state": md(i)
  }, c, {
    ref: s,
    onPointerEnter: ee(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: ee(e.onPointerLeave, Js(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !i && o.isRootMenu ? "none" : void 0,
      ...c.style
    }
  })));
}), K6 = /* @__PURE__ */ A((e, t) => {
  const n = hn(va, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return $t(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [
    e,
    t,
    r
  ]), $t(() => () => o(e.value), [
    e.value,
    o
  ]), null;
}), Os = "navigationMenu.rootContentDismiss", vb = /* @__PURE__ */ A((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: i, onContentFocusOutside: c, ...l } = e, u = hn(va, n), d = H(null), p = Ce(d, t), m = yb(u.baseId, r), h = wb(u.baseId, r), v = pb(n), g = H(null), { onItemDismiss: x } = u;
  Q(() => {
    const y = d.current;
    if (u.isRootMenu && y) {
      const _ = () => {
        var $;
        x(), i(), y.contains(document.activeElement) && (($ = o.current) === null || $ === void 0 || $.focus());
      };
      return y.addEventListener(Os, _), () => y.removeEventListener(Os, _);
    }
  }, [
    u.isRootMenu,
    e.value,
    o,
    x,
    i
  ]);
  const b = Mt(() => {
    const _ = v().map(
      (K) => K.value
    );
    u.dir === "rtl" && _.reverse();
    const $ = _.indexOf(u.value), E = _.indexOf(u.previousValue), N = r === u.value, M = E === _.indexOf(r);
    if (!N && !M)
      return g.current;
    const R = (() => {
      if ($ !== E) {
        if (N && E !== -1)
          return $ > E ? "from-end" : "from-start";
        if (M && $ !== -1)
          return $ > E ? "to-start" : "to-end";
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
  return /* @__PURE__ */ w(bb, {
    asChild: !0
  }, /* @__PURE__ */ w(Wr, P({
    id: h,
    "aria-labelledby": m,
    "data-motion": b,
    "data-orientation": u.orientation
  }, l, {
    ref: p,
    onDismiss: () => {
      var y;
      const _ = new Event(Os, {
        bubbles: !0,
        cancelable: !0
      });
      (y = d.current) === null || y === void 0 || y.dispatchEvent(_);
    },
    onFocusOutside: ee(e.onFocusOutside, (y) => {
      var _;
      c();
      const $ = y.target;
      (_ = u.rootNavigationMenu) !== null && _ !== void 0 && _.contains($) && y.preventDefault();
    }),
    onPointerDownOutside: ee(e.onPointerDownOutside, (y) => {
      var _;
      const $ = y.target, E = v().some((M) => {
        var R;
        return (R = M.ref.current) === null || R === void 0 ? void 0 : R.contains($);
      }), N = u.isRootMenu && ((_ = u.viewport) === null || _ === void 0 ? void 0 : _.contains($));
      (E || N || !u.isRootMenu) && y.preventDefault();
    }),
    onKeyDown: ee(e.onKeyDown, (y) => {
      const _ = y.altKey || y.ctrlKey || y.metaKey;
      if (y.key === "Tab" && !_) {
        const N = Ol(y.currentTarget), M = document.activeElement, R = N.findIndex(
          (W) => W === M
        ), G = y.shiftKey ? N.slice(0, R).reverse() : N.slice(R + 1, N.length);
        if (pd(G))
          y.preventDefault();
        else {
          var E;
          (E = a.current) === null || E === void 0 || E.focus();
        }
      }
    }),
    onEscapeKeyDown: ee(e.onEscapeKeyDown, (y) => {
      s.current = !0;
    })
  })));
}), gb = "NavigationMenuViewport", G6 = /* @__PURE__ */ A((e, t) => {
  const { forceMount: n, ...r } = e, o = hn(gb, e.__scopeNavigationMenu), a = Boolean(o.value);
  return /* @__PURE__ */ w(it, {
    present: n || a
  }, /* @__PURE__ */ w(Z6, P({}, r, {
    ref: t
  })));
}), Z6 = /* @__PURE__ */ A((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = hn(gb, n), s = Ce(t, a.onViewportChange), i = R6(va, e.__scopeNavigationMenu), [c, l] = X(null), [u, d] = X(null), p = c ? (c == null ? void 0 : c.width) + "px" : void 0, m = c ? (c == null ? void 0 : c.height) + "px" : void 0, h = Boolean(a.value), v = h ? a.value : a.previousValue;
  return kl(u, () => {
    u && l({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }), /* @__PURE__ */ w(de.div, P({
    "data-state": md(h),
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
    onPointerEnter: ee(e.onPointerEnter, a.onContentEnter),
    onPointerLeave: ee(e.onPointerLeave, Js(a.onContentLeave))
  }), Array.from(i.items).map(([x, { ref: b, forceMount: y, ..._ }]) => {
    const $ = v === x;
    return /* @__PURE__ */ w(it, {
      key: x,
      present: y || $
    }, /* @__PURE__ */ w(vb, P({}, _, {
      ref: Ra(b, (E) => {
        $ && E && d(E);
      })
    })));
  }));
}), q6 = "FocusGroup", bb = /* @__PURE__ */ A((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = hn(q6, n);
  return /* @__PURE__ */ w(Tl.Provider, {
    scope: n
  }, /* @__PURE__ */ w(Tl.Slot, {
    scope: n
  }, /* @__PURE__ */ w(de.div, P({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), ep = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], X6 = "FocusGroupItem", xb = /* @__PURE__ */ A((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = O6(n), a = hn(X6, n);
  return /* @__PURE__ */ w(Tl.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ w(de.button, P({}, r, {
    ref: t,
    onKeyDown: ee(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...ep
      ].includes(s.key)) {
        let c = o().map(
          (d) => d.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && c.reverse(), ep.includes(s.key)) {
          const d = c.indexOf(s.currentTarget);
          c = c.slice(d + 1);
        }
        setTimeout(
          () => pd(c)
        ), s.preventDefault();
      }
    })
  })));
});
function Ol(e) {
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
function pd(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function Q6(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function kl(e, t) {
  const n = qe(t);
  $t(() => {
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
function md(e) {
  return e ? "open" : "closed";
}
function yb(e, t) {
  return `${e}-trigger-${t}`;
}
function wb(e, t) {
  return `${e}-content-${t}`;
}
function Js(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const $b = j6, _b = L6, J6 = U6, Cb = z6, eO = W6, Sb = B6, Eb = Y6, Nb = G6, tO = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  $b,
  {
    ref: r,
    className: L(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(Pb, {})
    ]
  }
));
tO.displayName = $b.displayName;
const nO = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  _b,
  {
    ref: n,
    className: L(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
nO.displayName = _b.displayName;
const R8 = J6, rO = Eo(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), oO = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Cb,
  {
    ref: r,
    className: L(rO(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ f.exports.jsx(
        sa,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
oO.displayName = Cb.displayName;
const aO = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Eb,
  {
    ref: n,
    className: L(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
aO.displayName = Eb.displayName;
const j8 = eO, Pb = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: L("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ f.exports.jsx(
  Nb,
  {
    className: L(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-card text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
Pb.displayName = Nb.displayName;
const sO = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Sb,
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
sO.displayName = Sb.displayName;
const Tb = "Progress", Qi = 100, [iO, A8] = at(Tb), [cO, lO] = iO(Tb), Ob = /* @__PURE__ */ A((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = fO, ...s } = e, i = Ml(o) ? o : Qi, c = Mb(r, i) ? r : null, l = ei(c) ? a(c, i) : void 0;
  return /* @__PURE__ */ w(cO, {
    scope: n,
    value: c,
    max: i
  }, /* @__PURE__ */ w(de.div, P({
    "aria-valuemax": i,
    "aria-valuemin": 0,
    "aria-valuenow": ei(c) ? c : void 0,
    "aria-valuetext": l,
    role: "progressbar",
    "data-state": kb(c, i),
    "data-value": c ?? void 0,
    "data-max": i
  }, s, {
    ref: t
  })));
});
Ob.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Ml(r) ? new Error(pO(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = Ml(e.max) ? e.max : Qi;
    return r != null && !Mb(r, a) ? new Error(mO(o, n)) : null;
  }
};
const uO = "ProgressIndicator", dO = /* @__PURE__ */ A((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = lO(uO, r);
  return /* @__PURE__ */ w(de.div, P({
    "data-state": kb(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function fO(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function kb(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function ei(e) {
  return typeof e == "number";
}
function Ml(e) {
  return ei(e) && !isNaN(e) && e > 0;
}
function Mb(e, t) {
  return ei(e) && !isNaN(e) && e <= t && e >= 0;
}
function pO(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Qi}\`.`;
}
function mO(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Qi} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const Db = Ob, hO = dO, vO = C.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Db,
  {
    ref: r,
    className: L(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(
      hO,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
vO.displayName = Db.displayName;
const Rb = "Radio", [gO, jb] = at(Rb), [bO, xO] = gO(Rb), yO = /* @__PURE__ */ A((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: i = "on", onCheck: c, ...l } = e, [u, d] = X(null), p = Ce(
    t,
    (v) => d(v)
  ), m = H(!1), h = u ? Boolean(u.closest("form")) : !0;
  return /* @__PURE__ */ w(bO, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ w(de.button, P({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": Ab(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: i
  }, l, {
    ref: p,
    onClick: ee(e.onClick, (v) => {
      o || c == null || c(), h && (m.current = v.isPropagationStopped(), m.current || v.stopPropagation());
    })
  })), h && /* @__PURE__ */ w(_O, {
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
}), wO = "RadioIndicator", $O = /* @__PURE__ */ A((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = xO(wO, n);
  return /* @__PURE__ */ w(it, {
    present: r || a.checked
  }, /* @__PURE__ */ w(de.span, P({
    "data-state": Ab(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), _O = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = H(null), s = Fo(n), i = Ua(t);
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
  ]), /* @__PURE__ */ w("input", P({
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
function Ab(e) {
  return e ? "checked" : "unchecked";
}
const CO = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Ib = "RadioGroup", [SO, I8] = at(Ib, [
  br,
  jb
]), Lb = br(), Fb = jb(), [EO, NO] = SO(Ib), PO = /* @__PURE__ */ A((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: i = !1, orientation: c, dir: l, loop: u = !0, onValueChange: d, ...p } = e, m = Lb(n), h = En(l), [v, g] = dt({
    prop: a,
    defaultProp: o,
    onChange: d
  });
  return /* @__PURE__ */ w(EO, {
    scope: n,
    name: r,
    required: s,
    disabled: i,
    value: v,
    onValueChange: g
  }, /* @__PURE__ */ w(Ni, P({
    asChild: !0
  }, m, {
    orientation: c,
    dir: h,
    loop: u
  }), /* @__PURE__ */ w(de.div, P({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": c,
    "data-disabled": i ? "" : void 0,
    dir: h
  }, p, {
    ref: t
  }))));
}), TO = "RadioGroupItem", OO = /* @__PURE__ */ A((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = NO(TO, n), s = a.disabled || r, i = Lb(n), c = Fb(n), l = H(null), u = Ce(t, l), d = a.value === o.value, p = H(!1);
  return Q(() => {
    const m = (v) => {
      CO.includes(v.key) && (p.current = !0);
    }, h = () => p.current = !1;
    return document.addEventListener("keydown", m), document.addEventListener("keyup", h), () => {
      document.removeEventListener("keydown", m), document.removeEventListener("keyup", h);
    };
  }, []), /* @__PURE__ */ w(Pi, P({
    asChild: !0
  }, i, {
    focusable: !s,
    active: d
  }), /* @__PURE__ */ w(yO, P({
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
}), kO = /* @__PURE__ */ A((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = Fb(n);
  return /* @__PURE__ */ w($O, P({}, o, r, {
    ref: t
  }));
}), Vb = PO, Ub = OO, MO = kO, DO = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Vb,
  {
    className: L("grid gap-2", e),
    ...t,
    ref: n
  }
));
DO.displayName = Vb.displayName;
const RO = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Ub,
  {
    ref: r,
    className: L(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(MO, { className: "flex items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(bi, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
RO.displayName = Ub.displayName;
const zb = [
  "PageUp",
  "PageDown"
], Wb = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Bb = {
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
}, ns = "Slider", [Dl, jO, AO] = gr(ns), [Hb, L8] = at(ns, [
  AO
]), [IO, Ji] = Hb(ns), LO = /* @__PURE__ */ A((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: i = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    r
  ], value: u, onValueChange: d = () => {
  }, onValueCommit: p = () => {
  }, inverted: m = !1, ...h } = e, [v, g] = X(null), x = Ce(
    t,
    (F) => g(F)
  ), b = H(/* @__PURE__ */ new Set()), y = H(0), _ = s === "horizontal", $ = v ? Boolean(v.closest("form")) : !0, E = _ ? FO : VO, [N = [], M] = dt({
    prop: u,
    defaultProp: l,
    onChange: (F) => {
      var j;
      (j = [
        ...b.current
      ][y.current]) === null || j === void 0 || j.focus(), d(F);
    }
  }), R = H(N);
  function K(F) {
    const j = ZO(N, F);
    Z(F, j);
  }
  function G(F) {
    Z(F, y.current);
  }
  function W() {
    const F = R.current[y.current];
    N[y.current] !== F && p(N);
  }
  function Z(F, j, { commit: I } = {
    commit: !1
  }) {
    const V = JO(a), Y = e3(Math.round((F - r) / a) * a + r, V), D = ma(Y, [
      r,
      o
    ]);
    M((k = []) => {
      const B = KO(k, D, j);
      if (QO(B, c * a)) {
        y.current = B.indexOf(D);
        const q = String(B) !== String(k);
        return q && I && p(B), q ? B : k;
      } else
        return k;
    });
  }
  return /* @__PURE__ */ w(IO, {
    scope: e.__scopeSlider,
    disabled: i,
    min: r,
    max: o,
    valueIndexToChangeRef: y,
    thumbs: b.current,
    values: N,
    orientation: s
  }, /* @__PURE__ */ w(Dl.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ w(Dl.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ w(E, P({
    "aria-disabled": i,
    "data-disabled": i ? "" : void 0
  }, h, {
    ref: x,
    onPointerDown: ee(h.onPointerDown, () => {
      i || (R.current = N);
    }),
    min: r,
    max: o,
    inverted: m,
    onSlideStart: i ? void 0 : K,
    onSlideMove: i ? void 0 : G,
    onSlideEnd: i ? void 0 : W,
    onHomeKeyDown: () => !i && Z(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !i && Z(o, N.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: F, direction: j }) => {
      if (!i) {
        const Y = zb.includes(F.key) || F.shiftKey && Wb.includes(F.key) ? 10 : 1, D = y.current, k = N[D], B = a * Y * j;
        Z(k + B, D, {
          commit: !0
        });
      }
    }
  })))), $ && N.map(
    (F, j) => /* @__PURE__ */ w(YO, {
      key: j,
      name: n ? n + (N.length > 1 ? "[]" : "") : void 0,
      value: F
    })
  ));
}), [Yb, Kb] = Hb(ns, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), FO = /* @__PURE__ */ A((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: i, onSlideEnd: c, onStepKeyDown: l, ...u } = e, [d, p] = X(null), m = Ce(
    t,
    (y) => p(y)
  ), h = H(), v = En(o), g = v === "ltr", x = g && !a || !g && a;
  function b(y) {
    const _ = h.current || d.getBoundingClientRect(), $ = [
      0,
      _.width
    ], N = hd($, x ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return h.current = _, N(y - _.left);
  }
  return /* @__PURE__ */ w(Yb, {
    scope: e.__scopeSlider,
    startEdge: x ? "left" : "right",
    endEdge: x ? "right" : "left",
    direction: x ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ w(Gb, P({
    dir: v,
    "data-orientation": "horizontal"
  }, u, {
    ref: m,
    style: {
      ...u.style,
      ["--radix-slider-thumb-transform"]: "translateX(-50%)"
    },
    onSlideStart: (y) => {
      const _ = b(y.clientX);
      s == null || s(_);
    },
    onSlideMove: (y) => {
      const _ = b(y.clientX);
      i == null || i(_);
    },
    onSlideEnd: () => {
      h.current = void 0, c == null || c();
    },
    onStepKeyDown: (y) => {
      const $ = Bb[x ? "from-left" : "from-right"].includes(y.key);
      l == null || l({
        event: y,
        direction: $ ? -1 : 1
      });
    }
  })));
}), VO = /* @__PURE__ */ A((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: i, onStepKeyDown: c, ...l } = e, u = H(null), d = Ce(t, u), p = H(), m = !o;
  function h(v) {
    const g = p.current || u.current.getBoundingClientRect(), x = [
      0,
      g.height
    ], y = hd(x, m ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return p.current = g, y(v - g.top);
  }
  return /* @__PURE__ */ w(Yb, {
    scope: e.__scopeSlider,
    startEdge: m ? "bottom" : "top",
    endEdge: m ? "top" : "bottom",
    size: "height",
    direction: m ? 1 : -1
  }, /* @__PURE__ */ w(Gb, P({
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
      const x = Bb[m ? "from-bottom" : "from-top"].includes(v.key);
      c == null || c({
        event: v,
        direction: x ? -1 : 1
      });
    }
  })));
}), Gb = /* @__PURE__ */ A((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: i, onStepKeyDown: c, ...l } = e, u = Ji(ns, n);
  return /* @__PURE__ */ w(de.span, P({}, l, {
    ref: t,
    onKeyDown: ee(e.onKeyDown, (d) => {
      d.key === "Home" ? (s(d), d.preventDefault()) : d.key === "End" ? (i(d), d.preventDefault()) : zb.concat(Wb).includes(d.key) && (c(d), d.preventDefault());
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
}), UO = "SliderTrack", zO = /* @__PURE__ */ A((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Ji(UO, n);
  return /* @__PURE__ */ w(de.span, P({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), tp = "SliderRange", WO = /* @__PURE__ */ A((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Ji(tp, n), a = Kb(tp, n), s = H(null), i = Ce(t, s), c = o.values.length, l = o.values.map(
    (p) => Zb(p, o.min, o.max)
  ), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
  return /* @__PURE__ */ w(de.span, P({
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
}), np = "SliderThumb", BO = /* @__PURE__ */ A((e, t) => {
  const n = jO(e.__scopeSlider), [r, o] = X(null), a = Ce(
    t,
    (i) => o(i)
  ), s = Mt(
    () => r ? n().findIndex(
      (i) => i.ref.current === r
    ) : -1,
    [
      n,
      r
    ]
  );
  return /* @__PURE__ */ w(HO, P({}, e, {
    ref: a,
    index: s
  }));
}), HO = /* @__PURE__ */ A((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = Ji(np, n), s = Kb(np, n), [i, c] = X(null), l = Ce(
    t,
    (g) => c(g)
  ), u = Ua(i), d = a.values[r], p = d === void 0 ? 0 : Zb(d, a.min, a.max), m = GO(r, a.values.length), h = u == null ? void 0 : u[s.size], v = h ? qO(h, p, s.direction) : 0;
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
  }, /* @__PURE__ */ w(Dl.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ w(de.span, P({
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
}), YO = (e) => {
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
  ]), /* @__PURE__ */ w("input", P({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function KO(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function Zb(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return ma(a, [
    0,
    100
  ]);
}
function GO(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function ZO(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function qO(e, t, n) {
  const r = e / 2, a = hd([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function XO(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function QO(e, t) {
  if (t > 0) {
    const n = XO(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function hd(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function JO(e) {
  return (String(e).split(".")[1] || "").length;
}
function e3(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const qb = LO, t3 = zO, n3 = WO, r3 = BO, o3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(
  qb,
  {
    ref: n,
    className: L(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ f.exports.jsx(t3, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ f.exports.jsx(n3, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ f.exports.jsx(r3, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
o3.displayName = qb.displayName;
const Xb = "Tabs", [a3, F8] = at(Xb, [
  br
]), Qb = br(), [s3, vd] = a3(Xb), i3 = /* @__PURE__ */ A((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: i, activationMode: c = "automatic", ...l } = e, u = En(i), [d, p] = dt({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ w(s3, {
    scope: n,
    baseId: mt(),
    value: d,
    onValueChange: p,
    orientation: s,
    dir: u,
    activationMode: c
  }, /* @__PURE__ */ w(de.div, P({
    dir: u,
    "data-orientation": s
  }, l, {
    ref: t
  })));
}), c3 = "TabsList", l3 = /* @__PURE__ */ A((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = vd(c3, n), s = Qb(n);
  return /* @__PURE__ */ w(Ni, P({
    asChild: !0
  }, s, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ w(de.div, P({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: t
  })));
}), u3 = "TabsTrigger", d3 = /* @__PURE__ */ A((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = vd(u3, n), i = Qb(n), c = Jb(s.baseId, r), l = ex(s.baseId, r), u = r === s.value;
  return /* @__PURE__ */ w(Pi, P({
    asChild: !0
  }, i, {
    focusable: !o,
    active: u
  }), /* @__PURE__ */ w(de.button, P({
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
}), f3 = "TabsContent", p3 = /* @__PURE__ */ A((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = vd(f3, n), c = Jb(i.baseId, r), l = ex(i.baseId, r), u = r === i.value, d = H(u);
  return Q(() => {
    const p = requestAnimationFrame(
      () => d.current = !1
    );
    return () => cancelAnimationFrame(p);
  }, []), /* @__PURE__ */ w(
    it,
    {
      present: o || u
    },
    ({ present: p }) => /* @__PURE__ */ w(de.div, P({
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
function Jb(e, t) {
  return `${e}-trigger-${t}`;
}
function ex(e, t) {
  return `${e}-content-${t}`;
}
const m3 = i3, tx = l3, nx = d3, rx = p3, V8 = m3, h3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  tx,
  {
    ref: n,
    className: L(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
h3.displayName = tx.displayName;
const v3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  nx,
  {
    ref: n,
    className: L(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
v3.displayName = nx.displayName;
const g3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  rx,
  {
    ref: n,
    className: L(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
g3.displayName = rx.displayName;
const b3 = /* @__PURE__ */ A((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, i] = dt({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ w(de.button, P({
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
}), ox = b3, x3 = Eo(
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
), y3 = C.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  ox,
  {
    ref: o,
    className: L(x3({ variant: t, size: n, className: e })),
    ...r
  }
));
y3.displayName = ox.displayName;
const [ec, U8] = at("Tooltip", [
  Nn
]), gd = Nn(), w3 = "TooltipProvider", $3 = 700, Rl = "tooltip.open", [_3, bd] = ec(w3), C3 = (e) => {
  const { __scopeTooltip: t, delayDuration: n = $3, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = X(!0), c = H(!1), l = H(0);
  return Q(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ w(_3, {
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
}, xd = "Tooltip", [S3, tc] = ec(xd), E3 = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = bd(xd, e.__scopeTooltip), l = gd(t), [u, d] = X(null), p = mt(), m = H(0), h = s ?? c.disableHoverableContent, v = i ?? c.delayDuration, g = H(!1), [x = !1, b] = dt({
    prop: r,
    defaultProp: o,
    onChange: (N) => {
      N ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Rl))) : c.onClose(), a == null || a(N);
    }
  }), y = Mt(() => x ? g.current ? "delayed-open" : "instant-open" : "closed", [
    x
  ]), _ = fe(() => {
    window.clearTimeout(m.current), g.current = !1, b(!0);
  }, [
    b
  ]), $ = fe(() => {
    window.clearTimeout(m.current), b(!1);
  }, [
    b
  ]), E = fe(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      g.current = !0, b(!0);
    }, v);
  }, [
    v,
    b
  ]);
  return Q(() => () => window.clearTimeout(m.current), []), /* @__PURE__ */ w(Oo, l, /* @__PURE__ */ w(S3, {
    scope: t,
    contentId: p,
    open: x,
    stateAttribute: y,
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
      h ? $() : window.clearTimeout(m.current);
    }, [
      $,
      h
    ]),
    onOpen: _,
    onClose: $,
    disableHoverableContent: h
  }, n));
}, rp = "TooltipTrigger", N3 = /* @__PURE__ */ A((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = tc(rp, n), a = bd(rp, n), s = gd(n), i = H(null), c = Ce(t, i, o.onTriggerChange), l = H(!1), u = H(!1), d = fe(
    () => l.current = !1,
    []
  );
  return Q(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ w(za, P({
    asChild: !0
  }, s), /* @__PURE__ */ w(de.button, P({
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
}), P3 = "TooltipPortal", [z8, T3] = ec(P3, {
  forceMount: void 0
}), ga = "TooltipContent", O3 = /* @__PURE__ */ A((e, t) => {
  const n = T3(ga, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = tc(ga, e.__scopeTooltip);
  return /* @__PURE__ */ w(it, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ w(ax, P({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ w(k3, P({
    side: o
  }, a, {
    ref: t
  })));
}), k3 = /* @__PURE__ */ A((e, t) => {
  const n = tc(ga, e.__scopeTooltip), r = bd(ga, e.__scopeTooltip), o = H(null), a = Ce(t, o), [s, i] = X(null), { trigger: c, onClose: l } = n, u = o.current, { onPointerInTransitChange: d } = r, p = fe(() => {
    i(null), d(!1);
  }, [
    d
  ]), m = fe((h, v) => {
    const g = h.currentTarget, x = {
      x: h.clientX,
      y: h.clientY
    }, b = D3(x, g.getBoundingClientRect()), y = R3(x, b), _ = j3(v.getBoundingClientRect()), $ = I3([
      ...y,
      ..._
    ]);
    i($), d(!0);
  }, [
    d
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
        const g = v.target, x = {
          x: v.clientX,
          y: v.clientY
        }, b = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !A3(x, s);
        b ? p() : y && (p(), l());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [
    c,
    u,
    s,
    l,
    p
  ]), /* @__PURE__ */ w(ax, P({}, e, {
    ref: a
  }));
}), [M3, W8] = ec(xd, {
  isInside: !1
}), ax = /* @__PURE__ */ A((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = tc(ga, n), l = gd(n), { onClose: u } = c;
  return Q(() => (document.addEventListener(Rl, u), () => document.removeEventListener(Rl, u)), [
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
  ]), /* @__PURE__ */ w(Wr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ w(Wa, P({
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
  }), /* @__PURE__ */ w(ql, null, r), /* @__PURE__ */ w(M3, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ w(dv, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function D3(e, t) {
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
function R3(e, t, n = 5) {
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
function j3(e) {
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
function A3(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function I3(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), L3(t);
}
function L3(e) {
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
const F3 = C3, V3 = E3, U3 = N3, sx = O3, Rr = F3, jr = V3, Ar = U3, fr = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  sx,
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
fr.displayName = sx.displayName;
const ix = "Switch", [z3, B8] = at(ix), [W3, B3] = z3(ix), H3 = /* @__PURE__ */ A((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, p] = X(null), m = Ce(
    t,
    (b) => p(b)
  ), h = H(!1), v = d ? Boolean(d.closest("form")) : !0, [g = !1, x] = dt({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ w(W3, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ w(de.button, P({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": cx(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: m,
    onClick: ee(e.onClick, (b) => {
      x(
        (y) => !y
      ), v && (h.current = b.isPropagationStopped(), h.current || b.stopPropagation());
    })
  })), v && /* @__PURE__ */ w(G3, {
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
}), Y3 = "SwitchThumb", K3 = /* @__PURE__ */ A((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = B3(Y3, n);
  return /* @__PURE__ */ w(de.span, P({
    "data-state": cx(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), G3 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = H(null), s = Fo(n), i = Ua(t);
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
  ]), /* @__PURE__ */ w("input", P({
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
function cx(e) {
  return e ? "checked" : "unchecked";
}
const lx = H3, Z3 = K3, q3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  lx,
  {
    className: L(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ f.exports.jsx(
      Z3,
      {
        className: L(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
q3.displayName = lx.displayName;
const op = (e) => {
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
}, X3 = (e) => e ? op(e) : op;
var ux = { exports: {} }, Ac = {}, Ic = { exports: {} }, Lc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ap;
function Q3() {
  if (ap)
    return Lc;
  ap = 1;
  var e = S;
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
  return Lc.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Lc;
}
var Fc = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sp;
function J3() {
  return sp || (sp = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = S, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(y) {
      {
        for (var _ = arguments.length, $ = new Array(_ > 1 ? _ - 1 : 0), E = 1; E < _; E++)
          $[E - 1] = arguments[E];
        r("error", y, $);
      }
    }
    function r(y, _, $) {
      {
        var E = t.ReactDebugCurrentFrame, N = E.getStackAddendum();
        N !== "" && (_ += "%s", $ = $.concat([N]));
        var M = $.map(function(R) {
          return String(R);
        });
        M.unshift("Warning: " + _), Function.prototype.apply.call(console[y], console, M);
      }
    }
    function o(y, _) {
      return y === _ && (y !== 0 || 1 / y === 1 / _) || y !== y && _ !== _;
    }
    var a = typeof Object.is == "function" ? Object.is : o, s = e.useState, i = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, u = !1, d = !1;
    function p(y, _, $) {
      u || e.startTransition !== void 0 && (u = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var E = _();
      if (!d) {
        var N = _();
        a(E, N) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var M = s({
        inst: {
          value: E,
          getSnapshot: _
        }
      }), R = M[0].inst, K = M[1];
      return c(function() {
        R.value = E, R.getSnapshot = _, m(R) && K({
          inst: R
        });
      }, [y, E, _]), i(function() {
        m(R) && K({
          inst: R
        });
        var G = function() {
          m(R) && K({
            inst: R
          });
        };
        return y(G);
      }, [y]), l(E), E;
    }
    function m(y) {
      var _ = y.getSnapshot, $ = y.value;
      try {
        var E = _();
        return !a($, E);
      } catch {
        return !0;
      }
    }
    function h(y, _, $) {
      return _();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !v, x = g ? h : p, b = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : x;
    Fc.useSyncExternalStore = b, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Fc;
}
var ip;
function dx() {
  return ip || (ip = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Q3() : e.exports = J3();
  }(Ic)), Ic.exports;
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
var cp;
function ek() {
  if (cp)
    return Ac;
  cp = 1;
  var e = S, t = dx();
  function n(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
  return Ac.useSyncExternalStoreWithSelector = function(l, u, d, p, m) {
    var h = a(null);
    if (h.current === null) {
      var v = { hasValue: !1, value: null };
      h.current = v;
    } else
      v = h.current;
    h = i(function() {
      function x(E) {
        if (!b) {
          if (b = !0, y = E, E = p(E), m !== void 0 && v.hasValue) {
            var N = v.value;
            if (m(N, E))
              return _ = N;
          }
          return _ = E;
        }
        if (N = _, r(y, E))
          return N;
        var M = p(E);
        return m !== void 0 && m(N, M) ? N : (y = E, _ = M);
      }
      var b = !1, y, _, $ = d === void 0 ? null : d;
      return [function() {
        return x(u());
      }, $ === null ? void 0 : function() {
        return x($());
      }];
    }, [u, d, p, m]);
    var g = o(l, h[0], h[1]);
    return s(function() {
      v.hasValue = !0, v.value = g;
    }, [g]), c(g), g;
  }, Ac;
}
var Vc = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lp;
function tk() {
  return lp || (lp = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = S, t = dx();
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
      var x = i(function() {
        var $ = !1, E, N, M = function(W) {
          if (!$) {
            $ = !0, E = W;
            var Z = m(W);
            if (h !== void 0 && g.hasValue) {
              var F = g.value;
              if (h(F, Z))
                return N = F, F;
            }
            return N = Z, Z;
          }
          var j = E, I = N;
          if (r(j, W))
            return I;
          var V = m(W);
          return h !== void 0 && h(I, V) ? I : (E = W, N = V, V);
        }, R = p === void 0 ? null : p, K = function() {
          return M(d());
        }, G = R === null ? void 0 : function() {
          return M(R());
        };
        return [K, G];
      }, [d, p, m, h]), b = x[0], y = x[1], _ = o(u, b, y);
      return s(function() {
        g.hasValue = !0, g.value = _;
      }, [_]), c(_), _;
    }
    Vc.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Vc;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = ek() : e.exports = tk();
})(ux);
const nk = /* @__PURE__ */ _0(ux.exports), { useSyncExternalStoreWithSelector: rk } = nk;
function ok(e, t = e.getState, n) {
  const r = rk(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return x0(r), r;
}
const up = (e) => {
  const t = typeof e == "function" ? X3(e) : e, n = (r, o) => ok(t, r, o);
  return Object.assign(n, t), n;
}, ak = (e) => e ? up(e) : up, sk = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ f.exports.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ f.exports.jsxs(La, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ f.exports.jsx(
      vo,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ f.exports.jsx(Fa, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(uy, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ f.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ f.exports.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ f.exports.jsx(Et, { className: "w-full bg-brand-secondary dark:text-white", children: e.role })
  ] })
] });
var Rn = { exports: {} }, Uc = { exports: {} }, Ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dp;
function ik() {
  if (dp)
    return Ye;
  dp = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
  function y($) {
    if (typeof $ == "object" && $ !== null) {
      var E = $.$$typeof;
      switch (E) {
        case t:
          switch ($ = $.type, $) {
            case c:
            case l:
            case r:
            case a:
            case o:
            case d:
              return $;
            default:
              switch ($ = $ && $.$$typeof, $) {
                case i:
                case u:
                case h:
                case m:
                case s:
                  return $;
                default:
                  return E;
              }
          }
        case n:
          return E;
      }
    }
  }
  function _($) {
    return y($) === l;
  }
  return Ye.AsyncMode = c, Ye.ConcurrentMode = l, Ye.ContextConsumer = i, Ye.ContextProvider = s, Ye.Element = t, Ye.ForwardRef = u, Ye.Fragment = r, Ye.Lazy = h, Ye.Memo = m, Ye.Portal = n, Ye.Profiler = a, Ye.StrictMode = o, Ye.Suspense = d, Ye.isAsyncMode = function($) {
    return _($) || y($) === c;
  }, Ye.isConcurrentMode = _, Ye.isContextConsumer = function($) {
    return y($) === i;
  }, Ye.isContextProvider = function($) {
    return y($) === s;
  }, Ye.isElement = function($) {
    return typeof $ == "object" && $ !== null && $.$$typeof === t;
  }, Ye.isForwardRef = function($) {
    return y($) === u;
  }, Ye.isFragment = function($) {
    return y($) === r;
  }, Ye.isLazy = function($) {
    return y($) === h;
  }, Ye.isMemo = function($) {
    return y($) === m;
  }, Ye.isPortal = function($) {
    return y($) === n;
  }, Ye.isProfiler = function($) {
    return y($) === a;
  }, Ye.isStrictMode = function($) {
    return y($) === o;
  }, Ye.isSuspense = function($) {
    return y($) === d;
  }, Ye.isValidElementType = function($) {
    return typeof $ == "string" || typeof $ == "function" || $ === r || $ === l || $ === a || $ === o || $ === d || $ === p || typeof $ == "object" && $ !== null && ($.$$typeof === h || $.$$typeof === m || $.$$typeof === s || $.$$typeof === i || $.$$typeof === u || $.$$typeof === g || $.$$typeof === x || $.$$typeof === b || $.$$typeof === v);
  }, Ye.typeOf = y, Ye;
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
var fp;
function ck() {
  return fp || (fp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function y(U) {
      return typeof U == "string" || typeof U == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      U === r || U === l || U === a || U === o || U === d || U === p || typeof U == "object" && U !== null && (U.$$typeof === h || U.$$typeof === m || U.$$typeof === s || U.$$typeof === i || U.$$typeof === u || U.$$typeof === g || U.$$typeof === x || U.$$typeof === b || U.$$typeof === v);
    }
    function _(U) {
      if (typeof U == "object" && U !== null) {
        var ge = U.$$typeof;
        switch (ge) {
          case t:
            var $e = U.type;
            switch ($e) {
              case c:
              case l:
              case r:
              case a:
              case o:
              case d:
                return $e;
              default:
                var Te = $e && $e.$$typeof;
                switch (Te) {
                  case i:
                  case u:
                  case h:
                  case m:
                  case s:
                    return Te;
                  default:
                    return ge;
                }
            }
          case n:
            return ge;
        }
      }
    }
    var $ = c, E = l, N = i, M = s, R = t, K = u, G = r, W = h, Z = m, F = n, j = a, I = o, V = d, Y = !1;
    function D(U) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(U) || _(U) === c;
    }
    function k(U) {
      return _(U) === l;
    }
    function B(U) {
      return _(U) === i;
    }
    function q(U) {
      return _(U) === s;
    }
    function oe(U) {
      return typeof U == "object" && U !== null && U.$$typeof === t;
    }
    function te(U) {
      return _(U) === u;
    }
    function ve(U) {
      return _(U) === r;
    }
    function me(U) {
      return _(U) === h;
    }
    function re(U) {
      return _(U) === m;
    }
    function se(U) {
      return _(U) === n;
    }
    function ue(U) {
      return _(U) === a;
    }
    function ne(U) {
      return _(U) === o;
    }
    function he(U) {
      return _(U) === d;
    }
    Ke.AsyncMode = $, Ke.ConcurrentMode = E, Ke.ContextConsumer = N, Ke.ContextProvider = M, Ke.Element = R, Ke.ForwardRef = K, Ke.Fragment = G, Ke.Lazy = W, Ke.Memo = Z, Ke.Portal = F, Ke.Profiler = j, Ke.StrictMode = I, Ke.Suspense = V, Ke.isAsyncMode = D, Ke.isConcurrentMode = k, Ke.isContextConsumer = B, Ke.isContextProvider = q, Ke.isElement = oe, Ke.isForwardRef = te, Ke.isFragment = ve, Ke.isLazy = me, Ke.isMemo = re, Ke.isPortal = se, Ke.isProfiler = ue, Ke.isStrictMode = ne, Ke.isSuspense = he, Ke.isValidElementType = y, Ke.typeOf = _;
  }()), Ke;
}
var pp;
function fx() {
  return pp || (pp = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = ik() : e.exports = ck();
  }(Uc)), Uc.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var zc, mp;
function lk() {
  if (mp)
    return zc;
  mp = 1;
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
  return zc = o() ? Object.assign : function(a, s) {
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
  }, zc;
}
var Wc, hp;
function yd() {
  if (hp)
    return Wc;
  hp = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Wc = e, Wc;
}
var Bc, vp;
function px() {
  return vp || (vp = 1, Bc = Function.call.bind(Object.prototype.hasOwnProperty)), Bc;
}
var Hc, gp;
function uk() {
  if (gp)
    return Hc;
  gp = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = yd(), n = {}, r = px();
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
  }, Hc = o, Hc;
}
var Yc, bp;
function dk() {
  if (bp)
    return Yc;
  bp = 1;
  var e = fx(), t = lk(), n = yd(), r = px(), o = uk(), a = function() {
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
  return Yc = function(i, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(k) {
      var B = k && (l && k[l] || k[u]);
      if (typeof B == "function")
        return B;
    }
    var p = "<<anonymous>>", m = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: b(),
      arrayOf: y,
      element: _(),
      elementType: $(),
      instanceOf: E,
      node: K(),
      objectOf: M,
      oneOf: N,
      oneOfType: R,
      shape: W,
      exact: Z
    };
    function h(k, B) {
      return k === B ? k !== 0 || 1 / k === 1 / B : k !== k && B !== B;
    }
    function v(k, B) {
      this.message = k, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function g(k) {
      if (process.env.NODE_ENV !== "production")
        var B = {}, q = 0;
      function oe(ve, me, re, se, ue, ne, he) {
        if (se = se || p, ne = ne || re, he !== n) {
          if (c) {
            var U = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw U.name = "Invariant Violation", U;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ge = se + ":" + re;
            !B[ge] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + ne + "` prop on `" + se + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[ge] = !0, q++);
          }
        }
        return me[re] == null ? ve ? me[re] === null ? new v("The " + ue + " `" + ne + "` is marked as required " + ("in `" + se + "`, but its value is `null`.")) : new v("The " + ue + " `" + ne + "` is marked as required in " + ("`" + se + "`, but its value is `undefined`.")) : null : k(me, re, se, ue, ne);
      }
      var te = oe.bind(null, !1);
      return te.isRequired = oe.bind(null, !0), te;
    }
    function x(k) {
      function B(q, oe, te, ve, me, re) {
        var se = q[oe], ue = I(se);
        if (ue !== k) {
          var ne = V(se);
          return new v(
            "Invalid " + ve + " `" + me + "` of type " + ("`" + ne + "` supplied to `" + te + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return g(B);
    }
    function b() {
      return g(s);
    }
    function y(k) {
      function B(q, oe, te, ve, me) {
        if (typeof k != "function")
          return new v("Property `" + me + "` of component `" + te + "` has invalid PropType notation inside arrayOf.");
        var re = q[oe];
        if (!Array.isArray(re)) {
          var se = I(re);
          return new v("Invalid " + ve + " `" + me + "` of type " + ("`" + se + "` supplied to `" + te + "`, expected an array."));
        }
        for (var ue = 0; ue < re.length; ue++) {
          var ne = k(re, ue, te, ve, me + "[" + ue + "]", n);
          if (ne instanceof Error)
            return ne;
        }
        return null;
      }
      return g(B);
    }
    function _() {
      function k(B, q, oe, te, ve) {
        var me = B[q];
        if (!i(me)) {
          var re = I(me);
          return new v("Invalid " + te + " `" + ve + "` of type " + ("`" + re + "` supplied to `" + oe + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(k);
    }
    function $() {
      function k(B, q, oe, te, ve) {
        var me = B[q];
        if (!e.isValidElementType(me)) {
          var re = I(me);
          return new v("Invalid " + te + " `" + ve + "` of type " + ("`" + re + "` supplied to `" + oe + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(k);
    }
    function E(k) {
      function B(q, oe, te, ve, me) {
        if (!(q[oe] instanceof k)) {
          var re = k.name || p, se = D(q[oe]);
          return new v("Invalid " + ve + " `" + me + "` of type " + ("`" + se + "` supplied to `" + te + "`, expected ") + ("instance of `" + re + "`."));
        }
        return null;
      }
      return g(B);
    }
    function N(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function B(q, oe, te, ve, me) {
        for (var re = q[oe], se = 0; se < k.length; se++)
          if (h(re, k[se]))
            return null;
        var ue = JSON.stringify(k, function(he, U) {
          var ge = V(U);
          return ge === "symbol" ? String(U) : U;
        });
        return new v("Invalid " + ve + " `" + me + "` of value `" + String(re) + "` " + ("supplied to `" + te + "`, expected one of " + ue + "."));
      }
      return g(B);
    }
    function M(k) {
      function B(q, oe, te, ve, me) {
        if (typeof k != "function")
          return new v("Property `" + me + "` of component `" + te + "` has invalid PropType notation inside objectOf.");
        var re = q[oe], se = I(re);
        if (se !== "object")
          return new v("Invalid " + ve + " `" + me + "` of type " + ("`" + se + "` supplied to `" + te + "`, expected an object."));
        for (var ue in re)
          if (r(re, ue)) {
            var ne = k(re, ue, te, ve, me + "." + ue, n);
            if (ne instanceof Error)
              return ne;
          }
        return null;
      }
      return g(B);
    }
    function R(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var B = 0; B < k.length; B++) {
        var q = k[B];
        if (typeof q != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Y(q) + " at index " + B + "."
          ), s;
      }
      function oe(te, ve, me, re, se) {
        for (var ue = [], ne = 0; ne < k.length; ne++) {
          var he = k[ne], U = he(te, ve, me, re, se, n);
          if (U == null)
            return null;
          U.data && r(U.data, "expectedType") && ue.push(U.data.expectedType);
        }
        var ge = ue.length > 0 ? ", expected one of type [" + ue.join(", ") + "]" : "";
        return new v("Invalid " + re + " `" + se + "` supplied to " + ("`" + me + "`" + ge + "."));
      }
      return g(oe);
    }
    function K() {
      function k(B, q, oe, te, ve) {
        return F(B[q]) ? null : new v("Invalid " + te + " `" + ve + "` supplied to " + ("`" + oe + "`, expected a ReactNode."));
      }
      return g(k);
    }
    function G(k, B, q, oe, te) {
      return new v(
        (k || "React class") + ": " + B + " type `" + q + "." + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + te + "`."
      );
    }
    function W(k) {
      function B(q, oe, te, ve, me) {
        var re = q[oe], se = I(re);
        if (se !== "object")
          return new v("Invalid " + ve + " `" + me + "` of type `" + se + "` " + ("supplied to `" + te + "`, expected `object`."));
        for (var ue in k) {
          var ne = k[ue];
          if (typeof ne != "function")
            return G(te, ve, me, ue, V(ne));
          var he = ne(re, ue, te, ve, me + "." + ue, n);
          if (he)
            return he;
        }
        return null;
      }
      return g(B);
    }
    function Z(k) {
      function B(q, oe, te, ve, me) {
        var re = q[oe], se = I(re);
        if (se !== "object")
          return new v("Invalid " + ve + " `" + me + "` of type `" + se + "` " + ("supplied to `" + te + "`, expected `object`."));
        var ue = t({}, q[oe], k);
        for (var ne in ue) {
          var he = k[ne];
          if (r(k, ne) && typeof he != "function")
            return G(te, ve, me, ne, V(he));
          if (!he)
            return new v(
              "Invalid " + ve + " `" + me + "` key `" + ne + "` supplied to `" + te + "`.\nBad object: " + JSON.stringify(q[oe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var U = he(re, ne, te, ve, me + "." + ne, n);
          if (U)
            return U;
        }
        return null;
      }
      return g(B);
    }
    function F(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(F);
          if (k === null || i(k))
            return !0;
          var B = d(k);
          if (B) {
            var q = B.call(k), oe;
            if (B !== k.entries) {
              for (; !(oe = q.next()).done; )
                if (!F(oe.value))
                  return !1;
            } else
              for (; !(oe = q.next()).done; ) {
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
    function j(k, B) {
      return k === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function I(k) {
      var B = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : j(B, k) ? "symbol" : B;
    }
    function V(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var B = I(k);
      if (B === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return B;
    }
    function Y(k) {
      var B = V(k);
      switch (B) {
        case "array":
        case "object":
          return "an " + B;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + B;
        default:
          return B;
      }
    }
    function D(k) {
      return !k.constructor || !k.constructor.name ? p : k.constructor.name;
    }
    return m.checkPropTypes = o, m.resetWarningCache = o.resetWarningCache, m.PropTypes = m, m;
  }, Yc;
}
var Kc, xp;
function fk() {
  if (xp)
    return Kc;
  xp = 1;
  var e = yd();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Kc = function() {
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
  }, Kc;
}
if (process.env.NODE_ENV !== "production") {
  var pk = fx(), mk = !0;
  Rn.exports = dk()(pk.isElement, mk);
} else
  Rn.exports = fk()();
var hk = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, vk = Object.defineProperty, gk = Object.defineProperties, bk = Object.getOwnPropertyDescriptors, ti = Object.getOwnPropertySymbols, mx = Object.prototype.hasOwnProperty, hx = Object.prototype.propertyIsEnumerable, yp = (e, t, n) => t in e ? vk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, wp = (e, t) => {
  for (var n in t || (t = {}))
    mx.call(t, n) && yp(e, n, t[n]);
  if (ti)
    for (var n of ti(t))
      hx.call(t, n) && yp(e, n, t[n]);
  return e;
}, xk = (e, t) => gk(e, bk(t)), yk = (e, t) => {
  var n = {};
  for (var r in e)
    mx.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ti)
    for (var r of ti(e))
      t.indexOf(r) < 0 && hx.call(e, r) && (n[r] = e[r]);
  return n;
}, Gn = (e, t, n) => {
  const r = A(
    (o, a) => {
      var s = o, { color: i = "currentColor", size: c = 24, stroke: l = 2, children: u } = s, d = yk(s, ["color", "size", "stroke", "children"]);
      return w(
        "svg",
        wp(xk(wp({
          ref: a
        }, hk), {
          width: c,
          height: c,
          stroke: i,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([p, m]) => w(p, m)), ...u || []]
      );
    }
  );
  return r.propTypes = {
    color: Rn.exports.string,
    size: Rn.exports.oneOfType([Rn.exports.string, Rn.exports.number]),
    stroke: Rn.exports.oneOfType([Rn.exports.string, Rn.exports.number])
  }, r.displayName = `${t}`, r;
}, vx = Gn(
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
), gx = Gn("adjustments", "IconAdjustments", [
  ["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }],
  ["path", { d: "M6 4v4", key: "svg-1" }],
  ["path", { d: "M6 12v8", key: "svg-2" }],
  ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }],
  ["path", { d: "M12 4v10", key: "svg-4" }],
  ["path", { d: "M12 18v2", key: "svg-5" }],
  ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }],
  ["path", { d: "M18 4v1", key: "svg-7" }],
  ["path", { d: "M18 9v11", key: "svg-8" }]
]), wk = Gn("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), $k = Gn("click", "IconClick", [
  ["path", { d: "M3 12l3 0", key: "svg-0" }],
  ["path", { d: "M12 3l0 3", key: "svg-1" }],
  ["path", { d: "M7.8 7.8l-2.2 -2.2", key: "svg-2" }],
  ["path", { d: "M16.2 7.8l2.2 -2.2", key: "svg-3" }],
  ["path", { d: "M7.8 16.2l-2.2 2.2", key: "svg-4" }],
  ["path", { d: "M12 12l9 3l-4 2l-2 4l-3 -9", key: "svg-5" }]
]), bx = Gn("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), _k = Gn("photo-plus", "IconPhotoPlus", [
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
]), xx = Gn("photo-star", "IconPhotoStar", [
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
]), yx = Gn("search", "IconSearch", [
  ["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }],
  ["path", { d: "M21 21l-6 -6", key: "svg-1" }]
]), wx = Gn("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]);
const Ck = /* @__PURE__ */ bt(void 0), Sk = { setTheme: (e) => {
}, themes: [] }, Ek = () => {
  var e;
  return (e = Qe(Ck)) !== null && e !== void 0 ? e : Sk;
}, Nk = ({ isExpanded: e }) => {
  const [t, n] = X(!1), { theme: r, setTheme: o } = Ek();
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
        /* @__PURE__ */ f.exports.jsx(bx, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(wx, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  );
}, Pk = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ f.exports.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ f.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(Nk, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ f.exports.jsx(cy, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(ly, { className: "dark:text-white", size: 20 }),
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
          /* @__PURE__ */ f.exports.jsx(Jp, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), nc = ak((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), H8 = ({
  children: e,
  className: t,
  profile: n,
  logout: r,
  theme: o,
  isDrawerSidebar: a
}) => {
  const { isExpanded: s, toggleExpandSidebar: i } = nc();
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
        /* @__PURE__ */ f.exports.jsx(sk, { isExpanded: s, profile: n }),
        e,
        /* @__PURE__ */ f.exports.jsx(
          Pk,
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
}, Y8 = ({ children: e }) => {
  const { isExpanded: t } = nc();
  return /* @__PURE__ */ f.exports.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ f.exports.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, $x = ({
  to: e,
  label: t,
  icon: n,
  pathname: r,
  Link: o,
  isBottomNavLink: a
}) => {
  const [s, i] = X(!1), c = H(null), { isExpanded: l } = nc();
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
  }, [e]), o ? /* @__PURE__ */ f.exports.jsx(Rr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && l && /* @__PURE__ */ f.exports.jsxs(jr, { children: [
          /* @__PURE__ */ f.exports.jsx(Ar, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(fr, { children: /* @__PURE__ */ f.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ f.exports.jsx(Rr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && l && /* @__PURE__ */ f.exports.jsxs(jr, { children: [
          /* @__PURE__ */ f.exports.jsx(Ar, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(fr, { children: /* @__PURE__ */ f.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, $p = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, i] = X(!1), c = H(null);
  return Q(() => {
    const l = () => {
      const u = c.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (u) {
        const d = u.offsetWidth < u.scrollWidth;
        i(d);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [n]), a ? /* @__PURE__ */ f.exports.jsx(Rr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && e && /* @__PURE__ */ f.exports.jsxs(jr, { children: [
          /* @__PURE__ */ f.exports.jsx(Ar, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(fr, { children: /* @__PURE__ */ f.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ f.exports.jsx(Rr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && e && /* @__PURE__ */ f.exports.jsxs(jr, { children: [
          /* @__PURE__ */ f.exports.jsx(Ar, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(fr, { children: /* @__PURE__ */ f.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, Tk = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = X(!1), [i, c] = X(!1), { isExpanded: l } = nc(), u = H(null), d = () => c((m) => !m), p = e.replaceAll(" ", "_");
  return Q(() => {
    const m = () => {
      const h = u.current.querySelector(`#${p}`);
      if (h) {
        const v = h.offsetWidth < h.scrollWidth;
        s(v);
      }
    };
    return window.addEventListener("resize", m), m(), () => window.removeEventListener("resize", m);
  }, [e]), o ? /* @__PURE__ */ f.exports.jsxs(Rr, { delayDuration: 180, children: [
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
            a && l && /* @__PURE__ */ f.exports.jsxs(jr, { children: [
              /* @__PURE__ */ f.exports.jsx(Ar, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ f.exports.jsx(fr, { children: /* @__PURE__ */ f.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ f.exports.jsx(Hd, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(sa, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ f.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(
      $p,
      {
        ...m,
        Link: o,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] }) : /* @__PURE__ */ f.exports.jsxs(Rr, { delayDuration: 180, children: [
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
            a && l && /* @__PURE__ */ f.exports.jsxs(jr, { children: [
              /* @__PURE__ */ f.exports.jsx(Ar, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ f.exports.jsx(fr, { children: /* @__PURE__ */ f.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ f.exports.jsx(Hd, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(sa, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ f.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(
      $p,
      {
        ...m,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] });
}, Zn = bt({
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
function Ok() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = Qe(Zn);
  return /* @__PURE__ */ f.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ f.exports.jsxs(
        Zu,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ f.exports.jsx(Vi, { className: "h-8 w-[70px]", children: /* @__PURE__ */ f.exports.jsx(qu, { placeholder: e.limit }) }),
            /* @__PURE__ */ f.exports.jsx(Ui, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ f.exports.jsx(zi, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ f.exports.jsxs(
        Ue,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ f.exports.jsx(Jl, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ f.exports.jsx("div", { children: /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ f.exports.jsxs(
        Ue,
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
const _x = () => {
  const { columns: e } = Qe(Zn);
  return /* @__PURE__ */ f.exports.jsx($g, { className: "bg-brand-primary-lighter", children: /* @__PURE__ */ f.exports.jsx(Zi, { children: e.length > 0 && e.map((t, n) => /* @__PURE__ */ f.exports.jsx(Cg, { className: "text-brand-text", children: t.label }, `${t.id}-${n}`)) }) });
}, K8 = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, zo = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), G8 = { limit: 10, page: 1 }, _p = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), Z8 = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], kk = ({ colSpan: e }) => /* @__PURE__ */ f.exports.jsx(Zi, { children: /* @__PURE__ */ f.exports.jsx(td, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), Mk = ({
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
      Ue,
      {
        onClick: () => n(u),
        variant: "outline",
        size: "icon",
        type: "button",
        children: /* @__PURE__ */ f.exports.jsx($k, { size: 18 })
      }
    ) : l.id === "multi-select" ? /* @__PURE__ */ f.exports.jsx(
      Ev,
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
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.map((l) => /* @__PURE__ */ f.exports.jsx(Zi, { children: t.map((u) => /* @__PURE__ */ f.exports.jsx(td, { children: c(u, l) }, _p())) }, _p())) });
}, Cx = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = Qe(Zn), [s, i] = X(
    o ? o.length : 0
  );
  return /* @__PURE__ */ f.exports.jsx(_g, { className: "bg-card", children: e.length ? /* @__PURE__ */ f.exports.jsx(
    Mk,
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
  ) : /* @__PURE__ */ f.exports.jsx(kk, { colSpan: t.length }) });
}, Dk = () => /* @__PURE__ */ f.exports.jsxs(ed, { children: [
  /* @__PURE__ */ f.exports.jsx(_x, {}),
  /* @__PURE__ */ f.exports.jsx(Cx, {})
] }), Rk = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), jk = () => /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ f.exports.jsx(Rk, {}),
  /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] });
var Cp = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = xe(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, Sx = function(e, t) {
  var n = function(o) {
    var a = t.fields[o];
    a && a.ref && "reportValidity" in a.ref ? Cp(a.ref, o, e) : a.refs && a.refs.forEach(function(s) {
      return Cp(s, o, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, Ak = function(e, t) {
  t.shouldUseNativeValidation && Sx(e, t);
  var n = {};
  for (var r in e) {
    var o = xe(t.fields, r);
    Xe(n, r, Object.assign(e[r] || {}, { ref: o && o.ref }));
  }
  return n;
}, Ik = function(e, t) {
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
      n[s] = jh(s, t, n, o, l ? [].concat(l, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, Ex = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, a) {
    try {
      return Promise.resolve(function(s, i) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(l) {
            return a.shouldUseNativeValidation && Sx({}, a), { errors: {}, values: n.raw ? r : l };
          });
        } catch (l) {
          return i(l);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(s) {
        if (function(i) {
          return i.errors != null;
        }(s))
          return { values: {}, errors: Ak(Ik(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}, ze;
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
})(ze || (ze = {}));
var jl;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(jl || (jl = {}));
const ye = ze.arrayToEnum([
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
]), or = (e) => {
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
}, ce = ze.arrayToEnum([
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
]), Lk = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class an extends Error {
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
    return JSON.stringify(this.issues, ze.jsonStringifyReplacer, 2);
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
an.create = (e) => new an(e);
const ba = (e, t) => {
  let n;
  switch (e.code) {
    case ce.invalid_type:
      e.received === ye.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case ce.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, ze.jsonStringifyReplacer)}`;
      break;
    case ce.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${ze.joinValues(e.keys, ", ")}`;
      break;
    case ce.invalid_union:
      n = "Invalid input";
      break;
    case ce.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${ze.joinValues(e.options)}`;
      break;
    case ce.invalid_enum_value:
      n = `Invalid enum value. Expected ${ze.joinValues(e.options)}, received '${e.received}'`;
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
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : ze.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
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
      n = t.defaultError, ze.assertNever(e);
  }
  return { message: n };
};
let Nx = ba;
function Fk(e) {
  Nx = e;
}
function ni() {
  return Nx;
}
const ri = (e) => {
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
}, Vk = [];
function we(e, t) {
  const n = ri({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      ni(),
      ba
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
}), Px = (e) => ({ status: "dirty", value: e }), Dt = (e) => ({ status: "valid", value: e }), Al = (e) => e.status === "aborted", Il = (e) => e.status === "dirty", oi = (e) => e.status === "valid", ai = (e) => typeof Promise < "u" && e instanceof Promise;
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
const Sp = (e, t) => {
  if (oi(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new an(e.common.issues);
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
    return or(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: or(t.data),
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
        parsedType: or(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (ai(n))
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
      parsedType: or(t)
    }, a = this._parseSync({ data: t, path: o.path, parent: o });
    return Sp(o, a);
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
      parsedType: or(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), a = await (ai(o) ? o : Promise.resolve(o));
    return Sp(r, a);
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
    return new pn({
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
    return Fr.create(this, this._def);
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
    return $a.create([this, t], this._def);
  }
  and(t) {
    return _a.create(this, t, this._def);
  }
  transform(t) {
    return new pn({
      ...Re(this._def),
      schema: this,
      typeName: ke.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Pa({
      ...Re(this._def),
      innerType: this,
      defaultValue: n,
      typeName: ke.ZodDefault
    });
  }
  brand() {
    return new Ox({
      typeName: ke.ZodBranded,
      type: this,
      ...Re(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new li({
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
    return rs.create(this, t);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Uk = /^c[^\s-]{8,}$/i, zk = /^[a-z][a-z0-9]*$/, Wk = /[0-9A-HJKMNP-TV-Z]{26}/, Bk = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, Hk = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, Yk = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, Kk = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Gk = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Zk = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function qk(e, t) {
  return !!((t === "v4" || !t) && Kk.test(e) || (t === "v6" || !t) && Gk.test(e));
}
class rn extends je {
  constructor() {
    super(...arguments), this._regex = (t, n, r) => this.refinement((o) => t.test(o), {
      validation: n,
      code: ce.invalid_string,
      ...Se.errToObj(r)
    }), this.nonempty = (t) => this.min(1, Se.errToObj(t)), this.trim = () => new rn({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new rn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new rn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== ye.string) {
      const a = this._getOrReturnCtx(t);
      return we(
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
        t.data.length < a.value && (o = this._getOrReturnCtx(t, o), we(o, {
          code: ce.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (o = this._getOrReturnCtx(t, o), we(o, {
          code: ce.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const s = t.data.length > a.value, i = t.data.length < a.value;
        (s || i) && (o = this._getOrReturnCtx(t, o), s ? we(o, {
          code: ce.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : i && we(o, {
          code: ce.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        Hk.test(t.data) || (o = this._getOrReturnCtx(t, o), we(o, {
          validation: "email",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        Yk.test(t.data) || (o = this._getOrReturnCtx(t, o), we(o, {
          validation: "emoji",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        Bk.test(t.data) || (o = this._getOrReturnCtx(t, o), we(o, {
          validation: "uuid",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        Uk.test(t.data) || (o = this._getOrReturnCtx(t, o), we(o, {
          validation: "cuid",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        zk.test(t.data) || (o = this._getOrReturnCtx(t, o), we(o, {
          validation: "cuid2",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        Wk.test(t.data) || (o = this._getOrReturnCtx(t, o), we(o, {
          validation: "ulid",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          o = this._getOrReturnCtx(t, o), we(o, {
            validation: "url",
            code: ce.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (o = this._getOrReturnCtx(t, o), we(o, {
          validation: "regex",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (o = this._getOrReturnCtx(t, o), we(o, {
          code: ce.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (o = this._getOrReturnCtx(t, o), we(o, {
          code: ce.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (o = this._getOrReturnCtx(t, o), we(o, {
          code: ce.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "datetime" ? Zk(a).test(t.data) || (o = this._getOrReturnCtx(t, o), we(o, {
          code: ce.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? qk(t.data, a.version) || (o = this._getOrReturnCtx(t, o), we(o, {
          validation: "ip",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty()) : ze.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _addCheck(t) {
    return new rn({
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
rn.create = (e) => {
  var t;
  return new rn({
    checks: [],
    typeName: ke.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Re(e)
  });
};
function Xk(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, a = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return a % s / Math.pow(10, o);
}
class pr extends je {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== ye.number) {
      const a = this._getOrReturnCtx(t);
      return we(a, {
        code: ce.invalid_type,
        expected: ye.number,
        received: a.parsedType
      }), De;
    }
    let r;
    const o = new Nt();
    for (const a of this._def.checks)
      a.kind === "int" ? ze.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), we(r, {
        code: ce.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), o.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), we(r, {
        code: ce.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), we(r, {
        code: ce.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? Xk(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), we(r, {
        code: ce.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), we(r, {
        code: ce.not_finite,
        message: a.message
      }), o.dirty()) : ze.assertNever(a);
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
    return new pr({
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
    return new pr({
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && ze.isInteger(t.value));
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
pr.create = (e) => new pr({
  checks: [],
  typeName: ke.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Re(e)
});
class mr extends je {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== ye.bigint) {
      const a = this._getOrReturnCtx(t);
      return we(a, {
        code: ce.invalid_type,
        expected: ye.bigint,
        received: a.parsedType
      }), De;
    }
    let r;
    const o = new Nt();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), we(r, {
        code: ce.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), we(r, {
        code: ce.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), we(r, {
        code: ce.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : ze.assertNever(a);
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
mr.create = (e) => {
  var t;
  return new mr({
    checks: [],
    typeName: ke.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Re(e)
  });
};
class xa extends je {
  _parse(t) {
    if (this._def.coerce && (t.data = Boolean(t.data)), this._getType(t) !== ye.boolean) {
      const r = this._getOrReturnCtx(t);
      return we(r, {
        code: ce.invalid_type,
        expected: ye.boolean,
        received: r.parsedType
      }), De;
    }
    return Dt(t.data);
  }
}
xa.create = (e) => new xa({
  typeName: ke.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Re(e)
});
class Ir extends je {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== ye.date) {
      const a = this._getOrReturnCtx(t);
      return we(a, {
        code: ce.invalid_type,
        expected: ye.date,
        received: a.parsedType
      }), De;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return we(a, {
        code: ce.invalid_date
      }), De;
    }
    const r = new Nt();
    let o;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (o = this._getOrReturnCtx(t, o), we(o, {
        code: ce.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (o = this._getOrReturnCtx(t, o), we(o, {
        code: ce.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), r.dirty()) : ze.assertNever(a);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Ir({
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
Ir.create = (e) => new Ir({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: ke.ZodDate,
  ...Re(e)
});
class si extends je {
  _parse(t) {
    if (this._getType(t) !== ye.symbol) {
      const r = this._getOrReturnCtx(t);
      return we(r, {
        code: ce.invalid_type,
        expected: ye.symbol,
        received: r.parsedType
      }), De;
    }
    return Dt(t.data);
  }
}
si.create = (e) => new si({
  typeName: ke.ZodSymbol,
  ...Re(e)
});
class ya extends je {
  _parse(t) {
    if (this._getType(t) !== ye.undefined) {
      const r = this._getOrReturnCtx(t);
      return we(r, {
        code: ce.invalid_type,
        expected: ye.undefined,
        received: r.parsedType
      }), De;
    }
    return Dt(t.data);
  }
}
ya.create = (e) => new ya({
  typeName: ke.ZodUndefined,
  ...Re(e)
});
class wa extends je {
  _parse(t) {
    if (this._getType(t) !== ye.null) {
      const r = this._getOrReturnCtx(t);
      return we(r, {
        code: ce.invalid_type,
        expected: ye.null,
        received: r.parsedType
      }), De;
    }
    return Dt(t.data);
  }
}
wa.create = (e) => new wa({
  typeName: ke.ZodNull,
  ...Re(e)
});
class $o extends je {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Dt(t.data);
  }
}
$o.create = (e) => new $o({
  typeName: ke.ZodAny,
  ...Re(e)
});
class Tr extends je {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Dt(t.data);
  }
}
Tr.create = (e) => new Tr({
  typeName: ke.ZodUnknown,
  ...Re(e)
});
class Bn extends je {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return we(n, {
      code: ce.invalid_type,
      expected: ye.never,
      received: n.parsedType
    }), De;
  }
}
Bn.create = (e) => new Bn({
  typeName: ke.ZodNever,
  ...Re(e)
});
class ii extends je {
  _parse(t) {
    if (this._getType(t) !== ye.undefined) {
      const r = this._getOrReturnCtx(t);
      return we(r, {
        code: ce.invalid_type,
        expected: ye.void,
        received: r.parsedType
      }), De;
    }
    return Dt(t.data);
  }
}
ii.create = (e) => new ii({
  typeName: ke.ZodVoid,
  ...Re(e)
});
class sn extends je {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== ye.array)
      return we(n, {
        code: ce.invalid_type,
        expected: ye.array,
        received: n.parsedType
      }), De;
    if (o.exactLength !== null) {
      const s = n.data.length > o.exactLength.value, i = n.data.length < o.exactLength.value;
      (s || i) && (we(n, {
        code: s ? ce.too_big : ce.too_small,
        minimum: i ? o.exactLength.value : void 0,
        maximum: s ? o.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: o.exactLength.message
      }), r.dirty());
    }
    if (o.minLength !== null && n.data.length < o.minLength.value && (we(n, {
      code: ce.too_small,
      minimum: o.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.minLength.message
    }), r.dirty()), o.maxLength !== null && n.data.length > o.maxLength.value && (we(n, {
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
  typeName: ke.ZodArray,
  ...Re(t)
});
function io(e) {
  if (e instanceof lt) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = An.create(io(r));
    }
    return new lt({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof sn ? new sn({
      ...e._def,
      type: io(e.element)
    }) : e instanceof An ? An.create(io(e.unwrap())) : e instanceof Fr ? Fr.create(io(e.unwrap())) : e instanceof Sn ? Sn.create(e.items.map((t) => io(t))) : e;
}
class lt extends je {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = ze.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== ye.object) {
      const l = this._getOrReturnCtx(t);
      return we(l, {
        code: ce.invalid_type,
        expected: ye.object,
        received: l.parsedType
      }), De;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: a, keys: s } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof Bn && this._def.unknownKeys === "strip"))
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
    if (this._def.catchall instanceof Bn) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of i)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: o.data[u] }
          });
      else if (l === "strict")
        i.length > 0 && (we(o, {
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
    return ze.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new lt({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return ze.objectKeys(this.shape).forEach((r) => {
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
    return io(this);
  }
  partial(t) {
    const n = {};
    return ze.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new lt({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return ze.objectKeys(this.shape).forEach((r) => {
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
    return Tx(ze.objectKeys(this.shape));
  }
}
lt.create = (e, t) => new lt({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Bn.create(),
  typeName: ke.ZodObject,
  ...Re(t)
});
lt.strictCreate = (e, t) => new lt({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Bn.create(),
  typeName: ke.ZodObject,
  ...Re(t)
});
lt.lazycreate = (e, t) => new lt({
  shape: e,
  unknownKeys: "strip",
  catchall: Bn.create(),
  typeName: ke.ZodObject,
  ...Re(t)
});
class $a extends je {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function o(a) {
      for (const i of a)
        if (i.result.status === "valid")
          return i.result;
      for (const i of a)
        if (i.result.status === "dirty")
          return n.common.issues.push(...i.ctx.common.issues), i.result;
      const s = a.map((i) => new an(i.ctx.common.issues));
      return we(n, {
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
      const i = s.map((c) => new an(c));
      return we(n, {
        code: ce.invalid_union,
        unionErrors: i
      }), De;
    }
  }
  get options() {
    return this._def.options;
  }
}
$a.create = (e, t) => new $a({
  options: e,
  typeName: ke.ZodUnion,
  ...Re(t)
});
const ks = (e) => e instanceof Sa ? ks(e.schema) : e instanceof pn ? ks(e.innerType()) : e instanceof Ea ? [e.value] : e instanceof hr ? e.options : e instanceof Na ? Object.keys(e.enum) : e instanceof Pa ? ks(e._def.innerType) : e instanceof ya ? [void 0] : e instanceof wa ? [null] : null;
class rc extends je {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== ye.object)
      return we(n, {
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
    }) : (we(n, {
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
      const s = ks(a.shape[t]);
      if (!s)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of s) {
        if (o.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        o.set(i, a);
      }
    }
    return new rc({
      typeName: ke.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...Re(r)
    });
  }
}
function Ll(e, t) {
  const n = or(e), r = or(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === ye.object && r === ye.object) {
    const o = ze.objectKeys(t), a = ze.objectKeys(e).filter((i) => o.indexOf(i) !== -1), s = { ...e, ...t };
    for (const i of a) {
      const c = Ll(e[i], t[i]);
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
      const s = e[a], i = t[a], c = Ll(s, i);
      if (!c.valid)
        return { valid: !1 };
      o.push(c.data);
    }
    return { valid: !0, data: o };
  } else
    return n === ye.date && r === ye.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class _a extends je {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (a, s) => {
      if (Al(a) || Al(s))
        return De;
      const i = Ll(a.value, s.value);
      return i.valid ? ((Il(a) || Il(s)) && n.dirty(), { status: n.value, value: i.data }) : (we(r, {
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
_a.create = (e, t, n) => new _a({
  left: e,
  right: t,
  typeName: ke.ZodIntersection,
  ...Re(n)
});
class Sn extends je {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== ye.array)
      return we(r, {
        code: ce.invalid_type,
        expected: ye.array,
        received: r.parsedType
      }), De;
    if (r.data.length < this._def.items.length)
      return we(r, {
        code: ce.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), De;
    !this._def.rest && r.data.length > this._def.items.length && (we(r, {
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
class Ca extends je {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== ye.object)
      return we(r, {
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
    return n instanceof je ? new Ca({
      keyType: t,
      valueType: n,
      typeName: ke.ZodRecord,
      ...Re(r)
    }) : new Ca({
      keyType: rn.create(),
      valueType: t,
      typeName: ke.ZodRecord,
      ...Re(n)
    });
  }
}
class ci extends je {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== ye.map)
      return we(r, {
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
ci.create = (e, t, n) => new ci({
  valueType: t,
  keyType: e,
  typeName: ke.ZodMap,
  ...Re(n)
});
class Lr extends je {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== ye.set)
      return we(r, {
        code: ce.invalid_type,
        expected: ye.set,
        received: r.parsedType
      }), De;
    const o = this._def;
    o.minSize !== null && r.data.size < o.minSize.value && (we(r, {
      code: ce.too_small,
      minimum: o.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.minSize.message
    }), n.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && (we(r, {
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
    return new Lr({
      ...this._def,
      minSize: { value: t, message: Se.toString(n) }
    });
  }
  max(t, n) {
    return new Lr({
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
Lr.create = (e, t) => new Lr({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: ke.ZodSet,
  ...Re(t)
});
class po extends je {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== ye.function)
      return we(n, {
        code: ce.invalid_type,
        expected: ye.function,
        received: n.parsedType
      }), De;
    function r(i, c) {
      return ri({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ni(),
          ba
        ].filter((l) => !!l),
        issueData: {
          code: ce.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function o(i, c) {
      return ri({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ni(),
          ba
        ].filter((l) => !!l),
        issueData: {
          code: ce.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, s = n.data;
    return this._def.returns instanceof _o ? Dt(async (...i) => {
      const c = new an([]), l = await this._def.args.parseAsync(i, a).catch((p) => {
        throw c.addIssue(r(i, p)), c;
      }), u = await s(...l);
      return await this._def.returns._def.type.parseAsync(u, a).catch((p) => {
        throw c.addIssue(o(u, p)), c;
      });
    }) : Dt((...i) => {
      const c = this._def.args.safeParse(i, a);
      if (!c.success)
        throw new an([r(i, c.error)]);
      const l = s(...c.data), u = this._def.returns.safeParse(l, a);
      if (!u.success)
        throw new an([o(l, u.error)]);
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
    return new po({
      ...this._def,
      args: Sn.create(t).rest(Tr.create())
    });
  }
  returns(t) {
    return new po({
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
    return new po({
      args: t || Sn.create([]).rest(Tr.create()),
      returns: n || Tr.create(),
      typeName: ke.ZodFunction,
      ...Re(r)
    });
  }
}
class Sa extends je {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Sa.create = (e, t) => new Sa({
  getter: e,
  typeName: ke.ZodLazy,
  ...Re(t)
});
class Ea extends je {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return we(n, {
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
Ea.create = (e, t) => new Ea({
  value: e,
  typeName: ke.ZodLiteral,
  ...Re(t)
});
function Tx(e, t) {
  return new hr({
    values: e,
    typeName: ke.ZodEnum,
    ...Re(t)
  });
}
class hr extends je {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return we(n, {
        expected: ze.joinValues(r),
        received: n.parsedType,
        code: ce.invalid_type
      }), De;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return we(n, {
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
    return hr.create(t);
  }
  exclude(t) {
    return hr.create(this.options.filter((n) => !t.includes(n)));
  }
}
hr.create = Tx;
class Na extends je {
  _parse(t) {
    const n = ze.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== ye.string && r.parsedType !== ye.number) {
      const o = ze.objectValues(n);
      return we(r, {
        expected: ze.joinValues(o),
        received: r.parsedType,
        code: ce.invalid_type
      }), De;
    }
    if (n.indexOf(t.data) === -1) {
      const o = ze.objectValues(n);
      return we(r, {
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
Na.create = (e, t) => new Na({
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
      return we(n, {
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
class pn extends je {
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
        we(r, s), s.fatal ? n.abort() : n.dirty();
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
        if (!oi(s))
          return s;
        const i = o.transform(s.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => oi(s) ? Promise.resolve(o.transform(s.value, a)).then((i) => ({ status: n.value, value: i })) : s);
    ze.assertNever(o);
  }
}
pn.create = (e, t, n) => new pn({
  schema: e,
  typeName: ke.ZodEffects,
  effect: t,
  ...Re(n)
});
pn.createWithPreprocess = (e, t, n) => new pn({
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
class Fr extends je {
  _parse(t) {
    return this._getType(t) === ye.null ? Dt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Fr.create = (e, t) => new Fr({
  innerType: e,
  typeName: ke.ZodNullable,
  ...Re(t)
});
class Pa extends je {
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
Pa.create = (e, t) => new Pa({
  innerType: e,
  typeName: ke.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Re(t)
});
class li extends je {
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
    return ai(o) ? o.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new an(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new an(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
li.create = (e, t) => new li({
  innerType: e,
  typeName: ke.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Re(t)
});
class ui extends je {
  _parse(t) {
    if (this._getType(t) !== ye.nan) {
      const r = this._getOrReturnCtx(t);
      return we(r, {
        code: ce.invalid_type,
        expected: ye.nan,
        received: r.parsedType
      }), De;
    }
    return { status: "valid", value: t.data };
  }
}
ui.create = (e) => new ui({
  typeName: ke.ZodNaN,
  ...Re(e)
});
const Qk = Symbol("zod_brand");
class Ox extends je {
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
class rs extends je {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? De : a.status === "dirty" ? (n.dirty(), Px(a.value)) : this._def.out._parseAsync({
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
    return new rs({
      in: t,
      out: n,
      typeName: ke.ZodPipeline
    });
  }
}
const kx = (e, t = {}, n) => e ? $o.create().superRefine((r, o) => {
  var a, s;
  if (!e(r)) {
    const i = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (s = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0, l = typeof i == "string" ? { message: i } : i;
    o.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : $o.create(), Jk = {
  object: lt.lazycreate
};
var ke;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline";
})(ke || (ke = {}));
const e4 = (e, t = {
  message: `Input not instance of ${e.name}`
}) => kx((n) => n instanceof e, t), Mx = rn.create, Dx = pr.create, t4 = ui.create, n4 = mr.create, Rx = xa.create, r4 = Ir.create, o4 = si.create, a4 = ya.create, s4 = wa.create, i4 = $o.create, c4 = Tr.create, l4 = Bn.create, u4 = ii.create, d4 = sn.create, f4 = lt.create, p4 = lt.strictCreate, m4 = $a.create, h4 = rc.create, v4 = _a.create, g4 = Sn.create, b4 = Ca.create, x4 = ci.create, y4 = Lr.create, w4 = po.create, $4 = Sa.create, _4 = Ea.create, C4 = hr.create, S4 = Na.create, E4 = _o.create, Ep = pn.create, N4 = An.create, P4 = Fr.create, T4 = pn.createWithPreprocess, O4 = rs.create, k4 = () => Mx().optional(), M4 = () => Dx().optional(), D4 = () => Rx().optional(), R4 = {
  string: (e) => rn.create({ ...e, coerce: !0 }),
  number: (e) => pr.create({ ...e, coerce: !0 }),
  boolean: (e) => xa.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => mr.create({ ...e, coerce: !0 }),
  date: (e) => Ir.create({ ...e, coerce: !0 })
}, j4 = De;
var di = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: ba,
  setErrorMap: Fk,
  getErrorMap: ni,
  makeIssue: ri,
  EMPTY_PATH: Vk,
  addIssueToContext: we,
  ParseStatus: Nt,
  INVALID: De,
  DIRTY: Px,
  OK: Dt,
  isAborted: Al,
  isDirty: Il,
  isValid: oi,
  isAsync: ai,
  get util() {
    return ze;
  },
  get objectUtil() {
    return jl;
  },
  ZodParsedType: ye,
  getParsedType: or,
  ZodType: je,
  ZodString: rn,
  ZodNumber: pr,
  ZodBigInt: mr,
  ZodBoolean: xa,
  ZodDate: Ir,
  ZodSymbol: si,
  ZodUndefined: ya,
  ZodNull: wa,
  ZodAny: $o,
  ZodUnknown: Tr,
  ZodNever: Bn,
  ZodVoid: ii,
  ZodArray: sn,
  ZodObject: lt,
  ZodUnion: $a,
  ZodDiscriminatedUnion: rc,
  ZodIntersection: _a,
  ZodTuple: Sn,
  ZodRecord: Ca,
  ZodMap: ci,
  ZodSet: Lr,
  ZodFunction: po,
  ZodLazy: Sa,
  ZodLiteral: Ea,
  ZodEnum: hr,
  ZodNativeEnum: Na,
  ZodPromise: _o,
  ZodEffects: pn,
  ZodTransformer: pn,
  ZodOptional: An,
  ZodNullable: Fr,
  ZodDefault: Pa,
  ZodCatch: li,
  ZodNaN: ui,
  BRAND: Qk,
  ZodBranded: Ox,
  ZodPipeline: rs,
  custom: kx,
  Schema: je,
  ZodSchema: je,
  late: Jk,
  get ZodFirstPartyTypeKind() {
    return ke;
  },
  coerce: R4,
  any: i4,
  array: d4,
  bigint: n4,
  boolean: Rx,
  date: r4,
  discriminatedUnion: h4,
  effect: Ep,
  enum: C4,
  function: w4,
  instanceof: e4,
  intersection: v4,
  lazy: $4,
  literal: _4,
  map: x4,
  nan: t4,
  nativeEnum: S4,
  never: l4,
  null: s4,
  nullable: P4,
  number: Dx,
  object: f4,
  oboolean: D4,
  onumber: M4,
  optional: N4,
  ostring: k4,
  pipeline: O4,
  preprocess: T4,
  promise: E4,
  record: b4,
  set: y4,
  strictObject: p4,
  string: Mx,
  symbol: o4,
  transformer: Ep,
  tuple: g4,
  undefined: a4,
  union: m4,
  unknown: c4,
  void: u4,
  NEVER: j4,
  ZodIssueCode: ce,
  quotelessJson: Lk,
  ZodError: an
});
const A4 = () => {
  const { showFilters: e, setShowFilters: t } = Qe(Zn);
  return /* @__PURE__ */ f.exports.jsxs(
    Ue,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ f.exports.jsx(vx, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, I4 = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = Qe(Zn), l = (u) => {
    c(u);
  };
  return /* @__PURE__ */ f.exports.jsxs(Un, { children: [
    /* @__PURE__ */ f.exports.jsx(zn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Ue, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", children: [
      n || /* @__PURE__ */ f.exports.jsx(gx, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(qa, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          Et,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ f.exports.jsxs(
          Et,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((u) => u.selected).map((u) => /* @__PURE__ */ f.exports.jsx(
          Et,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: u.label
          },
          u.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ f.exports.jsx(_n, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ f.exports.jsxs(Wn, { children: [
      /* @__PURE__ */ f.exports.jsx(ur, { placeholder: r }),
      /* @__PURE__ */ f.exports.jsxs(es, { children: [
        /* @__PURE__ */ f.exports.jsx(dr, { children: "Sin Resultados" }),
        /* @__PURE__ */ f.exports.jsx(dn, { children: o.map((u) => /* @__PURE__ */ f.exports.jsxs(
          fn,
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
                  children: /* @__PURE__ */ f.exports.jsx(ln, { className: L("h-4 w-4") })
                }
              ),
              u.icon,
              /* @__PURE__ */ f.exports.jsx("span", { children: u.label })
            ]
          },
          u.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(Yi, {}),
          /* @__PURE__ */ f.exports.jsx(dn, { children: /* @__PURE__ */ f.exports.jsx(
            fn,
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
}, L4 = ({ id: e, form: t, label: n, icon: r, queryText: o }) => {
  const { onSubmitTable: a, pagination: { page: s, limit: i }, isFormatedUpperQueries: c } = Qe(Zn), l = () => {
    var d;
    const u = [];
    (d = Object.entries(t == null ? void 0 : t.getValues())) == null || d.forEach((p) => {
      p[1] && u.push({
        field: c ? p[0] : zo(p[0]),
        text: p[1]
      });
    }), a({ queries: u, filters: [], limit: i, page: s });
  };
  return /* @__PURE__ */ f.exports.jsxs(Un, { children: [
    /* @__PURE__ */ f.exports.jsx(zn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Ue, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
      /* @__PURE__ */ f.exports.jsx(js, { size: 16, className: "mr-2 text-gray-500" }),
      n,
      o && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(qa, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          Et,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: o
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ f.exports.jsxs(_n, { className: "w-fit p-4", align: "start", children: [
      /* @__PURE__ */ f.exports.jsxs(Pn, { htmlFor: e, children: [
        "Buscar ",
        n
      ] }),
      /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex justify-between items-end gap-x-3", children: [
        /* @__PURE__ */ f.exports.jsx(
          Hu,
          {
            id: e,
            form: t,
            type: "text",
            placeholder: `Ingrese ${n}`
          }
        ),
        /* @__PURE__ */ f.exports.jsx(
          Ue,
          {
            type: "button",
            onClick: l,
            className: "h-10 w-fit",
            children: /* @__PURE__ */ f.exports.jsx(js, { size: 18 })
          }
        )
      ] })
    ] })
  ] });
}, F4 = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c },
    isFormatedUpperQueries: l
  } = Qe(Zn), u = e.watch(n.map((p) => p.id)), d = () => {
    var m;
    a();
    const p = [];
    (m = Object.entries(e == null ? void 0 : e.getValues())) == null || m.forEach((h) => {
      h[1] && p.push({
        field: l ? h[0] : zo(h[0]),
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
          L4,
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
      /* @__PURE__ */ f.exports.jsx(A4, {}),
      o && r && r.map((p) => /* @__PURE__ */ f.exports.jsx(
        I4,
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
        Ue,
        {
          type: "button",
          variant: "ghost",
          onClick: d,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ f.exports.jsx(yi, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, V4 = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i,
    isFormatedUpperQueries: c
  } = Qe(Zn), l = zh({
    defaultValues: n.reduce((d, p) => (d[p.id] = "", d), {}),
    resolver: Ex(
      di.object(
        n.reduce((d, p) => (d[p.id] = di.string().optional(), d), {})
      )
    )
  }), u = async (d) => {
    var h;
    console.log({ data: d });
    const p = r(), m = [];
    (h = Object.entries(d)) == null || h.forEach((v) => {
      v[1] && m.push({
        field: c ? v[0] : zo(v[0]),
        text: v[1]
      });
    }), console.log("queries formatted ", m), e({ queries: m, filters: p, limit: s, page: a });
  };
  return Q(() => i(l), [l]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ f.exports.jsx("div", {}) : /* @__PURE__ */ f.exports.jsx(Bh, { ...l, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ f.exports.jsx(F4, { form: l, onSubmit: u }) : /* @__PURE__ */ f.exports.jsx("div", {}),
    /* @__PURE__ */ f.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ f.exports.jsx(
      Ue,
      {
        type: "submit",
        onClick: l.handleSubmit(u),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ f.exports.jsx(Ql, {}) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(yx, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, U4 = () => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), z4 = () => /* @__PURE__ */ f.exports.jsxs(ed, { children: [
  /* @__PURE__ */ f.exports.jsx(_x, {}),
  /* @__PURE__ */ f.exports.jsx(Cx, {})
] }), W4 = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function q8(e) {
  const [t, n] = X([]), [r, o] = X([]), [a, s] = X([]), [i, c] = X(!1), [l, u] = X(e == null ? void 0 : e.error), [d, p] = X(e == null ? void 0 : e.loading), [m, h] = X(), [v, g] = X(
    (e == null ? void 0 : e.pagination) ?? W4
  ), [x, b] = X(
    (e == null ? void 0 : e.columns) || []
  ), y = fe(
    (F) => e.onSubmitTable({ ...F }),
    [e]
  ), _ = fe(
    (F) => {
      var Y;
      g(F);
      const j = m.getValues(), I = [];
      (Y = Object.entries(j)) == null || Y.forEach((D) => {
        D[1] && I.push({
          field: e.isFormatedUpperQueries ? D[0] : zo(D[0]),
          text: D[1]
        });
      });
      const V = r.map((D) => ({
        id: D.id,
        label: D.label,
        options: D.options.filter((k) => k.selected).map((k) => k.value)
      })).filter((D) => D.options.length > 0);
      y({
        filters: V,
        queries: I,
        limit: F.limit,
        page: F.page
      });
    },
    [r, y, m]
  ), $ = fe(() => {
    _({ ...v, page: v.page + 1 });
  }, [v, _]), E = fe(() => {
    v.page > 1 && _({ ...v, page: v.page - 1 });
  }, [v, _]), N = () => r.map((F) => ({
    id: F.id,
    label: F.label,
    options: F.options.filter((j) => j.selected).map((j) => j.value)
  })).filter((F) => F.options.length > 0), M = (F) => {
    const j = r.find((I) => I.id === F);
    return j ? j.options.filter((V) => V.selected).map((V) => V.value) : [];
  }, R = (F, j, I) => {
    const V = r.map((Y) => Y.id === F ? {
      ...Y,
      options: Y.options.map((D) => D.id === j ? { ...D, selected: I } : D)
    } : Y);
    o(V);
  }, K = () => r, G = (F) => {
    const j = r.map((I) => I.id === F ? {
      ...I,
      options: I.options.map((V) => ({
        ...V,
        selected: !1
      }))
    } : I);
    o(j);
  }, W = (F) => _({ ...v, limit: F }), Z = () => {
    const F = r.map((j) => ({
      ...j,
      options: j.options.map((I) => ({ ...I, selected: !1 }))
    }));
    o(F);
  };
  return Q(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), Q(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), Q(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), Q(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), Q(() => b((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), Q(() => {
    const F = x.filter((j) => j.isQuery).map((j) => ({
      id: j.id,
      label: j.label
    }));
    s(F);
  }, [x]), Q(() => {
    const F = (I) => (I == null ? void 0 : I.filters) && (I == null ? void 0 : I.filters.length), j = x.filter(F).map((I) => {
      const V = I.filters.map((D) => ({
        ...D,
        selected: !1
      }));
      return {
        ...I,
        id: I.id,
        options: V
      };
    });
    o(j);
  }, [x]), Q(() => {
    e != null && e.filters && (e == null || e.filters.forEach((F) => {
      F != null && F.filters && x.forEach((j) => {
        F.id === j.id && o((I) => I.some((Y) => Y.id === F.id) ? I : [
          ...I,
          {
            id: j.id,
            label: j.label,
            options: F.filters
          }
        ]);
      });
    }));
  }, [x, e == null ? void 0 : e.filters]), Q(() => {
    g((F) => {
      var j, I;
      return {
        ...F,
        hasNextPage: (j = e == null ? void 0 : e.pagination) == null ? void 0 : j.hasNextPage,
        hasPrevPage: (I = e == null ? void 0 : e.pagination) == null ? void 0 : I.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ f.exports.jsx(
    Zn.Provider,
    {
      value: {
        data: t,
        columns: x,
        pagination: v,
        nextPage: $,
        prevPage: E,
        searchForm: m,
        isFormatedUpperQueries: e.isFormatedUpperQueries,
        updateLimit: W,
        showFilters: i,
        resetFilters: Z,
        getGlobalFilters: K,
        selectOptionFilter: R,
        resetOptionsByFilter: G,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: y,
        getFilterOptionsSelectedById: M,
        getFiltersWithOptionsSelected: N,
        setSelectItem: e.setSelectItem,
        setShowFilters: (F) => c(F),
        setSearchForm: (F) => h(F)
      },
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ f.exports.jsx(V4, { onSubmitTable: y, loading: d }),
        /* @__PURE__ */ f.exports.jsxs("div", { className: "rounded-md border overflow-clip", children: [
          d && /* @__PURE__ */ f.exports.jsx(jk, {}),
          !d && l && /* @__PURE__ */ f.exports.jsx(U4, {}),
          !d && !l && !t && /* @__PURE__ */ f.exports.jsx(z4, {}),
          !d && !l && t && /* @__PURE__ */ f.exports.jsx(Dk, {})
        ] }),
        !d && !l && t && /* @__PURE__ */ f.exports.jsx(Ok, {})
      ] })
    }
  );
}
const X8 = ({
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
}) => p ? /* @__PURE__ */ f.exports.jsxs("div", { className: L("w-full", c), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: t && /* @__PURE__ */ f.exports.jsx(St, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ f.exports.jsx(St, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "relative", children: /* @__PURE__ */ f.exports.jsx(St, { className: "w-full h-9 mt-2" }) })
] }) : /* @__PURE__ */ f.exports.jsx(
  Hr,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: m, formState: h }) => {
      var v;
      return /* @__PURE__ */ f.exports.jsxs(yr, { className: L("w-full", c), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ f.exports.jsxs(Yr, { className: "flex", children: [
            t,
            " "
          ] }),
          ((v = h == null ? void 0 : h.errors[e]) == null ? void 0 : v.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            h.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(ko, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsxs(Zu, { onValueChange: m.onChange, defaultValue: m.value, disabled: d, value: m == null ? void 0 : m.value, children: [
          /* @__PURE__ */ f.exports.jsx(Za, { children: /* @__PURE__ */ f.exports.jsx(Vi, { disabled: d, tabIndex: i, className: L("w-full", l), children: /* @__PURE__ */ f.exports.jsx(qu, { placeholder: r }) }) }),
          /* @__PURE__ */ f.exports.jsx(Ui, { children: /* @__PURE__ */ f.exports.jsxs(VE, { className: L("overflow-auto", u), children: [
            a.length ? null : /* @__PURE__ */ f.exports.jsx("div", { className: "px-2 py-1 text-sm", children: "Sin Resultados" }),
            a.map((g) => {
              var x, b;
              return /* @__PURE__ */ f.exports.jsx(zi, { value: (x = g.value) == null ? void 0 : x.toString(), children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-center items-center", children: [
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
function oc() {
  return (oc = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function jx(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function Fl(e) {
  var t = H(e), n = H(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var Ta = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, ra = function(e) {
  return "touches" in e;
}, Vl = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, Np = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = ra(t) ? function(a, s) {
    for (var i = 0; i < a.length; i++)
      if (a[i].identifier === s)
        return a[i];
    return a[0];
  }(t.touches, n) : t;
  return { left: Ta((o.pageX - (r.left + Vl(e).pageXOffset)) / r.width), top: Ta((o.pageY - (r.top + Vl(e).pageYOffset)) / r.height) };
}, Pp = function(e) {
  !ra(e) && e.preventDefault();
}, Ax = S.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = jx(e, ["onMove", "onKey"]), o = H(null), a = Fl(t), s = Fl(n), i = H(null), c = H(!1), l = Mt(function() {
    var m = function(g) {
      Pp(g), (ra(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(Np(o.current, g, i.current)) : v(!1);
    }, h = function() {
      return v(!1);
    };
    function v(g) {
      var x = c.current, b = Vl(o.current), y = g ? b.addEventListener : b.removeEventListener;
      y(x ? "touchmove" : "mousemove", m), y(x ? "touchend" : "mouseup", h);
    }
    return [function(g) {
      var x = g.nativeEvent, b = o.current;
      if (b && (Pp(x), !function(_, $) {
        return $ && !ra(_);
      }(x, c.current) && b)) {
        if (ra(x)) {
          c.current = !0;
          var y = x.changedTouches || [];
          y.length && (i.current = y[0].identifier);
        }
        b.focus(), a(Np(b, x, i.current)), v(!0);
      }
    }, function(g) {
      var x = g.which || g.keyCode;
      x < 37 || x > 40 || (g.preventDefault(), s({ left: x === 39 ? 0.05 : x === 37 ? -0.05 : 0, top: x === 40 ? 0.05 : x === 38 ? -0.05 : 0 }));
    }, v];
  }, [s, a]), u = l[0], d = l[1], p = l[2];
  return Q(function() {
    return p;
  }, [p]), S.createElement("div", oc({}, r, { onTouchStart: u, onMouseDown: u, className: "react-colorful__interactive", ref: o, onKeyDown: d, tabIndex: 0, role: "slider" }));
}), wd = function(e) {
  return e.filter(Boolean).join(" ");
}, Ix = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = wd(["react-colorful__pointer", e.className]);
  return S.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, S.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, wt = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, B4 = function(e) {
  return Z4(Ul(e));
}, Ul = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? wt(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? wt(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, H4 = function(e) {
  return G4(K4(e));
}, Y4 = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: wt(e.h), s: wt(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: wt(o / 2), a: wt(r, 2) };
}, zl = function(e) {
  var t = Y4(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, K4 = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: wt(255 * [r, i, s, s, c, r][l]), g: wt(255 * [c, r, r, i, s, s][l]), b: wt(255 * [s, s, c, r, r, i][l]), a: wt(o, 2) };
}, ws = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, G4 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? ws(wt(255 * o)) : "";
  return "#" + ws(t) + ws(n) + ws(r) + a;
}, Z4 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: wt(60 * (i < 0 ? i + 6 : i)), s: wt(a ? s / a * 100 : 0), v: wt(a / 255 * 100), a: o };
}, q4 = S.memo(function(e) {
  var t = e.hue, n = e.onChange, r = wd(["react-colorful__hue", e.className]);
  return S.createElement("div", { className: r }, S.createElement(Ax, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: Ta(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": wt(t), "aria-valuemax": "360", "aria-valuemin": "0" }, S.createElement(Ix, { className: "react-colorful__hue-pointer", left: t / 360, color: zl({ h: t, s: 100, v: 100, a: 1 }) })));
}), X4 = S.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: zl({ h: t.h, s: 100, v: 100, a: 1 }) };
  return S.createElement("div", { className: "react-colorful__saturation", style: r }, S.createElement(Ax, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: Ta(t.s + 100 * o.left, 0, 100), v: Ta(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + wt(t.s) + "%, Brightness " + wt(t.v) + "%" }, S.createElement(Ix, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: zl(t) })));
}), Lx = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, Q4 = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || Lx(Ul(e), Ul(t));
};
function J4(e, t, n) {
  var r = Fl(n), o = X(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], i = H({ color: t, hsva: a });
  Q(function() {
    if (!e.equal(t, i.current.color)) {
      var l = e.toHsva(t);
      i.current = { hsva: l, color: t }, s(l);
    }
  }, [t, e]), Q(function() {
    var l;
    Lx(a, i.current.hsva) || e.equal(l = e.fromHsva(a), i.current.color) || (i.current = { hsva: a, color: l }, r(l));
  }, [a, e, r]);
  var c = fe(function(l) {
    s(function(u) {
      return Object.assign({}, u, l);
    });
  }, []);
  return [a, c];
}
var e7 = typeof window < "u" ? Da : Q, t7 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Tp = /* @__PURE__ */ new Map(), n7 = function(e) {
  e7(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !Tp.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Tp.set(t, n);
      var r = t7();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, r7 = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = jx(e, ["className", "colorModel", "color", "onChange"]), i = H(null);
  n7(i);
  var c = J4(n, o, a), l = c[0], u = c[1], d = wd(["react-colorful", t]);
  return S.createElement("div", oc({}, s, { ref: i, className: d }), S.createElement(X4, { hsva: l, onChange: u }), S.createElement(q4, { hue: l.h, onChange: u, className: "react-colorful__last-control" }));
}, o7 = { defaultColor: "000", toHsva: B4, fromHsva: function(e) {
  return H4({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: Q4 }, a7 = function(e) {
  return S.createElement(r7, oc({}, e, { colorModel: o7 }));
};
const Q8 = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ f.exports.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ f.exports.jsx(a7, { color: e, onChange: t }),
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
function s7(e, t, n) {
  var r = X([]), o = r[0], a = r[1], s = H([]), i = fe(function(d, p) {
    var m = e(d, p), h = m[0], v = m[1];
    return a(function(g) {
      return [].concat(v.reverse(), g);
    }), h;
  }, [e]), c = vi(i, n), l = c[0], u = c[1];
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
function tn() {
  return tn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, tn.apply(this, arguments);
}
function i7(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var ac = {
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
  ac[111 + kt] = "F" + kt;
for (kt = 65; kt < 91; kt += 1) {
  var Op = /* @__PURE__ */ String.fromCharCode(kt);
  ac[kt] = [/* @__PURE__ */ Op.toLowerCase(), /* @__PURE__ */ Op.toUpperCase()];
}
for (kt = 96; kt < 106; kt += 1)
  ac[kt] = /* @__PURE__ */ String.fromCharCode(kt - 48);
function c7(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = ac[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var l7 = {
  getKey: c7
};
function $s() {
}
function Fx(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function u7(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var d7 = ["refs"], Gc = [], f7 = ["autoFocus", "length", "validate", "format", "debug"], p7 = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], m7 = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], h7 = {
  ref: {
    current: []
  },
  length: 5,
  validate: /^[a-zA-Z0-9]$/,
  format: function(t) {
    return t;
  },
  onResolveKey: $s,
  onRejectKey: $s,
  onChange: $s,
  onComplete: $s,
  debug: !1
};
function v7(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: g7(e.validate),
    fallback: null
  };
}
function Vx(e) {
  return Math.max(0, e - 1);
}
function Wl(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function g7(e) {
  return function(t) {
    return !t || t.length > 1 ? !1 : typeof e == "string" ? e.split("").includes(t) : e instanceof Array ? e.includes(t) : e instanceof RegExp ? e.test(t) : e(t);
  };
}
function kp(e, t, n) {
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
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = Wl(o + e.focusIdx - 1, e.codeLength), s = Fx(0, o).flatMap(function(i) {
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
  }), [tn({}, e, {
    focusIdx: a
  }), s];
}
var b7 = function(t, n) {
  switch (n.type) {
    case "handle-key-down":
      switch (n.key) {
        case "Unidentified":
          return [tn({}, t, {
            fallback: {
              idx: t.focusIdx,
              val: n.val
            }
          }), Gc];
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
          var r = Vx(t.focusIdx);
          return [tn({}, t, {
            focusIdx: r
          }), [{
            type: "focus-input",
            idx: r
          }]];
        }
        case "ArrowRight": {
          var o = Wl(t.focusIdx, t.codeLength);
          return [tn({}, t, {
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
          var a = Wl(t.focusIdx, t.codeLength);
          return [tn({}, t, {
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
        return [t, Gc];
      var s = tn({}, t, {
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
        return kp(s, l, d);
      return [s, i];
    }
    case "handle-paste":
      return kp(t, n.idx, n.val);
    case "focus-input":
      return [tn({}, t, {
        focusIdx: n.idx
      }), [{
        type: "focus-input",
        idx: n.idx
      }]];
    default:
      return [t, Gc];
  }
};
function x7(e) {
  var t = e.refs, n = i7(e, d7);
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
          var s = Vx(r.idx);
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
var y7 = /* @__PURE__ */ A(function(e, t) {
  var n = tn({}, h7, e), r = n.autoFocus, o = n.length, a = u7([].concat(f7, p7), n), s = H([]), i = x7(tn({
    refs: s
  }, n)), c = s7(b7, i, v7(n))[1];
  y0(t, function() {
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
      var x = l7.getKey(g.nativeEvent);
      !m7.includes(x) && !g.ctrlKey && !g.altKey && !g.metaKey && g.nativeEvent.target instanceof HTMLInputElement && (g.preventDefault(), c({
        type: "handle-key-down",
        idx: v,
        key: x,
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
      var x = g.clipboardData.getData("Text");
      c({
        type: "handle-paste",
        idx: v,
        val: x
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
  return S.createElement(S.Fragment, null, Fx(0, o).map(function(v) {
    return S.createElement("input", Object.assign({
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
const J8 = ({ onComplete: e, mode: t, length: n, disabled: r, tabIndex: o, autoFocus: a, containerClassName: s, className: i, ...c }) => {
  const [l] = S.useState(!1);
  return /* @__PURE__ */ f.exports.jsx("div", { className: L("pin-field-container", s), children: /* @__PURE__ */ f.exports.jsx(
    y7,
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
var Ux = {}, $d = {};
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
})($d);
var zx = {}, In = {};
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
  }, n = gt && gt.__generator || function(a, s) {
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
  var r = In, o = $d;
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
      var g, x, b, y, _;
      return n(this, function($) {
        switch ($.label) {
          case 0:
            return g = {}, e.isMaxNumberValid(s.length + i.length, c, l) ? [3, 1] : (g.maxNumber = !0, [3, 5]);
          case 1:
            x = 0, $.label = 2;
          case 2:
            return x < s.length ? (b = s[x].file, b ? !v && !e.isImageValid(b.type) ? (g.acceptType = !0, [3, 5]) : e.isAcceptTypeValid(u, b.name) ? e.isMaxFileSizeValid(b.size, d) ? p ? [4, o.getImage(b)] : [3, 4] : (g.maxFileSize = !0, [3, 5]) : (g.acceptType = !0, [3, 5]) : [3, 4]) : [3, 5];
          case 3:
            if (y = $.sent(), _ = e.isResolutionValid(y, p, m, h), !_)
              return g.resolution = !0, [3, 5];
            $.label = 4;
          case 4:
            return x += 1, [3, 2];
          case 5:
            return Object.values(g).find(Boolean) ? [2, g] : [2, null];
        }
      });
    });
  };
})(zx);
var Bl = gt && gt.__assign || function() {
  return Bl = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Bl.apply(this, arguments);
}, w7 = gt && gt.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), $7 = gt && gt.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), _7 = gt && gt.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && w7(t, e, n);
  return $7(t, e), t;
}, Zc = gt && gt.__awaiter || function(e, t, n, r) {
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
}, qc = gt && gt.__generator || function(e, t) {
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
}, Xc = gt && gt.__spreadArrays || function() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), o = 0, t = 0; t < n; t++)
    for (var a = arguments[t], s = 0, i = a.length; s < i; s++, o++)
      r[o] = a[s];
  return r;
};
Object.defineProperty(Ux, "__esModule", { value: !0 });
var en = _7(S), Qc = $d, C7 = zx, er = In, S7 = function(e) {
  var t = e.value, n = t === void 0 ? [] : t, r = e.onChange, o = e.onError, a = e.children, s = e.dataURLKey, i = s === void 0 ? er.DEFAULT_DATA_URL_KEY : s, c = e.multiple, l = c === void 0 ? !1 : c, u = e.maxNumber, d = u === void 0 ? er.INIT_MAX_NUMBER : u, p = e.acceptType, m = e.maxFileSize, h = e.resolutionWidth, v = e.resolutionHeight, g = e.resolutionType, x = e.inputProps, b = x === void 0 ? {} : x, y = e.allowNonImageType, _ = y === void 0 ? !1 : y, $ = n || [], E = en.useRef(null), N = en.useState(er.DEFAULT_NULL_INDEX), M = N[0], R = N[1], K = en.useState(null), G = K[0], W = K[1], Z = en.useState(!1), F = Z[0], j = Z[1], I = en.useCallback(function() {
    return Qc.openFileDialog(E);
  }, [
    E
  ]), V = en.useCallback(function() {
    R(er.DEFAULT_NULL_INDEX), I();
  }, [I]), Y = en.useCallback(function() {
    r == null || r([]);
  }, [r]), D = function(ne) {
    var he = Xc($);
    Array.isArray(ne) ? ne.forEach(function(U) {
      he.splice(U, 1);
    }) : he.splice(ne, 1), r == null || r(he);
  }, k = function(ne) {
    R(ne), I();
  }, B = function(ne) {
    return Zc(void 0, void 0, void 0, function() {
      var he;
      return qc(this, function(U) {
        switch (U.label) {
          case 0:
            return [4, C7.getErrorValidation({
              fileList: ne,
              maxFileSize: m,
              maxNumber: d,
              acceptType: p,
              keyUpdate: M,
              resolutionType: g,
              resolutionWidth: h,
              resolutionHeight: v,
              value: $,
              allowNonImageType: _
            })];
          case 1:
            return he = U.sent(), he ? (W(he), o == null || o(he, ne), [2, !1]) : (G && W(null), [2, !0]);
        }
      });
    });
  }, q = function(ne) {
    return Zc(void 0, void 0, void 0, function() {
      var he, U, ge, $e, Te, T;
      return qc(this, function(z) {
        switch (z.label) {
          case 0:
            return ne ? [4, Qc.getListFiles(ne, i)] : [
              2
              /*return*/
            ];
          case 1:
            return he = z.sent(), he.length ? [4, B(he)] : [
              2
              /*return*/
            ];
          case 2:
            if (U = z.sent(), !U)
              return [
                2
                /*return*/
              ];
            if ($e = [], M > er.DEFAULT_NULL_INDEX)
              Te = he[0], ge = Xc($), ge[M] = Te, $e.push(M);
            else if (l)
              for (ge = Xc($, he), T = $.length; T < ge.length; T += 1)
                $e.push(T);
            else
              ge = [he[0]], $e.push(0);
            return r == null || r(ge, $e), [
              2
              /*return*/
            ];
        }
      });
    });
  }, oe = function(ne) {
    return Zc(void 0, void 0, void 0, function() {
      return qc(this, function(he) {
        switch (he.label) {
          case 0:
            return [4, q(ne.target.files)];
          case 1:
            return he.sent(), M > er.DEFAULT_NULL_INDEX && R(er.DEFAULT_NULL_INDEX), E.current && (E.current.value = ""), [
              2
              /*return*/
            ];
        }
      });
    });
  }, te = en.useMemo(function() {
    return Qc.getAcceptTypeString(p, _);
  }, [p, _]), ve = function(ne) {
    ne.preventDefault(), ne.stopPropagation();
  }, me = function(ne) {
    ne.preventDefault(), ne.stopPropagation(), ne.dataTransfer.items && ne.dataTransfer.items.length > 0 && j(!0);
  }, re = function(ne) {
    ne.preventDefault(), ne.stopPropagation(), j(!1);
  }, se = function(ne) {
    ne.preventDefault(), ne.stopPropagation(), j(!1), ne.dataTransfer.files && ne.dataTransfer.files.length > 0 && q(ne.dataTransfer.files);
  }, ue = function(ne) {
    ne.preventDefault(), ne.stopPropagation(), ne.dataTransfer.clearData();
  };
  return en.default.createElement(
    en.default.Fragment,
    null,
    en.default.createElement("input", Bl({ type: "file", accept: te, ref: E, multiple: l && M === er.DEFAULT_NULL_INDEX, onChange: oe, style: { display: "none" } }, b)),
    a == null ? void 0 : a({
      imageList: $,
      onImageUpload: V,
      onImageRemoveAll: Y,
      onImageUpdate: k,
      onImageRemove: D,
      errors: G,
      dragProps: {
        onDrop: se,
        onDragEnter: me,
        onDragLeave: re,
        onDragOver: ve,
        onDragStart: ue
      },
      isDragging: F
    })
  );
}, Wx = Ux.default = S7;
const E7 = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, Bx = ({
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
      const u = E7(l == null ? void 0 : l.toString(), t.name);
      c({ data_url: l, file: u });
    },
    i
  );
}), N7 = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsxs(La, { className: L("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(vo, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(Fa, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(xi, {}) })
] });
function P7() {
  return S.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-unzoom-icon": !0, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    S.createElement("path", { d: "M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z" })
  );
}
function T7() {
  return S.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-zoom-icon": !0, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    S.createElement("path", { d: "M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z" })
  );
}
const fi = (e, t) => {
  var n, r;
  return e === ((r = (n = t == null ? void 0 : t.tagName) == null ? void 0 : n.toUpperCase) == null ? void 0 : r.call(n));
}, _d = (e) => fi("DIV", e) || fi("SPAN", e), pi = (e) => fi("IMG", e), Mp = (e) => e.complete && e.naturalHeight !== 0, Hl = (e) => fi("SVG", e), Hx = ({ height: e, offset: t, width: n }) => Math.min((window.innerWidth - t * 2) / n, (window.innerHeight - t * 2) / e), O7 = ({ containerHeight: e, containerWidth: t, offset: n, targetHeight: r, targetWidth: o }) => {
  const a = Hx({
    height: r,
    offset: n,
    width: o
  }), s = o > r ? o / t : r / e;
  return a > 1 ? s : a * s;
}, Or = ({ containerHeight: e, containerWidth: t, hasScalableSrc: n, offset: r, targetHeight: o, targetWidth: a }) => !e || !t ? 1 : !n && o && a ? O7({
  containerHeight: e,
  containerWidth: t,
  offset: r,
  targetHeight: o,
  targetWidth: a
}) : Hx({
  height: e,
  offset: r,
  width: t
}), k7 = /url(?:\(['"]?)(.*?)(?:['"]?\))/, Dp = (e) => {
  var t;
  if (e) {
    if (pi(e))
      return e.currentSrc;
    if (_d(e)) {
      const n = window.getComputedStyle(e).backgroundImage;
      if (n)
        return (t = k7.exec(n)) == null ? void 0 : t[1];
    }
  }
}, M7 = (e) => {
  if (e)
    return pi(e) ? e.alt ?? void 0 : e.getAttribute("aria-label") ?? void 0;
}, D7 = ({ containerHeight: e, containerLeft: t, containerTop: n, containerWidth: r, hasScalableSrc: o, offset: a, targetHeight: s, targetWidth: i }) => {
  const c = Or({
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
}, Gt = ({ position: e, relativeNum: t }) => {
  const n = parseFloat(e);
  return e.endsWith("%") ? t * n / 100 : n;
}, R7 = ({ containerHeight: e, containerLeft: t, containerTop: n, containerWidth: r, hasScalableSrc: o, objectFit: a, objectPosition: s, offset: i, targetHeight: c, targetWidth: l }) => {
  if (a === "scale-down" && (l <= r && c <= e ? a = "none" : a = "contain"), a === "cover" || a === "contain") {
    const u = r / l, d = e / c, p = a === "cover" ? Math.max(u, d) : Math.min(u, d), [m = "50%", h = "50%"] = s.split(" "), v = Gt({ position: m, relativeNum: r - l * p }), g = Gt({ position: h, relativeNum: e - c * p }), x = Or({
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
      width: l * p * x,
      height: c * p * x,
      transform: `translate(0,0) scale(${1 / x})`
    };
  } else if (a === "none") {
    const [u = "50%", d = "50%"] = s.split(" "), p = Gt({ position: u, relativeNum: r - l }), m = Gt({ position: d, relativeNum: e - c }), h = Or({
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
    const u = r / l, d = e / c, p = Math.max(u, d), m = Or({
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
}, j7 = ({ backgroundPosition: e, backgroundSize: t, containerHeight: n, containerLeft: r, containerTop: o, containerWidth: a, hasScalableSrc: s, offset: i, targetHeight: c, targetWidth: l }) => {
  if (t === "cover" || t === "contain") {
    const u = a / l, d = n / c, p = t === "cover" ? Math.max(u, d) : Math.min(u, d), [m = "50%", h = "50%"] = e.split(" "), v = Gt({ position: m, relativeNum: a - l * p }), g = Gt({ position: h, relativeNum: n - c * p }), x = Or({
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
      width: l * p * x,
      height: c * p * x,
      transform: `translate(0,0) scale(${1 / x})`
    };
  } else if (t === "auto") {
    const [u = "50%", d = "50%"] = e.split(" "), p = Gt({ position: u, relativeNum: a - l }), m = Gt({ position: d, relativeNum: n - c }), h = Or({
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
    const [u = "50%", d = "50%"] = t.split(" "), p = Gt({ position: u, relativeNum: a }), m = Gt({ position: d, relativeNum: n }), h = p / l, v = m / c, g = Math.min(h, v), [x = "50%", b = "50%"] = e.split(" "), y = Gt({ position: x, relativeNum: a - l * g }), _ = Gt({ position: b, relativeNum: n - c * g }), $ = Or({
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
      width: l * g * $,
      height: c * g * $,
      transform: `translate(0,0) scale(${1 / $})`
    };
  }
}, A7 = /\.svg$/i, I7 = ({ hasZoomImg: e, imgSrc: t, isSvg: n, isZoomed: r, loadedImgEl: o, offset: a, shouldRefresh: s, targetEl: i }) => {
  var x;
  const c = n || ((x = t == null ? void 0 : t.slice) == null ? void 0 : x.call(t, 0, 18)) === "data:image/svg+xml" || e || !!(t && A7.test(t)), l = i.getBoundingClientRect(), u = window.getComputedStyle(i), d = o != null && _d(i), p = o != null && !d, m = D7({
    containerHeight: l.height,
    containerLeft: l.left,
    containerTop: l.top,
    containerWidth: l.width,
    hasScalableSrc: c,
    offset: a,
    targetHeight: (o == null ? void 0 : o.naturalHeight) ?? l.height,
    targetWidth: (o == null ? void 0 : o.naturalWidth) ?? l.width
  }), h = p ? R7({
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
  }) : void 0, v = d ? j7({
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
    const b = window.innerWidth / 2, y = window.innerHeight / 2, _ = parseFloat(String(g.left || 0)) + parseFloat(String(g.width || 0)) / 2, $ = parseFloat(String(g.top || 0)) + parseFloat(String(g.height || 0)) / 2, E = b - _, N = y - $;
    s && (g.transitionDuration = "0.01ms"), g.transform = `translate(${E}px,${N}px) scale(1)`;
  }
  return g;
}, L7 = (e) => {
  if (!e)
    return {};
  if (Hl(e)) {
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
let oa;
typeof document < "u" && (oa = document.createElement("div"), oa.setAttribute("data-rmiz-portal", ""), document.body.appendChild(oa));
const F7 = ["img", "svg", '[role="img"]', "[data-zoom]"].map((e) => `${e}:not([aria-hidden="true"])`).join(","), Rp = {
  overflow: "",
  width: ""
};
function V7(e) {
  return S.createElement(Yx, { ...e });
}
class Yx extends w0 {
  constructor() {
    super(...arguments), this.state = {
      id: "",
      isZoomImgLoaded: !1,
      loadedImgEl: void 0,
      modalState: "UNLOADED",
      shouldRefresh: !1
    }, this.refContent = Bo(), this.refDialog = Bo(), this.refModalContent = Bo(), this.refModalImg = Bo(), this.refWrap = Bo(), this.imgEl = null, this.prevBodyAttrs = Rp, this.styleModalImg = {}, this.setId = () => {
      const t = () => Math.random().toString(16).slice(-4);
      this.setState({ id: t() + t() + t() });
    }, this.setAndTrackImg = () => {
      var n, r, o, a, s, i;
      const t = this.refContent.current;
      t && (this.imgEl = t.querySelector(F7), this.imgEl ? ((r = (n = this.changeObserver) == null ? void 0 : n.disconnect) == null || r.call(n), (a = (o = this.imgEl) == null ? void 0 : o.addEventListener) == null || a.call(o, "load", this.handleImgLoad), (i = (s = this.imgEl) == null ? void 0 : s.addEventListener) == null || i.call(s, "click", this.handleZoom), this.state.loadedImgEl || this.handleImgLoad(), this.imgElObserver = new ResizeObserver((c) => {
        const l = c[0];
        l != null && l.target && (this.imgEl = l.target, this.setState({}));
      }), this.imgElObserver.observe(this.imgEl)) : this.changeObserver || (this.changeObserver = new MutationObserver(this.setAndTrackImg), this.changeObserver.observe(t, { childList: !0, subtree: !0 })));
    }, this.handleIfZoomChanged = (t) => {
      const { isZoomed: n } = this.props;
      !t && n ? this.zoom() : t && !n && this.unzoom();
    }, this.handleImgLoad = () => {
      const { imgEl: t } = this, n = Dp(t);
      if (!n)
        return;
      const r = new Image();
      pi(t) && (r.sizes = t.sizes, r.srcset = t.srcset), r.src = n;
      const o = () => {
        this.setState({ loadedImgEl: r });
      };
      r.decode().then(o).catch(() => {
        if (Mp(r)) {
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
      document.body.style.width = this.prevBodyAttrs.width, document.body.style.overflow = this.prevBodyAttrs.overflow, this.prevBodyAttrs = Rp;
    }, this.loadZoomImg = () => {
      const { props: { zoomImg: t } } = this, n = t == null ? void 0 : t.src;
      if (n) {
        const r = new Image();
        r.sizes = (t == null ? void 0 : t.sizes) ?? "", r.srcset = (t == null ? void 0 : t.srcSet) ?? "", r.src = n;
        const o = () => {
          this.setState({ isZoomImgLoaded: !0 });
        };
        r.decode().then(o).catch(() => {
          if (Mp(r)) {
            o();
            return;
          }
          r.onload = o;
        });
      }
    }, this.UNSAFE_handleSvg = () => {
      var o, a, s, i, c;
      const { imgEl: t, refModalImg: n, styleModalImg: r } = this;
      if (Hl(t)) {
        const l = document.createElement("div");
        l.innerHTML = t.outerHTML;
        const u = l.firstChild;
        u.style.width = `${r.width || 0}px`, u.style.height = `${r.height || 0}px`, u.addEventListener("click", this.handleUnzoom), (s = (a = (o = n.current) == null ? void 0 : o.firstChild) == null ? void 0 : a.remove) == null || s.call(a), (c = (i = n.current) == null ? void 0 : i.appendChild) == null || c.call(i, u);
      }
    };
  }
  render() {
    const { handleDialogCancel: t, handleDialogClick: n, handleUnzoom: r, handleZoom: o, imgEl: a, props: { a11yNameButtonUnzoom: s, a11yNameButtonZoom: i, children: c, classDialog: l, IconUnzoom: u, IconZoom: d, isZoomed: p, wrapElement: m, ZoomContent: h, zoomImg: v, zoomMargin: g }, refContent: x, refDialog: b, refModalContent: y, refModalImg: _, refWrap: $, state: { id: E, isZoomImgLoaded: N, loadedImgEl: M, modalState: R, shouldRefresh: K } } = this, G = `rmiz-modal-${E}`, W = `rmiz-modal-img-${E}`, Z = _d(a), F = pi(a), j = Hl(a), I = M7(a), V = Dp(a), Y = F ? a.sizes : void 0, D = F ? a.srcset : void 0, k = !!(v != null && v.src), B = a && (M || j) && window.getComputedStyle(a).display !== "none", q = I ? `${i}: ${I}` : i, oe = R === "LOADING" || R === "LOADED", te = B ? "found" : "not-found", ve = R === "UNLOADED" || R === "UNLOADING" ? "hidden" : "visible", me = {
      visibility: R === "UNLOADED" ? "visible" : "hidden"
    }, re = L7(a);
    this.styleModalImg = B ? I7({
      hasZoomImg: k,
      imgSrc: V,
      isSvg: j,
      isZoomed: p && oe,
      loadedImgEl: M,
      offset: g,
      shouldRefresh: K,
      targetEl: a
    }) : {};
    let se = null;
    if (B) {
      const ue = F || Z ? S.createElement("img", { alt: I, sizes: Y, src: V, srcSet: D, ...N && R === "LOADED" ? v : {}, "data-rmiz-modal-img": "", height: this.styleModalImg.height || void 0, id: W, ref: _, style: this.styleModalImg, width: this.styleModalImg.width || void 0 }) : j ? S.createElement("div", { "data-rmiz-modal-img": !0, ref: _, style: this.styleModalImg }) : null, ne = S.createElement(
        "button",
        { "aria-label": s, "data-rmiz-btn-unzoom": "", onClick: r, type: "button" },
        S.createElement(u, null)
      );
      se = h ? S.createElement(h, { buttonUnzoom: ne, modalState: R, img: ue, onUnzoom: r }) : S.createElement(
        S.Fragment,
        null,
        ue,
        ne
      );
    }
    return S.createElement(
      m,
      { "aria-owns": G, "data-rmiz": "", ref: $ },
      S.createElement(m, { "data-rmiz-content": te, ref: x, style: me }, c),
      B && S.createElement(
        m,
        { "data-rmiz-ghost": "", style: re },
        S.createElement(
          "button",
          { "aria-label": q, "data-rmiz-btn-zoom": "", onClick: o, type: "button" },
          S.createElement(d, null)
        )
      ),
      B && oa != null && Zl(S.createElement(
        "dialog",
        { "aria-labelledby": W, "aria-modal": "true", className: l, "data-rmiz-modal": "", id: G, onClick: n, onClose: r, onCancel: t, ref: b, role: "dialog" },
        S.createElement("div", { "data-rmiz-modal-overlay": ve }),
        S.createElement("div", { "data-rmiz-modal-content": "", ref: y }, se)
      ), oa)
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
Yx.defaultProps = {
  a11yNameButtonUnzoom: "Minimize image",
  a11yNameButtonZoom: "Expand image",
  IconUnzoom: P7,
  IconZoom: T7,
  wrapElement: "div",
  zoomMargin: 0
};
function Kx(e) {
  const [t, n] = X(!1);
  return S.createElement(V7, { ...e, isZoomed: t, onZoomChange: n });
}
const U7 = ({ src: e, alt: t, imageContainerClassName: n, ...r }) => {
  const [o, a] = X(!1);
  return /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
    /* @__PURE__ */ f.exports.jsx("style", { jsx: !0, children: `
        [data-rmiz-modal-overlay="visible"] {
          background: rgba(0, 0, 0, 0.6) !important;
          backdrop-filter: blur(4px);
        }
      ` }),
    /* @__PURE__ */ f.exports.jsx(Kx, { ...r, children: o ? /* @__PURE__ */ f.exports.jsxs("div", { style: { textAlign: "center" }, children: [
      /* @__PURE__ */ f.exports.jsx(xi, { size: 34 }),
      /* @__PURE__ */ f.exports.jsx("p", { children: "Error al cargar la imagen" })
    ] }) : /* @__PURE__ */ f.exports.jsx(
      "img",
      {
        src: e,
        alt: t,
        style: { width: "-webkit-fill-available" },
        className: L("object-contain m-auto h-aspect-square w-fit h-[237px] rounded-md", n),
        onError: () => a(!0)
      }
    ) })
  ] });
}, z7 = ({ imageIndex: e, compress: t, disabled: n, tabIndexs: r, onImageUpdate: o, setUploadImage: a, onImageRemove: s, setLocalImage: i }) => n ? null : /* @__PURE__ */ f.exports.jsxs("div", { className: "mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-2 bg-transparent", children: [
  (t == null ? void 0 : t.openComparisons) && /* @__PURE__ */ f.exports.jsx(
    Ue,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: r == null ? void 0 : r.viewCompress,
      onClick: () => t.openComparisons(),
      className: "text-green-600 backdrop-blur-sm border-green-600 bg-green-600 bg-opacity-10 hover:bg-green-600 hover:bg-opacity-25 hover:text-green-600",
      children: /* @__PURE__ */ f.exports.jsx(xx, { size: 16 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Ue,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: r == null ? void 0 : r.change,
      onClick: () => o(e),
      className: "text-yellow-600 backdrop-blur-sm border-yellow-600 bg-yellow-600 bg-opacity-10 hover:bg-yellow-600 hover:bg-opacity-25 hover:text-yellow-600",
      children: /* @__PURE__ */ f.exports.jsx(tm, { size: 14 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Ue,
    {
      tabIndex: r == null ? void 0 : r.delete,
      type: "button",
      size: "icon",
      variant: "outline",
      onClick: () => {
        s(e), i([]), a({ original: null, compressed: null });
      },
      className: "text-red-700 backdrop-blur-sm border-red-700 bg-red-700 bg-opacity-10 hover:bg-red-700 hover:bg-opacity-25 hover:text-red-700",
      children: /* @__PURE__ */ f.exports.jsx(nm, { size: 14 })
    }
  )
] }), W7 = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, onImageUpload: a }) => /* @__PURE__ */ f.exports.jsxs(
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
        Ue,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          className: `mt-2 ${t && "text-indigo-600"}`,
          onClick: a,
          children: /* @__PURE__ */ f.exports.jsx(Qp, { size: 22 })
        }
      ),
      /* @__PURE__ */ f.exports.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), eR = ({
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
  const [d, p] = X(e ? [{ data_url: e, file: null }] : []), m = async (h, v) => {
    var y, _, $, E, N, M, R;
    const g = (y = h[0]) == null ? void 0 : y.file, x = (_ = h[0]) == null ? void 0 : _.data_url;
    g || (p([]), t({ original: null, compressed: null })), p(h);
    const b = Rs(($ = h[0]) == null ? void 0 : $.file.size);
    if (u != null && u.resizer && g) {
      const { data_url: K, file: G } = await Bx({
        resizer: u == null ? void 0 : u.resizer,
        imageFile: g,
        quality: (n == null ? void 0 : n.quality) || 10,
        maxWidth: (n == null ? void 0 : n.width) || 500,
        maxHeight: (n == null ? void 0 : n.width) || 500,
        compressFormat: (n == null ? void 0 : n.extension) || "png",
        rotation: (n == null ? void 0 : n.rotation) || 0
      }), W = Rs(G.size);
      t({
        original: {
          preview: x,
          file: g,
          size: {
            formated: b,
            bytes: (E = h[0]) == null ? void 0 : E.file.size
          }
        },
        compressed: {
          preview: K == null ? void 0 : K.toString(),
          file: G,
          size: {
            formated: W,
            bytes: G.size
          }
        }
      });
      return;
    }
    t({
      original: {
        preview: (N = h[0]) == null ? void 0 : N.data_url,
        file: (M = h[0]) == null ? void 0 : M.file,
        size: { formated: b, bytes: (R = h[0]) == null ? void 0 : R.file.size }
      },
      compressed: null
    });
  };
  return Q(() => {
    e && p([{ data_url: e, file: null }]);
  }, [e]), /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full", children: [
    r && /* @__PURE__ */ f.exports.jsx(Pn, { children: r }),
    r && /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      Wx,
      {
        value: d,
        onChange: m,
        dataURLKey: "data_url",
        acceptType: ["webp", "png", "jpg", "jpeg"],
        children: ({ imageList: h, onImageUpload: v, onImageUpdate: g, onImageRemove: x, isDragging: b, dragProps: y }) => /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: h.length >= 1 ? /* @__PURE__ */ f.exports.jsx("div", { children: h.map((_, $) => /* @__PURE__ */ f.exports.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
          l ? /* @__PURE__ */ f.exports.jsx(U7, { imageContainerClassName: c, src: _ == null ? void 0 : _.data_url }) : /* @__PURE__ */ f.exports.jsx(N7, { imageContainerClassName: c, previewUrl: _ == null ? void 0 : _.data_url }),
          /* @__PURE__ */ f.exports.jsx(
            z7,
            {
              disabled: s,
              imageIndex: $,
              setUploadImage: t,
              onImageRemove: x,
              onImageUpdate: g,
              compress: u,
              tabIndexs: a,
              setLocalImage: p
            }
          )
        ] }, $)) }) : /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
          W7,
          {
            dragProps: y,
            emptyClassName: i,
            isDragging: b,
            onImageUpload: v,
            tabIndexs: a,
            uploadLabel: o
          }
        ) }) })
      }
    )
  ] });
}, B7 = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsxs(La, { className: L("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(vo, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(Fa, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(xi, {}) })
] }), H7 = ({ imageIndex: e, compress: t, tabIndexs: n, onImageUpdate: r, onImageRemove: o, disabled: a }) => a ? null : /* @__PURE__ */ f.exports.jsxs("div", { className: "mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-2 bg-transparent", children: [
  (t == null ? void 0 : t.openComparisons) && /* @__PURE__ */ f.exports.jsx(
    Ue,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: n == null ? void 0 : n.viewCompress,
      onClick: () => t.openComparisons(),
      className: "whitespace-nowrap text-green-600 backdrop-blur-sm border-green-600 bg-green-600 bg-opacity-10 hover:bg-green-600 hover:bg-opacity-25 hover:text-green-600",
      children: /* @__PURE__ */ f.exports.jsx(xx, { size: 16 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Ue,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: n == null ? void 0 : n.change,
      onClick: () => r(e),
      className: "text-yellow-600 backdrop-blur-sm border-yellow-600 bg-yellow-600 bg-opacity-10 hover:bg-yellow-600 hover:bg-opacity-25 hover:text-yellow-600",
      children: /* @__PURE__ */ f.exports.jsx(tm, { size: 14 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Ue,
    {
      tabIndex: n == null ? void 0 : n.delete,
      type: "button",
      size: "icon",
      variant: "outline",
      onClick: () => o(e),
      className: "text-red-700 backdrop-blur-sm border-red-700 bg-red-700 bg-opacity-10 hover:bg-red-700 hover:bg-opacity-25 hover:text-red-700",
      children: /* @__PURE__ */ f.exports.jsx(nm, { size: 14 })
    }
  )
] }), Y7 = ({ previewUrl: e, alt: t, imageContainerClassName: n, ...r }) => {
  const [o, a] = X(!1);
  return /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
    /* @__PURE__ */ f.exports.jsx("style", { jsx: !0, children: `
        [data-rmiz-modal-overlay="visible"] {
          background: rgba(0, 0, 0, 0.6) !important;
          backdrop-filter: blur(4px);
        }
      ` }),
    /* @__PURE__ */ f.exports.jsx(Kx, { ...r, children: o ? /* @__PURE__ */ f.exports.jsxs("div", { style: { textAlign: "center" }, children: [
      /* @__PURE__ */ f.exports.jsx(xi, { size: 34 }),
      /* @__PURE__ */ f.exports.jsx("p", { children: "Error al cargar la imagen" })
    ] }) : /* @__PURE__ */ f.exports.jsx(
      "img",
      {
        src: e,
        alt: t,
        style: { width: "-webkit-fill-available" },
        className: L("object-contain m-auto h-aspect-square w-fit h-[237px] rounded-md", n),
        onError: () => a(!0)
      }
    ) })
  ] });
}, K7 = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, onImageUpload: a }) => /* @__PURE__ */ f.exports.jsxs(
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
        Ue,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          className: `mt-2 ${t && "text-indigo-600"}`,
          onClick: a,
          children: /* @__PURE__ */ f.exports.jsx(Qp, { size: 22 })
        }
      ),
      /* @__PURE__ */ f.exports.jsx("span", { className: "font-medium text-zinc-500", children: "o arrastra y suelta las imagenes" })
    ]
  }
), tR = ({
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
  disabled: d
}) => {
  const [p, m] = X([]);
  Q(() => {
    u && u.length && m([...p, ...u]);
  }, []);
  const h = async (v, g) => {
    m(v);
    const x = v.map(async (b) => {
      var y, _, $;
      if (c != null && c.resizer && (b != null && b.file)) {
        const { data_url: E, file: N } = await Bx({
          resizer: c == null ? void 0 : c.resizer,
          imageFile: b == null ? void 0 : b.file,
          quality: (n == null ? void 0 : n.quality) || 10,
          maxWidth: (n == null ? void 0 : n.width) || 500,
          maxHeight: (n == null ? void 0 : n.width) || 500,
          compressFormat: (n == null ? void 0 : n.extension) || "png",
          rotation: (n == null ? void 0 : n.rotation) || 0
        }), M = Rs(N == null ? void 0 : N.size);
        return {
          original: {
            preview: b == null ? void 0 : b.data_url,
            file: b == null ? void 0 : b.file,
            size: {
              formated: (y = b == null ? void 0 : b.file) != null && y.size ? Rs((_ = b == null ? void 0 : b.file) == null ? void 0 : _.size) : null,
              bytes: (($ = b == null ? void 0 : b.file) == null ? void 0 : $.size) || null
            }
          },
          compressed: {
            preview: E == null ? void 0 : E.toString(),
            file: N,
            size: {
              formated: M,
              bytes: N == null ? void 0 : N.size
            }
          }
        };
      }
      return null;
    });
    Promise.all(x).then(t);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { children: [
    e && /* @__PURE__ */ f.exports.jsx(Pn, { children: e }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      Wx,
      {
        multiple: !0,
        value: p,
        dataURLKey: "data_url",
        onChange: h,
        acceptType: ["webp", "png", "jpeg", "jpg"],
        maxNumber: l,
        children: ({
          imageList: v,
          onImageUpload: g,
          onImageUpdate: x,
          onImageRemove: b,
          isDragging: y,
          dragProps: _
        }) => /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: v.length >= 1 ? /* @__PURE__ */ f.exports.jsxs(
          "div",
          {
            className: `grid ${l === 1 || !l ? "grid-cols-1" : "grid-cols-2"} grid-flow-row gap-4`,
            children: [
              v.map(($, E) => /* @__PURE__ */ f.exports.jsxs(
                "div",
                {
                  className: "imagen-container w-full flex flex-col justify-center items-center relative",
                  children: [
                    i ? /* @__PURE__ */ f.exports.jsx(
                      Y7,
                      {
                        imageContainerClassName: s,
                        previewUrl: $ == null ? void 0 : $.data_url
                      }
                    ) : /* @__PURE__ */ f.exports.jsx(
                      B7,
                      {
                        imageContainerClassName: s,
                        previewUrl: $ == null ? void 0 : $.data_url
                      }
                    ),
                    /* @__PURE__ */ f.exports.jsx(
                      H7,
                      {
                        disabled: d,
                        imageIndex: E,
                        onImageRemove: b,
                        onImageUpdate: x,
                        compress: c,
                        tabIndexs: o
                      }
                    )
                  ]
                },
                E
              )),
              p.length < l && /* @__PURE__ */ f.exports.jsx("div", { className: "imagen-container", children: /* @__PURE__ */ f.exports.jsx(
                "div",
                {
                  ..._,
                  className: L(
                    `w-full h-[237px] ${y ? "border-indigo-600" : "border-muted-foreground"} flex flex-col justify-center items-center border-dashed border-muted-foreground border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`,
                    s
                  ),
                  children: /* @__PURE__ */ f.exports.jsx(
                    Ue,
                    {
                      type: "button",
                      variant: "outline",
                      className: "p-2 h-min",
                      onClick: g,
                      children: /* @__PURE__ */ f.exports.jsx(_k, { className: "w-8 h-8" })
                    }
                  )
                }
              ) })
            ]
          }
        ) : /* @__PURE__ */ f.exports.jsx(
          K7,
          {
            dragProps: _,
            emptyClassName: a,
            isDragging: y,
            onImageUpload: g,
            tabIndexs: o,
            uploadLabel: r
          }
        ) })
      }
    )
  ] });
};
function nR({
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
  const [m, h] = X(!1);
  return s ? /* @__PURE__ */ f.exports.jsxs("div", { className: L("w-full"), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsx(St, { className: "h-5 w-full max-w-[90px]" }) }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "relative", children: /* @__PURE__ */ f.exports.jsx(
      St,
      {
        className: L("w-full h-9 mt-2")
      }
    ) })
  ] }) : /* @__PURE__ */ f.exports.jsx(
    Hr,
    {
      control: t.control,
      name: e,
      defaultValue: c,
      render: ({ field: v }) => {
        var g;
        return /* @__PURE__ */ f.exports.jsxs(yr, { className: "flex flex-col", children: [
          /* @__PURE__ */ f.exports.jsx(Pn, { children: n }),
          /* @__PURE__ */ f.exports.jsxs(Un, { open: m, onOpenChange: h, children: [
            /* @__PURE__ */ f.exports.jsx(zn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Ue,
              {
                disabled: o,
                tabIndex: a,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: L("w-min justify-between", !v.value && "text-muted-foreground", `${d}`),
                children: [
                  v.value ? (g = r.find((x) => {
                    var b, y;
                    return ((b = x == null ? void 0 : x.value) == null ? void 0 : b.toUpperCase()) === ((y = v == null ? void 0 : v.value) == null ? void 0 : y.toUpperCase());
                  })) == null ? void 0 : g.label : u,
                  /* @__PURE__ */ f.exports.jsx(al, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(_n, { className: L("w-[200px] p-0", p), children: /* @__PURE__ */ f.exports.jsxs(Wn, { children: [
              /* @__PURE__ */ f.exports.jsx(ur, { placeholder: i, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsx(dr, { children: l }),
              /* @__PURE__ */ f.exports.jsx(dn, { children: r.map((x) => /* @__PURE__ */ f.exports.jsxs(
                fn,
                {
                  value: x.value,
                  onSelect: (b) => {
                    t.setValue(e, b, { shouldDirty: !0 }), h(!1);
                  },
                  className: "w-full flex justify-start items-center",
                  children: [
                    (x == null ? void 0 : x.image) && /* @__PURE__ */ f.exports.jsx("img", { src: x.image, alt: x.label, width: 40, className: "mr-2" }),
                    (x == null ? void 0 : x.icon) && x.icon,
                    x.label,
                    /* @__PURE__ */ f.exports.jsx(
                      wk,
                      {
                        className: L(
                          "ml-auto h-4 w-4",
                          x.value === v.value ? "opacity-100" : "opacity-0"
                        )
                      }
                    )
                  ]
                },
                x.value
              )) })
            ] }) })
          ] })
        ] });
      }
    }
  );
}
function G7({
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
  var x;
  const [v, g] = X(!1);
  return t ? /* @__PURE__ */ f.exports.jsx(
    Hr,
    {
      control: t.control,
      name: e,
      defaultValue: u,
      rules: o,
      render: ({ field: b, formState: y }) => {
        var _, $, E;
        return /* @__PURE__ */ f.exports.jsxs(yr, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ f.exports.jsxs(Yr, { className: "flex", children: [
            n,
            " ",
            (($ = (_ = y.errors) == null ? void 0 : _.pidType) == null ? void 0 : $.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              y.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsxs(Un, { open: v, onOpenChange: g, children: [
            /* @__PURE__ */ f.exports.jsx(zn, { asChild: !0, disabled: s, children: /* @__PURE__ */ f.exports.jsxs(
              Ue,
              {
                disabled: s,
                tabIndex: c,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: L("w-min justify-between", !b.value && "text-muted-foreground", `${m}`),
                children: [
                  b.value ? (E = r.find((N) => N.value === b.value)) == null ? void 0 : E.label : p,
                  /* @__PURE__ */ f.exports.jsx(al, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(_n, { className: L("w-[200px] p-0", h), children: /* @__PURE__ */ f.exports.jsxs(Wn, { children: [
              /* @__PURE__ */ f.exports.jsx(ur, { placeholder: l, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsx(dr, { children: d }),
              /* @__PURE__ */ f.exports.jsx(dn, { children: r.map((N) => /* @__PURE__ */ f.exports.jsxs(
                fn,
                {
                  value: N.value,
                  onSelect: (M) => {
                    t.setValue(e, M), g(!1);
                  },
                  className: "w-full flex justify-start items-center",
                  children: [
                    (N == null ? void 0 : N.image) && /* @__PURE__ */ f.exports.jsx("img", { src: N.image, alt: N.label, width: 40, className: "mr-2" }),
                    (N == null ? void 0 : N.icon) && N.icon,
                    N.label,
                    /* @__PURE__ */ f.exports.jsx(
                      ln,
                      {
                        className: L(
                          "ml-auto h-4 w-4",
                          N.value === b.value ? "opacity-100" : "opacity-0"
                        )
                      }
                    )
                  ]
                },
                N.value
              )) })
            ] }) })
          ] })
        ] });
      }
    }
  ) : /* @__PURE__ */ f.exports.jsxs(Un, { open: v, onOpenChange: g, children: [
    /* @__PURE__ */ f.exports.jsx(zn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
      Ue,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": v,
        className: "w-full justify-between",
        children: [
          a ? (x = r.find((b) => b.value === a)) == null ? void 0 : x.label : p,
          /* @__PURE__ */ f.exports.jsx(al, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ f.exports.jsx(_n, { className: "w-full p-0", children: /* @__PURE__ */ f.exports.jsxs(Wn, { children: [
      /* @__PURE__ */ f.exports.jsx(ur, { placeholder: l, className: "h-9" }),
      /* @__PURE__ */ f.exports.jsx(dr, { children: d }),
      /* @__PURE__ */ f.exports.jsx(dn, { children: r.map((b) => /* @__PURE__ */ f.exports.jsxs(
        fn,
        {
          onSelect: (y) => {
            i(y === a ? "" : y), g(!1);
          },
          children: [
            b.label,
            /* @__PURE__ */ f.exports.jsx(
              ln,
              {
                className: L(
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
const Z7 = ({ form: e, id: t, description: n, icon: r, placeholder: o, label: a, tabIndex: s, options: i, classNameContainer: c, classNamePopover: l }) => {
  var _;
  const u = H(null), [d, p] = X(null);
  Q(() => {
    const $ = u.current;
    if (!$)
      return;
    const E = new ResizeObserver((N) => {
      const M = N[0].contentRect.width;
      p(M);
    });
    return E.observe($), () => {
      E.unobserve($), E.disconnect();
    };
  }, []);
  const m = (_ = e == null ? void 0 : e.formState) == null ? void 0 : _.defaultValues[t], h = i.map(($) => ({
    ...$,
    selected: m ? m.includes($.value) : !1
  })), [v, g] = X(h), x = ($) => v.filter((N) => N.selected).map((N) => N.value), b = () => g(($) => $.map((E) => ({ ...E, selected: !1 }))), y = ($, E) => {
    const N = v.map((M) => M.id === $ ? { ...M, selected: E } : M);
    g(N), e.setValue(t, N.filter((M) => M.selected).map((M) => M.value), { shouldDirty: !0 });
  };
  return /* @__PURE__ */ f.exports.jsx(
    Hr,
    {
      control: e.control,
      name: t,
      render: ({ field: $, formState: E }) => {
        var N;
        return /* @__PURE__ */ f.exports.jsxs(yr, { className: L("w-full space-y-2", c), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            a && /* @__PURE__ */ f.exports.jsxs(Yr, { className: "flex", children: [
              a,
              " "
            ] }),
            ((N = E == null ? void 0 : E.errors[t]) == null ? void 0 : N.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              E.errors[t].message
            ] })
          ] }),
          n && /* @__PURE__ */ f.exports.jsx(ko, { className: "text-xs", children: n }),
          /* @__PURE__ */ f.exports.jsxs(Un, { children: [
            /* @__PURE__ */ f.exports.jsx(zn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Ue,
              {
                ref: u,
                type: "button",
                variant: "outline",
                size: "sm",
                className: "py-5 border w-full justify-start",
                tabIndex: s,
                children: [
                  r && r,
                  !x().length && /* @__PURE__ */ f.exports.jsx("span", { className: "text-muted-foreground font-normal", children: o || "Seleccione alguna opción" }),
                  x().length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
                    /* @__PURE__ */ f.exports.jsxs(
                      Et,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal lg:hidden",
                        children: [
                          x().length,
                          " seleccionados"
                        ]
                      }
                    ),
                    /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: x().length > 2 ? /* @__PURE__ */ f.exports.jsxs(
                      Et,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: [
                          x().length,
                          " seleccionados"
                        ]
                      }
                    ) : v.filter((M) => M.selected).map((M) => /* @__PURE__ */ f.exports.jsx(
                      Et,
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
            /* @__PURE__ */ f.exports.jsx(_n, { style: { width: d + 24 }, className: L("w-full p-0", l), align: "start", children: /* @__PURE__ */ f.exports.jsxs(Wn, { children: [
              /* @__PURE__ */ f.exports.jsx(ur, { placeholder: a }),
              /* @__PURE__ */ f.exports.jsxs(es, { children: [
                /* @__PURE__ */ f.exports.jsx(dr, { children: "Sin Resultados" }),
                /* @__PURE__ */ f.exports.jsx(dn, { children: v.map((M) => /* @__PURE__ */ f.exports.jsxs(
                  fn,
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
                          children: /* @__PURE__ */ f.exports.jsx(ln, { className: L("h-4 w-4") })
                        }
                      ),
                      M.icon,
                      /* @__PURE__ */ f.exports.jsx("span", { children: M.label })
                    ]
                  },
                  M.value.toString()
                )) }),
                x().length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
                  /* @__PURE__ */ f.exports.jsx(Yi, {}),
                  /* @__PURE__ */ f.exports.jsx(dn, { children: /* @__PURE__ */ f.exports.jsx(
                    fn,
                    {
                      onSelect: () => {
                        e.setValue(t, []), b();
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
}, q7 = ({ description: e, icon: t, placeholder: n, label: r, tabIndex: o, options: a, classNameContainer: s, classNamePopover: i }) => {
  const c = H(null), [l, u] = X(null);
  return Q(() => {
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
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsxs(Pn, { className: "flex", children: [
      r,
      " "
    ] }) }),
    e && /* @__PURE__ */ f.exports.jsx("p", { className: "text-xs", children: e }),
    /* @__PURE__ */ f.exports.jsxs(Un, { children: [
      /* @__PURE__ */ f.exports.jsx(zn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
        Ue,
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
                Et,
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
                Et,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ) : a.map((d) => /* @__PURE__ */ f.exports.jsx(
                Et,
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
      /* @__PURE__ */ f.exports.jsx(_n, { style: { width: l + 24 }, className: L("w-full p-0", i), align: "start", children: /* @__PURE__ */ f.exports.jsxs(Wn, { children: [
        /* @__PURE__ */ f.exports.jsx(ur, { placeholder: r }),
        /* @__PURE__ */ f.exports.jsxs(es, { children: [
          /* @__PURE__ */ f.exports.jsx(dr, { children: "Sin Resultados" }),
          /* @__PURE__ */ f.exports.jsx(dn, { children: a.map((d) => /* @__PURE__ */ f.exports.jsxs(
            fn,
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
                    children: /* @__PURE__ */ f.exports.jsx(ln, { className: L("h-4 w-4") })
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
}, rR = ({ id: e, description: t, icon: n, placeholder: r, label: o, tabIndex: a, classNameContainer: s, readOnly: i, classNamePopover: c, ...l }) => i ? /* @__PURE__ */ f.exports.jsx(
  q7,
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
  Z7,
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
function X7({
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
function jp({
  icon: e,
  titleDescription: t,
  actionToSet: n,
  Link: r,
  item: o
}) {
  return /* @__PURE__ */ f.exports.jsx(Rr, { children: /* @__PURE__ */ f.exports.jsxs(jr, { children: [
    /* @__PURE__ */ f.exports.jsx(Ar, { children: /* @__PURE__ */ f.exports.jsx(
      "div",
      {
        onClick: n ? () => {
          n(!0);
        } : null,
        role: "button",
        className: "w-full border-2 border-transparent flex justify-center items-center p-2 group group-hover:text-[#eaeaea] text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover hover:dark:bg-main-hover select-none",
        children: /* @__PURE__ */ f.exports.jsx(
          $x,
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
    /* @__PURE__ */ f.exports.jsx(fr, { children: t })
  ] }) });
}
function Q7({
  profile: e
}) {
  return /* @__PURE__ */ f.exports.jsxs("header", { className: "justify-center w-full h-14 flex items-start gap-x-3 my-10 px-10", children: [
    /* @__PURE__ */ f.exports.jsxs(La, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
      /* @__PURE__ */ f.exports.jsx(vo, { src: e == null ? void 0 : e.photo, className: "object-cover" }),
      /* @__PURE__ */ f.exports.jsx(Fa, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(vo, { src: e == null ? void 0 : e.photo, className: "object-cover" }) })
    ] }),
    /* @__PURE__ */ f.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
      /* @__PURE__ */ f.exports.jsxs("span", { className: "truncate", children: [
        e == null ? void 0 : e.name,
        " ",
        e == null ? void 0 : e.lastname
      ] }),
      (e == null ? void 0 : e.role) && /* @__PURE__ */ f.exports.jsx(Et, { className: "w-full", children: e.role })
    ] })
  ] });
}
const J7 = ({ isExpanded: e, theme: t }) => {
  const [n, r] = X(!1), { value: o, toggleTheme: a } = t;
  return Q(() => {
    r(!0);
  }, []), n ? /* @__PURE__ */ f.exports.jsx(
    "button",
    {
      onClick: a,
      className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
      children: o === "light" ? /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(bx, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(wx, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  ) : null;
};
function eM({
  sidebar: e,
  onCloseSideBar: t
}) {
  return /* @__PURE__ */ f.exports.jsxs("section", { className: "pl-2 pr-3 my-2", children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "border border-slate-200 w-full" }),
    /* @__PURE__ */ f.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
      e.theme && /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(J7, { isExpanded: !1, theme: e.theme }) }),
      /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
        "button",
        {
          onClick: t,
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none",
          children: [
            /* @__PURE__ */ f.exports.jsx(em, { className: "dark:text-white", size: 20 }),
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
            /* @__PURE__ */ f.exports.jsx(Jp, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
          ]
        }
      ) })
    ] })
  ] });
}
function tM({
  navLinksItems: e,
  subLinksItems: t,
  sidebar: n,
  onCloseSideBar: r,
  Link: o
}) {
  const { profile: a } = n;
  return /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
    /* @__PURE__ */ f.exports.jsx(Q7, { profile: a }),
    /* @__PURE__ */ f.exports.jsxs("aside", { className: "px-6", children: [
      e == null ? void 0 : e.map((s, i) => /* @__PURE__ */ f.exports.jsx(
        $x,
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
        Tk,
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
        eM,
        {
          onCloseSideBar: r,
          sidebar: n
        }
      )
    ] })
  ] });
}
function oR({
  bottomItems: e,
  navLinksItems: t,
  subLinksItems: n,
  sidebar: r,
  Link: o
}) {
  const [a, s] = X(!1);
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "lg:hidden md:block md:min-w-640 md:max-w-767 fixed bottom-0 left-0 z-50 w-full h-16 bg-brand-sidebar-background border-t border-gray-200 dark:border-[#151313] rounded-t-xl", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-between h-full max-w-lg  mx-auto font-medium", children: [
      e.map((i, c) => /* @__PURE__ */ f.exports.jsx(
        jp,
        {
          icon: i.icon,
          titleDescription: i.titleDescription,
          Link: o,
          item: i
        },
        c
      )),
      /* @__PURE__ */ f.exports.jsx(
        jp,
        {
          icon: /* @__PURE__ */ f.exports.jsx(em, {}),
          titleDescription: "Options",
          actionToSet: s,
          Link: null,
          item: null
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      X7,
      {
        isOpen: a,
        onClose: () => s(!1),
        children: /* @__PURE__ */ f.exports.jsx(
          tM,
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
const Zr = bt({
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
function nM() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = Qe(Zr);
  return /* @__PURE__ */ f.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ f.exports.jsxs(
        Zu,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ f.exports.jsx(Vi, { className: "h-8 w-[70px]", children: /* @__PURE__ */ f.exports.jsx(qu, { placeholder: e.limit }) }),
            /* @__PURE__ */ f.exports.jsx(Ui, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ f.exports.jsx(zi, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ f.exports.jsxs(
        Ue,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ f.exports.jsx(Jl, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ f.exports.jsx("div", { children: /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ f.exports.jsxs(
        Ue,
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
const aR = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, rM = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), sR = {
  limit: 10,
  page: 1
}, Jc = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), iR = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], oM = () => /* @__PURE__ */ f.exports.jsx("span", { className: "mt-10 ml-5", children: "Sin Resultados" }), aM = ({
  data: e,
  columns: t
}) => {
  const n = (r, o) => r != null && r.render ? /* @__PURE__ */ f.exports.jsx("div", { children: r.render(o) }, Jc()) : /* @__PURE__ */ f.exports.jsx(qt, { children: o[r.id] }, Jc());
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.map((r) => /* @__PURE__ */ f.exports.jsx($v, { children: t.map((o) => n(o, r)) }, Jc())) });
}, Gx = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = Qe(Zr), [s, i] = X(
    o ? o.length : 0
  );
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.length ? /* @__PURE__ */ f.exports.jsx(
    aM,
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
  ) : /* @__PURE__ */ f.exports.jsx(oM, {}) });
}, sM = () => /* @__PURE__ */ f.exports.jsx(Gx, {}), iM = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), cM = () => /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ f.exports.jsx(iM, {}),
  /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] }), lM = () => {
  const { showFilters: e, setShowFilters: t } = Qe(Zr);
  return /* @__PURE__ */ f.exports.jsxs(
    Ue,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ f.exports.jsx(vx, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, uM = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = Qe(Zr), l = (u) => {
    c(u);
  };
  return /* @__PURE__ */ f.exports.jsxs(Un, { children: [
    /* @__PURE__ */ f.exports.jsx(zn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Ue, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", children: [
      n || /* @__PURE__ */ f.exports.jsx(gx, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(qa, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          Et,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ f.exports.jsxs(
          Et,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((u) => u.selected).map((u) => /* @__PURE__ */ f.exports.jsx(
          Et,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: u.label
          },
          u.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ f.exports.jsx(_n, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ f.exports.jsxs(Wn, { children: [
      /* @__PURE__ */ f.exports.jsx(ur, { placeholder: r }),
      /* @__PURE__ */ f.exports.jsxs(es, { children: [
        /* @__PURE__ */ f.exports.jsx(dr, { children: "Sin Resultados" }),
        /* @__PURE__ */ f.exports.jsx(dn, { children: o.map((u) => /* @__PURE__ */ f.exports.jsxs(
          fn,
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
                  children: /* @__PURE__ */ f.exports.jsx(ln, { className: L("h-4 w-4") })
                }
              ),
              u.icon,
              /* @__PURE__ */ f.exports.jsx("span", { children: u.label })
            ]
          },
          u.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(Yi, {}),
          /* @__PURE__ */ f.exports.jsx(dn, { children: /* @__PURE__ */ f.exports.jsx(
            fn,
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
}, dM = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ f.exports.jsxs(Un, { children: [
  /* @__PURE__ */ f.exports.jsx(zn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Ue, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
    /* @__PURE__ */ f.exports.jsx(js, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    o && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
      /* @__PURE__ */ f.exports.jsx(qa, { orientation: "vertical", className: "mx-2 h-4" }),
      /* @__PURE__ */ f.exports.jsx(
        Et,
        {
          variant: "secondary",
          className: "rounded-sm px-1 font-normal",
          children: o
        }
      )
    ] })
  ] }) }),
  /* @__PURE__ */ f.exports.jsxs(_n, { className: "w-fit p-4", align: "start", children: [
    /* @__PURE__ */ f.exports.jsxs(Pn, { htmlFor: e, children: [
      "Buscar ",
      n
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      Hu,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), fM = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c }
  } = Qe(Zr), l = e.watch(n.map((d) => d.id)), u = () => {
    var p;
    a();
    const d = [];
    (p = Object.entries(e == null ? void 0 : e.getValues())) == null || p.forEach((m) => {
      m[1] && d.push({
        field: zo(m[0]),
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
          dM,
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
      /* @__PURE__ */ f.exports.jsx(lM, {}),
      o && r && r.map((d) => /* @__PURE__ */ f.exports.jsx(
        uM,
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
        Ue,
        {
          type: "button",
          variant: "ghost",
          onClick: u,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ f.exports.jsx(yi, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, pM = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i
  } = Qe(Zr), c = zh({
    defaultValues: n.reduce((u, d) => (u[d.id] = "", u), {}),
    resolver: Ex(
      di.object(
        n.reduce((u, d) => (u[d.id] = di.string().optional(), u), {})
      )
    )
  }), l = async (u) => {
    var m;
    console.log({ data: u });
    const d = r(), p = [];
    (m = Object.entries(u)) == null || m.forEach((h) => {
      h[1] && p.push({
        field: zo(h[0]),
        text: h[1]
      });
    }), console.log("queries formatted ", p), e({ queries: p, filters: d, limit: s, page: a });
  };
  return Q(() => i(c), [c]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ f.exports.jsx("div", {}) : /* @__PURE__ */ f.exports.jsx(Bh, { ...c, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ f.exports.jsx(fM, { form: c, onSubmit: l }) : /* @__PURE__ */ f.exports.jsx("div", {}),
    /* @__PURE__ */ f.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ f.exports.jsx(
      Ue,
      {
        type: "submit",
        onClick: c.handleSubmit(l),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ f.exports.jsx(Ql, {}) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(yx, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, mM = () => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), hM = () => /* @__PURE__ */ f.exports.jsx(Gx, {}), vM = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function cR(e) {
  const [t, n] = X([]), [r, o] = X([]), [a, s] = X([]), [i, c] = X(!1), [l, u] = X(e == null ? void 0 : e.error), [d, p] = X(e == null ? void 0 : e.loading), [m, h] = X(), [v, g] = X(
    (e == null ? void 0 : e.pagination) ?? vM
  ), [x, b] = X(
    (e == null ? void 0 : e.columns) || []
  ), { cardsColsNumber: y } = e, _ = fe(
    (j) => e.onSubmitTable({ ...j }),
    [e]
  ), $ = fe(
    (j) => {
      var D;
      g(j);
      const I = m.getValues(), V = [];
      (D = Object.entries(I)) == null || D.forEach((k) => {
        k[1] && V.push({
          field: rM(k[0]),
          text: k[1]
        });
      });
      const Y = r.map((k) => ({
        id: k.id,
        label: k.label,
        options: k.options.filter((B) => B.selected).map((B) => B.value)
      })).filter((k) => k.options.length > 0);
      _({
        filters: Y,
        queries: V,
        limit: j.limit,
        page: j.page
      });
    },
    [r, _, m]
  ), E = fe(() => {
    $({ ...v, page: v.page + 1 });
  }, [v, $]), N = fe(() => {
    v.page > 1 && $({ ...v, page: v.page - 1 });
  }, [v, $]), M = () => r.map((j) => ({
    id: j.id,
    label: j.label,
    options: j.options.filter((I) => I.selected).map((I) => I.value)
  })).filter((j) => j.options.length > 0), R = (j) => {
    const I = r.find((V) => V.id === j);
    return I ? I.options.filter((Y) => Y.selected).map((Y) => Y.value) : [];
  }, K = (j, I, V) => {
    const Y = r.map((D) => D.id === j ? {
      ...D,
      options: D.options.map((k) => k.id === I ? { ...k, selected: V } : k)
    } : D);
    o(Y);
  }, G = () => r, W = (j) => {
    const I = r.map((V) => V.id === j ? {
      ...V,
      options: V.options.map((Y) => ({
        ...Y,
        selected: !1
      }))
    } : V);
    o(I);
  }, Z = (j) => $({ ...v, limit: j }), F = () => {
    const j = r.map((I) => ({
      ...I,
      options: I.options.map((V) => ({ ...V, selected: !1 }))
    }));
    o(j);
  };
  return Q(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), Q(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), Q(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), Q(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), Q(() => b((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), Q(() => {
    const j = x.filter((I) => I.isQuery).map((I) => ({
      id: I.id,
      label: I.label
    }));
    s(j);
  }, [x]), Q(() => {
    const j = (V) => (V == null ? void 0 : V.filters) && (V == null ? void 0 : V.filters.length), I = x.filter(j).map((V) => {
      const Y = V.filters.map((k) => ({
        ...k,
        selected: !1
      }));
      return {
        ...V,
        id: V.id,
        options: Y
      };
    });
    o(I);
  }, [x]), Q(() => {
    e != null && e.filters && (e == null || e.filters.forEach((j) => {
      j != null && j.filters && x.forEach((I) => {
        j.id === I.id && o((V) => V.some((D) => D.id === j.id) ? V : [
          ...V,
          {
            id: I.id,
            label: I.label,
            options: j.filters
          }
        ]);
      });
    }));
  }, [x, e == null ? void 0 : e.filters]), Q(() => {
    g((j) => {
      var I, V;
      return {
        ...j,
        hasNextPage: (I = e == null ? void 0 : e.pagination) == null ? void 0 : I.hasNextPage,
        hasPrevPage: (V = e == null ? void 0 : e.pagination) == null ? void 0 : V.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ f.exports.jsx(
    Zr.Provider,
    {
      value: {
        data: t,
        columns: x,
        pagination: v,
        nextPage: E,
        prevPage: N,
        searchForm: m,
        updateLimit: Z,
        showFilters: i,
        resetFilters: F,
        getGlobalFilters: G,
        selectOptionFilter: K,
        resetOptionsByFilter: W,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: _,
        getFilterOptionsSelectedById: R,
        getFiltersWithOptionsSelected: M,
        setSelectItem: e.setSelectItem,
        setShowFilters: (j) => c(j),
        setSearchForm: (j) => h(j)
      },
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ f.exports.jsx(pM, { onSubmitTable: _, loading: d }),
        /* @__PURE__ */ f.exports.jsxs(
          "div",
          {
            className: `overflow-clip grid grid-cols-1 ${y ? `${y === 2 ? "sm" : "lg"}:grid-cols-${y}` : "grid-cols-3"}  gap-6`,
            children: [
              d && /* @__PURE__ */ f.exports.jsx(cM, {}),
              !d && l && /* @__PURE__ */ f.exports.jsx(mM, {}),
              !d && !l && !t && /* @__PURE__ */ f.exports.jsx(hM, {}),
              !d && !l && t && /* @__PURE__ */ f.exports.jsx(sM, {})
            ]
          }
        ),
        !d && !l && t && /* @__PURE__ */ f.exports.jsx(nM, {})
      ] })
    }
  );
}
function gM(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ap(e) {
  return gM(e) || Array.isArray(e);
}
function bM() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Cd(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((s) => {
    const i = e[s], c = t[s];
    return typeof i == "function" ? `${i}` == `${c}` : !Ap(i) || !Ap(c) ? i === c : Cd(i, c);
  });
}
function Ip(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function xM(e, t) {
  if (e.length !== t.length)
    return !1;
  const n = Ip(e), r = Ip(t);
  return n.every((o, a) => {
    const s = r[a];
    return Cd(o, s);
  });
}
function Sd(e) {
  return typeof e == "number";
}
function Yl(e) {
  return typeof e == "string";
}
function Ed(e) {
  return typeof e == "boolean";
}
function Lp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function st(e) {
  return Math.abs(e);
}
function Nd(e) {
  return Math.sign(e);
}
function Ms(e, t) {
  return st(e - t);
}
function yM(e, t) {
  if (e === 0 || t === 0 || st(e) <= st(t))
    return 0;
  const n = Ms(st(e), st(t));
  return st(n / e);
}
function Oa(e) {
  return ka(e).map(Number);
}
function cn(e) {
  return e[os(e)];
}
function os(e) {
  return Math.max(0, e.length - 1);
}
function Pd(e, t) {
  return t === os(e);
}
function Fp(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function ka(e) {
  return Object.keys(e);
}
function Zx(e, t) {
  return [e, t].reduce((n, r) => (ka(r).forEach((o) => {
    const a = n[o], s = r[o], i = Lp(a) && Lp(s);
    n[o] = i ? Zx(a, s) : s;
  }), n), {});
}
function qx(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function wM(e, t) {
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
    return Yl(e) ? n[e](c) : e(t, c, l);
  }
  return {
    measure: s
  };
}
function $M(e, t) {
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
function Vr(e = 0, t = 0) {
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
function Xx(e, t, n) {
  const {
    constrain: r
  } = Vr(0, e), o = e + 1;
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
    return Xx(e, i(), n);
  }
  const d = {
    get: i,
    set: c,
    add: l,
    clone: u
  };
  return d;
}
function _M(e) {
  const t = e === "rtl" ? -1 : 1;
  function n(o) {
    return o * t;
  }
  return {
    apply: n
  };
}
function Ma() {
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
function CM(e, t, n, r, o, a, s, i, c, l, u, d, p, m, h, v, g, x, b, y) {
  const {
    cross: _
  } = e, $ = ["INPUT", "SELECT", "TEXTAREA"], E = {
    passive: !1
  }, N = Ma(), M = Ma(), R = Vr(50, 225).constrain(h.measure(20)), K = {
    mouse: 300,
    touch: 400
  }, G = {
    mouse: 500,
    touch: 600
  }, W = v ? 43 : 25;
  let Z = !1, F = 0, j = 0, I = !1, V = !1, Y = !1, D = !1;
  function k(U) {
    if (!y)
      return;
    function ge(Te) {
      (Ed(y) || y(U, Te)) && me(Te);
    }
    const $e = n;
    N.add($e, "dragstart", (Te) => Te.preventDefault(), E).add($e, "touchmove", () => {
    }, E).add($e, "touchend", () => {
    }).add($e, "touchstart", ge).add($e, "mousedown", ge).add($e, "touchcancel", se).add($e, "contextmenu", se).add($e, "click", ue, !0);
  }
  function B() {
    N.clear(), M.clear();
  }
  function q() {
    const U = D ? r : n;
    M.add(U, "touchmove", re, E).add(U, "touchend", se).add(U, "mousemove", re, E).add(U, "mouseup", se);
  }
  function oe(U) {
    const ge = U.nodeName || "";
    return $.includes(ge);
  }
  function te() {
    return (v ? G : K)[D ? "mouse" : "touch"];
  }
  function ve(U, ge) {
    const $e = p.add(Nd(U) * -1), Te = d.byDistance(U, !v).distance;
    return v || st(U) < R ? Te : x && ge ? Te * 0.5 : d.byIndex($e.get(), 0).distance;
  }
  function me(U) {
    const ge = qx(U, o);
    D = ge, !(ge && U.button !== 0) && (oe(U.target) || (Y = v && ge && !U.buttons && Z, Z = Ms(a.get(), i.get()) >= 2, I = !0, s.pointerDown(U), u.useFriction(0).useDuration(0), a.set(i), q(), F = s.readPoint(U), j = s.readPoint(U, _), m.emit("pointerDown")));
  }
  function re(U) {
    const ge = s.readPoint(U), $e = s.readPoint(U, _), Te = Ms(ge, F), T = Ms($e, j);
    if (!V && !D && (!U.cancelable || (V = Te > T, !V)))
      return se(U);
    const z = s.pointerMove(U);
    Te > g && (Y = !0), u.useFriction(0.3).useDuration(1), c.start(), a.add(t.apply(z)), U.preventDefault();
  }
  function se(U) {
    const $e = d.byDistance(0, !1).index !== p.get(), Te = s.pointerUp(U) * te(), T = ve(t.apply(Te), $e), z = yM(Te, T), J = W - 10 * z, pe = b + z / 50;
    V = !1, I = !1, M.clear(), u.useDuration(J).useFriction(pe), l.distance(T, !v), D = !1, m.emit("pointerUp");
  }
  function ue(U) {
    Y && (U.stopPropagation(), U.preventDefault());
  }
  function ne() {
    return I;
  }
  return {
    init: k,
    pointerDown: ne,
    destroy: B
  };
}
function SM(e, t) {
  let r, o;
  function a(d) {
    return d.timeStamp;
  }
  function s(d, p) {
    const h = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (qx(d, t) ? d : d.touches[0])[h];
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
    return m && !h && st(v) > 0.1 ? v : 0;
  }
  return {
    pointerDown: i,
    pointerMove: c,
    pointerUp: l,
    readPoint: s
  };
}
function EM() {
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
function NM(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function PM(e, t, n, r, o, a, s) {
  let i, c, l = [], u = !1;
  function d(v) {
    return o.measureSize(s.measure(v));
  }
  function p(v) {
    if (!a)
      return;
    c = d(e), l = r.map(d);
    function g(b) {
      for (const y of b) {
        const _ = y.target === e, $ = r.indexOf(y.target), E = _ ? c : l[$], N = d(_ ? e : r[$]);
        if (st(N - E) >= 0.5) {
          n.requestAnimationFrame(() => {
            v.reInit(), t.emit("resize");
          });
          break;
        }
      }
    }
    i = new ResizeObserver((b) => {
      u || (Ed(a) || a(v, b)) && g(b);
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
function TM(e, t, n, r, o) {
  let a = 0, s = 0, i = r, c = o, l = e.get(), u = 0;
  function d() {
    const $ = n.get() - e.get(), E = !i;
    let N = 0;
    return E ? (a = 0, e.set(n), N = $) : (a += $ / i, a *= c, l += a, e.add(a), N = l - u), s = Nd(N), u = l, _;
  }
  function p() {
    const $ = n.get() - t.get();
    return st($) < 1e-3;
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
    return b(r);
  }
  function x() {
    return y(o);
  }
  function b($) {
    return i = $, _;
  }
  function y($) {
    return c = $, _;
  }
  const _ = {
    direction: h,
    duration: m,
    velocity: v,
    seek: d,
    settled: p,
    useBaseFriction: x,
    useBaseDuration: g,
    useFriction: y,
    useDuration: b
  };
  return _;
}
function OM(e, t, n, r, o) {
  const a = o.measure(10), s = o.measure(50), i = Vr(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function u(m) {
    if (!l())
      return;
    const h = e.reachedMin(t.get()) ? "min" : "max", v = st(e[h] - t.get()), g = n.get() - t.get(), x = i.constrain(v / s);
    n.subtract(g * x), !m && st(g) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function d(m) {
    c = !m;
  }
  return {
    constrain: u,
    toggleActive: d
  };
}
function kM(e, t, n, r, o) {
  const a = Vr(-t + e, 0), s = u(), i = l(), c = d();
  function l() {
    const m = s[0], h = cn(s), v = s.lastIndexOf(m), g = s.indexOf(h) + 1;
    return Vr(v, g);
  }
  function u() {
    return n.map((m, h) => {
      const v = !h, g = Pd(n, h);
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
function MM(e, t, n) {
  const r = t[0], o = n ? r - e : cn(t);
  return {
    limit: Vr(o, r)
  };
}
function DM(e, t, n, r) {
  const a = t.min + 0.1, s = t.max + 0.1, {
    reachedMin: i,
    reachedMax: c
  } = Vr(a, s);
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
function RM(e) {
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
function jM(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: s
  } = e, {
    groupSlides: i
  } = o, c = d().map(t.measure), l = p(), u = m();
  function d() {
    return i(r).map((v) => cn(v)[s] - v[0][a]).map(st);
  }
  function p() {
    return r.map((v) => n[a] - v[a]).map((v) => -st(v));
  }
  function m() {
    return i(l).map((v) => v[0]).map((v, g) => v + c[g]);
  }
  return {
    snaps: l,
    snapsAligned: u
  };
}
function AM(e, t, n, r, o, a) {
  const {
    groupSlides: s
  } = o, {
    min: i,
    max: c
  } = r, l = u();
  function u() {
    const p = s(a), m = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : m ? p : p.slice(i, c).map((h, v, g) => {
      const x = !v, b = Pd(g, v);
      if (x) {
        const y = cn(g[0]) + 1;
        return Fp(y);
      }
      if (b) {
        const y = os(a) - cn(g)[0] + 1;
        return Fp(y, cn(g)[0]);
      }
      return h;
    });
  }
  return {
    slideRegistry: l
  };
}
function IM(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: s,
    constrain: i
  } = r;
  function c(h) {
    return h.concat().sort((v, g) => st(v) - st(g))[0];
  }
  function l(h) {
    const v = e ? s(h) : i(h), g = t.map((b) => b - v).map((b) => u(b, 0)).map((b, y) => ({
      diff: b,
      index: y
    })).sort((b, y) => st(b.diff) - st(y.diff)), {
      index: x
    } = g[0];
    return {
      index: x,
      distance: v
    };
  }
  function u(h, v) {
    const g = [h, h + n, h - n];
    if (!e)
      return g[0];
    if (!v)
      return c(g);
    const x = g.filter((b) => Nd(b) === v);
    return x.length ? c(x) : cn(g) - n;
  }
  function d(h, v) {
    const g = t[h] - o.get(), x = u(g, v);
    return {
      index: h,
      distance: x
    };
  }
  function p(h, v) {
    const g = o.get() + h, {
      index: x,
      distance: b
    } = l(g), y = !e && a(g);
    if (!v || y)
      return {
        index: x,
        distance: h
      };
    const _ = t[x] - b, $ = h + u(_, 0);
    return {
      index: x,
      distance: $
    };
  }
  return {
    byDistance: p,
    byIndex: d,
    shortcut: u
  };
}
function LM(e, t, n, r, o, a) {
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
function FM(e, t, n, r, o, a) {
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
      const v = t.indexOf(d), g = n.findIndex((x) => x.includes(v));
      Sd(g) && (o.useDuration(0), r.index(g, 0));
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
function Ds(e) {
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
    return Sd(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function Qx(e, t, n) {
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
function VM(e, t, n, r, o, a, s, i, c, l) {
  const d = Oa(a), p = Oa(a).reverse(), m = b().concat(y());
  function h(M, R) {
    return M.reduce((K, G) => K - a[G], R);
  }
  function v(M, R) {
    return M.reduce((K, G) => h(K, R) > 0 ? K.concat([G]) : K, []);
  }
  function g(M) {
    return s.map((R, K) => ({
      start: R - o[K] + 0.5 + M,
      end: R + n - 0.5 + M
    }));
  }
  function x(M, R, K) {
    const G = g(R);
    return M.map((W) => {
      const Z = K ? 0 : -r, F = K ? r : 0, j = K ? "end" : "start", I = G[W][j];
      return {
        index: W,
        loopPoint: I,
        slideLocation: Ds(-1),
        translate: Qx(e, t, l[W]),
        target: () => c.get() > I ? Z : F
      };
    });
  }
  function b() {
    const M = i[0], R = v(p, M);
    return x(R, r, !1);
  }
  function y() {
    const M = n - i[0] - 1, R = v(d, M);
    return x(R, -r, !0);
  }
  function _() {
    return m.every(({
      index: M
    }) => {
      const R = d.filter((K) => K !== M);
      return h(R, n) <= 0.1;
    });
  }
  function $() {
    m.forEach((M) => {
      const {
        target: R,
        translate: K,
        slideLocation: G
      } = M, W = R();
      W !== G.get() && (K.to(W), G.set(W));
    });
  }
  function E() {
    m.forEach((M) => M.translate.clear());
  }
  return {
    canLoop: _,
    clear: E,
    loop: $,
    loopPoints: m
  };
}
function UM(e, t, n) {
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
      o || (Ed(n) || n(c, u)) && l(u);
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
function zM(e, t, n, r) {
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
    return ka(o).reduce((v, g) => {
      const x = parseInt(g), {
        isIntersecting: b
      } = o[x];
      return (h && b || !h && !b) && v.push(x), v;
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
function WM(e, t, n, r, o, a) {
  const {
    measureSize: s,
    startEdge: i,
    endEdge: c
  } = e, l = n[0] && o, u = h(), d = v(), p = n.map(s), m = g();
  function h() {
    if (!l)
      return 0;
    const b = n[0];
    return st(t[i] - b[i]);
  }
  function v() {
    if (!l)
      return 0;
    const b = a.getComputedStyle(cn(r));
    return parseFloat(b.getPropertyValue(`margin-${c}`));
  }
  function g() {
    return n.map((b, y, _) => {
      const $ = !y, E = Pd(_, y);
      return $ ? p[y] + u : E ? p[y] + d : _[y + 1][i] - b[i];
    }).map(st);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: m,
    startGap: u,
    endGap: d
  };
}
function BM(e, t, n, r, o, a, s, i, c, l) {
  const {
    startEdge: u,
    endEdge: d
  } = e, p = Sd(r);
  function m(x, b) {
    return Oa(x).filter((y) => y % b === 0).map((y) => x.slice(y, y + b));
  }
  function h(x) {
    return x.length ? Oa(x).reduce((b, y) => {
      const _ = cn(b) || 0, $ = _ === 0, E = y === os(x), N = a[u] - s[_][u], M = a[u] - s[y][d], R = !o && $ ? t.apply(i) : 0, K = !o && E ? t.apply(c) : 0;
      return st(M - K - (N + R)) > n + l && b.push(y), E && b.push(x.length), b;
    }, []).map((b, y, _) => {
      const $ = Math.max(_[y - 1] || 0);
      return x.slice($, b);
    }) : [];
  }
  function v(x) {
    return p ? m(x, r) : h(x);
  }
  return {
    groupSlides: v
  };
}
function HM(e, t, n, r, o, a, s, i) {
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
    slidesToScroll: x,
    skipSnaps: b,
    containScroll: y,
    watchResize: _,
    watchSlides: $,
    watchDrag: E
  } = a, N = 2, M = EM(), R = M.measure(t), K = n.map(M.measure), G = _M(u), W = $M(l, u), Z = W.measureSize(R), F = NM(Z), j = wM(c, Z), I = !p && !!y, V = p || !!y, {
    slideSizes: Y,
    slideSizesWithGaps: D,
    startGap: k,
    endGap: B
  } = WM(W, R, K, n, V, o), q = BM(W, G, Z, x, p, R, K, k, B, N), {
    snaps: oe,
    snapsAligned: te
  } = jM(W, j, R, K, q), ve = -cn(oe) + cn(D), {
    snapsContained: me,
    scrollContainLimit: re
  } = kM(Z, ve, te, y, N), se = I ? me : te, {
    limit: ue
  } = MM(ve, se, p), ne = Xx(os(se), d, p), he = ne.clone(), U = Oa(n), ge = ({
    dragHandler: Ie,
    scrollBody: Ge,
    scrollBounds: tt,
    options: {
      loop: nt
    }
  }) => {
    nt || tt.constrain(Ie.pointerDown()), Ge.seek();
  }, $e = ({
    scrollBody: Ie,
    translate: Ge,
    location: tt,
    offsetLocation: nt,
    scrollLooper: Pt,
    slideLooper: $r,
    dragHandler: Wt,
    animation: Xn,
    eventHandler: qr,
    options: {
      loop: Wo
    }
  }, as) => {
    const Tn = Ie.velocity(), Xr = Ie.settled();
    Xr && !Wt.pointerDown() && (Xn.stop(), qr.emit("settle")), Xr || qr.emit("scroll"), nt.set(tt.get() - Tn + Tn * as), Wo && (Pt.loop(Ie.direction()), $r.loop()), Ge.to(nt.get());
  }, Te = {
    start: () => i.start(Ee),
    stop: () => i.stop(Ee),
    update: () => ge(Ee),
    render: (Ie) => $e(Ee, Ie)
  }, T = 0.68, z = se[ne.get()], J = Ds(z), pe = Ds(z), le = Ds(z), ae = TM(J, pe, le, m, T), _e = IM(p, se, ve, ue, le), He = LM(Te, ne, he, _e, le, s), We = RM(ue), It = Ma(), qn = zM(t, n, s, g), {
    slideRegistry: Lt
  } = AM(I, y, se, re, q, U), Ne = FM(e, n, Lt, He, ae, It), Ee = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: s,
    containerRect: R,
    slideRects: K,
    animation: Te,
    axis: W,
    direction: G,
    dragHandler: CM(W, G, e, r, o, le, SM(W, o), J, Te, He, ae, _e, ne, s, F, h, v, b, T, E),
    eventStore: It,
    percentOfView: F,
    index: ne,
    indexPrevious: he,
    limit: ue,
    location: J,
    offsetLocation: pe,
    options: a,
    resizeHandler: PM(t, s, o, n, W, _, M),
    scrollBody: ae,
    scrollBounds: OM(ue, J, le, ae, F),
    scrollLooper: DM(ve, ue, pe, [J, pe, le]),
    scrollProgress: We,
    scrollSnapList: se.map(We.get),
    scrollSnaps: se,
    scrollTarget: _e,
    scrollTo: He,
    slideLooper: VM(W, G, Z, ve, Y, D, oe, se, pe, n),
    slideFocus: Ne,
    slidesHandler: UM(t, s, $),
    slidesInView: qn,
    slideIndexes: U,
    slideRegistry: Lt,
    slidesToScroll: q,
    target: le,
    translate: Qx(W, G, t)
  };
  return Ee;
}
function YM(e) {
  const t = 16.666666666666668;
  let n = [], r = null, o = 0, a = 0;
  function s(d) {
    r || (r = d);
    const p = d - r;
    for (r = d, o += p; o >= t; )
      n.forEach(({
        animation: h
      }) => h.update()), o -= t;
    const m = st(o / t);
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
function KM() {
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
const GM = {
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
function ZM(e) {
  function t(a, s) {
    return Zx(a, s || {});
  }
  function n(a) {
    const s = a.breakpoints || {}, i = ka(s).filter((c) => e.matchMedia(c).matches).map((c) => s[c]).reduce((c, l) => t(c, l), {});
    return t(a, i);
  }
  function r(a) {
    return a.map((s) => ka(s.breakpoints || {})).reduce((s, i) => s.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function qM(e) {
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
  const r = e.ownerDocument, o = r.defaultView, a = ZM(o), s = qM(a), i = Ma(), c = Ma(), l = KM(), {
    animationRealms: u
  } = Co, {
    mergeOptions: d,
    optionsAtMedia: p,
    optionsMediaQueries: m
  } = a, {
    on: h,
    off: v,
    emit: g
  } = l, x = Z;
  let b = !1, y, _ = d(GM, Co.globalOptions), $ = d(_), E = [], N, M, R;
  function K() {
    const {
      container: ge,
      slides: $e
    } = $;
    M = (Yl(ge) ? e.querySelector(ge) : ge) || e.children[0];
    const T = Yl($e) ? M.querySelectorAll($e) : $e;
    R = [].slice.call(T || M.children);
  }
  function G(ge, $e) {
    const Te = HM(e, M, R, r, o, ge, l, $e);
    if (ge.loop && !Te.slideLooper.canLoop()) {
      const T = Object.assign({}, ge, {
        loop: !1
      });
      return G(T, $e);
    }
    return Te;
  }
  function W(ge, $e) {
    if (b)
      return;
    const Te = u.find((z) => z.window === o), T = Te || YM(o);
    Te || u.push(T), _ = d(_, ge), $ = p(_), E = $e || E, K(), y = G($, T), m([_, ...E.map(({
      options: z
    }) => z)]).forEach((z) => i.add(z, "change", Z)), $.active && (y.translate.to(y.location.get()), y.slidesInView.init(), y.slideFocus.init(), y.eventHandler.init(U), y.resizeHandler.init(U), y.slidesHandler.init(U), c.add(r, "visibilitychange", () => {
      r.hidden && T.reset();
    }), y.options.loop && y.slideLooper.loop(), M.offsetParent && R.length && y.dragHandler.init(U), N = s.init(U, E));
  }
  function Z(ge, $e) {
    const Te = oe();
    F(), W(d({
      startIndex: Te
    }, ge), $e), l.emit("reInit");
  }
  function F() {
    y.dragHandler.destroy(), y.animation.stop(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), y.slidesInView.destroy(), s.destroy(), i.clear(), c.clear();
  }
  function j() {
    b || (b = !0, i.clear(), F(), l.emit("destroy"));
  }
  function I(ge, $e, Te) {
    !$.active || b || (y.scrollBody.useBaseFriction().useDuration($e === !0 ? 0 : $.duration), y.scrollTo.index(ge, Te || 0));
  }
  function V(ge) {
    const $e = y.index.add(1).get();
    I($e, ge, -1);
  }
  function Y(ge) {
    const $e = y.index.add(-1).get();
    I($e, ge, 1);
  }
  function D() {
    return y.index.add(1).get() !== oe();
  }
  function k() {
    return y.index.add(-1).get() !== oe();
  }
  function B() {
    return y.scrollSnapList;
  }
  function q() {
    return y.scrollProgress.get(y.location.get());
  }
  function oe() {
    return y.index.get();
  }
  function te() {
    return y.indexPrevious.get();
  }
  function ve() {
    return y.slidesInView.get();
  }
  function me() {
    return y.slidesInView.get(!1);
  }
  function re() {
    return N;
  }
  function se() {
    return y;
  }
  function ue() {
    return e;
  }
  function ne() {
    return M;
  }
  function he() {
    return R;
  }
  const U = {
    canScrollNext: D,
    canScrollPrev: k,
    containerNode: ne,
    internalEngine: se,
    destroy: j,
    off: v,
    on: h,
    emit: g,
    plugins: re,
    previousScrollSnap: te,
    reInit: x,
    rootNode: ue,
    scrollNext: V,
    scrollPrev: Y,
    scrollProgress: q,
    scrollSnapList: B,
    scrollTo: I,
    selectedScrollSnap: oe,
    slideNodes: he,
    slidesInView: ve,
    slidesNotInView: me
  };
  return W(t, n), setTimeout(() => l.emit("init"), 0), U;
}
Co.animationRealms = [];
Co.globalOptions = void 0;
function Td(e = {}, t = []) {
  const n = H(e), r = H(t), [o, a] = X(), [s, i] = X(), c = fe(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return Q(() => {
    if (bM() && s) {
      Co.globalOptions = Td.globalOptions;
      const l = Co(s, n.current, r.current);
      return a(l), () => l.destroy();
    } else
      a(void 0);
  }, [s, a]), Q(() => {
    Cd(n.current, e) || (n.current = e, c());
  }, [e, c]), Q(() => {
    xM(r.current, t) || (r.current = t, c());
  }, [t, c]), [i, o];
}
Td.globalOptions = void 0;
const Jx = C.createContext(null);
function sc() {
  const e = C.useContext(Jx);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const XM = C.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: a,
    ...s
  }, i) => {
    const [c, l] = Td(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      r
    ), [u, d] = C.useState(!1), [p, m] = C.useState(!1), h = C.useCallback((b) => {
      b && (d(b.canScrollPrev()), m(b.canScrollNext()));
    }, []), v = C.useCallback(() => {
      l == null || l.scrollPrev();
    }, [l]), g = C.useCallback(() => {
      l == null || l.scrollNext();
    }, [l]), x = C.useCallback(
      (b) => {
        b.key === "ArrowLeft" ? (b.preventDefault(), v()) : b.key === "ArrowRight" && (b.preventDefault(), g());
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
      Jx.Provider,
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
            onKeyDownCapture: x,
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
XM.displayName = "Carousel";
const QM = C.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = sc();
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
QM.displayName = "CarouselContent";
const JM = C.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = sc();
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
JM.displayName = "CarouselItem";
const eD = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollPrev: s, canScrollPrev: i } = sc();
  return /* @__PURE__ */ f.exports.jsxs(
    Ue,
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
        /* @__PURE__ */ f.exports.jsx(sy, { className: "h-4 w-4" }),
        /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
eD.displayName = "CarouselPrevious";
const tD = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollNext: s, canScrollNext: i } = sc();
  return /* @__PURE__ */ f.exports.jsxs(
    Ue,
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
        /* @__PURE__ */ f.exports.jsx(iy, { className: "h-4 w-4" }),
        /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
tD.displayName = "CarouselNext";
var e0 = S.createContext({ drawerRef: { current: null }, overlayRef: { current: null }, scaleBackground: () => {
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
} }), Od = () => S.useContext(e0);
function nD(e, { insertAt: t } = {}) {
  if (!e || typeof document > "u")
    return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
nD(`[vaul-drawer]{touch-action:none;transform:translate3d(0,100%,0);transition:transform .5s cubic-bezier(.32,.72,0,1)}.vaul-dragging .vaul-scrollable{overflow-y:hidden!important}[vaul-drawer][vaul-drawer-visible=true]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;top:100%;background:inherit;background-color:inherit;left:0;right:0;height:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);
var rD = typeof window < "u" ? Da : Q;
function Kl(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function oD() {
  return kd(/^Mac/);
}
function aD() {
  return kd(/^iPhone/);
}
function sD() {
  return kd(/^iPad/) || oD() && navigator.maxTouchPoints > 1;
}
function t0() {
  return aD() || sD();
}
function kd(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
var el = typeof document < "u" && window.visualViewport;
function Vp(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function n0(e) {
  for (Vp(e) && (e = e.parentElement); e && !Vp(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
var iD = /* @__PURE__ */ new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]), _s = 0, tl;
function cD(e = {}) {
  let { isDisabled: t } = e;
  rD(() => {
    if (!t)
      return _s++, _s === 1 && (t0() ? tl = uD() : tl = lD()), () => {
        _s--, _s === 0 && tl();
      };
  }, [t]);
}
function lD() {
  return Kl(mi(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), mi(document.documentElement, "overflow", "hidden"));
}
function uD() {
  let e, t = 0, n = (d) => {
    e = n0(d.target), !(e === document.documentElement && e === document.body) && (t = d.changedTouches[0].pageY);
  }, r = (d) => {
    if (!e || e === document.documentElement || e === document.body) {
      d.preventDefault();
      return;
    }
    let p = d.changedTouches[0].pageY, m = e.scrollTop, h = e.scrollHeight - e.clientHeight;
    h !== 0 && ((m <= 0 && p > t || m >= h && p < t) && d.preventDefault(), t = p);
  }, o = (d) => {
    let p = d.target;
    hi(p) && p !== document.activeElement && (d.preventDefault(), p.style.transform = "translateY(-2000px)", p.focus(), requestAnimationFrame(() => {
      p.style.transform = "";
    }));
  }, a = (d) => {
    let p = d.target;
    hi(p) && (p.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      p.style.transform = "", el && (el.height < window.innerHeight ? requestAnimationFrame(() => {
        Up(p);
      }) : el.addEventListener("resize", () => Up(p), { once: !0 }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, c = window.pageYOffset, l = Kl(mi(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), mi(document.documentElement, "overflow", "hidden"));
  window.scrollTo(0, 0);
  let u = Kl(ea(document, "touchstart", n, { passive: !1, capture: !0 }), ea(document, "touchmove", r, { passive: !1, capture: !0 }), ea(document, "touchend", o, { passive: !1, capture: !0 }), ea(document, "focus", a, !0), ea(window, "scroll", s));
  return () => {
    l(), u(), window.scrollTo(i, c);
  };
}
function mi(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function ea(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function Up(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = n0(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom, s = n.getBoundingClientRect().bottom;
      a > s && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function hi(e) {
  return e instanceof HTMLInputElement && !iD.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function dD(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function fD(...e) {
  return (t) => e.forEach((n) => dD(n, t));
}
function r0(...e) {
  return C.useCallback(fD(...e), e);
}
var tr = null;
function pD({ isOpen: e, modal: t, nested: n, hasBeenOpened: r }) {
  let [o, a] = S.useState(typeof window < "u" ? window.location.href : ""), s = S.useRef(0);
  function i() {
    if (tr === null && e) {
      tr = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left, height: document.body.style.height };
      let { scrollX: l, innerHeight: u } = window;
      document.body.style.setProperty("position", "fixed", "important"), document.body.style.top = `${-s.current}px`, document.body.style.left = `${-l}px`, document.body.style.right = "0px", document.body.style.height = "auto", setTimeout(() => requestAnimationFrame(() => {
        let d = u - window.innerHeight;
        d && s.current >= u && (document.body.style.top = `${-(s.current + d)}px`);
      }), 300);
    }
  }
  function c() {
    if (tr !== null) {
      let l = -parseInt(document.body.style.top, 10), u = -parseInt(document.body.style.left, 10);
      document.body.style.position = tr.position, document.body.style.top = tr.top, document.body.style.left = tr.left, document.body.style.height = tr.height, document.body.style.right = "unset", requestAnimationFrame(() => {
        if (o !== window.location.href) {
          a(window.location.href);
          return;
        }
        window.scrollTo(u, l);
      }), tr = null;
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
var o0 = /* @__PURE__ */ new WeakMap();
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
  }), !n && o0.set(e, r);
}
function Cs(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  let n = o0.get(e);
  n && (t ? e.style[t] = n[t] : Object.entries(n).forEach(([r, o]) => {
    e.style[r] = o;
  }));
}
function Ss(e) {
  let t = window.getComputedStyle(e), n = t.transform || t.webkitTransform || t.mozTransform, r = n.match(/^matrix3d\((.+)\)$/);
  return r ? parseFloat(r[1].split(", ")[13]) : (r = n.match(/^matrix\((.+)\)$/), r ? parseFloat(r[1].split(", ")[5]) : null);
}
function mD(e) {
  return 8 * (Math.log(e + 1) - 2);
}
var et = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] }, a0 = 0.4;
function s0(e) {
  let t = S.useRef(e);
  return S.useEffect(() => {
    t.current = e;
  }), S.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function hD({ defaultProp: e, onChange: t }) {
  let n = S.useState(e), [r] = n, o = S.useRef(r), a = s0(t);
  return S.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [r, o, a]), n;
}
function vD({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  let [r, o] = hD({ defaultProp: t, onChange: n }), a = e !== void 0, s = a ? e : r, i = s0(n), c = S.useCallback((l) => {
    if (a) {
      let u = typeof l == "function" ? l(e) : l;
      u !== e && i(u);
    } else
      o(l);
  }, [a, e, o, i]);
  return [s, c];
}
function gD({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: s }) {
  let [i, c] = vD({ prop: e, defaultProp: n == null ? void 0 : n[0], onChange: t }), l = S.useMemo(() => i === (n == null ? void 0 : n[n.length - 1]), [n, i]), u = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === i || !n, d = S.useMemo(() => {
    var b;
    return (b = n == null ? void 0 : n.findIndex((y) => y === i)) != null ? b : null;
  }, [n, i]), p = S.useMemo(() => {
    var b;
    return (b = n == null ? void 0 : n.map((y) => {
      let _ = typeof window < "u", $ = typeof y == "string", E = 0;
      $ && (E = parseInt(y, 10));
      let N = $ ? E : _ ? y * window.innerHeight : 0;
      return _ ? window.innerHeight - N : N;
    })) != null ? b : [];
  }, [n]), m = S.useMemo(() => d !== null ? p == null ? void 0 : p[d] : null, [p, d]), h = S.useCallback((b) => {
    var y;
    let _ = (y = p == null ? void 0 : p.findIndex(($) => $ === b)) != null ? y : null;
    s(_), ct(r.current, { transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, transform: `translate3d(0, ${b}px, 0)` }), p && _ !== p.length - 1 && _ !== a ? ct(o.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, opacity: "0" }) : ct(o.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, opacity: "1" }), c(_ !== null ? n == null ? void 0 : n[_] : null);
  }, [r.current, n, p, a, o, c]);
  S.useEffect(() => {
    var b;
    if (e) {
      let y = (b = n == null ? void 0 : n.findIndex((_) => _ === e)) != null ? b : null;
      p && y && typeof p[y] == "number" && h(p[y]);
    }
  }, [e, n, p, h]);
  function v({ draggedDistance: b, closeDrawer: y, velocity: _, dismissible: $ }) {
    if (a === void 0)
      return;
    let E = m - b, N = d === a - 1, M = d === 0, R = b > 0;
    if (N && ct(o.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), _ > 2 && !R) {
      $ ? y() : h(p[0]);
      return;
    }
    if (_ > 2 && R && p && n) {
      h(p[n.length - 1]);
      return;
    }
    let K = p == null ? void 0 : p.reduce((G, W) => typeof G != "number" || typeof W != "number" ? G : Math.abs(W - E) < Math.abs(G - E) ? W : G);
    if (_ > a0 && Math.abs(b) < window.innerHeight * 0.4) {
      let G = R ? 1 : -1;
      if (G > 0 && l) {
        h(p[n.length - 1]);
        return;
      }
      if (M && G < 0 && $ && y(), d === null)
        return;
      h(p[d + G]);
      return;
    }
    h(K);
  }
  function g({ draggedDistance: b }) {
    if (m === null)
      return;
    let y = m - b;
    ct(r.current, { transform: `translate3d(0, ${y}px, 0)` });
  }
  function x(b, y) {
    if (!n || typeof d != "number" || !p || a === void 0)
      return null;
    let _ = d === a - 1;
    if (d >= a && y)
      return 0;
    if (_ && !y)
      return 1;
    if (!u && !_)
      return null;
    let $ = _ ? d + 1 : d - 1, E = _ ? p[$] - p[$ - 1] : p[$ + 1] - p[$], N = b / Math.abs(E);
    return _ ? 1 - N : N;
  }
  return { isLastSnapPoint: l, activeSnapPoint: i, shouldFade: u, getPercentageDragged: x, setActiveSnapPoint: c, activeSnapPointIndex: d, onRelease: v, onDrag: g, snapPointsOffset: p };
}
var bD = 0.25, xD = 100, zp = 8, _r = 16, Wp = 26, Bp = "vaul-dragging";
function i0({ open: e, onOpenChange: t, children: n, shouldScaleBackground: r, onDrag: o, onRelease: a, snapPoints: s, nested: i, closeThreshold: c = bD, scrollLockTimeout: l = xD, dismissible: u = !0, fadeFromIndex: d = s && s.length - 1, activeSnapPoint: p, setActiveSnapPoint: m, fixed: h, modal: v = !0, onClose: g }) {
  var x;
  let [b = !1, y] = S.useState(!1), [_, $] = S.useState(!1), [E, N] = S.useState(!1), [M, R] = S.useState(!1), [K, G] = S.useState(!1), [W, Z] = S.useState(!1), F = S.useRef(null), j = S.useRef(null), I = S.useRef(null), V = S.useRef(null), Y = S.useRef(null), D = S.useRef(!1), k = S.useRef(null), B = S.useRef(0), q = S.useRef(!1), oe = S.useRef(0), te = S.useRef(null), ve = S.useRef(((x = te.current) == null ? void 0 : x.getBoundingClientRect().height) || 0), me = S.useRef(0), re = S.useCallback((Ne) => {
    s && Ne === U.length - 1 && (j.current = new Date());
  }, []), { activeSnapPoint: se, activeSnapPointIndex: ue, setActiveSnapPoint: ne, onRelease: he, snapPointsOffset: U, onDrag: ge, shouldFade: $e, getPercentageDragged: Te } = gD({ snapPoints: s, activeSnapPointProp: p, setActiveSnapPointProp: m, drawerRef: te, fadeFromIndex: d, overlayRef: F, onSnapPointChange: re });
  cD({ isDisabled: !b || K || !v || W || !_ });
  let { restorePositionSetting: T } = pD({ isOpen: b, modal: v, nested: i, hasBeenOpened: _ });
  function z() {
    return (window.innerWidth - Wp) / window.innerWidth;
  }
  function J(Ne) {
    var Ee;
    !u && !s || te.current && !te.current.contains(Ne.target) || (ve.current = ((Ee = te.current) == null ? void 0 : Ee.getBoundingClientRect().height) || 0, G(!0), I.current = new Date(), t0() && window.addEventListener("touchend", () => D.current = !1, { once: !0 }), Ne.target.setPointerCapture(Ne.pointerId), B.current = Ne.screenY);
  }
  function pe(Ne, Ee) {
    var Ie;
    let Ge = Ne, tt = (Ie = window.getSelection()) == null ? void 0 : Ie.toString(), nt = te.current ? Ss(te.current) : null, Pt = new Date();
    if (j.current && Pt.getTime() - j.current.getTime() < 500)
      return !1;
    if (nt > 0)
      return !0;
    if (tt && tt.length > 0)
      return !1;
    if (Y.current && Pt.getTime() - Y.current.getTime() < l && nt === 0 || Ee)
      return Y.current = Pt, !1;
    for (; Ge; ) {
      if (Ge.scrollHeight > Ge.clientHeight) {
        if (Ge.scrollTop !== 0)
          return Y.current = new Date(), !1;
        if (Ge.getAttribute("role") === "dialog")
          return !0;
      }
      Ge = Ge.parentNode;
    }
    return !0;
  }
  function le(Ne) {
    if (K) {
      let Ee = B.current - Ne.screenY, Ie = Ee > 0;
      if (s && ue === 0 && !u || !D.current && !pe(Ne.target, Ie))
        return;
      if (te.current.classList.add(Bp), D.current = !0, ct(te.current, { transition: "none" }), ct(F.current, { transition: "none" }), s && ge({ draggedDistance: Ee }), Ie && !s) {
        let Wt = mD(Ee);
        ct(te.current, { transform: `translate3d(0, ${Math.min(Wt * -1, 0)}px, 0)` });
        return;
      }
      let Ge = Math.abs(Ee), tt = document.querySelector("[vaul-drawer-wrapper]"), nt = Ge / ve.current, Pt = Te(Ge, Ie);
      Pt !== null && (nt = Pt);
      let $r = 1 - nt;
      if (($e || d && ue === d - 1) && (o == null || o(Ne, nt), ct(F.current, { opacity: `${$r}`, transition: "none" }, !0)), tt && F.current && r) {
        let Wt = Math.min(z() + nt * (1 - z()), 1), Xn = 8 - nt * 8, qr = Math.max(0, 14 - nt * 14);
        ct(tt, { borderRadius: `${Xn}px`, transform: `scale(${Wt}) translate3d(0, ${qr}px, 0)`, transition: "none" }, !0);
      }
      s || ct(te.current, { transform: `translate3d(0, ${Ge}px, 0)` });
    }
  }
  S.useEffect(() => () => {
    We(!1), T();
  }, []), S.useEffect(() => {
    var Ne;
    function Ee() {
      var Ie;
      if (!te.current)
        return;
      let Ge = document.activeElement;
      if (hi(Ge) || q.current) {
        let tt = ((Ie = window.visualViewport) == null ? void 0 : Ie.height) || 0, nt = window.innerHeight - tt, Pt = te.current.getBoundingClientRect().height || 0;
        me.current || (me.current = Pt);
        let $r = te.current.getBoundingClientRect().top;
        if (Math.abs(oe.current - nt) > 60 && (q.current = !q.current), s && s.length > 0 && U && ue) {
          let Wt = U[ue] || 0;
          nt += Wt;
        }
        if (oe.current = nt, Pt > tt || q.current) {
          let Wt = te.current.getBoundingClientRect().height, Xn = Wt;
          Wt > tt && (Xn = tt - Wp), h ? te.current.style.height = `${Wt - Math.max(nt, 0)}px` : te.current.style.height = `${Math.max(Xn, tt - $r)}px`;
        } else
          te.current.style.height = `${me.current}px`;
        s && s.length > 0 && !q.current ? te.current.style.bottom = "0px" : te.current.style.bottom = `${Math.max(nt, 0)}px`;
      }
    }
    return (Ne = window.visualViewport) == null || Ne.addEventListener("resize", Ee), () => {
      var Ie;
      return (Ie = window.visualViewport) == null ? void 0 : Ie.removeEventListener("resize", Ee);
    };
  }, [ue, s, U]);
  function ae() {
    te.current && (g == null || g(), ct(te.current, { transform: "translate3d(0, 100%, 0)", transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), ct(F.current, { opacity: "0", transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), We(!1), setTimeout(() => {
      N(!1), y(!1);
    }, 300), setTimeout(() => {
      s && ne(s[0]);
    }, et.DURATION * 1e3));
  }
  S.useEffect(() => {
    if (!b && r) {
      let Ne = setTimeout(() => {
        Cs(document.body);
      }, 200);
      return () => clearTimeout(Ne);
    }
  }, [b, r]), S.useEffect(() => {
    e ? (y(!0), $(!0)) : ae();
  }, [e]), S.useEffect(() => {
    M && (t == null || t(b));
  }, [b]), S.useEffect(() => {
    R(!0);
  }, []);
  function _e() {
    if (!te.current)
      return;
    let Ne = document.querySelector("[vaul-drawer-wrapper]"), Ee = Ss(te.current);
    ct(te.current, { transform: "translate3d(0, 0, 0)", transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), ct(F.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, opacity: "1" }), r && Ee && Ee > 0 && b && ct(Ne, { borderRadius: `${zp}px`, overflow: "hidden", transform: `scale(${z()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top", transitionProperty: "transform, border-radius", transitionDuration: `${et.DURATION}s`, transitionTimingFunction: `cubic-bezier(${et.EASE.join(",")})` }, !0);
  }
  function He(Ne) {
    var Ee;
    if (!K || !te.current)
      return;
    D.current && hi(Ne.target) && Ne.target.blur(), te.current.classList.remove(Bp), D.current = !1, G(!1), V.current = new Date();
    let Ie = Ss(te.current);
    if (!pe(Ne.target, !1) || !Ie || Number.isNaN(Ie) || I.current === null)
      return;
    let Ge = V.current.getTime() - I.current.getTime(), tt = B.current - Ne.screenY, nt = Math.abs(tt) / Ge;
    if (nt > 0.05 && (Z(!0), setTimeout(() => {
      Z(!1);
    }, 200)), s) {
      he({ draggedDistance: tt, closeDrawer: ae, velocity: nt, dismissible: u }), a == null || a(Ne, !0);
      return;
    }
    if (tt > 0) {
      _e(), a == null || a(Ne, !0);
      return;
    }
    if (nt > a0) {
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
    b && (j.current = new Date(), We(!0));
  }, [b]), S.useEffect(() => {
    E && te.current.querySelectorAll("*").forEach((Ne) => {
      let Ee = Ne;
      (Ee.scrollHeight > Ee.clientHeight || Ee.scrollWidth > Ee.clientWidth) && Ee.classList.add("vaul-scrollable");
    });
  }, [E]);
  function We(Ne) {
    let Ee = document.querySelector("[vaul-drawer-wrapper]");
    !Ee || !r || (Ne ? (ct(document.body, { background: "black" }, !0), ct(Ee, { borderRadius: `${zp}px`, overflow: "hidden", transform: `scale(${z()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top", transitionProperty: "transform, border-radius", transitionDuration: `${et.DURATION}s`, transitionTimingFunction: `cubic-bezier(${et.EASE.join(",")})` })) : (Cs(Ee, "overflow"), Cs(Ee, "transform"), Cs(Ee, "borderRadius"), ct(Ee, { transitionProperty: "transform, border-radius", transitionDuration: `${et.DURATION}s`, transitionTimingFunction: `cubic-bezier(${et.EASE.join(",")})` })));
  }
  function It(Ne) {
    let Ee = Ne ? (window.innerWidth - _r) / window.innerWidth : 1, Ie = Ne ? -_r : 0;
    k.current && window.clearTimeout(k.current), ct(te.current, { transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, transform: `scale(${Ee}) translate3d(0, ${Ie}px, 0)` }), !Ne && te.current && (k.current = setTimeout(() => {
      ct(te.current, { transition: "none", transform: `translate3d(0, ${Ss(te.current)}px, 0)` });
    }, 500));
  }
  function qn(Ne, Ee) {
    if (Ee < 0)
      return;
    let Ie = (window.innerWidth - _r) / window.innerWidth, Ge = Ie + Ee * (1 - Ie), tt = -_r + Ee * _r;
    ct(te.current, { transform: `scale(${Ge}) translate3d(0, ${tt}px, 0)`, transition: "none" });
  }
  function Lt(Ne, Ee) {
    let Ie = Ee ? (window.innerWidth - _r) / window.innerWidth : 1, Ge = Ee ? -_r : 0;
    Ee && ct(te.current, { transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, transform: `scale(${Ie}) translate3d(0, ${Ge}px, 0)` });
  }
  return S.createElement(ji, { modal: v, onOpenChange: (Ne) => {
    if (e !== void 0) {
      t == null || t(Ne);
      return;
    }
    Ne ? ($(!0), y(Ne)) : ae();
  }, open: b }, S.createElement(e0.Provider, { value: { visible: E, activeSnapPoint: se, snapPoints: s, setActiveSnapPoint: ne, drawerRef: te, overlayRef: F, scaleBackground: We, onOpenChange: t, onPress: J, setVisible: N, onRelease: He, onDrag: le, dismissible: u, isOpen: b, shouldFade: $e, closeDrawer: ae, onNestedDrag: qn, onNestedOpenChange: It, onNestedRelease: Lt, keyboardIsOpen: q, openProp: e, modal: v, snapPointsOffset: U } }, n));
}
var c0 = S.forwardRef(function({ children: e, ...t }, n) {
  let { overlayRef: r, snapPoints: o, onRelease: a, shouldFade: s, isOpen: i, visible: c } = Od(), l = r0(n, r), u = o && o.length > 0;
  return S.createElement(Do, { onMouseUp: a, ref: l, "vaul-drawer-visible": c ? "true" : "false", "vaul-overlay": "", "vaul-snap-points": i && u ? "true" : "false", "vaul-snap-points-overlay": i && s ? "true" : "false", ...t });
});
c0.displayName = "Drawer.Overlay";
var l0 = S.forwardRef(function({ onOpenAutoFocus: e, onPointerDownOutside: t, onAnimationEnd: n, style: r, ...o }, a) {
  let { drawerRef: s, onPress: i, onRelease: c, onDrag: l, dismissible: u, keyboardIsOpen: d, snapPointsOffset: p, visible: m, closeDrawer: h, modal: v, openProp: g, onOpenChange: x, setVisible: b } = Od(), y = r0(a, s);
  return S.useEffect(() => {
    b(!0);
  }, []), S.createElement(Ro, { onOpenAutoFocus: (_) => {
    e ? e(_) : (_.preventDefault(), s.current.focus());
  }, onPointerDown: i, onPointerDownOutside: (_) => {
    if (t == null || t(_), !v) {
      _.preventDefault();
      return;
    }
    d.current && (d.current = !1), _.preventDefault(), x == null || x(!1), !(!u || g !== void 0) && h();
  }, onPointerMove: l, onPointerUp: c, ref: y, style: p && p.length > 0 ? { "--snap-point-height": `${p[0]}px`, ...r } : r, ...o, "vaul-drawer": "", "vaul-drawer-visible": m ? "true" : "false" });
});
l0.displayName = "Drawer.Content";
function yD({ onDrag: e, onOpenChange: t, ...n }) {
  let { onNestedDrag: r, onNestedOpenChange: o, onNestedRelease: a } = Od();
  if (!r)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return S.createElement(i0, { nested: !0, onClose: () => {
    o(!1);
  }, onDrag: (s, i) => {
    r(s, i), e == null || e(s, i);
  }, onOpenChange: (s) => {
    s && o(s), t == null || t(s);
  }, onRelease: a, ...n });
}
var vn = { Root: i0, NestedRoot: yD, Content: l0, Overlay: c0, Trigger: Ai, Portal: Mo, Close: Io, Title: jo, Description: Ao };
const wD = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  vn.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
wD.displayName = "Drawer";
const lR = vn.Trigger, $D = vn.Portal, uR = vn.Close, u0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  vn.Overlay,
  {
    ref: n,
    className: L("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
u0.displayName = vn.Overlay.displayName;
const _D = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs($D, { children: [
  /* @__PURE__ */ f.exports.jsx(u0, {}),
  /* @__PURE__ */ f.exports.jsxs(
    vn.Content,
    {
      ref: r,
      className: L(
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
_D.displayName = "DrawerContent";
const CD = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: L("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
CD.displayName = "DrawerHeader";
const SD = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: L("mt-auto flex flex-col gap-2 p-4", e),
    ...t
  }
);
SD.displayName = "DrawerFooter";
const ED = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  vn.Title,
  {
    ref: n,
    className: L(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
ED.displayName = vn.Title.displayName;
const ND = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  vn.Description,
  {
    ref: n,
    className: L("text-sm text-muted-foreground", e),
    ...t
  }
));
ND.displayName = vn.Description.displayName;
const dR = ({ children: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: "app-layout", children: e });
export {
  b8 as Accordion,
  RT as AccordionContent,
  MT as AccordionItem,
  DT as AccordionTrigger,
  h8 as AlertDialog,
  aT as AlertDialogAction,
  sT as AlertDialogCancel,
  eT as AlertDialogContent,
  oT as AlertDialogDescription,
  nT as AlertDialogFooter,
  tT as AlertDialogHeader,
  rT as AlertDialogTitle,
  v8 as AlertDialogTrigger,
  dR as AppLayout,
  l8 as AspectRatio,
  La as Avatar,
  Fa as AvatarFallback,
  vo as AvatarImage,
  Et as Badge,
  oR as BottomNavigation,
  Ue as Button,
  Ko as CI_TYPES,
  w$ as Calendar,
  $v as Card,
  YE as CardContent,
  HE as CardDescription,
  KE as CardFooter,
  WE as CardHeader,
  BE as CardTitle,
  XM as Carousel,
  QM as CarouselContent,
  JM as CarouselItem,
  tD as CarouselNext,
  eD as CarouselPrevious,
  Ev as Checkbox,
  J8 as CodeVerification,
  x8 as Collapsible,
  w8 as CollapsibleContent,
  y8 as CollapsibleTrigger,
  G7 as ComboBox,
  rR as ComboxCheckbox,
  Wn as Command,
  c8 as CommandDialog,
  dr as CommandEmpty,
  dn as CommandGroup,
  ur as CommandInput,
  fn as CommandItem,
  es as CommandList,
  Yi as CommandSeparator,
  iP as CommandShortcut,
  UD as ContextMenu,
  WC as ContextMenuCheckboxItem,
  UC as ContextMenuContent,
  WD as ContextMenuGroup,
  zC as ContextMenuItem,
  HC as ContextMenuLabel,
  BD as ContextMenuPortal,
  YD as ContextMenuRadioGroup,
  BC as ContextMenuRadioItem,
  YC as ContextMenuSeparator,
  KC as ContextMenuShortcut,
  HD as ContextMenuSub,
  VC as ContextMenuSubContent,
  FC as ContextMenuSubTrigger,
  zD as ContextMenuTrigger,
  cR as D4TCardsList,
  q8 as D4TTable,
  MS as Dialog,
  nv as DialogContent,
  AS as DialogDescription,
  RS as DialogFooter,
  DS as DialogHeader,
  jS as DialogTitle,
  GD as DialogTrigger,
  wD as Drawer,
  uR as DrawerClose,
  _D as DrawerContent,
  ND as DrawerDescription,
  SD as DrawerFooter,
  CD as DrawerHeader,
  u0 as DrawerOverlay,
  $D as DrawerPortal,
  ED as DrawerTitle,
  lR as DrawerTrigger,
  t8 as DropdownMenu,
  ON as DropdownMenuCheckboxItem,
  PN as DropdownMenuContent,
  r8 as DropdownMenuGroup,
  TN as DropdownMenuItem,
  MN as DropdownMenuLabel,
  o8 as DropdownMenuPortal,
  s8 as DropdownMenuRadioGroup,
  kN as DropdownMenuRadioItem,
  DN as DropdownMenuSeparator,
  RN as DropdownMenuShortcut,
  a8 as DropdownMenuSub,
  NN as DropdownMenuSubContent,
  EN as DropdownMenuSubTrigger,
  n8 as DropdownMenuTrigger,
  Bh as Form,
  Za as FormControl,
  ko as FormDescription,
  Hr as FormField,
  yr as FormItem,
  Yr as FormLabel,
  pS as FormMessage,
  nR as GenericCombobox,
  X8 as GenericSelect,
  C8 as HoverCard,
  YT as HoverCardContent,
  S8 as HoverCardTrigger,
  U7 as ImageWithZoom,
  Hu as Input,
  ZD as InputPID,
  fa as InputUI,
  Pn as Label,
  E8 as LoaderDots,
  b6 as Menubar,
  C6 as MenubarCheckboxItem,
  $6 as MenubarContent,
  T8 as MenubarGroup,
  _6 as MenubarItem,
  E6 as MenubarLabel,
  P8 as MenubarMenu,
  O8 as MenubarPortal,
  M8 as MenubarRadioGroup,
  S6 as MenubarRadioItem,
  N6 as MenubarSeparator,
  P6 as MenubarShortcut,
  k8 as MenubarSub,
  w6 as MenubarSubContent,
  y6 as MenubarSubTrigger,
  x6 as MenubarTrigger,
  tR as MultipleImages,
  $x as NavLink,
  Tk as NavLinkNested,
  tO as NavigationMenu,
  aO as NavigationMenuContent,
  sO as NavigationMenuIndicator,
  R8 as NavigationMenuItem,
  j8 as NavigationMenuLink,
  nO as NavigationMenuList,
  oO as NavigationMenuTrigger,
  Pb as NavigationMenuViewport,
  lc as PHONE_LINE_CODES,
  Un as Popover,
  _n as PopoverContent,
  zn as PopoverTrigger,
  vO as Progress,
  DO as RadioGroup,
  RO as RadioGroupItem,
  PP as ScrollArea,
  xg as ScrollBar,
  Zu as Select,
  Ui as SelectContent,
  VE as SelectGroup,
  zi as SelectItem,
  UE as SelectLabel,
  zE as SelectSeparator,
  Vi as SelectTrigger,
  qu as SelectValue,
  qa as Separator,
  d8 as Sheet,
  p8 as SheetClose,
  OP as SheetContent,
  RP as SheetDescription,
  MP as SheetFooter,
  kP as SheetHeader,
  DP as SheetTitle,
  f8 as SheetTrigger,
  H8 as Sidebar,
  Y8 as SidebarContent,
  Pk as SidebarFooter,
  sk as SidebarHeader,
  St as Skeleton,
  o3 as Slider,
  Ql as Spinner,
  Q8 as SwatchesPicker,
  q3 as Switch,
  _g as TableBody,
  AP as TableCaption,
  td as TableCell,
  jP as TableFooter,
  Cg as TableHead,
  $g as TableHeader,
  Zi as TableRow,
  ed as TableUI,
  V8 as Tabs,
  g3 as TabsContent,
  h3 as TabsList,
  v3 as TabsTrigger,
  XD as TextArea,
  lv as TextareaUI,
  y3 as Toggle,
  Nk as ToggleTheme,
  jr as Tooltip,
  fr as TooltipContent,
  Rr as TooltipProvider,
  Ar as TooltipTrigger,
  eR as UploadImage,
  D$ as badgeVariants,
  aa as buttonVariants,
  zo as camelToSnake,
  L as cn,
  Rs as convertBytes,
  cc as convertHexToRGBA,
  OD as fetcher,
  DD as formatCI,
  Mf as formatCITypes,
  ID as formatCodePhoneLines,
  aR as formatListPagination,
  K8 as formatPagination,
  AD as formatPhone,
  jD as formatPhoneNumber,
  RD as formatRIF,
  _p as generateUUID,
  Jc as generateUUIDToList,
  MD as getMultiOpacityColor,
  sR as initialListPagination,
  G8 as initialPagination,
  Z8 as insertColumn,
  iR as insertColumnList,
  rM as listCamelToSnake,
  rO as navigationMenuTriggerStyle,
  kD as simulateFetch,
  x3 as toggleVariants,
  Ri as useFormField,
  nc as useSidebar
};
//# sourceMappingURL=index.es.js.map
