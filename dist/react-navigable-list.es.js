(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.m-0{margin:0}.m-10{margin:2.5rem}.mr-1{margin-right:.25rem}.mt-\\[2px\\]{margin-top:2px}.block{display:block}.flex{display:flex}.h-3{height:.75rem}.h-\\[20px\\]{height:20px}.h-\\[220px\\]{height:220px}.w-3{width:.75rem}.w-\\[200px\\]{width:200px}.cursor-default{cursor:default}.list-none{list-style-type:none}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-x-5{column-gap:1.25rem}.overflow-y-auto{overflow-y:auto}.border{border-width:1px}.border-none{border-style:none}.border-\\[\\#BCB8B1\\]{--tw-border-opacity: 1;border-color:rgb(188 184 177 / var(--tw-border-opacity))}.border-list-checkbox{--tw-border-opacity: 1;border-color:rgb(217 217 217 / var(--tw-border-opacity))}.bg-\\[\\#e6e4e0\\]{--tw-bg-opacity: 1;background-color:rgb(230 228 224 / var(--tw-bg-opacity))}.bg-option-selected{--tw-bg-opacity: 1;background-color:rgb(188 184 177 / var(--tw-bg-opacity))}.bg-purple-300{--tw-bg-opacity: 1;background-color:rgb(216 180 254 / var(--tw-bg-opacity))}.bg-purple-500{--tw-bg-opacity: 1;background-color:rgb(168 85 247 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-none{background-image:none}.p-0{padding:0}.px-1{padding-left:.25rem;padding-right:.25rem}.py-\\[2px\\]{padding-top:2px;padding-bottom:2px}.text-\\[12px\\]{font-size:12px}.\\!text-\\[\\#C7C8CC\\]{--tw-text-opacity: 1 !important;color:rgb(199 200 204 / var(--tw-text-opacity))!important}.\\!text-white{--tw-text-opacity: 1 !important;color:rgb(255 255 255 / var(--tw-text-opacity))!important}.text-\\[\\#7C7975\\]{--tw-text-opacity: 1;color:rgb(124 121 117 / var(--tw-text-opacity))}.text-\\[\\#94928f\\]{--tw-text-opacity: 1;color:rgb(148 146 143 / var(--tw-text-opacity))}.text-\\[\\#C7C8CC\\]{--tw-text-opacity: 1;color:rgb(199 200 204 / var(--tw-text-opacity))}.text-green-500{--tw-text-opacity: 1;color:rgb(34 197 94 / var(--tw-text-opacity))}.text-pink-300{--tw-text-opacity: 1;color:rgb(249 168 212 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.accent-black{accent-color:#000}.outline-none{outline:2px solid transparent;outline-offset:2px}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.hover\\:bg-\\[\\#e6e4e0\\]:hover{--tw-bg-opacity: 1;background-color:rgb(230 228 224 / var(--tw-bg-opacity))}.hover\\:text-\\[\\#94928f\\]:hover{--tw-text-opacity: 1;color:rgb(148 146 143 / var(--tw-text-opacity))}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import Me, { useState as le, useRef as Le, useEffect as Ne } from "react";
var ve = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function gr() {
  if (Ye)
    return U;
  Ye = 1;
  var s = Me, l = Symbol.for("react.element"), f = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, v = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(y, t, w) {
    var R, x = {}, g = null, j = null;
    w !== void 0 && (g = "" + w), t.key !== void 0 && (g = "" + t.key), t.ref !== void 0 && (j = t.ref);
    for (R in t)
      u.call(t, R) && !P.hasOwnProperty(R) && (x[R] = t[R]);
    if (y && y.defaultProps)
      for (R in t = y.defaultProps, t)
        x[R] === void 0 && (x[R] = t[R]);
    return { $$typeof: l, type: y, key: g, ref: j, props: x, _owner: v.current };
  }
  return U.Fragment = f, U.jsx = C, U.jsxs = C, U;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function hr() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var s = Me, l = Symbol.for("react.element"), f = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), y = Symbol.for("react.context"), t = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), q = Symbol.iterator, Z = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = q && e[q] || e[Z];
      return typeof r == "function" ? r : null;
    }
    var m = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          n[a - 1] = arguments[a];
        Q("error", e, n);
      }
    }
    function Q(e, r, n) {
      {
        var a = m.ReactDebugCurrentFrame, c = a.getStackAddendum();
        c !== "" && (r += "%s", n = n.concat([c]));
        var d = n.map(function(i) {
          return String(i);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var I = !1, ee = !1, B = !1, re = !1, h = !1, p;
    p = Symbol.for("react.module.reference");
    function A(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === P || h || e === v || e === w || e === R || re || e === j || I || ee || B || typeof e == "object" && e !== null && (e.$$typeof === g || e.$$typeof === x || e.$$typeof === C || e.$$typeof === y || e.$$typeof === t || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === p || e.getModuleId !== void 0));
    }
    function qe(e, r, n) {
      var a = e.displayName;
      if (a)
        return a;
      var c = r.displayName || r.name || "";
      return c !== "" ? n + "(" + c + ")" : n;
    }
    function de(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case f:
          return "Portal";
        case P:
          return "Profiler";
        case v:
          return "StrictMode";
        case w:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return de(r) + ".Consumer";
          case C:
            var n = e;
            return de(n._context) + ".Provider";
          case t:
            return qe(e, e.render, "ForwardRef");
          case x:
            var a = e.displayName || null;
            return a !== null ? a : k(e.type) || "Memo";
          case g: {
            var c = e, d = c._payload, i = c._init;
            try {
              return k(i(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, M = 0, pe, ge, he, Ee, be, _e, Re;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function Be() {
      {
        if (M === 0) {
          pe = console.log, ge = console.info, he = console.warn, Ee = console.error, be = console.group, _e = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        M++;
      }
    }
    function Je() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: pe
            }),
            info: F({}, e, {
              value: ge
            }),
            warn: F({}, e, {
              value: he
            }),
            error: F({}, e, {
              value: Ee
            }),
            group: F({}, e, {
              value: be
            }),
            groupCollapsed: F({}, e, {
              value: _e
            }),
            groupEnd: F({}, e, {
              value: Re
            })
          });
        }
        M < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = m.ReactCurrentDispatcher, te;
    function J(e, r, n) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (c) {
            var a = c.stack.trim().match(/\n( *(at )?)/);
            te = a && a[1] || "";
          }
        return `
` + te + e;
      }
    }
    var ae = !1, K;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Ke();
    }
    function me(e, r) {
      if (!e || ae)
        return "";
      {
        var n = K.get(e);
        if (n !== void 0)
          return n;
      }
      var a;
      ae = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = ne.current, ne.current = null, Be();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (D) {
              a = D;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (D) {
              a = D;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            a = D;
          }
          e();
        }
      } catch (D) {
        if (D && a && typeof D.stack == "string") {
          for (var o = D.stack.split(`
`), T = a.stack.split(`
`), E = o.length - 1, _ = T.length - 1; E >= 1 && _ >= 0 && o[E] !== T[_]; )
            _--;
          for (; E >= 1 && _ >= 0; E--, _--)
            if (o[E] !== T[_]) {
              if (E !== 1 || _ !== 1)
                do
                  if (E--, _--, _ < 0 || o[E] !== T[_]) {
                    var O = `
` + o[E].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, O), O;
                  }
                while (E >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ne.current = d, Je(), Error.prepareStackTrace = c;
      }
      var N = e ? e.displayName || e.name : "", $e = N ? J(N) : "";
      return typeof e == "function" && K.set(e, $e), $e;
    }
    function Ge(e, r, n) {
      return me(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, ze(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case w:
          return J("Suspense");
        case R:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case t:
            return Ge(e.render);
          case x:
            return G(e.type, r, n);
          case g: {
            var a = e, c = a._payload, d = a._init;
            try {
              return G(d(c), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, Te = {}, Ce = m.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var r = e._owner, n = G(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(n);
      } else
        Ce.setExtraStackFrame(null);
    }
    function He(e, r, n, a, c) {
      {
        var d = Function.call.bind(z);
        for (var i in e)
          if (d(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var T = Error((a || "React class") + ": " + n + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              o = e[i](r, i, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              o = E;
            }
            o && !(o instanceof Error) && (H(c), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, i, typeof o), H(null)), o instanceof Error && !(o.message in Te) && (Te[o.message] = !0, H(c), b("Failed %s type: %s", n, o.message), H(null));
          }
      }
    }
    var Xe = Array.isArray;
    function oe(e) {
      return Xe(e);
    }
    function Ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function Qe(e) {
      try {
        return we(e), !1;
      } catch {
        return !0;
      }
    }
    function we(e) {
      return "" + e;
    }
    function xe(e) {
      if (Qe(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), we(e);
    }
    var L = m.ReactCurrentOwner, Ie = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, Pe, ue;
    ue = {};
    function er(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nr(e, r) {
      if (typeof e.ref == "string" && L.current && r && L.current.stateNode !== r) {
        var n = k(L.current.type);
        ue[n] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(L.current.type), e.ref), ue[n] = !0);
      }
    }
    function tr(e, r) {
      {
        var n = function() {
          Oe || (Oe = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function ar(e, r) {
      {
        var n = function() {
          Pe || (Pe = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var or = function(e, r, n, a, c, d, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: i,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ur(e, r, n, a, c) {
      {
        var d, i = {}, o = null, T = null;
        n !== void 0 && (xe(n), o = "" + n), rr(r) && (xe(r.key), o = "" + r.key), er(r) && (T = r.ref, nr(r, c));
        for (d in r)
          z.call(r, d) && !Ie.hasOwnProperty(d) && (i[d] = r[d]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (d in E)
            i[d] === void 0 && (i[d] = E[d]);
        }
        if (o || T) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && tr(i, _), T && ar(i, _);
        }
        return or(e, o, T, c, a, L.current, i);
      }
    }
    var ie = m.ReactCurrentOwner, je = m.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, n = G(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(n);
      } else
        je.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function ke() {
      {
        if (ie.current) {
          var e = k(ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + r + ":" + n + ".";
        }
        return "";
      }
    }
    var De = {};
    function cr(e) {
      {
        var r = ke();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Ae(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = cr(r);
        if (De[n])
          return;
        De[n] = !0;
        var a = "";
        e && e._owner && e._owner !== ie.current && (a = " It was passed a child from " + k(e._owner.type) + "."), $(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), $(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (oe(e))
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            fe(a) && Ae(a, r);
          }
        else if (fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = W(e);
          if (typeof c == "function" && c !== e.entries)
            for (var d = c.call(e), i; !(i = d.next()).done; )
              fe(i.value) && Ae(i.value, r);
        }
      }
    }
    function fr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === t || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === x))
          n = r.propTypes;
        else
          return;
        if (n) {
          var a = k(r);
          He(n, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !ce) {
          ce = !0;
          var c = k(r);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var a = r[n];
          if (a !== "children" && a !== "key") {
            $(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    function Se(e, r, n, a, c, d) {
      {
        var i = A(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = ir(c);
          T ? o += T : o += ke();
          var E;
          e === null ? E = "null" : oe(e) ? E = "array" : e !== void 0 && e.$$typeof === l ? (E = "<" + (k(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, o);
        }
        var _ = ur(e, r, n, c, d);
        if (_ == null)
          return _;
        if (i) {
          var O = r.children;
          if (O !== void 0)
            if (a)
              if (oe(O)) {
                for (var N = 0; N < O.length; N++)
                  Fe(O[N], e);
                Object.freeze && Object.freeze(O);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(O, e);
        }
        return e === u ? sr(_) : fr(_), _;
      }
    }
    function lr(e, r, n) {
      return Se(e, r, n, !0);
    }
    function vr(e, r, n) {
      return Se(e, r, n, !1);
    }
    var dr = vr, pr = lr;
    V.Fragment = u, V.jsx = dr, V.jsxs = pr;
  }()), V;
}
process.env.NODE_ENV === "production" ? ve.exports = gr() : ve.exports = hr();
var X = ve.exports;
function Ue(s) {
  var l, f, u = "";
  if (typeof s == "string" || typeof s == "number")
    u += s;
  else if (typeof s == "object")
    if (Array.isArray(s)) {
      var v = s.length;
      for (l = 0; l < v; l++)
        s[l] && (f = Ue(s[l])) && (u && (u += " "), u += f);
    } else
      for (f in s)
        s[f] && (u && (u += " "), u += f);
  return u;
}
function Ve() {
  for (var s, l, f = 0, u = "", v = arguments.length; f < v; f++)
    (s = arguments[f]) && (l = Ue(s)) && (u && (u += " "), u += l);
  return u;
}
const S = {
  UP: 38,
  DOWN: 40,
  ESC: 27,
  ENTER: 13,
  SPACE: 32,
  J: 74,
  K: 75
}, se = Object.values(S), Er = (s) => {
  const [l, f] = le(!1), u = Le({
    startY: 0,
    scrollTop: 0
  });
  return {
    onMouseDown: (y) => {
      if (!s.current)
        return;
      const t = s.current, w = y.pageY - t.offsetTop, R = t.scrollTop;
      u.current = { startY: w, scrollTop: R }, f(!0), document.body.style.cursor = "grabbing";
    },
    onMouseUp: () => {
      f(!1), document.body.style.cursor = "default";
    },
    onMouseMove: (y) => {
      if (!l || !s.current)
        return;
      y.preventDefault();
      const t = s.current, R = (y.pageY - t.offsetTop - u.current.startY) * 1.5;
      t.scrollTop = u.current.scrollTop - R;
    }
  };
}, Y = (s, l, f = 1) => Array.from(
  { length: Math.ceil((l - s) / f) },
  (u, v) => s + v * f
), br = ({
  multiple: s,
  checkboxOnMultiple: l,
  disabled: f,
  selected: u,
  focused: v,
  children: P,
  index: C,
  onClick: y,
  listItemStyles: t,
  setFocusedIndex: w
}) => /* @__PURE__ */ X.jsxs(
  "li",
  {
    className: Ve(
      `${u ? "list-item-selected" : v ? "list-item-focused" : f ? "list-item-disabled" : "normal-list-item"} cursor-default mt-[2px] flex h-[20px] items-center px-1 text-[12px] text-[#7C7975]`,
      {
        [(t == null ? void 0 : t.focusedClasses) ?? "bg-[#e6e4e0] text-white hover:bg-[#e6e4e0] hover:text-[#94928f]"]: v && !f && !u,
        [(t == null ? void 0 : t.disabledClasses) ?? "!text-[#C7C8CC]"]: f,
        [(t == null ? void 0 : t.selectedClasses) ?? "bg-option-selected !text-white "]: u
      }
    ),
    style: {
      ...f && (t == null ? void 0 : t.disabledStyle),
      ...v && !u && !f && (t == null ? void 0 : t.focusedStyle),
      ...u && (t == null ? void 0 : t.selectedStyle)
    },
    onClick: () => !f && y(C),
    onMouseEnter: () => w(C),
    onMouseLeave: () => w(void 0),
    "list-index": C,
    children: [
      s && l && /* @__PURE__ */ X.jsx(
        "input",
        {
          type: "checkbox",
          className: `${t == null ? void 0 : t.checkboxClasses} mr-1 h-3 w-3 border-list-checkbox bg-none text-green-500`,
          checked: u,
          onChange: () => !f && y(C),
          style: {
            ...l && (t == null ? void 0 : t.checkboxStyle)
          }
        }
      ),
      P
    ]
  }
), _r = ({
  className: s,
  items: l,
  // rename parameter
  selected: f,
  setSelected: u,
  disabled: v,
  focusedIndex: P = 0,
  multiple: C = !1,
  checkboxOnMultiple: y = !0,
  onChange: t,
  keyboardEvents: w = !0,
  listItemStyles: R,
  overflowY: x = !0
}) => {
  const [g, j] = le(
    P
  ), [q, Z] = le(
    f ?? []
  ), W = u ?? Z, m = f ?? q, b = Le(null), Q = Er(b);
  Ne(() => {
    if (g !== void 0 && b.current) {
      const h = b.current.querySelector(`[list-index="${g}"]`);
      h && h.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  }, [g]), Ne(() => {
    t && t(m);
  }, [t, m]);
  const I = () => {
    if (l.length === v.length)
      return;
    let h, p;
    g === 0 ? p = Y(1, l.length).reverse() : p = [
      ...Y(0, g).reverse(),
      ...Y(g + 1, g).reverse()
    ];
    for (const A of p)
      if (!(v != null && v.includes(A))) {
        h = A;
        break;
      }
    j(h);
  }, ee = () => {
    if (l.length === v.length)
      return;
    let h, p;
    g === l.length - 1 ? p = Y(0, l.length - 1) : p = [
      ...Y(g + 1, l.length),
      ...Y(0, g)
    ];
    for (const A of p)
      if (!(v != null && v.includes(A))) {
        h = A;
        break;
      }
    j(h);
  }, B = (h) => {
    h && j(h), C ? m.includes(h ?? g) ? W(m.filter((p) => p !== (h ?? g))) : W([...m, h ?? g]) : W([h ?? g]);
  }, re = (h) => {
    if (!w)
      return;
    const p = h.keyCode;
    p === S.UP || p === S.K ? I() : p === S.DOWN || p === S.J ? ee() : (p === S.SPACE || p === S.ENTER) && B(), se != null && se.includes(p) && h.preventDefault();
  };
  return /* @__PURE__ */ X.jsx(
    "ul",
    {
      ref: b,
      className: Ve(
        "react-navigable-list m-0 list-none border-none p-0 outline-none",
        x && "overflow-y-auto",
        s
      ),
      tabIndex: 0,
      onKeyDown: re,
      ...x && Q,
      children: l.map((h, p) => /* @__PURE__ */ X.jsx(
        br,
        {
          multiple: C,
          checkboxOnMultiple: y,
          index: p,
          disabled: v == null ? void 0 : v.includes(p),
          selected: m == null ? void 0 : m.includes(p),
          focused: g === p,
          listItemStyles: R,
          onClick: B,
          setFocusedIndex: j,
          children: h.label
        },
        p
      ))
    }
  );
}, yr = _r;
export {
  yr as default
};
//# sourceMappingURL=react-navigable-list.es.js.map
