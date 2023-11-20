import * as C from "react";
import N, { useCallback as ue, forwardRef as R, Children as Nt, isValidElement as Un, createElement as x, cloneElement as ro, Fragment as Ht, createContext as ct, useContext as He, useState as Y, useEffect as G, useRef as V, useMemo as yt, useLayoutEffect as Ls, useReducer as Fs, useDebugValue as dx, useImperativeHandle as ux, Component as fx, createRef as bo } from "react";
import * as px from "react-dom";
import ul, { flushSync as Vs, createPortal as fl } from "react-dom";
var it = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var f = { exports: {} }, xo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qd;
function hx() {
  if (qd)
    return xo;
  qd = 1;
  var e = N, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, c, l) {
    var d, u = {}, p = null, m = null;
    l !== void 0 && (p = "" + l), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (d in c)
      r.call(c, d) && !a.hasOwnProperty(d) && (u[d] = c[d]);
    if (i && i.defaultProps)
      for (d in c = i.defaultProps, c)
        u[d] === void 0 && (u[d] = c[d]);
    return { $$typeof: t, type: i, key: p, ref: m, props: u, _owner: o.current };
  }
  return xo.Fragment = n, xo.jsx = s, xo.jsxs = s, xo;
}
var yo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xd;
function vx() {
  return Xd || (Xd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = N, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, v = "@@iterator";
    function g(E) {
      if (E === null || typeof E != "object")
        return null;
      var re = h && E[h] || E[v];
      return typeof re == "function" ? re : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(E) {
      {
        for (var re = arguments.length, fe = new Array(re > 1 ? re - 1 : 0), Ne = 1; Ne < re; Ne++)
          fe[Ne - 1] = arguments[Ne];
        $("error", E, fe);
      }
    }
    function $(E, re, fe) {
      {
        var Ne = b.ReactDebugCurrentFrame, Ie = Ne.getStackAddendum();
        Ie !== "" && (re += "%s", fe = fe.concat([Ie]));
        var Ye = fe.map(function(Ae) {
          return String(Ae);
        });
        Ye.unshift("Warning: " + re), Function.prototype.apply.call(console[E], console, Ye);
      }
    }
    var _ = !1, w = !1, P = !1, k = !1, L = !1, I;
    I = Symbol.for("react.module.reference");
    function ee(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === r || E === a || L || E === o || E === l || E === d || k || E === m || _ || w || P || typeof E == "object" && E !== null && (E.$$typeof === p || E.$$typeof === u || E.$$typeof === s || E.$$typeof === i || E.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === I || E.getModuleId !== void 0));
    }
    function te(E, re, fe) {
      var Ne = E.displayName;
      if (Ne)
        return Ne;
      var Ie = re.displayName || re.name || "";
      return Ie !== "" ? fe + "(" + Ie + ")" : fe;
    }
    function K(E) {
      return E.displayName || "Context";
    }
    function Z(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
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
          case i:
            var re = E;
            return K(re) + ".Consumer";
          case s:
            var fe = E;
            return K(fe._context) + ".Provider";
          case c:
            return te(E, E.render, "ForwardRef");
          case u:
            var Ne = E.displayName || null;
            return Ne !== null ? Ne : Z(E.type) || "Memo";
          case p: {
            var Ie = E, Ye = Ie._payload, Ae = Ie._init;
            try {
              return Z(Ae(Ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, A = 0, j, W, B, M, D, U, q;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function ce() {
      {
        if (A === 0) {
          j = console.log, W = console.info, B = console.warn, M = console.error, D = console.group, U = console.groupCollapsed, q = console.groupEnd;
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
        A++;
      }
    }
    function ye() {
      {
        if (A--, A === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, E, {
              value: j
            }),
            info: O({}, E, {
              value: W
            }),
            warn: O({}, E, {
              value: B
            }),
            error: O({}, E, {
              value: M
            }),
            group: O({}, E, {
              value: D
            }),
            groupCollapsed: O({}, E, {
              value: U
            }),
            groupEnd: O({}, E, {
              value: q
            })
          });
        }
        A < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var be = b.ReactCurrentDispatcher, ne;
    function le(E, re, fe) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (Ie) {
            var Ne = Ie.stack.trim().match(/\n( *(at )?)/);
            ne = Ne && Ne[1] || "";
          }
        return `
` + ne + E;
      }
    }
    var he = !1, J;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      J = new ve();
    }
    function Q(E, re) {
      if (!E || he)
        return "";
      {
        var fe = J.get(E);
        if (fe !== void 0)
          return fe;
      }
      var Ne;
      he = !0;
      var Ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ye;
      Ye = be.current, be.current = null, ce();
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
            } catch (hn) {
              Ne = hn;
            }
            Reflect.construct(E, [], Ae);
          } else {
            try {
              Ae.call();
            } catch (hn) {
              Ne = hn;
            }
            E.call(Ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (hn) {
            Ne = hn;
          }
          E();
        }
      } catch (hn) {
        if (hn && Ne && typeof hn.stack == "string") {
          for (var Me = hn.stack.split(`
`), gt = Ne.stack.split(`
`), nt = Me.length - 1, ot = gt.length - 1; nt >= 1 && ot >= 0 && Me[nt] !== gt[ot]; )
            ot--;
          for (; nt >= 1 && ot >= 0; nt--, ot--)
            if (Me[nt] !== gt[ot]) {
              if (nt !== 1 || ot !== 1)
                do
                  if (nt--, ot--, ot < 0 || Me[nt] !== gt[ot]) {
                    var Mt = `
` + Me[nt].replace(" at new ", " at ");
                    return E.displayName && Mt.includes("<anonymous>") && (Mt = Mt.replace("<anonymous>", E.displayName)), typeof E == "function" && J.set(E, Mt), Mt;
                  }
                while (nt >= 1 && ot >= 0);
              break;
            }
        }
      } finally {
        he = !1, be.current = Ye, ye(), Error.prepareStackTrace = Ie;
      }
      var Dr = E ? E.displayName || E.name : "", Zd = Dr ? le(Dr) : "";
      return typeof E == "function" && J.set(E, Zd), Zd;
    }
    function Re(E, re, fe) {
      return Q(E, !1);
    }
    function Ue(E) {
      var re = E.prototype;
      return !!(re && re.isReactComponent);
    }
    function dt(E, re, fe) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return Q(E, Ue(E));
      if (typeof E == "string")
        return le(E);
      switch (E) {
        case l:
          return le("Suspense");
        case d:
          return le("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case c:
            return Re(E.render);
          case u:
            return dt(E.type, re, fe);
          case p: {
            var Ne = E, Ie = Ne._payload, Ye = Ne._init;
            try {
              return dt(Ye(Ie), re, fe);
            } catch {
            }
          }
        }
      return "";
    }
    var T = Object.prototype.hasOwnProperty, z = {}, X = b.ReactDebugCurrentFrame;
    function xe(E) {
      if (E) {
        var re = E._owner, fe = dt(E.type, E._source, re ? re.type : null);
        X.setExtraStackFrame(fe);
      } else
        X.setExtraStackFrame(null);
    }
    function de(E, re, fe, Ne, Ie) {
      {
        var Ye = Function.call.bind(T);
        for (var Ae in E)
          if (Ye(E, Ae)) {
            var Me = void 0;
            try {
              if (typeof E[Ae] != "function") {
                var gt = Error((Ne || "React class") + ": " + fe + " type `" + Ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[Ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw gt.name = "Invariant Violation", gt;
              }
              Me = E[Ae](re, Ae, Ne, fe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nt) {
              Me = nt;
            }
            Me && !(Me instanceof Error) && (xe(Ie), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ne || "React class", fe, Ae, typeof Me), xe(null)), Me instanceof Error && !(Me.message in z) && (z[Me.message] = !0, xe(Ie), y("Failed %s type: %s", fe, Me.message), xe(null));
          }
      }
    }
    var se = Array.isArray;
    function $e(E) {
      return se(E);
    }
    function qe(E) {
      {
        var re = typeof Symbol == "function" && Symbol.toStringTag, fe = re && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return fe;
      }
    }
    function Qe(E) {
      try {
        return pn(E), !1;
      } catch {
        return !0;
      }
    }
    function pn(E) {
      return "" + E;
    }
    function Da(E) {
      if (Qe(E))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(E)), pn(E);
    }
    var mn = b.ReactCurrentOwner, ho = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ra, vo, go;
    go = {};
    function Aa(E) {
      if (T.call(E, "ref")) {
        var re = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function qb(E) {
      if (T.call(E, "key")) {
        var re = Object.getOwnPropertyDescriptor(E, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function Xb(E, re) {
      if (typeof E.ref == "string" && mn.current && re && mn.current.stateNode !== re) {
        var fe = Z(mn.current.type);
        go[fe] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(mn.current.type), E.ref), go[fe] = !0);
      }
    }
    function Qb(E, re) {
      {
        var fe = function() {
          Ra || (Ra = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        fe.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: fe,
          configurable: !0
        });
      }
    }
    function Jb(E, re) {
      {
        var fe = function() {
          vo || (vo = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        fe.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: fe,
          configurable: !0
        });
      }
    }
    var ex = function(E, re, fe, Ne, Ie, Ye, Ae) {
      var Me = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: E,
        key: re,
        ref: fe,
        props: Ae,
        // Record the component responsible for creating this element.
        _owner: Ye
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
        value: Ie
      }), Object.freeze && (Object.freeze(Me.props), Object.freeze(Me)), Me;
    };
    function tx(E, re, fe, Ne, Ie) {
      {
        var Ye, Ae = {}, Me = null, gt = null;
        fe !== void 0 && (Da(fe), Me = "" + fe), qb(re) && (Da(re.key), Me = "" + re.key), Aa(re) && (gt = re.ref, Xb(re, Ie));
        for (Ye in re)
          T.call(re, Ye) && !ho.hasOwnProperty(Ye) && (Ae[Ye] = re[Ye]);
        if (E && E.defaultProps) {
          var nt = E.defaultProps;
          for (Ye in nt)
            Ae[Ye] === void 0 && (Ae[Ye] = nt[Ye]);
        }
        if (Me || gt) {
          var ot = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          Me && Qb(Ae, ot), gt && Jb(Ae, ot);
        }
        return ex(E, Me, gt, Ie, Ne, mn.current, Ae);
      }
    }
    var Ni = b.ReactCurrentOwner, zd = b.ReactDebugCurrentFrame;
    function Mr(E) {
      if (E) {
        var re = E._owner, fe = dt(E.type, E._source, re ? re.type : null);
        zd.setExtraStackFrame(fe);
      } else
        zd.setExtraStackFrame(null);
    }
    var Pi;
    Pi = !1;
    function Ti(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function Bd() {
      {
        if (Ni.current) {
          var E = Z(Ni.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function nx(E) {
      {
        if (E !== void 0) {
          var re = E.fileName.replace(/^.*[\\\/]/, ""), fe = E.lineNumber;
          return `

Check your code at ` + re + ":" + fe + ".";
        }
        return "";
      }
    }
    var Yd = {};
    function rx(E) {
      {
        var re = Bd();
        if (!re) {
          var fe = typeof E == "string" ? E : E.displayName || E.name;
          fe && (re = `

Check the top-level render call using <` + fe + ">.");
        }
        return re;
      }
    }
    function Hd(E, re) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var fe = rx(re);
        if (Yd[fe])
          return;
        Yd[fe] = !0;
        var Ne = "";
        E && E._owner && E._owner !== Ni.current && (Ne = " It was passed a child from " + Z(E._owner.type) + "."), Mr(E), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', fe, Ne), Mr(null);
      }
    }
    function Kd(E, re) {
      {
        if (typeof E != "object")
          return;
        if ($e(E))
          for (var fe = 0; fe < E.length; fe++) {
            var Ne = E[fe];
            Ti(Ne) && Hd(Ne, re);
          }
        else if (Ti(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var Ie = g(E);
          if (typeof Ie == "function" && Ie !== E.entries)
            for (var Ye = Ie.call(E), Ae; !(Ae = Ye.next()).done; )
              Ti(Ae.value) && Hd(Ae.value, re);
        }
      }
    }
    function ox(E) {
      {
        var re = E.type;
        if (re == null || typeof re == "string")
          return;
        var fe;
        if (typeof re == "function")
          fe = re.propTypes;
        else if (typeof re == "object" && (re.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        re.$$typeof === u))
          fe = re.propTypes;
        else
          return;
        if (fe) {
          var Ne = Z(re);
          de(fe, E.props, "prop", Ne, E);
        } else if (re.PropTypes !== void 0 && !Pi) {
          Pi = !0;
          var Ie = Z(re);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ie || "Unknown");
        }
        typeof re.getDefaultProps == "function" && !re.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ax(E) {
      {
        for (var re = Object.keys(E.props), fe = 0; fe < re.length; fe++) {
          var Ne = re[fe];
          if (Ne !== "children" && Ne !== "key") {
            Mr(E), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ne), Mr(null);
            break;
          }
        }
        E.ref !== null && (Mr(E), y("Invalid attribute `ref` supplied to `React.Fragment`."), Mr(null));
      }
    }
    function Gd(E, re, fe, Ne, Ie, Ye) {
      {
        var Ae = ee(E);
        if (!Ae) {
          var Me = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (Me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var gt = nx(Ie);
          gt ? Me += gt : Me += Bd();
          var nt;
          E === null ? nt = "null" : $e(E) ? nt = "array" : E !== void 0 && E.$$typeof === t ? (nt = "<" + (Z(E.type) || "Unknown") + " />", Me = " Did you accidentally export a JSX literal instead of a component?") : nt = typeof E, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nt, Me);
        }
        var ot = tx(E, re, fe, Ie, Ye);
        if (ot == null)
          return ot;
        if (Ae) {
          var Mt = re.children;
          if (Mt !== void 0)
            if (Ne)
              if ($e(Mt)) {
                for (var Dr = 0; Dr < Mt.length; Dr++)
                  Kd(Mt[Dr], E);
                Object.freeze && Object.freeze(Mt);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Kd(Mt, E);
        }
        return E === r ? ax(ot) : ox(ot), ot;
      }
    }
    function sx(E, re, fe) {
      return Gd(E, re, fe, !0);
    }
    function ix(E, re, fe) {
      return Gd(E, re, fe, !1);
    }
    var cx = ix, lx = sx;
    yo.Fragment = r, yo.jsx = cx, yo.jsxs = lx;
  }()), yo;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = hx() : e.exports = vx();
})(f);
function S() {
  return S = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, S.apply(this, arguments);
}
function gx(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ra(...e) {
  return (t) => e.forEach(
    (n) => gx(n, t)
  );
}
function we(...e) {
  return ue(ra(...e), e);
}
const nn = /* @__PURE__ */ R((e, t) => {
  const { children: n, ...r } = e, o = Nt.toArray(n), a = o.find(bx);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Nt.count(s) > 1 ? Nt.only(null) : /* @__PURE__ */ Un(s) ? s.props.children : null : c);
    return /* @__PURE__ */ x($c, S({}, r, {
      ref: t
    }), /* @__PURE__ */ Un(s) ? /* @__PURE__ */ ro(s, void 0, i) : null);
  }
  return /* @__PURE__ */ x($c, S({}, r, {
    ref: t
  }), n);
});
nn.displayName = "Slot";
const $c = /* @__PURE__ */ R((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Un(n) ? /* @__PURE__ */ ro(n, {
    ...xx(r, n.props),
    ref: t ? ra(t, n.ref) : n.ref
  }) : Nt.count(n) > 1 ? Nt.only(null) : null;
});
$c.displayName = "SlotClone";
const pl = ({ children: e }) => /* @__PURE__ */ x(Ht, null, e);
function bx(e) {
  return /* @__PURE__ */ Un(e) && e.type === pl;
}
function xx(e, t) {
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
function Gf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Gf(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Zf() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Gf(e)) && (r && (r += " "), r += t);
  return r;
}
const Qd = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Jd = Zf, oo = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return Jd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const d = n == null ? void 0 : n[l], u = a == null ? void 0 : a[l];
    if (d === null)
      return null;
    const p = Qd(d) || Qd(u);
    return o[l][p];
  }), i = n && Object.entries(n).reduce((l, d) => {
    let [u, p] = d;
    return p === void 0 || (l[u] = p), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, d) => {
    let { class: u, className: p, ...m } = d;
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
      u,
      p
    ] : l;
  }, []);
  return Jd(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function dO(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const uO = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, ki = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, fO = (e) => {
  const t = ki(e), n = ki(e, 0.1), r = ki(e, 0.3);
  return {
    colorOpacity1: t,
    colorOpacity2: n,
    colorOpacity3: r
  };
}, Oi = {
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
}, pO = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), mO = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), hO = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), vO = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, as = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, gO = () => [...Oi.DIGITAL, ...Oi.MOVILNET, ...Oi.MOVISTAR], $o = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function yx() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = qf(t)) && (r && (r += " "), r += n);
  return r;
}
function qf(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = qf(e[r])) && (n && (n += " "), n += t);
  return n;
}
var ml = "-";
function $x(e) {
  var t = _x(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function a(i) {
    var c = i.split(ml);
    return c[0] === "" && c.length !== 1 && c.shift(), Xf(c, t) || wx(i);
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
function Xf(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? Xf(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var a = e.join(ml);
    return (s = t.validators.find(function(i) {
      var c = i.validator;
      return c(a);
    })) == null ? void 0 : s.classGroupId;
  }
}
var eu = /^\[(.+)\]$/;
function wx(e) {
  if (eu.test(e)) {
    var t = eu.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function _x(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = Sx(Object.entries(e.classGroups), n);
  return o.forEach(function(a) {
    var s = a[0], i = a[1];
    wc(i, r, s, t);
  }), r;
}
function wc(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var a = o === "" ? t : tu(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Cx(o)) {
        wc(o(r), t, n, r);
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
      wc(c, tu(t, i), n, r);
    });
  });
}
function tu(e, t) {
  var n = e;
  return t.split(ml).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function Cx(e) {
  return e.isThemeGetter;
}
function Sx(e, t) {
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
function Ex(e) {
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
var Qf = "!";
function Nx(e) {
  var t = e.separator || ":", n = t.length === 1, r = t[0], o = t.length;
  return function(s) {
    for (var i = [], c = 0, l = 0, d, u = 0; u < s.length; u++) {
      var p = s[u];
      if (c === 0) {
        if (p === r && (n || s.slice(u, u + o) === t)) {
          i.push(s.slice(l, u)), l = u + o;
          continue;
        }
        if (p === "/") {
          d = u;
          continue;
        }
      }
      p === "[" ? c++ : p === "]" && c--;
    }
    var m = i.length === 0 ? s : s.substring(l), h = m.startsWith(Qf), v = h ? m.substring(1) : m, g = d && d > l ? d - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
}
function Px(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function Tx(e) {
  return {
    cache: Ex(e.cacheSize),
    splitModifiers: Nx(e),
    ...$x(e)
  };
}
var kx = /\s+/;
function Ox(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(kx).map(function(s) {
    var i = n(s), c = i.modifiers, l = i.hasImportantModifier, d = i.baseClassName, u = i.maybePostfixModifierPosition, p = r(u ? d.substring(0, u) : d), m = Boolean(u);
    if (!p) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (p = r(d), !p)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      m = !1;
    }
    var h = Px(c).join(":"), v = l ? h + Qf : h;
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
    var i = s.modifierId, c = s.classGroupId, l = s.hasPostfixModifier, d = i + c;
    return a.has(d) ? !1 : (a.add(d), o(c, l).forEach(function(u) {
      return a.add(i + u);
    }), !0);
  }).reverse().map(function(s) {
    return s.originalClassName;
  }).join(" ");
}
function Mx() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, a, s = i;
  function i(l) {
    var d = t[0], u = t.slice(1), p = u.reduce(function(m, h) {
      return h(m);
    }, d());
    return r = Tx(p), o = r.cache.get, a = r.cache.set, s = c, c(l);
  }
  function c(l) {
    var d = o(l);
    if (d)
      return d;
    var u = Ox(l, r);
    return a(l, u), u;
  }
  return function() {
    return s(yx.apply(null, arguments));
  };
}
function Ke(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Jf = /^\[(?:([a-z-]+):)?(.+)\]$/i, Dx = /^\d+\/\d+$/, Rx = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ax = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, jx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ix = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Lt(e) {
  return ir(e) || Rx.has(e) || Dx.test(e) || _c(e);
}
function _c(e) {
  return $r(e, "length", zx);
}
function Lx(e) {
  return $r(e, "size", ep);
}
function Fx(e) {
  return $r(e, "position", ep);
}
function Vx(e) {
  return $r(e, "url", Bx);
}
function ja(e) {
  return $r(e, "number", ir);
}
function ir(e) {
  return !Number.isNaN(Number(e));
}
function Ux(e) {
  return e.endsWith("%") && ir(e.slice(0, -1));
}
function wo(e) {
  return nu(e) || $r(e, "number", nu);
}
function De(e) {
  return Jf.test(e);
}
function _o() {
  return !0;
}
function Rn(e) {
  return Ax.test(e);
}
function Wx(e) {
  return $r(e, "", Yx);
}
function $r(e, t, n) {
  var r = Jf.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function zx(e) {
  return jx.test(e);
}
function ep() {
  return !1;
}
function Bx(e) {
  return e.startsWith("url(");
}
function nu(e) {
  return Number.isInteger(Number(e));
}
function Yx(e) {
  return Ix.test(e);
}
function Hx() {
  var e = Ke("colors"), t = Ke("spacing"), n = Ke("blur"), r = Ke("brightness"), o = Ke("borderColor"), a = Ke("borderRadius"), s = Ke("borderSpacing"), i = Ke("borderWidth"), c = Ke("contrast"), l = Ke("grayscale"), d = Ke("hueRotate"), u = Ke("invert"), p = Ke("gap"), m = Ke("gradientColorStops"), h = Ke("gradientColorStopPositions"), v = Ke("inset"), g = Ke("margin"), b = Ke("opacity"), y = Ke("padding"), $ = Ke("saturate"), _ = Ke("scale"), w = Ke("sepia"), P = Ke("skew"), k = Ke("space"), L = Ke("translate"), I = function() {
    return ["auto", "contain", "none"];
  }, ee = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, te = function() {
    return ["auto", De, t];
  }, K = function() {
    return [De, t];
  }, Z = function() {
    return ["", Lt];
  }, O = function() {
    return ["auto", ir, De];
  }, A = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, j = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, W = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, B = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, M = function() {
    return ["", "0", De];
  }, D = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, U = function() {
    return [ir, ja];
  }, q = function() {
    return [ir, De];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [_o],
      spacing: [Lt],
      blur: ["none", "", Rn, De],
      brightness: U(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Rn, De],
      borderSpacing: K(),
      borderWidth: Z(),
      contrast: U(),
      grayscale: M(),
      hueRotate: q(),
      invert: M(),
      gap: K(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ux, _c],
      inset: te(),
      margin: te(),
      opacity: U(),
      padding: K(),
      saturate: U(),
      scale: U(),
      sepia: M(),
      skew: q(),
      space: K(),
      translate: K()
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
        columns: [Rn]
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
        object: [].concat(A(), [De])
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
        overscroll: I()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": I()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": I()
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
        z: ["auto", wo]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: te()
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
        order: ["first", "last", "none", wo]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [_o]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", wo]
        }, De]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": O()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": O()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [_o]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [wo]
        }, De]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": O()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": O()
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
        justify: ["normal"].concat(B())
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
        content: ["normal"].concat(B(), ["baseline"])
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
        "place-content": [].concat(B(), ["baseline"])
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
          screen: [Rn]
        }, Rn, De]
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
        text: ["base", Rn, _c]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ja]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [_o]
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
        "line-clamp": ["none", ir, ja]
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
        decoration: [].concat(j(), ["wavy"])
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
        indent: K()
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
        bg: [].concat(A(), [Fx])
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
        bg: ["auto", "cover", "contain", Lx]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Vx]
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
        border: [].concat(j(), ["hidden"])
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
        divide: j()
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
        outline: [""].concat(j())
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
        shadow: ["", "inner", "none", Rn, Wx]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [_o]
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
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Rn, De]
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
        duration: q()
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
        delay: q()
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
        rotate: [wo, De]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [L]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [L]
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
        "scroll-m": K()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": K()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": K()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": K()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": K()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": K()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": K()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": K()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": K()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": K()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": K()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": K()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": K()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": K()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": K()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": K()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": K()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": K()
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
        stroke: [Lt, ja]
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
var Kx = /* @__PURE__ */ Mx(Hx);
function F(...e) {
  return Kx(Zf(e));
}
const hl = ({ className: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: F(`spinner h-4 w-4 ${e}`) }), Mo = oo(
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
), Ve = C.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, isLoading: o, children: a, ...s }, i) => {
    const c = r ? nn : "button";
    return /* @__PURE__ */ f.exports.jsx(
      c,
      {
        className: F(Mo({ variant: t, size: n, className: e })),
        ref: i,
        ...s,
        children: o ? /* @__PURE__ */ f.exports.jsx(hl, {}) : a
      }
    );
  }
);
Ve.displayName = "Button";
var Gx = {
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
const Zx = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), qx = (e, t) => {
  const n = R(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: s, children: i, ...c }, l) => x(
      "svg",
      {
        ref: l,
        ...Gx,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(a) * 24 / Number(o) : a,
        className: `lucide lucide-${Zx(e)}`,
        ...c
      },
      [
        ...t.map(([d, u]) => x(d, u)),
        ...(Array.isArray(i) ? i : [i]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
var at = qx;
const Kt = at("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), Do = at("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), vl = at("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), ao = at("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), ru = at("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), Cc = at("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), Us = at("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), Ia = at("EyeOff", [
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
]), La = at("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]), Ws = at("ImageOff", [
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
]), tp = at("ImagePlus", [
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
]), np = at("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]), rp = at("PanelLeftClose", [
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
]), Xx = at("PanelLeftOpen", [
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
]), Qx = at("PanelLeft", [
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
]), op = at("PenSquare", [
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
]), gl = at("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), ap = at("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]), Jx = at("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), zs = at("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Mi(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
function Co(e) {
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
function So(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    var s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? t0(i, function(u) {
      return u.test(s);
    }) : e0(i, function(u) {
      return u.test(s);
    }), l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
    var d = t.slice(s.length);
    return {
      value: l,
      rest: d
    };
  };
}
function e0(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function t0(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function n0(e) {
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
function Gr(e) {
  return Gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gr(e);
}
function lt(e) {
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
  return e instanceof Date || Gr(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function At(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = lt(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function rn(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = lt(t);
  if (isNaN(r))
    return new Date(NaN);
  if (!r)
    return n;
  var o = n.getDate(), a = new Date(n.getTime());
  a.setMonth(n.getMonth() + r + 1, 0);
  var s = a.getDate();
  return o >= s ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), o), n);
}
function r0(e, t) {
  Ce(2, arguments);
  var n = Oe(e).getTime(), r = lt(t);
  return new Date(n + r);
}
var o0 = {};
function Qn() {
  return o0;
}
function on(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var d = Qn(), u = lt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : d.weekStartsOn) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(u >= 0 && u <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Oe(e), m = p.getDay(), h = (m < u ? 7 : 0) + m - u;
  return p.setDate(p.getDate() - h), p.setHours(0, 0, 0, 0), p;
}
function fr(e) {
  return Ce(1, arguments), on(e, {
    weekStartsOn: 1
  });
}
function a0(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getFullYear(), r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = fr(r), a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var s = fr(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function s0(e) {
  Ce(1, arguments);
  var t = a0(e), n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = fr(n);
  return r;
}
function Ro(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Zr(e) {
  Ce(1, arguments);
  var t = Oe(e);
  return t.setHours(0, 0, 0, 0), t;
}
var i0 = 864e5;
function yn(e, t) {
  Ce(2, arguments);
  var n = Zr(e), r = Zr(t), o = n.getTime() - Ro(n), a = r.getTime() - Ro(r);
  return Math.round((o - a) / i0);
}
function Sc(e, t) {
  Ce(2, arguments);
  var n = lt(t), r = n * 7;
  return At(e, r);
}
function c0(e, t) {
  Ce(2, arguments);
  var n = lt(t);
  return rn(e, n * 12);
}
function l0(e) {
  Ce(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (Gr(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = Oe(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || new Date(NaN);
}
function d0(e) {
  Ce(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (Gr(e) === "object" && e !== null)
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
  var n = Zr(e), r = Zr(t);
  return n.getTime() === r.getTime();
}
function bl(e) {
  return Ce(1, arguments), e instanceof Date || Gr(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function u0(e) {
  if (Ce(1, arguments), !bl(e) && typeof e != "number")
    return !1;
  var t = Oe(e);
  return !isNaN(Number(t));
}
function Ao(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = Oe(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
var f0 = 6048e5;
function p0(e, t, n) {
  Ce(2, arguments);
  var r = on(e, n), o = on(t, n), a = r.getTime() - Ro(r), s = o.getTime() - Ro(o);
  return Math.round((a - s) / f0);
}
function xl(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Pt(e) {
  Ce(1, arguments);
  var t = Oe(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function m0(e) {
  Ce(1, arguments);
  var t = Oe(e), n = new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function yl(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var d = Qn(), u = lt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : d.weekStartsOn) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(u >= 0 && u <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Oe(e), m = p.getDay(), h = (m < u ? -7 : 0) + 6 - (m - u);
  return p.setDate(p.getDate() + h), p.setHours(23, 59, 59, 999), p;
}
function sp(e) {
  return Ce(1, arguments), yl(e, {
    weekStartsOn: 1
  });
}
function h0(e, t) {
  Ce(2, arguments);
  var n = lt(t);
  return r0(e, -n);
}
var v0 = 864e5;
function g0(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / v0) + 1;
}
function ss(e) {
  Ce(1, arguments);
  var t = 1, n = Oe(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function ip(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = ss(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = ss(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function b0(e) {
  Ce(1, arguments);
  var t = ip(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = ss(n);
  return r;
}
var x0 = 6048e5;
function y0(e) {
  Ce(1, arguments);
  var t = Oe(e), n = ss(t).getTime() - b0(t).getTime();
  return Math.round(n / x0) + 1;
}
function is(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var d = Qn(), u = lt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : d.weekStartsOn) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(u >= 0 && u <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Oe(e), m = p.getUTCDay(), h = (m < u ? 7 : 0) + m - u;
  return p.setUTCDate(p.getUTCDate() - h), p.setUTCHours(0, 0, 0, 0), p;
}
function cp(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var d = Oe(e), u = d.getUTCFullYear(), p = Qn(), m = lt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setUTCFullYear(u + 1, 0, m), h.setUTCHours(0, 0, 0, 0);
  var v = is(h, t), g = new Date(0);
  g.setUTCFullYear(u, 0, m), g.setUTCHours(0, 0, 0, 0);
  var b = is(g, t);
  return d.getTime() >= v.getTime() ? u + 1 : d.getTime() >= b.getTime() ? u : u - 1;
}
function $0(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var d = Qn(), u = lt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = cp(e, t), m = new Date(0);
  m.setUTCFullYear(p, 0, u), m.setUTCHours(0, 0, 0, 0);
  var h = is(m, t);
  return h;
}
var w0 = 6048e5;
function _0(e, t) {
  Ce(1, arguments);
  var n = Oe(e), r = is(n, t).getTime() - $0(n, t).getTime();
  return Math.round(r / w0) + 1;
}
function We(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var C0 = {
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
const An = C0;
var Rr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, S0 = {
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
    return An.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, o) {
    var a = cp(t, o), s = a > 0 ? a : 1 - a;
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
    var r = ip(t);
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
        return An.M(t, n);
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
    var a = _0(t, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : We(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var o = y0(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : We(o, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : An.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var o = g0(t);
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
    switch (o === 12 ? a = Rr.noon : o === 0 ? a = Rr.midnight : a = o / 12 >= 1 ? "pm" : "am", n) {
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
    switch (o >= 17 ? a = Rr.evening : o >= 12 ? a = Rr.afternoon : o >= 4 ? a = Rr.morning : a = Rr.night, n) {
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
    return An.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : An.H(t, n);
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
    }) : An.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : An.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return An.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (n) {
      case "X":
        return au(s);
      case "XXXX":
      case "XX":
        return ar(s);
      case "XXXXX":
      case "XXX":
      default:
        return ar(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return au(s);
      case "xxxx":
      case "xx":
        return ar(s);
      case "xxxxx":
      case "xxx":
      default:
        return ar(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ou(s, ":");
      case "OOOO":
      default:
        return "GMT" + ar(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ou(s, ":");
      case "zzzz":
      default:
        return "GMT" + ar(s, ":");
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
function ou(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var s = t || "";
  return n + String(o) + s + We(a, 2);
}
function au(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + We(Math.abs(e) / 60, 2);
  }
  return ar(e, t);
}
function ar(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", o = Math.abs(e), a = We(Math.floor(o / 60), 2), s = We(o % 60, 2);
  return r + a + n + s;
}
const E0 = S0;
var su = function(t, n) {
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
}, lp = function(t, n) {
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
}, N0 = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return su(t, n);
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
  return s.replace("{{date}}", su(o, n)).replace("{{time}}", lp(a, n));
}, P0 = {
  p: lp,
  P: N0
};
const T0 = P0;
var k0 = ["D", "DD"], O0 = ["YY", "YYYY"];
function M0(e) {
  return k0.indexOf(e) !== -1;
}
function D0(e) {
  return O0.indexOf(e) !== -1;
}
function iu(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var R0 = {
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
}, A0 = function(t, n, r) {
  var o, a = R0[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const j0 = A0;
var I0 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, L0 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, F0 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, V0 = {
  date: Mi({
    formats: I0,
    defaultWidth: "full"
  }),
  time: Mi({
    formats: L0,
    defaultWidth: "full"
  }),
  dateTime: Mi({
    formats: F0,
    defaultWidth: "full"
  })
};
const U0 = V0;
var W0 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, z0 = function(t, n, r, o) {
  return W0[t];
};
const B0 = z0;
var Y0 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, H0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, K0 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, G0 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Z0 = {
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
}, q0 = {
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
}, X0 = function(t, n) {
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
}, Q0 = {
  ordinalNumber: X0,
  era: Co({
    values: Y0,
    defaultWidth: "wide"
  }),
  quarter: Co({
    values: H0,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Co({
    values: K0,
    defaultWidth: "wide"
  }),
  day: Co({
    values: G0,
    defaultWidth: "wide"
  }),
  dayPeriod: Co({
    values: Z0,
    defaultWidth: "wide",
    formattingValues: q0,
    defaultFormattingWidth: "wide"
  })
};
const J0 = Q0;
var ey = /^(\d+)(th|st|nd|rd)?/i, ty = /\d+/i, ny = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ry = {
  any: [/^b/i, /^(a|c)/i]
}, oy = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ay = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, sy = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, iy = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, cy = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ly = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, dy = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, uy = {
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
}, fy = {
  ordinalNumber: n0({
    matchPattern: ey,
    parsePattern: ty,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: So({
    matchPatterns: ny,
    defaultMatchWidth: "wide",
    parsePatterns: ry,
    defaultParseWidth: "any"
  }),
  quarter: So({
    matchPatterns: oy,
    defaultMatchWidth: "wide",
    parsePatterns: ay,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: So({
    matchPatterns: sy,
    defaultMatchWidth: "wide",
    parsePatterns: iy,
    defaultParseWidth: "any"
  }),
  day: So({
    matchPatterns: cy,
    defaultMatchWidth: "wide",
    parsePatterns: ly,
    defaultParseWidth: "any"
  }),
  dayPeriod: So({
    matchPatterns: dy,
    defaultMatchWidth: "any",
    parsePatterns: uy,
    defaultParseWidth: "any"
  })
};
const py = fy;
var my = {
  code: "en-US",
  formatDistance: j0,
  formatLong: U0,
  formatRelative: B0,
  localize: J0,
  match: py,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const dp = my;
var hy = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, vy = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, gy = /^'([^]*?)'?$/, by = /''/g, xy = /[a-zA-Z]/;
function wr(e, t, n) {
  var r, o, a, s, i, c, l, d, u, p, m, h, v, g, b, y, $, _;
  Ce(2, arguments);
  var w = String(t), P = Qn(), k = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : P.locale) !== null && r !== void 0 ? r : dp, L = lt((a = (s = (i = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && i !== void 0 ? i : P.firstWeekContainsDate) !== null && s !== void 0 ? s : (u = P.locale) === null || u === void 0 || (p = u.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(L >= 1 && L <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var I = lt((m = (h = (v = (g = n == null ? void 0 : n.weekStartsOn) !== null && g !== void 0 ? g : n == null || (b = n.locale) === null || b === void 0 || (y = b.options) === null || y === void 0 ? void 0 : y.weekStartsOn) !== null && v !== void 0 ? v : P.weekStartsOn) !== null && h !== void 0 ? h : ($ = P.locale) === null || $ === void 0 || (_ = $.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(I >= 0 && I <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!k.localize)
    throw new RangeError("locale must contain localize property");
  if (!k.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var ee = Oe(e);
  if (!u0(ee))
    throw new RangeError("Invalid time value");
  var te = Ro(ee), K = h0(ee, te), Z = {
    firstWeekContainsDate: L,
    weekStartsOn: I,
    locale: k,
    _originalDate: ee
  }, O = w.match(vy).map(function(A) {
    var j = A[0];
    if (j === "p" || j === "P") {
      var W = T0[j];
      return W(A, k.formatLong);
    }
    return A;
  }).join("").match(hy).map(function(A) {
    if (A === "''")
      return "'";
    var j = A[0];
    if (j === "'")
      return yy(A);
    var W = E0[j];
    if (W)
      return !(n != null && n.useAdditionalWeekYearTokens) && D0(A) && iu(A, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && M0(A) && iu(A, t, String(e)), W(K, A, k.localize, Z);
    if (j.match(xy))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + j + "`");
    return A;
  }).join("");
  return O;
}
function yy(e) {
  var t = e.match(gy);
  return t ? t[1].replace(by, "'") : e;
}
function $y(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getFullYear(), r = t.getMonth(), o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var wy = 6048e5;
function _y(e) {
  Ce(1, arguments);
  var t = Oe(e), n = fr(t).getTime() - s0(t).getTime();
  return Math.round(n / wy) + 1;
}
function Cy(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getTime();
  return n;
}
function Sy(e) {
  return Ce(1, arguments), Math.floor(Cy(e) / 1e3);
}
function Ey(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var d = Oe(e), u = d.getFullYear(), p = Qn(), m = lt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setFullYear(u + 1, 0, m), h.setHours(0, 0, 0, 0);
  var v = on(h, t), g = new Date(0);
  g.setFullYear(u, 0, m), g.setHours(0, 0, 0, 0);
  var b = on(g, t);
  return d.getTime() >= v.getTime() ? u + 1 : d.getTime() >= b.getTime() ? u : u - 1;
}
function Ny(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var d = Qn(), u = lt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = Ey(e, t), m = new Date(0);
  m.setFullYear(p, 0, u), m.setHours(0, 0, 0, 0);
  var h = on(m, t);
  return h;
}
var Py = 6048e5;
function Ty(e, t) {
  Ce(1, arguments);
  var n = Oe(e), r = on(n, t).getTime() - Ny(n, t).getTime();
  return Math.round(r / Py) + 1;
}
function ky(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Oy(e, t) {
  return Ce(1, arguments), p0(ky(e), Pt(e), t) + 1;
}
function up(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = Oe(t);
  return n.getTime() > r.getTime();
}
function fp(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = Oe(t);
  return n.getTime() < r.getTime();
}
function $l(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = Oe(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function My(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = Oe(t);
  return n.getFullYear() === r.getFullYear();
}
function cu(e, t) {
  Ce(2, arguments);
  var n = lt(t);
  return At(e, -n);
}
function Di(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = lt(t), o = n.getFullYear(), a = n.getDate(), s = new Date(0);
  s.setFullYear(o, r, 15), s.setHours(0, 0, 0, 0);
  var i = $y(s);
  return n.setMonth(r, Math.min(a, i)), n;
}
function lu(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = lt(t);
  return isNaN(n.getTime()) ? new Date(NaN) : (n.setFullYear(r), n);
}
var Se = function() {
  return Se = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Se.apply(this, arguments);
};
function Dy(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function pp(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function oa(e) {
  return e.mode === "multiple";
}
function aa(e) {
  return e.mode === "range";
}
function Bs(e) {
  return e.mode === "single";
}
var Ry = {
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
function Ay(e, t) {
  return wr(e, "LLLL y", t);
}
function jy(e, t) {
  return wr(e, "d", t);
}
function Iy(e, t) {
  return wr(e, "LLLL", t);
}
function Ly(e) {
  return "".concat(e);
}
function Fy(e, t) {
  return wr(e, "cccccc", t);
}
function Vy(e, t) {
  return wr(e, "yyyy", t);
}
var Uy = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: Ay,
  formatDay: jy,
  formatMonthCaption: Iy,
  formatWeekNumber: Ly,
  formatWeekdayName: Fy,
  formatYearCaption: Vy
}), Wy = function(e, t, n) {
  return wr(e, "do MMMM (EEEE)", n);
}, zy = function() {
  return "Month: ";
}, By = function() {
  return "Go to next month";
}, Yy = function() {
  return "Go to previous month";
}, Hy = function(e, t) {
  return wr(e, "cccc", t);
}, Ky = function(e) {
  return "Week n. ".concat(e);
}, Gy = function() {
  return "Year: ";
}, Zy = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: Wy,
  labelMonthDropdown: zy,
  labelNext: By,
  labelPrevious: Yy,
  labelWeekNumber: Ky,
  labelWeekday: Hy,
  labelYearDropdown: Gy
});
function qy() {
  var e = "buttons", t = Ry, n = dp, r = {}, o = {}, a = 1, s = {}, i = new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: Uy,
    labels: Zy,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function Xy(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = Pt(r) : t && (a = new Date(t, 0, 1)), o ? s = xl(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? Zr(a) : void 0,
    toDate: s ? Zr(s) : void 0
  };
}
var mp = ct(void 0);
function Qy(e) {
  var t, n = e.initialProps, r = qy(), o = Xy(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (Bs(n) || oa(n) || aa(n)) && (c = n.onSelect);
  var l = Se(Se(Se({}, r), n), { captionLayout: i, classNames: Se(Se({}, r.classNames), n.classNames), components: Se({}, n.components), formatters: Se(Se({}, r.formatters), n.formatters), fromDate: a, labels: Se(Se({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: Se(Se({}, r.modifiers), n.modifiers), modifiersClassNames: Se(Se({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: Se(Se({}, r.styles), n.styles), toDate: s });
  return N.createElement(mp.Provider, { value: l }, e.children);
}
function Ge() {
  var e = He(mp);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function hp(e) {
  var t = Ge(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return N.createElement("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id }, a(e.displayMonth, { locale: n }));
}
function Jy(e) {
  return N.createElement(
    "svg",
    Se({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e),
    N.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function vp(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, l = Ge(), d = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : Jy;
  return N.createElement(
    "div",
    { className: i, style: c },
    N.createElement("span", { className: l.classNames.vhidden }, e["aria-label"]),
    N.createElement("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: r }, a),
    N.createElement(
      "div",
      { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true" },
      s,
      N.createElement(d, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })
    )
  );
}
function e1(e) {
  var t, n = Ge(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, d = n.labels.labelMonthDropdown;
  if (!r)
    return N.createElement(N.Fragment, null);
  if (!o)
    return N.createElement(N.Fragment, null);
  var u = [];
  if (My(r, o))
    for (var p = Pt(r), m = r.getMonth(); m <= o.getMonth(); m++)
      u.push(Di(p, m));
  else
    for (var p = Pt(new Date()), m = 0; m <= 11; m++)
      u.push(Di(p, m));
  var h = function(g) {
    var b = Number(g.target.value), y = Di(Pt(e.displayMonth), b);
    e.onChange(y);
  }, v = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : vp;
  return N.createElement(v, { name: "months", "aria-label": d(), className: c.dropdown_month, style: a.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }) }, u.map(function(g) {
    return N.createElement("option", { key: g.getMonth(), value: g.getMonth() }, i(g, { locale: s }));
  }));
}
function t1(e) {
  var t, n = e.displayMonth, r = Ge(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, l = r.components, d = r.formatters.formatYearCaption, u = r.labels.labelYearDropdown, p = [];
  if (!o)
    return N.createElement(N.Fragment, null);
  if (!a)
    return N.createElement(N.Fragment, null);
  for (var m = o.getFullYear(), h = a.getFullYear(), v = m; v <= h; v++)
    p.push(lu(m0(new Date()), v));
  var g = function(y) {
    var $ = lu(Pt(n), Number(y.target.value));
    e.onChange($);
  }, b = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : vp;
  return N.createElement(b, { name: "years", "aria-label": u(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: d(n, { locale: s }) }, p.map(function(y) {
    return N.createElement("option", { key: y.getFullYear(), value: y.getFullYear() }, d(y, { locale: s }));
  }));
}
function n1(e, t) {
  var n = Y(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function r1(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && Ao(a, o) < 0) {
    var l = -1 * (c - 1);
    o = rn(a, l);
  }
  return s && Ao(o, s) < 0 && (o = s), Pt(o);
}
function o1() {
  var e = Ge(), t = r1(e), n = n1(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = Pt(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function a1(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Pt(e), a = Pt(rn(o, r)), s = Ao(a, o), i = [], c = 0; c < s; c++) {
    var l = rn(o, c);
    i.push(l);
  }
  return n && (i = i.reverse()), i;
}
function s1(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Pt(e);
    if (!n)
      return rn(i, s);
    var c = Ao(n, e);
    if (!(c < a))
      return rn(i, s);
  }
}
function i1(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Pt(e);
    if (!n)
      return rn(i, -s);
    var c = Ao(i, n);
    if (!(c <= 0))
      return rn(i, -s);
  }
}
var gp = ct(void 0);
function c1(e) {
  var t = Ge(), n = o1(), r = n[0], o = n[1], a = a1(r, t), s = s1(r, t), i = i1(r, t), c = function(u) {
    return a.some(function(p) {
      return $l(u, p);
    });
  }, l = function(u, p) {
    c(u) || (p && fp(u, p) ? o(rn(u, 1 + t.numberOfMonths * -1)) : o(u));
  }, d = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return N.createElement(gp.Provider, { value: d }, e.children);
}
function sa() {
  var e = He(gp);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function du(e) {
  var t, n = Ge(), r = n.classNames, o = n.styles, a = n.components, s = sa().goToMonth, i = function(d) {
    s(d);
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : hp, l = N.createElement(c, { id: e.id, displayMonth: e.displayMonth });
  return N.createElement(
    "div",
    { className: r.caption_dropdowns, style: o.caption_dropdowns },
    N.createElement("div", { className: r.vhidden }, l),
    N.createElement(e1, { onChange: i, displayMonth: e.displayMonth }),
    N.createElement(t1, { onChange: i, displayMonth: e.displayMonth })
  );
}
function l1(e) {
  return N.createElement(
    "svg",
    Se({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    N.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function d1(e) {
  return N.createElement(
    "svg",
    Se({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    N.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })
  );
}
var cs = R(function(e, t) {
  var n = Ge(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = Se(Se({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), N.createElement("button", Se({}, e, { ref: t, type: "button", className: s, style: i }));
});
function u1(e) {
  var t, n, r = Ge(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, l = c.labelPrevious, d = c.labelNext, u = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return N.createElement(N.Fragment, null);
  var p = l(e.previousMonth, { locale: a }), m = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), h = d(e.nextMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = u == null ? void 0 : u.IconRight) !== null && t !== void 0 ? t : d1, b = (n = u == null ? void 0 : u.IconLeft) !== null && n !== void 0 ? n : l1;
  return N.createElement(
    "div",
    { className: s.nav, style: i.nav },
    !e.hidePrevious && N.createElement(cs, { name: "previous-month", "aria-label": p, className: m, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick }, o === "rtl" ? N.createElement(g, { className: s.nav_icon, style: i.nav_icon }) : N.createElement(b, { className: s.nav_icon, style: i.nav_icon })),
    !e.hideNext && N.createElement(cs, { name: "next-month", "aria-label": h, className: v, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick }, o === "rtl" ? N.createElement(b, { className: s.nav_icon, style: i.nav_icon }) : N.createElement(g, { className: s.nav_icon, style: i.nav_icon }))
  );
}
function uu(e) {
  var t = Ge().numberOfMonths, n = sa(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(h) {
    return $l(e.displayMonth, h);
  }), c = i === 0, l = i === s.length - 1, d = t > 1 && (c || !l), u = t > 1 && (l || !c), p = function() {
    r && a(r);
  }, m = function() {
    o && a(o);
  };
  return N.createElement(u1, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: u, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: m });
}
function f1(e) {
  var t, n = Ge(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : hp, l;
  return o ? l = N.createElement(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? l = N.createElement(du, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? l = N.createElement(
    N.Fragment,
    null,
    N.createElement(du, { displayMonth: e.displayMonth, id: e.id }),
    N.createElement(uu, { displayMonth: e.displayMonth, id: e.id })
  ) : l = N.createElement(
    N.Fragment,
    null,
    N.createElement(c, { id: e.id, displayMonth: e.displayMonth }),
    N.createElement(uu, { displayMonth: e.displayMonth, id: e.id })
  ), N.createElement("div", { className: r.caption, style: a.caption }, l);
}
function p1(e) {
  var t = Ge(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
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
function m1(e, t, n) {
  for (var r = n ? fr(new Date()) : on(new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = At(r, a);
    o.push(s);
  }
  return o;
}
function h1() {
  var e = Ge(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = m1(o, a, s);
  return N.createElement(
    "tr",
    { style: n.head_row, className: t.head_row },
    r && N.createElement("td", { style: n.head_cell, className: t.head_cell }),
    l.map(function(d, u) {
      return N.createElement("th", { key: u, scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(d, { locale: o }) }, i(d, { locale: o }));
    })
  );
}
function v1() {
  var e, t = Ge(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : h1;
  return N.createElement(
    "thead",
    { style: r.head, className: n.head },
    N.createElement(a, null)
  );
}
function g1(e) {
  var t = Ge(), n = t.locale, r = t.formatters.formatDay;
  return N.createElement(N.Fragment, null, r(e.date, { locale: n }));
}
var wl = ct(void 0);
function b1(e) {
  if (!oa(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return N.createElement(wl.Provider, { value: t }, e.children);
  }
  return N.createElement(x1, { initialProps: e.initialProps, children: e.children });
}
function x1(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, d, u) {
    var p, m;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, l, d, u);
    var h = Boolean(d.selected && o && (r == null ? void 0 : r.length) === o);
    if (!h) {
      var v = Boolean(!d.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var g = r ? pp([], r, !0) : [];
        if (d.selected) {
          var b = g.findIndex(function(y) {
            return Et(l, y);
          });
          g.splice(b, 1);
        } else
          g.push(l);
        (m = t.onSelect) === null || m === void 0 || m.call(t, g, l, d, u);
      }
    }
  }, i = {
    disabled: []
  };
  r && i.disabled.push(function(l) {
    var d = a && r.length > a - 1, u = r.some(function(p) {
      return Et(p, l);
    });
    return Boolean(d && !u);
  });
  var c = {
    selected: r,
    onDayClick: s,
    modifiers: i
  };
  return N.createElement(wl.Provider, { value: c }, n);
}
function _l() {
  var e = He(wl);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function y1(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  if (!r)
    return { from: e, to: void 0 };
  if (!o && Et(r, e))
    return { from: r, to: e };
  if (!o && fp(e, r))
    return { from: e, to: r };
  if (!o)
    return { from: r, to: e };
  if (!(Et(o, e) && Et(r, e))) {
    if (Et(o, e))
      return { from: o, to: void 0 };
    if (!Et(r, e))
      return up(r, e) ? { from: e, to: o } : { from: r, to: e };
  }
}
var Cl = ct(void 0);
function $1(e) {
  if (!aa(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return N.createElement(Cl.Provider, { value: t }, e.children);
  }
  return N.createElement(w1, { initialProps: e.initialProps, children: e.children });
}
function w1(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, l = function(m, h, v) {
    var g, b;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, m, h, v);
    var y = y1(m, r);
    (b = t.onSelect) === null || b === void 0 || b.call(t, y, m, h, v);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a && (d.range_start = [a], s ? (d.range_end = [s], Et(a, s) || (d.range_middle = [
    {
      after: a,
      before: s
    }
  ])) : d.range_end = [a]), i && (a && !s && d.disabled.push({
    after: cu(a, i - 1),
    before: At(a, i - 1)
  }), a && s && d.disabled.push({
    after: a,
    before: At(a, i - 1)
  })), c && (a && !s && (d.disabled.push({
    before: At(a, -c + 1)
  }), d.disabled.push({
    after: At(a, c - 1)
  })), a && s)) {
    var u = yn(s, a) + 1, p = c - u;
    d.disabled.push({
      before: cu(a, p)
    }), d.disabled.push({
      after: At(s, p)
    });
  }
  return N.createElement(Cl.Provider, { value: { selected: r, onDayClick: l, modifiers: d } }, n);
}
function Sl() {
  var e = He(Cl);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Ja(e) {
  return Array.isArray(e) ? pp([], e, !0) : e !== void 0 ? [e] : [];
}
function _1(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = Ja(o);
  }), t;
}
var Gt;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Gt || (Gt = {}));
var C1 = Gt.Selected, vn = Gt.Disabled, S1 = Gt.Hidden, E1 = Gt.Today, Ri = Gt.RangeEnd, Ai = Gt.RangeMiddle, ji = Gt.RangeStart, N1 = Gt.Outside;
function P1(e, t, n) {
  var r, o = (r = {}, r[C1] = Ja(e.selected), r[vn] = Ja(e.disabled), r[S1] = Ja(e.hidden), r[E1] = [e.today], r[Ri] = [], r[Ai] = [], r[ji] = [], r[N1] = [], r);
  return e.fromDate && o[vn].push({ before: e.fromDate }), e.toDate && o[vn].push({ after: e.toDate }), oa(e) ? o[vn] = o[vn].concat(t.modifiers[vn]) : aa(e) && (o[vn] = o[vn].concat(n.modifiers[vn]), o[ji] = n.modifiers[ji], o[Ai] = n.modifiers[Ai], o[Ri] = n.modifiers[Ri]), o;
}
var bp = ct(void 0);
function T1(e) {
  var t = Ge(), n = _l(), r = Sl(), o = P1(t, n, r), a = _1(t.modifiers), s = Se(Se({}, o), a);
  return N.createElement(bp.Provider, { value: s }, e.children);
}
function xp() {
  var e = He(bp);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function k1(e) {
  return Boolean(e && typeof e == "object" && "before" in e && "after" in e);
}
function O1(e) {
  return Boolean(e && typeof e == "object" && "from" in e);
}
function M1(e) {
  return Boolean(e && typeof e == "object" && "after" in e);
}
function D1(e) {
  return Boolean(e && typeof e == "object" && "before" in e);
}
function R1(e) {
  return Boolean(e && typeof e == "object" && "dayOfWeek" in e);
}
function A1(e, t) {
  var n, r = t.from, o = t.to;
  if (!r)
    return !1;
  if (!o && Et(r, e))
    return !0;
  if (!o)
    return !1;
  var a = yn(o, r) < 0;
  a && (n = [o, r], r = n[0], o = n[1]);
  var s = yn(e, r) >= 0 && yn(o, e) >= 0;
  return s;
}
function j1(e) {
  return bl(e);
}
function I1(e) {
  return Array.isArray(e) && e.every(bl);
}
function L1(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (j1(n))
      return Et(e, n);
    if (I1(n))
      return n.includes(e);
    if (O1(n))
      return A1(e, n);
    if (R1(n))
      return n.dayOfWeek.includes(e.getDay());
    if (k1(n)) {
      var r = yn(n.before, e), o = yn(n.after, e), a = r > 0, s = o < 0, i = up(n.before, n.after);
      return i ? s && a : a || s;
    }
    return M1(n) ? yn(e, n.after) > 0 : D1(n) ? yn(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function El(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return L1(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !$l(e, n) && (o.outside = !0), o;
}
function F1(e, t) {
  for (var n = Pt(e[0]), r = xl(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = El(s, t), c = !i.disabled && !i.hidden;
    if (!c) {
      s = At(s, 1);
      continue;
    }
    if (i.selected)
      return s;
    i.today && !a && (a = s), o || (o = s), s = At(s, 1);
  }
  return a || o;
}
var V1 = 365;
function yp(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, l = o.fromDate, d = o.toDate, u = o.locale, p = {
    day: At,
    week: Sc,
    month: rn,
    year: c0,
    startOfWeek: function(g) {
      return o.ISOWeek ? fr(g) : on(g, { locale: u, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? sp(g) : yl(g, { locale: u, weekStartsOn: c });
    }
  }, m = p[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? m = l0([l, m]) : r === "after" && d && (m = d0([d, m]));
  var h = !0;
  if (a) {
    var v = El(m, a);
    h = !v.disabled && !v.hidden;
  }
  return h ? m : i.count > V1 ? i.lastFocused : yp(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: Se(Se({}, i), { count: i.count + 1 })
  });
}
var $p = ct(void 0);
function U1(e) {
  var t = sa(), n = xp(), r = Y(), o = r[0], a = r[1], s = Y(), i = s[0], c = s[1], l = F1(t.displayMonths, n), d = o ?? (i && t.isDateDisplayed(i)) ? i : l, u = function() {
    c(o), a(void 0);
  }, p = function(g) {
    a(g);
  }, m = Ge(), h = function(g, b) {
    if (o) {
      var y = yp(o, {
        moveBy: g,
        direction: b,
        context: m,
        modifiers: n
      });
      Et(o, y) || (t.goToDate(y, o), p(y));
    }
  }, v = {
    focusedDay: o,
    focusTarget: d,
    blur: u,
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
  return N.createElement($p.Provider, { value: v }, e.children);
}
function Nl() {
  var e = He($p);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function W1(e, t) {
  var n = xp(), r = El(e, n, t);
  return r;
}
var Pl = ct(void 0);
function z1(e) {
  if (!Bs(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return N.createElement(Pl.Provider, { value: t }, e.children);
  }
  return N.createElement(B1, { initialProps: e.initialProps, children: e.children });
}
function B1(e) {
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
  return N.createElement(Pl.Provider, { value: o }, n);
}
function wp() {
  var e = He(Pl);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function Y1(e, t) {
  var n = Ge(), r = wp(), o = _l(), a = Sl(), s = Nl(), i = s.focusDayAfter, c = s.focusDayBefore, l = s.focusWeekAfter, d = s.focusWeekBefore, u = s.blur, p = s.focus, m = s.focusMonthBefore, h = s.focusMonthAfter, v = s.focusYearBefore, g = s.focusYearAfter, b = s.focusStartOfWeek, y = s.focusEndOfWeek, $ = function(W) {
    var B, M, D, U;
    Bs(n) ? (B = r.onDayClick) === null || B === void 0 || B.call(r, e, t, W) : oa(n) ? (M = o.onDayClick) === null || M === void 0 || M.call(o, e, t, W) : aa(n) ? (D = a.onDayClick) === null || D === void 0 || D.call(a, e, t, W) : (U = n.onDayClick) === null || U === void 0 || U.call(n, e, t, W);
  }, _ = function(W) {
    var B;
    p(e), (B = n.onDayFocus) === null || B === void 0 || B.call(n, e, t, W);
  }, w = function(W) {
    var B;
    u(), (B = n.onDayBlur) === null || B === void 0 || B.call(n, e, t, W);
  }, P = function(W) {
    var B;
    (B = n.onDayMouseEnter) === null || B === void 0 || B.call(n, e, t, W);
  }, k = function(W) {
    var B;
    (B = n.onDayMouseLeave) === null || B === void 0 || B.call(n, e, t, W);
  }, L = function(W) {
    var B;
    (B = n.onDayPointerEnter) === null || B === void 0 || B.call(n, e, t, W);
  }, I = function(W) {
    var B;
    (B = n.onDayPointerLeave) === null || B === void 0 || B.call(n, e, t, W);
  }, ee = function(W) {
    var B;
    (B = n.onDayTouchCancel) === null || B === void 0 || B.call(n, e, t, W);
  }, te = function(W) {
    var B;
    (B = n.onDayTouchEnd) === null || B === void 0 || B.call(n, e, t, W);
  }, K = function(W) {
    var B;
    (B = n.onDayTouchMove) === null || B === void 0 || B.call(n, e, t, W);
  }, Z = function(W) {
    var B;
    (B = n.onDayTouchStart) === null || B === void 0 || B.call(n, e, t, W);
  }, O = function(W) {
    var B;
    (B = n.onDayKeyUp) === null || B === void 0 || B.call(n, e, t, W);
  }, A = function(W) {
    var B;
    switch (W.key) {
      case "ArrowLeft":
        W.preventDefault(), W.stopPropagation(), n.dir === "rtl" ? i() : c();
        break;
      case "ArrowRight":
        W.preventDefault(), W.stopPropagation(), n.dir === "rtl" ? c() : i();
        break;
      case "ArrowDown":
        W.preventDefault(), W.stopPropagation(), l();
        break;
      case "ArrowUp":
        W.preventDefault(), W.stopPropagation(), d();
        break;
      case "PageUp":
        W.preventDefault(), W.stopPropagation(), W.shiftKey ? v() : m();
        break;
      case "PageDown":
        W.preventDefault(), W.stopPropagation(), W.shiftKey ? g() : h();
        break;
      case "Home":
        W.preventDefault(), W.stopPropagation(), b();
        break;
      case "End":
        W.preventDefault(), W.stopPropagation(), y();
        break;
    }
    (B = n.onDayKeyDown) === null || B === void 0 || B.call(n, e, t, W);
  }, j = {
    onClick: $,
    onFocus: _,
    onBlur: w,
    onKeyDown: A,
    onKeyUp: O,
    onMouseEnter: P,
    onMouseLeave: k,
    onPointerEnter: L,
    onPointerLeave: I,
    onTouchCancel: ee,
    onTouchEnd: te,
    onTouchMove: K,
    onTouchStart: Z
  };
  return j;
}
function H1() {
  var e = Ge(), t = wp(), n = _l(), r = Sl(), o = Bs(e) ? t.selected : oa(e) ? n.selected : aa(e) ? r.selected : void 0;
  return o;
}
function K1(e) {
  return Object.values(Gt).includes(e);
}
function G1(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (K1(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function Z1(e, t) {
  var n = Se({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = Se(Se({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function q1(e, t, n) {
  var r, o, a, s = Ge(), i = Nl(), c = W1(e, t), l = Y1(e, c), d = H1(), u = Boolean(s.onDayClick || s.mode !== "default");
  G(function() {
    var P;
    c.outside || i.focusedDay && u && Et(i.focusedDay, e) && ((P = n.current) === null || P === void 0 || P.focus());
  }, [
    i.focusedDay,
    e,
    n,
    u,
    c.outside
  ]);
  var p = G1(s, c).join(" "), m = Z1(s, c), h = Boolean(c.outside && !s.showOutsideDays || c.hidden), v = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : g1, g = N.createElement(v, { date: e, displayMonth: t, activeModifiers: c }), b = {
    style: m,
    className: p,
    children: g,
    role: "gridcell"
  }, y = i.focusTarget && Et(i.focusTarget, e) && !c.outside, $ = i.focusedDay && Et(i.focusedDay, e), _ = Se(Se(Se({}, b), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = $ || y ? 0 : -1, r)), l), w = {
    isButton: u,
    isHidden: h,
    activeModifiers: c,
    selectedDays: d,
    buttonProps: _,
    divProps: b
  };
  return w;
}
function X1(e) {
  var t = V(null), n = q1(e.date, e.displayMonth, t);
  return n.isHidden ? N.createElement("div", { role: "gridcell" }) : n.isButton ? N.createElement(cs, Se({ name: "day", ref: t }, n.buttonProps)) : N.createElement("div", Se({}, n.divProps));
}
function Q1(e) {
  var t = e.number, n = e.dates, r = Ge(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, d = l(Number(t), { locale: i });
  if (!o)
    return N.createElement("span", { className: s.weeknumber, style: a.weeknumber }, d);
  var u = c(Number(t), { locale: i }), p = function(m) {
    o(t, n, m);
  };
  return N.createElement(cs, { name: "week-number", "aria-label": u, className: s.weeknumber, style: a.weeknumber, onClick: p }, d);
}
function J1(e) {
  var t, n, r = Ge(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : X1, l = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : Q1, d;
  return s && (d = N.createElement(
    "td",
    { className: a.cell, style: o.cell },
    N.createElement(l, { number: e.weekNumber, dates: e.dates })
  )), N.createElement(
    "tr",
    { className: a.row, style: o.row },
    d,
    e.dates.map(function(u) {
      return N.createElement(
        "td",
        { className: a.cell, style: o.cell, key: Sy(u), role: "presentation" },
        N.createElement(c, { displayMonth: e.displayMonth, date: u })
      );
    })
  );
}
function fu(e, t, n) {
  for (var r = n != null && n.ISOWeek ? sp(t) : yl(t, n), o = n != null && n.ISOWeek ? fr(e) : on(e, n), a = yn(r, o), s = [], i = 0; i <= a; i++)
    s.push(At(o, i));
  var c = s.reduce(function(l, d) {
    var u = n != null && n.ISOWeek ? _y(d) : Ty(d, n), p = l.find(function(m) {
      return m.weekNumber === u;
    });
    return p ? (p.dates.push(d), l) : (l.push({
      weekNumber: u,
      dates: [d]
    }), l);
  }, []);
  return c;
}
function e$(e, t) {
  var n = fu(Pt(e), xl(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = Oy(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = Sc(a, 6 - r), i = fu(Sc(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function t$(e) {
  var t, n, r, o = Ge(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, l = o.fixedWeeks, d = o.components, u = o.weekStartsOn, p = o.firstWeekContainsDate, m = o.ISOWeek, h = e$(e.displayMonth, {
    useFixedWeeks: Boolean(l),
    ISOWeek: m,
    locale: a,
    weekStartsOn: u,
    firstWeekContainsDate: p
  }), v = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : v1, g = (n = d == null ? void 0 : d.Row) !== null && n !== void 0 ? n : J1, b = (r = d == null ? void 0 : d.Footer) !== null && r !== void 0 ? r : p1;
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
function n$() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var r$ = n$() ? C.useLayoutEffect : C.useEffect, Ii = !1, o$ = 0;
function pu() {
  return "react-day-picker-".concat(++o$);
}
function a$(e) {
  var t, n = e ?? (Ii ? pu() : null), r = C.useState(n), o = r[0], a = r[1];
  return r$(function() {
    o === null && a(pu());
  }, []), C.useEffect(function() {
    Ii === !1 && (Ii = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function s$(e) {
  var t, n, r = Ge(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = sa().displayMonths, l = a$(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), d = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, u = [a.month], p = s.month, m = e.displayIndex === 0, h = e.displayIndex === c.length - 1, v = !m && !h;
  o === "rtl" && (t = [m, h], h = t[0], m = t[1]), m && (u.push(a.caption_start), p = Se(Se({}, p), s.caption_start)), h && (u.push(a.caption_end), p = Se(Se({}, p), s.caption_end)), v && (u.push(a.caption_between), p = Se(Se({}, p), s.caption_between));
  var g = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : f1;
  return N.createElement(
    "div",
    { key: e.displayIndex, className: u.join(" "), style: p },
    N.createElement(g, { id: l, displayMonth: e.displayMonth }),
    N.createElement(t$, { id: d, "aria-labelledby": l, displayMonth: e.displayMonth })
  );
}
function i$(e) {
  var t = e.initialProps, n = Ge(), r = Nl(), o = sa(), a = Y(!1), s = a[0], i = a[1];
  G(function() {
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
  var l = Se(Se({}, n.styles.root), n.style), d = Object.keys(t).filter(function(u) {
    return u.startsWith("data-");
  }).reduce(function(u, p) {
    var m;
    return Se(Se({}, u), (m = {}, m[p] = t[p], m));
  }, {});
  return N.createElement(
    "div",
    Se({ className: c.join(" "), style: l, dir: n.dir, id: n.id }, d),
    N.createElement("div", { className: n.classNames.months, style: n.styles.months }, o.displayMonths.map(function(u, p) {
      return N.createElement(s$, { key: p, displayIndex: p, displayMonth: u });
    }))
  );
}
function c$(e) {
  var t = e.children, n = Dy(e, ["children"]);
  return N.createElement(
    Qy,
    { initialProps: n },
    N.createElement(
      c1,
      null,
      N.createElement(
        z1,
        { initialProps: n },
        N.createElement(
          b1,
          { initialProps: n },
          N.createElement(
            $1,
            { initialProps: n },
            N.createElement(
              T1,
              null,
              N.createElement(U1, null, t)
            )
          )
        )
      )
    )
  );
}
function l$(e) {
  return N.createElement(
    c$,
    Se({}, e),
    N.createElement(i$, { initialProps: e })
  );
}
function d$({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ f.exports.jsx(
    l$,
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
          Mo({ variant: "outline" }),
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
          Mo({ variant: "ghost" }),
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
        IconLeft: ({ ...o }) => /* @__PURE__ */ f.exports.jsx(vl, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ f.exports.jsx(ao, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
d$.displayName = "Calendar";
function u$(e, t) {
  const n = /* @__PURE__ */ ct(t);
  function r(a) {
    const { children: s, ...i } = a, c = yt(
      () => i,
      Object.values(i)
    );
    return /* @__PURE__ */ x(n.Provider, {
      value: c
    }, s);
  }
  function o(a) {
    const s = He(n);
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
function Ze(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ ct(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(u) {
      const { scope: p, children: m, ...h } = u, v = (p == null ? void 0 : p[e][c]) || i, g = yt(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ x(v.Provider, {
        value: g
      }, m);
    }
    function d(u, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, h = He(m);
      if (h)
        return h;
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
    const a = n.map((s) => /* @__PURE__ */ ct(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return yt(
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
    f$(o, ...t)
  ];
}
function f$(...e) {
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
        const u = c(a)[`__scope${l}`];
        return {
          ...i,
          ...u
        };
      }, {});
      return yt(
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
function ze(e) {
  const t = V(e);
  return G(() => {
    t.current = e;
  }), yt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const pt = Boolean(globalThis == null ? void 0 : globalThis.document) ? Ls : () => {
}, p$ = [
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
], ie = p$.reduce((e, t) => {
  const n = /* @__PURE__ */ R((r, o) => {
    const { asChild: a, ...s } = r, i = a ? nn : t;
    return G(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ x(i, S({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function ls(e, t) {
  e && Vs(
    () => e.dispatchEvent(t)
  );
}
const _p = "Avatar", [m$, bO] = Ze(_p), [h$, Cp] = m$(_p), v$ = /* @__PURE__ */ R((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = Y("idle");
  return /* @__PURE__ */ x(h$, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ x(ie.span, S({}, r, {
    ref: t
  })));
}), g$ = "AvatarImage", b$ = /* @__PURE__ */ R((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = Cp(g$, n), i = $$(r), c = ze((l) => {
    o(l), s.onImageLoadingStatusChange(l);
  });
  return pt(() => {
    i !== "idle" && c(i);
  }, [
    i,
    c
  ]), i === "loaded" ? /* @__PURE__ */ x(ie.img, S({}, a, {
    ref: t,
    src: r
  })) : null;
}), x$ = "AvatarFallback", y$ = /* @__PURE__ */ R((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = Cp(x$, n), [s, i] = Y(r === void 0);
  return G(() => {
    if (r !== void 0) {
      const c = window.setTimeout(
        () => i(!0),
        r
      );
      return () => window.clearTimeout(c);
    }
  }, [
    r
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ x(ie.span, S({}, o, {
    ref: t
  })) : null;
});
function $$(e) {
  const [t, n] = Y("idle");
  return G(() => {
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
const Sp = v$, Ep = b$, Np = y$, _r = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Sp,
  {
    ref: n,
    className: F(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
_r.displayName = Sp.displayName;
const Wn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ep,
  {
    ref: n,
    className: F("aspect-square h-full w-full", e),
    ...t
  }
));
Wn.displayName = Ep.displayName;
const Cr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Np,
  {
    ref: n,
    className: F(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
Cr.displayName = Np.displayName;
const w$ = oo(
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
function ht({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ f.exports.jsx("div", { className: F(w$({ variant: t }), e), ...n });
}
function H(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Jn(e) {
  const t = e + "CollectionProvider", [n, r] = Ze(t), [o, a] = n(t, {
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
    return /* @__PURE__ */ N.createElement(nn, {
      ref: y
    }, g);
  }), l = e + "CollectionItemSlot", d = "data-radix-collection-item", u = /* @__PURE__ */ N.forwardRef((m, h) => {
    const { scope: v, children: g, ...b } = m, y = N.useRef(null), $ = we(h, y), _ = a(l, v);
    return N.useEffect(() => (_.itemMap.set(y, {
      ref: y,
      ...b
    }), () => void _.itemMap.delete(y))), /* @__PURE__ */ N.createElement(nn, {
      [d]: "",
      ref: $
    }, g);
  });
  function p(m) {
    const h = a(e + "CollectionConsumer", m);
    return N.useCallback(() => {
      const g = h.collectionRef.current;
      if (!g)
        return [];
      const b = Array.from(g.querySelectorAll(`[${d}]`));
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
      ItemSlot: u
    },
    p,
    r
  ];
}
const _$ = /* @__PURE__ */ ct(void 0);
function dn(e) {
  const t = He(_$);
  return e || t || "ltr";
}
function C$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e);
  G(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Ec = "dismissableLayer.update", S$ = "dismissableLayer.pointerDownOutside", E$ = "dismissableLayer.focusOutside";
let mu;
const N$ = /* @__PURE__ */ ct({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Sr = /* @__PURE__ */ R((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...l } = e, d = He(N$), [u, p] = Y(null), m = (n = u == null ? void 0 : u.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = Y({}), v = we(
    t,
    (L) => p(L)
  ), g = Array.from(d.layers), [b] = [
    ...d.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = g.indexOf(b), $ = u ? g.indexOf(u) : -1, _ = d.layersWithOutsidePointerEventsDisabled.size > 0, w = $ >= y, P = P$((L) => {
    const I = L.target, ee = [
      ...d.branches
    ].some(
      (te) => te.contains(I)
    );
    !w || ee || (a == null || a(L), i == null || i(L), L.defaultPrevented || c == null || c());
  }, m), k = T$((L) => {
    const I = L.target;
    [
      ...d.branches
    ].some(
      (te) => te.contains(I)
    ) || (s == null || s(L), i == null || i(L), L.defaultPrevented || c == null || c());
  }, m);
  return C$((L) => {
    $ === d.layers.size - 1 && (o == null || o(L), !L.defaultPrevented && c && (L.preventDefault(), c()));
  }, m), G(() => {
    if (u)
      return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (mu = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(u)), d.layers.add(u), hu(), () => {
        r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = mu);
      };
  }, [
    u,
    m,
    r,
    d
  ]), G(() => () => {
    u && (d.layers.delete(u), d.layersWithOutsidePointerEventsDisabled.delete(u), hu());
  }, [
    u,
    d
  ]), G(() => {
    const L = () => h({});
    return document.addEventListener(Ec, L), () => document.removeEventListener(Ec, L);
  }, []), /* @__PURE__ */ x(ie.div, S({}, l, {
    ref: v,
    style: {
      pointerEvents: _ ? w ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: H(e.onFocusCapture, k.onFocusCapture),
    onBlurCapture: H(e.onBlurCapture, k.onBlurCapture),
    onPointerDownCapture: H(e.onPointerDownCapture, P.onPointerDownCapture)
  }));
});
function P$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e), r = V(!1), o = V(() => {
  });
  return G(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          Pp(S$, n, c, {
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
function T$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e), r = V(!1);
  return G(() => {
    const o = (a) => {
      a.target && !r.current && Pp(E$, n, {
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
function hu() {
  const e = new CustomEvent(Ec);
  document.dispatchEvent(e);
}
function Pp(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? ls(o, a) : o.dispatchEvent(a);
}
let Li = 0;
function Ys() {
  G(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : vu()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : vu()), Li++, () => {
      Li === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Li--;
    };
  }, []);
}
function vu() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const Fi = "focusScope.autoFocusOnMount", Vi = "focusScope.autoFocusOnUnmount", gu = {
  bubbles: !1,
  cancelable: !0
}, Hs = /* @__PURE__ */ R((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = Y(null), l = ze(o), d = ze(a), u = V(null), p = we(
    t,
    (v) => c(v)
  ), m = V({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  G(() => {
    if (r) {
      let v = function($) {
        if (m.paused || !i)
          return;
        const _ = $.target;
        i.contains(_) ? u.current = _ : In(u.current, {
          select: !0
        });
      }, g = function($) {
        if (m.paused || !i)
          return;
        const _ = $.relatedTarget;
        _ !== null && (i.contains(_) || In(u.current, {
          select: !0
        }));
      }, b = function($) {
        const _ = document.activeElement;
        for (const w of $)
          w.removedNodes.length > 0 && (i != null && i.contains(_) || In(i));
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
  ]), G(() => {
    if (i) {
      xu.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(Fi, gu);
        i.addEventListener(Fi, l), i.dispatchEvent(b), b.defaultPrevented || (k$(A$(Tp(i)), {
          select: !0
        }), document.activeElement === v && In(i));
      }
      return () => {
        i.removeEventListener(Fi, l), setTimeout(() => {
          const b = new CustomEvent(Vi, gu);
          i.addEventListener(Vi, d), i.dispatchEvent(b), b.defaultPrevented || In(v ?? document.body, {
            select: !0
          }), i.removeEventListener(Vi, d), xu.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    d,
    m
  ]);
  const h = ue((v) => {
    if (!n && !r || m.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
    if (g && b) {
      const y = v.currentTarget, [$, _] = O$(y);
      $ && _ ? !v.shiftKey && b === _ ? (v.preventDefault(), n && In($, {
        select: !0
      })) : v.shiftKey && b === $ && (v.preventDefault(), n && In(_, {
        select: !0
      })) : b === y && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ x(ie.div, S({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: h
  }));
});
function k$(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (In(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function O$(e) {
  const t = Tp(e), n = bu(t, e), r = bu(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Tp(e) {
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
function bu(e, t) {
  for (const n of e)
    if (!M$(n, {
      upTo: t
    }))
      return n;
}
function M$(e, { upTo: t }) {
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
function D$(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function In(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && D$(e) && t && e.select();
  }
}
const xu = R$();
function R$() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = yu(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = yu(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function yu(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function A$(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const j$ = C["useId".toString()] || (() => {
});
let I$ = 0;
function rt(e) {
  const [t, n] = C.useState(j$());
  return pt(() => {
    e || n(
      (r) => r ?? String(I$++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const L$ = ["top", "right", "bottom", "left"], zn = Math.min, kt = Math.max, ds = Math.round, Fa = Math.floor, Bn = (e) => ({
  x: e,
  y: e
}), F$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, V$ = {
  start: "end",
  end: "start"
};
function Nc(e, t, n) {
  return kt(e, zn(t, n));
}
function _n(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Cn(e) {
  return e.split("-")[0];
}
function so(e) {
  return e.split("-")[1];
}
function Tl(e) {
  return e === "x" ? "y" : "x";
}
function kl(e) {
  return e === "y" ? "height" : "width";
}
function io(e) {
  return ["top", "bottom"].includes(Cn(e)) ? "y" : "x";
}
function Ol(e) {
  return Tl(io(e));
}
function U$(e, t, n) {
  n === void 0 && (n = !1);
  const r = so(e), o = Ol(e), a = kl(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = us(s)), [s, us(s)];
}
function W$(e) {
  const t = us(e);
  return [Pc(e), t, Pc(t)];
}
function Pc(e) {
  return e.replace(/start|end/g, (t) => V$[t]);
}
function z$(e, t, n) {
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
function B$(e, t, n, r) {
  const o = so(e);
  let a = z$(Cn(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Pc)))), a;
}
function us(e) {
  return e.replace(/left|right|bottom|top/g, (t) => F$[t]);
}
function Y$(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function kp(e) {
  return typeof e != "number" ? Y$(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function fs(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function $u(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = io(t), s = Ol(t), i = kl(s), c = Cn(t), l = a === "y", d = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
  let m;
  switch (c) {
    case "top":
      m = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (so(t)) {
    case "start":
      m[s] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      m[s] += p * (n && l ? -1 : 1);
      break;
  }
  return m;
}
const H$ = async (e, t, n) => {
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
    y: u
  } = $u(l, r, c), p = r, m = {}, h = 0;
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
      x: d,
      y: u,
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
    if (d = y ?? d, u = $ ?? u, m = {
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
        x: d,
        y: u
      } = $u(l, p, c)), v = -1;
      continue;
    }
  }
  return {
    x: d,
    y: u,
    placement: p,
    strategy: o,
    middlewareData: m
  };
};
async function jo(e, t) {
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
    elementContext: u = "floating",
    altBoundary: p = !1,
    padding: m = 0
  } = _n(t, e), h = kp(m), g = i[p ? u === "floating" ? "reference" : "floating" : u], b = fs(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: d,
    strategy: c
  })), y = u === "floating" ? {
    ...s.floating,
    x: r,
    y: o
  } : s.reference, $ = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), _ = await (a.isElement == null ? void 0 : a.isElement($)) ? await (a.getScale == null ? void 0 : a.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = fs(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const wu = (e) => ({
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
    } = _n(e, t) || {};
    if (c == null)
      return {};
    const d = kp(l), u = {
      x: n,
      y: r
    }, p = Ol(o), m = kl(p), h = await s.getDimensions(c), v = p === "y", g = v ? "top" : "left", b = v ? "bottom" : "right", y = v ? "clientHeight" : "clientWidth", $ = a.reference[m] + a.reference[p] - u[p] - a.floating[m], _ = u[p] - a.reference[p], w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let P = w ? w[y] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(w))) && (P = i.floating[y] || a.floating[m]);
    const k = $ / 2 - _ / 2, L = P / 2 - h[m] / 2 - 1, I = zn(d[g], L), ee = zn(d[b], L), te = I, K = P - h[m] - ee, Z = P / 2 - h[m] / 2 + k, O = Nc(te, Z, K), j = so(o) != null && Z != O && a.reference[m] / 2 - (Z < te ? I : ee) - h[m] / 2 < 0 ? Z < te ? te - Z : K - Z : 0;
    return {
      [p]: u[p] - j,
      data: {
        [p]: O,
        centerOffset: Z - O + j
      }
    };
  }
}), K$ = function(e) {
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
        crossAxis: d = !0,
        fallbackPlacements: u,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: h = !0,
        ...v
      } = _n(e, t), g = Cn(r), b = Cn(s) === s, y = await (i.isRTL == null ? void 0 : i.isRTL(c.floating)), $ = u || (b || !h ? [us(s)] : W$(s));
      !u && m !== "none" && $.push(...B$(s, h, m, y));
      const _ = [s, ...$], w = await jo(t, v), P = [];
      let k = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (l && P.push(w[g]), d) {
        const te = U$(r, a, y);
        P.push(w[te[0]], w[te[1]]);
      }
      if (k = [...k, {
        placement: r,
        overflows: P
      }], !P.every((te) => te <= 0)) {
        var L, I;
        const te = (((L = o.flip) == null ? void 0 : L.index) || 0) + 1, K = _[te];
        if (K)
          return {
            data: {
              index: te,
              overflows: k
            },
            reset: {
              placement: K
            }
          };
        let Z = (I = k.filter((O) => O.overflows[0] <= 0).sort((O, A) => O.overflows[1] - A.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!Z)
          switch (p) {
            case "bestFit": {
              var ee;
              const O = (ee = k.map((A) => [A.placement, A.overflows.filter((j) => j > 0).reduce((j, W) => j + W, 0)]).sort((A, j) => A[1] - j[1])[0]) == null ? void 0 : ee[0];
              O && (Z = O);
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
function _u(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Cu(e) {
  return L$.some((t) => e[t] >= 0);
}
const G$ = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = _n(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await jo(t, {
            ...o,
            elementContext: "reference"
          }), s = _u(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Cu(s)
            }
          };
        }
        case "escaped": {
          const a = await jo(t, {
            ...o,
            altBoundary: !0
          }), s = _u(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Cu(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Z$(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Cn(n), i = so(n), c = io(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, d = a && c ? -1 : 1, u = _n(t, e);
  let {
    mainAxis: p,
    crossAxis: m,
    alignmentAxis: h
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
  return i && typeof h == "number" && (m = i === "end" ? h * -1 : h), c ? {
    x: m * d,
    y: p * l
  } : {
    x: p * l,
    y: m * d
  };
}
const q$ = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await Z$(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, X$ = function(e) {
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
      } = _n(e, t), l = {
        x: n,
        y: r
      }, d = await jo(t, c), u = io(Cn(o)), p = Tl(u);
      let m = l[p], h = l[u];
      if (a) {
        const g = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", y = m + d[g], $ = m - d[b];
        m = Nc(y, m, $);
      }
      if (s) {
        const g = u === "y" ? "top" : "left", b = u === "y" ? "bottom" : "right", y = h + d[g], $ = h - d[b];
        h = Nc(y, h, $);
      }
      const v = i.fn({
        ...t,
        [p]: m,
        [u]: h
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
}, Q$ = function(e) {
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
      } = _n(e, t), d = {
        x: n,
        y: r
      }, u = io(o), p = Tl(u);
      let m = d[p], h = d[u];
      const v = _n(i, t), g = typeof v == "number" ? {
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
        const $ = p === "y" ? "width" : "height", _ = ["top", "left"].includes(Cn(o)), w = a.reference[u] - a.floating[$] + (_ && ((b = s.offset) == null ? void 0 : b[u]) || 0) + (_ ? 0 : g.crossAxis), P = a.reference[u] + a.reference[$] + (_ ? 0 : ((y = s.offset) == null ? void 0 : y[u]) || 0) - (_ ? g.crossAxis : 0);
        h < w ? h = w : h > P && (h = P);
      }
      return {
        [p]: m,
        [u]: h
      };
    }
  };
}, J$ = function(e) {
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
      } = _n(e, t), c = await jo(t, i), l = Cn(n), d = so(n), u = io(n) === "y", {
        width: p,
        height: m
      } = r.floating;
      let h, v;
      l === "top" || l === "bottom" ? (h = l, v = d === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = l, h = d === "end" ? "top" : "bottom");
      const g = m - c[h], b = p - c[v], y = !t.middlewareData.shift;
      let $ = g, _ = b;
      if (u) {
        const P = p - c.left - c.right;
        _ = d || y ? zn(b, P) : P;
      } else {
        const P = m - c.top - c.bottom;
        $ = d || y ? zn(g, P) : P;
      }
      if (y && !d) {
        const P = kt(c.left, 0), k = kt(c.right, 0), L = kt(c.top, 0), I = kt(c.bottom, 0);
        u ? _ = p - 2 * (P !== 0 || k !== 0 ? P + k : kt(c.left, c.right)) : $ = m - 2 * (L !== 0 || I !== 0 ? L + I : kt(c.top, c.bottom));
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
function Yn(e) {
  return Op(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ot(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function kn(e) {
  var t;
  return (t = (Op(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Op(e) {
  return e instanceof Node || e instanceof Ot(e).Node;
}
function Sn(e) {
  return e instanceof Element || e instanceof Ot(e).Element;
}
function an(e) {
  return e instanceof HTMLElement || e instanceof Ot(e).HTMLElement;
}
function Su(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ot(e).ShadowRoot;
}
function ia(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = jt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function ew(e) {
  return ["table", "td", "th"].includes(Yn(e));
}
function Ml(e) {
  const t = Dl(), n = jt(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function tw(e) {
  let t = qr(e);
  for (; an(t) && !Ks(t); ) {
    if (Ml(t))
      return t;
    t = qr(t);
  }
  return null;
}
function Dl() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ks(e) {
  return ["html", "body", "#document"].includes(Yn(e));
}
function jt(e) {
  return Ot(e).getComputedStyle(e);
}
function Gs(e) {
  return Sn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function qr(e) {
  if (Yn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Su(e) && e.host || // Fallback.
    kn(e)
  );
  return Su(t) ? t.host : t;
}
function Mp(e) {
  const t = qr(e);
  return Ks(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : an(t) && ia(t) ? t : Mp(t);
}
function ps(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Mp(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Ot(r);
  return o ? t.concat(a, a.visualViewport || [], ia(r) ? r : []) : t.concat(r, ps(r));
}
function Dp(e) {
  const t = jt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = an(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = ds(n) !== a || ds(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function Rl(e) {
  return Sn(e) ? e : e.contextElement;
}
function Br(e) {
  const t = Rl(e);
  if (!an(t))
    return Bn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Dp(t);
  let s = (a ? ds(n.width) : n.width) / r, i = (a ? ds(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const nw = /* @__PURE__ */ Bn(0);
function Rp(e) {
  const t = Ot(e);
  return !Dl() || !t.visualViewport ? nw : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function rw(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ot(e) ? !1 : t;
}
function pr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Rl(e);
  let s = Bn(1);
  t && (r ? Sn(r) && (s = Br(r)) : s = Br(e));
  const i = rw(a, n, r) ? Rp(a) : Bn(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, d = o.width / s.x, u = o.height / s.y;
  if (a) {
    const p = Ot(a), m = r && Sn(r) ? Ot(r) : r;
    let h = p.frameElement;
    for (; h && r && m !== p; ) {
      const v = Br(h), g = h.getBoundingClientRect(), b = jt(h), y = g.left + (h.clientLeft + parseFloat(b.paddingLeft)) * v.x, $ = g.top + (h.clientTop + parseFloat(b.paddingTop)) * v.y;
      c *= v.x, l *= v.y, d *= v.x, u *= v.y, c += y, l += $, h = Ot(h).frameElement;
    }
  }
  return fs({
    width: d,
    height: u,
    x: c,
    y: l
  });
}
function ow(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = an(n), a = kn(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = Bn(1);
  const c = Bn(0);
  if ((o || !o && r !== "fixed") && ((Yn(n) !== "body" || ia(a)) && (s = Gs(n)), an(n))) {
    const l = pr(n);
    i = Br(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - s.scrollLeft * i.x + c.x,
    y: t.y * i.y - s.scrollTop * i.y + c.y
  };
}
function aw(e) {
  return Array.from(e.getClientRects());
}
function Ap(e) {
  return pr(kn(e)).left + Gs(e).scrollLeft;
}
function sw(e) {
  const t = kn(e), n = Gs(e), r = e.ownerDocument.body, o = kt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = kt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Ap(e);
  const i = -n.scrollTop;
  return jt(r).direction === "rtl" && (s += kt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function iw(e, t) {
  const n = Ot(e), r = kn(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = Dl();
    (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function cw(e, t) {
  const n = pr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = an(e) ? Br(e) : Bn(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function Eu(e, t, n) {
  let r;
  if (t === "viewport")
    r = iw(e, n);
  else if (t === "document")
    r = sw(kn(e));
  else if (Sn(t))
    r = cw(t, n);
  else {
    const o = Rp(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return fs(r);
}
function jp(e, t) {
  const n = qr(e);
  return n === t || !Sn(n) || Ks(n) ? !1 : jt(n).position === "fixed" || jp(n, t);
}
function lw(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ps(e).filter((i) => Sn(i) && Yn(i) !== "body"), o = null;
  const a = jt(e).position === "fixed";
  let s = a ? qr(e) : e;
  for (; Sn(s) && !Ks(s); ) {
    const i = jt(s), c = Ml(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ia(s) && !c && jp(e, s)) ? r = r.filter((d) => d !== s) : o = i, s = qr(s);
  }
  return t.set(e, r), r;
}
function dw(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? lw(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, d) => {
    const u = Eu(t, d, o);
    return l.top = kt(u.top, l.top), l.right = zn(u.right, l.right), l.bottom = zn(u.bottom, l.bottom), l.left = kt(u.left, l.left), l;
  }, Eu(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function uw(e) {
  return Dp(e);
}
function fw(e, t, n) {
  const r = an(t), o = kn(t), a = n === "fixed", s = pr(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Bn(0);
  if (r || !r && !a)
    if ((Yn(t) !== "body" || ia(o)) && (i = Gs(t)), r) {
      const l = pr(t, !0, a, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = Ap(o));
  return {
    x: s.left + i.scrollLeft - c.x,
    y: s.top + i.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Nu(e, t) {
  return !an(e) || jt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Ip(e, t) {
  const n = Ot(e);
  if (!an(e))
    return n;
  let r = Nu(e, t);
  for (; r && ew(r) && jt(r).position === "static"; )
    r = Nu(r, t);
  return r && (Yn(r) === "html" || Yn(r) === "body" && jt(r).position === "static" && !Ml(r)) ? n : r || tw(e) || n;
}
const pw = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Ip, a = this.getDimensions;
  return {
    reference: fw(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function mw(e) {
  return jt(e).direction === "rtl";
}
const hw = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ow,
  getDocumentElement: kn,
  getClippingRect: dw,
  getOffsetParent: Ip,
  getElementRects: pw,
  getClientRects: aw,
  getDimensions: uw,
  getScale: Br,
  isElement: Sn,
  isRTL: mw
};
function vw(e, t) {
  let n = null, r;
  const o = kn(e);
  function a() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), a();
    const {
      left: l,
      top: d,
      width: u,
      height: p
    } = e.getBoundingClientRect();
    if (i || t(), !u || !p)
      return;
    const m = Fa(d), h = Fa(o.clientWidth - (l + u)), v = Fa(o.clientHeight - (d + p)), g = Fa(l), y = {
      rootMargin: -m + "px " + -h + "px " + -v + "px " + -g + "px",
      threshold: kt(0, zn(1, c)) || 1
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
function gw(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Rl(e), d = o || a ? [...l ? ps(l) : [], ...ps(t)] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const u = l && i ? vw(l, n) : null;
  let p = -1, m = null;
  s && (m = new ResizeObserver((b) => {
    let [y] = b;
    y && y.target === l && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), l && !c && m.observe(l), m.observe(t));
  let h, v = c ? pr(e) : null;
  c && g();
  function g() {
    const b = pr(e);
    v && (b.x !== v.x || b.y !== v.y || b.width !== v.width || b.height !== v.height) && n(), v = b, h = requestAnimationFrame(g);
  }
  return n(), () => {
    d.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), u && u(), m && m.disconnect(), m = null, c && cancelAnimationFrame(h);
  };
}
const bw = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: hw,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return H$(e, t, {
    ...o,
    platform: a
  });
}, xw = (e) => {
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
      return r && t(r) ? r.current != null ? wu({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? wu({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var es = typeof document < "u" ? Ls : G;
function ms(e, t) {
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
        if (!ms(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !ms(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Lp(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Pu(e, t) {
  const n = Lp(e);
  return Math.round(t * n) / n;
}
function Tu(e) {
  const t = C.useRef(e);
  return es(() => {
    t.current = e;
  }), t;
}
function yw(e) {
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
  } = e, [d, u] = C.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, m] = C.useState(r);
  ms(p, r) || m(r);
  const [h, v] = C.useState(null), [g, b] = C.useState(null), y = C.useCallback((j) => {
    j != P.current && (P.current = j, v(j));
  }, [v]), $ = C.useCallback((j) => {
    j !== k.current && (k.current = j, b(j));
  }, [b]), _ = a || h, w = s || g, P = C.useRef(null), k = C.useRef(null), L = C.useRef(d), I = Tu(c), ee = Tu(o), te = C.useCallback(() => {
    if (!P.current || !k.current)
      return;
    const j = {
      placement: t,
      strategy: n,
      middleware: p
    };
    ee.current && (j.platform = ee.current), bw(P.current, k.current, j).then((W) => {
      const B = {
        ...W,
        isPositioned: !0
      };
      K.current && !ms(L.current, B) && (L.current = B, px.flushSync(() => {
        u(B);
      }));
    });
  }, [p, t, n, ee]);
  es(() => {
    l === !1 && L.current.isPositioned && (L.current.isPositioned = !1, u((j) => ({
      ...j,
      isPositioned: !1
    })));
  }, [l]);
  const K = C.useRef(!1);
  es(() => (K.current = !0, () => {
    K.current = !1;
  }), []), es(() => {
    if (_ && (P.current = _), w && (k.current = w), _ && w) {
      if (I.current)
        return I.current(_, w, te);
      te();
    }
  }, [_, w, te, I]);
  const Z = C.useMemo(() => ({
    reference: P,
    floating: k,
    setReference: y,
    setFloating: $
  }), [y, $]), O = C.useMemo(() => ({
    reference: _,
    floating: w
  }), [_, w]), A = C.useMemo(() => {
    const j = {
      position: n,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return j;
    const W = Pu(O.floating, d.x), B = Pu(O.floating, d.y);
    return i ? {
      ...j,
      transform: "translate(" + W + "px, " + B + "px)",
      ...Lp(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: W,
      top: B
    };
  }, [n, i, O.floating, d.x, d.y]);
  return C.useMemo(() => ({
    ...d,
    update: te,
    refs: Z,
    elements: O,
    floatingStyles: A
  }), [d, te, Z, O, A]);
}
function ca(e) {
  const [t, n] = Y(void 0);
  return pt(() => {
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
const Fp = "Popper", [Vp, un] = Ze(Fp), [$w, Up] = Vp(Fp), ww = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = Y(null);
  return /* @__PURE__ */ x($w, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, _w = "PopperAnchor", Cw = /* @__PURE__ */ R((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = Up(_w, n), s = V(null), i = we(t, s);
  return G(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ x(ie.div, S({}, o, {
    ref: i
  }));
}), Wp = "PopperContent", [Sw, xO] = Vp(Wp), Ew = /* @__PURE__ */ R((e, t) => {
  var n, r, o, a, s, i, c, l;
  const { __scopePopper: d, side: u = "bottom", sideOffset: p = 0, align: m = "center", alignOffset: h = 0, arrowPadding: v = 0, collisionBoundary: g = [], collisionPadding: b = 0, sticky: y = "partial", hideWhenDetached: $ = !1, avoidCollisions: _ = !0, onPlaced: w, ...P } = e, k = Up(Wp, d), [L, I] = Y(null), ee = we(
    t,
    (Ue) => I(Ue)
  ), [te, K] = Y(null), Z = ca(te), O = (n = Z == null ? void 0 : Z.width) !== null && n !== void 0 ? n : 0, A = (r = Z == null ? void 0 : Z.height) !== null && r !== void 0 ? r : 0, j = u + (m !== "center" ? "-" + m : ""), W = typeof b == "number" ? b : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...b
  }, B = Array.isArray(g) ? g : [
    g
  ], M = B.length > 0, D = {
    padding: W,
    boundary: B.filter(Nw),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: M
  }, { refs: U, floatingStyles: q, placement: oe, isPositioned: ce, middlewareData: ye } = yw({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: j,
    whileElementsMounted: gw,
    elements: {
      reference: k.anchor
    },
    middleware: [
      q$({
        mainAxis: p + A,
        alignmentAxis: h
      }),
      _ && X$({
        mainAxis: !0,
        crossAxis: !1,
        limiter: y === "partial" ? Q$() : void 0,
        ...D
      }),
      _ && K$({
        ...D
      }),
      J$({
        ...D,
        apply: ({ elements: Ue, rects: dt, availableWidth: T, availableHeight: z }) => {
          const { width: X, height: xe } = dt.reference, de = Ue.floating.style;
          de.setProperty("--radix-popper-available-width", `${T}px`), de.setProperty("--radix-popper-available-height", `${z}px`), de.setProperty("--radix-popper-anchor-width", `${X}px`), de.setProperty("--radix-popper-anchor-height", `${xe}px`);
        }
      }),
      te && xw({
        element: te,
        padding: v
      }),
      Pw({
        arrowWidth: O,
        arrowHeight: A
      }),
      $ && G$({
        strategy: "referenceHidden"
      })
    ]
  }), [be, ne] = zp(oe), le = ze(w);
  pt(() => {
    ce && (le == null || le());
  }, [
    ce,
    le
  ]);
  const he = (o = ye.arrow) === null || o === void 0 ? void 0 : o.x, J = (a = ye.arrow) === null || a === void 0 ? void 0 : a.y, ve = ((s = ye.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [Q, Re] = Y();
  return pt(() => {
    L && Re(window.getComputedStyle(L).zIndex);
  }, [
    L
  ]), /* @__PURE__ */ x("div", {
    ref: U.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...q,
      transform: ce ? q.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: Q,
      ["--radix-popper-transform-origin"]: [
        (i = ye.transformOrigin) === null || i === void 0 ? void 0 : i.x,
        (c = ye.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ x(Sw, {
    scope: d,
    placedSide: be,
    onArrowChange: K,
    arrowX: he,
    arrowY: J,
    shouldHideArrow: ve
  }, /* @__PURE__ */ x(ie.div, S({
    "data-side": be,
    "data-align": ne
  }, P, {
    ref: ee,
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
function Nw(e) {
  return e !== null;
}
const Pw = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: i, rects: c, middlewareData: l } = t, u = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = u ? 0 : e.arrowWidth, m = u ? 0 : e.arrowHeight, [h, v] = zp(i), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[v], b = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + p / 2, y = ((a = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + m / 2;
    let $ = "", _ = "";
    return h === "bottom" ? ($ = u ? g : `${b}px`, _ = `${-m}px`) : h === "top" ? ($ = u ? g : `${b}px`, _ = `${c.floating.height + m}px`) : h === "right" ? ($ = `${-m}px`, _ = u ? g : `${y}px`) : h === "left" && ($ = `${c.floating.width + m}px`, _ = u ? g : `${y}px`), {
      data: {
        x: $,
        y: _
      }
    };
  }
});
function zp(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const co = ww, la = Cw, da = Ew, Zs = /* @__PURE__ */ R((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ ul.createPortal(/* @__PURE__ */ x(ie.div, S({}, o, {
    ref: t
  })), r) : null;
});
function Tw(e, t) {
  return Fs((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Xe = (e) => {
  const { present: t, children: n } = e, r = kw(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Nt.only(n), a = we(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ ro(o, {
    ref: a
  }) : null;
};
Xe.displayName = "Presence";
function kw(e) {
  const [t, n] = Y(), r = V({}), o = V(e), a = V("none"), s = e ? "mounted" : "unmounted", [i, c] = Tw(s, {
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
  return G(() => {
    const l = Va(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), pt(() => {
    const l = r.current, d = o.current;
    if (d !== e) {
      const p = a.current, m = Va(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(d && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), pt(() => {
    if (t) {
      const l = (u) => {
        const m = Va(r.current).includes(u.animationName);
        u.target === t && m && Vs(
          () => c("ANIMATION_END")
        );
      }, d = (u) => {
        u.target === t && (a.current = Va(r.current));
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
    ref: ue((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Va(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function tt({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = Ow({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = ze(n), c = ue((l) => {
    if (a) {
      const u = typeof l == "function" ? l(e) : l;
      u !== e && i(u);
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
function Ow({ defaultProp: e, onChange: t }) {
  const n = Y(e), [r] = n, o = V(r), a = ze(t);
  return G(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const Ui = "rovingFocusGroup.onEntryFocus", Mw = {
  bubbles: !1,
  cancelable: !0
}, Al = "RovingFocusGroup", [Tc, Bp, Dw] = Jn(Al), [Rw, er] = Ze(Al, [
  Dw
]), [Aw, jw] = Rw(Al), Iw = /* @__PURE__ */ R((e, t) => /* @__PURE__ */ x(Tc.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ x(Tc.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ x(Lw, S({}, e, {
  ref: t
}))))), Lw = /* @__PURE__ */ R((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: l, ...d } = e, u = V(null), p = we(t, u), m = dn(a), [h = null, v] = tt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [g, b] = Y(!1), y = ze(l), $ = Bp(n), _ = V(!1), [w, P] = Y(0);
  return G(() => {
    const k = u.current;
    if (k)
      return k.addEventListener(Ui, y), () => k.removeEventListener(Ui, y);
  }, [
    y
  ]), /* @__PURE__ */ x(Aw, {
    scope: n,
    orientation: r,
    dir: m,
    loop: o,
    currentTabStopId: h,
    onItemFocus: ue(
      (k) => v(k),
      [
        v
      ]
    ),
    onItemShiftTab: ue(
      () => b(!0),
      []
    ),
    onFocusableItemAdd: ue(
      () => P(
        (k) => k + 1
      ),
      []
    ),
    onFocusableItemRemove: ue(
      () => P(
        (k) => k - 1
      ),
      []
    )
  }, /* @__PURE__ */ x(ie.div, S({
    tabIndex: g || w === 0 ? -1 : 0,
    "data-orientation": r
  }, d, {
    ref: p,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: H(e.onMouseDown, () => {
      _.current = !0;
    }),
    onFocus: H(e.onFocus, (k) => {
      const L = !_.current;
      if (k.target === k.currentTarget && L && !g) {
        const I = new CustomEvent(Ui, Mw);
        if (k.currentTarget.dispatchEvent(I), !I.defaultPrevented) {
          const ee = $().filter(
            (A) => A.focusable
          ), te = ee.find(
            (A) => A.active
          ), K = ee.find(
            (A) => A.id === h
          ), O = [
            te,
            K,
            ...ee
          ].filter(Boolean).map(
            (A) => A.ref.current
          );
          Yp(O);
        }
      }
      _.current = !1;
    }),
    onBlur: H(
      e.onBlur,
      () => b(!1)
    )
  })));
}), Fw = "RovingFocusGroupItem", Vw = /* @__PURE__ */ R((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = rt(), c = a || i, l = jw(Fw, n), d = l.currentTabStopId === c, u = Bp(n), { onFocusableItemAdd: p, onFocusableItemRemove: m } = l;
  return G(() => {
    if (r)
      return p(), () => m();
  }, [
    r,
    p,
    m
  ]), /* @__PURE__ */ x(Tc.ItemSlot, {
    scope: n,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ x(ie.span, S({
    tabIndex: d ? 0 : -1,
    "data-orientation": l.orientation
  }, s, {
    ref: t,
    onMouseDown: H(e.onMouseDown, (h) => {
      r ? l.onItemFocus(c) : h.preventDefault();
    }),
    onFocus: H(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: H(e.onKeyDown, (h) => {
      if (h.key === "Tab" && h.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (h.target !== h.currentTarget)
        return;
      const v = zw(h, l.orientation, l.dir);
      if (v !== void 0) {
        h.preventDefault();
        let b = u().filter(
          (y) => y.focusable
        ).map(
          (y) => y.ref.current
        );
        if (v === "last")
          b.reverse();
        else if (v === "prev" || v === "next") {
          v === "prev" && b.reverse();
          const y = b.indexOf(h.currentTarget);
          b = l.loop ? Bw(b, y + 1) : b.slice(y + 1);
        }
        setTimeout(
          () => Yp(b)
        );
      }
    })
  })));
}), Uw = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Ww(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function zw(e, t, n) {
  const r = Ww(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return Uw[r];
}
function Yp(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Bw(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const qs = Iw, Xs = Vw;
var Yw = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ar = /* @__PURE__ */ new WeakMap(), Ua = /* @__PURE__ */ new WeakMap(), Wa = {}, Wi = 0, Hp = function(e) {
  return e && (e.host || Hp(e.parentNode));
}, Hw = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Hp(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, Kw = function(e, t, n, r) {
  var o = Hw(t, Array.isArray(e) ? e : [e]);
  Wa[n] || (Wa[n] = /* @__PURE__ */ new WeakMap());
  var a = Wa[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(u) {
    !u || i.has(u) || (i.add(u), l(u.parentNode));
  };
  o.forEach(l);
  var d = function(u) {
    !u || c.has(u) || Array.prototype.forEach.call(u.children, function(p) {
      if (i.has(p))
        d(p);
      else {
        var m = p.getAttribute(r), h = m !== null && m !== "false", v = (Ar.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
        Ar.set(p, v), a.set(p, g), s.push(p), v === 1 && h && Ua.set(p, !0), g === 1 && p.setAttribute(n, "true"), h || p.setAttribute(r, "true");
      }
    });
  };
  return d(t), i.clear(), Wi++, function() {
    s.forEach(function(u) {
      var p = Ar.get(u) - 1, m = a.get(u) - 1;
      Ar.set(u, p), a.set(u, m), p || (Ua.has(u) || u.removeAttribute(r), Ua.delete(u)), m || u.removeAttribute(n);
    }), Wi--, Wi || (Ar = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), Ua = /* @__PURE__ */ new WeakMap(), Wa = {});
  };
}, ua = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || Yw(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Kw(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, mt = function() {
  return mt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, mt.apply(this, arguments);
};
function jl(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Kp(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Po = "right-scroll-bar-position", To = "width-before-scroll-bar", Gw = "with-scroll-bars-hidden", Zw = "--removed-body-scroll-bar-size";
function qw(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Xw(e, t) {
  var n = Y(function() {
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
function Gp(e, t) {
  return Xw(t || null, function(n) {
    return e.forEach(function(r) {
      return qw(r, n);
    });
  });
}
function Qw(e) {
  return e;
}
function Jw(e, t) {
  t === void 0 && (t = Qw);
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
function Zp(e) {
  e === void 0 && (e = {});
  var t = Jw(null);
  return t.options = mt({ async: !0, ssr: !1 }, e), t;
}
var qp = function(e) {
  var t = e.sideCar, n = jl(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, mt({}, n));
};
qp.isSideCarExport = !0;
function Xp(e, t) {
  return e.useMedium(t), qp;
}
var Qp = Zp(), zi = function() {
}, Qs = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: zi,
    onWheelCapture: zi,
    onTouchMoveCapture: zi
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, d = e.enabled, u = e.shards, p = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, y = jl(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), $ = p, _ = Gp([n, t]), w = mt(mt({}, y), o);
  return C.createElement(
    C.Fragment,
    null,
    d && C.createElement($, { sideCar: Qp, removeScrollBar: l, shards: u, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), mt(mt({}, w), { ref: _ })) : C.createElement(b, mt({}, w, { className: c, ref: _ }), i)
  );
});
Qs.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Qs.classNames = {
  fullWidth: To,
  zeroRight: Po
};
var ku, e_ = function() {
  if (ku)
    return ku;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function t_() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = e_();
  return t && e.setAttribute("nonce", t), e;
}
function n_(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function r_(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var o_ = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = t_()) && (n_(t, n), r_(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, a_ = function() {
  var e = o_();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Il = function() {
  var e = a_(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, s_ = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Bi = function(e) {
  return parseInt(e || "", 10) || 0;
}, i_ = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Bi(n), Bi(r), Bi(o)];
}, c_ = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return s_;
  var t = i_(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, l_ = Il(), d_ = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Gw, ` {
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
  
  .`).concat(Po, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(To, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Po, " .").concat(Po, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(To, " .").concat(To, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(Zw, ": ").concat(i, `px;
  }
`);
}, Jp = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, a = C.useMemo(function() {
    return c_(o);
  }, [o]);
  return C.createElement(l_, { styles: d_(a, !t, o, n ? "" : "!important") });
}, kc = !1;
if (typeof window < "u")
  try {
    var za = Object.defineProperty({}, "passive", {
      get: function() {
        return kc = !0, !0;
      }
    });
    window.addEventListener("test", za, za), window.removeEventListener("test", za, za);
  } catch {
    kc = !1;
  }
var jr = kc ? { passive: !1 } : !1, u_ = function(e) {
  return e.tagName === "TEXTAREA";
}, em = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !u_(e) && n[t] === "visible")
  );
}, f_ = function(e) {
  return em(e, "overflowY");
}, p_ = function(e) {
  return em(e, "overflowX");
}, Ou = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = tm(e, n);
    if (r) {
      var o = nm(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, m_ = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, h_ = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, tm = function(e, t) {
  return e === "v" ? f_(t) : p_(t);
}, nm = function(e, t) {
  return e === "v" ? m_(t) : h_(t);
}, v_ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, g_ = function(e, t, n, r, o) {
  var a = v_(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, d = s > 0, u = 0, p = 0;
  do {
    var m = nm(e, i), h = m[0], v = m[1], g = m[2], b = v - g - a * h;
    (h || b) && tm(e, i) && (u += b, p += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (d && (o && u === 0 || !o && s > u) || !d && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, Ba = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Mu = function(e) {
  return [e.deltaX, e.deltaY];
}, Du = function(e) {
  return e && "current" in e ? e.current : e;
}, b_ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, x_ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, y_ = 0, Ir = [];
function $_(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(y_++)[0], a = C.useState(function() {
    return Il();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Kp([e.lockRef.current], (e.shards || []).map(Du), !0).filter(Boolean);
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
    var b = Ba(v), y = n.current, $ = "deltaX" in v ? v.deltaX : y[0] - b[0], _ = "deltaY" in v ? v.deltaY : y[1] - b[1], w, P = v.target, k = Math.abs($) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && k === "h" && P.type === "range")
      return !1;
    var L = Ou(k, P);
    if (!L)
      return !0;
    if (L ? w = k : (w = k === "v" ? "h" : "v", L = Ou(k, P)), !L)
      return !1;
    if (!r.current && "changedTouches" in v && ($ || _) && (r.current = w), !w)
      return !0;
    var I = r.current || w;
    return g_(I, g, v, I === "h" ? $ : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!Ir.length || Ir[Ir.length - 1] !== a)) {
      var b = "deltaY" in g ? Mu(g) : Ba(g), y = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && b_(w.delta, b);
      })[0];
      if (y && y.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!y) {
        var $ = (s.current.shards || []).map(Du).filter(Boolean).filter(function(w) {
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
  }, []), d = C.useCallback(function(v) {
    n.current = Ba(v), r.current = void 0;
  }, []), u = C.useCallback(function(v) {
    l(v.type, Mu(v), v.target, i(v, e.lockRef.current));
  }, []), p = C.useCallback(function(v) {
    l(v.type, Ba(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return Ir.push(a), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, jr), document.addEventListener("touchmove", c, jr), document.addEventListener("touchstart", d, jr), function() {
      Ir = Ir.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, jr), document.removeEventListener("touchmove", c, jr), document.removeEventListener("touchstart", d, jr);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    h ? C.createElement(a, { styles: x_(o) }) : null,
    m ? C.createElement(Jp, { gapMode: "margin" }) : null
  );
}
const w_ = Xp(Qp, $_);
var rm = C.forwardRef(function(e, t) {
  return C.createElement(Qs, mt({}, e, { ref: t, sideCar: w_ }));
});
rm.classNames = Qs.classNames;
const Js = rm, Oc = [
  "Enter",
  " "
], __ = [
  "ArrowDown",
  "PageUp",
  "Home"
], om = [
  "ArrowUp",
  "PageDown",
  "End"
], C_ = [
  ...__,
  ...om
], S_ = {
  ltr: [
    ...Oc,
    "ArrowRight"
  ],
  rtl: [
    ...Oc,
    "ArrowLeft"
  ]
}, E_ = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, ei = "Menu", [Io, N_, P_] = Jn(ei), [Er, fa] = Ze(ei, [
  P_,
  un,
  er
]), ti = un(), am = er(), [sm, tr] = Er(ei), [T_, pa] = Er(ei), k_ = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = ti(t), [c, l] = Y(null), d = V(!1), u = ze(a), p = dn(o);
  return G(() => {
    const m = () => {
      d.current = !0, document.addEventListener("pointerdown", h, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", h, {
        capture: !0,
        once: !0
      });
    }, h = () => d.current = !1;
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
  }, []), /* @__PURE__ */ x(co, i, /* @__PURE__ */ x(sm, {
    scope: t,
    open: n,
    onOpenChange: u,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ x(T_, {
    scope: t,
    onClose: ue(
      () => u(!1),
      [
        u
      ]
    ),
    isUsingKeyboardRef: d,
    dir: p,
    modal: s
  }, r)));
}, im = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = ti(n);
  return /* @__PURE__ */ x(la, S({}, o, r, {
    ref: t
  }));
}), cm = "MenuPortal", [O_, lm] = Er(cm, {
  forceMount: void 0
}), M_ = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = tr(cm, t);
  return /* @__PURE__ */ x(O_, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ x(Xe, {
    present: n || a.open
  }, /* @__PURE__ */ x(Zs, {
    asChild: !0,
    container: o
  }, r)));
}, zt = "MenuContent", [D_, Ll] = Er(zt), R_ = /* @__PURE__ */ R((e, t) => {
  const n = lm(zt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = tr(zt, e.__scopeMenu), s = pa(zt, e.__scopeMenu);
  return /* @__PURE__ */ x(Io.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ x(Xe, {
    present: r || a.open
  }, /* @__PURE__ */ x(Io.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ x(A_, S({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(j_, S({}, o, {
    ref: t
  })))));
}), A_ = /* @__PURE__ */ R((e, t) => {
  const n = tr(zt, e.__scopeMenu), r = V(null), o = we(t, r);
  return G(() => {
    const a = r.current;
    if (a)
      return ua(a);
  }, []), /* @__PURE__ */ x(Fl, S({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: H(
      e.onFocusOutside,
      (a) => a.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), j_ = /* @__PURE__ */ R((e, t) => {
  const n = tr(zt, e.__scopeMenu);
  return /* @__PURE__ */ x(Fl, S({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Fl = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: d, onFocusOutside: u, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ...v } = e, g = tr(zt, n), b = pa(zt, n), y = ti(n), $ = am(n), _ = N_(n), [w, P] = Y(null), k = V(null), L = we(t, k, g.onContentChange), I = V(0), ee = V(""), te = V(0), K = V(null), Z = V("right"), O = V(0), A = h ? Js : Ht, j = h ? {
    as: nn,
    allowPinchZoom: !0
  } : void 0, W = (M) => {
    var D, U;
    const q = ee.current + M, oe = _().filter(
      (he) => !he.disabled
    ), ce = document.activeElement, ye = (D = oe.find(
      (he) => he.ref.current === ce
    )) === null || D === void 0 ? void 0 : D.textValue, be = oe.map(
      (he) => he.textValue
    ), ne = t2(be, q, ye), le = (U = oe.find(
      (he) => he.textValue === ne
    )) === null || U === void 0 ? void 0 : U.ref.current;
    (function he(J) {
      ee.current = J, window.clearTimeout(I.current), J !== "" && (I.current = window.setTimeout(
        () => he(""),
        1e3
      ));
    })(q), le && setTimeout(
      () => le.focus()
    );
  };
  G(() => () => window.clearTimeout(I.current), []), Ys();
  const B = ue((M) => {
    var D, U;
    return Z.current === ((D = K.current) === null || D === void 0 ? void 0 : D.side) && r2(M, (U = K.current) === null || U === void 0 ? void 0 : U.area);
  }, []);
  return /* @__PURE__ */ x(D_, {
    scope: n,
    searchRef: ee,
    onItemEnter: ue((M) => {
      B(M) && M.preventDefault();
    }, [
      B
    ]),
    onItemLeave: ue((M) => {
      var D;
      B(M) || ((D = k.current) === null || D === void 0 || D.focus(), P(null));
    }, [
      B
    ]),
    onTriggerLeave: ue((M) => {
      B(M) && M.preventDefault();
    }, [
      B
    ]),
    pointerGraceTimerRef: te,
    onPointerGraceIntentChange: ue((M) => {
      K.current = M;
    }, [])
  }, /* @__PURE__ */ x(A, j, /* @__PURE__ */ x(Hs, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: H(a, (M) => {
      var D;
      M.preventDefault(), (D = k.current) === null || D === void 0 || D.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ x(Sr, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: l,
    onPointerDownOutside: d,
    onFocusOutside: u,
    onInteractOutside: p,
    onDismiss: m
  }, /* @__PURE__ */ x(qs, S({
    asChild: !0
  }, $, {
    dir: b.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: w,
    onCurrentTabStopIdChange: P,
    onEntryFocus: H(c, (M) => {
      b.isUsingKeyboardRef.current || M.preventDefault();
    })
  }), /* @__PURE__ */ x(da, S({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": vm(g.open),
    "data-radix-menu-content": "",
    dir: b.dir
  }, y, v, {
    ref: L,
    style: {
      outline: "none",
      ...v.style
    },
    onKeyDown: H(v.onKeyDown, (M) => {
      const U = M.target.closest("[data-radix-menu-content]") === M.currentTarget, q = M.ctrlKey || M.altKey || M.metaKey, oe = M.key.length === 1;
      U && (M.key === "Tab" && M.preventDefault(), !q && oe && W(M.key));
      const ce = k.current;
      if (M.target !== ce || !C_.includes(M.key))
        return;
      M.preventDefault();
      const be = _().filter(
        (ne) => !ne.disabled
      ).map(
        (ne) => ne.ref.current
      );
      om.includes(M.key) && be.reverse(), J_(be);
    }),
    onBlur: H(e.onBlur, (M) => {
      M.currentTarget.contains(M.target) || (window.clearTimeout(I.current), ee.current = "");
    }),
    onPointerMove: H(e.onPointerMove, Lo((M) => {
      const D = M.target, U = O.current !== M.clientX;
      if (M.currentTarget.contains(D) && U) {
        const q = M.clientX > O.current ? "right" : "left";
        Z.current = q, O.current = M.clientX;
      }
    }))
  })))))));
}), dm = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, S({
    role: "group"
  }, r, {
    ref: t
  }));
}), I_ = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, S({}, r, {
    ref: t
  }));
}), Mc = "MenuItem", Ru = "menu.itemSelect", Vl = /* @__PURE__ */ R((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = V(null), s = pa(Mc, e.__scopeMenu), i = Ll(Mc, e.__scopeMenu), c = we(t, a), l = V(!1), d = () => {
    const u = a.current;
    if (!n && u) {
      const p = new CustomEvent(Ru, {
        bubbles: !0,
        cancelable: !0
      });
      u.addEventListener(
        Ru,
        (m) => r == null ? void 0 : r(m),
        {
          once: !0
        }
      ), ls(u, p), p.defaultPrevented ? l.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ x(um, S({}, o, {
    ref: c,
    disabled: n,
    onClick: H(e.onClick, d),
    onPointerDown: (u) => {
      var p;
      (p = e.onPointerDown) === null || p === void 0 || p.call(e, u), l.current = !0;
    },
    onPointerUp: H(e.onPointerUp, (u) => {
      var p;
      l.current || (p = u.currentTarget) === null || p === void 0 || p.click();
    }),
    onKeyDown: H(e.onKeyDown, (u) => {
      const p = i.searchRef.current !== "";
      n || p && u.key === " " || Oc.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
    })
  }));
}), um = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Ll(Mc, n), i = am(n), c = V(null), l = we(t, c), [d, u] = Y(!1), [p, m] = Y("");
  return G(() => {
    const h = c.current;
    if (h) {
      var v;
      m(((v = h.textContent) !== null && v !== void 0 ? v : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ x(Io.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? p
  }, /* @__PURE__ */ x(Xs, S({
    asChild: !0
  }, i, {
    focusable: !r
  }), /* @__PURE__ */ x(ie.div, S({
    role: "menuitem",
    "data-highlighted": d ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: H(e.onPointerMove, Lo((h) => {
      r ? s.onItemLeave(h) : (s.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus());
    })),
    onPointerLeave: H(e.onPointerLeave, Lo(
      (h) => s.onItemLeave(h)
    )),
    onFocus: H(
      e.onFocus,
      () => u(!0)
    ),
    onBlur: H(
      e.onBlur,
      () => u(!1)
    )
  }))));
}), L_ = /* @__PURE__ */ R((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ x(pm, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ x(Vl, S({
    role: "menuitemcheckbox",
    "aria-checked": hs(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": Ul(n),
    onSelect: H(
      o.onSelect,
      () => r == null ? void 0 : r(hs(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), F_ = "MenuRadioGroup", [V_, U_] = Er(F_, {
  value: void 0,
  onValueChange: () => {
  }
}), W_ = /* @__PURE__ */ R((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = ze(r);
  return /* @__PURE__ */ x(V_, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ x(dm, S({}, o, {
    ref: t
  })));
}), z_ = "MenuRadioItem", B_ = /* @__PURE__ */ R((e, t) => {
  const { value: n, ...r } = e, o = U_(z_, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ x(pm, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ x(Vl, S({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": Ul(a),
    onSelect: H(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), fm = "MenuItemIndicator", [pm, Y_] = Er(fm, {
  checked: !1
}), H_ = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = Y_(fm, n);
  return /* @__PURE__ */ x(Xe, {
    present: r || hs(a.checked) || a.checked === !0
  }, /* @__PURE__ */ x(ie.span, S({}, o, {
    ref: t,
    "data-state": Ul(a.checked)
  })));
}), K_ = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, S({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), mm = "MenuSub", [G_, hm] = Er(mm), Z_ = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = tr(mm, t), s = ti(t), [i, c] = Y(null), [l, d] = Y(null), u = ze(o);
  return G(() => (a.open === !1 && u(!1), () => u(!1)), [
    a.open,
    u
  ]), /* @__PURE__ */ x(co, s, /* @__PURE__ */ x(sm, {
    scope: t,
    open: r,
    onOpenChange: u,
    content: l,
    onContentChange: d
  }, /* @__PURE__ */ x(G_, {
    scope: t,
    contentId: rt(),
    triggerId: rt(),
    trigger: i,
    onTriggerChange: c
  }, n)));
}, Ya = "MenuSubTrigger", q_ = /* @__PURE__ */ R((e, t) => {
  const n = tr(Ya, e.__scopeMenu), r = pa(Ya, e.__scopeMenu), o = hm(Ya, e.__scopeMenu), a = Ll(Ya, e.__scopeMenu), s = V(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, d = ue(() => {
    s.current && window.clearTimeout(s.current), s.current = null;
  }, []);
  return G(
    () => d,
    [
      d
    ]
  ), G(() => {
    const u = i.current;
    return () => {
      window.clearTimeout(u), c(null);
    };
  }, [
    i,
    c
  ]), /* @__PURE__ */ x(im, S({
    asChild: !0
  }, l), /* @__PURE__ */ x(um, S({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": vm(n.open)
  }, e, {
    ref: ra(t, o.onTriggerChange),
    onClick: (u) => {
      var p;
      (p = e.onClick) === null || p === void 0 || p.call(e, u), !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: H(e.onPointerMove, Lo((u) => {
      a.onItemEnter(u), !u.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), d();
      }, 100));
    })),
    onPointerLeave: H(e.onPointerLeave, Lo((u) => {
      var p;
      d();
      const m = (p = n.content) === null || p === void 0 ? void 0 : p.getBoundingClientRect();
      if (m) {
        var h;
        const v = (h = n.content) === null || h === void 0 ? void 0 : h.dataset.side, g = v === "right", b = g ? -5 : 5, y = m[g ? "left" : "right"], $ = m[g ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: u.clientX + b,
              y: u.clientY
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
        if (a.onTriggerLeave(u), u.defaultPrevented)
          return;
        a.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: H(e.onKeyDown, (u) => {
      const p = a.searchRef.current !== "";
      if (!(e.disabled || p && u.key === " ") && S_[r.dir].includes(u.key)) {
        var m;
        n.onOpenChange(!0), (m = n.content) === null || m === void 0 || m.focus(), u.preventDefault();
      }
    })
  })));
}), X_ = "MenuSubContent", Q_ = /* @__PURE__ */ R((e, t) => {
  const n = lm(zt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = tr(zt, e.__scopeMenu), s = pa(zt, e.__scopeMenu), i = hm(X_, e.__scopeMenu), c = V(null), l = we(t, c);
  return /* @__PURE__ */ x(Io.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ x(Xe, {
    present: r || a.open
  }, /* @__PURE__ */ x(Io.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ x(Fl, S({
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
      var u;
      s.isUsingKeyboardRef.current && ((u = c.current) === null || u === void 0 || u.focus()), d.preventDefault();
    },
    onCloseAutoFocus: (d) => d.preventDefault(),
    onFocusOutside: H(e.onFocusOutside, (d) => {
      d.target !== i.trigger && a.onOpenChange(!1);
    }),
    onEscapeKeyDown: H(e.onEscapeKeyDown, (d) => {
      s.onClose(), d.preventDefault();
    }),
    onKeyDown: H(e.onKeyDown, (d) => {
      const u = d.currentTarget.contains(d.target), p = E_[s.dir].includes(d.key);
      if (u && p) {
        var m;
        a.onOpenChange(!1), (m = i.trigger) === null || m === void 0 || m.focus(), d.preventDefault();
      }
    })
  })))));
});
function vm(e) {
  return e ? "open" : "closed";
}
function hs(e) {
  return e === "indeterminate";
}
function Ul(e) {
  return hs(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function J_(e) {
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
function t2(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = e2(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function n2(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, d = t[s].y;
    c > r != d > r && n < (l - i) * (r - c) / (d - c) + i && (o = !o);
  }
  return o;
}
function r2(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return n2(n, t);
}
function Lo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Wl = k_, zl = im, Bl = M_, Yl = R_, Hl = dm, Kl = I_, Gl = Vl, Zl = L_, ql = W_, Xl = B_, Ql = H_, Jl = K_, ed = Z_, td = q_, nd = Q_, gm = "ContextMenu", [o2, yO] = Ze(gm, [
  fa
]), wt = fa(), [a2, bm] = o2(gm), s2 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = Y(!1), c = wt(t), l = ze(r), d = ue((u) => {
    i(u), l(u);
  }, [
    l
  ]);
  return /* @__PURE__ */ x(a2, {
    scope: t,
    open: s,
    onOpenChange: d,
    modal: a
  }, /* @__PURE__ */ x(Wl, S({}, c, {
    dir: o,
    open: s,
    onOpenChange: d,
    modal: a
  }), n));
}, i2 = "ContextMenuTrigger", c2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = bm(i2, n), s = wt(n), i = V({
    x: 0,
    y: 0
  }), c = V({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...i.current
    })
  }), l = V(0), d = ue(
    () => window.clearTimeout(l.current),
    []
  ), u = (p) => {
    i.current = {
      x: p.clientX,
      y: p.clientY
    }, a.onOpenChange(!0);
  };
  return G(
    () => d,
    [
      d
    ]
  ), G(
    () => void (r && d()),
    [
      r,
      d
    ]
  ), /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(zl, S({}, s, {
    virtualRef: c
  })), /* @__PURE__ */ x(ie.span, S({
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0
  }, o, {
    ref: t,
    style: {
      WebkitTouchCallout: "none",
      ...e.style
    },
    onContextMenu: r ? e.onContextMenu : H(e.onContextMenu, (p) => {
      d(), u(p), p.preventDefault();
    }),
    onPointerDown: r ? e.onPointerDown : H(e.onPointerDown, Ha((p) => {
      d(), l.current = window.setTimeout(
        () => u(p),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : H(e.onPointerMove, Ha(d)),
    onPointerCancel: r ? e.onPointerCancel : H(e.onPointerCancel, Ha(d)),
    onPointerUp: r ? e.onPointerUp : H(e.onPointerUp, Ha(d))
  })));
}), l2 = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = wt(t);
  return /* @__PURE__ */ x(Bl, S({}, r, n));
}, d2 = "ContextMenuContent", u2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = bm(d2, n), a = wt(n), s = V(!1);
  return /* @__PURE__ */ x(Yl, S({}, a, r, {
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
}), f2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Hl, S({}, o, r, {
    ref: t
  }));
}), p2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Kl, S({}, o, r, {
    ref: t
  }));
}), m2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Gl, S({}, o, r, {
    ref: t
  }));
}), h2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Zl, S({}, o, r, {
    ref: t
  }));
}), v2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(ql, S({}, o, r, {
    ref: t
  }));
}), g2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Xl, S({}, o, r, {
    ref: t
  }));
}), b2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Ql, S({}, o, r, {
    ref: t
  }));
}), x2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Jl, S({}, o, r, {
    ref: t
  }));
}), y2 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = wt(t), [i, c] = tt({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ x(ed, S({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, $2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(td, S({}, o, r, {
    ref: t
  }));
}), w2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(nd, S({}, o, r, {
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
function Ha(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const _2 = s2, C2 = c2, xm = l2, ym = u2, S2 = f2, $m = p2, wm = m2, _m = h2, E2 = v2, Cm = g2, Sm = b2, Em = x2, N2 = y2, Nm = $2, Pm = w2, $O = _2, wO = C2, _O = S2, CO = xm, SO = N2, EO = E2, P2 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Nm,
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
      /* @__PURE__ */ f.exports.jsx(ao, { className: "ml-auto h-4 w-4" })
    ]
  }
));
P2.displayName = Nm.displayName;
const T2 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Pm,
  {
    ref: n,
    className: F(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
T2.displayName = Pm.displayName;
const k2 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(xm, { children: /* @__PURE__ */ f.exports.jsx(
  ym,
  {
    ref: n,
    className: F(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
k2.displayName = ym.displayName;
const O2 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  wm,
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
O2.displayName = wm.displayName;
const M2 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  _m,
  {
    ref: o,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Sm, { children: /* @__PURE__ */ f.exports.jsx(Kt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
M2.displayName = _m.displayName;
const D2 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Cm,
  {
    ref: r,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Sm, { children: /* @__PURE__ */ f.exports.jsx(Us, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
D2.displayName = Cm.displayName;
const R2 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  $m,
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
R2.displayName = $m.displayName;
const A2 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Em,
  {
    ref: n,
    className: F("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
A2.displayName = Em.displayName;
const j2 = ({
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
j2.displayName = "ContextMenuShortcut";
var ma = (e) => e.type === "checkbox", zr = (e) => e instanceof Date, bt = (e) => e == null;
const Tm = (e) => typeof e == "object";
var st = (e) => !bt(e) && !Array.isArray(e) && Tm(e) && !zr(e), km = (e) => st(e) && e.target ? ma(e.target) ? e.target.checked : e.target.value : e, I2 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Om = (e, t) => e.has(I2(t)), L2 = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return st(t) && t.hasOwnProperty("isPrototypeOf");
}, rd = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function en(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(rd && (e instanceof Blob || e instanceof FileList)) && (n || st(e)))
    if (t = n ? [] : {}, !n && !L2(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = en(e[r]));
  else
    return e;
  return t;
}
var ha = (e) => Array.isArray(e) ? e.filter(Boolean) : [], et = (e) => e === void 0, pe = (e, t, n) => {
  if (!t || !st(e))
    return n;
  const r = ha(t.split(/[,[\].]+?/)).reduce((o, a) => bt(o) ? o : o[a], e);
  return et(r) || r === e ? et(e[t]) ? n : e[t] : r;
};
const vs = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Ut = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, gn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Mm = N.createContext(null), ni = () => N.useContext(Mm), F2 = (e) => {
  const { children: t, ...n } = e;
  return N.createElement(Mm.Provider, { value: n }, t);
};
var Dm = (e, t, n, r = !0) => {
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
}, Dt = (e) => st(e) && !Object.keys(e).length, Rm = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return Dt(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || Ut.all));
}, ts = (e) => Array.isArray(e) ? e : [e], Am = (e, t, n) => n && t ? e === t : !e || !t || e === t || ts(e).some((r) => r && (r.startsWith(t) || t.startsWith(r)));
function od(e) {
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
function V2(e) {
  const t = ni(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, i] = N.useState(n._formState), c = N.useRef(!0), l = N.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = N.useRef(o);
  return d.current = o, od({
    disabled: r,
    next: (u) => c.current && Am(d.current, u.name, a) && Rm(u, l.current, n._updateFormState) && i({
      ...n._formState,
      ...u
    }),
    subject: n._subjects.state
  }), N.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), Dm(s, n, l.current, !1);
}
var tn = (e) => typeof e == "string", jm = (e, t, n, r, o) => tn(e) ? (r && t.watch.add(e), pe(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), pe(n, a))) : (r && (t.watchAll = !0), n);
function U2(e) {
  const t = ni(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, i = N.useRef(r);
  i.current = r, od({
    disabled: a,
    subject: n._subjects.values,
    next: (d) => {
      Am(i.current, d.name, s) && l(en(jm(i.current, n._names, d.values || n._formValues, !1, o)));
    }
  });
  const [c, l] = N.useState(n._getWatch(r, o));
  return N.useEffect(() => n._removeUnmounted()), c;
}
var ad = (e) => /^\w*$/.test(e), Im = (e) => ha(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Be(e, t, n) {
  let r = -1;
  const o = ad(t) ? [t] : Im(t), a = o.length, s = a - 1;
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
function W2(e) {
  const t = ni(), { name: n, control: r = t.control, shouldUnregister: o } = e, a = Om(r._names.array, n), s = U2({
    control: r,
    name: n,
    defaultValue: pe(r._formValues, n, pe(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), i = V2({
    control: r,
    name: n
  }), c = N.useRef(r.register(n, {
    ...e.rules,
    value: s
  }));
  return c.current = r.register(n, e.rules), N.useEffect(() => {
    const l = r._options.shouldUnregister || o, d = (u, p) => {
      const m = pe(r._fields, u);
      m && (m._f.mount = p);
    };
    if (d(n, !0), l) {
      const u = en(pe(r._options.defaultValues, n));
      Be(r._defaultValues, n, u), et(pe(r._formValues, n)) && Be(r._formValues, n, u);
    }
    return () => {
      (a ? l && !r._state.action : l) ? r.unregister(n) : d(n, !1);
    };
  }, [n, r, a, o]), {
    field: {
      name: n,
      value: s,
      onChange: N.useCallback((l) => c.current.onChange({
        target: {
          value: km(l),
          name: n
        },
        type: vs.CHANGE
      }), [n]),
      onBlur: N.useCallback(() => c.current.onBlur({
        target: {
          value: pe(r._formValues, n),
          name: n
        },
        type: vs.BLUR
      }), [n, r]),
      ref: (l) => {
        const d = pe(r._fields, n);
        d && l && (d._f.ref = {
          focus: () => l.focus(),
          select: () => l.select(),
          setCustomValidity: (u) => l.setCustomValidity(u),
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
const z2 = (e) => e.render(W2(e));
var Lm = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {};
const Dc = (e, t, n) => {
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
        st(s) && Dc(s, t);
    }
  }
};
var Au = (e) => ({
  isOnSubmit: !e || e === Ut.onSubmit,
  isOnBlur: e === Ut.onBlur,
  isOnChange: e === Ut.onChange,
  isOnAll: e === Ut.all,
  isOnTouch: e === Ut.onTouched
}), ju = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)))), B2 = (e, t, n) => {
  const r = ha(pe(e, n));
  return Be(r, "root", t[n]), Be(e, n, r), e;
}, Yr = (e) => typeof e == "boolean", sd = (e) => e.type === "file", Vn = (e) => typeof e == "function", gs = (e) => {
  if (!rd)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, ns = (e) => tn(e), id = (e) => e.type === "radio", bs = (e) => e instanceof RegExp;
const Iu = {
  value: !1,
  isValid: !1
}, Lu = { value: !0, isValid: !0 };
var Fm = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !et(e[0].attributes.value) ? et(e[0].value) || e[0].value === "" ? Lu : { value: e[0].value, isValid: !0 } : Lu
    ) : Iu;
  }
  return Iu;
};
const Fu = {
  isValid: !1,
  value: null
};
var Vm = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Fu) : Fu;
function Vu(e, t, n = "validate") {
  if (ns(e) || Array.isArray(e) && e.every(ns) || Yr(e) && !e)
    return {
      type: n,
      message: ns(e) ? e : "",
      ref: t
    };
}
var Lr = (e) => st(e) && !bs(e) ? e : {
  value: e,
  message: ""
}, Uu = async (e, t, n, r, o) => {
  const { ref: a, refs: s, required: i, maxLength: c, minLength: l, min: d, max: u, pattern: p, validate: m, name: h, valueAsNumber: v, mount: g, disabled: b } = e._f, y = pe(t, h);
  if (!g || b)
    return {};
  const $ = s ? s[0] : a, _ = (K) => {
    r && $.reportValidity && ($.setCustomValidity(Yr(K) ? "" : K || ""), $.reportValidity());
  }, w = {}, P = id(a), k = ma(a), L = P || k, I = (v || sd(a)) && et(a.value) && et(y) || gs(a) && a.value === "" || y === "" || Array.isArray(y) && !y.length, ee = Lm.bind(null, h, n, w), te = (K, Z, O, A = gn.maxLength, j = gn.minLength) => {
    const W = K ? Z : O;
    w[h] = {
      type: K ? A : j,
      message: W,
      ref: a,
      ...ee(K ? A : j, W)
    };
  };
  if (o ? !Array.isArray(y) || !y.length : i && (!L && (I || bt(y)) || Yr(y) && !y || k && !Fm(s).isValid || P && !Vm(s).isValid)) {
    const { value: K, message: Z } = ns(i) ? { value: !!i, message: i } : Lr(i);
    if (K && (w[h] = {
      type: gn.required,
      message: Z,
      ref: $,
      ...ee(gn.required, Z)
    }, !n))
      return _(Z), w;
  }
  if (!I && (!bt(d) || !bt(u))) {
    let K, Z;
    const O = Lr(u), A = Lr(d);
    if (!bt(y) && !isNaN(y)) {
      const j = a.valueAsNumber || y && +y;
      bt(O.value) || (K = j > O.value), bt(A.value) || (Z = j < A.value);
    } else {
      const j = a.valueAsDate || new Date(y), W = (D) => new Date(new Date().toDateString() + " " + D), B = a.type == "time", M = a.type == "week";
      tn(O.value) && y && (K = B ? W(y) > W(O.value) : M ? y > O.value : j > new Date(O.value)), tn(A.value) && y && (Z = B ? W(y) < W(A.value) : M ? y < A.value : j < new Date(A.value));
    }
    if ((K || Z) && (te(!!K, O.message, A.message, gn.max, gn.min), !n))
      return _(w[h].message), w;
  }
  if ((c || l) && !I && (tn(y) || o && Array.isArray(y))) {
    const K = Lr(c), Z = Lr(l), O = !bt(K.value) && y.length > +K.value, A = !bt(Z.value) && y.length < +Z.value;
    if ((O || A) && (te(O, K.message, Z.message), !n))
      return _(w[h].message), w;
  }
  if (p && !I && tn(y)) {
    const { value: K, message: Z } = Lr(p);
    if (bs(K) && !y.match(K) && (w[h] = {
      type: gn.pattern,
      message: Z,
      ref: a,
      ...ee(gn.pattern, Z)
    }, !n))
      return _(Z), w;
  }
  if (m) {
    if (Vn(m)) {
      const K = await m(y, t), Z = Vu(K, $);
      if (Z && (w[h] = {
        ...Z,
        ...ee(gn.validate, Z.message)
      }, !n))
        return _(Z.message), w;
    } else if (st(m)) {
      let K = {};
      for (const Z in m) {
        if (!Dt(K) && !n)
          break;
        const O = Vu(await m[Z](y, t), $, Z);
        O && (K = {
          ...O,
          ...ee(Z, O.message)
        }, _(O.message), n && (w[h] = K));
      }
      if (!Dt(K) && (w[h] = {
        ref: $,
        ...K
      }, !n))
        return w;
    }
  }
  return _(!0), w;
};
function Y2(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = et(e) ? r++ : e[t[r++]];
  return e;
}
function H2(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !et(e[t]))
      return !1;
  return !0;
}
function ut(e, t) {
  const n = Array.isArray(t) ? t : ad(t) ? [t] : Im(t), r = n.length === 1 ? e : Y2(e, n), o = n.length - 1, a = n[o];
  return r && delete r[a], o !== 0 && (st(r) && Dt(r) || Array.isArray(r) && H2(r)) && ut(e, n.slice(0, -1)), e;
}
function Yi() {
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
var xs = (e) => bt(e) || !Tm(e);
function cr(e, t) {
  if (xs(e) || xs(t))
    return e === t;
  if (zr(e) && zr(t))
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
      if (zr(a) && zr(s) || st(a) && st(s) || Array.isArray(a) && Array.isArray(s) ? !cr(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var Um = (e) => e.type === "select-multiple", K2 = (e) => id(e) || ma(e), Hi = (e) => gs(e) && e.isConnected, Wm = (e) => {
  for (const t in e)
    if (Vn(e[t]))
      return !0;
  return !1;
};
function ys(e, t = {}) {
  const n = Array.isArray(e);
  if (st(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || st(e[r]) && !Wm(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, ys(e[r], t[r])) : bt(e[r]) || (t[r] = !0);
  return t;
}
function zm(e, t, n) {
  const r = Array.isArray(e);
  if (st(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || st(e[o]) && !Wm(e[o]) ? et(t) || xs(n[o]) ? n[o] = Array.isArray(e[o]) ? ys(e[o], []) : { ...ys(e[o]) } : zm(e[o], bt(t) ? {} : t[o], n[o]) : n[o] = !cr(e[o], t[o]);
  return n;
}
var Ki = (e, t) => zm(e, t, ys(t)), Bm = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => et(e) ? e : t ? e === "" ? NaN : e && +e : n && tn(e) ? new Date(e) : r ? r(e) : e;
function Gi(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return sd(t) ? t.files : id(t) ? Vm(e.refs).value : Um(t) ? [...t.selectedOptions].map(({ value: n }) => n) : ma(t) ? Fm(e.refs).value : Bm(et(t.value) ? e.ref.value : t.value, e);
}
var G2 = (e, t, n, r) => {
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
}, Eo = (e) => et(e) ? e : bs(e) ? e.source : st(e) ? bs(e.value) ? e.value.source : e.value : e, Z2 = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Wu(e, t, n) {
  const r = pe(e, n);
  if (r || ad(n))
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
var q2 = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, X2 = (e, t) => !ha(pe(e, t)).length && ut(e, t);
const Q2 = {
  mode: Ut.onSubmit,
  reValidateMode: Ut.onChange,
  shouldFocusError: !0
};
function J2(e = {}, t) {
  let n = {
    ...Q2,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Vn(n.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: {}
  }, o = {}, a = st(n.defaultValues) || st(n.values) ? en(n.defaultValues || n.values) || {} : {}, s = n.shouldUnregister ? {} : en(a), i = {
    action: !1,
    mount: !1,
    watch: !1
  }, c = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, l, d = 0;
  const u = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, p = {
    values: Yi(),
    array: Yi(),
    state: Yi()
  }, m = e.resetOptions && e.resetOptions.keepDirtyValues, h = Au(n.mode), v = Au(n.reValidateMode), g = n.criteriaMode === Ut.all, b = (T) => (z) => {
    clearTimeout(d), d = setTimeout(T, z);
  }, y = async (T) => {
    if (u.isValid || T) {
      const z = n.resolver ? Dt((await I()).errors) : await te(o, !0);
      z !== r.isValid && p.state.next({
        isValid: z
      });
    }
  }, $ = (T) => u.isValidating && p.state.next({
    isValidating: T
  }), _ = (T, z = [], X, xe, de = !0, se = !0) => {
    if (xe && X) {
      if (i.action = !0, se && Array.isArray(pe(o, T))) {
        const $e = X(pe(o, T), xe.argA, xe.argB);
        de && Be(o, T, $e);
      }
      if (se && Array.isArray(pe(r.errors, T))) {
        const $e = X(pe(r.errors, T), xe.argA, xe.argB);
        de && Be(r.errors, T, $e), X2(r.errors, T);
      }
      if (u.touchedFields && se && Array.isArray(pe(r.touchedFields, T))) {
        const $e = X(pe(r.touchedFields, T), xe.argA, xe.argB);
        de && Be(r.touchedFields, T, $e);
      }
      u.dirtyFields && (r.dirtyFields = Ki(a, s)), p.state.next({
        name: T,
        isDirty: Z(T, z),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      Be(s, T, z);
  }, w = (T, z) => {
    Be(r.errors, T, z), p.state.next({
      errors: r.errors
    });
  }, P = (T, z, X, xe) => {
    const de = pe(o, T);
    if (de) {
      const se = pe(s, T, et(X) ? pe(a, T) : X);
      et(se) || xe && xe.defaultChecked || z ? Be(s, T, z ? se : Gi(de._f)) : j(T, se), i.mount && y();
    }
  }, k = (T, z, X, xe, de) => {
    let se = !1, $e = !1;
    const qe = {
      name: T
    };
    if (!X || xe) {
      u.isDirty && ($e = r.isDirty, r.isDirty = qe.isDirty = Z(), se = $e !== qe.isDirty);
      const Qe = cr(pe(a, T), z);
      $e = pe(r.dirtyFields, T), Qe ? ut(r.dirtyFields, T) : Be(r.dirtyFields, T, !0), qe.dirtyFields = r.dirtyFields, se = se || u.dirtyFields && $e !== !Qe;
    }
    if (X) {
      const Qe = pe(r.touchedFields, T);
      Qe || (Be(r.touchedFields, T, X), qe.touchedFields = r.touchedFields, se = se || u.touchedFields && Qe !== X);
    }
    return se && de && p.state.next(qe), se ? qe : {};
  }, L = (T, z, X, xe) => {
    const de = pe(r.errors, T), se = u.isValid && Yr(z) && r.isValid !== z;
    if (e.delayError && X ? (l = b(() => w(T, X)), l(e.delayError)) : (clearTimeout(d), l = null, X ? Be(r.errors, T, X) : ut(r.errors, T)), (X ? !cr(de, X) : de) || !Dt(xe) || se) {
      const $e = {
        ...xe,
        ...se && Yr(z) ? { isValid: z } : {},
        errors: r.errors,
        name: T
      };
      r = {
        ...r,
        ...$e
      }, p.state.next($e);
    }
    $(!1);
  }, I = async (T) => n.resolver(s, n.context, G2(T || c.mount, o, n.criteriaMode, n.shouldUseNativeValidation)), ee = async (T) => {
    const { errors: z } = await I();
    if (T)
      for (const X of T) {
        const xe = pe(z, X);
        xe ? Be(r.errors, X, xe) : ut(r.errors, X);
      }
    else
      r.errors = z;
    return z;
  }, te = async (T, z, X = {
    valid: !0
  }) => {
    for (const xe in T) {
      const de = T[xe];
      if (de) {
        const { _f: se, ...$e } = de;
        if (se) {
          const qe = c.array.has(se.name), Qe = await Uu(de, s, g, n.shouldUseNativeValidation && !z, qe);
          if (Qe[se.name] && (X.valid = !1, z))
            break;
          !z && (pe(Qe, se.name) ? qe ? B2(r.errors, Qe, se.name) : Be(r.errors, se.name, Qe[se.name]) : ut(r.errors, se.name));
        }
        $e && await te($e, z, X);
      }
    }
    return X.valid;
  }, K = () => {
    for (const T of c.unMount) {
      const z = pe(o, T);
      z && (z._f.refs ? z._f.refs.every((X) => !Hi(X)) : !Hi(z._f.ref)) && be(T);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, Z = (T, z) => (T && z && Be(s, T, z), !cr(U(), a)), O = (T, z, X) => jm(T, c, {
    ...i.mount ? s : et(z) ? a : tn(T) ? { [T]: z } : z
  }, X, z), A = (T) => ha(pe(i.mount ? s : a, T, e.shouldUnregister ? pe(a, T, []) : [])), j = (T, z, X = {}) => {
    const xe = pe(o, T);
    let de = z;
    if (xe) {
      const se = xe._f;
      se && (!se.disabled && Be(s, T, Bm(z, se)), de = gs(se.ref) && bt(z) ? "" : z, Um(se.ref) ? [...se.ref.options].forEach(($e) => $e.selected = de.includes($e.value)) : se.refs ? ma(se.ref) ? se.refs.length > 1 ? se.refs.forEach(($e) => (!$e.defaultChecked || !$e.disabled) && ($e.checked = Array.isArray(de) ? !!de.find((qe) => qe === $e.value) : de === $e.value)) : se.refs[0] && (se.refs[0].checked = !!de) : se.refs.forEach(($e) => $e.checked = $e.value === de) : sd(se.ref) ? se.ref.value = "" : (se.ref.value = de, se.ref.type || p.values.next({
        name: T,
        values: { ...s }
      })));
    }
    (X.shouldDirty || X.shouldTouch) && k(T, de, X.shouldTouch, X.shouldDirty, !0), X.shouldValidate && D(T);
  }, W = (T, z, X) => {
    for (const xe in z) {
      const de = z[xe], se = `${T}.${xe}`, $e = pe(o, se);
      (c.array.has(T) || !xs(de) || $e && !$e._f) && !zr(de) ? W(se, de, X) : j(se, de, X);
    }
  }, B = (T, z, X = {}) => {
    const xe = pe(o, T), de = c.array.has(T), se = en(z);
    Be(s, T, se), de ? (p.array.next({
      name: T,
      values: { ...s }
    }), (u.isDirty || u.dirtyFields) && X.shouldDirty && p.state.next({
      name: T,
      dirtyFields: Ki(a, s),
      isDirty: Z(T, se)
    })) : xe && !xe._f && !bt(se) ? W(T, se, X) : j(T, se, X), ju(T, c) && p.state.next({ ...r }), p.values.next({
      name: T,
      values: { ...s }
    }), !i.mount && t();
  }, M = async (T) => {
    const z = T.target;
    let X = z.name, xe = !0;
    const de = pe(o, X), se = () => z.type ? Gi(de._f) : km(T);
    if (de) {
      let $e, qe;
      const Qe = se(), pn = T.type === vs.BLUR || T.type === vs.FOCUS_OUT, Da = !Z2(de._f) && !n.resolver && !pe(r.errors, X) && !de._f.deps || q2(pn, pe(r.touchedFields, X), r.isSubmitted, v, h), mn = ju(X, c, pn);
      Be(s, X, Qe), pn ? (de._f.onBlur && de._f.onBlur(T), l && l(0)) : de._f.onChange && de._f.onChange(T);
      const ho = k(X, Qe, pn, !1), Ra = !Dt(ho) || mn;
      if (!pn && p.values.next({
        name: X,
        type: T.type,
        values: { ...s }
      }), Da)
        return u.isValid && y(), Ra && p.state.next({ name: X, ...mn ? {} : ho });
      if (!pn && mn && p.state.next({ ...r }), $(!0), n.resolver) {
        const { errors: vo } = await I([X]), go = Wu(r.errors, o, X), Aa = Wu(vo, o, go.name || X);
        $e = Aa.error, X = Aa.name, qe = Dt(vo);
      } else
        $e = (await Uu(de, s, g, n.shouldUseNativeValidation))[X], xe = isNaN(Qe) || Qe === pe(s, X, Qe), xe && ($e ? qe = !1 : u.isValid && (qe = await te(o, !0)));
      xe && (de._f.deps && D(de._f.deps), L(X, qe, $e, ho));
    }
  }, D = async (T, z = {}) => {
    let X, xe;
    const de = ts(T);
    if ($(!0), n.resolver) {
      const se = await ee(et(T) ? T : de);
      X = Dt(se), xe = T ? !de.some(($e) => pe(se, $e)) : X;
    } else
      T ? (xe = (await Promise.all(de.map(async (se) => {
        const $e = pe(o, se);
        return await te($e && $e._f ? { [se]: $e } : $e);
      }))).every(Boolean), !(!xe && !r.isValid) && y()) : xe = X = await te(o);
    return p.state.next({
      ...!tn(T) || u.isValid && X !== r.isValid ? {} : { name: T },
      ...n.resolver || !T ? { isValid: X } : {},
      errors: r.errors,
      isValidating: !1
    }), z.shouldFocus && !xe && Dc(o, (se) => se && pe(r.errors, se), T ? de : c.mount), xe;
  }, U = (T) => {
    const z = {
      ...a,
      ...i.mount ? s : {}
    };
    return et(T) ? z : tn(T) ? pe(z, T) : T.map((X) => pe(z, X));
  }, q = (T, z) => ({
    invalid: !!pe((z || r).errors, T),
    isDirty: !!pe((z || r).dirtyFields, T),
    isTouched: !!pe((z || r).touchedFields, T),
    error: pe((z || r).errors, T)
  }), oe = (T) => {
    T && ts(T).forEach((z) => ut(r.errors, z)), p.state.next({
      errors: T ? r.errors : {}
    });
  }, ce = (T, z, X) => {
    const xe = (pe(o, T, { _f: {} })._f || {}).ref;
    Be(r.errors, T, {
      ...z,
      ref: xe
    }), p.state.next({
      name: T,
      errors: r.errors,
      isValid: !1
    }), X && X.shouldFocus && xe && xe.focus && xe.focus();
  }, ye = (T, z) => Vn(T) ? p.values.subscribe({
    next: (X) => T(O(void 0, z), X)
  }) : O(T, z, !0), be = (T, z = {}) => {
    for (const X of T ? ts(T) : c.mount)
      c.mount.delete(X), c.array.delete(X), z.keepValue || (ut(o, X), ut(s, X)), !z.keepError && ut(r.errors, X), !z.keepDirty && ut(r.dirtyFields, X), !z.keepTouched && ut(r.touchedFields, X), !n.shouldUnregister && !z.keepDefaultValue && ut(a, X);
    p.values.next({
      values: { ...s }
    }), p.state.next({
      ...r,
      ...z.keepDirty ? { isDirty: Z() } : {}
    }), !z.keepIsValid && y();
  }, ne = (T, z = {}) => {
    let X = pe(o, T);
    const xe = Yr(z.disabled);
    return Be(o, T, {
      ...X || {},
      _f: {
        ...X && X._f ? X._f : { ref: { name: T } },
        name: T,
        mount: !0,
        ...z
      }
    }), c.mount.add(T), et(z.value) || Be(s, T, z.value), X ? xe && Be(s, T, z.disabled ? void 0 : pe(s, T, Gi(X._f))) : P(T, !0, z.value), {
      ...xe ? { disabled: z.disabled } : {},
      ...n.progressive ? {
        required: !!z.required,
        min: Eo(z.min),
        max: Eo(z.max),
        minLength: Eo(z.minLength),
        maxLength: Eo(z.maxLength),
        pattern: Eo(z.pattern)
      } : {},
      name: T,
      onChange: M,
      onBlur: M,
      ref: (de) => {
        if (de) {
          ne(T, z), X = pe(o, T);
          const se = et(de.value) && de.querySelectorAll && de.querySelectorAll("input,select,textarea")[0] || de, $e = K2(se), qe = X._f.refs || [];
          if ($e ? qe.find((Qe) => Qe === se) : se === X._f.ref)
            return;
          Be(o, T, {
            _f: {
              ...X._f,
              ...$e ? {
                refs: [
                  ...qe.filter(Hi),
                  se,
                  ...Array.isArray(pe(a, T)) ? [{}] : []
                ],
                ref: { type: se.type, name: T }
              } : { ref: se }
            }
          }), P(T, !1, void 0, se);
        } else
          X = pe(o, T, {}), X._f && (X._f.mount = !1), (n.shouldUnregister || z.shouldUnregister) && !(Om(c.array, T) && i.action) && c.unMount.add(T);
      }
    };
  }, le = () => n.shouldFocusError && Dc(o, (T) => T && pe(r.errors, T), c.mount), he = (T, z) => async (X) => {
    X && (X.preventDefault && X.preventDefault(), X.persist && X.persist());
    let xe = en(s);
    if (p.state.next({
      isSubmitting: !0
    }), n.resolver) {
      const { errors: de, values: se } = await I();
      r.errors = de, xe = se;
    } else
      await te(o);
    ut(r.errors, "root"), Dt(r.errors) ? (p.state.next({
      errors: {}
    }), await T(xe, X)) : (z && await z({ ...r.errors }, X), le(), setTimeout(le)), p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Dt(r.errors),
      submitCount: r.submitCount + 1,
      errors: r.errors
    });
  }, J = (T, z = {}) => {
    pe(o, T) && (et(z.defaultValue) ? B(T, pe(a, T)) : (B(T, z.defaultValue), Be(a, T, z.defaultValue)), z.keepTouched || ut(r.touchedFields, T), z.keepDirty || (ut(r.dirtyFields, T), r.isDirty = z.defaultValue ? Z(T, pe(a, T)) : Z()), z.keepError || (ut(r.errors, T), u.isValid && y()), p.state.next({ ...r }));
  }, ve = (T, z = {}) => {
    const X = T || a, xe = en(X), de = T && !Dt(T) ? xe : a;
    if (z.keepDefaultValues || (a = X), !z.keepValues) {
      if (z.keepDirtyValues || m)
        for (const se of c.mount)
          pe(r.dirtyFields, se) ? Be(de, se, pe(s, se)) : B(se, pe(de, se));
      else {
        if (rd && et(T))
          for (const se of c.mount) {
            const $e = pe(o, se);
            if ($e && $e._f) {
              const qe = Array.isArray($e._f.refs) ? $e._f.refs[0] : $e._f.ref;
              if (gs(qe)) {
                const Qe = qe.closest("form");
                if (Qe) {
                  Qe.reset();
                  break;
                }
              }
            }
          }
        o = {};
      }
      s = e.shouldUnregister ? z.keepDefaultValues ? en(a) : {} : en(de), p.array.next({
        values: { ...de }
      }), p.values.next({
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
    }, !i.mount && t(), i.mount = !u.isValid || !!z.keepIsValid, i.watch = !!e.shouldUnregister, p.state.next({
      submitCount: z.keepSubmitCount ? r.submitCount : 0,
      isDirty: z.keepDirty ? r.isDirty : !!(z.keepDefaultValues && !cr(T, a)),
      isSubmitted: z.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: z.keepDirtyValues ? r.dirtyFields : z.keepDefaultValues && T ? Ki(a, T) : {},
      touchedFields: z.keepTouched ? r.touchedFields : {},
      errors: z.keepErrors ? r.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, Q = (T, z) => ve(Vn(T) ? T(s) : T, z);
  return {
    control: {
      register: ne,
      unregister: be,
      getFieldState: q,
      handleSubmit: he,
      setError: ce,
      _executeSchema: I,
      _getWatch: O,
      _getDirty: Z,
      _updateValid: y,
      _removeUnmounted: K,
      _updateFieldArray: _,
      _getFieldArray: A,
      _reset: ve,
      _resetDefaultValues: () => Vn(n.defaultValues) && n.defaultValues().then((T) => {
        Q(T, n.resetOptions), p.state.next({
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
      _proxyFormState: u,
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
    handleSubmit: he,
    watch: ye,
    setValue: B,
    getValues: U,
    reset: Q,
    resetField: J,
    clearErrors: oe,
    unregister: be,
    setError: ce,
    setFocus: (T, z = {}) => {
      const X = pe(o, T), xe = X && X._f;
      if (xe) {
        const de = xe.refs ? xe.refs[0] : xe.ref;
        de.focus && (de.focus(), z.shouldSelect && de.select());
      }
    },
    getFieldState: q
  };
}
function Ym(e = {}) {
  const t = N.useRef(), n = N.useRef(), [r, o] = N.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Vn(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: Vn(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...J2(e, () => o((s) => ({ ...s }))),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, od({
    subject: a._subjects.state,
    next: (s) => {
      Rm(s, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), N.useEffect(() => {
    e.values && !cr(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values) : a._resetDefaultValues();
  }, [e.values, a]), N.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), t.current.formState = Dm(r, a), t.current;
}
const eC = /* @__PURE__ */ R((e, t) => /* @__PURE__ */ x(ie.label, S({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), Hm = eC, tC = oo(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), fn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Hm,
  {
    ref: n,
    className: F(tC(), e),
    ...t
  }
));
fn.displayName = Hm.displayName;
const Km = F2, Gm = C.createContext(
  {}
), Nr = ({
  ...e
}) => /* @__PURE__ */ f.exports.jsx(Gm.Provider, { value: { name: e.name }, children: /* @__PURE__ */ f.exports.jsx(z2, { ...e }) }), ri = () => {
  const e = C.useContext(Gm), t = C.useContext(Zm), { getFieldState: n, formState: r } = ni(), o = n(e.name, r);
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
}, Zm = C.createContext(
  {}
), nr = C.forwardRef(({ className: e, ...t }, n) => {
  const r = C.useId();
  return /* @__PURE__ */ f.exports.jsx(Zm.Provider, { value: { id: r }, children: /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: F("space-y-2", e), ...t }) });
});
nr.displayName = "FormItem";
const Pr = C.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = ri();
  return /* @__PURE__ */ f.exports.jsx(
    fn,
    {
      ref: n,
      className: F(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
Pr.displayName = "FormLabel";
const va = C.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = ri();
  return /* @__PURE__ */ f.exports.jsx(
    nn,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
va.displayName = "FormControl";
const lo = C.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = ri();
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
lo.displayName = "FormDescription";
const nC = C.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = ri(), s = o ? String(o == null ? void 0 : o.message) : t;
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
nC.displayName = "FormMessage";
const qm = "Dialog", [Xm, Qm] = Ze(qm), [rC, Qt] = Xm(qm), oC = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = V(null), c = V(null), [l = !1, d] = tt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ x(rC, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: rt(),
    titleId: rt(),
    descriptionId: rt(),
    open: l,
    onOpenChange: d,
    onOpenToggle: ue(
      () => d(
        (u) => !u
      ),
      [
        d
      ]
    ),
    modal: s
  }, n);
}, aC = "DialogTrigger", sC = /* @__PURE__ */ R((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Qt(aC, n), a = we(t, o.triggerRef);
  return /* @__PURE__ */ x(ie.button, S({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": cd(o.open)
  }, r, {
    ref: a,
    onClick: H(e.onClick, o.onOpenToggle)
  }));
}), Jm = "DialogPortal", [iC, eh] = Xm(Jm, {
  forceMount: void 0
}), cC = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Qt(Jm, t);
  return /* @__PURE__ */ x(iC, {
    scope: t,
    forceMount: n
  }, Nt.map(
    r,
    (s) => /* @__PURE__ */ x(Xe, {
      present: n || a.open
    }, /* @__PURE__ */ x(Zs, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Rc = "DialogOverlay", lC = /* @__PURE__ */ R((e, t) => {
  const n = eh(Rc, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Qt(Rc, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ x(Xe, {
    present: r || a.open
  }, /* @__PURE__ */ x(dC, S({}, o, {
    ref: t
  }))) : null;
}), dC = /* @__PURE__ */ R((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Qt(Rc, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ x(Js, {
      as: nn,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ x(ie.div, S({
      "data-state": cd(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), Xr = "DialogContent", uC = /* @__PURE__ */ R((e, t) => {
  const n = eh(Xr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Qt(Xr, e.__scopeDialog);
  return /* @__PURE__ */ x(Xe, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ x(fC, S({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(pC, S({}, o, {
    ref: t
  })));
}), fC = /* @__PURE__ */ R((e, t) => {
  const n = Qt(Xr, e.__scopeDialog), r = V(null), o = we(t, n.contentRef, r);
  return G(() => {
    const a = r.current;
    if (a)
      return ua(a);
  }, []), /* @__PURE__ */ x(th, S({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: H(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: H(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: H(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), pC = /* @__PURE__ */ R((e, t) => {
  const n = Qt(Xr, e.__scopeDialog), r = V(!1), o = V(!1);
  return /* @__PURE__ */ x(th, S({}, e, {
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
}), th = /* @__PURE__ */ R((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Qt(Xr, n), c = V(null), l = we(t, c);
  return Ys(), /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(Hs, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ x(Sr, S({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": cd(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), nh = "DialogTitle", mC = /* @__PURE__ */ R((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Qt(nh, n);
  return /* @__PURE__ */ x(ie.h2, S({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), hC = "DialogDescription", vC = /* @__PURE__ */ R((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Qt(hC, n);
  return /* @__PURE__ */ x(ie.p, S({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), gC = "DialogClose", bC = /* @__PURE__ */ R((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Qt(gC, n);
  return /* @__PURE__ */ x(ie.button, S({
    type: "button"
  }, r, {
    ref: t,
    onClick: H(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function cd(e) {
  return e ? "open" : "closed";
}
const xC = "DialogTitleWarning", [yC, NO] = u$(xC, {
  contentName: Xr,
  titleName: nh,
  docsSlug: "dialog"
}), ld = oC, dd = sC, ga = cC, ba = lC, xa = uC, ya = mC, $a = vC, wa = bC, $C = ld, PO = dd, rh = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ f.exports.jsx(ga, { className: F(e), ...n, children: /* @__PURE__ */ f.exports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-4", children: t }) });
rh.displayName = ga.displayName;
const oh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ba,
  {
    ref: n,
    className: F(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      e
    ),
    ...t
  }
));
oh.displayName = ba.displayName;
const ah = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(rh, { children: [
  /* @__PURE__ */ f.exports.jsx(oh, {}),
  /* @__PURE__ */ f.exports.jsxs(
    xa,
    {
      ref: r,
      className: F(
        "fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
        e
      ),
      ...n,
      children: [
        t,
        !n["aria-modal"] && /* @__PURE__ */ f.exports.jsxs(wa, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ f.exports.jsx(zs, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
ah.displayName = xa.displayName;
const wC = ({
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
wC.displayName = "DialogHeader";
const _C = ({
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
_C.displayName = "DialogFooter";
const CC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ya,
  {
    ref: n,
    className: F(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
CC.displayName = ya.displayName;
const SC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  $a,
  {
    ref: n,
    className: F("text-sm text-muted-foreground", e),
    ...t
  }
));
SC.displayName = $a.displayName;
const EC = ({ id: e, form: t, label: n, description: r, iconDirection: o, classNameContainer: a, validateInputIconClassNames: s, rest: i }) => {
  const [c, l] = C.useState(!1);
  return i.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: F("w-full", a), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsxs(fn, { className: "flex", htmlFor: e, children: [
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
          onClick: () => l((d) => !d),
          className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
          children: c ? /* @__PURE__ */ f.exports.jsx(La, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(Ia, { size: 18 })
        }
      ) }),
      /* @__PURE__ */ f.exports.jsx(
        Fo,
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
          onClick: () => l((d) => !d),
          children: c ? /* @__PURE__ */ f.exports.jsx(La, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(Ia, { size: 18 })
        }
      ) })
    ] })
  ] }) : /* @__PURE__ */ f.exports.jsx(
    Nr,
    {
      control: t.control,
      name: e,
      render: ({ field: d, formState: u }) => {
        var p;
        return /* @__PURE__ */ f.exports.jsxs(nr, { className: F("w-full", a), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            n && /* @__PURE__ */ f.exports.jsxs(Pr, { className: "flex", children: [
              n,
              " "
            ] }),
            ((p = u == null ? void 0 : u.errors[e]) == null ? void 0 : p.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              u.errors[e].message
            ] })
          ] }),
          r && /* @__PURE__ */ f.exports.jsx(lo, { className: "text-xs", children: r }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ f.exports.jsx(va, { children: /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
            o === "left" && /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
              "button",
              {
                type: "button",
                onClick: () => l((m) => !m),
                className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
                children: c ? /* @__PURE__ */ f.exports.jsx(La, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(Ia, { size: 18 })
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(
              Fo,
              {
                ...d,
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
                children: c ? /* @__PURE__ */ f.exports.jsx(La, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(Ia, { size: 18 })
              }
            ) })
          ] }) })
        ] });
      }
    }
  );
}, NC = ({ id: e, form: t, icon: n, label: r, description: o, iconDirection: a, classNameContainer: s, validateInputIconClassNames: i, rest: c }) => c.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: F("w-full", s), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsxs(fn, { className: "flex", htmlFor: e, children: [
    r,
    " "
  ] }) }),
  o && /* @__PURE__ */ f.exports.jsx("p", { className: "text-muted-foreground text-xs", children: o }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
  /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
    a === "left" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
    /* @__PURE__ */ f.exports.jsx(
      Fo,
      {
        ...c,
        className: i()
      }
    ),
    a === "right" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
  ] })
] }) : /* @__PURE__ */ f.exports.jsx(
  Nr,
  {
    control: t.control,
    name: e,
    render: ({ field: l, formState: d }) => {
      var u;
      return /* @__PURE__ */ f.exports.jsxs(nr, { className: F("w-full", s), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          r && /* @__PURE__ */ f.exports.jsxs(Pr, { className: "flex", children: [
            r,
            " "
          ] }),
          ((u = d == null ? void 0 : d.errors[e]) == null ? void 0 : u.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            d.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(lo, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
          a === "left" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
          /* @__PURE__ */ f.exports.jsx(va, { children: /* @__PURE__ */ f.exports.jsx(
            Fo,
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
), Fo = C.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
    "input",
    {
      type: t,
      className: F(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
Fo.displayName = "InputUI";
function ud({ children: e, id: t, label: n, classNameContainer: r, description: o, icon: a, iconDirection: s = "left", ...i }) {
  const c = () => s === "left" && (a || i.type === "password") ? "pl-9" : s === "right" ? "pr-9" : "";
  return i.type === "password" ? /* @__PURE__ */ f.exports.jsx(
    EC,
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
    NC,
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
const PC = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), TC = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, zu = (e) => {
  const t = [
    $o.VENEZUELAN,
    $o.JURIDICAL,
    $o.FOREIGN,
    $o.PASSPORT,
    $o.GOVERNMENTAL
  ];
  return !e || e.length === 0 ? t.map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  })) : t.filter((o) => e.includes(o.value)).map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  }));
}, St = {
  type: {
    id: "pidType",
    tabIndex: void 0,
    buttonClassName: "w-[80px]",
    popoverClassName: "w-[90px]",
    notFoundLabel: "Codigo No Encontrado",
    ctaPlaceholder: "Tipo",
    placeholder: "Buscar...",
    defaultValue: zu(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: zu(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: void 0,
    placeholder: "00.000.000",
    maxLength: 10,
    defaultValue: ""
  }
};
function TO({
  form: e,
  pid: t = St
}) {
  var r, o, a, s, i, c, l, d, u, p, m, h, v, g;
  const n = (b) => {
    const { value: y } = b.target, $ = PC(y);
    e.setValue("pidNumber", $);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ f.exports.jsx(
      Fk,
      {
        id: "pidType",
        form: e,
        label: ((r = t == null ? void 0 : t.type) == null ? void 0 : r.label) || St.type.label,
        items: ((o = t == null ? void 0 : t.type) == null ? void 0 : o.items) || St.type.items,
        tabIndex: ((a = t == null ? void 0 : t.type) == null ? void 0 : a.tabIndex) || St.type.tabIndex,
        placeholder: ((s = t == null ? void 0 : t.type) == null ? void 0 : s.placeholder) || St.type.placeholder,
        defaultValue: ((i = t == null ? void 0 : t.type) == null ? void 0 : i.defaultValue) || St.type.defaultValue,
        notFoundLabel: ((c = t == null ? void 0 : t.type) == null ? void 0 : c.notFoundLabel) || St.type.notFoundLabel,
        ctaPlaceholder: ((l = t == null ? void 0 : t.type) == null ? void 0 : l.ctaPlaceholder) || St.type.ctaPlaceholder,
        buttonClassName: ((d = t == null ? void 0 : t.type) == null ? void 0 : d.buttonClassName) || St.type.buttonClassName,
        popoverClassName: ((u = t == null ? void 0 : t.type) == null ? void 0 : u.popoverClassName) || St.type.popoverClassName,
        disabled: ((p = t == null ? void 0 : t.type) == null ? void 0 : p.disabled) || St.type.disabled
      }
    ),
    /* @__PURE__ */ f.exports.jsx(
      ud,
      {
        id: "pidNumber",
        form: e,
        type: "text",
        defaultValue: (m = t == null ? void 0 : t.number) == null ? void 0 : m.defaultValue,
        onKeyPress: TC,
        onKeyUp: n,
        tabIndex: ((h = t == null ? void 0 : t.number) == null ? void 0 : h.tabIndex) || St.number.tabIndex,
        maxLength: ((v = t == null ? void 0 : t.number) == null ? void 0 : v.maxLength) || St.number.maxLength,
        placeholder: ((g = t == null ? void 0 : t.number) == null ? void 0 : g.placeholder) || St.number.placeholder
      }
    )
  ] });
}
const sh = "Popover", [ih, kO] = Ze(sh, [
  un
]), fd = un(), [kC, uo] = ih(sh), OC = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, i = fd(t), c = V(null), [l, d] = Y(!1), [u = !1, p] = tt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ x(co, i, /* @__PURE__ */ x(kC, {
    scope: t,
    contentId: rt(),
    triggerRef: c,
    open: u,
    onOpenChange: p,
    onOpenToggle: ue(
      () => p(
        (m) => !m
      ),
      [
        p
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: ue(
      () => d(!0),
      []
    ),
    onCustomAnchorRemove: ue(
      () => d(!1),
      []
    ),
    modal: s
  }, n));
}, MC = "PopoverTrigger", DC = /* @__PURE__ */ R((e, t) => {
  const { __scopePopover: n, ...r } = e, o = uo(MC, n), a = fd(n), s = we(t, o.triggerRef), i = /* @__PURE__ */ x(ie.button, S({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": dh(o.open)
  }, r, {
    ref: s,
    onClick: H(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? i : /* @__PURE__ */ x(la, S({
    asChild: !0
  }, a), i);
}), ch = "PopoverPortal", [RC, AC] = ih(ch, {
  forceMount: void 0
}), jC = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = uo(ch, t);
  return /* @__PURE__ */ x(RC, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ x(Xe, {
    present: n || a.open
  }, /* @__PURE__ */ x(Zs, {
    asChild: !0,
    container: o
  }, r)));
}, Vo = "PopoverContent", IC = /* @__PURE__ */ R((e, t) => {
  const n = AC(Vo, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = uo(Vo, e.__scopePopover);
  return /* @__PURE__ */ x(Xe, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ x(LC, S({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(FC, S({}, o, {
    ref: t
  })));
}), LC = /* @__PURE__ */ R((e, t) => {
  const n = uo(Vo, e.__scopePopover), r = V(null), o = we(t, r), a = V(!1);
  return G(() => {
    const s = r.current;
    if (s)
      return ua(s);
  }, []), /* @__PURE__ */ x(Js, {
    as: nn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ x(lh, S({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: H(e.onCloseAutoFocus, (s) => {
      var i;
      s.preventDefault(), a.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: H(e.onPointerDownOutside, (s) => {
      const i = s.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || c;
      a.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: H(
      e.onFocusOutside,
      (s) => s.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), FC = /* @__PURE__ */ R((e, t) => {
  const n = uo(Vo, e.__scopePopover), r = V(!1), o = V(!1);
  return /* @__PURE__ */ x(lh, S({}, e, {
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
}), lh = /* @__PURE__ */ R((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: d, ...u } = e, p = uo(Vo, n), m = fd(n);
  return Ys(), /* @__PURE__ */ x(Hs, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ x(Sr, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: d,
    onEscapeKeyDown: i,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ x(da, S({
    "data-state": dh(p.open),
    role: "dialog",
    id: p.contentId
  }, m, u, {
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
function dh(e) {
  return e ? "open" : "closed";
}
const VC = OC, UC = DC, WC = jC, uh = IC, En = VC, Nn = UC, sn = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(WC, { children: /* @__PURE__ */ f.exports.jsx(
  uh,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: F(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
sn.displayName = uh.displayName;
const fh = C.forwardRef(
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
fh.displayName = "TextareaUI";
const OO = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, ...i }) => /* @__PURE__ */ f.exports.jsx(
  Nr,
  {
    control: t.control,
    name: e,
    render: ({ field: c, formState: l }) => {
      var d;
      return /* @__PURE__ */ f.exports.jsxs(nr, { className: F("w-full", s), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          n && /* @__PURE__ */ f.exports.jsxs(Pr, { className: "flex", children: [
            n,
            " "
          ] }),
          ((d = l == null ? void 0 : l.errors[e]) == null ? void 0 : d.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            l.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(lo, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsx(va, { children: /* @__PURE__ */ f.exports.jsx(
          fh,
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
function Uo(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function fo(e) {
  const t = V({
    value: e,
    previous: e
  });
  return yt(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const ph = /* @__PURE__ */ R((e, t) => /* @__PURE__ */ x(ie.span, S({}, e, {
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
}))), mh = ph, zC = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], BC = [
  " ",
  "Enter"
], oi = "Select", [ai, pd, YC] = Jn(oi), [po, MO] = Ze(oi, [
  YC,
  un
]), md = un(), [HC, Tr] = po(oi), [KC, GC] = po(oi), ZC = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: i, onValueChange: c, dir: l, name: d, autoComplete: u, disabled: p, required: m } = e, h = md(t), [v, g] = Y(null), [b, y] = Y(null), [$, _] = Y(!1), w = dn(l), [P = !1, k] = tt({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [L, I] = tt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), ee = V(null), te = v ? Boolean(v.closest("form")) : !0, [K, Z] = Y(/* @__PURE__ */ new Set()), O = Array.from(K).map(
    (A) => A.props.value
  ).join(";");
  return /* @__PURE__ */ x(co, h, /* @__PURE__ */ x(HC, {
    required: m,
    scope: t,
    trigger: v,
    onTriggerChange: g,
    valueNode: b,
    onValueNodeChange: y,
    valueNodeHasChildren: $,
    onValueNodeHasChildrenChange: _,
    contentId: rt(),
    value: L,
    onValueChange: I,
    open: P,
    onOpenChange: k,
    dir: w,
    triggerPointerDownPosRef: ee,
    disabled: p
  }, /* @__PURE__ */ x(ai.Provider, {
    scope: t
  }, /* @__PURE__ */ x(KC, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: ue((A) => {
      Z(
        (j) => new Set(j).add(A)
      );
    }, []),
    onNativeOptionRemove: ue((A) => {
      Z((j) => {
        const W = new Set(j);
        return W.delete(A), W;
      });
    }, [])
  }, n)), te ? /* @__PURE__ */ x(gh, {
    key: O,
    "aria-hidden": !0,
    required: m,
    tabIndex: -1,
    name: d,
    autoComplete: u,
    value: L,
    onChange: (A) => I(A.target.value),
    disabled: p
  }, L === void 0 ? /* @__PURE__ */ x("option", {
    value: ""
  }) : null, Array.from(K)) : null));
}, qC = "SelectTrigger", XC = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = md(n), s = Tr(qC, n), i = s.disabled || r, c = we(t, s.onTriggerChange), l = pd(n), [d, u, p] = bh((h) => {
    const v = l().filter(
      (y) => !y.disabled
    ), g = v.find(
      (y) => y.value === s.value
    ), b = xh(v, h, g);
    b !== void 0 && s.onValueChange(b.value);
  }), m = () => {
    i || (s.onOpenChange(!0), p());
  };
  return /* @__PURE__ */ x(la, S({
    asChild: !0
  }, a), /* @__PURE__ */ x(ie.button, S({
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
    onClick: H(o.onClick, (h) => {
      h.currentTarget.focus();
    }),
    onPointerDown: H(o.onPointerDown, (h) => {
      const v = h.target;
      v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && (m(), s.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      }, h.preventDefault());
    }),
    onKeyDown: H(o.onKeyDown, (h) => {
      const v = d.current !== "";
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && u(h.key), !(v && h.key === " ") && zC.includes(h.key) && (m(), h.preventDefault());
    })
  })));
}), QC = "SelectValue", JC = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s, ...i } = e, c = Tr(QC, n), { onValueNodeHasChildrenChange: l } = c, d = a !== void 0, u = we(t, c.onValueNodeChange);
  return pt(() => {
    l(d);
  }, [
    l,
    d
  ]), /* @__PURE__ */ x(ie.span, S({}, i, {
    ref: u,
    style: {
      pointerEvents: "none"
    }
  }), c.value === void 0 && s !== void 0 ? s : a);
}), eS = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ x(ie.span, S({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), tS = (e) => /* @__PURE__ */ x(Zs, S({
  asChild: !0
}, e)), Qr = "SelectContent", nS = /* @__PURE__ */ R((e, t) => {
  const n = Tr(Qr, e.__scopeSelect), [r, o] = Y();
  if (pt(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ fl(/* @__PURE__ */ x(hh, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ x(ai.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ x("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ x(rS, S({}, e, {
    ref: t
  }));
}), bn = 10, [hh, si] = po(Qr), rS = /* @__PURE__ */ R((e, t) => {
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
    arrowPadding: u,
    collisionBoundary: p,
    collisionPadding: m,
    sticky: h,
    hideWhenDetached: v,
    avoidCollisions: g,
    //
    ...b
  } = e, y = Tr(Qr, n), [$, _] = Y(null), [w, P] = Y(null), k = we(
    t,
    (ne) => _(ne)
  ), [L, I] = Y(null), [ee, te] = Y(null), K = pd(n), [Z, O] = Y(!1), A = V(!1);
  G(() => {
    if ($)
      return ua($);
  }, [
    $
  ]), Ys();
  const j = ue((ne) => {
    const [le, ...he] = K().map(
      (Q) => Q.ref.current
    ), [J] = he.slice(-1), ve = document.activeElement;
    for (const Q of ne)
      if (Q === ve || (Q == null || Q.scrollIntoView({
        block: "nearest"
      }), Q === le && w && (w.scrollTop = 0), Q === J && w && (w.scrollTop = w.scrollHeight), Q == null || Q.focus(), document.activeElement !== ve))
        return;
  }, [
    K,
    w
  ]), W = ue(
    () => j([
      L,
      $
    ]),
    [
      j,
      L,
      $
    ]
  );
  G(() => {
    Z && W();
  }, [
    Z,
    W
  ]);
  const { onOpenChange: B, triggerPointerDownPosRef: M } = y;
  G(() => {
    if ($) {
      let ne = {
        x: 0,
        y: 0
      };
      const le = (J) => {
        var ve, Q, Re, Ue;
        ne = {
          x: Math.abs(Math.round(J.pageX) - ((ve = (Q = M.current) === null || Q === void 0 ? void 0 : Q.x) !== null && ve !== void 0 ? ve : 0)),
          y: Math.abs(Math.round(J.pageY) - ((Re = (Ue = M.current) === null || Ue === void 0 ? void 0 : Ue.y) !== null && Re !== void 0 ? Re : 0))
        };
      }, he = (J) => {
        ne.x <= 10 && ne.y <= 10 ? J.preventDefault() : $.contains(J.target) || B(!1), document.removeEventListener("pointermove", le), M.current = null;
      };
      return M.current !== null && (document.addEventListener("pointermove", le), document.addEventListener("pointerup", he, {
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
    B,
    M
  ]), G(() => {
    const ne = () => B(!1);
    return window.addEventListener("blur", ne), window.addEventListener("resize", ne), () => {
      window.removeEventListener("blur", ne), window.removeEventListener("resize", ne);
    };
  }, [
    B
  ]);
  const [D, U] = bh((ne) => {
    const le = K().filter(
      (ve) => !ve.disabled
    ), he = le.find(
      (ve) => ve.ref.current === document.activeElement
    ), J = xh(le, ne, he);
    J && setTimeout(
      () => J.ref.current.focus()
    );
  }), q = ue((ne, le, he) => {
    const J = !A.current && !he;
    (y.value !== void 0 && y.value === le || J) && (I(ne), J && (A.current = !0));
  }, [
    y.value
  ]), oe = ue(
    () => $ == null ? void 0 : $.focus(),
    [
      $
    ]
  ), ce = ue((ne, le, he) => {
    const J = !A.current && !he;
    (y.value !== void 0 && y.value === le || J) && te(ne);
  }, [
    y.value
  ]), ye = r === "popper" ? Bu : oS, be = ye === Bu ? {
    side: i,
    sideOffset: c,
    align: l,
    alignOffset: d,
    arrowPadding: u,
    collisionBoundary: p,
    collisionPadding: m,
    sticky: h,
    hideWhenDetached: v,
    avoidCollisions: g
  } : {};
  return /* @__PURE__ */ x(hh, {
    scope: n,
    content: $,
    viewport: w,
    onViewportChange: P,
    itemRefCallback: q,
    selectedItem: L,
    onItemLeave: oe,
    itemTextRefCallback: ce,
    focusSelectedItem: W,
    selectedItemText: ee,
    position: r,
    isPositioned: Z,
    searchRef: D
  }, /* @__PURE__ */ x(Js, {
    as: nn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ x(Hs, {
    asChild: !0,
    trapped: y.open,
    onMountAutoFocus: (ne) => {
      ne.preventDefault();
    },
    onUnmountAutoFocus: H(o, (ne) => {
      var le;
      (le = y.trigger) === null || le === void 0 || le.focus({
        preventScroll: !0
      }), ne.preventDefault();
    })
  }, /* @__PURE__ */ x(Sr, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (ne) => ne.preventDefault(),
    onDismiss: () => y.onOpenChange(!1)
  }, /* @__PURE__ */ x(ye, S({
    role: "listbox",
    id: y.contentId,
    "data-state": y.open ? "open" : "closed",
    dir: y.dir,
    onContextMenu: (ne) => ne.preventDefault()
  }, b, be, {
    onPlaced: () => O(!0),
    ref: k,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...b.style
    },
    onKeyDown: H(b.onKeyDown, (ne) => {
      const le = ne.ctrlKey || ne.altKey || ne.metaKey;
      if (ne.key === "Tab" && ne.preventDefault(), !le && ne.key.length === 1 && U(ne.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(ne.key)) {
        let J = K().filter(
          (ve) => !ve.disabled
        ).map(
          (ve) => ve.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(ne.key) && (J = J.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(ne.key)) {
          const ve = ne.target, Q = J.indexOf(ve);
          J = J.slice(Q + 1);
        }
        setTimeout(
          () => j(J)
        ), ne.preventDefault();
      }
    })
  }))))));
}), oS = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Tr(Qr, n), s = si(Qr, n), [i, c] = Y(null), [l, d] = Y(null), u = we(
    t,
    (k) => d(k)
  ), p = pd(n), m = V(!1), h = V(!0), { viewport: v, selectedItem: g, selectedItemText: b, focusSelectedItem: y } = s, $ = ue(() => {
    if (a.trigger && a.valueNode && i && l && v && g && b) {
      const k = a.trigger.getBoundingClientRect(), L = l.getBoundingClientRect(), I = a.valueNode.getBoundingClientRect(), ee = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ve = ee.left - L.left, Q = I.left - ve, Re = k.left - Q, Ue = k.width + Re, dt = Math.max(Ue, L.width), T = window.innerWidth - bn, z = Uo(Q, [
          bn,
          T - dt
        ]);
        i.style.minWidth = Ue + "px", i.style.left = z + "px";
      } else {
        const ve = L.right - ee.right, Q = window.innerWidth - I.right - ve, Re = window.innerWidth - k.right - Q, Ue = k.width + Re, dt = Math.max(Ue, L.width), T = window.innerWidth - bn, z = Uo(Q, [
          bn,
          T - dt
        ]);
        i.style.minWidth = Ue + "px", i.style.right = z + "px";
      }
      const te = p(), K = window.innerHeight - bn * 2, Z = v.scrollHeight, O = window.getComputedStyle(l), A = parseInt(O.borderTopWidth, 10), j = parseInt(O.paddingTop, 10), W = parseInt(O.borderBottomWidth, 10), B = parseInt(O.paddingBottom, 10), M = A + j + Z + B + W, D = Math.min(g.offsetHeight * 5, M), U = window.getComputedStyle(v), q = parseInt(U.paddingTop, 10), oe = parseInt(U.paddingBottom, 10), ce = k.top + k.height / 2 - bn, ye = K - ce, be = g.offsetHeight / 2, ne = g.offsetTop + be, le = A + j + ne, he = M - le;
      if (le <= ce) {
        const ve = g === te[te.length - 1].ref.current;
        i.style.bottom = "0px";
        const Q = l.clientHeight - v.offsetTop - v.offsetHeight, Re = Math.max(ye, be + (ve ? oe : 0) + Q + W), Ue = le + Re;
        i.style.height = Ue + "px";
      } else {
        const ve = g === te[0].ref.current;
        i.style.top = "0px";
        const Re = Math.max(ce, A + v.offsetTop + (ve ? q : 0) + be) + he;
        i.style.height = Re + "px", v.scrollTop = le - ce + v.offsetTop;
      }
      i.style.margin = `${bn}px 0`, i.style.minHeight = D + "px", i.style.maxHeight = K + "px", r == null || r(), requestAnimationFrame(
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
  pt(
    () => $(),
    [
      $
    ]
  );
  const [_, w] = Y();
  pt(() => {
    l && w(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const P = ue((k) => {
    k && h.current === !0 && ($(), y == null || y(), h.current = !1);
  }, [
    $,
    y
  ]);
  return /* @__PURE__ */ x(aS, {
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
  }, /* @__PURE__ */ x(ie.div, S({}, o, {
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
}), Bu = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = bn, ...a } = e, s = md(n);
  return /* @__PURE__ */ x(da, S({}, s, a, {
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
}), [aS, sS] = po(Qr, {}), Yu = "SelectViewport", iS = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = si(Yu, n), a = sS(Yu, n), s = we(t, o.onViewportChange), i = V(0);
  return /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ x(ai.Slot, {
    scope: n
  }, /* @__PURE__ */ x(ie.div, S({
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
    onScroll: H(r.onScroll, (c) => {
      const l = c.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: u } = a;
      if (u != null && u.current && d) {
        const p = Math.abs(i.current - l.scrollTop);
        if (p > 0) {
          const m = window.innerHeight - bn * 2, h = parseFloat(d.style.minHeight), v = parseFloat(d.style.height), g = Math.max(h, v);
          if (g < m) {
            const b = g + p, y = Math.min(m, b), $ = b - y;
            d.style.height = y + "px", d.style.bottom === "0px" && (l.scrollTop = $ > 0 ? $ : 0, d.style.justifyContent = "flex-end");
          }
        }
      }
      i.current = l.scrollTop;
    })
  }))));
}), cS = "SelectGroup", [lS, dS] = po(cS), uS = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = rt();
  return /* @__PURE__ */ x(lS, {
    scope: n,
    id: o
  }, /* @__PURE__ */ x(ie.div, S({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), fS = "SelectLabel", pS = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = dS(fS, n);
  return /* @__PURE__ */ x(ie.div, S({
    id: o.id
  }, r, {
    ref: t
  }));
}), Ac = "SelectItem", [mS, vh] = po(Ac), hS = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, i = Tr(Ac, n), c = si(Ac, n), l = i.value === r, [d, u] = Y(a ?? ""), [p, m] = Y(!1), h = we(t, (b) => {
    var y;
    return (y = c.itemRefCallback) === null || y === void 0 ? void 0 : y.call(c, b, r, o);
  }), v = rt(), g = () => {
    o || (i.onValueChange(r), i.onOpenChange(!1));
  };
  return /* @__PURE__ */ x(mS, {
    scope: n,
    value: r,
    disabled: o,
    textId: v,
    isSelected: l,
    onItemTextChange: ue((b) => {
      u((y) => {
        var $;
        return y || (($ = b == null ? void 0 : b.textContent) !== null && $ !== void 0 ? $ : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ x(ai.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: d
  }, /* @__PURE__ */ x(ie.div, S({
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
    onFocus: H(
      s.onFocus,
      () => m(!0)
    ),
    onBlur: H(
      s.onBlur,
      () => m(!1)
    ),
    onPointerUp: H(s.onPointerUp, g),
    onPointerMove: H(s.onPointerMove, (b) => {
      if (o) {
        var y;
        (y = c.onItemLeave) === null || y === void 0 || y.call(c);
      } else
        b.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: H(s.onPointerLeave, (b) => {
      if (b.currentTarget === document.activeElement) {
        var y;
        (y = c.onItemLeave) === null || y === void 0 || y.call(c);
      }
    }),
    onKeyDown: H(s.onKeyDown, (b) => {
      var y;
      ((y = c.searchRef) === null || y === void 0 ? void 0 : y.current) !== "" && b.key === " " || (BC.includes(b.key) && g(), b.key === " " && b.preventDefault());
    })
  }))));
}), Ka = "SelectItemText", vS = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = Tr(Ka, n), i = si(Ka, n), c = vh(Ka, n), l = GC(Ka, n), [d, u] = Y(null), p = we(
    t,
    (b) => u(b),
    c.onItemTextChange,
    (b) => {
      var y;
      return (y = i.itemTextRefCallback) === null || y === void 0 ? void 0 : y.call(i, b, c.value, c.disabled);
    }
  ), m = d == null ? void 0 : d.textContent, h = yt(
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
  return pt(() => (v(h), () => g(h)), [
    v,
    g,
    h
  ]), /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(ie.span, S({
    id: c.textId
  }, a, {
    ref: p
  })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ fl(a.children, s.valueNode) : null);
}), gS = "SelectItemIndicator", bS = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return vh(gS, n).isSelected ? /* @__PURE__ */ x(ie.span, S({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), xS = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, S({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
}), gh = /* @__PURE__ */ R((e, t) => {
  const { value: n, ...r } = e, o = V(null), a = we(t, o), s = fo(n);
  return G(() => {
    const i = o.current, c = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(c, "value").set;
    if (s !== n && d) {
      const u = new Event("change", {
        bubbles: !0
      });
      d.call(i, n), i.dispatchEvent(u);
    }
  }, [
    s,
    n
  ]), /* @__PURE__ */ x(ph, {
    asChild: !0
  }, /* @__PURE__ */ x("select", S({}, r, {
    ref: a,
    defaultValue: n
  })));
});
gh.displayName = "BubbleSelect";
function bh(e) {
  const t = ze(e), n = V(""), r = V(0), o = ue((s) => {
    const i = n.current + s;
    t(i), function c(l) {
      n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(
        () => c(""),
        1e3
      ));
    }(i);
  }, [
    t
  ]), a = ue(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return G(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    a
  ];
}
function xh(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = yS(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function yS(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const $S = ZC, yh = XC, wS = JC, _S = eS, CS = tS, $h = nS, SS = iS, ES = uS, wh = pS, _h = hS, NS = vS, PS = bS, Ch = xS, hd = $S, TS = ES, vd = wS, ii = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  yh,
  {
    ref: r,
    className: F(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(_S, { asChild: !0, children: /* @__PURE__ */ f.exports.jsx(Do, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
ii.displayName = yh.displayName;
const ci = C.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ f.exports.jsx(CS, { children: /* @__PURE__ */ f.exports.jsx(
  $h,
  {
    ref: o,
    className: F(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
      n === "popper" && "translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ f.exports.jsx(
      SS,
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
ci.displayName = $h.displayName;
const kS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  wh,
  {
    ref: n,
    className: F("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
kS.displayName = wh.displayName;
const li = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  _h,
  {
    ref: r,
    className: F(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(PS, { children: /* @__PURE__ */ f.exports.jsx(Kt, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ f.exports.jsx(NS, { children: t })
    ]
  }
));
li.displayName = _h.displayName;
const OS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ch,
  {
    ref: n,
    className: F("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
OS.displayName = Ch.displayName;
const Sh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
Sh.displayName = "Card";
const MS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: F("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
MS.displayName = "CardHeader";
const DS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
DS.displayName = "CardTitle";
const RS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "p",
  {
    ref: n,
    className: F("text-sm text-muted-foreground", e),
    ...t
  }
));
RS.displayName = "CardDescription";
const AS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: F("p-6 pt-0", e), ...t }));
AS.displayName = "CardContent";
const jS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: F(" flex items-center p-6 pt-0", e),
    ...t
  }
));
jS.displayName = "CardFooter";
const Eh = "Checkbox", [IS, DO] = Ze(Eh), [LS, FS] = IS(Eh), VS = /* @__PURE__ */ R((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...d } = e, [u, p] = Y(null), m = we(
    t,
    ($) => p($)
  ), h = V(!1), v = u ? Boolean(u.closest("form")) : !0, [g = !1, b] = tt({
    prop: o,
    defaultProp: a,
    onChange: l
  }), y = V(g);
  return G(() => {
    const $ = u == null ? void 0 : u.form;
    if ($) {
      const _ = () => b(y.current);
      return $.addEventListener("reset", _), () => $.removeEventListener("reset", _);
    }
  }, [
    u,
    b
  ]), /* @__PURE__ */ x(LS, {
    scope: n,
    state: g,
    disabled: i
  }, /* @__PURE__ */ x(ie.button, S({
    type: "button",
    role: "checkbox",
    "aria-checked": lr(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": Nh(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, d, {
    ref: m,
    onKeyDown: H(e.onKeyDown, ($) => {
      $.key === "Enter" && $.preventDefault();
    }),
    onClick: H(e.onClick, ($) => {
      b(
        (_) => lr(_) ? !0 : !_
      ), v && (h.current = $.isPropagationStopped(), h.current || $.stopPropagation());
    })
  })), v && /* @__PURE__ */ x(zS, {
    control: u,
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
}), US = "CheckboxIndicator", WS = /* @__PURE__ */ R((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = FS(US, n);
  return /* @__PURE__ */ x(Xe, {
    present: r || lr(a.state) || a.state === !0
  }, /* @__PURE__ */ x(ie.span, S({
    "data-state": Nh(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), zS = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = V(null), s = fo(n), i = ca(t);
  return G(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && u) {
      const p = new Event("click", {
        bubbles: r
      });
      c.indeterminate = lr(n), u.call(c, lr(n) ? !1 : n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ x("input", S({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: lr(n) ? !1 : n
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
function lr(e) {
  return e === "indeterminate";
}
function Nh(e) {
  return lr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Ph = VS, BS = WS, Th = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ph,
  {
    ref: n,
    className: F(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.exports.jsx(
      BS,
      {
        className: F("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ f.exports.jsx(Kt, { className: "h-4 w-4" })
      }
    )
  }
));
Th.displayName = Ph.displayName;
const kh = "DropdownMenu", [YS, RO] = Ze(kh, [
  fa
]), _t = fa(), [HS, Oh] = YS(kh), KS = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = _t(t), l = V(null), [d = !1, u] = tt({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ x(HS, {
    scope: t,
    triggerId: rt(),
    triggerRef: l,
    contentId: rt(),
    open: d,
    onOpenChange: u,
    onOpenToggle: ue(
      () => u(
        (p) => !p
      ),
      [
        u
      ]
    ),
    modal: i
  }, /* @__PURE__ */ x(Wl, S({}, c, {
    open: d,
    onOpenChange: u,
    dir: r,
    modal: i
  }), n));
}, GS = "DropdownMenuTrigger", ZS = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Oh(GS, n), s = _t(n);
  return /* @__PURE__ */ x(zl, S({
    asChild: !0
  }, s), /* @__PURE__ */ x(ie.button, S({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: ra(t, a.triggerRef),
    onPointerDown: H(e.onPointerDown, (i) => {
      !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
    }),
    onKeyDown: H(e.onKeyDown, (i) => {
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
}), qS = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = _t(t);
  return /* @__PURE__ */ x(Bl, S({}, r, n));
}, XS = "DropdownMenuContent", QS = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Oh(XS, n), a = _t(n), s = V(!1);
  return /* @__PURE__ */ x(Yl, S({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, a, r, {
    ref: t,
    onCloseAutoFocus: H(e.onCloseAutoFocus, (i) => {
      var c;
      s.current || (c = o.triggerRef.current) === null || c === void 0 || c.focus(), s.current = !1, i.preventDefault();
    }),
    onInteractOutside: H(e.onInteractOutside, (i) => {
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
}), JS = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Hl, S({}, o, r, {
    ref: t
  }));
}), eE = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Kl, S({}, o, r, {
    ref: t
  }));
}), tE = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Gl, S({}, o, r, {
    ref: t
  }));
}), nE = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Zl, S({}, o, r, {
    ref: t
  }));
}), rE = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(ql, S({}, o, r, {
    ref: t
  }));
}), oE = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Xl, S({}, o, r, {
    ref: t
  }));
}), aE = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Ql, S({}, o, r, {
    ref: t
  }));
}), sE = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Jl, S({}, o, r, {
    ref: t
  }));
}), iE = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = _t(t), [i = !1, c] = tt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ x(ed, S({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, cE = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(td, S({}, o, r, {
    ref: t
  }));
}), lE = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(nd, S({}, o, r, {
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
}), dE = KS, uE = ZS, Mh = qS, Dh = QS, fE = JS, Rh = eE, Ah = tE, jh = nE, pE = rE, Ih = oE, Lh = aE, Fh = sE, mE = iE, Vh = cE, Uh = lE, AO = dE, jO = uE, IO = fE, LO = Mh, FO = mE, VO = pE, hE = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Vh,
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
      /* @__PURE__ */ f.exports.jsx(ao, { className: "ml-auto h-4 w-4" })
    ]
  }
));
hE.displayName = Vh.displayName;
const vE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Uh,
  {
    ref: n,
    className: F(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
vE.displayName = Uh.displayName;
const gE = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(Mh, { children: /* @__PURE__ */ f.exports.jsx(
  Dh,
  {
    ref: r,
    sideOffset: t,
    className: F(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
gE.displayName = Dh.displayName;
const bE = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Ah,
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
bE.displayName = Ah.displayName;
const xE = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  jh,
  {
    ref: o,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Lh, { children: /* @__PURE__ */ f.exports.jsx(Kt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
xE.displayName = jh.displayName;
const yE = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Ih,
  {
    ref: r,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Lh, { children: /* @__PURE__ */ f.exports.jsx(Us, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
yE.displayName = Ih.displayName;
const $E = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Rh,
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
$E.displayName = Rh.displayName;
const wE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Fh,
  {
    ref: n,
    className: F("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
wE.displayName = Fh.displayName;
const _E = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: F("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
_E.displayName = "DropdownMenuShortcut";
const jc = "horizontal", CE = [
  "horizontal",
  "vertical"
], Wh = /* @__PURE__ */ R((e, t) => {
  const { decorative: n, orientation: r = jc, ...o } = e, a = zh(r) ? r : jc, i = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ x(ie.div, S({
    "data-orientation": a
  }, i, o, {
    ref: t
  }));
});
Wh.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !zh(r) ? new Error(SE(o, n)) : null;
  }
};
function SE(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${jc}\`.`;
}
function zh(e) {
  return CE.includes(e);
}
const Bh = Wh, _a = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
    Bh,
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
_a.displayName = Bh.displayName;
function Hr(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function EE(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Yh(...e) {
  return (t) => e.forEach(
    (n) => EE(n, t)
  );
}
function Ca(...e) {
  return ue(Yh(...e), e);
}
function NE(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ ct(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(u) {
      const { scope: p, children: m, ...h } = u, v = (p == null ? void 0 : p[e][c]) || i, g = yt(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ x(v.Provider, {
        value: g
      }, m);
    }
    function d(u, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, h = He(m);
      if (h)
        return h;
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
    const a = n.map((s) => /* @__PURE__ */ ct(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return yt(
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
    PE(o, ...t)
  ];
}
function PE(...e) {
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
        const u = c(a)[`__scope${l}`];
        return {
          ...i,
          ...u
        };
      }, {});
      return yt(
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
const Ic = Boolean(globalThis == null ? void 0 : globalThis.document) ? Ls : () => {
}, TE = C["useId".toString()] || (() => {
});
let kE = 0;
function Zi(e) {
  const [t, n] = C.useState(TE());
  return Ic(() => {
    e || n(
      (r) => r ?? String(kE++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function mr(e) {
  const t = V(e);
  return G(() => {
    t.current = e;
  }), yt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function OE({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = ME({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = mr(n), c = ue((l) => {
    if (a) {
      const u = typeof l == "function" ? l(e) : l;
      u !== e && i(u);
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
function ME({ defaultProp: e, onChange: t }) {
  const n = Y(e), [r] = n, o = V(r), a = mr(t);
  return G(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const gd = /* @__PURE__ */ R((e, t) => {
  const { children: n, ...r } = e, o = Nt.toArray(n), a = o.find(RE);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Nt.count(s) > 1 ? Nt.only(null) : /* @__PURE__ */ Un(s) ? s.props.children : null : c);
    return /* @__PURE__ */ x(Lc, S({}, r, {
      ref: t
    }), /* @__PURE__ */ Un(s) ? /* @__PURE__ */ ro(s, void 0, i) : null);
  }
  return /* @__PURE__ */ x(Lc, S({}, r, {
    ref: t
  }), n);
});
gd.displayName = "Slot";
const Lc = /* @__PURE__ */ R((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Un(n) ? /* @__PURE__ */ ro(n, {
    ...AE(r, n.props),
    ref: Yh(t, n.ref)
  }) : Nt.count(n) > 1 ? Nt.only(null) : null;
});
Lc.displayName = "SlotClone";
const DE = ({ children: e }) => /* @__PURE__ */ x(Ht, null, e);
function RE(e) {
  return /* @__PURE__ */ Un(e) && e.type === DE;
}
function AE(e, t) {
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
const jE = [
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
], di = jE.reduce((e, t) => {
  const n = /* @__PURE__ */ R((r, o) => {
    const { asChild: a, ...s } = r, i = a ? gd : t;
    return G(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ x(i, S({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function IE(e, t) {
  e && Vs(
    () => e.dispatchEvent(t)
  );
}
function LE(e) {
  const t = mr(e);
  G(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const Fc = "dismissableLayer.update", FE = "dismissableLayer.pointerDownOutside", VE = "dismissableLayer.focusOutside";
let Hu;
const UE = /* @__PURE__ */ ct({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), WE = /* @__PURE__ */ R((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, onDismiss: i, ...c } = e, l = He(UE), [d, u] = Y(null), [, p] = Y({}), m = Ca(
    t,
    (P) => u(P)
  ), h = Array.from(l.layers), [v] = [
    ...l.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = h.indexOf(v), b = d ? h.indexOf(d) : -1, y = l.layersWithOutsidePointerEventsDisabled.size > 0, $ = b >= g, _ = zE((P) => {
    const k = P.target, L = [
      ...l.branches
    ].some(
      (I) => I.contains(k)
    );
    !$ || L || (o == null || o(P), s == null || s(P), P.defaultPrevented || i == null || i());
  }), w = BE((P) => {
    const k = P.target;
    [
      ...l.branches
    ].some(
      (I) => I.contains(k)
    ) || (a == null || a(P), s == null || s(P), P.defaultPrevented || i == null || i());
  });
  return LE((P) => {
    b === l.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && i && (P.preventDefault(), i()));
  }), G(() => {
    if (d)
      return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Hu = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(d)), l.layers.add(d), Ku(), () => {
        n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = Hu);
      };
  }, [
    d,
    n,
    l
  ]), G(() => () => {
    d && (l.layers.delete(d), l.layersWithOutsidePointerEventsDisabled.delete(d), Ku());
  }, [
    d,
    l
  ]), G(() => {
    const P = () => p({});
    return document.addEventListener(Fc, P), () => document.removeEventListener(Fc, P);
  }, []), /* @__PURE__ */ x(di.div, S({}, c, {
    ref: m,
    style: {
      pointerEvents: y ? $ ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: Hr(e.onFocusCapture, w.onFocusCapture),
    onBlurCapture: Hr(e.onBlurCapture, w.onBlurCapture),
    onPointerDownCapture: Hr(e.onPointerDownCapture, _.onPointerDownCapture)
  }));
});
function zE(e) {
  const t = mr(e), n = V(!1), r = V(() => {
  });
  return G(() => {
    const o = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          Hh(FE, t, i, {
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
function BE(e) {
  const t = mr(e), n = V(!1);
  return G(() => {
    const r = (o) => {
      o.target && !n.current && Hh(VE, t, {
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
function Ku() {
  const e = new CustomEvent(Fc);
  document.dispatchEvent(e);
}
function Hh(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? IE(o, a) : o.dispatchEvent(a);
}
const qi = "focusScope.autoFocusOnMount", Xi = "focusScope.autoFocusOnUnmount", Gu = {
  bubbles: !1,
  cancelable: !0
}, YE = /* @__PURE__ */ R((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = Y(null), l = mr(o), d = mr(a), u = V(null), p = Ca(
    t,
    (v) => c(v)
  ), m = V({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  G(() => {
    if (r) {
      let v = function(b) {
        if (m.paused || !i)
          return;
        const y = b.target;
        i.contains(y) ? u.current = y : sr(u.current, {
          select: !0
        });
      }, g = function(b) {
        m.paused || !i || i.contains(b.relatedTarget) || sr(u.current, {
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
  ]), G(() => {
    if (i) {
      qu.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(qi, Gu);
        i.addEventListener(qi, l), i.dispatchEvent(b), b.defaultPrevented || (HE(XE(Kh(i)), {
          select: !0
        }), document.activeElement === v && sr(i));
      }
      return () => {
        i.removeEventListener(qi, l), setTimeout(() => {
          const b = new CustomEvent(Xi, Gu);
          i.addEventListener(Xi, d), i.dispatchEvent(b), b.defaultPrevented || sr(v ?? document.body, {
            select: !0
          }), i.removeEventListener(Xi, d), qu.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    d,
    m
  ]);
  const h = ue((v) => {
    if (!n && !r || m.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
    if (g && b) {
      const y = v.currentTarget, [$, _] = KE(y);
      $ && _ ? !v.shiftKey && b === _ ? (v.preventDefault(), n && sr($, {
        select: !0
      })) : v.shiftKey && b === $ && (v.preventDefault(), n && sr(_, {
        select: !0
      })) : b === y && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ x(di.div, S({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: h
  }));
});
function HE(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (sr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function KE(e) {
  const t = Kh(e), n = Zu(t, e), r = Zu(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Kh(e) {
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
function Zu(e, t) {
  for (const n of e)
    if (!GE(n, {
      upTo: t
    }))
      return n;
}
function GE(e, { upTo: t }) {
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
function ZE(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function sr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && ZE(e) && t && e.select();
  }
}
const qu = qE();
function qE() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Xu(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Xu(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Xu(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function XE(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const QE = /* @__PURE__ */ R((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ ul.createPortal(/* @__PURE__ */ x(di.div, S({}, o, {
    ref: t
  })), r) : null;
});
function JE(e, t) {
  return Fs((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const ui = (e) => {
  const { present: t, children: n } = e, r = eN(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Nt.only(n), a = Ca(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ ro(o, {
    ref: a
  }) : null;
};
ui.displayName = "Presence";
function eN(e) {
  const [t, n] = Y(), r = V({}), o = V(e), a = V("none"), s = e ? "mounted" : "unmounted", [i, c] = JE(s, {
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
  return G(() => {
    const l = Ga(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), Ic(() => {
    const l = r.current, d = o.current;
    if (d !== e) {
      const p = a.current, m = Ga(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(d && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), Ic(() => {
    if (t) {
      const l = (u) => {
        const m = Ga(r.current).includes(u.animationName);
        u.target === t && m && Vs(
          () => c("ANIMATION_END")
        );
      }, d = (u) => {
        u.target === t && (a.current = Ga(r.current));
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
    ref: ue((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Ga(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let Qi = 0;
function tN() {
  G(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Qu()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Qu()), Qi++, () => {
      Qi === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Qi--;
    };
  }, []);
}
function Qu() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Gh = Zp(), Ji = function() {
}, fi = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Ji,
    onWheelCapture: Ji,
    onTouchMoveCapture: Ji
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, d = e.enabled, u = e.shards, p = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, y = jl(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), $ = p, _ = Gp([n, t]), w = mt(mt({}, y), o);
  return C.createElement(
    C.Fragment,
    null,
    d && C.createElement($, { sideCar: Gh, removeScrollBar: l, shards: u, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), mt(mt({}, w), { ref: _ })) : C.createElement(b, mt({}, w, { className: c, ref: _ }), i)
  );
});
fi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
fi.classNames = {
  fullWidth: To,
  zeroRight: Po
};
var Vc = !1;
if (typeof window < "u")
  try {
    var Za = Object.defineProperty({}, "passive", {
      get: function() {
        return Vc = !0, !0;
      }
    });
    window.addEventListener("test", Za, Za), window.removeEventListener("test", Za, Za);
  } catch {
    Vc = !1;
  }
var Fr = Vc ? { passive: !1 } : !1, nN = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, rN = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, Ju = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Zh(e, n);
    if (r) {
      var o = qh(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, oN = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, aN = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Zh = function(e, t) {
  return e === "v" ? nN(t) : rN(t);
}, qh = function(e, t) {
  return e === "v" ? oN(t) : aN(t);
}, sN = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, iN = function(e, t, n, r, o) {
  var a = sN(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, d = s > 0, u = 0, p = 0;
  do {
    var m = qh(e, i), h = m[0], v = m[1], g = m[2], b = v - g - a * h;
    (h || b) && Zh(e, i) && (u += b, p += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (d && (o && u === 0 || !o && s > u) || !d && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, qa = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ef = function(e) {
  return [e.deltaX, e.deltaY];
}, tf = function(e) {
  return e && "current" in e ? e.current : e;
}, cN = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, lN = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, dN = 0, Vr = [];
function uN(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(dN++)[0], a = C.useState(function() {
    return Il();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Kp([e.lockRef.current], (e.shards || []).map(tf), !0).filter(Boolean);
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
    var b = qa(v), y = n.current, $ = "deltaX" in v ? v.deltaX : y[0] - b[0], _ = "deltaY" in v ? v.deltaY : y[1] - b[1], w, P = v.target, k = Math.abs($) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && k === "h" && P.type === "range")
      return !1;
    var L = Ju(k, P);
    if (!L)
      return !0;
    if (L ? w = k : (w = k === "v" ? "h" : "v", L = Ju(k, P)), !L)
      return !1;
    if (!r.current && "changedTouches" in v && ($ || _) && (r.current = w), !w)
      return !0;
    var I = r.current || w;
    return iN(I, g, v, I === "h" ? $ : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!Vr.length || Vr[Vr.length - 1] !== a)) {
      var b = "deltaY" in g ? ef(g) : qa(g), y = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && cN(w.delta, b);
      })[0];
      if (y && y.should) {
        g.preventDefault();
        return;
      }
      if (!y) {
        var $ = (s.current.shards || []).map(tf).filter(Boolean).filter(function(w) {
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
  }, []), d = C.useCallback(function(v) {
    n.current = qa(v), r.current = void 0;
  }, []), u = C.useCallback(function(v) {
    l(v.type, ef(v), v.target, i(v, e.lockRef.current));
  }, []), p = C.useCallback(function(v) {
    l(v.type, qa(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return Vr.push(a), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, Fr), document.addEventListener("touchmove", c, Fr), document.addEventListener("touchstart", d, Fr), function() {
      Vr = Vr.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, Fr), document.removeEventListener("touchmove", c, Fr), document.removeEventListener("touchstart", d, Fr);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    h ? C.createElement(a, { styles: lN(o) }) : null,
    m ? C.createElement(Jp, { gapMode: "margin" }) : null
  );
}
const fN = Xp(Gh, uN);
var Xh = C.forwardRef(function(e, t) {
  return C.createElement(fi, mt({}, e, { ref: t, sideCar: fN }));
});
Xh.classNames = fi.classNames;
const pN = Xh, Qh = "Dialog", [Jh, UO] = NE(Qh), [mN, kr] = Jh(Qh), hN = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = V(null), c = V(null), [l = !1, d] = OE({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ x(mN, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: Zi(),
    titleId: Zi(),
    descriptionId: Zi(),
    open: l,
    onOpenChange: d,
    onOpenToggle: ue(
      () => d(
        (u) => !u
      ),
      [
        d
      ]
    ),
    modal: s
  }, n);
}, ev = "DialogPortal", [vN, tv] = Jh(ev, {
  forceMount: void 0
}), gN = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = kr(ev, t);
  return /* @__PURE__ */ x(vN, {
    scope: t,
    forceMount: n
  }, Nt.map(
    r,
    (s) => /* @__PURE__ */ x(ui, {
      present: n || a.open
    }, /* @__PURE__ */ x(QE, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Uc = "DialogOverlay", bN = /* @__PURE__ */ R((e, t) => {
  const n = tv(Uc, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = kr(Uc, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ x(ui, {
    present: r || a.open
  }, /* @__PURE__ */ x(xN, S({}, o, {
    ref: t
  }))) : null;
}), xN = /* @__PURE__ */ R((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = kr(Uc, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ x(pN, {
      as: gd,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ x(di.div, S({
      "data-state": rv(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), Wo = "DialogContent", yN = /* @__PURE__ */ R((e, t) => {
  const n = tv(Wo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = kr(Wo, e.__scopeDialog);
  return /* @__PURE__ */ x(ui, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ x($N, S({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(wN, S({}, o, {
    ref: t
  })));
}), $N = /* @__PURE__ */ R((e, t) => {
  const n = kr(Wo, e.__scopeDialog), r = V(null), o = Ca(t, n.contentRef, r);
  return G(() => {
    const a = r.current;
    if (a)
      return ua(a);
  }, []), /* @__PURE__ */ x(nv, S({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: Hr(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: Hr(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: Hr(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), wN = /* @__PURE__ */ R((e, t) => {
  const n = kr(Wo, e.__scopeDialog), r = V(!1);
  return /* @__PURE__ */ x(nv, S({}, e, {
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
}), nv = /* @__PURE__ */ R((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = kr(Wo, n), c = V(null), l = Ca(t, c);
  return tN(), /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(YE, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ x(WE, S({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": rv(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
});
function rv(e) {
  return e ? "open" : "closed";
}
const _N = hN, CN = gN, SN = bN, EN = yN;
var nf = 1, NN = 0.9, PN = 0.3, ec = 0.1, TN = 0, tc = 0.999, kN = 0.9999, ON = 0.99, rf = /[\\\/\-_+.# \t"@\[\(\{&]/, MN = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function Wc(e, t, n, r, o, a) {
  if (a === t.length)
    return o === e.length ? nf : ON;
  for (var s = r.charAt(a), i = n.indexOf(s, o), c = 0, l, d, u; i >= 0; )
    l = Wc(e, t, n, r, i + 1, a + 1), l > c && (i === o ? l *= nf : rf.test(e.charAt(i - 1)) ? (l *= NN, u = e.slice(o, i - 1).match(MN), u && o > 0 && (l *= Math.pow(tc, u.length))) : rf.test(e.slice(o, i - 1)) ? (l *= TN, o > 0 && (l *= Math.pow(tc, i - o))) : (l *= PN, o > 0 && (l *= Math.pow(tc, i - o))), e.charAt(i) !== t.charAt(a) && (l *= kN)), l < ec && n.charAt(i - 1) === r.charAt(a + 1) && n.charAt(i - 1) !== r.charAt(a) && (d = Wc(e, t, n, r, i + 1, a + 2), d * ec > l && (l = d * ec)), l > c && (c = l), i = n.indexOf(s, i + 1);
  return c;
}
function DN(e, t) {
  return Wc(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var RN = DN, AN = '[cmdk-list-sizer=""]', No = '[cmdk-group=""]', nc = '[cmdk-group-items=""]', jN = '[cmdk-group-heading=""]', ov = '[cmdk-item=""]', of = `${ov}:not([aria-disabled="true"])`, zc = "cmdk-item-select", Ln = "data-value", IN = (e, t) => RN(e, t), av = C.createContext(void 0), Sa = () => C.useContext(av), sv = C.createContext(void 0), bd = () => C.useContext(sv), iv = C.createContext(void 0), cv = C.forwardRef((e, t) => {
  let n = C.useRef(null), r = Ur(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = Ur(() => /* @__PURE__ */ new Set()), a = Ur(() => /* @__PURE__ */ new Map()), s = Ur(() => /* @__PURE__ */ new Map()), i = Ur(() => /* @__PURE__ */ new Set()), c = lv(e), { label: l, children: d, value: u, onValueChange: p, filter: m, shouldFilter: h, ...v } = e, g = C.useId(), b = C.useId(), y = C.useId(), $ = GN();
  mo(() => {
    if (u !== void 0) {
      let M = u.trim().toLowerCase();
      r.current.value = M, $(6, ee), _.emit();
    }
  }, [u]);
  let _ = C.useMemo(() => ({ subscribe: (M) => (i.current.add(M), () => i.current.delete(M)), snapshot: () => r.current, setState: (M, D, U) => {
    var q, oe, ce;
    if (!Object.is(r.current[M], D)) {
      if (r.current[M] = D, M === "search")
        I(), k(), $(1, L);
      else if (M === "value")
        if (((q = c.current) == null ? void 0 : q.value) !== void 0) {
          (ce = (oe = c.current).onValueChange) == null || ce.call(oe, D);
          return;
        } else
          U || $(5, ee);
      _.emit();
    }
  }, emit: () => {
    i.current.forEach((M) => M());
  } }), []), w = C.useMemo(() => ({ value: (M, D) => {
    D !== s.current.get(M) && (s.current.set(M, D), r.current.filtered.items.set(M, P(D)), $(2, () => {
      k(), _.emit();
    }));
  }, item: (M, D) => (o.current.add(M), D && (a.current.has(D) ? a.current.get(D).add(M) : a.current.set(D, /* @__PURE__ */ new Set([M]))), $(3, () => {
    I(), k(), r.current.value || L(), _.emit();
  }), () => {
    s.current.delete(M), o.current.delete(M), r.current.filtered.items.delete(M), $(4, () => {
      I(), L(), _.emit();
    });
  }), group: (M) => (a.current.has(M) || a.current.set(M, /* @__PURE__ */ new Set()), () => {
    s.current.delete(M), a.current.delete(M);
  }), filter: () => c.current.shouldFilter, label: l || e["aria-label"], listId: g, inputId: y, labelId: b }), []);
  function P(M) {
    var D;
    let U = ((D = c.current) == null ? void 0 : D.filter) ?? IN;
    return M ? U(M, r.current.search) : 0;
  }
  function k() {
    if (!n.current || !r.current.search || c.current.shouldFilter === !1)
      return;
    let M = r.current.filtered.items, D = [];
    r.current.filtered.groups.forEach((q) => {
      let oe = a.current.get(q), ce = 0;
      oe.forEach((ye) => {
        let be = M.get(ye);
        ce = Math.max(be, ce);
      }), D.push([q, ce]);
    });
    let U = n.current.querySelector(AN);
    K().sort((q, oe) => {
      let ce = q.getAttribute(Ln), ye = oe.getAttribute(Ln);
      return (M.get(ye) ?? 0) - (M.get(ce) ?? 0);
    }).forEach((q) => {
      let oe = q.closest(nc);
      oe ? oe.appendChild(q.parentElement === oe ? q : q.closest(`${nc} > *`)) : U.appendChild(q.parentElement === U ? q : q.closest(`${nc} > *`));
    }), D.sort((q, oe) => oe[1] - q[1]).forEach((q) => {
      let oe = n.current.querySelector(`${No}[${Ln}="${q[0]}"]`);
      oe == null || oe.parentElement.appendChild(oe);
    });
  }
  function L() {
    let M = K().find((U) => !U.ariaDisabled), D = M == null ? void 0 : M.getAttribute(Ln);
    _.setState("value", D || void 0);
  }
  function I() {
    if (!r.current.search || c.current.shouldFilter === !1) {
      r.current.filtered.count = o.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let M = 0;
    for (let D of o.current) {
      let U = s.current.get(D), q = P(U);
      r.current.filtered.items.set(D, q), q > 0 && M++;
    }
    for (let [D, U] of a.current)
      for (let q of U)
        if (r.current.filtered.items.get(q) > 0) {
          r.current.filtered.groups.add(D);
          break;
        }
    r.current.filtered.count = M;
  }
  function ee() {
    var M, D, U;
    let q = te();
    q && (((M = q.parentElement) == null ? void 0 : M.firstChild) === q && ((U = (D = q.closest(No)) == null ? void 0 : D.querySelector(jN)) == null || U.scrollIntoView({ block: "nearest" })), q.scrollIntoView({ block: "nearest" }));
  }
  function te() {
    return n.current.querySelector(`${ov}[aria-selected="true"]`);
  }
  function K() {
    return Array.from(n.current.querySelectorAll(of));
  }
  function Z(M) {
    let D = K()[M];
    D && _.setState("value", D.getAttribute(Ln));
  }
  function O(M) {
    var D;
    let U = te(), q = K(), oe = q.findIndex((ye) => ye === U), ce = q[oe + M];
    (D = c.current) != null && D.loop && (ce = oe + M < 0 ? q[q.length - 1] : oe + M === q.length ? q[0] : q[oe + M]), ce && _.setState("value", ce.getAttribute(Ln));
  }
  function A(M) {
    let D = te(), U = D == null ? void 0 : D.closest(No), q;
    for (; U && !q; )
      U = M > 0 ? HN(U, No) : KN(U, No), q = U == null ? void 0 : U.querySelector(of);
    q ? _.setState("value", q.getAttribute(Ln)) : O(M);
  }
  let j = () => Z(K().length - 1), W = (M) => {
    M.preventDefault(), M.metaKey ? j() : M.altKey ? A(1) : O(1);
  }, B = (M) => {
    M.preventDefault(), M.metaKey ? Z(0) : M.altKey ? A(-1) : O(-1);
  };
  return C.createElement("div", { ref: Ea([n, t]), ...v, "cmdk-root": "", onKeyDown: (M) => {
    var D;
    if ((D = v.onKeyDown) == null || D.call(v, M), !M.defaultPrevented)
      switch (M.key) {
        case "n":
        case "j": {
          M.ctrlKey && W(M);
          break;
        }
        case "ArrowDown": {
          W(M);
          break;
        }
        case "p":
        case "k": {
          M.ctrlKey && B(M);
          break;
        }
        case "ArrowUp": {
          B(M);
          break;
        }
        case "Home": {
          M.preventDefault(), Z(0);
          break;
        }
        case "End": {
          M.preventDefault(), j();
          break;
        }
        case "Enter": {
          M.preventDefault();
          let U = te();
          if (U) {
            let q = new Event(zc);
            U.dispatchEvent(q);
          }
        }
      }
  } }, C.createElement("label", { "cmdk-label": "", htmlFor: w.inputId, id: w.labelId, style: ZN }, l), C.createElement(sv.Provider, { value: _ }, C.createElement(av.Provider, { value: w }, d)));
}), LN = C.forwardRef((e, t) => {
  let n = C.useId(), r = C.useRef(null), o = C.useContext(iv), a = Sa(), s = lv(e);
  mo(() => a.item(n, o), []);
  let i = dv(n, r, [e.value, e.children, r]), c = bd(), l = Jr((b) => b.value && b.value === i.current), d = Jr((b) => a.filter() === !1 ? !0 : b.search ? b.filtered.items.get(n) > 0 : !0);
  C.useEffect(() => {
    let b = r.current;
    if (!(!b || e.disabled))
      return b.addEventListener(zc, u), () => b.removeEventListener(zc, u);
  }, [d, e.onSelect, e.disabled]);
  function u() {
    var b, y;
    (y = (b = s.current).onSelect) == null || y.call(b, i.current);
  }
  function p() {
    c.setState("value", i.current, !0);
  }
  if (!d)
    return null;
  let { disabled: m, value: h, onSelect: v, ...g } = e;
  return C.createElement("div", { ref: Ea([r, t]), ...g, "cmdk-item": "", role: "option", "aria-disabled": m || void 0, "aria-selected": l || void 0, "data-selected": l || void 0, onPointerMove: m ? void 0 : p, onClick: m ? void 0 : u }, e.children);
}), FN = C.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, a = C.useId(), s = C.useRef(null), i = C.useRef(null), c = C.useId(), l = Sa(), d = Jr((p) => l.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(a) : !0);
  mo(() => l.group(a), []), dv(a, s, [e.value, e.heading, i]);
  let u = C.createElement(iv.Provider, { value: a }, r);
  return C.createElement("div", { ref: Ea([s, t]), ...o, "cmdk-group": "", role: "presentation", hidden: d ? void 0 : !0 }, n && C.createElement("div", { ref: i, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), C.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, u));
}), VN = C.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = C.useRef(null), a = Jr((s) => !s.search);
  return !n && !a ? null : C.createElement("div", { ref: Ea([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), UN = C.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = bd(), s = Jr((c) => c.search), i = Sa();
  return C.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), C.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": i.listId, "aria-labelledby": i.labelId, id: i.inputId, type: "text", value: o ? e.value : s, onChange: (c) => {
    o || a.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), WN = C.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = C.useRef(null), a = C.useRef(null), s = Sa();
  return C.useEffect(() => {
    if (a.current && o.current) {
      let i = a.current, c = o.current, l, d = new ResizeObserver(() => {
        l = requestAnimationFrame(() => {
          let u = i.getBoundingClientRect().height;
          c.style.setProperty("--cmdk-list-height", u.toFixed(1) + "px");
        });
      });
      return d.observe(i), () => {
        cancelAnimationFrame(l), d.unobserve(i);
      };
    }
  }, []), C.createElement("div", { ref: Ea([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: s.listId, "aria-labelledby": s.inputId }, C.createElement("div", { ref: a, "cmdk-list-sizer": "" }, n));
}), zN = C.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...a } = e;
  return C.createElement(_N, { open: n, onOpenChange: r }, C.createElement(CN, { container: o }, C.createElement(SN, { "cmdk-overlay": "" }), C.createElement(EN, { "aria-label": e.label, "cmdk-dialog": "" }, C.createElement(cv, { ref: t, ...a }))));
}), BN = C.forwardRef((e, t) => {
  let n = C.useRef(!0), r = Jr((o) => o.filtered.count === 0);
  return C.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : C.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), YN = C.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return C.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, C.createElement("div", { "aria-hidden": !0 }, r));
}), Tt = Object.assign(cv, { List: WN, Item: LN, Input: UN, Group: FN, Separator: VN, Dialog: zN, Empty: BN, Loading: YN });
function HN(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function KN(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function lv(e) {
  let t = C.useRef(e);
  return mo(() => {
    t.current = e;
  }), t;
}
var mo = typeof window > "u" ? C.useEffect : C.useLayoutEffect;
function Ur(e) {
  let t = C.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Ea(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function Jr(e) {
  let t = bd(), n = () => e(t.snapshot());
  return C.useSyncExternalStore(t.subscribe, n, n);
}
function dv(e, t, n) {
  let r = C.useRef(), o = Sa();
  return mo(() => {
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
    o.value(e, s), (a = t.current) == null || a.setAttribute(Ln, s), r.current = s;
  }), r;
}
var GN = () => {
  let [e, t] = C.useState(), n = Ur(() => /* @__PURE__ */ new Map());
  return mo(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, ZN = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Pn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Tt,
  {
    ref: n,
    className: F(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Pn.displayName = Tt.displayName;
const WO = ({ children: e, ...t }) => /* @__PURE__ */ f.exports.jsx($C, { ...t, children: /* @__PURE__ */ f.exports.jsx(ah, { className: "overflow-hidden p-0 shadow-2xl", children: /* @__PURE__ */ f.exports.jsx(Pn, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), Hn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ f.exports.jsx(gl, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ f.exports.jsx(
    Tt.Input,
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
Hn.displayName = Tt.Input.displayName;
const Na = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Tt.List,
  {
    ref: n,
    className: F("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Na.displayName = Tt.List.displayName;
const Kn = C.forwardRef((e, t) => /* @__PURE__ */ f.exports.jsx(
  Tt.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Kn.displayName = Tt.Empty.displayName;
const Zt = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Tt.Group,
  {
    ref: n,
    className: F(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
Zt.displayName = Tt.Group.displayName;
const pi = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Tt.Separator,
  {
    ref: n,
    className: F("-mx-1 h-px bg-border", e),
    ...t
  }
));
pi.displayName = Tt.Separator.displayName;
const qt = C.forwardRef(({ className: e, onClick: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Tt.Item,
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
qt.displayName = Tt.Item.displayName;
const qN = ({
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
qN.displayName = "CommandShortcut";
const XN = /* @__PURE__ */ R((e, t) => {
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
  }, /* @__PURE__ */ x(ie.div, S({}, o, {
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
}), QN = XN, zO = QN;
function JN(e, t) {
  return Fs((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const uv = "ScrollArea", [fv, BO] = Ze(uv), [e5, It] = fv(uv), t5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [i, c] = Y(null), [l, d] = Y(null), [u, p] = Y(null), [m, h] = Y(null), [v, g] = Y(null), [b, y] = Y(0), [$, _] = Y(0), [w, P] = Y(!1), [k, L] = Y(!1), I = we(
    t,
    (te) => c(te)
  ), ee = dn(o);
  return /* @__PURE__ */ x(e5, {
    scope: n,
    type: r,
    dir: ee,
    scrollHideDelay: a,
    scrollArea: i,
    viewport: l,
    onViewportChange: d,
    content: u,
    onContentChange: p,
    scrollbarX: m,
    onScrollbarXChange: h,
    scrollbarXEnabled: w,
    onScrollbarXEnabledChange: P,
    scrollbarY: v,
    onScrollbarYChange: g,
    scrollbarYEnabled: k,
    onScrollbarYEnabledChange: L,
    onCornerWidthChange: y,
    onCornerHeightChange: _
  }, /* @__PURE__ */ x(ie.div, S({
    dir: ee
  }, s, {
    ref: I,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      ["--radix-scroll-area-corner-width"]: b + "px",
      ["--radix-scroll-area-corner-height"]: $ + "px",
      ...e.style
    }
  })));
}), n5 = "ScrollAreaViewport", r5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = It(n5, n), s = V(null), i = we(t, s, a.onViewportChange);
  return /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ x(ie.div, S({
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
}), On = "ScrollAreaScrollbar", pv = /* @__PURE__ */ R((e, t) => {
  const { forceMount: n, ...r } = e, o = It(On, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
  return G(() => (i ? a(!0) : s(!0), () => {
    i ? a(!1) : s(!1);
  }), [
    i,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ x(o5, S({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ x(a5, S({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ x(mv, S({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ x(xd, S({}, r, {
    ref: t
  })) : null;
}), o5 = /* @__PURE__ */ R((e, t) => {
  const { forceMount: n, ...r } = e, o = It(On, e.__scopeScrollArea), [a, s] = Y(!1);
  return G(() => {
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
  ]), /* @__PURE__ */ x(Xe, {
    present: n || a
  }, /* @__PURE__ */ x(mv, S({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), a5 = /* @__PURE__ */ R((e, t) => {
  const { forceMount: n, ...r } = e, o = It(On, e.__scopeScrollArea), a = e.orientation === "horizontal", s = hi(
    () => c("SCROLL_END"),
    100
  ), [i, c] = JN("hidden", {
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
  return G(() => {
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
  ]), G(() => {
    const l = o.viewport, d = a ? "scrollLeft" : "scrollTop";
    if (l) {
      let u = l[d];
      const p = () => {
        const m = l[d];
        u !== m && (c("SCROLL"), s()), u = m;
      };
      return l.addEventListener("scroll", p), () => l.removeEventListener("scroll", p);
    }
  }, [
    o.viewport,
    a,
    c,
    s
  ]), /* @__PURE__ */ x(Xe, {
    present: n || i !== "hidden"
  }, /* @__PURE__ */ x(xd, S({
    "data-state": i === "hidden" ? "hidden" : "visible"
  }, r, {
    ref: t,
    onPointerEnter: H(
      e.onPointerEnter,
      () => c("POINTER_ENTER")
    ),
    onPointerLeave: H(
      e.onPointerLeave,
      () => c("POINTER_LEAVE")
    )
  })));
}), mv = /* @__PURE__ */ R((e, t) => {
  const n = It(On, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = Y(!1), i = e.orientation === "horizontal", c = hi(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? l : d);
    }
  }, 10);
  return eo(n.viewport, c), eo(n.content, c), /* @__PURE__ */ x(Xe, {
    present: r || a
  }, /* @__PURE__ */ x(xd, S({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), xd = /* @__PURE__ */ R((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = It(On, e.__scopeScrollArea), a = V(null), s = V(0), [i, c] = Y({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = bv(i.viewport, i.content), d = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: Boolean(l > 0 && l < 1),
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function u(p, m) {
    return p5(p, s.current, i, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ x(s5, S({}, d, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollLeft, m = af(p, i, o.dir);
        a.current.style.transform = `translate3d(${m}px, 0, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = u(p, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ x(i5, S({}, d, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollTop, m = af(p, i);
        a.current.style.transform = `translate3d(0, ${m}px, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollTop = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollTop = u(p));
    }
  })) : null;
}), s5 = /* @__PURE__ */ R((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = It(On, e.__scopeScrollArea), [s, i] = Y(), c = V(null), l = we(t, c, a.onScrollbarXChange);
  return G(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ x(vv, S({
    "data-orientation": "horizontal"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: mi(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
    onDragScroll: (d) => e.onDragScroll(d.x),
    onWheelScroll: (d, u) => {
      if (a.viewport) {
        const p = a.viewport.scrollLeft + d.deltaX;
        e.onWheelScroll(p), yv(p, u) && d.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: $s(s.paddingLeft),
          paddingEnd: $s(s.paddingRight)
        }
      });
    }
  }));
}), i5 = /* @__PURE__ */ R((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = It(On, e.__scopeScrollArea), [s, i] = Y(), c = V(null), l = we(t, c, a.onScrollbarYChange);
  return G(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ x(vv, S({
    "data-orientation": "vertical"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: mi(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
    onDragScroll: (d) => e.onDragScroll(d.y),
    onWheelScroll: (d, u) => {
      if (a.viewport) {
        const p = a.viewport.scrollTop + d.deltaY;
        e.onWheelScroll(p), yv(p, u) && d.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: $s(s.paddingTop),
          paddingEnd: $s(s.paddingBottom)
        }
      });
    }
  }));
}), [c5, hv] = fv(On), vv = /* @__PURE__ */ R((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: d, onResize: u, ...p } = e, m = It(On, n), [h, v] = Y(null), g = we(
    t,
    (I) => v(I)
  ), b = V(null), y = V(""), $ = m.viewport, _ = r.content - r.viewport, w = ze(d), P = ze(c), k = hi(u, 10);
  function L(I) {
    if (b.current) {
      const ee = I.clientX - b.current.left, te = I.clientY - b.current.top;
      l({
        x: ee,
        y: te
      });
    }
  }
  return G(() => {
    const I = (ee) => {
      const te = ee.target;
      (h == null ? void 0 : h.contains(te)) && w(ee, _);
    };
    return document.addEventListener("wheel", I, {
      passive: !1
    }), () => document.removeEventListener("wheel", I, {
      passive: !1
    });
  }, [
    $,
    h,
    _,
    w
  ]), G(P, [
    r,
    P
  ]), eo(h, k), eo(m.content, k), /* @__PURE__ */ x(c5, {
    scope: n,
    scrollbar: h,
    hasThumb: o,
    onThumbChange: ze(a),
    onThumbPointerUp: ze(s),
    onThumbPositionChange: P,
    onThumbPointerDown: ze(i)
  }, /* @__PURE__ */ x(ie.div, S({}, p, {
    ref: g,
    style: {
      position: "absolute",
      ...p.style
    },
    onPointerDown: H(e.onPointerDown, (I) => {
      I.button === 0 && (I.target.setPointerCapture(I.pointerId), b.current = h.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", L(I));
    }),
    onPointerMove: H(e.onPointerMove, L),
    onPointerUp: H(e.onPointerUp, (I) => {
      const ee = I.target;
      ee.hasPointerCapture(I.pointerId) && ee.releasePointerCapture(I.pointerId), document.body.style.webkitUserSelect = y.current, b.current = null;
    })
  })));
}), Bc = "ScrollAreaThumb", l5 = /* @__PURE__ */ R((e, t) => {
  const { forceMount: n, ...r } = e, o = hv(Bc, e.__scopeScrollArea);
  return /* @__PURE__ */ x(Xe, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ x(d5, S({
    ref: t
  }, r)));
}), d5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = It(Bc, n), s = hv(Bc, n), { onThumbPositionChange: i } = s, c = we(
    t,
    (u) => s.onThumbChange(u)
  ), l = V(), d = hi(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return G(() => {
    const u = a.viewport;
    if (u) {
      const p = () => {
        if (d(), !l.current) {
          const m = m5(u, i);
          l.current = m, i();
        }
      };
      return i(), u.addEventListener("scroll", p), () => u.removeEventListener("scroll", p);
    }
  }, [
    a.viewport,
    d,
    i
  ]), /* @__PURE__ */ x(ie.div, S({
    "data-state": s.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: c,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: H(e.onPointerDownCapture, (u) => {
      const m = u.target.getBoundingClientRect(), h = u.clientX - m.left, v = u.clientY - m.top;
      s.onThumbPointerDown({
        x: h,
        y: v
      });
    }),
    onPointerUp: H(e.onPointerUp, s.onThumbPointerUp)
  }));
}), gv = "ScrollAreaCorner", u5 = /* @__PURE__ */ R((e, t) => {
  const n = It(gv, e.__scopeScrollArea), r = Boolean(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ x(f5, S({}, e, {
    ref: t
  })) : null;
}), f5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = It(gv, n), [a, s] = Y(0), [i, c] = Y(0), l = Boolean(a && i);
  return eo(o.scrollbarX, () => {
    var d;
    const u = ((d = o.scrollbarX) === null || d === void 0 ? void 0 : d.offsetHeight) || 0;
    o.onCornerHeightChange(u), c(u);
  }), eo(o.scrollbarY, () => {
    var d;
    const u = ((d = o.scrollbarY) === null || d === void 0 ? void 0 : d.offsetWidth) || 0;
    o.onCornerWidthChange(u), s(u);
  }), l ? /* @__PURE__ */ x(ie.div, S({}, r, {
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
function $s(e) {
  return e ? parseInt(e, 10) : 0;
}
function bv(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function mi(e) {
  const t = bv(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function p5(e, t, n, r = "ltr") {
  const o = mi(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, d = n.content - n.viewport, u = r === "ltr" ? [
    0,
    d
  ] : [
    d * -1,
    0
  ];
  return xv([
    c,
    l
  ], u)(e);
}
function af(e, t, n = "ltr") {
  const r = mi(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], l = Uo(e, c);
  return xv([
    0,
    s
  ], [
    0,
    i
  ])(l);
}
function xv(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function yv(e, t) {
  return e > 0 && e < t;
}
const m5 = (e, t = () => {
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
function hi(e, t) {
  const n = ze(e), r = V(0);
  return G(
    () => () => window.clearTimeout(r.current),
    []
  ), ue(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function eo(e, t) {
  const n = ze(t);
  pt(() => {
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
const $v = t5, h5 = r5, v5 = u5, g5 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  $v,
  {
    ref: r,
    className: F("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx(h5, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ f.exports.jsx(wv, {}),
      /* @__PURE__ */ f.exports.jsx(v5, {})
    ]
  }
));
g5.displayName = $v.displayName;
const wv = C.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  pv,
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
    children: /* @__PURE__ */ f.exports.jsx(l5, { className: "relative flex-1 rounded-full bg-border" })
  }
));
wv.displayName = pv.displayName;
const YO = ld, HO = dd, KO = wa, _v = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(ga, { className: F(e), ...t });
_v.displayName = ga.displayName;
const Cv = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ba,
  {
    className: F(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Cv.displayName = ba.displayName;
const b5 = oo(
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
), x5 = C.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(_v, { children: [
  /* @__PURE__ */ f.exports.jsx(Cv, {}),
  /* @__PURE__ */ f.exports.jsxs(
    xa,
    {
      ref: o,
      className: F(b5({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ f.exports.jsxs(wa, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ f.exports.jsx(zs, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
x5.displayName = xa.displayName;
const y5 = ({
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
y5.displayName = "SheetHeader";
const $5 = ({
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
$5.displayName = "SheetFooter";
const w5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ya,
  {
    ref: n,
    className: F("text-lg font-semibold text-foreground", e),
    ...t
  }
));
w5.displayName = ya.displayName;
const _5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  $a,
  {
    ref: n,
    className: F("text-sm text-muted-foreground", e),
    ...t
  }
));
_5.displayName = $a.displayName;
const yd = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ f.exports.jsx(
  "table",
  {
    ref: n,
    className: F("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
yd.displayName = "TableUI";
const Sv = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("thead", { ref: n, className: F("[&_tr]:border-b", e), ...t }));
Sv.displayName = "TableHeader";
const Ev = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tbody",
  {
    ref: n,
    className: F("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Ev.displayName = "TableBody";
const C5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tfoot",
  {
    ref: n,
    className: F("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
C5.displayName = "TableFooter";
const Pa = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
Pa.displayName = "TableRow";
const Nv = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
Nv.displayName = "TableHead";
const vi = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "td",
  {
    ref: n,
    className: F("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
vi.displayName = "TableCell";
const S5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "caption",
  {
    ref: n,
    className: F("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
S5.displayName = "TableCaption";
const E5 = "AlertDialog", [N5, GO] = Ze(E5, [
  Qm
]), Mn = Qm(), P5 = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Mn(t);
  return /* @__PURE__ */ x(ld, S({}, r, n, {
    modal: !0
  }));
}, T5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Mn(n);
  return /* @__PURE__ */ x(dd, S({}, o, r, {
    ref: t
  }));
}), k5 = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Mn(t);
  return /* @__PURE__ */ x(ga, S({}, r, n));
}, O5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Mn(n);
  return /* @__PURE__ */ x(ba, S({}, o, r, {
    ref: t
  }));
}), Pv = "AlertDialogContent", [M5, D5] = N5(Pv), R5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = Mn(n), s = V(null), i = we(t, s), c = V(null);
  return /* @__PURE__ */ x(yC, {
    contentName: Pv,
    titleName: A5,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ x(M5, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ x(xa, S({
    role: "alertdialog"
  }, a, o, {
    ref: i,
    onOpenAutoFocus: H(o.onOpenAutoFocus, (l) => {
      var d;
      l.preventDefault(), (d = c.current) === null || d === void 0 || d.focus({
        preventScroll: !0
      });
    }),
    onPointerDownOutside: (l) => l.preventDefault(),
    onInteractOutside: (l) => l.preventDefault()
  }), /* @__PURE__ */ x(pl, null, r), !1)));
}), A5 = "AlertDialogTitle", j5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Mn(n);
  return /* @__PURE__ */ x(ya, S({}, o, r, {
    ref: t
  }));
}), I5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Mn(n);
  return /* @__PURE__ */ x($a, S({}, o, r, {
    ref: t
  }));
}), L5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Mn(n);
  return /* @__PURE__ */ x(wa, S({}, o, r, {
    ref: t
  }));
}), F5 = "AlertDialogCancel", V5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = D5(F5, n), a = Mn(n), s = we(t, o);
  return /* @__PURE__ */ x(wa, S({}, a, r, {
    ref: s
  }));
}), U5 = P5, W5 = T5, Tv = k5, kv = O5, Ov = R5, Mv = L5, Dv = V5, Rv = j5, Av = I5, ZO = U5, qO = W5, jv = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(Tv, { className: F(e), ...t });
jv.displayName = Tv.displayName;
const Iv = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  kv,
  {
    className: F(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...n,
    ref: r
  }
));
Iv.displayName = kv.displayName;
const z5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(jv, { children: [
  /* @__PURE__ */ f.exports.jsx(Iv, {}),
  /* @__PURE__ */ f.exports.jsx(
    Ov,
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
z5.displayName = Ov.displayName;
const B5 = ({
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
B5.displayName = "AlertDialogHeader";
const Y5 = ({
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
Y5.displayName = "AlertDialogFooter";
const H5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Rv,
  {
    ref: n,
    className: F("text-lg font-semibold", e),
    ...t
  }
));
H5.displayName = Rv.displayName;
const K5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Av,
  {
    ref: n,
    className: F("text-sm text-muted-foreground", e),
    ...t
  }
));
K5.displayName = Av.displayName;
const G5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Mv,
  {
    ref: n,
    className: F(Mo(), e),
    ...t
  }
));
G5.displayName = Mv.displayName;
const Z5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Dv,
  {
    ref: n,
    className: F(
      Mo({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
Z5.displayName = Dv.displayName;
function XO({
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
const Lv = "Collapsible", [q5, Fv] = Ze(Lv), [X5, $d] = q5(Lv), Q5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...i } = e, [c = !1, l] = tt({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ x(X5, {
    scope: n,
    disabled: a,
    contentId: rt(),
    open: c,
    onOpenToggle: ue(
      () => l(
        (d) => !d
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ x(ie.div, S({
    "data-state": wd(c),
    "data-disabled": a ? "" : void 0
  }, i, {
    ref: t
  })));
}), J5 = "CollapsibleTrigger", Vv = /* @__PURE__ */ R((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = $d(J5, n);
  return /* @__PURE__ */ x(ie.button, S({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": wd(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: H(e.onClick, o.onOpenToggle)
  }));
}), Uv = "CollapsibleContent", Wv = /* @__PURE__ */ R((e, t) => {
  const { forceMount: n, ...r } = e, o = $d(Uv, e.__scopeCollapsible);
  return /* @__PURE__ */ x(
    Xe,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ x(e6, S({}, r, {
      ref: t,
      present: a
    }))
  );
}), e6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = $d(Uv, n), [i, c] = Y(r), l = V(null), d = we(t, l), u = V(0), p = u.current, m = V(0), h = m.current, v = s.open || i, g = V(v), b = V();
  return G(() => {
    const y = requestAnimationFrame(
      () => g.current = !1
    );
    return () => cancelAnimationFrame(y);
  }, []), pt(() => {
    const y = l.current;
    if (y) {
      b.current = b.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const $ = y.getBoundingClientRect();
      u.current = $.height, m.current = $.width, g.current || (y.style.transitionDuration = b.current.transitionDuration, y.style.animationName = b.current.animationName), c(r);
    }
  }, [
    s.open,
    r
  ]), /* @__PURE__ */ x(ie.div, S({
    "data-state": wd(s.open),
    "data-disabled": s.disabled ? "" : void 0,
    id: s.contentId,
    hidden: !v
  }, a, {
    ref: d,
    style: {
      ["--radix-collapsible-content-height"]: p ? `${p}px` : void 0,
      ["--radix-collapsible-content-width"]: h ? `${h}px` : void 0,
      ...e.style
    }
  }), v && o);
});
function wd(e) {
  return e ? "open" : "closed";
}
const zv = Q5, t6 = Vv, n6 = Wv, rr = "Accordion", r6 = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [_d, o6, a6] = Jn(rr), [gi, QO] = Ze(rr, [
  a6,
  Fv
]), Cd = Fv(), Bv = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ N.createElement(_d.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ N.createElement(l6, S({}, a, {
    ref: t
  })) : /* @__PURE__ */ N.createElement(c6, S({}, o, {
    ref: t
  })));
});
Bv.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [Yv, s6] = gi(rr), [Hv, i6] = gi(rr, {
  collapsible: !1
}), c6 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [i, c] = tt({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ N.createElement(Yv, {
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
  }, /* @__PURE__ */ N.createElement(Hv, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ N.createElement(Kv, S({}, s, {
    ref: t
  }))));
}), l6 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [s = [], i] = tt({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = N.useCallback(
    (d) => i(
      (u = []) => [
        ...u,
        d
      ]
    ),
    [
      i
    ]
  ), l = N.useCallback(
    (d) => i(
      (u = []) => u.filter(
        (p) => p !== d
      )
    ),
    [
      i
    ]
  );
  return /* @__PURE__ */ N.createElement(Yv, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ N.createElement(Hv, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ N.createElement(Kv, S({}, a, {
    ref: t
  }))));
}), [d6, bi] = gi(rr), Kv = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = N.useRef(null), c = we(i, t), l = o6(n), u = dn(o) === "ltr", p = H(e.onKeyDown, (m) => {
    var h;
    if (!r6.includes(m.key))
      return;
    const v = m.target, g = l().filter((I) => {
      var ee;
      return !((ee = I.ref.current) !== null && ee !== void 0 && ee.disabled);
    }), b = g.findIndex(
      (I) => I.ref.current === v
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
        a === "horizontal" && (u ? P() : k());
        break;
      case "ArrowDown":
        a === "vertical" && P();
        break;
      case "ArrowLeft":
        a === "horizontal" && (u ? k() : P());
        break;
      case "ArrowUp":
        a === "vertical" && k();
        break;
    }
    const L = $ % y;
    (h = g[L].ref.current) === null || h === void 0 || h.focus();
  });
  return /* @__PURE__ */ N.createElement(d6, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ N.createElement(_d.Slot, {
    scope: n
  }, /* @__PURE__ */ N.createElement(ie.div, S({}, s, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : p
  }))));
}), Yc = "AccordionItem", [u6, Sd] = gi(Yc), f6 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = bi(Yc, n), s = s6(Yc, n), i = Cd(n), c = rt(), l = r && s.value.includes(r) || !1, d = a.disabled || e.disabled;
  return /* @__PURE__ */ N.createElement(u6, {
    scope: n,
    open: l,
    disabled: d,
    triggerId: c
  }, /* @__PURE__ */ N.createElement(zv, S({
    "data-orientation": a.orientation,
    "data-state": Gv(l)
  }, i, o, {
    ref: t,
    disabled: d,
    open: l,
    onOpenChange: (u) => {
      u ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), p6 = "AccordionHeader", m6 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = bi(rr, n), a = Sd(p6, n);
  return /* @__PURE__ */ N.createElement(ie.h3, S({
    "data-orientation": o.orientation,
    "data-state": Gv(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), sf = "AccordionTrigger", h6 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = bi(rr, n), a = Sd(sf, n), s = i6(sf, n), i = Cd(n);
  return /* @__PURE__ */ N.createElement(_d.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ N.createElement(t6, S({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, i, r, {
    ref: t
  })));
}), v6 = "AccordionContent", g6 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = bi(rr, n), a = Sd(v6, n), s = Cd(n);
  return /* @__PURE__ */ N.createElement(n6, S({
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
function Gv(e) {
  return e ? "open" : "closed";
}
const b6 = Bv, x6 = f6, y6 = m6, Zv = h6, qv = g6, JO = b6, $6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  x6,
  {
    ref: n,
    className: F("border-b", e),
    ...t
  }
));
$6.displayName = "AccordionItem";
const w6 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(y6, { className: "flex", children: /* @__PURE__ */ f.exports.jsxs(
  Zv,
  {
    ref: r,
    className: F(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(Do, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
w6.displayName = Zv.displayName;
const _6 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  qv,
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
_6.displayName = qv.displayName;
const e8 = zv, t8 = Vv, n8 = Wv;
let rc;
const Xv = "HoverCard", [Qv, r8] = Ze(Xv, [
  un
]), Ed = un(), [C6, Nd] = Qv(Xv), S6 = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: i = 300 } = e, c = Ed(t), l = V(0), d = V(0), u = V(!1), p = V(!1), [m = !1, h] = tt({
    prop: r,
    defaultProp: o,
    onChange: a
  }), v = ue(() => {
    clearTimeout(d.current), l.current = window.setTimeout(
      () => h(!0),
      s
    );
  }, [
    s,
    h
  ]), g = ue(() => {
    clearTimeout(l.current), !u.current && !p.current && (d.current = window.setTimeout(
      () => h(!1),
      i
    ));
  }, [
    i,
    h
  ]), b = ue(
    () => h(!1),
    [
      h
    ]
  );
  return G(() => () => {
    clearTimeout(l.current), clearTimeout(d.current);
  }, []), /* @__PURE__ */ x(C6, {
    scope: t,
    open: m,
    onOpenChange: h,
    onOpen: v,
    onClose: g,
    onDismiss: b,
    hasSelectionRef: u,
    isPointerDownOnContentRef: p
  }, /* @__PURE__ */ x(co, c, n));
}, E6 = "HoverCardTrigger", N6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = Nd(E6, n), a = Ed(n);
  return /* @__PURE__ */ x(la, S({
    asChild: !0
  }, a), /* @__PURE__ */ x(ie.a, S({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: H(e.onPointerEnter, ws(o.onOpen)),
    onPointerLeave: H(e.onPointerLeave, ws(o.onClose)),
    onFocus: H(e.onFocus, o.onOpen),
    onBlur: H(e.onBlur, o.onClose),
    onTouchStart: H(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), P6 = "HoverCardPortal", [o8, T6] = Qv(P6, {
  forceMount: void 0
}), Hc = "HoverCardContent", k6 = /* @__PURE__ */ R((e, t) => {
  const n = T6(Hc, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = Nd(Hc, e.__scopeHoverCard);
  return /* @__PURE__ */ x(Xe, {
    present: r || a.open
  }, /* @__PURE__ */ x(O6, S({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: H(e.onPointerEnter, ws(a.onOpen)),
    onPointerLeave: H(e.onPointerLeave, ws(a.onClose)),
    ref: t
  })));
}), O6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...i } = e, c = Nd(Hc, n), l = Ed(n), d = V(null), u = we(t, d), [p, m] = Y(!1);
  return G(() => {
    if (p) {
      const h = document.body;
      return rc = h.style.userSelect || h.style.webkitUserSelect, h.style.userSelect = "none", h.style.webkitUserSelect = "none", () => {
        h.style.userSelect = rc, h.style.webkitUserSelect = rc;
      };
    }
  }, [
    p
  ]), G(() => {
    if (d.current) {
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
  ]), G(() => {
    d.current && M6(d.current).forEach(
      (v) => v.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ x(Sr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: H(a, (h) => {
      h.preventDefault();
    }),
    onDismiss: c.onDismiss
  }, /* @__PURE__ */ x(da, S({}, l, i, {
    onPointerDown: H(i.onPointerDown, (h) => {
      h.currentTarget.contains(h.target) && m(!0), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !0;
    }),
    ref: u,
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
function ws(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function M6(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const D6 = S6, R6 = N6, Jv = k6, a8 = D6, s8 = R6, A6 = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  Jv,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: F(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
A6.displayName = Jv.displayName;
const i8 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), Pd = "Menubar", [Kc, j6, I6] = Jn(Pd), [eg, c8] = Ze(Pd, [
  I6,
  er
]), Ct = fa(), tg = er(), [L6, Td] = eg(Pd), F6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: i, ...c } = e, l = dn(i), d = tg(n), [u = "", p] = tt({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [m, h] = Y(null);
  return /* @__PURE__ */ x(L6, {
    scope: n,
    value: u,
    onMenuOpen: ue((v) => {
      p(v), h(v);
    }, [
      p
    ]),
    onMenuClose: ue(
      () => p(""),
      [
        p
      ]
    ),
    onMenuToggle: ue((v) => {
      p(
        (g) => Boolean(g) ? "" : v
      ), h(v);
    }, [
      p
    ]),
    dir: l,
    loop: s
  }, /* @__PURE__ */ x(Kc.Provider, {
    scope: n
  }, /* @__PURE__ */ x(Kc.Slot, {
    scope: n
  }, /* @__PURE__ */ x(qs, S({
    asChild: !0
  }, d, {
    orientation: "horizontal",
    loop: s,
    dir: l,
    currentTabStopId: m,
    onCurrentTabStopIdChange: h
  }), /* @__PURE__ */ x(ie.div, S({
    role: "menubar"
  }, c, {
    ref: t
  }))))));
}), ng = "MenubarMenu", [V6, rg] = eg(ng), U6 = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = rt(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = Td(ng, t), i = Ct(t), c = V(null), l = V(!1), d = s.value === a;
  return G(() => {
    d || (l.current = !1);
  }, [
    d
  ]), /* @__PURE__ */ x(V6, {
    scope: t,
    value: a,
    triggerId: rt(),
    triggerRef: c,
    contentId: rt(),
    wasKeyboardTriggerOpenRef: l
  }, /* @__PURE__ */ x(Wl, S({}, i, {
    open: d,
    onOpenChange: (u) => {
      u || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, cf = "MenubarTrigger", W6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = tg(n), s = Ct(n), i = Td(cf, n), c = rg(cf, n), l = V(null), d = we(t, l, c.triggerRef), [u, p] = Y(!1), m = i.value === c.value;
  return /* @__PURE__ */ x(Kc.ItemSlot, {
    scope: n,
    value: c.value,
    disabled: r
  }, /* @__PURE__ */ x(Xs, S({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: c.value
  }), /* @__PURE__ */ x(zl, S({
    asChild: !0
  }, s), /* @__PURE__ */ x(ie.button, S({
    type: "button",
    role: "menuitem",
    id: c.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": m,
    "aria-controls": m ? c.contentId : void 0,
    "data-highlighted": u ? "" : void 0,
    "data-state": m ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: d,
    onPointerDown: H(e.onPointerDown, (h) => {
      !r && h.button === 0 && h.ctrlKey === !1 && (i.onMenuOpen(c.value), m || h.preventDefault());
    }),
    onPointerEnter: H(e.onPointerEnter, () => {
      if (Boolean(i.value) && !m) {
        var v;
        i.onMenuOpen(c.value), (v = l.current) === null || v === void 0 || v.focus();
      }
    }),
    onKeyDown: H(e.onKeyDown, (h) => {
      r || ([
        "Enter",
        " "
      ].includes(h.key) && i.onMenuToggle(c.value), h.key === "ArrowDown" && i.onMenuOpen(c.value), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(h.key) && (c.wasKeyboardTriggerOpenRef.current = !0, h.preventDefault()));
    }),
    onFocus: H(
      e.onFocus,
      () => p(!0)
    ),
    onBlur: H(
      e.onBlur,
      () => p(!1)
    )
  })))));
}), z6 = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = Ct(t);
  return /* @__PURE__ */ x(Bl, S({}, r, n));
}, lf = "MenubarContent", B6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = Ct(n), s = Td(lf, n), i = rg(lf, n), c = j6(n), l = V(!1);
  return /* @__PURE__ */ x(Yl, S({
    id: i.contentId,
    "aria-labelledby": i.triggerId,
    "data-radix-menubar-content": ""
  }, a, o, {
    ref: t,
    align: r,
    onCloseAutoFocus: H(e.onCloseAutoFocus, (d) => {
      if (!Boolean(s.value) && !l.current) {
        var p;
        (p = i.triggerRef.current) === null || p === void 0 || p.focus();
      }
      l.current = !1, d.preventDefault();
    }),
    onFocusOutside: H(e.onFocusOutside, (d) => {
      const u = d.target;
      c().some((m) => {
        var h;
        return (h = m.ref.current) === null || h === void 0 ? void 0 : h.contains(u);
      }) && d.preventDefault();
    }),
    onInteractOutside: H(e.onInteractOutside, () => {
      l.current = !0;
    }),
    onEntryFocus: (d) => {
      i.wasKeyboardTriggerOpenRef.current || d.preventDefault();
    },
    onKeyDown: H(e.onKeyDown, (d) => {
      if ([
        "ArrowRight",
        "ArrowLeft"
      ].includes(d.key)) {
        const u = d.target, p = u.hasAttribute("data-radix-menubar-subtrigger"), m = u.closest("[data-radix-menubar-content]") !== d.currentTarget, v = (s.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === d.key;
        if (!v && p || m && v)
          return;
        let y = c().filter(
          (w) => !w.disabled
        ).map(
          (w) => w.value
        );
        v && y.reverse();
        const $ = y.indexOf(i.value);
        y = s.loop ? nP(y, $ + 1) : y.slice($ + 1);
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
}), Y6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ x(Hl, S({}, o, r, {
    ref: t
  }));
}), H6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ x(Kl, S({}, o, r, {
    ref: t
  }));
}), K6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ x(Gl, S({}, o, r, {
    ref: t
  }));
}), G6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ x(Zl, S({}, o, r, {
    ref: t
  }));
}), Z6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ x(ql, S({}, o, r, {
    ref: t
  }));
}), q6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ x(Xl, S({}, o, r, {
    ref: t
  }));
}), X6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ x(Ql, S({}, o, r, {
    ref: t
  }));
}), Q6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ x(Jl, S({}, o, r, {
    ref: t
  }));
}), J6 = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Ct(t), [i = !1, c] = tt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ x(ed, S({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, eP = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ x(td, S({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), tP = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ x(nd, S({}, o, {
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
function nP(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const og = F6, rP = U6, ag = W6, sg = z6, ig = B6, oP = Y6, cg = H6, lg = K6, dg = G6, aP = Z6, ug = q6, fg = X6, pg = Q6, sP = J6, mg = eP, hg = tP, l8 = rP, d8 = oP, u8 = sg, f8 = sP, p8 = aP, iP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  og,
  {
    ref: n,
    className: F(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
iP.displayName = og.displayName;
const cP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ag,
  {
    ref: n,
    className: F(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
cP.displayName = ag.displayName;
const lP = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  mg,
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
      /* @__PURE__ */ f.exports.jsx(ao, { className: "ml-auto h-4 w-4" })
    ]
  }
));
lP.displayName = mg.displayName;
const dP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  hg,
  {
    ref: n,
    className: F(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
dP.displayName = hg.displayName;
const uP = C.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ f.exports.jsx(sg, { children: /* @__PURE__ */ f.exports.jsx(
    ig,
    {
      ref: a,
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: F(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...o
    }
  ) })
);
uP.displayName = ig.displayName;
const fP = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  lg,
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
fP.displayName = lg.displayName;
const pP = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  dg,
  {
    ref: o,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(fg, { children: /* @__PURE__ */ f.exports.jsx(Kt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
pP.displayName = dg.displayName;
const mP = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  ug,
  {
    ref: r,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(fg, { children: /* @__PURE__ */ f.exports.jsx(Us, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
mP.displayName = ug.displayName;
const hP = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  cg,
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
hP.displayName = cg.displayName;
const vP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  pg,
  {
    ref: n,
    className: F("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
vP.displayName = pg.displayName;
const gP = ({
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
gP.displayname = "MenubarShortcut";
const Ta = "NavigationMenu", [kd, vg, bP] = Jn(Ta), [Gc, xP, yP] = Jn(Ta), [Od, m8] = Ze(Ta, [
  bP,
  yP
]), [$P, Jt] = Od(Ta), [wP, _P] = Od(Ta), CP = /* @__PURE__ */ R((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: i = 300, orientation: c = "horizontal", dir: l, ...d } = e, [u, p] = Y(null), m = we(
    t,
    (I) => p(I)
  ), h = dn(l), v = V(0), g = V(0), b = V(0), [y, $] = Y(!0), [_ = "", w] = tt({
    prop: r,
    onChange: (I) => {
      const ee = I !== "", te = i > 0;
      ee ? (window.clearTimeout(b.current), te && $(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(
        () => $(!0),
        i
      )), o == null || o(I);
    },
    defaultProp: a
  }), P = ue(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => w(""),
      150
    );
  }, [
    w
  ]), k = ue((I) => {
    window.clearTimeout(g.current), w(I);
  }, [
    w
  ]), L = ue((I) => {
    _ === I ? window.clearTimeout(g.current) : v.current = window.setTimeout(() => {
      window.clearTimeout(g.current), w(I);
    }, s);
  }, [
    _,
    w,
    s
  ]);
  return G(() => () => {
    window.clearTimeout(v.current), window.clearTimeout(g.current), window.clearTimeout(b.current);
  }, []), /* @__PURE__ */ x(SP, {
    scope: n,
    isRootMenu: !0,
    value: _,
    dir: h,
    orientation: c,
    rootNavigationMenu: u,
    onTriggerEnter: (I) => {
      window.clearTimeout(v.current), y ? L(I) : k(I);
    },
    onTriggerLeave: () => {
      window.clearTimeout(v.current), P();
    },
    onContentEnter: () => window.clearTimeout(g.current),
    onContentLeave: P,
    onItemSelect: (I) => {
      w(
        (ee) => ee === I ? "" : I
      );
    },
    onItemDismiss: () => w("")
  }, /* @__PURE__ */ x(ie.nav, S({
    "aria-label": "Main",
    "data-orientation": c,
    dir: h
  }, d, {
    ref: m
  })));
}), SP = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: i, onItemSelect: c, onItemDismiss: l, onTriggerEnter: d, onTriggerLeave: u, onContentEnter: p, onContentLeave: m } = e, [h, v] = Y(null), [g, b] = Y(/* @__PURE__ */ new Map()), [y, $] = Y(null);
  return /* @__PURE__ */ x($P, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: i,
    previousValue: fo(i),
    baseId: rt(),
    dir: o,
    orientation: a,
    viewport: h,
    onViewportChange: v,
    indicatorTrack: y,
    onIndicatorTrackChange: $,
    onTriggerEnter: ze(d),
    onTriggerLeave: ze(u),
    onContentEnter: ze(p),
    onContentLeave: ze(m),
    onItemSelect: ze(c),
    onItemDismiss: ze(l),
    onViewportContentChange: ue((_, w) => {
      b((P) => (P.set(_, w), new Map(P)));
    }, []),
    onViewportContentRemove: ue((_) => {
      b((w) => w.has(_) ? (w.delete(_), new Map(w)) : w);
    }, [])
  }, /* @__PURE__ */ x(kd.Provider, {
    scope: t
  }, /* @__PURE__ */ x(wP, {
    scope: t,
    items: g
  }, s)));
}, EP = "NavigationMenuList", NP = /* @__PURE__ */ R((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Jt(EP, n), a = /* @__PURE__ */ x(ie.ul, S({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ x(ie.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ x(kd.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ x($g, {
    asChild: !0
  }, a) : a));
}), PP = "NavigationMenuItem", [TP, gg] = Od(PP), kP = /* @__PURE__ */ R((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = rt(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = V(null), c = V(null), l = V(null), d = V(() => {
  }), u = V(!1), p = ue((h = "start") => {
    if (i.current) {
      d.current();
      const v = Zc(i.current);
      v.length && Md(h === "start" ? v : v.reverse());
    }
  }, []), m = ue(() => {
    if (i.current) {
      const h = Zc(i.current);
      h.length && (d.current = UP(h));
    }
  }, []);
  return /* @__PURE__ */ x(TP, {
    scope: n,
    value: s,
    triggerRef: c,
    contentRef: i,
    focusProxyRef: l,
    wasEscapeCloseRef: u,
    onEntryKeyDown: p,
    onFocusProxyEnter: p,
    onRootContentClose: m,
    onContentFocusOutside: m
  }, /* @__PURE__ */ x(ie.li, S({}, o, {
    ref: t
  })));
}), df = "NavigationMenuTrigger", OP = /* @__PURE__ */ R((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = Jt(df, e.__scopeNavigationMenu), s = gg(df, e.__scopeNavigationMenu), i = V(null), c = we(i, s.triggerRef, t), l = _g(a.baseId, s.value), d = Cg(a.baseId, s.value), u = V(!1), p = V(!1), m = s.value === a.value;
  return /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(kd.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ x(wg, {
    asChild: !0
  }, /* @__PURE__ */ x(ie.button, S({
    id: l,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": Dd(m),
    "aria-expanded": m,
    "aria-controls": d
  }, o, {
    ref: c,
    onPointerEnter: H(e.onPointerEnter, () => {
      p.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: H(e.onPointerMove, _s(() => {
      r || p.current || s.wasEscapeCloseRef.current || u.current || (a.onTriggerEnter(s.value), u.current = !0);
    })),
    onPointerLeave: H(e.onPointerLeave, _s(() => {
      r || (a.onTriggerLeave(), u.current = !1);
    })),
    onClick: H(e.onClick, () => {
      a.onItemSelect(s.value), p.current = m;
    }),
    onKeyDown: H(e.onKeyDown, (h) => {
      const g = {
        horizontal: "ArrowDown",
        vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[a.orientation];
      m && h.key === g && (s.onEntryKeyDown(), h.preventDefault());
    })
  })))), m && /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(mh, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: s.focusProxyRef,
    onFocus: (h) => {
      const v = s.contentRef.current, g = h.relatedTarget, b = g === i.current, y = v == null ? void 0 : v.contains(g);
      (b || !y) && s.onFocusProxyEnter(b ? "start" : "end");
    }
  }), a.viewport && /* @__PURE__ */ x("span", {
    "aria-owns": d
  })));
}), uf = "navigationMenu.linkSelect", MP = /* @__PURE__ */ R((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ x(wg, {
    asChild: !0
  }, /* @__PURE__ */ x(ie.a, S({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: H(e.onClick, (s) => {
      const i = s.target, c = new CustomEvent(uf, {
        bubbles: !0,
        cancelable: !0
      });
      if (i.addEventListener(
        uf,
        (l) => o == null ? void 0 : o(l),
        {
          once: !0
        }
      ), ls(i, c), !c.defaultPrevented && !s.metaKey) {
        const l = new CustomEvent(rs, {
          bubbles: !0,
          cancelable: !0
        });
        ls(i, l);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), bg = "NavigationMenuIndicator", DP = /* @__PURE__ */ R((e, t) => {
  const { forceMount: n, ...r } = e, o = Jt(bg, e.__scopeNavigationMenu), a = Boolean(o.value);
  return o.indicatorTrack ? /* @__PURE__ */ ul.createPortal(/* @__PURE__ */ x(Xe, {
    present: n || a
  }, /* @__PURE__ */ x(RP, S({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), RP = /* @__PURE__ */ R((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Jt(bg, n), a = vg(n), [s, i] = Y(null), [c, l] = Y(null), d = o.orientation === "horizontal", u = Boolean(o.value);
  G(() => {
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
      size: d ? s.offsetWidth : s.offsetHeight,
      offset: d ? s.offsetLeft : s.offsetTop
    });
  };
  return qc(s, p), qc(o.indicatorTrack, p), c ? /* @__PURE__ */ x(ie.div, S({
    "aria-hidden": !0,
    "data-state": u ? "visible" : "hidden",
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
}), zo = "NavigationMenuContent", AP = /* @__PURE__ */ R((e, t) => {
  const { forceMount: n, ...r } = e, o = Jt(zo, e.__scopeNavigationMenu), a = gg(zo, e.__scopeNavigationMenu), s = we(a.contentRef, t), i = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ x(jP, S({
    forceMount: n
  }, c, {
    ref: s
  })) : /* @__PURE__ */ x(Xe, {
    present: n || i
  }, /* @__PURE__ */ x(xg, S({
    "data-state": Dd(i)
  }, c, {
    ref: s,
    onPointerEnter: H(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: H(e.onPointerLeave, _s(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !i && o.isRootMenu ? "none" : void 0,
      ...c.style
    }
  })));
}), jP = /* @__PURE__ */ R((e, t) => {
  const n = Jt(zo, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return pt(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [
    e,
    t,
    r
  ]), pt(() => () => o(e.value), [
    e.value,
    o
  ]), null;
}), rs = "navigationMenu.rootContentDismiss", xg = /* @__PURE__ */ R((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: i, onContentFocusOutside: c, ...l } = e, d = Jt(zo, n), u = V(null), p = we(u, t), m = _g(d.baseId, r), h = Cg(d.baseId, r), v = vg(n), g = V(null), { onItemDismiss: b } = d;
  G(() => {
    const $ = u.current;
    if (d.isRootMenu && $) {
      const _ = () => {
        var w;
        b(), i(), $.contains(document.activeElement) && ((w = o.current) === null || w === void 0 || w.focus());
      };
      return $.addEventListener(rs, _), () => $.removeEventListener(rs, _);
    }
  }, [
    d.isRootMenu,
    e.value,
    o,
    b,
    i
  ]);
  const y = yt(() => {
    const _ = v().map(
      (ee) => ee.value
    );
    d.dir === "rtl" && _.reverse();
    const w = _.indexOf(d.value), P = _.indexOf(d.previousValue), k = r === d.value, L = P === _.indexOf(r);
    if (!k && !L)
      return g.current;
    const I = (() => {
      if (w !== P) {
        if (k && P !== -1)
          return w > P ? "from-end" : "from-start";
        if (L && w !== -1)
          return w > P ? "to-start" : "to-end";
      }
      return null;
    })();
    return g.current = I, I;
  }, [
    d.previousValue,
    d.value,
    d.dir,
    v,
    r
  ]);
  return /* @__PURE__ */ x($g, {
    asChild: !0
  }, /* @__PURE__ */ x(Sr, S({
    id: h,
    "aria-labelledby": m,
    "data-motion": y,
    "data-orientation": d.orientation
  }, l, {
    ref: p,
    onDismiss: () => {
      var $;
      const _ = new Event(rs, {
        bubbles: !0,
        cancelable: !0
      });
      ($ = u.current) === null || $ === void 0 || $.dispatchEvent(_);
    },
    onFocusOutside: H(e.onFocusOutside, ($) => {
      var _;
      c();
      const w = $.target;
      (_ = d.rootNavigationMenu) !== null && _ !== void 0 && _.contains(w) && $.preventDefault();
    }),
    onPointerDownOutside: H(e.onPointerDownOutside, ($) => {
      var _;
      const w = $.target, P = v().some((L) => {
        var I;
        return (I = L.ref.current) === null || I === void 0 ? void 0 : I.contains(w);
      }), k = d.isRootMenu && ((_ = d.viewport) === null || _ === void 0 ? void 0 : _.contains(w));
      (P || k || !d.isRootMenu) && $.preventDefault();
    }),
    onKeyDown: H(e.onKeyDown, ($) => {
      const _ = $.altKey || $.ctrlKey || $.metaKey;
      if ($.key === "Tab" && !_) {
        const k = Zc($.currentTarget), L = document.activeElement, I = k.findIndex(
          (K) => K === L
        ), te = $.shiftKey ? k.slice(0, I).reverse() : k.slice(I + 1, k.length);
        if (Md(te))
          $.preventDefault();
        else {
          var P;
          (P = a.current) === null || P === void 0 || P.focus();
        }
      }
    }),
    onEscapeKeyDown: H(e.onEscapeKeyDown, ($) => {
      s.current = !0;
    })
  })));
}), yg = "NavigationMenuViewport", IP = /* @__PURE__ */ R((e, t) => {
  const { forceMount: n, ...r } = e, o = Jt(yg, e.__scopeNavigationMenu), a = Boolean(o.value);
  return /* @__PURE__ */ x(Xe, {
    present: n || a
  }, /* @__PURE__ */ x(LP, S({}, r, {
    ref: t
  })));
}), LP = /* @__PURE__ */ R((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = Jt(yg, n), s = we(t, a.onViewportChange), i = _P(zo, e.__scopeNavigationMenu), [c, l] = Y(null), [d, u] = Y(null), p = c ? (c == null ? void 0 : c.width) + "px" : void 0, m = c ? (c == null ? void 0 : c.height) + "px" : void 0, h = Boolean(a.value), v = h ? a.value : a.previousValue;
  return qc(d, () => {
    d && l({
      width: d.offsetWidth,
      height: d.offsetHeight
    });
  }), /* @__PURE__ */ x(ie.div, S({
    "data-state": Dd(h),
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
    onPointerEnter: H(e.onPointerEnter, a.onContentEnter),
    onPointerLeave: H(e.onPointerLeave, _s(a.onContentLeave))
  }), Array.from(i.items).map(([b, { ref: y, forceMount: $, ..._ }]) => {
    const w = v === b;
    return /* @__PURE__ */ x(Xe, {
      key: b,
      present: $ || w
    }, /* @__PURE__ */ x(xg, S({}, _, {
      ref: ra(y, (P) => {
        w && P && u(P);
      })
    })));
  }));
}), FP = "FocusGroup", $g = /* @__PURE__ */ R((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Jt(FP, n);
  return /* @__PURE__ */ x(Gc.Provider, {
    scope: n
  }, /* @__PURE__ */ x(Gc.Slot, {
    scope: n
  }, /* @__PURE__ */ x(ie.div, S({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), ff = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], VP = "FocusGroupItem", wg = /* @__PURE__ */ R((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = xP(n), a = Jt(VP, n);
  return /* @__PURE__ */ x(Gc.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ x(ie.button, S({}, r, {
    ref: t,
    onKeyDown: H(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...ff
      ].includes(s.key)) {
        let c = o().map(
          (u) => u.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && c.reverse(), ff.includes(s.key)) {
          const u = c.indexOf(s.currentTarget);
          c = c.slice(u + 1);
        }
        setTimeout(
          () => Md(c)
        ), s.preventDefault();
      }
    })
  })));
});
function Zc(e) {
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
function Md(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function UP(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function qc(e, t) {
  const n = ze(t);
  pt(() => {
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
function Dd(e) {
  return e ? "open" : "closed";
}
function _g(e, t) {
  return `${e}-trigger-${t}`;
}
function Cg(e, t) {
  return `${e}-content-${t}`;
}
function _s(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Sg = CP, Eg = NP, WP = kP, Ng = OP, zP = MP, Pg = DP, Tg = AP, kg = IP, BP = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Sg,
  {
    ref: r,
    className: F(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(Og, {})
    ]
  }
));
BP.displayName = Sg.displayName;
const YP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Eg,
  {
    ref: n,
    className: F(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
YP.displayName = Eg.displayName;
const h8 = WP, HP = oo(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), KP = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Ng,
  {
    ref: r,
    className: F(HP(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ f.exports.jsx(
        Do,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
KP.displayName = Ng.displayName;
const GP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Tg,
  {
    ref: n,
    className: F(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
GP.displayName = Tg.displayName;
const v8 = zP, Og = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: F("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ f.exports.jsx(
  kg,
  {
    className: F(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
Og.displayName = kg.displayName;
const ZP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Pg,
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
ZP.displayName = Pg.displayName;
const Mg = "Progress", xi = 100, [qP, g8] = Ze(Mg), [XP, QP] = qP(Mg), Dg = /* @__PURE__ */ R((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = tT, ...s } = e, i = Xc(o) ? o : xi, c = Ag(r, i) ? r : null, l = Cs(c) ? a(c, i) : void 0;
  return /* @__PURE__ */ x(XP, {
    scope: n,
    value: c,
    max: i
  }, /* @__PURE__ */ x(ie.div, S({
    "aria-valuemax": i,
    "aria-valuemin": 0,
    "aria-valuenow": Cs(c) ? c : void 0,
    "aria-valuetext": l,
    role: "progressbar",
    "data-state": Rg(c, i),
    "data-value": c ?? void 0,
    "data-max": i
  }, s, {
    ref: t
  })));
});
Dg.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Xc(r) ? new Error(nT(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = Xc(e.max) ? e.max : xi;
    return r != null && !Ag(r, a) ? new Error(rT(o, n)) : null;
  }
};
const JP = "ProgressIndicator", eT = /* @__PURE__ */ R((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = QP(JP, r);
  return /* @__PURE__ */ x(ie.div, S({
    "data-state": Rg(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function tT(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Rg(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Cs(e) {
  return typeof e == "number";
}
function Xc(e) {
  return Cs(e) && !isNaN(e) && e > 0;
}
function Ag(e, t) {
  return Cs(e) && !isNaN(e) && e <= t && e >= 0;
}
function nT(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${xi}\`.`;
}
function rT(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${xi} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const jg = Dg, oT = eT, aT = C.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  jg,
  {
    ref: r,
    className: F(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(
      oT,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
aT.displayName = jg.displayName;
const Ig = "Radio", [sT, Lg] = Ze(Ig), [iT, cT] = sT(Ig), lT = /* @__PURE__ */ R((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: i = "on", onCheck: c, ...l } = e, [d, u] = Y(null), p = we(
    t,
    (v) => u(v)
  ), m = V(!1), h = d ? Boolean(d.closest("form")) : !0;
  return /* @__PURE__ */ x(iT, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ x(ie.button, S({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": Fg(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: i
  }, l, {
    ref: p,
    onClick: H(e.onClick, (v) => {
      o || c == null || c(), h && (m.current = v.isPropagationStopped(), m.current || v.stopPropagation());
    })
  })), h && /* @__PURE__ */ x(fT, {
    control: d,
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
}), dT = "RadioIndicator", uT = /* @__PURE__ */ R((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = cT(dT, n);
  return /* @__PURE__ */ x(Xe, {
    present: r || a.checked
  }, /* @__PURE__ */ x(ie.span, S({
    "data-state": Fg(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), fT = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = V(null), s = fo(n), i = ca(t);
  return G(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && u) {
      const p = new Event("click", {
        bubbles: r
      });
      u.call(c, n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ x("input", S({
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
function Fg(e) {
  return e ? "checked" : "unchecked";
}
const pT = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Vg = "RadioGroup", [mT, b8] = Ze(Vg, [
  er,
  Lg
]), Ug = er(), Wg = Lg(), [hT, vT] = mT(Vg), gT = /* @__PURE__ */ R((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: i = !1, orientation: c, dir: l, loop: d = !0, onValueChange: u, ...p } = e, m = Ug(n), h = dn(l), [v, g] = tt({
    prop: a,
    defaultProp: o,
    onChange: u
  });
  return /* @__PURE__ */ x(hT, {
    scope: n,
    name: r,
    required: s,
    disabled: i,
    value: v,
    onValueChange: g
  }, /* @__PURE__ */ x(qs, S({
    asChild: !0
  }, m, {
    orientation: c,
    dir: h,
    loop: d
  }), /* @__PURE__ */ x(ie.div, S({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": c,
    "data-disabled": i ? "" : void 0,
    dir: h
  }, p, {
    ref: t
  }))));
}), bT = "RadioGroupItem", xT = /* @__PURE__ */ R((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = vT(bT, n), s = a.disabled || r, i = Ug(n), c = Wg(n), l = V(null), d = we(t, l), u = a.value === o.value, p = V(!1);
  return G(() => {
    const m = (v) => {
      pT.includes(v.key) && (p.current = !0);
    }, h = () => p.current = !1;
    return document.addEventListener("keydown", m), document.addEventListener("keyup", h), () => {
      document.removeEventListener("keydown", m), document.removeEventListener("keyup", h);
    };
  }, []), /* @__PURE__ */ x(Xs, S({
    asChild: !0
  }, i, {
    focusable: !s,
    active: u
  }), /* @__PURE__ */ x(lT, S({
    disabled: s,
    required: a.required,
    checked: u
  }, c, o, {
    name: a.name,
    ref: d,
    onCheck: () => a.onValueChange(o.value),
    onKeyDown: H((m) => {
      m.key === "Enter" && m.preventDefault();
    }),
    onFocus: H(o.onFocus, () => {
      var m;
      p.current && ((m = l.current) === null || m === void 0 || m.click());
    })
  })));
}), yT = /* @__PURE__ */ R((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = Wg(n);
  return /* @__PURE__ */ x(uT, S({}, o, r, {
    ref: t
  }));
}), zg = gT, Bg = xT, $T = yT, wT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  zg,
  {
    className: F("grid gap-2", e),
    ...t,
    ref: n
  }
));
wT.displayName = zg.displayName;
const _T = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Bg,
  {
    ref: r,
    className: F(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx($T, { className: "flex items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Us, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
_T.displayName = Bg.displayName;
const Yg = [
  "PageUp",
  "PageDown"
], Hg = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Kg = {
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
}, ka = "Slider", [Qc, CT, ST] = Jn(ka), [Gg, x8] = Ze(ka, [
  ST
]), [ET, yi] = Gg(ka), NT = /* @__PURE__ */ R((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: i = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    r
  ], value: d, onValueChange: u = () => {
  }, onValueCommit: p = () => {
  }, inverted: m = !1, ...h } = e, [v, g] = Y(null), b = we(
    t,
    (O) => g(O)
  ), y = V(/* @__PURE__ */ new Set()), $ = V(0), _ = s === "horizontal", w = v ? Boolean(v.closest("form")) : !0, P = _ ? PT : TT, [k = [], L] = tt({
    prop: d,
    defaultProp: l,
    onChange: (O) => {
      var A;
      (A = [
        ...y.current
      ][$.current]) === null || A === void 0 || A.focus(), u(O);
    }
  }), I = V(k);
  function ee(O) {
    const A = LT(k, O);
    Z(O, A);
  }
  function te(O) {
    Z(O, $.current);
  }
  function K() {
    const O = I.current[$.current];
    k[$.current] !== O && p(k);
  }
  function Z(O, A, { commit: j } = {
    commit: !1
  }) {
    const W = WT(a), B = zT(Math.round((O - r) / a) * a + r, W), M = Uo(B, [
      r,
      o
    ]);
    L((D = []) => {
      const U = jT(D, M, A);
      if (UT(U, c * a)) {
        $.current = U.indexOf(M);
        const q = String(U) !== String(D);
        return q && j && p(U), q ? U : D;
      } else
        return D;
    });
  }
  return /* @__PURE__ */ x(ET, {
    scope: e.__scopeSlider,
    disabled: i,
    min: r,
    max: o,
    valueIndexToChangeRef: $,
    thumbs: y.current,
    values: k,
    orientation: s
  }, /* @__PURE__ */ x(Qc.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ x(Qc.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ x(P, S({
    "aria-disabled": i,
    "data-disabled": i ? "" : void 0
  }, h, {
    ref: b,
    onPointerDown: H(h.onPointerDown, () => {
      i || (I.current = k);
    }),
    min: r,
    max: o,
    inverted: m,
    onSlideStart: i ? void 0 : ee,
    onSlideMove: i ? void 0 : te,
    onSlideEnd: i ? void 0 : K,
    onHomeKeyDown: () => !i && Z(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !i && Z(o, k.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: O, direction: A }) => {
      if (!i) {
        const B = Yg.includes(O.key) || O.shiftKey && Hg.includes(O.key) ? 10 : 1, M = $.current, D = k[M], U = a * B * A;
        Z(D + U, M, {
          commit: !0
        });
      }
    }
  })))), w && k.map(
    (O, A) => /* @__PURE__ */ x(AT, {
      key: A,
      name: n ? n + (k.length > 1 ? "[]" : "") : void 0,
      value: O
    })
  ));
}), [Zg, qg] = Gg(ka, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), PT = /* @__PURE__ */ R((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: i, onSlideEnd: c, onStepKeyDown: l, ...d } = e, [u, p] = Y(null), m = we(
    t,
    ($) => p($)
  ), h = V(), v = dn(o), g = v === "ltr", b = g && !a || !g && a;
  function y($) {
    const _ = h.current || u.getBoundingClientRect(), w = [
      0,
      _.width
    ], k = Rd(w, b ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return h.current = _, k($ - _.left);
  }
  return /* @__PURE__ */ x(Zg, {
    scope: e.__scopeSlider,
    startEdge: b ? "left" : "right",
    endEdge: b ? "right" : "left",
    direction: b ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ x(Xg, S({
    dir: v,
    "data-orientation": "horizontal"
  }, d, {
    ref: m,
    style: {
      ...d.style,
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
      const w = Kg[b ? "from-left" : "from-right"].includes($.key);
      l == null || l({
        event: $,
        direction: w ? -1 : 1
      });
    }
  })));
}), TT = /* @__PURE__ */ R((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: i, onStepKeyDown: c, ...l } = e, d = V(null), u = we(t, d), p = V(), m = !o;
  function h(v) {
    const g = p.current || d.current.getBoundingClientRect(), b = [
      0,
      g.height
    ], $ = Rd(b, m ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return p.current = g, $(v - g.top);
  }
  return /* @__PURE__ */ x(Zg, {
    scope: e.__scopeSlider,
    startEdge: m ? "bottom" : "top",
    endEdge: m ? "top" : "bottom",
    size: "height",
    direction: m ? 1 : -1
  }, /* @__PURE__ */ x(Xg, S({
    "data-orientation": "vertical"
  }, l, {
    ref: u,
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
      const b = Kg[m ? "from-bottom" : "from-top"].includes(v.key);
      c == null || c({
        event: v,
        direction: b ? -1 : 1
      });
    }
  })));
}), Xg = /* @__PURE__ */ R((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: i, onStepKeyDown: c, ...l } = e, d = yi(ka, n);
  return /* @__PURE__ */ x(ie.span, S({}, l, {
    ref: t,
    onKeyDown: H(e.onKeyDown, (u) => {
      u.key === "Home" ? (s(u), u.preventDefault()) : u.key === "End" ? (i(u), u.preventDefault()) : Yg.concat(Hg).includes(u.key) && (c(u), u.preventDefault());
    }),
    onPointerDown: H(e.onPointerDown, (u) => {
      const p = u.target;
      p.setPointerCapture(u.pointerId), u.preventDefault(), d.thumbs.has(p) ? p.focus() : r(u);
    }),
    onPointerMove: H(e.onPointerMove, (u) => {
      u.target.hasPointerCapture(u.pointerId) && o(u);
    }),
    onPointerUp: H(e.onPointerUp, (u) => {
      const p = u.target;
      p.hasPointerCapture(u.pointerId) && (p.releasePointerCapture(u.pointerId), a(u));
    })
  }));
}), kT = "SliderTrack", OT = /* @__PURE__ */ R((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = yi(kT, n);
  return /* @__PURE__ */ x(ie.span, S({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), pf = "SliderRange", MT = /* @__PURE__ */ R((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = yi(pf, n), a = qg(pf, n), s = V(null), i = we(t, s), c = o.values.length, l = o.values.map(
    (p) => Qg(p, o.min, o.max)
  ), d = c > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
  return /* @__PURE__ */ x(ie.span, S({
    "data-orientation": o.orientation,
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: i,
    style: {
      ...e.style,
      [a.startEdge]: d + "%",
      [a.endEdge]: u + "%"
    }
  }));
}), mf = "SliderThumb", DT = /* @__PURE__ */ R((e, t) => {
  const n = CT(e.__scopeSlider), [r, o] = Y(null), a = we(
    t,
    (i) => o(i)
  ), s = yt(
    () => r ? n().findIndex(
      (i) => i.ref.current === r
    ) : -1,
    [
      n,
      r
    ]
  );
  return /* @__PURE__ */ x(RT, S({}, e, {
    ref: a,
    index: s
  }));
}), RT = /* @__PURE__ */ R((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = yi(mf, n), s = qg(mf, n), [i, c] = Y(null), l = we(
    t,
    (g) => c(g)
  ), d = ca(i), u = a.values[r], p = u === void 0 ? 0 : Qg(u, a.min, a.max), m = IT(r, a.values.length), h = d == null ? void 0 : d[s.size], v = h ? FT(h, p, s.direction) : 0;
  return G(() => {
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
  }, /* @__PURE__ */ x(Qc.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ x(ie.span, S({
    role: "slider",
    "aria-label": e["aria-label"] || m,
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
    onFocus: H(e.onFocus, () => {
      a.valueIndexToChangeRef.current = r;
    })
  }))));
}), AT = (e) => {
  const { value: t, ...n } = e, r = V(null), o = fo(t);
  return G(() => {
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
  ]), /* @__PURE__ */ x("input", S({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function jT(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function Qg(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Uo(a, [
    0,
    100
  ]);
}
function IT(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function LT(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function FT(e, t, n) {
  const r = e / 2, a = Rd([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function VT(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function UT(e, t) {
  if (t > 0) {
    const n = VT(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Rd(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function WT(e) {
  return (String(e).split(".")[1] || "").length;
}
function zT(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const Jg = NT, BT = OT, YT = MT, HT = DT, KT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(
  Jg,
  {
    ref: n,
    className: F(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ f.exports.jsx(BT, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ f.exports.jsx(YT, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ f.exports.jsx(HT, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
KT.displayName = Jg.displayName;
const eb = "Tabs", [GT, y8] = Ze(eb, [
  er
]), tb = er(), [ZT, Ad] = GT(eb), qT = /* @__PURE__ */ R((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: i, activationMode: c = "automatic", ...l } = e, d = dn(i), [u, p] = tt({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ x(ZT, {
    scope: n,
    baseId: rt(),
    value: u,
    onValueChange: p,
    orientation: s,
    dir: d,
    activationMode: c
  }, /* @__PURE__ */ x(ie.div, S({
    dir: d,
    "data-orientation": s
  }, l, {
    ref: t
  })));
}), XT = "TabsList", QT = /* @__PURE__ */ R((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Ad(XT, n), s = tb(n);
  return /* @__PURE__ */ x(qs, S({
    asChild: !0
  }, s, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ x(ie.div, S({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: t
  })));
}), JT = "TabsTrigger", e3 = /* @__PURE__ */ R((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Ad(JT, n), i = tb(n), c = nb(s.baseId, r), l = rb(s.baseId, r), d = r === s.value;
  return /* @__PURE__ */ x(Xs, S({
    asChild: !0
  }, i, {
    focusable: !o,
    active: d
  }), /* @__PURE__ */ x(ie.button, S({
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
    onMouseDown: H(e.onMouseDown, (u) => {
      !o && u.button === 0 && u.ctrlKey === !1 ? s.onValueChange(r) : u.preventDefault();
    }),
    onKeyDown: H(e.onKeyDown, (u) => {
      [
        " ",
        "Enter"
      ].includes(u.key) && s.onValueChange(r);
    }),
    onFocus: H(e.onFocus, () => {
      const u = s.activationMode !== "manual";
      !d && !o && u && s.onValueChange(r);
    })
  })));
}), t3 = "TabsContent", n3 = /* @__PURE__ */ R((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = Ad(t3, n), c = nb(i.baseId, r), l = rb(i.baseId, r), d = r === i.value, u = V(d);
  return G(() => {
    const p = requestAnimationFrame(
      () => u.current = !1
    );
    return () => cancelAnimationFrame(p);
  }, []), /* @__PURE__ */ x(
    Xe,
    {
      present: o || d
    },
    ({ present: p }) => /* @__PURE__ */ x(ie.div, S({
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
        animationDuration: u.current ? "0s" : void 0
      }
    }), p && a)
  );
});
function nb(e, t) {
  return `${e}-trigger-${t}`;
}
function rb(e, t) {
  return `${e}-content-${t}`;
}
const r3 = qT, ob = QT, ab = e3, sb = n3, $8 = r3, o3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ob,
  {
    ref: n,
    className: F(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
o3.displayName = ob.displayName;
const a3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ab,
  {
    ref: n,
    className: F(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
a3.displayName = ab.displayName;
const s3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  sb,
  {
    ref: n,
    className: F(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
s3.displayName = sb.displayName;
const i3 = /* @__PURE__ */ R((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, i] = tt({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ x(ie.button, S({
    type: "button",
    "aria-pressed": s,
    "data-state": s ? "on" : "off",
    "data-disabled": e.disabled ? "" : void 0
  }, a, {
    ref: t,
    onClick: H(e.onClick, () => {
      e.disabled || i(!s);
    })
  }));
}), ib = i3, c3 = oo(
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
), l3 = C.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  ib,
  {
    ref: o,
    className: F(c3({ variant: t, size: n, className: e })),
    ...r
  }
));
l3.displayName = ib.displayName;
const [$i, w8] = Ze("Tooltip", [
  un
]), jd = un(), d3 = "TooltipProvider", u3 = 700, Jc = "tooltip.open", [f3, Id] = $i(d3), p3 = (e) => {
  const { __scopeTooltip: t, delayDuration: n = u3, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = Y(!0), c = V(!1), l = V(0);
  return G(() => {
    const d = l.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ x(f3, {
    scope: t,
    isOpenDelayed: s,
    delayDuration: n,
    onOpen: ue(() => {
      window.clearTimeout(l.current), i(!1);
    }, []),
    onClose: ue(() => {
      window.clearTimeout(l.current), l.current = window.setTimeout(
        () => i(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: c,
    onPointerInTransitChange: ue((d) => {
      c.current = d;
    }, []),
    disableHoverableContent: o
  }, a);
}, Ld = "Tooltip", [m3, wi] = $i(Ld), h3 = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = Id(Ld, e.__scopeTooltip), l = jd(t), [d, u] = Y(null), p = rt(), m = V(0), h = s ?? c.disableHoverableContent, v = i ?? c.delayDuration, g = V(!1), [b = !1, y] = tt({
    prop: r,
    defaultProp: o,
    onChange: (k) => {
      k ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Jc))) : c.onClose(), a == null || a(k);
    }
  }), $ = yt(() => b ? g.current ? "delayed-open" : "instant-open" : "closed", [
    b
  ]), _ = ue(() => {
    window.clearTimeout(m.current), g.current = !1, y(!0);
  }, [
    y
  ]), w = ue(() => {
    window.clearTimeout(m.current), y(!1);
  }, [
    y
  ]), P = ue(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      g.current = !0, y(!0);
    }, v);
  }, [
    v,
    y
  ]);
  return G(() => () => window.clearTimeout(m.current), []), /* @__PURE__ */ x(co, l, /* @__PURE__ */ x(m3, {
    scope: t,
    contentId: p,
    open: b,
    stateAttribute: $,
    trigger: d,
    onTriggerChange: u,
    onTriggerEnter: ue(() => {
      c.isOpenDelayed ? P() : _();
    }, [
      c.isOpenDelayed,
      P,
      _
    ]),
    onTriggerLeave: ue(() => {
      h ? w() : window.clearTimeout(m.current);
    }, [
      w,
      h
    ]),
    onOpen: _,
    onClose: w,
    disableHoverableContent: h
  }, n));
}, hf = "TooltipTrigger", v3 = /* @__PURE__ */ R((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = wi(hf, n), a = Id(hf, n), s = jd(n), i = V(null), c = we(t, i, o.onTriggerChange), l = V(!1), d = V(!1), u = ue(
    () => l.current = !1,
    []
  );
  return G(() => () => document.removeEventListener("pointerup", u), [
    u
  ]), /* @__PURE__ */ x(la, S({
    asChild: !0
  }, s), /* @__PURE__ */ x(ie.button, S({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": o.open ? o.contentId : void 0,
    "data-state": o.stateAttribute
  }, r, {
    ref: c,
    onPointerMove: H(e.onPointerMove, (p) => {
      p.pointerType !== "touch" && !d.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
    }),
    onPointerLeave: H(e.onPointerLeave, () => {
      o.onTriggerLeave(), d.current = !1;
    }),
    onPointerDown: H(e.onPointerDown, () => {
      l.current = !0, document.addEventListener("pointerup", u, {
        once: !0
      });
    }),
    onFocus: H(e.onFocus, () => {
      l.current || o.onOpen();
    }),
    onBlur: H(e.onBlur, o.onClose),
    onClick: H(e.onClick, o.onClose)
  })));
}), g3 = "TooltipPortal", [_8, b3] = $i(g3, {
  forceMount: void 0
}), Bo = "TooltipContent", x3 = /* @__PURE__ */ R((e, t) => {
  const n = b3(Bo, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = wi(Bo, e.__scopeTooltip);
  return /* @__PURE__ */ x(Xe, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ x(cb, S({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ x(y3, S({
    side: o
  }, a, {
    ref: t
  })));
}), y3 = /* @__PURE__ */ R((e, t) => {
  const n = wi(Bo, e.__scopeTooltip), r = Id(Bo, e.__scopeTooltip), o = V(null), a = we(t, o), [s, i] = Y(null), { trigger: c, onClose: l } = n, d = o.current, { onPointerInTransitChange: u } = r, p = ue(() => {
    i(null), u(!1);
  }, [
    u
  ]), m = ue((h, v) => {
    const g = h.currentTarget, b = {
      x: h.clientX,
      y: h.clientY
    }, y = w3(b, g.getBoundingClientRect()), $ = _3(b, y), _ = C3(v.getBoundingClientRect()), w = E3([
      ...$,
      ..._
    ]);
    i(w), u(!0);
  }, [
    u
  ]);
  return G(() => () => p(), [
    p
  ]), G(() => {
    if (c && d) {
      const h = (g) => m(g, d), v = (g) => m(g, c);
      return c.addEventListener("pointerleave", h), d.addEventListener("pointerleave", v), () => {
        c.removeEventListener("pointerleave", h), d.removeEventListener("pointerleave", v);
      };
    }
  }, [
    c,
    d,
    m,
    p
  ]), G(() => {
    if (s) {
      const h = (v) => {
        const g = v.target, b = {
          x: v.clientX,
          y: v.clientY
        }, y = (c == null ? void 0 : c.contains(g)) || (d == null ? void 0 : d.contains(g)), $ = !S3(b, s);
        y ? p() : $ && (p(), l());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [
    c,
    d,
    s,
    l,
    p
  ]), /* @__PURE__ */ x(cb, S({}, e, {
    ref: a
  }));
}), [$3, C8] = $i(Ld, {
  isInside: !1
}), cb = /* @__PURE__ */ R((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = wi(Bo, n), l = jd(n), { onClose: d } = c;
  return G(() => (document.addEventListener(Jc, d), () => document.removeEventListener(Jc, d)), [
    d
  ]), G(() => {
    if (c.trigger) {
      const u = (p) => {
        const m = p.target;
        m != null && m.contains(c.trigger) && d();
      };
      return window.addEventListener("scroll", u, {
        capture: !0
      }), () => window.removeEventListener("scroll", u, {
        capture: !0
      });
    }
  }, [
    c.trigger,
    d
  ]), /* @__PURE__ */ x(Sr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (u) => u.preventDefault(),
    onDismiss: d
  }, /* @__PURE__ */ x(da, S({
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
  }), /* @__PURE__ */ x(pl, null, r), /* @__PURE__ */ x($3, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ x(mh, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function w3(e, t) {
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
function _3(e, t, n = 5) {
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
function C3(e) {
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
function S3(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, d = t[s].y;
    c > r != d > r && n < (l - i) * (r - c) / (d - c) + i && (o = !o);
  }
  return o;
}
function E3(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), N3(t);
}
function N3(e) {
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
const P3 = p3, T3 = h3, k3 = v3, lb = x3, hr = P3, vr = T3, gr = k3, Gn = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  lb,
  {
    ref: r,
    sideOffset: t,
    className: F(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
Gn.displayName = lb.displayName;
const db = "Switch", [O3, S8] = Ze(db), [M3, D3] = O3(db), R3 = /* @__PURE__ */ R((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...d } = e, [u, p] = Y(null), m = we(
    t,
    (y) => p(y)
  ), h = V(!1), v = u ? Boolean(u.closest("form")) : !0, [g = !1, b] = tt({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ x(M3, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ x(ie.button, S({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": ub(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, d, {
    ref: m,
    onClick: H(e.onClick, (y) => {
      b(
        ($) => !$
      ), v && (h.current = y.isPropagationStopped(), h.current || y.stopPropagation());
    })
  })), v && /* @__PURE__ */ x(I3, {
    control: u,
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
}), A3 = "SwitchThumb", j3 = /* @__PURE__ */ R((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = D3(A3, n);
  return /* @__PURE__ */ x(ie.span, S({
    "data-state": ub(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), I3 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = V(null), s = fo(n), i = ca(t);
  return G(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && u) {
      const p = new Event("click", {
        bubbles: r
      });
      u.call(c, n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ x("input", S({
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
function ub(e) {
  return e ? "checked" : "unchecked";
}
const fb = R3, L3 = j3, F3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  fb,
  {
    className: F(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ f.exports.jsx(
      L3,
      {
        className: F(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
F3.displayName = fb.displayName;
const vf = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (c, l) => {
    const d = typeof c == "function" ? c(t) : c;
    if (!Object.is(d, t)) {
      const u = t;
      t = l ?? typeof d != "object" ? d : Object.assign({}, t, d), n.forEach((p) => p(t, u));
    }
  }, o = () => t, i = { setState: r, getState: o, subscribe: (c) => (n.add(c), () => n.delete(c)), destroy: () => {
    n.clear();
  } };
  return t = e(r, o, i), i;
}, V3 = (e) => e ? vf(e) : vf;
var pb = { exports: {} }, oc = {}, ac = { exports: {} }, sc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gf;
function U3() {
  if (gf)
    return sc;
  gf = 1;
  var e = N;
  function t(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, a = e.useLayoutEffect, s = e.useDebugValue;
  function i(u, p) {
    var m = p(), h = r({ inst: { value: m, getSnapshot: p } }), v = h[0].inst, g = h[1];
    return a(function() {
      v.value = m, v.getSnapshot = p, c(v) && g({ inst: v });
    }, [u, m, p]), o(function() {
      return c(v) && g({ inst: v }), u(function() {
        c(v) && g({ inst: v });
      });
    }, [u]), s(m), m;
  }
  function c(u) {
    var p = u.getSnapshot;
    u = u.value;
    try {
      var m = p();
      return !n(u, m);
    } catch {
      return !0;
    }
  }
  function l(u, p) {
    return p();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : i;
  return sc.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, sc;
}
var ic = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bf;
function W3() {
  return bf || (bf = 1, process.env.NODE_ENV !== "production" && function() {
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
        var L = w.map(function(I) {
          return String(I);
        });
        L.unshift("Warning: " + _), Function.prototype.apply.call(console[$], console, L);
      }
    }
    function o($, _) {
      return $ === _ && ($ !== 0 || 1 / $ === 1 / _) || $ !== $ && _ !== _;
    }
    var a = typeof Object.is == "function" ? Object.is : o, s = e.useState, i = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, d = !1, u = !1;
    function p($, _, w) {
      d || e.startTransition !== void 0 && (d = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var P = _();
      if (!u) {
        var k = _();
        a(P, k) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), u = !0);
      }
      var L = s({
        inst: {
          value: P,
          getSnapshot: _
        }
      }), I = L[0].inst, ee = L[1];
      return c(function() {
        I.value = P, I.getSnapshot = _, m(I) && ee({
          inst: I
        });
      }, [$, P, _]), i(function() {
        m(I) && ee({
          inst: I
        });
        var te = function() {
          m(I) && ee({
            inst: I
          });
        };
        return $(te);
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
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !v, b = g ? h : p, y = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : b;
    ic.useSyncExternalStore = y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ic;
}
var xf;
function mb() {
  return xf || (xf = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = U3() : e.exports = W3();
  }(ac)), ac.exports;
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
var yf;
function z3() {
  if (yf)
    return oc;
  yf = 1;
  var e = N, t = mb();
  function n(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
  return oc.useSyncExternalStoreWithSelector = function(l, d, u, p, m) {
    var h = a(null);
    if (h.current === null) {
      var v = { hasValue: !1, value: null };
      h.current = v;
    } else
      v = h.current;
    h = i(function() {
      function b(P) {
        if (!y) {
          if (y = !0, $ = P, P = p(P), m !== void 0 && v.hasValue) {
            var k = v.value;
            if (m(k, P))
              return _ = k;
          }
          return _ = P;
        }
        if (k = _, r($, P))
          return k;
        var L = p(P);
        return m !== void 0 && m(k, L) ? k : ($ = P, _ = L);
      }
      var y = !1, $, _, w = u === void 0 ? null : u;
      return [function() {
        return b(d());
      }, w === null ? void 0 : function() {
        return b(w());
      }];
    }, [d, u, p, m]);
    var g = o(l, h[0], h[1]);
    return s(function() {
      v.hasValue = !0, v.value = g;
    }, [g]), c(g), g;
  }, oc;
}
var cc = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $f;
function B3() {
  return $f || ($f = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = N, t = mb();
    function n(d, u) {
      return d === u && (d !== 0 || 1 / d === 1 / u) || d !== d && u !== u;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
    function l(d, u, p, m, h) {
      var v = a(null), g;
      v.current === null ? (g = {
        hasValue: !1,
        value: null
      }, v.current = g) : g = v.current;
      var b = i(function() {
        var w = !1, P, k, L = function(K) {
          if (!w) {
            w = !0, P = K;
            var Z = m(K);
            if (h !== void 0 && g.hasValue) {
              var O = g.value;
              if (h(O, Z))
                return k = O, O;
            }
            return k = Z, Z;
          }
          var A = P, j = k;
          if (r(A, K))
            return j;
          var W = m(K);
          return h !== void 0 && h(j, W) ? j : (P = K, k = W, W);
        }, I = p === void 0 ? null : p, ee = function() {
          return L(u());
        }, te = I === null ? void 0 : function() {
          return L(I());
        };
        return [ee, te];
      }, [u, p, m, h]), y = b[0], $ = b[1], _ = o(d, y, $);
      return s(function() {
        g.hasValue = !0, g.value = _;
      }, [_]), c(_), _;
    }
    cc.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), cc;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = z3() : e.exports = B3();
})(pb);
const Y3 = /* @__PURE__ */ mx(pb.exports), { useSyncExternalStoreWithSelector: H3 } = Y3;
function K3(e, t = e.getState, n) {
  const r = H3(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return dx(r), r;
}
const wf = (e) => {
  const t = typeof e == "function" ? V3(e) : e, n = (r, o) => K3(t, r, o);
  return Object.assign(n, t), n;
}, G3 = (e) => e ? wf(e) : wf, Z3 = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ f.exports.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ f.exports.jsxs(_r, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ f.exports.jsx(
      Wn,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ f.exports.jsx(Cr, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(Jx, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ f.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ f.exports.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ f.exports.jsx(ht, { className: "w-full bg-brand-secondary dark:text-white", children: e.role })
  ] })
] });
var xn = { exports: {} }, lc = { exports: {} }, Le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _f;
function q3() {
  if (_f)
    return Le;
  _f = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
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
            case u:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case i:
                case d:
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
  return Le.AsyncMode = c, Le.ConcurrentMode = l, Le.ContextConsumer = i, Le.ContextProvider = s, Le.Element = t, Le.ForwardRef = d, Le.Fragment = r, Le.Lazy = h, Le.Memo = m, Le.Portal = n, Le.Profiler = a, Le.StrictMode = o, Le.Suspense = u, Le.isAsyncMode = function(w) {
    return _(w) || $(w) === c;
  }, Le.isConcurrentMode = _, Le.isContextConsumer = function(w) {
    return $(w) === i;
  }, Le.isContextProvider = function(w) {
    return $(w) === s;
  }, Le.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, Le.isForwardRef = function(w) {
    return $(w) === d;
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
    return $(w) === u;
  }, Le.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === l || w === a || w === o || w === u || w === p || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === m || w.$$typeof === s || w.$$typeof === i || w.$$typeof === d || w.$$typeof === g || w.$$typeof === b || w.$$typeof === y || w.$$typeof === v);
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
var Cf;
function X3() {
  return Cf || (Cf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function $(Q) {
      return typeof Q == "string" || typeof Q == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Q === r || Q === l || Q === a || Q === o || Q === u || Q === p || typeof Q == "object" && Q !== null && (Q.$$typeof === h || Q.$$typeof === m || Q.$$typeof === s || Q.$$typeof === i || Q.$$typeof === d || Q.$$typeof === g || Q.$$typeof === b || Q.$$typeof === y || Q.$$typeof === v);
    }
    function _(Q) {
      if (typeof Q == "object" && Q !== null) {
        var Re = Q.$$typeof;
        switch (Re) {
          case t:
            var Ue = Q.type;
            switch (Ue) {
              case c:
              case l:
              case r:
              case a:
              case o:
              case u:
                return Ue;
              default:
                var dt = Ue && Ue.$$typeof;
                switch (dt) {
                  case i:
                  case d:
                  case h:
                  case m:
                  case s:
                    return dt;
                  default:
                    return Re;
                }
            }
          case n:
            return Re;
        }
      }
    }
    var w = c, P = l, k = i, L = s, I = t, ee = d, te = r, K = h, Z = m, O = n, A = a, j = o, W = u, B = !1;
    function M(Q) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), D(Q) || _(Q) === c;
    }
    function D(Q) {
      return _(Q) === l;
    }
    function U(Q) {
      return _(Q) === i;
    }
    function q(Q) {
      return _(Q) === s;
    }
    function oe(Q) {
      return typeof Q == "object" && Q !== null && Q.$$typeof === t;
    }
    function ce(Q) {
      return _(Q) === d;
    }
    function ye(Q) {
      return _(Q) === r;
    }
    function be(Q) {
      return _(Q) === h;
    }
    function ne(Q) {
      return _(Q) === m;
    }
    function le(Q) {
      return _(Q) === n;
    }
    function he(Q) {
      return _(Q) === a;
    }
    function J(Q) {
      return _(Q) === o;
    }
    function ve(Q) {
      return _(Q) === u;
    }
    Fe.AsyncMode = w, Fe.ConcurrentMode = P, Fe.ContextConsumer = k, Fe.ContextProvider = L, Fe.Element = I, Fe.ForwardRef = ee, Fe.Fragment = te, Fe.Lazy = K, Fe.Memo = Z, Fe.Portal = O, Fe.Profiler = A, Fe.StrictMode = j, Fe.Suspense = W, Fe.isAsyncMode = M, Fe.isConcurrentMode = D, Fe.isContextConsumer = U, Fe.isContextProvider = q, Fe.isElement = oe, Fe.isForwardRef = ce, Fe.isFragment = ye, Fe.isLazy = be, Fe.isMemo = ne, Fe.isPortal = le, Fe.isProfiler = he, Fe.isStrictMode = J, Fe.isSuspense = ve, Fe.isValidElementType = $, Fe.typeOf = _;
  }()), Fe;
}
var Sf;
function hb() {
  return Sf || (Sf = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = q3() : e.exports = X3();
  }(lc)), lc.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var dc, Ef;
function Q3() {
  if (Ef)
    return dc;
  Ef = 1;
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
      var c = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        l[d] = d;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return dc = o() ? Object.assign : function(a, s) {
    for (var i, c = r(a), l, d = 1; d < arguments.length; d++) {
      i = Object(arguments[d]);
      for (var u in i)
        t.call(i, u) && (c[u] = i[u]);
      if (e) {
        l = e(i);
        for (var p = 0; p < l.length; p++)
          n.call(i, l[p]) && (c[l[p]] = i[l[p]]);
      }
    }
    return c;
  }, dc;
}
var uc, Nf;
function Fd() {
  if (Nf)
    return uc;
  Nf = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return uc = e, uc;
}
var fc, Pf;
function vb() {
  return Pf || (Pf = 1, fc = Function.call.bind(Object.prototype.hasOwnProperty)), fc;
}
var pc, Tf;
function J3() {
  if (Tf)
    return pc;
  Tf = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Fd(), n = {}, r = vb();
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
      for (var d in a)
        if (r(a, d)) {
          var u;
          try {
            if (typeof a[d] != "function") {
              var p = Error(
                (c || "React class") + ": " + i + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            u = a[d](s, d, c, i, null, t);
          } catch (h) {
            u = h;
          }
          if (u && !(u instanceof Error) && e(
            (c || "React class") + ": type specification of " + i + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in n)) {
            n[u.message] = !0;
            var m = l ? l() : "";
            e(
              "Failed " + i + " type: " + u.message + (m ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, pc = o, pc;
}
var mc, kf;
function e4() {
  if (kf)
    return mc;
  kf = 1;
  var e = hb(), t = Q3(), n = Fd(), r = vb(), o = J3(), a = function() {
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
  return mc = function(i, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function u(D) {
      var U = D && (l && D[l] || D[d]);
      if (typeof U == "function")
        return U;
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
      instanceOf: P,
      node: ee(),
      objectOf: L,
      oneOf: k,
      oneOfType: I,
      shape: K,
      exact: Z
    };
    function h(D, U) {
      return D === U ? D !== 0 || 1 / D === 1 / U : D !== D && U !== U;
    }
    function v(D, U) {
      this.message = D, this.data = U && typeof U == "object" ? U : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function g(D) {
      if (process.env.NODE_ENV !== "production")
        var U = {}, q = 0;
      function oe(ye, be, ne, le, he, J, ve) {
        if (le = le || p, J = J || ne, ve !== n) {
          if (c) {
            var Q = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Q.name = "Invariant Violation", Q;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Re = le + ":" + ne;
            !U[Re] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + J + "` prop on `" + le + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), U[Re] = !0, q++);
          }
        }
        return be[ne] == null ? ye ? be[ne] === null ? new v("The " + he + " `" + J + "` is marked as required " + ("in `" + le + "`, but its value is `null`.")) : new v("The " + he + " `" + J + "` is marked as required in " + ("`" + le + "`, but its value is `undefined`.")) : null : D(be, ne, le, he, J);
      }
      var ce = oe.bind(null, !1);
      return ce.isRequired = oe.bind(null, !0), ce;
    }
    function b(D) {
      function U(q, oe, ce, ye, be, ne) {
        var le = q[oe], he = j(le);
        if (he !== D) {
          var J = W(le);
          return new v(
            "Invalid " + ye + " `" + be + "` of type " + ("`" + J + "` supplied to `" + ce + "`, expected ") + ("`" + D + "`."),
            { expectedType: D }
          );
        }
        return null;
      }
      return g(U);
    }
    function y() {
      return g(s);
    }
    function $(D) {
      function U(q, oe, ce, ye, be) {
        if (typeof D != "function")
          return new v("Property `" + be + "` of component `" + ce + "` has invalid PropType notation inside arrayOf.");
        var ne = q[oe];
        if (!Array.isArray(ne)) {
          var le = j(ne);
          return new v("Invalid " + ye + " `" + be + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected an array."));
        }
        for (var he = 0; he < ne.length; he++) {
          var J = D(ne, he, ce, ye, be + "[" + he + "]", n);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return g(U);
    }
    function _() {
      function D(U, q, oe, ce, ye) {
        var be = U[q];
        if (!i(be)) {
          var ne = j(be);
          return new v("Invalid " + ce + " `" + ye + "` of type " + ("`" + ne + "` supplied to `" + oe + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(D);
    }
    function w() {
      function D(U, q, oe, ce, ye) {
        var be = U[q];
        if (!e.isValidElementType(be)) {
          var ne = j(be);
          return new v("Invalid " + ce + " `" + ye + "` of type " + ("`" + ne + "` supplied to `" + oe + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(D);
    }
    function P(D) {
      function U(q, oe, ce, ye, be) {
        if (!(q[oe] instanceof D)) {
          var ne = D.name || p, le = M(q[oe]);
          return new v("Invalid " + ye + " `" + be + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected ") + ("instance of `" + ne + "`."));
        }
        return null;
      }
      return g(U);
    }
    function k(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function U(q, oe, ce, ye, be) {
        for (var ne = q[oe], le = 0; le < D.length; le++)
          if (h(ne, D[le]))
            return null;
        var he = JSON.stringify(D, function(ve, Q) {
          var Re = W(Q);
          return Re === "symbol" ? String(Q) : Q;
        });
        return new v("Invalid " + ye + " `" + be + "` of value `" + String(ne) + "` " + ("supplied to `" + ce + "`, expected one of " + he + "."));
      }
      return g(U);
    }
    function L(D) {
      function U(q, oe, ce, ye, be) {
        if (typeof D != "function")
          return new v("Property `" + be + "` of component `" + ce + "` has invalid PropType notation inside objectOf.");
        var ne = q[oe], le = j(ne);
        if (le !== "object")
          return new v("Invalid " + ye + " `" + be + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected an object."));
        for (var he in ne)
          if (r(ne, he)) {
            var J = D(ne, he, ce, ye, be + "." + he, n);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return g(U);
    }
    function I(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var U = 0; U < D.length; U++) {
        var q = D[U];
        if (typeof q != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + B(q) + " at index " + U + "."
          ), s;
      }
      function oe(ce, ye, be, ne, le) {
        for (var he = [], J = 0; J < D.length; J++) {
          var ve = D[J], Q = ve(ce, ye, be, ne, le, n);
          if (Q == null)
            return null;
          Q.data && r(Q.data, "expectedType") && he.push(Q.data.expectedType);
        }
        var Re = he.length > 0 ? ", expected one of type [" + he.join(", ") + "]" : "";
        return new v("Invalid " + ne + " `" + le + "` supplied to " + ("`" + be + "`" + Re + "."));
      }
      return g(oe);
    }
    function ee() {
      function D(U, q, oe, ce, ye) {
        return O(U[q]) ? null : new v("Invalid " + ce + " `" + ye + "` supplied to " + ("`" + oe + "`, expected a ReactNode."));
      }
      return g(D);
    }
    function te(D, U, q, oe, ce) {
      return new v(
        (D || "React class") + ": " + U + " type `" + q + "." + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ce + "`."
      );
    }
    function K(D) {
      function U(q, oe, ce, ye, be) {
        var ne = q[oe], le = j(ne);
        if (le !== "object")
          return new v("Invalid " + ye + " `" + be + "` of type `" + le + "` " + ("supplied to `" + ce + "`, expected `object`."));
        for (var he in D) {
          var J = D[he];
          if (typeof J != "function")
            return te(ce, ye, be, he, W(J));
          var ve = J(ne, he, ce, ye, be + "." + he, n);
          if (ve)
            return ve;
        }
        return null;
      }
      return g(U);
    }
    function Z(D) {
      function U(q, oe, ce, ye, be) {
        var ne = q[oe], le = j(ne);
        if (le !== "object")
          return new v("Invalid " + ye + " `" + be + "` of type `" + le + "` " + ("supplied to `" + ce + "`, expected `object`."));
        var he = t({}, q[oe], D);
        for (var J in he) {
          var ve = D[J];
          if (r(D, J) && typeof ve != "function")
            return te(ce, ye, be, J, W(ve));
          if (!ve)
            return new v(
              "Invalid " + ye + " `" + be + "` key `" + J + "` supplied to `" + ce + "`.\nBad object: " + JSON.stringify(q[oe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(D), null, "  ")
            );
          var Q = ve(ne, J, ce, ye, be + "." + J, n);
          if (Q)
            return Q;
        }
        return null;
      }
      return g(U);
    }
    function O(D) {
      switch (typeof D) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !D;
        case "object":
          if (Array.isArray(D))
            return D.every(O);
          if (D === null || i(D))
            return !0;
          var U = u(D);
          if (U) {
            var q = U.call(D), oe;
            if (U !== D.entries) {
              for (; !(oe = q.next()).done; )
                if (!O(oe.value))
                  return !1;
            } else
              for (; !(oe = q.next()).done; ) {
                var ce = oe.value;
                if (ce && !O(ce[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function A(D, U) {
      return D === "symbol" ? !0 : U ? U["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && U instanceof Symbol : !1;
    }
    function j(D) {
      var U = typeof D;
      return Array.isArray(D) ? "array" : D instanceof RegExp ? "object" : A(U, D) ? "symbol" : U;
    }
    function W(D) {
      if (typeof D > "u" || D === null)
        return "" + D;
      var U = j(D);
      if (U === "object") {
        if (D instanceof Date)
          return "date";
        if (D instanceof RegExp)
          return "regexp";
      }
      return U;
    }
    function B(D) {
      var U = W(D);
      switch (U) {
        case "array":
        case "object":
          return "an " + U;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + U;
        default:
          return U;
      }
    }
    function M(D) {
      return !D.constructor || !D.constructor.name ? p : D.constructor.name;
    }
    return m.checkPropTypes = o, m.resetWarningCache = o.resetWarningCache, m.PropTypes = m, m;
  }, mc;
}
var hc, Of;
function t4() {
  if (Of)
    return hc;
  Of = 1;
  var e = Fd();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, hc = function() {
    function r(s, i, c, l, d, u) {
      if (u !== e) {
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
  }, hc;
}
if (process.env.NODE_ENV !== "production") {
  var n4 = hb(), r4 = !0;
  xn.exports = e4()(n4.isElement, r4);
} else
  xn.exports = t4()();
var o4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, a4 = Object.defineProperty, s4 = Object.defineProperties, i4 = Object.getOwnPropertyDescriptors, Ss = Object.getOwnPropertySymbols, gb = Object.prototype.hasOwnProperty, bb = Object.prototype.propertyIsEnumerable, Mf = (e, t, n) => t in e ? a4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Df = (e, t) => {
  for (var n in t || (t = {}))
    gb.call(t, n) && Mf(e, n, t[n]);
  if (Ss)
    for (var n of Ss(t))
      bb.call(t, n) && Mf(e, n, t[n]);
  return e;
}, c4 = (e, t) => s4(e, i4(t)), l4 = (e, t) => {
  var n = {};
  for (var r in e)
    gb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ss)
    for (var r of Ss(e))
      t.indexOf(r) < 0 && bb.call(e, r) && (n[r] = e[r]);
  return n;
}, Dn = (e, t, n) => {
  const r = R(
    (o, a) => {
      var s = o, { color: i = "currentColor", size: c = 24, stroke: l = 2, children: d } = s, u = l4(s, ["color", "size", "stroke", "children"]);
      return x(
        "svg",
        Df(c4(Df({
          ref: a
        }, o4), {
          width: c,
          height: c,
          stroke: i,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${e}`
        }), u),
        [...n.map(([p, m]) => x(p, m)), ...d || []]
      );
    }
  );
  return r.propTypes = {
    color: xn.exports.string,
    size: xn.exports.oneOfType([xn.exports.string, xn.exports.number]),
    stroke: xn.exports.oneOfType([xn.exports.string, xn.exports.number])
  }, r.displayName = `${t}`, r;
}, xb = Dn(
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
), yb = Dn("adjustments", "IconAdjustments", [
  ["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }],
  ["path", { d: "M6 4v4", key: "svg-1" }],
  ["path", { d: "M6 12v8", key: "svg-2" }],
  ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }],
  ["path", { d: "M12 4v10", key: "svg-4" }],
  ["path", { d: "M12 18v2", key: "svg-5" }],
  ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }],
  ["path", { d: "M18 4v1", key: "svg-7" }],
  ["path", { d: "M18 9v11", key: "svg-8" }]
]), d4 = Dn("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), u4 = Dn("click", "IconClick", [
  ["path", { d: "M3 12l3 0", key: "svg-0" }],
  ["path", { d: "M12 3l0 3", key: "svg-1" }],
  ["path", { d: "M7.8 7.8l-2.2 -2.2", key: "svg-2" }],
  ["path", { d: "M16.2 7.8l2.2 -2.2", key: "svg-3" }],
  ["path", { d: "M7.8 16.2l-2.2 2.2", key: "svg-4" }],
  ["path", { d: "M12 12l9 3l-4 2l-2 4l-3 -9", key: "svg-5" }]
]), f4 = Dn("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), p4 = Dn("photo-plus", "IconPhotoPlus", [
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
]), $b = Dn("photo-star", "IconPhotoStar", [
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
]), wb = Dn("search", "IconSearch", [
  ["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }],
  ["path", { d: "M21 21l-6 -6", key: "svg-1" }]
]), m4 = Dn("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]);
const h4 = /* @__PURE__ */ ct(void 0), v4 = { setTheme: (e) => {
}, themes: [] }, g4 = () => {
  var e;
  return (e = He(h4)) !== null && e !== void 0 ? e : v4;
}, b4 = ({ isExpanded: e }) => {
  const [t, n] = Y(!1), { theme: r, setTheme: o } = g4();
  if (G(() => {
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
        /* @__PURE__ */ f.exports.jsx(f4, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(m4, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  );
}, x4 = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ f.exports.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ f.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(b4, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ f.exports.jsx(rp, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(Xx, { className: "dark:text-white", size: 20 }),
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
          /* @__PURE__ */ f.exports.jsx(np, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), _i = G3((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), E8 = ({
  children: e,
  className: t,
  profile: n,
  logout: r,
  theme: o,
  isDrawerSidebar: a
}) => {
  const { isExpanded: s, toggleExpandSidebar: i } = _i();
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
        /* @__PURE__ */ f.exports.jsx(Z3, { isExpanded: s, profile: n }),
        e,
        /* @__PURE__ */ f.exports.jsx(
          x4,
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
}, N8 = ({ children: e }) => {
  const { isExpanded: t } = _i();
  return /* @__PURE__ */ f.exports.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ f.exports.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, _b = ({
  to: e,
  label: t,
  icon: n,
  pathname: r,
  Link: o,
  isBottomNavLink: a
}) => {
  const [s, i] = Y(!1), c = V(null), { isExpanded: l } = _i();
  return G(() => {
    const d = () => {
      const u = c.current.querySelector(
        `#${e.replaceAll("/", "_")}`
      );
      if (u) {
        const p = u.offsetWidth < u.scrollWidth;
        i(p);
      }
    };
    return window.addEventListener("resize", d), d(), () => window.removeEventListener("resize", d);
  }, [e]), o ? /* @__PURE__ */ f.exports.jsx(hr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
    o,
    {
      href: e,
      ref: c,
      className: a ? "cursor-pointer" : `cursor-pointer border-2 border-transparent flex ${l ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-brand-primary/20 hover:dark:bg-brand-primary/10 
        ${r.startsWith(e) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:border-dark dark:bg-brand-primary/10 text-brand-primary"} select-none`,
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
        s && l && /* @__PURE__ */ f.exports.jsxs(vr, { children: [
          /* @__PURE__ */ f.exports.jsx(gr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(Gn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ f.exports.jsx(hr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
    "div",
    {
      ref: c,
      className: a ? "cursor-pointer" : `cursor-pointer border-2 border-transparent flex ${l ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-brand-primary/20 hover:dark:bg-brand-primary/10 
          ${r.startsWith(e) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:border-dark hover:dark:bg-brand-primary/10 text-brand-primary"} select-none`,
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
        s && l && /* @__PURE__ */ f.exports.jsxs(vr, { children: [
          /* @__PURE__ */ f.exports.jsx(gr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(Gn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, Rf = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, i] = Y(!1), c = V(null);
  return G(() => {
    const l = () => {
      const d = c.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (d) {
        const u = d.offsetWidth < d.scrollWidth;
        i(u);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [n]), a ? /* @__PURE__ */ f.exports.jsx(hr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
    a,
    {
      href: n,
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg bg-brand-primary/20 hover:dark:bg-main-hover 
        ${t.startsWith(n) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:border-dark dark:bg-brand-primary/20 text-brand-primary"} select-none`,
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
        s && e && /* @__PURE__ */ f.exports.jsxs(vr, { children: [
          /* @__PURE__ */ f.exports.jsx(gr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(Gn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ f.exports.jsx(hr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
    "div",
    {
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-brand-primary/20 hover:dark:bg-main-hover 
          ${t.startsWith(n) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:border-dark dark:bg-brand-primary/20 text-brand-primary"} select-none`,
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
        s && e && /* @__PURE__ */ f.exports.jsxs(vr, { children: [
          /* @__PURE__ */ f.exports.jsx(gr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(Gn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, y4 = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = Y(!1), [i, c] = Y(!1), { isExpanded: l } = _i(), d = V(null), u = () => c((m) => !m), p = e.replaceAll(" ", "_");
  return G(() => {
    const m = () => {
      const h = d.current.querySelector(`#${p}`);
      if (h) {
        const v = h.offsetWidth < h.scrollWidth;
        s(v);
      }
    };
    return window.addEventListener("resize", m), m(), () => window.removeEventListener("resize", m);
  }, [e]), o ? /* @__PURE__ */ f.exports.jsxs(hr, { delayDuration: 180, children: [
    /* @__PURE__ */ f.exports.jsxs(
      "div",
      {
        ref: d,
        onClick: u,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-brand-primary/20 hover:dark:bg-main-hover select-none`,
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
            a && l && /* @__PURE__ */ f.exports.jsxs(vr, { children: [
              /* @__PURE__ */ f.exports.jsx(gr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ f.exports.jsx(Gn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ f.exports.jsx(ru, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(Do, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ f.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(
      Rf,
      {
        ...m,
        Link: o,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] }) : /* @__PURE__ */ f.exports.jsxs(hr, { delayDuration: 180, children: [
    /* @__PURE__ */ f.exports.jsxs(
      "div",
      {
        ref: d,
        onClick: u,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-brand-primary/20 hover:dark:bg-brand-primary/10 select-none`,
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
            a && l && /* @__PURE__ */ f.exports.jsxs(vr, { children: [
              /* @__PURE__ */ f.exports.jsx(gr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ f.exports.jsx(Gn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ f.exports.jsx(ru, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(Do, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ f.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(
      Rf,
      {
        ...m,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] });
}, or = ct({
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
function $4() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = He(or);
  return /* @__PURE__ */ f.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ f.exports.jsxs(
        hd,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ f.exports.jsx(ii, { className: "h-8 w-[70px]", children: /* @__PURE__ */ f.exports.jsx(vd, { placeholder: e.limit }) }),
            /* @__PURE__ */ f.exports.jsx(ci, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ f.exports.jsx(li, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ f.exports.jsxs(
        Ve,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ f.exports.jsx(vl, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ f.exports.jsx("div", { children: /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ f.exports.jsxs(
        Ve,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: !e.hasNextPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ f.exports.jsx(ao, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const Cb = () => {
  const { columns: e } = He(or);
  return /* @__PURE__ */ f.exports.jsx(Sv, { className: "bg-brand-primary-lighter", children: /* @__PURE__ */ f.exports.jsx(Pa, { children: e.length > 0 && e.map((t, n) => /* @__PURE__ */ f.exports.jsx(Nv, { className: "text-brand-text", children: t.label }, `${t.id}-${n}`)) }) });
}, P8 = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, Oa = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), T8 = { limit: 10, page: 1 }, Af = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), k8 = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], w4 = ({ colSpan: e }) => /* @__PURE__ */ f.exports.jsx(Pa, { children: /* @__PURE__ */ f.exports.jsx(vi, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), _4 = ({
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
    const u = () => {
      const p = o ? o.some(
        (m) => m.id === d.id
      ) : !1;
      if (o.length === a && !p) {
        console.log("NO puedes seleccionar más elementos.");
        return;
      }
      if (p) {
        const m = o.filter(
          (h) => h.id !== d.id
        );
        r(m), i(s - 1);
      } else {
        const m = [
          ...o,
          { ...d, isSelected: !0 }
        ];
        r(m), i(s + 1);
      }
    };
    return l != null && l.render ? /* @__PURE__ */ f.exports.jsx("div", { children: l.render(d) }) : l.id === "select" ? /* @__PURE__ */ f.exports.jsx(
      Ve,
      {
        onClick: () => n(d),
        variant: "outline",
        size: "icon",
        type: "button",
        children: /* @__PURE__ */ f.exports.jsx(u4, { size: 18 })
      }
    ) : l.id === "multi-select" ? /* @__PURE__ */ f.exports.jsx(
      Th,
      {
        className: "border-slate-500 data-[state=checked]:bg-brand-primary-lighter",
        onClick: () => {
          o && u();
        },
        checked: o ? o.some(
          (p) => p.id === d.id
        ) : !1,
        disabled: s === a && !s
      }
    ) : /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: d[l.id] });
  };
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.map((l) => /* @__PURE__ */ f.exports.jsx(Pa, { children: t.map((d) => /* @__PURE__ */ f.exports.jsx(vi, { children: c(d, l) }, Af())) }, Af())) });
}, Sb = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = He(or), [s, i] = Y(
    o ? o.length : 0
  );
  return /* @__PURE__ */ f.exports.jsx(Ev, { children: e.length ? /* @__PURE__ */ f.exports.jsx(
    _4,
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
  ) : /* @__PURE__ */ f.exports.jsx(w4, { colSpan: t.length }) });
}, C4 = () => /* @__PURE__ */ f.exports.jsxs(yd, { children: [
  /* @__PURE__ */ f.exports.jsx(Cb, {}),
  /* @__PURE__ */ f.exports.jsx(Sb, {})
] }), S4 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), E4 = () => /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ f.exports.jsx(S4, {}),
  /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] });
var jf = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = pe(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, Eb = function(e, t) {
  var n = function(o) {
    var a = t.fields[o];
    a && a.ref && "reportValidity" in a.ref ? jf(a.ref, o, e) : a.refs && a.refs.forEach(function(s) {
      return jf(s, o, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, N4 = function(e, t) {
  t.shouldUseNativeValidation && Eb(e, t);
  var n = {};
  for (var r in e) {
    var o = pe(t.fields, r);
    Be(n, r, Object.assign(e[r] || {}, { ref: o && o.ref }));
  }
  return n;
}, P4 = function(e, t) {
  for (var n = {}; e.length; ) {
    var r = e[0], o = r.code, a = r.message, s = r.path.join(".");
    if (!n[s])
      if ("unionErrors" in r) {
        var i = r.unionErrors[0].errors[0];
        n[s] = { message: i.message, type: i.code };
      } else
        n[s] = { message: a, type: o };
    if ("unionErrors" in r && r.unionErrors.forEach(function(d) {
      return d.errors.forEach(function(u) {
        return e.push(u);
      });
    }), t) {
      var c = n[s].types, l = c && c[r.code];
      n[s] = Lm(s, t, n, o, l ? [].concat(l, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, Nb = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, a) {
    try {
      return Promise.resolve(function(s, i) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(l) {
            return a.shouldUseNativeValidation && Eb({}, a), { errors: {}, values: n.raw ? r : l };
          });
        } catch (l) {
          return i(l);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(s) {
        if (function(i) {
          return i.errors != null;
        }(s))
          return { values: {}, errors: N4(P4(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}, je;
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
})(je || (je = {}));
var el;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(el || (el = {}));
const me = je.arrayToEnum([
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
]), Fn = (e) => {
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
}, ae = je.arrayToEnum([
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
]), T4 = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
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
    return JSON.stringify(this.issues, je.jsonStringifyReplacer, 2);
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
const Yo = (e, t) => {
  let n;
  switch (e.code) {
    case ae.invalid_type:
      e.received === me.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case ae.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, je.jsonStringifyReplacer)}`;
      break;
    case ae.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${je.joinValues(e.keys, ", ")}`;
      break;
    case ae.invalid_union:
      n = "Invalid input";
      break;
    case ae.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${je.joinValues(e.options)}`;
      break;
    case ae.invalid_enum_value:
      n = `Invalid enum value. Expected ${je.joinValues(e.options)}, received '${e.received}'`;
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
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : je.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
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
      n = t.defaultError, je.assertNever(e);
  }
  return { message: n };
};
let Pb = Yo;
function k4(e) {
  Pb = e;
}
function Es() {
  return Pb;
}
const Ns = (e) => {
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
}, O4 = [];
function ge(e, t) {
  const n = Ns({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      Es(),
      Yo
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(n);
}
class vt {
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
        return Pe;
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
    return vt.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const o of n) {
      const { key: a, value: s } = o;
      if (a.status === "aborted" || s.status === "aborted")
        return Pe;
      a.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), (typeof s.value < "u" || o.alwaysSet) && (r[a.value] = s.value);
    }
    return { status: t.value, value: r };
  }
}
const Pe = Object.freeze({
  status: "aborted"
}), Tb = (e) => ({ status: "dirty", value: e }), $t = (e) => ({ status: "valid", value: e }), tl = (e) => e.status === "aborted", nl = (e) => e.status === "dirty", Ps = (e) => e.status === "valid", Ts = (e) => typeof Promise < "u" && e instanceof Promise;
var _e;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(_e || (_e = {}));
class cn {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const If = (e, t) => {
  if (Ps(t))
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
function Te(e) {
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
    return Fn(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Fn(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new vt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Fn(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Ts(n))
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
      parsedType: Fn(t)
    }, a = this._parseSync({ data: t, path: o.path, parent: o });
    return If(o, a);
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
      parsedType: Fn(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), a = await (Ts(o) ? o : Promise.resolve(o));
    return If(r, a);
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
    return new Xt({
      schema: this,
      typeName: Ee.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return $n.create(this, this._def);
  }
  nullable() {
    return yr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Yt.create(this, this._def);
  }
  promise() {
    return no.create(this, this._def);
  }
  or(t) {
    return Zo.create([this, t], this._def);
  }
  and(t) {
    return qo.create(this, t, this._def);
  }
  transform(t) {
    return new Xt({
      ...Te(this._def),
      schema: this,
      typeName: Ee.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ta({
      ...Te(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Ee.ZodDefault
    });
  }
  brand() {
    return new Ob({
      typeName: Ee.ZodBranded,
      type: this,
      ...Te(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ds({
      ...Te(this._def),
      innerType: this,
      catchValue: n,
      typeName: Ee.ZodCatch
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
    return Ma.create(this, t);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const M4 = /^c[^\s-]{8,}$/i, D4 = /^[a-z][a-z0-9]*$/, R4 = /[0-9A-HJKMNP-TV-Z]{26}/, A4 = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, j4 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, I4 = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, L4 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, F4 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, V4 = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function U4(e, t) {
  return !!((t === "v4" || !t) && L4.test(e) || (t === "v6" || !t) && F4.test(e));
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
      ), Pe;
    }
    const r = new vt();
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
        j4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "email",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        I4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "emoji",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        A4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "uuid",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        M4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "cuid",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        D4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "cuid2",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        R4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
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
        }), r.dirty()) : a.kind === "datetime" ? V4(a).test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? U4(t.data, a.version) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "ip",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty()) : je.assertNever(a);
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
    typeName: Ee.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Te(e)
  });
};
function W4(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, a = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return a % s / Math.pow(10, o);
}
class Zn extends ke {
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
      }), Pe;
    }
    let r;
    const o = new vt();
    for (const a of this._def.checks)
      a.kind === "int" ? je.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), ge(r, {
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
      }), o.dirty()) : a.kind === "multipleOf" ? W4(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.not_finite,
        message: a.message
      }), o.dirty()) : je.assertNever(a);
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
    return new Zn({
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
    return new Zn({
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && je.isInteger(t.value));
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
Zn.create = (e) => new Zn({
  checks: [],
  typeName: Ee.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Te(e)
});
class qn extends ke {
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
      }), Pe;
    }
    let r;
    const o = new vt();
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
      }), o.dirty()) : je.assertNever(a);
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
    return new qn({
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
    return new qn({
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
qn.create = (e) => {
  var t;
  return new qn({
    checks: [],
    typeName: Ee.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Te(e)
  });
};
class Ho extends ke {
  _parse(t) {
    if (this._def.coerce && (t.data = Boolean(t.data)), this._getType(t) !== me.boolean) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.boolean,
        received: r.parsedType
      }), Pe;
    }
    return $t(t.data);
  }
}
Ho.create = (e) => new Ho({
  typeName: Ee.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Te(e)
});
class br extends ke {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== me.date) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ae.invalid_type,
        expected: me.date,
        received: a.parsedType
      }), Pe;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ae.invalid_date
      }), Pe;
    }
    const r = new vt();
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
      }), r.dirty()) : je.assertNever(a);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new br({
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
br.create = (e) => new br({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: Ee.ZodDate,
  ...Te(e)
});
class ks extends ke {
  _parse(t) {
    if (this._getType(t) !== me.symbol) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.symbol,
        received: r.parsedType
      }), Pe;
    }
    return $t(t.data);
  }
}
ks.create = (e) => new ks({
  typeName: Ee.ZodSymbol,
  ...Te(e)
});
class Ko extends ke {
  _parse(t) {
    if (this._getType(t) !== me.undefined) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.undefined,
        received: r.parsedType
      }), Pe;
    }
    return $t(t.data);
  }
}
Ko.create = (e) => new Ko({
  typeName: Ee.ZodUndefined,
  ...Te(e)
});
class Go extends ke {
  _parse(t) {
    if (this._getType(t) !== me.null) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.null,
        received: r.parsedType
      }), Pe;
    }
    return $t(t.data);
  }
}
Go.create = (e) => new Go({
  typeName: Ee.ZodNull,
  ...Te(e)
});
class to extends ke {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return $t(t.data);
  }
}
to.create = (e) => new to({
  typeName: Ee.ZodAny,
  ...Te(e)
});
class dr extends ke {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return $t(t.data);
  }
}
dr.create = (e) => new dr({
  typeName: Ee.ZodUnknown,
  ...Te(e)
});
class Tn extends ke {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return ge(n, {
      code: ae.invalid_type,
      expected: me.never,
      received: n.parsedType
    }), Pe;
  }
}
Tn.create = (e) => new Tn({
  typeName: Ee.ZodNever,
  ...Te(e)
});
class Os extends ke {
  _parse(t) {
    if (this._getType(t) !== me.undefined) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.void,
        received: r.parsedType
      }), Pe;
    }
    return $t(t.data);
  }
}
Os.create = (e) => new Os({
  typeName: Ee.ZodVoid,
  ...Te(e)
});
class Yt extends ke {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== me.array)
      return ge(n, {
        code: ae.invalid_type,
        expected: me.array,
        received: n.parsedType
      }), Pe;
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
      return Promise.all([...n.data].map((s, i) => o.type._parseAsync(new cn(n, s, n.path, i)))).then((s) => vt.mergeArray(r, s));
    const a = [...n.data].map((s, i) => o.type._parseSync(new cn(n, s, n.path, i)));
    return vt.mergeArray(r, a);
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
  typeName: Ee.ZodArray,
  ...Te(t)
});
function Wr(e) {
  if (e instanceof Je) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = $n.create(Wr(r));
    }
    return new Je({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof Yt ? new Yt({
      ...e._def,
      type: Wr(e.element)
    }) : e instanceof $n ? $n.create(Wr(e.unwrap())) : e instanceof yr ? yr.create(Wr(e.unwrap())) : e instanceof ln ? ln.create(e.items.map((t) => Wr(t))) : e;
}
class Je extends ke {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = je.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== me.object) {
      const l = this._getOrReturnCtx(t);
      return ge(l, {
        code: ae.invalid_type,
        expected: me.object,
        received: l.parsedType
      }), Pe;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: a, keys: s } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof Tn && this._def.unknownKeys === "strip"))
      for (const l in o.data)
        s.includes(l) || i.push(l);
    const c = [];
    for (const l of s) {
      const d = a[l], u = o.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: d._parse(new cn(o, u, o.path, l)),
        alwaysSet: l in o.data
      });
    }
    if (this._def.catchall instanceof Tn) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const d of i)
          c.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: o.data[d] }
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
      for (const d of i) {
        const u = o.data[d];
        c.push({
          key: { status: "valid", value: d },
          value: l._parse(
            new cn(o, u, o.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in o.data
        });
      }
    }
    return o.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const d of c) {
        const u = await d.key;
        l.push({
          key: u,
          value: await d.value,
          alwaysSet: d.alwaysSet
        });
      }
      return l;
    }).then((l) => vt.mergeObjectSync(r, l)) : vt.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return _e.errToObj, new Je({
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
    return new Je({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Je({
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
    return new Je({
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
    return new Je({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: Ee.ZodObject
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
    return new Je({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return je.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new Je({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return je.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new Je({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Wr(this);
  }
  partial(t) {
    const n = {};
    return je.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new Je({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return je.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof $n; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new Je({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return kb(je.objectKeys(this.shape));
  }
}
Je.create = (e, t) => new Je({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Tn.create(),
  typeName: Ee.ZodObject,
  ...Te(t)
});
Je.strictCreate = (e, t) => new Je({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Tn.create(),
  typeName: Ee.ZodObject,
  ...Te(t)
});
Je.lazycreate = (e, t) => new Je({
  shape: e,
  unknownKeys: "strip",
  catchall: Tn.create(),
  typeName: Ee.ZodObject,
  ...Te(t)
});
class Zo extends ke {
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
      }), Pe;
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
      const i = s.map((c) => new Bt(c));
      return ge(n, {
        code: ae.invalid_union,
        unionErrors: i
      }), Pe;
    }
  }
  get options() {
    return this._def.options;
  }
}
Zo.create = (e, t) => new Zo({
  options: e,
  typeName: Ee.ZodUnion,
  ...Te(t)
});
const os = (e) => e instanceof Qo ? os(e.schema) : e instanceof Xt ? os(e.innerType()) : e instanceof Jo ? [e.value] : e instanceof Xn ? e.options : e instanceof ea ? Object.keys(e.enum) : e instanceof ta ? os(e._def.innerType) : e instanceof Ko ? [void 0] : e instanceof Go ? [null] : null;
class Ci extends ke {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== me.object)
      return ge(n, {
        code: ae.invalid_type,
        expected: me.object,
        received: n.parsedType
      }), Pe;
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
    }), Pe);
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
      const s = os(a.shape[t]);
      if (!s)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of s) {
        if (o.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        o.set(i, a);
      }
    }
    return new Ci({
      typeName: Ee.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...Te(r)
    });
  }
}
function rl(e, t) {
  const n = Fn(e), r = Fn(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === me.object && r === me.object) {
    const o = je.objectKeys(t), a = je.objectKeys(e).filter((i) => o.indexOf(i) !== -1), s = { ...e, ...t };
    for (const i of a) {
      const c = rl(e[i], t[i]);
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
      const s = e[a], i = t[a], c = rl(s, i);
      if (!c.valid)
        return { valid: !1 };
      o.push(c.data);
    }
    return { valid: !0, data: o };
  } else
    return n === me.date && r === me.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class qo extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (a, s) => {
      if (tl(a) || tl(s))
        return Pe;
      const i = rl(a.value, s.value);
      return i.valid ? ((nl(a) || nl(s)) && n.dirty(), { status: n.value, value: i.data }) : (ge(r, {
        code: ae.invalid_intersection_types
      }), Pe);
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
qo.create = (e, t, n) => new qo({
  left: e,
  right: t,
  typeName: Ee.ZodIntersection,
  ...Te(n)
});
class ln extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== me.array)
      return ge(r, {
        code: ae.invalid_type,
        expected: me.array,
        received: r.parsedType
      }), Pe;
    if (r.data.length < this._def.items.length)
      return ge(r, {
        code: ae.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Pe;
    !this._def.rest && r.data.length > this._def.items.length && (ge(r, {
      code: ae.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((s, i) => {
      const c = this._def.items[i] || this._def.rest;
      return c ? c._parse(new cn(r, s, r.path, i)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(a).then((s) => vt.mergeArray(n, s)) : vt.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new ln({
      ...this._def,
      rest: t
    });
  }
}
ln.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ln({
    items: e,
    typeName: Ee.ZodTuple,
    rest: null,
    ...Te(t)
  });
};
class Xo extends ke {
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
      }), Pe;
    const o = [], a = this._def.keyType, s = this._def.valueType;
    for (const i in r.data)
      o.push({
        key: a._parse(new cn(r, i, r.path, i)),
        value: s._parse(new cn(r, r.data[i], r.path, i))
      });
    return r.common.async ? vt.mergeObjectAsync(n, o) : vt.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof ke ? new Xo({
      keyType: t,
      valueType: n,
      typeName: Ee.ZodRecord,
      ...Te(r)
    }) : new Xo({
      keyType: Wt.create(),
      valueType: t,
      typeName: Ee.ZodRecord,
      ...Te(n)
    });
  }
}
class Ms extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== me.map)
      return ge(r, {
        code: ae.invalid_type,
        expected: me.map,
        received: r.parsedType
      }), Pe;
    const o = this._def.keyType, a = this._def.valueType, s = [...r.data.entries()].map(([i, c], l) => ({
      key: o._parse(new cn(r, i, r.path, [l, "key"])),
      value: a._parse(new cn(r, c, r.path, [l, "value"]))
    }));
    if (r.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of s) {
          const l = await c.key, d = await c.value;
          if (l.status === "aborted" || d.status === "aborted")
            return Pe;
          (l.status === "dirty" || d.status === "dirty") && n.dirty(), i.set(l.value, d.value);
        }
        return { status: n.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const c of s) {
        const l = c.key, d = c.value;
        if (l.status === "aborted" || d.status === "aborted")
          return Pe;
        (l.status === "dirty" || d.status === "dirty") && n.dirty(), i.set(l.value, d.value);
      }
      return { status: n.value, value: i };
    }
  }
}
Ms.create = (e, t, n) => new Ms({
  valueType: t,
  keyType: e,
  typeName: Ee.ZodMap,
  ...Te(n)
});
class xr extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== me.set)
      return ge(r, {
        code: ae.invalid_type,
        expected: me.set,
        received: r.parsedType
      }), Pe;
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
      for (const d of c) {
        if (d.status === "aborted")
          return Pe;
        d.status === "dirty" && n.dirty(), l.add(d.value);
      }
      return { status: n.value, value: l };
    }
    const i = [...r.data.values()].map((c, l) => a._parse(new cn(r, c, r.path, l)));
    return r.common.async ? Promise.all(i).then((c) => s(c)) : s(i);
  }
  min(t, n) {
    return new xr({
      ...this._def,
      minSize: { value: t, message: _e.toString(n) }
    });
  }
  max(t, n) {
    return new xr({
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
xr.create = (e, t) => new xr({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Ee.ZodSet,
  ...Te(t)
});
class Kr extends ke {
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
      }), Pe;
    function r(i, c) {
      return Ns({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Es(),
          Yo
        ].filter((l) => !!l),
        issueData: {
          code: ae.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function o(i, c) {
      return Ns({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Es(),
          Yo
        ].filter((l) => !!l),
        issueData: {
          code: ae.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, s = n.data;
    return this._def.returns instanceof no ? $t(async (...i) => {
      const c = new Bt([]), l = await this._def.args.parseAsync(i, a).catch((p) => {
        throw c.addIssue(r(i, p)), c;
      }), d = await s(...l);
      return await this._def.returns._def.type.parseAsync(d, a).catch((p) => {
        throw c.addIssue(o(d, p)), c;
      });
    }) : $t((...i) => {
      const c = this._def.args.safeParse(i, a);
      if (!c.success)
        throw new Bt([r(i, c.error)]);
      const l = s(...c.data), d = this._def.returns.safeParse(l, a);
      if (!d.success)
        throw new Bt([o(l, d.error)]);
      return d.data;
    });
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new Kr({
      ...this._def,
      args: ln.create(t).rest(dr.create())
    });
  }
  returns(t) {
    return new Kr({
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
    return new Kr({
      args: t || ln.create([]).rest(dr.create()),
      returns: n || dr.create(),
      typeName: Ee.ZodFunction,
      ...Te(r)
    });
  }
}
class Qo extends ke {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Qo.create = (e, t) => new Qo({
  getter: e,
  typeName: Ee.ZodLazy,
  ...Te(t)
});
class Jo extends ke {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return ge(n, {
        received: n.data,
        code: ae.invalid_literal,
        expected: this._def.value
      }), Pe;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Jo.create = (e, t) => new Jo({
  value: e,
  typeName: Ee.ZodLiteral,
  ...Te(t)
});
function kb(e, t) {
  return new Xn({
    values: e,
    typeName: Ee.ZodEnum,
    ...Te(t)
  });
}
class Xn extends ke {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ge(n, {
        expected: je.joinValues(r),
        received: n.parsedType,
        code: ae.invalid_type
      }), Pe;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ge(n, {
        received: n.data,
        code: ae.invalid_enum_value,
        options: r
      }), Pe;
    }
    return $t(t.data);
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
    return Xn.create(t);
  }
  exclude(t) {
    return Xn.create(this.options.filter((n) => !t.includes(n)));
  }
}
Xn.create = kb;
class ea extends ke {
  _parse(t) {
    const n = je.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== me.string && r.parsedType !== me.number) {
      const o = je.objectValues(n);
      return ge(r, {
        expected: je.joinValues(o),
        received: r.parsedType,
        code: ae.invalid_type
      }), Pe;
    }
    if (n.indexOf(t.data) === -1) {
      const o = je.objectValues(n);
      return ge(r, {
        received: r.data,
        code: ae.invalid_enum_value,
        options: o
      }), Pe;
    }
    return $t(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
ea.create = (e, t) => new ea({
  values: e,
  typeName: Ee.ZodNativeEnum,
  ...Te(t)
});
class no extends ke {
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
      }), Pe;
    const r = n.parsedType === me.promise ? n.data : Promise.resolve(n.data);
    return $t(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
no.create = (e, t) => new no({
  type: e,
  typeName: Ee.ZodPromise,
  ...Te(t)
});
class Xt extends ke {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Ee.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
        return i.status === "aborted" ? Pe : (i.status === "dirty" && n.dirty(), s(i.value), { status: n.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => i.status === "aborted" ? Pe : (i.status === "dirty" && n.dirty(), s(i.value).then(() => ({ status: n.value, value: i.value }))));
    }
    if (o.type === "transform")
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!Ps(s))
          return s;
        const i = o.transform(s.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => Ps(s) ? Promise.resolve(o.transform(s.value, a)).then((i) => ({ status: n.value, value: i })) : s);
    je.assertNever(o);
  }
}
Xt.create = (e, t, n) => new Xt({
  schema: e,
  typeName: Ee.ZodEffects,
  effect: t,
  ...Te(n)
});
Xt.createWithPreprocess = (e, t, n) => new Xt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Ee.ZodEffects,
  ...Te(n)
});
class $n extends ke {
  _parse(t) {
    return this._getType(t) === me.undefined ? $t(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
$n.create = (e, t) => new $n({
  innerType: e,
  typeName: Ee.ZodOptional,
  ...Te(t)
});
class yr extends ke {
  _parse(t) {
    return this._getType(t) === me.null ? $t(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
yr.create = (e, t) => new yr({
  innerType: e,
  typeName: Ee.ZodNullable,
  ...Te(t)
});
class ta extends ke {
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
ta.create = (e, t) => new ta({
  innerType: e,
  typeName: Ee.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Te(t)
});
class Ds extends ke {
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
    return Ts(o) ? o.then((a) => ({
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
Ds.create = (e, t) => new Ds({
  innerType: e,
  typeName: Ee.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Te(t)
});
class Rs extends ke {
  _parse(t) {
    if (this._getType(t) !== me.nan) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.nan,
        received: r.parsedType
      }), Pe;
    }
    return { status: "valid", value: t.data };
  }
}
Rs.create = (e) => new Rs({
  typeName: Ee.ZodNaN,
  ...Te(e)
});
const z4 = Symbol("zod_brand");
class Ob extends ke {
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
class Ma extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? Pe : a.status === "dirty" ? (n.dirty(), Tb(a.value)) : this._def.out._parseAsync({
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
      return o.status === "aborted" ? Pe : o.status === "dirty" ? (n.dirty(), {
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
    return new Ma({
      in: t,
      out: n,
      typeName: Ee.ZodPipeline
    });
  }
}
const Mb = (e, t = {}, n) => e ? to.create().superRefine((r, o) => {
  var a, s;
  if (!e(r)) {
    const i = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (s = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0, l = typeof i == "string" ? { message: i } : i;
    o.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : to.create(), B4 = {
  object: Je.lazycreate
};
var Ee;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline";
})(Ee || (Ee = {}));
const Y4 = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Mb((n) => n instanceof e, t), Db = Wt.create, Rb = Zn.create, H4 = Rs.create, K4 = qn.create, Ab = Ho.create, G4 = br.create, Z4 = ks.create, q4 = Ko.create, X4 = Go.create, Q4 = to.create, J4 = dr.create, e7 = Tn.create, t7 = Os.create, n7 = Yt.create, r7 = Je.create, o7 = Je.strictCreate, a7 = Zo.create, s7 = Ci.create, i7 = qo.create, c7 = ln.create, l7 = Xo.create, d7 = Ms.create, u7 = xr.create, f7 = Kr.create, p7 = Qo.create, m7 = Jo.create, h7 = Xn.create, v7 = ea.create, g7 = no.create, Lf = Xt.create, b7 = $n.create, x7 = yr.create, y7 = Xt.createWithPreprocess, $7 = Ma.create, w7 = () => Db().optional(), _7 = () => Rb().optional(), C7 = () => Ab().optional(), S7 = {
  string: (e) => Wt.create({ ...e, coerce: !0 }),
  number: (e) => Zn.create({ ...e, coerce: !0 }),
  boolean: (e) => Ho.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => qn.create({ ...e, coerce: !0 }),
  date: (e) => br.create({ ...e, coerce: !0 })
}, E7 = Pe;
var As = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Yo,
  setErrorMap: k4,
  getErrorMap: Es,
  makeIssue: Ns,
  EMPTY_PATH: O4,
  addIssueToContext: ge,
  ParseStatus: vt,
  INVALID: Pe,
  DIRTY: Tb,
  OK: $t,
  isAborted: tl,
  isDirty: nl,
  isValid: Ps,
  isAsync: Ts,
  get util() {
    return je;
  },
  get objectUtil() {
    return el;
  },
  ZodParsedType: me,
  getParsedType: Fn,
  ZodType: ke,
  ZodString: Wt,
  ZodNumber: Zn,
  ZodBigInt: qn,
  ZodBoolean: Ho,
  ZodDate: br,
  ZodSymbol: ks,
  ZodUndefined: Ko,
  ZodNull: Go,
  ZodAny: to,
  ZodUnknown: dr,
  ZodNever: Tn,
  ZodVoid: Os,
  ZodArray: Yt,
  ZodObject: Je,
  ZodUnion: Zo,
  ZodDiscriminatedUnion: Ci,
  ZodIntersection: qo,
  ZodTuple: ln,
  ZodRecord: Xo,
  ZodMap: Ms,
  ZodSet: xr,
  ZodFunction: Kr,
  ZodLazy: Qo,
  ZodLiteral: Jo,
  ZodEnum: Xn,
  ZodNativeEnum: ea,
  ZodPromise: no,
  ZodEffects: Xt,
  ZodTransformer: Xt,
  ZodOptional: $n,
  ZodNullable: yr,
  ZodDefault: ta,
  ZodCatch: Ds,
  ZodNaN: Rs,
  BRAND: z4,
  ZodBranded: Ob,
  ZodPipeline: Ma,
  custom: Mb,
  Schema: ke,
  ZodSchema: ke,
  late: B4,
  get ZodFirstPartyTypeKind() {
    return Ee;
  },
  coerce: S7,
  any: Q4,
  array: n7,
  bigint: K4,
  boolean: Ab,
  date: G4,
  discriminatedUnion: s7,
  effect: Lf,
  enum: h7,
  function: f7,
  instanceof: Y4,
  intersection: i7,
  lazy: p7,
  literal: m7,
  map: d7,
  nan: H4,
  nativeEnum: v7,
  never: e7,
  null: X4,
  nullable: x7,
  number: Rb,
  object: r7,
  oboolean: C7,
  onumber: _7,
  optional: b7,
  ostring: w7,
  pipeline: $7,
  preprocess: y7,
  promise: g7,
  record: l7,
  set: u7,
  strictObject: o7,
  string: Db,
  symbol: Z4,
  transformer: Lf,
  tuple: c7,
  undefined: q4,
  union: a7,
  unknown: J4,
  void: t7,
  NEVER: E7,
  ZodIssueCode: ae,
  quotelessJson: T4,
  ZodError: Bt
});
const N7 = () => {
  const { showFilters: e, setShowFilters: t } = He(or);
  return /* @__PURE__ */ f.exports.jsxs(
    Ve,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ f.exports.jsx(xb, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, P7 = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = He(or), l = (d) => {
    c(d);
  };
  return /* @__PURE__ */ f.exports.jsxs(En, { children: [
    /* @__PURE__ */ f.exports.jsx(Nn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Ve, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed", children: [
      n || /* @__PURE__ */ f.exports.jsx(yb, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(_a, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          ht,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ f.exports.jsxs(
          ht,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((d) => d.selected).map((d) => /* @__PURE__ */ f.exports.jsx(
          ht,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: d.label
          },
          d.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ f.exports.jsx(sn, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ f.exports.jsxs(Pn, { children: [
      /* @__PURE__ */ f.exports.jsx(Hn, { placeholder: r }),
      /* @__PURE__ */ f.exports.jsxs(Na, { children: [
        /* @__PURE__ */ f.exports.jsx(Kn, { children: "Sin Resultados" }),
        /* @__PURE__ */ f.exports.jsx(Zt, { children: o.map((d) => /* @__PURE__ */ f.exports.jsxs(
          qt,
          {
            onSelect: () => {
              d.selected ? s(e, d.id, !1) : s(e, d.id, !0);
            },
            children: [
              /* @__PURE__ */ f.exports.jsx(
                "div",
                {
                  className: F(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    d.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ f.exports.jsx(Kt, { className: F("h-4 w-4") })
                }
              ),
              d.icon,
              /* @__PURE__ */ f.exports.jsx("span", { children: d.label })
            ]
          },
          d.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(pi, {}),
          /* @__PURE__ */ f.exports.jsx(Zt, { children: /* @__PURE__ */ f.exports.jsx(
            qt,
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
}, T7 = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ f.exports.jsxs(En, { children: [
  /* @__PURE__ */ f.exports.jsx(Nn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Ve, { variant: "outline", size: "sm", className: "py-5 border-dashed", type: "button", children: [
    /* @__PURE__ */ f.exports.jsx(gl, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    o && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
      /* @__PURE__ */ f.exports.jsx(_a, { orientation: "vertical", className: "mx-2 h-4" }),
      /* @__PURE__ */ f.exports.jsx(
        ht,
        {
          variant: "secondary",
          className: "rounded-sm px-1 font-normal",
          children: o
        }
      )
    ] })
  ] }) }),
  /* @__PURE__ */ f.exports.jsxs(sn, { className: "w-fit p-4", align: "start", children: [
    /* @__PURE__ */ f.exports.jsxs(fn, { htmlFor: e, children: [
      "Buscar ",
      n
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      ud,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), k7 = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c },
    isFormatedUpperQueries: l
  } = He(or), d = e.watch(n.map((p) => p.id)), u = () => {
    var m;
    a();
    const p = [];
    (m = Object.entries(e == null ? void 0 : e.getValues())) == null || m.forEach((h) => {
      h[1] && p.push({
        field: l ? Oa(h[0]) : h[0],
        text: h[1]
      });
    }), s({ queries: p, filters: [], limit: c, page: i });
  };
  return /* @__PURE__ */ f.exports.jsx("div", { className: "w-10/12 flex items-center justify-between", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-col items-start gap-x-2 gap-y-2", children: [
    /* @__PURE__ */ f.exports.jsx(
      "form",
      {
        onSubmit: e.handleSubmit(t),
        className: "w-full flex justify-start items-center sm:mr-4",
        children: /* @__PURE__ */ f.exports.jsx("section", { className: "mr-3 flex justify-start items-center gap-x-3", children: n.map((p, m) => /* @__PURE__ */ f.exports.jsx(
          T7,
          {
            queryText: d[m],
            label: p.label,
            id: p.id,
            form: e
          },
          p.id
        )) })
      }
    ),
    r != null && r.length ? /* @__PURE__ */ f.exports.jsxs("div", { className: "w-auto h-full flex flex-wrap gap-x-3 gap-y-2 justify-start items-center", children: [
      /* @__PURE__ */ f.exports.jsx(N7, {}),
      o && r && r.map((p) => /* @__PURE__ */ f.exports.jsx(
        P7,
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
        Ve,
        {
          type: "button",
          variant: "ghost",
          onClick: u,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ f.exports.jsx(zs, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, O7 = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i,
    isFormatedUpperQueries: c
  } = He(or), l = Ym({
    defaultValues: n.reduce((u, p) => (u[p.id] = "", u), {}),
    resolver: Nb(
      As.object(
        n.reduce((u, p) => (u[p.id] = As.string().optional(), u), {})
      )
    )
  }), d = async (u) => {
    var h;
    console.log({ data: u });
    const p = r(), m = [];
    (h = Object.entries(u)) == null || h.forEach((v) => {
      v[1] && m.push({
        field: c ? Oa(v[0]) : v[0],
        text: v[1]
      });
    }), console.log("queries formatted ", m), e({ queries: m, filters: p, limit: s, page: a });
  };
  return G(() => i(l), [l]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ f.exports.jsx("div", {}) : /* @__PURE__ */ f.exports.jsx(Km, { ...l, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ f.exports.jsx(k7, { form: l, onSubmit: d }) : /* @__PURE__ */ f.exports.jsx("div", {}),
    /* @__PURE__ */ f.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ f.exports.jsx(
      Ve,
      {
        type: "submit",
        onClick: l.handleSubmit(d),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap",
        children: t ? /* @__PURE__ */ f.exports.jsx(hl, {}) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(wb, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, M7 = () => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), D7 = () => /* @__PURE__ */ f.exports.jsxs(yd, { children: [
  /* @__PURE__ */ f.exports.jsx(Cb, {}),
  /* @__PURE__ */ f.exports.jsx(Sb, {})
] }), R7 = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function O8(e) {
  const [t, n] = Y([]), [r, o] = Y([]), [a, s] = Y([]), [i, c] = Y(!1), [l, d] = Y(e == null ? void 0 : e.error), [u, p] = Y(e == null ? void 0 : e.loading), [m, h] = Y(), [v, g] = Y(
    (e == null ? void 0 : e.pagination) ?? R7
  ), [b, y] = Y(
    (e == null ? void 0 : e.columns) || []
  ), $ = ue(
    (O) => e.onSubmitTable({ ...O }),
    [e]
  ), _ = ue(
    (O) => {
      var B;
      g(O);
      const A = m.getValues(), j = [];
      (B = Object.entries(A)) == null || B.forEach((M) => {
        M[1] && j.push({
          field: e.isFormatedUpperQueries ? Oa(M[0]) : M[0],
          text: M[1]
        });
      });
      const W = r.map((M) => ({
        id: M.id,
        label: M.label,
        options: M.options.filter((D) => D.selected).map((D) => D.value)
      })).filter((M) => M.options.length > 0);
      $({
        filters: W,
        queries: j,
        limit: O.limit,
        page: O.page
      });
    },
    [r, $, m]
  ), w = ue(() => {
    _({ ...v, page: v.page + 1 });
  }, [v, _]), P = ue(() => {
    v.page > 1 && _({ ...v, page: v.page - 1 });
  }, [v, _]), k = () => r.map((O) => ({
    id: O.id,
    label: O.label,
    options: O.options.filter((A) => A.selected).map((A) => A.value)
  })).filter((O) => O.options.length > 0), L = (O) => {
    const A = r.find((j) => j.id === O);
    return A ? A.options.filter((W) => W.selected).map((W) => W.value) : [];
  }, I = (O, A, j) => {
    const W = r.map((B) => B.id === O ? {
      ...B,
      options: B.options.map((M) => M.id === A ? { ...M, selected: j } : M)
    } : B);
    o(W);
  }, ee = () => r, te = (O) => {
    const A = r.map((j) => j.id === O ? {
      ...j,
      options: j.options.map((W) => ({
        ...W,
        selected: !1
      }))
    } : j);
    o(A);
  }, K = (O) => _({ ...v, limit: O }), Z = () => {
    const O = r.map((A) => ({
      ...A,
      options: A.options.map((j) => ({ ...j, selected: !1 }))
    }));
    o(O);
  };
  return G(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), G(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), G(() => d((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), G(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), G(() => y((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), G(() => {
    const O = b.filter((A) => A.isQuery).map((A) => ({
      id: A.id,
      label: A.label
    }));
    s(O);
  }, [b]), G(() => {
    const O = (j) => (j == null ? void 0 : j.filters) && (j == null ? void 0 : j.filters.length), A = b.filter(O).map((j) => {
      const W = j.filters.map((M) => ({
        ...M,
        selected: !1
      }));
      return {
        ...j,
        id: j.id,
        options: W
      };
    });
    o(A);
  }, [b]), G(() => {
    e != null && e.filters && (e == null || e.filters.forEach((O) => {
      O != null && O.filters && b.forEach((A) => {
        O.id === A.id && o((j) => j.some((B) => B.id === O.id) ? j : [
          ...j,
          {
            id: A.id,
            label: A.label,
            options: O.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), G(() => {
    g((O) => {
      var A, j;
      return {
        ...O,
        hasNextPage: (A = e == null ? void 0 : e.pagination) == null ? void 0 : A.hasNextPage,
        hasPrevPage: (j = e == null ? void 0 : e.pagination) == null ? void 0 : j.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ f.exports.jsx(
    or.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: w,
        prevPage: P,
        searchForm: m,
        isFormatedUpperQueries: e.isFormatedUpperQueries,
        updateLimit: K,
        showFilters: i,
        resetFilters: Z,
        getGlobalFilters: ee,
        selectOptionFilter: I,
        resetOptionsByFilter: te,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: $,
        getFilterOptionsSelectedById: L,
        getFiltersWithOptionsSelected: k,
        setSelectItem: e.setSelectItem,
        setShowFilters: (O) => c(O),
        setSearchForm: (O) => h(O)
      },
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ f.exports.jsx(O7, { onSubmitTable: $, loading: u }),
        /* @__PURE__ */ f.exports.jsxs("div", { className: "rounded-md border overflow-clip", children: [
          u && /* @__PURE__ */ f.exports.jsx(E4, {}),
          !u && l && /* @__PURE__ */ f.exports.jsx(M7, {}),
          !u && !l && !t && /* @__PURE__ */ f.exports.jsx(D7, {}),
          !u && !l && t && /* @__PURE__ */ f.exports.jsx(C4, {})
        ] }),
        !u && !l && t && /* @__PURE__ */ f.exports.jsx($4, {})
      ] })
    }
  );
}
const M8 = ({
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
  disabled: u
}) => /* @__PURE__ */ f.exports.jsx(
  Nr,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: p, formState: m }) => {
      var h;
      return /* @__PURE__ */ f.exports.jsxs(nr, { className: F("w-full", c), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ f.exports.jsxs(Pr, { className: "flex", children: [
            t,
            " "
          ] }),
          ((h = m == null ? void 0 : m.errors[e]) == null ? void 0 : h.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            m.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(lo, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsxs(hd, { onValueChange: p.onChange, defaultValue: p.value, disabled: u, children: [
          /* @__PURE__ */ f.exports.jsx(va, { children: /* @__PURE__ */ f.exports.jsx(ii, { disabled: u, tabIndex: i, className: F("w-full", l), children: /* @__PURE__ */ f.exports.jsx(vd, { placeholder: r }) }) }),
          /* @__PURE__ */ f.exports.jsx(ci, { children: /* @__PURE__ */ f.exports.jsx(TS, { className: F("overflow-auto", d), children: a.map((v) => {
            var g, b;
            return /* @__PURE__ */ f.exports.jsx(li, { value: (g = v.value) == null ? void 0 : g.toString(), children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-center items-center", children: [
              (v == null ? void 0 : v.icon) && /* @__PURE__ */ f.exports.jsx("div", { className: "dark:text-white mr-2 h-5", children: v.icon }),
              v.label
            ] }) }, (b = v.value) == null ? void 0 : b.toString());
          }) }) })
        ] })
      ] });
    }
  }
);
function Si() {
  return (Si = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function jb(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function ol(e) {
  var t = V(e), n = V(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var na = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, ko = function(e) {
  return "touches" in e;
}, al = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, Ff = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = ko(t) ? function(a, s) {
    for (var i = 0; i < a.length; i++)
      if (a[i].identifier === s)
        return a[i];
    return a[0];
  }(t.touches, n) : t;
  return { left: na((o.pageX - (r.left + al(e).pageXOffset)) / r.width), top: na((o.pageY - (r.top + al(e).pageYOffset)) / r.height) };
}, Vf = function(e) {
  !ko(e) && e.preventDefault();
}, Ib = N.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = jb(e, ["onMove", "onKey"]), o = V(null), a = ol(t), s = ol(n), i = V(null), c = V(!1), l = yt(function() {
    var m = function(g) {
      Vf(g), (ko(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(Ff(o.current, g, i.current)) : v(!1);
    }, h = function() {
      return v(!1);
    };
    function v(g) {
      var b = c.current, y = al(o.current), $ = g ? y.addEventListener : y.removeEventListener;
      $(b ? "touchmove" : "mousemove", m), $(b ? "touchend" : "mouseup", h);
    }
    return [function(g) {
      var b = g.nativeEvent, y = o.current;
      if (y && (Vf(b), !function(_, w) {
        return w && !ko(_);
      }(b, c.current) && y)) {
        if (ko(b)) {
          c.current = !0;
          var $ = b.changedTouches || [];
          $.length && (i.current = $[0].identifier);
        }
        y.focus(), a(Ff(y, b, i.current)), v(!0);
      }
    }, function(g) {
      var b = g.which || g.keyCode;
      b < 37 || b > 40 || (g.preventDefault(), s({ left: b === 39 ? 0.05 : b === 37 ? -0.05 : 0, top: b === 40 ? 0.05 : b === 38 ? -0.05 : 0 }));
    }, v];
  }, [s, a]), d = l[0], u = l[1], p = l[2];
  return G(function() {
    return p;
  }, [p]), N.createElement("div", Si({}, r, { onTouchStart: d, onMouseDown: d, className: "react-colorful__interactive", ref: o, onKeyDown: u, tabIndex: 0, role: "slider" }));
}), Vd = function(e) {
  return e.filter(Boolean).join(" ");
}, Lb = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = Vd(["react-colorful__pointer", e.className]);
  return N.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, N.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, ft = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, A7 = function(e) {
  return V7(sl(e));
}, sl = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? ft(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? ft(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, j7 = function(e) {
  return F7(L7(e));
}, I7 = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: ft(e.h), s: ft(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: ft(o / 2), a: ft(r, 2) };
}, il = function(e) {
  var t = I7(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, L7 = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: ft(255 * [r, i, s, s, c, r][l]), g: ft(255 * [c, r, r, i, s, s][l]), b: ft(255 * [s, s, c, r, r, i][l]), a: ft(o, 2) };
}, Xa = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, F7 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? Xa(ft(255 * o)) : "";
  return "#" + Xa(t) + Xa(n) + Xa(r) + a;
}, V7 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: ft(60 * (i < 0 ? i + 6 : i)), s: ft(a ? s / a * 100 : 0), v: ft(a / 255 * 100), a: o };
}, U7 = N.memo(function(e) {
  var t = e.hue, n = e.onChange, r = Vd(["react-colorful__hue", e.className]);
  return N.createElement("div", { className: r }, N.createElement(Ib, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: na(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": ft(t), "aria-valuemax": "360", "aria-valuemin": "0" }, N.createElement(Lb, { className: "react-colorful__hue-pointer", left: t / 360, color: il({ h: t, s: 100, v: 100, a: 1 }) })));
}), W7 = N.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: il({ h: t.h, s: 100, v: 100, a: 1 }) };
  return N.createElement("div", { className: "react-colorful__saturation", style: r }, N.createElement(Ib, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: na(t.s + 100 * o.left, 0, 100), v: na(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + ft(t.s) + "%, Brightness " + ft(t.v) + "%" }, N.createElement(Lb, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: il(t) })));
}), Fb = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, z7 = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || Fb(sl(e), sl(t));
};
function B7(e, t, n) {
  var r = ol(n), o = Y(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], i = V({ color: t, hsva: a });
  G(function() {
    if (!e.equal(t, i.current.color)) {
      var l = e.toHsva(t);
      i.current = { hsva: l, color: t }, s(l);
    }
  }, [t, e]), G(function() {
    var l;
    Fb(a, i.current.hsva) || e.equal(l = e.fromHsva(a), i.current.color) || (i.current = { hsva: a, color: l }, r(l));
  }, [a, e, r]);
  var c = ue(function(l) {
    s(function(d) {
      return Object.assign({}, d, l);
    });
  }, []);
  return [a, c];
}
var Y7 = typeof window < "u" ? Ls : G, H7 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Uf = /* @__PURE__ */ new Map(), K7 = function(e) {
  Y7(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !Uf.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Uf.set(t, n);
      var r = H7();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, G7 = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = jb(e, ["className", "colorModel", "color", "onChange"]), i = V(null);
  K7(i);
  var c = B7(n, o, a), l = c[0], d = c[1], u = Vd(["react-colorful", t]);
  return N.createElement("div", Si({}, s, { ref: i, className: u }), N.createElement(W7, { hsva: l, onChange: d }), N.createElement(U7, { hue: l.h, onChange: d, className: "react-colorful__last-control" }));
}, Z7 = { defaultColor: "000", toHsva: A7, fromHsva: function(e) {
  return j7({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: z7 }, q7 = function(e) {
  return N.createElement(G7, Si({}, e, { colorModel: Z7 }));
};
const D8 = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ f.exports.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ f.exports.jsx(q7, { color: e, onChange: t }),
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
function X7(e, t, n) {
  var r = Y([]), o = r[0], a = r[1], s = V([]), i = ue(function(u, p) {
    var m = e(u, p), h = m[0], v = m[1];
    return a(function(g) {
      return [].concat(v.reverse(), g);
    }), h;
  }, [e]), c = Fs(i, n), l = c[0], d = c[1];
  return G(function() {
    var u = o.pop();
    if (u) {
      var p = t(u, d);
      p && s.current.push(p), a([].concat(o));
    }
  }, [o, t]), G(function() {
    return function() {
      s.current.forEach(function(u) {
        u();
      });
    };
  }, []), [l, d];
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
function Q7(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Ei = {
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
  Ei[111 + xt] = "F" + xt;
for (xt = 65; xt < 91; xt += 1) {
  var Wf = /* @__PURE__ */ String.fromCharCode(xt);
  Ei[xt] = [/* @__PURE__ */ Wf.toLowerCase(), /* @__PURE__ */ Wf.toUpperCase()];
}
for (xt = 96; xt < 106; xt += 1)
  Ei[xt] = /* @__PURE__ */ String.fromCharCode(xt - 48);
function J7(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = Ei[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var ek = {
  getKey: J7
};
function Qa() {
}
function Vb(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function tk(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var nk = ["refs"], vc = [], rk = ["autoFocus", "length", "validate", "format", "debug"], ok = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], ak = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], sk = {
  ref: {
    current: []
  },
  length: 5,
  validate: /^[a-zA-Z0-9]$/,
  format: function(t) {
    return t;
  },
  onResolveKey: Qa,
  onRejectKey: Qa,
  onChange: Qa,
  onComplete: Qa,
  debug: !1
};
function ik(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: ck(e.validate),
    fallback: null
  };
}
function Ub(e) {
  return Math.max(0, e - 1);
}
function cl(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function ck(e) {
  return function(t) {
    return !t || t.length > 1 ? !1 : typeof e == "string" ? e.split("").includes(t) : e instanceof Array ? e.includes(t) : e instanceof RegExp ? e.test(t) : e(t);
  };
}
function zf(e, t, n) {
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
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = cl(o + e.focusIdx - 1, e.codeLength), s = Vb(0, o).flatMap(function(i) {
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
var lk = function(t, n) {
  switch (n.type) {
    case "handle-key-down":
      switch (n.key) {
        case "Unidentified":
          return [Vt({}, t, {
            fallback: {
              idx: t.focusIdx,
              val: n.val
            }
          }), vc];
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
          var r = Ub(t.focusIdx);
          return [Vt({}, t, {
            focusIdx: r
          }), [{
            type: "focus-input",
            idx: r
          }]];
        }
        case "ArrowRight": {
          var o = cl(t.focusIdx, t.codeLength);
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
          var a = cl(t.focusIdx, t.codeLength);
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
        return [t, vc];
      var s = Vt({}, t, {
        fallback: null
      }), i = [], c = t.fallback, l = c.idx, d = c.val, u = n.val;
      if (d === "" && u === "")
        i.push({
          type: "handle-delete",
          idx: l
        }, {
          type: "handle-code-change"
        });
      else if (d === "" && u !== "")
        return zf(s, l, u);
      return [s, i];
    }
    case "handle-paste":
      return zf(t, n.idx, n.val);
    case "focus-input":
      return [Vt({}, t, {
        focusIdx: n.idx
      }), [{
        type: "focus-input",
        idx: n.idx
      }]];
    default:
      return [t, vc];
  }
};
function dk(e) {
  var t = e.refs, n = Q7(e, nk);
  return ue(function(r) {
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
          var s = Ub(r.idx);
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
var uk = /* @__PURE__ */ R(function(e, t) {
  var n = Vt({}, sk, e), r = n.autoFocus, o = n.length, a = tk([].concat(rk, ok), n), s = V([]), i = dk(Vt({
    refs: s
  }, n)), c = X7(lk, i, ik(n))[1];
  ux(t, function() {
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
  function d(v) {
    return function(g) {
      var b = ek.getKey(g.nativeEvent);
      !ak.includes(b) && !g.ctrlKey && !g.altKey && !g.metaKey && g.nativeEvent.target instanceof HTMLInputElement && (g.preventDefault(), c({
        type: "handle-key-down",
        idx: v,
        key: b,
        val: g.nativeEvent.target.value
      }));
    };
  }
  function u(v) {
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
  return N.createElement(N.Fragment, null, Vb(0, o).map(function(v) {
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
      onKeyDown: d(v),
      onKeyUp: u(v),
      onPaste: p(v)
    }));
  }));
});
const R8 = ({ onComplete: e, mode: t, length: n, disabled: r, tabIndex: o, autoFocus: a, containerClassName: s, className: i, ...c }) => {
  const [l] = N.useState(!1);
  return /* @__PURE__ */ f.exports.jsx("div", { className: F("pin-field-container", s), children: /* @__PURE__ */ f.exports.jsx(
    uk,
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
var Wb = {}, Ud = {};
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
})(Ud);
var zb = {}, wn = {};
Object.defineProperty(wn, "__esModule", { value: !0 });
wn.DEFAULT_DATA_URL_KEY = wn.INIT_MAX_NUMBER = wn.DEFAULT_NULL_INDEX = void 0;
wn.DEFAULT_NULL_INDEX = -1;
wn.INIT_MAX_NUMBER = 1e3;
wn.DEFAULT_DATA_URL_KEY = "dataURL";
(function(e) {
  var t = it && it.__awaiter || function(a, s, i, c) {
    function l(d) {
      return d instanceof i ? d : new i(function(u) {
        u(d);
      });
    }
    return new (i || (i = Promise))(function(d, u) {
      function p(v) {
        try {
          h(c.next(v));
        } catch (g) {
          u(g);
        }
      }
      function m(v) {
        try {
          h(c.throw(v));
        } catch (g) {
          u(g);
        }
      }
      function h(v) {
        v.done ? d(v.value) : l(v.value).then(p, m);
      }
      h((c = c.apply(a, s || [])).next());
    });
  }, n = it && it.__generator || function(a, s) {
    var i = { label: 0, sent: function() {
      if (d[0] & 1)
        throw d[1];
      return d[1];
    }, trys: [], ops: [] }, c, l, d, u;
    return u = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
      return this;
    }), u;
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
          if (c = 1, l && (d = h[0] & 2 ? l.return : h[0] ? l.throw || ((d = l.return) && d.call(l), 0) : l.next) && !(d = d.call(l, h[1])).done)
            return d;
          switch (l = 0, d && (h = [h[0] & 2, d.value]), h[0]) {
            case 0:
            case 1:
              d = h;
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
              if (d = i.trys, !(d = d.length > 0 && d[d.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                i = 0;
                continue;
              }
              if (h[0] === 3 && (!d || h[1] > d[0] && h[1] < d[3])) {
                i.label = h[1];
                break;
              }
              if (h[0] === 6 && i.label < d[1]) {
                i.label = d[1], d = h;
                break;
              }
              if (d && i.label < d[2]) {
                i.label = d[2], i.ops.push(h);
                break;
              }
              d[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          h = s.call(a, i);
        } catch (v) {
          h = [6, v], l = 0;
        } finally {
          c = d = 0;
        }
      if (h[0] & 5)
        throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getErrorValidation = e.isMaxNumberValid = e.isAcceptTypeValid = e.isMaxFileSizeValid = e.isImageValid = e.isResolutionValid = void 0;
  var r = wn, o = Ud;
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
    var s = a.fileList, i = a.value, c = a.maxNumber, l = a.keyUpdate, d = a.acceptType, u = a.maxFileSize, p = a.resolutionType, m = a.resolutionWidth, h = a.resolutionHeight, v = a.allowNonImageType;
    return t(void 0, void 0, void 0, function() {
      var g, b, y, $, _;
      return n(this, function(w) {
        switch (w.label) {
          case 0:
            return g = {}, e.isMaxNumberValid(s.length + i.length, c, l) ? [3, 1] : (g.maxNumber = !0, [3, 5]);
          case 1:
            b = 0, w.label = 2;
          case 2:
            return b < s.length ? (y = s[b].file, y ? !v && !e.isImageValid(y.type) ? (g.acceptType = !0, [3, 5]) : e.isAcceptTypeValid(d, y.name) ? e.isMaxFileSizeValid(y.size, u) ? p ? [4, o.getImage(y)] : [3, 4] : (g.maxFileSize = !0, [3, 5]) : (g.acceptType = !0, [3, 5]) : [3, 4]) : [3, 5];
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
})(zb);
var ll = it && it.__assign || function() {
  return ll = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ll.apply(this, arguments);
}, fk = it && it.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), pk = it && it.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), mk = it && it.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && fk(t, e, n);
  return pk(t, e), t;
}, gc = it && it.__awaiter || function(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function i(d) {
      try {
        l(r.next(d));
      } catch (u) {
        s(u);
      }
    }
    function c(d) {
      try {
        l(r.throw(d));
      } catch (u) {
        s(u);
      }
    }
    function l(d) {
      d.done ? a(d.value) : o(d.value).then(i, c);
    }
    l((r = r.apply(e, t || [])).next());
  });
}, bc = it && it.__generator || function(e, t) {
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
}, xc = it && it.__spreadArrays || function() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), o = 0, t = 0; t < n; t++)
    for (var a = arguments[t], s = 0, i = a.length; s < i; s++, o++)
      r[o] = a[s];
  return r;
};
Object.defineProperty(Wb, "__esModule", { value: !0 });
var Ft = mk(N), yc = Ud, hk = zb, jn = wn, vk = function(e) {
  var t = e.value, n = t === void 0 ? [] : t, r = e.onChange, o = e.onError, a = e.children, s = e.dataURLKey, i = s === void 0 ? jn.DEFAULT_DATA_URL_KEY : s, c = e.multiple, l = c === void 0 ? !1 : c, d = e.maxNumber, u = d === void 0 ? jn.INIT_MAX_NUMBER : d, p = e.acceptType, m = e.maxFileSize, h = e.resolutionWidth, v = e.resolutionHeight, g = e.resolutionType, b = e.inputProps, y = b === void 0 ? {} : b, $ = e.allowNonImageType, _ = $ === void 0 ? !1 : $, w = n || [], P = Ft.useRef(null), k = Ft.useState(jn.DEFAULT_NULL_INDEX), L = k[0], I = k[1], ee = Ft.useState(null), te = ee[0], K = ee[1], Z = Ft.useState(!1), O = Z[0], A = Z[1], j = Ft.useCallback(function() {
    return yc.openFileDialog(P);
  }, [
    P
  ]), W = Ft.useCallback(function() {
    I(jn.DEFAULT_NULL_INDEX), j();
  }, [j]), B = Ft.useCallback(function() {
    r == null || r([]);
  }, [r]), M = function(J) {
    var ve = xc(w);
    Array.isArray(J) ? J.forEach(function(Q) {
      ve.splice(Q, 1);
    }) : ve.splice(J, 1), r == null || r(ve);
  }, D = function(J) {
    I(J), j();
  }, U = function(J) {
    return gc(void 0, void 0, void 0, function() {
      var ve;
      return bc(this, function(Q) {
        switch (Q.label) {
          case 0:
            return [4, hk.getErrorValidation({
              fileList: J,
              maxFileSize: m,
              maxNumber: u,
              acceptType: p,
              keyUpdate: L,
              resolutionType: g,
              resolutionWidth: h,
              resolutionHeight: v,
              value: w,
              allowNonImageType: _
            })];
          case 1:
            return ve = Q.sent(), ve ? (K(ve), o == null || o(ve, J), [2, !1]) : (te && K(null), [2, !0]);
        }
      });
    });
  }, q = function(J) {
    return gc(void 0, void 0, void 0, function() {
      var ve, Q, Re, Ue, dt, T;
      return bc(this, function(z) {
        switch (z.label) {
          case 0:
            return J ? [4, yc.getListFiles(J, i)] : [
              2
              /*return*/
            ];
          case 1:
            return ve = z.sent(), ve.length ? [4, U(ve)] : [
              2
              /*return*/
            ];
          case 2:
            if (Q = z.sent(), !Q)
              return [
                2
                /*return*/
              ];
            if (Ue = [], L > jn.DEFAULT_NULL_INDEX)
              dt = ve[0], Re = xc(w), Re[L] = dt, Ue.push(L);
            else if (l)
              for (Re = xc(w, ve), T = w.length; T < Re.length; T += 1)
                Ue.push(T);
            else
              Re = [ve[0]], Ue.push(0);
            return r == null || r(Re, Ue), [
              2
              /*return*/
            ];
        }
      });
    });
  }, oe = function(J) {
    return gc(void 0, void 0, void 0, function() {
      return bc(this, function(ve) {
        switch (ve.label) {
          case 0:
            return [4, q(J.target.files)];
          case 1:
            return ve.sent(), L > jn.DEFAULT_NULL_INDEX && I(jn.DEFAULT_NULL_INDEX), P.current && (P.current.value = ""), [
              2
              /*return*/
            ];
        }
      });
    });
  }, ce = Ft.useMemo(function() {
    return yc.getAcceptTypeString(p, _);
  }, [p, _]), ye = function(J) {
    J.preventDefault(), J.stopPropagation();
  }, be = function(J) {
    J.preventDefault(), J.stopPropagation(), J.dataTransfer.items && J.dataTransfer.items.length > 0 && A(!0);
  }, ne = function(J) {
    J.preventDefault(), J.stopPropagation(), A(!1);
  }, le = function(J) {
    J.preventDefault(), J.stopPropagation(), A(!1), J.dataTransfer.files && J.dataTransfer.files.length > 0 && q(J.dataTransfer.files);
  }, he = function(J) {
    J.preventDefault(), J.stopPropagation(), J.dataTransfer.clearData();
  };
  return Ft.default.createElement(
    Ft.default.Fragment,
    null,
    Ft.default.createElement("input", ll({ type: "file", accept: ce, ref: P, multiple: l && L === jn.DEFAULT_NULL_INDEX, onChange: oe, style: { display: "none" } }, y)),
    a == null ? void 0 : a({
      imageList: w,
      onImageUpload: W,
      onImageRemoveAll: B,
      onImageUpdate: D,
      onImageRemove: M,
      errors: te,
      dragProps: {
        onDrop: le,
        onDragEnter: be,
        onDragLeave: ne,
        onDragOver: ye,
        onDragStart: he
      },
      isDragging: O
    })
  );
}, Bb = Wb.default = vk;
const gk = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, Yb = ({
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
      const d = gk(l == null ? void 0 : l.toString(), t.name);
      c({ data_url: l, file: d });
    },
    i
  );
}), bk = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsxs(_r, { className: F("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(Wn, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(Cr, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(Ws, {}) })
] });
function xk() {
  return N.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-unzoom-icon": !0, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    N.createElement("path", { d: "M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z" })
  );
}
function yk() {
  return N.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-zoom-icon": !0, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    N.createElement("path", { d: "M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z" })
  );
}
const js = (e, t) => {
  var n, r;
  return e === ((r = (n = t == null ? void 0 : t.tagName) == null ? void 0 : n.toUpperCase) == null ? void 0 : r.call(n));
}, Wd = (e) => js("DIV", e) || js("SPAN", e), Is = (e) => js("IMG", e), Bf = (e) => e.complete && e.naturalHeight !== 0, dl = (e) => js("SVG", e), Hb = ({ height: e, offset: t, width: n }) => Math.min((window.innerWidth - t * 2) / n, (window.innerHeight - t * 2) / e), $k = ({ containerHeight: e, containerWidth: t, offset: n, targetHeight: r, targetWidth: o }) => {
  const a = Hb({
    height: r,
    offset: n,
    width: o
  }), s = o > r ? o / t : r / e;
  return a > 1 ? s : a * s;
}, ur = ({ containerHeight: e, containerWidth: t, hasScalableSrc: n, offset: r, targetHeight: o, targetWidth: a }) => !e || !t ? 1 : !n && o && a ? $k({
  containerHeight: e,
  containerWidth: t,
  offset: r,
  targetHeight: o,
  targetWidth: a
}) : Hb({
  height: e,
  offset: r,
  width: t
}), wk = /url(?:\(['"]?)(.*?)(?:['"]?\))/, Yf = (e) => {
  var t;
  if (e) {
    if (Is(e))
      return e.currentSrc;
    if (Wd(e)) {
      const n = window.getComputedStyle(e).backgroundImage;
      if (n)
        return (t = wk.exec(n)) == null ? void 0 : t[1];
    }
  }
}, _k = (e) => {
  if (e)
    return Is(e) ? e.alt ?? void 0 : e.getAttribute("aria-label") ?? void 0;
}, Ck = ({ containerHeight: e, containerLeft: t, containerTop: n, containerWidth: r, hasScalableSrc: o, offset: a, targetHeight: s, targetWidth: i }) => {
  const c = ur({
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
}, Rt = ({ position: e, relativeNum: t }) => {
  const n = parseFloat(e);
  return e.endsWith("%") ? t * n / 100 : n;
}, Sk = ({ containerHeight: e, containerLeft: t, containerTop: n, containerWidth: r, hasScalableSrc: o, objectFit: a, objectPosition: s, offset: i, targetHeight: c, targetWidth: l }) => {
  if (a === "scale-down" && (l <= r && c <= e ? a = "none" : a = "contain"), a === "cover" || a === "contain") {
    const d = r / l, u = e / c, p = a === "cover" ? Math.max(d, u) : Math.min(d, u), [m = "50%", h = "50%"] = s.split(" "), v = Rt({ position: m, relativeNum: r - l * p }), g = Rt({ position: h, relativeNum: e - c * p }), b = ur({
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
    const [d = "50%", u = "50%"] = s.split(" "), p = Rt({ position: d, relativeNum: r - l }), m = Rt({ position: u, relativeNum: e - c }), h = ur({
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
    const d = r / l, u = e / c, p = Math.max(d, u), m = ur({
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
}, Ek = ({ backgroundPosition: e, backgroundSize: t, containerHeight: n, containerLeft: r, containerTop: o, containerWidth: a, hasScalableSrc: s, offset: i, targetHeight: c, targetWidth: l }) => {
  if (t === "cover" || t === "contain") {
    const d = a / l, u = n / c, p = t === "cover" ? Math.max(d, u) : Math.min(d, u), [m = "50%", h = "50%"] = e.split(" "), v = Rt({ position: m, relativeNum: a - l * p }), g = Rt({ position: h, relativeNum: n - c * p }), b = ur({
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
    const [d = "50%", u = "50%"] = e.split(" "), p = Rt({ position: d, relativeNum: a - l }), m = Rt({ position: u, relativeNum: n - c }), h = ur({
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
    const [d = "50%", u = "50%"] = t.split(" "), p = Rt({ position: d, relativeNum: a }), m = Rt({ position: u, relativeNum: n }), h = p / l, v = m / c, g = Math.min(h, v), [b = "50%", y = "50%"] = e.split(" "), $ = Rt({ position: b, relativeNum: a - l * g }), _ = Rt({ position: y, relativeNum: n - c * g }), w = ur({
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
}, Nk = /\.svg$/i, Pk = ({ hasZoomImg: e, imgSrc: t, isSvg: n, isZoomed: r, loadedImgEl: o, offset: a, shouldRefresh: s, targetEl: i }) => {
  var b;
  const c = n || ((b = t == null ? void 0 : t.slice) == null ? void 0 : b.call(t, 0, 18)) === "data:image/svg+xml" || e || !!(t && Nk.test(t)), l = i.getBoundingClientRect(), d = window.getComputedStyle(i), u = o != null && Wd(i), p = o != null && !u, m = Ck({
    containerHeight: l.height,
    containerLeft: l.left,
    containerTop: l.top,
    containerWidth: l.width,
    hasScalableSrc: c,
    offset: a,
    targetHeight: (o == null ? void 0 : o.naturalHeight) ?? l.height,
    targetWidth: (o == null ? void 0 : o.naturalWidth) ?? l.width
  }), h = p ? Sk({
    containerHeight: l.height,
    containerLeft: l.left,
    containerTop: l.top,
    containerWidth: l.width,
    hasScalableSrc: c,
    objectFit: d.objectFit,
    objectPosition: d.objectPosition,
    offset: a,
    targetHeight: o.naturalHeight,
    targetWidth: o.naturalWidth
  }) : void 0, v = u ? Ek({
    backgroundPosition: d.backgroundPosition,
    backgroundSize: d.backgroundSize,
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
}, Tk = (e) => {
  if (!e)
    return {};
  if (dl(e)) {
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
let Oo;
typeof document < "u" && (Oo = document.createElement("div"), Oo.setAttribute("data-rmiz-portal", ""), document.body.appendChild(Oo));
const kk = ["img", "svg", '[role="img"]', "[data-zoom]"].map((e) => `${e}:not([aria-hidden="true"])`).join(","), Hf = {
  overflow: "",
  width: ""
};
function Ok(e) {
  return N.createElement(Kb, { ...e });
}
class Kb extends fx {
  constructor() {
    super(...arguments), this.state = {
      id: "",
      isZoomImgLoaded: !1,
      loadedImgEl: void 0,
      modalState: "UNLOADED",
      shouldRefresh: !1
    }, this.refContent = bo(), this.refDialog = bo(), this.refModalContent = bo(), this.refModalImg = bo(), this.refWrap = bo(), this.imgEl = null, this.prevBodyAttrs = Hf, this.styleModalImg = {}, this.setId = () => {
      const t = () => Math.random().toString(16).slice(-4);
      this.setState({ id: t() + t() + t() });
    }, this.setAndTrackImg = () => {
      var n, r, o, a, s, i;
      const t = this.refContent.current;
      t && (this.imgEl = t.querySelector(kk), this.imgEl ? ((r = (n = this.changeObserver) == null ? void 0 : n.disconnect) == null || r.call(n), (a = (o = this.imgEl) == null ? void 0 : o.addEventListener) == null || a.call(o, "load", this.handleImgLoad), (i = (s = this.imgEl) == null ? void 0 : s.addEventListener) == null || i.call(s, "click", this.handleZoom), this.state.loadedImgEl || this.handleImgLoad(), this.imgElObserver = new ResizeObserver((c) => {
        const l = c[0];
        l != null && l.target && (this.imgEl = l.target, this.setState({}));
      }), this.imgElObserver.observe(this.imgEl)) : this.changeObserver || (this.changeObserver = new MutationObserver(this.setAndTrackImg), this.changeObserver.observe(t, { childList: !0, subtree: !0 })));
    }, this.handleIfZoomChanged = (t) => {
      const { isZoomed: n } = this.props;
      !t && n ? this.zoom() : t && !n && this.unzoom();
    }, this.handleImgLoad = () => {
      const { imgEl: t } = this, n = Yf(t);
      if (!n)
        return;
      const r = new Image();
      Is(t) && (r.sizes = t.sizes, r.srcset = t.srcset), r.src = n;
      const o = () => {
        this.setState({ loadedImgEl: r });
      };
      r.decode().then(o).catch(() => {
        if (Bf(r)) {
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
      document.body.style.width = this.prevBodyAttrs.width, document.body.style.overflow = this.prevBodyAttrs.overflow, this.prevBodyAttrs = Hf;
    }, this.loadZoomImg = () => {
      const { props: { zoomImg: t } } = this, n = t == null ? void 0 : t.src;
      if (n) {
        const r = new Image();
        r.sizes = (t == null ? void 0 : t.sizes) ?? "", r.srcset = (t == null ? void 0 : t.srcSet) ?? "", r.src = n;
        const o = () => {
          this.setState({ isZoomImgLoaded: !0 });
        };
        r.decode().then(o).catch(() => {
          if (Bf(r)) {
            o();
            return;
          }
          r.onload = o;
        });
      }
    }, this.UNSAFE_handleSvg = () => {
      var o, a, s, i, c;
      const { imgEl: t, refModalImg: n, styleModalImg: r } = this;
      if (dl(t)) {
        const l = document.createElement("div");
        l.innerHTML = t.outerHTML;
        const d = l.firstChild;
        d.style.width = `${r.width || 0}px`, d.style.height = `${r.height || 0}px`, d.addEventListener("click", this.handleUnzoom), (s = (a = (o = n.current) == null ? void 0 : o.firstChild) == null ? void 0 : a.remove) == null || s.call(a), (c = (i = n.current) == null ? void 0 : i.appendChild) == null || c.call(i, d);
      }
    };
  }
  render() {
    const { handleDialogCancel: t, handleDialogClick: n, handleUnzoom: r, handleZoom: o, imgEl: a, props: { a11yNameButtonUnzoom: s, a11yNameButtonZoom: i, children: c, classDialog: l, IconUnzoom: d, IconZoom: u, isZoomed: p, wrapElement: m, ZoomContent: h, zoomImg: v, zoomMargin: g }, refContent: b, refDialog: y, refModalContent: $, refModalImg: _, refWrap: w, state: { id: P, isZoomImgLoaded: k, loadedImgEl: L, modalState: I, shouldRefresh: ee } } = this, te = `rmiz-modal-${P}`, K = `rmiz-modal-img-${P}`, Z = Wd(a), O = Is(a), A = dl(a), j = _k(a), W = Yf(a), B = O ? a.sizes : void 0, M = O ? a.srcset : void 0, D = !!(v != null && v.src), U = a && (L || A) && window.getComputedStyle(a).display !== "none", q = j ? `${i}: ${j}` : i, oe = I === "LOADING" || I === "LOADED", ce = U ? "found" : "not-found", ye = I === "UNLOADED" || I === "UNLOADING" ? "hidden" : "visible", be = {
      visibility: I === "UNLOADED" ? "visible" : "hidden"
    }, ne = Tk(a);
    this.styleModalImg = U ? Pk({
      hasZoomImg: D,
      imgSrc: W,
      isSvg: A,
      isZoomed: p && oe,
      loadedImgEl: L,
      offset: g,
      shouldRefresh: ee,
      targetEl: a
    }) : {};
    let le = null;
    if (U) {
      const he = O || Z ? N.createElement("img", { alt: j, sizes: B, src: W, srcSet: M, ...k && I === "LOADED" ? v : {}, "data-rmiz-modal-img": "", height: this.styleModalImg.height || void 0, id: K, ref: _, style: this.styleModalImg, width: this.styleModalImg.width || void 0 }) : A ? N.createElement("div", { "data-rmiz-modal-img": !0, ref: _, style: this.styleModalImg }) : null, J = N.createElement(
        "button",
        { "aria-label": s, "data-rmiz-btn-unzoom": "", onClick: r, type: "button" },
        N.createElement(d, null)
      );
      le = h ? N.createElement(h, { buttonUnzoom: J, modalState: I, img: he, onUnzoom: r }) : N.createElement(
        N.Fragment,
        null,
        he,
        J
      );
    }
    return N.createElement(
      m,
      { "aria-owns": te, "data-rmiz": "", ref: w },
      N.createElement(m, { "data-rmiz-content": ce, ref: b, style: be }, c),
      U && N.createElement(
        m,
        { "data-rmiz-ghost": "", style: ne },
        N.createElement(
          "button",
          { "aria-label": q, "data-rmiz-btn-zoom": "", onClick: o, type: "button" },
          N.createElement(u, null)
        )
      ),
      U && Oo != null && fl(N.createElement(
        "dialog",
        { "aria-labelledby": K, "aria-modal": "true", className: l, "data-rmiz-modal": "", id: te, onClick: n, onClose: r, onCancel: t, ref: y, role: "dialog" },
        N.createElement("div", { "data-rmiz-modal-overlay": ye }),
        N.createElement("div", { "data-rmiz-modal-content": "", ref: $ }, le)
      ), Oo)
    );
  }
  componentDidMount() {
    this.setId(), this.setAndTrackImg(), this.handleImgLoad(), this.UNSAFE_handleSvg();
  }
  componentWillUnmount() {
    var t, n, r, o, a, s, i, c, l, d, u, p;
    this.state.modalState !== "UNLOADED" && this.bodyScrollEnable(), (n = (t = this.changeObserver) == null ? void 0 : t.disconnect) == null || n.call(t), (o = (r = this.imgElObserver) == null ? void 0 : r.disconnect) == null || o.call(r), (s = (a = this.imgEl) == null ? void 0 : a.removeEventListener) == null || s.call(a, "load", this.handleImgLoad), (c = (i = this.imgEl) == null ? void 0 : i.removeEventListener) == null || c.call(i, "click", this.handleZoom), (d = (l = this.refModalImg.current) == null ? void 0 : l.removeEventListener) == null || d.call(l, "transitionend", this.handleZoomEnd), (p = (u = this.refModalImg.current) == null ? void 0 : u.removeEventListener) == null || p.call(u, "transitionend", this.handleUnzoomEnd), window.removeEventListener("wheel", this.handleWheel), window.removeEventListener("touchstart", this.handleTouchStart), window.removeEventListener("touchmove", this.handleTouchMove), window.removeEventListener("touchcancel", this.handleTouchCancel), window.removeEventListener("resize", this.handleResize), document.removeEventListener("keydown", this.handleKeyDown, !0);
  }
  componentDidUpdate(t) {
    this.UNSAFE_handleSvg(), this.handleIfZoomChanged(t.isZoomed);
  }
}
Kb.defaultProps = {
  a11yNameButtonUnzoom: "Minimize image",
  a11yNameButtonZoom: "Expand image",
  IconUnzoom: xk,
  IconZoom: yk,
  wrapElement: "div",
  zoomMargin: 0
};
function Gb(e) {
  const [t, n] = Y(!1);
  return N.createElement(Ok, { ...e, isZoomed: t, onZoomChange: n });
}
const Mk = ({ src: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsx(Gb, { children: /* @__PURE__ */ f.exports.jsxs(_r, { className: F("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(Wn, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(Cr, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(Ws, {}) })
] }) }), Dk = ({ imageIndex: e, compress: t, disabled: n, tabIndexs: r, onImageUpdate: o, setUploadImage: a, onImageRemove: s, setLocalImage: i }) => n ? null : /* @__PURE__ */ f.exports.jsxs("div", { className: "mt-2 gap-x-2 w-full flex flex-col justify-center items-end gap-y-2 absolute top-2 right-2", children: [
  (t == null ? void 0 : t.openComparisons) && /* @__PURE__ */ f.exports.jsx(
    Ve,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: r == null ? void 0 : r.viewCompress,
      onClick: () => t.openComparisons(),
      className: "text-green-600 backdrop-blur-sm border-green-600 bg-green-600 bg-opacity-10 hover:bg-green-600 hover:bg-opacity-25 hover:text-green-600",
      children: /* @__PURE__ */ f.exports.jsx($b, { size: 16 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Ve,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: r == null ? void 0 : r.change,
      onClick: () => o(e),
      className: "text-yellow-600 backdrop-blur-sm border-yellow-600 bg-yellow-600 bg-opacity-10 hover:bg-yellow-600 hover:bg-opacity-25 hover:text-yellow-600",
      children: /* @__PURE__ */ f.exports.jsx(op, { size: 14 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Ve,
    {
      tabIndex: r == null ? void 0 : r.delete,
      type: "button",
      size: "icon",
      variant: "outline",
      onClick: () => {
        s(e), i([]), a({ original: null, compressed: null });
      },
      className: "text-red-700 backdrop-blur-sm border-red-700 bg-red-700 bg-opacity-10 hover:bg-red-700 hover:bg-opacity-25 hover:text-red-700",
      children: /* @__PURE__ */ f.exports.jsx(ap, { size: 14 })
    }
  )
] }), Rk = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, onImageUpload: a }) => /* @__PURE__ */ f.exports.jsxs(
  "div",
  {
    ...e,
    className: F(
      `${t ? "border-indigo-600" : "border-gray-300"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center",
      n
    ),
    children: [
      /* @__PURE__ */ f.exports.jsx(
        Ve,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          className: `mt-2 ${t && "text-indigo-600"}`,
          onClick: a,
          children: /* @__PURE__ */ f.exports.jsx(tp, { size: 22 })
        }
      ),
      /* @__PURE__ */ f.exports.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), A8 = ({
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
  compress: d
}) => {
  const [u, p] = Y(e ? [{ data_url: e, file: null }] : []), m = async (h, v) => {
    var $, _, w, P, k, L, I;
    const g = ($ = h[0]) == null ? void 0 : $.file, b = (_ = h[0]) == null ? void 0 : _.data_url;
    g || (p([]), t({ original: null, compressed: null })), p(h);
    const y = as((w = h[0]) == null ? void 0 : w.file.size);
    if (d != null && d.resizer && g) {
      const { data_url: ee, file: te } = await Yb({
        resizer: d == null ? void 0 : d.resizer,
        imageFile: g,
        quality: (n == null ? void 0 : n.quality) || 10,
        maxWidth: (n == null ? void 0 : n.width) || 500,
        maxHeight: (n == null ? void 0 : n.width) || 500,
        compressFormat: (n == null ? void 0 : n.extension) || "png",
        rotation: (n == null ? void 0 : n.rotation) || 0
      }), K = as(te.size);
      t({
        original: {
          preview: b,
          file: g,
          size: {
            formated: y,
            bytes: (P = h[0]) == null ? void 0 : P.file.size
          }
        },
        compressed: {
          preview: ee == null ? void 0 : ee.toString(),
          file: te,
          size: {
            formated: K,
            bytes: te.size
          }
        }
      });
      return;
    }
    t({
      original: {
        preview: (k = h[0]) == null ? void 0 : k.data_url,
        file: (L = h[0]) == null ? void 0 : L.file,
        size: { formated: y, bytes: (I = h[0]) == null ? void 0 : I.file.size }
      },
      compressed: null
    });
  };
  return G(() => {
    e && p([{ data_url: e, file: null }]);
  }, [e]), /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full", children: [
    r && /* @__PURE__ */ f.exports.jsx(fn, { children: r }),
    r && /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      Bb,
      {
        value: u,
        onChange: m,
        dataURLKey: "data_url",
        acceptType: ["webp", "png", "jpg", "jpeg"],
        children: ({ imageList: h, onImageUpload: v, onImageUpdate: g, onImageRemove: b, isDragging: y, dragProps: $ }) => /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: h.length >= 1 ? /* @__PURE__ */ f.exports.jsx("div", { children: h.map((_, w) => /* @__PURE__ */ f.exports.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
          l ? /* @__PURE__ */ f.exports.jsx(Mk, { imageContainerClassName: c, src: _ == null ? void 0 : _.data_url }) : /* @__PURE__ */ f.exports.jsx(bk, { imageContainerClassName: c, previewUrl: _ == null ? void 0 : _.data_url }),
          /* @__PURE__ */ f.exports.jsx(
            Dk,
            {
              disabled: s,
              imageIndex: w,
              setUploadImage: t,
              onImageRemove: b,
              onImageUpdate: g,
              compress: d,
              tabIndexs: a,
              setLocalImage: p
            }
          )
        ] }, w)) }) : /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
          Rk,
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
}, Ak = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsxs(_r, { className: F("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(Wn, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(Cr, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(Ws, {}) })
] }), jk = ({ imageIndex: e, compress: t, tabIndexs: n, onImageUpdate: r, onImageRemove: o }) => /* @__PURE__ */ f.exports.jsxs("div", { className: "mt-2 gap-x-2 w-full flex flex-col justify-center items-end gap-y-2 absolute top-2 right-2", children: [
  (t == null ? void 0 : t.openComparisons) && /* @__PURE__ */ f.exports.jsx(
    Ve,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: n == null ? void 0 : n.viewCompress,
      onClick: () => t.openComparisons(),
      className: "whitespace-nowrap backdrop-blur-sm border-green-900 bg-green-900 bg-opacity-10 hover:bg-green-900 hover:bg-opacity-30",
      children: /* @__PURE__ */ f.exports.jsx($b, { size: 16 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Ve,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: n == null ? void 0 : n.change,
      onClick: () => r(e),
      className: "backdrop-blur-sm border-yellow-600 bg-yellow-600 bg-opacity-10 hover:bg-yellow-600 hover:bg-opacity-30",
      children: /* @__PURE__ */ f.exports.jsx(op, { size: 14 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Ve,
    {
      tabIndex: n == null ? void 0 : n.delete,
      type: "button",
      size: "icon",
      variant: "outline",
      onClick: () => o(e),
      className: "backdrop-blur-sm border-red-900 bg-red-900 bg-opacity-10 hover:bg-red-900 hover:bg-opacity-30",
      children: /* @__PURE__ */ f.exports.jsx(ap, { size: 14 })
    }
  )
] }), Ik = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsx(Gb, { children: /* @__PURE__ */ f.exports.jsxs(_r, { className: F("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(Wn, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(Cr, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(Ws, {}) })
] }) }), Lk = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, onImageUpload: a }) => /* @__PURE__ */ f.exports.jsxs(
  "div",
  {
    ...e,
    className: F(
      `${t ? "border-indigo-600" : "border-gray-300"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center",
      n
    ),
    children: [
      /* @__PURE__ */ f.exports.jsx(
        Ve,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          className: `mt-2 ${t && "text-indigo-600"}`,
          onClick: a,
          children: /* @__PURE__ */ f.exports.jsx(tp, { size: 22 })
        }
      ),
      /* @__PURE__ */ f.exports.jsx("span", { className: "font-medium text-zinc-500", children: "o arrastra y suelta las imagenes" })
    ]
  }
), j8 = ({
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
  initialPreview: d
}) => {
  const [u, p] = Y([]);
  G(() => {
    d && d.length && p([...u, ...d]);
  }, []);
  const m = async (h, v) => {
    p(h);
    const g = h.map(async (b) => {
      var P, k, L, I;
      const { data_url: y, file: $ } = await Yb({
        resizer: c.resizer,
        imageFile: b.file,
        quality: (n == null ? void 0 : n.quality) || 10,
        maxWidth: (n == null ? void 0 : n.width) || 500,
        maxHeight: (n == null ? void 0 : n.width) || 500,
        compressFormat: (n == null ? void 0 : n.extension) || "png",
        rotation: (n == null ? void 0 : n.rotation) || 0
      }), _ = as((P = h[0]) == null ? void 0 : P.file.size), w = as($.size);
      return {
        original: {
          preview: (k = h[0]) == null ? void 0 : k.data_url,
          file: (L = h[0]) == null ? void 0 : L.file,
          size: {
            formated: _,
            bytes: (I = h[0]) == null ? void 0 : I.file.size
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
    e && /* @__PURE__ */ f.exports.jsx(fn, { children: e }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      Bb,
      {
        multiple: !0,
        value: u,
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
                      Ik,
                      {
                        imageContainerClassName: s,
                        previewUrl: _ == null ? void 0 : _.data_url
                      }
                    ) : /* @__PURE__ */ f.exports.jsx(
                      Ak,
                      {
                        imageContainerClassName: s,
                        previewUrl: _ == null ? void 0 : _.data_url
                      }
                    ),
                    /* @__PURE__ */ f.exports.jsx(
                      jk,
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
              u.length < l && /* @__PURE__ */ f.exports.jsx("div", { className: "imagen-container", children: /* @__PURE__ */ f.exports.jsx(
                "div",
                {
                  ...$,
                  className: F(
                    `w-full h-[237px] ${y ? "border-indigo-600" : "border-slate-50"} flex flex-col justify-center items-center border-dashed border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`,
                    s
                  ),
                  children: /* @__PURE__ */ f.exports.jsx(
                    Ve,
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
          Lk,
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
function I8({
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
  buttonClassName: d,
  popoverClassName: u
}) {
  const [p, m] = Y(!1);
  return /* @__PURE__ */ f.exports.jsx(
    Nr,
    {
      control: t.control,
      name: e,
      defaultValue: i,
      render: ({ field: h }) => {
        var v;
        return /* @__PURE__ */ f.exports.jsxs(nr, { className: "flex flex-col", children: [
          /* @__PURE__ */ f.exports.jsx(fn, { children: n }),
          /* @__PURE__ */ f.exports.jsxs(En, { open: p, onOpenChange: m, children: [
            /* @__PURE__ */ f.exports.jsx(Nn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Ve,
              {
                disabled: o,
                tabIndex: a,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: F("w-min justify-between", !h.value && "text-muted-foreground", `${d}`),
                children: [
                  h.value ? (v = r.find((g) => {
                    var b, y;
                    return ((b = g == null ? void 0 : g.value) == null ? void 0 : b.toUpperCase()) === ((y = h == null ? void 0 : h.value) == null ? void 0 : y.toUpperCase());
                  })) == null ? void 0 : v.label : l,
                  /* @__PURE__ */ f.exports.jsx(Cc, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(sn, { className: F("w-[200px] p-0", u), children: /* @__PURE__ */ f.exports.jsxs(Pn, { children: [
              /* @__PURE__ */ f.exports.jsx(Hn, { placeholder: s, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsx(Kn, { children: c }),
              /* @__PURE__ */ f.exports.jsx(Zt, { children: r.map((g) => /* @__PURE__ */ f.exports.jsxs(
                qt,
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
function Fk({
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
  notFoundLabel: u,
  ctaPlaceholder: p,
  buttonClassName: m,
  popoverClassName: h
}) {
  var b;
  const [v, g] = Y(!1);
  return t ? /* @__PURE__ */ f.exports.jsx(
    Nr,
    {
      control: t.control,
      name: e,
      defaultValue: d,
      rules: o,
      render: ({ field: y, formState: $ }) => {
        var _, w, P;
        return /* @__PURE__ */ f.exports.jsxs(nr, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ f.exports.jsxs(Pr, { className: "flex", children: [
            n,
            " ",
            ((w = (_ = $.errors) == null ? void 0 : _.pidType) == null ? void 0 : w.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              $.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsxs(En, { open: v, onOpenChange: g, children: [
            /* @__PURE__ */ f.exports.jsx(Nn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Ve,
              {
                disabled: s,
                tabIndex: c,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: F("w-min justify-between", !y.value && "text-muted-foreground", `${m}`),
                children: [
                  y.value ? (P = r.find((k) => k.value === y.value)) == null ? void 0 : P.label : p,
                  /* @__PURE__ */ f.exports.jsx(Cc, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(sn, { className: F("w-[200px] p-0", h), children: /* @__PURE__ */ f.exports.jsxs(Pn, { children: [
              /* @__PURE__ */ f.exports.jsx(Hn, { placeholder: l, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsx(Kn, { children: u }),
              /* @__PURE__ */ f.exports.jsx(Zt, { children: r.map((k) => /* @__PURE__ */ f.exports.jsxs(
                qt,
                {
                  value: k.value,
                  onSelect: (L) => {
                    t.setValue(e, L), g(!1);
                  },
                  className: "w-full flex justify-start items-center",
                  children: [
                    (k == null ? void 0 : k.image) && /* @__PURE__ */ f.exports.jsx("img", { src: k.image, alt: k.label, width: 40, className: "mr-2" }),
                    (k == null ? void 0 : k.icon) && k.icon,
                    k.label,
                    /* @__PURE__ */ f.exports.jsx(
                      Kt,
                      {
                        className: F(
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
  ) : /* @__PURE__ */ f.exports.jsxs(En, { open: v, onOpenChange: g, children: [
    /* @__PURE__ */ f.exports.jsx(Nn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
      Ve,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": v,
        className: "w-full justify-between",
        children: [
          a ? (b = r.find((y) => y.value === a)) == null ? void 0 : b.label : p,
          /* @__PURE__ */ f.exports.jsx(Cc, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ f.exports.jsx(sn, { className: "w-full p-0", children: /* @__PURE__ */ f.exports.jsxs(Pn, { children: [
      /* @__PURE__ */ f.exports.jsx(Hn, { placeholder: l, className: "h-9" }),
      /* @__PURE__ */ f.exports.jsx(Kn, { children: u }),
      /* @__PURE__ */ f.exports.jsx(Zt, { children: r.map((y) => /* @__PURE__ */ f.exports.jsxs(
        qt,
        {
          onSelect: ($) => {
            i($ === a ? "" : $), g(!1);
          },
          children: [
            y.label,
            /* @__PURE__ */ f.exports.jsx(
              Kt,
              {
                className: F(
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
const Vk = ({ form: e, id: t, description: n, icon: r, placeholder: o, label: a, tabIndex: s, options: i, classNameContainer: c, classNamePopover: l }) => {
  var _;
  const d = V(null), [u, p] = Y(null);
  G(() => {
    const w = d.current;
    if (!w)
      return;
    const P = new ResizeObserver((k) => {
      const L = k[0].contentRect.width;
      p(L);
    });
    return P.observe(w), () => {
      P.unobserve(w), P.disconnect();
    };
  }, []);
  const m = (_ = e == null ? void 0 : e.formState) == null ? void 0 : _.defaultValues[t], h = i.map((w) => ({
    ...w,
    selected: m ? m.includes(w.value) : !1
  })), [v, g] = Y(h), b = (w) => v.filter((k) => k.selected).map((k) => k.value), y = () => g((w) => w.map((P) => ({ ...P, selected: !1 }))), $ = (w, P) => {
    const k = v.map((L) => L.id === w ? { ...L, selected: P } : L);
    g(k), e.setValue(t, k.filter((L) => L.selected).map((L) => L.value));
  };
  return /* @__PURE__ */ f.exports.jsx(
    Nr,
    {
      control: e.control,
      name: t,
      render: ({ field: w, formState: P }) => {
        var k;
        return /* @__PURE__ */ f.exports.jsxs(nr, { className: F("w-full space-y-2", c), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            a && /* @__PURE__ */ f.exports.jsxs(Pr, { className: "flex", children: [
              a,
              " "
            ] }),
            ((k = P == null ? void 0 : P.errors[t]) == null ? void 0 : k.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              P.errors[t].message
            ] })
          ] }),
          n && /* @__PURE__ */ f.exports.jsx(lo, { className: "text-xs", children: n }),
          /* @__PURE__ */ f.exports.jsxs(En, { children: [
            /* @__PURE__ */ f.exports.jsx(Nn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Ve,
              {
                ref: d,
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
                      ht,
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
                      ht,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: [
                          b().length,
                          " seleccionados"
                        ]
                      }
                    ) : v.filter((L) => L.selected).map((L) => /* @__PURE__ */ f.exports.jsx(
                      ht,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: L.label
                      },
                      L.value.toString()
                    )) })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(sn, { style: { width: u + 24 }, className: F("w-full p-0", l), align: "start", children: /* @__PURE__ */ f.exports.jsxs(Pn, { children: [
              /* @__PURE__ */ f.exports.jsx(Hn, { placeholder: a }),
              /* @__PURE__ */ f.exports.jsxs(Na, { children: [
                /* @__PURE__ */ f.exports.jsx(Kn, { children: "Sin Resultados" }),
                /* @__PURE__ */ f.exports.jsx(Zt, { children: v.map((L) => /* @__PURE__ */ f.exports.jsxs(
                  qt,
                  {
                    onSelect: () => {
                      L.selected ? $(L.id, !1) : $(L.id, !0);
                    },
                    children: [
                      /* @__PURE__ */ f.exports.jsx(
                        "div",
                        {
                          className: F(
                            "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                            L.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                          ),
                          children: /* @__PURE__ */ f.exports.jsx(Kt, { className: F("h-4 w-4") })
                        }
                      ),
                      L.icon,
                      /* @__PURE__ */ f.exports.jsx("span", { children: L.label })
                    ]
                  },
                  L.value.toString()
                )) }),
                b().length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
                  /* @__PURE__ */ f.exports.jsx(pi, {}),
                  /* @__PURE__ */ f.exports.jsx(Zt, { children: /* @__PURE__ */ f.exports.jsx(
                    qt,
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
}, Uk = ({ description: e, icon: t, placeholder: n, label: r, tabIndex: o, options: a, classNameContainer: s, classNamePopover: i }) => {
  const c = V(null), [l, d] = Y(null);
  return G(() => {
    const u = c.current;
    if (!u)
      return;
    const p = new ResizeObserver((m) => {
      const h = m[0].contentRect.width;
      d(h);
    });
    return p.observe(u), () => {
      p.unobserve(u), p.disconnect();
    };
  }, []), /* @__PURE__ */ f.exports.jsxs("div", { className: F("w-full space-y-2", s), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsxs(fn, { className: "flex", children: [
      r,
      " "
    ] }) }),
    e && /* @__PURE__ */ f.exports.jsx("p", { className: "text-xs", children: e }),
    /* @__PURE__ */ f.exports.jsxs(En, { children: [
      /* @__PURE__ */ f.exports.jsx(Nn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
        Ve,
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
                ht,
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
                ht,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ) : a.map((u) => /* @__PURE__ */ f.exports.jsx(
                ht,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: u.label
                },
                u.id
              )) })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ f.exports.jsx(sn, { style: { width: l + 24 }, className: F("w-full p-0", i), align: "start", children: /* @__PURE__ */ f.exports.jsxs(Pn, { children: [
        /* @__PURE__ */ f.exports.jsx(Hn, { placeholder: r }),
        /* @__PURE__ */ f.exports.jsxs(Na, { children: [
          /* @__PURE__ */ f.exports.jsx(Kn, { children: "Sin Resultados" }),
          /* @__PURE__ */ f.exports.jsx(Zt, { children: a.map((u) => /* @__PURE__ */ f.exports.jsxs(
            qt,
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
                    children: /* @__PURE__ */ f.exports.jsx(Kt, { className: F("h-4 w-4") })
                  }
                ),
                /* @__PURE__ */ f.exports.jsx("span", { children: u.label })
              ]
            },
            u.id
          )) })
        ] })
      ] }) })
    ] })
  ] });
}, L8 = ({ id: e, description: t, icon: n, placeholder: r, label: o, tabIndex: a, classNameContainer: s, readOnly: i, classNamePopover: c, ...l }) => i ? /* @__PURE__ */ f.exports.jsx(
  Uk,
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
  Vk,
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
function Wk({
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
function Kf({
  icon: e,
  titleDescription: t,
  actionToSet: n,
  Link: r,
  item: o
}) {
  return /* @__PURE__ */ f.exports.jsx(hr, { children: /* @__PURE__ */ f.exports.jsxs(vr, { children: [
    /* @__PURE__ */ f.exports.jsx(gr, { children: /* @__PURE__ */ f.exports.jsx(
      "div",
      {
        onClick: n ? () => {
          n(!0);
        } : null,
        role: "button",
        className: "w-full border-2 border-transparent flex justify-center items-center p-2 group group-hover:text-[#eaeaea] text-base font-normal text-gray-[#eaeaea] rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none",
        children: /* @__PURE__ */ f.exports.jsx(
          _b,
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
    /* @__PURE__ */ f.exports.jsx(Gn, { children: t })
  ] }) });
}
function zk({
  profile: e
}) {
  return /* @__PURE__ */ f.exports.jsxs("header", { className: "justify-center w-full h-14 flex items-start gap-x-3 my-10 px-10", children: [
    /* @__PURE__ */ f.exports.jsxs(_r, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
      /* @__PURE__ */ f.exports.jsx(Wn, { src: e == null ? void 0 : e.photo, className: "object-cover" }),
      /* @__PURE__ */ f.exports.jsx(Cr, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(Wn, { src: e == null ? void 0 : e.photo, className: "object-cover" }) })
    ] }),
    /* @__PURE__ */ f.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
      /* @__PURE__ */ f.exports.jsxs("span", { className: "truncate", children: [
        e == null ? void 0 : e.name,
        " ",
        e == null ? void 0 : e.lastname
      ] }),
      (e == null ? void 0 : e.role) && /* @__PURE__ */ f.exports.jsx(ht, { className: "w-full", children: e.role })
    ] })
  ] });
}
function Bk({
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
            /* @__PURE__ */ f.exports.jsx(rp, { className: "dark:text-white", size: 20 }),
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
            /* @__PURE__ */ f.exports.jsx(np, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
          ]
        }
      ) })
    ] })
  ] });
}
function Yk({
  navLinksItems: e,
  subLinksItems: t,
  sidebar: n,
  onCloseSideBar: r,
  Link: o
}) {
  const { profile: a } = n;
  return /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
    /* @__PURE__ */ f.exports.jsx(zk, { profile: a }),
    /* @__PURE__ */ f.exports.jsxs("aside", { className: "px-6", children: [
      e == null ? void 0 : e.map((s, i) => /* @__PURE__ */ f.exports.jsx(
        _b,
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
        y4,
        {
          pathname: t.pathname,
          label: t.label,
          icon: t.icon,
          sublinks: t.subLinks,
          Link: o
        }
      ),
      /* @__PURE__ */ f.exports.jsx(
        Bk,
        {
          onCloseSideBar: r,
          sidebar: n
        }
      )
    ] })
  ] });
}
function F8({
  bottomItems: e,
  navLinksItems: t,
  subLinksItems: n,
  sidebar: r,
  Link: o
}) {
  const [a, s] = Y(!1);
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "lg:hidden md:block md:min-w-640 md:max-w-767 fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-[#09090B] dark:border-[#151313] rounded-t-xl", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "grid h-full max-w-lg grid-cols-5 mx-auto font-medium", children: [
      e.map((i, c) => /* @__PURE__ */ f.exports.jsx(
        Kf,
        {
          icon: i.icon,
          titleDescription: i.titleDescription,
          Link: o,
          item: i
        },
        c
      )),
      /* @__PURE__ */ f.exports.jsx(
        Kf,
        {
          icon: /* @__PURE__ */ f.exports.jsx(Qx, {}),
          titleDescription: "Options",
          actionToSet: s,
          Link: null,
          item: null
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      Wk,
      {
        isOpen: a,
        onClose: () => s(!1),
        children: /* @__PURE__ */ f.exports.jsx(
          Yk,
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
const Or = ct({
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
function Hk() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = He(Or);
  return /* @__PURE__ */ f.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ f.exports.jsxs(
        hd,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ f.exports.jsx(ii, { className: "h-8 w-[70px]", children: /* @__PURE__ */ f.exports.jsx(vd, { placeholder: e.limit }) }),
            /* @__PURE__ */ f.exports.jsx(ci, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ f.exports.jsx(li, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ f.exports.jsxs(
        Ve,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ f.exports.jsx(vl, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ f.exports.jsx("div", { children: /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ f.exports.jsxs(
        Ve,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: !e.hasNextPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ f.exports.jsx(ao, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const V8 = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, Kk = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), U8 = {
  limit: 10,
  page: 1
}, Gk = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), W8 = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], Zk = ({ colSpan: e }) => /* @__PURE__ */ f.exports.jsx(Pa, { children: /* @__PURE__ */ f.exports.jsx(vi, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), qk = ({
  data: e,
  columns: t
}) => {
  const n = (r, o) => r != null && r.render ? /* @__PURE__ */ f.exports.jsx("div", { children: r.render(o) }) : /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: o[r.id] });
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.map((r, o) => /* @__PURE__ */ f.exports.jsx(Sh, { children: t.map((a) => n(a, r)) }, Gk())) });
}, Zb = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = He(Or), [s, i] = Y(
    o ? o.length : 0
  );
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.length ? /* @__PURE__ */ f.exports.jsx(
    qk,
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
  ) : /* @__PURE__ */ f.exports.jsx(Zk, { colSpan: t.length }) });
}, Xk = () => /* @__PURE__ */ f.exports.jsx(Zb, {}), Qk = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), Jk = () => /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ f.exports.jsx(Qk, {}),
  /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] }), eO = () => {
  const { showFilters: e, setShowFilters: t } = He(Or);
  return /* @__PURE__ */ f.exports.jsxs(
    Ve,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ f.exports.jsx(xb, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, tO = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = He(Or), l = (d) => {
    c(d);
  };
  return /* @__PURE__ */ f.exports.jsxs(En, { children: [
    /* @__PURE__ */ f.exports.jsx(Nn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Ve, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed", children: [
      n || /* @__PURE__ */ f.exports.jsx(yb, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(_a, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          ht,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ f.exports.jsxs(
          ht,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((d) => d.selected).map((d) => /* @__PURE__ */ f.exports.jsx(
          ht,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: d.label
          },
          d.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ f.exports.jsx(sn, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ f.exports.jsxs(Pn, { children: [
      /* @__PURE__ */ f.exports.jsx(Hn, { placeholder: r }),
      /* @__PURE__ */ f.exports.jsxs(Na, { children: [
        /* @__PURE__ */ f.exports.jsx(Kn, { children: "Sin Resultados" }),
        /* @__PURE__ */ f.exports.jsx(Zt, { children: o.map((d) => /* @__PURE__ */ f.exports.jsxs(
          qt,
          {
            onSelect: () => {
              d.selected ? s(e, d.id, !1) : s(e, d.id, !0);
            },
            children: [
              /* @__PURE__ */ f.exports.jsx(
                "div",
                {
                  className: F(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    d.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ f.exports.jsx(Kt, { className: F("h-4 w-4") })
                }
              ),
              d.icon,
              /* @__PURE__ */ f.exports.jsx("span", { children: d.label })
            ]
          },
          d.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(pi, {}),
          /* @__PURE__ */ f.exports.jsx(Zt, { children: /* @__PURE__ */ f.exports.jsx(
            qt,
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
}, nO = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ f.exports.jsxs(En, { children: [
  /* @__PURE__ */ f.exports.jsx(Nn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Ve, { variant: "outline", size: "sm", className: "py-5 border-dashed", type: "button", children: [
    /* @__PURE__ */ f.exports.jsx(gl, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    o && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
      /* @__PURE__ */ f.exports.jsx(_a, { orientation: "vertical", className: "mx-2 h-4" }),
      /* @__PURE__ */ f.exports.jsx(
        ht,
        {
          variant: "secondary",
          className: "rounded-sm px-1 font-normal",
          children: o
        }
      )
    ] })
  ] }) }),
  /* @__PURE__ */ f.exports.jsxs(sn, { className: "w-fit p-4", align: "start", children: [
    /* @__PURE__ */ f.exports.jsxs(fn, { htmlFor: e, children: [
      "Buscar ",
      n
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      ud,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), rO = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c }
  } = He(Or), l = e.watch(n.map((u) => u.id)), d = () => {
    var p;
    a();
    const u = [];
    (p = Object.entries(e == null ? void 0 : e.getValues())) == null || p.forEach((m) => {
      m[1] && u.push({
        field: Oa(m[0]),
        text: m[1]
      });
    }), s({ queries: u, filters: [], limit: c, page: i });
  };
  return /* @__PURE__ */ f.exports.jsx("div", { className: "w-10/12 flex items-center justify-between", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-col items-start gap-x-2 gap-y-2", children: [
    /* @__PURE__ */ f.exports.jsx(
      "form",
      {
        onSubmit: e.handleSubmit(t),
        className: "w-full flex justify-start items-center sm:mr-4",
        children: /* @__PURE__ */ f.exports.jsx("section", { className: "mr-3 flex justify-start items-center gap-x-3", children: n.map((u, p) => /* @__PURE__ */ f.exports.jsx(
          nO,
          {
            queryText: l[p],
            label: u.label,
            id: u.id,
            form: e
          },
          u.id
        )) })
      }
    ),
    r != null && r.length ? /* @__PURE__ */ f.exports.jsxs("div", { className: "w-auto h-full flex flex-wrap gap-x-3 gap-y-2 justify-start items-center", children: [
      /* @__PURE__ */ f.exports.jsx(eO, {}),
      o && r && r.map((u) => /* @__PURE__ */ f.exports.jsx(
        tO,
        {
          onSubmit: t,
          form: e,
          id: u.id,
          icon: u.icon,
          label: u.label,
          options: u.options
        },
        u.id
      )),
      o && (r != null && r.filter(
        (u) => u.options.some((p) => p.selected)
      ).length) ? /* @__PURE__ */ f.exports.jsxs(
        Ve,
        {
          type: "button",
          variant: "ghost",
          onClick: d,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ f.exports.jsx(zs, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, oO = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i
  } = He(Or), c = Ym({
    defaultValues: n.reduce((d, u) => (d[u.id] = "", d), {}),
    resolver: Nb(
      As.object(
        n.reduce((d, u) => (d[u.id] = As.string().optional(), d), {})
      )
    )
  }), l = async (d) => {
    var m;
    console.log({ data: d });
    const u = r(), p = [];
    (m = Object.entries(d)) == null || m.forEach((h) => {
      h[1] && p.push({
        field: Oa(h[0]),
        text: h[1]
      });
    }), console.log("queries formatted ", p), e({ queries: p, filters: u, limit: s, page: a });
  };
  return G(() => i(c), [c]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ f.exports.jsx("div", {}) : /* @__PURE__ */ f.exports.jsx(Km, { ...c, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ f.exports.jsx(rO, { form: c, onSubmit: l }) : /* @__PURE__ */ f.exports.jsx("div", {}),
    /* @__PURE__ */ f.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ f.exports.jsx(
      Ve,
      {
        type: "submit",
        onClick: c.handleSubmit(l),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap",
        children: t ? /* @__PURE__ */ f.exports.jsx(hl, {}) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(wb, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, aO = () => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), sO = () => /* @__PURE__ */ f.exports.jsx(Zb, {}), iO = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function z8(e) {
  const [t, n] = Y([]), [r, o] = Y([]), [a, s] = Y([]), [i, c] = Y(!1), [l, d] = Y(e == null ? void 0 : e.error), [u, p] = Y(e == null ? void 0 : e.loading), [m, h] = Y(), [v, g] = Y(
    (e == null ? void 0 : e.pagination) ?? iO
  ), [b, y] = Y(
    (e == null ? void 0 : e.columns) || []
  ), $ = ue(
    (O) => e.onSubmitTable({ ...O }),
    [e]
  ), _ = ue(
    (O) => {
      var B;
      g(O);
      const A = m.getValues(), j = [];
      (B = Object.entries(A)) == null || B.forEach((M) => {
        M[1] && j.push({
          field: Kk(M[0]),
          text: M[1]
        });
      });
      const W = r.map((M) => ({
        id: M.id,
        label: M.label,
        options: M.options.filter((D) => D.selected).map((D) => D.value)
      })).filter((M) => M.options.length > 0);
      $({
        filters: W,
        queries: j,
        limit: O.limit,
        page: O.page
      });
    },
    [r, $, m]
  ), w = ue(() => {
    _({ ...v, page: v.page + 1 });
  }, [v, _]), P = ue(() => {
    v.page > 1 && _({ ...v, page: v.page - 1 });
  }, [v, _]), k = () => r.map((O) => ({
    id: O.id,
    label: O.label,
    options: O.options.filter((A) => A.selected).map((A) => A.value)
  })).filter((O) => O.options.length > 0), L = (O) => {
    const A = r.find((j) => j.id === O);
    return A ? A.options.filter((W) => W.selected).map((W) => W.value) : [];
  }, I = (O, A, j) => {
    const W = r.map((B) => B.id === O ? {
      ...B,
      options: B.options.map((M) => M.id === A ? { ...M, selected: j } : M)
    } : B);
    o(W);
  }, ee = () => r, te = (O) => {
    const A = r.map((j) => j.id === O ? {
      ...j,
      options: j.options.map((W) => ({
        ...W,
        selected: !1
      }))
    } : j);
    o(A);
  }, K = (O) => _({ ...v, limit: O }), Z = () => {
    const O = r.map((A) => ({
      ...A,
      options: A.options.map((j) => ({ ...j, selected: !1 }))
    }));
    o(O);
  };
  return G(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), G(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), G(() => d((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), G(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), G(() => y((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), G(() => {
    const O = b.filter((A) => A.isQuery).map((A) => ({
      id: A.id,
      label: A.label
    }));
    s(O);
  }, [b]), G(() => {
    const O = (j) => (j == null ? void 0 : j.filters) && (j == null ? void 0 : j.filters.length), A = b.filter(O).map((j) => {
      const W = j.filters.map((M) => ({
        ...M,
        selected: !1
      }));
      return {
        ...j,
        id: j.id,
        options: W
      };
    });
    o(A);
  }, [b]), G(() => {
    e != null && e.filters && (e == null || e.filters.forEach((O) => {
      O != null && O.filters && b.forEach((A) => {
        O.id === A.id && o((j) => j.some((B) => B.id === O.id) ? j : [
          ...j,
          {
            id: A.id,
            label: A.label,
            options: O.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), G(() => {
    g((O) => {
      var A, j;
      return {
        ...O,
        hasNextPage: (A = e == null ? void 0 : e.pagination) == null ? void 0 : A.hasNextPage,
        hasPrevPage: (j = e == null ? void 0 : e.pagination) == null ? void 0 : j.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ f.exports.jsx(
    Or.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: w,
        prevPage: P,
        searchForm: m,
        updateLimit: K,
        showFilters: i,
        resetFilters: Z,
        getGlobalFilters: ee,
        selectOptionFilter: I,
        resetOptionsByFilter: te,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: $,
        getFilterOptionsSelectedById: L,
        getFiltersWithOptionsSelected: k,
        setSelectItem: e.setSelectItem,
        setShowFilters: (O) => c(O),
        setSearchForm: (O) => h(O)
      },
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ f.exports.jsx(oO, { onSubmitTable: $, loading: u }),
        /* @__PURE__ */ f.exports.jsxs("div", { className: "overflow-clip grid grid-cols-3 gap-6", children: [
          u && /* @__PURE__ */ f.exports.jsx(Jk, {}),
          !u && l && /* @__PURE__ */ f.exports.jsx(aO, {}),
          !u && !l && !t && /* @__PURE__ */ f.exports.jsx(sO, {}),
          !u && !l && t && /* @__PURE__ */ f.exports.jsx(Xk, {})
        ] }),
        !u && !l && t && /* @__PURE__ */ f.exports.jsx(Hk, {})
      ] })
    }
  );
}
function B8(e) {
  const [t, n] = Y(null), [r, o] = Y(null), [a, s] = Y(!1);
  G(() => {
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
const Y8 = ({ children: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: "app-layout", children: e });
export {
  JO as Accordion,
  _6 as AccordionContent,
  $6 as AccordionItem,
  w6 as AccordionTrigger,
  ZO as AlertDialog,
  G5 as AlertDialogAction,
  Z5 as AlertDialogCancel,
  z5 as AlertDialogContent,
  K5 as AlertDialogDescription,
  Y5 as AlertDialogFooter,
  B5 as AlertDialogHeader,
  H5 as AlertDialogTitle,
  qO as AlertDialogTrigger,
  Y8 as AppLayout,
  zO as AspectRatio,
  _r as Avatar,
  Cr as AvatarFallback,
  Wn as AvatarImage,
  ht as Badge,
  F8 as BottomNavigation,
  Ve as Button,
  $o as CI_TYPES,
  d$ as Calendar,
  Sh as Card,
  AS as CardContent,
  RS as CardDescription,
  jS as CardFooter,
  MS as CardHeader,
  DS as CardTitle,
  Th as Checkbox,
  R8 as CodeVerification,
  e8 as Collapsible,
  n8 as CollapsibleContent,
  t8 as CollapsibleTrigger,
  Fk as ComboBox,
  L8 as ComboxCheckbox,
  Pn as Command,
  WO as CommandDialog,
  Kn as CommandEmpty,
  Zt as CommandGroup,
  Hn as CommandInput,
  qt as CommandItem,
  Na as CommandList,
  pi as CommandSeparator,
  qN as CommandShortcut,
  $O as ContextMenu,
  M2 as ContextMenuCheckboxItem,
  k2 as ContextMenuContent,
  _O as ContextMenuGroup,
  O2 as ContextMenuItem,
  R2 as ContextMenuLabel,
  CO as ContextMenuPortal,
  EO as ContextMenuRadioGroup,
  D2 as ContextMenuRadioItem,
  A2 as ContextMenuSeparator,
  j2 as ContextMenuShortcut,
  SO as ContextMenuSub,
  T2 as ContextMenuSubContent,
  P2 as ContextMenuSubTrigger,
  wO as ContextMenuTrigger,
  z8 as D4TCardsList,
  O8 as D4TTable,
  $C as Dialog,
  ah as DialogContent,
  SC as DialogDescription,
  _C as DialogFooter,
  wC as DialogHeader,
  CC as DialogTitle,
  PO as DialogTrigger,
  AO as DropdownMenu,
  xE as DropdownMenuCheckboxItem,
  gE as DropdownMenuContent,
  IO as DropdownMenuGroup,
  bE as DropdownMenuItem,
  $E as DropdownMenuLabel,
  LO as DropdownMenuPortal,
  VO as DropdownMenuRadioGroup,
  yE as DropdownMenuRadioItem,
  wE as DropdownMenuSeparator,
  _E as DropdownMenuShortcut,
  FO as DropdownMenuSub,
  vE as DropdownMenuSubContent,
  hE as DropdownMenuSubTrigger,
  jO as DropdownMenuTrigger,
  Km as Form,
  va as FormControl,
  lo as FormDescription,
  Nr as FormField,
  nr as FormItem,
  Pr as FormLabel,
  nC as FormMessage,
  I8 as GenericCombobox,
  M8 as GenericSelect,
  a8 as HoverCard,
  A6 as HoverCardContent,
  s8 as HoverCardTrigger,
  Mk as ImageWithZoom,
  ud as Input,
  TO as InputPID,
  Fo as InputUI,
  fn as Label,
  i8 as LoaderDots,
  iP as Menubar,
  pP as MenubarCheckboxItem,
  uP as MenubarContent,
  d8 as MenubarGroup,
  fP as MenubarItem,
  hP as MenubarLabel,
  l8 as MenubarMenu,
  u8 as MenubarPortal,
  p8 as MenubarRadioGroup,
  mP as MenubarRadioItem,
  vP as MenubarSeparator,
  gP as MenubarShortcut,
  f8 as MenubarSub,
  dP as MenubarSubContent,
  lP as MenubarSubTrigger,
  cP as MenubarTrigger,
  j8 as MultipleImages,
  _b as NavLink,
  y4 as NavLinkNested,
  BP as NavigationMenu,
  GP as NavigationMenuContent,
  ZP as NavigationMenuIndicator,
  h8 as NavigationMenuItem,
  v8 as NavigationMenuLink,
  YP as NavigationMenuList,
  KP as NavigationMenuTrigger,
  Og as NavigationMenuViewport,
  Oi as PHONE_LINE_CODES,
  En as Popover,
  sn as PopoverContent,
  Nn as PopoverTrigger,
  aT as Progress,
  wT as RadioGroup,
  _T as RadioGroupItem,
  g5 as ScrollArea,
  wv as ScrollBar,
  hd as Select,
  ci as SelectContent,
  TS as SelectGroup,
  li as SelectItem,
  kS as SelectLabel,
  OS as SelectSeparator,
  ii as SelectTrigger,
  vd as SelectValue,
  _a as Separator,
  YO as Sheet,
  KO as SheetClose,
  x5 as SheetContent,
  _5 as SheetDescription,
  $5 as SheetFooter,
  y5 as SheetHeader,
  w5 as SheetTitle,
  HO as SheetTrigger,
  E8 as Sidebar,
  N8 as SidebarContent,
  x4 as SidebarFooter,
  Z3 as SidebarHeader,
  XO as Skeleton,
  KT as Slider,
  hl as Spinner,
  D8 as SwatchesPicker,
  F3 as Switch,
  Ev as TableBody,
  S5 as TableCaption,
  vi as TableCell,
  C5 as TableFooter,
  Nv as TableHead,
  Sv as TableHeader,
  Pa as TableRow,
  yd as TableUI,
  $8 as Tabs,
  s3 as TabsContent,
  o3 as TabsList,
  a3 as TabsTrigger,
  OO as TextArea,
  fh as TextareaUI,
  l3 as Toggle,
  b4 as ToggleTheme,
  vr as Tooltip,
  Gn as TooltipContent,
  hr as TooltipProvider,
  gr as TooltipTrigger,
  A8 as UploadImage,
  w$ as badgeVariants,
  Mo as buttonVariants,
  Oa as camelToSnake,
  F as cn,
  as as convertBytes,
  ki as convertHexToRGBA,
  dO as fetcher,
  pO as formatCI,
  zu as formatCITypes,
  gO as formatCodePhoneLines,
  V8 as formatListPagination,
  P8 as formatPagination,
  vO as formatPhone,
  hO as formatPhoneNumber,
  mO as formatRIF,
  Af as generateUUID,
  Gk as generateUUIDToList,
  fO as getMultiOpacityColor,
  U8 as initialListPagination,
  T8 as initialPagination,
  k8 as insertColumn,
  W8 as insertColumnList,
  Kk as listCamelToSnake,
  HP as navigationMenuTriggerStyle,
  uO as simulateFetch,
  c3 as toggleVariants,
  B8 as useFetch,
  ri as useFormField,
  _i as useSidebar
};
//# sourceMappingURL=index.es.js.map
