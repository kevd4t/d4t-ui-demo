import * as C from "react";
import S, { useCallback as fe, forwardRef as j, Children as Ft, isValidElement as ar, createElement as w, cloneElement as Co, Fragment as Zt, createContext as bt, useContext as Qe, useState as X, useEffect as Q, useRef as H, useMemo as kt, useLayoutEffect as Ma, useReducer as hi, useDebugValue as b0, useImperativeHandle as x0, Component as y0, createRef as Wo } from "react";
import * as w0 from "react-dom";
import Kl, { flushSync as vi, createPortal as Gl } from "react-dom";
var gt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $0(e) {
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
var Id;
function _0() {
  if (Id)
    return Bo;
  Id = 1;
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
var Ld;
function C0() {
  return Ld || (Ld = 1, process.env.NODE_ENV !== "production" && function() {
    var e = S, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, v = "@@iterator";
    function g(O) {
      if (O === null || typeof O != "object")
        return null;
      var ie = h && O[h] || O[v];
      return typeof ie == "function" ? ie : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(O) {
      {
        for (var ie = arguments.length, be = new Array(ie > 1 ? ie - 1 : 0), Me = 1; Me < ie; Me++)
          be[Me - 1] = arguments[Me];
        y("error", O, be);
      }
    }
    function y(O, ie, be) {
      {
        var Me = b.ReactDebugCurrentFrame, Be = Me.getStackAddendum();
        Be !== "" && (ie += "%s", be = be.concat([Be]));
        var Je = be.map(function(Ve) {
          return String(Ve);
        });
        Je.unshift("Warning: " + ie), Function.prototype.apply.call(console[O], console, Je);
      }
    }
    var _ = !1, $ = !1, E = !1, P = !1, D = !1, R;
    R = Symbol.for("react.module.reference");
    function K(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === r || O === a || D || O === o || O === l || O === u || P || O === m || _ || $ || E || typeof O == "object" && O !== null && (O.$$typeof === p || O.$$typeof === d || O.$$typeof === s || O.$$typeof === i || O.$$typeof === c || // This needs to include all possible module reference object
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
      if (typeof O.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
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
    var L = Object.assign, A = 0, I, V, Y, M, k, B, q;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function te() {
      {
        if (A === 0) {
          I = console.log, V = console.info, Y = console.warn, M = console.error, k = console.group, B = console.groupCollapsed, q = console.groupEnd;
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
    function ve() {
      {
        if (A--, A === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, O, {
              value: I
            }),
            info: L({}, O, {
              value: V
            }),
            warn: L({}, O, {
              value: Y
            }),
            error: L({}, O, {
              value: M
            }),
            group: L({}, O, {
              value: k
            }),
            groupCollapsed: L({}, O, {
              value: B
            }),
            groupEnd: L({}, O, {
              value: q
            })
          });
        }
        A < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var me = b.ReactCurrentDispatcher, re;
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
            } catch (Tn) {
              Me = Tn;
            }
            Reflect.construct(O, [], Ve);
          } else {
            try {
              Ve.call();
            } catch (Tn) {
              Me = Tn;
            }
            O.call(Ve.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Tn) {
            Me = Tn;
          }
          O();
        }
      } catch (Tn) {
        if (Tn && Me && typeof Tn.stack == "string") {
          for (var Le = Tn.stack.split(`
`), Pt = Me.stack.split(`
`), pt = Le.length - 1, ht = Pt.length - 1; pt >= 1 && ht >= 0 && Le[pt] !== Pt[ht]; )
            ht--;
          for (; pt >= 1 && ht >= 0; pt--, ht--)
            if (Le[pt] !== Pt[ht]) {
              if (pt !== 1 || ht !== 1)
                do
                  if (pt--, ht--, ht < 0 || Le[pt] !== Pt[ht]) {
                    var Ht = `
` + Le[pt].replace(" at new ", " at ");
                    return O.displayName && Ht.includes("<anonymous>") && (Ht = Ht.replace("<anonymous>", O.displayName)), typeof O == "function" && ne.set(O, Ht), Ht;
                  }
                while (pt >= 1 && ht >= 0);
              break;
            }
        }
      } finally {
        ue = !1, me.current = Je, ve(), Error.prepareStackTrace = Be;
      }
      var Xr = O ? O.displayName || O.name : "", jd = Xr ? se(Xr) : "";
      return typeof O == "function" && ne.set(O, jd), jd;
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
    var T = Object.prototype.hasOwnProperty, z = {}, J = b.ReactDebugCurrentFrame;
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
                var Pt = Error((Me || "React class") + ": " + be + " type `" + Ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[Ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Pt.name = "Invariant Violation", Pt;
              }
              Le = O[Ve](ie, Ve, Me, be, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pt) {
              Le = pt;
            }
            Le && !(Le instanceof Error) && (pe(Be), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Me || "React class", be, Ve, typeof Le), pe(null)), Le instanceof Error && !(Le.message in z) && (z[Le.message] = !0, pe(Be), x("Failed %s type: %s", be, Le.message), pe(null));
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
        return jt(O), !1;
      } catch {
        return !0;
      }
    }
    function jt(O) {
      return "" + O;
    }
    function Zn(O) {
      if (We(O))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(O)), jt(O);
    }
    var It = b.ReactCurrentOwner, Ne = {
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
    function Nt(O, ie) {
      if (typeof O.ref == "string" && It.current && ie && It.current.stateNode !== ie) {
        var be = Z(It.current.type);
        Ge[be] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(It.current.type), O.ref), Ge[be] = !0);
      }
    }
    function wr(O, ie) {
      {
        var be = function() {
          Ee || (Ee = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        be.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: be,
          configurable: !0
        });
      }
    }
    function zt(O, ie) {
      {
        var be = function() {
          Ie || (Ie = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        be.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: be,
          configurable: !0
        });
      }
    }
    var qn = function(O, ie, be, Me, Be, Je, Ve) {
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
    function Zr(O, ie, be, Me, Be) {
      {
        var Je, Ve = {}, Le = null, Pt = null;
        be !== void 0 && (Zn(be), Le = "" + be), nt(ie) && (Zn(ie.key), Le = "" + ie.key), tt(ie) && (Pt = ie.ref, Nt(ie, Be));
        for (Je in ie)
          T.call(ie, Je) && !Ne.hasOwnProperty(Je) && (Ve[Je] = ie[Je]);
        if (O && O.defaultProps) {
          var pt = O.defaultProps;
          for (Je in pt)
            Ve[Je] === void 0 && (Ve[Je] = pt[Je]);
        }
        if (Le || Pt) {
          var ht = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          Le && wr(Ve, ht), Pt && zt(Ve, ht);
        }
        return qn(O, Le, Pt, Be, Me, It.current, Ve);
      }
    }
    var zo = b.ReactCurrentOwner, os = b.ReactDebugCurrentFrame;
    function Pn(O) {
      if (O) {
        var ie = O._owner, be = Te(O.type, O._source, ie ? ie.type : null);
        os.setExtraStackFrame(be);
      } else
        os.setExtraStackFrame(null);
    }
    var qr;
    qr = !1;
    function sc(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function kd() {
      {
        if (zo.current) {
          var O = Z(zo.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function u0(O) {
      {
        if (O !== void 0) {
          var ie = O.fileName.replace(/^.*[\\\/]/, ""), be = O.lineNumber;
          return `

Check your code at ` + ie + ":" + be + ".";
        }
        return "";
      }
    }
    var Md = {};
    function d0(O) {
      {
        var ie = kd();
        if (!ie) {
          var be = typeof O == "string" ? O : O.displayName || O.name;
          be && (ie = `

Check the top-level render call using <` + be + ">.");
        }
        return ie;
      }
    }
    function Dd(O, ie) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var be = d0(ie);
        if (Md[be])
          return;
        Md[be] = !0;
        var Me = "";
        O && O._owner && O._owner !== zo.current && (Me = " It was passed a child from " + Z(O._owner.type) + "."), Pn(O), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', be, Me), Pn(null);
      }
    }
    function Rd(O, ie) {
      {
        if (typeof O != "object")
          return;
        if (_e(O))
          for (var be = 0; be < O.length; be++) {
            var Me = O[be];
            sc(Me) && Dd(Me, ie);
          }
        else if (sc(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var Be = g(O);
          if (typeof Be == "function" && Be !== O.entries)
            for (var Je = Be.call(O), Ve; !(Ve = Je.next()).done; )
              sc(Ve.value) && Dd(Ve.value, ie);
        }
      }
    }
    function f0(O) {
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
        } else if (ie.PropTypes !== void 0 && !qr) {
          qr = !0;
          var Be = Z(ie);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Be || "Unknown");
        }
        typeof ie.getDefaultProps == "function" && !ie.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function p0(O) {
      {
        for (var ie = Object.keys(O.props), be = 0; be < ie.length; be++) {
          var Me = ie[be];
          if (Me !== "children" && Me !== "key") {
            Pn(O), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Me), Pn(null);
            break;
          }
        }
        O.ref !== null && (Pn(O), x("Invalid attribute `ref` supplied to `React.Fragment`."), Pn(null));
      }
    }
    function Ad(O, ie, be, Me, Be, Je) {
      {
        var Ve = K(O);
        if (!Ve) {
          var Le = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (Le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pt = u0(Be);
          Pt ? Le += Pt : Le += kd();
          var pt;
          O === null ? pt = "null" : _e(O) ? pt = "array" : O !== void 0 && O.$$typeof === t ? (pt = "<" + (Z(O.type) || "Unknown") + " />", Le = " Did you accidentally export a JSX literal instead of a component?") : pt = typeof O, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pt, Le);
        }
        var ht = Zr(O, ie, be, Be, Je);
        if (ht == null)
          return ht;
        if (Ve) {
          var Ht = ie.children;
          if (Ht !== void 0)
            if (Me)
              if (_e(Ht)) {
                for (var Xr = 0; Xr < Ht.length; Xr++)
                  Rd(Ht[Xr], O);
                Object.freeze && Object.freeze(Ht);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Rd(Ht, O);
        }
        return O === r ? p0(ht) : f0(ht), ht;
      }
    }
    function m0(O, ie, be) {
      return Ad(O, ie, be, !0);
    }
    function h0(O, ie, be) {
      return Ad(O, ie, be, !1);
    }
    var v0 = h0, g0 = m0;
    Ho.Fragment = r, Ho.jsx = v0, Ho.jsxs = g0;
  }()), Ho;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = _0() : e.exports = C0();
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
function S0(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Da(...e) {
  return (t) => e.forEach(
    (n) => S0(n, t)
  );
}
function Ce(...e) {
  return fe(Da(...e), e);
}
const bn = /* @__PURE__ */ j((e, t) => {
  const { children: n, ...r } = e, o = Ft.toArray(n), a = o.find(E0);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Ft.count(s) > 1 ? Ft.only(null) : /* @__PURE__ */ ar(s) ? s.props.children : null : c);
    return /* @__PURE__ */ w(tl, N({}, r, {
      ref: t
    }), /* @__PURE__ */ ar(s) ? /* @__PURE__ */ Co(s, void 0, i) : null);
  }
  return /* @__PURE__ */ w(tl, N({}, r, {
    ref: t
  }), n);
});
bn.displayName = "Slot";
const tl = /* @__PURE__ */ j((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ ar(n) ? /* @__PURE__ */ Co(n, {
    ...N0(r, n.props),
    ref: t ? Da(t, n.ref) : n.ref
  }) : Ft.count(n) > 1 ? Ft.only(null) : null;
});
tl.displayName = "SlotClone";
const Zl = ({ children: e }) => /* @__PURE__ */ w(Zt, null, e);
function E0(e) {
  return /* @__PURE__ */ ar(e) && e.type === Zl;
}
function N0(e, t) {
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
function Bp(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Bp(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Hp() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Bp(e)) && (r && (r += " "), r += t);
  return r;
}
const Fd = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Vd = Hp, So = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return Vd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], d = a == null ? void 0 : a[l];
    if (u === null)
      return null;
    const p = Fd(u) || Fd(d);
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
  return Vd(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function TD(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const OD = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, ic = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, kD = (e) => {
  const t = ic(e), n = ic(e, 0.1), r = ic(e, 0.3);
  return {
    colorOpacity1: t,
    colorOpacity2: n,
    colorOpacity3: r
  };
}, cc = {
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
}, MD = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), DD = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), RD = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), AD = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, Ds = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, jD = () => [...cc.DIGITAL, ...cc.MOVILNET, ...cc.MOVISTAR], Yo = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function P0() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Yp(t)) && (r && (r += " "), r += n);
  return r;
}
function Yp(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = Yp(e[r])) && (n && (n += " "), n += t);
  return n;
}
var ql = "-";
function T0(e) {
  var t = k0(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function a(i) {
    var c = i.split(ql);
    return c[0] === "" && c.length !== 1 && c.shift(), Kp(c, t) || O0(i);
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
function Kp(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? Kp(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var a = e.join(ql);
    return (s = t.validators.find(function(i) {
      var c = i.validator;
      return c(a);
    })) == null ? void 0 : s.classGroupId;
  }
}
var Ud = /^\[(.+)\]$/;
function O0(e) {
  if (Ud.test(e)) {
    var t = Ud.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function k0(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = D0(Object.entries(e.classGroups), n);
  return o.forEach(function(a) {
    var s = a[0], i = a[1];
    nl(i, r, s, t);
  }), r;
}
function nl(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var a = o === "" ? t : zd(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (M0(o)) {
        nl(o(r), t, n, r);
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
      nl(c, zd(t, i), n, r);
    });
  });
}
function zd(e, t) {
  var n = e;
  return t.split(ql).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function M0(e) {
  return e.isThemeGetter;
}
function D0(e, t) {
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
function R0(e) {
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
var Gp = "!";
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
    var m = i.length === 0 ? s : s.substring(l), h = m.startsWith(Gp), v = h ? m.substring(1) : m, g = u && u > l ? u - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
}
function j0(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function I0(e) {
  return {
    cache: R0(e.cacheSize),
    splitModifiers: A0(e),
    ...T0(e)
  };
}
var L0 = /\s+/;
function F0(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(L0).map(function(s) {
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
    var h = j0(c).join(":"), v = l ? h + Gp : h;
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
function V0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, a, s = i;
  function i(l) {
    var u = t[0], d = t.slice(1), p = d.reduce(function(m, h) {
      return h(m);
    }, u());
    return r = I0(p), o = r.cache.get, a = r.cache.set, s = c, c(l);
  }
  function c(l) {
    var u = o(l);
    if (u)
      return u;
    var d = F0(l, r);
    return a(l, d), d;
  }
  return function() {
    return s(P0.apply(null, arguments));
  };
}
function rt(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Zp = /^\[(?:([a-z-]+):)?(.+)\]$/i, U0 = /^\d+\/\d+$/, z0 = /* @__PURE__ */ new Set(["px", "full", "screen"]), W0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, B0 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, H0 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Qt(e) {
  return Sr(e) || z0.has(e) || U0.test(e) || rl(e);
}
function rl(e) {
  return Vr(e, "length", X0);
}
function Y0(e) {
  return Vr(e, "size", qp);
}
function K0(e) {
  return Vr(e, "position", qp);
}
function G0(e) {
  return Vr(e, "url", Q0);
}
function as(e) {
  return Vr(e, "number", Sr);
}
function Sr(e) {
  return !Number.isNaN(Number(e));
}
function Z0(e) {
  return e.endsWith("%") && Sr(e.slice(0, -1));
}
function Ko(e) {
  return Wd(e) || Vr(e, "number", Wd);
}
function Fe(e) {
  return Zp.test(e);
}
function Go() {
  return !0;
}
function Xn(e) {
  return W0.test(e);
}
function q0(e) {
  return Vr(e, "", J0);
}
function Vr(e, t, n) {
  var r = Zp.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function X0(e) {
  return B0.test(e);
}
function qp() {
  return !1;
}
function Q0(e) {
  return e.startsWith("url(");
}
function Wd(e) {
  return Number.isInteger(Number(e));
}
function J0(e) {
  return H0.test(e);
}
function ey() {
  var e = rt("colors"), t = rt("spacing"), n = rt("blur"), r = rt("brightness"), o = rt("borderColor"), a = rt("borderRadius"), s = rt("borderSpacing"), i = rt("borderWidth"), c = rt("contrast"), l = rt("grayscale"), u = rt("hueRotate"), d = rt("invert"), p = rt("gap"), m = rt("gradientColorStops"), h = rt("gradientColorStopPositions"), v = rt("inset"), g = rt("margin"), b = rt("opacity"), x = rt("padding"), y = rt("saturate"), _ = rt("scale"), $ = rt("sepia"), E = rt("skew"), P = rt("space"), D = rt("translate"), R = function() {
    return ["auto", "contain", "none"];
  }, K = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, G = function() {
    return ["auto", Fe, t];
  }, W = function() {
    return [Fe, t];
  }, Z = function() {
    return ["", Qt];
  }, L = function() {
    return ["auto", Sr, Fe];
  }, A = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, I = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, V = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, Y = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, M = function() {
    return ["", "0", Fe];
  }, k = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, B = function() {
    return [Sr, as];
  }, q = function() {
    return [Sr, Fe];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Go],
      spacing: [Qt],
      blur: ["none", "", Xn, Fe],
      brightness: B(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Xn, Fe],
      borderSpacing: W(),
      borderWidth: Z(),
      contrast: B(),
      grayscale: M(),
      hueRotate: q(),
      invert: M(),
      gap: W(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Z0, rl],
      inset: G(),
      margin: G(),
      opacity: B(),
      padding: W(),
      saturate: B(),
      scale: B(),
      sepia: M(),
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
        columns: [Xn]
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
        object: [].concat(A(), [Fe])
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
        z: ["auto", Ko]
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
        grow: M()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: M()
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
        }, Fe]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
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
        }, Fe]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
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
        w: ["auto", "min", "max", "fit", Fe, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", Fe, Qt]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Xn]
        }, Xn, Fe]
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
        "min-h": ["min", "max", "fit", Fe, Qt]
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
        text: ["base", Xn, rl]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", as]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Fe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Sr, as]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Fe, Qt]
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
        decoration: ["auto", "from-font", Qt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Fe, Qt]
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
        bg: [].concat(A(), [K0])
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
        bg: ["auto", "cover", "contain", Y0]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, G0]
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
        "outline-offset": [Fe, Qt]
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
        shadow: ["", "inner", "none", Xn, q0]
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
        opacity: [b]
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
        "drop-shadow": ["", "none", Xn, Fe]
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
        rotate: [Ko, Fe]
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
        stroke: [Qt, as]
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
var ty = /* @__PURE__ */ V0(ey);
function F(...e) {
  return ty(Hp(e));
}
const Xl = ({ className: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: F(`spinner h-4 w-4 ${e}`) }), oa = So(
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
    const c = r ? bn : "button";
    return /* @__PURE__ */ f.exports.jsx(
      c,
      {
        className: F(oa({ variant: t, size: n, className: e })),
        ref: i,
        ...s,
        children: o ? /* @__PURE__ */ f.exports.jsx(Xl, {}) : a
      }
    );
  }
);
Ue.displayName = "Button";
var ny = {
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
const ry = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), oy = (e, t) => {
  const n = j(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: s, children: i, ...c }, l) => w(
      "svg",
      {
        ref: l,
        ...ny,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(a) * 24 / Number(o) : a,
        className: `lucide lucide-${ry(e)}`,
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
var ft = oy;
const ay = ft("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]), sy = ft("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]), cn = ft("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), aa = ft("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), Ql = ft("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), Eo = ft("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), Bd = ft("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), ol = ft("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), gi = ft("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), ss = ft("EyeOff", [
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
]), is = ft("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]), bi = ft("ImageOff", [
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
]), Xp = ft("ImagePlus", [
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
]), Qp = ft("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]), iy = ft("PanelLeftClose", [
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
]), cy = ft("PanelLeftOpen", [
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
]), Jp = ft("PanelLeft", [
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
]), em = ft("PenSquare", [
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
]), Rs = ft("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), tm = ft("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]), ly = ft("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), xi = ft("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function lc(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
function Zo(e) {
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
function qo(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    var s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? dy(i, function(d) {
      return d.test(s);
    }) : uy(i, function(d) {
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
function uy(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function dy(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function fy(e) {
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
function po(e) {
  return po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, po(e);
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
function je(e) {
  Pe(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || po(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Gt(e, t) {
  Pe(2, arguments);
  var n = je(e), r = xt(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function xn(e, t) {
  Pe(2, arguments);
  var n = je(e), r = xt(t);
  if (isNaN(r))
    return new Date(NaN);
  if (!r)
    return n;
  var o = n.getDate(), a = new Date(n.getTime());
  a.setMonth(n.getMonth() + r + 1, 0);
  var s = a.getDate();
  return o >= s ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), o), n);
}
function py(e, t) {
  Pe(2, arguments);
  var n = je(e).getTime(), r = xt(t);
  return new Date(n + r);
}
var my = {};
function hr() {
  return my;
}
function yn(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = hr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = je(e), m = p.getDay(), h = (m < d ? 7 : 0) + m - d;
  return p.setDate(p.getDate() - h), p.setHours(0, 0, 0, 0), p;
}
function Or(e) {
  return Pe(1, arguments), yn(e, {
    weekStartsOn: 1
  });
}
function hy(e) {
  Pe(1, arguments);
  var t = je(e), n = t.getFullYear(), r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = Or(r), a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var s = Or(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function vy(e) {
  Pe(1, arguments);
  var t = hy(e), n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = Or(n);
  return r;
}
function sa(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function mo(e) {
  Pe(1, arguments);
  var t = je(e);
  return t.setHours(0, 0, 0, 0), t;
}
var gy = 864e5;
function Rn(e, t) {
  Pe(2, arguments);
  var n = mo(e), r = mo(t), o = n.getTime() - sa(n), a = r.getTime() - sa(r);
  return Math.round((o - a) / gy);
}
function al(e, t) {
  Pe(2, arguments);
  var n = xt(t), r = n * 7;
  return Gt(e, r);
}
function by(e, t) {
  Pe(2, arguments);
  var n = xt(t);
  return xn(e, n * 12);
}
function xy(e) {
  Pe(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (po(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = je(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || new Date(NaN);
}
function yy(e) {
  Pe(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (po(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = je(r);
    (n === void 0 || n > o || isNaN(o.getDate())) && (n = o);
  }), n || new Date(NaN);
}
function Lt(e, t) {
  Pe(2, arguments);
  var n = mo(e), r = mo(t);
  return n.getTime() === r.getTime();
}
function Jl(e) {
  return Pe(1, arguments), e instanceof Date || po(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function wy(e) {
  if (Pe(1, arguments), !Jl(e) && typeof e != "number")
    return !1;
  var t = je(e);
  return !isNaN(Number(t));
}
function ia(e, t) {
  Pe(2, arguments);
  var n = je(e), r = je(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
var $y = 6048e5;
function _y(e, t, n) {
  Pe(2, arguments);
  var r = yn(e, n), o = yn(t, n), a = r.getTime() - sa(r), s = o.getTime() - sa(o);
  return Math.round((a - s) / $y);
}
function eu(e) {
  Pe(1, arguments);
  var t = je(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Vt(e) {
  Pe(1, arguments);
  var t = je(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Cy(e) {
  Pe(1, arguments);
  var t = je(e), n = new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function tu(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = hr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = je(e), m = p.getDay(), h = (m < d ? -7 : 0) + 6 - (m - d);
  return p.setDate(p.getDate() + h), p.setHours(23, 59, 59, 999), p;
}
function nm(e) {
  return Pe(1, arguments), tu(e, {
    weekStartsOn: 1
  });
}
function Sy(e, t) {
  Pe(2, arguments);
  var n = xt(t);
  return py(e, -n);
}
var Ey = 864e5;
function Ny(e) {
  Pe(1, arguments);
  var t = je(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / Ey) + 1;
}
function As(e) {
  Pe(1, arguments);
  var t = 1, n = je(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function rm(e) {
  Pe(1, arguments);
  var t = je(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = As(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = As(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Py(e) {
  Pe(1, arguments);
  var t = rm(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = As(n);
  return r;
}
var Ty = 6048e5;
function Oy(e) {
  Pe(1, arguments);
  var t = je(e), n = As(t).getTime() - Py(t).getTime();
  return Math.round(n / Ty) + 1;
}
function js(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = hr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = je(e), m = p.getUTCDay(), h = (m < d ? 7 : 0) + m - d;
  return p.setUTCDate(p.getUTCDate() - h), p.setUTCHours(0, 0, 0, 0), p;
}
function om(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = je(e), d = u.getUTCFullYear(), p = hr(), m = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setUTCFullYear(d + 1, 0, m), h.setUTCHours(0, 0, 0, 0);
  var v = js(h, t), g = new Date(0);
  g.setUTCFullYear(d, 0, m), g.setUTCHours(0, 0, 0, 0);
  var b = js(g, t);
  return u.getTime() >= v.getTime() ? d + 1 : u.getTime() >= b.getTime() ? d : d - 1;
}
function ky(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = hr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = om(e, t), m = new Date(0);
  m.setUTCFullYear(p, 0, d), m.setUTCHours(0, 0, 0, 0);
  var h = js(m, t);
  return h;
}
var My = 6048e5;
function Dy(e, t) {
  Pe(1, arguments);
  var n = je(e), r = js(n, t).getTime() - ky(n, t).getTime();
  return Math.round(r / My) + 1;
}
function Ze(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var Ry = {
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
const Qn = Ry;
var Qr = {
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
    return Qn.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, o) {
    var a = om(t, o), s = a > 0 ? a : 1 - a;
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
    var r = rm(t);
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
        return Qn.M(t, n);
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
    var a = Dy(t, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : Ze(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var o = Oy(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : Ze(o, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Qn.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var o = Ny(t);
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
    return Qn.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Qn.H(t, n);
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
    }) : Qn.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Qn.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return Qn.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (n) {
      case "X":
        return Yd(s);
      case "XXXX":
      case "XX":
        return _r(s);
      case "XXXXX":
      case "XXX":
      default:
        return _r(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return Yd(s);
      case "xxxx":
      case "xx":
        return _r(s);
      case "xxxxx":
      case "xxx":
      default:
        return _r(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Hd(s, ":");
      case "OOOO":
      default:
        return "GMT" + _r(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Hd(s, ":");
      case "zzzz":
      default:
        return "GMT" + _r(s, ":");
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
function Hd(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var s = t || "";
  return n + String(o) + s + Ze(a, 2);
}
function Yd(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + Ze(Math.abs(e) / 60, 2);
  }
  return _r(e, t);
}
function _r(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", o = Math.abs(e), a = Ze(Math.floor(o / 60), 2), s = Ze(o % 60, 2);
  return r + a + n + s;
}
const jy = Ay;
var Kd = function(t, n) {
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
}, am = function(t, n) {
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
}, Iy = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return Kd(t, n);
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
  return s.replace("{{date}}", Kd(o, n)).replace("{{time}}", am(a, n));
}, Ly = {
  p: am,
  P: Iy
};
const Fy = Ly;
var Vy = ["D", "DD"], Uy = ["YY", "YYYY"];
function zy(e) {
  return Vy.indexOf(e) !== -1;
}
function Wy(e) {
  return Uy.indexOf(e) !== -1;
}
function Gd(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var By = {
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
}, Hy = function(t, n, r) {
  var o, a = By[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const Yy = Hy;
var Ky = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Gy = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Zy = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, qy = {
  date: lc({
    formats: Ky,
    defaultWidth: "full"
  }),
  time: lc({
    formats: Gy,
    defaultWidth: "full"
  }),
  dateTime: lc({
    formats: Zy,
    defaultWidth: "full"
  })
};
const Xy = qy;
var Qy = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Jy = function(t, n, r, o) {
  return Qy[t];
};
const e1 = Jy;
var t1 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, n1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, r1 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, o1 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, a1 = {
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
}, s1 = {
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
}, i1 = function(t, n) {
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
}, c1 = {
  ordinalNumber: i1,
  era: Zo({
    values: t1,
    defaultWidth: "wide"
  }),
  quarter: Zo({
    values: n1,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Zo({
    values: r1,
    defaultWidth: "wide"
  }),
  day: Zo({
    values: o1,
    defaultWidth: "wide"
  }),
  dayPeriod: Zo({
    values: a1,
    defaultWidth: "wide",
    formattingValues: s1,
    defaultFormattingWidth: "wide"
  })
};
const l1 = c1;
var u1 = /^(\d+)(th|st|nd|rd)?/i, d1 = /\d+/i, f1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, p1 = {
  any: [/^b/i, /^(a|c)/i]
}, m1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, h1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, v1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, g1 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, b1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, x1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, y1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, w1 = {
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
}, $1 = {
  ordinalNumber: fy({
    matchPattern: u1,
    parsePattern: d1,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: qo({
    matchPatterns: f1,
    defaultMatchWidth: "wide",
    parsePatterns: p1,
    defaultParseWidth: "any"
  }),
  quarter: qo({
    matchPatterns: m1,
    defaultMatchWidth: "wide",
    parsePatterns: h1,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: qo({
    matchPatterns: v1,
    defaultMatchWidth: "wide",
    parsePatterns: g1,
    defaultParseWidth: "any"
  }),
  day: qo({
    matchPatterns: b1,
    defaultMatchWidth: "wide",
    parsePatterns: x1,
    defaultParseWidth: "any"
  }),
  dayPeriod: qo({
    matchPatterns: y1,
    defaultMatchWidth: "any",
    parsePatterns: w1,
    defaultParseWidth: "any"
  })
};
const _1 = $1;
var C1 = {
  code: "en-US",
  formatDistance: Yy,
  formatLong: Xy,
  formatRelative: e1,
  localize: l1,
  match: _1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const sm = C1;
var S1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, E1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, N1 = /^'([^]*?)'?$/, P1 = /''/g, T1 = /[a-zA-Z]/;
function Ur(e, t, n) {
  var r, o, a, s, i, c, l, u, d, p, m, h, v, g, b, x, y, _;
  Pe(2, arguments);
  var $ = String(t), E = hr(), P = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : E.locale) !== null && r !== void 0 ? r : sm, D = xt((a = (s = (i = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && i !== void 0 ? i : E.firstWeekContainsDate) !== null && s !== void 0 ? s : (d = E.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(D >= 1 && D <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var R = xt((m = (h = (v = (g = n == null ? void 0 : n.weekStartsOn) !== null && g !== void 0 ? g : n == null || (b = n.locale) === null || b === void 0 || (x = b.options) === null || x === void 0 ? void 0 : x.weekStartsOn) !== null && v !== void 0 ? v : E.weekStartsOn) !== null && h !== void 0 ? h : (y = E.locale) === null || y === void 0 || (_ = y.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(R >= 0 && R <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!P.localize)
    throw new RangeError("locale must contain localize property");
  if (!P.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var K = je(e);
  if (!wy(K))
    throw new RangeError("Invalid time value");
  var G = sa(K), W = Sy(K, G), Z = {
    firstWeekContainsDate: D,
    weekStartsOn: R,
    locale: P,
    _originalDate: K
  }, L = $.match(E1).map(function(A) {
    var I = A[0];
    if (I === "p" || I === "P") {
      var V = Fy[I];
      return V(A, P.formatLong);
    }
    return A;
  }).join("").match(S1).map(function(A) {
    if (A === "''")
      return "'";
    var I = A[0];
    if (I === "'")
      return O1(A);
    var V = jy[I];
    if (V)
      return !(n != null && n.useAdditionalWeekYearTokens) && Wy(A) && Gd(A, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && zy(A) && Gd(A, t, String(e)), V(W, A, P.localize, Z);
    if (I.match(T1))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + I + "`");
    return A;
  }).join("");
  return L;
}
function O1(e) {
  var t = e.match(N1);
  return t ? t[1].replace(P1, "'") : e;
}
function k1(e) {
  Pe(1, arguments);
  var t = je(e), n = t.getFullYear(), r = t.getMonth(), o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var M1 = 6048e5;
function D1(e) {
  Pe(1, arguments);
  var t = je(e), n = Or(t).getTime() - vy(t).getTime();
  return Math.round(n / M1) + 1;
}
function R1(e) {
  Pe(1, arguments);
  var t = je(e), n = t.getTime();
  return n;
}
function A1(e) {
  return Pe(1, arguments), Math.floor(R1(e) / 1e3);
}
function j1(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = je(e), d = u.getFullYear(), p = hr(), m = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setFullYear(d + 1, 0, m), h.setHours(0, 0, 0, 0);
  var v = yn(h, t), g = new Date(0);
  g.setFullYear(d, 0, m), g.setHours(0, 0, 0, 0);
  var b = yn(g, t);
  return u.getTime() >= v.getTime() ? d + 1 : u.getTime() >= b.getTime() ? d : d - 1;
}
function I1(e, t) {
  var n, r, o, a, s, i, c, l;
  Pe(1, arguments);
  var u = hr(), d = xt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = j1(e, t), m = new Date(0);
  m.setFullYear(p, 0, d), m.setHours(0, 0, 0, 0);
  var h = yn(m, t);
  return h;
}
var L1 = 6048e5;
function F1(e, t) {
  Pe(1, arguments);
  var n = je(e), r = yn(n, t).getTime() - I1(n, t).getTime();
  return Math.round(r / L1) + 1;
}
function V1(e) {
  Pe(1, arguments);
  var t = je(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function U1(e, t) {
  return Pe(1, arguments), _y(V1(e), Vt(e), t) + 1;
}
function im(e, t) {
  Pe(2, arguments);
  var n = je(e), r = je(t);
  return n.getTime() > r.getTime();
}
function cm(e, t) {
  Pe(2, arguments);
  var n = je(e), r = je(t);
  return n.getTime() < r.getTime();
}
function nu(e, t) {
  Pe(2, arguments);
  var n = je(e), r = je(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function z1(e, t) {
  Pe(2, arguments);
  var n = je(e), r = je(t);
  return n.getFullYear() === r.getFullYear();
}
function Zd(e, t) {
  Pe(2, arguments);
  var n = xt(t);
  return Gt(e, -n);
}
function uc(e, t) {
  Pe(2, arguments);
  var n = je(e), r = xt(t), o = n.getFullYear(), a = n.getDate(), s = new Date(0);
  s.setFullYear(o, r, 15), s.setHours(0, 0, 0, 0);
  var i = k1(s);
  return n.setMonth(r, Math.min(a, i)), n;
}
function qd(e, t) {
  Pe(2, arguments);
  var n = je(e), r = xt(t);
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
function W1(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function lm(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Ra(e) {
  return e.mode === "multiple";
}
function Aa(e) {
  return e.mode === "range";
}
function yi(e) {
  return e.mode === "single";
}
var B1 = {
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
function H1(e, t) {
  return Ur(e, "LLLL y", t);
}
function Y1(e, t) {
  return Ur(e, "d", t);
}
function K1(e, t) {
  return Ur(e, "LLLL", t);
}
function G1(e) {
  return "".concat(e);
}
function Z1(e, t) {
  return Ur(e, "cccccc", t);
}
function q1(e, t) {
  return Ur(e, "yyyy", t);
}
var X1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: H1,
  formatDay: Y1,
  formatMonthCaption: K1,
  formatWeekNumber: G1,
  formatWeekdayName: Z1,
  formatYearCaption: q1
}), Q1 = function(e, t, n) {
  return Ur(e, "do MMMM (EEEE)", n);
}, J1 = function() {
  return "Month: ";
}, ew = function() {
  return "Go to next month";
}, tw = function() {
  return "Go to previous month";
}, nw = function(e, t) {
  return Ur(e, "cccc", t);
}, rw = function(e) {
  return "Week n. ".concat(e);
}, ow = function() {
  return "Year: ";
}, aw = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: Q1,
  labelMonthDropdown: J1,
  labelNext: ew,
  labelPrevious: tw,
  labelWeekNumber: rw,
  labelWeekday: nw,
  labelYearDropdown: ow
});
function sw() {
  var e = "buttons", t = B1, n = sm, r = {}, o = {}, a = 1, s = {}, i = new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: X1,
    labels: aw,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function iw(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = Vt(r) : t && (a = new Date(t, 0, 1)), o ? s = eu(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? mo(a) : void 0,
    toDate: s ? mo(s) : void 0
  };
}
var um = bt(void 0);
function cw(e) {
  var t, n = e.initialProps, r = sw(), o = iw(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (yi(n) || Ra(n) || Aa(n)) && (c = n.onSelect);
  var l = Oe(Oe(Oe({}, r), n), { captionLayout: i, classNames: Oe(Oe({}, r.classNames), n.classNames), components: Oe({}, n.components), formatters: Oe(Oe({}, r.formatters), n.formatters), fromDate: a, labels: Oe(Oe({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: Oe(Oe({}, r.modifiers), n.modifiers), modifiersClassNames: Oe(Oe({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: Oe(Oe({}, r.styles), n.styles), toDate: s });
  return S.createElement(um.Provider, { value: l }, e.children);
}
function ot() {
  var e = Qe(um);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function dm(e) {
  var t = ot(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return S.createElement("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id }, a(e.displayMonth, { locale: n }));
}
function lw(e) {
  return S.createElement(
    "svg",
    Oe({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e),
    S.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function fm(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, l = ot(), u = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : lw;
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
function uw(e) {
  var t, n = ot(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return S.createElement(S.Fragment, null);
  if (!o)
    return S.createElement(S.Fragment, null);
  var d = [];
  if (z1(r, o))
    for (var p = Vt(r), m = r.getMonth(); m <= o.getMonth(); m++)
      d.push(uc(p, m));
  else
    for (var p = Vt(new Date()), m = 0; m <= 11; m++)
      d.push(uc(p, m));
  var h = function(g) {
    var b = Number(g.target.value), x = uc(Vt(e.displayMonth), b);
    e.onChange(x);
  }, v = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : fm;
  return S.createElement(v, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }) }, d.map(function(g) {
    return S.createElement("option", { key: g.getMonth(), value: g.getMonth() }, i(g, { locale: s }));
  }));
}
function dw(e) {
  var t, n = e.displayMonth, r = ot(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, l = r.components, u = r.formatters.formatYearCaption, d = r.labels.labelYearDropdown, p = [];
  if (!o)
    return S.createElement(S.Fragment, null);
  if (!a)
    return S.createElement(S.Fragment, null);
  for (var m = o.getFullYear(), h = a.getFullYear(), v = m; v <= h; v++)
    p.push(qd(Cy(new Date()), v));
  var g = function(x) {
    var y = qd(Vt(n), Number(x.target.value));
    e.onChange(y);
  }, b = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : fm;
  return S.createElement(b, { name: "years", "aria-label": d(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: u(n, { locale: s }) }, p.map(function(x) {
    return S.createElement("option", { key: x.getFullYear(), value: x.getFullYear() }, u(x, { locale: s }));
  }));
}
function fw(e, t) {
  var n = X(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function pw(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && ia(a, o) < 0) {
    var l = -1 * (c - 1);
    o = xn(a, l);
  }
  return s && ia(o, s) < 0 && (o = s), Vt(o);
}
function mw() {
  var e = ot(), t = pw(e), n = fw(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = Vt(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function hw(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Vt(e), a = Vt(xn(o, r)), s = ia(a, o), i = [], c = 0; c < s; c++) {
    var l = xn(o, c);
    i.push(l);
  }
  return n && (i = i.reverse()), i;
}
function vw(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Vt(e);
    if (!n)
      return xn(i, s);
    var c = ia(n, e);
    if (!(c < a))
      return xn(i, s);
  }
}
function gw(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Vt(e);
    if (!n)
      return xn(i, -s);
    var c = ia(i, n);
    if (!(c <= 0))
      return xn(i, -s);
  }
}
var pm = bt(void 0);
function bw(e) {
  var t = ot(), n = mw(), r = n[0], o = n[1], a = hw(r, t), s = vw(r, t), i = gw(r, t), c = function(d) {
    return a.some(function(p) {
      return nu(d, p);
    });
  }, l = function(d, p) {
    c(d) || (p && cm(d, p) ? o(xn(d, 1 + t.numberOfMonths * -1)) : o(d));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return S.createElement(pm.Provider, { value: u }, e.children);
}
function ja() {
  var e = Qe(pm);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Xd(e) {
  var t, n = ot(), r = n.classNames, o = n.styles, a = n.components, s = ja().goToMonth, i = function(u) {
    s(u);
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : dm, l = S.createElement(c, { id: e.id, displayMonth: e.displayMonth });
  return S.createElement(
    "div",
    { className: r.caption_dropdowns, style: o.caption_dropdowns },
    S.createElement("div", { className: r.vhidden }, l),
    S.createElement(uw, { onChange: i, displayMonth: e.displayMonth }),
    S.createElement(dw, { onChange: i, displayMonth: e.displayMonth })
  );
}
function xw(e) {
  return S.createElement(
    "svg",
    Oe({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    S.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function yw(e) {
  return S.createElement(
    "svg",
    Oe({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    S.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })
  );
}
var Is = j(function(e, t) {
  var n = ot(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = Oe(Oe({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), S.createElement("button", Oe({}, e, { ref: t, type: "button", className: s, style: i }));
});
function ww(e) {
  var t, n, r = ot(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, l = c.labelPrevious, u = c.labelNext, d = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return S.createElement(S.Fragment, null);
  var p = l(e.previousMonth, { locale: a }), m = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), h = u(e.nextMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = d == null ? void 0 : d.IconRight) !== null && t !== void 0 ? t : yw, b = (n = d == null ? void 0 : d.IconLeft) !== null && n !== void 0 ? n : xw;
  return S.createElement(
    "div",
    { className: s.nav, style: i.nav },
    !e.hidePrevious && S.createElement(Is, { name: "previous-month", "aria-label": p, className: m, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick }, o === "rtl" ? S.createElement(g, { className: s.nav_icon, style: i.nav_icon }) : S.createElement(b, { className: s.nav_icon, style: i.nav_icon })),
    !e.hideNext && S.createElement(Is, { name: "next-month", "aria-label": h, className: v, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick }, o === "rtl" ? S.createElement(b, { className: s.nav_icon, style: i.nav_icon }) : S.createElement(g, { className: s.nav_icon, style: i.nav_icon }))
  );
}
function Qd(e) {
  var t = ot().numberOfMonths, n = ja(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(h) {
    return nu(e.displayMonth, h);
  }), c = i === 0, l = i === s.length - 1, u = t > 1 && (c || !l), d = t > 1 && (l || !c), p = function() {
    r && a(r);
  }, m = function() {
    o && a(o);
  };
  return S.createElement(ww, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: d, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: m });
}
function $w(e) {
  var t, n = ot(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : dm, l;
  return o ? l = S.createElement(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? l = S.createElement(Xd, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? l = S.createElement(
    S.Fragment,
    null,
    S.createElement(Xd, { displayMonth: e.displayMonth, id: e.id }),
    S.createElement(Qd, { displayMonth: e.displayMonth, id: e.id })
  ) : l = S.createElement(
    S.Fragment,
    null,
    S.createElement(c, { id: e.id, displayMonth: e.displayMonth }),
    S.createElement(Qd, { displayMonth: e.displayMonth, id: e.id })
  ), S.createElement("div", { className: r.caption, style: a.caption }, l);
}
function _w(e) {
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
function Cw(e, t, n) {
  for (var r = n ? Or(new Date()) : yn(new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = Gt(r, a);
    o.push(s);
  }
  return o;
}
function Sw() {
  var e = ot(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = Cw(o, a, s);
  return S.createElement(
    "tr",
    { style: n.head_row, className: t.head_row },
    r && S.createElement("td", { style: n.head_cell, className: t.head_cell }),
    l.map(function(u, d) {
      return S.createElement("th", { key: d, scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(u, { locale: o }) }, i(u, { locale: o }));
    })
  );
}
function Ew() {
  var e, t = ot(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : Sw;
  return S.createElement(
    "thead",
    { style: r.head, className: n.head },
    S.createElement(a, null)
  );
}
function Nw(e) {
  var t = ot(), n = t.locale, r = t.formatters.formatDay;
  return S.createElement(S.Fragment, null, r(e.date, { locale: n }));
}
var ru = bt(void 0);
function Pw(e) {
  if (!Ra(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return S.createElement(ru.Provider, { value: t }, e.children);
  }
  return S.createElement(Tw, { initialProps: e.initialProps, children: e.children });
}
function Tw(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, u, d) {
    var p, m;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, l, u, d);
    var h = Boolean(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!h) {
      var v = Boolean(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var g = r ? lm([], r, !0) : [];
        if (u.selected) {
          var b = g.findIndex(function(x) {
            return Lt(l, x);
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
      return Lt(p, l);
    });
    return Boolean(u && !d);
  });
  var c = {
    selected: r,
    onDayClick: s,
    modifiers: i
  };
  return S.createElement(ru.Provider, { value: c }, n);
}
function ou() {
  var e = Qe(ru);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function Ow(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  if (!r)
    return { from: e, to: void 0 };
  if (!o && Lt(r, e))
    return { from: r, to: e };
  if (!o && cm(e, r))
    return { from: e, to: r };
  if (!o)
    return { from: r, to: e };
  if (!(Lt(o, e) && Lt(r, e))) {
    if (Lt(o, e))
      return { from: o, to: void 0 };
    if (!Lt(r, e))
      return im(r, e) ? { from: e, to: o } : { from: r, to: e };
  }
}
var au = bt(void 0);
function kw(e) {
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
    return S.createElement(au.Provider, { value: t }, e.children);
  }
  return S.createElement(Mw, { initialProps: e.initialProps, children: e.children });
}
function Mw(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, l = function(m, h, v) {
    var g, b;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, m, h, v);
    var x = Ow(m, r);
    (b = t.onSelect) === null || b === void 0 || b.call(t, x, m, h, v);
  }, u = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a && (u.range_start = [a], s ? (u.range_end = [s], Lt(a, s) || (u.range_middle = [
    {
      after: a,
      before: s
    }
  ])) : u.range_end = [a]), i && (a && !s && u.disabled.push({
    after: Zd(a, i - 1),
    before: Gt(a, i - 1)
  }), a && s && u.disabled.push({
    after: a,
    before: Gt(a, i - 1)
  })), c && (a && !s && (u.disabled.push({
    before: Gt(a, -c + 1)
  }), u.disabled.push({
    after: Gt(a, c - 1)
  })), a && s)) {
    var d = Rn(s, a) + 1, p = c - d;
    u.disabled.push({
      before: Zd(a, p)
    }), u.disabled.push({
      after: Gt(s, p)
    });
  }
  return S.createElement(au.Provider, { value: { selected: r, onDayClick: l, modifiers: u } }, n);
}
function su() {
  var e = Qe(au);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Ss(e) {
  return Array.isArray(e) ? lm([], e, !0) : e !== void 0 ? [e] : [];
}
function Dw(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = Ss(o);
  }), t;
}
var ln;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(ln || (ln = {}));
var Rw = ln.Selected, On = ln.Disabled, Aw = ln.Hidden, jw = ln.Today, dc = ln.RangeEnd, fc = ln.RangeMiddle, pc = ln.RangeStart, Iw = ln.Outside;
function Lw(e, t, n) {
  var r, o = (r = {}, r[Rw] = Ss(e.selected), r[On] = Ss(e.disabled), r[Aw] = Ss(e.hidden), r[jw] = [e.today], r[dc] = [], r[fc] = [], r[pc] = [], r[Iw] = [], r);
  return e.fromDate && o[On].push({ before: e.fromDate }), e.toDate && o[On].push({ after: e.toDate }), Ra(e) ? o[On] = o[On].concat(t.modifiers[On]) : Aa(e) && (o[On] = o[On].concat(n.modifiers[On]), o[pc] = n.modifiers[pc], o[fc] = n.modifiers[fc], o[dc] = n.modifiers[dc]), o;
}
var mm = bt(void 0);
function Fw(e) {
  var t = ot(), n = ou(), r = su(), o = Lw(t, n, r), a = Dw(t.modifiers), s = Oe(Oe({}, o), a);
  return S.createElement(mm.Provider, { value: s }, e.children);
}
function hm() {
  var e = Qe(mm);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function Vw(e) {
  return Boolean(e && typeof e == "object" && "before" in e && "after" in e);
}
function Uw(e) {
  return Boolean(e && typeof e == "object" && "from" in e);
}
function zw(e) {
  return Boolean(e && typeof e == "object" && "after" in e);
}
function Ww(e) {
  return Boolean(e && typeof e == "object" && "before" in e);
}
function Bw(e) {
  return Boolean(e && typeof e == "object" && "dayOfWeek" in e);
}
function Hw(e, t) {
  var n, r = t.from, o = t.to;
  if (!r)
    return !1;
  if (!o && Lt(r, e))
    return !0;
  if (!o)
    return !1;
  var a = Rn(o, r) < 0;
  a && (n = [o, r], r = n[0], o = n[1]);
  var s = Rn(e, r) >= 0 && Rn(o, e) >= 0;
  return s;
}
function Yw(e) {
  return Jl(e);
}
function Kw(e) {
  return Array.isArray(e) && e.every(Jl);
}
function Gw(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (Yw(n))
      return Lt(e, n);
    if (Kw(n))
      return n.includes(e);
    if (Uw(n))
      return Hw(e, n);
    if (Bw(n))
      return n.dayOfWeek.includes(e.getDay());
    if (Vw(n)) {
      var r = Rn(n.before, e), o = Rn(n.after, e), a = r > 0, s = o < 0, i = im(n.before, n.after);
      return i ? s && a : a || s;
    }
    return zw(n) ? Rn(e, n.after) > 0 : Ww(n) ? Rn(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function iu(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return Gw(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !nu(e, n) && (o.outside = !0), o;
}
function Zw(e, t) {
  for (var n = Vt(e[0]), r = eu(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = iu(s, t), c = !i.disabled && !i.hidden;
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
var qw = 365;
function vm(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, l = o.fromDate, u = o.toDate, d = o.locale, p = {
    day: Gt,
    week: al,
    month: xn,
    year: by,
    startOfWeek: function(g) {
      return o.ISOWeek ? Or(g) : yn(g, { locale: d, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? nm(g) : tu(g, { locale: d, weekStartsOn: c });
    }
  }, m = p[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? m = xy([l, m]) : r === "after" && u && (m = yy([u, m]));
  var h = !0;
  if (a) {
    var v = iu(m, a);
    h = !v.disabled && !v.hidden;
  }
  return h ? m : i.count > qw ? i.lastFocused : vm(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: Oe(Oe({}, i), { count: i.count + 1 })
  });
}
var gm = bt(void 0);
function Xw(e) {
  var t = ja(), n = hm(), r = X(), o = r[0], a = r[1], s = X(), i = s[0], c = s[1], l = Zw(t.displayMonths, n), u = o ?? (i && t.isDateDisplayed(i)) ? i : l, d = function() {
    c(o), a(void 0);
  }, p = function(g) {
    a(g);
  }, m = ot(), h = function(g, b) {
    if (o) {
      var x = vm(o, {
        moveBy: g,
        direction: b,
        context: m,
        modifiers: n
      });
      Lt(o, x) || (t.goToDate(x, o), p(x));
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
  return S.createElement(gm.Provider, { value: v }, e.children);
}
function cu() {
  var e = Qe(gm);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function Qw(e, t) {
  var n = hm(), r = iu(e, n, t);
  return r;
}
var lu = bt(void 0);
function Jw(e) {
  if (!yi(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return S.createElement(lu.Provider, { value: t }, e.children);
  }
  return S.createElement(e$, { initialProps: e.initialProps, children: e.children });
}
function e$(e) {
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
  return S.createElement(lu.Provider, { value: o }, n);
}
function bm() {
  var e = Qe(lu);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function t$(e, t) {
  var n = ot(), r = bm(), o = ou(), a = su(), s = cu(), i = s.focusDayAfter, c = s.focusDayBefore, l = s.focusWeekAfter, u = s.focusWeekBefore, d = s.blur, p = s.focus, m = s.focusMonthBefore, h = s.focusMonthAfter, v = s.focusYearBefore, g = s.focusYearAfter, b = s.focusStartOfWeek, x = s.focusEndOfWeek, y = function(V) {
    var Y, M, k, B;
    yi(n) ? (Y = r.onDayClick) === null || Y === void 0 || Y.call(r, e, t, V) : Ra(n) ? (M = o.onDayClick) === null || M === void 0 || M.call(o, e, t, V) : Aa(n) ? (k = a.onDayClick) === null || k === void 0 || k.call(a, e, t, V) : (B = n.onDayClick) === null || B === void 0 || B.call(n, e, t, V);
  }, _ = function(V) {
    var Y;
    p(e), (Y = n.onDayFocus) === null || Y === void 0 || Y.call(n, e, t, V);
  }, $ = function(V) {
    var Y;
    d(), (Y = n.onDayBlur) === null || Y === void 0 || Y.call(n, e, t, V);
  }, E = function(V) {
    var Y;
    (Y = n.onDayMouseEnter) === null || Y === void 0 || Y.call(n, e, t, V);
  }, P = function(V) {
    var Y;
    (Y = n.onDayMouseLeave) === null || Y === void 0 || Y.call(n, e, t, V);
  }, D = function(V) {
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
  }, L = function(V) {
    var Y;
    (Y = n.onDayKeyUp) === null || Y === void 0 || Y.call(n, e, t, V);
  }, A = function(V) {
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
        V.preventDefault(), V.stopPropagation(), b();
        break;
      case "End":
        V.preventDefault(), V.stopPropagation(), x();
        break;
    }
    (Y = n.onDayKeyDown) === null || Y === void 0 || Y.call(n, e, t, V);
  }, I = {
    onClick: y,
    onFocus: _,
    onBlur: $,
    onKeyDown: A,
    onKeyUp: L,
    onMouseEnter: E,
    onMouseLeave: P,
    onPointerEnter: D,
    onPointerLeave: R,
    onTouchCancel: K,
    onTouchEnd: G,
    onTouchMove: W,
    onTouchStart: Z
  };
  return I;
}
function n$() {
  var e = ot(), t = bm(), n = ou(), r = su(), o = yi(e) ? t.selected : Ra(e) ? n.selected : Aa(e) ? r.selected : void 0;
  return o;
}
function r$(e) {
  return Object.values(ln).includes(e);
}
function o$(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (r$(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function a$(e, t) {
  var n = Oe({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = Oe(Oe({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function s$(e, t, n) {
  var r, o, a, s = ot(), i = cu(), c = Qw(e, t), l = t$(e, c), u = n$(), d = Boolean(s.onDayClick || s.mode !== "default");
  Q(function() {
    var E;
    c.outside || i.focusedDay && d && Lt(i.focusedDay, e) && ((E = n.current) === null || E === void 0 || E.focus());
  }, [
    i.focusedDay,
    e,
    n,
    d,
    c.outside
  ]);
  var p = o$(s, c).join(" "), m = a$(s, c), h = Boolean(c.outside && !s.showOutsideDays || c.hidden), v = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : Nw, g = S.createElement(v, { date: e, displayMonth: t, activeModifiers: c }), b = {
    style: m,
    className: p,
    children: g,
    role: "gridcell"
  }, x = i.focusTarget && Lt(i.focusTarget, e) && !c.outside, y = i.focusedDay && Lt(i.focusedDay, e), _ = Oe(Oe(Oe({}, b), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = y || x ? 0 : -1, r)), l), $ = {
    isButton: d,
    isHidden: h,
    activeModifiers: c,
    selectedDays: u,
    buttonProps: _,
    divProps: b
  };
  return $;
}
function i$(e) {
  var t = H(null), n = s$(e.date, e.displayMonth, t);
  return n.isHidden ? S.createElement("div", { role: "gridcell" }) : n.isButton ? S.createElement(Is, Oe({ name: "day", ref: t }, n.buttonProps)) : S.createElement("div", Oe({}, n.divProps));
}
function c$(e) {
  var t = e.number, n = e.dates, r = ot(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(t), { locale: i });
  if (!o)
    return S.createElement("span", { className: s.weeknumber, style: a.weeknumber }, u);
  var d = c(Number(t), { locale: i }), p = function(m) {
    o(t, n, m);
  };
  return S.createElement(Is, { name: "week-number", "aria-label": d, className: s.weeknumber, style: a.weeknumber, onClick: p }, u);
}
function l$(e) {
  var t, n, r = ot(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : i$, l = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : c$, u;
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
function Jd(e, t, n) {
  for (var r = n != null && n.ISOWeek ? nm(t) : tu(t, n), o = n != null && n.ISOWeek ? Or(e) : yn(e, n), a = Rn(r, o), s = [], i = 0; i <= a; i++)
    s.push(Gt(o, i));
  var c = s.reduce(function(l, u) {
    var d = n != null && n.ISOWeek ? D1(u) : F1(u, n), p = l.find(function(m) {
      return m.weekNumber === d;
    });
    return p ? (p.dates.push(u), l) : (l.push({
      weekNumber: d,
      dates: [u]
    }), l);
  }, []);
  return c;
}
function u$(e, t) {
  var n = Jd(Vt(e), eu(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = U1(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = al(a, 6 - r), i = Jd(al(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function d$(e) {
  var t, n, r, o = ot(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, l = o.fixedWeeks, u = o.components, d = o.weekStartsOn, p = o.firstWeekContainsDate, m = o.ISOWeek, h = u$(e.displayMonth, {
    useFixedWeeks: Boolean(l),
    ISOWeek: m,
    locale: a,
    weekStartsOn: d,
    firstWeekContainsDate: p
  }), v = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : Ew, g = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : l$, b = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : _w;
  return S.createElement(
    "table",
    { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"] },
    !c && S.createElement(v, null),
    S.createElement("tbody", { className: s.tbody, style: i.tbody, role: "rowgroup" }, h.map(function(x) {
      return S.createElement(g, { displayMonth: e.displayMonth, key: x.weekNumber, dates: x.dates, weekNumber: x.weekNumber });
    })),
    S.createElement(b, { displayMonth: e.displayMonth })
  );
}
function f$() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var p$ = f$() ? C.useLayoutEffect : C.useEffect, mc = !1, m$ = 0;
function ef() {
  return "react-day-picker-".concat(++m$);
}
function h$(e) {
  var t, n = e ?? (mc ? ef() : null), r = C.useState(n), o = r[0], a = r[1];
  return p$(function() {
    o === null && a(ef());
  }, []), C.useEffect(function() {
    mc === !1 && (mc = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function v$(e) {
  var t, n, r = ot(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = ja().displayMonths, l = h$(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, d = [a.month], p = s.month, m = e.displayIndex === 0, h = e.displayIndex === c.length - 1, v = !m && !h;
  o === "rtl" && (t = [m, h], h = t[0], m = t[1]), m && (d.push(a.caption_start), p = Oe(Oe({}, p), s.caption_start)), h && (d.push(a.caption_end), p = Oe(Oe({}, p), s.caption_end)), v && (d.push(a.caption_between), p = Oe(Oe({}, p), s.caption_between));
  var g = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : $w;
  return S.createElement(
    "div",
    { key: e.displayIndex, className: d.join(" "), style: p },
    S.createElement(g, { id: l, displayMonth: e.displayMonth }),
    S.createElement(d$, { id: u, "aria-labelledby": l, displayMonth: e.displayMonth })
  );
}
function g$(e) {
  var t = e.initialProps, n = ot(), r = cu(), o = ja(), a = X(!1), s = a[0], i = a[1];
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
      return S.createElement(v$, { key: p, displayIndex: p, displayMonth: d });
    }))
  );
}
function b$(e) {
  var t = e.children, n = W1(e, ["children"]);
  return S.createElement(
    cw,
    { initialProps: n },
    S.createElement(
      bw,
      null,
      S.createElement(
        Jw,
        { initialProps: n },
        S.createElement(
          Pw,
          { initialProps: n },
          S.createElement(
            kw,
            { initialProps: n },
            S.createElement(
              Fw,
              null,
              S.createElement(Xw, null, t)
            )
          )
        )
      )
    )
  );
}
function x$(e) {
  return S.createElement(
    b$,
    Oe({}, e),
    S.createElement(g$, { initialProps: e })
  );
}
function y$({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ f.exports.jsx(
    x$,
    {
      showOutsideDays: n,
      className: F("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: F(
          oa({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: F(
          oa({ variant: "ghost" }),
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
        IconLeft: ({ ...o }) => /* @__PURE__ */ f.exports.jsx(Ql, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ f.exports.jsx(Eo, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
y$.displayName = "Calendar";
function w$(e, t) {
  const n = /* @__PURE__ */ bt(t);
  function r(a) {
    const { children: s, ...i } = a, c = kt(
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
      const { scope: p, children: m, ...h } = d, v = (p == null ? void 0 : p[e][c]) || i, g = kt(
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
      return kt(
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
    $$(o, ...t)
  ];
}
function $$(...e) {
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
      return kt(
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
  }), kt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const _t = Boolean(globalThis == null ? void 0 : globalThis.document) ? Ma : () => {
}, _$ = [
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
], de = _$.reduce((e, t) => {
  const n = /* @__PURE__ */ j((r, o) => {
    const { asChild: a, ...s } = r, i = a ? bn : t;
    return Q(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ w(i, N({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Ls(e, t) {
  e && vi(
    () => e.dispatchEvent(t)
  );
}
const xm = "Avatar", [C$, ID] = at(xm), [S$, ym] = C$(xm), E$ = /* @__PURE__ */ j((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = X("idle");
  return /* @__PURE__ */ w(S$, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ w(de.span, N({}, r, {
    ref: t
  })));
}), N$ = "AvatarImage", P$ = /* @__PURE__ */ j((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = ym(N$, n), i = k$(r), c = qe((l) => {
    o(l), s.onImageLoadingStatusChange(l);
  });
  return _t(() => {
    i !== "idle" && c(i);
  }, [
    i,
    c
  ]), i === "loaded" ? /* @__PURE__ */ w(de.img, N({}, a, {
    ref: t,
    src: r
  })) : null;
}), T$ = "AvatarFallback", O$ = /* @__PURE__ */ j((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = ym(T$, n), [s, i] = X(r === void 0);
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
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ w(de.span, N({}, o, {
    ref: t
  })) : null;
});
function k$(e) {
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
const wm = E$, $m = P$, _m = O$, Ia = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  wm,
  {
    ref: n,
    className: F(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
Ia.displayName = wm.displayName;
const ho = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  $m,
  {
    ref: n,
    className: F("aspect-square h-full w-full", e),
    ...t
  }
));
ho.displayName = $m.displayName;
const La = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  _m,
  {
    ref: n,
    className: F(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
La.displayName = _m.displayName;
const M$ = So(
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
function St({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ f.exports.jsx("div", { className: F(M$({ variant: t }), e), ...n });
}
function ee(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function vr(e) {
  const t = e + "CollectionProvider", [n, r] = at(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), s = (m) => {
    const { scope: h, children: v } = m, g = S.useRef(null), b = S.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ S.createElement(o, {
      scope: h,
      itemMap: b,
      collectionRef: g
    }, v);
  }, i = e + "CollectionSlot", c = /* @__PURE__ */ S.forwardRef((m, h) => {
    const { scope: v, children: g } = m, b = a(i, v), x = Ce(h, b.collectionRef);
    return /* @__PURE__ */ S.createElement(bn, {
      ref: x
    }, g);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ S.forwardRef((m, h) => {
    const { scope: v, children: g, ...b } = m, x = S.useRef(null), y = Ce(h, x), _ = a(l, v);
    return S.useEffect(() => (_.itemMap.set(x, {
      ref: x,
      ...b
    }), () => void _.itemMap.delete(x))), /* @__PURE__ */ S.createElement(bn, {
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
      const b = Array.from(g.querySelectorAll(`[${u}]`));
      return Array.from(h.itemMap.values()).sort(
        (_, $) => b.indexOf(_.ref.current) - b.indexOf($.ref.current)
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
const D$ = /* @__PURE__ */ bt(void 0);
function Sn(e) {
  const t = Qe(D$);
  return e || t || "ltr";
}
function R$(e, t = globalThis == null ? void 0 : globalThis.document) {
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
const sl = "dismissableLayer.update", A$ = "dismissableLayer.pointerDownOutside", j$ = "dismissableLayer.focusOutside";
let tf;
const I$ = /* @__PURE__ */ bt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), zr = /* @__PURE__ */ j((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...l } = e, u = Qe(I$), [d, p] = X(null), m = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = X({}), v = Ce(
    t,
    (D) => p(D)
  ), g = Array.from(u.layers), [b] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), x = g.indexOf(b), y = d ? g.indexOf(d) : -1, _ = u.layersWithOutsidePointerEventsDisabled.size > 0, $ = y >= x, E = L$((D) => {
    const R = D.target, K = [
      ...u.branches
    ].some(
      (G) => G.contains(R)
    );
    !$ || K || (a == null || a(D), i == null || i(D), D.defaultPrevented || c == null || c());
  }, m), P = F$((D) => {
    const R = D.target;
    [
      ...u.branches
    ].some(
      (G) => G.contains(R)
    ) || (s == null || s(D), i == null || i(D), D.defaultPrevented || c == null || c());
  }, m);
  return R$((D) => {
    y === u.layers.size - 1 && (o == null || o(D), !D.defaultPrevented && c && (D.preventDefault(), c()));
  }, m), Q(() => {
    if (d)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (tf = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), nf(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = tf);
      };
  }, [
    d,
    m,
    r,
    u
  ]), Q(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), nf());
  }, [
    d,
    u
  ]), Q(() => {
    const D = () => h({});
    return document.addEventListener(sl, D), () => document.removeEventListener(sl, D);
  }, []), /* @__PURE__ */ w(de.div, N({}, l, {
    ref: v,
    style: {
      pointerEvents: _ ? $ ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ee(e.onFocusCapture, P.onFocusCapture),
    onBlurCapture: ee(e.onBlurCapture, P.onBlurCapture),
    onPointerDownCapture: ee(e.onPointerDownCapture, E.onPointerDownCapture)
  }));
});
function L$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qe(e), r = H(!1), o = H(() => {
  });
  return Q(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          Cm(A$, n, c, {
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
function F$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = qe(e), r = H(!1);
  return Q(() => {
    const o = (a) => {
      a.target && !r.current && Cm(j$, n, {
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
function nf() {
  const e = new CustomEvent(sl);
  document.dispatchEvent(e);
}
function Cm(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? Ls(o, a) : o.dispatchEvent(a);
}
let hc = 0;
function wi() {
  Q(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : rf()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : rf()), hc++, () => {
      hc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), hc--;
    };
  }, []);
}
function rf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const vc = "focusScope.autoFocusOnMount", gc = "focusScope.autoFocusOnUnmount", of = {
  bubbles: !1,
  cancelable: !0
}, $i = /* @__PURE__ */ j((e, t) => {
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
        i.contains(_) ? d.current = _ : tr(d.current, {
          select: !0
        });
      }, g = function(y) {
        if (m.paused || !i)
          return;
        const _ = y.relatedTarget;
        _ !== null && (i.contains(_) || tr(d.current, {
          select: !0
        }));
      }, b = function(y) {
        const _ = document.activeElement;
        for (const $ of y)
          $.removedNodes.length > 0 && (i != null && i.contains(_) || tr(i));
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
      sf.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(vc, of);
        i.addEventListener(vc, l), i.dispatchEvent(b), b.defaultPrevented || (V$(H$(Sm(i)), {
          select: !0
        }), document.activeElement === v && tr(i));
      }
      return () => {
        i.removeEventListener(vc, l), setTimeout(() => {
          const b = new CustomEvent(gc, of);
          i.addEventListener(gc, u), i.dispatchEvent(b), b.defaultPrevented || tr(v ?? document.body, {
            select: !0
          }), i.removeEventListener(gc, u), sf.remove(m);
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
      const x = v.currentTarget, [y, _] = U$(x);
      y && _ ? !v.shiftKey && b === _ ? (v.preventDefault(), n && tr(y, {
        select: !0
      })) : v.shiftKey && b === y && (v.preventDefault(), n && tr(_, {
        select: !0
      })) : b === x && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ w(de.div, N({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: h
  }));
});
function V$(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (tr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function U$(e) {
  const t = Sm(e), n = af(t, e), r = af(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Sm(e) {
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
function af(e, t) {
  for (const n of e)
    if (!z$(n, {
      upTo: t
    }))
      return n;
}
function z$(e, { upTo: t }) {
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
function W$(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function tr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && W$(e) && t && e.select();
  }
}
const sf = B$();
function B$() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = cf(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = cf(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function cf(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function H$(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Y$ = C["useId".toString()] || (() => {
});
let K$ = 0;
function mt(e) {
  const [t, n] = C.useState(Y$());
  return _t(() => {
    e || n(
      (r) => r ?? String(K$++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const G$ = ["top", "right", "bottom", "left"], sr = Math.min, Wt = Math.max, Fs = Math.round, cs = Math.floor, ir = (e) => ({
  x: e,
  y: e
}), Z$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, q$ = {
  start: "end",
  end: "start"
};
function il(e, t, n) {
  return Wt(e, sr(t, n));
}
function In(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ln(e) {
  return e.split("-")[0];
}
function No(e) {
  return e.split("-")[1];
}
function uu(e) {
  return e === "x" ? "y" : "x";
}
function du(e) {
  return e === "y" ? "height" : "width";
}
function Po(e) {
  return ["top", "bottom"].includes(Ln(e)) ? "y" : "x";
}
function fu(e) {
  return uu(Po(e));
}
function X$(e, t, n) {
  n === void 0 && (n = !1);
  const r = No(e), o = fu(e), a = du(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Vs(s)), [s, Vs(s)];
}
function Q$(e) {
  const t = Vs(e);
  return [cl(e), t, cl(t)];
}
function cl(e) {
  return e.replace(/start|end/g, (t) => q$[t]);
}
function J$(e, t, n) {
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
function e_(e, t, n, r) {
  const o = No(e);
  let a = J$(Ln(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(cl)))), a;
}
function Vs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Z$[t]);
}
function t_(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Em(e) {
  return typeof e != "number" ? t_(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Us(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function lf(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Po(t), s = fu(t), i = du(s), c = Ln(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
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
  switch (No(t)) {
    case "start":
      m[s] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      m[s] += p * (n && l ? -1 : 1);
      break;
  }
  return m;
}
const n_ = async (e, t, n) => {
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
  } = lf(l, r, c), p = r, m = {}, h = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: g,
      fn: b
    } = i[v], {
      x,
      y,
      data: _,
      reset: $
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
    }, $ && h <= 50) {
      h++, typeof $ == "object" && ($.placement && (p = $.placement), $.rects && (l = $.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : $.rects), {
        x: u,
        y: d
      } = lf(l, p, c)), v = -1;
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
async function ca(e, t) {
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
  } = In(t, e), h = Em(m), g = i[p ? d === "floating" ? "reference" : "floating" : d], b = Us(await a.getClippingRect({
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
  }, $ = Us(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: x,
    offsetParent: y,
    strategy: c
  }) : x);
  return {
    top: (b.top - $.top + h.top) / _.y,
    bottom: ($.bottom - b.bottom + h.bottom) / _.y,
    left: (b.left - $.left + h.left) / _.x,
    right: ($.right - b.right + h.right) / _.x
  };
}
const uf = (e) => ({
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
    } = In(e, t) || {};
    if (c == null)
      return {};
    const u = Em(l), d = {
      x: n,
      y: r
    }, p = fu(o), m = du(p), h = await s.getDimensions(c), v = p === "y", g = v ? "top" : "left", b = v ? "bottom" : "right", x = v ? "clientHeight" : "clientWidth", y = a.reference[m] + a.reference[p] - d[p] - a.floating[m], _ = d[p] - a.reference[p], $ = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let E = $ ? $[x] : 0;
    (!E || !await (s.isElement == null ? void 0 : s.isElement($))) && (E = i.floating[x] || a.floating[m]);
    const P = y / 2 - _ / 2, D = E / 2 - h[m] / 2 - 1, R = sr(u[g], D), K = sr(u[b], D), G = R, W = E - h[m] - K, Z = E / 2 - h[m] / 2 + P, L = il(G, Z, W), I = No(o) != null && Z != L && a.reference[m] / 2 - (Z < G ? R : K) - h[m] / 2 < 0 ? Z < G ? G - Z : W - Z : 0;
    return {
      [p]: d[p] - I,
      data: {
        [p]: L,
        centerOffset: Z - L + I
      }
    };
  }
}), r_ = function(e) {
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
      } = In(e, t), g = Ln(r), b = Ln(s) === s, x = await (i.isRTL == null ? void 0 : i.isRTL(c.floating)), y = d || (b || !h ? [Vs(s)] : Q$(s));
      !d && m !== "none" && y.push(...e_(s, h, m, x));
      const _ = [s, ...y], $ = await ca(t, v), E = [];
      let P = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (l && E.push($[g]), u) {
        const G = X$(r, a, x);
        E.push($[G[0]], $[G[1]]);
      }
      if (P = [...P, {
        placement: r,
        overflows: E
      }], !E.every((G) => G <= 0)) {
        var D, R;
        const G = (((D = o.flip) == null ? void 0 : D.index) || 0) + 1, W = _[G];
        if (W)
          return {
            data: {
              index: G,
              overflows: P
            },
            reset: {
              placement: W
            }
          };
        let Z = (R = P.filter((L) => L.overflows[0] <= 0).sort((L, A) => L.overflows[1] - A.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!Z)
          switch (p) {
            case "bestFit": {
              var K;
              const L = (K = P.map((A) => [A.placement, A.overflows.filter((I) => I > 0).reduce((I, V) => I + V, 0)]).sort((A, I) => A[1] - I[1])[0]) == null ? void 0 : K[0];
              L && (Z = L);
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
function df(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ff(e) {
  return G$.some((t) => e[t] >= 0);
}
const o_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = In(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await ca(t, {
            ...o,
            elementContext: "reference"
          }), s = df(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: ff(s)
            }
          };
        }
        case "escaped": {
          const a = await ca(t, {
            ...o,
            altBoundary: !0
          }), s = df(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: ff(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function a_(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Ln(n), i = No(n), c = Po(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, d = In(t, e);
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
const s_ = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await a_(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, i_ = function(e) {
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
      } = In(e, t), l = {
        x: n,
        y: r
      }, u = await ca(t, c), d = Po(Ln(o)), p = uu(d);
      let m = l[p], h = l[d];
      if (a) {
        const g = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", x = m + u[g], y = m - u[b];
        m = il(x, m, y);
      }
      if (s) {
        const g = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", x = h + u[g], y = h - u[b];
        h = il(x, h, y);
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
}, c_ = function(e) {
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
      } = In(e, t), u = {
        x: n,
        y: r
      }, d = Po(o), p = uu(d);
      let m = u[p], h = u[d];
      const v = In(i, t), g = typeof v == "number" ? {
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
        var b, x;
        const y = p === "y" ? "width" : "height", _ = ["top", "left"].includes(Ln(o)), $ = a.reference[d] - a.floating[y] + (_ && ((b = s.offset) == null ? void 0 : b[d]) || 0) + (_ ? 0 : g.crossAxis), E = a.reference[d] + a.reference[y] + (_ ? 0 : ((x = s.offset) == null ? void 0 : x[d]) || 0) - (_ ? g.crossAxis : 0);
        h < $ ? h = $ : h > E && (h = E);
      }
      return {
        [p]: m,
        [d]: h
      };
    }
  };
}, l_ = function(e) {
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
      } = In(e, t), c = await ca(t, i), l = Ln(n), u = No(n), d = Po(n) === "y", {
        width: p,
        height: m
      } = r.floating;
      let h, v;
      l === "top" || l === "bottom" ? (h = l, v = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = l, h = u === "end" ? "top" : "bottom");
      const g = m - c[h], b = p - c[v], x = !t.middlewareData.shift;
      let y = g, _ = b;
      if (d) {
        const E = p - c.left - c.right;
        _ = u || x ? sr(b, E) : E;
      } else {
        const E = m - c.top - c.bottom;
        y = u || x ? sr(g, E) : E;
      }
      if (x && !u) {
        const E = Wt(c.left, 0), P = Wt(c.right, 0), D = Wt(c.top, 0), R = Wt(c.bottom, 0);
        d ? _ = p - 2 * (E !== 0 || P !== 0 ? E + P : Wt(c.left, c.right)) : y = m - 2 * (D !== 0 || R !== 0 ? D + R : Wt(c.top, c.bottom));
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
function cr(e) {
  return Nm(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Bt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Bn(e) {
  var t;
  return (t = (Nm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Nm(e) {
  return e instanceof Node || e instanceof Bt(e).Node;
}
function Fn(e) {
  return e instanceof Element || e instanceof Bt(e).Element;
}
function wn(e) {
  return e instanceof HTMLElement || e instanceof Bt(e).HTMLElement;
}
function pf(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Bt(e).ShadowRoot;
}
function Fa(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = qt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function u_(e) {
  return ["table", "td", "th"].includes(cr(e));
}
function pu(e) {
  const t = mu(), n = qt(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function d_(e) {
  let t = vo(e);
  for (; wn(t) && !_i(t); ) {
    if (pu(t))
      return t;
    t = vo(t);
  }
  return null;
}
function mu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function _i(e) {
  return ["html", "body", "#document"].includes(cr(e));
}
function qt(e) {
  return Bt(e).getComputedStyle(e);
}
function Ci(e) {
  return Fn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function vo(e) {
  if (cr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    pf(e) && e.host || // Fallback.
    Bn(e)
  );
  return pf(t) ? t.host : t;
}
function Pm(e) {
  const t = vo(e);
  return _i(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : wn(t) && Fa(t) ? t : Pm(t);
}
function zs(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Pm(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Bt(r);
  return o ? t.concat(a, a.visualViewport || [], Fa(r) ? r : []) : t.concat(r, zs(r));
}
function Tm(e) {
  const t = qt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = wn(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Fs(n) !== a || Fs(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function hu(e) {
  return Fn(e) ? e : e.contextElement;
}
function co(e) {
  const t = hu(e);
  if (!wn(t))
    return ir(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Tm(t);
  let s = (a ? Fs(n.width) : n.width) / r, i = (a ? Fs(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const f_ = /* @__PURE__ */ ir(0);
function Om(e) {
  const t = Bt(e);
  return !mu() || !t.visualViewport ? f_ : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function p_(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Bt(e) ? !1 : t;
}
function kr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = hu(e);
  let s = ir(1);
  t && (r ? Fn(r) && (s = co(r)) : s = co(e));
  const i = p_(a, n, r) ? Om(a) : ir(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (a) {
    const p = Bt(a), m = r && Fn(r) ? Bt(r) : r;
    let h = p.frameElement;
    for (; h && r && m !== p; ) {
      const v = co(h), g = h.getBoundingClientRect(), b = qt(h), x = g.left + (h.clientLeft + parseFloat(b.paddingLeft)) * v.x, y = g.top + (h.clientTop + parseFloat(b.paddingTop)) * v.y;
      c *= v.x, l *= v.y, u *= v.x, d *= v.y, c += x, l += y, h = Bt(h).frameElement;
    }
  }
  return Us({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function m_(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = wn(n), a = Bn(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = ir(1);
  const c = ir(0);
  if ((o || !o && r !== "fixed") && ((cr(n) !== "body" || Fa(a)) && (s = Ci(n)), wn(n))) {
    const l = kr(n);
    i = co(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - s.scrollLeft * i.x + c.x,
    y: t.y * i.y - s.scrollTop * i.y + c.y
  };
}
function h_(e) {
  return Array.from(e.getClientRects());
}
function km(e) {
  return kr(Bn(e)).left + Ci(e).scrollLeft;
}
function v_(e) {
  const t = Bn(e), n = Ci(e), r = e.ownerDocument.body, o = Wt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Wt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + km(e);
  const i = -n.scrollTop;
  return qt(r).direction === "rtl" && (s += Wt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function g_(e, t) {
  const n = Bt(e), r = Bn(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = mu();
    (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function b_(e, t) {
  const n = kr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = wn(e) ? co(e) : ir(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function mf(e, t, n) {
  let r;
  if (t === "viewport")
    r = g_(e, n);
  else if (t === "document")
    r = v_(Bn(e));
  else if (Fn(t))
    r = b_(t, n);
  else {
    const o = Om(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Us(r);
}
function Mm(e, t) {
  const n = vo(e);
  return n === t || !Fn(n) || _i(n) ? !1 : qt(n).position === "fixed" || Mm(n, t);
}
function x_(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = zs(e).filter((i) => Fn(i) && cr(i) !== "body"), o = null;
  const a = qt(e).position === "fixed";
  let s = a ? vo(e) : e;
  for (; Fn(s) && !_i(s); ) {
    const i = qt(s), c = pu(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Fa(s) && !c && Mm(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = vo(s);
  }
  return t.set(e, r), r;
}
function y_(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? x_(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, u) => {
    const d = mf(t, u, o);
    return l.top = Wt(d.top, l.top), l.right = sr(d.right, l.right), l.bottom = sr(d.bottom, l.bottom), l.left = Wt(d.left, l.left), l;
  }, mf(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function w_(e) {
  return Tm(e);
}
function $_(e, t, n) {
  const r = wn(t), o = Bn(t), a = n === "fixed", s = kr(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ir(0);
  if (r || !r && !a)
    if ((cr(t) !== "body" || Fa(o)) && (i = Ci(t)), r) {
      const l = kr(t, !0, a, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = km(o));
  return {
    x: s.left + i.scrollLeft - c.x,
    y: s.top + i.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function hf(e, t) {
  return !wn(e) || qt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Dm(e, t) {
  const n = Bt(e);
  if (!wn(e))
    return n;
  let r = hf(e, t);
  for (; r && u_(r) && qt(r).position === "static"; )
    r = hf(r, t);
  return r && (cr(r) === "html" || cr(r) === "body" && qt(r).position === "static" && !pu(r)) ? n : r || d_(e) || n;
}
const __ = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Dm, a = this.getDimensions;
  return {
    reference: $_(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function C_(e) {
  return qt(e).direction === "rtl";
}
const S_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: m_,
  getDocumentElement: Bn,
  getClippingRect: y_,
  getOffsetParent: Dm,
  getElementRects: __,
  getClientRects: h_,
  getDimensions: w_,
  getScale: co,
  isElement: Fn,
  isRTL: C_
};
function E_(e, t) {
  let n = null, r;
  const o = Bn(e);
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
    const m = cs(u), h = cs(o.clientWidth - (l + d)), v = cs(o.clientHeight - (u + p)), g = cs(l), x = {
      rootMargin: -m + "px " + -h + "px " + -v + "px " + -g + "px",
      threshold: Wt(0, sr(1, c)) || 1
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
function N_(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = hu(e), u = o || a ? [...l ? zs(l) : [], ...zs(t)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const d = l && i ? E_(l, n) : null;
  let p = -1, m = null;
  s && (m = new ResizeObserver((b) => {
    let [x] = b;
    x && x.target === l && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), l && !c && m.observe(l), m.observe(t));
  let h, v = c ? kr(e) : null;
  c && g();
  function g() {
    const b = kr(e);
    v && (b.x !== v.x || b.y !== v.y || b.width !== v.width || b.height !== v.height) && n(), v = b, h = requestAnimationFrame(g);
  }
  return n(), () => {
    u.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), d && d(), m && m.disconnect(), m = null, c && cancelAnimationFrame(h);
  };
}
const P_ = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: S_,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return n_(e, t, {
    ...o,
    platform: a
  });
}, T_ = (e) => {
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
      return r && t(r) ? r.current != null ? uf({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? uf({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var Es = typeof document < "u" ? Ma : Q;
function Ws(e, t) {
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
        if (!Ws(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !Ws(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Rm(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function vf(e, t) {
  const n = Rm(e);
  return Math.round(t * n) / n;
}
function gf(e) {
  const t = C.useRef(e);
  return Es(() => {
    t.current = e;
  }), t;
}
function O_(e) {
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
  Ws(p, r) || m(r);
  const [h, v] = C.useState(null), [g, b] = C.useState(null), x = C.useCallback((I) => {
    I != E.current && (E.current = I, v(I));
  }, [v]), y = C.useCallback((I) => {
    I !== P.current && (P.current = I, b(I));
  }, [b]), _ = a || h, $ = s || g, E = C.useRef(null), P = C.useRef(null), D = C.useRef(u), R = gf(c), K = gf(o), G = C.useCallback(() => {
    if (!E.current || !P.current)
      return;
    const I = {
      placement: t,
      strategy: n,
      middleware: p
    };
    K.current && (I.platform = K.current), P_(E.current, P.current, I).then((V) => {
      const Y = {
        ...V,
        isPositioned: !0
      };
      W.current && !Ws(D.current, Y) && (D.current = Y, w0.flushSync(() => {
        d(Y);
      }));
    });
  }, [p, t, n, K]);
  Es(() => {
    l === !1 && D.current.isPositioned && (D.current.isPositioned = !1, d((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [l]);
  const W = C.useRef(!1);
  Es(() => (W.current = !0, () => {
    W.current = !1;
  }), []), Es(() => {
    if (_ && (E.current = _), $ && (P.current = $), _ && $) {
      if (R.current)
        return R.current(_, $, G);
      G();
    }
  }, [_, $, G, R]);
  const Z = C.useMemo(() => ({
    reference: E,
    floating: P,
    setReference: x,
    setFloating: y
  }), [x, y]), L = C.useMemo(() => ({
    reference: _,
    floating: $
  }), [_, $]), A = C.useMemo(() => {
    const I = {
      position: n,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return I;
    const V = vf(L.floating, u.x), Y = vf(L.floating, u.y);
    return i ? {
      ...I,
      transform: "translate(" + V + "px, " + Y + "px)",
      ...Rm(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: V,
      top: Y
    };
  }, [n, i, L.floating, u.x, u.y]);
  return C.useMemo(() => ({
    ...u,
    update: G,
    refs: Z,
    elements: L,
    floatingStyles: A
  }), [u, G, Z, L, A]);
}
function Va(e) {
  const [t, n] = X(void 0);
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
const Am = "Popper", [jm, En] = at(Am), [k_, Im] = jm(Am), M_ = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = X(null);
  return /* @__PURE__ */ w(k_, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, D_ = "PopperAnchor", R_ = /* @__PURE__ */ j((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = Im(D_, n), s = H(null), i = Ce(t, s);
  return Q(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ w(de.div, N({}, o, {
    ref: i
  }));
}), Lm = "PopperContent", [A_, LD] = jm(Lm), j_ = /* @__PURE__ */ j((e, t) => {
  var n, r, o, a, s, i, c, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: p = 0, align: m = "center", alignOffset: h = 0, arrowPadding: v = 0, collisionBoundary: g = [], collisionPadding: b = 0, sticky: x = "partial", hideWhenDetached: y = !1, avoidCollisions: _ = !0, onPlaced: $, ...E } = e, P = Im(Lm, u), [D, R] = X(null), K = Ce(
    t,
    ($e) => R($e)
  ), [G, W] = X(null), Z = Va(G), L = (n = Z == null ? void 0 : Z.width) !== null && n !== void 0 ? n : 0, A = (r = Z == null ? void 0 : Z.height) !== null && r !== void 0 ? r : 0, I = d + (m !== "center" ? "-" + m : ""), V = typeof b == "number" ? b : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...b
  }, Y = Array.isArray(g) ? g : [
    g
  ], M = Y.length > 0, k = {
    padding: V,
    boundary: Y.filter(I_),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: M
  }, { refs: B, floatingStyles: q, placement: oe, isPositioned: te, middlewareData: ve } = O_({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: I,
    whileElementsMounted: N_,
    elements: {
      reference: P.anchor
    },
    middleware: [
      s_({
        mainAxis: p + A,
        alignmentAxis: h
      }),
      _ && i_({
        mainAxis: !0,
        crossAxis: !1,
        limiter: x === "partial" ? c_() : void 0,
        ...k
      }),
      _ && r_({
        ...k
      }),
      l_({
        ...k,
        apply: ({ elements: $e, rects: Te, availableWidth: T, availableHeight: z }) => {
          const { width: J, height: pe } = Te.reference, le = $e.floating.style;
          le.setProperty("--radix-popper-available-width", `${T}px`), le.setProperty("--radix-popper-available-height", `${z}px`), le.setProperty("--radix-popper-anchor-width", `${J}px`), le.setProperty("--radix-popper-anchor-height", `${pe}px`);
        }
      }),
      G && T_({
        element: G,
        padding: v
      }),
      L_({
        arrowWidth: L,
        arrowHeight: A
      }),
      y && o_({
        strategy: "referenceHidden"
      })
    ]
  }), [me, re] = Fm(oe), se = qe($);
  _t(() => {
    te && (se == null || se());
  }, [
    te,
    se
  ]);
  const ue = (o = ve.arrow) === null || o === void 0 ? void 0 : o.x, ne = (a = ve.arrow) === null || a === void 0 ? void 0 : a.y, he = ((s = ve.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [U, ge] = X();
  return _t(() => {
    D && ge(window.getComputedStyle(D).zIndex);
  }, [
    D
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
  }, /* @__PURE__ */ w(de.div, N({
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
function I_(e) {
  return e !== null;
}
const L_ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: i, rects: c, middlewareData: l } = t, d = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = d ? 0 : e.arrowWidth, m = d ? 0 : e.arrowHeight, [h, v] = Fm(i), g = {
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
function Fm(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const To = M_, Ua = R_, za = j_, Si = /* @__PURE__ */ j((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Kl.createPortal(/* @__PURE__ */ w(de.div, N({}, o, {
    ref: t
  })), r) : null;
});
function F_(e, t) {
  return hi((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const it = (e) => {
  const { present: t, children: n } = e, r = V_(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Ft.only(n), a = Ce(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Co(o, {
    ref: a
  }) : null;
};
it.displayName = "Presence";
function V_(e) {
  const [t, n] = X(), r = H({}), o = H(e), a = H("none"), s = e ? "mounted" : "unmounted", [i, c] = F_(s, {
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
    const l = ls(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), _t(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, m = ls(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), _t(() => {
    if (t) {
      const l = (d) => {
        const m = ls(r.current).includes(d.animationName);
        d.target === t && m && vi(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = ls(r.current));
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
function ls(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function dt({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = U_({
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
function U_({ defaultProp: e, onChange: t }) {
  const n = X(e), [r] = n, o = H(r), a = qe(t);
  return Q(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const bc = "rovingFocusGroup.onEntryFocus", z_ = {
  bubbles: !1,
  cancelable: !0
}, vu = "RovingFocusGroup", [ll, Vm, W_] = vr(vu), [B_, gr] = at(vu, [
  W_
]), [H_, Y_] = B_(vu), K_ = /* @__PURE__ */ j((e, t) => /* @__PURE__ */ w(ll.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ w(ll.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ w(G_, N({}, e, {
  ref: t
}))))), G_ = /* @__PURE__ */ j((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: l, ...u } = e, d = H(null), p = Ce(t, d), m = Sn(a), [h = null, v] = dt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [g, b] = X(!1), x = qe(l), y = Vm(n), _ = H(!1), [$, E] = X(0);
  return Q(() => {
    const P = d.current;
    if (P)
      return P.addEventListener(bc, x), () => P.removeEventListener(bc, x);
  }, [
    x
  ]), /* @__PURE__ */ w(H_, {
    scope: n,
    orientation: r,
    dir: m,
    loop: o,
    currentTabStopId: h,
    onItemFocus: fe(
      (P) => v(P),
      [
        v
      ]
    ),
    onItemShiftTab: fe(
      () => b(!0),
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
  }, /* @__PURE__ */ w(de.div, N({
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
    onFocus: ee(e.onFocus, (P) => {
      const D = !_.current;
      if (P.target === P.currentTarget && D && !g) {
        const R = new CustomEvent(bc, z_);
        if (P.currentTarget.dispatchEvent(R), !R.defaultPrevented) {
          const K = y().filter(
            (A) => A.focusable
          ), G = K.find(
            (A) => A.active
          ), W = K.find(
            (A) => A.id === h
          ), L = [
            G,
            W,
            ...K
          ].filter(Boolean).map(
            (A) => A.ref.current
          );
          Um(L);
        }
      }
      _.current = !1;
    }),
    onBlur: ee(
      e.onBlur,
      () => b(!1)
    )
  })));
}), Z_ = "RovingFocusGroupItem", q_ = /* @__PURE__ */ j((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = mt(), c = a || i, l = Y_(Z_, n), u = l.currentTabStopId === c, d = Vm(n), { onFocusableItemAdd: p, onFocusableItemRemove: m } = l;
  return Q(() => {
    if (r)
      return p(), () => m();
  }, [
    r,
    p,
    m
  ]), /* @__PURE__ */ w(ll.ItemSlot, {
    scope: n,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ w(de.span, N({
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
      const v = J_(h, l.orientation, l.dir);
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
          b = l.loop ? e2(b, x + 1) : b.slice(x + 1);
        }
        setTimeout(
          () => Um(b)
        );
      }
    })
  })));
}), X_ = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Q_(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function J_(e, t, n) {
  const r = Q_(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return X_[r];
}
function Um(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function e2(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Ei = K_, Ni = q_;
var t2 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Jr = /* @__PURE__ */ new WeakMap(), us = /* @__PURE__ */ new WeakMap(), ds = {}, xc = 0, zm = function(e) {
  return e && (e.host || zm(e.parentNode));
}, n2 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = zm(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, r2 = function(e, t, n, r) {
  var o = n2(t, Array.isArray(e) ? e : [e]);
  ds[n] || (ds[n] = /* @__PURE__ */ new WeakMap());
  var a = ds[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || i.has(d) || (i.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (i.has(p))
        u(p);
      else {
        var m = p.getAttribute(r), h = m !== null && m !== "false", v = (Jr.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
        Jr.set(p, v), a.set(p, g), s.push(p), v === 1 && h && us.set(p, !0), g === 1 && p.setAttribute(n, "true"), h || p.setAttribute(r, "true");
      }
    });
  };
  return u(t), i.clear(), xc++, function() {
    s.forEach(function(d) {
      var p = Jr.get(d) - 1, m = a.get(d) - 1;
      Jr.set(d, p), a.set(d, m), p || (us.has(d) || d.removeAttribute(r), us.delete(d)), m || d.removeAttribute(n);
    }), xc--, xc || (Jr = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), us = /* @__PURE__ */ new WeakMap(), ds = {});
  };
}, Wa = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || t2(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), r2(r, o, n, "aria-hidden")) : function() {
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
function gu(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Wm(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var ea = "right-scroll-bar-position", ta = "width-before-scroll-bar", o2 = "with-scroll-bars-hidden", a2 = "--removed-body-scroll-bar-size";
function s2(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function i2(e, t) {
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
function Bm(e, t) {
  return i2(t || null, function(n) {
    return e.forEach(function(r) {
      return s2(r, n);
    });
  });
}
function c2(e) {
  return e;
}
function l2(e, t) {
  t === void 0 && (t = c2);
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
function Hm(e) {
  e === void 0 && (e = {});
  var t = l2(null);
  return t.options = Ct({ async: !0, ssr: !1 }, e), t;
}
var Ym = function(e) {
  var t = e.sideCar, n = gu(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, Ct({}, n));
};
Ym.isSideCarExport = !0;
function Km(e, t) {
  return e.useMedium(t), Ym;
}
var Gm = Hm(), yc = function() {
}, Pi = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: yc,
    onWheelCapture: yc,
    onTouchMoveCapture: yc
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, x = gu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = p, _ = Bm([n, t]), $ = Ct(Ct({}, x), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement(y, { sideCar: Gm, removeScrollBar: l, shards: d, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), Ct(Ct({}, $), { ref: _ })) : C.createElement(b, Ct({}, $, { className: c, ref: _ }), i)
  );
});
Pi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Pi.classNames = {
  fullWidth: ta,
  zeroRight: ea
};
var bf, u2 = function() {
  if (bf)
    return bf;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function d2() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = u2();
  return t && e.setAttribute("nonce", t), e;
}
function f2(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function p2(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var m2 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = d2()) && (f2(t, n), p2(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, h2 = function() {
  var e = m2();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, bu = function() {
  var e = h2(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, v2 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, wc = function(e) {
  return parseInt(e || "", 10) || 0;
}, g2 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [wc(n), wc(r), wc(o)];
}, b2 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return v2;
  var t = g2(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, x2 = bu(), y2 = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(o2, ` {
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
    `).concat(a2, ": ").concat(i, `px;
  }
`);
}, Zm = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, a = C.useMemo(function() {
    return b2(o);
  }, [o]);
  return C.createElement(x2, { styles: y2(a, !t, o, n ? "" : "!important") });
}, ul = !1;
if (typeof window < "u")
  try {
    var fs = Object.defineProperty({}, "passive", {
      get: function() {
        return ul = !0, !0;
      }
    });
    window.addEventListener("test", fs, fs), window.removeEventListener("test", fs, fs);
  } catch {
    ul = !1;
  }
var eo = ul ? { passive: !1 } : !1, w2 = function(e) {
  return e.tagName === "TEXTAREA";
}, qm = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !w2(e) && n[t] === "visible")
  );
}, $2 = function(e) {
  return qm(e, "overflowY");
}, _2 = function(e) {
  return qm(e, "overflowX");
}, xf = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Xm(e, n);
    if (r) {
      var o = Qm(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, C2 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, S2 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Xm = function(e, t) {
  return e === "v" ? $2(t) : _2(t);
}, Qm = function(e, t) {
  return e === "v" ? C2(t) : S2(t);
}, E2 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, N2 = function(e, t, n, r, o) {
  var a = E2(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, p = 0;
  do {
    var m = Qm(e, i), h = m[0], v = m[1], g = m[2], b = v - g - a * h;
    (h || b) && Xm(e, i) && (d += b, p += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, ps = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, yf = function(e) {
  return [e.deltaX, e.deltaY];
}, wf = function(e) {
  return e && "current" in e ? e.current : e;
}, P2 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, T2 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, O2 = 0, to = [];
function k2(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(O2++)[0], a = C.useState(function() {
    return bu();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Wm([e.lockRef.current], (e.shards || []).map(wf), !0).filter(Boolean);
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
    var b = ps(v), x = n.current, y = "deltaX" in v ? v.deltaX : x[0] - b[0], _ = "deltaY" in v ? v.deltaY : x[1] - b[1], $, E = v.target, P = Math.abs(y) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && P === "h" && E.type === "range")
      return !1;
    var D = xf(P, E);
    if (!D)
      return !0;
    if (D ? $ = P : ($ = P === "v" ? "h" : "v", D = xf(P, E)), !D)
      return !1;
    if (!r.current && "changedTouches" in v && (y || _) && (r.current = $), !$)
      return !0;
    var R = r.current || $;
    return N2(R, g, v, R === "h" ? y : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!to.length || to[to.length - 1] !== a)) {
      var b = "deltaY" in g ? yf(g) : ps(g), x = t.current.filter(function($) {
        return $.name === g.type && $.target === g.target && P2($.delta, b);
      })[0];
      if (x && x.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!x) {
        var y = (s.current.shards || []).map(wf).filter(Boolean).filter(function($) {
          return $.contains(g.target);
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
    n.current = ps(v), r.current = void 0;
  }, []), d = C.useCallback(function(v) {
    l(v.type, yf(v), v.target, i(v, e.lockRef.current));
  }, []), p = C.useCallback(function(v) {
    l(v.type, ps(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return to.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, eo), document.addEventListener("touchmove", c, eo), document.addEventListener("touchstart", u, eo), function() {
      to = to.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, eo), document.removeEventListener("touchmove", c, eo), document.removeEventListener("touchstart", u, eo);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    h ? C.createElement(a, { styles: T2(o) }) : null,
    m ? C.createElement(Zm, { gapMode: "margin" }) : null
  );
}
const M2 = Km(Gm, k2);
var Jm = C.forwardRef(function(e, t) {
  return C.createElement(Pi, Ct({}, e, { ref: t, sideCar: M2 }));
});
Jm.classNames = Pi.classNames;
const Ti = Jm, dl = [
  "Enter",
  " "
], D2 = [
  "ArrowDown",
  "PageUp",
  "Home"
], eh = [
  "ArrowUp",
  "PageDown",
  "End"
], R2 = [
  ...D2,
  ...eh
], A2 = {
  ltr: [
    ...dl,
    "ArrowRight"
  ],
  rtl: [
    ...dl,
    "ArrowLeft"
  ]
}, j2 = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, Oi = "Menu", [la, I2, L2] = vr(Oi), [Wr, Ba] = at(Oi, [
  L2,
  En,
  gr
]), ki = En(), th = gr(), [nh, br] = Wr(Oi), [F2, Ha] = Wr(Oi), V2 = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = ki(t), [c, l] = X(null), u = H(!1), d = qe(a), p = Sn(o);
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
  }, []), /* @__PURE__ */ w(To, i, /* @__PURE__ */ w(nh, {
    scope: t,
    open: n,
    onOpenChange: d,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ w(F2, {
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
}, rh = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = ki(n);
  return /* @__PURE__ */ w(Ua, N({}, o, r, {
    ref: t
  }));
}), oh = "MenuPortal", [U2, ah] = Wr(oh, {
  forceMount: void 0
}), z2 = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = br(oh, t);
  return /* @__PURE__ */ w(U2, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ w(it, {
    present: n || a.open
  }, /* @__PURE__ */ w(Si, {
    asChild: !0,
    container: o
  }, r)));
}, rn = "MenuContent", [W2, xu] = Wr(rn), B2 = /* @__PURE__ */ j((e, t) => {
  const n = ah(rn, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = br(rn, e.__scopeMenu), s = Ha(rn, e.__scopeMenu);
  return /* @__PURE__ */ w(la.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(it, {
    present: r || a.open
  }, /* @__PURE__ */ w(la.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ w(H2, N({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(Y2, N({}, o, {
    ref: t
  })))));
}), H2 = /* @__PURE__ */ j((e, t) => {
  const n = br(rn, e.__scopeMenu), r = H(null), o = Ce(t, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return Wa(a);
  }, []), /* @__PURE__ */ w(yu, N({}, e, {
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
}), Y2 = /* @__PURE__ */ j((e, t) => {
  const n = br(rn, e.__scopeMenu);
  return /* @__PURE__ */ w(yu, N({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), yu = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ...v } = e, g = br(rn, n), b = Ha(rn, n), x = ki(n), y = th(n), _ = I2(n), [$, E] = X(null), P = H(null), D = Ce(t, P, g.onContentChange), R = H(0), K = H(""), G = H(0), W = H(null), Z = H("right"), L = H(0), A = h ? Ti : Zt, I = h ? {
    as: bn,
    allowPinchZoom: !0
  } : void 0, V = (M) => {
    var k, B;
    const q = K.current + M, oe = _().filter(
      (ue) => !ue.disabled
    ), te = document.activeElement, ve = (k = oe.find(
      (ue) => ue.ref.current === te
    )) === null || k === void 0 ? void 0 : k.textValue, me = oe.map(
      (ue) => ue.textValue
    ), re = dC(me, q, ve), se = (B = oe.find(
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
  Q(() => () => window.clearTimeout(R.current), []), wi();
  const Y = fe((M) => {
    var k, B;
    return Z.current === ((k = W.current) === null || k === void 0 ? void 0 : k.side) && pC(M, (B = W.current) === null || B === void 0 ? void 0 : B.area);
  }, []);
  return /* @__PURE__ */ w(W2, {
    scope: n,
    searchRef: K,
    onItemEnter: fe((M) => {
      Y(M) && M.preventDefault();
    }, [
      Y
    ]),
    onItemLeave: fe((M) => {
      var k;
      Y(M) || ((k = P.current) === null || k === void 0 || k.focus(), E(null));
    }, [
      Y
    ]),
    onTriggerLeave: fe((M) => {
      Y(M) && M.preventDefault();
    }, [
      Y
    ]),
    pointerGraceTimerRef: G,
    onPointerGraceIntentChange: fe((M) => {
      W.current = M;
    }, [])
  }, /* @__PURE__ */ w(A, I, /* @__PURE__ */ w($i, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: ee(a, (M) => {
      var k;
      M.preventDefault(), (k = P.current) === null || k === void 0 || k.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ w(zr, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: p,
    onDismiss: m
  }, /* @__PURE__ */ w(Ei, N({
    asChild: !0
  }, y, {
    dir: b.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: $,
    onCurrentTabStopIdChange: E,
    onEntryFocus: ee(c, (M) => {
      b.isUsingKeyboardRef.current || M.preventDefault();
    })
  }), /* @__PURE__ */ w(za, N({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": fh(g.open),
    "data-radix-menu-content": "",
    dir: b.dir
  }, x, v, {
    ref: D,
    style: {
      outline: "none",
      ...v.style
    },
    onKeyDown: ee(v.onKeyDown, (M) => {
      const B = M.target.closest("[data-radix-menu-content]") === M.currentTarget, q = M.ctrlKey || M.altKey || M.metaKey, oe = M.key.length === 1;
      B && (M.key === "Tab" && M.preventDefault(), !q && oe && V(M.key));
      const te = P.current;
      if (M.target !== te || !R2.includes(M.key))
        return;
      M.preventDefault();
      const me = _().filter(
        (re) => !re.disabled
      ).map(
        (re) => re.ref.current
      );
      eh.includes(M.key) && me.reverse(), lC(me);
    }),
    onBlur: ee(e.onBlur, (M) => {
      M.currentTarget.contains(M.target) || (window.clearTimeout(R.current), K.current = "");
    }),
    onPointerMove: ee(e.onPointerMove, ua((M) => {
      const k = M.target, B = L.current !== M.clientX;
      if (M.currentTarget.contains(k) && B) {
        const q = M.clientX > L.current ? "right" : "left";
        Z.current = q, L.current = M.clientX;
      }
    }))
  })))))));
}), sh = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(de.div, N({
    role: "group"
  }, r, {
    ref: t
  }));
}), K2 = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(de.div, N({}, r, {
    ref: t
  }));
}), fl = "MenuItem", $f = "menu.itemSelect", wu = /* @__PURE__ */ j((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = H(null), s = Ha(fl, e.__scopeMenu), i = xu(fl, e.__scopeMenu), c = Ce(t, a), l = H(!1), u = () => {
    const d = a.current;
    if (!n && d) {
      const p = new CustomEvent($f, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        $f,
        (m) => r == null ? void 0 : r(m),
        {
          once: !0
        }
      ), Ls(d, p), p.defaultPrevented ? l.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ w(ih, N({}, o, {
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
      n || p && d.key === " " || dl.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), ih = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = xu(fl, n), i = th(n), c = H(null), l = Ce(t, c), [u, d] = X(!1), [p, m] = X("");
  return Q(() => {
    const h = c.current;
    if (h) {
      var v;
      m(((v = h.textContent) !== null && v !== void 0 ? v : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ w(la.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? p
  }, /* @__PURE__ */ w(Ni, N({
    asChild: !0
  }, i, {
    focusable: !r
  }), /* @__PURE__ */ w(de.div, N({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: ee(e.onPointerMove, ua((h) => {
      r ? s.onItemLeave(h) : (s.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus());
    })),
    onPointerLeave: ee(e.onPointerLeave, ua(
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
}), G2 = /* @__PURE__ */ j((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ w(lh, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ w(wu, N({
    role: "menuitemcheckbox",
    "aria-checked": Bs(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": $u(n),
    onSelect: ee(
      o.onSelect,
      () => r == null ? void 0 : r(Bs(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), Z2 = "MenuRadioGroup", [q2, X2] = Wr(Z2, {
  value: void 0,
  onValueChange: () => {
  }
}), Q2 = /* @__PURE__ */ j((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = qe(r);
  return /* @__PURE__ */ w(q2, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ w(sh, N({}, o, {
    ref: t
  })));
}), J2 = "MenuRadioItem", eC = /* @__PURE__ */ j((e, t) => {
  const { value: n, ...r } = e, o = X2(J2, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ w(lh, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ w(wu, N({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": $u(a),
    onSelect: ee(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), ch = "MenuItemIndicator", [lh, tC] = Wr(ch, {
  checked: !1
}), nC = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = tC(ch, n);
  return /* @__PURE__ */ w(it, {
    present: r || Bs(a.checked) || a.checked === !0
  }, /* @__PURE__ */ w(de.span, N({}, o, {
    ref: t,
    "data-state": $u(a.checked)
  })));
}), rC = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(de.div, N({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), uh = "MenuSub", [oC, dh] = Wr(uh), aC = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = br(uh, t), s = ki(t), [i, c] = X(null), [l, u] = X(null), d = qe(o);
  return Q(() => (a.open === !1 && d(!1), () => d(!1)), [
    a.open,
    d
  ]), /* @__PURE__ */ w(To, s, /* @__PURE__ */ w(nh, {
    scope: t,
    open: r,
    onOpenChange: d,
    content: l,
    onContentChange: u
  }, /* @__PURE__ */ w(oC, {
    scope: t,
    contentId: mt(),
    triggerId: mt(),
    trigger: i,
    onTriggerChange: c
  }, n)));
}, ms = "MenuSubTrigger", sC = /* @__PURE__ */ j((e, t) => {
  const n = br(ms, e.__scopeMenu), r = Ha(ms, e.__scopeMenu), o = dh(ms, e.__scopeMenu), a = xu(ms, e.__scopeMenu), s = H(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, l = {
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
  ]), /* @__PURE__ */ w(rh, N({
    asChild: !0
  }, l), /* @__PURE__ */ w(ih, N({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": fh(n.open)
  }, e, {
    ref: Da(t, o.onTriggerChange),
    onClick: (d) => {
      var p;
      (p = e.onClick) === null || p === void 0 || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: ee(e.onPointerMove, ua((d) => {
      a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: ee(e.onPointerLeave, ua((d) => {
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
    onKeyDown: ee(e.onKeyDown, (d) => {
      const p = a.searchRef.current !== "";
      if (!(e.disabled || p && d.key === " ") && A2[r.dir].includes(d.key)) {
        var m;
        n.onOpenChange(!0), (m = n.content) === null || m === void 0 || m.focus(), d.preventDefault();
      }
    })
  })));
}), iC = "MenuSubContent", cC = /* @__PURE__ */ j((e, t) => {
  const n = ah(rn, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = br(rn, e.__scopeMenu), s = Ha(rn, e.__scopeMenu), i = dh(iC, e.__scopeMenu), c = H(null), l = Ce(t, c);
  return /* @__PURE__ */ w(la.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(it, {
    present: r || a.open
  }, /* @__PURE__ */ w(la.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(yu, N({
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
      const d = u.currentTarget.contains(u.target), p = j2[s.dir].includes(u.key);
      if (d && p) {
        var m;
        a.onOpenChange(!1), (m = i.trigger) === null || m === void 0 || m.focus(), u.preventDefault();
      }
    })
  })))));
});
function fh(e) {
  return e ? "open" : "closed";
}
function Bs(e) {
  return e === "indeterminate";
}
function $u(e) {
  return Bs(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function lC(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function uC(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function dC(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = uC(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function fC(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function pC(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return fC(n, t);
}
function ua(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const _u = V2, Cu = rh, Su = z2, Eu = B2, Nu = sh, Pu = K2, Tu = wu, Ou = G2, ku = Q2, Mu = eC, Du = nC, Ru = rC, Au = aC, ju = sC, Iu = cC, ph = "ContextMenu", [mC, FD] = at(ph, [
  Ba
]), Dt = Ba(), [hC, mh] = mC(ph), vC = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = X(!1), c = Dt(t), l = qe(r), u = fe((d) => {
    i(d), l(d);
  }, [
    l
  ]);
  return /* @__PURE__ */ w(hC, {
    scope: t,
    open: s,
    onOpenChange: u,
    modal: a
  }, /* @__PURE__ */ w(_u, N({}, c, {
    dir: o,
    open: s,
    onOpenChange: u,
    modal: a
  }), n));
}, gC = "ContextMenuTrigger", bC = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = mh(gC, n), s = Dt(n), i = H({
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
  ), /* @__PURE__ */ w(Zt, null, /* @__PURE__ */ w(Cu, N({}, s, {
    virtualRef: c
  })), /* @__PURE__ */ w(de.span, N({
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
    onPointerDown: r ? e.onPointerDown : ee(e.onPointerDown, hs((p) => {
      u(), l.current = window.setTimeout(
        () => d(p),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : ee(e.onPointerMove, hs(u)),
    onPointerCancel: r ? e.onPointerCancel : ee(e.onPointerCancel, hs(u)),
    onPointerUp: r ? e.onPointerUp : ee(e.onPointerUp, hs(u))
  })));
}), xC = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = Dt(t);
  return /* @__PURE__ */ w(Su, N({}, r, n));
}, yC = "ContextMenuContent", wC = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = mh(yC, n), a = Dt(n), s = H(!1);
  return /* @__PURE__ */ w(Eu, N({}, a, r, {
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
}), $C = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Dt(n);
  return /* @__PURE__ */ w(Nu, N({}, o, r, {
    ref: t
  }));
}), _C = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Dt(n);
  return /* @__PURE__ */ w(Pu, N({}, o, r, {
    ref: t
  }));
}), CC = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Dt(n);
  return /* @__PURE__ */ w(Tu, N({}, o, r, {
    ref: t
  }));
}), SC = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Dt(n);
  return /* @__PURE__ */ w(Ou, N({}, o, r, {
    ref: t
  }));
}), EC = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Dt(n);
  return /* @__PURE__ */ w(ku, N({}, o, r, {
    ref: t
  }));
}), NC = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Dt(n);
  return /* @__PURE__ */ w(Mu, N({}, o, r, {
    ref: t
  }));
}), PC = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Dt(n);
  return /* @__PURE__ */ w(Du, N({}, o, r, {
    ref: t
  }));
}), TC = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Dt(n);
  return /* @__PURE__ */ w(Ru, N({}, o, r, {
    ref: t
  }));
}), OC = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = Dt(t), [i, c] = dt({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ w(Au, N({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, kC = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Dt(n);
  return /* @__PURE__ */ w(ju, N({}, o, r, {
    ref: t
  }));
}), MC = /* @__PURE__ */ j((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Dt(n);
  return /* @__PURE__ */ w(Iu, N({}, o, r, {
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
function hs(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const DC = vC, RC = bC, hh = xC, vh = wC, AC = $C, gh = _C, bh = CC, xh = SC, jC = EC, yh = NC, wh = PC, $h = TC, IC = OC, _h = kC, Ch = MC, VD = DC, UD = RC, zD = AC, WD = hh, BD = IC, HD = jC, LC = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  _h,
  {
    ref: o,
    className: F(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ f.exports.jsx(Eo, { className: "ml-auto h-4 w-4" })
    ]
  }
));
LC.displayName = _h.displayName;
const FC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ch,
  {
    ref: n,
    className: F(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
FC.displayName = Ch.displayName;
const VC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(hh, { children: /* @__PURE__ */ f.exports.jsx(
  vh,
  {
    ref: n,
    className: F(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
VC.displayName = vh.displayName;
const UC = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  bh,
  {
    ref: r,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
UC.displayName = bh.displayName;
const zC = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  xh,
  {
    ref: o,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(wh, { children: /* @__PURE__ */ f.exports.jsx(cn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
zC.displayName = xh.displayName;
const WC = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  yh,
  {
    ref: r,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(wh, { children: /* @__PURE__ */ f.exports.jsx(gi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
WC.displayName = yh.displayName;
const BC = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  gh,
  {
    ref: r,
    className: F(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
BC.displayName = gh.displayName;
const HC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  $h,
  {
    ref: n,
    className: F("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
HC.displayName = $h.displayName;
const YC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: F(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
YC.displayName = "ContextMenuShortcut";
var Ya = (e) => e.type === "checkbox", io = (e) => e instanceof Date, Tt = (e) => e == null;
const Sh = (e) => typeof e == "object";
var vt = (e) => !Tt(e) && !Array.isArray(e) && Sh(e) && !io(e), Eh = (e) => vt(e) && e.target ? Ya(e.target) ? e.target.checked : e.target.value : e, KC = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Nh = (e, t) => e.has(KC(t)), GC = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return vt(t) && t.hasOwnProperty("isPrototypeOf");
}, Lu = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function vn(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Lu && (e instanceof Blob || e instanceof FileList)) && (n || vt(e)))
    if (t = n ? [] : {}, !n && !GC(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = vn(e[r]));
  else
    return e;
  return t;
}
var Ka = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ut = (e) => e === void 0, xe = (e, t, n) => {
  if (!t || !vt(e))
    return n;
  const r = Ka(t.split(/[,[\].]+?/)).reduce((o, a) => Tt(o) ? o : o[a], e);
  return ut(r) || r === e ? ut(e[t]) ? n : e[t] : r;
};
const Hs = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, tn = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, kn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Ph = S.createContext(null), Mi = () => S.useContext(Ph), ZC = (e) => {
  const { children: t, ...n } = e;
  return S.createElement(Ph.Provider, { value: n }, t);
};
var Th = (e, t, n, r = !0) => {
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
}, Yt = (e) => vt(e) && !Object.keys(e).length, Oh = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return Yt(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || tn.all));
}, Ns = (e) => Array.isArray(e) ? e : [e], kh = (e, t, n) => n && t ? e === t : !e || !t || e === t || Ns(e).some((r) => r && (r.startsWith(t) || t.startsWith(r)));
function Fu(e) {
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
function qC(e) {
  const t = Mi(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, i] = S.useState(n._formState), c = S.useRef(!0), l = S.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = S.useRef(o);
  return u.current = o, Fu({
    disabled: r,
    next: (d) => c.current && kh(u.current, d.name, a) && Oh(d, l.current, n._updateFormState) && i({
      ...n._formState,
      ...d
    }),
    subject: n._subjects.state
  }), S.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), Th(s, n, l.current, !1);
}
var gn = (e) => typeof e == "string", Mh = (e, t, n, r, o) => gn(e) ? (r && t.watch.add(e), xe(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), xe(n, a))) : (r && (t.watchAll = !0), n);
function XC(e) {
  const t = Mi(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, i = S.useRef(r);
  i.current = r, Fu({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      kh(i.current, u.name, s) && l(vn(Mh(i.current, n._names, u.values || n._formValues, !1, o)));
    }
  });
  const [c, l] = S.useState(n._getWatch(r, o));
  return S.useEffect(() => n._removeUnmounted()), c;
}
var Vu = (e) => /^\w*$/.test(e), Dh = (e) => Ka(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Xe(e, t, n) {
  let r = -1;
  const o = Vu(t) ? [t] : Dh(t), a = o.length, s = a - 1;
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
function QC(e) {
  const t = Mi(), { name: n, control: r = t.control, shouldUnregister: o } = e, a = Nh(r._names.array, n), s = XC({
    control: r,
    name: n,
    defaultValue: xe(r._formValues, n, xe(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), i = qC({
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
          value: Eh(l),
          name: n
        },
        type: Hs.CHANGE
      }), [n]),
      onBlur: S.useCallback(() => c.current.onBlur({
        target: {
          value: xe(r._formValues, n),
          name: n
        },
        type: Hs.BLUR
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
const JC = (e) => e.render(QC(e));
var Rh = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {};
const pl = (e, t, n) => {
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
        vt(s) && pl(s, t);
    }
  }
};
var _f = (e) => ({
  isOnSubmit: !e || e === tn.onSubmit,
  isOnBlur: e === tn.onBlur,
  isOnChange: e === tn.onChange,
  isOnAll: e === tn.all,
  isOnTouch: e === tn.onTouched
}), Cf = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)))), eS = (e, t, n) => {
  const r = Ka(xe(e, n));
  return Xe(r, "root", t[n]), Xe(e, n, r), e;
}, lo = (e) => typeof e == "boolean", Uu = (e) => e.type === "file", or = (e) => typeof e == "function", Ys = (e) => {
  if (!Lu)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Ps = (e) => gn(e), zu = (e) => e.type === "radio", Ks = (e) => e instanceof RegExp;
const Sf = {
  value: !1,
  isValid: !1
}, Ef = { value: !0, isValid: !0 };
var Ah = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !ut(e[0].attributes.value) ? ut(e[0].value) || e[0].value === "" ? Ef : { value: e[0].value, isValid: !0 } : Ef
    ) : Sf;
  }
  return Sf;
};
const Nf = {
  isValid: !1,
  value: null
};
var jh = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Nf) : Nf;
function Pf(e, t, n = "validate") {
  if (Ps(e) || Array.isArray(e) && e.every(Ps) || lo(e) && !e)
    return {
      type: n,
      message: Ps(e) ? e : "",
      ref: t
    };
}
var no = (e) => vt(e) && !Ks(e) ? e : {
  value: e,
  message: ""
}, Tf = async (e, t, n, r, o) => {
  const { ref: a, refs: s, required: i, maxLength: c, minLength: l, min: u, max: d, pattern: p, validate: m, name: h, valueAsNumber: v, mount: g, disabled: b } = e._f, x = xe(t, h);
  if (!g || b)
    return {};
  const y = s ? s[0] : a, _ = (W) => {
    r && y.reportValidity && (y.setCustomValidity(lo(W) ? "" : W || ""), y.reportValidity());
  }, $ = {}, E = zu(a), P = Ya(a), D = E || P, R = (v || Uu(a)) && ut(a.value) && ut(x) || Ys(a) && a.value === "" || x === "" || Array.isArray(x) && !x.length, K = Rh.bind(null, h, n, $), G = (W, Z, L, A = kn.maxLength, I = kn.minLength) => {
    const V = W ? Z : L;
    $[h] = {
      type: W ? A : I,
      message: V,
      ref: a,
      ...K(W ? A : I, V)
    };
  };
  if (o ? !Array.isArray(x) || !x.length : i && (!D && (R || Tt(x)) || lo(x) && !x || P && !Ah(s).isValid || E && !jh(s).isValid)) {
    const { value: W, message: Z } = Ps(i) ? { value: !!i, message: i } : no(i);
    if (W && ($[h] = {
      type: kn.required,
      message: Z,
      ref: y,
      ...K(kn.required, Z)
    }, !n))
      return _(Z), $;
  }
  if (!R && (!Tt(u) || !Tt(d))) {
    let W, Z;
    const L = no(d), A = no(u);
    if (!Tt(x) && !isNaN(x)) {
      const I = a.valueAsNumber || x && +x;
      Tt(L.value) || (W = I > L.value), Tt(A.value) || (Z = I < A.value);
    } else {
      const I = a.valueAsDate || new Date(x), V = (k) => new Date(new Date().toDateString() + " " + k), Y = a.type == "time", M = a.type == "week";
      gn(L.value) && x && (W = Y ? V(x) > V(L.value) : M ? x > L.value : I > new Date(L.value)), gn(A.value) && x && (Z = Y ? V(x) < V(A.value) : M ? x < A.value : I < new Date(A.value));
    }
    if ((W || Z) && (G(!!W, L.message, A.message, kn.max, kn.min), !n))
      return _($[h].message), $;
  }
  if ((c || l) && !R && (gn(x) || o && Array.isArray(x))) {
    const W = no(c), Z = no(l), L = !Tt(W.value) && x.length > +W.value, A = !Tt(Z.value) && x.length < +Z.value;
    if ((L || A) && (G(L, W.message, Z.message), !n))
      return _($[h].message), $;
  }
  if (p && !R && gn(x)) {
    const { value: W, message: Z } = no(p);
    if (Ks(W) && !x.match(W) && ($[h] = {
      type: kn.pattern,
      message: Z,
      ref: a,
      ...K(kn.pattern, Z)
    }, !n))
      return _(Z), $;
  }
  if (m) {
    if (or(m)) {
      const W = await m(x, t), Z = Pf(W, y);
      if (Z && ($[h] = {
        ...Z,
        ...K(kn.validate, Z.message)
      }, !n))
        return _(Z.message), $;
    } else if (vt(m)) {
      let W = {};
      for (const Z in m) {
        if (!Yt(W) && !n)
          break;
        const L = Pf(await m[Z](x, t), y, Z);
        L && (W = {
          ...L,
          ...K(Z, L.message)
        }, _(L.message), n && ($[h] = W));
      }
      if (!Yt(W) && ($[h] = {
        ref: y,
        ...W
      }, !n))
        return $;
    }
  }
  return _(!0), $;
};
function tS(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = ut(e) ? r++ : e[t[r++]];
  return e;
}
function nS(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !ut(e[t]))
      return !1;
  return !0;
}
function wt(e, t) {
  const n = Array.isArray(t) ? t : Vu(t) ? [t] : Dh(t), r = n.length === 1 ? e : tS(e, n), o = n.length - 1, a = n[o];
  return r && delete r[a], o !== 0 && (vt(r) && Yt(r) || Array.isArray(r) && nS(r)) && wt(e, n.slice(0, -1)), e;
}
function $c() {
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
var Gs = (e) => Tt(e) || !Sh(e);
function Er(e, t) {
  if (Gs(e) || Gs(t))
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
      if (io(a) && io(s) || vt(a) && vt(s) || Array.isArray(a) && Array.isArray(s) ? !Er(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var Ih = (e) => e.type === "select-multiple", rS = (e) => zu(e) || Ya(e), _c = (e) => Ys(e) && e.isConnected, Lh = (e) => {
  for (const t in e)
    if (or(e[t]))
      return !0;
  return !1;
};
function Zs(e, t = {}) {
  const n = Array.isArray(e);
  if (vt(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || vt(e[r]) && !Lh(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Zs(e[r], t[r])) : Tt(e[r]) || (t[r] = !0);
  return t;
}
function Fh(e, t, n) {
  const r = Array.isArray(e);
  if (vt(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || vt(e[o]) && !Lh(e[o]) ? ut(t) || Gs(n[o]) ? n[o] = Array.isArray(e[o]) ? Zs(e[o], []) : { ...Zs(e[o]) } : Fh(e[o], Tt(t) ? {} : t[o], n[o]) : n[o] = !Er(e[o], t[o]);
  return n;
}
var Cc = (e, t) => Fh(e, t, Zs(t)), Vh = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => ut(e) ? e : t ? e === "" ? NaN : e && +e : n && gn(e) ? new Date(e) : r ? r(e) : e;
function Sc(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return Uu(t) ? t.files : zu(t) ? jh(e.refs).value : Ih(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Ya(t) ? Ah(e.refs).value : Vh(ut(t.value) ? e.ref.value : t.value, e);
}
var oS = (e, t, n, r) => {
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
}, Xo = (e) => ut(e) ? e : Ks(e) ? e.source : vt(e) ? Ks(e.value) ? e.value.source : e.value : e, aS = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Of(e, t, n) {
  const r = xe(e, n);
  if (r || Vu(n))
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
var sS = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, iS = (e, t) => !Ka(xe(e, t)).length && wt(e, t);
const cS = {
  mode: tn.onSubmit,
  reValidateMode: tn.onChange,
  shouldFocusError: !0
};
function lS(e = {}, t) {
  let n = {
    ...cS,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: or(n.defaultValues),
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
    values: $c(),
    array: $c(),
    state: $c()
  }, m = e.resetOptions && e.resetOptions.keepDirtyValues, h = _f(n.mode), v = _f(n.reValidateMode), g = n.criteriaMode === tn.all, b = (T) => (z) => {
    clearTimeout(u), u = setTimeout(T, z);
  }, x = async (T) => {
    if (d.isValid || T) {
      const z = n.resolver ? Yt((await R()).errors) : await G(o, !0);
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
        le && Xe(r.errors, T, _e), iS(r.errors, T);
      }
      if (d.touchedFields && ae && Array.isArray(xe(r.touchedFields, T))) {
        const _e = J(xe(r.touchedFields, T), pe.argA, pe.argB);
        le && Xe(r.touchedFields, T, _e);
      }
      d.dirtyFields && (r.dirtyFields = Cc(a, s)), p.state.next({
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
      ut(ae) || pe && pe.defaultChecked || z ? Xe(s, T, z ? ae : Sc(le._f)) : I(T, ae), i.mount && x();
    }
  }, P = (T, z, J, pe, le) => {
    let ae = !1, _e = !1;
    const He = {
      name: T
    };
    if (!J || pe) {
      d.isDirty && (_e = r.isDirty, r.isDirty = He.isDirty = Z(), ae = _e !== He.isDirty);
      const We = Er(xe(a, T), z);
      _e = xe(r.dirtyFields, T), We ? wt(r.dirtyFields, T) : Xe(r.dirtyFields, T, !0), He.dirtyFields = r.dirtyFields, ae = ae || d.dirtyFields && _e !== !We;
    }
    if (J) {
      const We = xe(r.touchedFields, T);
      We || (Xe(r.touchedFields, T, J), He.touchedFields = r.touchedFields, ae = ae || d.touchedFields && We !== J);
    }
    return ae && le && p.state.next(He), ae ? He : {};
  }, D = (T, z, J, pe) => {
    const le = xe(r.errors, T), ae = d.isValid && lo(z) && r.isValid !== z;
    if (e.delayError && J ? (l = b(() => $(T, J)), l(e.delayError)) : (clearTimeout(u), l = null, J ? Xe(r.errors, T, J) : wt(r.errors, T)), (J ? !Er(le, J) : le) || !Yt(pe) || ae) {
      const _e = {
        ...pe,
        ...ae && lo(z) ? { isValid: z } : {},
        errors: r.errors,
        name: T
      };
      r = {
        ...r,
        ..._e
      }, p.state.next(_e);
    }
    y(!1);
  }, R = async (T) => n.resolver(s, n.context, oS(T || c.mount, o, n.criteriaMode, n.shouldUseNativeValidation)), K = async (T) => {
    const { errors: z } = await R();
    if (T)
      for (const J of T) {
        const pe = xe(z, J);
        pe ? Xe(r.errors, J, pe) : wt(r.errors, J);
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
          const He = c.array.has(ae.name), We = await Tf(le, s, g, n.shouldUseNativeValidation && !z, He);
          if (We[ae.name] && (J.valid = !1, z))
            break;
          !z && (xe(We, ae.name) ? He ? eS(r.errors, We, ae.name) : Xe(r.errors, ae.name, We[ae.name]) : wt(r.errors, ae.name));
        }
        _e && await G(_e, z, J);
      }
    }
    return J.valid;
  }, W = () => {
    for (const T of c.unMount) {
      const z = xe(o, T);
      z && (z._f.refs ? z._f.refs.every((J) => !_c(J)) : !_c(z._f.ref)) && me(T);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, Z = (T, z) => (T && z && Xe(s, T, z), !Er(B(), a)), L = (T, z, J) => Mh(T, c, {
    ...i.mount ? s : ut(z) ? a : gn(T) ? { [T]: z } : z
  }, J, z), A = (T) => Ka(xe(i.mount ? s : a, T, e.shouldUnregister ? xe(a, T, []) : [])), I = (T, z, J = {}) => {
    const pe = xe(o, T);
    let le = z;
    if (pe) {
      const ae = pe._f;
      ae && (!ae.disabled && Xe(s, T, Vh(z, ae)), le = Ys(ae.ref) && Tt(z) ? "" : z, Ih(ae.ref) ? [...ae.ref.options].forEach((_e) => _e.selected = le.includes(_e.value)) : ae.refs ? Ya(ae.ref) ? ae.refs.length > 1 ? ae.refs.forEach((_e) => (!_e.defaultChecked || !_e.disabled) && (_e.checked = Array.isArray(le) ? !!le.find((He) => He === _e.value) : le === _e.value)) : ae.refs[0] && (ae.refs[0].checked = !!le) : ae.refs.forEach((_e) => _e.checked = _e.value === le) : Uu(ae.ref) ? ae.ref.value = "" : (ae.ref.value = le, ae.ref.type || p.values.next({
        name: T,
        values: { ...s }
      })));
    }
    (J.shouldDirty || J.shouldTouch) && P(T, le, J.shouldTouch, J.shouldDirty, !0), J.shouldValidate && k(T);
  }, V = (T, z, J) => {
    for (const pe in z) {
      const le = z[pe], ae = `${T}.${pe}`, _e = xe(o, ae);
      (c.array.has(T) || !Gs(le) || _e && !_e._f) && !io(le) ? V(ae, le, J) : I(ae, le, J);
    }
  }, Y = (T, z, J = {}) => {
    const pe = xe(o, T), le = c.array.has(T), ae = vn(z);
    Xe(s, T, ae), le ? (p.array.next({
      name: T,
      values: { ...s }
    }), (d.isDirty || d.dirtyFields) && J.shouldDirty && p.state.next({
      name: T,
      dirtyFields: Cc(a, s),
      isDirty: Z(T, ae)
    })) : pe && !pe._f && !Tt(ae) ? V(T, ae, J) : I(T, ae, J), Cf(T, c) && p.state.next({ ...r }), p.values.next({
      name: T,
      values: { ...s }
    }), !i.mount && t();
  }, M = async (T) => {
    const z = T.target;
    let J = z.name, pe = !0;
    const le = xe(o, J), ae = () => z.type ? Sc(le._f) : Eh(T);
    if (le) {
      let _e, He;
      const We = ae(), jt = T.type === Hs.BLUR || T.type === Hs.FOCUS_OUT, Zn = !aS(le._f) && !n.resolver && !xe(r.errors, J) && !le._f.deps || sS(jt, xe(r.touchedFields, J), r.isSubmitted, v, h), It = Cf(J, c, jt);
      Xe(s, J, We), jt ? (le._f.onBlur && le._f.onBlur(T), l && l(0)) : le._f.onChange && le._f.onChange(T);
      const Ne = P(J, We, jt, !1), Ee = !Yt(Ne) || It;
      if (!jt && p.values.next({
        name: J,
        type: T.type,
        values: { ...s }
      }), Zn)
        return d.isValid && x(), Ee && p.state.next({ name: J, ...It ? {} : Ne });
      if (!jt && It && p.state.next({ ...r }), y(!0), n.resolver) {
        const { errors: Ie } = await R([J]), Ge = Of(r.errors, o, J), tt = Of(Ie, o, Ge.name || J);
        _e = tt.error, J = tt.name, He = Yt(Ie);
      } else
        _e = (await Tf(le, s, g, n.shouldUseNativeValidation))[J], pe = isNaN(We) || We === xe(s, J, We), pe && (_e ? He = !1 : d.isValid && (He = await G(o, !0)));
      pe && (le._f.deps && k(le._f.deps), D(J, He, _e, Ne));
    }
  }, k = async (T, z = {}) => {
    let J, pe;
    const le = Ns(T);
    if (y(!0), n.resolver) {
      const ae = await K(ut(T) ? T : le);
      J = Yt(ae), pe = T ? !le.some((_e) => xe(ae, _e)) : J;
    } else
      T ? (pe = (await Promise.all(le.map(async (ae) => {
        const _e = xe(o, ae);
        return await G(_e && _e._f ? { [ae]: _e } : _e);
      }))).every(Boolean), !(!pe && !r.isValid) && x()) : pe = J = await G(o);
    return p.state.next({
      ...!gn(T) || d.isValid && J !== r.isValid ? {} : { name: T },
      ...n.resolver || !T ? { isValid: J } : {},
      errors: r.errors,
      isValidating: !1
    }), z.shouldFocus && !pe && pl(o, (ae) => ae && xe(r.errors, ae), T ? le : c.mount), pe;
  }, B = (T) => {
    const z = {
      ...a,
      ...i.mount ? s : {}
    };
    return ut(T) ? z : gn(T) ? xe(z, T) : T.map((J) => xe(z, J));
  }, q = (T, z) => ({
    invalid: !!xe((z || r).errors, T),
    isDirty: !!xe((z || r).dirtyFields, T),
    isTouched: !!xe((z || r).touchedFields, T),
    error: xe((z || r).errors, T)
  }), oe = (T) => {
    T && Ns(T).forEach((z) => wt(r.errors, z)), p.state.next({
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
  }, ve = (T, z) => or(T) ? p.values.subscribe({
    next: (J) => T(L(void 0, z), J)
  }) : L(T, z, !0), me = (T, z = {}) => {
    for (const J of T ? Ns(T) : c.mount)
      c.mount.delete(J), c.array.delete(J), z.keepValue || (wt(o, J), wt(s, J)), !z.keepError && wt(r.errors, J), !z.keepDirty && wt(r.dirtyFields, J), !z.keepTouched && wt(r.touchedFields, J), !n.shouldUnregister && !z.keepDefaultValue && wt(a, J);
    p.values.next({
      values: { ...s }
    }), p.state.next({
      ...r,
      ...z.keepDirty ? { isDirty: Z() } : {}
    }), !z.keepIsValid && x();
  }, re = (T, z = {}) => {
    let J = xe(o, T);
    const pe = lo(z.disabled);
    return Xe(o, T, {
      ...J || {},
      _f: {
        ...J && J._f ? J._f : { ref: { name: T } },
        name: T,
        mount: !0,
        ...z
      }
    }), c.mount.add(T), ut(z.value) || Xe(s, T, z.value), J ? pe && Xe(s, T, z.disabled ? void 0 : xe(s, T, Sc(J._f))) : E(T, !0, z.value), {
      ...pe ? { disabled: z.disabled } : {},
      ...n.progressive ? {
        required: !!z.required,
        min: Xo(z.min),
        max: Xo(z.max),
        minLength: Xo(z.minLength),
        maxLength: Xo(z.maxLength),
        pattern: Xo(z.pattern)
      } : {},
      name: T,
      onChange: M,
      onBlur: M,
      ref: (le) => {
        if (le) {
          re(T, z), J = xe(o, T);
          const ae = ut(le.value) && le.querySelectorAll && le.querySelectorAll("input,select,textarea")[0] || le, _e = rS(ae), He = J._f.refs || [];
          if (_e ? He.find((We) => We === ae) : ae === J._f.ref)
            return;
          Xe(o, T, {
            _f: {
              ...J._f,
              ..._e ? {
                refs: [
                  ...He.filter(_c),
                  ae,
                  ...Array.isArray(xe(a, T)) ? [{}] : []
                ],
                ref: { type: ae.type, name: T }
              } : { ref: ae }
            }
          }), E(T, !1, void 0, ae);
        } else
          J = xe(o, T, {}), J._f && (J._f.mount = !1), (n.shouldUnregister || z.shouldUnregister) && !(Nh(c.array, T) && i.action) && c.unMount.add(T);
      }
    };
  }, se = () => n.shouldFocusError && pl(o, (T) => T && xe(r.errors, T), c.mount), ue = (T, z) => async (J) => {
    J && (J.preventDefault && J.preventDefault(), J.persist && J.persist());
    let pe = vn(s);
    if (p.state.next({
      isSubmitting: !0
    }), n.resolver) {
      const { errors: le, values: ae } = await R();
      r.errors = le, pe = ae;
    } else
      await G(o);
    wt(r.errors, "root"), Yt(r.errors) ? (p.state.next({
      errors: {}
    }), await T(pe, J)) : (z && await z({ ...r.errors }, J), se(), setTimeout(se)), p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Yt(r.errors),
      submitCount: r.submitCount + 1,
      errors: r.errors
    });
  }, ne = (T, z = {}) => {
    xe(o, T) && (ut(z.defaultValue) ? Y(T, xe(a, T)) : (Y(T, z.defaultValue), Xe(a, T, z.defaultValue)), z.keepTouched || wt(r.touchedFields, T), z.keepDirty || (wt(r.dirtyFields, T), r.isDirty = z.defaultValue ? Z(T, xe(a, T)) : Z()), z.keepError || (wt(r.errors, T), d.isValid && x()), p.state.next({ ...r }));
  }, he = (T, z = {}) => {
    const J = T || a, pe = vn(J), le = T && !Yt(T) ? pe : a;
    if (z.keepDefaultValues || (a = J), !z.keepValues) {
      if (z.keepDirtyValues || m)
        for (const ae of c.mount)
          xe(r.dirtyFields, ae) ? Xe(le, ae, xe(s, ae)) : Y(ae, xe(le, ae));
      else {
        if (Lu && ut(T))
          for (const ae of c.mount) {
            const _e = xe(o, ae);
            if (_e && _e._f) {
              const He = Array.isArray(_e._f.refs) ? _e._f.refs[0] : _e._f.ref;
              if (Ys(He)) {
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
      s = e.shouldUnregister ? z.keepDefaultValues ? vn(a) : {} : vn(le), p.array.next({
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
      isDirty: z.keepDirty ? r.isDirty : !!(z.keepDefaultValues && !Er(T, a)),
      isSubmitted: z.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: z.keepDirtyValues ? r.dirtyFields : z.keepDefaultValues && T ? Cc(a, T) : {},
      touchedFields: z.keepTouched ? r.touchedFields : {},
      errors: z.keepErrors ? r.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, U = (T, z) => he(or(T) ? T(s) : T, z);
  return {
    control: {
      register: re,
      unregister: me,
      getFieldState: q,
      handleSubmit: ue,
      setError: te,
      _executeSchema: R,
      _getWatch: L,
      _getDirty: Z,
      _updateValid: x,
      _removeUnmounted: W,
      _updateFieldArray: _,
      _getFieldArray: A,
      _reset: he,
      _resetDefaultValues: () => or(n.defaultValues) && n.defaultValues().then((T) => {
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
function Uh(e = {}) {
  const t = S.useRef(), n = S.useRef(), [r, o] = S.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: or(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: or(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...lS(e, () => o((s) => ({ ...s }))),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, Fu({
    subject: a._subjects.state,
    next: (s) => {
      Oh(s, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), S.useEffect(() => {
    e.values && !Er(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values) : a._resetDefaultValues();
  }, [e.values, a]), S.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), t.current.formState = Th(r, a), t.current;
}
const uS = /* @__PURE__ */ j((e, t) => /* @__PURE__ */ w(de.label, N({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), zh = uS, dS = So(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Nn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  zh,
  {
    ref: n,
    className: F(dS(), e),
    ...t
  }
));
Nn.displayName = zh.displayName;
const Wh = ZC, Bh = C.createContext(
  {}
), Br = ({
  ...e
}) => /* @__PURE__ */ f.exports.jsx(Bh.Provider, { value: { name: e.name }, children: /* @__PURE__ */ f.exports.jsx(JC, { ...e }) }), Di = () => {
  const e = C.useContext(Bh), t = C.useContext(Hh), { getFieldState: n, formState: r } = Mi(), o = n(e.name, r);
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
}, Hh = C.createContext(
  {}
), xr = C.forwardRef(({ className: e, ...t }, n) => {
  const r = C.useId();
  return /* @__PURE__ */ f.exports.jsx(Hh.Provider, { value: { id: r }, children: /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: F("space-y-2", e), ...t }) });
});
xr.displayName = "FormItem";
const Hr = C.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = Di();
  return /* @__PURE__ */ f.exports.jsx(
    Nn,
    {
      ref: n,
      className: F(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
Hr.displayName = "FormLabel";
const Ga = C.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = Di();
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
Ga.displayName = "FormControl";
const Oo = C.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = Di();
  return /* @__PURE__ */ f.exports.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: F("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
Oo.displayName = "FormDescription";
const fS = C.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = Di(), s = o ? String(o == null ? void 0 : o.message) : t;
  return s ? /* @__PURE__ */ f.exports.jsx(
    "p",
    {
      ref: r,
      id: a,
      className: F("text-sm font-medium text-destructive", e),
      ...n,
      children: s
    }
  ) : null;
});
fS.displayName = "FormMessage";
const Yh = "Dialog", [Kh, Gh] = at(Yh), [pS, pn] = Kh(Yh), mS = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = H(null), c = H(null), [l = !1, u] = dt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w(pS, {
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
}, hS = "DialogTrigger", vS = /* @__PURE__ */ j((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = pn(hS, n), a = Ce(t, o.triggerRef);
  return /* @__PURE__ */ w(de.button, N({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Wu(o.open)
  }, r, {
    ref: a,
    onClick: ee(e.onClick, o.onOpenToggle)
  }));
}), Zh = "DialogPortal", [gS, qh] = Kh(Zh, {
  forceMount: void 0
}), bS = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = pn(Zh, t);
  return /* @__PURE__ */ w(gS, {
    scope: t,
    forceMount: n
  }, Ft.map(
    r,
    (s) => /* @__PURE__ */ w(it, {
      present: n || a.open
    }, /* @__PURE__ */ w(Si, {
      asChild: !0,
      container: o
    }, s))
  ));
}, ml = "DialogOverlay", xS = /* @__PURE__ */ j((e, t) => {
  const n = qh(ml, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = pn(ml, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ w(it, {
    present: r || a.open
  }, /* @__PURE__ */ w(yS, N({}, o, {
    ref: t
  }))) : null;
}), yS = /* @__PURE__ */ j((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = pn(ml, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ w(Ti, {
      as: bn,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ w(de.div, N({
      "data-state": Wu(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), go = "DialogContent", wS = /* @__PURE__ */ j((e, t) => {
  const n = qh(go, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = pn(go, e.__scopeDialog);
  return /* @__PURE__ */ w(it, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ w($S, N({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(_S, N({}, o, {
    ref: t
  })));
}), $S = /* @__PURE__ */ j((e, t) => {
  const n = pn(go, e.__scopeDialog), r = H(null), o = Ce(t, n.contentRef, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return Wa(a);
  }, []), /* @__PURE__ */ w(Xh, N({}, e, {
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
}), _S = /* @__PURE__ */ j((e, t) => {
  const n = pn(go, e.__scopeDialog), r = H(!1), o = H(!1);
  return /* @__PURE__ */ w(Xh, N({}, e, {
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
}), Xh = /* @__PURE__ */ j((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = pn(go, n), c = H(null), l = Ce(t, c);
  return wi(), /* @__PURE__ */ w(Zt, null, /* @__PURE__ */ w($i, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ w(zr, N({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": Wu(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), Qh = "DialogTitle", CS = /* @__PURE__ */ j((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = pn(Qh, n);
  return /* @__PURE__ */ w(de.h2, N({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), SS = "DialogDescription", ES = /* @__PURE__ */ j((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = pn(SS, n);
  return /* @__PURE__ */ w(de.p, N({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), NS = "DialogClose", PS = /* @__PURE__ */ j((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = pn(NS, n);
  return /* @__PURE__ */ w(de.button, N({
    type: "button"
  }, r, {
    ref: t,
    onClick: ee(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function Wu(e) {
  return e ? "open" : "closed";
}
const TS = "DialogTitleWarning", [OS, YD] = w$(TS, {
  contentName: go,
  titleName: Qh,
  docsSlug: "dialog"
}), Ri = mS, Ai = vS, ko = bS, Mo = xS, Do = wS, Ro = CS, Ao = ES, jo = PS, kS = Ri, KD = Ai, Jh = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ f.exports.jsx(ko, { className: F(e), ...n, children: /* @__PURE__ */ f.exports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-4", children: t }) });
Jh.displayName = ko.displayName;
const ev = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Mo,
  {
    ref: n,
    className: F(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      e
    ),
    ...t
  }
));
ev.displayName = Mo.displayName;
const tv = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(Jh, { children: [
  /* @__PURE__ */ f.exports.jsx(ev, {}),
  /* @__PURE__ */ f.exports.jsxs(
    Do,
    {
      ref: r,
      className: F(
        "fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
        e
      ),
      ...n,
      children: [
        t,
        !n["aria-modal"] && /* @__PURE__ */ f.exports.jsxs(jo, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ f.exports.jsx(xi, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
tv.displayName = Do.displayName;
const MS = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: F(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
MS.displayName = "DialogHeader";
const DS = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: F(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
DS.displayName = "DialogFooter";
const RS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ro,
  {
    ref: n,
    className: F(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
RS.displayName = Ro.displayName;
const AS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ao,
  {
    ref: n,
    className: F("text-sm text-muted-foreground", e),
    ...t
  }
));
AS.displayName = Ao.displayName;
const jS = ({ id: e, form: t, label: n, description: r, iconDirection: o, classNameContainer: a, validateInputIconClassNames: s, rest: i }) => {
  const [c, l] = C.useState(!1);
  return i.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: F("w-full", a), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsxs(Nn, { className: "flex", htmlFor: e, children: [
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
          children: c ? /* @__PURE__ */ f.exports.jsx(is, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(ss, { size: 18 })
        }
      ) }),
      /* @__PURE__ */ f.exports.jsx(
        da,
        {
          ...i,
          className: F(s(), i.className),
          type: c ? "text" : "password"
        }
      ),
      o === "right" && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ f.exports.jsx(
        "button",
        {
          type: "button",
          tabIndex: -1,
          onClick: () => l((u) => !u),
          children: c ? /* @__PURE__ */ f.exports.jsx(is, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(ss, { size: 18 })
        }
      ) })
    ] })
  ] }) : /* @__PURE__ */ f.exports.jsx(
    Br,
    {
      control: t.control,
      name: e,
      render: ({ field: u, formState: d }) => {
        var p;
        return /* @__PURE__ */ f.exports.jsxs(xr, { className: F("w-full", a), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            n && /* @__PURE__ */ f.exports.jsxs(Hr, { className: "flex", children: [
              n,
              " "
            ] }),
            ((p = d == null ? void 0 : d.errors[e]) == null ? void 0 : p.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              d.errors[e].message
            ] })
          ] }),
          r && /* @__PURE__ */ f.exports.jsx(Oo, { className: "text-xs", children: r }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ f.exports.jsx(Ga, { children: /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
            o === "left" && /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
              "button",
              {
                type: "button",
                onClick: () => l((m) => !m),
                className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
                tabIndex: -1,
                children: c ? /* @__PURE__ */ f.exports.jsx(is, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(ss, { size: 18 })
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(
              da,
              {
                ...u,
                ...i,
                className: F(s(), i.className),
                type: c ? "text" : "password"
              }
            ),
            o === "right" && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ f.exports.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => l((m) => !m),
                children: c ? /* @__PURE__ */ f.exports.jsx(is, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(ss, { size: 18 })
              }
            ) })
          ] }) })
        ] });
      }
    }
  );
}, IS = ({ id: e, form: t, icon: n, label: r, description: o, iconDirection: a, classNameContainer: s, validateInputIconClassNames: i, rest: c }) => c.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: F("w-full", s), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsxs(Nn, { className: "flex", htmlFor: e, children: [
    r,
    " "
  ] }) }),
  o && /* @__PURE__ */ f.exports.jsx("p", { className: "text-muted-foreground text-xs", children: o }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
  /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
    a === "left" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
    /* @__PURE__ */ f.exports.jsx(
      da,
      {
        ...c,
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
    render: ({ field: l, formState: u }) => {
      var d;
      return /* @__PURE__ */ f.exports.jsxs(xr, { className: F("w-full", s), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          r && /* @__PURE__ */ f.exports.jsxs(Hr, { className: "flex", children: [
            r,
            " "
          ] }),
          ((d = u == null ? void 0 : u.errors[e]) == null ? void 0 : d.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            u.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(Oo, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
          a === "left" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
          /* @__PURE__ */ f.exports.jsx(Ga, { children: /* @__PURE__ */ f.exports.jsx(
            da,
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
), da = C.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
    "input",
    {
      type: t,
      className: F(
        "w-full flex h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
da.displayName = "InputUI";
function Bu({ children: e, id: t, label: n, classNameContainer: r, description: o, icon: a, iconDirection: s = "left", ...i }) {
  const c = () => s === "left" && (a || i.type === "password") ? "pl-9" : s === "right" ? "pr-9" : "";
  return i.type === "password" ? /* @__PURE__ */ f.exports.jsx(
    jS,
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
    IS,
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
const LS = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), FS = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, kf = (e) => {
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
}, yt = {
  type: {
    id: "pidType",
    tabIndex: void 0,
    buttonClassName: "w-[80px]",
    popoverClassName: "w-[90px]",
    notFoundLabel: "Codigo No Encontrado",
    ctaPlaceholder: "Tipo",
    placeholder: "Buscar...",
    defaultValue: kf(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: kf(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: void 0,
    placeholder: "00.000.000",
    maxLength: 10,
    defaultValue: ""
  }
};
function GD({ form: e, pid: t = yt }) {
  var r, o, a, s, i, c, l, u, d, p, m, h, v, g, b, x;
  const n = (y) => {
    var P;
    const { value: _ } = y.target, $ = LS(_), E = ((P = t == null ? void 0 : t.number) == null ? void 0 : P.id) || yt.number.id;
    e.setValue(E, $);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ f.exports.jsx(
      K7,
      {
        id: ((r = t == null ? void 0 : t.type) == null ? void 0 : r.id) || yt.type.id,
        form: e,
        label: ((o = t == null ? void 0 : t.type) == null ? void 0 : o.label) || yt.type.label,
        items: ((a = t == null ? void 0 : t.type) == null ? void 0 : a.items) || yt.type.items,
        tabIndex: ((s = t == null ? void 0 : t.type) == null ? void 0 : s.tabIndex) || yt.type.tabIndex,
        placeholder: ((i = t == null ? void 0 : t.type) == null ? void 0 : i.placeholder) || yt.type.placeholder,
        defaultValue: ((c = t == null ? void 0 : t.type) == null ? void 0 : c.defaultValue) || yt.type.defaultValue,
        notFoundLabel: ((l = t == null ? void 0 : t.type) == null ? void 0 : l.notFoundLabel) || yt.type.notFoundLabel,
        ctaPlaceholder: ((u = t == null ? void 0 : t.type) == null ? void 0 : u.ctaPlaceholder) || yt.type.ctaPlaceholder,
        buttonClassName: ((d = t == null ? void 0 : t.type) == null ? void 0 : d.buttonClassName) || yt.type.buttonClassName,
        popoverClassName: ((p = t == null ? void 0 : t.type) == null ? void 0 : p.popoverClassName) || yt.type.popoverClassName,
        disabled: ((m = t == null ? void 0 : t.type) == null ? void 0 : m.disabled) || yt.type.disabled
      }
    ),
    /* @__PURE__ */ f.exports.jsx(
      Bu,
      {
        id: ((h = t == null ? void 0 : t.number) == null ? void 0 : h.id) || yt.number.id,
        form: e,
        type: "text",
        defaultValue: (v = t == null ? void 0 : t.number) == null ? void 0 : v.defaultValue,
        onKeyPress: FS,
        onKeyUp: n,
        tabIndex: ((g = t == null ? void 0 : t.number) == null ? void 0 : g.tabIndex) || yt.number.tabIndex,
        maxLength: ((b = t == null ? void 0 : t.number) == null ? void 0 : b.maxLength) || yt.number.maxLength,
        placeholder: ((x = t == null ? void 0 : t.number) == null ? void 0 : x.placeholder) || yt.number.placeholder
      }
    )
  ] });
}
const nv = "Popover", [rv, ZD] = at(nv, [
  En
]), Hu = En(), [VS, Io] = rv(nv), US = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, i = Hu(t), c = H(null), [l, u] = X(!1), [d = !1, p] = dt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w(To, i, /* @__PURE__ */ w(VS, {
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
}, zS = "PopoverTrigger", WS = /* @__PURE__ */ j((e, t) => {
  const { __scopePopover: n, ...r } = e, o = Io(zS, n), a = Hu(n), s = Ce(t, o.triggerRef), i = /* @__PURE__ */ w(de.button, N({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": sv(o.open)
  }, r, {
    ref: s,
    onClick: ee(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? i : /* @__PURE__ */ w(Ua, N({
    asChild: !0
  }, a), i);
}), ov = "PopoverPortal", [BS, HS] = rv(ov, {
  forceMount: void 0
}), YS = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Io(ov, t);
  return /* @__PURE__ */ w(BS, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ w(it, {
    present: n || a.open
  }, /* @__PURE__ */ w(Si, {
    asChild: !0,
    container: o
  }, r)));
}, fa = "PopoverContent", KS = /* @__PURE__ */ j((e, t) => {
  const n = HS(fa, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Io(fa, e.__scopePopover);
  return /* @__PURE__ */ w(it, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ w(GS, N({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(ZS, N({}, o, {
    ref: t
  })));
}), GS = /* @__PURE__ */ j((e, t) => {
  const n = Io(fa, e.__scopePopover), r = H(null), o = Ce(t, r), a = H(!1);
  return Q(() => {
    const s = r.current;
    if (s)
      return Wa(s);
  }, []), /* @__PURE__ */ w(Ti, {
    as: bn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ w(av, N({}, e, {
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
}), ZS = /* @__PURE__ */ j((e, t) => {
  const n = Io(fa, e.__scopePopover), r = H(!1), o = H(!1);
  return /* @__PURE__ */ w(av, N({}, e, {
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
}), av = /* @__PURE__ */ j((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, p = Io(fa, n), m = Hu(n);
  return wi(), /* @__PURE__ */ w($i, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ w(zr, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: u,
    onEscapeKeyDown: i,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ w(za, N({
    "data-state": sv(p.open),
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
function sv(e) {
  return e ? "open" : "closed";
}
const qS = US, XS = WS, QS = YS, iv = KS, Vn = qS, Un = XS, $n = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(QS, { children: /* @__PURE__ */ f.exports.jsx(
  iv,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: F(
      "z-50 w-72 rounded-md border bg-card p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
$n.displayName = iv.displayName;
const cv = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
    "textarea",
    {
      className: F(
        "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
cv.displayName = "TextareaUI";
const qD = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, ...i }) => /* @__PURE__ */ f.exports.jsx(
  Br,
  {
    control: t.control,
    name: e,
    render: ({ field: c, formState: l }) => {
      var u;
      return /* @__PURE__ */ f.exports.jsxs(xr, { className: F("w-full", s), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          n && /* @__PURE__ */ f.exports.jsxs(Hr, { className: "flex", children: [
            n,
            " "
          ] }),
          ((u = l == null ? void 0 : l.errors[e]) == null ? void 0 : u.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            l.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(Oo, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsx(Ga, { children: /* @__PURE__ */ f.exports.jsx(
          cv,
          {
            placeholder: a,
            className: F("resize-none", r),
            ...c,
            ...i
          }
        ) })
      ] });
    }
  }
);
function pa(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Lo(e) {
  const t = H({
    value: e,
    previous: e
  });
  return kt(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const lv = /* @__PURE__ */ j((e, t) => /* @__PURE__ */ w(de.span, N({}, e, {
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
}))), uv = lv, JS = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], eE = [
  " ",
  "Enter"
], ji = "Select", [Ii, Yu, tE] = vr(ji), [Fo, XD] = at(ji, [
  tE,
  En
]), Ku = En(), [nE, Yr] = Fo(ji), [rE, oE] = Fo(ji), aE = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: i, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: p, required: m } = e, h = Ku(t), [v, g] = X(null), [b, x] = X(null), [y, _] = X(!1), $ = Sn(l), [E = !1, P] = dt({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [D, R] = dt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), K = H(null), G = v ? Boolean(v.closest("form")) : !0, [W, Z] = X(/* @__PURE__ */ new Set()), L = Array.from(W).map(
    (A) => A.props.value
  ).join(";");
  return /* @__PURE__ */ w(To, h, /* @__PURE__ */ w(nE, {
    required: m,
    scope: t,
    trigger: v,
    onTriggerChange: g,
    valueNode: b,
    onValueNodeChange: x,
    valueNodeHasChildren: y,
    onValueNodeHasChildrenChange: _,
    contentId: mt(),
    value: D,
    onValueChange: R,
    open: E,
    onOpenChange: P,
    dir: $,
    triggerPointerDownPosRef: K,
    disabled: p
  }, /* @__PURE__ */ w(Ii.Provider, {
    scope: t
  }, /* @__PURE__ */ w(rE, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: fe((A) => {
      Z(
        (I) => new Set(I).add(A)
      );
    }, []),
    onNativeOptionRemove: fe((A) => {
      Z((I) => {
        const V = new Set(I);
        return V.delete(A), V;
      });
    }, [])
  }, n)), G ? /* @__PURE__ */ w(pv, {
    key: L,
    "aria-hidden": !0,
    required: m,
    tabIndex: -1,
    name: u,
    autoComplete: d,
    value: D,
    onChange: (A) => R(A.target.value),
    disabled: p
  }, D === void 0 ? /* @__PURE__ */ w("option", {
    value: ""
  }) : null, Array.from(W)) : null));
}, sE = "SelectTrigger", iE = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Ku(n), s = Yr(sE, n), i = s.disabled || r, c = Ce(t, s.onTriggerChange), l = Yu(n), [u, d, p] = mv((h) => {
    const v = l().filter(
      (x) => !x.disabled
    ), g = v.find(
      (x) => x.value === s.value
    ), b = hv(v, h, g);
    b !== void 0 && s.onValueChange(b.value);
  }), m = () => {
    i || (s.onOpenChange(!0), p());
  };
  return /* @__PURE__ */ w(Ua, N({
    asChild: !0
  }, a), /* @__PURE__ */ w(de.button, N({
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
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && d(h.key), !(v && h.key === " ") && JS.includes(h.key) && (m(), h.preventDefault());
    })
  })));
}), cE = "SelectValue", lE = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s, ...i } = e, c = Yr(cE, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = Ce(t, c.onValueNodeChange);
  return _t(() => {
    l(u);
  }, [
    l,
    u
  ]), /* @__PURE__ */ w(de.span, N({}, i, {
    ref: d,
    style: {
      pointerEvents: "none"
    }
  }), c.value === void 0 && s !== void 0 ? s : a);
}), uE = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ w(de.span, N({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), dE = (e) => /* @__PURE__ */ w(Si, N({
  asChild: !0
}, e)), bo = "SelectContent", fE = /* @__PURE__ */ j((e, t) => {
  const n = Yr(bo, e.__scopeSelect), [r, o] = X();
  if (_t(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ Gl(/* @__PURE__ */ w(dv, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ w(Ii.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ w("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ w(pE, N({}, e, {
    ref: t
  }));
}), Mn = 10, [dv, Li] = Fo(bo), pE = /* @__PURE__ */ j((e, t) => {
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
  } = e, x = Yr(bo, n), [y, _] = X(null), [$, E] = X(null), P = Ce(
    t,
    (re) => _(re)
  ), [D, R] = X(null), [K, G] = X(null), W = Yu(n), [Z, L] = X(!1), A = H(!1);
  Q(() => {
    if (y)
      return Wa(y);
  }, [
    y
  ]), wi();
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
      D,
      y
    ]),
    [
      I,
      D,
      y
    ]
  );
  Q(() => {
    Z && V();
  }, [
    Z,
    V
  ]);
  const { onOpenChange: Y, triggerPointerDownPosRef: M } = x;
  Q(() => {
    if (y) {
      let re = {
        x: 0,
        y: 0
      };
      const se = (ne) => {
        var he, U, ge, $e;
        re = {
          x: Math.abs(Math.round(ne.pageX) - ((he = (U = M.current) === null || U === void 0 ? void 0 : U.x) !== null && he !== void 0 ? he : 0)),
          y: Math.abs(Math.round(ne.pageY) - ((ge = ($e = M.current) === null || $e === void 0 ? void 0 : $e.y) !== null && ge !== void 0 ? ge : 0))
        };
      }, ue = (ne) => {
        re.x <= 10 && re.y <= 10 ? ne.preventDefault() : y.contains(ne.target) || Y(!1), document.removeEventListener("pointermove", se), M.current = null;
      };
      return M.current !== null && (document.addEventListener("pointermove", se), document.addEventListener("pointerup", ue, {
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
    M
  ]), Q(() => {
    const re = () => Y(!1);
    return window.addEventListener("blur", re), window.addEventListener("resize", re), () => {
      window.removeEventListener("blur", re), window.removeEventListener("resize", re);
    };
  }, [
    Y
  ]);
  const [k, B] = mv((re) => {
    const se = W().filter(
      (he) => !he.disabled
    ), ue = se.find(
      (he) => he.ref.current === document.activeElement
    ), ne = hv(se, re, ue);
    ne && setTimeout(
      () => ne.ref.current.focus()
    );
  }), q = fe((re, se, ue) => {
    const ne = !A.current && !ue;
    (x.value !== void 0 && x.value === se || ne) && (R(re), ne && (A.current = !0));
  }, [
    x.value
  ]), oe = fe(
    () => y == null ? void 0 : y.focus(),
    [
      y
    ]
  ), te = fe((re, se, ue) => {
    const ne = !A.current && !ue;
    (x.value !== void 0 && x.value === se || ne) && G(re);
  }, [
    x.value
  ]), ve = r === "popper" ? Mf : mE, me = ve === Mf ? {
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
  return /* @__PURE__ */ w(dv, {
    scope: n,
    content: y,
    viewport: $,
    onViewportChange: E,
    itemRefCallback: q,
    selectedItem: D,
    onItemLeave: oe,
    itemTextRefCallback: te,
    focusSelectedItem: V,
    selectedItemText: K,
    position: r,
    isPositioned: Z,
    searchRef: k
  }, /* @__PURE__ */ w(Ti, {
    as: bn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ w($i, {
    asChild: !0,
    trapped: x.open,
    onMountAutoFocus: (re) => {
      re.preventDefault();
    },
    onUnmountAutoFocus: ee(o, (re) => {
      var se;
      (se = x.trigger) === null || se === void 0 || se.focus({
        preventScroll: !0
      }), re.preventDefault();
    })
  }, /* @__PURE__ */ w(zr, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (re) => re.preventDefault(),
    onDismiss: () => x.onOpenChange(!1)
  }, /* @__PURE__ */ w(ve, N({
    role: "listbox",
    id: x.contentId,
    "data-state": x.open ? "open" : "closed",
    dir: x.dir,
    onContextMenu: (re) => re.preventDefault()
  }, b, me, {
    onPlaced: () => L(!0),
    ref: P,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...b.style
    },
    onKeyDown: ee(b.onKeyDown, (re) => {
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
}), mE = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Yr(bo, n), s = Li(bo, n), [i, c] = X(null), [l, u] = X(null), d = Ce(
    t,
    (P) => u(P)
  ), p = Yu(n), m = H(!1), h = H(!0), { viewport: v, selectedItem: g, selectedItemText: b, focusSelectedItem: x } = s, y = fe(() => {
    if (a.trigger && a.valueNode && i && l && v && g && b) {
      const P = a.trigger.getBoundingClientRect(), D = l.getBoundingClientRect(), R = a.valueNode.getBoundingClientRect(), K = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const he = K.left - D.left, U = R.left - he, ge = P.left - U, $e = P.width + ge, Te = Math.max($e, D.width), T = window.innerWidth - Mn, z = pa(U, [
          Mn,
          T - Te
        ]);
        i.style.minWidth = $e + "px", i.style.left = z + "px";
      } else {
        const he = D.right - K.right, U = window.innerWidth - R.right - he, ge = window.innerWidth - P.right - U, $e = P.width + ge, Te = Math.max($e, D.width), T = window.innerWidth - Mn, z = pa(U, [
          Mn,
          T - Te
        ]);
        i.style.minWidth = $e + "px", i.style.right = z + "px";
      }
      const G = p(), W = window.innerHeight - Mn * 2, Z = v.scrollHeight, L = window.getComputedStyle(l), A = parseInt(L.borderTopWidth, 10), I = parseInt(L.paddingTop, 10), V = parseInt(L.borderBottomWidth, 10), Y = parseInt(L.paddingBottom, 10), M = A + I + Z + Y + V, k = Math.min(g.offsetHeight * 5, M), B = window.getComputedStyle(v), q = parseInt(B.paddingTop, 10), oe = parseInt(B.paddingBottom, 10), te = P.top + P.height / 2 - Mn, ve = W - te, me = g.offsetHeight / 2, re = g.offsetTop + me, se = A + I + re, ue = M - se;
      if (se <= te) {
        const he = g === G[G.length - 1].ref.current;
        i.style.bottom = "0px";
        const U = l.clientHeight - v.offsetTop - v.offsetHeight, ge = Math.max(ve, me + (he ? oe : 0) + U + V), $e = se + ge;
        i.style.height = $e + "px";
      } else {
        const he = g === G[0].ref.current;
        i.style.top = "0px";
        const ge = Math.max(te, A + v.offsetTop + (he ? q : 0) + me) + ue;
        i.style.height = ge + "px", v.scrollTop = se - te + v.offsetTop;
      }
      i.style.margin = `${Mn}px 0`, i.style.minHeight = k + "px", i.style.maxHeight = W + "px", r == null || r(), requestAnimationFrame(
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
  _t(
    () => y(),
    [
      y
    ]
  );
  const [_, $] = X();
  _t(() => {
    l && $(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const E = fe((P) => {
    P && h.current === !0 && (y(), x == null || x(), h.current = !1);
  }, [
    y,
    x
  ]);
  return /* @__PURE__ */ w(hE, {
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
  }, /* @__PURE__ */ w(de.div, N({}, o, {
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
}), Mf = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Mn, ...a } = e, s = Ku(n);
  return /* @__PURE__ */ w(za, N({}, s, a, {
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
}), [hE, vE] = Fo(bo, {}), Df = "SelectViewport", gE = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Li(Df, n), a = vE(Df, n), s = Ce(t, o.onViewportChange), i = H(0);
  return /* @__PURE__ */ w(Zt, null, /* @__PURE__ */ w("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ w(Ii.Slot, {
    scope: n
  }, /* @__PURE__ */ w(de.div, N({
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
          const m = window.innerHeight - Mn * 2, h = parseFloat(u.style.minHeight), v = parseFloat(u.style.height), g = Math.max(h, v);
          if (g < m) {
            const b = g + p, x = Math.min(m, b), y = b - x;
            u.style.height = x + "px", u.style.bottom === "0px" && (l.scrollTop = y > 0 ? y : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      i.current = l.scrollTop;
    })
  }))));
}), bE = "SelectGroup", [xE, yE] = Fo(bE), wE = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = mt();
  return /* @__PURE__ */ w(xE, {
    scope: n,
    id: o
  }, /* @__PURE__ */ w(de.div, N({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), $E = "SelectLabel", _E = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = yE($E, n);
  return /* @__PURE__ */ w(de.div, N({
    id: o.id
  }, r, {
    ref: t
  }));
}), hl = "SelectItem", [CE, fv] = Fo(hl), SE = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, i = Yr(hl, n), c = Li(hl, n), l = i.value === r, [u, d] = X(a ?? ""), [p, m] = X(!1), h = Ce(t, (b) => {
    var x;
    return (x = c.itemRefCallback) === null || x === void 0 ? void 0 : x.call(c, b, r, o);
  }), v = mt(), g = () => {
    o || (i.onValueChange(r), i.onOpenChange(!1));
  };
  return /* @__PURE__ */ w(CE, {
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
  }, /* @__PURE__ */ w(Ii.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: u
  }, /* @__PURE__ */ w(de.div, N({
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
    onPointerMove: ee(s.onPointerMove, (b) => {
      if (o) {
        var x;
        (x = c.onItemLeave) === null || x === void 0 || x.call(c);
      } else
        b.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: ee(s.onPointerLeave, (b) => {
      if (b.currentTarget === document.activeElement) {
        var x;
        (x = c.onItemLeave) === null || x === void 0 || x.call(c);
      }
    }),
    onKeyDown: ee(s.onKeyDown, (b) => {
      var x;
      ((x = c.searchRef) === null || x === void 0 ? void 0 : x.current) !== "" && b.key === " " || (eE.includes(b.key) && g(), b.key === " " && b.preventDefault());
    })
  }))));
}), vs = "SelectItemText", EE = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = Yr(vs, n), i = Li(vs, n), c = fv(vs, n), l = oE(vs, n), [u, d] = X(null), p = Ce(
    t,
    (b) => d(b),
    c.onItemTextChange,
    (b) => {
      var x;
      return (x = i.itemTextRefCallback) === null || x === void 0 ? void 0 : x.call(i, b, c.value, c.disabled);
    }
  ), m = u == null ? void 0 : u.textContent, h = kt(
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
  return _t(() => (v(h), () => g(h)), [
    v,
    g,
    h
  ]), /* @__PURE__ */ w(Zt, null, /* @__PURE__ */ w(de.span, N({
    id: c.textId
  }, a, {
    ref: p
  })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ Gl(a.children, s.valueNode) : null);
}), NE = "SelectItemIndicator", PE = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return fv(NE, n).isSelected ? /* @__PURE__ */ w(de.span, N({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), TE = /* @__PURE__ */ j((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ w(de.div, N({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
}), pv = /* @__PURE__ */ j((e, t) => {
  const { value: n, ...r } = e, o = H(null), a = Ce(t, o), s = Lo(n);
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
  ]), /* @__PURE__ */ w(lv, {
    asChild: !0
  }, /* @__PURE__ */ w("select", N({}, r, {
    ref: a,
    defaultValue: n
  })));
});
pv.displayName = "BubbleSelect";
function mv(e) {
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
function hv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = OE(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function OE(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const kE = aE, vv = iE, ME = lE, DE = uE, RE = dE, gv = fE, AE = gE, jE = wE, bv = _E, xv = SE, IE = EE, LE = PE, yv = TE, Gu = kE, FE = jE, Zu = ME, Fi = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  vv,
  {
    ref: r,
    className: F(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(DE, { asChild: !0, children: /* @__PURE__ */ f.exports.jsx(aa, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Fi.displayName = vv.displayName;
const Vi = C.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ f.exports.jsx(RE, { children: /* @__PURE__ */ f.exports.jsx(
  gv,
  {
    ref: o,
    className: F(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card text-popover-foreground shadow-md animate-in fade-in-80",
      n === "popper" && "translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ f.exports.jsx(
      AE,
      {
        className: F(
          "p-1",
          n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children: t
      }
    )
  }
) }));
Vi.displayName = gv.displayName;
const VE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  bv,
  {
    ref: n,
    className: F("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
VE.displayName = bv.displayName;
const Ui = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  xv,
  {
    ref: r,
    className: F(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(LE, { children: /* @__PURE__ */ f.exports.jsx(cn, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ f.exports.jsx(IE, { children: t })
    ]
  }
));
Ui.displayName = xv.displayName;
const UE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  yv,
  {
    ref: n,
    className: F("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
UE.displayName = yv.displayName;
const wv = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: F(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
wv.displayName = "Card";
const zE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: F("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
zE.displayName = "CardHeader";
const WE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "h3",
  {
    ref: n,
    className: F(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
WE.displayName = "CardTitle";
const BE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "p",
  {
    ref: n,
    className: F("text-sm text-muted-foreground", e),
    ...t
  }
));
BE.displayName = "CardDescription";
const HE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: F("p-6 pt-0", e), ...t }));
HE.displayName = "CardContent";
const YE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: F(" flex items-center p-6 pt-0", e),
    ...t
  }
));
YE.displayName = "CardFooter";
const $v = "Checkbox", [KE, QD] = at($v), [GE, ZE] = KE($v), qE = /* @__PURE__ */ j((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, p] = X(null), m = Ce(
    t,
    (y) => p(y)
  ), h = H(!1), v = d ? Boolean(d.closest("form")) : !0, [g = !1, b] = dt({
    prop: o,
    defaultProp: a,
    onChange: l
  }), x = H(g);
  return Q(() => {
    const y = d == null ? void 0 : d.form;
    if (y) {
      const _ = () => b(x.current);
      return y.addEventListener("reset", _), () => y.removeEventListener("reset", _);
    }
  }, [
    d,
    b
  ]), /* @__PURE__ */ w(GE, {
    scope: n,
    state: g,
    disabled: i
  }, /* @__PURE__ */ w(de.button, N({
    type: "button",
    role: "checkbox",
    "aria-checked": Nr(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": _v(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: m,
    onKeyDown: ee(e.onKeyDown, (y) => {
      y.key === "Enter" && y.preventDefault();
    }),
    onClick: ee(e.onClick, (y) => {
      b(
        (_) => Nr(_) ? !0 : !_
      ), v && (h.current = y.isPropagationStopped(), h.current || y.stopPropagation());
    })
  })), v && /* @__PURE__ */ w(JE, {
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
}), XE = "CheckboxIndicator", QE = /* @__PURE__ */ j((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = ZE(XE, n);
  return /* @__PURE__ */ w(it, {
    present: r || Nr(a.state) || a.state === !0
  }, /* @__PURE__ */ w(de.span, N({
    "data-state": _v(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), JE = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = H(null), s = Lo(n), i = Va(t);
  return Q(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && d) {
      const p = new Event("click", {
        bubbles: r
      });
      c.indeterminate = Nr(n), d.call(c, Nr(n) ? !1 : n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ w("input", N({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: Nr(n) ? !1 : n
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
function Nr(e) {
  return e === "indeterminate";
}
function _v(e) {
  return Nr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Cv = qE, eN = QE, Sv = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Cv,
  {
    ref: n,
    className: F(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.exports.jsx(
      eN,
      {
        className: F("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ f.exports.jsx(cn, { className: "h-4 w-4" })
      }
    )
  }
));
Sv.displayName = Cv.displayName;
const Ev = "DropdownMenu", [tN, JD] = at(Ev, [
  Ba
]), Rt = Ba(), [nN, Nv] = tN(Ev), rN = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = Rt(t), l = H(null), [u = !1, d] = dt({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ w(nN, {
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
  }, /* @__PURE__ */ w(_u, N({}, c, {
    open: u,
    onOpenChange: d,
    dir: r,
    modal: i
  }), n));
}, oN = "DropdownMenuTrigger", aN = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Nv(oN, n), s = Rt(n);
  return /* @__PURE__ */ w(Cu, N({
    asChild: !0
  }, s), /* @__PURE__ */ w(de.button, N({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: Da(t, a.triggerRef),
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
}), sN = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Rt(t);
  return /* @__PURE__ */ w(Su, N({}, r, n));
}, iN = "DropdownMenuContent", cN = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Nv(iN, n), a = Rt(n), s = H(!1);
  return /* @__PURE__ */ w(Eu, N({
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
}), lN = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Nu, N({}, o, r, {
    ref: t
  }));
}), uN = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Pu, N({}, o, r, {
    ref: t
  }));
}), dN = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Tu, N({}, o, r, {
    ref: t
  }));
}), fN = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Ou, N({}, o, r, {
    ref: t
  }));
}), pN = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(ku, N({}, o, r, {
    ref: t
  }));
}), mN = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Mu, N({}, o, r, {
    ref: t
  }));
}), hN = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Du, N({}, o, r, {
    ref: t
  }));
}), vN = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Ru, N({}, o, r, {
    ref: t
  }));
}), gN = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Rt(t), [i = !1, c] = dt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ w(Au, N({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, bN = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(ju, N({}, o, r, {
    ref: t
  }));
}), xN = /* @__PURE__ */ j((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Rt(n);
  return /* @__PURE__ */ w(Iu, N({}, o, r, {
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
}), yN = rN, wN = aN, Pv = sN, Tv = cN, $N = lN, Ov = uN, kv = dN, Mv = fN, _N = pN, Dv = mN, Rv = hN, Av = vN, CN = gN, jv = bN, Iv = xN, e8 = yN, t8 = wN, n8 = $N, r8 = Pv, o8 = CN, a8 = _N, SN = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  jv,
  {
    ref: o,
    className: F(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ f.exports.jsx(Eo, { className: "ml-auto h-4 w-4" })
    ]
  }
));
SN.displayName = jv.displayName;
const EN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Iv,
  {
    ref: n,
    className: F(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
EN.displayName = Iv.displayName;
const NN = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(Pv, { children: /* @__PURE__ */ f.exports.jsx(
  Tv,
  {
    ref: r,
    sideOffset: t,
    className: F(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
NN.displayName = Tv.displayName;
const PN = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  kv,
  {
    ref: r,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
PN.displayName = kv.displayName;
const TN = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Mv,
  {
    ref: o,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Rv, { children: /* @__PURE__ */ f.exports.jsx(cn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
TN.displayName = Mv.displayName;
const ON = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Dv,
  {
    ref: r,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Rv, { children: /* @__PURE__ */ f.exports.jsx(gi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
ON.displayName = Dv.displayName;
const kN = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Ov,
  {
    ref: r,
    className: F(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
kN.displayName = Ov.displayName;
const MN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Av,
  {
    ref: n,
    className: F("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
MN.displayName = Av.displayName;
const DN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: F("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
DN.displayName = "DropdownMenuShortcut";
const vl = "horizontal", RN = [
  "horizontal",
  "vertical"
], Lv = /* @__PURE__ */ j((e, t) => {
  const { decorative: n, orientation: r = vl, ...o } = e, a = Fv(r) ? r : vl, i = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ w(de.div, N({
    "data-orientation": a
  }, i, o, {
    ref: t
  }));
});
Lv.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Fv(r) ? new Error(AN(o, n)) : null;
  }
};
function AN(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${vl}\`.`;
}
function Fv(e) {
  return RN.includes(e);
}
const Vv = Lv, Za = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
    Vv,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: F(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
Za.displayName = Vv.displayName;
function uo(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function jN(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Uv(...e) {
  return (t) => e.forEach(
    (n) => jN(n, t)
  );
}
function qa(...e) {
  return fe(Uv(...e), e);
}
function IN(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ bt(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: p, children: m, ...h } = d, v = (p == null ? void 0 : p[e][c]) || i, g = kt(
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
      return kt(
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
    LN(o, ...t)
  ];
}
function LN(...e) {
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
      return kt(
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
const gl = Boolean(globalThis == null ? void 0 : globalThis.document) ? Ma : () => {
}, FN = C["useId".toString()] || (() => {
});
let VN = 0;
function Ec(e) {
  const [t, n] = C.useState(FN());
  return gl(() => {
    e || n(
      (r) => r ?? String(VN++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function Mr(e) {
  const t = H(e);
  return Q(() => {
    t.current = e;
  }), kt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function UN({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = zN({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = Mr(n), c = fe((l) => {
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
function zN({ defaultProp: e, onChange: t }) {
  const n = X(e), [r] = n, o = H(r), a = Mr(t);
  return Q(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const qu = /* @__PURE__ */ j((e, t) => {
  const { children: n, ...r } = e, o = Ft.toArray(n), a = o.find(BN);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Ft.count(s) > 1 ? Ft.only(null) : /* @__PURE__ */ ar(s) ? s.props.children : null : c);
    return /* @__PURE__ */ w(bl, N({}, r, {
      ref: t
    }), /* @__PURE__ */ ar(s) ? /* @__PURE__ */ Co(s, void 0, i) : null);
  }
  return /* @__PURE__ */ w(bl, N({}, r, {
    ref: t
  }), n);
});
qu.displayName = "Slot";
const bl = /* @__PURE__ */ j((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ ar(n) ? /* @__PURE__ */ Co(n, {
    ...HN(r, n.props),
    ref: Uv(t, n.ref)
  }) : Ft.count(n) > 1 ? Ft.only(null) : null;
});
bl.displayName = "SlotClone";
const WN = ({ children: e }) => /* @__PURE__ */ w(Zt, null, e);
function BN(e) {
  return /* @__PURE__ */ ar(e) && e.type === WN;
}
function HN(e, t) {
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
const YN = [
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
], zi = YN.reduce((e, t) => {
  const n = /* @__PURE__ */ j((r, o) => {
    const { asChild: a, ...s } = r, i = a ? qu : t;
    return Q(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ w(i, N({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function KN(e, t) {
  e && vi(
    () => e.dispatchEvent(t)
  );
}
function GN(e) {
  const t = Mr(e);
  Q(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const xl = "dismissableLayer.update", ZN = "dismissableLayer.pointerDownOutside", qN = "dismissableLayer.focusOutside";
let Rf;
const XN = /* @__PURE__ */ bt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), QN = /* @__PURE__ */ j((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, onDismiss: i, ...c } = e, l = Qe(XN), [u, d] = X(null), [, p] = X({}), m = qa(
    t,
    (E) => d(E)
  ), h = Array.from(l.layers), [v] = [
    ...l.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = h.indexOf(v), b = u ? h.indexOf(u) : -1, x = l.layersWithOutsidePointerEventsDisabled.size > 0, y = b >= g, _ = JN((E) => {
    const P = E.target, D = [
      ...l.branches
    ].some(
      (R) => R.contains(P)
    );
    !y || D || (o == null || o(E), s == null || s(E), E.defaultPrevented || i == null || i());
  }), $ = e5((E) => {
    const P = E.target;
    [
      ...l.branches
    ].some(
      (R) => R.contains(P)
    ) || (a == null || a(E), s == null || s(E), E.defaultPrevented || i == null || i());
  });
  return GN((E) => {
    b === l.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && i && (E.preventDefault(), i()));
  }), Q(() => {
    if (u)
      return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Rf = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Af(), () => {
        n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = Rf);
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
    return document.addEventListener(xl, E), () => document.removeEventListener(xl, E);
  }, []), /* @__PURE__ */ w(zi.div, N({}, c, {
    ref: m,
    style: {
      pointerEvents: x ? y ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: uo(e.onFocusCapture, $.onFocusCapture),
    onBlurCapture: uo(e.onBlurCapture, $.onBlurCapture),
    onPointerDownCapture: uo(e.onPointerDownCapture, _.onPointerDownCapture)
  }));
});
function JN(e) {
  const t = Mr(e), n = H(!1), r = H(() => {
  });
  return Q(() => {
    const o = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          zv(ZN, t, i, {
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
function e5(e) {
  const t = Mr(e), n = H(!1);
  return Q(() => {
    const r = (o) => {
      o.target && !n.current && zv(qN, t, {
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
  const e = new CustomEvent(xl);
  document.dispatchEvent(e);
}
function zv(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? KN(o, a) : o.dispatchEvent(a);
}
const Nc = "focusScope.autoFocusOnMount", Pc = "focusScope.autoFocusOnUnmount", jf = {
  bubbles: !1,
  cancelable: !0
}, t5 = /* @__PURE__ */ j((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = X(null), l = Mr(o), u = Mr(a), d = H(null), p = qa(
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
      let v = function(b) {
        if (m.paused || !i)
          return;
        const x = b.target;
        i.contains(x) ? d.current = x : Cr(d.current, {
          select: !0
        });
      }, g = function(b) {
        m.paused || !i || i.contains(b.relatedTarget) || Cr(d.current, {
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
      Lf.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(Nc, jf);
        i.addEventListener(Nc, l), i.dispatchEvent(b), b.defaultPrevented || (n5(i5(Wv(i)), {
          select: !0
        }), document.activeElement === v && Cr(i));
      }
      return () => {
        i.removeEventListener(Nc, l), setTimeout(() => {
          const b = new CustomEvent(Pc, jf);
          i.addEventListener(Pc, u), i.dispatchEvent(b), b.defaultPrevented || Cr(v ?? document.body, {
            select: !0
          }), i.removeEventListener(Pc, u), Lf.remove(m);
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
      const x = v.currentTarget, [y, _] = r5(x);
      y && _ ? !v.shiftKey && b === _ ? (v.preventDefault(), n && Cr(y, {
        select: !0
      })) : v.shiftKey && b === y && (v.preventDefault(), n && Cr(_, {
        select: !0
      })) : b === x && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ w(zi.div, N({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: h
  }));
});
function n5(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Cr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function r5(e) {
  const t = Wv(e), n = If(t, e), r = If(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Wv(e) {
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
function If(e, t) {
  for (const n of e)
    if (!o5(n, {
      upTo: t
    }))
      return n;
}
function o5(e, { upTo: t }) {
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
function a5(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Cr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && a5(e) && t && e.select();
  }
}
const Lf = s5();
function s5() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Ff(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Ff(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Ff(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function i5(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const c5 = /* @__PURE__ */ j((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Kl.createPortal(/* @__PURE__ */ w(zi.div, N({}, o, {
    ref: t
  })), r) : null;
});
function l5(e, t) {
  return hi((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Wi = (e) => {
  const { present: t, children: n } = e, r = u5(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Ft.only(n), a = qa(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Co(o, {
    ref: a
  }) : null;
};
Wi.displayName = "Presence";
function u5(e) {
  const [t, n] = X(), r = H({}), o = H(e), a = H("none"), s = e ? "mounted" : "unmounted", [i, c] = l5(s, {
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
    const l = gs(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), gl(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, m = gs(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), gl(() => {
    if (t) {
      const l = (d) => {
        const m = gs(r.current).includes(d.animationName);
        d.target === t && m && vi(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = gs(r.current));
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
function gs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let Tc = 0;
function d5() {
  Q(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Vf()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Vf()), Tc++, () => {
      Tc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Tc--;
    };
  }, []);
}
function Vf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Bv = Hm(), Oc = function() {
}, Bi = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Oc,
    onWheelCapture: Oc,
    onTouchMoveCapture: Oc
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, x = gu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = p, _ = Bm([n, t]), $ = Ct(Ct({}, x), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement(y, { sideCar: Bv, removeScrollBar: l, shards: d, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), Ct(Ct({}, $), { ref: _ })) : C.createElement(b, Ct({}, $, { className: c, ref: _ }), i)
  );
});
Bi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Bi.classNames = {
  fullWidth: ta,
  zeroRight: ea
};
var yl = !1;
if (typeof window < "u")
  try {
    var bs = Object.defineProperty({}, "passive", {
      get: function() {
        return yl = !0, !0;
      }
    });
    window.addEventListener("test", bs, bs), window.removeEventListener("test", bs, bs);
  } catch {
    yl = !1;
  }
var ro = yl ? { passive: !1 } : !1, f5 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, p5 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, Uf = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Hv(e, n);
    if (r) {
      var o = Yv(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, m5 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, h5 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Hv = function(e, t) {
  return e === "v" ? f5(t) : p5(t);
}, Yv = function(e, t) {
  return e === "v" ? m5(t) : h5(t);
}, v5 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, g5 = function(e, t, n, r, o) {
  var a = v5(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, p = 0;
  do {
    var m = Yv(e, i), h = m[0], v = m[1], g = m[2], b = v - g - a * h;
    (h || b) && Hv(e, i) && (d += b, p += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, xs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, zf = function(e) {
  return [e.deltaX, e.deltaY];
}, Wf = function(e) {
  return e && "current" in e ? e.current : e;
}, b5 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, x5 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, y5 = 0, oo = [];
function w5(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(y5++)[0], a = C.useState(function() {
    return bu();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Wm([e.lockRef.current], (e.shards || []).map(Wf), !0).filter(Boolean);
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
    var b = xs(v), x = n.current, y = "deltaX" in v ? v.deltaX : x[0] - b[0], _ = "deltaY" in v ? v.deltaY : x[1] - b[1], $, E = v.target, P = Math.abs(y) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && P === "h" && E.type === "range")
      return !1;
    var D = Uf(P, E);
    if (!D)
      return !0;
    if (D ? $ = P : ($ = P === "v" ? "h" : "v", D = Uf(P, E)), !D)
      return !1;
    if (!r.current && "changedTouches" in v && (y || _) && (r.current = $), !$)
      return !0;
    var R = r.current || $;
    return g5(R, g, v, R === "h" ? y : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!oo.length || oo[oo.length - 1] !== a)) {
      var b = "deltaY" in g ? zf(g) : xs(g), x = t.current.filter(function($) {
        return $.name === g.type && $.target === g.target && b5($.delta, b);
      })[0];
      if (x && x.should) {
        g.preventDefault();
        return;
      }
      if (!x) {
        var y = (s.current.shards || []).map(Wf).filter(Boolean).filter(function($) {
          return $.contains(g.target);
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
    n.current = xs(v), r.current = void 0;
  }, []), d = C.useCallback(function(v) {
    l(v.type, zf(v), v.target, i(v, e.lockRef.current));
  }, []), p = C.useCallback(function(v) {
    l(v.type, xs(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return oo.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, ro), document.addEventListener("touchmove", c, ro), document.addEventListener("touchstart", u, ro), function() {
      oo = oo.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, ro), document.removeEventListener("touchmove", c, ro), document.removeEventListener("touchstart", u, ro);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    h ? C.createElement(a, { styles: x5(o) }) : null,
    m ? C.createElement(Zm, { gapMode: "margin" }) : null
  );
}
const $5 = Km(Bv, w5);
var Kv = C.forwardRef(function(e, t) {
  return C.createElement(Bi, Ct({}, e, { ref: t, sideCar: $5 }));
});
Kv.classNames = Bi.classNames;
const _5 = Kv, Gv = "Dialog", [Zv, s8] = IN(Gv), [C5, Kr] = Zv(Gv), S5 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = H(null), c = H(null), [l = !1, u] = UN({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w(C5, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: Ec(),
    titleId: Ec(),
    descriptionId: Ec(),
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
}, qv = "DialogPortal", [E5, Xv] = Zv(qv, {
  forceMount: void 0
}), N5 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Kr(qv, t);
  return /* @__PURE__ */ w(E5, {
    scope: t,
    forceMount: n
  }, Ft.map(
    r,
    (s) => /* @__PURE__ */ w(Wi, {
      present: n || a.open
    }, /* @__PURE__ */ w(c5, {
      asChild: !0,
      container: o
    }, s))
  ));
}, wl = "DialogOverlay", P5 = /* @__PURE__ */ j((e, t) => {
  const n = Xv(wl, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Kr(wl, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ w(Wi, {
    present: r || a.open
  }, /* @__PURE__ */ w(T5, N({}, o, {
    ref: t
  }))) : null;
}), T5 = /* @__PURE__ */ j((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Kr(wl, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ w(_5, {
      as: qu,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ w(zi.div, N({
      "data-state": Jv(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), ma = "DialogContent", O5 = /* @__PURE__ */ j((e, t) => {
  const n = Xv(ma, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Kr(ma, e.__scopeDialog);
  return /* @__PURE__ */ w(Wi, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ w(k5, N({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(M5, N({}, o, {
    ref: t
  })));
}), k5 = /* @__PURE__ */ j((e, t) => {
  const n = Kr(ma, e.__scopeDialog), r = H(null), o = qa(t, n.contentRef, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return Wa(a);
  }, []), /* @__PURE__ */ w(Qv, N({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: uo(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: uo(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: uo(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), M5 = /* @__PURE__ */ j((e, t) => {
  const n = Kr(ma, e.__scopeDialog), r = H(!1);
  return /* @__PURE__ */ w(Qv, N({}, e, {
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
}), Qv = /* @__PURE__ */ j((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Kr(ma, n), c = H(null), l = qa(t, c);
  return d5(), /* @__PURE__ */ w(Zt, null, /* @__PURE__ */ w(t5, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ w(QN, N({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": Jv(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
});
function Jv(e) {
  return e ? "open" : "closed";
}
const D5 = S5, R5 = N5, A5 = P5, j5 = O5;
var Bf = 1, I5 = 0.9, L5 = 0.3, kc = 0.1, F5 = 0, Mc = 0.999, V5 = 0.9999, U5 = 0.99, Hf = /[\\\/\-_+.# \t"@\[\(\{&]/, z5 = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function $l(e, t, n, r, o, a) {
  if (a === t.length)
    return o === e.length ? Bf : U5;
  for (var s = r.charAt(a), i = n.indexOf(s, o), c = 0, l, u, d; i >= 0; )
    l = $l(e, t, n, r, i + 1, a + 1), l > c && (i === o ? l *= Bf : Hf.test(e.charAt(i - 1)) ? (l *= I5, d = e.slice(o, i - 1).match(z5), d && o > 0 && (l *= Math.pow(Mc, d.length))) : Hf.test(e.slice(o, i - 1)) ? (l *= F5, o > 0 && (l *= Math.pow(Mc, i - o))) : (l *= L5, o > 0 && (l *= Math.pow(Mc, i - o))), e.charAt(i) !== t.charAt(a) && (l *= V5)), l < kc && n.charAt(i - 1) === r.charAt(a + 1) && n.charAt(i - 1) !== r.charAt(a) && (u = $l(e, t, n, r, i + 1, a + 2), u * kc > l && (l = u * kc)), l > c && (c = l), i = n.indexOf(s, i + 1);
  return c;
}
function W5(e, t) {
  return $l(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var B5 = W5, H5 = '[cmdk-list-sizer=""]', Qo = '[cmdk-group=""]', Dc = '[cmdk-group-items=""]', Y5 = '[cmdk-group-heading=""]', eg = '[cmdk-item=""]', Yf = `${eg}:not([aria-disabled="true"])`, _l = "cmdk-item-select", nr = "data-value", K5 = (e, t) => B5(e, t), tg = C.createContext(void 0), Xa = () => C.useContext(tg), ng = C.createContext(void 0), Xu = () => C.useContext(ng), rg = C.createContext(void 0), og = C.forwardRef((e, t) => {
  let n = C.useRef(null), r = ao(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = ao(() => /* @__PURE__ */ new Set()), a = ao(() => /* @__PURE__ */ new Map()), s = ao(() => /* @__PURE__ */ new Map()), i = ao(() => /* @__PURE__ */ new Set()), c = ag(e), { label: l, children: u, value: d, onValueChange: p, filter: m, shouldFilter: h, ...v } = e, g = C.useId(), b = C.useId(), x = C.useId(), y = oP();
  Vo(() => {
    if (d !== void 0) {
      let M = d.trim().toLowerCase();
      r.current.value = M, y(6, K), _.emit();
    }
  }, [d]);
  let _ = C.useMemo(() => ({ subscribe: (M) => (i.current.add(M), () => i.current.delete(M)), snapshot: () => r.current, setState: (M, k, B) => {
    var q, oe, te;
    if (!Object.is(r.current[M], k)) {
      if (r.current[M] = k, M === "search")
        R(), P(), y(1, D);
      else if (M === "value")
        if (((q = c.current) == null ? void 0 : q.value) !== void 0) {
          (te = (oe = c.current).onValueChange) == null || te.call(oe, k);
          return;
        } else
          B || y(5, K);
      _.emit();
    }
  }, emit: () => {
    i.current.forEach((M) => M());
  } }), []), $ = C.useMemo(() => ({ value: (M, k) => {
    k !== s.current.get(M) && (s.current.set(M, k), r.current.filtered.items.set(M, E(k)), y(2, () => {
      P(), _.emit();
    }));
  }, item: (M, k) => (o.current.add(M), k && (a.current.has(k) ? a.current.get(k).add(M) : a.current.set(k, /* @__PURE__ */ new Set([M]))), y(3, () => {
    R(), P(), r.current.value || D(), _.emit();
  }), () => {
    s.current.delete(M), o.current.delete(M), r.current.filtered.items.delete(M), y(4, () => {
      R(), D(), _.emit();
    });
  }), group: (M) => (a.current.has(M) || a.current.set(M, /* @__PURE__ */ new Set()), () => {
    s.current.delete(M), a.current.delete(M);
  }), filter: () => c.current.shouldFilter, label: l || e["aria-label"], listId: g, inputId: x, labelId: b }), []);
  function E(M) {
    var k;
    let B = ((k = c.current) == null ? void 0 : k.filter) ?? K5;
    return M ? B(M, r.current.search) : 0;
  }
  function P() {
    if (!n.current || !r.current.search || c.current.shouldFilter === !1)
      return;
    let M = r.current.filtered.items, k = [];
    r.current.filtered.groups.forEach((q) => {
      let oe = a.current.get(q), te = 0;
      oe.forEach((ve) => {
        let me = M.get(ve);
        te = Math.max(me, te);
      }), k.push([q, te]);
    });
    let B = n.current.querySelector(H5);
    W().sort((q, oe) => {
      let te = q.getAttribute(nr), ve = oe.getAttribute(nr);
      return (M.get(ve) ?? 0) - (M.get(te) ?? 0);
    }).forEach((q) => {
      let oe = q.closest(Dc);
      oe ? oe.appendChild(q.parentElement === oe ? q : q.closest(`${Dc} > *`)) : B.appendChild(q.parentElement === B ? q : q.closest(`${Dc} > *`));
    }), k.sort((q, oe) => oe[1] - q[1]).forEach((q) => {
      let oe = n.current.querySelector(`${Qo}[${nr}="${q[0]}"]`);
      oe == null || oe.parentElement.appendChild(oe);
    });
  }
  function D() {
    let M = W().find((B) => !B.ariaDisabled), k = M == null ? void 0 : M.getAttribute(nr);
    _.setState("value", k || void 0);
  }
  function R() {
    if (!r.current.search || c.current.shouldFilter === !1) {
      r.current.filtered.count = o.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let M = 0;
    for (let k of o.current) {
      let B = s.current.get(k), q = E(B);
      r.current.filtered.items.set(k, q), q > 0 && M++;
    }
    for (let [k, B] of a.current)
      for (let q of B)
        if (r.current.filtered.items.get(q) > 0) {
          r.current.filtered.groups.add(k);
          break;
        }
    r.current.filtered.count = M;
  }
  function K() {
    var M, k, B;
    let q = G();
    q && (((M = q.parentElement) == null ? void 0 : M.firstChild) === q && ((B = (k = q.closest(Qo)) == null ? void 0 : k.querySelector(Y5)) == null || B.scrollIntoView({ block: "nearest" })), q.scrollIntoView({ block: "nearest" }));
  }
  function G() {
    return n.current.querySelector(`${eg}[aria-selected="true"]`);
  }
  function W() {
    return Array.from(n.current.querySelectorAll(Yf));
  }
  function Z(M) {
    let k = W()[M];
    k && _.setState("value", k.getAttribute(nr));
  }
  function L(M) {
    var k;
    let B = G(), q = W(), oe = q.findIndex((ve) => ve === B), te = q[oe + M];
    (k = c.current) != null && k.loop && (te = oe + M < 0 ? q[q.length - 1] : oe + M === q.length ? q[0] : q[oe + M]), te && _.setState("value", te.getAttribute(nr));
  }
  function A(M) {
    let k = G(), B = k == null ? void 0 : k.closest(Qo), q;
    for (; B && !q; )
      B = M > 0 ? nP(B, Qo) : rP(B, Qo), q = B == null ? void 0 : B.querySelector(Yf);
    q ? _.setState("value", q.getAttribute(nr)) : L(M);
  }
  let I = () => Z(W().length - 1), V = (M) => {
    M.preventDefault(), M.metaKey ? I() : M.altKey ? A(1) : L(1);
  }, Y = (M) => {
    M.preventDefault(), M.metaKey ? Z(0) : M.altKey ? A(-1) : L(-1);
  };
  return C.createElement("div", { ref: Qa([n, t]), ...v, "cmdk-root": "", onKeyDown: (M) => {
    var k;
    if ((k = v.onKeyDown) == null || k.call(v, M), !M.defaultPrevented)
      switch (M.key) {
        case "n":
        case "j": {
          M.ctrlKey && V(M);
          break;
        }
        case "ArrowDown": {
          V(M);
          break;
        }
        case "p":
        case "k": {
          M.ctrlKey && Y(M);
          break;
        }
        case "ArrowUp": {
          Y(M);
          break;
        }
        case "Home": {
          M.preventDefault(), Z(0);
          break;
        }
        case "End": {
          M.preventDefault(), I();
          break;
        }
        case "Enter": {
          M.preventDefault();
          let B = G();
          if (B) {
            let q = new Event(_l);
            B.dispatchEvent(q);
          }
        }
      }
  } }, C.createElement("label", { "cmdk-label": "", htmlFor: $.inputId, id: $.labelId, style: aP }, l), C.createElement(ng.Provider, { value: _ }, C.createElement(tg.Provider, { value: $ }, u)));
}), G5 = C.forwardRef((e, t) => {
  let n = C.useId(), r = C.useRef(null), o = C.useContext(rg), a = Xa(), s = ag(e);
  Vo(() => a.item(n, o), []);
  let i = sg(n, r, [e.value, e.children, r]), c = Xu(), l = xo((b) => b.value && b.value === i.current), u = xo((b) => a.filter() === !1 ? !0 : b.search ? b.filtered.items.get(n) > 0 : !0);
  C.useEffect(() => {
    let b = r.current;
    if (!(!b || e.disabled))
      return b.addEventListener(_l, d), () => b.removeEventListener(_l, d);
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
  return C.createElement("div", { ref: Qa([r, t]), ...g, "cmdk-item": "", role: "option", "aria-disabled": m || void 0, "aria-selected": l || void 0, "data-selected": l || void 0, onPointerMove: m ? void 0 : p, onClick: m ? void 0 : d }, e.children);
}), Z5 = C.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, a = C.useId(), s = C.useRef(null), i = C.useRef(null), c = C.useId(), l = Xa(), u = xo((p) => l.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(a) : !0);
  Vo(() => l.group(a), []), sg(a, s, [e.value, e.heading, i]);
  let d = C.createElement(rg.Provider, { value: a }, r);
  return C.createElement("div", { ref: Qa([s, t]), ...o, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && C.createElement("div", { ref: i, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), C.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, d));
}), q5 = C.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = C.useRef(null), a = xo((s) => !s.search);
  return !n && !a ? null : C.createElement("div", { ref: Qa([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), X5 = C.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = Xu(), s = xo((c) => c.search), i = Xa();
  return C.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), C.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": i.listId, "aria-labelledby": i.labelId, id: i.inputId, type: "text", value: o ? e.value : s, onChange: (c) => {
    o || a.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), Q5 = C.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = C.useRef(null), a = C.useRef(null), s = Xa();
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
  }, []), C.createElement("div", { ref: Qa([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: s.listId, "aria-labelledby": s.inputId }, C.createElement("div", { ref: a, "cmdk-list-sizer": "" }, n));
}), J5 = C.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...a } = e;
  return C.createElement(D5, { open: n, onOpenChange: r }, C.createElement(R5, { container: o }, C.createElement(A5, { "cmdk-overlay": "" }), C.createElement(j5, { "aria-label": e.label, "cmdk-dialog": "" }, C.createElement(og, { ref: t, ...a }))));
}), eP = C.forwardRef((e, t) => {
  let n = C.useRef(!0), r = xo((o) => o.filtered.count === 0);
  return C.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : C.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), tP = C.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return C.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, C.createElement("div", { "aria-hidden": !0 }, r));
}), Ut = Object.assign(og, { List: Q5, Item: G5, Input: X5, Group: Z5, Separator: q5, Dialog: J5, Empty: eP, Loading: tP });
function nP(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function rP(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function ag(e) {
  let t = C.useRef(e);
  return Vo(() => {
    t.current = e;
  }), t;
}
var Vo = typeof window > "u" ? C.useEffect : C.useLayoutEffect;
function ao(e) {
  let t = C.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Qa(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function xo(e) {
  let t = Xu(), n = () => e(t.snapshot());
  return C.useSyncExternalStore(t.subscribe, n, n);
}
function sg(e, t, n) {
  let r = C.useRef(), o = Xa();
  return Vo(() => {
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
    o.value(e, s), (a = t.current) == null || a.setAttribute(nr, s), r.current = s;
  }), r;
}
var oP = () => {
  let [e, t] = C.useState(), n = ao(() => /* @__PURE__ */ new Map());
  return Vo(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, aP = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const zn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ut,
  {
    ref: n,
    className: F(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
zn.displayName = Ut.displayName;
const i8 = ({ children: e, ...t }) => /* @__PURE__ */ f.exports.jsx(kS, { ...t, children: /* @__PURE__ */ f.exports.jsx(tv, { className: "overflow-hidden p-0 shadow-2xl", children: /* @__PURE__ */ f.exports.jsx(zn, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), lr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ f.exports.jsx(Rs, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ f.exports.jsx(
    Ut.Input,
    {
      ref: n,
      className: F(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
lr.displayName = Ut.Input.displayName;
const Ja = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ut.List,
  {
    ref: n,
    className: F("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Ja.displayName = Ut.List.displayName;
const ur = C.forwardRef((e, t) => /* @__PURE__ */ f.exports.jsx(
  Ut.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
ur.displayName = Ut.Empty.displayName;
const un = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ut.Group,
  {
    ref: n,
    className: F(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
un.displayName = Ut.Group.displayName;
const Hi = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ut.Separator,
  {
    ref: n,
    className: F("-mx-1 h-px bg-border", e),
    ...t
  }
));
Hi.displayName = Ut.Separator.displayName;
const dn = C.forwardRef(({ className: e, onClick: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Ut.Item,
  {
    ref: r,
    onClick: t,
    className: F(
      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n
  }
));
dn.displayName = Ut.Item.displayName;
const sP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: F(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
sP.displayName = "CommandShortcut";
const iP = /* @__PURE__ */ j((e, t) => {
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
  }, /* @__PURE__ */ w(de.div, N({}, o, {
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
}), cP = iP, c8 = cP;
function lP(e, t) {
  return hi((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const ig = "ScrollArea", [cg, l8] = at(ig), [uP, Xt] = cg(ig), dP = /* @__PURE__ */ j((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [i, c] = X(null), [l, u] = X(null), [d, p] = X(null), [m, h] = X(null), [v, g] = X(null), [b, x] = X(0), [y, _] = X(0), [$, E] = X(!1), [P, D] = X(!1), R = Ce(
    t,
    (G) => c(G)
  ), K = Sn(o);
  return /* @__PURE__ */ w(uP, {
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
    scrollbarYEnabled: P,
    onScrollbarYEnabledChange: D,
    onCornerWidthChange: x,
    onCornerHeightChange: _
  }, /* @__PURE__ */ w(de.div, N({
    dir: K
  }, s, {
    ref: R,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      ["--radix-scroll-area-corner-width"]: b + "px",
      ["--radix-scroll-area-corner-height"]: y + "px",
      ...e.style
    }
  })));
}), fP = "ScrollAreaViewport", pP = /* @__PURE__ */ j((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = Xt(fP, n), s = H(null), i = Ce(t, s, a.onViewportChange);
  return /* @__PURE__ */ w(Zt, null, /* @__PURE__ */ w("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ w(de.div, N({
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
}), Hn = "ScrollAreaScrollbar", lg = /* @__PURE__ */ j((e, t) => {
  const { forceMount: n, ...r } = e, o = Xt(Hn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
  return Q(() => (i ? a(!0) : s(!0), () => {
    i ? a(!1) : s(!1);
  }), [
    i,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ w(mP, N({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ w(hP, N({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ w(ug, N({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ w(Qu, N({}, r, {
    ref: t
  })) : null;
}), mP = /* @__PURE__ */ j((e, t) => {
  const { forceMount: n, ...r } = e, o = Xt(Hn, e.__scopeScrollArea), [a, s] = X(!1);
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
  }, /* @__PURE__ */ w(ug, N({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), hP = /* @__PURE__ */ j((e, t) => {
  const { forceMount: n, ...r } = e, o = Xt(Hn, e.__scopeScrollArea), a = e.orientation === "horizontal", s = Ki(
    () => c("SCROLL_END"),
    100
  ), [i, c] = lP("hidden", {
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
  }, /* @__PURE__ */ w(Qu, N({
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
}), ug = /* @__PURE__ */ j((e, t) => {
  const n = Xt(Hn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = X(!1), i = e.orientation === "horizontal", c = Ki(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? l : u);
    }
  }, 10);
  return yo(n.viewport, c), yo(n.content, c), /* @__PURE__ */ w(it, {
    present: r || a
  }, /* @__PURE__ */ w(Qu, N({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), Qu = /* @__PURE__ */ j((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Xt(Hn, e.__scopeScrollArea), a = H(null), s = H(0), [i, c] = X({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = mg(i.viewport, i.content), u = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: Boolean(l > 0 && l < 1),
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function d(p, m) {
    return _P(p, s.current, i, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ w(vP, N({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollLeft, m = Kf(p, i, o.dir);
        a.current.style.transform = `translate3d(${m}px, 0, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = d(p, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ w(gP, N({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollTop, m = Kf(p, i);
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
}), vP = /* @__PURE__ */ j((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Xt(Hn, e.__scopeScrollArea), [s, i] = X(), c = H(null), l = Ce(t, c, a.onScrollbarXChange);
  return Q(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ w(fg, N({
    "data-orientation": "horizontal"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: Yi(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const p = a.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(p), vg(p, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: qs(s.paddingLeft),
          paddingEnd: qs(s.paddingRight)
        }
      });
    }
  }));
}), gP = /* @__PURE__ */ j((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Xt(Hn, e.__scopeScrollArea), [s, i] = X(), c = H(null), l = Ce(t, c, a.onScrollbarYChange);
  return Q(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ w(fg, N({
    "data-orientation": "vertical"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: Yi(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const p = a.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(p), vg(p, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: qs(s.paddingTop),
          paddingEnd: qs(s.paddingBottom)
        }
      });
    }
  }));
}), [bP, dg] = cg(Hn), fg = /* @__PURE__ */ j((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: d, ...p } = e, m = Xt(Hn, n), [h, v] = X(null), g = Ce(
    t,
    (R) => v(R)
  ), b = H(null), x = H(""), y = m.viewport, _ = r.content - r.viewport, $ = qe(u), E = qe(c), P = Ki(d, 10);
  function D(R) {
    if (b.current) {
      const K = R.clientX - b.current.left, G = R.clientY - b.current.top;
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
  ]), yo(h, P), yo(m.content, P), /* @__PURE__ */ w(bP, {
    scope: n,
    scrollbar: h,
    hasThumb: o,
    onThumbChange: qe(a),
    onThumbPointerUp: qe(s),
    onThumbPositionChange: E,
    onThumbPointerDown: qe(i)
  }, /* @__PURE__ */ w(de.div, N({}, p, {
    ref: g,
    style: {
      position: "absolute",
      ...p.style
    },
    onPointerDown: ee(e.onPointerDown, (R) => {
      R.button === 0 && (R.target.setPointerCapture(R.pointerId), b.current = h.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", D(R));
    }),
    onPointerMove: ee(e.onPointerMove, D),
    onPointerUp: ee(e.onPointerUp, (R) => {
      const K = R.target;
      K.hasPointerCapture(R.pointerId) && K.releasePointerCapture(R.pointerId), document.body.style.webkitUserSelect = x.current, b.current = null;
    })
  })));
}), Cl = "ScrollAreaThumb", xP = /* @__PURE__ */ j((e, t) => {
  const { forceMount: n, ...r } = e, o = dg(Cl, e.__scopeScrollArea);
  return /* @__PURE__ */ w(it, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ w(yP, N({
    ref: t
  }, r)));
}), yP = /* @__PURE__ */ j((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = Xt(Cl, n), s = dg(Cl, n), { onThumbPositionChange: i } = s, c = Ce(
    t,
    (d) => s.onThumbChange(d)
  ), l = H(), u = Ki(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return Q(() => {
    const d = a.viewport;
    if (d) {
      const p = () => {
        if (u(), !l.current) {
          const m = CP(d, i);
          l.current = m, i();
        }
      };
      return i(), d.addEventListener("scroll", p), () => d.removeEventListener("scroll", p);
    }
  }, [
    a.viewport,
    u,
    i
  ]), /* @__PURE__ */ w(de.div, N({
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
}), pg = "ScrollAreaCorner", wP = /* @__PURE__ */ j((e, t) => {
  const n = Xt(pg, e.__scopeScrollArea), r = Boolean(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ w($P, N({}, e, {
    ref: t
  })) : null;
}), $P = /* @__PURE__ */ j((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Xt(pg, n), [a, s] = X(0), [i, c] = X(0), l = Boolean(a && i);
  return yo(o.scrollbarX, () => {
    var u;
    const d = ((u = o.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(d), c(d);
  }), yo(o.scrollbarY, () => {
    var u;
    const d = ((u = o.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(d), s(d);
  }), l ? /* @__PURE__ */ w(de.div, N({}, r, {
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
function qs(e) {
  return e ? parseInt(e, 10) : 0;
}
function mg(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Yi(e) {
  const t = mg(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function _P(e, t, n, r = "ltr") {
  const o = Yi(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, u = n.content - n.viewport, d = r === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return hg([
    c,
    l
  ], d)(e);
}
function Kf(e, t, n = "ltr") {
  const r = Yi(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], l = pa(e, c);
  return hg([
    0,
    s
  ], [
    0,
    i
  ])(l);
}
function hg(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function vg(e, t) {
  return e > 0 && e < t;
}
const CP = (e, t = () => {
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
function Ki(e, t) {
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
function yo(e, t) {
  const n = qe(t);
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
const gg = dP, SP = pP, EP = wP, NP = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  gg,
  {
    ref: r,
    className: F("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx(SP, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ f.exports.jsx(bg, {}),
      /* @__PURE__ */ f.exports.jsx(EP, {})
    ]
  }
));
NP.displayName = gg.displayName;
const bg = C.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  lg,
  {
    ref: r,
    orientation: t,
    className: F(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(xP, { className: "relative flex-1 rounded-full bg-border" })
  }
));
bg.displayName = lg.displayName;
const u8 = Ri, d8 = Ai, f8 = jo, xg = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(ko, { className: F(e), ...t });
xg.displayName = ko.displayName;
const yg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Mo,
  {
    className: F(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
yg.displayName = Mo.displayName;
const PP = So(
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
), TP = C.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(xg, { children: [
  /* @__PURE__ */ f.exports.jsx(yg, {}),
  /* @__PURE__ */ f.exports.jsxs(
    Do,
    {
      ref: o,
      className: F(PP({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ f.exports.jsxs(jo, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ f.exports.jsx(xi, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
TP.displayName = Do.displayName;
const OP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: F(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
OP.displayName = "SheetHeader";
const kP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: F(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
kP.displayName = "SheetFooter";
const MP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ro,
  {
    ref: n,
    className: F("text-lg font-semibold text-foreground", e),
    ...t
  }
));
MP.displayName = Ro.displayName;
const DP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ao,
  {
    ref: n,
    className: F("text-sm text-muted-foreground", e),
    ...t
  }
));
DP.displayName = Ao.displayName;
const Ju = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ f.exports.jsx(
  "table",
  {
    ref: n,
    className: F("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Ju.displayName = "TableUI";
const wg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("thead", { ref: n, className: F("[&_tr]:border-b", e), ...t }));
wg.displayName = "TableHeader";
const $g = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tbody",
  {
    ref: n,
    className: F("[&_tr:last-child]:border-0", e),
    ...t
  }
));
$g.displayName = "TableBody";
const RP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tfoot",
  {
    ref: n,
    className: F("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
RP.displayName = "TableFooter";
const Gi = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tr",
  {
    ref: n,
    className: F(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
Gi.displayName = "TableRow";
const _g = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "th",
  {
    ref: n,
    className: F(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
_g.displayName = "TableHead";
const ed = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "td",
  {
    ref: n,
    className: F("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
ed.displayName = "TableCell";
const AP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "caption",
  {
    ref: n,
    className: F("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
AP.displayName = "TableCaption";
const jP = "AlertDialog", [IP, p8] = at(jP, [
  Gh
]), Yn = Gh(), LP = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Yn(t);
  return /* @__PURE__ */ w(Ri, N({}, r, n, {
    modal: !0
  }));
}, FP = /* @__PURE__ */ j((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Yn(n);
  return /* @__PURE__ */ w(Ai, N({}, o, r, {
    ref: t
  }));
}), VP = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Yn(t);
  return /* @__PURE__ */ w(ko, N({}, r, n));
}, UP = /* @__PURE__ */ j((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Yn(n);
  return /* @__PURE__ */ w(Mo, N({}, o, r, {
    ref: t
  }));
}), Cg = "AlertDialogContent", [zP, WP] = IP(Cg), BP = /* @__PURE__ */ j((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = Yn(n), s = H(null), i = Ce(t, s), c = H(null);
  return /* @__PURE__ */ w(OS, {
    contentName: Cg,
    titleName: HP,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ w(zP, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ w(Do, N({
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
  }), /* @__PURE__ */ w(Zl, null, r), !1)));
}), HP = "AlertDialogTitle", YP = /* @__PURE__ */ j((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Yn(n);
  return /* @__PURE__ */ w(Ro, N({}, o, r, {
    ref: t
  }));
}), KP = /* @__PURE__ */ j((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Yn(n);
  return /* @__PURE__ */ w(Ao, N({}, o, r, {
    ref: t
  }));
}), GP = /* @__PURE__ */ j((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Yn(n);
  return /* @__PURE__ */ w(jo, N({}, o, r, {
    ref: t
  }));
}), ZP = "AlertDialogCancel", qP = /* @__PURE__ */ j((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = WP(ZP, n), a = Yn(n), s = Ce(t, o);
  return /* @__PURE__ */ w(jo, N({}, a, r, {
    ref: s
  }));
}), XP = LP, QP = FP, Sg = VP, Eg = UP, Ng = BP, Pg = GP, Tg = qP, Og = YP, kg = KP, m8 = XP, h8 = QP, Mg = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(Sg, { className: F(e), ...t });
Mg.displayName = Sg.displayName;
const Dg = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Eg,
  {
    className: F(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...n,
    ref: r
  }
));
Dg.displayName = Eg.displayName;
const JP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(Mg, { children: [
  /* @__PURE__ */ f.exports.jsx(Dg, {}),
  /* @__PURE__ */ f.exports.jsx(
    Ng,
    {
      ref: n,
      className: F(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        e
      ),
      ...t
    }
  )
] }));
JP.displayName = Ng.displayName;
const eT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: F(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
eT.displayName = "AlertDialogHeader";
const tT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: F(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
tT.displayName = "AlertDialogFooter";
const nT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Og,
  {
    ref: n,
    className: F("text-lg font-semibold", e),
    ...t
  }
));
nT.displayName = Og.displayName;
const rT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  kg,
  {
    ref: n,
    className: F("text-sm text-muted-foreground", e),
    ...t
  }
));
rT.displayName = kg.displayName;
const oT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Pg,
  {
    ref: n,
    className: F(oa(), e),
    ...t
  }
));
oT.displayName = Pg.displayName;
const aT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Tg,
  {
    ref: n,
    className: F(
      oa({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
aT.displayName = Tg.displayName;
function v8({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f.exports.jsx(
    "div",
    {
      className: F("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const Rg = "Collapsible", [sT, Ag] = at(Rg), [iT, td] = sT(Rg), cT = /* @__PURE__ */ j((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...i } = e, [c = !1, l] = dt({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ w(iT, {
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
  }, /* @__PURE__ */ w(de.div, N({
    "data-state": nd(c),
    "data-disabled": a ? "" : void 0
  }, i, {
    ref: t
  })));
}), lT = "CollapsibleTrigger", jg = /* @__PURE__ */ j((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = td(lT, n);
  return /* @__PURE__ */ w(de.button, N({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": nd(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: ee(e.onClick, o.onOpenToggle)
  }));
}), Ig = "CollapsibleContent", Lg = /* @__PURE__ */ j((e, t) => {
  const { forceMount: n, ...r } = e, o = td(Ig, e.__scopeCollapsible);
  return /* @__PURE__ */ w(
    it,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ w(uT, N({}, r, {
      ref: t,
      present: a
    }))
  );
}), uT = /* @__PURE__ */ j((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = td(Ig, n), [i, c] = X(r), l = H(null), u = Ce(t, l), d = H(0), p = d.current, m = H(0), h = m.current, v = s.open || i, g = H(v), b = H();
  return Q(() => {
    const x = requestAnimationFrame(
      () => g.current = !1
    );
    return () => cancelAnimationFrame(x);
  }, []), _t(() => {
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
  ]), /* @__PURE__ */ w(de.div, N({
    "data-state": nd(s.open),
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
function nd(e) {
  return e ? "open" : "closed";
}
const Fg = cT, dT = jg, fT = Lg, yr = "Accordion", pT = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [rd, mT, hT] = vr(yr), [Zi, g8] = at(yr, [
  hT,
  Ag
]), od = Ag(), Vg = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ S.createElement(rd.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ S.createElement(xT, N({}, a, {
    ref: t
  })) : /* @__PURE__ */ S.createElement(bT, N({}, o, {
    ref: t
  })));
});
Vg.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [Ug, vT] = Zi(yr), [zg, gT] = Zi(yr, {
  collapsible: !1
}), bT = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [i, c] = dt({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ S.createElement(Ug, {
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
  }, /* @__PURE__ */ S.createElement(zg, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ S.createElement(Wg, N({}, s, {
    ref: t
  }))));
}), xT = /* @__PURE__ */ S.forwardRef((e, t) => {
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
  return /* @__PURE__ */ S.createElement(Ug, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ S.createElement(zg, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ S.createElement(Wg, N({}, a, {
    ref: t
  }))));
}), [yT, qi] = Zi(yr), Wg = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = S.useRef(null), c = Ce(i, t), l = mT(n), d = Sn(o) === "ltr", p = ee(e.onKeyDown, (m) => {
    var h;
    if (!pT.includes(m.key))
      return;
    const v = m.target, g = l().filter((R) => {
      var K;
      return !((K = R.ref.current) !== null && K !== void 0 && K.disabled);
    }), b = g.findIndex(
      (R) => R.ref.current === v
    ), x = g.length;
    if (b === -1)
      return;
    m.preventDefault();
    let y = b;
    const _ = 0, $ = x - 1, E = () => {
      y = b + 1, y > $ && (y = _);
    }, P = () => {
      y = b - 1, y < _ && (y = $);
    };
    switch (m.key) {
      case "Home":
        y = _;
        break;
      case "End":
        y = $;
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
    const D = y % x;
    (h = g[D].ref.current) === null || h === void 0 || h.focus();
  });
  return /* @__PURE__ */ S.createElement(yT, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ S.createElement(rd.Slot, {
    scope: n
  }, /* @__PURE__ */ S.createElement(de.div, N({}, s, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : p
  }))));
}), Sl = "AccordionItem", [wT, ad] = Zi(Sl), $T = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = qi(Sl, n), s = vT(Sl, n), i = od(n), c = mt(), l = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ S.createElement(wT, {
    scope: n,
    open: l,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ S.createElement(Fg, N({
    "data-orientation": a.orientation,
    "data-state": Bg(l)
  }, i, o, {
    ref: t,
    disabled: u,
    open: l,
    onOpenChange: (d) => {
      d ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), _T = "AccordionHeader", CT = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = qi(yr, n), a = ad(_T, n);
  return /* @__PURE__ */ S.createElement(de.h3, N({
    "data-orientation": o.orientation,
    "data-state": Bg(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), Gf = "AccordionTrigger", ST = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = qi(yr, n), a = ad(Gf, n), s = gT(Gf, n), i = od(n);
  return /* @__PURE__ */ S.createElement(rd.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ S.createElement(dT, N({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, i, r, {
    ref: t
  })));
}), ET = "AccordionContent", NT = /* @__PURE__ */ S.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = qi(yr, n), a = ad(ET, n), s = od(n);
  return /* @__PURE__ */ S.createElement(fT, N({
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
function Bg(e) {
  return e ? "open" : "closed";
}
const PT = Vg, TT = $T, OT = CT, Hg = ST, Yg = NT, b8 = PT, kT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  TT,
  {
    ref: n,
    className: F("border-b", e),
    ...t
  }
));
kT.displayName = "AccordionItem";
const MT = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(OT, { className: "flex", children: /* @__PURE__ */ f.exports.jsxs(
  Hg,
  {
    ref: r,
    className: F(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(aa, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
MT.displayName = Hg.displayName;
const DT = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Yg,
  {
    ref: r,
    className: F(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
DT.displayName = Yg.displayName;
const x8 = Fg, y8 = jg, w8 = Lg;
let Rc;
const Kg = "HoverCard", [Gg, $8] = at(Kg, [
  En
]), sd = En(), [RT, id] = Gg(Kg), AT = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: i = 300 } = e, c = sd(t), l = H(0), u = H(0), d = H(!1), p = H(!1), [m = !1, h] = dt({
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
  return Q(() => () => {
    clearTimeout(l.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ w(RT, {
    scope: t,
    open: m,
    onOpenChange: h,
    onOpen: v,
    onClose: g,
    onDismiss: b,
    hasSelectionRef: d,
    isPointerDownOnContentRef: p
  }, /* @__PURE__ */ w(To, c, n));
}, jT = "HoverCardTrigger", IT = /* @__PURE__ */ j((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = id(jT, n), a = sd(n);
  return /* @__PURE__ */ w(Ua, N({
    asChild: !0
  }, a), /* @__PURE__ */ w(de.a, N({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: ee(e.onPointerEnter, Xs(o.onOpen)),
    onPointerLeave: ee(e.onPointerLeave, Xs(o.onClose)),
    onFocus: ee(e.onFocus, o.onOpen),
    onBlur: ee(e.onBlur, o.onClose),
    onTouchStart: ee(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), LT = "HoverCardPortal", [_8, FT] = Gg(LT, {
  forceMount: void 0
}), El = "HoverCardContent", VT = /* @__PURE__ */ j((e, t) => {
  const n = FT(El, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = id(El, e.__scopeHoverCard);
  return /* @__PURE__ */ w(it, {
    present: r || a.open
  }, /* @__PURE__ */ w(UT, N({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: ee(e.onPointerEnter, Xs(a.onOpen)),
    onPointerLeave: ee(e.onPointerLeave, Xs(a.onClose)),
    ref: t
  })));
}), UT = /* @__PURE__ */ j((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...i } = e, c = id(El, n), l = sd(n), u = H(null), d = Ce(t, u), [p, m] = X(!1);
  return Q(() => {
    if (p) {
      const h = document.body;
      return Rc = h.style.userSelect || h.style.webkitUserSelect, h.style.userSelect = "none", h.style.webkitUserSelect = "none", () => {
        h.style.userSelect = Rc, h.style.webkitUserSelect = Rc;
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
    u.current && zT(u.current).forEach(
      (v) => v.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ w(zr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: ee(a, (h) => {
      h.preventDefault();
    }),
    onDismiss: c.onDismiss
  }, /* @__PURE__ */ w(za, N({}, l, i, {
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
function Xs(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function zT(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const WT = AT, BT = IT, Zg = VT, C8 = WT, S8 = BT, HT = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  Zg,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: F(
      "z-50 w-64 rounded-md border bg-card p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
HT.displayName = Zg.displayName;
const E8 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), cd = "Menubar", [Nl, YT, KT] = vr(cd), [qg, N8] = at(cd, [
  KT,
  gr
]), At = Ba(), Xg = gr(), [GT, ld] = qg(cd), ZT = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: i, ...c } = e, l = Sn(i), u = Xg(n), [d = "", p] = dt({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [m, h] = X(null);
  return /* @__PURE__ */ w(GT, {
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
  }, /* @__PURE__ */ w(Nl.Provider, {
    scope: n
  }, /* @__PURE__ */ w(Nl.Slot, {
    scope: n
  }, /* @__PURE__ */ w(Ei, N({
    asChild: !0
  }, u, {
    orientation: "horizontal",
    loop: s,
    dir: l,
    currentTabStopId: m,
    onCurrentTabStopIdChange: h
  }), /* @__PURE__ */ w(de.div, N({
    role: "menubar"
  }, c, {
    ref: t
  }))))));
}), Qg = "MenubarMenu", [qT, Jg] = qg(Qg), XT = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = mt(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = ld(Qg, t), i = At(t), c = H(null), l = H(!1), u = s.value === a;
  return Q(() => {
    u || (l.current = !1);
  }, [
    u
  ]), /* @__PURE__ */ w(qT, {
    scope: t,
    value: a,
    triggerId: mt(),
    triggerRef: c,
    contentId: mt(),
    wasKeyboardTriggerOpenRef: l
  }, /* @__PURE__ */ w(_u, N({}, i, {
    open: u,
    onOpenChange: (d) => {
      d || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, Zf = "MenubarTrigger", QT = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = Xg(n), s = At(n), i = ld(Zf, n), c = Jg(Zf, n), l = H(null), u = Ce(t, l, c.triggerRef), [d, p] = X(!1), m = i.value === c.value;
  return /* @__PURE__ */ w(Nl.ItemSlot, {
    scope: n,
    value: c.value,
    disabled: r
  }, /* @__PURE__ */ w(Ni, N({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: c.value
  }), /* @__PURE__ */ w(Cu, N({
    asChild: !0
  }, s), /* @__PURE__ */ w(de.button, N({
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
}), JT = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = At(t);
  return /* @__PURE__ */ w(Su, N({}, r, n));
}, qf = "MenubarContent", e6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = At(n), s = ld(qf, n), i = Jg(qf, n), c = YT(n), l = H(!1);
  return /* @__PURE__ */ w(Eu, N({
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
        let x = c().filter(
          ($) => !$.disabled
        ).map(
          ($) => $.value
        );
        v && x.reverse();
        const y = x.indexOf(i.value);
        x = s.loop ? f6(x, y + 1) : x.slice(y + 1);
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
}), t6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Nu, N({}, o, r, {
    ref: t
  }));
}), n6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Pu, N({}, o, r, {
    ref: t
  }));
}), r6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Tu, N({}, o, r, {
    ref: t
  }));
}), o6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Ou, N({}, o, r, {
    ref: t
  }));
}), a6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(ku, N({}, o, r, {
    ref: t
  }));
}), s6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Mu, N({}, o, r, {
    ref: t
  }));
}), i6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Du, N({}, o, r, {
    ref: t
  }));
}), c6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Ru, N({}, o, r, {
    ref: t
  }));
}), l6 = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = At(t), [i = !1, c] = dt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ w(Au, N({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, u6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(ju, N({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), d6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = At(n);
  return /* @__PURE__ */ w(Iu, N({}, o, {
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
function f6(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const eb = ZT, p6 = XT, tb = QT, nb = JT, rb = e6, m6 = t6, ob = n6, ab = r6, sb = o6, h6 = a6, ib = s6, cb = i6, lb = c6, v6 = l6, ub = u6, db = d6, P8 = p6, T8 = m6, O8 = nb, k8 = v6, M8 = h6, g6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  eb,
  {
    ref: n,
    className: F(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
g6.displayName = eb.displayName;
const b6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  tb,
  {
    ref: n,
    className: F(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
b6.displayName = tb.displayName;
const x6 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  ub,
  {
    ref: o,
    className: F(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ f.exports.jsx(Eo, { className: "ml-auto h-4 w-4" })
    ]
  }
));
x6.displayName = ub.displayName;
const y6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  db,
  {
    ref: n,
    className: F(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
y6.displayName = db.displayName;
const w6 = C.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ f.exports.jsx(nb, { children: /* @__PURE__ */ f.exports.jsx(
    rb,
    {
      ref: a,
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: F(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...o
    }
  ) })
);
w6.displayName = rb.displayName;
const $6 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  ab,
  {
    ref: r,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
$6.displayName = ab.displayName;
const _6 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  sb,
  {
    ref: o,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(cb, { children: /* @__PURE__ */ f.exports.jsx(cn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
_6.displayName = sb.displayName;
const C6 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  ib,
  {
    ref: r,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(cb, { children: /* @__PURE__ */ f.exports.jsx(gi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
C6.displayName = ib.displayName;
const S6 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  ob,
  {
    ref: r,
    className: F(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
S6.displayName = ob.displayName;
const E6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  lb,
  {
    ref: n,
    className: F("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
E6.displayName = lb.displayName;
const N6 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: F(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
N6.displayname = "MenubarShortcut";
const es = "NavigationMenu", [ud, fb, P6] = vr(es), [Pl, T6, O6] = vr(es), [dd, D8] = at(es, [
  P6,
  O6
]), [k6, mn] = dd(es), [M6, D6] = dd(es), R6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: i = 300, orientation: c = "horizontal", dir: l, ...u } = e, [d, p] = X(null), m = Ce(
    t,
    (R) => p(R)
  ), h = Sn(l), v = H(0), g = H(0), b = H(0), [x, y] = X(!0), [_ = "", $] = dt({
    prop: r,
    onChange: (R) => {
      const K = R !== "", G = i > 0;
      K ? (window.clearTimeout(b.current), G && y(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(
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
  ]), P = fe((R) => {
    window.clearTimeout(g.current), $(R);
  }, [
    $
  ]), D = fe((R) => {
    _ === R ? window.clearTimeout(g.current) : v.current = window.setTimeout(() => {
      window.clearTimeout(g.current), $(R);
    }, s);
  }, [
    _,
    $,
    s
  ]);
  return Q(() => () => {
    window.clearTimeout(v.current), window.clearTimeout(g.current), window.clearTimeout(b.current);
  }, []), /* @__PURE__ */ w(A6, {
    scope: n,
    isRootMenu: !0,
    value: _,
    dir: h,
    orientation: c,
    rootNavigationMenu: d,
    onTriggerEnter: (R) => {
      window.clearTimeout(v.current), x ? D(R) : P(R);
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
  }, /* @__PURE__ */ w(de.nav, N({
    "aria-label": "Main",
    "data-orientation": c,
    dir: h
  }, u, {
    ref: m
  })));
}), A6 = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: i, onItemSelect: c, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: d, onContentEnter: p, onContentLeave: m } = e, [h, v] = X(null), [g, b] = X(/* @__PURE__ */ new Map()), [x, y] = X(null);
  return /* @__PURE__ */ w(k6, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: i,
    previousValue: Lo(i),
    baseId: mt(),
    dir: o,
    orientation: a,
    viewport: h,
    onViewportChange: v,
    indicatorTrack: x,
    onIndicatorTrackChange: y,
    onTriggerEnter: qe(u),
    onTriggerLeave: qe(d),
    onContentEnter: qe(p),
    onContentLeave: qe(m),
    onItemSelect: qe(c),
    onItemDismiss: qe(l),
    onViewportContentChange: fe((_, $) => {
      b((E) => (E.set(_, $), new Map(E)));
    }, []),
    onViewportContentRemove: fe((_) => {
      b(($) => $.has(_) ? ($.delete(_), new Map($)) : $);
    }, [])
  }, /* @__PURE__ */ w(ud.Provider, {
    scope: t
  }, /* @__PURE__ */ w(M6, {
    scope: t,
    items: g
  }, s)));
}, j6 = "NavigationMenuList", I6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = mn(j6, n), a = /* @__PURE__ */ w(de.ul, N({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ w(de.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ w(ud.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ w(gb, {
    asChild: !0
  }, a) : a));
}), L6 = "NavigationMenuItem", [F6, pb] = dd(L6), V6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = mt(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = H(null), c = H(null), l = H(null), u = H(() => {
  }), d = H(!1), p = fe((h = "start") => {
    if (i.current) {
      u.current();
      const v = Tl(i.current);
      v.length && fd(h === "start" ? v : v.reverse());
    }
  }, []), m = fe(() => {
    if (i.current) {
      const h = Tl(i.current);
      h.length && (u.current = X6(h));
    }
  }, []);
  return /* @__PURE__ */ w(F6, {
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
  }, /* @__PURE__ */ w(de.li, N({}, o, {
    ref: t
  })));
}), Xf = "NavigationMenuTrigger", U6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = mn(Xf, e.__scopeNavigationMenu), s = pb(Xf, e.__scopeNavigationMenu), i = H(null), c = Ce(i, s.triggerRef, t), l = xb(a.baseId, s.value), u = yb(a.baseId, s.value), d = H(!1), p = H(!1), m = s.value === a.value;
  return /* @__PURE__ */ w(Zt, null, /* @__PURE__ */ w(ud.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ w(bb, {
    asChild: !0
  }, /* @__PURE__ */ w(de.button, N({
    id: l,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": pd(m),
    "aria-expanded": m,
    "aria-controls": u
  }, o, {
    ref: c,
    onPointerEnter: ee(e.onPointerEnter, () => {
      p.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: ee(e.onPointerMove, Qs(() => {
      r || p.current || s.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(s.value), d.current = !0);
    })),
    onPointerLeave: ee(e.onPointerLeave, Qs(() => {
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
  })))), m && /* @__PURE__ */ w(Zt, null, /* @__PURE__ */ w(uv, {
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
}), Qf = "navigationMenu.linkSelect", z6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ w(bb, {
    asChild: !0
  }, /* @__PURE__ */ w(de.a, N({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: ee(e.onClick, (s) => {
      const i = s.target, c = new CustomEvent(Qf, {
        bubbles: !0,
        cancelable: !0
      });
      if (i.addEventListener(
        Qf,
        (l) => o == null ? void 0 : o(l),
        {
          once: !0
        }
      ), Ls(i, c), !c.defaultPrevented && !s.metaKey) {
        const l = new CustomEvent(Ts, {
          bubbles: !0,
          cancelable: !0
        });
        Ls(i, l);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), mb = "NavigationMenuIndicator", W6 = /* @__PURE__ */ j((e, t) => {
  const { forceMount: n, ...r } = e, o = mn(mb, e.__scopeNavigationMenu), a = Boolean(o.value);
  return o.indicatorTrack ? /* @__PURE__ */ Kl.createPortal(/* @__PURE__ */ w(it, {
    present: n || a
  }, /* @__PURE__ */ w(B6, N({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), B6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = mn(mb, n), a = fb(n), [s, i] = X(null), [c, l] = X(null), u = o.orientation === "horizontal", d = Boolean(o.value);
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
  return Ol(s, p), Ol(o.indicatorTrack, p), c ? /* @__PURE__ */ w(de.div, N({
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
}), ha = "NavigationMenuContent", H6 = /* @__PURE__ */ j((e, t) => {
  const { forceMount: n, ...r } = e, o = mn(ha, e.__scopeNavigationMenu), a = pb(ha, e.__scopeNavigationMenu), s = Ce(a.contentRef, t), i = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ w(Y6, N({
    forceMount: n
  }, c, {
    ref: s
  })) : /* @__PURE__ */ w(it, {
    present: n || i
  }, /* @__PURE__ */ w(hb, N({
    "data-state": pd(i)
  }, c, {
    ref: s,
    onPointerEnter: ee(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: ee(e.onPointerLeave, Qs(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !i && o.isRootMenu ? "none" : void 0,
      ...c.style
    }
  })));
}), Y6 = /* @__PURE__ */ j((e, t) => {
  const n = mn(ha, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
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
}), Ts = "navigationMenu.rootContentDismiss", hb = /* @__PURE__ */ j((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: i, onContentFocusOutside: c, ...l } = e, u = mn(ha, n), d = H(null), p = Ce(d, t), m = xb(u.baseId, r), h = yb(u.baseId, r), v = fb(n), g = H(null), { onItemDismiss: b } = u;
  Q(() => {
    const y = d.current;
    if (u.isRootMenu && y) {
      const _ = () => {
        var $;
        b(), i(), y.contains(document.activeElement) && (($ = o.current) === null || $ === void 0 || $.focus());
      };
      return y.addEventListener(Ts, _), () => y.removeEventListener(Ts, _);
    }
  }, [
    u.isRootMenu,
    e.value,
    o,
    b,
    i
  ]);
  const x = kt(() => {
    const _ = v().map(
      (K) => K.value
    );
    u.dir === "rtl" && _.reverse();
    const $ = _.indexOf(u.value), E = _.indexOf(u.previousValue), P = r === u.value, D = E === _.indexOf(r);
    if (!P && !D)
      return g.current;
    const R = (() => {
      if ($ !== E) {
        if (P && E !== -1)
          return $ > E ? "from-end" : "from-start";
        if (D && $ !== -1)
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
  return /* @__PURE__ */ w(gb, {
    asChild: !0
  }, /* @__PURE__ */ w(zr, N({
    id: h,
    "aria-labelledby": m,
    "data-motion": x,
    "data-orientation": u.orientation
  }, l, {
    ref: p,
    onDismiss: () => {
      var y;
      const _ = new Event(Ts, {
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
      const $ = y.target, E = v().some((D) => {
        var R;
        return (R = D.ref.current) === null || R === void 0 ? void 0 : R.contains($);
      }), P = u.isRootMenu && ((_ = u.viewport) === null || _ === void 0 ? void 0 : _.contains($));
      (E || P || !u.isRootMenu) && y.preventDefault();
    }),
    onKeyDown: ee(e.onKeyDown, (y) => {
      const _ = y.altKey || y.ctrlKey || y.metaKey;
      if (y.key === "Tab" && !_) {
        const P = Tl(y.currentTarget), D = document.activeElement, R = P.findIndex(
          (W) => W === D
        ), G = y.shiftKey ? P.slice(0, R).reverse() : P.slice(R + 1, P.length);
        if (fd(G))
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
}), vb = "NavigationMenuViewport", K6 = /* @__PURE__ */ j((e, t) => {
  const { forceMount: n, ...r } = e, o = mn(vb, e.__scopeNavigationMenu), a = Boolean(o.value);
  return /* @__PURE__ */ w(it, {
    present: n || a
  }, /* @__PURE__ */ w(G6, N({}, r, {
    ref: t
  })));
}), G6 = /* @__PURE__ */ j((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = mn(vb, n), s = Ce(t, a.onViewportChange), i = D6(ha, e.__scopeNavigationMenu), [c, l] = X(null), [u, d] = X(null), p = c ? (c == null ? void 0 : c.width) + "px" : void 0, m = c ? (c == null ? void 0 : c.height) + "px" : void 0, h = Boolean(a.value), v = h ? a.value : a.previousValue;
  return Ol(u, () => {
    u && l({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }), /* @__PURE__ */ w(de.div, N({
    "data-state": pd(h),
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
    onPointerLeave: ee(e.onPointerLeave, Qs(a.onContentLeave))
  }), Array.from(i.items).map(([b, { ref: x, forceMount: y, ..._ }]) => {
    const $ = v === b;
    return /* @__PURE__ */ w(it, {
      key: b,
      present: y || $
    }, /* @__PURE__ */ w(hb, N({}, _, {
      ref: Da(x, (E) => {
        $ && E && d(E);
      })
    })));
  }));
}), Z6 = "FocusGroup", gb = /* @__PURE__ */ j((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = mn(Z6, n);
  return /* @__PURE__ */ w(Pl.Provider, {
    scope: n
  }, /* @__PURE__ */ w(Pl.Slot, {
    scope: n
  }, /* @__PURE__ */ w(de.div, N({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), Jf = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], q6 = "FocusGroupItem", bb = /* @__PURE__ */ j((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = T6(n), a = mn(q6, n);
  return /* @__PURE__ */ w(Pl.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ w(de.button, N({}, r, {
    ref: t,
    onKeyDown: ee(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...Jf
      ].includes(s.key)) {
        let c = o().map(
          (d) => d.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && c.reverse(), Jf.includes(s.key)) {
          const d = c.indexOf(s.currentTarget);
          c = c.slice(d + 1);
        }
        setTimeout(
          () => fd(c)
        ), s.preventDefault();
      }
    })
  })));
});
function Tl(e) {
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
function fd(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function X6(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Ol(e, t) {
  const n = qe(t);
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
function pd(e) {
  return e ? "open" : "closed";
}
function xb(e, t) {
  return `${e}-trigger-${t}`;
}
function yb(e, t) {
  return `${e}-content-${t}`;
}
function Qs(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const wb = R6, $b = I6, Q6 = V6, _b = U6, J6 = z6, Cb = W6, Sb = H6, Eb = K6, eO = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  wb,
  {
    ref: r,
    className: F(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(Nb, {})
    ]
  }
));
eO.displayName = wb.displayName;
const tO = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  $b,
  {
    ref: n,
    className: F(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
tO.displayName = $b.displayName;
const R8 = Q6, nO = So(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), rO = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  _b,
  {
    ref: r,
    className: F(nO(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ f.exports.jsx(
        aa,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
rO.displayName = _b.displayName;
const oO = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Sb,
  {
    ref: n,
    className: F(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
oO.displayName = Sb.displayName;
const A8 = J6, Nb = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: F("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ f.exports.jsx(
  Eb,
  {
    className: F(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-card text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
Nb.displayName = Eb.displayName;
const aO = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Cb,
  {
    ref: n,
    className: F(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.exports.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
aO.displayName = Cb.displayName;
const Pb = "Progress", Xi = 100, [sO, j8] = at(Pb), [iO, cO] = sO(Pb), Tb = /* @__PURE__ */ j((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = dO, ...s } = e, i = kl(o) ? o : Xi, c = kb(r, i) ? r : null, l = Js(c) ? a(c, i) : void 0;
  return /* @__PURE__ */ w(iO, {
    scope: n,
    value: c,
    max: i
  }, /* @__PURE__ */ w(de.div, N({
    "aria-valuemax": i,
    "aria-valuemin": 0,
    "aria-valuenow": Js(c) ? c : void 0,
    "aria-valuetext": l,
    role: "progressbar",
    "data-state": Ob(c, i),
    "data-value": c ?? void 0,
    "data-max": i
  }, s, {
    ref: t
  })));
});
Tb.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !kl(r) ? new Error(fO(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = kl(e.max) ? e.max : Xi;
    return r != null && !kb(r, a) ? new Error(pO(o, n)) : null;
  }
};
const lO = "ProgressIndicator", uO = /* @__PURE__ */ j((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = cO(lO, r);
  return /* @__PURE__ */ w(de.div, N({
    "data-state": Ob(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function dO(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Ob(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Js(e) {
  return typeof e == "number";
}
function kl(e) {
  return Js(e) && !isNaN(e) && e > 0;
}
function kb(e, t) {
  return Js(e) && !isNaN(e) && e <= t && e >= 0;
}
function fO(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Xi}\`.`;
}
function pO(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Xi} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const Mb = Tb, mO = uO, hO = C.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Mb,
  {
    ref: r,
    className: F(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(
      mO,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
hO.displayName = Mb.displayName;
const Db = "Radio", [vO, Rb] = at(Db), [gO, bO] = vO(Db), xO = /* @__PURE__ */ j((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: i = "on", onCheck: c, ...l } = e, [u, d] = X(null), p = Ce(
    t,
    (v) => d(v)
  ), m = H(!1), h = u ? Boolean(u.closest("form")) : !0;
  return /* @__PURE__ */ w(gO, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ w(de.button, N({
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
  })), h && /* @__PURE__ */ w($O, {
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
}), yO = "RadioIndicator", wO = /* @__PURE__ */ j((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = bO(yO, n);
  return /* @__PURE__ */ w(it, {
    present: r || a.checked
  }, /* @__PURE__ */ w(de.span, N({
    "data-state": Ab(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), $O = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = H(null), s = Lo(n), i = Va(t);
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
  ]), /* @__PURE__ */ w("input", N({
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
const _O = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], jb = "RadioGroup", [CO, I8] = at(jb, [
  gr,
  Rb
]), Ib = gr(), Lb = Rb(), [SO, EO] = CO(jb), NO = /* @__PURE__ */ j((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: i = !1, orientation: c, dir: l, loop: u = !0, onValueChange: d, ...p } = e, m = Ib(n), h = Sn(l), [v, g] = dt({
    prop: a,
    defaultProp: o,
    onChange: d
  });
  return /* @__PURE__ */ w(SO, {
    scope: n,
    name: r,
    required: s,
    disabled: i,
    value: v,
    onValueChange: g
  }, /* @__PURE__ */ w(Ei, N({
    asChild: !0
  }, m, {
    orientation: c,
    dir: h,
    loop: u
  }), /* @__PURE__ */ w(de.div, N({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": c,
    "data-disabled": i ? "" : void 0,
    dir: h
  }, p, {
    ref: t
  }))));
}), PO = "RadioGroupItem", TO = /* @__PURE__ */ j((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = EO(PO, n), s = a.disabled || r, i = Ib(n), c = Lb(n), l = H(null), u = Ce(t, l), d = a.value === o.value, p = H(!1);
  return Q(() => {
    const m = (v) => {
      _O.includes(v.key) && (p.current = !0);
    }, h = () => p.current = !1;
    return document.addEventListener("keydown", m), document.addEventListener("keyup", h), () => {
      document.removeEventListener("keydown", m), document.removeEventListener("keyup", h);
    };
  }, []), /* @__PURE__ */ w(Ni, N({
    asChild: !0
  }, i, {
    focusable: !s,
    active: d
  }), /* @__PURE__ */ w(xO, N({
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
}), OO = /* @__PURE__ */ j((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = Lb(n);
  return /* @__PURE__ */ w(wO, N({}, o, r, {
    ref: t
  }));
}), Fb = NO, Vb = TO, kO = OO, MO = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Fb,
  {
    className: F("grid gap-2", e),
    ...t,
    ref: n
  }
));
MO.displayName = Fb.displayName;
const DO = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Vb,
  {
    ref: r,
    className: F(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(kO, { className: "flex items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(gi, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
DO.displayName = Vb.displayName;
const Ub = [
  "PageUp",
  "PageDown"
], zb = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Wb = {
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
}, ts = "Slider", [Ml, RO, AO] = vr(ts), [Bb, L8] = at(ts, [
  AO
]), [jO, Qi] = Bb(ts), IO = /* @__PURE__ */ j((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: i = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    r
  ], value: u, onValueChange: d = () => {
  }, onValueCommit: p = () => {
  }, inverted: m = !1, ...h } = e, [v, g] = X(null), b = Ce(
    t,
    (L) => g(L)
  ), x = H(/* @__PURE__ */ new Set()), y = H(0), _ = s === "horizontal", $ = v ? Boolean(v.closest("form")) : !0, E = _ ? LO : FO, [P = [], D] = dt({
    prop: u,
    defaultProp: l,
    onChange: (L) => {
      var A;
      (A = [
        ...x.current
      ][y.current]) === null || A === void 0 || A.focus(), d(L);
    }
  }), R = H(P);
  function K(L) {
    const A = GO(P, L);
    Z(L, A);
  }
  function G(L) {
    Z(L, y.current);
  }
  function W() {
    const L = R.current[y.current];
    P[y.current] !== L && p(P);
  }
  function Z(L, A, { commit: I } = {
    commit: !1
  }) {
    const V = QO(a), Y = JO(Math.round((L - r) / a) * a + r, V), M = pa(Y, [
      r,
      o
    ]);
    D((k = []) => {
      const B = YO(k, M, A);
      if (XO(B, c * a)) {
        y.current = B.indexOf(M);
        const q = String(B) !== String(k);
        return q && I && p(B), q ? B : k;
      } else
        return k;
    });
  }
  return /* @__PURE__ */ w(jO, {
    scope: e.__scopeSlider,
    disabled: i,
    min: r,
    max: o,
    valueIndexToChangeRef: y,
    thumbs: x.current,
    values: P,
    orientation: s
  }, /* @__PURE__ */ w(Ml.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ w(Ml.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ w(E, N({
    "aria-disabled": i,
    "data-disabled": i ? "" : void 0
  }, h, {
    ref: b,
    onPointerDown: ee(h.onPointerDown, () => {
      i || (R.current = P);
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
    onEndKeyDown: () => !i && Z(o, P.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: L, direction: A }) => {
      if (!i) {
        const Y = Ub.includes(L.key) || L.shiftKey && zb.includes(L.key) ? 10 : 1, M = y.current, k = P[M], B = a * Y * A;
        Z(k + B, M, {
          commit: !0
        });
      }
    }
  })))), $ && P.map(
    (L, A) => /* @__PURE__ */ w(HO, {
      key: A,
      name: n ? n + (P.length > 1 ? "[]" : "") : void 0,
      value: L
    })
  ));
}), [Hb, Yb] = Bb(ts, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), LO = /* @__PURE__ */ j((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: i, onSlideEnd: c, onStepKeyDown: l, ...u } = e, [d, p] = X(null), m = Ce(
    t,
    (y) => p(y)
  ), h = H(), v = Sn(o), g = v === "ltr", b = g && !a || !g && a;
  function x(y) {
    const _ = h.current || d.getBoundingClientRect(), $ = [
      0,
      _.width
    ], P = md($, b ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return h.current = _, P(y - _.left);
  }
  return /* @__PURE__ */ w(Hb, {
    scope: e.__scopeSlider,
    startEdge: b ? "left" : "right",
    endEdge: b ? "right" : "left",
    direction: b ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ w(Kb, N({
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
      const $ = Wb[b ? "from-left" : "from-right"].includes(y.key);
      l == null || l({
        event: y,
        direction: $ ? -1 : 1
      });
    }
  })));
}), FO = /* @__PURE__ */ j((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: i, onStepKeyDown: c, ...l } = e, u = H(null), d = Ce(t, u), p = H(), m = !o;
  function h(v) {
    const g = p.current || u.current.getBoundingClientRect(), b = [
      0,
      g.height
    ], y = md(b, m ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return p.current = g, y(v - g.top);
  }
  return /* @__PURE__ */ w(Hb, {
    scope: e.__scopeSlider,
    startEdge: m ? "bottom" : "top",
    endEdge: m ? "top" : "bottom",
    size: "height",
    direction: m ? 1 : -1
  }, /* @__PURE__ */ w(Kb, N({
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
      const b = Wb[m ? "from-bottom" : "from-top"].includes(v.key);
      c == null || c({
        event: v,
        direction: b ? -1 : 1
      });
    }
  })));
}), Kb = /* @__PURE__ */ j((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: i, onStepKeyDown: c, ...l } = e, u = Qi(ts, n);
  return /* @__PURE__ */ w(de.span, N({}, l, {
    ref: t,
    onKeyDown: ee(e.onKeyDown, (d) => {
      d.key === "Home" ? (s(d), d.preventDefault()) : d.key === "End" ? (i(d), d.preventDefault()) : Ub.concat(zb).includes(d.key) && (c(d), d.preventDefault());
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
}), VO = "SliderTrack", UO = /* @__PURE__ */ j((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Qi(VO, n);
  return /* @__PURE__ */ w(de.span, N({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), ep = "SliderRange", zO = /* @__PURE__ */ j((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = Qi(ep, n), a = Yb(ep, n), s = H(null), i = Ce(t, s), c = o.values.length, l = o.values.map(
    (p) => Gb(p, o.min, o.max)
  ), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
  return /* @__PURE__ */ w(de.span, N({
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
}), tp = "SliderThumb", WO = /* @__PURE__ */ j((e, t) => {
  const n = RO(e.__scopeSlider), [r, o] = X(null), a = Ce(
    t,
    (i) => o(i)
  ), s = kt(
    () => r ? n().findIndex(
      (i) => i.ref.current === r
    ) : -1,
    [
      n,
      r
    ]
  );
  return /* @__PURE__ */ w(BO, N({}, e, {
    ref: a,
    index: s
  }));
}), BO = /* @__PURE__ */ j((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = Qi(tp, n), s = Yb(tp, n), [i, c] = X(null), l = Ce(
    t,
    (g) => c(g)
  ), u = Va(i), d = a.values[r], p = d === void 0 ? 0 : Gb(d, a.min, a.max), m = KO(r, a.values.length), h = u == null ? void 0 : u[s.size], v = h ? ZO(h, p, s.direction) : 0;
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
  }, /* @__PURE__ */ w(Ml.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ w(de.span, N({
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
}), HO = (e) => {
  const { value: t, ...n } = e, r = H(null), o = Lo(t);
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
  ]), /* @__PURE__ */ w("input", N({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function YO(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function Gb(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return pa(a, [
    0,
    100
  ]);
}
function KO(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function GO(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function ZO(e, t, n) {
  const r = e / 2, a = md([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function qO(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function XO(e, t) {
  if (t > 0) {
    const n = qO(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function md(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function QO(e) {
  return (String(e).split(".")[1] || "").length;
}
function JO(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const Zb = IO, ek = UO, tk = zO, nk = WO, rk = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(
  Zb,
  {
    ref: n,
    className: F(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ f.exports.jsx(ek, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ f.exports.jsx(tk, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ f.exports.jsx(nk, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
rk.displayName = Zb.displayName;
const qb = "Tabs", [ok, F8] = at(qb, [
  gr
]), Xb = gr(), [ak, hd] = ok(qb), sk = /* @__PURE__ */ j((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: i, activationMode: c = "automatic", ...l } = e, u = Sn(i), [d, p] = dt({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ w(ak, {
    scope: n,
    baseId: mt(),
    value: d,
    onValueChange: p,
    orientation: s,
    dir: u,
    activationMode: c
  }, /* @__PURE__ */ w(de.div, N({
    dir: u,
    "data-orientation": s
  }, l, {
    ref: t
  })));
}), ik = "TabsList", ck = /* @__PURE__ */ j((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = hd(ik, n), s = Xb(n);
  return /* @__PURE__ */ w(Ei, N({
    asChild: !0
  }, s, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ w(de.div, N({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: t
  })));
}), lk = "TabsTrigger", uk = /* @__PURE__ */ j((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = hd(lk, n), i = Xb(n), c = Qb(s.baseId, r), l = Jb(s.baseId, r), u = r === s.value;
  return /* @__PURE__ */ w(Ni, N({
    asChild: !0
  }, i, {
    focusable: !o,
    active: u
  }), /* @__PURE__ */ w(de.button, N({
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
}), dk = "TabsContent", fk = /* @__PURE__ */ j((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = hd(dk, n), c = Qb(i.baseId, r), l = Jb(i.baseId, r), u = r === i.value, d = H(u);
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
    ({ present: p }) => /* @__PURE__ */ w(de.div, N({
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
function Qb(e, t) {
  return `${e}-trigger-${t}`;
}
function Jb(e, t) {
  return `${e}-content-${t}`;
}
const pk = sk, ex = ck, tx = uk, nx = fk, V8 = pk, mk = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ex,
  {
    ref: n,
    className: F(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
mk.displayName = ex.displayName;
const hk = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  tx,
  {
    ref: n,
    className: F(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
hk.displayName = tx.displayName;
const vk = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  nx,
  {
    ref: n,
    className: F(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
vk.displayName = nx.displayName;
const gk = /* @__PURE__ */ j((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, i] = dt({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ w(de.button, N({
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
}), rx = gk, bk = So(
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
), xk = C.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  rx,
  {
    ref: o,
    className: F(bk({ variant: t, size: n, className: e })),
    ...r
  }
));
xk.displayName = rx.displayName;
const [Ji, U8] = at("Tooltip", [
  En
]), vd = En(), yk = "TooltipProvider", wk = 700, Dl = "tooltip.open", [$k, gd] = Ji(yk), _k = (e) => {
  const { __scopeTooltip: t, delayDuration: n = wk, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = X(!0), c = H(!1), l = H(0);
  return Q(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ w($k, {
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
}, bd = "Tooltip", [Ck, ec] = Ji(bd), Sk = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = gd(bd, e.__scopeTooltip), l = vd(t), [u, d] = X(null), p = mt(), m = H(0), h = s ?? c.disableHoverableContent, v = i ?? c.delayDuration, g = H(!1), [b = !1, x] = dt({
    prop: r,
    defaultProp: o,
    onChange: (P) => {
      P ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Dl))) : c.onClose(), a == null || a(P);
    }
  }), y = kt(() => b ? g.current ? "delayed-open" : "instant-open" : "closed", [
    b
  ]), _ = fe(() => {
    window.clearTimeout(m.current), g.current = !1, x(!0);
  }, [
    x
  ]), $ = fe(() => {
    window.clearTimeout(m.current), x(!1);
  }, [
    x
  ]), E = fe(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      g.current = !0, x(!0);
    }, v);
  }, [
    v,
    x
  ]);
  return Q(() => () => window.clearTimeout(m.current), []), /* @__PURE__ */ w(To, l, /* @__PURE__ */ w(Ck, {
    scope: t,
    contentId: p,
    open: b,
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
}, np = "TooltipTrigger", Ek = /* @__PURE__ */ j((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = ec(np, n), a = gd(np, n), s = vd(n), i = H(null), c = Ce(t, i, o.onTriggerChange), l = H(!1), u = H(!1), d = fe(
    () => l.current = !1,
    []
  );
  return Q(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ w(Ua, N({
    asChild: !0
  }, s), /* @__PURE__ */ w(de.button, N({
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
}), Nk = "TooltipPortal", [z8, Pk] = Ji(Nk, {
  forceMount: void 0
}), va = "TooltipContent", Tk = /* @__PURE__ */ j((e, t) => {
  const n = Pk(va, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = ec(va, e.__scopeTooltip);
  return /* @__PURE__ */ w(it, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ w(ox, N({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ w(Ok, N({
    side: o
  }, a, {
    ref: t
  })));
}), Ok = /* @__PURE__ */ j((e, t) => {
  const n = ec(va, e.__scopeTooltip), r = gd(va, e.__scopeTooltip), o = H(null), a = Ce(t, o), [s, i] = X(null), { trigger: c, onClose: l } = n, u = o.current, { onPointerInTransitChange: d } = r, p = fe(() => {
    i(null), d(!1);
  }, [
    d
  ]), m = fe((h, v) => {
    const g = h.currentTarget, b = {
      x: h.clientX,
      y: h.clientY
    }, x = Mk(b, g.getBoundingClientRect()), y = Dk(b, x), _ = Rk(v.getBoundingClientRect()), $ = jk([
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
        const g = v.target, b = {
          x: v.clientX,
          y: v.clientY
        }, x = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !Ak(b, s);
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
  ]), /* @__PURE__ */ w(ox, N({}, e, {
    ref: a
  }));
}), [kk, W8] = Ji(bd, {
  isInside: !1
}), ox = /* @__PURE__ */ j((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = ec(va, n), l = vd(n), { onClose: u } = c;
  return Q(() => (document.addEventListener(Dl, u), () => document.removeEventListener(Dl, u)), [
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
  ]), /* @__PURE__ */ w(zr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ w(za, N({
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
  }), /* @__PURE__ */ w(Zl, null, r), /* @__PURE__ */ w(kk, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ w(uv, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function Mk(e, t) {
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
function Dk(e, t, n = 5) {
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
function Rk(e) {
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
function Ak(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function jk(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Ik(t);
}
function Ik(e) {
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
const Lk = _k, Fk = Sk, Vk = Ek, ax = Tk, Dr = Lk, Rr = Fk, Ar = Vk, dr = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  ax,
  {
    ref: r,
    sideOffset: t,
    className: F(
      "z-50 overflow-hidden rounded-md border bg-card px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
dr.displayName = ax.displayName;
const sx = "Switch", [Uk, B8] = at(sx), [zk, Wk] = Uk(sx), Bk = /* @__PURE__ */ j((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, p] = X(null), m = Ce(
    t,
    (x) => p(x)
  ), h = H(!1), v = d ? Boolean(d.closest("form")) : !0, [g = !1, b] = dt({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ w(zk, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ w(de.button, N({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": ix(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: m,
    onClick: ee(e.onClick, (x) => {
      b(
        (y) => !y
      ), v && (h.current = x.isPropagationStopped(), h.current || x.stopPropagation());
    })
  })), v && /* @__PURE__ */ w(Kk, {
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
}), Hk = "SwitchThumb", Yk = /* @__PURE__ */ j((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = Wk(Hk, n);
  return /* @__PURE__ */ w(de.span, N({
    "data-state": ix(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), Kk = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = H(null), s = Lo(n), i = Va(t);
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
  ]), /* @__PURE__ */ w("input", N({
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
function ix(e) {
  return e ? "checked" : "unchecked";
}
const cx = Bk, Gk = Yk, Zk = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  cx,
  {
    className: F(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ f.exports.jsx(
      Gk,
      {
        className: F(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Zk.displayName = cx.displayName;
const rp = (e) => {
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
}, qk = (e) => e ? rp(e) : rp;
var lx = { exports: {} }, Ac = {}, jc = { exports: {} }, Ic = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var op;
function Xk() {
  if (op)
    return Ic;
  op = 1;
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
  return Ic.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Ic;
}
var Lc = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ap;
function Qk() {
  return ap || (ap = 1, process.env.NODE_ENV !== "production" && function() {
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
        var E = t.ReactDebugCurrentFrame, P = E.getStackAddendum();
        P !== "" && (_ += "%s", $ = $.concat([P]));
        var D = $.map(function(R) {
          return String(R);
        });
        D.unshift("Warning: " + _), Function.prototype.apply.call(console[y], console, D);
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
        var P = _();
        a(E, P) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var D = s({
        inst: {
          value: E,
          getSnapshot: _
        }
      }), R = D[0].inst, K = D[1];
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
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !v, b = g ? h : p, x = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : b;
    Lc.useSyncExternalStore = x, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Lc;
}
var sp;
function ux() {
  return sp || (sp = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Xk() : e.exports = Qk();
  }(jc)), jc.exports;
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
var ip;
function Jk() {
  if (ip)
    return Ac;
  ip = 1;
  var e = S, t = ux();
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
      function b(E) {
        if (!x) {
          if (x = !0, y = E, E = p(E), m !== void 0 && v.hasValue) {
            var P = v.value;
            if (m(P, E))
              return _ = P;
          }
          return _ = E;
        }
        if (P = _, r(y, E))
          return P;
        var D = p(E);
        return m !== void 0 && m(P, D) ? P : (y = E, _ = D);
      }
      var x = !1, y, _, $ = d === void 0 ? null : d;
      return [function() {
        return b(u());
      }, $ === null ? void 0 : function() {
        return b($());
      }];
    }, [u, d, p, m]);
    var g = o(l, h[0], h[1]);
    return s(function() {
      v.hasValue = !0, v.value = g;
    }, [g]), c(g), g;
  }, Ac;
}
var Fc = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cp;
function e3() {
  return cp || (cp = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = S, t = ux();
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
        var $ = !1, E, P, D = function(W) {
          if (!$) {
            $ = !0, E = W;
            var Z = m(W);
            if (h !== void 0 && g.hasValue) {
              var L = g.value;
              if (h(L, Z))
                return P = L, L;
            }
            return P = Z, Z;
          }
          var A = E, I = P;
          if (r(A, W))
            return I;
          var V = m(W);
          return h !== void 0 && h(I, V) ? I : (E = W, P = V, V);
        }, R = p === void 0 ? null : p, K = function() {
          return D(d());
        }, G = R === null ? void 0 : function() {
          return D(R());
        };
        return [K, G];
      }, [d, p, m, h]), x = b[0], y = b[1], _ = o(u, x, y);
      return s(function() {
        g.hasValue = !0, g.value = _;
      }, [_]), c(_), _;
    }
    Fc.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Fc;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Jk() : e.exports = e3();
})(lx);
const t3 = /* @__PURE__ */ $0(lx.exports), { useSyncExternalStoreWithSelector: n3 } = t3;
function r3(e, t = e.getState, n) {
  const r = n3(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return b0(r), r;
}
const lp = (e) => {
  const t = typeof e == "function" ? qk(e) : e, n = (r, o) => r3(t, r, o);
  return Object.assign(n, t), n;
}, o3 = (e) => e ? lp(e) : lp, a3 = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ f.exports.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ f.exports.jsxs(Ia, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ f.exports.jsx(
      ho,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ f.exports.jsx(La, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(ly, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ f.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ f.exports.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ f.exports.jsx(St, { className: "w-full bg-brand-secondary dark:text-white", children: e.role })
  ] })
] });
var Dn = { exports: {} }, Vc = { exports: {} }, Ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var up;
function s3() {
  if (up)
    return Ye;
  up = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
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
    return typeof $ == "string" || typeof $ == "function" || $ === r || $ === l || $ === a || $ === o || $ === d || $ === p || typeof $ == "object" && $ !== null && ($.$$typeof === h || $.$$typeof === m || $.$$typeof === s || $.$$typeof === i || $.$$typeof === u || $.$$typeof === g || $.$$typeof === b || $.$$typeof === x || $.$$typeof === v);
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
var dp;
function i3() {
  return dp || (dp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function y(U) {
      return typeof U == "string" || typeof U == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      U === r || U === l || U === a || U === o || U === d || U === p || typeof U == "object" && U !== null && (U.$$typeof === h || U.$$typeof === m || U.$$typeof === s || U.$$typeof === i || U.$$typeof === u || U.$$typeof === g || U.$$typeof === b || U.$$typeof === x || U.$$typeof === v);
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
    var $ = c, E = l, P = i, D = s, R = t, K = u, G = r, W = h, Z = m, L = n, A = a, I = o, V = d, Y = !1;
    function M(U) {
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
    Ke.AsyncMode = $, Ke.ConcurrentMode = E, Ke.ContextConsumer = P, Ke.ContextProvider = D, Ke.Element = R, Ke.ForwardRef = K, Ke.Fragment = G, Ke.Lazy = W, Ke.Memo = Z, Ke.Portal = L, Ke.Profiler = A, Ke.StrictMode = I, Ke.Suspense = V, Ke.isAsyncMode = M, Ke.isConcurrentMode = k, Ke.isContextConsumer = B, Ke.isContextProvider = q, Ke.isElement = oe, Ke.isForwardRef = te, Ke.isFragment = ve, Ke.isLazy = me, Ke.isMemo = re, Ke.isPortal = se, Ke.isProfiler = ue, Ke.isStrictMode = ne, Ke.isSuspense = he, Ke.isValidElementType = y, Ke.typeOf = _;
  }()), Ke;
}
var fp;
function dx() {
  return fp || (fp = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = s3() : e.exports = i3();
  }(Vc)), Vc.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Uc, pp;
function c3() {
  if (pp)
    return Uc;
  pp = 1;
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
  return Uc = o() ? Object.assign : function(a, s) {
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
  }, Uc;
}
var zc, mp;
function xd() {
  if (mp)
    return zc;
  mp = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return zc = e, zc;
}
var Wc, hp;
function fx() {
  return hp || (hp = 1, Wc = Function.call.bind(Object.prototype.hasOwnProperty)), Wc;
}
var Bc, vp;
function l3() {
  if (vp)
    return Bc;
  vp = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = xd(), n = {}, r = fx();
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
  }, Bc = o, Bc;
}
var Hc, gp;
function u3() {
  if (gp)
    return Hc;
  gp = 1;
  var e = dx(), t = c3(), n = xd(), r = fx(), o = l3(), a = function() {
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
  return Hc = function(i, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(k) {
      var B = k && (l && k[l] || k[u]);
      if (typeof B == "function")
        return B;
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
      elementType: $(),
      instanceOf: E,
      node: K(),
      objectOf: D,
      oneOf: P,
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
    function b(k) {
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
    function x() {
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
          var re = k.name || p, se = M(q[oe]);
          return new v("Invalid " + ve + " `" + me + "` of type " + ("`" + se + "` supplied to `" + te + "`, expected ") + ("instance of `" + re + "`."));
        }
        return null;
      }
      return g(B);
    }
    function P(k) {
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
    function D(k) {
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
        return L(B[q]) ? null : new v("Invalid " + te + " `" + ve + "` supplied to " + ("`" + oe + "`, expected a ReactNode."));
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
    function L(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(L);
          if (k === null || i(k))
            return !0;
          var B = d(k);
          if (B) {
            var q = B.call(k), oe;
            if (B !== k.entries) {
              for (; !(oe = q.next()).done; )
                if (!L(oe.value))
                  return !1;
            } else
              for (; !(oe = q.next()).done; ) {
                var te = oe.value;
                if (te && !L(te[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function A(k, B) {
      return k === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function I(k) {
      var B = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : A(B, k) ? "symbol" : B;
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
    function M(k) {
      return !k.constructor || !k.constructor.name ? p : k.constructor.name;
    }
    return m.checkPropTypes = o, m.resetWarningCache = o.resetWarningCache, m.PropTypes = m, m;
  }, Hc;
}
var Yc, bp;
function d3() {
  if (bp)
    return Yc;
  bp = 1;
  var e = xd();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Yc = function() {
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
  }, Yc;
}
if (process.env.NODE_ENV !== "production") {
  var f3 = dx(), p3 = !0;
  Dn.exports = u3()(f3.isElement, p3);
} else
  Dn.exports = d3()();
var m3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, h3 = Object.defineProperty, v3 = Object.defineProperties, g3 = Object.getOwnPropertyDescriptors, ei = Object.getOwnPropertySymbols, px = Object.prototype.hasOwnProperty, mx = Object.prototype.propertyIsEnumerable, xp = (e, t, n) => t in e ? h3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, yp = (e, t) => {
  for (var n in t || (t = {}))
    px.call(t, n) && xp(e, n, t[n]);
  if (ei)
    for (var n of ei(t))
      mx.call(t, n) && xp(e, n, t[n]);
  return e;
}, b3 = (e, t) => v3(e, g3(t)), x3 = (e, t) => {
  var n = {};
  for (var r in e)
    px.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ei)
    for (var r of ei(e))
      t.indexOf(r) < 0 && mx.call(e, r) && (n[r] = e[r]);
  return n;
}, Kn = (e, t, n) => {
  const r = j(
    (o, a) => {
      var s = o, { color: i = "currentColor", size: c = 24, stroke: l = 2, children: u } = s, d = x3(s, ["color", "size", "stroke", "children"]);
      return w(
        "svg",
        yp(b3(yp({
          ref: a
        }, m3), {
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
    color: Dn.exports.string,
    size: Dn.exports.oneOfType([Dn.exports.string, Dn.exports.number]),
    stroke: Dn.exports.oneOfType([Dn.exports.string, Dn.exports.number])
  }, r.displayName = `${t}`, r;
}, hx = Kn(
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
), vx = Kn("adjustments", "IconAdjustments", [
  ["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }],
  ["path", { d: "M6 4v4", key: "svg-1" }],
  ["path", { d: "M6 12v8", key: "svg-2" }],
  ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }],
  ["path", { d: "M12 4v10", key: "svg-4" }],
  ["path", { d: "M12 18v2", key: "svg-5" }],
  ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }],
  ["path", { d: "M18 4v1", key: "svg-7" }],
  ["path", { d: "M18 9v11", key: "svg-8" }]
]), y3 = Kn("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), w3 = Kn("click", "IconClick", [
  ["path", { d: "M3 12l3 0", key: "svg-0" }],
  ["path", { d: "M12 3l0 3", key: "svg-1" }],
  ["path", { d: "M7.8 7.8l-2.2 -2.2", key: "svg-2" }],
  ["path", { d: "M16.2 7.8l2.2 -2.2", key: "svg-3" }],
  ["path", { d: "M7.8 16.2l-2.2 2.2", key: "svg-4" }],
  ["path", { d: "M12 12l9 3l-4 2l-2 4l-3 -9", key: "svg-5" }]
]), gx = Kn("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), $3 = Kn("photo-plus", "IconPhotoPlus", [
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
]), bx = Kn("photo-star", "IconPhotoStar", [
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
]), xx = Kn("search", "IconSearch", [
  ["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }],
  ["path", { d: "M21 21l-6 -6", key: "svg-1" }]
]), yx = Kn("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]);
const _3 = /* @__PURE__ */ bt(void 0), C3 = { setTheme: (e) => {
}, themes: [] }, S3 = () => {
  var e;
  return (e = Qe(_3)) !== null && e !== void 0 ? e : C3;
}, E3 = ({ isExpanded: e }) => {
  const [t, n] = X(!1), { theme: r, setTheme: o } = S3();
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
        /* @__PURE__ */ f.exports.jsx(gx, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(yx, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  );
}, N3 = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ f.exports.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ f.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(E3, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ f.exports.jsx(iy, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(cy, { className: "dark:text-white", size: 20 }),
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
          /* @__PURE__ */ f.exports.jsx(Qp, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), tc = o3((e) => ({
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
  const { isExpanded: s, toggleExpandSidebar: i } = tc();
  return /* @__PURE__ */ f.exports.jsx(
    "aside",
    {
      tabIndex: -1,
      className: F(
        `sidebar dark:border-transparent overflow-hidden ${a ? "" : "hidden"} lg:block`,
        t,
        `${s ? "max-w-[240px]" : "max-w-[100px]"}`,
        `${a ? "ml-auto" : ""}`
      ),
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full py-8 grid grid-rows-[56px_1fr_160px] h-full gap-y-3 px-3", children: [
        /* @__PURE__ */ f.exports.jsx(a3, { isExpanded: s, profile: n }),
        e,
        /* @__PURE__ */ f.exports.jsx(
          N3,
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
  const { isExpanded: t } = tc();
  return /* @__PURE__ */ f.exports.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ f.exports.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, wx = ({
  to: e,
  label: t,
  icon: n,
  pathname: r,
  Link: o,
  isBottomNavLink: a
}) => {
  const [s, i] = X(!1), c = H(null), { isExpanded: l } = tc();
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
  }, [e]), o ? /* @__PURE__ */ f.exports.jsx(Dr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && l && /* @__PURE__ */ f.exports.jsxs(Rr, { children: [
          /* @__PURE__ */ f.exports.jsx(Ar, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(dr, { children: /* @__PURE__ */ f.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ f.exports.jsx(Dr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && l && /* @__PURE__ */ f.exports.jsxs(Rr, { children: [
          /* @__PURE__ */ f.exports.jsx(Ar, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(dr, { children: /* @__PURE__ */ f.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, wp = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
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
  }, [n]), a ? /* @__PURE__ */ f.exports.jsx(Dr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && e && /* @__PURE__ */ f.exports.jsxs(Rr, { children: [
          /* @__PURE__ */ f.exports.jsx(Ar, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(dr, { children: /* @__PURE__ */ f.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ f.exports.jsx(Dr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && e && /* @__PURE__ */ f.exports.jsxs(Rr, { children: [
          /* @__PURE__ */ f.exports.jsx(Ar, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(dr, { children: /* @__PURE__ */ f.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, P3 = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = X(!1), [i, c] = X(!1), { isExpanded: l } = tc(), u = H(null), d = () => c((m) => !m), p = e.replaceAll(" ", "_");
  return Q(() => {
    const m = () => {
      const h = u.current.querySelector(`#${p}`);
      if (h) {
        const v = h.offsetWidth < h.scrollWidth;
        s(v);
      }
    };
    return window.addEventListener("resize", m), m(), () => window.removeEventListener("resize", m);
  }, [e]), o ? /* @__PURE__ */ f.exports.jsxs(Dr, { delayDuration: 180, children: [
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
            a && l && /* @__PURE__ */ f.exports.jsxs(Rr, { children: [
              /* @__PURE__ */ f.exports.jsx(Ar, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ f.exports.jsx(dr, { children: /* @__PURE__ */ f.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ f.exports.jsx(Bd, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(aa, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ f.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(
      wp,
      {
        ...m,
        Link: o,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] }) : /* @__PURE__ */ f.exports.jsxs(Dr, { delayDuration: 180, children: [
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
            a && l && /* @__PURE__ */ f.exports.jsxs(Rr, { children: [
              /* @__PURE__ */ f.exports.jsx(Ar, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ f.exports.jsx(dr, { children: /* @__PURE__ */ f.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ f.exports.jsx(Bd, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(aa, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ f.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(
      wp,
      {
        ...m,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] });
}, Gn = bt({
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
function T3() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = Qe(Gn);
  return /* @__PURE__ */ f.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ f.exports.jsxs(
        Gu,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ f.exports.jsx(Fi, { className: "h-8 w-[70px]", children: /* @__PURE__ */ f.exports.jsx(Zu, { placeholder: e.limit }) }),
            /* @__PURE__ */ f.exports.jsx(Vi, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ f.exports.jsx(Ui, { value: `${a}`, children: a }, a)) })
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
            /* @__PURE__ */ f.exports.jsx(Ql, { className: "h-4 w-4" })
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
            /* @__PURE__ */ f.exports.jsx(Eo, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const $x = () => {
  const { columns: e } = Qe(Gn);
  return /* @__PURE__ */ f.exports.jsx(wg, { className: "bg-brand-primary-lighter", children: /* @__PURE__ */ f.exports.jsx(Gi, { children: e.length > 0 && e.map((t, n) => /* @__PURE__ */ f.exports.jsx(_g, { className: "text-brand-text", children: t.label }, `${t.id}-${n}`)) }) });
}, K8 = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, Uo = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), G8 = { limit: 10, page: 1 }, $p = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), Z8 = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], O3 = ({ colSpan: e }) => /* @__PURE__ */ f.exports.jsx(Gi, { children: /* @__PURE__ */ f.exports.jsx(ed, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), k3 = ({
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
        children: /* @__PURE__ */ f.exports.jsx(w3, { size: 18 })
      }
    ) : l.id === "multi-select" ? /* @__PURE__ */ f.exports.jsx(
      Sv,
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
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.map((l) => /* @__PURE__ */ f.exports.jsx(Gi, { children: t.map((u) => /* @__PURE__ */ f.exports.jsx(ed, { children: c(u, l) }, $p())) }, $p())) });
}, _x = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = Qe(Gn), [s, i] = X(
    o ? o.length : 0
  );
  return /* @__PURE__ */ f.exports.jsx($g, { className: "bg-card", children: e.length ? /* @__PURE__ */ f.exports.jsx(
    k3,
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
  ) : /* @__PURE__ */ f.exports.jsx(O3, { colSpan: t.length }) });
}, M3 = () => /* @__PURE__ */ f.exports.jsxs(Ju, { children: [
  /* @__PURE__ */ f.exports.jsx($x, {}),
  /* @__PURE__ */ f.exports.jsx(_x, {})
] }), D3 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), R3 = () => /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ f.exports.jsx(D3, {}),
  /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] });
var _p = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = xe(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, Cx = function(e, t) {
  var n = function(o) {
    var a = t.fields[o];
    a && a.ref && "reportValidity" in a.ref ? _p(a.ref, o, e) : a.refs && a.refs.forEach(function(s) {
      return _p(s, o, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, A3 = function(e, t) {
  t.shouldUseNativeValidation && Cx(e, t);
  var n = {};
  for (var r in e) {
    var o = xe(t.fields, r);
    Xe(n, r, Object.assign(e[r] || {}, { ref: o && o.ref }));
  }
  return n;
}, j3 = function(e, t) {
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
      n[s] = Rh(s, t, n, o, l ? [].concat(l, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, Sx = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, a) {
    try {
      return Promise.resolve(function(s, i) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(l) {
            return a.shouldUseNativeValidation && Cx({}, a), { errors: {}, values: n.raw ? r : l };
          });
        } catch (l) {
          return i(l);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(s) {
        if (function(i) {
          return i.errors != null;
        }(s))
          return { values: {}, errors: A3(j3(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
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
var Rl;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Rl || (Rl = {}));
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
]), rr = (e) => {
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
]), I3 = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
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
on.create = (e) => new on(e);
const ga = (e, t) => {
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
let Ex = ga;
function L3(e) {
  Ex = e;
}
function ti() {
  return Ex;
}
const ni = (e) => {
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
}, F3 = [];
function we(e, t) {
  const n = ni({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      ti(),
      ga
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(n);
}
class Et {
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
    return Et.mergeObjectSync(t, r);
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
}), Nx = (e) => ({ status: "dirty", value: e }), Mt = (e) => ({ status: "valid", value: e }), Al = (e) => e.status === "aborted", jl = (e) => e.status === "dirty", ri = (e) => e.status === "valid", oi = (e) => typeof Promise < "u" && e instanceof Promise;
var Se;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(Se || (Se = {}));
class _n {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Cp = (e, t) => {
  if (ri(t))
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
class Ae {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return rr(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: rr(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Et(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: rr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (oi(n))
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
      parsedType: rr(t)
    }, a = this._parseSync({ data: t, path: o.path, parent: o });
    return Cp(o, a);
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
      parsedType: rr(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), a = await (oi(o) ? o : Promise.resolve(o));
    return Cp(r, a);
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
    return $o.create(this, this._def);
  }
  or(t) {
    return wa.create([this, t], this._def);
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
    return new Na({
      ...Re(this._def),
      innerType: this,
      defaultValue: n,
      typeName: ke.ZodDefault
    });
  }
  brand() {
    return new Tx({
      typeName: ke.ZodBranded,
      type: this,
      ...Re(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ci({
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
    return ns.create(this, t);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const V3 = /^c[^\s-]{8,}$/i, U3 = /^[a-z][a-z0-9]*$/, z3 = /[0-9A-HJKMNP-TV-Z]{26}/, W3 = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, B3 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, H3 = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, Y3 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, K3 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, G3 = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Z3(e, t) {
  return !!((t === "v4" || !t) && Y3.test(e) || (t === "v6" || !t) && K3.test(e));
}
class nn extends Ae {
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
    const r = new Et();
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
        B3.test(t.data) || (o = this._getOrReturnCtx(t, o), we(o, {
          validation: "email",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        H3.test(t.data) || (o = this._getOrReturnCtx(t, o), we(o, {
          validation: "emoji",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        W3.test(t.data) || (o = this._getOrReturnCtx(t, o), we(o, {
          validation: "uuid",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        V3.test(t.data) || (o = this._getOrReturnCtx(t, o), we(o, {
          validation: "cuid",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        U3.test(t.data) || (o = this._getOrReturnCtx(t, o), we(o, {
          validation: "cuid2",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        z3.test(t.data) || (o = this._getOrReturnCtx(t, o), we(o, {
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
        }), r.dirty()) : a.kind === "datetime" ? G3(a).test(t.data) || (o = this._getOrReturnCtx(t, o), we(o, {
          code: ce.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? Z3(t.data, a.version) || (o = this._getOrReturnCtx(t, o), we(o, {
          validation: "ip",
          code: ce.invalid_string,
          message: a.message
        }), r.dirty()) : ze.assertNever(a);
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
function q3(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, a = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return a % s / Math.pow(10, o);
}
class fr extends Ae {
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
    const o = new Et();
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
      }), o.dirty()) : a.kind === "multipleOf" ? q3(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), we(r, {
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
    return new fr({
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
    return new fr({
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
fr.create = (e) => new fr({
  checks: [],
  typeName: ke.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Re(e)
});
class pr extends Ae {
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
    const o = new Et();
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
pr.create = (e) => {
  var t;
  return new pr({
    checks: [],
    typeName: ke.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Re(e)
  });
};
class ba extends Ae {
  _parse(t) {
    if (this._def.coerce && (t.data = Boolean(t.data)), this._getType(t) !== ye.boolean) {
      const r = this._getOrReturnCtx(t);
      return we(r, {
        code: ce.invalid_type,
        expected: ye.boolean,
        received: r.parsedType
      }), De;
    }
    return Mt(t.data);
  }
}
ba.create = (e) => new ba({
  typeName: ke.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Re(e)
});
class jr extends Ae {
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
    const r = new Et();
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
    return new jr({
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
jr.create = (e) => new jr({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: ke.ZodDate,
  ...Re(e)
});
class ai extends Ae {
  _parse(t) {
    if (this._getType(t) !== ye.symbol) {
      const r = this._getOrReturnCtx(t);
      return we(r, {
        code: ce.invalid_type,
        expected: ye.symbol,
        received: r.parsedType
      }), De;
    }
    return Mt(t.data);
  }
}
ai.create = (e) => new ai({
  typeName: ke.ZodSymbol,
  ...Re(e)
});
class xa extends Ae {
  _parse(t) {
    if (this._getType(t) !== ye.undefined) {
      const r = this._getOrReturnCtx(t);
      return we(r, {
        code: ce.invalid_type,
        expected: ye.undefined,
        received: r.parsedType
      }), De;
    }
    return Mt(t.data);
  }
}
xa.create = (e) => new xa({
  typeName: ke.ZodUndefined,
  ...Re(e)
});
class ya extends Ae {
  _parse(t) {
    if (this._getType(t) !== ye.null) {
      const r = this._getOrReturnCtx(t);
      return we(r, {
        code: ce.invalid_type,
        expected: ye.null,
        received: r.parsedType
      }), De;
    }
    return Mt(t.data);
  }
}
ya.create = (e) => new ya({
  typeName: ke.ZodNull,
  ...Re(e)
});
class wo extends Ae {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Mt(t.data);
  }
}
wo.create = (e) => new wo({
  typeName: ke.ZodAny,
  ...Re(e)
});
class Pr extends Ae {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Mt(t.data);
  }
}
Pr.create = (e) => new Pr({
  typeName: ke.ZodUnknown,
  ...Re(e)
});
class Wn extends Ae {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return we(n, {
      code: ce.invalid_type,
      expected: ye.never,
      received: n.parsedType
    }), De;
  }
}
Wn.create = (e) => new Wn({
  typeName: ke.ZodNever,
  ...Re(e)
});
class si extends Ae {
  _parse(t) {
    if (this._getType(t) !== ye.undefined) {
      const r = this._getOrReturnCtx(t);
      return we(r, {
        code: ce.invalid_type,
        expected: ye.void,
        received: r.parsedType
      }), De;
    }
    return Mt(t.data);
  }
}
si.create = (e) => new si({
  typeName: ke.ZodVoid,
  ...Re(e)
});
class an extends Ae {
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
      return Promise.all([...n.data].map((s, i) => o.type._parseAsync(new _n(n, s, n.path, i)))).then((s) => Et.mergeArray(r, s));
    const a = [...n.data].map((s, i) => o.type._parseSync(new _n(n, s, n.path, i)));
    return Et.mergeArray(r, a);
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
    }) : e instanceof An ? An.create(so(e.unwrap())) : e instanceof Lr ? Lr.create(so(e.unwrap())) : e instanceof Cn ? Cn.create(e.items.map((t) => so(t))) : e;
}
class lt extends Ae {
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
    if (!(this._def.catchall instanceof Wn && this._def.unknownKeys === "strip"))
      for (const l in o.data)
        s.includes(l) || i.push(l);
    const c = [];
    for (const l of s) {
      const u = a[l], d = o.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new _n(o, d, o.path, l)),
        alwaysSet: l in o.data
      });
    }
    if (this._def.catchall instanceof Wn) {
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
            new _n(o, d, o.path, u)
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
    }).then((l) => Et.mergeObjectSync(r, l)) : Et.mergeObjectSync(r, c);
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
    return so(this);
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
    return Px(ze.objectKeys(this.shape));
  }
}
lt.create = (e, t) => new lt({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Wn.create(),
  typeName: ke.ZodObject,
  ...Re(t)
});
lt.strictCreate = (e, t) => new lt({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Wn.create(),
  typeName: ke.ZodObject,
  ...Re(t)
});
lt.lazycreate = (e, t) => new lt({
  shape: e,
  unknownKeys: "strip",
  catchall: Wn.create(),
  typeName: ke.ZodObject,
  ...Re(t)
});
class wa extends Ae {
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
      const i = s.map((c) => new on(c));
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
wa.create = (e, t) => new wa({
  options: e,
  typeName: ke.ZodUnion,
  ...Re(t)
});
const Os = (e) => e instanceof Ca ? Os(e.schema) : e instanceof fn ? Os(e.innerType()) : e instanceof Sa ? [e.value] : e instanceof mr ? e.options : e instanceof Ea ? Object.keys(e.enum) : e instanceof Na ? Os(e._def.innerType) : e instanceof xa ? [void 0] : e instanceof ya ? [null] : null;
class nc extends Ae {
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
      const s = Os(a.shape[t]);
      if (!s)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of s) {
        if (o.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        o.set(i, a);
      }
    }
    return new nc({
      typeName: ke.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...Re(r)
    });
  }
}
function Il(e, t) {
  const n = rr(e), r = rr(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === ye.object && r === ye.object) {
    const o = ze.objectKeys(t), a = ze.objectKeys(e).filter((i) => o.indexOf(i) !== -1), s = { ...e, ...t };
    for (const i of a) {
      const c = Il(e[i], t[i]);
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
      const s = e[a], i = t[a], c = Il(s, i);
      if (!c.valid)
        return { valid: !1 };
      o.push(c.data);
    }
    return { valid: !0, data: o };
  } else
    return n === ye.date && r === ye.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class $a extends Ae {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (a, s) => {
      if (Al(a) || Al(s))
        return De;
      const i = Il(a.value, s.value);
      return i.valid ? ((jl(a) || jl(s)) && n.dirty(), { status: n.value, value: i.data }) : (we(r, {
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
class Cn extends Ae {
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
      return c ? c._parse(new _n(r, s, r.path, i)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(a).then((s) => Et.mergeArray(n, s)) : Et.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Cn({
      ...this._def,
      rest: t
    });
  }
}
Cn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Cn({
    items: e,
    typeName: ke.ZodTuple,
    rest: null,
    ...Re(t)
  });
};
class _a extends Ae {
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
        key: a._parse(new _n(r, i, r.path, i)),
        value: s._parse(new _n(r, r.data[i], r.path, i))
      });
    return r.common.async ? Et.mergeObjectAsync(n, o) : Et.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof Ae ? new _a({
      keyType: t,
      valueType: n,
      typeName: ke.ZodRecord,
      ...Re(r)
    }) : new _a({
      keyType: nn.create(),
      valueType: t,
      typeName: ke.ZodRecord,
      ...Re(n)
    });
  }
}
class ii extends Ae {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== ye.map)
      return we(r, {
        code: ce.invalid_type,
        expected: ye.map,
        received: r.parsedType
      }), De;
    const o = this._def.keyType, a = this._def.valueType, s = [...r.data.entries()].map(([i, c], l) => ({
      key: o._parse(new _n(r, i, r.path, [l, "key"])),
      value: a._parse(new _n(r, c, r.path, [l, "value"]))
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
ii.create = (e, t, n) => new ii({
  valueType: t,
  keyType: e,
  typeName: ke.ZodMap,
  ...Re(n)
});
class Ir extends Ae {
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
    const i = [...r.data.values()].map((c, l) => a._parse(new _n(r, c, r.path, l)));
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
class fo extends Ae {
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
      return ni({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ti(),
          ga
        ].filter((l) => !!l),
        issueData: {
          code: ce.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function o(i, c) {
      return ni({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ti(),
          ga
        ].filter((l) => !!l),
        issueData: {
          code: ce.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, s = n.data;
    return this._def.returns instanceof $o ? Mt(async (...i) => {
      const c = new on([]), l = await this._def.args.parseAsync(i, a).catch((p) => {
        throw c.addIssue(r(i, p)), c;
      }), u = await s(...l);
      return await this._def.returns._def.type.parseAsync(u, a).catch((p) => {
        throw c.addIssue(o(u, p)), c;
      });
    }) : Mt((...i) => {
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
    return new fo({
      ...this._def,
      args: Cn.create(t).rest(Pr.create())
    });
  }
  returns(t) {
    return new fo({
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
    return new fo({
      args: t || Cn.create([]).rest(Pr.create()),
      returns: n || Pr.create(),
      typeName: ke.ZodFunction,
      ...Re(r)
    });
  }
}
class Ca extends Ae {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Ca.create = (e, t) => new Ca({
  getter: e,
  typeName: ke.ZodLazy,
  ...Re(t)
});
class Sa extends Ae {
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
Sa.create = (e, t) => new Sa({
  value: e,
  typeName: ke.ZodLiteral,
  ...Re(t)
});
function Px(e, t) {
  return new mr({
    values: e,
    typeName: ke.ZodEnum,
    ...Re(t)
  });
}
class mr extends Ae {
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
    return Mt(t.data);
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
    return mr.create(t);
  }
  exclude(t) {
    return mr.create(this.options.filter((n) => !t.includes(n)));
  }
}
mr.create = Px;
class Ea extends Ae {
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
    return Mt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Ea.create = (e, t) => new Ea({
  values: e,
  typeName: ke.ZodNativeEnum,
  ...Re(t)
});
class $o extends Ae {
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
    return Mt(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
$o.create = (e, t) => new $o({
  type: e,
  typeName: ke.ZodPromise,
  ...Re(t)
});
class fn extends Ae {
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
        if (!ri(s))
          return s;
        const i = o.transform(s.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => ri(s) ? Promise.resolve(o.transform(s.value, a)).then((i) => ({ status: n.value, value: i })) : s);
    ze.assertNever(o);
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
class An extends Ae {
  _parse(t) {
    return this._getType(t) === ye.undefined ? Mt(void 0) : this._def.innerType._parse(t);
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
class Lr extends Ae {
  _parse(t) {
    return this._getType(t) === ye.null ? Mt(null) : this._def.innerType._parse(t);
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
class Na extends Ae {
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
Na.create = (e, t) => new Na({
  innerType: e,
  typeName: ke.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Re(t)
});
class ci extends Ae {
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
    return oi(o) ? o.then((a) => ({
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
ci.create = (e, t) => new ci({
  innerType: e,
  typeName: ke.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Re(t)
});
class li extends Ae {
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
li.create = (e) => new li({
  typeName: ke.ZodNaN,
  ...Re(e)
});
const X3 = Symbol("zod_brand");
class Tx extends Ae {
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
class ns extends Ae {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? De : a.status === "dirty" ? (n.dirty(), Nx(a.value)) : this._def.out._parseAsync({
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
    return new ns({
      in: t,
      out: n,
      typeName: ke.ZodPipeline
    });
  }
}
const Ox = (e, t = {}, n) => e ? wo.create().superRefine((r, o) => {
  var a, s;
  if (!e(r)) {
    const i = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (s = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0, l = typeof i == "string" ? { message: i } : i;
    o.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : wo.create(), Q3 = {
  object: lt.lazycreate
};
var ke;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline";
})(ke || (ke = {}));
const J3 = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Ox((n) => n instanceof e, t), kx = nn.create, Mx = fr.create, e4 = li.create, t4 = pr.create, Dx = ba.create, n4 = jr.create, r4 = ai.create, o4 = xa.create, a4 = ya.create, s4 = wo.create, i4 = Pr.create, c4 = Wn.create, l4 = si.create, u4 = an.create, d4 = lt.create, f4 = lt.strictCreate, p4 = wa.create, m4 = nc.create, h4 = $a.create, v4 = Cn.create, g4 = _a.create, b4 = ii.create, x4 = Ir.create, y4 = fo.create, w4 = Ca.create, $4 = Sa.create, _4 = mr.create, C4 = Ea.create, S4 = $o.create, Sp = fn.create, E4 = An.create, N4 = Lr.create, P4 = fn.createWithPreprocess, T4 = ns.create, O4 = () => kx().optional(), k4 = () => Mx().optional(), M4 = () => Dx().optional(), D4 = {
  string: (e) => nn.create({ ...e, coerce: !0 }),
  number: (e) => fr.create({ ...e, coerce: !0 }),
  boolean: (e) => ba.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => pr.create({ ...e, coerce: !0 }),
  date: (e) => jr.create({ ...e, coerce: !0 })
}, R4 = De;
var ui = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: ga,
  setErrorMap: L3,
  getErrorMap: ti,
  makeIssue: ni,
  EMPTY_PATH: F3,
  addIssueToContext: we,
  ParseStatus: Et,
  INVALID: De,
  DIRTY: Nx,
  OK: Mt,
  isAborted: Al,
  isDirty: jl,
  isValid: ri,
  isAsync: oi,
  get util() {
    return ze;
  },
  get objectUtil() {
    return Rl;
  },
  ZodParsedType: ye,
  getParsedType: rr,
  ZodType: Ae,
  ZodString: nn,
  ZodNumber: fr,
  ZodBigInt: pr,
  ZodBoolean: ba,
  ZodDate: jr,
  ZodSymbol: ai,
  ZodUndefined: xa,
  ZodNull: ya,
  ZodAny: wo,
  ZodUnknown: Pr,
  ZodNever: Wn,
  ZodVoid: si,
  ZodArray: an,
  ZodObject: lt,
  ZodUnion: wa,
  ZodDiscriminatedUnion: nc,
  ZodIntersection: $a,
  ZodTuple: Cn,
  ZodRecord: _a,
  ZodMap: ii,
  ZodSet: Ir,
  ZodFunction: fo,
  ZodLazy: Ca,
  ZodLiteral: Sa,
  ZodEnum: mr,
  ZodNativeEnum: Ea,
  ZodPromise: $o,
  ZodEffects: fn,
  ZodTransformer: fn,
  ZodOptional: An,
  ZodNullable: Lr,
  ZodDefault: Na,
  ZodCatch: ci,
  ZodNaN: li,
  BRAND: X3,
  ZodBranded: Tx,
  ZodPipeline: ns,
  custom: Ox,
  Schema: Ae,
  ZodSchema: Ae,
  late: Q3,
  get ZodFirstPartyTypeKind() {
    return ke;
  },
  coerce: D4,
  any: s4,
  array: u4,
  bigint: t4,
  boolean: Dx,
  date: n4,
  discriminatedUnion: m4,
  effect: Sp,
  enum: _4,
  function: y4,
  instanceof: J3,
  intersection: h4,
  lazy: w4,
  literal: $4,
  map: b4,
  nan: e4,
  nativeEnum: C4,
  never: c4,
  null: a4,
  nullable: N4,
  number: Mx,
  object: d4,
  oboolean: M4,
  onumber: k4,
  optional: E4,
  ostring: O4,
  pipeline: T4,
  preprocess: P4,
  promise: S4,
  record: g4,
  set: x4,
  strictObject: f4,
  string: kx,
  symbol: r4,
  transformer: Sp,
  tuple: v4,
  undefined: o4,
  union: p4,
  unknown: i4,
  void: l4,
  NEVER: R4,
  ZodIssueCode: ce,
  quotelessJson: I3,
  ZodError: on
});
const A4 = () => {
  const { showFilters: e, setShowFilters: t } = Qe(Gn);
  return /* @__PURE__ */ f.exports.jsxs(
    Ue,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ f.exports.jsx(hx, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, j4 = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = Qe(Gn), l = (u) => {
    c(u);
  };
  return /* @__PURE__ */ f.exports.jsxs(Vn, { children: [
    /* @__PURE__ */ f.exports.jsx(Un, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Ue, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", children: [
      n || /* @__PURE__ */ f.exports.jsx(vx, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Za, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          St,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ f.exports.jsxs(
          St,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((u) => u.selected).map((u) => /* @__PURE__ */ f.exports.jsx(
          St,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: u.label
          },
          u.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ f.exports.jsx($n, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ f.exports.jsxs(zn, { children: [
      /* @__PURE__ */ f.exports.jsx(lr, { placeholder: r }),
      /* @__PURE__ */ f.exports.jsxs(Ja, { children: [
        /* @__PURE__ */ f.exports.jsx(ur, { children: "Sin Resultados" }),
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
                  className: F(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    u.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ f.exports.jsx(cn, { className: F("h-4 w-4") })
                }
              ),
              u.icon,
              /* @__PURE__ */ f.exports.jsx("span", { children: u.label })
            ]
          },
          u.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(Hi, {}),
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
}, I4 = ({ id: e, form: t, label: n, icon: r, queryText: o }) => {
  const { onSubmitTable: a, pagination: { page: s, limit: i }, isFormatedUpperQueries: c } = Qe(Gn), l = () => {
    var d;
    const u = [];
    (d = Object.entries(t == null ? void 0 : t.getValues())) == null || d.forEach((p) => {
      p[1] && u.push({
        field: c ? p[0] : Uo(p[0]),
        text: p[1]
      });
    }), a({ queries: u, filters: [], limit: i, page: s });
  };
  return /* @__PURE__ */ f.exports.jsxs(Vn, { children: [
    /* @__PURE__ */ f.exports.jsx(Un, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Ue, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
      /* @__PURE__ */ f.exports.jsx(Rs, { size: 16, className: "mr-2 text-gray-500" }),
      n,
      o && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Za, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          St,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: o
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ f.exports.jsxs($n, { className: "w-fit p-4", align: "start", children: [
      /* @__PURE__ */ f.exports.jsxs(Nn, { htmlFor: e, children: [
        "Buscar ",
        n
      ] }),
      /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex justify-between items-end gap-x-3", children: [
        /* @__PURE__ */ f.exports.jsx(
          Bu,
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
            children: /* @__PURE__ */ f.exports.jsx(Rs, { size: 18 })
          }
        )
      ] })
    ] })
  ] });
}, L4 = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c },
    isFormatedUpperQueries: l
  } = Qe(Gn), u = e.watch(n.map((p) => p.id)), d = () => {
    var m;
    a();
    const p = [];
    (m = Object.entries(e == null ? void 0 : e.getValues())) == null || m.forEach((h) => {
      h[1] && p.push({
        field: l ? h[0] : Uo(h[0]),
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
          I4,
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
        j4,
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
            /* @__PURE__ */ f.exports.jsx(xi, { className: "ml-2 h-4 w-4" })
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
    setSearchForm: i,
    isFormatedUpperQueries: c
  } = Qe(Gn), l = Uh({
    defaultValues: n.reduce((d, p) => (d[p.id] = "", d), {}),
    resolver: Sx(
      ui.object(
        n.reduce((d, p) => (d[p.id] = ui.string().optional(), d), {})
      )
    )
  }), u = async (d) => {
    var h;
    console.log({ data: d });
    const p = r(), m = [];
    (h = Object.entries(d)) == null || h.forEach((v) => {
      v[1] && m.push({
        field: c ? v[0] : Uo(v[0]),
        text: v[1]
      });
    }), console.log("queries formatted ", m), e({ queries: m, filters: p, limit: s, page: a });
  };
  return Q(() => i(l), [l]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ f.exports.jsx("div", {}) : /* @__PURE__ */ f.exports.jsx(Wh, { ...l, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ f.exports.jsx(L4, { form: l, onSubmit: u }) : /* @__PURE__ */ f.exports.jsx("div", {}),
    /* @__PURE__ */ f.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ f.exports.jsx(
      Ue,
      {
        type: "submit",
        onClick: l.handleSubmit(u),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ f.exports.jsx(Xl, {}) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(xx, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, V4 = () => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), U4 = () => /* @__PURE__ */ f.exports.jsxs(Ju, { children: [
  /* @__PURE__ */ f.exports.jsx($x, {}),
  /* @__PURE__ */ f.exports.jsx(_x, {})
] }), z4 = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function q8(e) {
  const [t, n] = X([]), [r, o] = X([]), [a, s] = X([]), [i, c] = X(!1), [l, u] = X(e == null ? void 0 : e.error), [d, p] = X(e == null ? void 0 : e.loading), [m, h] = X(), [v, g] = X(
    (e == null ? void 0 : e.pagination) ?? z4
  ), [b, x] = X(
    (e == null ? void 0 : e.columns) || []
  ), y = fe(
    (L) => e.onSubmitTable({ ...L }),
    [e]
  ), _ = fe(
    (L) => {
      var Y;
      g(L);
      const A = m.getValues(), I = [];
      (Y = Object.entries(A)) == null || Y.forEach((M) => {
        M[1] && I.push({
          field: e.isFormatedUpperQueries ? M[0] : Uo(M[0]),
          text: M[1]
        });
      });
      const V = r.map((M) => ({
        id: M.id,
        label: M.label,
        options: M.options.filter((k) => k.selected).map((k) => k.value)
      })).filter((M) => M.options.length > 0);
      y({
        filters: V,
        queries: I,
        limit: L.limit,
        page: L.page
      });
    },
    [r, y, m]
  ), $ = fe(() => {
    _({ ...v, page: v.page + 1 });
  }, [v, _]), E = fe(() => {
    v.page > 1 && _({ ...v, page: v.page - 1 });
  }, [v, _]), P = () => r.map((L) => ({
    id: L.id,
    label: L.label,
    options: L.options.filter((A) => A.selected).map((A) => A.value)
  })).filter((L) => L.options.length > 0), D = (L) => {
    const A = r.find((I) => I.id === L);
    return A ? A.options.filter((V) => V.selected).map((V) => V.value) : [];
  }, R = (L, A, I) => {
    const V = r.map((Y) => Y.id === L ? {
      ...Y,
      options: Y.options.map((M) => M.id === A ? { ...M, selected: I } : M)
    } : Y);
    o(V);
  }, K = () => r, G = (L) => {
    const A = r.map((I) => I.id === L ? {
      ...I,
      options: I.options.map((V) => ({
        ...V,
        selected: !1
      }))
    } : I);
    o(A);
  }, W = (L) => _({ ...v, limit: L }), Z = () => {
    const L = r.map((A) => ({
      ...A,
      options: A.options.map((I) => ({ ...I, selected: !1 }))
    }));
    o(L);
  };
  return Q(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), Q(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), Q(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), Q(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), Q(() => x((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), Q(() => {
    const L = b.filter((A) => A.isQuery).map((A) => ({
      id: A.id,
      label: A.label
    }));
    s(L);
  }, [b]), Q(() => {
    const L = (I) => (I == null ? void 0 : I.filters) && (I == null ? void 0 : I.filters.length), A = b.filter(L).map((I) => {
      const V = I.filters.map((M) => ({
        ...M,
        selected: !1
      }));
      return {
        ...I,
        id: I.id,
        options: V
      };
    });
    o(A);
  }, [b]), Q(() => {
    e != null && e.filters && (e == null || e.filters.forEach((L) => {
      L != null && L.filters && b.forEach((A) => {
        L.id === A.id && o((I) => I.some((Y) => Y.id === L.id) ? I : [
          ...I,
          {
            id: A.id,
            label: A.label,
            options: L.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), Q(() => {
    g((L) => {
      var A, I;
      return {
        ...L,
        hasNextPage: (A = e == null ? void 0 : e.pagination) == null ? void 0 : A.hasNextPage,
        hasPrevPage: (I = e == null ? void 0 : e.pagination) == null ? void 0 : I.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ f.exports.jsx(
    Gn.Provider,
    {
      value: {
        data: t,
        columns: b,
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
        getFilterOptionsSelectedById: D,
        getFiltersWithOptionsSelected: P,
        setSelectItem: e.setSelectItem,
        setShowFilters: (L) => c(L),
        setSearchForm: (L) => h(L)
      },
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ f.exports.jsx(F4, { onSubmitTable: y, loading: d }),
        /* @__PURE__ */ f.exports.jsxs("div", { className: "rounded-md border overflow-clip", children: [
          d && /* @__PURE__ */ f.exports.jsx(R3, {}),
          !d && l && /* @__PURE__ */ f.exports.jsx(V4, {}),
          !d && !l && !t && /* @__PURE__ */ f.exports.jsx(U4, {}),
          !d && !l && t && /* @__PURE__ */ f.exports.jsx(M3, {})
        ] }),
        !d && !l && t && /* @__PURE__ */ f.exports.jsx(T3, {})
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
  disabled: d
}) => /* @__PURE__ */ f.exports.jsx(
  Br,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: p, formState: m }) => {
      var h;
      return /* @__PURE__ */ f.exports.jsxs(xr, { className: F("w-full", c), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ f.exports.jsxs(Hr, { className: "flex", children: [
            t,
            " "
          ] }),
          ((h = m == null ? void 0 : m.errors[e]) == null ? void 0 : h.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            m.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(Oo, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsxs(Gu, { onValueChange: p.onChange, defaultValue: p.value, disabled: d, children: [
          /* @__PURE__ */ f.exports.jsx(Ga, { children: /* @__PURE__ */ f.exports.jsx(Fi, { disabled: d, tabIndex: i, className: F("w-full", l), children: /* @__PURE__ */ f.exports.jsx(Zu, { placeholder: r }) }) }),
          /* @__PURE__ */ f.exports.jsx(Vi, { children: /* @__PURE__ */ f.exports.jsxs(FE, { className: F("overflow-auto", u), children: [
            a.length ? null : /* @__PURE__ */ f.exports.jsx("div", { className: "px-2 py-1 text-sm", children: "Sin Resultados" }),
            a.map((v) => {
              var g, b;
              return /* @__PURE__ */ f.exports.jsx(Ui, { value: (g = v.value) == null ? void 0 : g.toString(), children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-center items-center", children: [
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
function rc() {
  return (rc = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function Rx(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function Ll(e) {
  var t = H(e), n = H(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var Pa = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, na = function(e) {
  return "touches" in e;
}, Fl = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, Ep = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = na(t) ? function(a, s) {
    for (var i = 0; i < a.length; i++)
      if (a[i].identifier === s)
        return a[i];
    return a[0];
  }(t.touches, n) : t;
  return { left: Pa((o.pageX - (r.left + Fl(e).pageXOffset)) / r.width), top: Pa((o.pageY - (r.top + Fl(e).pageYOffset)) / r.height) };
}, Np = function(e) {
  !na(e) && e.preventDefault();
}, Ax = S.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = Rx(e, ["onMove", "onKey"]), o = H(null), a = Ll(t), s = Ll(n), i = H(null), c = H(!1), l = kt(function() {
    var m = function(g) {
      Np(g), (na(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(Ep(o.current, g, i.current)) : v(!1);
    }, h = function() {
      return v(!1);
    };
    function v(g) {
      var b = c.current, x = Fl(o.current), y = g ? x.addEventListener : x.removeEventListener;
      y(b ? "touchmove" : "mousemove", m), y(b ? "touchend" : "mouseup", h);
    }
    return [function(g) {
      var b = g.nativeEvent, x = o.current;
      if (x && (Np(b), !function(_, $) {
        return $ && !na(_);
      }(b, c.current) && x)) {
        if (na(b)) {
          c.current = !0;
          var y = b.changedTouches || [];
          y.length && (i.current = y[0].identifier);
        }
        x.focus(), a(Ep(x, b, i.current)), v(!0);
      }
    }, function(g) {
      var b = g.which || g.keyCode;
      b < 37 || b > 40 || (g.preventDefault(), s({ left: b === 39 ? 0.05 : b === 37 ? -0.05 : 0, top: b === 40 ? 0.05 : b === 38 ? -0.05 : 0 }));
    }, v];
  }, [s, a]), u = l[0], d = l[1], p = l[2];
  return Q(function() {
    return p;
  }, [p]), S.createElement("div", rc({}, r, { onTouchStart: u, onMouseDown: u, className: "react-colorful__interactive", ref: o, onKeyDown: d, tabIndex: 0, role: "slider" }));
}), yd = function(e) {
  return e.filter(Boolean).join(" ");
}, jx = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = yd(["react-colorful__pointer", e.className]);
  return S.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, S.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, $t = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, W4 = function(e) {
  return G4(Vl(e));
}, Vl = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? $t(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? $t(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, B4 = function(e) {
  return K4(Y4(e));
}, H4 = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: $t(e.h), s: $t(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: $t(o / 2), a: $t(r, 2) };
}, Ul = function(e) {
  var t = H4(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, Y4 = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: $t(255 * [r, i, s, s, c, r][l]), g: $t(255 * [c, r, r, i, s, s][l]), b: $t(255 * [s, s, c, r, r, i][l]), a: $t(o, 2) };
}, ys = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, K4 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? ys($t(255 * o)) : "";
  return "#" + ys(t) + ys(n) + ys(r) + a;
}, G4 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: $t(60 * (i < 0 ? i + 6 : i)), s: $t(a ? s / a * 100 : 0), v: $t(a / 255 * 100), a: o };
}, Z4 = S.memo(function(e) {
  var t = e.hue, n = e.onChange, r = yd(["react-colorful__hue", e.className]);
  return S.createElement("div", { className: r }, S.createElement(Ax, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: Pa(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": $t(t), "aria-valuemax": "360", "aria-valuemin": "0" }, S.createElement(jx, { className: "react-colorful__hue-pointer", left: t / 360, color: Ul({ h: t, s: 100, v: 100, a: 1 }) })));
}), q4 = S.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: Ul({ h: t.h, s: 100, v: 100, a: 1 }) };
  return S.createElement("div", { className: "react-colorful__saturation", style: r }, S.createElement(Ax, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: Pa(t.s + 100 * o.left, 0, 100), v: Pa(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + $t(t.s) + "%, Brightness " + $t(t.v) + "%" }, S.createElement(jx, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: Ul(t) })));
}), Ix = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, X4 = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || Ix(Vl(e), Vl(t));
};
function Q4(e, t, n) {
  var r = Ll(n), o = X(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], i = H({ color: t, hsva: a });
  Q(function() {
    if (!e.equal(t, i.current.color)) {
      var l = e.toHsva(t);
      i.current = { hsva: l, color: t }, s(l);
    }
  }, [t, e]), Q(function() {
    var l;
    Ix(a, i.current.hsva) || e.equal(l = e.fromHsva(a), i.current.color) || (i.current = { hsva: a, color: l }, r(l));
  }, [a, e, r]);
  var c = fe(function(l) {
    s(function(u) {
      return Object.assign({}, u, l);
    });
  }, []);
  return [a, c];
}
var J4 = typeof window < "u" ? Ma : Q, e7 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Pp = /* @__PURE__ */ new Map(), t7 = function(e) {
  J4(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !Pp.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Pp.set(t, n);
      var r = e7();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, n7 = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = Rx(e, ["className", "colorModel", "color", "onChange"]), i = H(null);
  t7(i);
  var c = Q4(n, o, a), l = c[0], u = c[1], d = yd(["react-colorful", t]);
  return S.createElement("div", rc({}, s, { ref: i, className: d }), S.createElement(q4, { hsva: l, onChange: u }), S.createElement(Z4, { hue: l.h, onChange: u, className: "react-colorful__last-control" }));
}, r7 = { defaultColor: "000", toHsva: W4, fromHsva: function(e) {
  return B4({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: X4 }, o7 = function(e) {
  return S.createElement(n7, rc({}, e, { colorModel: r7 }));
};
const Q8 = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ f.exports.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ f.exports.jsx(o7, { color: e, onChange: t }),
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
function a7(e, t, n) {
  var r = X([]), o = r[0], a = r[1], s = H([]), i = fe(function(d, p) {
    var m = e(d, p), h = m[0], v = m[1];
    return a(function(g) {
      return [].concat(v.reverse(), g);
    }), h;
  }, [e]), c = hi(i, n), l = c[0], u = c[1];
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
function s7(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var oc = {
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
}, Ot;
for (Ot = 1; Ot < 25; Ot += 1)
  oc[111 + Ot] = "F" + Ot;
for (Ot = 65; Ot < 91; Ot += 1) {
  var Tp = /* @__PURE__ */ String.fromCharCode(Ot);
  oc[Ot] = [/* @__PURE__ */ Tp.toLowerCase(), /* @__PURE__ */ Tp.toUpperCase()];
}
for (Ot = 96; Ot < 106; Ot += 1)
  oc[Ot] = /* @__PURE__ */ String.fromCharCode(Ot - 48);
function i7(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = oc[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var c7 = {
  getKey: i7
};
function ws() {
}
function Lx(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function l7(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var u7 = ["refs"], Kc = [], d7 = ["autoFocus", "length", "validate", "format", "debug"], f7 = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], p7 = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], m7 = {
  ref: {
    current: []
  },
  length: 5,
  validate: /^[a-zA-Z0-9]$/,
  format: function(t) {
    return t;
  },
  onResolveKey: ws,
  onRejectKey: ws,
  onChange: ws,
  onComplete: ws,
  debug: !1
};
function h7(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: v7(e.validate),
    fallback: null
  };
}
function Fx(e) {
  return Math.max(0, e - 1);
}
function zl(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function v7(e) {
  return function(t) {
    return !t || t.length > 1 ? !1 : typeof e == "string" ? e.split("").includes(t) : e instanceof Array ? e.includes(t) : e instanceof RegExp ? e.test(t) : e(t);
  };
}
function Op(e, t, n) {
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
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = zl(o + e.focusIdx - 1, e.codeLength), s = Lx(0, o).flatMap(function(i) {
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
var g7 = function(t, n) {
  switch (n.type) {
    case "handle-key-down":
      switch (n.key) {
        case "Unidentified":
          return [en({}, t, {
            fallback: {
              idx: t.focusIdx,
              val: n.val
            }
          }), Kc];
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
          var r = Fx(t.focusIdx);
          return [en({}, t, {
            focusIdx: r
          }), [{
            type: "focus-input",
            idx: r
          }]];
        }
        case "ArrowRight": {
          var o = zl(t.focusIdx, t.codeLength);
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
          var a = zl(t.focusIdx, t.codeLength);
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
        return [t, Kc];
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
        return Op(s, l, d);
      return [s, i];
    }
    case "handle-paste":
      return Op(t, n.idx, n.val);
    case "focus-input":
      return [en({}, t, {
        focusIdx: n.idx
      }), [{
        type: "focus-input",
        idx: n.idx
      }]];
    default:
      return [t, Kc];
  }
};
function b7(e) {
  var t = e.refs, n = s7(e, u7);
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
          var s = Fx(r.idx);
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
var x7 = /* @__PURE__ */ j(function(e, t) {
  var n = en({}, m7, e), r = n.autoFocus, o = n.length, a = l7([].concat(d7, f7), n), s = H([]), i = b7(en({
    refs: s
  }, n)), c = a7(g7, i, h7(n))[1];
  x0(t, function() {
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
      var b = c7.getKey(g.nativeEvent);
      !p7.includes(b) && !g.ctrlKey && !g.altKey && !g.metaKey && g.nativeEvent.target instanceof HTMLInputElement && (g.preventDefault(), c({
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
  return S.createElement(S.Fragment, null, Lx(0, o).map(function(v) {
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
  return /* @__PURE__ */ f.exports.jsx("div", { className: F("pin-field-container", s), children: /* @__PURE__ */ f.exports.jsx(
    x7,
    {
      className: F("pin-field", { complete: l }, i),
      onComplete: e,
      validate: t === "numeric" ? "0123456789" : "abcABC123",
      disabled: r,
      length: n,
      ...c
    }
  ) });
};
var Vx = {}, wd = {};
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
})(wd);
var Ux = {}, jn = {};
Object.defineProperty(jn, "__esModule", { value: !0 });
jn.DEFAULT_DATA_URL_KEY = jn.INIT_MAX_NUMBER = jn.DEFAULT_NULL_INDEX = void 0;
jn.DEFAULT_NULL_INDEX = -1;
jn.INIT_MAX_NUMBER = 1e3;
jn.DEFAULT_DATA_URL_KEY = "dataURL";
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
  var r = jn, o = wd;
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
      return n(this, function($) {
        switch ($.label) {
          case 0:
            return g = {}, e.isMaxNumberValid(s.length + i.length, c, l) ? [3, 1] : (g.maxNumber = !0, [3, 5]);
          case 1:
            b = 0, $.label = 2;
          case 2:
            return b < s.length ? (x = s[b].file, x ? !v && !e.isImageValid(x.type) ? (g.acceptType = !0, [3, 5]) : e.isAcceptTypeValid(u, x.name) ? e.isMaxFileSizeValid(x.size, d) ? p ? [4, o.getImage(x)] : [3, 4] : (g.maxFileSize = !0, [3, 5]) : (g.acceptType = !0, [3, 5]) : [3, 4]) : [3, 5];
          case 3:
            if (y = $.sent(), _ = e.isResolutionValid(y, p, m, h), !_)
              return g.resolution = !0, [3, 5];
            $.label = 4;
          case 4:
            return b += 1, [3, 2];
          case 5:
            return Object.values(g).find(Boolean) ? [2, g] : [2, null];
        }
      });
    });
  };
})(Ux);
var Wl = gt && gt.__assign || function() {
  return Wl = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Wl.apply(this, arguments);
}, y7 = gt && gt.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), w7 = gt && gt.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), $7 = gt && gt.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && y7(t, e, n);
  return w7(t, e), t;
}, Gc = gt && gt.__awaiter || function(e, t, n, r) {
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
}, Zc = gt && gt.__generator || function(e, t) {
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
}, qc = gt && gt.__spreadArrays || function() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), o = 0, t = 0; t < n; t++)
    for (var a = arguments[t], s = 0, i = a.length; s < i; s++, o++)
      r[o] = a[s];
  return r;
};
Object.defineProperty(Vx, "__esModule", { value: !0 });
var Jt = $7(S), Xc = wd, _7 = Ux, Jn = jn, C7 = function(e) {
  var t = e.value, n = t === void 0 ? [] : t, r = e.onChange, o = e.onError, a = e.children, s = e.dataURLKey, i = s === void 0 ? Jn.DEFAULT_DATA_URL_KEY : s, c = e.multiple, l = c === void 0 ? !1 : c, u = e.maxNumber, d = u === void 0 ? Jn.INIT_MAX_NUMBER : u, p = e.acceptType, m = e.maxFileSize, h = e.resolutionWidth, v = e.resolutionHeight, g = e.resolutionType, b = e.inputProps, x = b === void 0 ? {} : b, y = e.allowNonImageType, _ = y === void 0 ? !1 : y, $ = n || [], E = Jt.useRef(null), P = Jt.useState(Jn.DEFAULT_NULL_INDEX), D = P[0], R = P[1], K = Jt.useState(null), G = K[0], W = K[1], Z = Jt.useState(!1), L = Z[0], A = Z[1], I = Jt.useCallback(function() {
    return Xc.openFileDialog(E);
  }, [
    E
  ]), V = Jt.useCallback(function() {
    R(Jn.DEFAULT_NULL_INDEX), I();
  }, [I]), Y = Jt.useCallback(function() {
    r == null || r([]);
  }, [r]), M = function(ne) {
    var he = qc($);
    Array.isArray(ne) ? ne.forEach(function(U) {
      he.splice(U, 1);
    }) : he.splice(ne, 1), r == null || r(he);
  }, k = function(ne) {
    R(ne), I();
  }, B = function(ne) {
    return Gc(void 0, void 0, void 0, function() {
      var he;
      return Zc(this, function(U) {
        switch (U.label) {
          case 0:
            return [4, _7.getErrorValidation({
              fileList: ne,
              maxFileSize: m,
              maxNumber: d,
              acceptType: p,
              keyUpdate: D,
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
    return Gc(void 0, void 0, void 0, function() {
      var he, U, ge, $e, Te, T;
      return Zc(this, function(z) {
        switch (z.label) {
          case 0:
            return ne ? [4, Xc.getListFiles(ne, i)] : [
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
            if ($e = [], D > Jn.DEFAULT_NULL_INDEX)
              Te = he[0], ge = qc($), ge[D] = Te, $e.push(D);
            else if (l)
              for (ge = qc($, he), T = $.length; T < ge.length; T += 1)
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
    return Gc(void 0, void 0, void 0, function() {
      return Zc(this, function(he) {
        switch (he.label) {
          case 0:
            return [4, q(ne.target.files)];
          case 1:
            return he.sent(), D > Jn.DEFAULT_NULL_INDEX && R(Jn.DEFAULT_NULL_INDEX), E.current && (E.current.value = ""), [
              2
              /*return*/
            ];
        }
      });
    });
  }, te = Jt.useMemo(function() {
    return Xc.getAcceptTypeString(p, _);
  }, [p, _]), ve = function(ne) {
    ne.preventDefault(), ne.stopPropagation();
  }, me = function(ne) {
    ne.preventDefault(), ne.stopPropagation(), ne.dataTransfer.items && ne.dataTransfer.items.length > 0 && A(!0);
  }, re = function(ne) {
    ne.preventDefault(), ne.stopPropagation(), A(!1);
  }, se = function(ne) {
    ne.preventDefault(), ne.stopPropagation(), A(!1), ne.dataTransfer.files && ne.dataTransfer.files.length > 0 && q(ne.dataTransfer.files);
  }, ue = function(ne) {
    ne.preventDefault(), ne.stopPropagation(), ne.dataTransfer.clearData();
  };
  return Jt.default.createElement(
    Jt.default.Fragment,
    null,
    Jt.default.createElement("input", Wl({ type: "file", accept: te, ref: E, multiple: l && D === Jn.DEFAULT_NULL_INDEX, onChange: oe, style: { display: "none" } }, x)),
    a == null ? void 0 : a({
      imageList: $,
      onImageUpload: V,
      onImageRemoveAll: Y,
      onImageUpdate: k,
      onImageRemove: M,
      errors: G,
      dragProps: {
        onDrop: se,
        onDragEnter: me,
        onDragLeave: re,
        onDragOver: ve,
        onDragStart: ue
      },
      isDragging: L
    })
  );
}, zx = Vx.default = C7;
const S7 = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, Wx = ({
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
      const u = S7(l == null ? void 0 : l.toString(), t.name);
      c({ data_url: l, file: u });
    },
    i
  );
}), E7 = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsxs(Ia, { className: F("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(ho, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(La, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(bi, {}) })
] });
function N7() {
  return S.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-unzoom-icon": !0, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    S.createElement("path", { d: "M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z" })
  );
}
function P7() {
  return S.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-zoom-icon": !0, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    S.createElement("path", { d: "M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z" })
  );
}
const di = (e, t) => {
  var n, r;
  return e === ((r = (n = t == null ? void 0 : t.tagName) == null ? void 0 : n.toUpperCase) == null ? void 0 : r.call(n));
}, $d = (e) => di("DIV", e) || di("SPAN", e), fi = (e) => di("IMG", e), kp = (e) => e.complete && e.naturalHeight !== 0, Bl = (e) => di("SVG", e), Bx = ({ height: e, offset: t, width: n }) => Math.min((window.innerWidth - t * 2) / n, (window.innerHeight - t * 2) / e), T7 = ({ containerHeight: e, containerWidth: t, offset: n, targetHeight: r, targetWidth: o }) => {
  const a = Bx({
    height: r,
    offset: n,
    width: o
  }), s = o > r ? o / t : r / e;
  return a > 1 ? s : a * s;
}, Tr = ({ containerHeight: e, containerWidth: t, hasScalableSrc: n, offset: r, targetHeight: o, targetWidth: a }) => !e || !t ? 1 : !n && o && a ? T7({
  containerHeight: e,
  containerWidth: t,
  offset: r,
  targetHeight: o,
  targetWidth: a
}) : Bx({
  height: e,
  offset: r,
  width: t
}), O7 = /url(?:\(['"]?)(.*?)(?:['"]?\))/, Mp = (e) => {
  var t;
  if (e) {
    if (fi(e))
      return e.currentSrc;
    if ($d(e)) {
      const n = window.getComputedStyle(e).backgroundImage;
      if (n)
        return (t = O7.exec(n)) == null ? void 0 : t[1];
    }
  }
}, k7 = (e) => {
  if (e)
    return fi(e) ? e.alt ?? void 0 : e.getAttribute("aria-label") ?? void 0;
}, M7 = ({ containerHeight: e, containerLeft: t, containerTop: n, containerWidth: r, hasScalableSrc: o, offset: a, targetHeight: s, targetWidth: i }) => {
  const c = Tr({
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
}, Kt = ({ position: e, relativeNum: t }) => {
  const n = parseFloat(e);
  return e.endsWith("%") ? t * n / 100 : n;
}, D7 = ({ containerHeight: e, containerLeft: t, containerTop: n, containerWidth: r, hasScalableSrc: o, objectFit: a, objectPosition: s, offset: i, targetHeight: c, targetWidth: l }) => {
  if (a === "scale-down" && (l <= r && c <= e ? a = "none" : a = "contain"), a === "cover" || a === "contain") {
    const u = r / l, d = e / c, p = a === "cover" ? Math.max(u, d) : Math.min(u, d), [m = "50%", h = "50%"] = s.split(" "), v = Kt({ position: m, relativeNum: r - l * p }), g = Kt({ position: h, relativeNum: e - c * p }), b = Tr({
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
    const [u = "50%", d = "50%"] = s.split(" "), p = Kt({ position: u, relativeNum: r - l }), m = Kt({ position: d, relativeNum: e - c }), h = Tr({
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
    const u = r / l, d = e / c, p = Math.max(u, d), m = Tr({
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
}, R7 = ({ backgroundPosition: e, backgroundSize: t, containerHeight: n, containerLeft: r, containerTop: o, containerWidth: a, hasScalableSrc: s, offset: i, targetHeight: c, targetWidth: l }) => {
  if (t === "cover" || t === "contain") {
    const u = a / l, d = n / c, p = t === "cover" ? Math.max(u, d) : Math.min(u, d), [m = "50%", h = "50%"] = e.split(" "), v = Kt({ position: m, relativeNum: a - l * p }), g = Kt({ position: h, relativeNum: n - c * p }), b = Tr({
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
    const [u = "50%", d = "50%"] = e.split(" "), p = Kt({ position: u, relativeNum: a - l }), m = Kt({ position: d, relativeNum: n - c }), h = Tr({
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
    const [u = "50%", d = "50%"] = t.split(" "), p = Kt({ position: u, relativeNum: a }), m = Kt({ position: d, relativeNum: n }), h = p / l, v = m / c, g = Math.min(h, v), [b = "50%", x = "50%"] = e.split(" "), y = Kt({ position: b, relativeNum: a - l * g }), _ = Kt({ position: x, relativeNum: n - c * g }), $ = Tr({
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
}, A7 = /\.svg$/i, j7 = ({ hasZoomImg: e, imgSrc: t, isSvg: n, isZoomed: r, loadedImgEl: o, offset: a, shouldRefresh: s, targetEl: i }) => {
  var b;
  const c = n || ((b = t == null ? void 0 : t.slice) == null ? void 0 : b.call(t, 0, 18)) === "data:image/svg+xml" || e || !!(t && A7.test(t)), l = i.getBoundingClientRect(), u = window.getComputedStyle(i), d = o != null && $d(i), p = o != null && !d, m = M7({
    containerHeight: l.height,
    containerLeft: l.left,
    containerTop: l.top,
    containerWidth: l.width,
    hasScalableSrc: c,
    offset: a,
    targetHeight: (o == null ? void 0 : o.naturalHeight) ?? l.height,
    targetWidth: (o == null ? void 0 : o.naturalWidth) ?? l.width
  }), h = p ? D7({
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
  }) : void 0, v = d ? R7({
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
    const x = window.innerWidth / 2, y = window.innerHeight / 2, _ = parseFloat(String(g.left || 0)) + parseFloat(String(g.width || 0)) / 2, $ = parseFloat(String(g.top || 0)) + parseFloat(String(g.height || 0)) / 2, E = x - _, P = y - $;
    s && (g.transitionDuration = "0.01ms"), g.transform = `translate(${E}px,${P}px) scale(1)`;
  }
  return g;
}, I7 = (e) => {
  if (!e)
    return {};
  if (Bl(e)) {
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
let ra;
typeof document < "u" && (ra = document.createElement("div"), ra.setAttribute("data-rmiz-portal", ""), document.body.appendChild(ra));
const L7 = ["img", "svg", '[role="img"]', "[data-zoom]"].map((e) => `${e}:not([aria-hidden="true"])`).join(","), Dp = {
  overflow: "",
  width: ""
};
function F7(e) {
  return S.createElement(Hx, { ...e });
}
class Hx extends y0 {
  constructor() {
    super(...arguments), this.state = {
      id: "",
      isZoomImgLoaded: !1,
      loadedImgEl: void 0,
      modalState: "UNLOADED",
      shouldRefresh: !1
    }, this.refContent = Wo(), this.refDialog = Wo(), this.refModalContent = Wo(), this.refModalImg = Wo(), this.refWrap = Wo(), this.imgEl = null, this.prevBodyAttrs = Dp, this.styleModalImg = {}, this.setId = () => {
      const t = () => Math.random().toString(16).slice(-4);
      this.setState({ id: t() + t() + t() });
    }, this.setAndTrackImg = () => {
      var n, r, o, a, s, i;
      const t = this.refContent.current;
      t && (this.imgEl = t.querySelector(L7), this.imgEl ? ((r = (n = this.changeObserver) == null ? void 0 : n.disconnect) == null || r.call(n), (a = (o = this.imgEl) == null ? void 0 : o.addEventListener) == null || a.call(o, "load", this.handleImgLoad), (i = (s = this.imgEl) == null ? void 0 : s.addEventListener) == null || i.call(s, "click", this.handleZoom), this.state.loadedImgEl || this.handleImgLoad(), this.imgElObserver = new ResizeObserver((c) => {
        const l = c[0];
        l != null && l.target && (this.imgEl = l.target, this.setState({}));
      }), this.imgElObserver.observe(this.imgEl)) : this.changeObserver || (this.changeObserver = new MutationObserver(this.setAndTrackImg), this.changeObserver.observe(t, { childList: !0, subtree: !0 })));
    }, this.handleIfZoomChanged = (t) => {
      const { isZoomed: n } = this.props;
      !t && n ? this.zoom() : t && !n && this.unzoom();
    }, this.handleImgLoad = () => {
      const { imgEl: t } = this, n = Mp(t);
      if (!n)
        return;
      const r = new Image();
      fi(t) && (r.sizes = t.sizes, r.srcset = t.srcset), r.src = n;
      const o = () => {
        this.setState({ loadedImgEl: r });
      };
      r.decode().then(o).catch(() => {
        if (kp(r)) {
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
      document.body.style.width = this.prevBodyAttrs.width, document.body.style.overflow = this.prevBodyAttrs.overflow, this.prevBodyAttrs = Dp;
    }, this.loadZoomImg = () => {
      const { props: { zoomImg: t } } = this, n = t == null ? void 0 : t.src;
      if (n) {
        const r = new Image();
        r.sizes = (t == null ? void 0 : t.sizes) ?? "", r.srcset = (t == null ? void 0 : t.srcSet) ?? "", r.src = n;
        const o = () => {
          this.setState({ isZoomImgLoaded: !0 });
        };
        r.decode().then(o).catch(() => {
          if (kp(r)) {
            o();
            return;
          }
          r.onload = o;
        });
      }
    }, this.UNSAFE_handleSvg = () => {
      var o, a, s, i, c;
      const { imgEl: t, refModalImg: n, styleModalImg: r } = this;
      if (Bl(t)) {
        const l = document.createElement("div");
        l.innerHTML = t.outerHTML;
        const u = l.firstChild;
        u.style.width = `${r.width || 0}px`, u.style.height = `${r.height || 0}px`, u.addEventListener("click", this.handleUnzoom), (s = (a = (o = n.current) == null ? void 0 : o.firstChild) == null ? void 0 : a.remove) == null || s.call(a), (c = (i = n.current) == null ? void 0 : i.appendChild) == null || c.call(i, u);
      }
    };
  }
  render() {
    const { handleDialogCancel: t, handleDialogClick: n, handleUnzoom: r, handleZoom: o, imgEl: a, props: { a11yNameButtonUnzoom: s, a11yNameButtonZoom: i, children: c, classDialog: l, IconUnzoom: u, IconZoom: d, isZoomed: p, wrapElement: m, ZoomContent: h, zoomImg: v, zoomMargin: g }, refContent: b, refDialog: x, refModalContent: y, refModalImg: _, refWrap: $, state: { id: E, isZoomImgLoaded: P, loadedImgEl: D, modalState: R, shouldRefresh: K } } = this, G = `rmiz-modal-${E}`, W = `rmiz-modal-img-${E}`, Z = $d(a), L = fi(a), A = Bl(a), I = k7(a), V = Mp(a), Y = L ? a.sizes : void 0, M = L ? a.srcset : void 0, k = !!(v != null && v.src), B = a && (D || A) && window.getComputedStyle(a).display !== "none", q = I ? `${i}: ${I}` : i, oe = R === "LOADING" || R === "LOADED", te = B ? "found" : "not-found", ve = R === "UNLOADED" || R === "UNLOADING" ? "hidden" : "visible", me = {
      visibility: R === "UNLOADED" ? "visible" : "hidden"
    }, re = I7(a);
    this.styleModalImg = B ? j7({
      hasZoomImg: k,
      imgSrc: V,
      isSvg: A,
      isZoomed: p && oe,
      loadedImgEl: D,
      offset: g,
      shouldRefresh: K,
      targetEl: a
    }) : {};
    let se = null;
    if (B) {
      const ue = L || Z ? S.createElement("img", { alt: I, sizes: Y, src: V, srcSet: M, ...P && R === "LOADED" ? v : {}, "data-rmiz-modal-img": "", height: this.styleModalImg.height || void 0, id: W, ref: _, style: this.styleModalImg, width: this.styleModalImg.width || void 0 }) : A ? S.createElement("div", { "data-rmiz-modal-img": !0, ref: _, style: this.styleModalImg }) : null, ne = S.createElement(
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
      S.createElement(m, { "data-rmiz-content": te, ref: b, style: me }, c),
      B && S.createElement(
        m,
        { "data-rmiz-ghost": "", style: re },
        S.createElement(
          "button",
          { "aria-label": q, "data-rmiz-btn-zoom": "", onClick: o, type: "button" },
          S.createElement(d, null)
        )
      ),
      B && ra != null && Gl(S.createElement(
        "dialog",
        { "aria-labelledby": W, "aria-modal": "true", className: l, "data-rmiz-modal": "", id: G, onClick: n, onClose: r, onCancel: t, ref: x, role: "dialog" },
        S.createElement("div", { "data-rmiz-modal-overlay": ve }),
        S.createElement("div", { "data-rmiz-modal-content": "", ref: y }, se)
      ), ra)
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
Hx.defaultProps = {
  a11yNameButtonUnzoom: "Minimize image",
  a11yNameButtonZoom: "Expand image",
  IconUnzoom: N7,
  IconZoom: P7,
  wrapElement: "div",
  zoomMargin: 0
};
function Yx(e) {
  const [t, n] = X(!1);
  return S.createElement(F7, { ...e, isZoomed: t, onZoomChange: n });
}
const V7 = ({ src: e, alt: t, imageContainerClassName: n, ...r }) => {
  const [o, a] = X(!1);
  return /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
    /* @__PURE__ */ f.exports.jsx("style", { jsx: !0, children: `
        [data-rmiz-modal-overlay="visible"] {
          background: rgba(0, 0, 0, 0.6) !important;
          backdrop-filter: blur(4px);
        }
      ` }),
    /* @__PURE__ */ f.exports.jsx(Yx, { ...r, children: o ? /* @__PURE__ */ f.exports.jsxs("div", { style: { textAlign: "center" }, children: [
      /* @__PURE__ */ f.exports.jsx(bi, { size: 34 }),
      /* @__PURE__ */ f.exports.jsx("p", { children: "Error al cargar la imagen" })
    ] }) : /* @__PURE__ */ f.exports.jsx(
      "img",
      {
        src: e,
        alt: t,
        style: { width: "-webkit-fill-available" },
        className: F("object-contain m-auto h-aspect-square w-fit h-[237px] rounded-md", n),
        onError: () => a(!0)
      }
    ) })
  ] });
}, U7 = ({ imageIndex: e, compress: t, disabled: n, tabIndexs: r, onImageUpdate: o, setUploadImage: a, onImageRemove: s, setLocalImage: i }) => n ? null : /* @__PURE__ */ f.exports.jsxs("div", { className: "mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-2 bg-transparent", children: [
  (t == null ? void 0 : t.openComparisons) && /* @__PURE__ */ f.exports.jsx(
    Ue,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: r == null ? void 0 : r.viewCompress,
      onClick: () => t.openComparisons(),
      className: "text-green-600 backdrop-blur-sm border-green-600 bg-green-600 bg-opacity-10 hover:bg-green-600 hover:bg-opacity-25 hover:text-green-600",
      children: /* @__PURE__ */ f.exports.jsx(bx, { size: 16 })
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
      children: /* @__PURE__ */ f.exports.jsx(em, { size: 14 })
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
      children: /* @__PURE__ */ f.exports.jsx(tm, { size: 14 })
    }
  )
] }), z7 = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, onImageUpload: a }) => /* @__PURE__ */ f.exports.jsxs(
  "div",
  {
    ...e,
    className: F(
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
          children: /* @__PURE__ */ f.exports.jsx(Xp, { size: 22 })
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
    var y, _, $, E, P, D, R;
    const g = (y = h[0]) == null ? void 0 : y.file, b = (_ = h[0]) == null ? void 0 : _.data_url;
    g || (p([]), t({ original: null, compressed: null })), p(h);
    const x = Ds(($ = h[0]) == null ? void 0 : $.file.size);
    if (u != null && u.resizer && g) {
      const { data_url: K, file: G } = await Wx({
        resizer: u == null ? void 0 : u.resizer,
        imageFile: g,
        quality: (n == null ? void 0 : n.quality) || 10,
        maxWidth: (n == null ? void 0 : n.width) || 500,
        maxHeight: (n == null ? void 0 : n.width) || 500,
        compressFormat: (n == null ? void 0 : n.extension) || "png",
        rotation: (n == null ? void 0 : n.rotation) || 0
      }), W = Ds(G.size);
      t({
        original: {
          preview: b,
          file: g,
          size: {
            formated: x,
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
        preview: (P = h[0]) == null ? void 0 : P.data_url,
        file: (D = h[0]) == null ? void 0 : D.file,
        size: { formated: x, bytes: (R = h[0]) == null ? void 0 : R.file.size }
      },
      compressed: null
    });
  };
  return Q(() => {
    e && p([{ data_url: e, file: null }]);
  }, [e]), /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full", children: [
    r && /* @__PURE__ */ f.exports.jsx(Nn, { children: r }),
    r && /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      zx,
      {
        value: d,
        onChange: m,
        dataURLKey: "data_url",
        acceptType: ["webp", "png", "jpg", "jpeg"],
        children: ({ imageList: h, onImageUpload: v, onImageUpdate: g, onImageRemove: b, isDragging: x, dragProps: y }) => /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: h.length >= 1 ? /* @__PURE__ */ f.exports.jsx("div", { children: h.map((_, $) => /* @__PURE__ */ f.exports.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
          l ? /* @__PURE__ */ f.exports.jsx(V7, { imageContainerClassName: c, src: _ == null ? void 0 : _.data_url }) : /* @__PURE__ */ f.exports.jsx(E7, { imageContainerClassName: c, previewUrl: _ == null ? void 0 : _.data_url }),
          /* @__PURE__ */ f.exports.jsx(
            U7,
            {
              disabled: s,
              imageIndex: $,
              setUploadImage: t,
              onImageRemove: b,
              onImageUpdate: g,
              compress: u,
              tabIndexs: a,
              setLocalImage: p
            }
          )
        ] }, $)) }) : /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
          z7,
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
}, W7 = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsxs(Ia, { className: F("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(ho, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(La, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(bi, {}) })
] }), B7 = ({ imageIndex: e, compress: t, tabIndexs: n, onImageUpdate: r, onImageRemove: o }) => /* @__PURE__ */ f.exports.jsxs("div", { className: "mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-2 bg-transparent", children: [
  (t == null ? void 0 : t.openComparisons) && /* @__PURE__ */ f.exports.jsx(
    Ue,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: n == null ? void 0 : n.viewCompress,
      onClick: () => t.openComparisons(),
      className: "whitespace-nowrap text-green-600 backdrop-blur-sm border-green-600 bg-green-600 bg-opacity-10 hover:bg-green-600 hover:bg-opacity-25 hover:text-green-600",
      children: /* @__PURE__ */ f.exports.jsx(bx, { size: 16 })
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
      children: /* @__PURE__ */ f.exports.jsx(em, { size: 14 })
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
      children: /* @__PURE__ */ f.exports.jsx(tm, { size: 14 })
    }
  )
] }), H7 = ({ previewUrl: e, alt: t, imageContainerClassName: n, ...r }) => {
  const [o, a] = X(!1);
  return /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
    /* @__PURE__ */ f.exports.jsx("style", { jsx: !0, children: `
        [data-rmiz-modal-overlay="visible"] {
          background: rgba(0, 0, 0, 0.6) !important;
          backdrop-filter: blur(4px);
        }
      ` }),
    /* @__PURE__ */ f.exports.jsx(Yx, { ...r, children: o ? /* @__PURE__ */ f.exports.jsxs("div", { style: { textAlign: "center" }, children: [
      /* @__PURE__ */ f.exports.jsx(bi, { size: 34 }),
      /* @__PURE__ */ f.exports.jsx("p", { children: "Error al cargar la imagen" })
    ] }) : /* @__PURE__ */ f.exports.jsx(
      "img",
      {
        src: e,
        alt: t,
        style: { width: "-webkit-fill-available" },
        className: F("object-contain m-auto h-aspect-square w-fit h-[237px] rounded-md", n),
        onError: () => a(!0)
      }
    ) })
  ] });
}, Y7 = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, onImageUpload: a }) => /* @__PURE__ */ f.exports.jsxs(
  "div",
  {
    ...e,
    className: F(
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
          children: /* @__PURE__ */ f.exports.jsx(Xp, { size: 22 })
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
  initialPreview: u
}) => {
  const [d, p] = X([]);
  Q(() => {
    u && u.length && p([...d, ...u]);
  }, []);
  const m = async (h, v) => {
    p(h);
    const g = h.map(async (b) => {
      var x, y, _;
      if (c != null && c.resizer && (b != null && b.file)) {
        const { data_url: $, file: E } = await Wx({
          resizer: c == null ? void 0 : c.resizer,
          imageFile: b == null ? void 0 : b.file,
          quality: (n == null ? void 0 : n.quality) || 10,
          maxWidth: (n == null ? void 0 : n.width) || 500,
          maxHeight: (n == null ? void 0 : n.width) || 500,
          compressFormat: (n == null ? void 0 : n.extension) || "png",
          rotation: (n == null ? void 0 : n.rotation) || 0
        }), P = Ds(E == null ? void 0 : E.size);
        return {
          original: {
            preview: b == null ? void 0 : b.data_url,
            file: b == null ? void 0 : b.file,
            size: {
              formated: (x = b == null ? void 0 : b.file) != null && x.size ? Ds((y = b == null ? void 0 : b.file) == null ? void 0 : y.size) : null,
              bytes: ((_ = b == null ? void 0 : b.file) == null ? void 0 : _.size) || null
            }
          },
          compressed: {
            preview: $ == null ? void 0 : $.toString(),
            file: E,
            size: {
              formated: P,
              bytes: E == null ? void 0 : E.size
            }
          }
        };
      }
      return null;
    });
    Promise.all(g).then(t);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { children: [
    e && /* @__PURE__ */ f.exports.jsx(Nn, { children: e }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      zx,
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
              h.map((_, $) => /* @__PURE__ */ f.exports.jsxs(
                "div",
                {
                  className: "imagen-container w-full flex flex-col justify-center items-center relative",
                  children: [
                    i ? /* @__PURE__ */ f.exports.jsx(
                      H7,
                      {
                        imageContainerClassName: s,
                        previewUrl: _ == null ? void 0 : _.data_url
                      }
                    ) : /* @__PURE__ */ f.exports.jsx(
                      W7,
                      {
                        imageContainerClassName: s,
                        previewUrl: _ == null ? void 0 : _.data_url
                      }
                    ),
                    /* @__PURE__ */ f.exports.jsx(
                      B7,
                      {
                        imageIndex: $,
                        onImageRemove: b,
                        onImageUpdate: g,
                        compress: c,
                        tabIndexs: o
                      }
                    )
                  ]
                },
                $
              )),
              d.length < l && /* @__PURE__ */ f.exports.jsx("div", { className: "imagen-container", children: /* @__PURE__ */ f.exports.jsx(
                "div",
                {
                  ...y,
                  className: F(
                    `w-full h-[237px] ${x ? "border-indigo-600" : "border-muted-foreground"} flex flex-col justify-center items-center border-dashed border-muted-foreground border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`,
                    s
                  ),
                  children: /* @__PURE__ */ f.exports.jsx(
                    Ue,
                    {
                      type: "button",
                      variant: "outline",
                      className: "p-2 h-min",
                      onClick: v,
                      children: /* @__PURE__ */ f.exports.jsx($3, { className: "w-8 h-8" })
                    }
                  )
                }
              ) })
            ]
          }
        ) : /* @__PURE__ */ f.exports.jsx(
          Y7,
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
function nR({
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
  const [p, m] = X(!1);
  return /* @__PURE__ */ f.exports.jsx(
    Br,
    {
      control: t.control,
      name: e,
      defaultValue: i,
      render: ({ field: h }) => {
        var v;
        return /* @__PURE__ */ f.exports.jsxs(xr, { className: "flex flex-col", children: [
          /* @__PURE__ */ f.exports.jsx(Nn, { children: n }),
          /* @__PURE__ */ f.exports.jsxs(Vn, { open: p, onOpenChange: m, children: [
            /* @__PURE__ */ f.exports.jsx(Un, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Ue,
              {
                disabled: o,
                tabIndex: a,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: F("w-min justify-between", !h.value && "text-muted-foreground", `${u}`),
                children: [
                  h.value ? (v = r.find((g) => {
                    var b, x;
                    return ((b = g == null ? void 0 : g.value) == null ? void 0 : b.toUpperCase()) === ((x = h == null ? void 0 : h.value) == null ? void 0 : x.toUpperCase());
                  })) == null ? void 0 : v.label : l,
                  /* @__PURE__ */ f.exports.jsx(ol, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx($n, { className: F("w-[200px] p-0", d), children: /* @__PURE__ */ f.exports.jsxs(zn, { children: [
              /* @__PURE__ */ f.exports.jsx(lr, { placeholder: s, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsx(ur, { children: c }),
              /* @__PURE__ */ f.exports.jsx(un, { children: r.map((g) => /* @__PURE__ */ f.exports.jsxs(
                dn,
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
                      y3,
                      {
                        className: F(
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
function K7({
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
  const [v, g] = X(!1);
  return t ? /* @__PURE__ */ f.exports.jsx(
    Br,
    {
      control: t.control,
      name: e,
      defaultValue: u,
      rules: o,
      render: ({ field: x, formState: y }) => {
        var _, $, E;
        return /* @__PURE__ */ f.exports.jsxs(xr, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ f.exports.jsxs(Hr, { className: "flex", children: [
            n,
            " ",
            (($ = (_ = y.errors) == null ? void 0 : _.pidType) == null ? void 0 : $.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              y.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsxs(Vn, { open: v, onOpenChange: g, children: [
            /* @__PURE__ */ f.exports.jsx(Un, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Ue,
              {
                disabled: s,
                tabIndex: c,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: F("w-min justify-between", !x.value && "text-muted-foreground", `${m}`),
                children: [
                  x.value ? (E = r.find((P) => P.value === x.value)) == null ? void 0 : E.label : p,
                  /* @__PURE__ */ f.exports.jsx(ol, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx($n, { className: F("w-[200px] p-0", h), children: /* @__PURE__ */ f.exports.jsxs(zn, { children: [
              /* @__PURE__ */ f.exports.jsx(lr, { placeholder: l, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsx(ur, { children: d }),
              /* @__PURE__ */ f.exports.jsx(un, { children: r.map((P) => /* @__PURE__ */ f.exports.jsxs(
                dn,
                {
                  value: P.value,
                  onSelect: (D) => {
                    t.setValue(e, D), g(!1);
                  },
                  className: "w-full flex justify-start items-center",
                  children: [
                    (P == null ? void 0 : P.image) && /* @__PURE__ */ f.exports.jsx("img", { src: P.image, alt: P.label, width: 40, className: "mr-2" }),
                    (P == null ? void 0 : P.icon) && P.icon,
                    P.label,
                    /* @__PURE__ */ f.exports.jsx(
                      cn,
                      {
                        className: F(
                          "ml-auto h-4 w-4",
                          P.value === x.value ? "opacity-100" : "opacity-0"
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
  ) : /* @__PURE__ */ f.exports.jsxs(Vn, { open: v, onOpenChange: g, children: [
    /* @__PURE__ */ f.exports.jsx(Un, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
      Ue,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": v,
        className: "w-full justify-between",
        children: [
          a ? (b = r.find((x) => x.value === a)) == null ? void 0 : b.label : p,
          /* @__PURE__ */ f.exports.jsx(ol, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ f.exports.jsx($n, { className: "w-full p-0", children: /* @__PURE__ */ f.exports.jsxs(zn, { children: [
      /* @__PURE__ */ f.exports.jsx(lr, { placeholder: l, className: "h-9" }),
      /* @__PURE__ */ f.exports.jsx(ur, { children: d }),
      /* @__PURE__ */ f.exports.jsx(un, { children: r.map((x) => /* @__PURE__ */ f.exports.jsxs(
        dn,
        {
          onSelect: (y) => {
            i(y === a ? "" : y), g(!1);
          },
          children: [
            x.label,
            /* @__PURE__ */ f.exports.jsx(
              cn,
              {
                className: F(
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
const G7 = ({ form: e, id: t, description: n, icon: r, placeholder: o, label: a, tabIndex: s, options: i, classNameContainer: c, classNamePopover: l }) => {
  var _;
  const u = H(null), [d, p] = X(null);
  Q(() => {
    const $ = u.current;
    if (!$)
      return;
    const E = new ResizeObserver((P) => {
      const D = P[0].contentRect.width;
      p(D);
    });
    return E.observe($), () => {
      E.unobserve($), E.disconnect();
    };
  }, []);
  const m = (_ = e == null ? void 0 : e.formState) == null ? void 0 : _.defaultValues[t], h = i.map(($) => ({
    ...$,
    selected: m ? m.includes($.value) : !1
  })), [v, g] = X(h), b = ($) => v.filter((P) => P.selected).map((P) => P.value), x = () => g(($) => $.map((E) => ({ ...E, selected: !1 }))), y = ($, E) => {
    const P = v.map((D) => D.id === $ ? { ...D, selected: E } : D);
    g(P), e.setValue(t, P.filter((D) => D.selected).map((D) => D.value), { shouldDirty: !0 });
  };
  return /* @__PURE__ */ f.exports.jsx(
    Br,
    {
      control: e.control,
      name: t,
      render: ({ field: $, formState: E }) => {
        var P;
        return /* @__PURE__ */ f.exports.jsxs(xr, { className: F("w-full space-y-2", c), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            a && /* @__PURE__ */ f.exports.jsxs(Hr, { className: "flex", children: [
              a,
              " "
            ] }),
            ((P = E == null ? void 0 : E.errors[t]) == null ? void 0 : P.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              E.errors[t].message
            ] })
          ] }),
          n && /* @__PURE__ */ f.exports.jsx(Oo, { className: "text-xs", children: n }),
          /* @__PURE__ */ f.exports.jsxs(Vn, { children: [
            /* @__PURE__ */ f.exports.jsx(Un, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
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
                  !b().length && /* @__PURE__ */ f.exports.jsx("span", { className: "text-muted-foreground font-normal", children: o || "Seleccione alguna opción" }),
                  b().length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
                    /* @__PURE__ */ f.exports.jsxs(
                      St,
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
                      St,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: [
                          b().length,
                          " seleccionados"
                        ]
                      }
                    ) : v.filter((D) => D.selected).map((D) => /* @__PURE__ */ f.exports.jsx(
                      St,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: D.label
                      },
                      D.value.toString()
                    )) })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx($n, { style: { width: d + 24 }, className: F("w-full p-0", l), align: "start", children: /* @__PURE__ */ f.exports.jsxs(zn, { children: [
              /* @__PURE__ */ f.exports.jsx(lr, { placeholder: a }),
              /* @__PURE__ */ f.exports.jsxs(Ja, { children: [
                /* @__PURE__ */ f.exports.jsx(ur, { children: "Sin Resultados" }),
                /* @__PURE__ */ f.exports.jsx(un, { children: v.map((D) => /* @__PURE__ */ f.exports.jsxs(
                  dn,
                  {
                    onSelect: () => {
                      D.selected ? y(D.id, !1) : y(D.id, !0);
                    },
                    children: [
                      /* @__PURE__ */ f.exports.jsx(
                        "div",
                        {
                          className: F(
                            "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                            D.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                          ),
                          children: /* @__PURE__ */ f.exports.jsx(cn, { className: F("h-4 w-4") })
                        }
                      ),
                      D.icon,
                      /* @__PURE__ */ f.exports.jsx("span", { children: D.label })
                    ]
                  },
                  D.value.toString()
                )) }),
                b().length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
                  /* @__PURE__ */ f.exports.jsx(Hi, {}),
                  /* @__PURE__ */ f.exports.jsx(un, { children: /* @__PURE__ */ f.exports.jsx(
                    dn,
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
}, Z7 = ({ description: e, icon: t, placeholder: n, label: r, tabIndex: o, options: a, classNameContainer: s, classNamePopover: i }) => {
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
  }, []), /* @__PURE__ */ f.exports.jsxs("div", { className: F("w-full space-y-2", s), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsxs(Nn, { className: "flex", children: [
      r,
      " "
    ] }) }),
    e && /* @__PURE__ */ f.exports.jsx("p", { className: "text-xs", children: e }),
    /* @__PURE__ */ f.exports.jsxs(Vn, { children: [
      /* @__PURE__ */ f.exports.jsx(Un, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
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
                St,
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
                St,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ) : a.map((d) => /* @__PURE__ */ f.exports.jsx(
                St,
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
      /* @__PURE__ */ f.exports.jsx($n, { style: { width: l + 24 }, className: F("w-full p-0", i), align: "start", children: /* @__PURE__ */ f.exports.jsxs(zn, { children: [
        /* @__PURE__ */ f.exports.jsx(lr, { placeholder: r }),
        /* @__PURE__ */ f.exports.jsxs(Ja, { children: [
          /* @__PURE__ */ f.exports.jsx(ur, { children: "Sin Resultados" }),
          /* @__PURE__ */ f.exports.jsx(un, { children: a.map((d) => /* @__PURE__ */ f.exports.jsxs(
            dn,
            {
              disabled: !0,
              className: "cursor-default",
              children: [
                /* @__PURE__ */ f.exports.jsx(
                  "div",
                  {
                    className: F(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground"
                      // option
                      //   ? 'bg-primary text-primary-foreground'
                      //   : 'opacity-50 [&_svg]:invisible'
                    ),
                    children: /* @__PURE__ */ f.exports.jsx(cn, { className: F("h-4 w-4") })
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
  Z7,
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
  G7,
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
function q7({
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
function Rp({
  icon: e,
  titleDescription: t,
  actionToSet: n,
  Link: r,
  item: o
}) {
  return /* @__PURE__ */ f.exports.jsx(Dr, { children: /* @__PURE__ */ f.exports.jsxs(Rr, { children: [
    /* @__PURE__ */ f.exports.jsx(Ar, { children: /* @__PURE__ */ f.exports.jsx(
      "div",
      {
        onClick: n ? () => {
          n(!0);
        } : null,
        role: "button",
        className: "w-full border-2 border-transparent flex justify-center items-center p-2 group group-hover:text-[#eaeaea] text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover hover:dark:bg-main-hover select-none",
        children: /* @__PURE__ */ f.exports.jsx(
          wx,
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
    /* @__PURE__ */ f.exports.jsx(dr, { children: t })
  ] }) });
}
function X7({
  profile: e
}) {
  return /* @__PURE__ */ f.exports.jsxs("header", { className: "justify-center w-full h-14 flex items-start gap-x-3 my-10 px-10", children: [
    /* @__PURE__ */ f.exports.jsxs(Ia, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
      /* @__PURE__ */ f.exports.jsx(ho, { src: e == null ? void 0 : e.photo, className: "object-cover" }),
      /* @__PURE__ */ f.exports.jsx(La, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(ho, { src: e == null ? void 0 : e.photo, className: "object-cover" }) })
    ] }),
    /* @__PURE__ */ f.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
      /* @__PURE__ */ f.exports.jsxs("span", { className: "truncate", children: [
        e == null ? void 0 : e.name,
        " ",
        e == null ? void 0 : e.lastname
      ] }),
      (e == null ? void 0 : e.role) && /* @__PURE__ */ f.exports.jsx(St, { className: "w-full", children: e.role })
    ] })
  ] });
}
const Q7 = ({ isExpanded: e, theme: t }) => {
  const [n, r] = X(!1), { value: o, toggleTheme: a } = t;
  return Q(() => {
    r(!0);
  }, []), n ? /* @__PURE__ */ f.exports.jsx(
    "button",
    {
      onClick: a,
      className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
      children: o === "light" ? /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(gx, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(yx, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  ) : null;
};
function J7({
  sidebar: e,
  onCloseSideBar: t
}) {
  return /* @__PURE__ */ f.exports.jsxs("section", { className: "pl-2 pr-3 my-2", children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "border border-slate-200 w-full" }),
    /* @__PURE__ */ f.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
      e.theme && /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(Q7, { isExpanded: !1, theme: e.theme }) }),
      /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
        "button",
        {
          onClick: t,
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none",
          children: [
            /* @__PURE__ */ f.exports.jsx(Jp, { className: "dark:text-white", size: 20 }),
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
            /* @__PURE__ */ f.exports.jsx(Qp, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
          ]
        }
      ) })
    ] })
  ] });
}
function eM({
  navLinksItems: e,
  subLinksItems: t,
  sidebar: n,
  onCloseSideBar: r,
  Link: o
}) {
  const { profile: a } = n;
  return /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
    /* @__PURE__ */ f.exports.jsx(X7, { profile: a }),
    /* @__PURE__ */ f.exports.jsxs("aside", { className: "px-6", children: [
      e == null ? void 0 : e.map((s, i) => /* @__PURE__ */ f.exports.jsx(
        wx,
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
        P3,
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
        J7,
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
        Rp,
        {
          icon: i.icon,
          titleDescription: i.titleDescription,
          Link: o,
          item: i
        },
        c
      )),
      /* @__PURE__ */ f.exports.jsx(
        Rp,
        {
          icon: /* @__PURE__ */ f.exports.jsx(Jp, {}),
          titleDescription: "Options",
          actionToSet: s,
          Link: null,
          item: null
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      q7,
      {
        isOpen: a,
        onClose: () => s(!1),
        children: /* @__PURE__ */ f.exports.jsx(
          eM,
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
function tM() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = Qe(Gr);
  return /* @__PURE__ */ f.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ f.exports.jsxs(
        Gu,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ f.exports.jsx(Fi, { className: "h-8 w-[70px]", children: /* @__PURE__ */ f.exports.jsx(Zu, { placeholder: e.limit }) }),
            /* @__PURE__ */ f.exports.jsx(Vi, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ f.exports.jsx(Ui, { value: `${a}`, children: a }, a)) })
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
            /* @__PURE__ */ f.exports.jsx(Ql, { className: "h-4 w-4" })
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
            /* @__PURE__ */ f.exports.jsx(Eo, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const aR = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, nM = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), sR = {
  limit: 10,
  page: 1
}, Qc = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), iR = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], rM = () => /* @__PURE__ */ f.exports.jsx("span", { className: "mt-10 ml-5", children: "Sin Resultados" }), oM = ({
  data: e,
  columns: t
}) => {
  const n = (r, o) => r != null && r.render ? /* @__PURE__ */ f.exports.jsx("div", { children: r.render(o) }, Qc()) : /* @__PURE__ */ f.exports.jsx(Zt, { children: o[r.id] }, Qc());
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.map((r) => /* @__PURE__ */ f.exports.jsx(wv, { children: t.map((o) => n(o, r)) }, Qc())) });
}, Kx = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = Qe(Gr), [s, i] = X(
    o ? o.length : 0
  );
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.length ? /* @__PURE__ */ f.exports.jsx(
    oM,
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
  ) : /* @__PURE__ */ f.exports.jsx(rM, {}) });
}, aM = () => /* @__PURE__ */ f.exports.jsx(Kx, {}), sM = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), iM = () => /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ f.exports.jsx(sM, {}),
  /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] }), cM = () => {
  const { showFilters: e, setShowFilters: t } = Qe(Gr);
  return /* @__PURE__ */ f.exports.jsxs(
    Ue,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ f.exports.jsx(hx, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, lM = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = Qe(Gr), l = (u) => {
    c(u);
  };
  return /* @__PURE__ */ f.exports.jsxs(Vn, { children: [
    /* @__PURE__ */ f.exports.jsx(Un, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Ue, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", children: [
      n || /* @__PURE__ */ f.exports.jsx(vx, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(Za, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          St,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ f.exports.jsxs(
          St,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((u) => u.selected).map((u) => /* @__PURE__ */ f.exports.jsx(
          St,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: u.label
          },
          u.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ f.exports.jsx($n, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ f.exports.jsxs(zn, { children: [
      /* @__PURE__ */ f.exports.jsx(lr, { placeholder: r }),
      /* @__PURE__ */ f.exports.jsxs(Ja, { children: [
        /* @__PURE__ */ f.exports.jsx(ur, { children: "Sin Resultados" }),
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
                  className: F(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    u.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ f.exports.jsx(cn, { className: F("h-4 w-4") })
                }
              ),
              u.icon,
              /* @__PURE__ */ f.exports.jsx("span", { children: u.label })
            ]
          },
          u.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(Hi, {}),
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
}, uM = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ f.exports.jsxs(Vn, { children: [
  /* @__PURE__ */ f.exports.jsx(Un, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Ue, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
    /* @__PURE__ */ f.exports.jsx(Rs, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    o && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
      /* @__PURE__ */ f.exports.jsx(Za, { orientation: "vertical", className: "mx-2 h-4" }),
      /* @__PURE__ */ f.exports.jsx(
        St,
        {
          variant: "secondary",
          className: "rounded-sm px-1 font-normal",
          children: o
        }
      )
    ] })
  ] }) }),
  /* @__PURE__ */ f.exports.jsxs($n, { className: "w-fit p-4", align: "start", children: [
    /* @__PURE__ */ f.exports.jsxs(Nn, { htmlFor: e, children: [
      "Buscar ",
      n
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      Bu,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), dM = ({ form: e, onSubmit: t }) => {
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
        field: Uo(m[0]),
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
          uM,
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
      /* @__PURE__ */ f.exports.jsx(cM, {}),
      o && r && r.map((d) => /* @__PURE__ */ f.exports.jsx(
        lM,
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
            /* @__PURE__ */ f.exports.jsx(xi, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, fM = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i
  } = Qe(Gr), c = Uh({
    defaultValues: n.reduce((u, d) => (u[d.id] = "", u), {}),
    resolver: Sx(
      ui.object(
        n.reduce((u, d) => (u[d.id] = ui.string().optional(), u), {})
      )
    )
  }), l = async (u) => {
    var m;
    console.log({ data: u });
    const d = r(), p = [];
    (m = Object.entries(u)) == null || m.forEach((h) => {
      h[1] && p.push({
        field: Uo(h[0]),
        text: h[1]
      });
    }), console.log("queries formatted ", p), e({ queries: p, filters: d, limit: s, page: a });
  };
  return Q(() => i(c), [c]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ f.exports.jsx("div", {}) : /* @__PURE__ */ f.exports.jsx(Wh, { ...c, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ f.exports.jsx(dM, { form: c, onSubmit: l }) : /* @__PURE__ */ f.exports.jsx("div", {}),
    /* @__PURE__ */ f.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ f.exports.jsx(
      Ue,
      {
        type: "submit",
        onClick: c.handleSubmit(l),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ f.exports.jsx(Xl, {}) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(xx, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, pM = () => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), mM = () => /* @__PURE__ */ f.exports.jsx(Kx, {}), hM = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function cR(e) {
  const [t, n] = X([]), [r, o] = X([]), [a, s] = X([]), [i, c] = X(!1), [l, u] = X(e == null ? void 0 : e.error), [d, p] = X(e == null ? void 0 : e.loading), [m, h] = X(), [v, g] = X(
    (e == null ? void 0 : e.pagination) ?? hM
  ), [b, x] = X(
    (e == null ? void 0 : e.columns) || []
  ), { cardsColsNumber: y } = e, _ = fe(
    (A) => e.onSubmitTable({ ...A }),
    [e]
  ), $ = fe(
    (A) => {
      var M;
      g(A);
      const I = m.getValues(), V = [];
      (M = Object.entries(I)) == null || M.forEach((k) => {
        k[1] && V.push({
          field: nM(k[0]),
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
        limit: A.limit,
        page: A.page
      });
    },
    [r, _, m]
  ), E = fe(() => {
    $({ ...v, page: v.page + 1 });
  }, [v, $]), P = fe(() => {
    v.page > 1 && $({ ...v, page: v.page - 1 });
  }, [v, $]), D = () => r.map((A) => ({
    id: A.id,
    label: A.label,
    options: A.options.filter((I) => I.selected).map((I) => I.value)
  })).filter((A) => A.options.length > 0), R = (A) => {
    const I = r.find((V) => V.id === A);
    return I ? I.options.filter((Y) => Y.selected).map((Y) => Y.value) : [];
  }, K = (A, I, V) => {
    const Y = r.map((M) => M.id === A ? {
      ...M,
      options: M.options.map((k) => k.id === I ? { ...k, selected: V } : k)
    } : M);
    o(Y);
  }, G = () => r, W = (A) => {
    const I = r.map((V) => V.id === A ? {
      ...V,
      options: V.options.map((Y) => ({
        ...Y,
        selected: !1
      }))
    } : V);
    o(I);
  }, Z = (A) => $({ ...v, limit: A }), L = () => {
    const A = r.map((I) => ({
      ...I,
      options: I.options.map((V) => ({ ...V, selected: !1 }))
    }));
    o(A);
  };
  return Q(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), Q(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), Q(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), Q(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), Q(() => x((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), Q(() => {
    const A = b.filter((I) => I.isQuery).map((I) => ({
      id: I.id,
      label: I.label
    }));
    s(A);
  }, [b]), Q(() => {
    const A = (V) => (V == null ? void 0 : V.filters) && (V == null ? void 0 : V.filters.length), I = b.filter(A).map((V) => {
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
  }, [b]), Q(() => {
    e != null && e.filters && (e == null || e.filters.forEach((A) => {
      A != null && A.filters && b.forEach((I) => {
        A.id === I.id && o((V) => V.some((M) => M.id === A.id) ? V : [
          ...V,
          {
            id: I.id,
            label: I.label,
            options: A.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), Q(() => {
    g((A) => {
      var I, V;
      return {
        ...A,
        hasNextPage: (I = e == null ? void 0 : e.pagination) == null ? void 0 : I.hasNextPage,
        hasPrevPage: (V = e == null ? void 0 : e.pagination) == null ? void 0 : V.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ f.exports.jsx(
    Gr.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: E,
        prevPage: P,
        searchForm: m,
        updateLimit: Z,
        showFilters: i,
        resetFilters: L,
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
        getFiltersWithOptionsSelected: D,
        setSelectItem: e.setSelectItem,
        setShowFilters: (A) => c(A),
        setSearchForm: (A) => h(A)
      },
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ f.exports.jsx(fM, { onSubmitTable: _, loading: d }),
        /* @__PURE__ */ f.exports.jsxs(
          "div",
          {
            className: `overflow-clip grid grid-cols-1 ${y ? `${y === 2 ? "sm" : "lg"}:grid-cols-${y}` : "grid-cols-3"}  gap-6`,
            children: [
              d && /* @__PURE__ */ f.exports.jsx(iM, {}),
              !d && l && /* @__PURE__ */ f.exports.jsx(pM, {}),
              !d && !l && !t && /* @__PURE__ */ f.exports.jsx(mM, {}),
              !d && !l && t && /* @__PURE__ */ f.exports.jsx(aM, {})
            ]
          }
        ),
        !d && !l && t && /* @__PURE__ */ f.exports.jsx(tM, {})
      ] })
    }
  );
}
function vM(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ap(e) {
  return vM(e) || Array.isArray(e);
}
function gM() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function _d(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((s) => {
    const i = e[s], c = t[s];
    return typeof i == "function" ? `${i}` == `${c}` : !Ap(i) || !Ap(c) ? i === c : _d(i, c);
  });
}
function jp(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function bM(e, t) {
  if (e.length !== t.length)
    return !1;
  const n = jp(e), r = jp(t);
  return n.every((o, a) => {
    const s = r[a];
    return _d(o, s);
  });
}
function Cd(e) {
  return typeof e == "number";
}
function Hl(e) {
  return typeof e == "string";
}
function Sd(e) {
  return typeof e == "boolean";
}
function Ip(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function st(e) {
  return Math.abs(e);
}
function Ed(e) {
  return Math.sign(e);
}
function ks(e, t) {
  return st(e - t);
}
function xM(e, t) {
  if (e === 0 || t === 0 || st(e) <= st(t))
    return 0;
  const n = ks(st(e), st(t));
  return st(n / e);
}
function Ta(e) {
  return Oa(e).map(Number);
}
function sn(e) {
  return e[rs(e)];
}
function rs(e) {
  return Math.max(0, e.length - 1);
}
function Nd(e, t) {
  return t === rs(e);
}
function Lp(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Oa(e) {
  return Object.keys(e);
}
function Gx(e, t) {
  return [e, t].reduce((n, r) => (Oa(r).forEach((o) => {
    const a = n[o], s = r[o], i = Ip(a) && Ip(s);
    n[o] = i ? Gx(a, s) : s;
  }), n), {});
}
function Zx(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function yM(e, t) {
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
    return Hl(e) ? n[e](c) : e(t, c, l);
  }
  return {
    measure: s
  };
}
function wM(e, t) {
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
function qx(e, t, n) {
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
    return qx(e, i(), n);
  }
  const d = {
    get: i,
    set: c,
    add: l,
    clone: u
  };
  return d;
}
function $M(e) {
  const t = e === "rtl" ? -1 : 1;
  function n(o) {
    return o * t;
  }
  return {
    apply: n
  };
}
function ka() {
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
function _M(e, t, n, r, o, a, s, i, c, l, u, d, p, m, h, v, g, b, x, y) {
  const {
    cross: _
  } = e, $ = ["INPUT", "SELECT", "TEXTAREA"], E = {
    passive: !1
  }, P = ka(), D = ka(), R = Fr(50, 225).constrain(h.measure(20)), K = {
    mouse: 300,
    touch: 400
  }, G = {
    mouse: 500,
    touch: 600
  }, W = v ? 43 : 25;
  let Z = !1, L = 0, A = 0, I = !1, V = !1, Y = !1, M = !1;
  function k(U) {
    if (!y)
      return;
    function ge(Te) {
      (Sd(y) || y(U, Te)) && me(Te);
    }
    const $e = n;
    P.add($e, "dragstart", (Te) => Te.preventDefault(), E).add($e, "touchmove", () => {
    }, E).add($e, "touchend", () => {
    }).add($e, "touchstart", ge).add($e, "mousedown", ge).add($e, "touchcancel", se).add($e, "contextmenu", se).add($e, "click", ue, !0);
  }
  function B() {
    P.clear(), D.clear();
  }
  function q() {
    const U = M ? r : n;
    D.add(U, "touchmove", re, E).add(U, "touchend", se).add(U, "mousemove", re, E).add(U, "mouseup", se);
  }
  function oe(U) {
    const ge = U.nodeName || "";
    return $.includes(ge);
  }
  function te() {
    return (v ? G : K)[M ? "mouse" : "touch"];
  }
  function ve(U, ge) {
    const $e = p.add(Ed(U) * -1), Te = d.byDistance(U, !v).distance;
    return v || st(U) < R ? Te : b && ge ? Te * 0.5 : d.byIndex($e.get(), 0).distance;
  }
  function me(U) {
    const ge = Zx(U, o);
    M = ge, !(ge && U.button !== 0) && (oe(U.target) || (Y = v && ge && !U.buttons && Z, Z = ks(a.get(), i.get()) >= 2, I = !0, s.pointerDown(U), u.useFriction(0).useDuration(0), a.set(i), q(), L = s.readPoint(U), A = s.readPoint(U, _), m.emit("pointerDown")));
  }
  function re(U) {
    const ge = s.readPoint(U), $e = s.readPoint(U, _), Te = ks(ge, L), T = ks($e, A);
    if (!V && !M && (!U.cancelable || (V = Te > T, !V)))
      return se(U);
    const z = s.pointerMove(U);
    Te > g && (Y = !0), u.useFriction(0.3).useDuration(1), c.start(), a.add(t.apply(z)), U.preventDefault();
  }
  function se(U) {
    const $e = d.byDistance(0, !1).index !== p.get(), Te = s.pointerUp(U) * te(), T = ve(t.apply(Te), $e), z = xM(Te, T), J = W - 10 * z, pe = x + z / 50;
    V = !1, I = !1, D.clear(), u.useDuration(J).useFriction(pe), l.distance(T, !v), M = !1, m.emit("pointerUp");
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
function CM(e, t) {
  let r, o;
  function a(d) {
    return d.timeStamp;
  }
  function s(d, p) {
    const h = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (Zx(d, t) ? d : d.touches[0])[h];
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
function SM() {
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
function EM(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function NM(e, t, n, r, o, a, s) {
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
        const _ = y.target === e, $ = r.indexOf(y.target), E = _ ? c : l[$], P = d(_ ? e : r[$]);
        if (st(P - E) >= 0.5) {
          n.requestAnimationFrame(() => {
            v.reInit(), t.emit("resize");
          });
          break;
        }
      }
    }
    i = new ResizeObserver((x) => {
      u || (Sd(a) || a(v, x)) && g(x);
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
function PM(e, t, n, r, o) {
  let a = 0, s = 0, i = r, c = o, l = e.get(), u = 0;
  function d() {
    const $ = n.get() - e.get(), E = !i;
    let P = 0;
    return E ? (a = 0, e.set(n), P = $) : (a += $ / i, a *= c, l += a, e.add(a), P = l - u), s = Ed(P), u = l, _;
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
    return x(r);
  }
  function b() {
    return y(o);
  }
  function x($) {
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
    useBaseFriction: b,
    useBaseDuration: g,
    useFriction: y,
    useDuration: x
  };
  return _;
}
function TM(e, t, n, r, o) {
  const a = o.measure(10), s = o.measure(50), i = Fr(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function u(m) {
    if (!l())
      return;
    const h = e.reachedMin(t.get()) ? "min" : "max", v = st(e[h] - t.get()), g = n.get() - t.get(), b = i.constrain(v / s);
    n.subtract(g * b), !m && st(g) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function d(m) {
    c = !m;
  }
  return {
    constrain: u,
    toggleActive: d
  };
}
function OM(e, t, n, r, o) {
  const a = Fr(-t + e, 0), s = u(), i = l(), c = d();
  function l() {
    const m = s[0], h = sn(s), v = s.lastIndexOf(m), g = s.indexOf(h) + 1;
    return Fr(v, g);
  }
  function u() {
    return n.map((m, h) => {
      const v = !h, g = Nd(n, h);
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
function kM(e, t, n) {
  const r = t[0], o = n ? r - e : sn(t);
  return {
    limit: Fr(o, r)
  };
}
function MM(e, t, n, r) {
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
    r.forEach((h) => h.add(m));
  }
  return {
    loop: u
  };
}
function DM(e) {
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
function RM(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: s
  } = e, {
    groupSlides: i
  } = o, c = d().map(t.measure), l = p(), u = m();
  function d() {
    return i(r).map((v) => sn(v)[s] - v[0][a]).map(st);
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
      const b = !v, x = Nd(g, v);
      if (b) {
        const y = sn(g[0]) + 1;
        return Lp(y);
      }
      if (x) {
        const y = rs(a) - sn(g)[0] + 1;
        return Lp(y, sn(g)[0]);
      }
      return h;
    });
  }
  return {
    slideRegistry: l
  };
}
function jM(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: s,
    constrain: i
  } = r;
  function c(h) {
    return h.concat().sort((v, g) => st(v) - st(g))[0];
  }
  function l(h) {
    const v = e ? s(h) : i(h), g = t.map((x) => x - v).map((x) => u(x, 0)).map((x, y) => ({
      diff: x,
      index: y
    })).sort((x, y) => st(x.diff) - st(y.diff)), {
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
    const b = g.filter((x) => Ed(x) === v);
    return b.length ? c(b) : sn(g) - n;
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
    const _ = t[b] - x, $ = h + u(_, 0);
    return {
      index: b,
      distance: $
    };
  }
  return {
    byDistance: p,
    byIndex: d,
    shortcut: u
  };
}
function IM(e, t, n, r, o, a) {
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
function LM(e, t, n, r, o, a) {
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
      Cd(g) && (o.useDuration(0), r.index(g, 0));
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
function Ms(e) {
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
    return Cd(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function Xx(e, t, n) {
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
function FM(e, t, n, r, o, a, s, i, c, l) {
  const d = Ta(a), p = Ta(a).reverse(), m = x().concat(y());
  function h(D, R) {
    return D.reduce((K, G) => K - a[G], R);
  }
  function v(D, R) {
    return D.reduce((K, G) => h(K, R) > 0 ? K.concat([G]) : K, []);
  }
  function g(D) {
    return s.map((R, K) => ({
      start: R - o[K] + 0.5 + D,
      end: R + n - 0.5 + D
    }));
  }
  function b(D, R, K) {
    const G = g(R);
    return D.map((W) => {
      const Z = K ? 0 : -r, L = K ? r : 0, A = K ? "end" : "start", I = G[W][A];
      return {
        index: W,
        loopPoint: I,
        slideLocation: Ms(-1),
        translate: Xx(e, t, l[W]),
        target: () => c.get() > I ? Z : L
      };
    });
  }
  function x() {
    const D = i[0], R = v(p, D);
    return b(R, r, !1);
  }
  function y() {
    const D = n - i[0] - 1, R = v(d, D);
    return b(R, -r, !0);
  }
  function _() {
    return m.every(({
      index: D
    }) => {
      const R = d.filter((K) => K !== D);
      return h(R, n) <= 0.1;
    });
  }
  function $() {
    m.forEach((D) => {
      const {
        target: R,
        translate: K,
        slideLocation: G
      } = D, W = R();
      W !== G.get() && (K.to(W), G.set(W));
    });
  }
  function E() {
    m.forEach((D) => D.translate.clear());
  }
  return {
    canLoop: _,
    clear: E,
    loop: $,
    loopPoints: m
  };
}
function VM(e, t, n) {
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
      o || (Sd(n) || n(c, u)) && l(u);
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
function UM(e, t, n, r) {
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
    return Oa(o).reduce((v, g) => {
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
function zM(e, t, n, r, o, a) {
  const {
    measureSize: s,
    startEdge: i,
    endEdge: c
  } = e, l = n[0] && o, u = h(), d = v(), p = n.map(s), m = g();
  function h() {
    if (!l)
      return 0;
    const x = n[0];
    return st(t[i] - x[i]);
  }
  function v() {
    if (!l)
      return 0;
    const x = a.getComputedStyle(sn(r));
    return parseFloat(x.getPropertyValue(`margin-${c}`));
  }
  function g() {
    return n.map((x, y, _) => {
      const $ = !y, E = Nd(_, y);
      return $ ? p[y] + u : E ? p[y] + d : _[y + 1][i] - x[i];
    }).map(st);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: m,
    startGap: u,
    endGap: d
  };
}
function WM(e, t, n, r, o, a, s, i, c, l) {
  const {
    startEdge: u,
    endEdge: d
  } = e, p = Cd(r);
  function m(b, x) {
    return Ta(b).filter((y) => y % x === 0).map((y) => b.slice(y, y + x));
  }
  function h(b) {
    return b.length ? Ta(b).reduce((x, y) => {
      const _ = sn(x) || 0, $ = _ === 0, E = y === rs(b), P = a[u] - s[_][u], D = a[u] - s[y][d], R = !o && $ ? t.apply(i) : 0, K = !o && E ? t.apply(c) : 0;
      return st(D - K - (P + R)) > n + l && x.push(y), E && x.push(b.length), x;
    }, []).map((x, y, _) => {
      const $ = Math.max(_[y - 1] || 0);
      return b.slice($, x);
    }) : [];
  }
  function v(b) {
    return p ? m(b, r) : h(b);
  }
  return {
    groupSlides: v
  };
}
function BM(e, t, n, r, o, a, s, i) {
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
    watchSlides: $,
    watchDrag: E
  } = a, P = 2, D = SM(), R = D.measure(t), K = n.map(D.measure), G = $M(u), W = wM(l, u), Z = W.measureSize(R), L = EM(Z), A = yM(c, Z), I = !p && !!y, V = p || !!y, {
    slideSizes: Y,
    slideSizesWithGaps: M,
    startGap: k,
    endGap: B
  } = zM(W, R, K, n, V, o), q = WM(W, G, Z, b, p, R, K, k, B, P), {
    snaps: oe,
    snapsAligned: te
  } = RM(W, A, R, K, q), ve = -sn(oe) + sn(M), {
    snapsContained: me,
    scrollContainLimit: re
  } = OM(Z, ve, te, y, P), se = I ? me : te, {
    limit: ue
  } = kM(ve, se, p), ne = qx(rs(se), d, p), he = ne.clone(), U = Ta(n), ge = ({
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
    scrollLooper: Nt,
    slideLooper: wr,
    dragHandler: zt,
    animation: qn,
    eventHandler: Zr,
    options: {
      loop: zo
    }
  }, os) => {
    const Pn = Ie.velocity(), qr = Ie.settled();
    qr && !zt.pointerDown() && (qn.stop(), Zr.emit("settle")), qr || Zr.emit("scroll"), nt.set(tt.get() - Pn + Pn * os), zo && (Nt.loop(Ie.direction()), wr.loop()), Ge.to(nt.get());
  }, Te = {
    start: () => i.start(Ee),
    stop: () => i.stop(Ee),
    update: () => ge(Ee),
    render: (Ie) => $e(Ee, Ie)
  }, T = 0.68, z = se[ne.get()], J = Ms(z), pe = Ms(z), le = Ms(z), ae = PM(J, pe, le, m, T), _e = jM(p, se, ve, ue, le), He = IM(Te, ne, he, _e, le, s), We = DM(ue), jt = ka(), Zn = UM(t, n, s, g), {
    slideRegistry: It
  } = AM(I, y, se, re, q, U), Ne = LM(e, n, It, He, ae, jt), Ee = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: s,
    containerRect: R,
    slideRects: K,
    animation: Te,
    axis: W,
    direction: G,
    dragHandler: _M(W, G, e, r, o, le, CM(W, o), J, Te, He, ae, _e, ne, s, L, h, v, x, T, E),
    eventStore: jt,
    percentOfView: L,
    index: ne,
    indexPrevious: he,
    limit: ue,
    location: J,
    offsetLocation: pe,
    options: a,
    resizeHandler: NM(t, s, o, n, W, _, D),
    scrollBody: ae,
    scrollBounds: TM(ue, J, le, ae, L),
    scrollLooper: MM(ve, ue, pe, [J, pe, le]),
    scrollProgress: We,
    scrollSnapList: se.map(We.get),
    scrollSnaps: se,
    scrollTarget: _e,
    scrollTo: He,
    slideLooper: FM(W, G, Z, ve, Y, M, oe, se, pe, n),
    slideFocus: Ne,
    slidesHandler: VM(t, s, $),
    slidesInView: Zn,
    slideIndexes: U,
    slideRegistry: It,
    slidesToScroll: q,
    target: le,
    translate: Xx(W, G, t)
  };
  return Ee;
}
function HM(e) {
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
function YM() {
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
const KM = {
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
function GM(e) {
  function t(a, s) {
    return Gx(a, s || {});
  }
  function n(a) {
    const s = a.breakpoints || {}, i = Oa(s).filter((c) => e.matchMedia(c).matches).map((c) => s[c]).reduce((c, l) => t(c, l), {});
    return t(a, i);
  }
  function r(a) {
    return a.map((s) => Oa(s.breakpoints || {})).reduce((s, i) => s.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function ZM(e) {
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
function _o(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = GM(o), s = ZM(a), i = ka(), c = ka(), l = YM(), {
    animationRealms: u
  } = _o, {
    mergeOptions: d,
    optionsAtMedia: p,
    optionsMediaQueries: m
  } = a, {
    on: h,
    off: v,
    emit: g
  } = l, b = Z;
  let x = !1, y, _ = d(KM, _o.globalOptions), $ = d(_), E = [], P, D, R;
  function K() {
    const {
      container: ge,
      slides: $e
    } = $;
    D = (Hl(ge) ? e.querySelector(ge) : ge) || e.children[0];
    const T = Hl($e) ? D.querySelectorAll($e) : $e;
    R = [].slice.call(T || D.children);
  }
  function G(ge, $e) {
    const Te = BM(e, D, R, r, o, ge, l, $e);
    if (ge.loop && !Te.slideLooper.canLoop()) {
      const T = Object.assign({}, ge, {
        loop: !1
      });
      return G(T, $e);
    }
    return Te;
  }
  function W(ge, $e) {
    if (x)
      return;
    const Te = u.find((z) => z.window === o), T = Te || HM(o);
    Te || u.push(T), _ = d(_, ge), $ = p(_), E = $e || E, K(), y = G($, T), m([_, ...E.map(({
      options: z
    }) => z)]).forEach((z) => i.add(z, "change", Z)), $.active && (y.translate.to(y.location.get()), y.slidesInView.init(), y.slideFocus.init(), y.eventHandler.init(U), y.resizeHandler.init(U), y.slidesHandler.init(U), c.add(r, "visibilitychange", () => {
      r.hidden && T.reset();
    }), y.options.loop && y.slideLooper.loop(), D.offsetParent && R.length && y.dragHandler.init(U), P = s.init(U, E));
  }
  function Z(ge, $e) {
    const Te = oe();
    L(), W(d({
      startIndex: Te
    }, ge), $e), l.emit("reInit");
  }
  function L() {
    y.dragHandler.destroy(), y.animation.stop(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), y.slidesInView.destroy(), s.destroy(), i.clear(), c.clear();
  }
  function A() {
    x || (x = !0, i.clear(), L(), l.emit("destroy"));
  }
  function I(ge, $e, Te) {
    !$.active || x || (y.scrollBody.useBaseFriction().useDuration($e === !0 ? 0 : $.duration), y.scrollTo.index(ge, Te || 0));
  }
  function V(ge) {
    const $e = y.index.add(1).get();
    I($e, ge, -1);
  }
  function Y(ge) {
    const $e = y.index.add(-1).get();
    I($e, ge, 1);
  }
  function M() {
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
    return P;
  }
  function se() {
    return y;
  }
  function ue() {
    return e;
  }
  function ne() {
    return D;
  }
  function he() {
    return R;
  }
  const U = {
    canScrollNext: M,
    canScrollPrev: k,
    containerNode: ne,
    internalEngine: se,
    destroy: A,
    off: v,
    on: h,
    emit: g,
    plugins: re,
    previousScrollSnap: te,
    reInit: b,
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
_o.animationRealms = [];
_o.globalOptions = void 0;
function Pd(e = {}, t = []) {
  const n = H(e), r = H(t), [o, a] = X(), [s, i] = X(), c = fe(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return Q(() => {
    if (gM() && s) {
      _o.globalOptions = Pd.globalOptions;
      const l = _o(s, n.current, r.current);
      return a(l), () => l.destroy();
    } else
      a(void 0);
  }, [s, a]), Q(() => {
    _d(n.current, e) || (n.current = e, c());
  }, [e, c]), Q(() => {
    bM(r.current, t) || (r.current = t, c());
  }, [t, c]), [i, o];
}
Pd.globalOptions = void 0;
const Qx = C.createContext(null);
function ac() {
  const e = C.useContext(Qx);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const qM = C.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: a,
    ...s
  }, i) => {
    const [c, l] = Pd(
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
      Qx.Provider,
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
            className: F("relative", o),
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
qM.displayName = "Carousel";
const XM = C.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = ac();
  return /* @__PURE__ */ f.exports.jsx("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ f.exports.jsx(
    "div",
    {
      ref: n,
      className: F(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
XM.displayName = "CarouselContent";
const QM = C.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = ac();
  return /* @__PURE__ */ f.exports.jsx(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: F(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
QM.displayName = "CarouselItem";
const JM = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollPrev: s, canScrollPrev: i } = ac();
  return /* @__PURE__ */ f.exports.jsxs(
    Ue,
    {
      ref: o,
      variant: t,
      size: n,
      className: F(
        "absolute  h-8 w-8 rounded-full",
        a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ f.exports.jsx(ay, { className: "h-4 w-4" }),
        /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
JM.displayName = "CarouselPrevious";
const eD = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollNext: s, canScrollNext: i } = ac();
  return /* @__PURE__ */ f.exports.jsxs(
    Ue,
    {
      ref: o,
      variant: t,
      size: n,
      className: F(
        "absolute h-8 w-8 rounded-full",
        a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ f.exports.jsx(sy, { className: "h-4 w-4" }),
        /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
eD.displayName = "CarouselNext";
var Jx = S.createContext({ drawerRef: { current: null }, overlayRef: { current: null }, scaleBackground: () => {
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
} }), Td = () => S.useContext(Jx);
function tD(e, { insertAt: t } = {}) {
  if (!e || typeof document > "u")
    return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
tD(`[vaul-drawer]{touch-action:none;transform:translate3d(0,100%,0);transition:transform .5s cubic-bezier(.32,.72,0,1)}.vaul-dragging .vaul-scrollable{overflow-y:hidden!important}[vaul-drawer][vaul-drawer-visible=true]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;top:100%;background:inherit;background-color:inherit;left:0;right:0;height:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);
var nD = typeof window < "u" ? Ma : Q;
function Yl(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function rD() {
  return Od(/^Mac/);
}
function oD() {
  return Od(/^iPhone/);
}
function aD() {
  return Od(/^iPad/) || rD() && navigator.maxTouchPoints > 1;
}
function e0() {
  return oD() || aD();
}
function Od(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
var Jc = typeof document < "u" && window.visualViewport;
function Fp(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function t0(e) {
  for (Fp(e) && (e = e.parentElement); e && !Fp(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
var sD = /* @__PURE__ */ new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]), $s = 0, el;
function iD(e = {}) {
  let { isDisabled: t } = e;
  nD(() => {
    if (!t)
      return $s++, $s === 1 && (e0() ? el = lD() : el = cD()), () => {
        $s--, $s === 0 && el();
      };
  }, [t]);
}
function cD() {
  return Yl(pi(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), pi(document.documentElement, "overflow", "hidden"));
}
function lD() {
  let e, t = 0, n = (d) => {
    e = t0(d.target), !(e === document.documentElement && e === document.body) && (t = d.changedTouches[0].pageY);
  }, r = (d) => {
    if (!e || e === document.documentElement || e === document.body) {
      d.preventDefault();
      return;
    }
    let p = d.changedTouches[0].pageY, m = e.scrollTop, h = e.scrollHeight - e.clientHeight;
    h !== 0 && ((m <= 0 && p > t || m >= h && p < t) && d.preventDefault(), t = p);
  }, o = (d) => {
    let p = d.target;
    mi(p) && p !== document.activeElement && (d.preventDefault(), p.style.transform = "translateY(-2000px)", p.focus(), requestAnimationFrame(() => {
      p.style.transform = "";
    }));
  }, a = (d) => {
    let p = d.target;
    mi(p) && (p.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      p.style.transform = "", Jc && (Jc.height < window.innerHeight ? requestAnimationFrame(() => {
        Vp(p);
      }) : Jc.addEventListener("resize", () => Vp(p), { once: !0 }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, c = window.pageYOffset, l = Yl(pi(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), pi(document.documentElement, "overflow", "hidden"));
  window.scrollTo(0, 0);
  let u = Yl(Jo(document, "touchstart", n, { passive: !1, capture: !0 }), Jo(document, "touchmove", r, { passive: !1, capture: !0 }), Jo(document, "touchend", o, { passive: !1, capture: !0 }), Jo(document, "focus", a, !0), Jo(window, "scroll", s));
  return () => {
    l(), u(), window.scrollTo(i, c);
  };
}
function pi(e, t, n) {
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
function Vp(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = t0(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom, s = n.getBoundingClientRect().bottom;
      a > s && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function mi(e) {
  return e instanceof HTMLInputElement && !sD.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function uD(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function dD(...e) {
  return (t) => e.forEach((n) => uD(n, t));
}
function n0(...e) {
  return C.useCallback(dD(...e), e);
}
var er = null;
function fD({ isOpen: e, modal: t, nested: n, hasBeenOpened: r }) {
  let [o, a] = S.useState(typeof window < "u" ? window.location.href : ""), s = S.useRef(0);
  function i() {
    if (er === null && e) {
      er = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left, height: document.body.style.height };
      let { scrollX: l, innerHeight: u } = window;
      document.body.style.setProperty("position", "fixed", "important"), document.body.style.top = `${-s.current}px`, document.body.style.left = `${-l}px`, document.body.style.right = "0px", document.body.style.height = "auto", setTimeout(() => requestAnimationFrame(() => {
        let d = u - window.innerHeight;
        d && s.current >= u && (document.body.style.top = `${-(s.current + d)}px`);
      }), 300);
    }
  }
  function c() {
    if (er !== null) {
      let l = -parseInt(document.body.style.top, 10), u = -parseInt(document.body.style.left, 10);
      document.body.style.position = er.position, document.body.style.top = er.top, document.body.style.left = er.left, document.body.style.height = er.height, document.body.style.right = "unset", requestAnimationFrame(() => {
        if (o !== window.location.href) {
          a(window.location.href);
          return;
        }
        window.scrollTo(u, l);
      }), er = null;
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
var r0 = /* @__PURE__ */ new WeakMap();
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
  }), !n && r0.set(e, r);
}
function _s(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  let n = r0.get(e);
  n && (t ? e.style[t] = n[t] : Object.entries(n).forEach(([r, o]) => {
    e.style[r] = o;
  }));
}
function Cs(e) {
  let t = window.getComputedStyle(e), n = t.transform || t.webkitTransform || t.mozTransform, r = n.match(/^matrix3d\((.+)\)$/);
  return r ? parseFloat(r[1].split(", ")[13]) : (r = n.match(/^matrix\((.+)\)$/), r ? parseFloat(r[1].split(", ")[5]) : null);
}
function pD(e) {
  return 8 * (Math.log(e + 1) - 2);
}
var et = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] }, o0 = 0.4;
function a0(e) {
  let t = S.useRef(e);
  return S.useEffect(() => {
    t.current = e;
  }), S.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function mD({ defaultProp: e, onChange: t }) {
  let n = S.useState(e), [r] = n, o = S.useRef(r), a = a0(t);
  return S.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [r, o, a]), n;
}
function hD({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  let [r, o] = mD({ defaultProp: t, onChange: n }), a = e !== void 0, s = a ? e : r, i = a0(n), c = S.useCallback((l) => {
    if (a) {
      let u = typeof l == "function" ? l(e) : l;
      u !== e && i(u);
    } else
      o(l);
  }, [a, e, o, i]);
  return [s, c];
}
function vD({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: s }) {
  let [i, c] = hD({ prop: e, defaultProp: n == null ? void 0 : n[0], onChange: t }), l = S.useMemo(() => i === (n == null ? void 0 : n[n.length - 1]), [n, i]), u = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === i || !n, d = S.useMemo(() => {
    var x;
    return (x = n == null ? void 0 : n.findIndex((y) => y === i)) != null ? x : null;
  }, [n, i]), p = S.useMemo(() => {
    var x;
    return (x = n == null ? void 0 : n.map((y) => {
      let _ = typeof window < "u", $ = typeof y == "string", E = 0;
      $ && (E = parseInt(y, 10));
      let P = $ ? E : _ ? y * window.innerHeight : 0;
      return _ ? window.innerHeight - P : P;
    })) != null ? x : [];
  }, [n]), m = S.useMemo(() => d !== null ? p == null ? void 0 : p[d] : null, [p, d]), h = S.useCallback((x) => {
    var y;
    let _ = (y = p == null ? void 0 : p.findIndex(($) => $ === x)) != null ? y : null;
    s(_), ct(r.current, { transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, transform: `translate3d(0, ${x}px, 0)` }), p && _ !== p.length - 1 && _ !== a ? ct(o.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, opacity: "0" }) : ct(o.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, opacity: "1" }), c(_ !== null ? n == null ? void 0 : n[_] : null);
  }, [r.current, n, p, a, o, c]);
  S.useEffect(() => {
    var x;
    if (e) {
      let y = (x = n == null ? void 0 : n.findIndex((_) => _ === e)) != null ? x : null;
      p && y && typeof p[y] == "number" && h(p[y]);
    }
  }, [e, n, p, h]);
  function v({ draggedDistance: x, closeDrawer: y, velocity: _, dismissible: $ }) {
    if (a === void 0)
      return;
    let E = m - x, P = d === a - 1, D = d === 0, R = x > 0;
    if (P && ct(o.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), _ > 2 && !R) {
      $ ? y() : h(p[0]);
      return;
    }
    if (_ > 2 && R && p && n) {
      h(p[n.length - 1]);
      return;
    }
    let K = p == null ? void 0 : p.reduce((G, W) => typeof G != "number" || typeof W != "number" ? G : Math.abs(W - E) < Math.abs(G - E) ? W : G);
    if (_ > o0 && Math.abs(x) < window.innerHeight * 0.4) {
      let G = R ? 1 : -1;
      if (G > 0 && l) {
        h(p[n.length - 1]);
        return;
      }
      if (D && G < 0 && $ && y(), d === null)
        return;
      h(p[d + G]);
      return;
    }
    h(K);
  }
  function g({ draggedDistance: x }) {
    if (m === null)
      return;
    let y = m - x;
    ct(r.current, { transform: `translate3d(0, ${y}px, 0)` });
  }
  function b(x, y) {
    if (!n || typeof d != "number" || !p || a === void 0)
      return null;
    let _ = d === a - 1;
    if (d >= a && y)
      return 0;
    if (_ && !y)
      return 1;
    if (!u && !_)
      return null;
    let $ = _ ? d + 1 : d - 1, E = _ ? p[$] - p[$ - 1] : p[$ + 1] - p[$], P = x / Math.abs(E);
    return _ ? 1 - P : P;
  }
  return { isLastSnapPoint: l, activeSnapPoint: i, shouldFade: u, getPercentageDragged: b, setActiveSnapPoint: c, activeSnapPointIndex: d, onRelease: v, onDrag: g, snapPointsOffset: p };
}
var gD = 0.25, bD = 100, Up = 8, $r = 16, zp = 26, Wp = "vaul-dragging";
function s0({ open: e, onOpenChange: t, children: n, shouldScaleBackground: r, onDrag: o, onRelease: a, snapPoints: s, nested: i, closeThreshold: c = gD, scrollLockTimeout: l = bD, dismissible: u = !0, fadeFromIndex: d = s && s.length - 1, activeSnapPoint: p, setActiveSnapPoint: m, fixed: h, modal: v = !0, onClose: g }) {
  var b;
  let [x = !1, y] = S.useState(!1), [_, $] = S.useState(!1), [E, P] = S.useState(!1), [D, R] = S.useState(!1), [K, G] = S.useState(!1), [W, Z] = S.useState(!1), L = S.useRef(null), A = S.useRef(null), I = S.useRef(null), V = S.useRef(null), Y = S.useRef(null), M = S.useRef(!1), k = S.useRef(null), B = S.useRef(0), q = S.useRef(!1), oe = S.useRef(0), te = S.useRef(null), ve = S.useRef(((b = te.current) == null ? void 0 : b.getBoundingClientRect().height) || 0), me = S.useRef(0), re = S.useCallback((Ne) => {
    s && Ne === U.length - 1 && (A.current = new Date());
  }, []), { activeSnapPoint: se, activeSnapPointIndex: ue, setActiveSnapPoint: ne, onRelease: he, snapPointsOffset: U, onDrag: ge, shouldFade: $e, getPercentageDragged: Te } = vD({ snapPoints: s, activeSnapPointProp: p, setActiveSnapPointProp: m, drawerRef: te, fadeFromIndex: d, overlayRef: L, onSnapPointChange: re });
  iD({ isDisabled: !x || K || !v || W || !_ });
  let { restorePositionSetting: T } = fD({ isOpen: x, modal: v, nested: i, hasBeenOpened: _ });
  function z() {
    return (window.innerWidth - zp) / window.innerWidth;
  }
  function J(Ne) {
    var Ee;
    !u && !s || te.current && !te.current.contains(Ne.target) || (ve.current = ((Ee = te.current) == null ? void 0 : Ee.getBoundingClientRect().height) || 0, G(!0), I.current = new Date(), e0() && window.addEventListener("touchend", () => M.current = !1, { once: !0 }), Ne.target.setPointerCapture(Ne.pointerId), B.current = Ne.screenY);
  }
  function pe(Ne, Ee) {
    var Ie;
    let Ge = Ne, tt = (Ie = window.getSelection()) == null ? void 0 : Ie.toString(), nt = te.current ? Cs(te.current) : null, Nt = new Date();
    if (A.current && Nt.getTime() - A.current.getTime() < 500)
      return !1;
    if (nt > 0)
      return !0;
    if (tt && tt.length > 0)
      return !1;
    if (Y.current && Nt.getTime() - Y.current.getTime() < l && nt === 0 || Ee)
      return Y.current = Nt, !1;
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
      if (s && ue === 0 && !u || !M.current && !pe(Ne.target, Ie))
        return;
      if (te.current.classList.add(Wp), M.current = !0, ct(te.current, { transition: "none" }), ct(L.current, { transition: "none" }), s && ge({ draggedDistance: Ee }), Ie && !s) {
        let zt = pD(Ee);
        ct(te.current, { transform: `translate3d(0, ${Math.min(zt * -1, 0)}px, 0)` });
        return;
      }
      let Ge = Math.abs(Ee), tt = document.querySelector("[vaul-drawer-wrapper]"), nt = Ge / ve.current, Nt = Te(Ge, Ie);
      Nt !== null && (nt = Nt);
      let wr = 1 - nt;
      if (($e || d && ue === d - 1) && (o == null || o(Ne, nt), ct(L.current, { opacity: `${wr}`, transition: "none" }, !0)), tt && L.current && r) {
        let zt = Math.min(z() + nt * (1 - z()), 1), qn = 8 - nt * 8, Zr = Math.max(0, 14 - nt * 14);
        ct(tt, { borderRadius: `${qn}px`, transform: `scale(${zt}) translate3d(0, ${Zr}px, 0)`, transition: "none" }, !0);
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
      if (mi(Ge) || q.current) {
        let tt = ((Ie = window.visualViewport) == null ? void 0 : Ie.height) || 0, nt = window.innerHeight - tt, Nt = te.current.getBoundingClientRect().height || 0;
        me.current || (me.current = Nt);
        let wr = te.current.getBoundingClientRect().top;
        if (Math.abs(oe.current - nt) > 60 && (q.current = !q.current), s && s.length > 0 && U && ue) {
          let zt = U[ue] || 0;
          nt += zt;
        }
        if (oe.current = nt, Nt > tt || q.current) {
          let zt = te.current.getBoundingClientRect().height, qn = zt;
          zt > tt && (qn = tt - zp), h ? te.current.style.height = `${zt - Math.max(nt, 0)}px` : te.current.style.height = `${Math.max(qn, tt - wr)}px`;
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
    te.current && (g == null || g(), ct(te.current, { transform: "translate3d(0, 100%, 0)", transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), ct(L.current, { opacity: "0", transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), We(!1), setTimeout(() => {
      P(!1), y(!1);
    }, 300), setTimeout(() => {
      s && ne(s[0]);
    }, et.DURATION * 1e3));
  }
  S.useEffect(() => {
    if (!x && r) {
      let Ne = setTimeout(() => {
        _s(document.body);
      }, 200);
      return () => clearTimeout(Ne);
    }
  }, [x, r]), S.useEffect(() => {
    e ? (y(!0), $(!0)) : ae();
  }, [e]), S.useEffect(() => {
    D && (t == null || t(x));
  }, [x]), S.useEffect(() => {
    R(!0);
  }, []);
  function _e() {
    if (!te.current)
      return;
    let Ne = document.querySelector("[vaul-drawer-wrapper]"), Ee = Cs(te.current);
    ct(te.current, { transform: "translate3d(0, 0, 0)", transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})` }), ct(L.current, { transition: `opacity ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, opacity: "1" }), r && Ee && Ee > 0 && x && ct(Ne, { borderRadius: `${Up}px`, overflow: "hidden", transform: `scale(${z()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top", transitionProperty: "transform, border-radius", transitionDuration: `${et.DURATION}s`, transitionTimingFunction: `cubic-bezier(${et.EASE.join(",")})` }, !0);
  }
  function He(Ne) {
    var Ee;
    if (!K || !te.current)
      return;
    M.current && mi(Ne.target) && Ne.target.blur(), te.current.classList.remove(Wp), M.current = !1, G(!1), V.current = new Date();
    let Ie = Cs(te.current);
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
    if (nt > o0) {
      ae(), a == null || a(Ne, !1);
      return;
    }
    let Nt = Math.min((Ee = te.current.getBoundingClientRect().height) != null ? Ee : 0, window.innerHeight);
    if (Ie >= Nt * c) {
      ae(), a == null || a(Ne, !1);
      return;
    }
    a == null || a(Ne, !0), _e();
  }
  S.useEffect(() => {
    x && (A.current = new Date(), We(!0));
  }, [x]), S.useEffect(() => {
    E && te.current.querySelectorAll("*").forEach((Ne) => {
      let Ee = Ne;
      (Ee.scrollHeight > Ee.clientHeight || Ee.scrollWidth > Ee.clientWidth) && Ee.classList.add("vaul-scrollable");
    });
  }, [E]);
  function We(Ne) {
    let Ee = document.querySelector("[vaul-drawer-wrapper]");
    !Ee || !r || (Ne ? (ct(document.body, { background: "black" }, !0), ct(Ee, { borderRadius: `${Up}px`, overflow: "hidden", transform: `scale(${z()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top", transitionProperty: "transform, border-radius", transitionDuration: `${et.DURATION}s`, transitionTimingFunction: `cubic-bezier(${et.EASE.join(",")})` })) : (_s(Ee, "overflow"), _s(Ee, "transform"), _s(Ee, "borderRadius"), ct(Ee, { transitionProperty: "transform, border-radius", transitionDuration: `${et.DURATION}s`, transitionTimingFunction: `cubic-bezier(${et.EASE.join(",")})` })));
  }
  function jt(Ne) {
    let Ee = Ne ? (window.innerWidth - $r) / window.innerWidth : 1, Ie = Ne ? -$r : 0;
    k.current && window.clearTimeout(k.current), ct(te.current, { transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, transform: `scale(${Ee}) translate3d(0, ${Ie}px, 0)` }), !Ne && te.current && (k.current = setTimeout(() => {
      ct(te.current, { transition: "none", transform: `translate3d(0, ${Cs(te.current)}px, 0)` });
    }, 500));
  }
  function Zn(Ne, Ee) {
    if (Ee < 0)
      return;
    let Ie = (window.innerWidth - $r) / window.innerWidth, Ge = Ie + Ee * (1 - Ie), tt = -$r + Ee * $r;
    ct(te.current, { transform: `scale(${Ge}) translate3d(0, ${tt}px, 0)`, transition: "none" });
  }
  function It(Ne, Ee) {
    let Ie = Ee ? (window.innerWidth - $r) / window.innerWidth : 1, Ge = Ee ? -$r : 0;
    Ee && ct(te.current, { transition: `transform ${et.DURATION}s cubic-bezier(${et.EASE.join(",")})`, transform: `scale(${Ie}) translate3d(0, ${Ge}px, 0)` });
  }
  return S.createElement(Ri, { modal: v, onOpenChange: (Ne) => {
    if (e !== void 0) {
      t == null || t(Ne);
      return;
    }
    Ne ? ($(!0), y(Ne)) : ae();
  }, open: x }, S.createElement(Jx.Provider, { value: { visible: E, activeSnapPoint: se, snapPoints: s, setActiveSnapPoint: ne, drawerRef: te, overlayRef: L, scaleBackground: We, onOpenChange: t, onPress: J, setVisible: P, onRelease: He, onDrag: le, dismissible: u, isOpen: x, shouldFade: $e, closeDrawer: ae, onNestedDrag: Zn, onNestedOpenChange: jt, onNestedRelease: It, keyboardIsOpen: q, openProp: e, modal: v, snapPointsOffset: U } }, n));
}
var i0 = S.forwardRef(function({ children: e, ...t }, n) {
  let { overlayRef: r, snapPoints: o, onRelease: a, shouldFade: s, isOpen: i, visible: c } = Td(), l = n0(n, r), u = o && o.length > 0;
  return S.createElement(Mo, { onMouseUp: a, ref: l, "vaul-drawer-visible": c ? "true" : "false", "vaul-overlay": "", "vaul-snap-points": i && u ? "true" : "false", "vaul-snap-points-overlay": i && s ? "true" : "false", ...t });
});
i0.displayName = "Drawer.Overlay";
var c0 = S.forwardRef(function({ onOpenAutoFocus: e, onPointerDownOutside: t, onAnimationEnd: n, style: r, ...o }, a) {
  let { drawerRef: s, onPress: i, onRelease: c, onDrag: l, dismissible: u, keyboardIsOpen: d, snapPointsOffset: p, visible: m, closeDrawer: h, modal: v, openProp: g, onOpenChange: b, setVisible: x } = Td(), y = n0(a, s);
  return S.useEffect(() => {
    x(!0);
  }, []), S.createElement(Do, { onOpenAutoFocus: (_) => {
    e ? e(_) : (_.preventDefault(), s.current.focus());
  }, onPointerDown: i, onPointerDownOutside: (_) => {
    if (t == null || t(_), !v) {
      _.preventDefault();
      return;
    }
    d.current && (d.current = !1), _.preventDefault(), b == null || b(!1), !(!u || g !== void 0) && h();
  }, onPointerMove: l, onPointerUp: c, ref: y, style: p && p.length > 0 ? { "--snap-point-height": `${p[0]}px`, ...r } : r, ...o, "vaul-drawer": "", "vaul-drawer-visible": m ? "true" : "false" });
});
c0.displayName = "Drawer.Content";
function xD({ onDrag: e, onOpenChange: t, ...n }) {
  let { onNestedDrag: r, onNestedOpenChange: o, onNestedRelease: a } = Td();
  if (!r)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return S.createElement(s0, { nested: !0, onClose: () => {
    o(!1);
  }, onDrag: (s, i) => {
    r(s, i), e == null || e(s, i);
  }, onOpenChange: (s) => {
    s && o(s), t == null || t(s);
  }, onRelease: a, ...n });
}
var hn = { Root: s0, NestedRoot: xD, Content: c0, Overlay: i0, Trigger: Ai, Portal: ko, Close: jo, Title: Ro, Description: Ao };
const yD = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  hn.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
yD.displayName = "Drawer";
const lR = hn.Trigger, wD = hn.Portal, uR = hn.Close, l0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  hn.Overlay,
  {
    ref: n,
    className: F("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
l0.displayName = hn.Overlay.displayName;
const $D = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(wD, { children: [
  /* @__PURE__ */ f.exports.jsx(l0, {}),
  /* @__PURE__ */ f.exports.jsxs(
    hn.Content,
    {
      ref: r,
      className: F(
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
$D.displayName = "DrawerContent";
const _D = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: F("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
_D.displayName = "DrawerHeader";
const CD = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: F("mt-auto flex flex-col gap-2 p-4", e),
    ...t
  }
);
CD.displayName = "DrawerFooter";
const SD = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  hn.Title,
  {
    ref: n,
    className: F(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
SD.displayName = hn.Title.displayName;
const ED = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  hn.Description,
  {
    ref: n,
    className: F("text-sm text-muted-foreground", e),
    ...t
  }
));
ED.displayName = hn.Description.displayName;
const dR = ({ children: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: "app-layout", children: e });
export {
  b8 as Accordion,
  DT as AccordionContent,
  kT as AccordionItem,
  MT as AccordionTrigger,
  m8 as AlertDialog,
  oT as AlertDialogAction,
  aT as AlertDialogCancel,
  JP as AlertDialogContent,
  rT as AlertDialogDescription,
  tT as AlertDialogFooter,
  eT as AlertDialogHeader,
  nT as AlertDialogTitle,
  h8 as AlertDialogTrigger,
  dR as AppLayout,
  c8 as AspectRatio,
  Ia as Avatar,
  La as AvatarFallback,
  ho as AvatarImage,
  St as Badge,
  oR as BottomNavigation,
  Ue as Button,
  Yo as CI_TYPES,
  y$ as Calendar,
  wv as Card,
  HE as CardContent,
  BE as CardDescription,
  YE as CardFooter,
  zE as CardHeader,
  WE as CardTitle,
  qM as Carousel,
  XM as CarouselContent,
  QM as CarouselItem,
  eD as CarouselNext,
  JM as CarouselPrevious,
  Sv as Checkbox,
  J8 as CodeVerification,
  x8 as Collapsible,
  w8 as CollapsibleContent,
  y8 as CollapsibleTrigger,
  K7 as ComboBox,
  rR as ComboxCheckbox,
  zn as Command,
  i8 as CommandDialog,
  ur as CommandEmpty,
  un as CommandGroup,
  lr as CommandInput,
  dn as CommandItem,
  Ja as CommandList,
  Hi as CommandSeparator,
  sP as CommandShortcut,
  VD as ContextMenu,
  zC as ContextMenuCheckboxItem,
  VC as ContextMenuContent,
  zD as ContextMenuGroup,
  UC as ContextMenuItem,
  BC as ContextMenuLabel,
  WD as ContextMenuPortal,
  HD as ContextMenuRadioGroup,
  WC as ContextMenuRadioItem,
  HC as ContextMenuSeparator,
  YC as ContextMenuShortcut,
  BD as ContextMenuSub,
  FC as ContextMenuSubContent,
  LC as ContextMenuSubTrigger,
  UD as ContextMenuTrigger,
  cR as D4TCardsList,
  q8 as D4TTable,
  kS as Dialog,
  tv as DialogContent,
  AS as DialogDescription,
  DS as DialogFooter,
  MS as DialogHeader,
  RS as DialogTitle,
  KD as DialogTrigger,
  yD as Drawer,
  uR as DrawerClose,
  $D as DrawerContent,
  ED as DrawerDescription,
  CD as DrawerFooter,
  _D as DrawerHeader,
  l0 as DrawerOverlay,
  wD as DrawerPortal,
  SD as DrawerTitle,
  lR as DrawerTrigger,
  e8 as DropdownMenu,
  TN as DropdownMenuCheckboxItem,
  NN as DropdownMenuContent,
  n8 as DropdownMenuGroup,
  PN as DropdownMenuItem,
  kN as DropdownMenuLabel,
  r8 as DropdownMenuPortal,
  a8 as DropdownMenuRadioGroup,
  ON as DropdownMenuRadioItem,
  MN as DropdownMenuSeparator,
  DN as DropdownMenuShortcut,
  o8 as DropdownMenuSub,
  EN as DropdownMenuSubContent,
  SN as DropdownMenuSubTrigger,
  t8 as DropdownMenuTrigger,
  Wh as Form,
  Ga as FormControl,
  Oo as FormDescription,
  Br as FormField,
  xr as FormItem,
  Hr as FormLabel,
  fS as FormMessage,
  nR as GenericCombobox,
  X8 as GenericSelect,
  C8 as HoverCard,
  HT as HoverCardContent,
  S8 as HoverCardTrigger,
  V7 as ImageWithZoom,
  Bu as Input,
  GD as InputPID,
  da as InputUI,
  Nn as Label,
  E8 as LoaderDots,
  g6 as Menubar,
  _6 as MenubarCheckboxItem,
  w6 as MenubarContent,
  T8 as MenubarGroup,
  $6 as MenubarItem,
  S6 as MenubarLabel,
  P8 as MenubarMenu,
  O8 as MenubarPortal,
  M8 as MenubarRadioGroup,
  C6 as MenubarRadioItem,
  E6 as MenubarSeparator,
  N6 as MenubarShortcut,
  k8 as MenubarSub,
  y6 as MenubarSubContent,
  x6 as MenubarSubTrigger,
  b6 as MenubarTrigger,
  tR as MultipleImages,
  wx as NavLink,
  P3 as NavLinkNested,
  eO as NavigationMenu,
  oO as NavigationMenuContent,
  aO as NavigationMenuIndicator,
  R8 as NavigationMenuItem,
  A8 as NavigationMenuLink,
  tO as NavigationMenuList,
  rO as NavigationMenuTrigger,
  Nb as NavigationMenuViewport,
  cc as PHONE_LINE_CODES,
  Vn as Popover,
  $n as PopoverContent,
  Un as PopoverTrigger,
  hO as Progress,
  MO as RadioGroup,
  DO as RadioGroupItem,
  NP as ScrollArea,
  bg as ScrollBar,
  Gu as Select,
  Vi as SelectContent,
  FE as SelectGroup,
  Ui as SelectItem,
  VE as SelectLabel,
  UE as SelectSeparator,
  Fi as SelectTrigger,
  Zu as SelectValue,
  Za as Separator,
  u8 as Sheet,
  f8 as SheetClose,
  TP as SheetContent,
  DP as SheetDescription,
  kP as SheetFooter,
  OP as SheetHeader,
  MP as SheetTitle,
  d8 as SheetTrigger,
  H8 as Sidebar,
  Y8 as SidebarContent,
  N3 as SidebarFooter,
  a3 as SidebarHeader,
  v8 as Skeleton,
  rk as Slider,
  Xl as Spinner,
  Q8 as SwatchesPicker,
  Zk as Switch,
  $g as TableBody,
  AP as TableCaption,
  ed as TableCell,
  RP as TableFooter,
  _g as TableHead,
  wg as TableHeader,
  Gi as TableRow,
  Ju as TableUI,
  V8 as Tabs,
  vk as TabsContent,
  mk as TabsList,
  hk as TabsTrigger,
  qD as TextArea,
  cv as TextareaUI,
  xk as Toggle,
  E3 as ToggleTheme,
  Rr as Tooltip,
  dr as TooltipContent,
  Dr as TooltipProvider,
  Ar as TooltipTrigger,
  eR as UploadImage,
  M$ as badgeVariants,
  oa as buttonVariants,
  Uo as camelToSnake,
  F as cn,
  Ds as convertBytes,
  ic as convertHexToRGBA,
  TD as fetcher,
  MD as formatCI,
  kf as formatCITypes,
  jD as formatCodePhoneLines,
  aR as formatListPagination,
  K8 as formatPagination,
  AD as formatPhone,
  RD as formatPhoneNumber,
  DD as formatRIF,
  $p as generateUUID,
  Qc as generateUUIDToList,
  kD as getMultiOpacityColor,
  sR as initialListPagination,
  G8 as initialPagination,
  Z8 as insertColumn,
  iR as insertColumnList,
  nM as listCamelToSnake,
  nO as navigationMenuTriggerStyle,
  OD as simulateFetch,
  bk as toggleVariants,
  Di as useFormField,
  tc as useSidebar
};
//# sourceMappingURL=index.es.js.map
