import * as C from "react";
import T, { useCallback as pe, forwardRef as O, Children as St, isValidElement as In, createElement as x, cloneElement as Jr, Fragment as Ht, createContext as mt, useContext as at, useState as G, useEffect as Q, useRef as j, useMemo as xt, useLayoutEffect as Ms, useReducer as Ds, useDebugValue as qb, useImperativeHandle as Xb, Component as Jb, createRef as ho } from "react";
import * as Qb from "react-dom";
import tl, { flushSync as Rs, createPortal as nl } from "react-dom";
var it = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function e0(e) {
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
function t0() {
  if (Uu)
    return go;
  Uu = 1;
  var e = T, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
function n0() {
  return Wu || (Wu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = T, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = Symbol.iterator, h = "@@iterator";
    function g(N) {
      if (N === null || typeof N != "object")
        return null;
      var ne = v && N[v] || N[h];
      return typeof ne == "function" ? ne : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(N) {
      {
        for (var ne = arguments.length, de = new Array(ne > 1 ? ne - 1 : 0), Ne = 1; Ne < ne; Ne++)
          de[Ne - 1] = arguments[Ne];
        $("error", N, de);
      }
    }
    function $(N, ne, de) {
      {
        var Ne = y.ReactDebugCurrentFrame, je = Ne.getStackAddendum();
        je !== "" && (ne += "%s", de = de.concat([je]));
        var Be = de.map(function(Ae) {
          return String(Ae);
        });
        Be.unshift("Warning: " + ne), Function.prototype.apply.call(console[N], console, Be);
      }
    }
    var _ = !1, w = !1, S = !1, P = !1, D = !1, I;
    I = Symbol.for("react.module.reference");
    function ee(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === r || N === a || D || N === o || N === l || N === u || P || N === m || _ || w || S || typeof N == "object" && N !== null && (N.$$typeof === p || N.$$typeof === d || N.$$typeof === s || N.$$typeof === i || N.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === I || N.getModuleId !== void 0));
    }
    function re(N, ne, de) {
      var Ne = N.displayName;
      if (Ne)
        return Ne;
      var je = ne.displayName || ne.name || "";
      return je !== "" ? de + "(" + je + ")" : de;
    }
    function U(N) {
      return N.displayName || "Context";
    }
    function H(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
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
            var ne = N;
            return U(ne) + ".Consumer";
          case s:
            var de = N;
            return U(de._context) + ".Provider";
          case c:
            return re(N, N.render, "ForwardRef");
          case d:
            var Ne = N.displayName || null;
            return Ne !== null ? Ne : H(N.type) || "Memo";
          case p: {
            var je = N, Be = je._payload, Ae = je._init;
            try {
              return H(Ae(Be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, Z = 0, J, Y, q, A, M, L, W;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function ce() {
      {
        if (Z === 0) {
          J = console.log, Y = console.info, q = console.warn, A = console.error, M = console.group, L = console.groupCollapsed, W = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: oe,
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
        Z++;
      }
    }
    function ye() {
      {
        if (Z--, Z === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, N, {
              value: J
            }),
            info: B({}, N, {
              value: Y
            }),
            warn: B({}, N, {
              value: q
            }),
            error: B({}, N, {
              value: A
            }),
            group: B({}, N, {
              value: M
            }),
            groupCollapsed: B({}, N, {
              value: L
            }),
            groupEnd: B({}, N, {
              value: W
            })
          });
        }
        Z < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var be = y.ReactCurrentDispatcher, te;
    function le(N, ne, de) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (je) {
            var Ne = je.stack.trim().match(/\n( *(at )?)/);
            te = Ne && Ne[1] || "";
          }
        return `
` + te + N;
      }
    }
    var ve = !1, X;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      X = new he();
    }
    function K(N, ne) {
      if (!N || ve)
        return "";
      {
        var de = X.get(N);
        if (de !== void 0)
          return de;
      }
      var Ne;
      ve = !0;
      var je = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Be;
      Be = be.current, be.current = null, ce();
      try {
        if (ne) {
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
            Reflect.construct(N, [], Ae);
          } else {
            try {
              Ae.call();
            } catch (dn) {
              Ne = dn;
            }
            N.call(Ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (dn) {
            Ne = dn;
          }
          N();
        }
      } catch (dn) {
        if (dn && Ne && typeof dn.stack == "string") {
          for (var Me = dn.stack.split(`
`), ht = Ne.stack.split(`
`), tt = Me.length - 1, ot = ht.length - 1; tt >= 1 && ot >= 0 && Me[tt] !== ht[ot]; )
            ot--;
          for (; tt >= 1 && ot >= 0; tt--, ot--)
            if (Me[tt] !== ht[ot]) {
              if (tt !== 1 || ot !== 1)
                do
                  if (tt--, ot--, ot < 0 || Me[tt] !== ht[ot]) {
                    var Ot = `
` + Me[tt].replace(" at new ", " at ");
                    return N.displayName && Ot.includes("<anonymous>") && (Ot = Ot.replace("<anonymous>", N.displayName)), typeof N == "function" && X.set(N, Ot), Ot;
                  }
                while (tt >= 1 && ot >= 0);
              break;
            }
        }
      } finally {
        ve = !1, be.current = Be, ye(), Error.prepareStackTrace = je;
      }
      var Er = N ? N.displayName || N.name : "", Vu = Er ? le(Er) : "";
      return typeof N == "function" && X.set(N, Vu), Vu;
    }
    function Re(N, ne, de) {
      return K(N, !1);
    }
    function Ve(N) {
      var ne = N.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function lt(N, ne, de) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return K(N, Ve(N));
      if (typeof N == "string")
        return le(N);
      switch (N) {
        case l:
          return le("Suspense");
        case u:
          return le("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case c:
            return Re(N.render);
          case d:
            return lt(N.type, ne, de);
          case p: {
            var Ne = N, je = Ne._payload, Be = Ne._init;
            try {
              return lt(Be(je), ne, de);
            } catch {
            }
          }
        }
      return "";
    }
    var k = Object.prototype.hasOwnProperty, F = {}, z = y.ReactDebugCurrentFrame;
    function xe(N) {
      if (N) {
        var ne = N._owner, de = lt(N.type, N._source, ne ? ne.type : null);
        z.setExtraStackFrame(de);
      } else
        z.setExtraStackFrame(null);
    }
    function ue(N, ne, de, Ne, je) {
      {
        var Be = Function.call.bind(k);
        for (var Ae in N)
          if (Be(N, Ae)) {
            var Me = void 0;
            try {
              if (typeof N[Ae] != "function") {
                var ht = Error((Ne || "React class") + ": " + de + " type `" + Ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[Ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ht.name = "Invariant Violation", ht;
              }
              Me = N[Ae](ne, Ae, Ne, de, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tt) {
              Me = tt;
            }
            Me && !(Me instanceof Error) && (xe(je), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ne || "React class", de, Ae, typeof Me), xe(null)), Me instanceof Error && !(Me.message in F) && (F[Me.message] = !0, xe(je), b("Failed %s type: %s", de, Me.message), xe(null));
          }
      }
    }
    var se = Array.isArray;
    function $e(N) {
      return se(N);
    }
    function Ge(N) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, de = ne && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return de;
      }
    }
    function qe(N) {
      try {
        return ln(N), !1;
      } catch {
        return !0;
      }
    }
    function ln(N) {
      return "" + N;
    }
    function Ta(N) {
      if (qe(N))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(N)), ln(N);
    }
    var un = y.ReactCurrentOwner, po = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pa, mo, vo;
    vo = {};
    function ka(N) {
      if (k.call(N, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function Ib(N) {
      if (k.call(N, "key")) {
        var ne = Object.getOwnPropertyDescriptor(N, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function jb(N, ne) {
      if (typeof N.ref == "string" && un.current && ne && un.current.stateNode !== ne) {
        var de = H(un.current.type);
        vo[de] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(un.current.type), N.ref), vo[de] = !0);
      }
    }
    function Lb(N, ne) {
      {
        var de = function() {
          Pa || (Pa = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        de.isReactWarning = !0, Object.defineProperty(N, "key", {
          get: de,
          configurable: !0
        });
      }
    }
    function Fb(N, ne) {
      {
        var de = function() {
          mo || (mo = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        de.isReactWarning = !0, Object.defineProperty(N, "ref", {
          get: de,
          configurable: !0
        });
      }
    }
    var Vb = function(N, ne, de, Ne, je, Be, Ae) {
      var Me = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: N,
        key: ne,
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
    function Ub(N, ne, de, Ne, je) {
      {
        var Be, Ae = {}, Me = null, ht = null;
        de !== void 0 && (Ta(de), Me = "" + de), Ib(ne) && (Ta(ne.key), Me = "" + ne.key), ka(ne) && (ht = ne.ref, jb(ne, je));
        for (Be in ne)
          k.call(ne, Be) && !po.hasOwnProperty(Be) && (Ae[Be] = ne[Be]);
        if (N && N.defaultProps) {
          var tt = N.defaultProps;
          for (Be in tt)
            Ae[Be] === void 0 && (Ae[Be] = tt[Be]);
        }
        if (Me || ht) {
          var ot = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
          Me && Lb(Ae, ot), ht && Fb(Ae, ot);
        }
        return Vb(N, Me, ht, je, Ne, un.current, Ae);
      }
    }
    var gi = y.ReactCurrentOwner, Ru = y.ReactDebugCurrentFrame;
    function Cr(N) {
      if (N) {
        var ne = N._owner, de = lt(N.type, N._source, ne ? ne.type : null);
        Ru.setExtraStackFrame(de);
      } else
        Ru.setExtraStackFrame(null);
    }
    var bi;
    bi = !1;
    function xi(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function Au() {
      {
        if (gi.current) {
          var N = H(gi.current.type);
          if (N)
            return `

Check the render method of \`` + N + "`.";
        }
        return "";
      }
    }
    function Wb(N) {
      {
        if (N !== void 0) {
          var ne = N.fileName.replace(/^.*[\\\/]/, ""), de = N.lineNumber;
          return `

Check your code at ` + ne + ":" + de + ".";
        }
        return "";
      }
    }
    var Iu = {};
    function zb(N) {
      {
        var ne = Au();
        if (!ne) {
          var de = typeof N == "string" ? N : N.displayName || N.name;
          de && (ne = `

Check the top-level render call using <` + de + ">.");
        }
        return ne;
      }
    }
    function ju(N, ne) {
      {
        if (!N._store || N._store.validated || N.key != null)
          return;
        N._store.validated = !0;
        var de = zb(ne);
        if (Iu[de])
          return;
        Iu[de] = !0;
        var Ne = "";
        N && N._owner && N._owner !== gi.current && (Ne = " It was passed a child from " + H(N._owner.type) + "."), Cr(N), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', de, Ne), Cr(null);
      }
    }
    function Lu(N, ne) {
      {
        if (typeof N != "object")
          return;
        if ($e(N))
          for (var de = 0; de < N.length; de++) {
            var Ne = N[de];
            xi(Ne) && ju(Ne, ne);
          }
        else if (xi(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var je = g(N);
          if (typeof je == "function" && je !== N.entries)
            for (var Be = je.call(N), Ae; !(Ae = Be.next()).done; )
              xi(Ae.value) && ju(Ae.value, ne);
        }
      }
    }
    function Bb(N) {
      {
        var ne = N.type;
        if (ne == null || typeof ne == "string")
          return;
        var de;
        if (typeof ne == "function")
          de = ne.propTypes;
        else if (typeof ne == "object" && (ne.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ne.$$typeof === d))
          de = ne.propTypes;
        else
          return;
        if (de) {
          var Ne = H(ne);
          ue(de, N.props, "prop", Ne, N);
        } else if (ne.PropTypes !== void 0 && !bi) {
          bi = !0;
          var je = H(ne);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", je || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Yb(N) {
      {
        for (var ne = Object.keys(N.props), de = 0; de < ne.length; de++) {
          var Ne = ne[de];
          if (Ne !== "children" && Ne !== "key") {
            Cr(N), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ne), Cr(null);
            break;
          }
        }
        N.ref !== null && (Cr(N), b("Invalid attribute `ref` supplied to `React.Fragment`."), Cr(null));
      }
    }
    function Fu(N, ne, de, Ne, je, Be) {
      {
        var Ae = ee(N);
        if (!Ae) {
          var Me = "";
          (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (Me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ht = Wb(je);
          ht ? Me += ht : Me += Au();
          var tt;
          N === null ? tt = "null" : $e(N) ? tt = "array" : N !== void 0 && N.$$typeof === t ? (tt = "<" + (H(N.type) || "Unknown") + " />", Me = " Did you accidentally export a JSX literal instead of a component?") : tt = typeof N, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tt, Me);
        }
        var ot = Ub(N, ne, de, je, Be);
        if (ot == null)
          return ot;
        if (Ae) {
          var Ot = ne.children;
          if (Ot !== void 0)
            if (Ne)
              if ($e(Ot)) {
                for (var Er = 0; Er < Ot.length; Er++)
                  Lu(Ot[Er], N);
                Object.freeze && Object.freeze(Ot);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Lu(Ot, N);
        }
        return N === r ? Yb(ot) : Bb(ot), ot;
      }
    }
    function Hb(N, ne, de) {
      return Fu(N, ne, de, !0);
    }
    function Kb(N, ne, de) {
      return Fu(N, ne, de, !1);
    }
    var Gb = Kb, Zb = Hb;
    bo.Fragment = r, bo.jsx = Gb, bo.jsxs = Zb;
  }()), bo;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = t0() : e.exports = n0();
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
function r0(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ta(...e) {
  return (t) => e.forEach(
    (n) => r0(n, t)
  );
}
function we(...e) {
  return pe(ta(...e), e);
}
const Qt = /* @__PURE__ */ O((e, t) => {
  const { children: n, ...r } = e, o = St.toArray(n), a = o.find(o0);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? St.count(s) > 1 ? St.only(null) : /* @__PURE__ */ In(s) ? s.props.children : null : c);
    return /* @__PURE__ */ x(dc, E({}, r, {
      ref: t
    }), /* @__PURE__ */ In(s) ? /* @__PURE__ */ Jr(s, void 0, i) : null);
  }
  return /* @__PURE__ */ x(dc, E({}, r, {
    ref: t
  }), n);
});
Qt.displayName = "Slot";
const dc = /* @__PURE__ */ O((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ In(n) ? /* @__PURE__ */ Jr(n, {
    ...a0(r, n.props),
    ref: t ? ta(t, n.ref) : n.ref
  }) : St.count(n) > 1 ? St.only(null) : null;
});
dc.displayName = "SlotClone";
const rl = ({ children: e }) => /* @__PURE__ */ x(Ht, null, e);
function o0(e) {
  return /* @__PURE__ */ In(e) && e.type === rl;
}
function a0(e, t) {
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
function Ff(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Ff(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Vf() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Ff(e)) && (r && (r += " "), r += t);
  return r;
}
const zu = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Bu = Vf, Qr = (e, t) => (n) => {
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
  return Bu(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function Mk(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const Dk = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, yi = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, Rk = (e) => {
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
}, Ak = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), Ik = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), jk = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), Lk = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, es = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, Fk = () => [...$i.DIGITAL, ...$i.MOVILNET, ...$i.MOVISTAR], xo = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function s0() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Uf(t)) && (r && (r += " "), r += n);
  return r;
}
function Uf(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = Uf(e[r])) && (n && (n += " "), n += t);
  return n;
}
var ol = "-";
function i0(e) {
  var t = l0(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function a(i) {
    var c = i.split(ol);
    return c[0] === "" && c.length !== 1 && c.shift(), Wf(c, t) || c0(i);
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
function Wf(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? Wf(e.slice(1), r) : void 0;
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
function c0(e) {
  if (Yu.test(e)) {
    var t = Yu.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function l0(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = d0(Object.entries(e.classGroups), n);
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
      if (u0(o)) {
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
function u0(e) {
  return e.isThemeGetter;
}
function d0(e, t) {
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
function f0(e) {
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
var zf = "!";
function p0(e) {
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
    var m = i.length === 0 ? s : s.substring(l), v = m.startsWith(zf), h = v ? m.substring(1) : m, g = u && u > l ? u - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: v,
      baseClassName: h,
      maybePostfixModifierPosition: g
    };
  };
}
function m0(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function v0(e) {
  return {
    cache: f0(e.cacheSize),
    splitModifiers: p0(e),
    ...i0(e)
  };
}
var h0 = /\s+/;
function g0(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(h0).map(function(s) {
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
    var v = m0(c).join(":"), h = l ? v + zf : v;
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
function b0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, a, s = i;
  function i(l) {
    var u = t[0], d = t.slice(1), p = d.reduce(function(m, v) {
      return v(m);
    }, u());
    return r = v0(p), o = r.cache.get, a = r.cache.set, s = c, c(l);
  }
  function c(l) {
    var u = o(l);
    if (u)
      return u;
    var d = g0(l, r);
    return a(l, d), d;
  }
  return function() {
    return s(s0.apply(null, arguments));
  };
}
function Ye(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Bf = /^\[(?:([a-z-]+):)?(.+)\]$/i, x0 = /^\d+\/\d+$/, y0 = /* @__PURE__ */ new Set(["px", "full", "screen"]), $0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, w0 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, _0 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function jt(e) {
  return er(e) || y0.has(e) || x0.test(e) || pc(e);
}
function pc(e) {
  return hr(e, "length", P0);
}
function C0(e) {
  return hr(e, "size", Yf);
}
function E0(e) {
  return hr(e, "position", Yf);
}
function S0(e) {
  return hr(e, "url", k0);
}
function Oa(e) {
  return hr(e, "number", er);
}
function er(e) {
  return !Number.isNaN(Number(e));
}
function N0(e) {
  return e.endsWith("%") && er(e.slice(0, -1));
}
function yo(e) {
  return Ku(e) || hr(e, "number", Ku);
}
function De(e) {
  return Bf.test(e);
}
function $o() {
  return !0;
}
function Pn(e) {
  return $0.test(e);
}
function T0(e) {
  return hr(e, "", O0);
}
function hr(e, t, n) {
  var r = Bf.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function P0(e) {
  return w0.test(e);
}
function Yf() {
  return !1;
}
function k0(e) {
  return e.startsWith("url(");
}
function Ku(e) {
  return Number.isInteger(Number(e));
}
function O0(e) {
  return _0.test(e);
}
function M0() {
  var e = Ye("colors"), t = Ye("spacing"), n = Ye("blur"), r = Ye("brightness"), o = Ye("borderColor"), a = Ye("borderRadius"), s = Ye("borderSpacing"), i = Ye("borderWidth"), c = Ye("contrast"), l = Ye("grayscale"), u = Ye("hueRotate"), d = Ye("invert"), p = Ye("gap"), m = Ye("gradientColorStops"), v = Ye("gradientColorStopPositions"), h = Ye("inset"), g = Ye("margin"), y = Ye("opacity"), b = Ye("padding"), $ = Ye("saturate"), _ = Ye("scale"), w = Ye("sepia"), S = Ye("skew"), P = Ye("space"), D = Ye("translate"), I = function() {
    return ["auto", "contain", "none"];
  }, ee = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, re = function() {
    return ["auto", De, t];
  }, U = function() {
    return [De, t];
  }, H = function() {
    return ["", jt];
  }, B = function() {
    return ["auto", er, De];
  }, Z = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, J = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, Y = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, q = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, A = function() {
    return ["", "0", De];
  }, M = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, L = function() {
    return [er, Oa];
  }, W = function() {
    return [er, De];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [$o],
      spacing: [jt],
      blur: ["none", "", Pn, De],
      brightness: L(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Pn, De],
      borderSpacing: U(),
      borderWidth: H(),
      contrast: L(),
      grayscale: A(),
      hueRotate: W(),
      invert: A(),
      gap: U(),
      gradientColorStops: [e],
      gradientColorStopPositions: [N0, pc],
      inset: re(),
      margin: re(),
      opacity: L(),
      padding: U(),
      saturate: L(),
      scale: L(),
      sepia: A(),
      skew: W(),
      space: U(),
      translate: U()
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
        columns: [Pn]
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
        object: [].concat(Z(), [De])
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
        z: ["auto", yo]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: re()
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
        grow: A()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: A()
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
        justify: ["normal"].concat(q())
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
        content: ["normal"].concat(q(), ["baseline"])
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
        "place-content": [].concat(q(), ["baseline"])
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
        w: ["auto", "min", "max", "fit", De, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", De, jt]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Pn]
        }, Pn, De]
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
        "min-h": ["min", "max", "fit", De, jt]
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
        text: ["base", Pn, pc]
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
        "line-clamp": ["none", er, Oa]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", De, jt]
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
        decoration: [].concat(J(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", jt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", De, jt]
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
        indent: U()
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
        bg: [].concat(Z(), [E0])
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
        bg: ["auto", "cover", "contain", C0]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, S0]
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
        border: [].concat(J(), ["hidden"])
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
        divide: J()
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
        outline: [""].concat(J())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [De, jt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [jt]
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
        ring: H()
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
        "ring-offset": [jt]
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
        shadow: ["", "inner", "none", Pn, T0]
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
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": Y()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Y()
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
        "drop-shadow": ["", "none", Pn, De]
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
        "backdrop-opacity": [y]
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
        duration: W()
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
        delay: W()
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
        "scroll-m": U()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": U()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": U()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": U()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": U()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": U()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": U()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": U()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": U()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": U()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": U()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": U()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": U()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": U()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": U()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": U()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": U()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": U()
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
        stroke: [jt, Oa]
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
var D0 = /* @__PURE__ */ b0(M0);
function R(...e) {
  return D0(Vf(e));
}
const Hf = ({ className: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: R(`spinner h-4 w-4 ${e}`) }), ko = Qr(
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
), Qe = C.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, isLoading: o, children: a, ...s }, i) => {
    const c = r ? Qt : "button";
    return /* @__PURE__ */ f.exports.jsx(
      c,
      {
        className: R(ko({ variant: t, size: n, className: e })),
        ref: i,
        ...s,
        children: o ? /* @__PURE__ */ f.exports.jsx(Hf, {}) : a
      }
    );
  }
);
Qe.displayName = "Button";
var R0 = {
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
const A0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), I0 = (e, t) => {
  const n = O(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: s, children: i, ...c }, l) => x(
      "svg",
      {
        ref: l,
        ...R0,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(a) * 24 / Number(o) : a,
        className: `lucide lucide-${A0(e)}`,
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
var rt = I0;
const en = rt("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), Oo = rt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), Kf = rt("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), na = rt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), Gu = rt("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), mc = rt("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), As = rt("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), Ma = rt("EyeOff", [
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
]), Da = rt("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]), Is = rt("ImageOff", [
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
]), Gf = rt("ImagePlus", [
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
]), j0 = rt("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]), L0 = rt("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]), F0 = rt("PanelLeftClose", [
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
]), V0 = rt("PanelLeftOpen", [
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
]), Zf = rt("PenSquare", [
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
]), qf = rt("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), U0 = rt("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]), Xf = rt("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]), W0 = rt("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), al = rt("X", [
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
    var s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? B0(i, function(d) {
      return d.test(s);
    }) : z0(i, function(d) {
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
function z0(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function B0(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Y0(e) {
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
function Vr(e) {
  return Vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vr(e);
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
  return e instanceof Date || Vr(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
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
function H0(e, t) {
  Ce(2, arguments);
  var n = Oe(e).getTime(), r = ct(t);
  return new Date(n + r);
}
var K0 = {};
function Yn() {
  return K0;
}
function nn(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Yn(), d = ct((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Oe(e), m = p.getDay(), v = (m < d ? 7 : 0) + m - d;
  return p.setDate(p.getDate() - v), p.setHours(0, 0, 0, 0), p;
}
function ar(e) {
  return Ce(1, arguments), nn(e, {
    weekStartsOn: 1
  });
}
function G0(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getFullYear(), r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = ar(r), a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var s = ar(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Z0(e) {
  Ce(1, arguments);
  var t = G0(e), n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = ar(n);
  return r;
}
function Mo(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Ur(e) {
  Ce(1, arguments);
  var t = Oe(e);
  return t.setHours(0, 0, 0, 0), t;
}
var q0 = 864e5;
function hn(e, t) {
  Ce(2, arguments);
  var n = Ur(e), r = Ur(t), o = n.getTime() - Mo(n), a = r.getTime() - Mo(r);
  return Math.round((o - a) / q0);
}
function vc(e, t) {
  Ce(2, arguments);
  var n = ct(t), r = n * 7;
  return Rt(e, r);
}
function X0(e, t) {
  Ce(2, arguments);
  var n = ct(t);
  return tn(e, n * 12);
}
function J0(e) {
  Ce(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (Vr(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = Oe(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || new Date(NaN);
}
function Q0(e) {
  Ce(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (Vr(e) === "object" && e !== null)
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
  var n = Ur(e), r = Ur(t);
  return n.getTime() === r.getTime();
}
function sl(e) {
  return Ce(1, arguments), e instanceof Date || Vr(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function ex(e) {
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
var tx = 6048e5;
function nx(e, t, n) {
  Ce(2, arguments);
  var r = nn(e, n), o = nn(t, n), a = r.getTime() - Mo(r), s = o.getTime() - Mo(o);
  return Math.round((a - s) / tx);
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
function rx(e) {
  Ce(1, arguments);
  var t = Oe(e), n = new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function cl(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Yn(), d = ct((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Oe(e), m = p.getDay(), v = (m < d ? -7 : 0) + 6 - (m - d);
  return p.setDate(p.getDate() + v), p.setHours(23, 59, 59, 999), p;
}
function Jf(e) {
  return Ce(1, arguments), cl(e, {
    weekStartsOn: 1
  });
}
function ox(e, t) {
  Ce(2, arguments);
  var n = ct(t);
  return H0(e, -n);
}
var ax = 864e5;
function sx(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / ax) + 1;
}
function ts(e) {
  Ce(1, arguments);
  var t = 1, n = Oe(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function Qf(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = ts(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = ts(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function ix(e) {
  Ce(1, arguments);
  var t = Qf(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = ts(n);
  return r;
}
var cx = 6048e5;
function lx(e) {
  Ce(1, arguments);
  var t = Oe(e), n = ts(t).getTime() - ix(t).getTime();
  return Math.round(n / cx) + 1;
}
function ns(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Yn(), d = ct((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Oe(e), m = p.getUTCDay(), v = (m < d ? 7 : 0) + m - d;
  return p.setUTCDate(p.getUTCDate() - v), p.setUTCHours(0, 0, 0, 0), p;
}
function ep(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Oe(e), d = u.getUTCFullYear(), p = Yn(), m = ct((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = new Date(0);
  v.setUTCFullYear(d + 1, 0, m), v.setUTCHours(0, 0, 0, 0);
  var h = ns(v, t), g = new Date(0);
  g.setUTCFullYear(d, 0, m), g.setUTCHours(0, 0, 0, 0);
  var y = ns(g, t);
  return u.getTime() >= h.getTime() ? d + 1 : u.getTime() >= y.getTime() ? d : d - 1;
}
function ux(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Yn(), d = ct((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = ep(e, t), m = new Date(0);
  m.setUTCFullYear(p, 0, d), m.setUTCHours(0, 0, 0, 0);
  var v = ns(m, t);
  return v;
}
var dx = 6048e5;
function fx(e, t) {
  Ce(1, arguments);
  var n = Oe(e), r = ns(n, t).getTime() - ux(n, t).getTime();
  return Math.round(r / dx) + 1;
}
function Ue(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var px = {
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
const kn = px;
var Sr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, mx = {
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
    return kn.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, o) {
    var a = ep(t, o), s = a > 0 ? a : 1 - a;
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
    var r = Qf(t);
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
        return kn.M(t, n);
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
    var a = fx(t, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : Ue(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var o = lx(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : Ue(o, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : kn.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var o = sx(t);
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
    switch (o === 12 ? a = Sr.noon : o === 0 ? a = Sr.midnight : a = o / 12 >= 1 ? "pm" : "am", n) {
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
    switch (o >= 17 ? a = Sr.evening : o >= 12 ? a = Sr.afternoon : o >= 4 ? a = Sr.morning : a = Sr.night, n) {
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
    return kn.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : kn.H(t, n);
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
    }) : kn.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : kn.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return kn.S(t, n);
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
        return Jn(s);
      case "XXXXX":
      case "XXX":
      default:
        return Jn(s, ":");
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
        return Jn(s);
      case "xxxxx":
      case "xxx":
      default:
        return Jn(s, ":");
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
        return "GMT" + Jn(s, ":");
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
        return "GMT" + Jn(s, ":");
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
  return Jn(e, t);
}
function Jn(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", o = Math.abs(e), a = Ue(Math.floor(o / 60), 2), s = Ue(o % 60, 2);
  return r + a + n + s;
}
const vx = mx;
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
}, tp = function(t, n) {
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
}, hx = function(t, n) {
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
  return s.replace("{{date}}", Xu(o, n)).replace("{{time}}", tp(a, n));
}, gx = {
  p: tp,
  P: hx
};
const bx = gx;
var xx = ["D", "DD"], yx = ["YY", "YYYY"];
function $x(e) {
  return xx.indexOf(e) !== -1;
}
function wx(e) {
  return yx.indexOf(e) !== -1;
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
var _x = {
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
}, Cx = function(t, n, r) {
  var o, a = _x[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const Ex = Cx;
var Sx = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Nx = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Tx = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Px = {
  date: wi({
    formats: Sx,
    defaultWidth: "full"
  }),
  time: wi({
    formats: Nx,
    defaultWidth: "full"
  }),
  dateTime: wi({
    formats: Tx,
    defaultWidth: "full"
  })
};
const kx = Px;
var Ox = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Mx = function(t, n, r, o) {
  return Ox[t];
};
const Dx = Mx;
var Rx = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Ax = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ix = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, jx = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Lx = {
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
}, Fx = {
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
}, Vx = function(t, n) {
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
}, Ux = {
  ordinalNumber: Vx,
  era: wo({
    values: Rx,
    defaultWidth: "wide"
  }),
  quarter: wo({
    values: Ax,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: wo({
    values: Ix,
    defaultWidth: "wide"
  }),
  day: wo({
    values: jx,
    defaultWidth: "wide"
  }),
  dayPeriod: wo({
    values: Lx,
    defaultWidth: "wide",
    formattingValues: Fx,
    defaultFormattingWidth: "wide"
  })
};
const Wx = Ux;
var zx = /^(\d+)(th|st|nd|rd)?/i, Bx = /\d+/i, Yx = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Hx = {
  any: [/^b/i, /^(a|c)/i]
}, Kx = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Gx = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Zx = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, qx = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Xx = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Jx = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Qx = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ey = {
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
}, ty = {
  ordinalNumber: Y0({
    matchPattern: zx,
    parsePattern: Bx,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: _o({
    matchPatterns: Yx,
    defaultMatchWidth: "wide",
    parsePatterns: Hx,
    defaultParseWidth: "any"
  }),
  quarter: _o({
    matchPatterns: Kx,
    defaultMatchWidth: "wide",
    parsePatterns: Gx,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: _o({
    matchPatterns: Zx,
    defaultMatchWidth: "wide",
    parsePatterns: qx,
    defaultParseWidth: "any"
  }),
  day: _o({
    matchPatterns: Xx,
    defaultMatchWidth: "wide",
    parsePatterns: Jx,
    defaultParseWidth: "any"
  }),
  dayPeriod: _o({
    matchPatterns: Qx,
    defaultMatchWidth: "any",
    parsePatterns: ey,
    defaultParseWidth: "any"
  })
};
const ny = ty;
var ry = {
  code: "en-US",
  formatDistance: Ex,
  formatLong: kx,
  formatRelative: Dx,
  localize: Wx,
  match: ny,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const np = ry;
var oy = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ay = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, sy = /^'([^]*?)'?$/, iy = /''/g, cy = /[a-zA-Z]/;
function gr(e, t, n) {
  var r, o, a, s, i, c, l, u, d, p, m, v, h, g, y, b, $, _;
  Ce(2, arguments);
  var w = String(t), S = Yn(), P = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : S.locale) !== null && r !== void 0 ? r : np, D = ct((a = (s = (i = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && i !== void 0 ? i : S.firstWeekContainsDate) !== null && s !== void 0 ? s : (d = S.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(D >= 1 && D <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var I = ct((m = (v = (h = (g = n == null ? void 0 : n.weekStartsOn) !== null && g !== void 0 ? g : n == null || (y = n.locale) === null || y === void 0 || (b = y.options) === null || b === void 0 ? void 0 : b.weekStartsOn) !== null && h !== void 0 ? h : S.weekStartsOn) !== null && v !== void 0 ? v : ($ = S.locale) === null || $ === void 0 || (_ = $.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(I >= 0 && I <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!P.localize)
    throw new RangeError("locale must contain localize property");
  if (!P.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var ee = Oe(e);
  if (!ex(ee))
    throw new RangeError("Invalid time value");
  var re = Mo(ee), U = ox(ee, re), H = {
    firstWeekContainsDate: D,
    weekStartsOn: I,
    locale: P,
    _originalDate: ee
  }, B = w.match(ay).map(function(Z) {
    var J = Z[0];
    if (J === "p" || J === "P") {
      var Y = bx[J];
      return Y(Z, P.formatLong);
    }
    return Z;
  }).join("").match(oy).map(function(Z) {
    if (Z === "''")
      return "'";
    var J = Z[0];
    if (J === "'")
      return ly(Z);
    var Y = vx[J];
    if (Y)
      return !(n != null && n.useAdditionalWeekYearTokens) && wx(Z) && Ju(Z, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && $x(Z) && Ju(Z, t, String(e)), Y(U, Z, P.localize, H);
    if (J.match(cy))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + J + "`");
    return Z;
  }).join("");
  return B;
}
function ly(e) {
  var t = e.match(sy);
  return t ? t[1].replace(iy, "'") : e;
}
function uy(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getFullYear(), r = t.getMonth(), o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var dy = 6048e5;
function fy(e) {
  Ce(1, arguments);
  var t = Oe(e), n = ar(t).getTime() - Z0(t).getTime();
  return Math.round(n / dy) + 1;
}
function py(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getTime();
  return n;
}
function my(e) {
  return Ce(1, arguments), Math.floor(py(e) / 1e3);
}
function vy(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Oe(e), d = u.getFullYear(), p = Yn(), m = ct((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = new Date(0);
  v.setFullYear(d + 1, 0, m), v.setHours(0, 0, 0, 0);
  var h = nn(v, t), g = new Date(0);
  g.setFullYear(d, 0, m), g.setHours(0, 0, 0, 0);
  var y = nn(g, t);
  return u.getTime() >= h.getTime() ? d + 1 : u.getTime() >= y.getTime() ? d : d - 1;
}
function hy(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Yn(), d = ct((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = vy(e, t), m = new Date(0);
  m.setFullYear(p, 0, d), m.setHours(0, 0, 0, 0);
  var v = nn(m, t);
  return v;
}
var gy = 6048e5;
function by(e, t) {
  Ce(1, arguments);
  var n = Oe(e), r = nn(n, t).getTime() - hy(n, t).getTime();
  return Math.round(r / gy) + 1;
}
function xy(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function yy(e, t) {
  return Ce(1, arguments), nx(xy(e), Nt(e), t) + 1;
}
function rp(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = Oe(t);
  return n.getTime() > r.getTime();
}
function op(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = Oe(t);
  return n.getTime() < r.getTime();
}
function ll(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = Oe(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function $y(e, t) {
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
  var i = uy(s);
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
function wy(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function ap(e, t, n) {
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
var _y = {
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
function Cy(e, t) {
  return gr(e, "LLLL y", t);
}
function Ey(e, t) {
  return gr(e, "d", t);
}
function Sy(e, t) {
  return gr(e, "LLLL", t);
}
function Ny(e) {
  return "".concat(e);
}
function Ty(e, t) {
  return gr(e, "cccccc", t);
}
function Py(e, t) {
  return gr(e, "yyyy", t);
}
var ky = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: Cy,
  formatDay: Ey,
  formatMonthCaption: Sy,
  formatWeekNumber: Ny,
  formatWeekdayName: Ty,
  formatYearCaption: Py
}), Oy = function(e, t, n) {
  return gr(e, "do MMMM (EEEE)", n);
}, My = function() {
  return "Month: ";
}, Dy = function() {
  return "Go to next month";
}, Ry = function() {
  return "Go to previous month";
}, Ay = function(e, t) {
  return gr(e, "cccc", t);
}, Iy = function(e) {
  return "Week n. ".concat(e);
}, jy = function() {
  return "Year: ";
}, Ly = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: Oy,
  labelMonthDropdown: My,
  labelNext: Dy,
  labelPrevious: Ry,
  labelWeekNumber: Iy,
  labelWeekday: Ay,
  labelYearDropdown: jy
});
function Fy() {
  var e = "buttons", t = _y, n = np, r = {}, o = {}, a = 1, s = {}, i = new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: ky,
    labels: Ly,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function Vy(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = Nt(r) : t && (a = new Date(t, 0, 1)), o ? s = il(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? Ur(a) : void 0,
    toDate: s ? Ur(s) : void 0
  };
}
var sp = mt(void 0);
function Uy(e) {
  var t, n = e.initialProps, r = Fy(), o = Vy(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (js(n) || ra(n) || oa(n)) && (c = n.onSelect);
  var l = Ee(Ee(Ee({}, r), n), { captionLayout: i, classNames: Ee(Ee({}, r.classNames), n.classNames), components: Ee({}, n.components), formatters: Ee(Ee({}, r.formatters), n.formatters), fromDate: a, labels: Ee(Ee({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: Ee(Ee({}, r.modifiers), n.modifiers), modifiersClassNames: Ee(Ee({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: Ee(Ee({}, r.styles), n.styles), toDate: s });
  return T.createElement(sp.Provider, { value: l }, e.children);
}
function He() {
  var e = at(sp);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function ip(e) {
  var t = He(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return T.createElement("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id }, a(e.displayMonth, { locale: n }));
}
function Wy(e) {
  return T.createElement(
    "svg",
    Ee({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e),
    T.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function cp(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, l = He(), u = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : Wy;
  return T.createElement(
    "div",
    { className: i, style: c },
    T.createElement("span", { className: l.classNames.vhidden }, e["aria-label"]),
    T.createElement("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: r }, a),
    T.createElement(
      "div",
      { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true" },
      s,
      T.createElement(u, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })
    )
  );
}
function zy(e) {
  var t, n = He(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return T.createElement(T.Fragment, null);
  if (!o)
    return T.createElement(T.Fragment, null);
  var d = [];
  if ($y(r, o))
    for (var p = Nt(r), m = r.getMonth(); m <= o.getMonth(); m++)
      d.push(_i(p, m));
  else
    for (var p = Nt(new Date()), m = 0; m <= 11; m++)
      d.push(_i(p, m));
  var v = function(g) {
    var y = Number(g.target.value), b = _i(Nt(e.displayMonth), y);
    e.onChange(b);
  }, h = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : cp;
  return T.createElement(h, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: v, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }) }, d.map(function(g) {
    return T.createElement("option", { key: g.getMonth(), value: g.getMonth() }, i(g, { locale: s }));
  }));
}
function By(e) {
  var t, n = e.displayMonth, r = He(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, l = r.components, u = r.formatters.formatYearCaption, d = r.labels.labelYearDropdown, p = [];
  if (!o)
    return T.createElement(T.Fragment, null);
  if (!a)
    return T.createElement(T.Fragment, null);
  for (var m = o.getFullYear(), v = a.getFullYear(), h = m; h <= v; h++)
    p.push(ed(rx(new Date()), h));
  var g = function(b) {
    var $ = ed(Nt(n), Number(b.target.value));
    e.onChange($);
  }, y = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : cp;
  return T.createElement(y, { name: "years", "aria-label": d(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: u(n, { locale: s }) }, p.map(function(b) {
    return T.createElement("option", { key: b.getFullYear(), value: b.getFullYear() }, u(b, { locale: s }));
  }));
}
function Yy(e, t) {
  var n = G(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function Hy(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && Do(a, o) < 0) {
    var l = -1 * (c - 1);
    o = tn(a, l);
  }
  return s && Do(o, s) < 0 && (o = s), Nt(o);
}
function Ky() {
  var e = He(), t = Hy(e), n = Yy(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = Nt(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function Gy(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Nt(e), a = Nt(tn(o, r)), s = Do(a, o), i = [], c = 0; c < s; c++) {
    var l = tn(o, c);
    i.push(l);
  }
  return n && (i = i.reverse()), i;
}
function Zy(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Nt(e);
    if (!n)
      return tn(i, s);
    var c = Do(n, e);
    if (!(c < a))
      return tn(i, s);
  }
}
function qy(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Nt(e);
    if (!n)
      return tn(i, -s);
    var c = Do(i, n);
    if (!(c <= 0))
      return tn(i, -s);
  }
}
var lp = mt(void 0);
function Xy(e) {
  var t = He(), n = Ky(), r = n[0], o = n[1], a = Gy(r, t), s = Zy(r, t), i = qy(r, t), c = function(d) {
    return a.some(function(p) {
      return ll(d, p);
    });
  }, l = function(d, p) {
    c(d) || (p && op(d, p) ? o(tn(d, 1 + t.numberOfMonths * -1)) : o(d));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return T.createElement(lp.Provider, { value: u }, e.children);
}
function aa() {
  var e = at(lp);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function td(e) {
  var t, n = He(), r = n.classNames, o = n.styles, a = n.components, s = aa().goToMonth, i = function(u) {
    s(u);
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : ip, l = T.createElement(c, { id: e.id, displayMonth: e.displayMonth });
  return T.createElement(
    "div",
    { className: r.caption_dropdowns, style: o.caption_dropdowns },
    T.createElement("div", { className: r.vhidden }, l),
    T.createElement(zy, { onChange: i, displayMonth: e.displayMonth }),
    T.createElement(By, { onChange: i, displayMonth: e.displayMonth })
  );
}
function Jy(e) {
  return T.createElement(
    "svg",
    Ee({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    T.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function Qy(e) {
  return T.createElement(
    "svg",
    Ee({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    T.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })
  );
}
var rs = O(function(e, t) {
  var n = He(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = Ee(Ee({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), T.createElement("button", Ee({}, e, { ref: t, type: "button", className: s, style: i }));
});
function e1(e) {
  var t, n, r = He(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, l = c.labelPrevious, u = c.labelNext, d = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return T.createElement(T.Fragment, null);
  var p = l(e.previousMonth, { locale: a }), m = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), v = u(e.nextMonth, { locale: a }), h = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = d == null ? void 0 : d.IconRight) !== null && t !== void 0 ? t : Qy, y = (n = d == null ? void 0 : d.IconLeft) !== null && n !== void 0 ? n : Jy;
  return T.createElement(
    "div",
    { className: s.nav, style: i.nav },
    !e.hidePrevious && T.createElement(rs, { name: "previous-month", "aria-label": p, className: m, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick }, o === "rtl" ? T.createElement(g, { className: s.nav_icon, style: i.nav_icon }) : T.createElement(y, { className: s.nav_icon, style: i.nav_icon })),
    !e.hideNext && T.createElement(rs, { name: "next-month", "aria-label": v, className: h, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick }, o === "rtl" ? T.createElement(y, { className: s.nav_icon, style: i.nav_icon }) : T.createElement(g, { className: s.nav_icon, style: i.nav_icon }))
  );
}
function nd(e) {
  var t = He().numberOfMonths, n = aa(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(v) {
    return ll(e.displayMonth, v);
  }), c = i === 0, l = i === s.length - 1, u = t > 1 && (c || !l), d = t > 1 && (l || !c), p = function() {
    r && a(r);
  }, m = function() {
    o && a(o);
  };
  return T.createElement(e1, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: d, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: m });
}
function t1(e) {
  var t, n = He(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : ip, l;
  return o ? l = T.createElement(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? l = T.createElement(td, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? l = T.createElement(
    T.Fragment,
    null,
    T.createElement(td, { displayMonth: e.displayMonth, id: e.id }),
    T.createElement(nd, { displayMonth: e.displayMonth, id: e.id })
  ) : l = T.createElement(
    T.Fragment,
    null,
    T.createElement(c, { id: e.id, displayMonth: e.displayMonth }),
    T.createElement(nd, { displayMonth: e.displayMonth, id: e.id })
  ), T.createElement("div", { className: r.caption, style: a.caption }, l);
}
function n1(e) {
  var t = He(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? T.createElement(
    "tfoot",
    { className: o, style: r.tfoot },
    T.createElement(
      "tr",
      null,
      T.createElement("td", { colSpan: 8 }, n)
    )
  ) : T.createElement(T.Fragment, null);
}
function r1(e, t, n) {
  for (var r = n ? ar(new Date()) : nn(new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = Rt(r, a);
    o.push(s);
  }
  return o;
}
function o1() {
  var e = He(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = r1(o, a, s);
  return T.createElement(
    "tr",
    { style: n.head_row, className: t.head_row },
    r && T.createElement("td", { style: n.head_cell, className: t.head_cell }),
    l.map(function(u, d) {
      return T.createElement("th", { key: d, scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(u, { locale: o }) }, i(u, { locale: o }));
    })
  );
}
function a1() {
  var e, t = He(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : o1;
  return T.createElement(
    "thead",
    { style: r.head, className: n.head },
    T.createElement(a, null)
  );
}
function s1(e) {
  var t = He(), n = t.locale, r = t.formatters.formatDay;
  return T.createElement(T.Fragment, null, r(e.date, { locale: n }));
}
var ul = mt(void 0);
function i1(e) {
  if (!ra(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return T.createElement(ul.Provider, { value: t }, e.children);
  }
  return T.createElement(c1, { initialProps: e.initialProps, children: e.children });
}
function c1(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, u, d) {
    var p, m;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, l, u, d);
    var v = Boolean(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!v) {
      var h = Boolean(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!h) {
        var g = r ? ap([], r, !0) : [];
        if (u.selected) {
          var y = g.findIndex(function(b) {
            return Et(l, b);
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
      return Et(p, l);
    });
    return Boolean(u && !d);
  });
  var c = {
    selected: r,
    onDayClick: s,
    modifiers: i
  };
  return T.createElement(ul.Provider, { value: c }, n);
}
function dl() {
  var e = at(ul);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function l1(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  if (!r)
    return { from: e, to: void 0 };
  if (!o && Et(r, e))
    return { from: r, to: e };
  if (!o && op(e, r))
    return { from: e, to: r };
  if (!o)
    return { from: r, to: e };
  if (!(Et(o, e) && Et(r, e))) {
    if (Et(o, e))
      return { from: o, to: void 0 };
    if (!Et(r, e))
      return rp(r, e) ? { from: e, to: o } : { from: r, to: e };
  }
}
var fl = mt(void 0);
function u1(e) {
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
    return T.createElement(fl.Provider, { value: t }, e.children);
  }
  return T.createElement(d1, { initialProps: e.initialProps, children: e.children });
}
function d1(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, l = function(m, v, h) {
    var g, y;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, m, v, h);
    var b = l1(m, r);
    (y = t.onSelect) === null || y === void 0 || y.call(t, b, m, v, h);
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
    var d = hn(s, a) + 1, p = c - d;
    u.disabled.push({
      before: Qu(a, p)
    }), u.disabled.push({
      after: Rt(s, p)
    });
  }
  return T.createElement(fl.Provider, { value: { selected: r, onDayClick: l, modifiers: u } }, n);
}
function pl() {
  var e = at(fl);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Ga(e) {
  return Array.isArray(e) ? ap([], e, !0) : e !== void 0 ? [e] : [];
}
function f1(e) {
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
var p1 = Kt.Selected, fn = Kt.Disabled, m1 = Kt.Hidden, v1 = Kt.Today, Ci = Kt.RangeEnd, Ei = Kt.RangeMiddle, Si = Kt.RangeStart, h1 = Kt.Outside;
function g1(e, t, n) {
  var r, o = (r = {}, r[p1] = Ga(e.selected), r[fn] = Ga(e.disabled), r[m1] = Ga(e.hidden), r[v1] = [e.today], r[Ci] = [], r[Ei] = [], r[Si] = [], r[h1] = [], r);
  return e.fromDate && o[fn].push({ before: e.fromDate }), e.toDate && o[fn].push({ after: e.toDate }), ra(e) ? o[fn] = o[fn].concat(t.modifiers[fn]) : oa(e) && (o[fn] = o[fn].concat(n.modifiers[fn]), o[Si] = n.modifiers[Si], o[Ei] = n.modifiers[Ei], o[Ci] = n.modifiers[Ci]), o;
}
var up = mt(void 0);
function b1(e) {
  var t = He(), n = dl(), r = pl(), o = g1(t, n, r), a = f1(t.modifiers), s = Ee(Ee({}, o), a);
  return T.createElement(up.Provider, { value: s }, e.children);
}
function dp() {
  var e = at(up);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function x1(e) {
  return Boolean(e && typeof e == "object" && "before" in e && "after" in e);
}
function y1(e) {
  return Boolean(e && typeof e == "object" && "from" in e);
}
function $1(e) {
  return Boolean(e && typeof e == "object" && "after" in e);
}
function w1(e) {
  return Boolean(e && typeof e == "object" && "before" in e);
}
function _1(e) {
  return Boolean(e && typeof e == "object" && "dayOfWeek" in e);
}
function C1(e, t) {
  var n, r = t.from, o = t.to;
  if (!r)
    return !1;
  if (!o && Et(r, e))
    return !0;
  if (!o)
    return !1;
  var a = hn(o, r) < 0;
  a && (n = [o, r], r = n[0], o = n[1]);
  var s = hn(e, r) >= 0 && hn(o, e) >= 0;
  return s;
}
function E1(e) {
  return sl(e);
}
function S1(e) {
  return Array.isArray(e) && e.every(sl);
}
function N1(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (E1(n))
      return Et(e, n);
    if (S1(n))
      return n.includes(e);
    if (y1(n))
      return C1(e, n);
    if (_1(n))
      return n.dayOfWeek.includes(e.getDay());
    if (x1(n)) {
      var r = hn(n.before, e), o = hn(n.after, e), a = r > 0, s = o < 0, i = rp(n.before, n.after);
      return i ? s && a : a || s;
    }
    return $1(n) ? hn(e, n.after) > 0 : w1(n) ? hn(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function ml(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return N1(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !ll(e, n) && (o.outside = !0), o;
}
function T1(e, t) {
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
var P1 = 365;
function fp(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, l = o.fromDate, u = o.toDate, d = o.locale, p = {
    day: Rt,
    week: vc,
    month: tn,
    year: X0,
    startOfWeek: function(g) {
      return o.ISOWeek ? ar(g) : nn(g, { locale: d, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? Jf(g) : cl(g, { locale: d, weekStartsOn: c });
    }
  }, m = p[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? m = J0([l, m]) : r === "after" && u && (m = Q0([u, m]));
  var v = !0;
  if (a) {
    var h = ml(m, a);
    v = !h.disabled && !h.hidden;
  }
  return v ? m : i.count > P1 ? i.lastFocused : fp(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: Ee(Ee({}, i), { count: i.count + 1 })
  });
}
var pp = mt(void 0);
function k1(e) {
  var t = aa(), n = dp(), r = G(), o = r[0], a = r[1], s = G(), i = s[0], c = s[1], l = T1(t.displayMonths, n), u = o ?? (i && t.isDateDisplayed(i)) ? i : l, d = function() {
    c(o), a(void 0);
  }, p = function(g) {
    a(g);
  }, m = He(), v = function(g, y) {
    if (o) {
      var b = fp(o, {
        moveBy: g,
        direction: y,
        context: m,
        modifiers: n
      });
      Et(o, b) || (t.goToDate(b, o), p(b));
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
  return T.createElement(pp.Provider, { value: h }, e.children);
}
function vl() {
  var e = at(pp);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function O1(e, t) {
  var n = dp(), r = ml(e, n, t);
  return r;
}
var hl = mt(void 0);
function M1(e) {
  if (!js(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return T.createElement(hl.Provider, { value: t }, e.children);
  }
  return T.createElement(D1, { initialProps: e.initialProps, children: e.children });
}
function D1(e) {
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
  return T.createElement(hl.Provider, { value: o }, n);
}
function mp() {
  var e = at(hl);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function R1(e, t) {
  var n = He(), r = mp(), o = dl(), a = pl(), s = vl(), i = s.focusDayAfter, c = s.focusDayBefore, l = s.focusWeekAfter, u = s.focusWeekBefore, d = s.blur, p = s.focus, m = s.focusMonthBefore, v = s.focusMonthAfter, h = s.focusYearBefore, g = s.focusYearAfter, y = s.focusStartOfWeek, b = s.focusEndOfWeek, $ = function(Y) {
    var q, A, M, L;
    js(n) ? (q = r.onDayClick) === null || q === void 0 || q.call(r, e, t, Y) : ra(n) ? (A = o.onDayClick) === null || A === void 0 || A.call(o, e, t, Y) : oa(n) ? (M = a.onDayClick) === null || M === void 0 || M.call(a, e, t, Y) : (L = n.onDayClick) === null || L === void 0 || L.call(n, e, t, Y);
  }, _ = function(Y) {
    var q;
    p(e), (q = n.onDayFocus) === null || q === void 0 || q.call(n, e, t, Y);
  }, w = function(Y) {
    var q;
    d(), (q = n.onDayBlur) === null || q === void 0 || q.call(n, e, t, Y);
  }, S = function(Y) {
    var q;
    (q = n.onDayMouseEnter) === null || q === void 0 || q.call(n, e, t, Y);
  }, P = function(Y) {
    var q;
    (q = n.onDayMouseLeave) === null || q === void 0 || q.call(n, e, t, Y);
  }, D = function(Y) {
    var q;
    (q = n.onDayPointerEnter) === null || q === void 0 || q.call(n, e, t, Y);
  }, I = function(Y) {
    var q;
    (q = n.onDayPointerLeave) === null || q === void 0 || q.call(n, e, t, Y);
  }, ee = function(Y) {
    var q;
    (q = n.onDayTouchCancel) === null || q === void 0 || q.call(n, e, t, Y);
  }, re = function(Y) {
    var q;
    (q = n.onDayTouchEnd) === null || q === void 0 || q.call(n, e, t, Y);
  }, U = function(Y) {
    var q;
    (q = n.onDayTouchMove) === null || q === void 0 || q.call(n, e, t, Y);
  }, H = function(Y) {
    var q;
    (q = n.onDayTouchStart) === null || q === void 0 || q.call(n, e, t, Y);
  }, B = function(Y) {
    var q;
    (q = n.onDayKeyUp) === null || q === void 0 || q.call(n, e, t, Y);
  }, Z = function(Y) {
    var q;
    switch (Y.key) {
      case "ArrowLeft":
        Y.preventDefault(), Y.stopPropagation(), n.dir === "rtl" ? i() : c();
        break;
      case "ArrowRight":
        Y.preventDefault(), Y.stopPropagation(), n.dir === "rtl" ? c() : i();
        break;
      case "ArrowDown":
        Y.preventDefault(), Y.stopPropagation(), l();
        break;
      case "ArrowUp":
        Y.preventDefault(), Y.stopPropagation(), u();
        break;
      case "PageUp":
        Y.preventDefault(), Y.stopPropagation(), Y.shiftKey ? h() : m();
        break;
      case "PageDown":
        Y.preventDefault(), Y.stopPropagation(), Y.shiftKey ? g() : v();
        break;
      case "Home":
        Y.preventDefault(), Y.stopPropagation(), y();
        break;
      case "End":
        Y.preventDefault(), Y.stopPropagation(), b();
        break;
    }
    (q = n.onDayKeyDown) === null || q === void 0 || q.call(n, e, t, Y);
  }, J = {
    onClick: $,
    onFocus: _,
    onBlur: w,
    onKeyDown: Z,
    onKeyUp: B,
    onMouseEnter: S,
    onMouseLeave: P,
    onPointerEnter: D,
    onPointerLeave: I,
    onTouchCancel: ee,
    onTouchEnd: re,
    onTouchMove: U,
    onTouchStart: H
  };
  return J;
}
function A1() {
  var e = He(), t = mp(), n = dl(), r = pl(), o = js(e) ? t.selected : ra(e) ? n.selected : oa(e) ? r.selected : void 0;
  return o;
}
function I1(e) {
  return Object.values(Kt).includes(e);
}
function j1(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (I1(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function L1(e, t) {
  var n = Ee({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = Ee(Ee({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function F1(e, t, n) {
  var r, o, a, s = He(), i = vl(), c = O1(e, t), l = R1(e, c), u = A1(), d = Boolean(s.onDayClick || s.mode !== "default");
  Q(function() {
    var S;
    c.outside || i.focusedDay && d && Et(i.focusedDay, e) && ((S = n.current) === null || S === void 0 || S.focus());
  }, [
    i.focusedDay,
    e,
    n,
    d,
    c.outside
  ]);
  var p = j1(s, c).join(" "), m = L1(s, c), v = Boolean(c.outside && !s.showOutsideDays || c.hidden), h = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : s1, g = T.createElement(h, { date: e, displayMonth: t, activeModifiers: c }), y = {
    style: m,
    className: p,
    children: g,
    role: "gridcell"
  }, b = i.focusTarget && Et(i.focusTarget, e) && !c.outside, $ = i.focusedDay && Et(i.focusedDay, e), _ = Ee(Ee(Ee({}, y), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = $ || b ? 0 : -1, r)), l), w = {
    isButton: d,
    isHidden: v,
    activeModifiers: c,
    selectedDays: u,
    buttonProps: _,
    divProps: y
  };
  return w;
}
function V1(e) {
  var t = j(null), n = F1(e.date, e.displayMonth, t);
  return n.isHidden ? T.createElement("div", { role: "gridcell" }) : n.isButton ? T.createElement(rs, Ee({ name: "day", ref: t }, n.buttonProps)) : T.createElement("div", Ee({}, n.divProps));
}
function U1(e) {
  var t = e.number, n = e.dates, r = He(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(t), { locale: i });
  if (!o)
    return T.createElement("span", { className: s.weeknumber, style: a.weeknumber }, u);
  var d = c(Number(t), { locale: i }), p = function(m) {
    o(t, n, m);
  };
  return T.createElement(rs, { name: "week-number", "aria-label": d, className: s.weeknumber, style: a.weeknumber, onClick: p }, u);
}
function W1(e) {
  var t, n, r = He(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : V1, l = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : U1, u;
  return s && (u = T.createElement(
    "td",
    { className: a.cell, style: o.cell },
    T.createElement(l, { number: e.weekNumber, dates: e.dates })
  )), T.createElement(
    "tr",
    { className: a.row, style: o.row },
    u,
    e.dates.map(function(d) {
      return T.createElement(
        "td",
        { className: a.cell, style: o.cell, key: my(d), role: "presentation" },
        T.createElement(c, { displayMonth: e.displayMonth, date: d })
      );
    })
  );
}
function rd(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Jf(t) : cl(t, n), o = n != null && n.ISOWeek ? ar(e) : nn(e, n), a = hn(r, o), s = [], i = 0; i <= a; i++)
    s.push(Rt(o, i));
  var c = s.reduce(function(l, u) {
    var d = n != null && n.ISOWeek ? fy(u) : by(u, n), p = l.find(function(m) {
      return m.weekNumber === d;
    });
    return p ? (p.dates.push(u), l) : (l.push({
      weekNumber: d,
      dates: [u]
    }), l);
  }, []);
  return c;
}
function z1(e, t) {
  var n = rd(Nt(e), il(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = yy(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = vc(a, 6 - r), i = rd(vc(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function B1(e) {
  var t, n, r, o = He(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, l = o.fixedWeeks, u = o.components, d = o.weekStartsOn, p = o.firstWeekContainsDate, m = o.ISOWeek, v = z1(e.displayMonth, {
    useFixedWeeks: Boolean(l),
    ISOWeek: m,
    locale: a,
    weekStartsOn: d,
    firstWeekContainsDate: p
  }), h = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : a1, g = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : W1, y = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : n1;
  return T.createElement(
    "table",
    { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"] },
    !c && T.createElement(h, null),
    T.createElement("tbody", { className: s.tbody, style: i.tbody, role: "rowgroup" }, v.map(function(b) {
      return T.createElement(g, { displayMonth: e.displayMonth, key: b.weekNumber, dates: b.dates, weekNumber: b.weekNumber });
    })),
    T.createElement(y, { displayMonth: e.displayMonth })
  );
}
function Y1() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var H1 = Y1() ? C.useLayoutEffect : C.useEffect, Ni = !1, K1 = 0;
function od() {
  return "react-day-picker-".concat(++K1);
}
function G1(e) {
  var t, n = e ?? (Ni ? od() : null), r = C.useState(n), o = r[0], a = r[1];
  return H1(function() {
    o === null && a(od());
  }, []), C.useEffect(function() {
    Ni === !1 && (Ni = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function Z1(e) {
  var t, n, r = He(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = aa().displayMonths, l = G1(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, d = [a.month], p = s.month, m = e.displayIndex === 0, v = e.displayIndex === c.length - 1, h = !m && !v;
  o === "rtl" && (t = [m, v], v = t[0], m = t[1]), m && (d.push(a.caption_start), p = Ee(Ee({}, p), s.caption_start)), v && (d.push(a.caption_end), p = Ee(Ee({}, p), s.caption_end)), h && (d.push(a.caption_between), p = Ee(Ee({}, p), s.caption_between));
  var g = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : t1;
  return T.createElement(
    "div",
    { key: e.displayIndex, className: d.join(" "), style: p },
    T.createElement(g, { id: l, displayMonth: e.displayMonth }),
    T.createElement(B1, { id: u, "aria-labelledby": l, displayMonth: e.displayMonth })
  );
}
function q1(e) {
  var t = e.initialProps, n = He(), r = vl(), o = aa(), a = G(!1), s = a[0], i = a[1];
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
  var l = Ee(Ee({}, n.styles.root), n.style), u = Object.keys(t).filter(function(d) {
    return d.startsWith("data-");
  }).reduce(function(d, p) {
    var m;
    return Ee(Ee({}, d), (m = {}, m[p] = t[p], m));
  }, {});
  return T.createElement(
    "div",
    Ee({ className: c.join(" "), style: l, dir: n.dir, id: n.id }, u),
    T.createElement("div", { className: n.classNames.months, style: n.styles.months }, o.displayMonths.map(function(d, p) {
      return T.createElement(Z1, { key: p, displayIndex: p, displayMonth: d });
    }))
  );
}
function X1(e) {
  var t = e.children, n = wy(e, ["children"]);
  return T.createElement(
    Uy,
    { initialProps: n },
    T.createElement(
      Xy,
      null,
      T.createElement(
        M1,
        { initialProps: n },
        T.createElement(
          i1,
          { initialProps: n },
          T.createElement(
            u1,
            { initialProps: n },
            T.createElement(
              b1,
              null,
              T.createElement(k1, null, t)
            )
          )
        )
      )
    )
  );
}
function J1(e) {
  return T.createElement(
    X1,
    Ee({}, e),
    T.createElement(q1, { initialProps: e })
  );
}
function Q1({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ f.exports.jsx(
    J1,
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
        day: R(
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
        IconLeft: ({ ...o }) => /* @__PURE__ */ f.exports.jsx(Kf, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ f.exports.jsx(na, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
Q1.displayName = "Calendar";
function e$(e, t) {
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
    const s = at(n);
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
      const { scope: p, children: m, ...v } = d, h = (p == null ? void 0 : p[e][c]) || i, g = xt(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ x(h.Provider, {
        value: g
      }, m);
    }
    function u(d, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, v = at(m);
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
    t$(o, ...t)
  ];
}
function t$(...e) {
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
  const t = j(e);
  return Q(() => {
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
}, n$ = [
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
], ie = n$.reduce((e, t) => {
  const n = /* @__PURE__ */ O((r, o) => {
    const { asChild: a, ...s } = r, i = a ? Qt : t;
    return Q(() => {
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
const vp = "Avatar", [r$, Vk] = Ke(vp), [o$, hp] = r$(vp), a$ = /* @__PURE__ */ O((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = G("idle");
  return /* @__PURE__ */ x(o$, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ x(ie.span, E({}, r, {
    ref: t
  })));
}), s$ = "AvatarImage", i$ = /* @__PURE__ */ O((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = hp(s$, n), i = u$(r), c = We((l) => {
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
}), c$ = "AvatarFallback", l$ = /* @__PURE__ */ O((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = hp(c$, n), [s, i] = G(r === void 0);
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
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ x(ie.span, E({}, o, {
    ref: t
  })) : null;
});
function u$(e) {
  const [t, n] = G("idle");
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
const gp = a$, bp = i$, xp = l$, eo = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  gp,
  {
    ref: n,
    className: R(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
eo.displayName = gp.displayName;
const to = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  bp,
  {
    ref: n,
    className: R("aspect-square h-full w-full", e),
    ...t
  }
));
to.displayName = bp.displayName;
const no = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  xp,
  {
    ref: n,
    className: R(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
no.displayName = xp.displayName;
const d$ = Qr(
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
function Wt({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ f.exports.jsx("div", { className: R(d$({ variant: t }), e), ...n });
}
function V(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Hn(e) {
  const t = e + "CollectionProvider", [n, r] = Ke(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), s = (m) => {
    const { scope: v, children: h } = m, g = T.useRef(null), y = T.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ T.createElement(o, {
      scope: v,
      itemMap: y,
      collectionRef: g
    }, h);
  }, i = e + "CollectionSlot", c = /* @__PURE__ */ T.forwardRef((m, v) => {
    const { scope: h, children: g } = m, y = a(i, h), b = we(v, y.collectionRef);
    return /* @__PURE__ */ T.createElement(Qt, {
      ref: b
    }, g);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ T.forwardRef((m, v) => {
    const { scope: h, children: g, ...y } = m, b = T.useRef(null), $ = we(v, b), _ = a(l, h);
    return T.useEffect(() => (_.itemMap.set(b, {
      ref: b,
      ...y
    }), () => void _.itemMap.delete(b))), /* @__PURE__ */ T.createElement(Qt, {
      [u]: "",
      ref: $
    }, g);
  });
  function p(m) {
    const v = a(e + "CollectionConsumer", m);
    return T.useCallback(() => {
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
const f$ = /* @__PURE__ */ mt(void 0);
function sn(e) {
  const t = at(f$);
  return e || t || "ltr";
}
function p$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e);
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
const hc = "dismissableLayer.update", m$ = "dismissableLayer.pointerDownOutside", v$ = "dismissableLayer.focusOutside";
let ad;
const h$ = /* @__PURE__ */ mt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), br = /* @__PURE__ */ O((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...l } = e, u = at(h$), [d, p] = G(null), m = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, v] = G({}), h = we(
    t,
    (D) => p(D)
  ), g = Array.from(u.layers), [y] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), b = g.indexOf(y), $ = d ? g.indexOf(d) : -1, _ = u.layersWithOutsidePointerEventsDisabled.size > 0, w = $ >= b, S = g$((D) => {
    const I = D.target, ee = [
      ...u.branches
    ].some(
      (re) => re.contains(I)
    );
    !w || ee || (a == null || a(D), i == null || i(D), D.defaultPrevented || c == null || c());
  }, m), P = b$((D) => {
    const I = D.target;
    [
      ...u.branches
    ].some(
      (re) => re.contains(I)
    ) || (s == null || s(D), i == null || i(D), D.defaultPrevented || c == null || c());
  }, m);
  return p$((D) => {
    $ === u.layers.size - 1 && (o == null || o(D), !D.defaultPrevented && c && (D.preventDefault(), c()));
  }, m), Q(() => {
    if (d)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (ad = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), sd(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = ad);
      };
  }, [
    d,
    m,
    r,
    u
  ]), Q(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), sd());
  }, [
    d,
    u
  ]), Q(() => {
    const D = () => v({});
    return document.addEventListener(hc, D), () => document.removeEventListener(hc, D);
  }, []), /* @__PURE__ */ x(ie.div, E({}, l, {
    ref: h,
    style: {
      pointerEvents: _ ? w ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: V(e.onFocusCapture, P.onFocusCapture),
    onBlurCapture: V(e.onBlurCapture, P.onBlurCapture),
    onPointerDownCapture: V(e.onPointerDownCapture, S.onPointerDownCapture)
  }));
});
function g$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e), r = j(!1), o = j(() => {
  });
  return Q(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          yp(m$, n, c, {
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
function b$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e), r = j(!1);
  return Q(() => {
    const o = (a) => {
      a.target && !r.current && yp(v$, n, {
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
  const e = new CustomEvent(hc);
  document.dispatchEvent(e);
}
function yp(e, t, n, { discrete: r }) {
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
  Q(() => {
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
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = G(null), l = We(o), u = We(a), d = j(null), p = we(
    t,
    (h) => c(h)
  ), m = j({
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
      let h = function($) {
        if (m.paused || !i)
          return;
        const _ = $.target;
        i.contains(_) ? d.current = _ : Mn(d.current, {
          select: !0
        });
      }, g = function($) {
        if (m.paused || !i)
          return;
        const _ = $.relatedTarget;
        _ !== null && (i.contains(_) || Mn(d.current, {
          select: !0
        }));
      }, y = function($) {
        const _ = document.activeElement;
        for (const w of $)
          w.removedNodes.length > 0 && (i != null && i.contains(_) || Mn(i));
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
      ud.add(m);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const y = new CustomEvent(Pi, cd);
        i.addEventListener(Pi, l), i.dispatchEvent(y), y.defaultPrevented || (x$(C$($p(i)), {
          select: !0
        }), document.activeElement === h && Mn(i));
      }
      return () => {
        i.removeEventListener(Pi, l), setTimeout(() => {
          const y = new CustomEvent(ki, cd);
          i.addEventListener(ki, u), i.dispatchEvent(y), y.defaultPrevented || Mn(h ?? document.body, {
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
  const v = pe((h) => {
    if (!n && !r || m.paused)
      return;
    const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, y = document.activeElement;
    if (g && y) {
      const b = h.currentTarget, [$, _] = y$(b);
      $ && _ ? !h.shiftKey && y === _ ? (h.preventDefault(), n && Mn($, {
        select: !0
      })) : h.shiftKey && y === $ && (h.preventDefault(), n && Mn(_, {
        select: !0
      })) : y === b && h.preventDefault();
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
    onKeyDown: v
  }));
});
function x$(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Mn(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function y$(e) {
  const t = $p(e), n = ld(t, e), r = ld(t.reverse(), e);
  return [
    n,
    r
  ];
}
function $p(e) {
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
    if (!$$(n, {
      upTo: t
    }))
      return n;
}
function $$(e, { upTo: t }) {
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
function w$(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Mn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && w$(e) && t && e.select();
  }
}
const ud = _$();
function _$() {
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
function C$(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const E$ = C["useId".toString()] || (() => {
});
let S$ = 0;
function nt(e) {
  const [t, n] = C.useState(E$());
  return ft(() => {
    e || n(
      (r) => r ?? String(S$++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const N$ = ["top", "right", "bottom", "left"], jn = Math.min, Pt = Math.max, as = Math.round, Ra = Math.floor, Ln = (e) => ({
  x: e,
  y: e
}), T$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, P$ = {
  start: "end",
  end: "start"
};
function gc(e, t, n) {
  return Pt(e, jn(t, n));
}
function xn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function yn(e) {
  return e.split("-")[0];
}
function ro(e) {
  return e.split("-")[1];
}
function gl(e) {
  return e === "x" ? "y" : "x";
}
function bl(e) {
  return e === "y" ? "height" : "width";
}
function oo(e) {
  return ["top", "bottom"].includes(yn(e)) ? "y" : "x";
}
function xl(e) {
  return gl(oo(e));
}
function k$(e, t, n) {
  n === void 0 && (n = !1);
  const r = ro(e), o = xl(e), a = bl(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = ss(s)), [s, ss(s)];
}
function O$(e) {
  const t = ss(e);
  return [bc(e), t, bc(t)];
}
function bc(e) {
  return e.replace(/start|end/g, (t) => P$[t]);
}
function M$(e, t, n) {
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
function D$(e, t, n, r) {
  const o = ro(e);
  let a = M$(yn(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(bc)))), a;
}
function ss(e) {
  return e.replace(/left|right|bottom|top/g, (t) => T$[t]);
}
function R$(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function wp(e) {
  return typeof e != "number" ? R$(e) : {
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
  const a = oo(t), s = xl(t), i = bl(s), c = yn(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
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
  switch (ro(t)) {
    case "start":
      m[s] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      m[s] += p * (n && l ? -1 : 1);
      break;
  }
  return m;
}
const A$ = async (e, t, n) => {
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
  } = fd(l, r, c), p = r, m = {}, v = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: g,
      fn: y
    } = i[h], {
      x: b,
      y: $,
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
    if (u = b ?? u, d = $ ?? d, m = {
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
      } = fd(l, p, c)), h = -1;
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
  } = xn(t, e), v = wp(m), g = i[p ? d === "floating" ? "reference" : "floating" : d], y = is(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), b = d === "floating" ? {
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
    rect: b,
    offsetParent: $,
    strategy: c
  }) : b);
  return {
    top: (y.top - w.top + v.top) / _.y,
    bottom: (w.bottom - y.bottom + v.bottom) / _.y,
    left: (y.left - w.left + v.left) / _.x,
    right: (w.right - y.right + v.right) / _.x
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
    const u = wp(l), d = {
      x: n,
      y: r
    }, p = xl(o), m = bl(p), v = await s.getDimensions(c), h = p === "y", g = h ? "top" : "left", y = h ? "bottom" : "right", b = h ? "clientHeight" : "clientWidth", $ = a.reference[m] + a.reference[p] - d[p] - a.floating[m], _ = d[p] - a.reference[p], w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let S = w ? w[b] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(w))) && (S = i.floating[b] || a.floating[m]);
    const P = $ / 2 - _ / 2, D = S / 2 - v[m] / 2 - 1, I = jn(u[g], D), ee = jn(u[y], D), re = I, U = S - v[m] - ee, H = S / 2 - v[m] / 2 + P, B = gc(re, H, U), J = ro(o) != null && H != B && a.reference[m] / 2 - (H < re ? I : ee) - v[m] / 2 < 0 ? H < re ? re - H : U - H : 0;
    return {
      [p]: d[p] - J,
      data: {
        [p]: B,
        centerOffset: H - B + J
      }
    };
  }
}), I$ = function(e) {
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
      } = xn(e, t), g = yn(r), y = yn(s) === s, b = await (i.isRTL == null ? void 0 : i.isRTL(c.floating)), $ = d || (y || !v ? [ss(s)] : O$(s));
      !d && m !== "none" && $.push(...D$(s, v, m, b));
      const _ = [s, ...$], w = await Ro(t, h), S = [];
      let P = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (l && S.push(w[g]), u) {
        const re = k$(r, a, b);
        S.push(w[re[0]], w[re[1]]);
      }
      if (P = [...P, {
        placement: r,
        overflows: S
      }], !S.every((re) => re <= 0)) {
        var D, I;
        const re = (((D = o.flip) == null ? void 0 : D.index) || 0) + 1, U = _[re];
        if (U)
          return {
            data: {
              index: re,
              overflows: P
            },
            reset: {
              placement: U
            }
          };
        let H = (I = P.filter((B) => B.overflows[0] <= 0).sort((B, Z) => B.overflows[1] - Z.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!H)
          switch (p) {
            case "bestFit": {
              var ee;
              const B = (ee = P.map((Z) => [Z.placement, Z.overflows.filter((J) => J > 0).reduce((J, Y) => J + Y, 0)]).sort((Z, J) => Z[1] - J[1])[0]) == null ? void 0 : ee[0];
              B && (H = B);
              break;
            }
            case "initialPlacement":
              H = s;
              break;
          }
        if (r !== H)
          return {
            reset: {
              placement: H
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
function vd(e) {
  return N$.some((t) => e[t] >= 0);
}
const j$ = function(e) {
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
              referenceHidden: vd(s)
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
              escaped: vd(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function L$(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = yn(n), i = ro(n), c = oo(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, d = xn(t, e);
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
const F$ = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await L$(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, V$ = function(e) {
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
      } = xn(e, t), l = {
        x: n,
        y: r
      }, u = await Ro(t, c), d = oo(yn(o)), p = gl(d);
      let m = l[p], v = l[d];
      if (a) {
        const g = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", b = m + u[g], $ = m - u[y];
        m = gc(b, m, $);
      }
      if (s) {
        const g = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", b = v + u[g], $ = v - u[y];
        v = gc(b, v, $);
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
}, U$ = function(e) {
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
      }, d = oo(o), p = gl(d);
      let m = u[p], v = u[d];
      const h = xn(i, t), g = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        const $ = p === "y" ? "height" : "width", _ = a.reference[p] - a.floating[$] + g.mainAxis, w = a.reference[p] + a.reference[$] - g.mainAxis;
        m < _ ? m = _ : m > w && (m = w);
      }
      if (l) {
        var y, b;
        const $ = p === "y" ? "width" : "height", _ = ["top", "left"].includes(yn(o)), w = a.reference[d] - a.floating[$] + (_ && ((y = s.offset) == null ? void 0 : y[d]) || 0) + (_ ? 0 : g.crossAxis), S = a.reference[d] + a.reference[$] + (_ ? 0 : ((b = s.offset) == null ? void 0 : b[d]) || 0) - (_ ? g.crossAxis : 0);
        v < w ? v = w : v > S && (v = S);
      }
      return {
        [p]: m,
        [d]: v
      };
    }
  };
}, W$ = function(e) {
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
      } = xn(e, t), c = await Ro(t, i), l = yn(n), u = ro(n), d = oo(n) === "y", {
        width: p,
        height: m
      } = r.floating;
      let v, h;
      l === "top" || l === "bottom" ? (v = l, h = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, v = u === "end" ? "top" : "bottom");
      const g = m - c[v], y = p - c[h], b = !t.middlewareData.shift;
      let $ = g, _ = y;
      if (d) {
        const S = p - c.left - c.right;
        _ = u || b ? jn(y, S) : S;
      } else {
        const S = m - c.top - c.bottom;
        $ = u || b ? jn(g, S) : S;
      }
      if (b && !u) {
        const S = Pt(c.left, 0), P = Pt(c.right, 0), D = Pt(c.top, 0), I = Pt(c.bottom, 0);
        d ? _ = p - 2 * (S !== 0 || P !== 0 ? S + P : Pt(c.left, c.right)) : $ = m - 2 * (D !== 0 || I !== 0 ? D + I : Pt(c.top, c.bottom));
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
function Fn(e) {
  return _p(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function kt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function En(e) {
  var t;
  return (t = (_p(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function _p(e) {
  return e instanceof Node || e instanceof kt(e).Node;
}
function $n(e) {
  return e instanceof Element || e instanceof kt(e).Element;
}
function rn(e) {
  return e instanceof HTMLElement || e instanceof kt(e).HTMLElement;
}
function hd(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof kt(e).ShadowRoot;
}
function sa(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = At(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function z$(e) {
  return ["table", "td", "th"].includes(Fn(e));
}
function yl(e) {
  const t = $l(), n = At(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function B$(e) {
  let t = Wr(e);
  for (; rn(t) && !Vs(t); ) {
    if (yl(t))
      return t;
    t = Wr(t);
  }
  return null;
}
function $l() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Vs(e) {
  return ["html", "body", "#document"].includes(Fn(e));
}
function At(e) {
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
function Wr(e) {
  if (Fn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    hd(e) && e.host || // Fallback.
    En(e)
  );
  return hd(t) ? t.host : t;
}
function Cp(e) {
  const t = Wr(e);
  return Vs(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : rn(t) && sa(t) ? t : Cp(t);
}
function cs(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Cp(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = kt(r);
  return o ? t.concat(a, a.visualViewport || [], sa(r) ? r : []) : t.concat(r, cs(r));
}
function Ep(e) {
  const t = At(e);
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
function Ir(e) {
  const t = wl(e);
  if (!rn(t))
    return Ln(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Ep(t);
  let s = (a ? as(n.width) : n.width) / r, i = (a ? as(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Y$ = /* @__PURE__ */ Ln(0);
function Sp(e) {
  const t = kt(e);
  return !$l() || !t.visualViewport ? Y$ : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function H$(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== kt(e) ? !1 : t;
}
function sr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = wl(e);
  let s = Ln(1);
  t && (r ? $n(r) && (s = Ir(r)) : s = Ir(e));
  const i = H$(a, n, r) ? Sp(a) : Ln(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (a) {
    const p = kt(a), m = r && $n(r) ? kt(r) : r;
    let v = p.frameElement;
    for (; v && r && m !== p; ) {
      const h = Ir(v), g = v.getBoundingClientRect(), y = At(v), b = g.left + (v.clientLeft + parseFloat(y.paddingLeft)) * h.x, $ = g.top + (v.clientTop + parseFloat(y.paddingTop)) * h.y;
      c *= h.x, l *= h.y, u *= h.x, d *= h.y, c += b, l += $, v = kt(v).frameElement;
    }
  }
  return is({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function K$(e) {
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
  }, i = Ln(1);
  const c = Ln(0);
  if ((o || !o && r !== "fixed") && ((Fn(n) !== "body" || sa(a)) && (s = Us(n)), rn(n))) {
    const l = sr(n);
    i = Ir(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - s.scrollLeft * i.x + c.x,
    y: t.y * i.y - s.scrollTop * i.y + c.y
  };
}
function G$(e) {
  return Array.from(e.getClientRects());
}
function Np(e) {
  return sr(En(e)).left + Us(e).scrollLeft;
}
function Z$(e) {
  const t = En(e), n = Us(e), r = e.ownerDocument.body, o = Pt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Pt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Np(e);
  const i = -n.scrollTop;
  return At(r).direction === "rtl" && (s += Pt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function q$(e, t) {
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
function X$(e, t) {
  const n = sr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = rn(e) ? Ir(e) : Ln(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
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
    r = q$(e, n);
  else if (t === "document")
    r = Z$(En(e));
  else if ($n(t))
    r = X$(t, n);
  else {
    const o = Sp(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return is(r);
}
function Tp(e, t) {
  const n = Wr(e);
  return n === t || !$n(n) || Vs(n) ? !1 : At(n).position === "fixed" || Tp(n, t);
}
function J$(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = cs(e).filter((i) => $n(i) && Fn(i) !== "body"), o = null;
  const a = At(e).position === "fixed";
  let s = a ? Wr(e) : e;
  for (; $n(s) && !Vs(s); ) {
    const i = At(s), c = yl(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || sa(s) && !c && Tp(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = Wr(s);
  }
  return t.set(e, r), r;
}
function Q$(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? J$(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, u) => {
    const d = gd(t, u, o);
    return l.top = Pt(d.top, l.top), l.right = jn(d.right, l.right), l.bottom = jn(d.bottom, l.bottom), l.left = Pt(d.left, l.left), l;
  }, gd(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function ew(e) {
  return Ep(e);
}
function tw(e, t, n) {
  const r = rn(t), o = En(t), a = n === "fixed", s = sr(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Ln(0);
  if (r || !r && !a)
    if ((Fn(t) !== "body" || sa(o)) && (i = Us(t)), r) {
      const l = sr(t, !0, a, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = Np(o));
  return {
    x: s.left + i.scrollLeft - c.x,
    y: s.top + i.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function bd(e, t) {
  return !rn(e) || At(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Pp(e, t) {
  const n = kt(e);
  if (!rn(e))
    return n;
  let r = bd(e, t);
  for (; r && z$(r) && At(r).position === "static"; )
    r = bd(r, t);
  return r && (Fn(r) === "html" || Fn(r) === "body" && At(r).position === "static" && !yl(r)) ? n : r || B$(e) || n;
}
const nw = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Pp, a = this.getDimensions;
  return {
    reference: tw(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function rw(e) {
  return At(e).direction === "rtl";
}
const ow = {
  convertOffsetParentRelativeRectToViewportRelativeRect: K$,
  getDocumentElement: En,
  getClippingRect: Q$,
  getOffsetParent: Pp,
  getElementRects: nw,
  getClientRects: G$,
  getDimensions: ew,
  getScale: Ir,
  isElement: $n,
  isRTL: rw
};
function aw(e, t) {
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
    const m = Ra(u), v = Ra(o.clientWidth - (l + d)), h = Ra(o.clientHeight - (u + p)), g = Ra(l), b = {
      rootMargin: -m + "px " + -v + "px " + -h + "px " + -g + "px",
      threshold: Pt(0, jn(1, c)) || 1
    };
    let $ = !0;
    function _(w) {
      const S = w[0].intersectionRatio;
      if (S !== c) {
        if (!$)
          return s();
        S ? s(!1, S) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      $ = !1;
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
function sw(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = wl(e), u = o || a ? [...l ? cs(l) : [], ...cs(t)] : [];
  u.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const d = l && i ? aw(l, n) : null;
  let p = -1, m = null;
  s && (m = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === l && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), l && !c && m.observe(l), m.observe(t));
  let v, h = c ? sr(e) : null;
  c && g();
  function g() {
    const y = sr(e);
    h && (y.x !== h.x || y.y !== h.y || y.width !== h.width || y.height !== h.height) && n(), h = y, v = requestAnimationFrame(g);
  }
  return n(), () => {
    u.forEach((y) => {
      o && y.removeEventListener("scroll", n), a && y.removeEventListener("resize", n);
    }), d && d(), m && m.disconnect(), m = null, c && cancelAnimationFrame(v);
  };
}
const iw = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ow,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return A$(e, t, {
    ...o,
    platform: a
  });
}, cw = (e) => {
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
var Za = typeof document < "u" ? Ms : Q;
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
function kp(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function xd(e, t) {
  const n = kp(e);
  return Math.round(t * n) / n;
}
function yd(e) {
  const t = C.useRef(e);
  return Za(() => {
    t.current = e;
  }), t;
}
function lw(e) {
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
  const [v, h] = C.useState(null), [g, y] = C.useState(null), b = C.useCallback((J) => {
    J != S.current && (S.current = J, h(J));
  }, [h]), $ = C.useCallback((J) => {
    J !== P.current && (P.current = J, y(J));
  }, [y]), _ = a || v, w = s || g, S = C.useRef(null), P = C.useRef(null), D = C.useRef(u), I = yd(c), ee = yd(o), re = C.useCallback(() => {
    if (!S.current || !P.current)
      return;
    const J = {
      placement: t,
      strategy: n,
      middleware: p
    };
    ee.current && (J.platform = ee.current), iw(S.current, P.current, J).then((Y) => {
      const q = {
        ...Y,
        isPositioned: !0
      };
      U.current && !ls(D.current, q) && (D.current = q, Qb.flushSync(() => {
        d(q);
      }));
    });
  }, [p, t, n, ee]);
  Za(() => {
    l === !1 && D.current.isPositioned && (D.current.isPositioned = !1, d((J) => ({
      ...J,
      isPositioned: !1
    })));
  }, [l]);
  const U = C.useRef(!1);
  Za(() => (U.current = !0, () => {
    U.current = !1;
  }), []), Za(() => {
    if (_ && (S.current = _), w && (P.current = w), _ && w) {
      if (I.current)
        return I.current(_, w, re);
      re();
    }
  }, [_, w, re, I]);
  const H = C.useMemo(() => ({
    reference: S,
    floating: P,
    setReference: b,
    setFloating: $
  }), [b, $]), B = C.useMemo(() => ({
    reference: _,
    floating: w
  }), [_, w]), Z = C.useMemo(() => {
    const J = {
      position: n,
      left: 0,
      top: 0
    };
    if (!B.floating)
      return J;
    const Y = xd(B.floating, u.x), q = xd(B.floating, u.y);
    return i ? {
      ...J,
      transform: "translate(" + Y + "px, " + q + "px)",
      ...kp(B.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: Y,
      top: q
    };
  }, [n, i, B.floating, u.x, u.y]);
  return C.useMemo(() => ({
    ...u,
    update: re,
    refs: H,
    elements: B,
    floatingStyles: Z
  }), [u, re, H, B, Z]);
}
function ia(e) {
  const [t, n] = G(void 0);
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
const Op = "Popper", [Mp, cn] = Ke(Op), [uw, Dp] = Mp(Op), dw = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = G(null);
  return /* @__PURE__ */ x(uw, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, fw = "PopperAnchor", pw = /* @__PURE__ */ O((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = Dp(fw, n), s = j(null), i = we(t, s);
  return Q(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ x(ie.div, E({}, o, {
    ref: i
  }));
}), Rp = "PopperContent", [mw, Uk] = Mp(Rp), vw = /* @__PURE__ */ O((e, t) => {
  var n, r, o, a, s, i, c, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: p = 0, align: m = "center", alignOffset: v = 0, arrowPadding: h = 0, collisionBoundary: g = [], collisionPadding: y = 0, sticky: b = "partial", hideWhenDetached: $ = !1, avoidCollisions: _ = !0, onPlaced: w, ...S } = e, P = Dp(Rp, u), [D, I] = G(null), ee = we(
    t,
    (Ve) => I(Ve)
  ), [re, U] = G(null), H = ia(re), B = (n = H == null ? void 0 : H.width) !== null && n !== void 0 ? n : 0, Z = (r = H == null ? void 0 : H.height) !== null && r !== void 0 ? r : 0, J = d + (m !== "center" ? "-" + m : ""), Y = typeof y == "number" ? y : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...y
  }, q = Array.isArray(g) ? g : [
    g
  ], A = q.length > 0, M = {
    padding: Y,
    boundary: q.filter(hw),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: A
  }, { refs: L, floatingStyles: W, placement: oe, isPositioned: ce, middlewareData: ye } = lw({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: J,
    whileElementsMounted: sw,
    elements: {
      reference: P.anchor
    },
    middleware: [
      F$({
        mainAxis: p + Z,
        alignmentAxis: v
      }),
      _ && V$({
        mainAxis: !0,
        crossAxis: !1,
        limiter: b === "partial" ? U$() : void 0,
        ...M
      }),
      _ && I$({
        ...M
      }),
      W$({
        ...M,
        apply: ({ elements: Ve, rects: lt, availableWidth: k, availableHeight: F }) => {
          const { width: z, height: xe } = lt.reference, ue = Ve.floating.style;
          ue.setProperty("--radix-popper-available-width", `${k}px`), ue.setProperty("--radix-popper-available-height", `${F}px`), ue.setProperty("--radix-popper-anchor-width", `${z}px`), ue.setProperty("--radix-popper-anchor-height", `${xe}px`);
        }
      }),
      re && cw({
        element: re,
        padding: h
      }),
      gw({
        arrowWidth: B,
        arrowHeight: Z
      }),
      $ && j$({
        strategy: "referenceHidden"
      })
    ]
  }), [be, te] = Ap(oe), le = We(w);
  ft(() => {
    ce && (le == null || le());
  }, [
    ce,
    le
  ]);
  const ve = (o = ye.arrow) === null || o === void 0 ? void 0 : o.x, X = (a = ye.arrow) === null || a === void 0 ? void 0 : a.y, he = ((s = ye.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [K, Re] = G();
  return ft(() => {
    D && Re(window.getComputedStyle(D).zIndex);
  }, [
    D
  ]), /* @__PURE__ */ x("div", {
    ref: L.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...W,
      transform: ce ? W.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: K,
      ["--radix-popper-transform-origin"]: [
        (i = ye.transformOrigin) === null || i === void 0 ? void 0 : i.x,
        (c = ye.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ x(mw, {
    scope: u,
    placedSide: be,
    onArrowChange: U,
    arrowX: ve,
    arrowY: X,
    shouldHideArrow: he
  }, /* @__PURE__ */ x(ie.div, E({
    "data-side": be,
    "data-align": te
  }, S, {
    ref: ee,
    style: {
      ...S.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: ce ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = ye.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function hw(e) {
  return e !== null;
}
const gw = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: i, rects: c, middlewareData: l } = t, d = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = d ? 0 : e.arrowWidth, m = d ? 0 : e.arrowHeight, [v, h] = Ap(i), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[h], y = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + p / 2, b = ((a = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + m / 2;
    let $ = "", _ = "";
    return v === "bottom" ? ($ = d ? g : `${y}px`, _ = `${-m}px`) : v === "top" ? ($ = d ? g : `${y}px`, _ = `${c.floating.height + m}px`) : v === "right" ? ($ = `${-m}px`, _ = d ? g : `${b}px`) : v === "left" && ($ = `${c.floating.width + m}px`, _ = d ? g : `${b}px`), {
      data: {
        x: $,
        y: _
      }
    };
  }
});
function Ap(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const ao = dw, ca = pw, la = vw, Ws = /* @__PURE__ */ O((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ tl.createPortal(/* @__PURE__ */ x(ie.div, E({}, o, {
    ref: t
  })), r) : null;
});
function bw(e, t) {
  return Ds((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Ze = (e) => {
  const { present: t, children: n } = e, r = xw(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : St.only(n), a = we(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Jr(o, {
    ref: a
  }) : null;
};
Ze.displayName = "Presence";
function xw(e) {
  const [t, n] = G(), r = j({}), o = j(e), a = j("none"), s = e ? "mounted" : "unmounted", [i, c] = bw(s, {
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
  const [r, o] = yw({
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
function yw({ defaultProp: e, onChange: t }) {
  const n = G(e), [r] = n, o = j(r), a = We(t);
  return Q(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const Oi = "rovingFocusGroup.onEntryFocus", $w = {
  bubbles: !1,
  cancelable: !0
}, _l = "RovingFocusGroup", [xc, Ip, ww] = Hn(_l), [_w, Kn] = Ke(_l, [
  ww
]), [Cw, Ew] = _w(_l), Sw = /* @__PURE__ */ O((e, t) => /* @__PURE__ */ x(xc.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ x(xc.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ x(Nw, E({}, e, {
  ref: t
}))))), Nw = /* @__PURE__ */ O((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: l, ...u } = e, d = j(null), p = we(t, d), m = sn(a), [v = null, h] = et({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [g, y] = G(!1), b = We(l), $ = Ip(n), _ = j(!1), [w, S] = G(0);
  return Q(() => {
    const P = d.current;
    if (P)
      return P.addEventListener(Oi, b), () => P.removeEventListener(Oi, b);
  }, [
    b
  ]), /* @__PURE__ */ x(Cw, {
    scope: n,
    orientation: r,
    dir: m,
    loop: o,
    currentTabStopId: v,
    onItemFocus: pe(
      (P) => h(P),
      [
        h
      ]
    ),
    onItemShiftTab: pe(
      () => y(!0),
      []
    ),
    onFocusableItemAdd: pe(
      () => S(
        (P) => P + 1
      ),
      []
    ),
    onFocusableItemRemove: pe(
      () => S(
        (P) => P - 1
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
    onMouseDown: V(e.onMouseDown, () => {
      _.current = !0;
    }),
    onFocus: V(e.onFocus, (P) => {
      const D = !_.current;
      if (P.target === P.currentTarget && D && !g) {
        const I = new CustomEvent(Oi, $w);
        if (P.currentTarget.dispatchEvent(I), !I.defaultPrevented) {
          const ee = $().filter(
            (Z) => Z.focusable
          ), re = ee.find(
            (Z) => Z.active
          ), U = ee.find(
            (Z) => Z.id === v
          ), B = [
            re,
            U,
            ...ee
          ].filter(Boolean).map(
            (Z) => Z.ref.current
          );
          jp(B);
        }
      }
      _.current = !1;
    }),
    onBlur: V(
      e.onBlur,
      () => y(!1)
    )
  })));
}), Tw = "RovingFocusGroupItem", Pw = /* @__PURE__ */ O((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = nt(), c = a || i, l = Ew(Tw, n), u = l.currentTabStopId === c, d = Ip(n), { onFocusableItemAdd: p, onFocusableItemRemove: m } = l;
  return Q(() => {
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
    onMouseDown: V(e.onMouseDown, (v) => {
      r ? l.onItemFocus(c) : v.preventDefault();
    }),
    onFocus: V(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: V(e.onKeyDown, (v) => {
      if (v.key === "Tab" && v.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (v.target !== v.currentTarget)
        return;
      const h = Mw(v, l.orientation, l.dir);
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
          y = l.loop ? Dw(y, b + 1) : y.slice(b + 1);
        }
        setTimeout(
          () => jp(y)
        );
      }
    })
  })));
}), kw = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Ow(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Mw(e, t, n) {
  const r = Ow(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return kw[r];
}
function jp(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Dw(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const zs = Sw, Bs = Pw;
var Rw = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Nr = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ new WeakMap(), ja = {}, Mi = 0, Lp = function(e) {
  return e && (e.host || Lp(e.parentNode));
}, Aw = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Lp(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, Iw = function(e, t, n, r) {
  var o = Aw(t, Array.isArray(e) ? e : [e]);
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
        var m = p.getAttribute(r), v = m !== null && m !== "false", h = (Nr.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
        Nr.set(p, h), a.set(p, g), s.push(p), h === 1 && v && Ia.set(p, !0), g === 1 && p.setAttribute(n, "true"), v || p.setAttribute(r, "true");
      }
    });
  };
  return u(t), i.clear(), Mi++, function() {
    s.forEach(function(d) {
      var p = Nr.get(d) - 1, m = a.get(d) - 1;
      Nr.set(d, p), a.set(d, m), p || (Ia.has(d) || d.removeAttribute(r), Ia.delete(d)), m || d.removeAttribute(n);
    }), Mi--, Mi || (Nr = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ new WeakMap(), ja = {});
  };
}, ua = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || Rw(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Iw(r, o, n, "aria-hidden")) : function() {
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
function Fp(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var So = "right-scroll-bar-position", No = "width-before-scroll-bar", jw = "with-scroll-bars-hidden", Lw = "--removed-body-scroll-bar-size";
function Fw(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Vw(e, t) {
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
function Vp(e, t) {
  return Vw(t || null, function(n) {
    return e.forEach(function(r) {
      return Fw(r, n);
    });
  });
}
function Uw(e) {
  return e;
}
function Ww(e, t) {
  t === void 0 && (t = Uw);
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
function Up(e) {
  e === void 0 && (e = {});
  var t = Ww(null);
  return t.options = pt({ async: !0, ssr: !1 }, e), t;
}
var Wp = function(e) {
  var t = e.sideCar, n = Cl(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, pt({}, n));
};
Wp.isSideCarExport = !0;
function zp(e, t) {
  return e.useMedium(t), Wp;
}
var Bp = Up(), Di = function() {
}, Ys = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Di,
    onWheelCapture: Di,
    onTouchMoveCapture: Di
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noIsolation, v = e.inert, h = e.allowPinchZoom, g = e.as, y = g === void 0 ? "div" : g, b = Cl(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), $ = p, _ = Vp([n, t]), w = pt(pt({}, b), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement($, { sideCar: Bp, removeScrollBar: l, shards: d, noIsolation: m, inert: v, setCallbacks: a, allowPinchZoom: !!h, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), pt(pt({}, w), { ref: _ })) : C.createElement(y, pt({}, w, { className: c, ref: _ }), i)
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
var $d, zw = function() {
  if ($d)
    return $d;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Bw() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = zw();
  return t && e.setAttribute("nonce", t), e;
}
function Yw(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Hw(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Kw = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Bw()) && (Yw(t, n), Hw(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Gw = function() {
  var e = Kw();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, El = function() {
  var e = Gw(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Zw = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ri = function(e) {
  return parseInt(e || "", 10) || 0;
}, qw = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ri(n), Ri(r), Ri(o)];
}, Xw = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Zw;
  var t = qw(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Jw = El(), Qw = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(jw, ` {
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
    `).concat(Lw, ": ").concat(i, `px;
  }
`);
}, Yp = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, a = C.useMemo(function() {
    return Xw(o);
  }, [o]);
  return C.createElement(Jw, { styles: Qw(a, !t, o, n ? "" : "!important") });
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
var Tr = yc ? { passive: !1 } : !1, e_ = function(e) {
  return e.tagName === "TEXTAREA";
}, Hp = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !e_(e) && n[t] === "visible")
  );
}, t_ = function(e) {
  return Hp(e, "overflowY");
}, n_ = function(e) {
  return Hp(e, "overflowX");
}, wd = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Kp(e, n);
    if (r) {
      var o = Gp(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, r_ = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, o_ = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Kp = function(e, t) {
  return e === "v" ? t_(t) : n_(t);
}, Gp = function(e, t) {
  return e === "v" ? r_(t) : o_(t);
}, a_ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, s_ = function(e, t, n, r, o) {
  var a = a_(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, p = 0;
  do {
    var m = Gp(e, i), v = m[0], h = m[1], g = m[2], y = h - g - a * v;
    (v || y) && Kp(e, i) && (d += y, p += v), i = i.parentNode;
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
}, i_ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, c_ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, l_ = 0, Pr = [];
function u_(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(l_++)[0], a = C.useState(function() {
    return El();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = Fp([e.lockRef.current], (e.shards || []).map(Cd), !0).filter(Boolean);
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
    var y = Fa(h), b = n.current, $ = "deltaX" in h ? h.deltaX : b[0] - y[0], _ = "deltaY" in h ? h.deltaY : b[1] - y[1], w, S = h.target, P = Math.abs($) > Math.abs(_) ? "h" : "v";
    if ("touches" in h && P === "h" && S.type === "range")
      return !1;
    var D = wd(P, S);
    if (!D)
      return !0;
    if (D ? w = P : (w = P === "v" ? "h" : "v", D = wd(P, S)), !D)
      return !1;
    if (!r.current && "changedTouches" in h && ($ || _) && (r.current = w), !w)
      return !0;
    var I = r.current || w;
    return s_(I, g, h, I === "h" ? $ : _, !0);
  }, []), c = C.useCallback(function(h) {
    var g = h;
    if (!(!Pr.length || Pr[Pr.length - 1] !== a)) {
      var y = "deltaY" in g ? _d(g) : Fa(g), b = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && i_(w.delta, y);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var $ = (s.current.shards || []).map(Cd).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), _ = $.length > 0 ? i(g, $[0]) : !s.current.noIsolation;
        _ && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(h, g, y, b) {
    var $ = { name: h, delta: g, target: y, should: b };
    t.current.push($), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== $;
      });
    }, 1);
  }, []), u = C.useCallback(function(h) {
    n.current = Fa(h), r.current = void 0;
  }, []), d = C.useCallback(function(h) {
    l(h.type, _d(h), h.target, i(h, e.lockRef.current));
  }, []), p = C.useCallback(function(h) {
    l(h.type, Fa(h), h.target, i(h, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return Pr.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, Tr), document.addEventListener("touchmove", c, Tr), document.addEventListener("touchstart", u, Tr), function() {
      Pr = Pr.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", c, Tr), document.removeEventListener("touchmove", c, Tr), document.removeEventListener("touchstart", u, Tr);
    };
  }, []);
  var m = e.removeScrollBar, v = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    v ? C.createElement(a, { styles: c_(o) }) : null,
    m ? C.createElement(Yp, { gapMode: "margin" }) : null
  );
}
const d_ = zp(Bp, u_);
var Zp = C.forwardRef(function(e, t) {
  return C.createElement(Ys, pt({}, e, { ref: t, sideCar: d_ }));
});
Zp.classNames = Ys.classNames;
const Hs = Zp, $c = [
  "Enter",
  " "
], f_ = [
  "ArrowDown",
  "PageUp",
  "Home"
], qp = [
  "ArrowUp",
  "PageDown",
  "End"
], p_ = [
  ...f_,
  ...qp
], m_ = {
  ltr: [
    ...$c,
    "ArrowRight"
  ],
  rtl: [
    ...$c,
    "ArrowLeft"
  ]
}, v_ = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, Ks = "Menu", [Ao, h_, g_] = Hn(Ks), [xr, da] = Ke(Ks, [
  g_,
  cn,
  Kn
]), Gs = cn(), Xp = Kn(), [Jp, Gn] = xr(Ks), [b_, fa] = xr(Ks), x_ = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = Gs(t), [c, l] = G(null), u = j(!1), d = We(a), p = sn(o);
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
  }, []), /* @__PURE__ */ x(ao, i, /* @__PURE__ */ x(Jp, {
    scope: t,
    open: n,
    onOpenChange: d,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ x(b_, {
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
}, Qp = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = Gs(n);
  return /* @__PURE__ */ x(ca, E({}, o, r, {
    ref: t
  }));
}), em = "MenuPortal", [y_, tm] = xr(em, {
  forceMount: void 0
}), $_ = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Gn(em, t);
  return /* @__PURE__ */ x(y_, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ x(Ze, {
    present: n || a.open
  }, /* @__PURE__ */ x(Ws, {
    asChild: !0,
    container: o
  }, r)));
}, zt = "MenuContent", [w_, Sl] = xr(zt), __ = /* @__PURE__ */ O((e, t) => {
  const n = tm(zt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Gn(zt, e.__scopeMenu), s = fa(zt, e.__scopeMenu);
  return /* @__PURE__ */ x(Ao.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, /* @__PURE__ */ x(Ao.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ x(C_, E({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(E_, E({}, o, {
    ref: t
  })))));
}), C_ = /* @__PURE__ */ O((e, t) => {
  const n = Gn(zt, e.__scopeMenu), r = j(null), o = we(t, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return ua(a);
  }, []), /* @__PURE__ */ x(Nl, E({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: V(
      e.onFocusOutside,
      (a) => a.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), E_ = /* @__PURE__ */ O((e, t) => {
  const n = Gn(zt, e.__scopeMenu);
  return /* @__PURE__ */ x(Nl, E({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Nl = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: p, onDismiss: m, disableOutsideScroll: v, ...h } = e, g = Gn(zt, n), y = fa(zt, n), b = Gs(n), $ = Xp(n), _ = h_(n), [w, S] = G(null), P = j(null), D = we(t, P, g.onContentChange), I = j(0), ee = j(""), re = j(0), U = j(null), H = j("right"), B = j(0), Z = v ? Hs : Ht, J = v ? {
    as: Qt,
    allowPinchZoom: !0
  } : void 0, Y = (A) => {
    var M, L;
    const W = ee.current + A, oe = _().filter(
      (ve) => !ve.disabled
    ), ce = document.activeElement, ye = (M = oe.find(
      (ve) => ve.ref.current === ce
    )) === null || M === void 0 ? void 0 : M.textValue, be = oe.map(
      (ve) => ve.textValue
    ), te = B_(be, W, ye), le = (L = oe.find(
      (ve) => ve.textValue === te
    )) === null || L === void 0 ? void 0 : L.ref.current;
    (function ve(X) {
      ee.current = X, window.clearTimeout(I.current), X !== "" && (I.current = window.setTimeout(
        () => ve(""),
        1e3
      ));
    })(W), le && setTimeout(
      () => le.focus()
    );
  };
  Q(() => () => window.clearTimeout(I.current), []), Ls();
  const q = pe((A) => {
    var M, L;
    return H.current === ((M = U.current) === null || M === void 0 ? void 0 : M.side) && H_(A, (L = U.current) === null || L === void 0 ? void 0 : L.area);
  }, []);
  return /* @__PURE__ */ x(w_, {
    scope: n,
    searchRef: ee,
    onItemEnter: pe((A) => {
      q(A) && A.preventDefault();
    }, [
      q
    ]),
    onItemLeave: pe((A) => {
      var M;
      q(A) || ((M = P.current) === null || M === void 0 || M.focus(), S(null));
    }, [
      q
    ]),
    onTriggerLeave: pe((A) => {
      q(A) && A.preventDefault();
    }, [
      q
    ]),
    pointerGraceTimerRef: re,
    onPointerGraceIntentChange: pe((A) => {
      U.current = A;
    }, [])
  }, /* @__PURE__ */ x(Z, J, /* @__PURE__ */ x(Fs, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: V(a, (A) => {
      var M;
      A.preventDefault(), (M = P.current) === null || M === void 0 || M.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ x(br, {
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
    dir: y.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: w,
    onCurrentTabStopIdChange: S,
    onEntryFocus: V(c, (A) => {
      y.isUsingKeyboardRef.current || A.preventDefault();
    })
  }), /* @__PURE__ */ x(la, E({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": cm(g.open),
    "data-radix-menu-content": "",
    dir: y.dir
  }, b, h, {
    ref: D,
    style: {
      outline: "none",
      ...h.style
    },
    onKeyDown: V(h.onKeyDown, (A) => {
      const L = A.target.closest("[data-radix-menu-content]") === A.currentTarget, W = A.ctrlKey || A.altKey || A.metaKey, oe = A.key.length === 1;
      L && (A.key === "Tab" && A.preventDefault(), !W && oe && Y(A.key));
      const ce = P.current;
      if (A.target !== ce || !p_.includes(A.key))
        return;
      A.preventDefault();
      const be = _().filter(
        (te) => !te.disabled
      ).map(
        (te) => te.ref.current
      );
      qp.includes(A.key) && be.reverse(), W_(be);
    }),
    onBlur: V(e.onBlur, (A) => {
      A.currentTarget.contains(A.target) || (window.clearTimeout(I.current), ee.current = "");
    }),
    onPointerMove: V(e.onPointerMove, Io((A) => {
      const M = A.target, L = B.current !== A.clientX;
      if (A.currentTarget.contains(M) && L) {
        const W = A.clientX > B.current ? "right" : "left";
        H.current = W, B.current = A.clientX;
      }
    }))
  })))))));
}), nm = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, E({
    role: "group"
  }, r, {
    ref: t
  }));
}), S_ = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, E({}, r, {
    ref: t
  }));
}), wc = "MenuItem", Ed = "menu.itemSelect", Tl = /* @__PURE__ */ O((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = j(null), s = fa(wc, e.__scopeMenu), i = Sl(wc, e.__scopeMenu), c = we(t, a), l = j(!1), u = () => {
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
  return /* @__PURE__ */ x(rm, E({}, o, {
    ref: c,
    disabled: n,
    onClick: V(e.onClick, u),
    onPointerDown: (d) => {
      var p;
      (p = e.onPointerDown) === null || p === void 0 || p.call(e, d), l.current = !0;
    },
    onPointerUp: V(e.onPointerUp, (d) => {
      var p;
      l.current || (p = d.currentTarget) === null || p === void 0 || p.click();
    }),
    onKeyDown: V(e.onKeyDown, (d) => {
      const p = i.searchRef.current !== "";
      n || p && d.key === " " || $c.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), rm = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Sl(wc, n), i = Xp(n), c = j(null), l = we(t, c), [u, d] = G(!1), [p, m] = G("");
  return Q(() => {
    const v = c.current;
    if (v) {
      var h;
      m(((h = v.textContent) !== null && h !== void 0 ? h : "").trim());
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
    onPointerMove: V(e.onPointerMove, Io((v) => {
      r ? s.onItemLeave(v) : (s.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus());
    })),
    onPointerLeave: V(e.onPointerLeave, Io(
      (v) => s.onItemLeave(v)
    )),
    onFocus: V(
      e.onFocus,
      () => d(!0)
    ),
    onBlur: V(
      e.onBlur,
      () => d(!1)
    )
  }))));
}), N_ = /* @__PURE__ */ O((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ x(am, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ x(Tl, E({
    role: "menuitemcheckbox",
    "aria-checked": us(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": Pl(n),
    onSelect: V(
      o.onSelect,
      () => r == null ? void 0 : r(us(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), T_ = "MenuRadioGroup", [P_, k_] = xr(T_, {
  value: void 0,
  onValueChange: () => {
  }
}), O_ = /* @__PURE__ */ O((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = We(r);
  return /* @__PURE__ */ x(P_, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ x(nm, E({}, o, {
    ref: t
  })));
}), M_ = "MenuRadioItem", D_ = /* @__PURE__ */ O((e, t) => {
  const { value: n, ...r } = e, o = k_(M_, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ x(am, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ x(Tl, E({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": Pl(a),
    onSelect: V(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), om = "MenuItemIndicator", [am, R_] = xr(om, {
  checked: !1
}), A_ = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = R_(om, n);
  return /* @__PURE__ */ x(Ze, {
    present: r || us(a.checked) || a.checked === !0
  }, /* @__PURE__ */ x(ie.span, E({}, o, {
    ref: t,
    "data-state": Pl(a.checked)
  })));
}), I_ = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, E({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), sm = "MenuSub", [j_, im] = xr(sm), L_ = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Gn(sm, t), s = Gs(t), [i, c] = G(null), [l, u] = G(null), d = We(o);
  return Q(() => (a.open === !1 && d(!1), () => d(!1)), [
    a.open,
    d
  ]), /* @__PURE__ */ x(ao, s, /* @__PURE__ */ x(Jp, {
    scope: t,
    open: r,
    onOpenChange: d,
    content: l,
    onContentChange: u
  }, /* @__PURE__ */ x(j_, {
    scope: t,
    contentId: nt(),
    triggerId: nt(),
    trigger: i,
    onTriggerChange: c
  }, n)));
}, Va = "MenuSubTrigger", F_ = /* @__PURE__ */ O((e, t) => {
  const n = Gn(Va, e.__scopeMenu), r = fa(Va, e.__scopeMenu), o = im(Va, e.__scopeMenu), a = Sl(Va, e.__scopeMenu), s = j(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, u = pe(() => {
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
  ]), /* @__PURE__ */ x(Qp, E({
    asChild: !0
  }, l), /* @__PURE__ */ x(rm, E({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": cm(n.open)
  }, e, {
    ref: ta(t, o.onTriggerChange),
    onClick: (d) => {
      var p;
      (p = e.onClick) === null || p === void 0 || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: V(e.onPointerMove, Io((d) => {
      a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: V(e.onPointerLeave, Io((d) => {
      var p;
      u();
      const m = (p = n.content) === null || p === void 0 ? void 0 : p.getBoundingClientRect();
      if (m) {
        var v;
        const h = (v = n.content) === null || v === void 0 ? void 0 : v.dataset.side, g = h === "right", y = g ? -5 : 5, b = m[g ? "left" : "right"], $ = m[g ? "right" : "left"];
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
              x: $,
              y: m.top
            },
            {
              x: $,
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
    onKeyDown: V(e.onKeyDown, (d) => {
      const p = a.searchRef.current !== "";
      if (!(e.disabled || p && d.key === " ") && m_[r.dir].includes(d.key)) {
        var m;
        n.onOpenChange(!0), (m = n.content) === null || m === void 0 || m.focus(), d.preventDefault();
      }
    })
  })));
}), V_ = "MenuSubContent", U_ = /* @__PURE__ */ O((e, t) => {
  const n = tm(zt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Gn(zt, e.__scopeMenu), s = fa(zt, e.__scopeMenu), i = im(V_, e.__scopeMenu), c = j(null), l = we(t, c);
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
    onFocusOutside: V(e.onFocusOutside, (u) => {
      u.target !== i.trigger && a.onOpenChange(!1);
    }),
    onEscapeKeyDown: V(e.onEscapeKeyDown, (u) => {
      s.onClose(), u.preventDefault();
    }),
    onKeyDown: V(e.onKeyDown, (u) => {
      const d = u.currentTarget.contains(u.target), p = v_[s.dir].includes(u.key);
      if (d && p) {
        var m;
        a.onOpenChange(!1), (m = i.trigger) === null || m === void 0 || m.focus(), u.preventDefault();
      }
    })
  })))));
});
function cm(e) {
  return e ? "open" : "closed";
}
function us(e) {
  return e === "indeterminate";
}
function Pl(e) {
  return us(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function W_(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function z_(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function B_(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = z_(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function Y_(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function H_(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return Y_(n, t);
}
function Io(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const kl = x_, Ol = Qp, Ml = $_, Dl = __, Rl = nm, Al = S_, Il = Tl, jl = N_, Ll = O_, Fl = D_, Vl = A_, Ul = I_, Wl = L_, zl = F_, Bl = U_, lm = "ContextMenu", [K_, Wk] = Ke(lm, [
  da
]), $t = da(), [G_, um] = K_(lm), Z_ = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = G(!1), c = $t(t), l = We(r), u = pe((d) => {
    i(d), l(d);
  }, [
    l
  ]);
  return /* @__PURE__ */ x(G_, {
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
}, q_ = "ContextMenuTrigger", X_ = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = um(q_, n), s = $t(n), i = j({
    x: 0,
    y: 0
  }), c = j({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...i.current
    })
  }), l = j(0), u = pe(
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
    onContextMenu: r ? e.onContextMenu : V(e.onContextMenu, (p) => {
      u(), d(p), p.preventDefault();
    }),
    onPointerDown: r ? e.onPointerDown : V(e.onPointerDown, Ua((p) => {
      u(), l.current = window.setTimeout(
        () => d(p),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : V(e.onPointerMove, Ua(u)),
    onPointerCancel: r ? e.onPointerCancel : V(e.onPointerCancel, Ua(u)),
    onPointerUp: r ? e.onPointerUp : V(e.onPointerUp, Ua(u))
  })));
}), J_ = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = $t(t);
  return /* @__PURE__ */ x(Ml, E({}, r, n));
}, Q_ = "ContextMenuContent", e2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = um(Q_, n), a = $t(n), s = j(!1);
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
}), t2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Rl, E({}, o, r, {
    ref: t
  }));
}), n2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Al, E({}, o, r, {
    ref: t
  }));
}), r2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Il, E({}, o, r, {
    ref: t
  }));
}), o2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(jl, E({}, o, r, {
    ref: t
  }));
}), a2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Ll, E({}, o, r, {
    ref: t
  }));
}), s2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Fl, E({}, o, r, {
    ref: t
  }));
}), i2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Vl, E({}, o, r, {
    ref: t
  }));
}), c2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Ul, E({}, o, r, {
    ref: t
  }));
}), l2 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = $t(t), [i, c] = et({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ x(Wl, E({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, u2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(zl, E({}, o, r, {
    ref: t
  }));
}), d2 = /* @__PURE__ */ O((e, t) => {
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
const f2 = Z_, p2 = X_, dm = J_, fm = e2, m2 = t2, pm = n2, mm = r2, vm = o2, v2 = a2, hm = s2, gm = i2, bm = c2, h2 = l2, xm = u2, ym = d2, zk = f2, Bk = p2, Yk = m2, Hk = dm, Kk = h2, Gk = v2, g2 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  xm,
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
      /* @__PURE__ */ f.exports.jsx(na, { className: "ml-auto h-4 w-4" })
    ]
  }
));
g2.displayName = xm.displayName;
const b2 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ym,
  {
    ref: n,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
b2.displayName = ym.displayName;
const x2 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(dm, { children: /* @__PURE__ */ f.exports.jsx(
  fm,
  {
    ref: n,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
x2.displayName = fm.displayName;
const y2 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  mm,
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
y2.displayName = mm.displayName;
const $2 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  vm,
  {
    ref: o,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(gm, { children: /* @__PURE__ */ f.exports.jsx(en, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
$2.displayName = vm.displayName;
const w2 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  hm,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(gm, { children: /* @__PURE__ */ f.exports.jsx(As, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
w2.displayName = hm.displayName;
const _2 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  pm,
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
_2.displayName = pm.displayName;
const C2 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  bm,
  {
    ref: n,
    className: R("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
C2.displayName = bm.displayName;
const E2 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: R(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
E2.displayName = "ContextMenuShortcut";
var pa = (e) => e.type === "checkbox", Ar = (e) => e instanceof Date, gt = (e) => e == null;
const $m = (e) => typeof e == "object";
var st = (e) => !gt(e) && !Array.isArray(e) && $m(e) && !Ar(e), wm = (e) => st(e) && e.target ? pa(e.target) ? e.target.checked : e.target.value : e, S2 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, _m = (e, t) => e.has(S2(t)), N2 = (e) => {
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
    if (t = n ? [] : {}, !n && !N2(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = Xt(e[r]));
  else
    return e;
  return t;
}
var ma = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Je = (e) => e === void 0, fe = (e, t, n) => {
  if (!t || !st(e))
    return n;
  const r = ma(t.split(/[,[\].]+?/)).reduce((o, a) => gt(o) ? o : o[a], e);
  return Je(r) || r === e ? Je(e[t]) ? n : e[t] : r;
};
const ds = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Vt = {
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
}, Cm = T.createContext(null), Zs = () => T.useContext(Cm), T2 = (e) => {
  const { children: t, ...n } = e;
  return T.createElement(Cm.Provider, { value: n }, t);
};
var Em = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== Vt.all && (t._proxyFormState[s] = !r || Vt.all), n && (n[s] = !0), e[s];
      }
    });
  return o;
}, Mt = (e) => st(e) && !Object.keys(e).length, Sm = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return Mt(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || Vt.all));
}, qa = (e) => Array.isArray(e) ? e : [e], Nm = (e, t, n) => n && t ? e === t : !e || !t || e === t || qa(e).some((r) => r && (r.startsWith(t) || t.startsWith(r)));
function Hl(e) {
  const t = T.useRef(e);
  t.current = e, T.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function P2(e) {
  const t = Zs(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, i] = T.useState(n._formState), c = T.useRef(!0), l = T.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = T.useRef(o);
  return u.current = o, Hl({
    disabled: r,
    next: (d) => c.current && Nm(u.current, d.name, a) && Sm(d, l.current, n._updateFormState) && i({
      ...n._formState,
      ...d
    }),
    subject: n._subjects.state
  }), T.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), Em(s, n, l.current, !1);
}
var Jt = (e) => typeof e == "string", Tm = (e, t, n, r, o) => Jt(e) ? (r && t.watch.add(e), fe(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), fe(n, a))) : (r && (t.watchAll = !0), n);
function k2(e) {
  const t = Zs(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, i = T.useRef(r);
  i.current = r, Hl({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      Nm(i.current, u.name, s) && l(Xt(Tm(i.current, n._names, u.values || n._formValues, !1, o)));
    }
  });
  const [c, l] = T.useState(n._getWatch(r, o));
  return T.useEffect(() => n._removeUnmounted()), c;
}
var Kl = (e) => /^\w*$/.test(e), Pm = (e) => ma(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function ze(e, t, n) {
  let r = -1;
  const o = Kl(t) ? [t] : Pm(t), a = o.length, s = a - 1;
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
function O2(e) {
  const t = Zs(), { name: n, control: r = t.control, shouldUnregister: o } = e, a = _m(r._names.array, n), s = k2({
    control: r,
    name: n,
    defaultValue: fe(r._formValues, n, fe(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), i = P2({
    control: r,
    name: n
  }), c = T.useRef(r.register(n, {
    ...e.rules,
    value: s
  }));
  return c.current = r.register(n, e.rules), T.useEffect(() => {
    const l = r._options.shouldUnregister || o, u = (d, p) => {
      const m = fe(r._fields, d);
      m && (m._f.mount = p);
    };
    if (u(n, !0), l) {
      const d = Xt(fe(r._options.defaultValues, n));
      ze(r._defaultValues, n, d), Je(fe(r._formValues, n)) && ze(r._formValues, n, d);
    }
    return () => {
      (a ? l && !r._state.action : l) ? r.unregister(n) : u(n, !1);
    };
  }, [n, r, a, o]), {
    field: {
      name: n,
      value: s,
      onChange: T.useCallback((l) => c.current.onChange({
        target: {
          value: wm(l),
          name: n
        },
        type: ds.CHANGE
      }), [n]),
      onBlur: T.useCallback(() => c.current.onBlur({
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
const M2 = (e) => e.render(O2(e));
var km = (e, t, n, r, o) => t ? {
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
  isOnSubmit: !e || e === Vt.onSubmit,
  isOnBlur: e === Vt.onBlur,
  isOnChange: e === Vt.onChange,
  isOnAll: e === Vt.all,
  isOnTouch: e === Vt.onTouched
}), Nd = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)))), D2 = (e, t, n) => {
  const r = ma(fe(e, n));
  return ze(r, "root", t[n]), ze(e, n, r), e;
}, jr = (e) => typeof e == "boolean", Gl = (e) => e.type === "file", An = (e) => typeof e == "function", fs = (e) => {
  if (!Yl)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Xa = (e) => Jt(e), Zl = (e) => e.type === "radio", ps = (e) => e instanceof RegExp;
const Td = {
  value: !1,
  isValid: !1
}, Pd = { value: !0, isValid: !0 };
var Om = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Je(e[0].attributes.value) ? Je(e[0].value) || e[0].value === "" ? Pd : { value: e[0].value, isValid: !0 } : Pd
    ) : Td;
  }
  return Td;
};
const kd = {
  isValid: !1,
  value: null
};
var Mm = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, kd) : kd;
function Od(e, t, n = "validate") {
  if (Xa(e) || Array.isArray(e) && e.every(Xa) || jr(e) && !e)
    return {
      type: n,
      message: Xa(e) ? e : "",
      ref: t
    };
}
var kr = (e) => st(e) && !ps(e) ? e : {
  value: e,
  message: ""
}, Md = async (e, t, n, r, o) => {
  const { ref: a, refs: s, required: i, maxLength: c, minLength: l, min: u, max: d, pattern: p, validate: m, name: v, valueAsNumber: h, mount: g, disabled: y } = e._f, b = fe(t, v);
  if (!g || y)
    return {};
  const $ = s ? s[0] : a, _ = (U) => {
    r && $.reportValidity && ($.setCustomValidity(jr(U) ? "" : U || ""), $.reportValidity());
  }, w = {}, S = Zl(a), P = pa(a), D = S || P, I = (h || Gl(a)) && Je(a.value) && Je(b) || fs(a) && a.value === "" || b === "" || Array.isArray(b) && !b.length, ee = km.bind(null, v, n, w), re = (U, H, B, Z = pn.maxLength, J = pn.minLength) => {
    const Y = U ? H : B;
    w[v] = {
      type: U ? Z : J,
      message: Y,
      ref: a,
      ...ee(U ? Z : J, Y)
    };
  };
  if (o ? !Array.isArray(b) || !b.length : i && (!D && (I || gt(b)) || jr(b) && !b || P && !Om(s).isValid || S && !Mm(s).isValid)) {
    const { value: U, message: H } = Xa(i) ? { value: !!i, message: i } : kr(i);
    if (U && (w[v] = {
      type: pn.required,
      message: H,
      ref: $,
      ...ee(pn.required, H)
    }, !n))
      return _(H), w;
  }
  if (!I && (!gt(u) || !gt(d))) {
    let U, H;
    const B = kr(d), Z = kr(u);
    if (!gt(b) && !isNaN(b)) {
      const J = a.valueAsNumber || b && +b;
      gt(B.value) || (U = J > B.value), gt(Z.value) || (H = J < Z.value);
    } else {
      const J = a.valueAsDate || new Date(b), Y = (M) => new Date(new Date().toDateString() + " " + M), q = a.type == "time", A = a.type == "week";
      Jt(B.value) && b && (U = q ? Y(b) > Y(B.value) : A ? b > B.value : J > new Date(B.value)), Jt(Z.value) && b && (H = q ? Y(b) < Y(Z.value) : A ? b < Z.value : J < new Date(Z.value));
    }
    if ((U || H) && (re(!!U, B.message, Z.message, pn.max, pn.min), !n))
      return _(w[v].message), w;
  }
  if ((c || l) && !I && (Jt(b) || o && Array.isArray(b))) {
    const U = kr(c), H = kr(l), B = !gt(U.value) && b.length > +U.value, Z = !gt(H.value) && b.length < +H.value;
    if ((B || Z) && (re(B, U.message, H.message), !n))
      return _(w[v].message), w;
  }
  if (p && !I && Jt(b)) {
    const { value: U, message: H } = kr(p);
    if (ps(U) && !b.match(U) && (w[v] = {
      type: pn.pattern,
      message: H,
      ref: a,
      ...ee(pn.pattern, H)
    }, !n))
      return _(H), w;
  }
  if (m) {
    if (An(m)) {
      const U = await m(b, t), H = Od(U, $);
      if (H && (w[v] = {
        ...H,
        ...ee(pn.validate, H.message)
      }, !n))
        return _(H.message), w;
    } else if (st(m)) {
      let U = {};
      for (const H in m) {
        if (!Mt(U) && !n)
          break;
        const B = Od(await m[H](b, t), $, H);
        B && (U = {
          ...B,
          ...ee(H, B.message)
        }, _(B.message), n && (w[v] = U));
      }
      if (!Mt(U) && (w[v] = {
        ref: $,
        ...U
      }, !n))
        return w;
    }
  }
  return _(!0), w;
};
function R2(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = Je(e) ? r++ : e[t[r++]];
  return e;
}
function A2(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Je(e[t]))
      return !1;
  return !0;
}
function ut(e, t) {
  const n = Array.isArray(t) ? t : Kl(t) ? [t] : Pm(t), r = n.length === 1 ? e : R2(e, n), o = n.length - 1, a = n[o];
  return r && delete r[a], o !== 0 && (st(r) && Mt(r) || Array.isArray(r) && A2(r)) && ut(e, n.slice(0, -1)), e;
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
var ms = (e) => gt(e) || !$m(e);
function tr(e, t) {
  if (ms(e) || ms(t))
    return e === t;
  if (Ar(e) && Ar(t))
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
      if (Ar(a) && Ar(s) || st(a) && st(s) || Array.isArray(a) && Array.isArray(s) ? !tr(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var Dm = (e) => e.type === "select-multiple", I2 = (e) => Zl(e) || pa(e), Ii = (e) => fs(e) && e.isConnected, Rm = (e) => {
  for (const t in e)
    if (An(e[t]))
      return !0;
  return !1;
};
function vs(e, t = {}) {
  const n = Array.isArray(e);
  if (st(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || st(e[r]) && !Rm(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, vs(e[r], t[r])) : gt(e[r]) || (t[r] = !0);
  return t;
}
function Am(e, t, n) {
  const r = Array.isArray(e);
  if (st(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || st(e[o]) && !Rm(e[o]) ? Je(t) || ms(n[o]) ? n[o] = Array.isArray(e[o]) ? vs(e[o], []) : { ...vs(e[o]) } : Am(e[o], gt(t) ? {} : t[o], n[o]) : n[o] = !tr(e[o], t[o]);
  return n;
}
var ji = (e, t) => Am(e, t, vs(t)), Im = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => Je(e) ? e : t ? e === "" ? NaN : e && +e : n && Jt(e) ? new Date(e) : r ? r(e) : e;
function Li(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return Gl(t) ? t.files : Zl(t) ? Mm(e.refs).value : Dm(t) ? [...t.selectedOptions].map(({ value: n }) => n) : pa(t) ? Om(e.refs).value : Im(Je(t.value) ? e.ref.value : t.value, e);
}
var j2 = (e, t, n, r) => {
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
}, Co = (e) => Je(e) ? e : ps(e) ? e.source : st(e) ? ps(e.value) ? e.value.source : e.value : e, L2 = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
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
var F2 = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, V2 = (e, t) => !ma(fe(e, t)).length && ut(e, t);
const U2 = {
  mode: Vt.onSubmit,
  reValidateMode: Vt.onChange,
  shouldFocusError: !0
};
function W2(e = {}, t) {
  let n = {
    ...U2,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: An(n.defaultValues),
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
  }, m = e.resetOptions && e.resetOptions.keepDirtyValues, v = Sd(n.mode), h = Sd(n.reValidateMode), g = n.criteriaMode === Vt.all, y = (k) => (F) => {
    clearTimeout(u), u = setTimeout(k, F);
  }, b = async (k) => {
    if (d.isValid || k) {
      const F = n.resolver ? Mt((await I()).errors) : await re(o, !0);
      F !== r.isValid && p.state.next({
        isValid: F
      });
    }
  }, $ = (k) => d.isValidating && p.state.next({
    isValidating: k
  }), _ = (k, F = [], z, xe, ue = !0, se = !0) => {
    if (xe && z) {
      if (i.action = !0, se && Array.isArray(fe(o, k))) {
        const $e = z(fe(o, k), xe.argA, xe.argB);
        ue && ze(o, k, $e);
      }
      if (se && Array.isArray(fe(r.errors, k))) {
        const $e = z(fe(r.errors, k), xe.argA, xe.argB);
        ue && ze(r.errors, k, $e), V2(r.errors, k);
      }
      if (d.touchedFields && se && Array.isArray(fe(r.touchedFields, k))) {
        const $e = z(fe(r.touchedFields, k), xe.argA, xe.argB);
        ue && ze(r.touchedFields, k, $e);
      }
      d.dirtyFields && (r.dirtyFields = ji(a, s)), p.state.next({
        name: k,
        isDirty: H(k, F),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      ze(s, k, F);
  }, w = (k, F) => {
    ze(r.errors, k, F), p.state.next({
      errors: r.errors
    });
  }, S = (k, F, z, xe) => {
    const ue = fe(o, k);
    if (ue) {
      const se = fe(s, k, Je(z) ? fe(a, k) : z);
      Je(se) || xe && xe.defaultChecked || F ? ze(s, k, F ? se : Li(ue._f)) : J(k, se), i.mount && b();
    }
  }, P = (k, F, z, xe, ue) => {
    let se = !1, $e = !1;
    const Ge = {
      name: k
    };
    if (!z || xe) {
      d.isDirty && ($e = r.isDirty, r.isDirty = Ge.isDirty = H(), se = $e !== Ge.isDirty);
      const qe = tr(fe(a, k), F);
      $e = fe(r.dirtyFields, k), qe ? ut(r.dirtyFields, k) : ze(r.dirtyFields, k, !0), Ge.dirtyFields = r.dirtyFields, se = se || d.dirtyFields && $e !== !qe;
    }
    if (z) {
      const qe = fe(r.touchedFields, k);
      qe || (ze(r.touchedFields, k, z), Ge.touchedFields = r.touchedFields, se = se || d.touchedFields && qe !== z);
    }
    return se && ue && p.state.next(Ge), se ? Ge : {};
  }, D = (k, F, z, xe) => {
    const ue = fe(r.errors, k), se = d.isValid && jr(F) && r.isValid !== F;
    if (e.delayError && z ? (l = y(() => w(k, z)), l(e.delayError)) : (clearTimeout(u), l = null, z ? ze(r.errors, k, z) : ut(r.errors, k)), (z ? !tr(ue, z) : ue) || !Mt(xe) || se) {
      const $e = {
        ...xe,
        ...se && jr(F) ? { isValid: F } : {},
        errors: r.errors,
        name: k
      };
      r = {
        ...r,
        ...$e
      }, p.state.next($e);
    }
    $(!1);
  }, I = async (k) => n.resolver(s, n.context, j2(k || c.mount, o, n.criteriaMode, n.shouldUseNativeValidation)), ee = async (k) => {
    const { errors: F } = await I();
    if (k)
      for (const z of k) {
        const xe = fe(F, z);
        xe ? ze(r.errors, z, xe) : ut(r.errors, z);
      }
    else
      r.errors = F;
    return F;
  }, re = async (k, F, z = {
    valid: !0
  }) => {
    for (const xe in k) {
      const ue = k[xe];
      if (ue) {
        const { _f: se, ...$e } = ue;
        if (se) {
          const Ge = c.array.has(se.name), qe = await Md(ue, s, g, n.shouldUseNativeValidation && !F, Ge);
          if (qe[se.name] && (z.valid = !1, F))
            break;
          !F && (fe(qe, se.name) ? Ge ? D2(r.errors, qe, se.name) : ze(r.errors, se.name, qe[se.name]) : ut(r.errors, se.name));
        }
        $e && await re($e, F, z);
      }
    }
    return z.valid;
  }, U = () => {
    for (const k of c.unMount) {
      const F = fe(o, k);
      F && (F._f.refs ? F._f.refs.every((z) => !Ii(z)) : !Ii(F._f.ref)) && be(k);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, H = (k, F) => (k && F && ze(s, k, F), !tr(L(), a)), B = (k, F, z) => Tm(k, c, {
    ...i.mount ? s : Je(F) ? a : Jt(k) ? { [k]: F } : F
  }, z, F), Z = (k) => ma(fe(i.mount ? s : a, k, e.shouldUnregister ? fe(a, k, []) : [])), J = (k, F, z = {}) => {
    const xe = fe(o, k);
    let ue = F;
    if (xe) {
      const se = xe._f;
      se && (!se.disabled && ze(s, k, Im(F, se)), ue = fs(se.ref) && gt(F) ? "" : F, Dm(se.ref) ? [...se.ref.options].forEach(($e) => $e.selected = ue.includes($e.value)) : se.refs ? pa(se.ref) ? se.refs.length > 1 ? se.refs.forEach(($e) => (!$e.defaultChecked || !$e.disabled) && ($e.checked = Array.isArray(ue) ? !!ue.find((Ge) => Ge === $e.value) : ue === $e.value)) : se.refs[0] && (se.refs[0].checked = !!ue) : se.refs.forEach(($e) => $e.checked = $e.value === ue) : Gl(se.ref) ? se.ref.value = "" : (se.ref.value = ue, se.ref.type || p.values.next({
        name: k,
        values: { ...s }
      })));
    }
    (z.shouldDirty || z.shouldTouch) && P(k, ue, z.shouldTouch, z.shouldDirty, !0), z.shouldValidate && M(k);
  }, Y = (k, F, z) => {
    for (const xe in F) {
      const ue = F[xe], se = `${k}.${xe}`, $e = fe(o, se);
      (c.array.has(k) || !ms(ue) || $e && !$e._f) && !Ar(ue) ? Y(se, ue, z) : J(se, ue, z);
    }
  }, q = (k, F, z = {}) => {
    const xe = fe(o, k), ue = c.array.has(k), se = Xt(F);
    ze(s, k, se), ue ? (p.array.next({
      name: k,
      values: { ...s }
    }), (d.isDirty || d.dirtyFields) && z.shouldDirty && p.state.next({
      name: k,
      dirtyFields: ji(a, s),
      isDirty: H(k, se)
    })) : xe && !xe._f && !gt(se) ? Y(k, se, z) : J(k, se, z), Nd(k, c) && p.state.next({ ...r }), p.values.next({
      name: k,
      values: { ...s }
    }), !i.mount && t();
  }, A = async (k) => {
    const F = k.target;
    let z = F.name, xe = !0;
    const ue = fe(o, z), se = () => F.type ? Li(ue._f) : wm(k);
    if (ue) {
      let $e, Ge;
      const qe = se(), ln = k.type === ds.BLUR || k.type === ds.FOCUS_OUT, Ta = !L2(ue._f) && !n.resolver && !fe(r.errors, z) && !ue._f.deps || F2(ln, fe(r.touchedFields, z), r.isSubmitted, h, v), un = Nd(z, c, ln);
      ze(s, z, qe), ln ? (ue._f.onBlur && ue._f.onBlur(k), l && l(0)) : ue._f.onChange && ue._f.onChange(k);
      const po = P(z, qe, ln, !1), Pa = !Mt(po) || un;
      if (!ln && p.values.next({
        name: z,
        type: k.type,
        values: { ...s }
      }), Ta)
        return d.isValid && b(), Pa && p.state.next({ name: z, ...un ? {} : po });
      if (!ln && un && p.state.next({ ...r }), $(!0), n.resolver) {
        const { errors: mo } = await I([z]), vo = Dd(r.errors, o, z), ka = Dd(mo, o, vo.name || z);
        $e = ka.error, z = ka.name, Ge = Mt(mo);
      } else
        $e = (await Md(ue, s, g, n.shouldUseNativeValidation))[z], xe = isNaN(qe) || qe === fe(s, z, qe), xe && ($e ? Ge = !1 : d.isValid && (Ge = await re(o, !0)));
      xe && (ue._f.deps && M(ue._f.deps), D(z, Ge, $e, po));
    }
  }, M = async (k, F = {}) => {
    let z, xe;
    const ue = qa(k);
    if ($(!0), n.resolver) {
      const se = await ee(Je(k) ? k : ue);
      z = Mt(se), xe = k ? !ue.some(($e) => fe(se, $e)) : z;
    } else
      k ? (xe = (await Promise.all(ue.map(async (se) => {
        const $e = fe(o, se);
        return await re($e && $e._f ? { [se]: $e } : $e);
      }))).every(Boolean), !(!xe && !r.isValid) && b()) : xe = z = await re(o);
    return p.state.next({
      ...!Jt(k) || d.isValid && z !== r.isValid ? {} : { name: k },
      ...n.resolver || !k ? { isValid: z } : {},
      errors: r.errors,
      isValidating: !1
    }), F.shouldFocus && !xe && _c(o, (se) => se && fe(r.errors, se), k ? ue : c.mount), xe;
  }, L = (k) => {
    const F = {
      ...a,
      ...i.mount ? s : {}
    };
    return Je(k) ? F : Jt(k) ? fe(F, k) : k.map((z) => fe(F, z));
  }, W = (k, F) => ({
    invalid: !!fe((F || r).errors, k),
    isDirty: !!fe((F || r).dirtyFields, k),
    isTouched: !!fe((F || r).touchedFields, k),
    error: fe((F || r).errors, k)
  }), oe = (k) => {
    k && qa(k).forEach((F) => ut(r.errors, F)), p.state.next({
      errors: k ? r.errors : {}
    });
  }, ce = (k, F, z) => {
    const xe = (fe(o, k, { _f: {} })._f || {}).ref;
    ze(r.errors, k, {
      ...F,
      ref: xe
    }), p.state.next({
      name: k,
      errors: r.errors,
      isValid: !1
    }), z && z.shouldFocus && xe && xe.focus && xe.focus();
  }, ye = (k, F) => An(k) ? p.values.subscribe({
    next: (z) => k(B(void 0, F), z)
  }) : B(k, F, !0), be = (k, F = {}) => {
    for (const z of k ? qa(k) : c.mount)
      c.mount.delete(z), c.array.delete(z), F.keepValue || (ut(o, z), ut(s, z)), !F.keepError && ut(r.errors, z), !F.keepDirty && ut(r.dirtyFields, z), !F.keepTouched && ut(r.touchedFields, z), !n.shouldUnregister && !F.keepDefaultValue && ut(a, z);
    p.values.next({
      values: { ...s }
    }), p.state.next({
      ...r,
      ...F.keepDirty ? { isDirty: H() } : {}
    }), !F.keepIsValid && b();
  }, te = (k, F = {}) => {
    let z = fe(o, k);
    const xe = jr(F.disabled);
    return ze(o, k, {
      ...z || {},
      _f: {
        ...z && z._f ? z._f : { ref: { name: k } },
        name: k,
        mount: !0,
        ...F
      }
    }), c.mount.add(k), Je(F.value) || ze(s, k, F.value), z ? xe && ze(s, k, F.disabled ? void 0 : fe(s, k, Li(z._f))) : S(k, !0, F.value), {
      ...xe ? { disabled: F.disabled } : {},
      ...n.progressive ? {
        required: !!F.required,
        min: Co(F.min),
        max: Co(F.max),
        minLength: Co(F.minLength),
        maxLength: Co(F.maxLength),
        pattern: Co(F.pattern)
      } : {},
      name: k,
      onChange: A,
      onBlur: A,
      ref: (ue) => {
        if (ue) {
          te(k, F), z = fe(o, k);
          const se = Je(ue.value) && ue.querySelectorAll && ue.querySelectorAll("input,select,textarea")[0] || ue, $e = I2(se), Ge = z._f.refs || [];
          if ($e ? Ge.find((qe) => qe === se) : se === z._f.ref)
            return;
          ze(o, k, {
            _f: {
              ...z._f,
              ...$e ? {
                refs: [
                  ...Ge.filter(Ii),
                  se,
                  ...Array.isArray(fe(a, k)) ? [{}] : []
                ],
                ref: { type: se.type, name: k }
              } : { ref: se }
            }
          }), S(k, !1, void 0, se);
        } else
          z = fe(o, k, {}), z._f && (z._f.mount = !1), (n.shouldUnregister || F.shouldUnregister) && !(_m(c.array, k) && i.action) && c.unMount.add(k);
      }
    };
  }, le = () => n.shouldFocusError && _c(o, (k) => k && fe(r.errors, k), c.mount), ve = (k, F) => async (z) => {
    z && (z.preventDefault && z.preventDefault(), z.persist && z.persist());
    let xe = Xt(s);
    if (p.state.next({
      isSubmitting: !0
    }), n.resolver) {
      const { errors: ue, values: se } = await I();
      r.errors = ue, xe = se;
    } else
      await re(o);
    ut(r.errors, "root"), Mt(r.errors) ? (p.state.next({
      errors: {}
    }), await k(xe, z)) : (F && await F({ ...r.errors }, z), le(), setTimeout(le)), p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Mt(r.errors),
      submitCount: r.submitCount + 1,
      errors: r.errors
    });
  }, X = (k, F = {}) => {
    fe(o, k) && (Je(F.defaultValue) ? q(k, fe(a, k)) : (q(k, F.defaultValue), ze(a, k, F.defaultValue)), F.keepTouched || ut(r.touchedFields, k), F.keepDirty || (ut(r.dirtyFields, k), r.isDirty = F.defaultValue ? H(k, fe(a, k)) : H()), F.keepError || (ut(r.errors, k), d.isValid && b()), p.state.next({ ...r }));
  }, he = (k, F = {}) => {
    const z = k || a, xe = Xt(z), ue = k && !Mt(k) ? xe : a;
    if (F.keepDefaultValues || (a = z), !F.keepValues) {
      if (F.keepDirtyValues || m)
        for (const se of c.mount)
          fe(r.dirtyFields, se) ? ze(ue, se, fe(s, se)) : q(se, fe(ue, se));
      else {
        if (Yl && Je(k))
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
      s = e.shouldUnregister ? F.keepDefaultValues ? Xt(a) : {} : Xt(ue), p.array.next({
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
    }, !i.mount && t(), i.mount = !d.isValid || !!F.keepIsValid, i.watch = !!e.shouldUnregister, p.state.next({
      submitCount: F.keepSubmitCount ? r.submitCount : 0,
      isDirty: F.keepDirty ? r.isDirty : !!(F.keepDefaultValues && !tr(k, a)),
      isSubmitted: F.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: F.keepDirtyValues ? r.dirtyFields : F.keepDefaultValues && k ? ji(a, k) : {},
      touchedFields: F.keepTouched ? r.touchedFields : {},
      errors: F.keepErrors ? r.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, K = (k, F) => he(An(k) ? k(s) : k, F);
  return {
    control: {
      register: te,
      unregister: be,
      getFieldState: W,
      handleSubmit: ve,
      setError: ce,
      _executeSchema: I,
      _getWatch: B,
      _getDirty: H,
      _updateValid: b,
      _removeUnmounted: U,
      _updateFieldArray: _,
      _getFieldArray: Z,
      _reset: he,
      _resetDefaultValues: () => An(n.defaultValues) && n.defaultValues().then((k) => {
        K(k, n.resetOptions), p.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (k) => {
        r = {
          ...r,
          ...k
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
      set _state(k) {
        i = k;
      },
      get _defaultValues() {
        return a;
      },
      get _names() {
        return c;
      },
      set _names(k) {
        c = k;
      },
      get _formState() {
        return r;
      },
      set _formState(k) {
        r = k;
      },
      get _options() {
        return n;
      },
      set _options(k) {
        n = {
          ...n,
          ...k
        };
      }
    },
    trigger: M,
    register: te,
    handleSubmit: ve,
    watch: ye,
    setValue: q,
    getValues: L,
    reset: K,
    resetField: X,
    clearErrors: oe,
    unregister: be,
    setError: ce,
    setFocus: (k, F = {}) => {
      const z = fe(o, k), xe = z && z._f;
      if (xe) {
        const ue = xe.refs ? xe.refs[0] : xe.ref;
        ue.focus && (ue.focus(), F.shouldSelect && ue.select());
      }
    },
    getFieldState: W
  };
}
function z2(e = {}) {
  const t = T.useRef(), n = T.useRef(), [r, o] = T.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: An(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: An(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...W2(e, () => o((s) => ({ ...s }))),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, Hl({
    subject: a._subjects.state,
    next: (s) => {
      Sm(s, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), T.useEffect(() => {
    e.values && !tr(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values) : a._resetDefaultValues();
  }, [e.values, a]), T.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), t.current.formState = Em(r, a), t.current;
}
const B2 = /* @__PURE__ */ O((e, t) => /* @__PURE__ */ x(ie.label, E({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), jm = B2, Y2 = Qr(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Sn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  jm,
  {
    ref: n,
    className: R(Y2(), e),
    ...t
  }
));
Sn.displayName = jm.displayName;
const H2 = T2, Lm = C.createContext(
  {}
), yr = ({
  ...e
}) => /* @__PURE__ */ f.exports.jsx(Lm.Provider, { value: { name: e.name }, children: /* @__PURE__ */ f.exports.jsx(M2, { ...e }) }), qs = () => {
  const e = C.useContext(Lm), t = C.useContext(Fm), { getFieldState: n, formState: r } = Zs(), o = n(e.name, r);
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
}, Fm = C.createContext(
  {}
), Zn = C.forwardRef(({ className: e, ...t }, n) => {
  const r = C.useId();
  return /* @__PURE__ */ f.exports.jsx(Fm.Provider, { value: { id: r }, children: /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: R("space-y-2", e), ...t }) });
});
Zn.displayName = "FormItem";
const $r = C.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = qs();
  return /* @__PURE__ */ f.exports.jsx(
    Sn,
    {
      ref: n,
      className: R(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
$r.displayName = "FormLabel";
const va = C.forwardRef(({ ...e }, t) => {
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
va.displayName = "FormControl";
const so = C.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = qs();
  return /* @__PURE__ */ f.exports.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: R("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
so.displayName = "FormDescription";
const K2 = C.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = qs(), s = o ? String(o == null ? void 0 : o.message) : t;
  return s ? /* @__PURE__ */ f.exports.jsx(
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
K2.displayName = "FormMessage";
const Vm = "Dialog", [Um, Wm] = Ke(Vm), [G2, Zt] = Um(Vm), Z2 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = j(null), c = j(null), [l = !1, u] = et({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ x(G2, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: nt(),
    titleId: nt(),
    descriptionId: nt(),
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
}, q2 = "DialogTrigger", X2 = /* @__PURE__ */ O((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Zt(q2, n), a = we(t, o.triggerRef);
  return /* @__PURE__ */ x(ie.button, E({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": ql(o.open)
  }, r, {
    ref: a,
    onClick: V(e.onClick, o.onOpenToggle)
  }));
}), zm = "DialogPortal", [J2, Bm] = Um(zm, {
  forceMount: void 0
}), Q2 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Zt(zm, t);
  return /* @__PURE__ */ x(J2, {
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
}, Cc = "DialogOverlay", eC = /* @__PURE__ */ O((e, t) => {
  const n = Bm(Cc, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Zt(Cc, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, /* @__PURE__ */ x(tC, E({}, o, {
    ref: t
  }))) : null;
}), tC = /* @__PURE__ */ O((e, t) => {
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
}), zr = "DialogContent", nC = /* @__PURE__ */ O((e, t) => {
  const n = Bm(zr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Zt(zr, e.__scopeDialog);
  return /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ x(rC, E({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(oC, E({}, o, {
    ref: t
  })));
}), rC = /* @__PURE__ */ O((e, t) => {
  const n = Zt(zr, e.__scopeDialog), r = j(null), o = we(t, n.contentRef, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return ua(a);
  }, []), /* @__PURE__ */ x(Ym, E({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: V(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: V(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: V(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), oC = /* @__PURE__ */ O((e, t) => {
  const n = Zt(zr, e.__scopeDialog), r = j(!1), o = j(!1);
  return /* @__PURE__ */ x(Ym, E({}, e, {
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
}), Ym = /* @__PURE__ */ O((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Zt(zr, n), c = j(null), l = we(t, c);
  return Ls(), /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(Fs, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ x(br, E({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": ql(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), Hm = "DialogTitle", aC = /* @__PURE__ */ O((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Zt(Hm, n);
  return /* @__PURE__ */ x(ie.h2, E({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), sC = "DialogDescription", iC = /* @__PURE__ */ O((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Zt(sC, n);
  return /* @__PURE__ */ x(ie.p, E({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), cC = "DialogClose", lC = /* @__PURE__ */ O((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Zt(cC, n);
  return /* @__PURE__ */ x(ie.button, E({
    type: "button"
  }, r, {
    ref: t,
    onClick: V(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function ql(e) {
  return e ? "open" : "closed";
}
const uC = "DialogTitleWarning", [dC, Zk] = e$(uC, {
  contentName: zr,
  titleName: Hm,
  docsSlug: "dialog"
}), Xl = Z2, Jl = X2, ha = Q2, ga = eC, ba = nC, xa = aC, ya = iC, $a = lC, fC = Xl, qk = Jl, Km = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ f.exports.jsx(ha, { className: R(e), ...n, children: /* @__PURE__ */ f.exports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-4", children: t }) });
Km.displayName = ha.displayName;
const Gm = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ga,
  {
    ref: n,
    className: R(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      e
    ),
    ...t
  }
));
Gm.displayName = ga.displayName;
const Zm = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(Km, { children: [
  /* @__PURE__ */ f.exports.jsx(Gm, {}),
  /* @__PURE__ */ f.exports.jsxs(
    ba,
    {
      ref: r,
      className: R(
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
Zm.displayName = ba.displayName;
const pC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
pC.displayName = "DialogHeader";
const mC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
mC.displayName = "DialogFooter";
const vC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  xa,
  {
    ref: n,
    className: R(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
vC.displayName = xa.displayName;
const hC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ya,
  {
    ref: n,
    className: R("text-sm text-muted-foreground", e),
    ...t
  }
));
hC.displayName = ya.displayName;
const gC = ({ id: e, form: t, label: n, description: r, iconDirection: o, classNameContainer: a, validateInputIconClassNames: s, rest: i }) => {
  const [c, l] = C.useState(!1);
  return i.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: R("w-full", a), children: [
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
          className: R(s(), i.className),
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
    yr,
    {
      control: t.control,
      name: e,
      render: ({ field: u, formState: d }) => {
        var p;
        return /* @__PURE__ */ f.exports.jsxs(Zn, { className: R("w-full", a), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            n && /* @__PURE__ */ f.exports.jsxs($r, { className: "flex", children: [
              n,
              "&nbsp"
            ] }),
            ((p = d == null ? void 0 : d.errors[e]) == null ? void 0 : p.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              d.errors[e].message
            ] })
          ] }),
          r && /* @__PURE__ */ f.exports.jsx(so, { className: "text-xs", children: r }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ f.exports.jsx(va, { children: /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
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
                className: R(s(), i.className),
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
}, bC = ({ id: e, form: t, icon: n, label: r, description: o, iconDirection: a, classNameContainer: s, validateInputIconClassNames: i, rest: c }) => c.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: R("w-full", s), children: [
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
  yr,
  {
    control: t.control,
    name: e,
    render: ({ field: l, formState: u }) => {
      var d;
      return /* @__PURE__ */ f.exports.jsxs(Zn, { className: R("w-full", s), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          r && /* @__PURE__ */ f.exports.jsxs($r, { className: "flex", children: [
            r,
            " "
          ] }),
          ((d = u == null ? void 0 : u.errors[e]) == null ? void 0 : d.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            u.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(so, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
          a === "left" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
          /* @__PURE__ */ f.exports.jsx(va, { children: /* @__PURE__ */ f.exports.jsx(
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
      className: R(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
jo.displayName = "InputUI";
function qm({ children: e, id: t, label: n, classNameContainer: r, description: o, icon: a, iconDirection: s = "left", ...i }) {
  const c = () => s === "left" && (a || i.type === "password") ? "pl-9" : s === "right" ? "pr-9" : "";
  return i.type === "password" ? /* @__PURE__ */ f.exports.jsx(
    gC,
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
    bC,
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
const xC = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), yC = (e) => {
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
function Xk({
  form: e,
  pid: t = Ct
}) {
  var r, o, a, s, i, c, l, u, d, p, m, v, h, g;
  const n = (y) => {
    const { value: b } = y.target, $ = xC(b);
    e.setValue("pidNumber", $);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ f.exports.jsx(
      Nk,
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
      qm,
      {
        id: "pidNumber",
        form: e,
        type: "text",
        defaultValue: (m = t == null ? void 0 : t.number) == null ? void 0 : m.defaultValue,
        onKeyPress: yC,
        onKeyUp: n,
        tabIndex: ((v = t == null ? void 0 : t.number) == null ? void 0 : v.tabIndex) || Ct.number.tabIndex,
        maxLength: ((h = t == null ? void 0 : t.number) == null ? void 0 : h.maxLength) || Ct.number.maxLength,
        placeholder: ((g = t == null ? void 0 : t.number) == null ? void 0 : g.placeholder) || Ct.number.placeholder
      }
    )
  ] });
}
const Xm = "Popover", [Jm, Jk] = Ke(Xm, [
  cn
]), Ql = cn(), [$C, io] = Jm(Xm), wC = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, i = Ql(t), c = j(null), [l, u] = G(!1), [d = !1, p] = et({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ x(ao, i, /* @__PURE__ */ x($C, {
    scope: t,
    contentId: nt(),
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
}, _C = "PopoverTrigger", CC = /* @__PURE__ */ O((e, t) => {
  const { __scopePopover: n, ...r } = e, o = io(_C, n), a = Ql(n), s = we(t, o.triggerRef), i = /* @__PURE__ */ x(ie.button, E({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": tv(o.open)
  }, r, {
    ref: s,
    onClick: V(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? i : /* @__PURE__ */ x(ca, E({
    asChild: !0
  }, a), i);
}), Qm = "PopoverPortal", [EC, SC] = Jm(Qm, {
  forceMount: void 0
}), NC = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = io(Qm, t);
  return /* @__PURE__ */ x(EC, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ x(Ze, {
    present: n || a.open
  }, /* @__PURE__ */ x(Ws, {
    asChild: !0,
    container: o
  }, r)));
}, Lo = "PopoverContent", TC = /* @__PURE__ */ O((e, t) => {
  const n = SC(Lo, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = io(Lo, e.__scopePopover);
  return /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ x(PC, E({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(kC, E({}, o, {
    ref: t
  })));
}), PC = /* @__PURE__ */ O((e, t) => {
  const n = io(Lo, e.__scopePopover), r = j(null), o = we(t, r), a = j(!1);
  return Q(() => {
    const s = r.current;
    if (s)
      return ua(s);
  }, []), /* @__PURE__ */ x(Hs, {
    as: Qt,
    allowPinchZoom: !0
  }, /* @__PURE__ */ x(ev, E({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: V(e.onCloseAutoFocus, (s) => {
      var i;
      s.preventDefault(), a.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: V(e.onPointerDownOutside, (s) => {
      const i = s.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || c;
      a.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: V(
      e.onFocusOutside,
      (s) => s.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), kC = /* @__PURE__ */ O((e, t) => {
  const n = io(Lo, e.__scopePopover), r = j(!1), o = j(!1);
  return /* @__PURE__ */ x(ev, E({}, e, {
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
}), ev = /* @__PURE__ */ O((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, p = io(Lo, n), m = Ql(n);
  return Ls(), /* @__PURE__ */ x(Fs, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ x(br, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: u,
    onEscapeKeyDown: i,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ x(la, E({
    "data-state": tv(p.open),
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
function tv(e) {
  return e ? "open" : "closed";
}
const OC = wC, MC = CC, DC = NC, nv = TC, ir = OC, cr = MC, Vn = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(DC, { children: /* @__PURE__ */ f.exports.jsx(
  nv,
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
Vn.displayName = nv.displayName;
const rv = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
rv.displayName = "TextareaUI";
const Qk = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, ...i }) => /* @__PURE__ */ f.exports.jsx(
  yr,
  {
    control: t.control,
    name: e,
    render: ({ field: c, formState: l }) => {
      var u;
      return /* @__PURE__ */ f.exports.jsxs(Zn, { className: R("w-full", s), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          n && /* @__PURE__ */ f.exports.jsxs($r, { className: "flex", children: [
            n,
            " "
          ] }),
          ((u = l == null ? void 0 : l.errors[e]) == null ? void 0 : u.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            l.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(so, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsx(va, { children: /* @__PURE__ */ f.exports.jsx(
          rv,
          {
            placeholder: a,
            className: R("resize-none", r),
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
function co(e) {
  const t = j({
    value: e,
    previous: e
  });
  return xt(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const ov = /* @__PURE__ */ O((e, t) => /* @__PURE__ */ x(ie.span, E({}, e, {
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
}))), av = ov, RC = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], AC = [
  " ",
  "Enter"
], Xs = "Select", [Js, eu, IC] = Hn(Xs), [lo, eO] = Ke(Xs, [
  IC,
  cn
]), tu = cn(), [jC, wr] = lo(Xs), [LC, FC] = lo(Xs), VC = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: i, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: p, required: m } = e, v = tu(t), [h, g] = G(null), [y, b] = G(null), [$, _] = G(!1), w = sn(l), [S = !1, P] = et({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [D, I] = et({
    prop: s,
    defaultProp: i,
    onChange: c
  }), ee = j(null), re = h ? Boolean(h.closest("form")) : !0, [U, H] = G(/* @__PURE__ */ new Set()), B = Array.from(U).map(
    (Z) => Z.props.value
  ).join(";");
  return /* @__PURE__ */ x(ao, v, /* @__PURE__ */ x(jC, {
    required: m,
    scope: t,
    trigger: h,
    onTriggerChange: g,
    valueNode: y,
    onValueNodeChange: b,
    valueNodeHasChildren: $,
    onValueNodeHasChildrenChange: _,
    contentId: nt(),
    value: D,
    onValueChange: I,
    open: S,
    onOpenChange: P,
    dir: w,
    triggerPointerDownPosRef: ee,
    disabled: p
  }, /* @__PURE__ */ x(Js.Provider, {
    scope: t
  }, /* @__PURE__ */ x(LC, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: pe((Z) => {
      H(
        (J) => new Set(J).add(Z)
      );
    }, []),
    onNativeOptionRemove: pe((Z) => {
      H((J) => {
        const Y = new Set(J);
        return Y.delete(Z), Y;
      });
    }, [])
  }, n)), re ? /* @__PURE__ */ x(cv, {
    key: B,
    "aria-hidden": !0,
    required: m,
    tabIndex: -1,
    name: u,
    autoComplete: d,
    value: D,
    onChange: (Z) => I(Z.target.value),
    disabled: p
  }, D === void 0 ? /* @__PURE__ */ x("option", {
    value: ""
  }) : null, Array.from(U)) : null));
}, UC = "SelectTrigger", WC = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = tu(n), s = wr(UC, n), i = s.disabled || r, c = we(t, s.onTriggerChange), l = eu(n), [u, d, p] = lv((v) => {
    const h = l().filter(
      (b) => !b.disabled
    ), g = h.find(
      (b) => b.value === s.value
    ), y = uv(h, v, g);
    y !== void 0 && s.onValueChange(y.value);
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
    onClick: V(o.onClick, (v) => {
      v.currentTarget.focus();
    }),
    onPointerDown: V(o.onPointerDown, (v) => {
      const h = v.target;
      h.hasPointerCapture(v.pointerId) && h.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && (m(), s.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      }, v.preventDefault());
    }),
    onKeyDown: V(o.onKeyDown, (v) => {
      const h = u.current !== "";
      !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && d(v.key), !(h && v.key === " ") && RC.includes(v.key) && (m(), v.preventDefault());
    })
  })));
}), zC = "SelectValue", BC = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s, ...i } = e, c = wr(zC, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = we(t, c.onValueNodeChange);
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
}), YC = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ x(ie.span, E({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), HC = (e) => /* @__PURE__ */ x(Ws, E({
  asChild: !0
}, e)), Br = "SelectContent", KC = /* @__PURE__ */ O((e, t) => {
  const n = wr(Br, e.__scopeSelect), [r, o] = G();
  if (ft(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ nl(/* @__PURE__ */ x(sv, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ x(Js.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ x("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ x(GC, E({}, e, {
    ref: t
  }));
}), mn = 10, [sv, Qs] = lo(Br), GC = /* @__PURE__ */ O((e, t) => {
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
  } = e, b = wr(Br, n), [$, _] = G(null), [w, S] = G(null), P = we(
    t,
    (te) => _(te)
  ), [D, I] = G(null), [ee, re] = G(null), U = eu(n), [H, B] = G(!1), Z = j(!1);
  Q(() => {
    if ($)
      return ua($);
  }, [
    $
  ]), Ls();
  const J = pe((te) => {
    const [le, ...ve] = U().map(
      (K) => K.ref.current
    ), [X] = ve.slice(-1), he = document.activeElement;
    for (const K of te)
      if (K === he || (K == null || K.scrollIntoView({
        block: "nearest"
      }), K === le && w && (w.scrollTop = 0), K === X && w && (w.scrollTop = w.scrollHeight), K == null || K.focus(), document.activeElement !== he))
        return;
  }, [
    U,
    w
  ]), Y = pe(
    () => J([
      D,
      $
    ]),
    [
      J,
      D,
      $
    ]
  );
  Q(() => {
    H && Y();
  }, [
    H,
    Y
  ]);
  const { onOpenChange: q, triggerPointerDownPosRef: A } = b;
  Q(() => {
    if ($) {
      let te = {
        x: 0,
        y: 0
      };
      const le = (X) => {
        var he, K, Re, Ve;
        te = {
          x: Math.abs(Math.round(X.pageX) - ((he = (K = A.current) === null || K === void 0 ? void 0 : K.x) !== null && he !== void 0 ? he : 0)),
          y: Math.abs(Math.round(X.pageY) - ((Re = (Ve = A.current) === null || Ve === void 0 ? void 0 : Ve.y) !== null && Re !== void 0 ? Re : 0))
        };
      }, ve = (X) => {
        te.x <= 10 && te.y <= 10 ? X.preventDefault() : $.contains(X.target) || q(!1), document.removeEventListener("pointermove", le), A.current = null;
      };
      return A.current !== null && (document.addEventListener("pointermove", le), document.addEventListener("pointerup", ve, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", le), document.removeEventListener("pointerup", ve, {
          capture: !0
        });
      };
    }
  }, [
    $,
    q,
    A
  ]), Q(() => {
    const te = () => q(!1);
    return window.addEventListener("blur", te), window.addEventListener("resize", te), () => {
      window.removeEventListener("blur", te), window.removeEventListener("resize", te);
    };
  }, [
    q
  ]);
  const [M, L] = lv((te) => {
    const le = U().filter(
      (he) => !he.disabled
    ), ve = le.find(
      (he) => he.ref.current === document.activeElement
    ), X = uv(le, te, ve);
    X && setTimeout(
      () => X.ref.current.focus()
    );
  }), W = pe((te, le, ve) => {
    const X = !Z.current && !ve;
    (b.value !== void 0 && b.value === le || X) && (I(te), X && (Z.current = !0));
  }, [
    b.value
  ]), oe = pe(
    () => $ == null ? void 0 : $.focus(),
    [
      $
    ]
  ), ce = pe((te, le, ve) => {
    const X = !Z.current && !ve;
    (b.value !== void 0 && b.value === le || X) && re(te);
  }, [
    b.value
  ]), ye = r === "popper" ? Ad : ZC, be = ye === Ad ? {
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
  return /* @__PURE__ */ x(sv, {
    scope: n,
    content: $,
    viewport: w,
    onViewportChange: S,
    itemRefCallback: W,
    selectedItem: D,
    onItemLeave: oe,
    itemTextRefCallback: ce,
    focusSelectedItem: Y,
    selectedItemText: ee,
    position: r,
    isPositioned: H,
    searchRef: M
  }, /* @__PURE__ */ x(Hs, {
    as: Qt,
    allowPinchZoom: !0
  }, /* @__PURE__ */ x(Fs, {
    asChild: !0,
    trapped: b.open,
    onMountAutoFocus: (te) => {
      te.preventDefault();
    },
    onUnmountAutoFocus: V(o, (te) => {
      var le;
      (le = b.trigger) === null || le === void 0 || le.focus({
        preventScroll: !0
      }), te.preventDefault();
    })
  }, /* @__PURE__ */ x(br, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (te) => te.preventDefault(),
    onDismiss: () => b.onOpenChange(!1)
  }, /* @__PURE__ */ x(ye, E({
    role: "listbox",
    id: b.contentId,
    "data-state": b.open ? "open" : "closed",
    dir: b.dir,
    onContextMenu: (te) => te.preventDefault()
  }, y, be, {
    onPlaced: () => B(!0),
    ref: P,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...y.style
    },
    onKeyDown: V(y.onKeyDown, (te) => {
      const le = te.ctrlKey || te.altKey || te.metaKey;
      if (te.key === "Tab" && te.preventDefault(), !le && te.key.length === 1 && L(te.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(te.key)) {
        let X = U().filter(
          (he) => !he.disabled
        ).map(
          (he) => he.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(te.key) && (X = X.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(te.key)) {
          const he = te.target, K = X.indexOf(he);
          X = X.slice(K + 1);
        }
        setTimeout(
          () => J(X)
        ), te.preventDefault();
      }
    })
  }))))));
}), ZC = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = wr(Br, n), s = Qs(Br, n), [i, c] = G(null), [l, u] = G(null), d = we(
    t,
    (P) => u(P)
  ), p = eu(n), m = j(!1), v = j(!0), { viewport: h, selectedItem: g, selectedItemText: y, focusSelectedItem: b } = s, $ = pe(() => {
    if (a.trigger && a.valueNode && i && l && h && g && y) {
      const P = a.trigger.getBoundingClientRect(), D = l.getBoundingClientRect(), I = a.valueNode.getBoundingClientRect(), ee = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const he = ee.left - D.left, K = I.left - he, Re = P.left - K, Ve = P.width + Re, lt = Math.max(Ve, D.width), k = window.innerWidth - mn, F = Fo(K, [
          mn,
          k - lt
        ]);
        i.style.minWidth = Ve + "px", i.style.left = F + "px";
      } else {
        const he = D.right - ee.right, K = window.innerWidth - I.right - he, Re = window.innerWidth - P.right - K, Ve = P.width + Re, lt = Math.max(Ve, D.width), k = window.innerWidth - mn, F = Fo(K, [
          mn,
          k - lt
        ]);
        i.style.minWidth = Ve + "px", i.style.right = F + "px";
      }
      const re = p(), U = window.innerHeight - mn * 2, H = h.scrollHeight, B = window.getComputedStyle(l), Z = parseInt(B.borderTopWidth, 10), J = parseInt(B.paddingTop, 10), Y = parseInt(B.borderBottomWidth, 10), q = parseInt(B.paddingBottom, 10), A = Z + J + H + q + Y, M = Math.min(g.offsetHeight * 5, A), L = window.getComputedStyle(h), W = parseInt(L.paddingTop, 10), oe = parseInt(L.paddingBottom, 10), ce = P.top + P.height / 2 - mn, ye = U - ce, be = g.offsetHeight / 2, te = g.offsetTop + be, le = Z + J + te, ve = A - le;
      if (le <= ce) {
        const he = g === re[re.length - 1].ref.current;
        i.style.bottom = "0px";
        const K = l.clientHeight - h.offsetTop - h.offsetHeight, Re = Math.max(ye, be + (he ? oe : 0) + K + Y), Ve = le + Re;
        i.style.height = Ve + "px";
      } else {
        const he = g === re[0].ref.current;
        i.style.top = "0px";
        const Re = Math.max(ce, Z + h.offsetTop + (he ? W : 0) + be) + ve;
        i.style.height = Re + "px", h.scrollTop = le - ce + h.offsetTop;
      }
      i.style.margin = `${mn}px 0`, i.style.minHeight = M + "px", i.style.maxHeight = U + "px", r == null || r(), requestAnimationFrame(
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
  ft(
    () => $(),
    [
      $
    ]
  );
  const [_, w] = G();
  ft(() => {
    l && w(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const S = pe((P) => {
    P && v.current === !0 && ($(), b == null || b(), v.current = !1);
  }, [
    $,
    b
  ]);
  return /* @__PURE__ */ x(qC, {
    scope: n,
    contentWrapper: i,
    shouldExpandOnScrollRef: m,
    onScrollButtonChange: S
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
}), [qC, XC] = lo(Br, {}), Id = "SelectViewport", JC = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Qs(Id, n), a = XC(Id, n), s = we(t, o.onViewportChange), i = j(0);
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
    onScroll: V(r.onScroll, (c) => {
      const l = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: d } = a;
      if (d != null && d.current && u) {
        const p = Math.abs(i.current - l.scrollTop);
        if (p > 0) {
          const m = window.innerHeight - mn * 2, v = parseFloat(u.style.minHeight), h = parseFloat(u.style.height), g = Math.max(v, h);
          if (g < m) {
            const y = g + p, b = Math.min(m, y), $ = y - b;
            u.style.height = b + "px", u.style.bottom === "0px" && (l.scrollTop = $ > 0 ? $ : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      i.current = l.scrollTop;
    })
  }))));
}), QC = "SelectGroup", [eE, tE] = lo(QC), nE = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = nt();
  return /* @__PURE__ */ x(eE, {
    scope: n,
    id: o
  }, /* @__PURE__ */ x(ie.div, E({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), rE = "SelectLabel", oE = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = tE(rE, n);
  return /* @__PURE__ */ x(ie.div, E({
    id: o.id
  }, r, {
    ref: t
  }));
}), Ec = "SelectItem", [aE, iv] = lo(Ec), sE = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, i = wr(Ec, n), c = Qs(Ec, n), l = i.value === r, [u, d] = G(a ?? ""), [p, m] = G(!1), v = we(t, (y) => {
    var b;
    return (b = c.itemRefCallback) === null || b === void 0 ? void 0 : b.call(c, y, r, o);
  }), h = nt(), g = () => {
    o || (i.onValueChange(r), i.onOpenChange(!1));
  };
  return /* @__PURE__ */ x(aE, {
    scope: n,
    value: r,
    disabled: o,
    textId: h,
    isSelected: l,
    onItemTextChange: pe((y) => {
      d((b) => {
        var $;
        return b || (($ = y == null ? void 0 : y.textContent) !== null && $ !== void 0 ? $ : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ x(Js.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: u
  }, /* @__PURE__ */ x(ie.div, E({
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
    onFocus: V(
      s.onFocus,
      () => m(!0)
    ),
    onBlur: V(
      s.onBlur,
      () => m(!1)
    ),
    onPointerUp: V(s.onPointerUp, g),
    onPointerMove: V(s.onPointerMove, (y) => {
      if (o) {
        var b;
        (b = c.onItemLeave) === null || b === void 0 || b.call(c);
      } else
        y.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: V(s.onPointerLeave, (y) => {
      if (y.currentTarget === document.activeElement) {
        var b;
        (b = c.onItemLeave) === null || b === void 0 || b.call(c);
      }
    }),
    onKeyDown: V(s.onKeyDown, (y) => {
      var b;
      ((b = c.searchRef) === null || b === void 0 ? void 0 : b.current) !== "" && y.key === " " || (AC.includes(y.key) && g(), y.key === " " && y.preventDefault());
    })
  }))));
}), Wa = "SelectItemText", iE = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = wr(Wa, n), i = Qs(Wa, n), c = iv(Wa, n), l = FC(Wa, n), [u, d] = G(null), p = we(
    t,
    (y) => d(y),
    c.onItemTextChange,
    (y) => {
      var b;
      return (b = i.itemTextRefCallback) === null || b === void 0 ? void 0 : b.call(i, y, c.value, c.disabled);
    }
  ), m = u == null ? void 0 : u.textContent, v = xt(
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
  ), { onNativeOptionAdd: h, onNativeOptionRemove: g } = l;
  return ft(() => (h(v), () => g(v)), [
    h,
    g,
    v
  ]), /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(ie.span, E({
    id: c.textId
  }, a, {
    ref: p
  })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ nl(a.children, s.valueNode) : null);
}), cE = "SelectItemIndicator", lE = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return iv(cE, n).isSelected ? /* @__PURE__ */ x(ie.span, E({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), uE = /* @__PURE__ */ O((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, E({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
}), cv = /* @__PURE__ */ O((e, t) => {
  const { value: n, ...r } = e, o = j(null), a = we(t, o), s = co(n);
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
  ]), /* @__PURE__ */ x(ov, {
    asChild: !0
  }, /* @__PURE__ */ x("select", E({}, r, {
    ref: a,
    defaultValue: n
  })));
});
cv.displayName = "BubbleSelect";
function lv(e) {
  const t = We(e), n = j(""), r = j(0), o = pe((s) => {
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
  return Q(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    a
  ];
}
function uv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = dE(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function dE(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const fE = VC, dv = WC, pE = BC, mE = YC, vE = HC, fv = KC, hE = JC, gE = nE, pv = oE, mv = sE, bE = iE, xE = lE, vv = uE, hv = fE, tO = gE, gv = pE, nu = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  dv,
  {
    ref: r,
    className: R(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(mE, { asChild: !0, children: /* @__PURE__ */ f.exports.jsx(Oo, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
nu.displayName = dv.displayName;
const ru = C.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ f.exports.jsx(vE, { children: /* @__PURE__ */ f.exports.jsx(
  fv,
  {
    ref: o,
    className: R(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
      n === "popper" && "translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ f.exports.jsx(
      hE,
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
ru.displayName = fv.displayName;
const yE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  pv,
  {
    ref: n,
    className: R("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
yE.displayName = pv.displayName;
const ou = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  mv,
  {
    ref: r,
    className: R(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(xE, { children: /* @__PURE__ */ f.exports.jsx(en, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ f.exports.jsx(bE, { children: t })
    ]
  }
));
ou.displayName = mv.displayName;
const $E = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  vv,
  {
    ref: n,
    className: R("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
$E.displayName = vv.displayName;
const wE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
wE.displayName = "Card";
const _E = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: R("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
_E.displayName = "CardHeader";
const CE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
CE.displayName = "CardTitle";
const EE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "p",
  {
    ref: n,
    className: R("text-sm text-muted-foreground", e),
    ...t
  }
));
EE.displayName = "CardDescription";
const SE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: R("p-6 pt-0", e), ...t }));
SE.displayName = "CardContent";
const NE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: R(" flex items-center p-6 pt-0", e),
    ...t
  }
));
NE.displayName = "CardFooter";
const bv = "Checkbox", [TE, nO] = Ke(bv), [PE, kE] = TE(bv), OE = /* @__PURE__ */ O((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, p] = G(null), m = we(
    t,
    ($) => p($)
  ), v = j(!1), h = d ? Boolean(d.closest("form")) : !0, [g = !1, y] = et({
    prop: o,
    defaultProp: a,
    onChange: l
  }), b = j(g);
  return Q(() => {
    const $ = d == null ? void 0 : d.form;
    if ($) {
      const _ = () => y(b.current);
      return $.addEventListener("reset", _), () => $.removeEventListener("reset", _);
    }
  }, [
    d,
    y
  ]), /* @__PURE__ */ x(PE, {
    scope: n,
    state: g,
    disabled: i
  }, /* @__PURE__ */ x(ie.button, E({
    type: "button",
    role: "checkbox",
    "aria-checked": nr(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": xv(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: m,
    onKeyDown: V(e.onKeyDown, ($) => {
      $.key === "Enter" && $.preventDefault();
    }),
    onClick: V(e.onClick, ($) => {
      y(
        (_) => nr(_) ? !0 : !_
      ), h && (v.current = $.isPropagationStopped(), v.current || $.stopPropagation());
    })
  })), h && /* @__PURE__ */ x(RE, {
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
}), ME = "CheckboxIndicator", DE = /* @__PURE__ */ O((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = kE(ME, n);
  return /* @__PURE__ */ x(Ze, {
    present: r || nr(a.state) || a.state === !0
  }, /* @__PURE__ */ x(ie.span, E({
    "data-state": xv(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), RE = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = j(null), s = co(n), i = ia(t);
  return Q(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && d) {
      const p = new Event("click", {
        bubbles: r
      });
      c.indeterminate = nr(n), d.call(c, nr(n) ? !1 : n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ x("input", E({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: nr(n) ? !1 : n
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
function nr(e) {
  return e === "indeterminate";
}
function xv(e) {
  return nr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const yv = OE, AE = DE, IE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  yv,
  {
    ref: n,
    className: R(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.exports.jsx(
      AE,
      {
        className: R("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ f.exports.jsx(en, { className: "h-4 w-4" })
      }
    )
  }
));
IE.displayName = yv.displayName;
const $v = "DropdownMenu", [jE, rO] = Ke($v, [
  da
]), wt = da(), [LE, wv] = jE($v), FE = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = wt(t), l = j(null), [u = !1, d] = et({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ x(LE, {
    scope: t,
    triggerId: nt(),
    triggerRef: l,
    contentId: nt(),
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
}, VE = "DropdownMenuTrigger", UE = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = wv(VE, n), s = wt(n);
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
    onPointerDown: V(e.onPointerDown, (i) => {
      !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
    }),
    onKeyDown: V(e.onKeyDown, (i) => {
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
}), WE = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = wt(t);
  return /* @__PURE__ */ x(Ml, E({}, r, n));
}, zE = "DropdownMenuContent", BE = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wv(zE, n), a = wt(n), s = j(!1);
  return /* @__PURE__ */ x(Dl, E({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, a, r, {
    ref: t,
    onCloseAutoFocus: V(e.onCloseAutoFocus, (i) => {
      var c;
      s.current || (c = o.triggerRef.current) === null || c === void 0 || c.focus(), s.current = !1, i.preventDefault();
    }),
    onInteractOutside: V(e.onInteractOutside, (i) => {
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
}), YE = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Rl, E({}, o, r, {
    ref: t
  }));
}), HE = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Al, E({}, o, r, {
    ref: t
  }));
}), KE = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Il, E({}, o, r, {
    ref: t
  }));
}), GE = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(jl, E({}, o, r, {
    ref: t
  }));
}), ZE = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Ll, E({}, o, r, {
    ref: t
  }));
}), qE = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Fl, E({}, o, r, {
    ref: t
  }));
}), XE = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Vl, E({}, o, r, {
    ref: t
  }));
}), JE = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Ul, E({}, o, r, {
    ref: t
  }));
}), QE = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = wt(t), [i = !1, c] = et({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ x(Wl, E({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, eS = /* @__PURE__ */ O((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(zl, E({}, o, r, {
    ref: t
  }));
}), tS = /* @__PURE__ */ O((e, t) => {
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
}), nS = FE, rS = UE, _v = WE, Cv = BE, oS = YE, Ev = HE, Sv = KE, Nv = GE, aS = ZE, Tv = qE, Pv = XE, kv = JE, sS = QE, Ov = eS, Mv = tS, oO = nS, aO = rS, sO = oS, iO = _v, cO = sS, lO = aS, iS = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Ov,
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
      /* @__PURE__ */ f.exports.jsx(na, { className: "ml-auto h-4 w-4" })
    ]
  }
));
iS.displayName = Ov.displayName;
const cS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Mv,
  {
    ref: n,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
cS.displayName = Mv.displayName;
const lS = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(_v, { children: /* @__PURE__ */ f.exports.jsx(
  Cv,
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
lS.displayName = Cv.displayName;
const uS = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Sv,
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
uS.displayName = Sv.displayName;
const dS = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Nv,
  {
    ref: o,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Pv, { children: /* @__PURE__ */ f.exports.jsx(en, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
dS.displayName = Nv.displayName;
const fS = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Tv,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Pv, { children: /* @__PURE__ */ f.exports.jsx(As, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
fS.displayName = Tv.displayName;
const pS = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Ev,
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
pS.displayName = Ev.displayName;
const mS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  kv,
  {
    ref: n,
    className: R("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
mS.displayName = kv.displayName;
const vS = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: R("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
vS.displayName = "DropdownMenuShortcut";
const Sc = "horizontal", hS = [
  "horizontal",
  "vertical"
], Dv = /* @__PURE__ */ O((e, t) => {
  const { decorative: n, orientation: r = Sc, ...o } = e, a = Rv(r) ? r : Sc, i = n ? {
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
Dv.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Rv(r) ? new Error(gS(o, n)) : null;
  }
};
function gS(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Sc}\`.`;
}
function Rv(e) {
  return hS.includes(e);
}
const Av = Dv, au = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
    Av,
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
au.displayName = Av.displayName;
function Lr(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function bS(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Iv(...e) {
  return (t) => e.forEach(
    (n) => bS(n, t)
  );
}
function wa(...e) {
  return pe(Iv(...e), e);
}
function xS(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ mt(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: p, children: m, ...v } = d, h = (p == null ? void 0 : p[e][c]) || i, g = xt(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ x(h.Provider, {
        value: g
      }, m);
    }
    function u(d, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, v = at(m);
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
    yS(o, ...t)
  ];
}
function yS(...e) {
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
}, $S = C["useId".toString()] || (() => {
});
let wS = 0;
function Fi(e) {
  const [t, n] = C.useState($S());
  return Nc(() => {
    e || n(
      (r) => r ?? String(wS++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function lr(e) {
  const t = j(e);
  return Q(() => {
    t.current = e;
  }), xt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function _S({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = CS({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = lr(n), c = pe((l) => {
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
function CS({ defaultProp: e, onChange: t }) {
  const n = G(e), [r] = n, o = j(r), a = lr(t);
  return Q(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const su = /* @__PURE__ */ O((e, t) => {
  const { children: n, ...r } = e, o = St.toArray(n), a = o.find(SS);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? St.count(s) > 1 ? St.only(null) : /* @__PURE__ */ In(s) ? s.props.children : null : c);
    return /* @__PURE__ */ x(Tc, E({}, r, {
      ref: t
    }), /* @__PURE__ */ In(s) ? /* @__PURE__ */ Jr(s, void 0, i) : null);
  }
  return /* @__PURE__ */ x(Tc, E({}, r, {
    ref: t
  }), n);
});
su.displayName = "Slot";
const Tc = /* @__PURE__ */ O((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ In(n) ? /* @__PURE__ */ Jr(n, {
    ...NS(r, n.props),
    ref: Iv(t, n.ref)
  }) : St.count(n) > 1 ? St.only(null) : null;
});
Tc.displayName = "SlotClone";
const ES = ({ children: e }) => /* @__PURE__ */ x(Ht, null, e);
function SS(e) {
  return /* @__PURE__ */ In(e) && e.type === ES;
}
function NS(e, t) {
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
const TS = [
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
], ei = TS.reduce((e, t) => {
  const n = /* @__PURE__ */ O((r, o) => {
    const { asChild: a, ...s } = r, i = a ? su : t;
    return Q(() => {
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
function PS(e, t) {
  e && Rs(
    () => e.dispatchEvent(t)
  );
}
function kS(e) {
  const t = lr(e);
  Q(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const Pc = "dismissableLayer.update", OS = "dismissableLayer.pointerDownOutside", MS = "dismissableLayer.focusOutside";
let jd;
const DS = /* @__PURE__ */ mt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), RS = /* @__PURE__ */ O((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, onDismiss: i, ...c } = e, l = at(DS), [u, d] = G(null), [, p] = G({}), m = wa(
    t,
    (S) => d(S)
  ), v = Array.from(l.layers), [h] = [
    ...l.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = v.indexOf(h), y = u ? v.indexOf(u) : -1, b = l.layersWithOutsidePointerEventsDisabled.size > 0, $ = y >= g, _ = AS((S) => {
    const P = S.target, D = [
      ...l.branches
    ].some(
      (I) => I.contains(P)
    );
    !$ || D || (o == null || o(S), s == null || s(S), S.defaultPrevented || i == null || i());
  }), w = IS((S) => {
    const P = S.target;
    [
      ...l.branches
    ].some(
      (I) => I.contains(P)
    ) || (a == null || a(S), s == null || s(S), S.defaultPrevented || i == null || i());
  });
  return kS((S) => {
    y === l.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && i && (S.preventDefault(), i()));
  }), Q(() => {
    if (u)
      return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (jd = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Ld(), () => {
        n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = jd);
      };
  }, [
    u,
    n,
    l
  ]), Q(() => () => {
    u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), Ld());
  }, [
    u,
    l
  ]), Q(() => {
    const S = () => p({});
    return document.addEventListener(Pc, S), () => document.removeEventListener(Pc, S);
  }, []), /* @__PURE__ */ x(ei.div, E({}, c, {
    ref: m,
    style: {
      pointerEvents: b ? $ ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: Lr(e.onFocusCapture, w.onFocusCapture),
    onBlurCapture: Lr(e.onBlurCapture, w.onBlurCapture),
    onPointerDownCapture: Lr(e.onPointerDownCapture, _.onPointerDownCapture)
  }));
});
function AS(e) {
  const t = lr(e), n = j(!1), r = j(() => {
  });
  return Q(() => {
    const o = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          jv(OS, t, i, {
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
function IS(e) {
  const t = lr(e), n = j(!1);
  return Q(() => {
    const r = (o) => {
      o.target && !n.current && jv(MS, t, {
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
function jv(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? PS(o, a) : o.dispatchEvent(a);
}
const Vi = "focusScope.autoFocusOnMount", Ui = "focusScope.autoFocusOnUnmount", Fd = {
  bubbles: !1,
  cancelable: !0
}, jS = /* @__PURE__ */ O((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = G(null), l = lr(o), u = lr(a), d = j(null), p = wa(
    t,
    (h) => c(h)
  ), m = j({
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
        i.contains(b) ? d.current = b : Qn(d.current, {
          select: !0
        });
      }, g = function(y) {
        m.paused || !i || i.contains(y.relatedTarget) || Qn(d.current, {
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
      Ud.add(m);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const y = new CustomEvent(Vi, Fd);
        i.addEventListener(Vi, l), i.dispatchEvent(y), y.defaultPrevented || (LS(zS(Lv(i)), {
          select: !0
        }), document.activeElement === h && Qn(i));
      }
      return () => {
        i.removeEventListener(Vi, l), setTimeout(() => {
          const y = new CustomEvent(Ui, Fd);
          i.addEventListener(Ui, u), i.dispatchEvent(y), y.defaultPrevented || Qn(h ?? document.body, {
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
  const v = pe((h) => {
    if (!n && !r || m.paused)
      return;
    const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, y = document.activeElement;
    if (g && y) {
      const b = h.currentTarget, [$, _] = FS(b);
      $ && _ ? !h.shiftKey && y === _ ? (h.preventDefault(), n && Qn($, {
        select: !0
      })) : h.shiftKey && y === $ && (h.preventDefault(), n && Qn(_, {
        select: !0
      })) : y === b && h.preventDefault();
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
    onKeyDown: v
  }));
});
function LS(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Qn(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function FS(e) {
  const t = Lv(e), n = Vd(t, e), r = Vd(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Lv(e) {
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
    if (!VS(n, {
      upTo: t
    }))
      return n;
}
function VS(e, { upTo: t }) {
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
function US(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Qn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && US(e) && t && e.select();
  }
}
const Ud = WS();
function WS() {
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
function zS(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const BS = /* @__PURE__ */ O((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ tl.createPortal(/* @__PURE__ */ x(ei.div, E({}, o, {
    ref: t
  })), r) : null;
});
function YS(e, t) {
  return Ds((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const ti = (e) => {
  const { present: t, children: n } = e, r = HS(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : St.only(n), a = wa(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Jr(o, {
    ref: a
  }) : null;
};
ti.displayName = "Presence";
function HS(e) {
  const [t, n] = G(), r = j({}), o = j(e), a = j("none"), s = e ? "mounted" : "unmounted", [i, c] = YS(s, {
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
function KS() {
  Q(() => {
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
var Fv = Up(), zi = function() {
}, ni = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: zi,
    onWheelCapture: zi,
    onTouchMoveCapture: zi
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noIsolation, v = e.inert, h = e.allowPinchZoom, g = e.as, y = g === void 0 ? "div" : g, b = Cl(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), $ = p, _ = Vp([n, t]), w = pt(pt({}, b), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement($, { sideCar: Fv, removeScrollBar: l, shards: d, noIsolation: m, inert: v, setCallbacks: a, allowPinchZoom: !!h, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), pt(pt({}, w), { ref: _ })) : C.createElement(y, pt({}, w, { className: c, ref: _ }), i)
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
var Or = kc ? { passive: !1 } : !1, GS = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, ZS = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, Bd = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Vv(e, n);
    if (r) {
      var o = Uv(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, qS = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, XS = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Vv = function(e, t) {
  return e === "v" ? GS(t) : ZS(t);
}, Uv = function(e, t) {
  return e === "v" ? qS(t) : XS(t);
}, JS = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, QS = function(e, t, n, r, o) {
  var a = JS(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, p = 0;
  do {
    var m = Uv(e, i), v = m[0], h = m[1], g = m[2], y = h - g - a * v;
    (v || y) && Vv(e, i) && (d += y, p += v), i = i.parentNode;
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
}, e5 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, t5 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, n5 = 0, Mr = [];
function r5(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(n5++)[0], a = C.useState(function() {
    return El();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = Fp([e.lockRef.current], (e.shards || []).map(Hd), !0).filter(Boolean);
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
    var y = Ya(h), b = n.current, $ = "deltaX" in h ? h.deltaX : b[0] - y[0], _ = "deltaY" in h ? h.deltaY : b[1] - y[1], w, S = h.target, P = Math.abs($) > Math.abs(_) ? "h" : "v";
    if ("touches" in h && P === "h" && S.type === "range")
      return !1;
    var D = Bd(P, S);
    if (!D)
      return !0;
    if (D ? w = P : (w = P === "v" ? "h" : "v", D = Bd(P, S)), !D)
      return !1;
    if (!r.current && "changedTouches" in h && ($ || _) && (r.current = w), !w)
      return !0;
    var I = r.current || w;
    return QS(I, g, h, I === "h" ? $ : _, !0);
  }, []), c = C.useCallback(function(h) {
    var g = h;
    if (!(!Mr.length || Mr[Mr.length - 1] !== a)) {
      var y = "deltaY" in g ? Yd(g) : Ya(g), b = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && e5(w.delta, y);
      })[0];
      if (b && b.should) {
        g.preventDefault();
        return;
      }
      if (!b) {
        var $ = (s.current.shards || []).map(Hd).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), _ = $.length > 0 ? i(g, $[0]) : !s.current.noIsolation;
        _ && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(h, g, y, b) {
    var $ = { name: h, delta: g, target: y, should: b };
    t.current.push($), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== $;
      });
    }, 1);
  }, []), u = C.useCallback(function(h) {
    n.current = Ya(h), r.current = void 0;
  }, []), d = C.useCallback(function(h) {
    l(h.type, Yd(h), h.target, i(h, e.lockRef.current));
  }, []), p = C.useCallback(function(h) {
    l(h.type, Ya(h), h.target, i(h, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return Mr.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, Or), document.addEventListener("touchmove", c, Or), document.addEventListener("touchstart", u, Or), function() {
      Mr = Mr.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", c, Or), document.removeEventListener("touchmove", c, Or), document.removeEventListener("touchstart", u, Or);
    };
  }, []);
  var m = e.removeScrollBar, v = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    v ? C.createElement(a, { styles: t5(o) }) : null,
    m ? C.createElement(Yp, { gapMode: "margin" }) : null
  );
}
const o5 = zp(Fv, r5);
var Wv = C.forwardRef(function(e, t) {
  return C.createElement(ni, pt({}, e, { ref: t, sideCar: o5 }));
});
Wv.classNames = ni.classNames;
const a5 = Wv, zv = "Dialog", [Bv, uO] = xS(zv), [s5, _r] = Bv(zv), i5 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = j(null), c = j(null), [l = !1, u] = _S({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ x(s5, {
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
}, Yv = "DialogPortal", [c5, Hv] = Bv(Yv, {
  forceMount: void 0
}), l5 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = _r(Yv, t);
  return /* @__PURE__ */ x(c5, {
    scope: t,
    forceMount: n
  }, St.map(
    r,
    (s) => /* @__PURE__ */ x(ti, {
      present: n || a.open
    }, /* @__PURE__ */ x(BS, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Oc = "DialogOverlay", u5 = /* @__PURE__ */ O((e, t) => {
  const n = Hv(Oc, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = _r(Oc, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ x(ti, {
    present: r || a.open
  }, /* @__PURE__ */ x(d5, E({}, o, {
    ref: t
  }))) : null;
}), d5 = /* @__PURE__ */ O((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = _r(Oc, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ x(a5, {
      as: su,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ x(ei.div, E({
      "data-state": Gv(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), Vo = "DialogContent", f5 = /* @__PURE__ */ O((e, t) => {
  const n = Hv(Vo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = _r(Vo, e.__scopeDialog);
  return /* @__PURE__ */ x(ti, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ x(p5, E({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(m5, E({}, o, {
    ref: t
  })));
}), p5 = /* @__PURE__ */ O((e, t) => {
  const n = _r(Vo, e.__scopeDialog), r = j(null), o = wa(t, n.contentRef, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return ua(a);
  }, []), /* @__PURE__ */ x(Kv, E({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: Lr(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: Lr(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: Lr(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), m5 = /* @__PURE__ */ O((e, t) => {
  const n = _r(Vo, e.__scopeDialog), r = j(!1);
  return /* @__PURE__ */ x(Kv, E({}, e, {
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
}), Kv = /* @__PURE__ */ O((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = _r(Vo, n), c = j(null), l = wa(t, c);
  return KS(), /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(jS, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ x(RS, E({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": Gv(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
});
function Gv(e) {
  return e ? "open" : "closed";
}
const v5 = i5, h5 = l5, g5 = u5, b5 = f5;
var Kd = 1, x5 = 0.9, y5 = 0.3, Bi = 0.1, $5 = 0, Yi = 0.999, w5 = 0.9999, _5 = 0.99, Gd = /[\\\/\-_+.# \t"@\[\(\{&]/, C5 = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function Mc(e, t, n, r, o, a) {
  if (a === t.length)
    return o === e.length ? Kd : _5;
  for (var s = r.charAt(a), i = n.indexOf(s, o), c = 0, l, u, d; i >= 0; )
    l = Mc(e, t, n, r, i + 1, a + 1), l > c && (i === o ? l *= Kd : Gd.test(e.charAt(i - 1)) ? (l *= x5, d = e.slice(o, i - 1).match(C5), d && o > 0 && (l *= Math.pow(Yi, d.length))) : Gd.test(e.slice(o, i - 1)) ? (l *= $5, o > 0 && (l *= Math.pow(Yi, i - o))) : (l *= y5, o > 0 && (l *= Math.pow(Yi, i - o))), e.charAt(i) !== t.charAt(a) && (l *= w5)), l < Bi && n.charAt(i - 1) === r.charAt(a + 1) && n.charAt(i - 1) !== r.charAt(a) && (u = Mc(e, t, n, r, i + 1, a + 2), u * Bi > l && (l = u * Bi)), l > c && (c = l), i = n.indexOf(s, i + 1);
  return c;
}
function E5(e, t) {
  return Mc(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var S5 = E5, N5 = '[cmdk-list-sizer=""]', Eo = '[cmdk-group=""]', Hi = '[cmdk-group-items=""]', T5 = '[cmdk-group-heading=""]', Zv = '[cmdk-item=""]', Zd = `${Zv}:not([aria-disabled="true"])`, Dc = "cmdk-item-select", Dn = "data-value", P5 = (e, t) => S5(e, t), qv = C.createContext(void 0), _a = () => C.useContext(qv), Xv = C.createContext(void 0), iu = () => C.useContext(Xv), Jv = C.createContext(void 0), Qv = C.forwardRef((e, t) => {
  let n = C.useRef(null), r = Dr(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = Dr(() => /* @__PURE__ */ new Set()), a = Dr(() => /* @__PURE__ */ new Map()), s = Dr(() => /* @__PURE__ */ new Map()), i = Dr(() => /* @__PURE__ */ new Set()), c = eh(e), { label: l, children: u, value: d, onValueChange: p, filter: m, shouldFilter: v, ...h } = e, g = C.useId(), y = C.useId(), b = C.useId(), $ = V5();
  uo(() => {
    if (d !== void 0) {
      let A = d.trim().toLowerCase();
      r.current.value = A, $(6, ee), _.emit();
    }
  }, [d]);
  let _ = C.useMemo(() => ({ subscribe: (A) => (i.current.add(A), () => i.current.delete(A)), snapshot: () => r.current, setState: (A, M, L) => {
    var W, oe, ce;
    if (!Object.is(r.current[A], M)) {
      if (r.current[A] = M, A === "search")
        I(), P(), $(1, D);
      else if (A === "value")
        if (((W = c.current) == null ? void 0 : W.value) !== void 0) {
          (ce = (oe = c.current).onValueChange) == null || ce.call(oe, M);
          return;
        } else
          L || $(5, ee);
      _.emit();
    }
  }, emit: () => {
    i.current.forEach((A) => A());
  } }), []), w = C.useMemo(() => ({ value: (A, M) => {
    M !== s.current.get(A) && (s.current.set(A, M), r.current.filtered.items.set(A, S(M)), $(2, () => {
      P(), _.emit();
    }));
  }, item: (A, M) => (o.current.add(A), M && (a.current.has(M) ? a.current.get(M).add(A) : a.current.set(M, /* @__PURE__ */ new Set([A]))), $(3, () => {
    I(), P(), r.current.value || D(), _.emit();
  }), () => {
    s.current.delete(A), o.current.delete(A), r.current.filtered.items.delete(A), $(4, () => {
      I(), D(), _.emit();
    });
  }), group: (A) => (a.current.has(A) || a.current.set(A, /* @__PURE__ */ new Set()), () => {
    s.current.delete(A), a.current.delete(A);
  }), filter: () => c.current.shouldFilter, label: l || e["aria-label"], listId: g, inputId: b, labelId: y }), []);
  function S(A) {
    var M;
    let L = ((M = c.current) == null ? void 0 : M.filter) ?? P5;
    return A ? L(A, r.current.search) : 0;
  }
  function P() {
    if (!n.current || !r.current.search || c.current.shouldFilter === !1)
      return;
    let A = r.current.filtered.items, M = [];
    r.current.filtered.groups.forEach((W) => {
      let oe = a.current.get(W), ce = 0;
      oe.forEach((ye) => {
        let be = A.get(ye);
        ce = Math.max(be, ce);
      }), M.push([W, ce]);
    });
    let L = n.current.querySelector(N5);
    U().sort((W, oe) => {
      let ce = W.getAttribute(Dn), ye = oe.getAttribute(Dn);
      return (A.get(ye) ?? 0) - (A.get(ce) ?? 0);
    }).forEach((W) => {
      let oe = W.closest(Hi);
      oe ? oe.appendChild(W.parentElement === oe ? W : W.closest(`${Hi} > *`)) : L.appendChild(W.parentElement === L ? W : W.closest(`${Hi} > *`));
    }), M.sort((W, oe) => oe[1] - W[1]).forEach((W) => {
      let oe = n.current.querySelector(`${Eo}[${Dn}="${W[0]}"]`);
      oe == null || oe.parentElement.appendChild(oe);
    });
  }
  function D() {
    let A = U().find((L) => !L.ariaDisabled), M = A == null ? void 0 : A.getAttribute(Dn);
    _.setState("value", M || void 0);
  }
  function I() {
    if (!r.current.search || c.current.shouldFilter === !1) {
      r.current.filtered.count = o.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let A = 0;
    for (let M of o.current) {
      let L = s.current.get(M), W = S(L);
      r.current.filtered.items.set(M, W), W > 0 && A++;
    }
    for (let [M, L] of a.current)
      for (let W of L)
        if (r.current.filtered.items.get(W) > 0) {
          r.current.filtered.groups.add(M);
          break;
        }
    r.current.filtered.count = A;
  }
  function ee() {
    var A, M, L;
    let W = re();
    W && (((A = W.parentElement) == null ? void 0 : A.firstChild) === W && ((L = (M = W.closest(Eo)) == null ? void 0 : M.querySelector(T5)) == null || L.scrollIntoView({ block: "nearest" })), W.scrollIntoView({ block: "nearest" }));
  }
  function re() {
    return n.current.querySelector(`${Zv}[aria-selected="true"]`);
  }
  function U() {
    return Array.from(n.current.querySelectorAll(Zd));
  }
  function H(A) {
    let M = U()[A];
    M && _.setState("value", M.getAttribute(Dn));
  }
  function B(A) {
    var M;
    let L = re(), W = U(), oe = W.findIndex((ye) => ye === L), ce = W[oe + A];
    (M = c.current) != null && M.loop && (ce = oe + A < 0 ? W[W.length - 1] : oe + A === W.length ? W[0] : W[oe + A]), ce && _.setState("value", ce.getAttribute(Dn));
  }
  function Z(A) {
    let M = re(), L = M == null ? void 0 : M.closest(Eo), W;
    for (; L && !W; )
      L = A > 0 ? L5(L, Eo) : F5(L, Eo), W = L == null ? void 0 : L.querySelector(Zd);
    W ? _.setState("value", W.getAttribute(Dn)) : B(A);
  }
  let J = () => H(U().length - 1), Y = (A) => {
    A.preventDefault(), A.metaKey ? J() : A.altKey ? Z(1) : B(1);
  }, q = (A) => {
    A.preventDefault(), A.metaKey ? H(0) : A.altKey ? Z(-1) : B(-1);
  };
  return C.createElement("div", { ref: Ca([n, t]), ...h, "cmdk-root": "", onKeyDown: (A) => {
    var M;
    if ((M = h.onKeyDown) == null || M.call(h, A), !A.defaultPrevented)
      switch (A.key) {
        case "n":
        case "j": {
          A.ctrlKey && Y(A);
          break;
        }
        case "ArrowDown": {
          Y(A);
          break;
        }
        case "p":
        case "k": {
          A.ctrlKey && q(A);
          break;
        }
        case "ArrowUp": {
          q(A);
          break;
        }
        case "Home": {
          A.preventDefault(), H(0);
          break;
        }
        case "End": {
          A.preventDefault(), J();
          break;
        }
        case "Enter": {
          A.preventDefault();
          let L = re();
          if (L) {
            let W = new Event(Dc);
            L.dispatchEvent(W);
          }
        }
      }
  } }, C.createElement("label", { "cmdk-label": "", htmlFor: w.inputId, id: w.labelId, style: U5 }, l), C.createElement(Xv.Provider, { value: _ }, C.createElement(qv.Provider, { value: w }, u)));
}), k5 = C.forwardRef((e, t) => {
  let n = C.useId(), r = C.useRef(null), o = C.useContext(Jv), a = _a(), s = eh(e);
  uo(() => a.item(n, o), []);
  let i = th(n, r, [e.value, e.children, r]), c = iu(), l = Yr((y) => y.value && y.value === i.current), u = Yr((y) => a.filter() === !1 ? !0 : y.search ? y.filtered.items.get(n) > 0 : !0);
  C.useEffect(() => {
    let y = r.current;
    if (!(!y || e.disabled))
      return y.addEventListener(Dc, d), () => y.removeEventListener(Dc, d);
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
  return C.createElement("div", { ref: Ca([r, t]), ...g, "cmdk-item": "", role: "option", "aria-disabled": m || void 0, "aria-selected": l || void 0, "data-selected": l || void 0, onPointerMove: m ? void 0 : p, onClick: m ? void 0 : d }, e.children);
}), O5 = C.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, a = C.useId(), s = C.useRef(null), i = C.useRef(null), c = C.useId(), l = _a(), u = Yr((p) => l.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(a) : !0);
  uo(() => l.group(a), []), th(a, s, [e.value, e.heading, i]);
  let d = C.createElement(Jv.Provider, { value: a }, r);
  return C.createElement("div", { ref: Ca([s, t]), ...o, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && C.createElement("div", { ref: i, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), C.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, d));
}), M5 = C.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = C.useRef(null), a = Yr((s) => !s.search);
  return !n && !a ? null : C.createElement("div", { ref: Ca([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), D5 = C.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = iu(), s = Yr((c) => c.search), i = _a();
  return C.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), C.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": i.listId, "aria-labelledby": i.labelId, id: i.inputId, type: "text", value: o ? e.value : s, onChange: (c) => {
    o || a.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), R5 = C.forwardRef((e, t) => {
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
}), A5 = C.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...a } = e;
  return C.createElement(v5, { open: n, onOpenChange: r }, C.createElement(h5, { container: o }, C.createElement(g5, { "cmdk-overlay": "" }), C.createElement(b5, { "aria-label": e.label, "cmdk-dialog": "" }, C.createElement(Qv, { ref: t, ...a }))));
}), I5 = C.forwardRef((e, t) => {
  let n = C.useRef(!0), r = Yr((o) => o.filtered.count === 0);
  return C.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : C.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), j5 = C.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return C.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, C.createElement("div", { "aria-hidden": !0 }, r));
}), Tt = Object.assign(Qv, { List: R5, Item: k5, Input: D5, Group: O5, Separator: M5, Dialog: A5, Empty: I5, Loading: j5 });
function L5(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function F5(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function eh(e) {
  let t = C.useRef(e);
  return uo(() => {
    t.current = e;
  }), t;
}
var uo = typeof window > "u" ? C.useEffect : C.useLayoutEffect;
function Dr(e) {
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
function Yr(e) {
  let t = iu(), n = () => e(t.snapshot());
  return C.useSyncExternalStore(t.subscribe, n, n);
}
function th(e, t, n) {
  let r = C.useRef(), o = _a();
  return uo(() => {
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
    o.value(e, s), (a = t.current) == null || a.setAttribute(Dn, s), r.current = s;
  }), r;
}
var V5 = () => {
  let [e, t] = C.useState(), n = Dr(() => /* @__PURE__ */ new Map());
  return uo(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, U5 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Un = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Tt,
  {
    ref: n,
    className: R(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Un.displayName = Tt.displayName;
const dO = ({ children: e, ...t }) => /* @__PURE__ */ f.exports.jsx(fC, { ...t, children: /* @__PURE__ */ f.exports.jsx(Zm, { className: "overflow-hidden p-0 shadow-2xl", children: /* @__PURE__ */ f.exports.jsx(Un, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), ur = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ f.exports.jsx(qf, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ f.exports.jsx(
    Tt.Input,
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
ur.displayName = Tt.Input.displayName;
const ri = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Tt.List,
  {
    ref: n,
    className: R("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
ri.displayName = Tt.List.displayName;
const dr = C.forwardRef((e, t) => /* @__PURE__ */ f.exports.jsx(
  Tt.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
dr.displayName = Tt.Empty.displayName;
const wn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Tt.Group,
  {
    ref: n,
    className: R(
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
    className: R("-mx-1 h-px bg-border", e),
    ...t
  }
));
cu.displayName = Tt.Separator.displayName;
const _n = C.forwardRef(({ className: e, onClick: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Tt.Item,
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
_n.displayName = Tt.Item.displayName;
const W5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: R(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
W5.displayName = "CommandShortcut";
const z5 = /* @__PURE__ */ O((e, t) => {
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
}), B5 = z5, fO = B5;
function Y5(e, t) {
  return Ds((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const nh = "ScrollArea", [rh, pO] = Ke(nh), [H5, It] = rh(nh), K5 = /* @__PURE__ */ O((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [i, c] = G(null), [l, u] = G(null), [d, p] = G(null), [m, v] = G(null), [h, g] = G(null), [y, b] = G(0), [$, _] = G(0), [w, S] = G(!1), [P, D] = G(!1), I = we(
    t,
    (re) => c(re)
  ), ee = sn(o);
  return /* @__PURE__ */ x(H5, {
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
    onScrollbarXChange: v,
    scrollbarXEnabled: w,
    onScrollbarXEnabledChange: S,
    scrollbarY: h,
    onScrollbarYChange: g,
    scrollbarYEnabled: P,
    onScrollbarYEnabledChange: D,
    onCornerWidthChange: b,
    onCornerHeightChange: _
  }, /* @__PURE__ */ x(ie.div, E({
    dir: ee
  }, s, {
    ref: I,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      ["--radix-scroll-area-corner-width"]: y + "px",
      ["--radix-scroll-area-corner-height"]: $ + "px",
      ...e.style
    }
  })));
}), G5 = "ScrollAreaViewport", Z5 = /* @__PURE__ */ O((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = It(G5, n), s = j(null), i = we(t, s, a.onViewportChange);
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
}), Nn = "ScrollAreaScrollbar", oh = /* @__PURE__ */ O((e, t) => {
  const { forceMount: n, ...r } = e, o = It(Nn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
  return Q(() => (i ? a(!0) : s(!0), () => {
    i ? a(!1) : s(!1);
  }), [
    i,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ x(q5, E({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ x(X5, E({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ x(ah, E({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ x(lu, E({}, r, {
    ref: t
  })) : null;
}), q5 = /* @__PURE__ */ O((e, t) => {
  const { forceMount: n, ...r } = e, o = It(Nn, e.__scopeScrollArea), [a, s] = G(!1);
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
  ]), /* @__PURE__ */ x(Ze, {
    present: n || a
  }, /* @__PURE__ */ x(ah, E({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), X5 = /* @__PURE__ */ O((e, t) => {
  const { forceMount: n, ...r } = e, o = It(Nn, e.__scopeScrollArea), a = e.orientation === "horizontal", s = ai(
    () => c("SCROLL_END"),
    100
  ), [i, c] = Y5("hidden", {
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
  ]), /* @__PURE__ */ x(Ze, {
    present: n || i !== "hidden"
  }, /* @__PURE__ */ x(lu, E({
    "data-state": i === "hidden" ? "hidden" : "visible"
  }, r, {
    ref: t,
    onPointerEnter: V(
      e.onPointerEnter,
      () => c("POINTER_ENTER")
    ),
    onPointerLeave: V(
      e.onPointerLeave,
      () => c("POINTER_LEAVE")
    )
  })));
}), ah = /* @__PURE__ */ O((e, t) => {
  const n = It(Nn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = G(!1), i = e.orientation === "horizontal", c = ai(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? l : u);
    }
  }, 10);
  return Hr(n.viewport, c), Hr(n.content, c), /* @__PURE__ */ x(Ze, {
    present: r || a
  }, /* @__PURE__ */ x(lu, E({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), lu = /* @__PURE__ */ O((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = It(Nn, e.__scopeScrollArea), a = j(null), s = j(0), [i, c] = G({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = lh(i.viewport, i.content), u = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: Boolean(l > 0 && l < 1),
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function d(p, m) {
    return aN(p, s.current, i, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ x(J5, E({}, u, {
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
  })) : n === "vertical" ? /* @__PURE__ */ x(Q5, E({}, u, {
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
}), J5 = /* @__PURE__ */ O((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = It(Nn, e.__scopeScrollArea), [s, i] = G(), c = j(null), l = we(t, c, a.onScrollbarXChange);
  return Q(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ x(ih, E({
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
        e.onWheelScroll(p), dh(p, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: hs(s.paddingLeft),
          paddingEnd: hs(s.paddingRight)
        }
      });
    }
  }));
}), Q5 = /* @__PURE__ */ O((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = It(Nn, e.__scopeScrollArea), [s, i] = G(), c = j(null), l = we(t, c, a.onScrollbarYChange);
  return Q(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ x(ih, E({
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
        e.onWheelScroll(p), dh(p, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: hs(s.paddingTop),
          paddingEnd: hs(s.paddingBottom)
        }
      });
    }
  }));
}), [eN, sh] = rh(Nn), ih = /* @__PURE__ */ O((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: d, ...p } = e, m = It(Nn, n), [v, h] = G(null), g = we(
    t,
    (I) => h(I)
  ), y = j(null), b = j(""), $ = m.viewport, _ = r.content - r.viewport, w = We(u), S = We(c), P = ai(d, 10);
  function D(I) {
    if (y.current) {
      const ee = I.clientX - y.current.left, re = I.clientY - y.current.top;
      l({
        x: ee,
        y: re
      });
    }
  }
  return Q(() => {
    const I = (ee) => {
      const re = ee.target;
      (v == null ? void 0 : v.contains(re)) && w(ee, _);
    };
    return document.addEventListener("wheel", I, {
      passive: !1
    }), () => document.removeEventListener("wheel", I, {
      passive: !1
    });
  }, [
    $,
    v,
    _,
    w
  ]), Q(S, [
    r,
    S
  ]), Hr(v, P), Hr(m.content, P), /* @__PURE__ */ x(eN, {
    scope: n,
    scrollbar: v,
    hasThumb: o,
    onThumbChange: We(a),
    onThumbPointerUp: We(s),
    onThumbPositionChange: S,
    onThumbPointerDown: We(i)
  }, /* @__PURE__ */ x(ie.div, E({}, p, {
    ref: g,
    style: {
      position: "absolute",
      ...p.style
    },
    onPointerDown: V(e.onPointerDown, (I) => {
      I.button === 0 && (I.target.setPointerCapture(I.pointerId), y.current = v.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", D(I));
    }),
    onPointerMove: V(e.onPointerMove, D),
    onPointerUp: V(e.onPointerUp, (I) => {
      const ee = I.target;
      ee.hasPointerCapture(I.pointerId) && ee.releasePointerCapture(I.pointerId), document.body.style.webkitUserSelect = b.current, y.current = null;
    })
  })));
}), Rc = "ScrollAreaThumb", tN = /* @__PURE__ */ O((e, t) => {
  const { forceMount: n, ...r } = e, o = sh(Rc, e.__scopeScrollArea);
  return /* @__PURE__ */ x(Ze, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ x(nN, E({
    ref: t
  }, r)));
}), nN = /* @__PURE__ */ O((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = It(Rc, n), s = sh(Rc, n), { onThumbPositionChange: i } = s, c = we(
    t,
    (d) => s.onThumbChange(d)
  ), l = j(), u = ai(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return Q(() => {
    const d = a.viewport;
    if (d) {
      const p = () => {
        if (u(), !l.current) {
          const m = sN(d, i);
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
    onPointerDownCapture: V(e.onPointerDownCapture, (d) => {
      const m = d.target.getBoundingClientRect(), v = d.clientX - m.left, h = d.clientY - m.top;
      s.onThumbPointerDown({
        x: v,
        y: h
      });
    }),
    onPointerUp: V(e.onPointerUp, s.onThumbPointerUp)
  }));
}), ch = "ScrollAreaCorner", rN = /* @__PURE__ */ O((e, t) => {
  const n = It(ch, e.__scopeScrollArea), r = Boolean(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ x(oN, E({}, e, {
    ref: t
  })) : null;
}), oN = /* @__PURE__ */ O((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = It(ch, n), [a, s] = G(0), [i, c] = G(0), l = Boolean(a && i);
  return Hr(o.scrollbarX, () => {
    var u;
    const d = ((u = o.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(d), c(d);
  }), Hr(o.scrollbarY, () => {
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
function hs(e) {
  return e ? parseInt(e, 10) : 0;
}
function lh(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function oi(e) {
  const t = lh(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function aN(e, t, n, r = "ltr") {
  const o = oi(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, u = n.content - n.viewport, d = r === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return uh([
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
  return uh([
    0,
    s
  ], [
    0,
    i
  ])(l);
}
function uh(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function dh(e, t) {
  return e > 0 && e < t;
}
const sN = (e, t = () => {
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
  const n = We(e), r = j(0);
  return Q(
    () => () => window.clearTimeout(r.current),
    []
  ), pe(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function Hr(e, t) {
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
const fh = K5, iN = Z5, cN = rN, lN = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  fh,
  {
    ref: r,
    className: R("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx(iN, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ f.exports.jsx(ph, {}),
      /* @__PURE__ */ f.exports.jsx(cN, {})
    ]
  }
));
lN.displayName = fh.displayName;
const ph = C.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  oh,
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
    children: /* @__PURE__ */ f.exports.jsx(tN, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ph.displayName = oh.displayName;
const mO = Xl, vO = Jl, hO = $a, mh = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(ha, { className: R(e), ...t });
mh.displayName = ha.displayName;
const vh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ga,
  {
    className: R(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
vh.displayName = ga.displayName;
const uN = Qr(
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
), dN = C.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(mh, { children: [
  /* @__PURE__ */ f.exports.jsx(vh, {}),
  /* @__PURE__ */ f.exports.jsxs(
    ba,
    {
      ref: o,
      className: R(uN({ side: e }), t),
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
dN.displayName = ba.displayName;
const fN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
fN.displayName = "SheetHeader";
const pN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
pN.displayName = "SheetFooter";
const mN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  xa,
  {
    ref: n,
    className: R("text-lg font-semibold text-foreground", e),
    ...t
  }
));
mN.displayName = xa.displayName;
const vN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ya,
  {
    ref: n,
    className: R("text-sm text-muted-foreground", e),
    ...t
  }
));
vN.displayName = ya.displayName;
const uu = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ f.exports.jsx(
  "table",
  {
    ref: n,
    className: R("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
uu.displayName = "TableUI";
const hh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("thead", { ref: n, className: R("[&_tr]:border-b", e), ...t }));
hh.displayName = "TableHeader";
const gh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tbody",
  {
    ref: n,
    className: R("[&_tr:last-child]:border-0", e),
    ...t
  }
));
gh.displayName = "TableBody";
const hN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tfoot",
  {
    ref: n,
    className: R("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
hN.displayName = "TableFooter";
const si = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
si.displayName = "TableRow";
const bh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
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
bh.displayName = "TableHead";
const du = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "td",
  {
    ref: n,
    className: R("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
du.displayName = "TableCell";
const gN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "caption",
  {
    ref: n,
    className: R("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
gN.displayName = "TableCaption";
const bN = "AlertDialog", [xN, gO] = Ke(bN, [
  Wm
]), Tn = Wm(), yN = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Tn(t);
  return /* @__PURE__ */ x(Xl, E({}, r, n, {
    modal: !0
  }));
}, $N = /* @__PURE__ */ O((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Tn(n);
  return /* @__PURE__ */ x(Jl, E({}, o, r, {
    ref: t
  }));
}), wN = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Tn(t);
  return /* @__PURE__ */ x(ha, E({}, r, n));
}, _N = /* @__PURE__ */ O((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Tn(n);
  return /* @__PURE__ */ x(ga, E({}, o, r, {
    ref: t
  }));
}), xh = "AlertDialogContent", [CN, EN] = xN(xh), SN = /* @__PURE__ */ O((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = Tn(n), s = j(null), i = we(t, s), c = j(null);
  return /* @__PURE__ */ x(dC, {
    contentName: xh,
    titleName: NN,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ x(CN, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ x(ba, E({
    role: "alertdialog"
  }, a, o, {
    ref: i,
    onOpenAutoFocus: V(o.onOpenAutoFocus, (l) => {
      var u;
      l.preventDefault(), (u = c.current) === null || u === void 0 || u.focus({
        preventScroll: !0
      });
    }),
    onPointerDownOutside: (l) => l.preventDefault(),
    onInteractOutside: (l) => l.preventDefault()
  }), /* @__PURE__ */ x(rl, null, r), !1)));
}), NN = "AlertDialogTitle", TN = /* @__PURE__ */ O((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Tn(n);
  return /* @__PURE__ */ x(xa, E({}, o, r, {
    ref: t
  }));
}), PN = /* @__PURE__ */ O((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Tn(n);
  return /* @__PURE__ */ x(ya, E({}, o, r, {
    ref: t
  }));
}), kN = /* @__PURE__ */ O((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Tn(n);
  return /* @__PURE__ */ x($a, E({}, o, r, {
    ref: t
  }));
}), ON = "AlertDialogCancel", MN = /* @__PURE__ */ O((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = EN(ON, n), a = Tn(n), s = we(t, o);
  return /* @__PURE__ */ x($a, E({}, a, r, {
    ref: s
  }));
}), DN = yN, RN = $N, yh = wN, $h = _N, wh = SN, _h = kN, Ch = MN, Eh = TN, Sh = PN, bO = DN, xO = RN, Nh = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(yh, { className: R(e), ...t });
Nh.displayName = yh.displayName;
const Th = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  $h,
  {
    className: R(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...n,
    ref: r
  }
));
Th.displayName = $h.displayName;
const AN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(Nh, { children: [
  /* @__PURE__ */ f.exports.jsx(Th, {}),
  /* @__PURE__ */ f.exports.jsx(
    wh,
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
AN.displayName = wh.displayName;
const IN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
IN.displayName = "AlertDialogHeader";
const jN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: R(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
jN.displayName = "AlertDialogFooter";
const LN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Eh,
  {
    ref: n,
    className: R("text-lg font-semibold", e),
    ...t
  }
));
LN.displayName = Eh.displayName;
const FN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Sh,
  {
    ref: n,
    className: R("text-sm text-muted-foreground", e),
    ...t
  }
));
FN.displayName = Sh.displayName;
const VN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  _h,
  {
    ref: n,
    className: R(ko(), e),
    ...t
  }
));
VN.displayName = _h.displayName;
const UN = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ch,
  {
    ref: n,
    className: R(
      ko({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
UN.displayName = Ch.displayName;
function yO({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f.exports.jsx(
    "div",
    {
      className: R("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const Ph = "Collapsible", [WN, kh] = Ke(Ph), [zN, fu] = WN(Ph), BN = /* @__PURE__ */ O((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...i } = e, [c = !1, l] = et({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ x(zN, {
    scope: n,
    disabled: a,
    contentId: nt(),
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
}), YN = "CollapsibleTrigger", Oh = /* @__PURE__ */ O((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = fu(YN, n);
  return /* @__PURE__ */ x(ie.button, E({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": pu(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: V(e.onClick, o.onOpenToggle)
  }));
}), Mh = "CollapsibleContent", Dh = /* @__PURE__ */ O((e, t) => {
  const { forceMount: n, ...r } = e, o = fu(Mh, e.__scopeCollapsible);
  return /* @__PURE__ */ x(
    Ze,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ x(HN, E({}, r, {
      ref: t,
      present: a
    }))
  );
}), HN = /* @__PURE__ */ O((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = fu(Mh, n), [i, c] = G(r), l = j(null), u = we(t, l), d = j(0), p = d.current, m = j(0), v = m.current, h = s.open || i, g = j(h), y = j();
  return Q(() => {
    const b = requestAnimationFrame(
      () => g.current = !1
    );
    return () => cancelAnimationFrame(b);
  }, []), ft(() => {
    const b = l.current;
    if (b) {
      y.current = y.current || {
        transitionDuration: b.style.transitionDuration,
        animationName: b.style.animationName
      }, b.style.transitionDuration = "0s", b.style.animationName = "none";
      const $ = b.getBoundingClientRect();
      d.current = $.height, m.current = $.width, g.current || (b.style.transitionDuration = y.current.transitionDuration, b.style.animationName = y.current.animationName), c(r);
    }
  }, [
    s.open,
    r
  ]), /* @__PURE__ */ x(ie.div, E({
    "data-state": pu(s.open),
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
function pu(e) {
  return e ? "open" : "closed";
}
const Rh = BN, KN = Oh, GN = Dh, qn = "Accordion", ZN = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [mu, qN, XN] = Hn(qn), [ii, $O] = Ke(qn, [
  XN,
  kh
]), vu = kh(), Ah = /* @__PURE__ */ T.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ T.createElement(mu.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ T.createElement(t6, E({}, a, {
    ref: t
  })) : /* @__PURE__ */ T.createElement(e6, E({}, o, {
    ref: t
  })));
});
Ah.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [Ih, JN] = ii(qn), [jh, QN] = ii(qn, {
  collapsible: !1
}), e6 = /* @__PURE__ */ T.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [i, c] = et({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ T.createElement(Ih, {
    scope: e.__scopeAccordion,
    value: i ? [
      i
    ] : [],
    onItemOpen: c,
    onItemClose: T.useCallback(
      () => a && c(""),
      [
        a,
        c
      ]
    )
  }, /* @__PURE__ */ T.createElement(jh, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ T.createElement(Lh, E({}, s, {
    ref: t
  }))));
}), t6 = /* @__PURE__ */ T.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [s = [], i] = et({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = T.useCallback(
    (u) => i(
      (d = []) => [
        ...d,
        u
      ]
    ),
    [
      i
    ]
  ), l = T.useCallback(
    (u) => i(
      (d = []) => d.filter(
        (p) => p !== u
      )
    ),
    [
      i
    ]
  );
  return /* @__PURE__ */ T.createElement(Ih, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ T.createElement(jh, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ T.createElement(Lh, E({}, a, {
    ref: t
  }))));
}), [n6, ci] = ii(qn), Lh = /* @__PURE__ */ T.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = T.useRef(null), c = we(i, t), l = qN(n), d = sn(o) === "ltr", p = V(e.onKeyDown, (m) => {
    var v;
    if (!ZN.includes(m.key))
      return;
    const h = m.target, g = l().filter((I) => {
      var ee;
      return !((ee = I.ref.current) !== null && ee !== void 0 && ee.disabled);
    }), y = g.findIndex(
      (I) => I.ref.current === h
    ), b = g.length;
    if (y === -1)
      return;
    m.preventDefault();
    let $ = y;
    const _ = 0, w = b - 1, S = () => {
      $ = y + 1, $ > w && ($ = _);
    }, P = () => {
      $ = y - 1, $ < _ && ($ = w);
    };
    switch (m.key) {
      case "Home":
        $ = _;
        break;
      case "End":
        $ = w;
        break;
      case "ArrowRight":
        a === "horizontal" && (d ? S() : P());
        break;
      case "ArrowDown":
        a === "vertical" && S();
        break;
      case "ArrowLeft":
        a === "horizontal" && (d ? P() : S());
        break;
      case "ArrowUp":
        a === "vertical" && P();
        break;
    }
    const D = $ % b;
    (v = g[D].ref.current) === null || v === void 0 || v.focus();
  });
  return /* @__PURE__ */ T.createElement(n6, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ T.createElement(mu.Slot, {
    scope: n
  }, /* @__PURE__ */ T.createElement(ie.div, E({}, s, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : p
  }))));
}), Ac = "AccordionItem", [r6, hu] = ii(Ac), o6 = /* @__PURE__ */ T.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = ci(Ac, n), s = JN(Ac, n), i = vu(n), c = nt(), l = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ T.createElement(r6, {
    scope: n,
    open: l,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ T.createElement(Rh, E({
    "data-orientation": a.orientation,
    "data-state": Fh(l)
  }, i, o, {
    ref: t,
    disabled: u,
    open: l,
    onOpenChange: (d) => {
      d ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), a6 = "AccordionHeader", s6 = /* @__PURE__ */ T.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = ci(qn, n), a = hu(a6, n);
  return /* @__PURE__ */ T.createElement(ie.h3, E({
    "data-orientation": o.orientation,
    "data-state": Fh(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), Xd = "AccordionTrigger", i6 = /* @__PURE__ */ T.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = ci(qn, n), a = hu(Xd, n), s = QN(Xd, n), i = vu(n);
  return /* @__PURE__ */ T.createElement(mu.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ T.createElement(KN, E({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, i, r, {
    ref: t
  })));
}), c6 = "AccordionContent", l6 = /* @__PURE__ */ T.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = ci(qn, n), a = hu(c6, n), s = vu(n);
  return /* @__PURE__ */ T.createElement(GN, E({
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
function Fh(e) {
  return e ? "open" : "closed";
}
const u6 = Ah, d6 = o6, f6 = s6, Vh = i6, Uh = l6, wO = u6, p6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  d6,
  {
    ref: n,
    className: R("border-b", e),
    ...t
  }
));
p6.displayName = "AccordionItem";
const m6 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(f6, { className: "flex", children: /* @__PURE__ */ f.exports.jsxs(
  Vh,
  {
    ref: r,
    className: R(
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
m6.displayName = Vh.displayName;
const v6 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Uh,
  {
    ref: r,
    className: R(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
v6.displayName = Uh.displayName;
const _O = Rh, CO = Oh, EO = Dh;
let Ki;
const Wh = "HoverCard", [zh, SO] = Ke(Wh, [
  cn
]), gu = cn(), [h6, bu] = zh(Wh), g6 = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: i = 300 } = e, c = gu(t), l = j(0), u = j(0), d = j(!1), p = j(!1), [m = !1, v] = et({
    prop: r,
    defaultProp: o,
    onChange: a
  }), h = pe(() => {
    clearTimeout(u.current), l.current = window.setTimeout(
      () => v(!0),
      s
    );
  }, [
    s,
    v
  ]), g = pe(() => {
    clearTimeout(l.current), !d.current && !p.current && (u.current = window.setTimeout(
      () => v(!1),
      i
    ));
  }, [
    i,
    v
  ]), y = pe(
    () => v(!1),
    [
      v
    ]
  );
  return Q(() => () => {
    clearTimeout(l.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ x(h6, {
    scope: t,
    open: m,
    onOpenChange: v,
    onOpen: h,
    onClose: g,
    onDismiss: y,
    hasSelectionRef: d,
    isPointerDownOnContentRef: p
  }, /* @__PURE__ */ x(ao, c, n));
}, b6 = "HoverCardTrigger", x6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = bu(b6, n), a = gu(n);
  return /* @__PURE__ */ x(ca, E({
    asChild: !0
  }, a), /* @__PURE__ */ x(ie.a, E({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: V(e.onPointerEnter, gs(o.onOpen)),
    onPointerLeave: V(e.onPointerLeave, gs(o.onClose)),
    onFocus: V(e.onFocus, o.onOpen),
    onBlur: V(e.onBlur, o.onClose),
    onTouchStart: V(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), y6 = "HoverCardPortal", [NO, $6] = zh(y6, {
  forceMount: void 0
}), Ic = "HoverCardContent", w6 = /* @__PURE__ */ O((e, t) => {
  const n = $6(Ic, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = bu(Ic, e.__scopeHoverCard);
  return /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, /* @__PURE__ */ x(_6, E({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: V(e.onPointerEnter, gs(a.onOpen)),
    onPointerLeave: V(e.onPointerLeave, gs(a.onClose)),
    ref: t
  })));
}), _6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...i } = e, c = bu(Ic, n), l = gu(n), u = j(null), d = we(t, u), [p, m] = G(!1);
  return Q(() => {
    if (p) {
      const v = document.body;
      return Ki = v.style.userSelect || v.style.webkitUserSelect, v.style.userSelect = "none", v.style.webkitUserSelect = "none", () => {
        v.style.userSelect = Ki, v.style.webkitUserSelect = Ki;
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
    u.current && C6(u.current).forEach(
      (h) => h.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ x(br, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: V(a, (v) => {
      v.preventDefault();
    }),
    onDismiss: c.onDismiss
  }, /* @__PURE__ */ x(la, E({}, l, i, {
    onPointerDown: V(i.onPointerDown, (v) => {
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
function gs(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function C6(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const E6 = g6, S6 = x6, Bh = w6, TO = E6, PO = S6, N6 = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  Bh,
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
N6.displayName = Bh.displayName;
const kO = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), xu = "Menubar", [jc, T6, P6] = Hn(xu), [Yh, OO] = Ke(xu, [
  P6,
  Kn
]), _t = da(), Hh = Kn(), [k6, yu] = Yh(xu), O6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: i, ...c } = e, l = sn(i), u = Hh(n), [d = "", p] = et({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [m, v] = G(null);
  return /* @__PURE__ */ x(k6, {
    scope: n,
    value: d,
    onMenuOpen: pe((h) => {
      p(h), v(h);
    }, [
      p
    ]),
    onMenuClose: pe(
      () => p(""),
      [
        p
      ]
    ),
    onMenuToggle: pe((h) => {
      p(
        (g) => Boolean(g) ? "" : h
      ), v(h);
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
    onCurrentTabStopIdChange: v
  }), /* @__PURE__ */ x(ie.div, E({
    role: "menubar"
  }, c, {
    ref: t
  }))))));
}), Kh = "MenubarMenu", [M6, Gh] = Yh(Kh), D6 = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = nt(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = yu(Kh, t), i = _t(t), c = j(null), l = j(!1), u = s.value === a;
  return Q(() => {
    u || (l.current = !1);
  }, [
    u
  ]), /* @__PURE__ */ x(M6, {
    scope: t,
    value: a,
    triggerId: nt(),
    triggerRef: c,
    contentId: nt(),
    wasKeyboardTriggerOpenRef: l
  }, /* @__PURE__ */ x(kl, E({}, i, {
    open: u,
    onOpenChange: (d) => {
      d || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, Jd = "MenubarTrigger", R6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = Hh(n), s = _t(n), i = yu(Jd, n), c = Gh(Jd, n), l = j(null), u = we(t, l, c.triggerRef), [d, p] = G(!1), m = i.value === c.value;
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
    onPointerDown: V(e.onPointerDown, (v) => {
      !r && v.button === 0 && v.ctrlKey === !1 && (i.onMenuOpen(c.value), m || v.preventDefault());
    }),
    onPointerEnter: V(e.onPointerEnter, () => {
      if (Boolean(i.value) && !m) {
        var h;
        i.onMenuOpen(c.value), (h = l.current) === null || h === void 0 || h.focus();
      }
    }),
    onKeyDown: V(e.onKeyDown, (v) => {
      r || ([
        "Enter",
        " "
      ].includes(v.key) && i.onMenuToggle(c.value), v.key === "ArrowDown" && i.onMenuOpen(c.value), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(v.key) && (c.wasKeyboardTriggerOpenRef.current = !0, v.preventDefault()));
    }),
    onFocus: V(
      e.onFocus,
      () => p(!0)
    ),
    onBlur: V(
      e.onBlur,
      () => p(!1)
    )
  })))));
}), A6 = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = _t(t);
  return /* @__PURE__ */ x(Ml, E({}, r, n));
}, Qd = "MenubarContent", I6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = _t(n), s = yu(Qd, n), i = Gh(Qd, n), c = T6(n), l = j(!1);
  return /* @__PURE__ */ x(Dl, E({
    id: i.contentId,
    "aria-labelledby": i.triggerId,
    "data-radix-menubar-content": ""
  }, a, o, {
    ref: t,
    align: r,
    onCloseAutoFocus: V(e.onCloseAutoFocus, (u) => {
      if (!Boolean(s.value) && !l.current) {
        var p;
        (p = i.triggerRef.current) === null || p === void 0 || p.focus();
      }
      l.current = !1, u.preventDefault();
    }),
    onFocusOutside: V(e.onFocusOutside, (u) => {
      const d = u.target;
      c().some((m) => {
        var v;
        return (v = m.ref.current) === null || v === void 0 ? void 0 : v.contains(d);
      }) && u.preventDefault();
    }),
    onInteractOutside: V(e.onInteractOutside, () => {
      l.current = !0;
    }),
    onEntryFocus: (u) => {
      i.wasKeyboardTriggerOpenRef.current || u.preventDefault();
    },
    onKeyDown: V(e.onKeyDown, (u) => {
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
        const $ = b.indexOf(i.value);
        b = s.loop ? G6(b, $ + 1) : b.slice($ + 1);
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
}), j6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Rl, E({}, o, r, {
    ref: t
  }));
}), L6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Al, E({}, o, r, {
    ref: t
  }));
}), F6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Il, E({}, o, r, {
    ref: t
  }));
}), V6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(jl, E({}, o, r, {
    ref: t
  }));
}), U6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Ll, E({}, o, r, {
    ref: t
  }));
}), W6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Fl, E({}, o, r, {
    ref: t
  }));
}), z6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Vl, E({}, o, r, {
    ref: t
  }));
}), B6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Ul, E({}, o, r, {
    ref: t
  }));
}), Y6 = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = _t(t), [i = !1, c] = et({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ x(Wl, E({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, H6 = /* @__PURE__ */ O((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(zl, E({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), K6 = /* @__PURE__ */ O((e, t) => {
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
function G6(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Zh = O6, Z6 = D6, qh = R6, Xh = A6, Jh = I6, q6 = j6, Qh = L6, eg = F6, tg = V6, X6 = U6, ng = W6, rg = z6, og = B6, J6 = Y6, ag = H6, sg = K6, MO = Z6, DO = q6, RO = Xh, AO = J6, IO = X6, Q6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Zh,
  {
    ref: n,
    className: R(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
Q6.displayName = Zh.displayName;
const eT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  qh,
  {
    ref: n,
    className: R(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
eT.displayName = qh.displayName;
const tT = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  ag,
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
      /* @__PURE__ */ f.exports.jsx(na, { className: "ml-auto h-4 w-4" })
    ]
  }
));
tT.displayName = ag.displayName;
const nT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  sg,
  {
    ref: n,
    className: R(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
nT.displayName = sg.displayName;
const rT = C.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ f.exports.jsx(Xh, { children: /* @__PURE__ */ f.exports.jsx(
    Jh,
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
rT.displayName = Jh.displayName;
const oT = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  eg,
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
oT.displayName = eg.displayName;
const aT = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  tg,
  {
    ref: o,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(rg, { children: /* @__PURE__ */ f.exports.jsx(en, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
aT.displayName = tg.displayName;
const sT = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  ng,
  {
    ref: r,
    className: R(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(rg, { children: /* @__PURE__ */ f.exports.jsx(As, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
sT.displayName = ng.displayName;
const iT = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Qh,
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
iT.displayName = Qh.displayName;
const cT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  og,
  {
    ref: n,
    className: R("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
cT.displayName = og.displayName;
const lT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: R(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
lT.displayname = "MenubarShortcut";
const Ea = "NavigationMenu", [$u, ig, uT] = Hn(Ea), [Lc, dT, fT] = Hn(Ea), [wu, jO] = Ke(Ea, [
  uT,
  fT
]), [pT, qt] = wu(Ea), [mT, vT] = wu(Ea), hT = /* @__PURE__ */ O((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: i = 300, orientation: c = "horizontal", dir: l, ...u } = e, [d, p] = G(null), m = we(
    t,
    (I) => p(I)
  ), v = sn(l), h = j(0), g = j(0), y = j(0), [b, $] = G(!0), [_ = "", w] = et({
    prop: r,
    onChange: (I) => {
      const ee = I !== "", re = i > 0;
      ee ? (window.clearTimeout(y.current), re && $(!1)) : (window.clearTimeout(y.current), y.current = window.setTimeout(
        () => $(!0),
        i
      )), o == null || o(I);
    },
    defaultProp: a
  }), S = pe(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => w(""),
      150
    );
  }, [
    w
  ]), P = pe((I) => {
    window.clearTimeout(g.current), w(I);
  }, [
    w
  ]), D = pe((I) => {
    _ === I ? window.clearTimeout(g.current) : h.current = window.setTimeout(() => {
      window.clearTimeout(g.current), w(I);
    }, s);
  }, [
    _,
    w,
    s
  ]);
  return Q(() => () => {
    window.clearTimeout(h.current), window.clearTimeout(g.current), window.clearTimeout(y.current);
  }, []), /* @__PURE__ */ x(gT, {
    scope: n,
    isRootMenu: !0,
    value: _,
    dir: v,
    orientation: c,
    rootNavigationMenu: d,
    onTriggerEnter: (I) => {
      window.clearTimeout(h.current), b ? D(I) : P(I);
    },
    onTriggerLeave: () => {
      window.clearTimeout(h.current), S();
    },
    onContentEnter: () => window.clearTimeout(g.current),
    onContentLeave: S,
    onItemSelect: (I) => {
      w(
        (ee) => ee === I ? "" : I
      );
    },
    onItemDismiss: () => w("")
  }, /* @__PURE__ */ x(ie.nav, E({
    "aria-label": "Main",
    "data-orientation": c,
    dir: v
  }, u, {
    ref: m
  })));
}), gT = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: i, onItemSelect: c, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: d, onContentEnter: p, onContentLeave: m } = e, [v, h] = G(null), [g, y] = G(/* @__PURE__ */ new Map()), [b, $] = G(null);
  return /* @__PURE__ */ x(pT, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: i,
    previousValue: co(i),
    baseId: nt(),
    dir: o,
    orientation: a,
    viewport: v,
    onViewportChange: h,
    indicatorTrack: b,
    onIndicatorTrackChange: $,
    onTriggerEnter: We(u),
    onTriggerLeave: We(d),
    onContentEnter: We(p),
    onContentLeave: We(m),
    onItemSelect: We(c),
    onItemDismiss: We(l),
    onViewportContentChange: pe((_, w) => {
      y((S) => (S.set(_, w), new Map(S)));
    }, []),
    onViewportContentRemove: pe((_) => {
      y((w) => w.has(_) ? (w.delete(_), new Map(w)) : w);
    }, [])
  }, /* @__PURE__ */ x($u.Provider, {
    scope: t
  }, /* @__PURE__ */ x(mT, {
    scope: t,
    items: g
  }, s)));
}, bT = "NavigationMenuList", xT = /* @__PURE__ */ O((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = qt(bT, n), a = /* @__PURE__ */ x(ie.ul, E({
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
  }, o.isRootMenu ? /* @__PURE__ */ x(fg, {
    asChild: !0
  }, a) : a));
}), yT = "NavigationMenuItem", [$T, cg] = wu(yT), wT = /* @__PURE__ */ O((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = nt(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = j(null), c = j(null), l = j(null), u = j(() => {
  }), d = j(!1), p = pe((v = "start") => {
    if (i.current) {
      u.current();
      const h = Fc(i.current);
      h.length && _u(v === "start" ? h : h.reverse());
    }
  }, []), m = pe(() => {
    if (i.current) {
      const v = Fc(i.current);
      v.length && (u.current = DT(v));
    }
  }, []);
  return /* @__PURE__ */ x($T, {
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
}), ef = "NavigationMenuTrigger", _T = /* @__PURE__ */ O((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = qt(ef, e.__scopeNavigationMenu), s = cg(ef, e.__scopeNavigationMenu), i = j(null), c = we(i, s.triggerRef, t), l = mg(a.baseId, s.value), u = vg(a.baseId, s.value), d = j(!1), p = j(!1), m = s.value === a.value;
  return /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x($u.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ x(pg, {
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
    onPointerEnter: V(e.onPointerEnter, () => {
      p.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: V(e.onPointerMove, bs(() => {
      r || p.current || s.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(s.value), d.current = !0);
    })),
    onPointerLeave: V(e.onPointerLeave, bs(() => {
      r || (a.onTriggerLeave(), d.current = !1);
    })),
    onClick: V(e.onClick, () => {
      a.onItemSelect(s.value), p.current = m;
    }),
    onKeyDown: V(e.onKeyDown, (v) => {
      const g = {
        horizontal: "ArrowDown",
        vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[a.orientation];
      m && v.key === g && (s.onEntryKeyDown(), v.preventDefault());
    })
  })))), m && /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(av, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: s.focusProxyRef,
    onFocus: (v) => {
      const h = s.contentRef.current, g = v.relatedTarget, y = g === i.current, b = h == null ? void 0 : h.contains(g);
      (y || !b) && s.onFocusProxyEnter(y ? "start" : "end");
    }
  }), a.viewport && /* @__PURE__ */ x("span", {
    "aria-owns": u
  })));
}), tf = "navigationMenu.linkSelect", CT = /* @__PURE__ */ O((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ x(pg, {
    asChild: !0
  }, /* @__PURE__ */ x(ie.a, E({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: V(e.onClick, (s) => {
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
}), lg = "NavigationMenuIndicator", ET = /* @__PURE__ */ O((e, t) => {
  const { forceMount: n, ...r } = e, o = qt(lg, e.__scopeNavigationMenu), a = Boolean(o.value);
  return o.indicatorTrack ? /* @__PURE__ */ tl.createPortal(/* @__PURE__ */ x(Ze, {
    present: n || a
  }, /* @__PURE__ */ x(ST, E({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), ST = /* @__PURE__ */ O((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = qt(lg, n), a = ig(n), [s, i] = G(null), [c, l] = G(null), u = o.orientation === "horizontal", d = Boolean(o.value);
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
}), Uo = "NavigationMenuContent", NT = /* @__PURE__ */ O((e, t) => {
  const { forceMount: n, ...r } = e, o = qt(Uo, e.__scopeNavigationMenu), a = cg(Uo, e.__scopeNavigationMenu), s = we(a.contentRef, t), i = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ x(TT, E({
    forceMount: n
  }, c, {
    ref: s
  })) : /* @__PURE__ */ x(Ze, {
    present: n || i
  }, /* @__PURE__ */ x(ug, E({
    "data-state": Cu(i)
  }, c, {
    ref: s,
    onPointerEnter: V(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: V(e.onPointerLeave, bs(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !i && o.isRootMenu ? "none" : void 0,
      ...c.style
    }
  })));
}), TT = /* @__PURE__ */ O((e, t) => {
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
}), Ja = "navigationMenu.rootContentDismiss", ug = /* @__PURE__ */ O((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: i, onContentFocusOutside: c, ...l } = e, u = qt(Uo, n), d = j(null), p = we(d, t), m = mg(u.baseId, r), v = vg(u.baseId, r), h = ig(n), g = j(null), { onItemDismiss: y } = u;
  Q(() => {
    const $ = d.current;
    if (u.isRootMenu && $) {
      const _ = () => {
        var w;
        y(), i(), $.contains(document.activeElement) && ((w = o.current) === null || w === void 0 || w.focus());
      };
      return $.addEventListener(Ja, _), () => $.removeEventListener(Ja, _);
    }
  }, [
    u.isRootMenu,
    e.value,
    o,
    y,
    i
  ]);
  const b = xt(() => {
    const _ = h().map(
      (ee) => ee.value
    );
    u.dir === "rtl" && _.reverse();
    const w = _.indexOf(u.value), S = _.indexOf(u.previousValue), P = r === u.value, D = S === _.indexOf(r);
    if (!P && !D)
      return g.current;
    const I = (() => {
      if (w !== S) {
        if (P && S !== -1)
          return w > S ? "from-end" : "from-start";
        if (D && w !== -1)
          return w > S ? "to-start" : "to-end";
      }
      return null;
    })();
    return g.current = I, I;
  }, [
    u.previousValue,
    u.value,
    u.dir,
    h,
    r
  ]);
  return /* @__PURE__ */ x(fg, {
    asChild: !0
  }, /* @__PURE__ */ x(br, E({
    id: v,
    "aria-labelledby": m,
    "data-motion": b,
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
    onFocusOutside: V(e.onFocusOutside, ($) => {
      var _;
      c();
      const w = $.target;
      (_ = u.rootNavigationMenu) !== null && _ !== void 0 && _.contains(w) && $.preventDefault();
    }),
    onPointerDownOutside: V(e.onPointerDownOutside, ($) => {
      var _;
      const w = $.target, S = h().some((D) => {
        var I;
        return (I = D.ref.current) === null || I === void 0 ? void 0 : I.contains(w);
      }), P = u.isRootMenu && ((_ = u.viewport) === null || _ === void 0 ? void 0 : _.contains(w));
      (S || P || !u.isRootMenu) && $.preventDefault();
    }),
    onKeyDown: V(e.onKeyDown, ($) => {
      const _ = $.altKey || $.ctrlKey || $.metaKey;
      if ($.key === "Tab" && !_) {
        const P = Fc($.currentTarget), D = document.activeElement, I = P.findIndex(
          (U) => U === D
        ), re = $.shiftKey ? P.slice(0, I).reverse() : P.slice(I + 1, P.length);
        if (_u(re))
          $.preventDefault();
        else {
          var S;
          (S = a.current) === null || S === void 0 || S.focus();
        }
      }
    }),
    onEscapeKeyDown: V(e.onEscapeKeyDown, ($) => {
      s.current = !0;
    })
  })));
}), dg = "NavigationMenuViewport", PT = /* @__PURE__ */ O((e, t) => {
  const { forceMount: n, ...r } = e, o = qt(dg, e.__scopeNavigationMenu), a = Boolean(o.value);
  return /* @__PURE__ */ x(Ze, {
    present: n || a
  }, /* @__PURE__ */ x(kT, E({}, r, {
    ref: t
  })));
}), kT = /* @__PURE__ */ O((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = qt(dg, n), s = we(t, a.onViewportChange), i = vT(Uo, e.__scopeNavigationMenu), [c, l] = G(null), [u, d] = G(null), p = c ? (c == null ? void 0 : c.width) + "px" : void 0, m = c ? (c == null ? void 0 : c.height) + "px" : void 0, v = Boolean(a.value), h = v ? a.value : a.previousValue;
  return Vc(u, () => {
    u && l({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }), /* @__PURE__ */ x(ie.div, E({
    "data-state": Cu(v),
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
    onPointerEnter: V(e.onPointerEnter, a.onContentEnter),
    onPointerLeave: V(e.onPointerLeave, bs(a.onContentLeave))
  }), Array.from(i.items).map(([y, { ref: b, forceMount: $, ..._ }]) => {
    const w = h === y;
    return /* @__PURE__ */ x(Ze, {
      key: y,
      present: $ || w
    }, /* @__PURE__ */ x(ug, E({}, _, {
      ref: ta(b, (S) => {
        w && S && d(S);
      })
    })));
  }));
}), OT = "FocusGroup", fg = /* @__PURE__ */ O((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = qt(OT, n);
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
], MT = "FocusGroupItem", pg = /* @__PURE__ */ O((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = dT(n), a = qt(MT, n);
  return /* @__PURE__ */ x(Lc.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ x(ie.button, E({}, r, {
    ref: t,
    onKeyDown: V(e.onKeyDown, (s) => {
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
function DT(e) {
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
function mg(e, t) {
  return `${e}-trigger-${t}`;
}
function vg(e, t) {
  return `${e}-content-${t}`;
}
function bs(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const hg = hT, gg = xT, RT = wT, bg = _T, AT = CT, xg = ET, yg = NT, $g = PT, IT = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  hg,
  {
    ref: r,
    className: R(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(wg, {})
    ]
  }
));
IT.displayName = hg.displayName;
const jT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  gg,
  {
    ref: n,
    className: R(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
jT.displayName = gg.displayName;
const LO = RT, LT = Qr(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), FT = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  bg,
  {
    ref: r,
    className: R(LT(), "group", e),
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
FT.displayName = bg.displayName;
const VT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  yg,
  {
    ref: n,
    className: R(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
VT.displayName = yg.displayName;
const FO = AT, wg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: R("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ f.exports.jsx(
  $g,
  {
    className: R(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
wg.displayName = $g.displayName;
const UT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  xg,
  {
    ref: n,
    className: R(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.exports.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
UT.displayName = xg.displayName;
const _g = "Progress", li = 100, [WT, VO] = Ke(_g), [zT, BT] = WT(_g), Cg = /* @__PURE__ */ O((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = KT, ...s } = e, i = Uc(o) ? o : li, c = Sg(r, i) ? r : null, l = xs(c) ? a(c, i) : void 0;
  return /* @__PURE__ */ x(zT, {
    scope: n,
    value: c,
    max: i
  }, /* @__PURE__ */ x(ie.div, E({
    "aria-valuemax": i,
    "aria-valuemin": 0,
    "aria-valuenow": xs(c) ? c : void 0,
    "aria-valuetext": l,
    role: "progressbar",
    "data-state": Eg(c, i),
    "data-value": c ?? void 0,
    "data-max": i
  }, s, {
    ref: t
  })));
});
Cg.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Uc(r) ? new Error(GT(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = Uc(e.max) ? e.max : li;
    return r != null && !Sg(r, a) ? new Error(ZT(o, n)) : null;
  }
};
const YT = "ProgressIndicator", HT = /* @__PURE__ */ O((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = BT(YT, r);
  return /* @__PURE__ */ x(ie.div, E({
    "data-state": Eg(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function KT(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Eg(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function xs(e) {
  return typeof e == "number";
}
function Uc(e) {
  return xs(e) && !isNaN(e) && e > 0;
}
function Sg(e, t) {
  return xs(e) && !isNaN(e) && e <= t && e >= 0;
}
function GT(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${li}\`.`;
}
function ZT(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${li} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const Ng = Cg, qT = HT, XT = C.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Ng,
  {
    ref: r,
    className: R(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(
      qT,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
XT.displayName = Ng.displayName;
const Tg = "Radio", [JT, Pg] = Ke(Tg), [QT, eP] = JT(Tg), tP = /* @__PURE__ */ O((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: i = "on", onCheck: c, ...l } = e, [u, d] = G(null), p = we(
    t,
    (h) => d(h)
  ), m = j(!1), v = u ? Boolean(u.closest("form")) : !0;
  return /* @__PURE__ */ x(QT, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ x(ie.button, E({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": kg(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: i
  }, l, {
    ref: p,
    onClick: V(e.onClick, (h) => {
      o || c == null || c(), v && (m.current = h.isPropagationStopped(), m.current || h.stopPropagation());
    })
  })), v && /* @__PURE__ */ x(oP, {
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
}), nP = "RadioIndicator", rP = /* @__PURE__ */ O((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = eP(nP, n);
  return /* @__PURE__ */ x(Ze, {
    present: r || a.checked
  }, /* @__PURE__ */ x(ie.span, E({
    "data-state": kg(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), oP = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = j(null), s = co(n), i = ia(t);
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
function kg(e) {
  return e ? "checked" : "unchecked";
}
const aP = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Og = "RadioGroup", [sP, UO] = Ke(Og, [
  Kn,
  Pg
]), Mg = Kn(), Dg = Pg(), [iP, cP] = sP(Og), lP = /* @__PURE__ */ O((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: i = !1, orientation: c, dir: l, loop: u = !0, onValueChange: d, ...p } = e, m = Mg(n), v = sn(l), [h, g] = et({
    prop: a,
    defaultProp: o,
    onChange: d
  });
  return /* @__PURE__ */ x(iP, {
    scope: n,
    name: r,
    required: s,
    disabled: i,
    value: h,
    onValueChange: g
  }, /* @__PURE__ */ x(zs, E({
    asChild: !0
  }, m, {
    orientation: c,
    dir: v,
    loop: u
  }), /* @__PURE__ */ x(ie.div, E({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": c,
    "data-disabled": i ? "" : void 0,
    dir: v
  }, p, {
    ref: t
  }))));
}), uP = "RadioGroupItem", dP = /* @__PURE__ */ O((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = cP(uP, n), s = a.disabled || r, i = Mg(n), c = Dg(n), l = j(null), u = we(t, l), d = a.value === o.value, p = j(!1);
  return Q(() => {
    const m = (h) => {
      aP.includes(h.key) && (p.current = !0);
    }, v = () => p.current = !1;
    return document.addEventListener("keydown", m), document.addEventListener("keyup", v), () => {
      document.removeEventListener("keydown", m), document.removeEventListener("keyup", v);
    };
  }, []), /* @__PURE__ */ x(Bs, E({
    asChild: !0
  }, i, {
    focusable: !s,
    active: d
  }), /* @__PURE__ */ x(tP, E({
    disabled: s,
    required: a.required,
    checked: d
  }, c, o, {
    name: a.name,
    ref: u,
    onCheck: () => a.onValueChange(o.value),
    onKeyDown: V((m) => {
      m.key === "Enter" && m.preventDefault();
    }),
    onFocus: V(o.onFocus, () => {
      var m;
      p.current && ((m = l.current) === null || m === void 0 || m.click());
    })
  })));
}), fP = /* @__PURE__ */ O((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = Dg(n);
  return /* @__PURE__ */ x(rP, E({}, o, r, {
    ref: t
  }));
}), Rg = lP, Ag = dP, pP = fP, mP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Rg,
  {
    className: R("grid gap-2", e),
    ...t,
    ref: n
  }
));
mP.displayName = Rg.displayName;
const vP = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Ag,
  {
    ref: r,
    className: R(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(pP, { className: "flex items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(As, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
vP.displayName = Ag.displayName;
const Ig = [
  "PageUp",
  "PageDown"
], jg = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Lg = {
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
}, Sa = "Slider", [Wc, hP, gP] = Hn(Sa), [Fg, WO] = Ke(Sa, [
  gP
]), [bP, ui] = Fg(Sa), xP = /* @__PURE__ */ O((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: i = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    r
  ], value: u, onValueChange: d = () => {
  }, onValueCommit: p = () => {
  }, inverted: m = !1, ...v } = e, [h, g] = G(null), y = we(
    t,
    (B) => g(B)
  ), b = j(/* @__PURE__ */ new Set()), $ = j(0), _ = s === "horizontal", w = h ? Boolean(h.closest("form")) : !0, S = _ ? yP : $P, [P = [], D] = et({
    prop: u,
    defaultProp: l,
    onChange: (B) => {
      var Z;
      (Z = [
        ...b.current
      ][$.current]) === null || Z === void 0 || Z.focus(), d(B);
    }
  }), I = j(P);
  function ee(B) {
    const Z = kP(P, B);
    H(B, Z);
  }
  function re(B) {
    H(B, $.current);
  }
  function U() {
    const B = I.current[$.current];
    P[$.current] !== B && p(P);
  }
  function H(B, Z, { commit: J } = {
    commit: !1
  }) {
    const Y = RP(a), q = AP(Math.round((B - r) / a) * a + r, Y), A = Fo(q, [
      r,
      o
    ]);
    D((M = []) => {
      const L = TP(M, A, Z);
      if (DP(L, c * a)) {
        $.current = L.indexOf(A);
        const W = String(L) !== String(M);
        return W && J && p(L), W ? L : M;
      } else
        return M;
    });
  }
  return /* @__PURE__ */ x(bP, {
    scope: e.__scopeSlider,
    disabled: i,
    min: r,
    max: o,
    valueIndexToChangeRef: $,
    thumbs: b.current,
    values: P,
    orientation: s
  }, /* @__PURE__ */ x(Wc.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ x(Wc.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ x(S, E({
    "aria-disabled": i,
    "data-disabled": i ? "" : void 0
  }, v, {
    ref: y,
    onPointerDown: V(v.onPointerDown, () => {
      i || (I.current = P);
    }),
    min: r,
    max: o,
    inverted: m,
    onSlideStart: i ? void 0 : ee,
    onSlideMove: i ? void 0 : re,
    onSlideEnd: i ? void 0 : U,
    onHomeKeyDown: () => !i && H(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !i && H(o, P.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: B, direction: Z }) => {
      if (!i) {
        const q = Ig.includes(B.key) || B.shiftKey && jg.includes(B.key) ? 10 : 1, A = $.current, M = P[A], L = a * q * Z;
        H(M + L, A, {
          commit: !0
        });
      }
    }
  })))), w && P.map(
    (B, Z) => /* @__PURE__ */ x(NP, {
      key: Z,
      name: n ? n + (P.length > 1 ? "[]" : "") : void 0,
      value: B
    })
  ));
}), [Vg, Ug] = Fg(Sa, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), yP = /* @__PURE__ */ O((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: i, onSlideEnd: c, onStepKeyDown: l, ...u } = e, [d, p] = G(null), m = we(
    t,
    ($) => p($)
  ), v = j(), h = sn(o), g = h === "ltr", y = g && !a || !g && a;
  function b($) {
    const _ = v.current || d.getBoundingClientRect(), w = [
      0,
      _.width
    ], P = Eu(w, y ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return v.current = _, P($ - _.left);
  }
  return /* @__PURE__ */ x(Vg, {
    scope: e.__scopeSlider,
    startEdge: y ? "left" : "right",
    endEdge: y ? "right" : "left",
    direction: y ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ x(Wg, E({
    dir: h,
    "data-orientation": "horizontal"
  }, u, {
    ref: m,
    style: {
      ...u.style,
      ["--radix-slider-thumb-transform"]: "translateX(-50%)"
    },
    onSlideStart: ($) => {
      const _ = b($.clientX);
      s == null || s(_);
    },
    onSlideMove: ($) => {
      const _ = b($.clientX);
      i == null || i(_);
    },
    onSlideEnd: () => {
      v.current = void 0, c == null || c();
    },
    onStepKeyDown: ($) => {
      const w = Lg[y ? "from-left" : "from-right"].includes($.key);
      l == null || l({
        event: $,
        direction: w ? -1 : 1
      });
    }
  })));
}), $P = /* @__PURE__ */ O((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: i, onStepKeyDown: c, ...l } = e, u = j(null), d = we(t, u), p = j(), m = !o;
  function v(h) {
    const g = p.current || u.current.getBoundingClientRect(), y = [
      0,
      g.height
    ], $ = Eu(y, m ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return p.current = g, $(h - g.top);
  }
  return /* @__PURE__ */ x(Vg, {
    scope: e.__scopeSlider,
    startEdge: m ? "bottom" : "top",
    endEdge: m ? "top" : "bottom",
    size: "height",
    direction: m ? 1 : -1
  }, /* @__PURE__ */ x(Wg, E({
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
      const y = Lg[m ? "from-bottom" : "from-top"].includes(h.key);
      c == null || c({
        event: h,
        direction: y ? -1 : 1
      });
    }
  })));
}), Wg = /* @__PURE__ */ O((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: i, onStepKeyDown: c, ...l } = e, u = ui(Sa, n);
  return /* @__PURE__ */ x(ie.span, E({}, l, {
    ref: t,
    onKeyDown: V(e.onKeyDown, (d) => {
      d.key === "Home" ? (s(d), d.preventDefault()) : d.key === "End" ? (i(d), d.preventDefault()) : Ig.concat(jg).includes(d.key) && (c(d), d.preventDefault());
    }),
    onPointerDown: V(e.onPointerDown, (d) => {
      const p = d.target;
      p.setPointerCapture(d.pointerId), d.preventDefault(), u.thumbs.has(p) ? p.focus() : r(d);
    }),
    onPointerMove: V(e.onPointerMove, (d) => {
      d.target.hasPointerCapture(d.pointerId) && o(d);
    }),
    onPointerUp: V(e.onPointerUp, (d) => {
      const p = d.target;
      p.hasPointerCapture(d.pointerId) && (p.releasePointerCapture(d.pointerId), a(d));
    })
  }));
}), wP = "SliderTrack", _P = /* @__PURE__ */ O((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = ui(wP, n);
  return /* @__PURE__ */ x(ie.span, E({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), rf = "SliderRange", CP = /* @__PURE__ */ O((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = ui(rf, n), a = Ug(rf, n), s = j(null), i = we(t, s), c = o.values.length, l = o.values.map(
    (p) => zg(p, o.min, o.max)
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
}), of = "SliderThumb", EP = /* @__PURE__ */ O((e, t) => {
  const n = hP(e.__scopeSlider), [r, o] = G(null), a = we(
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
  return /* @__PURE__ */ x(SP, E({}, e, {
    ref: a,
    index: s
  }));
}), SP = /* @__PURE__ */ O((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = ui(of, n), s = Ug(of, n), [i, c] = G(null), l = we(
    t,
    (g) => c(g)
  ), u = ia(i), d = a.values[r], p = d === void 0 ? 0 : zg(d, a.min, a.max), m = PP(r, a.values.length), v = u == null ? void 0 : u[s.size], h = v ? OP(v, p, s.direction) : 0;
  return Q(() => {
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
      [s.startEdge]: `calc(${p}% + ${h}px)`
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
    onFocus: V(e.onFocus, () => {
      a.valueIndexToChangeRef.current = r;
    })
  }))));
}), NP = (e) => {
  const { value: t, ...n } = e, r = j(null), o = co(t);
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
  ]), /* @__PURE__ */ x("input", E({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function TP(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function zg(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Fo(a, [
    0,
    100
  ]);
}
function PP(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function kP(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function OP(e, t, n) {
  const r = e / 2, a = Eu([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function MP(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function DP(e, t) {
  if (t > 0) {
    const n = MP(e);
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
function RP(e) {
  return (String(e).split(".")[1] || "").length;
}
function AP(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const Bg = xP, IP = _P, jP = CP, LP = EP, FP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(
  Bg,
  {
    ref: n,
    className: R(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ f.exports.jsx(IP, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ f.exports.jsx(jP, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ f.exports.jsx(LP, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
FP.displayName = Bg.displayName;
const Yg = "Tabs", [VP, zO] = Ke(Yg, [
  Kn
]), Hg = Kn(), [UP, Su] = VP(Yg), WP = /* @__PURE__ */ O((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: i, activationMode: c = "automatic", ...l } = e, u = sn(i), [d, p] = et({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ x(UP, {
    scope: n,
    baseId: nt(),
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
}), zP = "TabsList", BP = /* @__PURE__ */ O((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Su(zP, n), s = Hg(n);
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
}), YP = "TabsTrigger", HP = /* @__PURE__ */ O((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Su(YP, n), i = Hg(n), c = Kg(s.baseId, r), l = Gg(s.baseId, r), u = r === s.value;
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
    onMouseDown: V(e.onMouseDown, (d) => {
      !o && d.button === 0 && d.ctrlKey === !1 ? s.onValueChange(r) : d.preventDefault();
    }),
    onKeyDown: V(e.onKeyDown, (d) => {
      [
        " ",
        "Enter"
      ].includes(d.key) && s.onValueChange(r);
    }),
    onFocus: V(e.onFocus, () => {
      const d = s.activationMode !== "manual";
      !u && !o && d && s.onValueChange(r);
    })
  })));
}), KP = "TabsContent", GP = /* @__PURE__ */ O((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = Su(KP, n), c = Kg(i.baseId, r), l = Gg(i.baseId, r), u = r === i.value, d = j(u);
  return Q(() => {
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
function Kg(e, t) {
  return `${e}-trigger-${t}`;
}
function Gg(e, t) {
  return `${e}-content-${t}`;
}
const ZP = WP, Zg = BP, qg = HP, Xg = GP, BO = ZP, qP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Zg,
  {
    ref: n,
    className: R(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
qP.displayName = Zg.displayName;
const XP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  qg,
  {
    ref: n,
    className: R(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
XP.displayName = qg.displayName;
const JP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Xg,
  {
    ref: n,
    className: R(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
JP.displayName = Xg.displayName;
const QP = /* @__PURE__ */ O((e, t) => {
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
    onClick: V(e.onClick, () => {
      e.disabled || i(!s);
    })
  }));
}), Jg = QP, e3 = Qr(
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
), t3 = C.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  Jg,
  {
    ref: o,
    className: R(e3({ variant: t, size: n, className: e })),
    ...r
  }
));
t3.displayName = Jg.displayName;
const [di, YO] = Ke("Tooltip", [
  cn
]), Nu = cn(), n3 = "TooltipProvider", r3 = 700, zc = "tooltip.open", [o3, Tu] = di(n3), a3 = (e) => {
  const { __scopeTooltip: t, delayDuration: n = r3, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = G(!0), c = j(!1), l = j(0);
  return Q(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ x(o3, {
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
}, Pu = "Tooltip", [s3, fi] = di(Pu), i3 = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = Tu(Pu, e.__scopeTooltip), l = Nu(t), [u, d] = G(null), p = nt(), m = j(0), v = s ?? c.disableHoverableContent, h = i ?? c.delayDuration, g = j(!1), [y = !1, b] = et({
    prop: r,
    defaultProp: o,
    onChange: (P) => {
      P ? (c.onOpen(), document.dispatchEvent(new CustomEvent(zc))) : c.onClose(), a == null || a(P);
    }
  }), $ = xt(() => y ? g.current ? "delayed-open" : "instant-open" : "closed", [
    y
  ]), _ = pe(() => {
    window.clearTimeout(m.current), g.current = !1, b(!0);
  }, [
    b
  ]), w = pe(() => {
    window.clearTimeout(m.current), b(!1);
  }, [
    b
  ]), S = pe(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      g.current = !0, b(!0);
    }, h);
  }, [
    h,
    b
  ]);
  return Q(() => () => window.clearTimeout(m.current), []), /* @__PURE__ */ x(ao, l, /* @__PURE__ */ x(s3, {
    scope: t,
    contentId: p,
    open: y,
    stateAttribute: $,
    trigger: u,
    onTriggerChange: d,
    onTriggerEnter: pe(() => {
      c.isOpenDelayed ? S() : _();
    }, [
      c.isOpenDelayed,
      S,
      _
    ]),
    onTriggerLeave: pe(() => {
      v ? w() : window.clearTimeout(m.current);
    }, [
      w,
      v
    ]),
    onOpen: _,
    onClose: w,
    disableHoverableContent: v
  }, n));
}, af = "TooltipTrigger", c3 = /* @__PURE__ */ O((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = fi(af, n), a = Tu(af, n), s = Nu(n), i = j(null), c = we(t, i, o.onTriggerChange), l = j(!1), u = j(!1), d = pe(
    () => l.current = !1,
    []
  );
  return Q(() => () => document.removeEventListener("pointerup", d), [
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
    onPointerMove: V(e.onPointerMove, (p) => {
      p.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
    }),
    onPointerLeave: V(e.onPointerLeave, () => {
      o.onTriggerLeave(), u.current = !1;
    }),
    onPointerDown: V(e.onPointerDown, () => {
      l.current = !0, document.addEventListener("pointerup", d, {
        once: !0
      });
    }),
    onFocus: V(e.onFocus, () => {
      l.current || o.onOpen();
    }),
    onBlur: V(e.onBlur, o.onClose),
    onClick: V(e.onClick, o.onClose)
  })));
}), l3 = "TooltipPortal", [HO, u3] = di(l3, {
  forceMount: void 0
}), Wo = "TooltipContent", d3 = /* @__PURE__ */ O((e, t) => {
  const n = u3(Wo, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = fi(Wo, e.__scopeTooltip);
  return /* @__PURE__ */ x(Ze, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ x(Qg, E({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ x(f3, E({
    side: o
  }, a, {
    ref: t
  })));
}), f3 = /* @__PURE__ */ O((e, t) => {
  const n = fi(Wo, e.__scopeTooltip), r = Tu(Wo, e.__scopeTooltip), o = j(null), a = we(t, o), [s, i] = G(null), { trigger: c, onClose: l } = n, u = o.current, { onPointerInTransitChange: d } = r, p = pe(() => {
    i(null), d(!1);
  }, [
    d
  ]), m = pe((v, h) => {
    const g = v.currentTarget, y = {
      x: v.clientX,
      y: v.clientY
    }, b = m3(y, g.getBoundingClientRect()), $ = v3(y, b), _ = h3(h.getBoundingClientRect()), w = b3([
      ...$,
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
        }, b = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), $ = !g3(y, s);
        b ? p() : $ && (p(), l());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [
    c,
    u,
    s,
    l,
    p
  ]), /* @__PURE__ */ x(Qg, E({}, e, {
    ref: a
  }));
}), [p3, KO] = di(Pu, {
  isInside: !1
}), Qg = /* @__PURE__ */ O((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = fi(Wo, n), l = Nu(n), { onClose: u } = c;
  return Q(() => (document.addEventListener(zc, u), () => document.removeEventListener(zc, u)), [
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
  ]), /* @__PURE__ */ x(br, {
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
  }), /* @__PURE__ */ x(rl, null, r), /* @__PURE__ */ x(p3, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ x(av, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function m3(e, t) {
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
function v3(e, t, n = 5) {
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
function h3(e) {
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
function g3(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function b3(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), x3(t);
}
function x3(e) {
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
const y3 = a3, $3 = i3, w3 = c3, eb = d3, Kr = y3, Gr = $3, Zr = w3, fr = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  eb,
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
fr.displayName = eb.displayName;
const tb = "Switch", [_3, GO] = Ke(tb), [C3, E3] = _3(tb), S3 = /* @__PURE__ */ O((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, p] = G(null), m = we(
    t,
    (b) => p(b)
  ), v = j(!1), h = d ? Boolean(d.closest("form")) : !0, [g = !1, y] = et({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ x(C3, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ x(ie.button, E({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": nb(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: m,
    onClick: V(e.onClick, (b) => {
      y(
        ($) => !$
      ), h && (v.current = b.isPropagationStopped(), v.current || b.stopPropagation());
    })
  })), h && /* @__PURE__ */ x(P3, {
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
}), N3 = "SwitchThumb", T3 = /* @__PURE__ */ O((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = E3(N3, n);
  return /* @__PURE__ */ x(ie.span, E({
    "data-state": nb(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), P3 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = j(null), s = co(n), i = ia(t);
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
function nb(e) {
  return e ? "checked" : "unchecked";
}
const rb = S3, k3 = T3, O3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  rb,
  {
    className: R(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ f.exports.jsx(
      k3,
      {
        className: R(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
O3.displayName = rb.displayName;
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
}, M3 = (e) => e ? sf(e) : sf;
var ob = { exports: {} }, Gi = {}, Zi = { exports: {} }, qi = {};
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
function D3() {
  if (cf)
    return qi;
  cf = 1;
  var e = T;
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
function R3() {
  return lf || (lf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = T, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n($) {
      {
        for (var _ = arguments.length, w = new Array(_ > 1 ? _ - 1 : 0), S = 1; S < _; S++)
          w[S - 1] = arguments[S];
        r("error", $, w);
      }
    }
    function r($, _, w) {
      {
        var S = t.ReactDebugCurrentFrame, P = S.getStackAddendum();
        P !== "" && (_ += "%s", w = w.concat([P]));
        var D = w.map(function(I) {
          return String(I);
        });
        D.unshift("Warning: " + _), Function.prototype.apply.call(console[$], console, D);
      }
    }
    function o($, _) {
      return $ === _ && ($ !== 0 || 1 / $ === 1 / _) || $ !== $ && _ !== _;
    }
    var a = typeof Object.is == "function" ? Object.is : o, s = e.useState, i = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, u = !1, d = !1;
    function p($, _, w) {
      u || e.startTransition !== void 0 && (u = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var S = _();
      if (!d) {
        var P = _();
        a(S, P) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var D = s({
        inst: {
          value: S,
          getSnapshot: _
        }
      }), I = D[0].inst, ee = D[1];
      return c(function() {
        I.value = S, I.getSnapshot = _, m(I) && ee({
          inst: I
        });
      }, [$, S, _]), i(function() {
        m(I) && ee({
          inst: I
        });
        var re = function() {
          m(I) && ee({
            inst: I
          });
        };
        return $(re);
      }, [$]), l(S), S;
    }
    function m($) {
      var _ = $.getSnapshot, w = $.value;
      try {
        var S = _();
        return !a(w, S);
      } catch {
        return !0;
      }
    }
    function v($, _, w) {
      return _();
    }
    var h = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !h, y = g ? v : p, b = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : y;
    Xi.useSyncExternalStore = b, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Xi;
}
var uf;
function ab() {
  return uf || (uf = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = D3() : e.exports = R3();
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
function A3() {
  if (df)
    return Gi;
  df = 1;
  var e = T, t = ab();
  function n(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
  return Gi.useSyncExternalStoreWithSelector = function(l, u, d, p, m) {
    var v = a(null);
    if (v.current === null) {
      var h = { hasValue: !1, value: null };
      v.current = h;
    } else
      h = v.current;
    v = i(function() {
      function y(S) {
        if (!b) {
          if (b = !0, $ = S, S = p(S), m !== void 0 && h.hasValue) {
            var P = h.value;
            if (m(P, S))
              return _ = P;
          }
          return _ = S;
        }
        if (P = _, r($, S))
          return P;
        var D = p(S);
        return m !== void 0 && m(P, D) ? P : ($ = S, _ = D);
      }
      var b = !1, $, _, w = d === void 0 ? null : d;
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
function I3() {
  return ff || (ff = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = T, t = ab();
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
        var w = !1, S, P, D = function(U) {
          if (!w) {
            w = !0, S = U;
            var H = m(U);
            if (v !== void 0 && g.hasValue) {
              var B = g.value;
              if (v(B, H))
                return P = B, B;
            }
            return P = H, H;
          }
          var Z = S, J = P;
          if (r(Z, U))
            return J;
          var Y = m(U);
          return v !== void 0 && v(J, Y) ? J : (S = U, P = Y, Y);
        }, I = p === void 0 ? null : p, ee = function() {
          return D(d());
        }, re = I === null ? void 0 : function() {
          return D(I());
        };
        return [ee, re];
      }, [d, p, m, v]), b = y[0], $ = y[1], _ = o(u, b, $);
      return s(function() {
        g.hasValue = !0, g.value = _;
      }, [_]), c(_), _;
    }
    Ji.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ji;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = A3() : e.exports = I3();
})(ob);
const j3 = /* @__PURE__ */ e0(ob.exports), { useSyncExternalStoreWithSelector: L3 } = j3;
function F3(e, t = e.getState, n) {
  const r = L3(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return qb(r), r;
}
const pf = (e) => {
  const t = typeof e == "function" ? M3(e) : e, n = (r, o) => F3(t, r, o);
  return Object.assign(n, t), n;
}, sb = (e) => e ? pf(e) : pf, V3 = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ f.exports.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ f.exports.jsxs(eo, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ f.exports.jsx(
      to,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ f.exports.jsx(no, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(W0, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ f.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ f.exports.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ f.exports.jsx(Wt, { className: "w-full", children: e.role })
  ] })
] }), U3 = ({ isExpanded: e, theme: t }) => /* @__PURE__ */ f.exports.jsx(
  "button",
  {
    onClick: t.toggleTheme,
    className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
    children: t.value === "light" ? /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
      /* @__PURE__ */ f.exports.jsx(L0, { className: "dark:text-white" }),
      !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
    ] }) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
      /* @__PURE__ */ f.exports.jsx(U0, { className: "dark:text-white" }),
      !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
    ] })
  }
), W3 = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ f.exports.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ f.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(U3, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ f.exports.jsx(F0, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(V0, { className: "dark:text-white", size: 20 }),
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
          /* @__PURE__ */ f.exports.jsx(j0, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), pi = sb((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), ZO = ({ children: e, className: t, profile: n, logout: r, theme: o }) => {
  const { isExpanded: a, toggleExpandSidebar: s } = pi();
  return /* @__PURE__ */ f.exports.jsx(
    "aside",
    {
      tabIndex: -1,
      className: R(
        "sidebar dark:border-transparent overflow-hidden hidden lg:block",
        t,
        `${a ? "max-w-[240px]" : "max-w-[100px]"}`
      ),
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full py-8 grid grid-rows-[56px_1fr_160px] h-full gap-y-3 px-3", children: [
        /* @__PURE__ */ f.exports.jsx(V3, { isExpanded: a, profile: n }),
        e,
        /* @__PURE__ */ f.exports.jsx(
          W3,
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
}, qO = ({ children: e }) => {
  const { isExpanded: t } = pi();
  return /* @__PURE__ */ f.exports.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ f.exports.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, XO = ({ to: e, label: t, icon: n, pathname: r, Link: o }) => {
  const [a, s] = G(!1), i = j(null), { isExpanded: c } = pi();
  return Q(() => {
    const l = () => {
      const u = i.current.querySelector(`#${e.replaceAll("/", "_")}`);
      if (u) {
        const d = u.offsetWidth < u.scrollWidth;
        s(d);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [e]), o ? /* @__PURE__ */ f.exports.jsx(Kr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
    o,
    {
      href: e,
      ref: i,
      className: `cursor-pointer border-2 border-transparent flex ${c ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
        ${r.startsWith(e) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
      children: [
        /* @__PURE__ */ f.exports.jsx("div", { children: n }),
        !a && c && /* @__PURE__ */ f.exports.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: t
          }
        ),
        a && c && /* @__PURE__ */ f.exports.jsxs(Gr, { children: [
          /* @__PURE__ */ f.exports.jsx(Zr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
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
  ) }) : /* @__PURE__ */ f.exports.jsx(Kr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
    "div",
    {
      ref: i,
      className: `cursor-pointer border-2 border-transparent flex ${c ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
          ${r.startsWith(e) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
      children: [
        /* @__PURE__ */ f.exports.jsx("div", { children: n }),
        !a && c && /* @__PURE__ */ f.exports.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: t
          }
        ),
        a && c && /* @__PURE__ */ f.exports.jsxs(Gr, { children: [
          /* @__PURE__ */ f.exports.jsx(Zr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
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
}, mf = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, i] = G(!1), c = j(null);
  return Q(() => {
    const l = () => {
      const u = c.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (u) {
        const d = u.offsetWidth < u.scrollWidth;
        i(d);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [n]), a ? /* @__PURE__ */ f.exports.jsx(Kr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && e && /* @__PURE__ */ f.exports.jsxs(Gr, { children: [
          /* @__PURE__ */ f.exports.jsx(Zr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
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
  ) }) : /* @__PURE__ */ f.exports.jsx(Kr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
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
        s && e && /* @__PURE__ */ f.exports.jsxs(Gr, { children: [
          /* @__PURE__ */ f.exports.jsx(Zr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
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
}, JO = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = G(!1), [i, c] = G(!1), { isExpanded: l } = pi(), u = j(null), d = () => c((m) => !m), p = e.replaceAll(" ", "_");
  return Q(() => {
    const m = () => {
      const v = u.current.querySelector(`#${p}`);
      if (v) {
        const h = v.offsetWidth < v.scrollWidth;
        s(h);
      }
    };
    return window.addEventListener("resize", m), m(), () => window.removeEventListener("resize", m);
  }, [e]), o ? /* @__PURE__ */ f.exports.jsxs(Kr, { delayDuration: 180, children: [
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
            a && l && /* @__PURE__ */ f.exports.jsxs(Gr, { children: [
              /* @__PURE__ */ f.exports.jsx(Zr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
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
  ] }) : /* @__PURE__ */ f.exports.jsxs(Kr, { delayDuration: 180, children: [
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
            a && l && /* @__PURE__ */ f.exports.jsxs(Gr, { children: [
              /* @__PURE__ */ f.exports.jsx(Zr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
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
};
sb((e, t) => ({
  data: [],
  filters: [],
  queries: [],
  columns: [],
  showFilters: !0,
  onSubmitTable: null,
  pagination: {
    limit: 5,
    page: 1,
    labels: { plural: "Items", single: "Item" },
    hasPrevPage: !1,
    hasNextPage: !1
  },
  setInitialTable: (n) => e((r) => {
    const o = (c) => (c == null ? void 0 : c.filters) && (c == null ? void 0 : c.filters.length), a = n.columns.filter(o).map((c) => {
      const l = c.filters.map((d) => ({ ...d, selected: !1 })), u = { ...c, id: c.id, options: l };
      return delete u.filters, u;
    }), i = n.columns.filter((c) => c.isQuery).map((c) => ({
      id: c.id,
      label: c.label
    }));
    return {
      ...r,
      queries: i,
      filters: a,
      data: (n == null ? void 0 : n.data) ?? [],
      columns: n == null ? void 0 : n.columns,
      pagination: n.pagination,
      onSubmitTable: n.onSubmitTable
    };
  }),
  getFilterOptionsSelectedById: (n) => {
    const r = t().filters.find((o) => o.id === n);
    return r ? r.options.filter((o) => o.selected).map((o) => o.value) : [];
  },
  getFiltersWithOptionsSelected: () => t().filters.map((n) => ({
    id: n.id,
    values: n.options.filter((r) => r.selected).map((r) => r.value)
  })).filter((n) => n.values.length > 0),
  setShowFilters: (n) => e((r) => ({ ...r, showFilters: n })),
  selectOptionFilter: (n, r, o) => e((a) => {
    const s = a.filters.map((i) => i.id === n ? {
      ...i,
      options: i.options.map((c) => c.id === r ? { ...c, selected: o } : c)
    } : i);
    return { ...a, filters: s };
  }),
  resetOptionsByFilter: (n) => e((r) => {
    const o = r.filters.map((a) => a.id === n ? {
      ...a,
      options: a.options.map((s) => ({ ...s, selected: !1 }))
    } : a);
    return { ...r, filters: o };
  }),
  resetFilters: () => e((n) => {
    const r = n.filters.map((o) => ({
      ...o,
      options: o.options.map((a) => ({ ...a, selected: !1 }))
    }));
    return { ...n, filters: r };
  }),
  updateLimit: (n) => {
    const { filters: r, queries: o, onSubmitTable: a, pagination: { page: s } } = t();
    e((i) => ({ ...i, pagination: { ...i.pagination, limit: n } })), a({ filters: r, queries: o, limit: n, page: s });
  },
  updatePage: (n) => e((r) => ({ ...r, pagination: { ...r.pagination, page: n } })),
  setPagination: (n) => e((r) => ({ ...r, pagination: n })),
  nextPage: () => {
    e((i) => ({
      ...i,
      pagination: { ...i.pagination, page: i.pagination.page + 1 }
    }));
    const { filters: n, queries: r, onSubmitTable: o, pagination: { page: a, limit: s } } = t();
    o({ filters: n, queries: r, limit: s, page: a });
  },
  prevPage: () => {
    e((i) => {
      const c = i.pagination.page, l = c === 1 ? 1 : c - 1;
      return {
        ...i,
        pagination: { ...i.pagination, page: l }
      };
    });
    const { filters: n, queries: r, onSubmitTable: o, pagination: { page: a, limit: s } } = t();
    a !== 1 && o({ filters: n, queries: r, limit: s, page: a });
  },
  setColumns: (n) => e((r) => ({ ...r, columns: n })),
  setFilters: (n) => e((r) => ({ ...r, filters: n })),
  setQueries: (n) => e((r) => ({ ...r, queries: n })),
  setData: (n) => e((r) => ({ ...r, data: n }))
}));
const Xn = mt({
  data: [],
  filters: [],
  queries: [],
  columns: [],
  showFilters: !0,
  searchForm: null,
  onSubmitTable: null,
  setSearchForm: () => {
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
function z3() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = at(Xn);
  return /* @__PURE__ */ f.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ f.exports.jsxs(
        hv,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ f.exports.jsx(nu, { className: "h-8 w-[70px]", children: /* @__PURE__ */ f.exports.jsx(gv, { placeholder: e.limit }) }),
            /* @__PURE__ */ f.exports.jsx(ru, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ f.exports.jsx(ou, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ f.exports.jsxs(
        Qe,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ f.exports.jsx(Kf, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ f.exports.jsx("div", { children: /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ f.exports.jsxs(
        Qe,
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
const ib = () => {
  const { columns: e } = at(Xn);
  return /* @__PURE__ */ f.exports.jsx(hh, { children: /* @__PURE__ */ f.exports.jsx(si, { children: e.length > 0 && e.map((t, n) => /* @__PURE__ */ f.exports.jsx(bh, { children: t.label }, `${t.id}-${n}`)) }) });
}, QO = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, e8 = { limit: 10, page: 1 }, vf = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), t8 = (e, t) => [
  ...truckColumns.slice(0, truckColumns.length - 1),
  e,
  ...truckColumns.slice(truckColumns.length - 1)
], B3 = ({ colSpan: e }) => /* @__PURE__ */ f.exports.jsx(si, { children: /* @__PURE__ */ f.exports.jsx(du, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), Y3 = ({ data: e, columns: t }) => /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.map((n) => /* @__PURE__ */ f.exports.jsx(si, { children: t.map((r) => /* @__PURE__ */ f.exports.jsx(du, { children: r != null && r.render ? /* @__PURE__ */ f.exports.jsx("div", { children: r.render(n) }) : /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: n[r.id] }) }, vf())) }, vf())) }), cb = () => {
  const { data: e, columns: t } = at(Xn);
  return /* @__PURE__ */ f.exports.jsx(gh, { children: e.length ? /* @__PURE__ */ f.exports.jsx(Y3, { data: e, columns: t }) : /* @__PURE__ */ f.exports.jsx(B3, { colSpan: t.length }) });
}, H3 = () => /* @__PURE__ */ f.exports.jsxs(uu, { children: [
  /* @__PURE__ */ f.exports.jsx(ib, {}),
  /* @__PURE__ */ f.exports.jsx(cb, {})
] }), K3 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), G3 = () => /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ f.exports.jsx(K3, {}),
  /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] });
var hf = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = fe(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, lb = function(e, t) {
  var n = function(o) {
    var a = t.fields[o];
    a && a.ref && "reportValidity" in a.ref ? hf(a.ref, o, e) : a.refs && a.refs.forEach(function(s) {
      return hf(s, o, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, Z3 = function(e, t) {
  t.shouldUseNativeValidation && lb(e, t);
  var n = {};
  for (var r in e) {
    var o = fe(t.fields, r);
    ze(n, r, Object.assign(e[r] || {}, { ref: o && o.ref }));
  }
  return n;
}, q3 = function(e, t) {
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
      n[s] = km(s, t, n, o, l ? [].concat(l, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, X3 = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, a) {
    try {
      return Promise.resolve(function(s, i) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(l) {
            return a.shouldUseNativeValidation && lb({}, a), { errors: {}, values: n.raw ? r : l };
          });
        } catch (l) {
          return i(l);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(s) {
        if (function(i) {
          return i.errors != null;
        }(s))
          return { values: {}, errors: Z3(q3(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}, vn = { exports: {} }, Qi = { exports: {} }, Le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gf;
function J3() {
  if (gf)
    return Le;
  gf = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
  function $(w) {
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
                case v:
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
    return $(w) === l;
  }
  return Le.AsyncMode = c, Le.ConcurrentMode = l, Le.ContextConsumer = i, Le.ContextProvider = s, Le.Element = t, Le.ForwardRef = u, Le.Fragment = r, Le.Lazy = v, Le.Memo = m, Le.Portal = n, Le.Profiler = a, Le.StrictMode = o, Le.Suspense = d, Le.isAsyncMode = function(w) {
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
    return $(w) === v;
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
    return typeof w == "string" || typeof w == "function" || w === r || w === l || w === a || w === o || w === d || w === p || typeof w == "object" && w !== null && (w.$$typeof === v || w.$$typeof === m || w.$$typeof === s || w.$$typeof === i || w.$$typeof === u || w.$$typeof === g || w.$$typeof === y || w.$$typeof === b || w.$$typeof === h);
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
var bf;
function Q3() {
  return bf || (bf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function $(K) {
      return typeof K == "string" || typeof K == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      K === r || K === l || K === a || K === o || K === d || K === p || typeof K == "object" && K !== null && (K.$$typeof === v || K.$$typeof === m || K.$$typeof === s || K.$$typeof === i || K.$$typeof === u || K.$$typeof === g || K.$$typeof === y || K.$$typeof === b || K.$$typeof === h);
    }
    function _(K) {
      if (typeof K == "object" && K !== null) {
        var Re = K.$$typeof;
        switch (Re) {
          case t:
            var Ve = K.type;
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
                  case v:
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
    var w = c, S = l, P = i, D = s, I = t, ee = u, re = r, U = v, H = m, B = n, Z = a, J = o, Y = d, q = !1;
    function A(K) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(K) || _(K) === c;
    }
    function M(K) {
      return _(K) === l;
    }
    function L(K) {
      return _(K) === i;
    }
    function W(K) {
      return _(K) === s;
    }
    function oe(K) {
      return typeof K == "object" && K !== null && K.$$typeof === t;
    }
    function ce(K) {
      return _(K) === u;
    }
    function ye(K) {
      return _(K) === r;
    }
    function be(K) {
      return _(K) === v;
    }
    function te(K) {
      return _(K) === m;
    }
    function le(K) {
      return _(K) === n;
    }
    function ve(K) {
      return _(K) === a;
    }
    function X(K) {
      return _(K) === o;
    }
    function he(K) {
      return _(K) === d;
    }
    Fe.AsyncMode = w, Fe.ConcurrentMode = S, Fe.ContextConsumer = P, Fe.ContextProvider = D, Fe.Element = I, Fe.ForwardRef = ee, Fe.Fragment = re, Fe.Lazy = U, Fe.Memo = H, Fe.Portal = B, Fe.Profiler = Z, Fe.StrictMode = J, Fe.Suspense = Y, Fe.isAsyncMode = A, Fe.isConcurrentMode = M, Fe.isContextConsumer = L, Fe.isContextProvider = W, Fe.isElement = oe, Fe.isForwardRef = ce, Fe.isFragment = ye, Fe.isLazy = be, Fe.isMemo = te, Fe.isPortal = le, Fe.isProfiler = ve, Fe.isStrictMode = X, Fe.isSuspense = he, Fe.isValidElementType = $, Fe.typeOf = _;
  }()), Fe;
}
var xf;
function ub() {
  return xf || (xf = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = J3() : e.exports = Q3();
  }(Qi)), Qi.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ec, yf;
function e4() {
  if (yf)
    return ec;
  yf = 1;
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
var tc, $f;
function ku() {
  if ($f)
    return tc;
  $f = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return tc = e, tc;
}
var nc, wf;
function db() {
  return wf || (wf = 1, nc = Function.call.bind(Object.prototype.hasOwnProperty)), nc;
}
var rc, _f;
function t4() {
  if (_f)
    return rc;
  _f = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ku(), n = {}, r = db();
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
  }, rc = o, rc;
}
var oc, Cf;
function n4() {
  if (Cf)
    return oc;
  Cf = 1;
  var e = ub(), t = e4(), n = ku(), r = db(), o = t4(), a = function() {
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
      var L = M && (l && M[l] || M[u]);
      if (typeof L == "function")
        return L;
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
      arrayOf: $,
      element: _(),
      elementType: w(),
      instanceOf: S,
      node: ee(),
      objectOf: D,
      oneOf: P,
      oneOfType: I,
      shape: U,
      exact: H
    };
    function v(M, L) {
      return M === L ? M !== 0 || 1 / M === 1 / L : M !== M && L !== L;
    }
    function h(M, L) {
      this.message = M, this.data = L && typeof L == "object" ? L : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function g(M) {
      if (process.env.NODE_ENV !== "production")
        var L = {}, W = 0;
      function oe(ye, be, te, le, ve, X, he) {
        if (le = le || p, X = X || te, he !== n) {
          if (c) {
            var K = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw K.name = "Invariant Violation", K;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Re = le + ":" + te;
            !L[Re] && // Avoid spamming the console because they are often not actionable except for lib authors
            W < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + X + "` prop on `" + le + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), L[Re] = !0, W++);
          }
        }
        return be[te] == null ? ye ? be[te] === null ? new h("The " + ve + " `" + X + "` is marked as required " + ("in `" + le + "`, but its value is `null`.")) : new h("The " + ve + " `" + X + "` is marked as required in " + ("`" + le + "`, but its value is `undefined`.")) : null : M(be, te, le, ve, X);
      }
      var ce = oe.bind(null, !1);
      return ce.isRequired = oe.bind(null, !0), ce;
    }
    function y(M) {
      function L(W, oe, ce, ye, be, te) {
        var le = W[oe], ve = J(le);
        if (ve !== M) {
          var X = Y(le);
          return new h(
            "Invalid " + ye + " `" + be + "` of type " + ("`" + X + "` supplied to `" + ce + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return g(L);
    }
    function b() {
      return g(s);
    }
    function $(M) {
      function L(W, oe, ce, ye, be) {
        if (typeof M != "function")
          return new h("Property `" + be + "` of component `" + ce + "` has invalid PropType notation inside arrayOf.");
        var te = W[oe];
        if (!Array.isArray(te)) {
          var le = J(te);
          return new h("Invalid " + ye + " `" + be + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected an array."));
        }
        for (var ve = 0; ve < te.length; ve++) {
          var X = M(te, ve, ce, ye, be + "[" + ve + "]", n);
          if (X instanceof Error)
            return X;
        }
        return null;
      }
      return g(L);
    }
    function _() {
      function M(L, W, oe, ce, ye) {
        var be = L[W];
        if (!i(be)) {
          var te = J(be);
          return new h("Invalid " + ce + " `" + ye + "` of type " + ("`" + te + "` supplied to `" + oe + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(M);
    }
    function w() {
      function M(L, W, oe, ce, ye) {
        var be = L[W];
        if (!e.isValidElementType(be)) {
          var te = J(be);
          return new h("Invalid " + ce + " `" + ye + "` of type " + ("`" + te + "` supplied to `" + oe + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(M);
    }
    function S(M) {
      function L(W, oe, ce, ye, be) {
        if (!(W[oe] instanceof M)) {
          var te = M.name || p, le = A(W[oe]);
          return new h("Invalid " + ye + " `" + be + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected ") + ("instance of `" + te + "`."));
        }
        return null;
      }
      return g(L);
    }
    function P(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function L(W, oe, ce, ye, be) {
        for (var te = W[oe], le = 0; le < M.length; le++)
          if (v(te, M[le]))
            return null;
        var ve = JSON.stringify(M, function(he, K) {
          var Re = Y(K);
          return Re === "symbol" ? String(K) : K;
        });
        return new h("Invalid " + ye + " `" + be + "` of value `" + String(te) + "` " + ("supplied to `" + ce + "`, expected one of " + ve + "."));
      }
      return g(L);
    }
    function D(M) {
      function L(W, oe, ce, ye, be) {
        if (typeof M != "function")
          return new h("Property `" + be + "` of component `" + ce + "` has invalid PropType notation inside objectOf.");
        var te = W[oe], le = J(te);
        if (le !== "object")
          return new h("Invalid " + ye + " `" + be + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected an object."));
        for (var ve in te)
          if (r(te, ve)) {
            var X = M(te, ve, ce, ye, be + "." + ve, n);
            if (X instanceof Error)
              return X;
          }
        return null;
      }
      return g(L);
    }
    function I(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var L = 0; L < M.length; L++) {
        var W = M[L];
        if (typeof W != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + q(W) + " at index " + L + "."
          ), s;
      }
      function oe(ce, ye, be, te, le) {
        for (var ve = [], X = 0; X < M.length; X++) {
          var he = M[X], K = he(ce, ye, be, te, le, n);
          if (K == null)
            return null;
          K.data && r(K.data, "expectedType") && ve.push(K.data.expectedType);
        }
        var Re = ve.length > 0 ? ", expected one of type [" + ve.join(", ") + "]" : "";
        return new h("Invalid " + te + " `" + le + "` supplied to " + ("`" + be + "`" + Re + "."));
      }
      return g(oe);
    }
    function ee() {
      function M(L, W, oe, ce, ye) {
        return B(L[W]) ? null : new h("Invalid " + ce + " `" + ye + "` supplied to " + ("`" + oe + "`, expected a ReactNode."));
      }
      return g(M);
    }
    function re(M, L, W, oe, ce) {
      return new h(
        (M || "React class") + ": " + L + " type `" + W + "." + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ce + "`."
      );
    }
    function U(M) {
      function L(W, oe, ce, ye, be) {
        var te = W[oe], le = J(te);
        if (le !== "object")
          return new h("Invalid " + ye + " `" + be + "` of type `" + le + "` " + ("supplied to `" + ce + "`, expected `object`."));
        for (var ve in M) {
          var X = M[ve];
          if (typeof X != "function")
            return re(ce, ye, be, ve, Y(X));
          var he = X(te, ve, ce, ye, be + "." + ve, n);
          if (he)
            return he;
        }
        return null;
      }
      return g(L);
    }
    function H(M) {
      function L(W, oe, ce, ye, be) {
        var te = W[oe], le = J(te);
        if (le !== "object")
          return new h("Invalid " + ye + " `" + be + "` of type `" + le + "` " + ("supplied to `" + ce + "`, expected `object`."));
        var ve = t({}, W[oe], M);
        for (var X in ve) {
          var he = M[X];
          if (r(M, X) && typeof he != "function")
            return re(ce, ye, be, X, Y(he));
          if (!he)
            return new h(
              "Invalid " + ye + " `" + be + "` key `" + X + "` supplied to `" + ce + "`.\nBad object: " + JSON.stringify(W[oe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var K = he(te, X, ce, ye, be + "." + X, n);
          if (K)
            return K;
        }
        return null;
      }
      return g(L);
    }
    function B(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(B);
          if (M === null || i(M))
            return !0;
          var L = d(M);
          if (L) {
            var W = L.call(M), oe;
            if (L !== M.entries) {
              for (; !(oe = W.next()).done; )
                if (!B(oe.value))
                  return !1;
            } else
              for (; !(oe = W.next()).done; ) {
                var ce = oe.value;
                if (ce && !B(ce[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Z(M, L) {
      return M === "symbol" ? !0 : L ? L["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && L instanceof Symbol : !1;
    }
    function J(M) {
      var L = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : Z(L, M) ? "symbol" : L;
    }
    function Y(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var L = J(M);
      if (L === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return L;
    }
    function q(M) {
      var L = Y(M);
      switch (L) {
        case "array":
        case "object":
          return "an " + L;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + L;
        default:
          return L;
      }
    }
    function A(M) {
      return !M.constructor || !M.constructor.name ? p : M.constructor.name;
    }
    return m.checkPropTypes = o, m.resetWarningCache = o.resetWarningCache, m.PropTypes = m, m;
  }, oc;
}
var ac, Ef;
function r4() {
  if (Ef)
    return ac;
  Ef = 1;
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
  var o4 = ub(), a4 = !0;
  vn.exports = n4()(o4.isElement, a4);
} else
  vn.exports = r4()();
var s4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, i4 = Object.defineProperty, c4 = Object.defineProperties, l4 = Object.getOwnPropertyDescriptors, ys = Object.getOwnPropertySymbols, fb = Object.prototype.hasOwnProperty, pb = Object.prototype.propertyIsEnumerable, Sf = (e, t, n) => t in e ? i4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Nf = (e, t) => {
  for (var n in t || (t = {}))
    fb.call(t, n) && Sf(e, n, t[n]);
  if (ys)
    for (var n of ys(t))
      pb.call(t, n) && Sf(e, n, t[n]);
  return e;
}, u4 = (e, t) => c4(e, l4(t)), d4 = (e, t) => {
  var n = {};
  for (var r in e)
    fb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ys)
    for (var r of ys(e))
      t.indexOf(r) < 0 && pb.call(e, r) && (n[r] = e[r]);
  return n;
}, fo = (e, t, n) => {
  const r = O(
    (o, a) => {
      var s = o, { color: i = "currentColor", size: c = 24, stroke: l = 2, children: u } = s, d = d4(s, ["color", "size", "stroke", "children"]);
      return x(
        "svg",
        Nf(u4(Nf({
          ref: a
        }, s4), {
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
    color: vn.exports.string,
    size: vn.exports.oneOfType([vn.exports.string, vn.exports.number]),
    stroke: vn.exports.oneOfType([vn.exports.string, vn.exports.number])
  }, r.displayName = `${t}`, r;
}, f4 = fo(
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
), p4 = fo("adjustments", "IconAdjustments", [
  ["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }],
  ["path", { d: "M6 4v4", key: "svg-1" }],
  ["path", { d: "M6 12v8", key: "svg-2" }],
  ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }],
  ["path", { d: "M12 4v10", key: "svg-4" }],
  ["path", { d: "M12 18v2", key: "svg-5" }],
  ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }],
  ["path", { d: "M18 4v1", key: "svg-7" }],
  ["path", { d: "M18 9v11", key: "svg-8" }]
]), m4 = fo("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), v4 = fo("photo-plus", "IconPhotoPlus", [
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
]), mb = fo("photo-star", "IconPhotoStar", [
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
]), h4 = fo("search", "IconSearch", [
  ["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }],
  ["path", { d: "M21 21l-6 -6", key: "svg-1" }]
]), Ie;
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
]), Rn = (e) => {
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
]), g4 = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
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
let vb = zo;
function b4(e) {
  vb = e;
}
function $s() {
  return vb;
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
}, x4 = [];
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
    return vt.mergeObjectSync(t, r);
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
}), hb = (e) => ({ status: "dirty", value: e }), yt = (e) => ({ status: "valid", value: e }), Yc = (e) => e.status === "aborted", Hc = (e) => e.status === "dirty", _s = (e) => e.status === "valid", Cs = (e) => typeof Promise < "u" && e instanceof Promise;
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
    return Rn(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Rn(t.data),
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
        parsedType: Rn(t.data),
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
      parsedType: Rn(t)
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
      parsedType: Rn(t)
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
    return vr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Yt.create(this, this._def);
  }
  promise() {
    return Xr.create(this, this._def);
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
    return new bb({
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
const y4 = /^c[^\s-]{8,}$/i, $4 = /^[a-z][a-z0-9]*$/, w4 = /[0-9A-HJKMNP-TV-Z]{26}/, _4 = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, C4 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, E4 = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, S4 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, N4 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, T4 = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function P4(e, t) {
  return !!((t === "v4" || !t) && S4.test(e) || (t === "v6" || !t) && N4.test(e));
}
class Ut extends ke {
  constructor() {
    super(...arguments), this._regex = (t, n, r) => this.refinement((o) => t.test(o), {
      validation: n,
      code: ae.invalid_string,
      ..._e.errToObj(r)
    }), this.nonempty = (t) => this.min(1, _e.errToObj(t)), this.trim = () => new Ut({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new Ut({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new Ut({
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
        C4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "email",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        E4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "emoji",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        _4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "uuid",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        y4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "cuid",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        $4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "cuid2",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        w4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
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
        }), r.dirty()) : a.kind === "datetime" ? T4(a).test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? P4(t.data, a.version) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "ip",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty()) : Ie.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _addCheck(t) {
    return new Ut({
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
Ut.create = (e) => {
  var t;
  return new Ut({
    checks: [],
    typeName: Se.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Pe(e)
  });
};
function k4(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, a = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return a % s / Math.pow(10, o);
}
class Wn extends ke {
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
    const o = new vt();
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
      }), o.dirty()) : a.kind === "multipleOf" ? k4(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), ge(r, {
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
    return new Wn({
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
    return new Wn({
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
Wn.create = (e) => new Wn({
  checks: [],
  typeName: Se.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Pe(e)
});
class zn extends ke {
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
    return new zn({
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
    return new zn({
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
zn.create = (e) => {
  var t;
  return new zn({
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
class pr extends ke {
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
      }), r.dirty()) : Ie.assertNever(a);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new pr({
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
pr.create = (e) => new pr({
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
class qr extends ke {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return yt(t.data);
  }
}
qr.create = (e) => new qr({
  typeName: Se.ZodAny,
  ...Pe(e)
});
class rr extends ke {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return yt(t.data);
  }
}
rr.create = (e) => new rr({
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
      return Promise.all([...n.data].map((s, i) => o.type._parseAsync(new on(n, s, n.path, i)))).then((s) => vt.mergeArray(r, s));
    const a = [...n.data].map((s, i) => o.type._parseSync(new on(n, s, n.path, i)));
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
  typeName: Se.ZodArray,
  ...Pe(t)
});
function Rr(e) {
  if (e instanceof Xe) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = gn.create(Rr(r));
    }
    return new Xe({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof Yt ? new Yt({
      ...e._def,
      type: Rr(e.element)
    }) : e instanceof gn ? gn.create(Rr(e.unwrap())) : e instanceof vr ? vr.create(Rr(e.unwrap())) : e instanceof an ? an.create(e.items.map((t) => Rr(t))) : e;
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
    }).then((l) => vt.mergeObjectSync(r, l)) : vt.mergeObjectSync(r, c);
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
    return Rr(this);
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
    return gb(Ie.objectKeys(this.shape));
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
const Qa = (e) => e instanceof qo ? Qa(e.schema) : e instanceof Gt ? Qa(e.innerType()) : e instanceof Xo ? [e.value] : e instanceof Bn ? e.options : e instanceof Jo ? Object.keys(e.enum) : e instanceof Qo ? Qa(e._def.innerType) : e instanceof Yo ? [void 0] : e instanceof Ho ? [null] : null;
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
  const n = Rn(e), r = Rn(t);
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
    return r.common.async ? Promise.all(a).then((s) => vt.mergeArray(n, s)) : vt.mergeArray(n, a);
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
    return r.common.async ? vt.mergeObjectAsync(n, o) : vt.mergeObjectSync(n, o);
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
      keyType: Ut.create(),
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
class mr extends ke {
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
    return new mr({
      ...this._def,
      minSize: { value: t, message: _e.toString(n) }
    });
  }
  max(t, n) {
    return new mr({
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
mr.create = (e, t) => new mr({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Se.ZodSet,
  ...Pe(t)
});
class Fr extends ke {
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
    return this._def.returns instanceof Xr ? yt(async (...i) => {
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
    return new Fr({
      ...this._def,
      args: an.create(t).rest(rr.create())
    });
  }
  returns(t) {
    return new Fr({
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
    return new Fr({
      args: t || an.create([]).rest(rr.create()),
      returns: n || rr.create(),
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
function gb(e, t) {
  return new Bn({
    values: e,
    typeName: Se.ZodEnum,
    ...Pe(t)
  });
}
class Bn extends ke {
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
    return Bn.create(t);
  }
  exclude(t) {
    return Bn.create(this.options.filter((n) => !t.includes(n)));
  }
}
Bn.create = gb;
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
class Xr extends ke {
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
Xr.create = (e, t) => new Xr({
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
class vr extends ke {
  _parse(t) {
    return this._getType(t) === me.null ? yt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
vr.create = (e, t) => new vr({
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
const O4 = Symbol("zod_brand");
class bb extends ke {
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
        return a.status === "aborted" ? Te : a.status === "dirty" ? (n.dirty(), hb(a.value)) : this._def.out._parseAsync({
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
const xb = (e, t = {}, n) => e ? qr.create().superRefine((r, o) => {
  var a, s;
  if (!e(r)) {
    const i = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (s = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0, l = typeof i == "string" ? { message: i } : i;
    o.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : qr.create(), M4 = {
  object: Xe.lazycreate
};
var Se;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline";
})(Se || (Se = {}));
const D4 = (e, t = {
  message: `Input not instance of ${e.name}`
}) => xb((n) => n instanceof e, t), yb = Ut.create, $b = Wn.create, R4 = Ps.create, A4 = zn.create, wb = Bo.create, I4 = pr.create, j4 = Es.create, L4 = Yo.create, F4 = Ho.create, V4 = qr.create, U4 = rr.create, W4 = Cn.create, z4 = Ss.create, B4 = Yt.create, Y4 = Xe.create, H4 = Xe.strictCreate, K4 = Ko.create, G4 = mi.create, Z4 = Go.create, q4 = an.create, X4 = Zo.create, J4 = Ns.create, Q4 = mr.create, e7 = Fr.create, t7 = qo.create, n7 = Xo.create, r7 = Bn.create, o7 = Jo.create, a7 = Xr.create, Pf = Gt.create, s7 = gn.create, i7 = vr.create, c7 = Gt.createWithPreprocess, l7 = Na.create, u7 = () => yb().optional(), d7 = () => $b().optional(), f7 = () => wb().optional(), p7 = {
  string: (e) => Ut.create({ ...e, coerce: !0 }),
  number: (e) => Wn.create({ ...e, coerce: !0 }),
  boolean: (e) => Bo.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => zn.create({ ...e, coerce: !0 }),
  date: (e) => pr.create({ ...e, coerce: !0 })
}, m7 = Te;
var kf = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: zo,
  setErrorMap: b4,
  getErrorMap: $s,
  makeIssue: ws,
  EMPTY_PATH: x4,
  addIssueToContext: ge,
  ParseStatus: vt,
  INVALID: Te,
  DIRTY: hb,
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
  getParsedType: Rn,
  ZodType: ke,
  ZodString: Ut,
  ZodNumber: Wn,
  ZodBigInt: zn,
  ZodBoolean: Bo,
  ZodDate: pr,
  ZodSymbol: Es,
  ZodUndefined: Yo,
  ZodNull: Ho,
  ZodAny: qr,
  ZodUnknown: rr,
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
  ZodSet: mr,
  ZodFunction: Fr,
  ZodLazy: qo,
  ZodLiteral: Xo,
  ZodEnum: Bn,
  ZodNativeEnum: Jo,
  ZodPromise: Xr,
  ZodEffects: Gt,
  ZodTransformer: Gt,
  ZodOptional: gn,
  ZodNullable: vr,
  ZodDefault: Qo,
  ZodCatch: Ts,
  ZodNaN: Ps,
  BRAND: O4,
  ZodBranded: bb,
  ZodPipeline: Na,
  custom: xb,
  Schema: ke,
  ZodSchema: ke,
  late: M4,
  get ZodFirstPartyTypeKind() {
    return Se;
  },
  coerce: p7,
  any: V4,
  array: B4,
  bigint: A4,
  boolean: wb,
  date: I4,
  discriminatedUnion: G4,
  effect: Pf,
  enum: r7,
  function: e7,
  instanceof: D4,
  intersection: Z4,
  lazy: t7,
  literal: n7,
  map: J4,
  nan: R4,
  nativeEnum: o7,
  never: W4,
  null: F4,
  nullable: i7,
  number: $b,
  object: Y4,
  oboolean: f7,
  onumber: d7,
  optional: s7,
  ostring: u7,
  pipeline: l7,
  preprocess: c7,
  promise: a7,
  record: X4,
  set: Q4,
  strictObject: H4,
  string: yb,
  symbol: j4,
  transformer: Pf,
  tuple: q4,
  undefined: L4,
  union: K4,
  unknown: U4,
  void: z4,
  NEVER: m7,
  ZodIssueCode: ae,
  quotelessJson: g4,
  ZodError: Bt
});
const v7 = () => {
  const { showFilters: e, setShowFilters: t } = at(Xn);
  return /* @__PURE__ */ f.exports.jsxs(
    Qe,
    {
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ f.exports.jsx(f4, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, h7 = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = at(Xn), l = (u) => {
    c(u);
  };
  return /* @__PURE__ */ f.exports.jsxs(ir, { children: [
    /* @__PURE__ */ f.exports.jsx(cr, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Qe, { variant: "outline", size: "sm", className: "py-5 border-dashed", children: [
      n || /* @__PURE__ */ f.exports.jsx(p4, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(au, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          Wt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ f.exports.jsxs(
          Wt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((u) => u.selected).map((u) => /* @__PURE__ */ f.exports.jsx(
          Wt,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: u.label
          },
          u.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ f.exports.jsx(Vn, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ f.exports.jsxs(Un, { children: [
      /* @__PURE__ */ f.exports.jsx(ur, { placeholder: r }),
      /* @__PURE__ */ f.exports.jsxs(ri, { children: [
        /* @__PURE__ */ f.exports.jsx(dr, { children: "Sin Resultados" }),
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
                  className: R(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    u.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ f.exports.jsx(en, { className: R("h-4 w-4") })
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
}, g7 = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ f.exports.jsxs(ir, { children: [
  /* @__PURE__ */ f.exports.jsx(cr, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Qe, { variant: "outline", size: "sm", className: "py-5 border-dashed", children: [
    /* @__PURE__ */ f.exports.jsx(qf, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    /* @__PURE__ */ f.exports.jsx(au, { orientation: "vertical", className: "mx-2 h-4" }),
    /* @__PURE__ */ f.exports.jsx(
      Wt,
      {
        variant: "secondary",
        className: "rounded-sm px-1 font-normal",
        children: o || "Buscar "
      }
    )
  ] }) }),
  /* @__PURE__ */ f.exports.jsxs(Vn, { className: "w-fit p-4", align: "start", children: [
    /* @__PURE__ */ f.exports.jsxs(Sn, { htmlFor: e, children: [
      "Buscar ",
      n
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      qm,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), b7 = ({ form: e, onSubmit: t }) => {
  const { queries: n, filters: r, showFilters: o, resetFilters: a } = at(Xn), s = e.watch(n.map((c) => c.id)), i = () => {
    a();
  };
  return /* @__PURE__ */ f.exports.jsx("div", { className: "w-10/12 flex items-center justify-between", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-col items-start gap-x-2 gap-y-2", children: [
    /* @__PURE__ */ f.exports.jsx("form", { onSubmit: e.handleSubmit(t), className: "w-full flex justify-start items-center sm:mr-4", children: /* @__PURE__ */ f.exports.jsx("section", { className: "mr-3 flex justify-start items-center gap-x-3", children: n.map((c, l) => /* @__PURE__ */ f.exports.jsx(
      g7,
      {
        queryText: s[l],
        label: c.label,
        id: c.id,
        form: e
      },
      c.id
    )) }) }),
    r != null && r.length ? /* @__PURE__ */ f.exports.jsxs("div", { className: "w-auto h-full flex flex-wrap gap-x-3 gap-y-2 justify-start items-center", children: [
      /* @__PURE__ */ f.exports.jsx(v7, {}),
      o && r && r.map((c) => /* @__PURE__ */ f.exports.jsx(
        h7,
        {
          onSubmit: t,
          form: e,
          id: c.id,
          icon: c.icon,
          label: c.label,
          options: c.options
        },
        c.id
      )),
      o && (r == null ? void 0 : r.length) && /* @__PURE__ */ f.exports.jsxs(
        Qe,
        {
          type: "submit",
          variant: "ghost",
          onClick: i,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ f.exports.jsx(al, { className: "ml-2 h-4 w-4" })
          ]
        }
      )
    ] }) : null
  ] }) });
}, x7 = ({ onSubmitTable: e, loading: t }) => {
  const { queries: n, getFiltersWithOptionsSelected: r, getGlobalFilters: o, filters: a, pagination: { page: s, limit: i }, setSearchForm: c } = at(Xn), l = z2({
    defaultValues: n.reduce((d, p) => (d[p.id] = "", d), {}),
    resolver: X3(kf.object(
      n.reduce((d, p) => (d[p.id] = kf.string().optional(), d), {})
    ))
  }), u = async (d) => {
    var v;
    console.log({ data: d });
    const p = r(), m = [];
    (v = Object.entries(d)) == null || v.forEach((h) => {
      h[1] && m.push({
        field: h[0],
        text: h[1]
      });
    }), e({ queries: m, filters: p, limit: i, page: s });
  };
  return Q(() => c(l), [l]), !(n != null && n.length) && !(a != null && a.length) ? /* @__PURE__ */ f.exports.jsx("div", {}) : /* @__PURE__ */ f.exports.jsx(H2, { ...l, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || a != null && a.length ? /* @__PURE__ */ f.exports.jsx(b7, { form: l, onSubmit: u }) : /* @__PURE__ */ f.exports.jsx("div", {}),
    /* @__PURE__ */ f.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ f.exports.jsx(
      Qe,
      {
        type: "submit",
        onClick: l.handleSubmit(u),
        disabled: t,
        className: "ml-auto py-5 whitespace-nowrap",
        children: t ? /* @__PURE__ */ f.exports.jsx(Hf, {}) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(h4, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, y7 = () => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), $7 = () => /* @__PURE__ */ f.exports.jsxs(uu, { children: [
  /* @__PURE__ */ f.exports.jsx(ib, {}),
  /* @__PURE__ */ f.exports.jsx(cb, {})
] }), w7 = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function n8(e) {
  const { data: t, columns: n, loading: r, error: o } = e, [a, s] = G(!1), [i, c] = G([]), [l, u] = G(), [d, p] = G((e == null ? void 0 : e.pagination) ?? w7), m = pe((b) => e.onSubmitTable({ ...b }), [e]), v = pe((b) => {
    var S;
    p(b);
    const $ = l.getValues(), _ = [];
    (S = Object.entries($)) == null || S.forEach((P) => {
      P[1] && _.push({
        field: P[0],
        text: P[1]
      });
    });
    const w = i.map((P) => ({
      id: P.id,
      label: P.label,
      options: P.options.filter((D) => D.selected).map((D) => D.value)
    })).filter((P) => P.options.length > 0);
    m({ filters: w, queries: _, limit: b.limit, page: b.page });
  }, [i, m, l]), h = pe(() => {
    v({ ...d, page: d.page + 1 });
  }, [d, v]), g = pe(() => {
    d.page > 1 && v({ ...d, page: d.page - 1 });
  }, [d, v]);
  Q(() => {
    if (!(i != null && i.length)) {
      const b = (_) => (_ == null ? void 0 : _.filters) && (_ == null ? void 0 : _.filters.length), $ = n.filter(b).map((_) => {
        const w = _.filters.map((P) => ({ ...P, selected: !1 }));
        return { ..._, id: _.id, options: w };
      });
      c($);
    }
  }, [n, i == null ? void 0 : i.length]), Q(() => {
    p((b) => ({
      ...b,
      hasNextPage: e.pagination.hasNextPage,
      hasPrevPage: e.pagination.hasPrevPage
    }));
  }, [e.pagination.hasNextPage, e.pagination.hasNextPage]);
  const y = {
    data: t,
    columns: n,
    pagination: d,
    showFilters: a,
    filters: i,
    queries: n.filter((b) => b.isQuery).map((b) => ({
      id: b.id,
      label: b.label
    })),
    onSubmitTable: m,
    getFilterOptionsSelectedById: (b) => {
      const $ = i.find((_) => _.id === b);
      return $ ? $.options.filter((w) => w.selected).map((w) => w.value) : [];
    },
    getGlobalFilters: () => i,
    getFiltersWithOptionsSelected: () => i.map((b) => ({
      id: b.id,
      label: b.label,
      options: b.options.filter(($) => $.selected).map(($) => $.value)
    })).filter((b) => b.options.length > 0),
    selectOptionFilter: (b, $, _) => {
      const w = i.map((S) => S.id === b ? {
        ...S,
        options: S.options.map((P) => P.id === $ ? { ...P, selected: _ } : P)
      } : S);
      c(w);
    },
    resetOptionsByFilter: (b) => {
      const $ = i.map((_) => _.id === b ? {
        ..._,
        options: _.options.map((w) => ({ ...w, selected: !1 }))
      } : _);
      c($);
    },
    resetFilters: () => {
      const b = i.map(($) => ({
        ...$,
        options: $.options.map((_) => ({ ..._, selected: !1 }))
      }));
      c(b);
    },
    setShowFilters: (b) => s(b),
    updateLimit: (b) => v({ ...d, limit: b }),
    searchForm: l,
    nextPage: h,
    setSearchForm: (b) => u(b),
    prevPage: g
  };
  return /* @__PURE__ */ f.exports.jsx(Xn.Provider, { value: { ...y }, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
    /* @__PURE__ */ f.exports.jsx(x7, { onSubmitTable: m, loading: r }),
    /* @__PURE__ */ f.exports.jsxs("div", { className: "rounded-md border", children: [
      r && /* @__PURE__ */ f.exports.jsx(G3, {}),
      !r && o && /* @__PURE__ */ f.exports.jsx(y7, {}),
      !r && !o && !t && /* @__PURE__ */ f.exports.jsx($7, {}),
      !r && !o && t && /* @__PURE__ */ f.exports.jsx(H3, {})
    ] }),
    !r && !o && t && /* @__PURE__ */ f.exports.jsx(z3, {})
  ] }) });
}
const r8 = ({
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
  yr,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: d, formState: p }) => {
      var m;
      return /* @__PURE__ */ f.exports.jsxs(Zn, { className: R("w-full", c), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ f.exports.jsxs($r, { className: "flex", children: [
            t,
            " "
          ] }),
          ((m = p == null ? void 0 : p.errors[e]) == null ? void 0 : m.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            p.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(so, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsxs(hv, { onValueChange: d.onChange, defaultValue: d.value, disabled: u, children: [
          /* @__PURE__ */ f.exports.jsx(va, { children: /* @__PURE__ */ f.exports.jsx(nu, { disabled: u, tabIndex: i, className: R("w-full", l), children: /* @__PURE__ */ f.exports.jsx(gv, { placeholder: r }) }) }),
          /* @__PURE__ */ f.exports.jsx(ru, { children: a.map((v) => {
            var h, g;
            return /* @__PURE__ */ f.exports.jsx(ou, { value: (h = v.value) == null ? void 0 : h.toString(), children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-center items-center", children: [
              (v == null ? void 0 : v.icon) && /* @__PURE__ */ f.exports.jsx("div", { className: "dark:text-white mr-2 h-5", children: v.icon }),
              v.label
            ] }) }, (g = v.value) == null ? void 0 : g.toString());
          }) })
        ] })
      ] });
    }
  }
);
function vi() {
  return (vi = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function _b(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function Gc(e) {
  var t = j(e), n = j(function(r) {
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
}, Cb = T.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = _b(e, ["onMove", "onKey"]), o = j(null), a = Gc(t), s = Gc(n), i = j(null), c = j(!1), l = xt(function() {
    var m = function(g) {
      Mf(g), (To(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(Of(o.current, g, i.current)) : h(!1);
    }, v = function() {
      return h(!1);
    };
    function h(g) {
      var y = c.current, b = Zc(o.current), $ = g ? b.addEventListener : b.removeEventListener;
      $(y ? "touchmove" : "mousemove", m), $(y ? "touchend" : "mouseup", v);
    }
    return [function(g) {
      var y = g.nativeEvent, b = o.current;
      if (b && (Mf(y), !function(_, w) {
        return w && !To(_);
      }(y, c.current) && b)) {
        if (To(y)) {
          c.current = !0;
          var $ = y.changedTouches || [];
          $.length && (i.current = $[0].identifier);
        }
        b.focus(), a(Of(b, y, i.current)), h(!0);
      }
    }, function(g) {
      var y = g.which || g.keyCode;
      y < 37 || y > 40 || (g.preventDefault(), s({ left: y === 39 ? 0.05 : y === 37 ? -0.05 : 0, top: y === 40 ? 0.05 : y === 38 ? -0.05 : 0 }));
    }, h];
  }, [s, a]), u = l[0], d = l[1], p = l[2];
  return Q(function() {
    return p;
  }, [p]), T.createElement("div", vi({}, r, { onTouchStart: u, onMouseDown: u, className: "react-colorful__interactive", ref: o, onKeyDown: d, tabIndex: 0, role: "slider" }));
}), Ou = function(e) {
  return e.filter(Boolean).join(" ");
}, Eb = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = Ou(["react-colorful__pointer", e.className]);
  return T.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, T.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, dt = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, _7 = function(e) {
  return T7(qc(e));
}, qc = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? dt(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? dt(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, C7 = function(e) {
  return N7(S7(e));
}, E7 = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: dt(e.h), s: dt(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: dt(o / 2), a: dt(r, 2) };
}, Xc = function(e) {
  var t = E7(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, S7 = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: dt(255 * [r, i, s, s, c, r][l]), g: dt(255 * [c, r, r, i, s, s][l]), b: dt(255 * [s, s, c, r, r, i][l]), a: dt(o, 2) };
}, Ha = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, N7 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? Ha(dt(255 * o)) : "";
  return "#" + Ha(t) + Ha(n) + Ha(r) + a;
}, T7 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: dt(60 * (i < 0 ? i + 6 : i)), s: dt(a ? s / a * 100 : 0), v: dt(a / 255 * 100), a: o };
}, P7 = T.memo(function(e) {
  var t = e.hue, n = e.onChange, r = Ou(["react-colorful__hue", e.className]);
  return T.createElement("div", { className: r }, T.createElement(Cb, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: ea(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": dt(t), "aria-valuemax": "360", "aria-valuemin": "0" }, T.createElement(Eb, { className: "react-colorful__hue-pointer", left: t / 360, color: Xc({ h: t, s: 100, v: 100, a: 1 }) })));
}), k7 = T.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: Xc({ h: t.h, s: 100, v: 100, a: 1 }) };
  return T.createElement("div", { className: "react-colorful__saturation", style: r }, T.createElement(Cb, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: ea(t.s + 100 * o.left, 0, 100), v: ea(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + dt(t.s) + "%, Brightness " + dt(t.v) + "%" }, T.createElement(Eb, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: Xc(t) })));
}), Sb = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, O7 = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || Sb(qc(e), qc(t));
};
function M7(e, t, n) {
  var r = Gc(n), o = G(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], i = j({ color: t, hsva: a });
  Q(function() {
    if (!e.equal(t, i.current.color)) {
      var l = e.toHsva(t);
      i.current = { hsva: l, color: t }, s(l);
    }
  }, [t, e]), Q(function() {
    var l;
    Sb(a, i.current.hsva) || e.equal(l = e.fromHsva(a), i.current.color) || (i.current = { hsva: a, color: l }, r(l));
  }, [a, e, r]);
  var c = pe(function(l) {
    s(function(u) {
      return Object.assign({}, u, l);
    });
  }, []);
  return [a, c];
}
var D7 = typeof window < "u" ? Ms : Q, R7 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Df = /* @__PURE__ */ new Map(), A7 = function(e) {
  D7(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !Df.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Df.set(t, n);
      var r = R7();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, I7 = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = _b(e, ["className", "colorModel", "color", "onChange"]), i = j(null);
  A7(i);
  var c = M7(n, o, a), l = c[0], u = c[1], d = Ou(["react-colorful", t]);
  return T.createElement("div", vi({}, s, { ref: i, className: d }), T.createElement(k7, { hsva: l, onChange: u }), T.createElement(P7, { hue: l.h, onChange: u, className: "react-colorful__last-control" }));
}, j7 = { defaultColor: "000", toHsva: _7, fromHsva: function(e) {
  return C7({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: O7 }, L7 = function(e) {
  return T.createElement(I7, vi({}, e, { colorModel: j7 }));
};
const o8 = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ f.exports.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ f.exports.jsx(L7, { color: e, onChange: t }),
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
function F7(e, t, n) {
  var r = G([]), o = r[0], a = r[1], s = j([]), i = pe(function(d, p) {
    var m = e(d, p), v = m[0], h = m[1];
    return a(function(g) {
      return [].concat(h.reverse(), g);
    }), v;
  }, [e]), c = Ds(i, n), l = c[0], u = c[1];
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
function Ft() {
  return Ft = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ft.apply(this, arguments);
}
function V7(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var hi = {
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
  hi[111 + bt] = "F" + bt;
for (bt = 65; bt < 91; bt += 1) {
  var Rf = /* @__PURE__ */ String.fromCharCode(bt);
  hi[bt] = [/* @__PURE__ */ Rf.toLowerCase(), /* @__PURE__ */ Rf.toUpperCase()];
}
for (bt = 96; bt < 106; bt += 1)
  hi[bt] = /* @__PURE__ */ String.fromCharCode(bt - 48);
function U7(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = hi[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var W7 = {
  getKey: U7
};
function Ka() {
}
function Nb(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function z7(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var B7 = ["refs"], sc = [], Y7 = ["autoFocus", "length", "validate", "format", "debug"], H7 = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], K7 = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], G7 = {
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
function Z7(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: q7(e.validate),
    fallback: null
  };
}
function Tb(e) {
  return Math.max(0, e - 1);
}
function Jc(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function q7(e) {
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
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = Jc(o + e.focusIdx - 1, e.codeLength), s = Nb(0, o).flatMap(function(i) {
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
  }), [Ft({}, e, {
    focusIdx: a
  }), s];
}
var X7 = function(t, n) {
  switch (n.type) {
    case "handle-key-down":
      switch (n.key) {
        case "Unidentified":
          return [Ft({}, t, {
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
          var r = Tb(t.focusIdx);
          return [Ft({}, t, {
            focusIdx: r
          }), [{
            type: "focus-input",
            idx: r
          }]];
        }
        case "ArrowRight": {
          var o = Jc(t.focusIdx, t.codeLength);
          return [Ft({}, t, {
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
          return [Ft({}, t, {
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
      var s = Ft({}, t, {
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
      return [Ft({}, t, {
        focusIdx: n.idx
      }), [{
        type: "focus-input",
        idx: n.idx
      }]];
    default:
      return [t, sc];
  }
};
function J7(e) {
  var t = e.refs, n = V7(e, B7);
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
          var s = Tb(r.idx);
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
var Q7 = /* @__PURE__ */ O(function(e, t) {
  var n = Ft({}, G7, e), r = n.autoFocus, o = n.length, a = z7([].concat(Y7, H7), n), s = j([]), i = J7(Ft({
    refs: s
  }, n)), c = F7(X7, i, Z7(n))[1];
  Xb(t, function() {
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
      var y = W7.getKey(g.nativeEvent);
      !K7.includes(y) && !g.ctrlKey && !g.altKey && !g.metaKey && g.nativeEvent.target instanceof HTMLInputElement && (g.preventDefault(), c({
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
  return T.createElement(T.Fragment, null, Nb(0, o).map(function(h) {
    return T.createElement("input", Object.assign({
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
const a8 = ({ onComplete: e, mode: t, length: n, disabled: r, tabIndex: o, autoFocus: a, containerClassName: s, className: i, ...c }) => {
  const [l] = T.useState(!1);
  return /* @__PURE__ */ f.exports.jsx("div", { className: R("pin-field-container", s), children: /* @__PURE__ */ f.exports.jsx(
    Q7,
    {
      className: R("pin-field", { complete: l }, i),
      onComplete: e,
      validate: t === "numeric" ? "0123456789" : "abcABC123",
      disabled: r,
      length: n,
      ...c
    }
  ) });
};
var Pb = {}, Mu = {};
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
var kb = {}, bn = {};
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
  }, n = it && it.__generator || function(a, s) {
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
    var s = a.fileList, i = a.value, c = a.maxNumber, l = a.keyUpdate, u = a.acceptType, d = a.maxFileSize, p = a.resolutionType, m = a.resolutionWidth, v = a.resolutionHeight, h = a.allowNonImageType;
    return t(void 0, void 0, void 0, function() {
      var g, y, b, $, _;
      return n(this, function(w) {
        switch (w.label) {
          case 0:
            return g = {}, e.isMaxNumberValid(s.length + i.length, c, l) ? [3, 1] : (g.maxNumber = !0, [3, 5]);
          case 1:
            y = 0, w.label = 2;
          case 2:
            return y < s.length ? (b = s[y].file, b ? !h && !e.isImageValid(b.type) ? (g.acceptType = !0, [3, 5]) : e.isAcceptTypeValid(u, b.name) ? e.isMaxFileSizeValid(b.size, d) ? p ? [4, o.getImage(b)] : [3, 4] : (g.maxFileSize = !0, [3, 5]) : (g.acceptType = !0, [3, 5]) : [3, 4]) : [3, 5];
          case 3:
            if ($ = w.sent(), _ = e.isResolutionValid($, p, m, v), !_)
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
})(kb);
var Qc = it && it.__assign || function() {
  return Qc = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Qc.apply(this, arguments);
}, ek = it && it.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), tk = it && it.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), nk = it && it.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && ek(t, e, n);
  return tk(t, e), t;
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
Object.defineProperty(Pb, "__esModule", { value: !0 });
var Lt = nk(T), uc = Mu, rk = kb, On = bn, ok = function(e) {
  var t = e.value, n = t === void 0 ? [] : t, r = e.onChange, o = e.onError, a = e.children, s = e.dataURLKey, i = s === void 0 ? On.DEFAULT_DATA_URL_KEY : s, c = e.multiple, l = c === void 0 ? !1 : c, u = e.maxNumber, d = u === void 0 ? On.INIT_MAX_NUMBER : u, p = e.acceptType, m = e.maxFileSize, v = e.resolutionWidth, h = e.resolutionHeight, g = e.resolutionType, y = e.inputProps, b = y === void 0 ? {} : y, $ = e.allowNonImageType, _ = $ === void 0 ? !1 : $, w = n || [], S = Lt.useRef(null), P = Lt.useState(On.DEFAULT_NULL_INDEX), D = P[0], I = P[1], ee = Lt.useState(null), re = ee[0], U = ee[1], H = Lt.useState(!1), B = H[0], Z = H[1], J = Lt.useCallback(function() {
    return uc.openFileDialog(S);
  }, [
    S
  ]), Y = Lt.useCallback(function() {
    I(On.DEFAULT_NULL_INDEX), J();
  }, [J]), q = Lt.useCallback(function() {
    r == null || r([]);
  }, [r]), A = function(X) {
    var he = lc(w);
    Array.isArray(X) ? X.forEach(function(K) {
      he.splice(K, 1);
    }) : he.splice(X, 1), r == null || r(he);
  }, M = function(X) {
    I(X), J();
  }, L = function(X) {
    return ic(void 0, void 0, void 0, function() {
      var he;
      return cc(this, function(K) {
        switch (K.label) {
          case 0:
            return [4, rk.getErrorValidation({
              fileList: X,
              maxFileSize: m,
              maxNumber: d,
              acceptType: p,
              keyUpdate: D,
              resolutionType: g,
              resolutionWidth: v,
              resolutionHeight: h,
              value: w,
              allowNonImageType: _
            })];
          case 1:
            return he = K.sent(), he ? (U(he), o == null || o(he, X), [2, !1]) : (re && U(null), [2, !0]);
        }
      });
    });
  }, W = function(X) {
    return ic(void 0, void 0, void 0, function() {
      var he, K, Re, Ve, lt, k;
      return cc(this, function(F) {
        switch (F.label) {
          case 0:
            return X ? [4, uc.getListFiles(X, i)] : [
              2
              /*return*/
            ];
          case 1:
            return he = F.sent(), he.length ? [4, L(he)] : [
              2
              /*return*/
            ];
          case 2:
            if (K = F.sent(), !K)
              return [
                2
                /*return*/
              ];
            if (Ve = [], D > On.DEFAULT_NULL_INDEX)
              lt = he[0], Re = lc(w), Re[D] = lt, Ve.push(D);
            else if (l)
              for (Re = lc(w, he), k = w.length; k < Re.length; k += 1)
                Ve.push(k);
            else
              Re = [he[0]], Ve.push(0);
            return r == null || r(Re, Ve), [
              2
              /*return*/
            ];
        }
      });
    });
  }, oe = function(X) {
    return ic(void 0, void 0, void 0, function() {
      return cc(this, function(he) {
        switch (he.label) {
          case 0:
            return [4, W(X.target.files)];
          case 1:
            return he.sent(), D > On.DEFAULT_NULL_INDEX && I(On.DEFAULT_NULL_INDEX), S.current && (S.current.value = ""), [
              2
              /*return*/
            ];
        }
      });
    });
  }, ce = Lt.useMemo(function() {
    return uc.getAcceptTypeString(p, _);
  }, [p, _]), ye = function(X) {
    X.preventDefault(), X.stopPropagation();
  }, be = function(X) {
    X.preventDefault(), X.stopPropagation(), X.dataTransfer.items && X.dataTransfer.items.length > 0 && Z(!0);
  }, te = function(X) {
    X.preventDefault(), X.stopPropagation(), Z(!1);
  }, le = function(X) {
    X.preventDefault(), X.stopPropagation(), Z(!1), X.dataTransfer.files && X.dataTransfer.files.length > 0 && W(X.dataTransfer.files);
  }, ve = function(X) {
    X.preventDefault(), X.stopPropagation(), X.dataTransfer.clearData();
  };
  return Lt.default.createElement(
    Lt.default.Fragment,
    null,
    Lt.default.createElement("input", Qc({ type: "file", accept: ce, ref: S, multiple: l && D === On.DEFAULT_NULL_INDEX, onChange: oe, style: { display: "none" } }, b)),
    a == null ? void 0 : a({
      imageList: w,
      onImageUpload: Y,
      onImageRemoveAll: q,
      onImageUpdate: M,
      onImageRemove: A,
      errors: re,
      dragProps: {
        onDrop: le,
        onDragEnter: be,
        onDragLeave: te,
        onDragOver: ye,
        onDragStart: ve
      },
      isDragging: B
    })
  );
}, Ob = Pb.default = ok;
const ak = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, Mb = ({
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
      const u = ak(l == null ? void 0 : l.toString(), t.name);
      c({ data_url: l, file: u });
    },
    i
  );
}), sk = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsxs(eo, { className: R("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(to, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(no, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(Is, {}) })
] });
function ik() {
  return T.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-unzoom-icon": !0, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    T.createElement("path", { d: "M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z" })
  );
}
function ck() {
  return T.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-zoom-icon": !0, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    T.createElement("path", { d: "M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z" })
  );
}
const ks = (e, t) => {
  var n, r;
  return e === ((r = (n = t == null ? void 0 : t.tagName) == null ? void 0 : n.toUpperCase) == null ? void 0 : r.call(n));
}, Du = (e) => ks("DIV", e) || ks("SPAN", e), Os = (e) => ks("IMG", e), If = (e) => e.complete && e.naturalHeight !== 0, el = (e) => ks("SVG", e), Db = ({ height: e, offset: t, width: n }) => Math.min((window.innerWidth - t * 2) / n, (window.innerHeight - t * 2) / e), lk = ({ containerHeight: e, containerWidth: t, offset: n, targetHeight: r, targetWidth: o }) => {
  const a = Db({
    height: r,
    offset: n,
    width: o
  }), s = o > r ? o / t : r / e;
  return a > 1 ? s : a * s;
}, or = ({ containerHeight: e, containerWidth: t, hasScalableSrc: n, offset: r, targetHeight: o, targetWidth: a }) => !e || !t ? 1 : !n && o && a ? lk({
  containerHeight: e,
  containerWidth: t,
  offset: r,
  targetHeight: o,
  targetWidth: a
}) : Db({
  height: e,
  offset: r,
  width: t
}), uk = /url(?:\(['"]?)(.*?)(?:['"]?\))/, jf = (e) => {
  var t;
  if (e) {
    if (Os(e))
      return e.currentSrc;
    if (Du(e)) {
      const n = window.getComputedStyle(e).backgroundImage;
      if (n)
        return (t = uk.exec(n)) == null ? void 0 : t[1];
    }
  }
}, dk = (e) => {
  if (e)
    return Os(e) ? e.alt ?? void 0 : e.getAttribute("aria-label") ?? void 0;
}, fk = ({ containerHeight: e, containerLeft: t, containerTop: n, containerWidth: r, hasScalableSrc: o, offset: a, targetHeight: s, targetWidth: i }) => {
  const c = or({
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
}, pk = ({ containerHeight: e, containerLeft: t, containerTop: n, containerWidth: r, hasScalableSrc: o, objectFit: a, objectPosition: s, offset: i, targetHeight: c, targetWidth: l }) => {
  if (a === "scale-down" && (l <= r && c <= e ? a = "none" : a = "contain"), a === "cover" || a === "contain") {
    const u = r / l, d = e / c, p = a === "cover" ? Math.max(u, d) : Math.min(u, d), [m = "50%", v = "50%"] = s.split(" "), h = Dt({ position: m, relativeNum: r - l * p }), g = Dt({ position: v, relativeNum: e - c * p }), y = or({
      containerHeight: c * p,
      containerWidth: l * p,
      hasScalableSrc: o,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: n + g,
      left: t + h,
      width: l * p * y,
      height: c * p * y,
      transform: `translate(0,0) scale(${1 / y})`
    };
  } else if (a === "none") {
    const [u = "50%", d = "50%"] = s.split(" "), p = Dt({ position: u, relativeNum: r - l }), m = Dt({ position: d, relativeNum: e - c }), v = or({
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
      width: l * v,
      height: c * v,
      transform: `translate(0,0) scale(${1 / v})`
    };
  } else if (a === "fill") {
    const u = r / l, d = e / c, p = Math.max(u, d), m = or({
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
}, mk = ({ backgroundPosition: e, backgroundSize: t, containerHeight: n, containerLeft: r, containerTop: o, containerWidth: a, hasScalableSrc: s, offset: i, targetHeight: c, targetWidth: l }) => {
  if (t === "cover" || t === "contain") {
    const u = a / l, d = n / c, p = t === "cover" ? Math.max(u, d) : Math.min(u, d), [m = "50%", v = "50%"] = e.split(" "), h = Dt({ position: m, relativeNum: a - l * p }), g = Dt({ position: v, relativeNum: n - c * p }), y = or({
      containerHeight: c * p,
      containerWidth: l * p,
      hasScalableSrc: s,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: o + g,
      left: r + h,
      width: l * p * y,
      height: c * p * y,
      transform: `translate(0,0) scale(${1 / y})`
    };
  } else if (t === "auto") {
    const [u = "50%", d = "50%"] = e.split(" "), p = Dt({ position: u, relativeNum: a - l }), m = Dt({ position: d, relativeNum: n - c }), v = or({
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
      width: l * v,
      height: c * v,
      transform: `translate(0,0) scale(${1 / v})`
    };
  } else {
    const [u = "50%", d = "50%"] = t.split(" "), p = Dt({ position: u, relativeNum: a }), m = Dt({ position: d, relativeNum: n }), v = p / l, h = m / c, g = Math.min(v, h), [y = "50%", b = "50%"] = e.split(" "), $ = Dt({ position: y, relativeNum: a - l * g }), _ = Dt({ position: b, relativeNum: n - c * g }), w = or({
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
}, vk = /\.svg$/i, hk = ({ hasZoomImg: e, imgSrc: t, isSvg: n, isZoomed: r, loadedImgEl: o, offset: a, shouldRefresh: s, targetEl: i }) => {
  var y;
  const c = n || ((y = t == null ? void 0 : t.slice) == null ? void 0 : y.call(t, 0, 18)) === "data:image/svg+xml" || e || !!(t && vk.test(t)), l = i.getBoundingClientRect(), u = window.getComputedStyle(i), d = o != null && Du(i), p = o != null && !d, m = fk({
    containerHeight: l.height,
    containerLeft: l.left,
    containerTop: l.top,
    containerWidth: l.width,
    hasScalableSrc: c,
    offset: a,
    targetHeight: (o == null ? void 0 : o.naturalHeight) ?? l.height,
    targetWidth: (o == null ? void 0 : o.naturalWidth) ?? l.width
  }), v = p ? pk({
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
  }) : void 0, h = d ? mk({
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
  }) : void 0, g = Object.assign({}, m, v, h);
  if (r) {
    const b = window.innerWidth / 2, $ = window.innerHeight / 2, _ = parseFloat(String(g.left || 0)) + parseFloat(String(g.width || 0)) / 2, w = parseFloat(String(g.top || 0)) + parseFloat(String(g.height || 0)) / 2, S = b - _, P = $ - w;
    s && (g.transitionDuration = "0.01ms"), g.transform = `translate(${S}px,${P}px) scale(1)`;
  }
  return g;
}, gk = (e) => {
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
const bk = ["img", "svg", '[role="img"]', "[data-zoom]"].map((e) => `${e}:not([aria-hidden="true"])`).join(","), Lf = {
  overflow: "",
  width: ""
};
function xk(e) {
  return T.createElement(Rb, { ...e });
}
class Rb extends Jb {
  constructor() {
    super(...arguments), this.state = {
      id: "",
      isZoomImgLoaded: !1,
      loadedImgEl: void 0,
      modalState: "UNLOADED",
      shouldRefresh: !1
    }, this.refContent = ho(), this.refDialog = ho(), this.refModalContent = ho(), this.refModalImg = ho(), this.refWrap = ho(), this.imgEl = null, this.prevBodyAttrs = Lf, this.styleModalImg = {}, this.setId = () => {
      const t = () => Math.random().toString(16).slice(-4);
      this.setState({ id: t() + t() + t() });
    }, this.setAndTrackImg = () => {
      var n, r, o, a, s, i;
      const t = this.refContent.current;
      t && (this.imgEl = t.querySelector(bk), this.imgEl ? ((r = (n = this.changeObserver) == null ? void 0 : n.disconnect) == null || r.call(n), (a = (o = this.imgEl) == null ? void 0 : o.addEventListener) == null || a.call(o, "load", this.handleImgLoad), (i = (s = this.imgEl) == null ? void 0 : s.addEventListener) == null || i.call(s, "click", this.handleZoom), this.state.loadedImgEl || this.handleImgLoad(), this.imgElObserver = new ResizeObserver((c) => {
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
    const { handleDialogCancel: t, handleDialogClick: n, handleUnzoom: r, handleZoom: o, imgEl: a, props: { a11yNameButtonUnzoom: s, a11yNameButtonZoom: i, children: c, classDialog: l, IconUnzoom: u, IconZoom: d, isZoomed: p, wrapElement: m, ZoomContent: v, zoomImg: h, zoomMargin: g }, refContent: y, refDialog: b, refModalContent: $, refModalImg: _, refWrap: w, state: { id: S, isZoomImgLoaded: P, loadedImgEl: D, modalState: I, shouldRefresh: ee } } = this, re = `rmiz-modal-${S}`, U = `rmiz-modal-img-${S}`, H = Du(a), B = Os(a), Z = el(a), J = dk(a), Y = jf(a), q = B ? a.sizes : void 0, A = B ? a.srcset : void 0, M = !!(h != null && h.src), L = a && (D || Z) && window.getComputedStyle(a).display !== "none", W = J ? `${i}: ${J}` : i, oe = I === "LOADING" || I === "LOADED", ce = L ? "found" : "not-found", ye = I === "UNLOADED" || I === "UNLOADING" ? "hidden" : "visible", be = {
      visibility: I === "UNLOADED" ? "visible" : "hidden"
    }, te = gk(a);
    this.styleModalImg = L ? hk({
      hasZoomImg: M,
      imgSrc: Y,
      isSvg: Z,
      isZoomed: p && oe,
      loadedImgEl: D,
      offset: g,
      shouldRefresh: ee,
      targetEl: a
    }) : {};
    let le = null;
    if (L) {
      const ve = B || H ? T.createElement("img", { alt: J, sizes: q, src: Y, srcSet: A, ...P && I === "LOADED" ? h : {}, "data-rmiz-modal-img": "", height: this.styleModalImg.height || void 0, id: U, ref: _, style: this.styleModalImg, width: this.styleModalImg.width || void 0 }) : Z ? T.createElement("div", { "data-rmiz-modal-img": !0, ref: _, style: this.styleModalImg }) : null, X = T.createElement(
        "button",
        { "aria-label": s, "data-rmiz-btn-unzoom": "", onClick: r, type: "button" },
        T.createElement(u, null)
      );
      le = v ? T.createElement(v, { buttonUnzoom: X, modalState: I, img: ve, onUnzoom: r }) : T.createElement(
        T.Fragment,
        null,
        ve,
        X
      );
    }
    return T.createElement(
      m,
      { "aria-owns": re, "data-rmiz": "", ref: w },
      T.createElement(m, { "data-rmiz-content": ce, ref: y, style: be }, c),
      L && T.createElement(
        m,
        { "data-rmiz-ghost": "", style: te },
        T.createElement(
          "button",
          { "aria-label": W, "data-rmiz-btn-zoom": "", onClick: o, type: "button" },
          T.createElement(d, null)
        )
      ),
      L && Po != null && nl(T.createElement(
        "dialog",
        { "aria-labelledby": U, "aria-modal": "true", className: l, "data-rmiz-modal": "", id: re, onClick: n, onClose: r, onCancel: t, ref: b, role: "dialog" },
        T.createElement("div", { "data-rmiz-modal-overlay": ye }),
        T.createElement("div", { "data-rmiz-modal-content": "", ref: $ }, le)
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
Rb.defaultProps = {
  a11yNameButtonUnzoom: "Minimize image",
  a11yNameButtonZoom: "Expand image",
  IconUnzoom: ik,
  IconZoom: ck,
  wrapElement: "div",
  zoomMargin: 0
};
function Ab(e) {
  const [t, n] = G(!1);
  return T.createElement(xk, { ...e, isZoomed: t, onZoomChange: n });
}
const yk = ({ src: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsx(Ab, { children: /* @__PURE__ */ f.exports.jsxs(eo, { className: R("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(to, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(no, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(Is, {}) })
] }) }), $k = ({ imageIndex: e, compress: t, disabled: n, tabIndexs: r, onImageUpdate: o, setUploadImage: a, onImageRemove: s, setLocalImage: i }) => n ? null : /* @__PURE__ */ f.exports.jsxs("div", { className: "mt-2 gap-x-2 w-full flex flex-col justify-center items-end gap-y-2 absolute top-2 right-2", children: [
  (t == null ? void 0 : t.openComparisons) && /* @__PURE__ */ f.exports.jsx(
    Qe,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: r == null ? void 0 : r.viewCompress,
      onClick: () => t.openComparisons(),
      className: "text-green-600 backdrop-blur-sm border-green-600 bg-green-600 bg-opacity-10 hover:bg-green-600 hover:bg-opacity-25 hover:text-green-600",
      children: /* @__PURE__ */ f.exports.jsx(mb, { size: 16 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Qe,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: r == null ? void 0 : r.change,
      onClick: () => o(e),
      className: "text-yellow-600 backdrop-blur-sm border-yellow-600 bg-yellow-600 bg-opacity-10 hover:bg-yellow-600 hover:bg-opacity-25 hover:text-yellow-600",
      children: /* @__PURE__ */ f.exports.jsx(Zf, { size: 14 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Qe,
    {
      tabIndex: r == null ? void 0 : r.delete,
      type: "button",
      size: "icon",
      variant: "outline",
      onClick: () => {
        s(e), i([]), a({ original: null, compressed: null });
      },
      className: "text-red-700 backdrop-blur-sm border-red-700 bg-red-700 bg-opacity-10 hover:bg-red-700 hover:bg-opacity-25 hover:text-red-700",
      children: /* @__PURE__ */ f.exports.jsx(Xf, { size: 14 })
    }
  )
] }), wk = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, onImageUpload: a }) => /* @__PURE__ */ f.exports.jsxs(
  "div",
  {
    ...e,
    className: R(
      `${t ? "border-indigo-600" : "border-gray-300"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center",
      n
    ),
    children: [
      /* @__PURE__ */ f.exports.jsx(
        Qe,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          className: `mt-2 ${t && "text-indigo-600"}`,
          onClick: a,
          children: /* @__PURE__ */ f.exports.jsx(Gf, { size: 22 })
        }
      ),
      /* @__PURE__ */ f.exports.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), s8 = ({
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
  const [d, p] = G(e ? [{ data_url: e, file: null }] : []), m = async (v, h) => {
    var $, _, w, S, P, D, I;
    const g = ($ = v[0]) == null ? void 0 : $.file, y = (_ = v[0]) == null ? void 0 : _.data_url;
    g || (p([]), t({ original: null, compressed: null })), p(v);
    const b = es((w = v[0]) == null ? void 0 : w.file.size);
    if (u != null && u.resizer && g) {
      const { data_url: ee, file: re } = await Mb({
        resizer: u == null ? void 0 : u.resizer,
        imageFile: g,
        quality: (n == null ? void 0 : n.quality) || 10,
        maxWidth: (n == null ? void 0 : n.width) || 500,
        maxHeight: (n == null ? void 0 : n.width) || 500,
        compressFormat: (n == null ? void 0 : n.extension) || "png",
        rotation: (n == null ? void 0 : n.rotation) || 0
      }), U = es(re.size);
      t({
        original: {
          preview: y,
          file: g,
          size: {
            formated: b,
            bytes: (S = v[0]) == null ? void 0 : S.file.size
          }
        },
        compressed: {
          preview: ee == null ? void 0 : ee.toString(),
          file: re,
          size: {
            formated: U,
            bytes: re.size
          }
        }
      });
      return;
    }
    t({
      original: {
        preview: (P = v[0]) == null ? void 0 : P.data_url,
        file: (D = v[0]) == null ? void 0 : D.file,
        size: { formated: b, bytes: (I = v[0]) == null ? void 0 : I.file.size }
      },
      compressed: null
    });
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full", children: [
    r && /* @__PURE__ */ f.exports.jsx(Sn, { children: r }),
    r && /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      Ob,
      {
        value: d,
        onChange: m,
        dataURLKey: "data_url",
        acceptType: ["webp", "png", "jpg", "jpeg"],
        children: ({ imageList: v, onImageUpload: h, onImageUpdate: g, onImageRemove: y, isDragging: b, dragProps: $ }) => /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: v.length >= 1 ? /* @__PURE__ */ f.exports.jsx("div", { children: v.map((_, w) => /* @__PURE__ */ f.exports.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
          l ? /* @__PURE__ */ f.exports.jsx(yk, { imageContainerClassName: c, src: _ == null ? void 0 : _.data_url }) : /* @__PURE__ */ f.exports.jsx(sk, { imageContainerClassName: c, previewUrl: _ == null ? void 0 : _.data_url }),
          /* @__PURE__ */ f.exports.jsx(
            $k,
            {
              disabled: s,
              imageIndex: w,
              setUploadImage: t,
              onImageRemove: y,
              onImageUpdate: g,
              compress: u,
              tabIndexs: a,
              setLocalImage: p
            }
          )
        ] }, w)) }) : /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
          wk,
          {
            dragProps: $,
            emptyClassName: i,
            isDragging: b,
            onImageUpload: h,
            tabIndexs: a,
            uploadLabel: o
          }
        ) }) })
      }
    )
  ] });
}, _k = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsxs(eo, { className: R("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(to, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(no, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(Is, {}) })
] }), Ck = ({ imageIndex: e, compress: t, tabIndexs: n, onImageUpdate: r, onImageRemove: o }) => /* @__PURE__ */ f.exports.jsxs("div", { className: "mt-2 gap-x-2 w-full flex flex-col justify-center items-end gap-y-2 absolute top-2 right-2", children: [
  (t == null ? void 0 : t.openComparisons) && /* @__PURE__ */ f.exports.jsx(
    Qe,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: n == null ? void 0 : n.viewCompress,
      onClick: () => t.openComparisons(),
      className: "whitespace-nowrap backdrop-blur-sm border-green-900 bg-green-900 bg-opacity-10 hover:bg-green-900 hover:bg-opacity-30",
      children: /* @__PURE__ */ f.exports.jsx(mb, { size: 16 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Qe,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: n == null ? void 0 : n.change,
      onClick: () => r(e),
      className: "backdrop-blur-sm border-yellow-600 bg-yellow-600 bg-opacity-10 hover:bg-yellow-600 hover:bg-opacity-30",
      children: /* @__PURE__ */ f.exports.jsx(Zf, { size: 14 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Qe,
    {
      tabIndex: n == null ? void 0 : n.delete,
      type: "button",
      size: "icon",
      variant: "outline",
      onClick: () => o(e),
      className: "backdrop-blur-sm border-red-900 bg-red-900 bg-opacity-10 hover:bg-red-900 hover:bg-opacity-30",
      children: /* @__PURE__ */ f.exports.jsx(Xf, { size: 14 })
    }
  )
] }), Ek = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsx(Ab, { children: /* @__PURE__ */ f.exports.jsxs(eo, { className: R("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(to, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(no, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(Is, {}) })
] }) }), Sk = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, onImageUpload: a }) => /* @__PURE__ */ f.exports.jsxs(
  "div",
  {
    ...e,
    className: R(
      `${t ? "border-indigo-600" : "border-gray-300"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center",
      n
    ),
    children: [
      /* @__PURE__ */ f.exports.jsx(
        Qe,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          className: `mt-2 ${t && "text-indigo-600"}`,
          onClick: a,
          children: /* @__PURE__ */ f.exports.jsx(Gf, { size: 22 })
        }
      ),
      /* @__PURE__ */ f.exports.jsx("span", { className: "font-medium text-zinc-500", children: "o arrastra y suelta las imagenes" })
    ]
  }
), i8 = ({
  label: e,
  setUploadImages: t,
  format: n,
  uploadLabel: r,
  tabIndexs: o,
  emptyClassName: a,
  imageContainerClassName: s,
  zoom: i,
  compress: c
}) => {
  const [l, u] = G([]), d = async (p, m) => {
    u(p);
    const v = p.map(async (h) => {
      var _, w, S, P;
      const { data_url: g, file: y } = await Mb({
        resizer: c.resizer,
        imageFile: h.file,
        quality: (n == null ? void 0 : n.quality) || 10,
        maxWidth: (n == null ? void 0 : n.width) || 500,
        maxHeight: (n == null ? void 0 : n.width) || 500,
        compressFormat: (n == null ? void 0 : n.extension) || "png",
        rotation: (n == null ? void 0 : n.rotation) || 0
      }), b = es((_ = p[0]) == null ? void 0 : _.file.size), $ = es(y.size);
      return {
        original: {
          preview: (w = p[0]) == null ? void 0 : w.data_url,
          file: (S = p[0]) == null ? void 0 : S.file,
          size: {
            formated: b,
            bytes: (P = p[0]) == null ? void 0 : P.file.size
          }
        },
        compressed: {
          preview: g == null ? void 0 : g.toString(),
          file: y,
          size: {
            formated: $,
            bytes: y.size
          }
        }
      };
    });
    Promise.all(v).then(t);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { children: [
    e && /* @__PURE__ */ f.exports.jsx(Sn, { children: e }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      Ob,
      {
        multiple: !0,
        value: l,
        dataURLKey: "data_url",
        onChange: d,
        acceptType: ["webp", "png", "jpeg", "jpg"],
        children: ({ imageList: p, onImageUpload: m, onImageUpdate: v, onImageRemove: h, isDragging: g, dragProps: y }) => /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: p.length >= 1 ? /* @__PURE__ */ f.exports.jsxs("div", { className: "grid grid-cols-2 grid-flow-row gap-4", children: [
          p.map((b, $) => /* @__PURE__ */ f.exports.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
            i ? /* @__PURE__ */ f.exports.jsx(Ek, { imageContainerClassName: s, previewUrl: b == null ? void 0 : b.data_url }) : /* @__PURE__ */ f.exports.jsx(_k, { imageContainerClassName: s, previewUrl: b == null ? void 0 : b.data_url }),
            /* @__PURE__ */ f.exports.jsx(
              Ck,
              {
                imageIndex: $,
                onImageRemove: h,
                onImageUpdate: v,
                compress: c,
                tabIndexs: o
              }
            )
          ] }, $)),
          /* @__PURE__ */ f.exports.jsx("div", { className: "imagen-container", children: /* @__PURE__ */ f.exports.jsx(
            "div",
            {
              ...y,
              className: R(`w-full h-[237px] ${g ? "border-indigo-600" : "border-slate-50"} flex flex-col justify-center items-center border-dashed border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`, s),
              children: /* @__PURE__ */ f.exports.jsx(
                Qe,
                {
                  type: "button",
                  variant: "outline",
                  className: "p-2 h-min",
                  onClick: m,
                  children: /* @__PURE__ */ f.exports.jsx(v4, { className: "w-8 h-8" })
                }
              )
            }
          ) })
        ] }) : /* @__PURE__ */ f.exports.jsx(
          Sk,
          {
            dragProps: y,
            emptyClassName: a,
            isDragging: g,
            onImageUpload: m,
            tabIndexs: o,
            uploadLabel: r
          }
        ) })
      }
    )
  ] });
};
function c8({
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
    yr,
    {
      control: t.control,
      name: e,
      defaultValue: i,
      render: ({ field: v }) => {
        var h;
        return /* @__PURE__ */ f.exports.jsxs(Zn, { className: "flex flex-col", children: [
          /* @__PURE__ */ f.exports.jsx(Sn, { children: n }),
          /* @__PURE__ */ f.exports.jsxs(ir, { open: p, onOpenChange: m, children: [
            /* @__PURE__ */ f.exports.jsx(cr, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Qe,
              {
                disabled: o,
                tabIndex: a,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: R("w-min justify-between", !v.value && "text-muted-foreground", `${u}`),
                children: [
                  v.value ? (h = r.find((g) => {
                    var y, b;
                    return ((y = g == null ? void 0 : g.value) == null ? void 0 : y.toUpperCase()) === ((b = v == null ? void 0 : v.value) == null ? void 0 : b.toUpperCase());
                  })) == null ? void 0 : h.label : l,
                  /* @__PURE__ */ f.exports.jsx(mc, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(Vn, { className: R("w-[200px] p-0", d), children: /* @__PURE__ */ f.exports.jsxs(Un, { children: [
              /* @__PURE__ */ f.exports.jsx(ur, { placeholder: s, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsx(dr, { children: c }),
              /* @__PURE__ */ f.exports.jsx(wn, { children: r.map((g) => /* @__PURE__ */ f.exports.jsxs(
                _n,
                {
                  value: g.value,
                  onSelect: (y) => {
                    t.setValue(e, y, { shouldDirty: !0 }), m(!1);
                  },
                  className: "w-full flex justify-start items-center",
                  children: [
                    (g == null ? void 0 : g.image) && /* @__PURE__ */ f.exports.jsx("img", { src: g.image, alt: g.label, width: 40, className: "mr-2" }),
                    (g == null ? void 0 : g.icon) && g.icon,
                    g.label,
                    /* @__PURE__ */ f.exports.jsx(
                      m4,
                      {
                        className: R(
                          "ml-auto h-4 w-4",
                          g.value === v.value ? "opacity-100" : "opacity-0"
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
function Nk({
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
  const [h, g] = G(!1);
  return t ? /* @__PURE__ */ f.exports.jsx(
    yr,
    {
      control: t.control,
      name: e,
      defaultValue: u,
      rules: o,
      render: ({ field: b, formState: $ }) => {
        var _, w, S;
        return /* @__PURE__ */ f.exports.jsxs(Zn, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ f.exports.jsxs($r, { className: "flex", children: [
            n,
            " ",
            ((w = (_ = $.errors) == null ? void 0 : _.pidType) == null ? void 0 : w.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              $.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsxs(ir, { open: h, onOpenChange: g, children: [
            /* @__PURE__ */ f.exports.jsx(cr, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Qe,
              {
                disabled: s,
                tabIndex: c,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: R("w-min justify-between", !b.value && "text-muted-foreground", `${m}`),
                children: [
                  b.value ? (S = r.find((P) => P.value === b.value)) == null ? void 0 : S.label : p,
                  /* @__PURE__ */ f.exports.jsx(mc, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(Vn, { className: R("w-[200px] p-0", v), children: /* @__PURE__ */ f.exports.jsxs(Un, { children: [
              /* @__PURE__ */ f.exports.jsx(ur, { placeholder: l, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsx(dr, { children: d }),
              /* @__PURE__ */ f.exports.jsx(wn, { children: r.map((P) => /* @__PURE__ */ f.exports.jsxs(
                _n,
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
                      en,
                      {
                        className: R(
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
  ) : /* @__PURE__ */ f.exports.jsxs(ir, { open: h, onOpenChange: g, children: [
    /* @__PURE__ */ f.exports.jsx(cr, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
      Qe,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": h,
        className: "w-full justify-between",
        children: [
          a ? (y = r.find((b) => b.value === a)) == null ? void 0 : y.label : p,
          /* @__PURE__ */ f.exports.jsx(mc, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ f.exports.jsx(Vn, { className: "w-full p-0", children: /* @__PURE__ */ f.exports.jsxs(Un, { children: [
      /* @__PURE__ */ f.exports.jsx(ur, { placeholder: l, className: "h-9" }),
      /* @__PURE__ */ f.exports.jsx(dr, { children: d }),
      /* @__PURE__ */ f.exports.jsx(wn, { children: r.map((b) => /* @__PURE__ */ f.exports.jsxs(
        _n,
        {
          onSelect: ($) => {
            i($ === a ? "" : $), g(!1);
          },
          children: [
            b.label,
            /* @__PURE__ */ f.exports.jsx(
              en,
              {
                className: R(
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
const Tk = ({ form: e, id: t, description: n, icon: r, placeholder: o, label: a, tabIndex: s, options: i, classNameContainer: c, classNamePopover: l }) => {
  var _;
  const u = j(null), [d, p] = G(null);
  Q(() => {
    const w = u.current;
    if (!w)
      return;
    const S = new ResizeObserver((P) => {
      const D = P[0].contentRect.width;
      p(D);
    });
    return S.observe(w), () => {
      S.unobserve(w), S.disconnect();
    };
  }, []);
  const m = (_ = e == null ? void 0 : e.formState) == null ? void 0 : _.defaultValues[t], v = i.map((w) => ({
    ...w,
    selected: m ? m.includes(w.value) : !1
  })), [h, g] = G(v), y = (w) => h.filter((P) => P.selected).map((P) => P.value), b = () => g((w) => w.map((S) => ({ ...S, selected: !1 }))), $ = (w, S) => {
    const P = h.map((D) => D.id === w ? { ...D, selected: S } : D);
    g(P), e.setValue(t, P.filter((D) => D.selected).map((D) => D.value));
  };
  return /* @__PURE__ */ f.exports.jsx(
    yr,
    {
      control: e.control,
      name: t,
      render: ({ field: w, formState: S }) => {
        var P;
        return /* @__PURE__ */ f.exports.jsxs(Zn, { className: R("w-full space-y-2", c), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            a && /* @__PURE__ */ f.exports.jsxs($r, { className: "flex", children: [
              a,
              " "
            ] }),
            ((P = S == null ? void 0 : S.errors[t]) == null ? void 0 : P.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              S.errors[t].message
            ] })
          ] }),
          n && /* @__PURE__ */ f.exports.jsx(so, { className: "text-xs", children: n }),
          /* @__PURE__ */ f.exports.jsxs(ir, { children: [
            /* @__PURE__ */ f.exports.jsx(cr, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Qe,
              {
                ref: u,
                type: "button",
                variant: "outline",
                size: "sm",
                className: "py-5 border w-full justify-start",
                tabIndex: s,
                children: [
                  r && r,
                  !y().length && /* @__PURE__ */ f.exports.jsx("span", { className: "text-muted-foreground font-normal", children: o || "Seleccione alguna opción" }),
                  y().length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
                    /* @__PURE__ */ f.exports.jsxs(
                      Wt,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal lg:hidden",
                        children: [
                          y().length,
                          " seleccionados"
                        ]
                      }
                    ),
                    /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: y().length > 2 ? /* @__PURE__ */ f.exports.jsxs(
                      Wt,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: [
                          y().length,
                          " seleccionados"
                        ]
                      }
                    ) : h.filter((D) => D.selected).map((D) => /* @__PURE__ */ f.exports.jsx(
                      Wt,
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
            /* @__PURE__ */ f.exports.jsx(Vn, { style: { width: d + 24 }, className: R("w-full p-0", l), align: "start", children: /* @__PURE__ */ f.exports.jsxs(Un, { children: [
              /* @__PURE__ */ f.exports.jsx(ur, { placeholder: a }),
              /* @__PURE__ */ f.exports.jsxs(ri, { children: [
                /* @__PURE__ */ f.exports.jsx(dr, { children: "Sin Resultados" }),
                /* @__PURE__ */ f.exports.jsx(wn, { children: h.map((D) => /* @__PURE__ */ f.exports.jsxs(
                  _n,
                  {
                    onSelect: () => {
                      D.selected ? $(D.id, !1) : $(D.id, !0);
                    },
                    children: [
                      /* @__PURE__ */ f.exports.jsx(
                        "div",
                        {
                          className: R(
                            "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                            D.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                          ),
                          children: /* @__PURE__ */ f.exports.jsx(en, { className: R("h-4 w-4") })
                        }
                      ),
                      D.icon,
                      /* @__PURE__ */ f.exports.jsx("span", { children: D.label })
                    ]
                  },
                  D.value.toString()
                )) }),
                y().length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
                  /* @__PURE__ */ f.exports.jsx(cu, {}),
                  /* @__PURE__ */ f.exports.jsx(wn, { children: /* @__PURE__ */ f.exports.jsx(
                    _n,
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
}, Pk = ({ description: e, icon: t, placeholder: n, label: r, tabIndex: o, options: a, classNameContainer: s, classNamePopover: i }) => {
  const c = j(null), [l, u] = G(null);
  return Q(() => {
    const d = c.current;
    if (!d)
      return;
    const p = new ResizeObserver((m) => {
      const v = m[0].contentRect.width;
      u(v);
    });
    return p.observe(d), () => {
      p.unobserve(d), p.disconnect();
    };
  }, []), /* @__PURE__ */ f.exports.jsxs("div", { className: R("w-full space-y-2", s), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsxs(Sn, { className: "flex", children: [
      r,
      " "
    ] }) }),
    e && /* @__PURE__ */ f.exports.jsx("p", { className: "text-xs", children: e }),
    /* @__PURE__ */ f.exports.jsxs(ir, { children: [
      /* @__PURE__ */ f.exports.jsx(cr, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
        Qe,
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
                Wt,
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
                Wt,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ) : a.map((d) => /* @__PURE__ */ f.exports.jsx(
                Wt,
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
      /* @__PURE__ */ f.exports.jsx(Vn, { style: { width: l + 24 }, className: R("w-full p-0", i), align: "start", children: /* @__PURE__ */ f.exports.jsxs(Un, { children: [
        /* @__PURE__ */ f.exports.jsx(ur, { placeholder: r }),
        /* @__PURE__ */ f.exports.jsxs(ri, { children: [
          /* @__PURE__ */ f.exports.jsx(dr, { children: "Sin Resultados" }),
          /* @__PURE__ */ f.exports.jsx(wn, { children: a.map((d) => /* @__PURE__ */ f.exports.jsxs(
            _n,
            {
              disabled: !0,
              className: "cursor-default",
              children: [
                /* @__PURE__ */ f.exports.jsx(
                  "div",
                  {
                    className: R(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground"
                      // option
                      //   ? 'bg-primary text-primary-foreground'
                      //   : 'opacity-50 [&_svg]:invisible'
                    ),
                    children: /* @__PURE__ */ f.exports.jsx(en, { className: R("h-4 w-4") })
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
}, l8 = ({ id: e, description: t, icon: n, placeholder: r, label: o, tabIndex: a, classNameContainer: s, readOnly: i, classNamePopover: c, ...l }) => i ? /* @__PURE__ */ f.exports.jsx(
  Pk,
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
  Tk,
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
function u8(e) {
  const [t, n] = G(null), [r, o] = G(null), [a, s] = G(!1);
  Q(() => {
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
const d8 = ({ children: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: "app-layout", children: e });
export {
  wO as Accordion,
  v6 as AccordionContent,
  p6 as AccordionItem,
  m6 as AccordionTrigger,
  bO as AlertDialog,
  VN as AlertDialogAction,
  UN as AlertDialogCancel,
  AN as AlertDialogContent,
  FN as AlertDialogDescription,
  jN as AlertDialogFooter,
  IN as AlertDialogHeader,
  LN as AlertDialogTitle,
  xO as AlertDialogTrigger,
  d8 as AppLayout,
  fO as AspectRatio,
  eo as Avatar,
  no as AvatarFallback,
  to as AvatarImage,
  Wt as Badge,
  Qe as Button,
  xo as CI_TYPES,
  Q1 as Calendar,
  wE as Card,
  SE as CardContent,
  EE as CardDescription,
  NE as CardFooter,
  _E as CardHeader,
  CE as CardTitle,
  IE as Checkbox,
  a8 as CodeVerification,
  _O as Collapsible,
  EO as CollapsibleContent,
  CO as CollapsibleTrigger,
  Nk as ComboBox,
  l8 as ComboxCheckbox,
  Un as Command,
  dO as CommandDialog,
  dr as CommandEmpty,
  wn as CommandGroup,
  ur as CommandInput,
  _n as CommandItem,
  ri as CommandList,
  cu as CommandSeparator,
  W5 as CommandShortcut,
  zk as ContextMenu,
  $2 as ContextMenuCheckboxItem,
  x2 as ContextMenuContent,
  Yk as ContextMenuGroup,
  y2 as ContextMenuItem,
  _2 as ContextMenuLabel,
  Hk as ContextMenuPortal,
  Gk as ContextMenuRadioGroup,
  w2 as ContextMenuRadioItem,
  C2 as ContextMenuSeparator,
  E2 as ContextMenuShortcut,
  Kk as ContextMenuSub,
  b2 as ContextMenuSubContent,
  g2 as ContextMenuSubTrigger,
  Bk as ContextMenuTrigger,
  n8 as CustomTable,
  fC as Dialog,
  Zm as DialogContent,
  hC as DialogDescription,
  mC as DialogFooter,
  pC as DialogHeader,
  vC as DialogTitle,
  qk as DialogTrigger,
  oO as DropdownMenu,
  dS as DropdownMenuCheckboxItem,
  lS as DropdownMenuContent,
  sO as DropdownMenuGroup,
  uS as DropdownMenuItem,
  pS as DropdownMenuLabel,
  iO as DropdownMenuPortal,
  lO as DropdownMenuRadioGroup,
  fS as DropdownMenuRadioItem,
  mS as DropdownMenuSeparator,
  vS as DropdownMenuShortcut,
  cO as DropdownMenuSub,
  cS as DropdownMenuSubContent,
  iS as DropdownMenuSubTrigger,
  aO as DropdownMenuTrigger,
  H2 as Form,
  va as FormControl,
  so as FormDescription,
  yr as FormField,
  Zn as FormItem,
  $r as FormLabel,
  K2 as FormMessage,
  c8 as GenericCombobox,
  r8 as GenericSelect,
  TO as HoverCard,
  N6 as HoverCardContent,
  PO as HoverCardTrigger,
  yk as ImageWithZoom,
  qm as Input,
  Xk as InputPID,
  jo as InputUI,
  Sn as Label,
  kO as LoaderDots,
  Q6 as Menubar,
  aT as MenubarCheckboxItem,
  rT as MenubarContent,
  DO as MenubarGroup,
  oT as MenubarItem,
  iT as MenubarLabel,
  MO as MenubarMenu,
  RO as MenubarPortal,
  IO as MenubarRadioGroup,
  sT as MenubarRadioItem,
  cT as MenubarSeparator,
  lT as MenubarShortcut,
  AO as MenubarSub,
  nT as MenubarSubContent,
  tT as MenubarSubTrigger,
  eT as MenubarTrigger,
  i8 as MultipleImages,
  XO as NavLink,
  JO as NavLinkNested,
  IT as NavigationMenu,
  VT as NavigationMenuContent,
  UT as NavigationMenuIndicator,
  LO as NavigationMenuItem,
  FO as NavigationMenuLink,
  jT as NavigationMenuList,
  FT as NavigationMenuTrigger,
  wg as NavigationMenuViewport,
  $i as PHONE_LINE_CODES,
  ir as Popover,
  Vn as PopoverContent,
  cr as PopoverTrigger,
  XT as Progress,
  mP as RadioGroup,
  vP as RadioGroupItem,
  lN as ScrollArea,
  ph as ScrollBar,
  hv as Select,
  ru as SelectContent,
  tO as SelectGroup,
  ou as SelectItem,
  yE as SelectLabel,
  $E as SelectSeparator,
  nu as SelectTrigger,
  gv as SelectValue,
  au as Separator,
  mO as Sheet,
  hO as SheetClose,
  dN as SheetContent,
  vN as SheetDescription,
  pN as SheetFooter,
  fN as SheetHeader,
  mN as SheetTitle,
  vO as SheetTrigger,
  ZO as Sidebar,
  qO as SidebarContent,
  W3 as SidebarFooter,
  V3 as SidebarHeader,
  yO as Skeleton,
  FP as Slider,
  Hf as Spinner,
  o8 as SwatchesPicker,
  O3 as Switch,
  gh as TableBody,
  gN as TableCaption,
  du as TableCell,
  hN as TableFooter,
  bh as TableHead,
  hh as TableHeader,
  si as TableRow,
  uu as TableUI,
  BO as Tabs,
  JP as TabsContent,
  qP as TabsList,
  XP as TabsTrigger,
  Qk as TextArea,
  rv as TextareaUI,
  t3 as Toggle,
  U3 as ToggleTheme,
  Gr as Tooltip,
  fr as TooltipContent,
  Kr as TooltipProvider,
  Zr as TooltipTrigger,
  s8 as UploadImage,
  d$ as badgeVariants,
  ko as buttonVariants,
  R as cn,
  es as convertBytes,
  yi as convertHexToRGBA,
  Mk as fetcher,
  Ak as formatCI,
  Rd as formatCITypes,
  Fk as formatCodePhoneLines,
  QO as formatPagination,
  Lk as formatPhone,
  jk as formatPhoneNumber,
  Ik as formatRIF,
  vf as generateUUID,
  Rk as getMultiOpacityColor,
  e8 as initialPagination,
  t8 as insertColumn,
  LT as navigationMenuTriggerStyle,
  Dk as simulateFetch,
  e3 as toggleVariants,
  u8 as useFetch,
  qs as useFormField,
  pi as useSidebar
};
//# sourceMappingURL=index.es.js.map
