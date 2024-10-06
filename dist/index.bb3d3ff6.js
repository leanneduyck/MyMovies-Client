let e, t;
function n(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
function r(e) {
  return e && e.__esModule ? e.default : e;
}
var a,
  l,
  o,
  i,
  s,
  u,
  c,
  d,
  f,
  p,
  h,
  m,
  g,
  v,
  y = globalThis,
  b = {},
  x = {},
  w = y.parcelRequire103c;
null == w &&
  (((w = function (e) {
    if (e in b) return b[e].exports;
    if (e in x) {
      var t = x[e];
      delete x[e];
      var n = { id: e, exports: {} };
      return (b[e] = n), t.call(n.exports, n, n.exports), n.exports;
    }
    var r = Error("Cannot find module '" + e + "'");
    throw ((r.code = 'MODULE_NOT_FOUND'), r);
  }).register = function (e, t) {
    x[e] = t;
  }),
  (y.parcelRequire103c = w));
var k = w.register;
k('1b2ls', function (e, t) {
  n(
    e.exports,
    'Fragment',
    () => r,
    (e) => (r = e)
  ),
    n(
      e.exports,
      'jsx',
      () => a,
      (e) => (a = e)
    ),
    n(
      e.exports,
      'jsxs',
      () => l,
      (e) => (l = e)
    );
  var r,
    a,
    l,
    o = w('acw62'),
    i = Symbol.for('react.element'),
    s = Symbol.for('react.fragment'),
    u = Object.prototype.hasOwnProperty,
    c = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(e, t, n) {
    var r,
      a = {},
      l = null,
      o = null;
    for (r in (void 0 !== n && (l = '' + n),
    void 0 !== t.key && (l = '' + t.key),
    void 0 !== t.ref && (o = t.ref),
    t))
      u.call(t, r) && !d.hasOwnProperty(r) && (a[r] = t[r]);
    if (e && e.defaultProps)
      for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
    return {
      $$typeof: i,
      type: e,
      key: l,
      ref: o,
      props: a,
      _owner: c.current,
    };
  }
  (r = s), (a = f), (l = f);
}),
  k('acw62', function (e, t) {
    e.exports = w('2pUnB');
  }),
  k('2pUnB', function (e, t) {
    n(
      e.exports,
      'Children',
      () => r,
      (e) => (r = e)
    ),
      n(
        e.exports,
        'Component',
        () => a,
        (e) => (a = e)
      ),
      n(
        e.exports,
        'Fragment',
        () => l,
        (e) => (l = e)
      ),
      n(
        e.exports,
        'Profiler',
        () => o,
        (e) => (o = e)
      ),
      n(
        e.exports,
        'PureComponent',
        () => i,
        (e) => (i = e)
      ),
      n(
        e.exports,
        'StrictMode',
        () => s,
        (e) => (s = e)
      ),
      n(
        e.exports,
        'Suspense',
        () => u,
        (e) => (u = e)
      ),
      n(
        e.exports,
        '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED',
        () => c,
        (e) => (c = e)
      ),
      n(
        e.exports,
        'act',
        () => d,
        (e) => (d = e)
      ),
      n(
        e.exports,
        'cloneElement',
        () => f,
        (e) => (f = e)
      ),
      n(
        e.exports,
        'createContext',
        () => p,
        (e) => (p = e)
      ),
      n(
        e.exports,
        'createElement',
        () => h,
        (e) => (h = e)
      ),
      n(
        e.exports,
        'createFactory',
        () => m,
        (e) => (m = e)
      ),
      n(
        e.exports,
        'createRef',
        () => g,
        (e) => (g = e)
      ),
      n(
        e.exports,
        'forwardRef',
        () => v,
        (e) => (v = e)
      ),
      n(
        e.exports,
        'isValidElement',
        () => y,
        (e) => (y = e)
      ),
      n(
        e.exports,
        'lazy',
        () => b,
        (e) => (b = e)
      ),
      n(
        e.exports,
        'memo',
        () => x,
        (e) => (x = e)
      ),
      n(
        e.exports,
        'startTransition',
        () => w,
        (e) => (w = e)
      ),
      n(
        e.exports,
        'unstable_act',
        () => k,
        (e) => (k = e)
      ),
      n(
        e.exports,
        'useCallback',
        () => S,
        (e) => (S = e)
      ),
      n(
        e.exports,
        'useContext',
        () => E,
        (e) => (E = e)
      ),
      n(
        e.exports,
        'useDebugValue',
        () => C,
        (e) => (C = e)
      ),
      n(
        e.exports,
        'useDeferredValue',
        () => N,
        (e) => (N = e)
      ),
      n(
        e.exports,
        'useEffect',
        () => j,
        (e) => (j = e)
      ),
      n(
        e.exports,
        'useId',
        () => _,
        (e) => (_ = e)
      ),
      n(
        e.exports,
        'useImperativeHandle',
        () => P,
        (e) => (P = e)
      ),
      n(
        e.exports,
        'useInsertionEffect',
        () => R,
        (e) => (R = e)
      ),
      n(
        e.exports,
        'useLayoutEffect',
        () => O,
        (e) => (O = e)
      ),
      n(
        e.exports,
        'useMemo',
        () => L,
        (e) => (L = e)
      ),
      n(
        e.exports,
        'useReducer',
        () => T,
        (e) => (T = e)
      ),
      n(
        e.exports,
        'useRef',
        () => M,
        (e) => (M = e)
      ),
      n(
        e.exports,
        'useState',
        () => I,
        (e) => (I = e)
      ),
      n(
        e.exports,
        'useSyncExternalStore',
        () => F,
        (e) => (F = e)
      ),
      n(
        e.exports,
        'useTransition',
        () => z,
        (e) => (z = e)
      ),
      n(
        e.exports,
        'version',
        () => D,
        (e) => (D = e)
      );
    var r,
      a,
      l,
      o,
      i,
      s,
      u,
      c,
      d,
      f,
      p,
      h,
      m,
      g,
      v,
      y,
      b,
      x,
      w,
      k,
      S,
      E,
      C,
      N,
      j,
      _,
      P,
      R,
      O,
      L,
      T,
      M,
      I,
      F,
      z,
      D,
      $ = Symbol.for('react.element'),
      U = Symbol.for('react.portal'),
      A = Symbol.for('react.fragment'),
      B = Symbol.for('react.strict_mode'),
      W = Symbol.for('react.profiler'),
      V = Symbol.for('react.provider'),
      H = Symbol.for('react.context'),
      K = Symbol.for('react.forward_ref'),
      Q = Symbol.for('react.suspense'),
      q = Symbol.for('react.memo'),
      G = Symbol.for('react.lazy'),
      Y = Symbol.iterator,
      X = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      J = Object.assign,
      Z = {};
    function ee(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = Z),
        (this.updater = n || X);
    }
    function et() {}
    function en(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = Z),
        (this.updater = n || X);
    }
    (ee.prototype.isReactComponent = {}),
      (ee.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e)
          throw Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
          );
        this.updater.enqueueSetState(this, e, t, 'setState');
      }),
      (ee.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
      }),
      (et.prototype = ee.prototype);
    var er = (en.prototype = new et());
    (er.constructor = en), J(er, ee.prototype), (er.isPureReactComponent = !0);
    var ea = Array.isArray,
      el = Object.prototype.hasOwnProperty,
      eo = { current: null },
      ei = { key: !0, ref: !0, __self: !0, __source: !0 };
    function es(e, t, n) {
      var r,
        a = {},
        l = null,
        o = null;
      if (null != t)
        for (r in (void 0 !== t.ref && (o = t.ref),
        void 0 !== t.key && (l = '' + t.key),
        t))
          el.call(t, r) && !ei.hasOwnProperty(r) && (a[r] = t[r]);
      var i = arguments.length - 2;
      if (1 === i) a.children = n;
      else if (1 < i) {
        for (var s = Array(i), u = 0; u < i; u++) s[u] = arguments[u + 2];
        a.children = s;
      }
      if (e && e.defaultProps)
        for (r in (i = e.defaultProps)) void 0 === a[r] && (a[r] = i[r]);
      return {
        $$typeof: $,
        type: e,
        key: l,
        ref: o,
        props: a,
        _owner: eo.current,
      };
    }
    function eu(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === $;
    }
    var ec = /\/+/g;
    function ed(e, t) {
      var n, r;
      return 'object' == typeof e && null !== e && null != e.key
        ? ((n = '' + e.key),
          (r = { '=': '=0', ':': '=2' }),
          '$' +
            n.replace(/[=:]/g, function (e) {
              return r[e];
            }))
        : t.toString(36);
    }
    function ef(e, t, n) {
      if (null == e) return e;
      var r = [],
        a = 0;
      return (
        (function e(t, n, r, a, l) {
          var o,
            i,
            s,
            u = typeof t;
          ('undefined' === u || 'boolean' === u) && (t = null);
          var c = !1;
          if (null === t) c = !0;
          else
            switch (u) {
              case 'string':
              case 'number':
                c = !0;
                break;
              case 'object':
                switch (t.$$typeof) {
                  case $:
                  case U:
                    c = !0;
                }
            }
          if (c)
            return (
              (l = l((c = t))),
              (t = '' === a ? '.' + ed(c, 0) : a),
              ea(l)
                ? ((r = ''),
                  null != t && (r = t.replace(ec, '$&/') + '/'),
                  e(l, n, r, '', function (e) {
                    return e;
                  }))
                : null != l &&
                  (eu(l) &&
                    ((o = l),
                    (i =
                      r +
                      (!l.key || (c && c.key === l.key)
                        ? ''
                        : ('' + l.key).replace(ec, '$&/') + '/') +
                      t),
                    (l = {
                      $$typeof: $,
                      type: o.type,
                      key: i,
                      ref: o.ref,
                      props: o.props,
                      _owner: o._owner,
                    })),
                  n.push(l)),
              1
            );
          if (((c = 0), (a = '' === a ? '.' : a + ':'), ea(t)))
            for (var d = 0; d < t.length; d++) {
              var f = a + ed((u = t[d]), d);
              c += e(u, n, r, f, l);
            }
          else if (
            'function' ==
            typeof (f =
              null === (s = t) || 'object' != typeof s
                ? null
                : 'function' == typeof (s = (Y && s[Y]) || s['@@iterator'])
                ? s
                : null)
          )
            for (t = f.call(t), d = 0; !(u = t.next()).done; )
              (f = a + ed((u = u.value), d++)), (c += e(u, n, r, f, l));
          else if ('object' === u)
            throw Error(
              'Objects are not valid as a React child (found: ' +
                ('[object Object]' === (n = String(t))
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : n) +
                '). If you meant to render a collection of children, use an array instead.'
            );
          return c;
        })(e, r, '', '', function (e) {
          return t.call(n, e, a++);
        }),
        r
      );
    }
    function ep(e) {
      if (-1 === e._status) {
        var t = e._result;
        (t = t()).then(
          function (t) {
            (0 === e._status || -1 === e._status) &&
              ((e._status = 1), (e._result = t));
          },
          function (t) {
            (0 === e._status || -1 === e._status) &&
              ((e._status = 2), (e._result = t));
          }
        ),
          -1 === e._status && ((e._status = 0), (e._result = t));
      }
      if (1 === e._status) return e._result.default;
      throw e._result;
    }
    var eh = { current: null },
      em = { transition: null };
    function eg() {
      throw Error('act(...) is not supported in production builds of React.');
    }
    (r = {
      map: ef,
      forEach: function (e, t, n) {
        ef(
          e,
          function () {
            t.apply(this, arguments);
          },
          n
        );
      },
      count: function (e) {
        var t = 0;
        return (
          ef(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          ef(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!eu(e))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          );
        return e;
      },
    }),
      (a = ee),
      (l = A),
      (o = W),
      (i = en),
      (s = B),
      (u = Q),
      (c = {
        ReactCurrentDispatcher: eh,
        ReactCurrentBatchConfig: em,
        ReactCurrentOwner: eo,
      }),
      (d = eg),
      (f = function (e, t, n) {
        if (null == e)
          throw Error(
            'React.cloneElement(...): The argument must be a React element, but you passed ' +
              e +
              '.'
          );
        var r = J({}, e.props),
          a = e.key,
          l = e.ref,
          o = e._owner;
        if (null != t) {
          if (
            (void 0 !== t.ref && ((l = t.ref), (o = eo.current)),
            void 0 !== t.key && (a = '' + t.key),
            e.type && e.type.defaultProps)
          )
            var i = e.type.defaultProps;
          for (s in t)
            el.call(t, s) &&
              !ei.hasOwnProperty(s) &&
              (r[s] = void 0 === t[s] && void 0 !== i ? i[s] : t[s]);
        }
        var s = arguments.length - 2;
        if (1 === s) r.children = n;
        else if (1 < s) {
          i = Array(s);
          for (var u = 0; u < s; u++) i[u] = arguments[u + 2];
          r.children = i;
        }
        return {
          $$typeof: $,
          type: e.type,
          key: a,
          ref: l,
          props: r,
          _owner: o,
        };
      }),
      (p = function (e) {
        return (
          ((e = {
            $$typeof: H,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          }).Provider = { $$typeof: V, _context: e }),
          (e.Consumer = e)
        );
      }),
      (h = es),
      (m = function (e) {
        var t = es.bind(null, e);
        return (t.type = e), t;
      }),
      (g = function () {
        return { current: null };
      }),
      (v = function (e) {
        return { $$typeof: K, render: e };
      }),
      (y = eu),
      (b = function (e) {
        return {
          $$typeof: G,
          _payload: { _status: -1, _result: e },
          _init: ep,
        };
      }),
      (x = function (e, t) {
        return { $$typeof: q, type: e, compare: void 0 === t ? null : t };
      }),
      (w = function (e) {
        var t = em.transition;
        em.transition = {};
        try {
          e();
        } finally {
          em.transition = t;
        }
      }),
      (k = eg),
      (S = function (e, t) {
        return eh.current.useCallback(e, t);
      }),
      (E = function (e) {
        return eh.current.useContext(e);
      }),
      (C = function () {}),
      (N = function (e) {
        return eh.current.useDeferredValue(e);
      }),
      (j = function (e, t) {
        return eh.current.useEffect(e, t);
      }),
      (_ = function () {
        return eh.current.useId();
      }),
      (P = function (e, t, n) {
        return eh.current.useImperativeHandle(e, t, n);
      }),
      (R = function (e, t) {
        return eh.current.useInsertionEffect(e, t);
      }),
      (O = function (e, t) {
        return eh.current.useLayoutEffect(e, t);
      }),
      (L = function (e, t) {
        return eh.current.useMemo(e, t);
      }),
      (T = function (e, t, n) {
        return eh.current.useReducer(e, t, n);
      }),
      (M = function (e) {
        return eh.current.useRef(e);
      }),
      (I = function (e) {
        return eh.current.useState(e);
      }),
      (F = function (e, t, n) {
        return eh.current.useSyncExternalStore(e, t, n);
      }),
      (z = function () {
        return eh.current.useTransition();
      }),
      (D = '18.3.1');
  }),
  k('Xw6Mv', function (e, t) {
    n(
      e.exports,
      '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED',
      () => W,
      (e) => (W = e)
    ),
      n(
        e.exports,
        'createPortal',
        () => V,
        (e) => (V = e)
      ),
      n(
        e.exports,
        'createRoot',
        () => H,
        (e) => (H = e)
      ),
      n(
        e.exports,
        'findDOMNode',
        () => K,
        (e) => (K = e)
      ),
      n(
        e.exports,
        'flushSync',
        () => Q,
        (e) => (Q = e)
      ),
      n(
        e.exports,
        'hydrate',
        () => q,
        (e) => (q = e)
      ),
      n(
        e.exports,
        'hydrateRoot',
        () => G,
        (e) => (G = e)
      ),
      n(
        e.exports,
        'render',
        () => Y,
        (e) => (Y = e)
      ),
      n(
        e.exports,
        'unmountComponentAtNode',
        () => X,
        (e) => (X = e)
      ),
      n(
        e.exports,
        'unstable_batchedUpdates',
        () => J,
        (e) => (J = e)
      ),
      n(
        e.exports,
        'unstable_renderSubtreeIntoContainer',
        () => Z,
        (e) => (Z = e)
      ),
      n(
        e.exports,
        'version',
        () => ee,
        (e) => (ee = e)
      );
    var r,
      a,
      l,
      o,
      i,
      s,
      u = w('acw62'),
      c = w('fO90s');
    function d(e) {
      for (
        var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += '&args[]=' + encodeURIComponent(arguments[n]);
      return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      );
    }
    var f = new Set(),
      p = {};
    function h(e, t) {
      m(e, t), m(e + 'Capture', t);
    }
    function m(e, t) {
      for (p[e] = t, e = 0; e < t.length; e++) f.add(t[e]);
    }
    var g = !(
        'undefined' == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      ),
      v = Object.prototype.hasOwnProperty,
      y =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      b = {},
      x = {};
    function k(e, t, n, r, a, l, o) {
      (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = a),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = l),
        (this.removeEmptyString = o);
    }
    var S = {};
    'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
      .split(' ')
      .forEach(function (e) {
        S[e] = new k(e, 0, !1, e, null, !1, !1);
      }),
      [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
      ].forEach(function (e) {
        var t = e[0];
        S[t] = new k(t, 1, !1, e[1], null, !1, !1);
      }),
      ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (
        e
      ) {
        S[e] = new k(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [
        'autoReverse',
        'externalResourcesRequired',
        'focusable',
        'preserveAlpha',
      ].forEach(function (e) {
        S[e] = new k(e, 2, !1, e, null, !1, !1);
      }),
      'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (e) {
          S[e] = new k(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
        S[e] = new k(e, 3, !0, e, null, !1, !1);
      }),
      ['capture', 'download'].forEach(function (e) {
        S[e] = new k(e, 4, !1, e, null, !1, !1);
      }),
      ['cols', 'rows', 'size', 'span'].forEach(function (e) {
        S[e] = new k(e, 6, !1, e, null, !1, !1);
      }),
      ['rowSpan', 'start'].forEach(function (e) {
        S[e] = new k(e, 5, !1, e.toLowerCase(), null, !1, !1);
      });
    var E = /[\-:]([a-z])/g;
    function C(e) {
      return e[1].toUpperCase();
    }
    function N(e, t, n, r) {
      var a,
        l = S.hasOwnProperty(t) ? S[t] : null;
      (null !== l
        ? 0 !== l.type
        : r ||
          !(2 < t.length) ||
          ('o' !== t[0] && 'O' !== t[0]) ||
          ('n' !== t[1] && 'N' !== t[1])) &&
        ((function (e, t, n, r) {
          if (
            null == t ||
            (function (e, t, n, r) {
              if (null !== n && 0 === n.type) return !1;
              switch (typeof t) {
                case 'function':
                case 'symbol':
                  return !0;
                case 'boolean':
                  if (r) return !1;
                  if (null !== n) return !n.acceptsBooleans;
                  return (
                    'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                    'aria-' !== e
                  );
                default:
                  return !1;
              }
            })(e, t, n, r)
          )
            return !0;
          if (r) return !1;
          if (null !== n)
            switch (n.type) {
              case 3:
                return !t;
              case 4:
                return !1 === t;
              case 5:
                return isNaN(t);
              case 6:
                return isNaN(t) || 1 > t;
            }
          return !1;
        })(t, n, l, r) && (n = null),
        r || null === l
          ? ((a = t),
            (!!v.call(x, a) ||
              (!v.call(b, a) &&
                (y.test(a) ? (x[a] = !0) : ((b[a] = !0), !1)))) &&
              (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n)))
          : l.mustUseProperty
          ? (e[l.propertyName] = null === n ? 3 !== l.type && '' : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            null === n
              ? e.removeAttribute(t)
              : ((n =
                  3 === (l = l.type) || (4 === l && !0 === n) ? '' : '' + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(E, C);
        S[t] = new k(t, 1, !1, e, null, !1, !1);
      }),
      'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
        .split(' ')
        .forEach(function (e) {
          var t = e.replace(E, C);
          S[t] = new k(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
        }),
      ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(E, C);
        S[t] = new k(
          t,
          1,
          !1,
          e,
          'http://www.w3.org/XML/1998/namespace',
          !1,
          !1
        );
      }),
      ['tabIndex', 'crossOrigin'].forEach(function (e) {
        S[e] = new k(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (S.xlinkHref = new k(
        'xlinkHref',
        1,
        !1,
        'xlink:href',
        'http://www.w3.org/1999/xlink',
        !0,
        !1
      )),
      ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        S[e] = new k(e, 1, !1, e.toLowerCase(), null, !0, !0);
      });
    var j = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      _ = Symbol.for('react.element'),
      P = Symbol.for('react.portal'),
      R = Symbol.for('react.fragment'),
      O = Symbol.for('react.strict_mode'),
      L = Symbol.for('react.profiler'),
      T = Symbol.for('react.provider'),
      M = Symbol.for('react.context'),
      I = Symbol.for('react.forward_ref'),
      F = Symbol.for('react.suspense'),
      z = Symbol.for('react.suspense_list'),
      D = Symbol.for('react.memo'),
      $ = Symbol.for('react.lazy');
    Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
    var U = Symbol.for('react.offscreen');
    Symbol.for('react.legacy_hidden'),
      Symbol.for('react.cache'),
      Symbol.for('react.tracing_marker');
    var A = Symbol.iterator;
    function B(e) {
      return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (A && e[A]) || e['@@iterator'])
        ? e
        : null;
    }
    var W,
      V,
      H,
      K,
      Q,
      q,
      G,
      Y,
      X,
      J,
      Z,
      ee,
      et,
      en = Object.assign;
    function er(e) {
      if (void 0 === et)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          et = (t && t[1]) || '';
        }
      return '\n' + et + e;
    }
    var ea = !1;
    function el(e, t) {
      if (!e || ea) return '';
      ea = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t) {
          if (
            ((t = function () {
              throw Error();
            }),
            Object.defineProperty(t.prototype, 'props', {
              set: function () {
                throw Error();
              },
            }),
            'object' == typeof Reflect && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, []);
            } catch (e) {
              var r = e;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (e) {
              r = e;
            }
            e.call(t.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (e) {
            r = e;
          }
          e();
        }
      } catch (t) {
        if (t && r && 'string' == typeof t.stack) {
          for (
            var a = t.stack.split('\n'),
              l = r.stack.split('\n'),
              o = a.length - 1,
              i = l.length - 1;
            1 <= o && 0 <= i && a[o] !== l[i];

          )
            i--;
          for (; 1 <= o && 0 <= i; o--, i--)
            if (a[o] !== l[i]) {
              if (1 !== o || 1 !== i)
                do
                  if ((o--, 0 > --i || a[o] !== l[i])) {
                    var s = '\n' + a[o].replace(' at new ', ' at ');
                    return (
                      e.displayName &&
                        s.includes('<anonymous>') &&
                        (s = s.replace('<anonymous>', e.displayName)),
                      s
                    );
                  }
                while (1 <= o && 0 <= i);
              break;
            }
        }
      } finally {
        (ea = !1), (Error.prepareStackTrace = n);
      }
      return (e = e ? e.displayName || e.name : '') ? er(e) : '';
    }
    function eo(e) {
      switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
        case 'object':
          return e;
        default:
          return '';
      }
    }
    function ei(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        'input' === e.toLowerCase() &&
        ('checkbox' === t || 'radio' === t)
      );
    }
    function es(e) {
      e._valueTracker ||
        (e._valueTracker = (function (e) {
          var t = ei(e) ? 'checked' : 'value',
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = '' + e[t];
          if (
            !e.hasOwnProperty(t) &&
            void 0 !== n &&
            'function' == typeof n.get &&
            'function' == typeof n.set
          ) {
            var a = n.get,
              l = n.set;
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                  return a.call(this);
                },
                set: function (e) {
                  (r = '' + e), l.call(this, e);
                },
              }),
              Object.defineProperty(e, t, { enumerable: n.enumerable }),
              {
                getValue: function () {
                  return r;
                },
                setValue: function (e) {
                  r = '' + e;
                },
                stopTracking: function () {
                  (e._valueTracker = null), delete e[t];
                },
              }
            );
          }
        })(e));
    }
    function eu(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = '';
      return (
        e && (r = ei(e) ? (e.checked ? 'true' : 'false') : e.value),
        (e = r) !== n && (t.setValue(e), !0)
      );
    }
    function ec(e) {
      if (
        void 0 ===
        (e = e || ('undefined' != typeof document ? document : void 0))
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    function ed(e, t) {
      var n = t.checked;
      return en({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
      });
    }
    function ef(e, t) {
      var n = null == t.defaultValue ? '' : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
      (n = eo(null != t.value ? t.value : n)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            'checkbox' === t.type || 'radio' === t.type
              ? null != t.checked
              : null != t.value,
        });
    }
    function ep(e, t) {
      null != (t = t.checked) && N(e, 'checked', t, !1);
    }
    function eh(e, t) {
      ep(e, t);
      var n = eo(t.value),
        r = t.type;
      if (null != n)
        'number' === r
          ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
          : e.value !== '' + n && (e.value = '' + n);
      else if ('submit' === r || 'reset' === r) {
        e.removeAttribute('value');
        return;
      }
      t.hasOwnProperty('value')
        ? eg(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && eg(e, t.type, eo(t.defaultValue)),
        null == t.checked &&
          null != t.defaultChecked &&
          (e.defaultChecked = !!t.defaultChecked);
    }
    function em(e, t, n) {
      if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (
          !(
            ('submit' !== r && 'reset' !== r) ||
            (void 0 !== t.value && null !== t.value)
          )
        )
          return;
        (t = '' + e._wrapperState.initialValue),
          n || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      '' !== (n = e.name) && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        '' !== n && (e.name = n);
    }
    function eg(e, t, n) {
      ('number' !== t || ec(e.ownerDocument) !== e) &&
        (null == n
          ? (e.defaultValue = '' + e._wrapperState.initialValue)
          : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
    }
    var ev = Array.isArray;
    function ey(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
        for (n = 0; n < e.length; n++)
          (a = t.hasOwnProperty('$' + e[n].value)),
            e[n].selected !== a && (e[n].selected = a),
            a && r && (e[n].defaultSelected = !0);
      } else {
        for (a = 0, n = '' + eo(n), t = null; a < e.length; a++) {
          if (e[a].value === n) {
            (e[a].selected = !0), r && (e[a].defaultSelected = !0);
            return;
          }
          null !== t || e[a].disabled || (t = e[a]);
        }
        null !== t && (t.selected = !0);
      }
    }
    function eb(e, t) {
      if (null != t.dangerouslySetInnerHTML) throw Error(d(91));
      return en({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: '' + e._wrapperState.initialValue,
      });
    }
    function ex(e, t) {
      var n = t.value;
      if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
          if (null != t) throw Error(d(92));
          if (ev(n)) {
            if (1 < n.length) throw Error(d(93));
            n = n[0];
          }
          t = n;
        }
        null == t && (t = ''), (n = t);
      }
      e._wrapperState = { initialValue: eo(n) };
    }
    function ew(e, t) {
      var n = eo(t.value),
        r = eo(t.defaultValue);
      null != n &&
        ((n = '' + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = '' + r);
    }
    function ek(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        '' !== t &&
        null !== t &&
        (e.value = t);
    }
    function eS(e) {
      switch (e) {
        case 'svg':
          return 'http://www.w3.org/2000/svg';
        case 'math':
          return 'http://www.w3.org/1998/Math/MathML';
        default:
          return 'http://www.w3.org/1999/xhtml';
      }
    }
    function eE(e, t) {
      return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? eS(t)
        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
        ? 'http://www.w3.org/1999/xhtml'
        : e;
    }
    var eC,
      eN,
      ej =
        ((eC = function (e, t) {
          if (
            'http://www.w3.org/2000/svg' !== e.namespaceURI ||
            'innerHTML' in e
          )
            e.innerHTML = t;
          else {
            for (
              (eN = eN || document.createElement('div')).innerHTML =
                '<svg>' + t.valueOf().toString() + '</svg>',
                t = eN.firstChild;
              e.firstChild;

            )
              e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
          }
        }),
        'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (e, t, n, r) {
              MSApp.execUnsafeLocalFunction(function () {
                return eC(e, t, n, r);
              });
            }
          : eC);
    function e_(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var eP = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      eR = ['Webkit', 'ms', 'Moz', 'O'];
    function eO(e, t, n) {
      return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n ||
          'number' != typeof t ||
          0 === t ||
          (eP.hasOwnProperty(e) && eP[e])
        ? ('' + t).trim()
        : t + 'px';
    }
    function eL(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf('--'),
            a = eO(n, t[n], r);
          'float' === n && (n = 'cssFloat'),
            r ? e.setProperty(n, a) : (e[n] = a);
        }
    }
    Object.keys(eP).forEach(function (e) {
      eR.forEach(function (t) {
        eP[(t = t + e.charAt(0).toUpperCase() + e.substring(1))] = eP[e];
      });
    });
    var eT = en(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    );
    function eM(e, t) {
      if (t) {
        if (eT[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
          throw Error(d(137, e));
        if (null != t.dangerouslySetInnerHTML) {
          if (null != t.children) throw Error(d(60));
          if (
            'object' != typeof t.dangerouslySetInnerHTML ||
            !('__html' in t.dangerouslySetInnerHTML)
          )
            throw Error(d(61));
        }
        if (null != t.style && 'object' != typeof t.style) throw Error(d(62));
      }
    }
    function eI(e, t) {
      if (-1 === e.indexOf('-')) return 'string' == typeof t.is;
      switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
          return !1;
        default:
          return !0;
      }
    }
    var eF = null;
    function ez(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement &&
          (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    var eD = null,
      e$ = null,
      eU = null;
    function eA(e) {
      if ((e = rG(e))) {
        if ('function' != typeof eD) throw Error(d(280));
        var t = e.stateNode;
        t && ((t = rX(t)), eD(e.stateNode, e.type, t));
      }
    }
    function eB(e) {
      e$ ? (eU ? eU.push(e) : (eU = [e])) : (e$ = e);
    }
    function eW() {
      if (e$) {
        var e = e$,
          t = eU;
        if (((eU = e$ = null), eA(e), t))
          for (e = 0; e < t.length; e++) eA(t[e]);
      }
    }
    function eV(e, t) {
      return e(t);
    }
    function eH() {}
    var eK = !1;
    function eQ(e, t, n) {
      if (eK) return e(t, n);
      eK = !0;
      try {
        return eV(e, t, n);
      } finally {
        (eK = !1), (null !== e$ || null !== eU) && (eH(), eW());
      }
    }
    function eq(e, t) {
      var n = e.stateNode;
      if (null === n) return null;
      var r = rX(n);
      if (null === r) return null;
      switch (((n = r[t]), t)) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
          (r = !r.disabled) ||
            (r = !(
              'button' === (e = e.type) ||
              'input' === e ||
              'select' === e ||
              'textarea' === e
            )),
            (e = !r);
          break;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && 'function' != typeof n) throw Error(d(231, t, typeof n));
      return n;
    }
    var eG = !1;
    if (g)
      try {
        var eY = {};
        Object.defineProperty(eY, 'passive', {
          get: function () {
            eG = !0;
          },
        }),
          window.addEventListener('test', eY, eY),
          window.removeEventListener('test', eY, eY);
      } catch (e) {
        eG = !1;
      }
    function eX(e, t, n, r, a, l, o, i, s) {
      var u = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, u);
      } catch (e) {
        this.onError(e);
      }
    }
    var eJ = !1,
      eZ = null,
      e0 = !1,
      e1 = null,
      e2 = {
        onError: function (e) {
          (eJ = !0), (eZ = e);
        },
      };
    function e3(e, t, n, r, a, l, o, i, s) {
      (eJ = !1), (eZ = null), eX.apply(e2, arguments);
    }
    function e6(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do 0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
        while (e);
      }
      return 3 === t.tag ? n : null;
    }
    function e4(e) {
      if (13 === e.tag) {
        var t = e.memoizedState;
        if (
          (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
          null !== t)
        )
          return t.dehydrated;
      }
      return null;
    }
    function e5(e) {
      if (e6(e) !== e) throw Error(d(188));
    }
    function e8(e) {
      return null !==
        (e = (function (e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = e6(e))) throw Error(d(188));
            return t !== e ? null : e;
          }
          for (var n = e, r = t; ; ) {
            var a = n.return;
            if (null === a) break;
            var l = a.alternate;
            if (null === l) {
              if (null !== (r = a.return)) {
                n = r;
                continue;
              }
              break;
            }
            if (a.child === l.child) {
              for (l = a.child; l; ) {
                if (l === n) return e5(a), e;
                if (l === r) return e5(a), t;
                l = l.sibling;
              }
              throw Error(d(188));
            }
            if (n.return !== r.return) (n = a), (r = l);
            else {
              for (var o = !1, i = a.child; i; ) {
                if (i === n) {
                  (o = !0), (n = a), (r = l);
                  break;
                }
                if (i === r) {
                  (o = !0), (r = a), (n = l);
                  break;
                }
                i = i.sibling;
              }
              if (!o) {
                for (i = l.child; i; ) {
                  if (i === n) {
                    (o = !0), (n = l), (r = a);
                    break;
                  }
                  if (i === r) {
                    (o = !0), (r = l), (n = a);
                    break;
                  }
                  i = i.sibling;
                }
                if (!o) throw Error(d(189));
              }
            }
            if (n.alternate !== r) throw Error(d(190));
          }
          if (3 !== n.tag) throw Error(d(188));
          return n.stateNode.current === n ? e : t;
        })(e))
        ? (function e(t) {
            if (5 === t.tag || 6 === t.tag) return t;
            for (t = t.child; null !== t; ) {
              var n = e(t);
              if (null !== n) return n;
              t = t.sibling;
            }
            return null;
          })(e)
        : null;
    }
    var e9 = c.unstable_scheduleCallback,
      e7 = c.unstable_cancelCallback,
      te = c.unstable_shouldYield,
      tt = c.unstable_requestPaint,
      tn = c.unstable_now,
      tr = c.unstable_getCurrentPriorityLevel,
      ta = c.unstable_ImmediatePriority,
      tl = c.unstable_UserBlockingPriority,
      to = c.unstable_NormalPriority,
      ti = c.unstable_LowPriority,
      ts = c.unstable_IdlePriority,
      tu = null,
      tc = null,
      td = Math.clz32
        ? Math.clz32
        : function (e) {
            return 0 == (e >>>= 0) ? 32 : (31 - ((tf(e) / tp) | 0)) | 0;
          },
      tf = Math.log,
      tp = Math.LN2,
      th = 64,
      tm = 4194304;
    function tg(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return 4194240 & e;
        case 4194304:
        case 8388608:
        case 0x1000000:
        case 0x2000000:
        case 0x4000000:
          return 0x7c00000 & e;
        case 0x8000000:
          return 0x8000000;
        case 0x10000000:
          return 0x10000000;
        case 0x20000000:
          return 0x20000000;
        case 0x40000000:
          return 0x40000000;
        default:
          return e;
      }
    }
    function tv(e, t) {
      var n = e.pendingLanes;
      if (0 === n) return 0;
      var r = 0,
        a = e.suspendedLanes,
        l = e.pingedLanes,
        o = 0xfffffff & n;
      if (0 !== o) {
        var i = o & ~a;
        0 !== i ? (r = tg(i)) : 0 != (l &= o) && (r = tg(l));
      } else 0 != (o = n & ~a) ? (r = tg(o)) : 0 !== l && (r = tg(l));
      if (0 === r) return 0;
      if (
        0 !== t &&
        t !== r &&
        0 == (t & a) &&
        ((a = r & -r) >= (l = t & -t) || (16 === a && 0 != (4194240 & l)))
      )
        return t;
      if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; )
          (a = 1 << (n = 31 - td(t))), (r |= e[n]), (t &= ~a);
      return r;
    }
    function ty(e) {
      return 0 != (e = -0x40000001 & e.pendingLanes)
        ? e
        : 0x40000000 & e
        ? 0x40000000
        : 0;
    }
    function tb() {
      var e = th;
      return 0 == (4194240 & (th <<= 1)) && (th = 64), e;
    }
    function tx(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function tw(e, t, n) {
      (e.pendingLanes |= t),
        0x20000000 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        ((e = e.eventTimes)[(t = 31 - td(t))] = n);
    }
    function tk(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - td(n),
          a = 1 << r;
        (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
      }
    }
    var tS = 0;
    function tE(e) {
      return 1 < (e &= -e)
        ? 4 < e
          ? 0 != (0xfffffff & e)
            ? 16
            : 0x20000000
          : 4
        : 1;
    }
    var tC,
      tN,
      tj,
      t_,
      tP,
      tR = !1,
      tO = [],
      tL = null,
      tT = null,
      tM = null,
      tI = new Map(),
      tF = new Map(),
      tz = [],
      tD =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
          ' '
        );
    function t$(e, t) {
      switch (e) {
        case 'focusin':
        case 'focusout':
          tL = null;
          break;
        case 'dragenter':
        case 'dragleave':
          tT = null;
          break;
        case 'mouseover':
        case 'mouseout':
          tM = null;
          break;
        case 'pointerover':
        case 'pointerout':
          tI.delete(t.pointerId);
          break;
        case 'gotpointercapture':
        case 'lostpointercapture':
          tF.delete(t.pointerId);
      }
    }
    function tU(e, t, n, r, a, l) {
      return (
        null === e || e.nativeEvent !== l
          ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: l,
              targetContainers: [a],
            }),
            null !== t && null !== (t = rG(t)) && tN(t))
          : ((e.eventSystemFlags |= r),
            (t = e.targetContainers),
            null !== a && -1 === t.indexOf(a) && t.push(a)),
        e
      );
    }
    function tA(e) {
      var t = rq(e.target);
      if (null !== t) {
        var n = e6(t);
        if (null !== n) {
          if (13 === (t = n.tag)) {
            if (null !== (t = e4(n))) {
              (e.blockedOn = t),
                tP(e.priority, function () {
                  tj(n);
                });
              return;
            }
          } else if (
            3 === t &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function tB(e) {
      if (null !== e.blockedOn) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = tZ(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n)
          return null !== (t = rG(n)) && tN(t), (e.blockedOn = n), !1;
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        (eF = r), n.target.dispatchEvent(r), (eF = null), t.shift();
      }
      return !0;
    }
    function tW(e, t, n) {
      tB(e) && n.delete(t);
    }
    function tV() {
      (tR = !1),
        null !== tL && tB(tL) && (tL = null),
        null !== tT && tB(tT) && (tT = null),
        null !== tM && tB(tM) && (tM = null),
        tI.forEach(tW),
        tF.forEach(tW);
    }
    function tH(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        tR ||
          ((tR = !0),
          c.unstable_scheduleCallback(c.unstable_NormalPriority, tV)));
    }
    function tK(e) {
      function t(t) {
        return tH(t, e);
      }
      if (0 < tO.length) {
        tH(tO[0], e);
        for (var n = 1; n < tO.length; n++) {
          var r = tO[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        null !== tL && tH(tL, e),
          null !== tT && tH(tT, e),
          null !== tM && tH(tM, e),
          tI.forEach(t),
          tF.forEach(t),
          n = 0;
        n < tz.length;
        n++
      )
        (r = tz[n]).blockedOn === e && (r.blockedOn = null);
      for (; 0 < tz.length && null === (n = tz[0]).blockedOn; )
        tA(n), null === n.blockedOn && tz.shift();
    }
    var tQ = j.ReactCurrentBatchConfig,
      tq = !0;
    function tG(e, t, n, r) {
      var a = tS,
        l = tQ.transition;
      tQ.transition = null;
      try {
        (tS = 1), tX(e, t, n, r);
      } finally {
        (tS = a), (tQ.transition = l);
      }
    }
    function tY(e, t, n, r) {
      var a = tS,
        l = tQ.transition;
      tQ.transition = null;
      try {
        (tS = 4), tX(e, t, n, r);
      } finally {
        (tS = a), (tQ.transition = l);
      }
    }
    function tX(e, t, n, r) {
      if (tq) {
        var a = tZ(e, t, n, r);
        if (null === a) rx(e, t, r, tJ, n), t$(e, r);
        else if (
          (function (e, t, n, r, a) {
            switch (t) {
              case 'focusin':
                return (tL = tU(tL, e, t, n, r, a)), !0;
              case 'dragenter':
                return (tT = tU(tT, e, t, n, r, a)), !0;
              case 'mouseover':
                return (tM = tU(tM, e, t, n, r, a)), !0;
              case 'pointerover':
                var l = a.pointerId;
                return tI.set(l, tU(tI.get(l) || null, e, t, n, r, a)), !0;
              case 'gotpointercapture':
                return (
                  (l = a.pointerId),
                  tF.set(l, tU(tF.get(l) || null, e, t, n, r, a)),
                  !0
                );
            }
            return !1;
          })(a, e, t, n, r)
        )
          r.stopPropagation();
        else if ((t$(e, r), 4 & t && -1 < tD.indexOf(e))) {
          for (; null !== a; ) {
            var l = rG(a);
            if (
              (null !== l && tC(l),
              null === (l = tZ(e, t, n, r)) && rx(e, t, r, tJ, n),
              l === a)
            )
              break;
            a = l;
          }
          null !== a && r.stopPropagation();
        } else rx(e, t, r, null, n);
      }
    }
    var tJ = null;
    function tZ(e, t, n, r) {
      if (((tJ = null), null !== (e = rq((e = ez(r)))))) {
        if (null === (t = e6(e))) e = null;
        else if (13 === (n = t.tag)) {
          if (null !== (e = e4(t))) return e;
          e = null;
        } else if (3 === n) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return 3 === t.tag ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
      return (tJ = e), null;
    }
    function t0(e) {
      switch (e) {
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
          return 1;
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'toggle':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
          return 4;
        case 'message':
          switch (tr()) {
            case ta:
              return 1;
            case tl:
              return 4;
            case to:
            case ti:
              return 16;
            case ts:
              return 0x20000000;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var t1 = null,
      t2 = null,
      t3 = null;
    function t6() {
      if (t3) return t3;
      var e,
        t,
        n = t2,
        r = n.length,
        a = 'value' in t1 ? t1.value : t1.textContent,
        l = a.length;
      for (e = 0; e < r && n[e] === a[e]; e++);
      var o = r - e;
      for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
      return (t3 = a.slice(e, 1 < t ? 1 - t : void 0));
    }
    function t4(e) {
      var t = e.keyCode;
      return (
        'charCode' in e
          ? 0 === (e = e.charCode) && 13 === t && (e = 13)
          : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
      );
    }
    function t5() {
      return !0;
    }
    function t8() {
      return !1;
    }
    function t9(e) {
      function t(t, n, r, a, l) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = a),
        (this.target = l),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
        return (
          (this.isDefaultPrevented = (
            null != a.defaultPrevented
              ? a.defaultPrevented
              : !1 === a.returnValue
          )
            ? t5
            : t8),
          (this.isPropagationStopped = t8),
          this
        );
      }
      return (
        en(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
              (this.isDefaultPrevented = t5));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
              (this.isPropagationStopped = t5));
          },
          persist: function () {},
          isPersistent: t5,
        }),
        t
      );
    }
    var t7,
      ne,
      nt,
      nn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      nr = t9(nn),
      na = en({}, nn, { view: 0, detail: 0 }),
      nl = t9(na),
      no = en({}, na, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: nv,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return void 0 === e.relatedTarget
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return 'movementX' in e
            ? e.movementX
            : (e !== nt &&
                (nt && 'mousemove' === e.type
                  ? ((t7 = e.screenX - nt.screenX),
                    (ne = e.screenY - nt.screenY))
                  : (ne = t7 = 0),
                (nt = e)),
              t7);
        },
        movementY: function (e) {
          return 'movementY' in e ? e.movementY : ne;
        },
      }),
      ni = t9(no),
      ns = t9(en({}, no, { dataTransfer: 0 })),
      nu = t9(en({}, na, { relatedTarget: 0 })),
      nc = t9(
        en({}, nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
      ),
      nd = t9(
        en({}, nn, {
          clipboardData: function (e) {
            return 'clipboardData' in e
              ? e.clipboardData
              : window.clipboardData;
          },
        })
      ),
      nf = t9(en({}, nn, { data: 0 })),
      np = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
      },
      nh = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
      },
      nm = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey',
      };
    function ng(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : !!(e = nm[e]) && !!t[e];
    }
    function nv() {
      return ng;
    }
    var ny = t9(
        en({}, na, {
          key: function (e) {
            if (e.key) {
              var t = np[e.key] || e.key;
              if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
              ? 13 === (e = t4(e))
                ? 'Enter'
                : String.fromCharCode(e)
              : 'keydown' === e.type || 'keyup' === e.type
              ? nh[e.keyCode] || 'Unidentified'
              : '';
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: nv,
          charCode: function (e) {
            return 'keypress' === e.type ? t4(e) : 0;
          },
          keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return 'keypress' === e.type
              ? t4(e)
              : 'keydown' === e.type || 'keyup' === e.type
              ? e.keyCode
              : 0;
          },
        })
      ),
      nb = t9(
        en({}, no, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        })
      ),
      nx = t9(
        en({}, na, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: nv,
        })
      ),
      nw = t9(
        en({}, nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
      ),
      nk = t9(
        en({}, no, {
          deltaX: function (e) {
            return 'deltaX' in e
              ? e.deltaX
              : 'wheelDeltaX' in e
              ? -e.wheelDeltaX
              : 0;
          },
          deltaY: function (e) {
            return 'deltaY' in e
              ? e.deltaY
              : 'wheelDeltaY' in e
              ? -e.wheelDeltaY
              : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        })
      ),
      nS = [9, 13, 27, 32],
      nE = g && 'CompositionEvent' in window,
      nC = null;
    g && 'documentMode' in document && (nC = document.documentMode);
    var nN = g && 'TextEvent' in window && !nC,
      nj = g && (!nE || (nC && 8 < nC && 11 >= nC)),
      n_ = !1;
    function nP(e, t) {
      switch (e) {
        case 'keyup':
          return -1 !== nS.indexOf(t.keyCode);
        case 'keydown':
          return 229 !== t.keyCode;
        case 'keypress':
        case 'mousedown':
        case 'focusout':
          return !0;
        default:
          return !1;
      }
    }
    function nR(e) {
      return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
    }
    var nO = !1,
      nL = {
        color: !0,
        date: !0,
        datetime: !0,
        'datetime-local': !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
    function nT(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return 'input' === t ? !!nL[e.type] : 'textarea' === t;
    }
    function nM(e, t, n, r) {
      eB(r),
        0 < (t = rk(t, 'onChange')).length &&
          ((n = new nr('onChange', 'change', null, n, r)),
          e.push({ event: n, listeners: t }));
    }
    var nI = null,
      nF = null;
    function nz(e) {
      rh(e, 0);
    }
    function nD(e) {
      if (eu(rY(e))) return e;
    }
    function n$(e, t) {
      if ('change' === e) return t;
    }
    var nU = !1;
    if (g) {
      if (g) {
        var nA = 'oninput' in document;
        if (!nA) {
          var nB = document.createElement('div');
          nB.setAttribute('oninput', 'return;'),
            (nA = 'function' == typeof nB.oninput);
        }
        r = nA;
      } else r = !1;
      nU = r && (!document.documentMode || 9 < document.documentMode);
    }
    function nW() {
      nI && (nI.detachEvent('onpropertychange', nV), (nF = nI = null));
    }
    function nV(e) {
      if ('value' === e.propertyName && nD(nF)) {
        var t = [];
        nM(t, nF, e, ez(e)), eQ(nz, t);
      }
    }
    function nH(e, t, n) {
      'focusin' === e
        ? (nW(), (nI = t), (nF = n), nI.attachEvent('onpropertychange', nV))
        : 'focusout' === e && nW();
    }
    function nK(e) {
      if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
        return nD(nF);
    }
    function nQ(e, t) {
      if ('click' === e) return nD(t);
    }
    function nq(e, t) {
      if ('input' === e || 'change' === e) return nD(t);
    }
    var nG =
      'function' == typeof Object.is
        ? Object.is
        : function (e, t) {
            return (
              (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
            );
          };
    function nY(e, t) {
      if (nG(e, t)) return !0;
      if (
        'object' != typeof e ||
        null === e ||
        'object' != typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var a = n[r];
        if (!v.call(t, a) || !nG(e[a], t[a])) return !1;
      }
      return !0;
    }
    function nX(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function nJ(e, t) {
      var n,
        r = nX(e);
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((n = e + r.textContent.length), e <= t && n >= t))
            return { node: r, offset: t - e };
          e = n;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = nX(r);
      }
    }
    function nZ() {
      for (var e = window, t = ec(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = 'string' == typeof t.contentWindow.location.href;
        } catch (e) {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = ec(e.document);
      }
      return t;
    }
    function n0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        (('input' === t &&
          ('text' === e.type ||
            'search' === e.type ||
            'tel' === e.type ||
            'url' === e.type ||
            'password' === e.type)) ||
          'textarea' === t ||
          'true' === e.contentEditable)
      );
    }
    var n1 = g && 'documentMode' in document && 11 >= document.documentMode,
      n2 = null,
      n3 = null,
      n6 = null,
      n4 = !1;
    function n5(e, t, n) {
      var r =
        n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
      n4 ||
        null == n2 ||
        n2 !== ec(r) ||
        ((r =
          'selectionStart' in (r = n2) && n0(r)
            ? { start: r.selectionStart, end: r.selectionEnd }
            : {
                anchorNode: (r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset,
              }),
        (n6 && nY(n6, r)) ||
          ((n6 = r),
          0 < (r = rk(n3, 'onSelect')).length &&
            ((t = new nr('onSelect', 'select', null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = n2))));
    }
    function n8(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n['Webkit' + e] = 'webkit' + t),
        (n['Moz' + e] = 'moz' + t),
        n
      );
    }
    var n9 = {
        animationend: n8('Animation', 'AnimationEnd'),
        animationiteration: n8('Animation', 'AnimationIteration'),
        animationstart: n8('Animation', 'AnimationStart'),
        transitionend: n8('Transition', 'TransitionEnd'),
      },
      n7 = {},
      re = {};
    function rt(e) {
      if (n7[e]) return n7[e];
      if (!n9[e]) return e;
      var t,
        n = n9[e];
      for (t in n) if (n.hasOwnProperty(t) && t in re) return (n7[e] = n[t]);
      return e;
    }
    g &&
      ((re = document.createElement('div').style),
      'AnimationEvent' in window ||
        (delete n9.animationend.animation,
        delete n9.animationiteration.animation,
        delete n9.animationstart.animation),
      'TransitionEvent' in window || delete n9.transitionend.transition);
    var rn = rt('animationend'),
      rr = rt('animationiteration'),
      ra = rt('animationstart'),
      rl = rt('transitionend'),
      ro = new Map(),
      ri =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
          ' '
        );
    function rs(e, t) {
      ro.set(e, t), h(t, [e]);
    }
    for (var ru = 0; ru < ri.length; ru++) {
      var rc = ri[ru];
      rs(rc.toLowerCase(), 'on' + (rc[0].toUpperCase() + rc.slice(1)));
    }
    rs(rn, 'onAnimationEnd'),
      rs(rr, 'onAnimationIteration'),
      rs(ra, 'onAnimationStart'),
      rs('dblclick', 'onDoubleClick'),
      rs('focusin', 'onFocus'),
      rs('focusout', 'onBlur'),
      rs(rl, 'onTransitionEnd'),
      m('onMouseEnter', ['mouseout', 'mouseover']),
      m('onMouseLeave', ['mouseout', 'mouseover']),
      m('onPointerEnter', ['pointerout', 'pointerover']),
      m('onPointerLeave', ['pointerout', 'pointerover']),
      h(
        'onChange',
        'change click focusin focusout input keydown keyup selectionchange'.split(
          ' '
        )
      ),
      h(
        'onSelect',
        'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
          ' '
        )
      ),
      h('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
      h(
        'onCompositionEnd',
        'compositionend focusout keydown keypress keyup mousedown'.split(' ')
      ),
      h(
        'onCompositionStart',
        'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
      ),
      h(
        'onCompositionUpdate',
        'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
      );
    var rd =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
          ' '
        ),
      rf = new Set(
        'cancel close invalid load scroll toggle'.split(' ').concat(rd)
      );
    function rp(e, t, n) {
      var r = e.type || 'unknown-event';
      (e.currentTarget = n),
        (function (e, t, n, r, a, l, o, i, s) {
          if ((e3.apply(this, arguments), eJ)) {
            if (eJ) {
              var u = eZ;
              (eJ = !1), (eZ = null);
            } else throw Error(d(198));
            e0 || ((e0 = !0), (e1 = u));
          }
        })(r, t, void 0, e),
        (e.currentTarget = null);
    }
    function rh(e, t) {
      t = 0 != (4 & t);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          a = r.event;
        r = r.listeners;
        e: {
          var l = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var i = r[o],
                s = i.instance,
                u = i.currentTarget;
              if (((i = i.listener), s !== l && a.isPropagationStopped()))
                break e;
              rp(a, i, u), (l = s);
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = (i = r[o]).instance),
                (u = i.currentTarget),
                (i = i.listener),
                s !== l && a.isPropagationStopped())
              )
                break e;
              rp(a, i, u), (l = s);
            }
        }
      }
      if (e0) throw ((e = e1), (e0 = !1), (e1 = null), e);
    }
    function rm(e, t) {
      var n = t[rH];
      void 0 === n && (n = t[rH] = new Set());
      var r = e + '__bubble';
      n.has(r) || (rb(t, e, 2, !1), n.add(r));
    }
    function rg(e, t, n) {
      var r = 0;
      t && (r |= 4), rb(n, e, r, t);
    }
    var rv = '_reactListening' + Math.random().toString(36).slice(2);
    function ry(e) {
      if (!e[rv]) {
        (e[rv] = !0),
          f.forEach(function (t) {
            'selectionchange' !== t &&
              (rf.has(t) || rg(t, !1, e), rg(t, !0, e));
          });
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[rv] || ((t[rv] = !0), rg('selectionchange', !1, t));
      }
    }
    function rb(e, t, n, r) {
      switch (t0(t)) {
        case 1:
          var a = tG;
          break;
        case 4:
          a = tY;
          break;
        default:
          a = tX;
      }
      (n = a.bind(null, t, n, e)),
        (a = void 0),
        eG &&
          ('touchstart' === t || 'touchmove' === t || 'wheel' === t) &&
          (a = !0),
        r
          ? void 0 !== a
            ? e.addEventListener(t, n, { capture: !0, passive: a })
            : e.addEventListener(t, n, !0)
          : void 0 !== a
          ? e.addEventListener(t, n, { passive: a })
          : e.addEventListener(t, n, !1);
    }
    function rx(e, t, n, r, a) {
      var l = r;
      if (0 == (1 & t) && 0 == (2 & t) && null !== r)
        e: for (;;) {
          if (null === r) return;
          var o = r.tag;
          if (3 === o || 4 === o) {
            var i = r.stateNode.containerInfo;
            if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
            if (4 === o)
              for (o = r.return; null !== o; ) {
                var s = o.tag;
                if (
                  (3 === s || 4 === s) &&
                  ((s = o.stateNode.containerInfo) === a ||
                    (8 === s.nodeType && s.parentNode === a))
                )
                  return;
                o = o.return;
              }
            for (; null !== i; ) {
              if (null === (o = rq(i))) return;
              if (5 === (s = o.tag) || 6 === s) {
                r = l = o;
                continue e;
              }
              i = i.parentNode;
            }
          }
          r = r.return;
        }
      eQ(function () {
        var r = l,
          a = ez(n),
          o = [];
        e: {
          var i = ro.get(e);
          if (void 0 !== i) {
            var s = nr,
              u = e;
            switch (e) {
              case 'keypress':
                if (0 === t4(n)) break e;
              case 'keydown':
              case 'keyup':
                s = ny;
                break;
              case 'focusin':
                (u = 'focus'), (s = nu);
                break;
              case 'focusout':
                (u = 'blur'), (s = nu);
                break;
              case 'beforeblur':
              case 'afterblur':
                s = nu;
                break;
              case 'click':
                if (2 === n.button) break e;
              case 'auxclick':
              case 'dblclick':
              case 'mousedown':
              case 'mousemove':
              case 'mouseup':
              case 'mouseout':
              case 'mouseover':
              case 'contextmenu':
                s = ni;
                break;
              case 'drag':
              case 'dragend':
              case 'dragenter':
              case 'dragexit':
              case 'dragleave':
              case 'dragover':
              case 'dragstart':
              case 'drop':
                s = ns;
                break;
              case 'touchcancel':
              case 'touchend':
              case 'touchmove':
              case 'touchstart':
                s = nx;
                break;
              case rn:
              case rr:
              case ra:
                s = nc;
                break;
              case rl:
                s = nw;
                break;
              case 'scroll':
                s = nl;
                break;
              case 'wheel':
                s = nk;
                break;
              case 'copy':
              case 'cut':
              case 'paste':
                s = nd;
                break;
              case 'gotpointercapture':
              case 'lostpointercapture':
              case 'pointercancel':
              case 'pointerdown':
              case 'pointermove':
              case 'pointerout':
              case 'pointerover':
              case 'pointerup':
                s = nb;
            }
            var c = 0 != (4 & t),
              d = !c && 'scroll' === e,
              f = c ? (null !== i ? i + 'Capture' : null) : i;
            c = [];
            for (var p, h = r; null !== h; ) {
              var m = (p = h).stateNode;
              if (
                (5 === p.tag &&
                  null !== m &&
                  ((p = m),
                  null !== f && null != (m = eq(h, f)) && c.push(rw(h, m, p))),
                d)
              )
                break;
              h = h.return;
            }
            0 < c.length &&
              ((i = new s(i, u, null, n, a)),
              o.push({ event: i, listeners: c }));
          }
        }
        if (0 == (7 & t)) {
          if (
            ((i = 'mouseover' === e || 'pointerover' === e),
            (s = 'mouseout' === e || 'pointerout' === e),
            !(
              i &&
              n !== eF &&
              (u = n.relatedTarget || n.fromElement) &&
              (rq(u) || u[rV])
            ) &&
              (s || i) &&
              ((i =
                a.window === a
                  ? a
                  : (i = a.ownerDocument)
                  ? i.defaultView || i.parentWindow
                  : window),
              s
                ? ((u = n.relatedTarget || n.toElement),
                  (s = r),
                  null !== (u = u ? rq(u) : null) &&
                    ((d = e6(u)), u !== d || (5 !== u.tag && 6 !== u.tag)) &&
                    (u = null))
                : ((s = null), (u = r)),
              s !== u))
          ) {
            if (
              ((c = ni),
              (m = 'onMouseLeave'),
              (f = 'onMouseEnter'),
              (h = 'mouse'),
              ('pointerout' === e || 'pointerover' === e) &&
                ((c = nb),
                (m = 'onPointerLeave'),
                (f = 'onPointerEnter'),
                (h = 'pointer')),
              (d = null == s ? i : rY(s)),
              (p = null == u ? i : rY(u)),
              ((i = new c(m, h + 'leave', s, n, a)).target = d),
              (i.relatedTarget = p),
              (m = null),
              rq(a) === r &&
                (((c = new c(f, h + 'enter', u, n, a)).target = p),
                (c.relatedTarget = d),
                (m = c)),
              (d = m),
              s && u)
            )
              t: {
                for (c = s, f = u, h = 0, p = c; p; p = rS(p)) h++;
                for (p = 0, m = f; m; m = rS(m)) p++;
                for (; 0 < h - p; ) (c = rS(c)), h--;
                for (; 0 < p - h; ) (f = rS(f)), p--;
                for (; h--; ) {
                  if (c === f || (null !== f && c === f.alternate)) break t;
                  (c = rS(c)), (f = rS(f));
                }
                c = null;
              }
            else c = null;
            null !== s && rE(o, i, s, c, !1),
              null !== u && null !== d && rE(o, d, u, c, !0);
          }
          e: {
            if (
              'select' ===
                (s =
                  (i = r ? rY(r) : window).nodeName &&
                  i.nodeName.toLowerCase()) ||
              ('input' === s && 'file' === i.type)
            )
              var g,
                v = n$;
            else if (nT(i)) {
              if (nU) v = nq;
              else {
                v = nK;
                var y = nH;
              }
            } else
              (s = i.nodeName) &&
                'input' === s.toLowerCase() &&
                ('checkbox' === i.type || 'radio' === i.type) &&
                (v = nQ);
            if (v && (v = v(e, r))) {
              nM(o, v, n, a);
              break e;
            }
            y && y(e, i, r),
              'focusout' === e &&
                (y = i._wrapperState) &&
                y.controlled &&
                'number' === i.type &&
                eg(i, 'number', i.value);
          }
          switch (((y = r ? rY(r) : window), e)) {
            case 'focusin':
              (nT(y) || 'true' === y.contentEditable) &&
                ((n2 = y), (n3 = r), (n6 = null));
              break;
            case 'focusout':
              n6 = n3 = n2 = null;
              break;
            case 'mousedown':
              n4 = !0;
              break;
            case 'contextmenu':
            case 'mouseup':
            case 'dragend':
              (n4 = !1), n5(o, n, a);
              break;
            case 'selectionchange':
              if (n1) break;
            case 'keydown':
            case 'keyup':
              n5(o, n, a);
          }
          if (nE)
            t: {
              switch (e) {
                case 'compositionstart':
                  var b = 'onCompositionStart';
                  break t;
                case 'compositionend':
                  b = 'onCompositionEnd';
                  break t;
                case 'compositionupdate':
                  b = 'onCompositionUpdate';
                  break t;
              }
              b = void 0;
            }
          else
            nO
              ? nP(e, n) && (b = 'onCompositionEnd')
              : 'keydown' === e &&
                229 === n.keyCode &&
                (b = 'onCompositionStart');
          b &&
            (nj &&
              'ko' !== n.locale &&
              (nO || 'onCompositionStart' !== b
                ? 'onCompositionEnd' === b && nO && (g = t6())
                : ((t2 = 'value' in (t1 = a) ? t1.value : t1.textContent),
                  (nO = !0))),
            0 < (y = rk(r, b)).length &&
              ((b = new nf(b, e, null, n, a)),
              o.push({ event: b, listeners: y }),
              g ? (b.data = g) : null !== (g = nR(n)) && (b.data = g))),
            (g = nN
              ? (function (e, t) {
                  switch (e) {
                    case 'compositionend':
                      return nR(t);
                    case 'keypress':
                      if (32 !== t.which) return null;
                      return (n_ = !0), ' ';
                    case 'textInput':
                      return ' ' === (e = t.data) && n_ ? null : e;
                    default:
                      return null;
                  }
                })(e, n)
              : (function (e, t) {
                  if (nO)
                    return 'compositionend' === e || (!nE && nP(e, t))
                      ? ((e = t6()), (t3 = t2 = t1 = null), (nO = !1), e)
                      : null;
                  switch (e) {
                    case 'paste':
                    default:
                      return null;
                    case 'keypress':
                      if (
                        !(t.ctrlKey || t.altKey || t.metaKey) ||
                        (t.ctrlKey && t.altKey)
                      ) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                      }
                      return null;
                    case 'compositionend':
                      return nj && 'ko' !== t.locale ? null : t.data;
                  }
                })(e, n)) &&
              0 < (r = rk(r, 'onBeforeInput')).length &&
              ((a = new nf('onBeforeInput', 'beforeinput', null, n, a)),
              o.push({ event: a, listeners: r }),
              (a.data = g));
        }
        rh(o, t);
      });
    }
    function rw(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function rk(e, t) {
      for (var n = t + 'Capture', r = []; null !== e; ) {
        var a = e,
          l = a.stateNode;
        5 === a.tag &&
          null !== l &&
          ((a = l),
          null != (l = eq(e, n)) && r.unshift(rw(e, l, a)),
          null != (l = eq(e, t)) && r.push(rw(e, l, a))),
          (e = e.return);
      }
      return r;
    }
    function rS(e) {
      if (null === e) return null;
      do e = e.return;
      while (e && 5 !== e.tag);
      return e || null;
    }
    function rE(e, t, n, r, a) {
      for (var l = t._reactName, o = []; null !== n && n !== r; ) {
        var i = n,
          s = i.alternate,
          u = i.stateNode;
        if (null !== s && s === r) break;
        5 === i.tag &&
          null !== u &&
          ((i = u),
          a
            ? null != (s = eq(n, l)) && o.unshift(rw(n, s, i))
            : a || (null != (s = eq(n, l)) && o.push(rw(n, s, i)))),
          (n = n.return);
      }
      0 !== o.length && e.push({ event: t, listeners: o });
    }
    var rC = /\r\n?/g,
      rN = /\u0000|\uFFFD/g;
    function rj(e) {
      return ('string' == typeof e ? e : '' + e)
        .replace(rC, '\n')
        .replace(rN, '');
    }
    function r_(e, t, n) {
      if (((t = rj(t)), rj(e) !== t && n)) throw Error(d(425));
    }
    function rP() {}
    var rR = null,
      rO = null;
    function rL(e, t) {
      return (
        'textarea' === e ||
        'noscript' === e ||
        'string' == typeof t.children ||
        'number' == typeof t.children ||
        ('object' == typeof t.dangerouslySetInnerHTML &&
          null !== t.dangerouslySetInnerHTML &&
          null != t.dangerouslySetInnerHTML.__html)
      );
    }
    var rT = 'function' == typeof setTimeout ? setTimeout : void 0,
      rM = 'function' == typeof clearTimeout ? clearTimeout : void 0,
      rI = 'function' == typeof Promise ? Promise : void 0,
      rF =
        'function' == typeof queueMicrotask
          ? queueMicrotask
          : void 0 !== rI
          ? function (e) {
              return rI.resolve(null).then(e).catch(rz);
            }
          : rT;
    function rz(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function rD(e, t) {
      var n = t,
        r = 0;
      do {
        var a = n.nextSibling;
        if ((e.removeChild(n), a && 8 === a.nodeType)) {
          if ('/$' === (n = a.data)) {
            if (0 === r) {
              e.removeChild(a), tK(t);
              return;
            }
            r--;
          } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
        }
        n = a;
      } while (n);
      tK(t);
    }
    function r$(e) {
      for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
        if (8 === t) {
          if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
          if ('/$' === t) return null;
        }
      }
      return e;
    }
    function rU(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ('$' === n || '$!' === n || '$?' === n) {
            if (0 === t) return e;
            t--;
          } else '/$' === n && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var rA = Math.random().toString(36).slice(2),
      rB = '__reactFiber$' + rA,
      rW = '__reactProps$' + rA,
      rV = '__reactContainer$' + rA,
      rH = '__reactEvents$' + rA,
      rK = '__reactListeners$' + rA,
      rQ = '__reactHandles$' + rA;
    function rq(e) {
      var t = e[rB];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[rV] || n[rB])) {
          if (
            ((n = t.alternate),
            null !== t.child || (null !== n && null !== n.child))
          )
            for (e = rU(e); null !== e; ) {
              if ((n = e[rB])) return n;
              e = rU(e);
            }
          return t;
        }
        n = (e = n).parentNode;
      }
      return null;
    }
    function rG(e) {
      return (e = e[rB] || e[rV]) &&
        (5 === e.tag || 6 === e.tag || 13 === e.tag || 3 === e.tag)
        ? e
        : null;
    }
    function rY(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      throw Error(d(33));
    }
    function rX(e) {
      return e[rW] || null;
    }
    var rJ = [],
      rZ = -1;
    function r0(e) {
      return { current: e };
    }
    function r1(e) {
      0 > rZ || ((e.current = rJ[rZ]), (rJ[rZ] = null), rZ--);
    }
    function r2(e, t) {
      (rJ[++rZ] = e.current), (e.current = t);
    }
    var r3 = {},
      r6 = r0(r3),
      r4 = r0(!1),
      r5 = r3;
    function r8(e, t) {
      var n = e.type.contextTypes;
      if (!n) return r3;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var a,
        l = {};
      for (a in n) l[a] = t[a];
      return (
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = l)),
        l
      );
    }
    function r9(e) {
      return null != (e = e.childContextTypes);
    }
    function r7() {
      r1(r4), r1(r6);
    }
    function ae(e, t, n) {
      if (r6.current !== r3) throw Error(d(168));
      r2(r6, t), r2(r4, n);
    }
    function at(e, t, n) {
      var r = e.stateNode;
      if (((t = t.childContextTypes), 'function' != typeof r.getChildContext))
        return n;
      for (var a in (r = r.getChildContext()))
        if (!(a in t))
          throw Error(
            d(
              108,
              (function (e) {
                var t = e.type;
                switch (e.tag) {
                  case 24:
                    return 'Cache';
                  case 9:
                    return (t.displayName || 'Context') + '.Consumer';
                  case 10:
                    return (t._context.displayName || 'Context') + '.Provider';
                  case 18:
                    return 'DehydratedFragment';
                  case 11:
                    return (
                      (e = (e = t.render).displayName || e.name || ''),
                      t.displayName ||
                        ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
                    );
                  case 7:
                    return 'Fragment';
                  case 5:
                    return t;
                  case 4:
                    return 'Portal';
                  case 3:
                    return 'Root';
                  case 6:
                    return 'Text';
                  case 16:
                    return (function e(t) {
                      if (null == t) return null;
                      if ('function' == typeof t)
                        return t.displayName || t.name || null;
                      if ('string' == typeof t) return t;
                      switch (t) {
                        case R:
                          return 'Fragment';
                        case P:
                          return 'Portal';
                        case L:
                          return 'Profiler';
                        case O:
                          return 'StrictMode';
                        case F:
                          return 'Suspense';
                        case z:
                          return 'SuspenseList';
                      }
                      if ('object' == typeof t)
                        switch (t.$$typeof) {
                          case M:
                            return (t.displayName || 'Context') + '.Consumer';
                          case T:
                            return (
                              (t._context.displayName || 'Context') +
                              '.Provider'
                            );
                          case I:
                            var n = t.render;
                            return (
                              (t = t.displayName) ||
                                (t =
                                  '' !== (t = n.displayName || n.name || '')
                                    ? 'ForwardRef(' + t + ')'
                                    : 'ForwardRef'),
                              t
                            );
                          case D:
                            return null !== (n = t.displayName || null)
                              ? n
                              : e(t.type) || 'Memo';
                          case $:
                            (n = t._payload), (t = t._init);
                            try {
                              return e(t(n));
                            } catch (e) {}
                        }
                      return null;
                    })(t);
                  case 8:
                    return t === O ? 'StrictMode' : 'Mode';
                  case 22:
                    return 'Offscreen';
                  case 12:
                    return 'Profiler';
                  case 21:
                    return 'Scope';
                  case 13:
                    return 'Suspense';
                  case 19:
                    return 'SuspenseList';
                  case 25:
                    return 'TracingMarker';
                  case 1:
                  case 0:
                  case 17:
                  case 2:
                  case 14:
                  case 15:
                    if ('function' == typeof t)
                      return t.displayName || t.name || null;
                    if ('string' == typeof t) return t;
                }
                return null;
              })(e) || 'Unknown',
              a
            )
          );
      return en({}, n, r);
    }
    function an(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          r3),
        (r5 = r6.current),
        r2(r6, e),
        r2(r4, r4.current),
        !0
      );
    }
    function ar(e, t, n) {
      var r = e.stateNode;
      if (!r) throw Error(d(169));
      n
        ? ((e = at(e, t, r5)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          r1(r4),
          r1(r6),
          r2(r6, e))
        : r1(r4),
        r2(r4, n);
    }
    var aa = null,
      al = !1,
      ao = !1;
    function ai(e) {
      null === aa ? (aa = [e]) : aa.push(e);
    }
    function as() {
      if (!ao && null !== aa) {
        ao = !0;
        var e = 0,
          t = tS;
        try {
          var n = aa;
          for (tS = 1; e < n.length; e++) {
            var r = n[e];
            do r = r(!0);
            while (null !== r);
          }
          (aa = null), (al = !1);
        } catch (t) {
          throw (null !== aa && (aa = aa.slice(e + 1)), e9(ta, as), t);
        } finally {
          (tS = t), (ao = !1);
        }
      }
      return null;
    }
    var au = [],
      ac = 0,
      ad = null,
      af = 0,
      ap = [],
      ah = 0,
      am = null,
      ag = 1,
      av = '';
    function ay(e, t) {
      (au[ac++] = af), (au[ac++] = ad), (ad = e), (af = t);
    }
    function ab(e, t, n) {
      (ap[ah++] = ag), (ap[ah++] = av), (ap[ah++] = am), (am = e);
      var r = ag;
      e = av;
      var a = 32 - td(r) - 1;
      (r &= ~(1 << a)), (n += 1);
      var l = 32 - td(t) + a;
      if (30 < l) {
        var o = a - (a % 5);
        (l = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (a -= o),
          (ag = (1 << (32 - td(t) + a)) | (n << a) | r),
          (av = l + e);
      } else (ag = (1 << l) | (n << a) | r), (av = e);
    }
    function ax(e) {
      null !== e.return && (ay(e, 1), ab(e, 1, 0));
    }
    function aw(e) {
      for (; e === ad; )
        (ad = au[--ac]), (au[ac] = null), (af = au[--ac]), (au[ac] = null);
      for (; e === am; )
        (am = ap[--ah]),
          (ap[ah] = null),
          (av = ap[--ah]),
          (ap[ah] = null),
          (ag = ap[--ah]),
          (ap[ah] = null);
    }
    var ak = null,
      aS = null,
      aE = !1,
      aC = null;
    function aN(e, t) {
      var n = i8(5, null, null, 0);
      (n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions)
          ? ((e.deletions = [n]), (e.flags |= 16))
          : t.push(n);
    }
    function aj(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            null !==
              (t =
                1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                  ? null
                  : t) &&
            ((e.stateNode = t), (ak = e), (aS = r$(t.firstChild)), !0)
          );
        case 6:
          return (
            null !==
              (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
            ((e.stateNode = t), (ak = e), (aS = null), !0)
          );
        case 13:
          return (
            null !== (t = 8 !== t.nodeType ? null : t) &&
            ((n = null !== am ? { id: ag, overflow: av } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 0x40000000,
            }),
            ((n = i8(18, null, null, 0)).stateNode = t),
            (n.return = e),
            (e.child = n),
            (ak = e),
            (aS = null),
            !0)
          );
        default:
          return !1;
      }
    }
    function a_(e) {
      return 0 != (1 & e.mode) && 0 == (128 & e.flags);
    }
    function aP(e) {
      if (aE) {
        var t = aS;
        if (t) {
          var n = t;
          if (!aj(e, t)) {
            if (a_(e)) throw Error(d(418));
            t = r$(n.nextSibling);
            var r = ak;
            t && aj(e, t)
              ? aN(r, n)
              : ((e.flags = (-4097 & e.flags) | 2), (aE = !1), (ak = e));
          }
        } else {
          if (a_(e)) throw Error(d(418));
          (e.flags = (-4097 & e.flags) | 2), (aE = !1), (ak = e);
        }
      }
    }
    function aR(e) {
      for (
        e = e.return;
        null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

      )
        e = e.return;
      ak = e;
    }
    function aO(e) {
      if (e !== ak) return !1;
      if (!aE) return aR(e), (aE = !0), !1;
      if (
        ((t = 3 !== e.tag) &&
          !(t = 5 !== e.tag) &&
          (t =
            'head' !== (t = e.type) &&
            'body' !== t &&
            !rL(e.type, e.memoizedProps)),
        t && (t = aS))
      ) {
        if (a_(e)) throw (aL(), Error(d(418)));
        for (; t; ) aN(e, t), (t = r$(t.nextSibling));
      }
      if ((aR(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
          throw Error(d(317));
        e: {
          for (t = 0, e = e.nextSibling; e; ) {
            if (8 === e.nodeType) {
              var t,
                n = e.data;
              if ('/$' === n) {
                if (0 === t) {
                  aS = r$(e.nextSibling);
                  break e;
                }
                t--;
              } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
            }
            e = e.nextSibling;
          }
          aS = null;
        }
      } else aS = ak ? r$(e.stateNode.nextSibling) : null;
      return !0;
    }
    function aL() {
      for (var e = aS; e; ) e = r$(e.nextSibling);
    }
    function aT() {
      (aS = ak = null), (aE = !1);
    }
    function aM(e) {
      null === aC ? (aC = [e]) : aC.push(e);
    }
    var aI = j.ReactCurrentBatchConfig;
    function aF(e, t, n) {
      if (
        null !== (e = n.ref) &&
        'function' != typeof e &&
        'object' != typeof e
      ) {
        if (n._owner) {
          if ((n = n._owner)) {
            if (1 !== n.tag) throw Error(d(309));
            var r = n.stateNode;
          }
          if (!r) throw Error(d(147, e));
          var a = r,
            l = '' + e;
          return null !== t &&
            null !== t.ref &&
            'function' == typeof t.ref &&
            t.ref._stringRef === l
            ? t.ref
            : (((t = function (e) {
                var t = a.refs;
                null === e ? delete t[l] : (t[l] = e);
              })._stringRef = l),
              t);
        }
        if ('string' != typeof e) throw Error(d(284));
        if (!n._owner) throw Error(d(290, e));
      }
      return e;
    }
    function az(e, t) {
      throw Error(
        d(
          31,
          '[object Object]' === (e = Object.prototype.toString.call(t))
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e
        )
      );
    }
    function aD(e) {
      return (0, e._init)(e._payload);
    }
    function a$(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
      }
      function r(e, t) {
        for (e = new Map(); null !== t; )
          null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
      }
      function a(e, t) {
        return ((e = i7(e, t)).index = 0), (e.sibling = null), e;
      }
      function l(t, n, r) {
        return ((t.index = r), e)
          ? null !== (r = t.alternate)
            ? (r = r.index) < n
              ? ((t.flags |= 2), n)
              : r
            : ((t.flags |= 2), n)
          : ((t.flags |= 1048576), n);
      }
      function o(t) {
        return e && null === t.alternate && (t.flags |= 2), t;
      }
      function i(e, t, n, r) {
        return (
          null === t || 6 !== t.tag
            ? ((t = sr(n, e.mode, r)).return = e)
            : ((t = a(t, n)).return = e),
          t
        );
      }
      function s(e, t, n, r) {
        var l = n.type;
        return l === R
          ? c(e, t, n.props.children, r, n.key)
          : (null !== t &&
            (t.elementType === l ||
              ('object' == typeof l &&
                null !== l &&
                l.$$typeof === $ &&
                aD(l) === t.type))
              ? ((r = a(t, n.props)).ref = aF(e, t, n))
              : ((r = se(n.type, n.key, n.props, null, e.mode, r)).ref = aF(
                  e,
                  t,
                  n
                )),
            (r.return = e),
            r);
      }
      function u(e, t, n, r) {
        return (
          null === t ||
          4 !== t.tag ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
            ? ((t = sa(n, e.mode, r)).return = e)
            : ((t = a(t, n.children || [])).return = e),
          t
        );
      }
      function c(e, t, n, r, l) {
        return (
          null === t || 7 !== t.tag
            ? ((t = st(n, e.mode, r, l)).return = e)
            : ((t = a(t, n)).return = e),
          t
        );
      }
      function f(e, t, n) {
        if (('string' == typeof t && '' !== t) || 'number' == typeof t)
          return ((t = sr('' + t, e.mode, n)).return = e), t;
        if ('object' == typeof t && null !== t) {
          switch (t.$$typeof) {
            case _:
              return (
                ((n = se(t.type, t.key, t.props, null, e.mode, n)).ref = aF(
                  e,
                  null,
                  t
                )),
                (n.return = e),
                n
              );
            case P:
              return ((t = sa(t, e.mode, n)).return = e), t;
            case $:
              return f(e, (0, t._init)(t._payload), n);
          }
          if (ev(t) || B(t))
            return ((t = st(t, e.mode, n, null)).return = e), t;
          az(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var a = null !== t ? t.key : null;
        if (('string' == typeof n && '' !== n) || 'number' == typeof n)
          return null !== a ? null : i(e, t, '' + n, r);
        if ('object' == typeof n && null !== n) {
          switch (n.$$typeof) {
            case _:
              return n.key === a ? s(e, t, n, r) : null;
            case P:
              return n.key === a ? u(e, t, n, r) : null;
            case $:
              return p(e, t, (a = n._init)(n._payload), r);
          }
          if (ev(n) || B(n)) return null !== a ? null : c(e, t, n, r, null);
          az(e, n);
        }
        return null;
      }
      function h(e, t, n, r, a) {
        if (('string' == typeof r && '' !== r) || 'number' == typeof r)
          return i(t, (e = e.get(n) || null), '' + r, a);
        if ('object' == typeof r && null !== r) {
          switch (r.$$typeof) {
            case _:
              return s(
                t,
                (e = e.get(null === r.key ? n : r.key) || null),
                r,
                a
              );
            case P:
              return u(
                t,
                (e = e.get(null === r.key ? n : r.key) || null),
                r,
                a
              );
            case $:
              return h(e, t, n, (0, r._init)(r._payload), a);
          }
          if (ev(r) || B(r)) return c(t, (e = e.get(n) || null), r, a, null);
          az(t, r);
        }
        return null;
      }
      return function i(s, u, c, m) {
        if (
          ('object' == typeof c &&
            null !== c &&
            c.type === R &&
            null === c.key &&
            (c = c.props.children),
          'object' == typeof c && null !== c)
        ) {
          switch (c.$$typeof) {
            case _:
              e: {
                for (var g = c.key, v = u; null !== v; ) {
                  if (v.key === g) {
                    if ((g = c.type) === R) {
                      if (7 === v.tag) {
                        n(s, v.sibling),
                          ((u = a(v, c.props.children)).return = s),
                          (s = u);
                        break e;
                      }
                    } else if (
                      v.elementType === g ||
                      ('object' == typeof g &&
                        null !== g &&
                        g.$$typeof === $ &&
                        aD(g) === v.type)
                    ) {
                      n(s, v.sibling),
                        ((u = a(v, c.props)).ref = aF(s, v, c)),
                        (u.return = s),
                        (s = u);
                      break e;
                    }
                    n(s, v);
                    break;
                  }
                  t(s, v), (v = v.sibling);
                }
                c.type === R
                  ? (((u = st(c.props.children, s.mode, m, c.key)).return = s),
                    (s = u))
                  : (((m = se(c.type, c.key, c.props, null, s.mode, m)).ref =
                      aF(s, u, c)),
                    (m.return = s),
                    (s = m));
              }
              return o(s);
            case P:
              e: {
                for (v = c.key; null !== u; ) {
                  if (u.key === v) {
                    if (
                      4 === u.tag &&
                      u.stateNode.containerInfo === c.containerInfo &&
                      u.stateNode.implementation === c.implementation
                    ) {
                      n(s, u.sibling),
                        ((u = a(u, c.children || [])).return = s),
                        (s = u);
                      break e;
                    }
                    n(s, u);
                    break;
                  }
                  t(s, u), (u = u.sibling);
                }
                ((u = sa(c, s.mode, m)).return = s), (s = u);
              }
              return o(s);
            case $:
              return i(s, u, (v = c._init)(c._payload), m);
          }
          if (ev(c))
            return (function (a, o, i, s) {
              for (
                var u = null, c = null, d = o, m = (o = 0), g = null;
                null !== d && m < i.length;
                m++
              ) {
                d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
                var v = p(a, d, i[m], s);
                if (null === v) {
                  null === d && (d = g);
                  break;
                }
                e && d && null === v.alternate && t(a, d),
                  (o = l(v, o, m)),
                  null === c ? (u = v) : (c.sibling = v),
                  (c = v),
                  (d = g);
              }
              if (m === i.length) return n(a, d), aE && ay(a, m), u;
              if (null === d) {
                for (; m < i.length; m++)
                  null !== (d = f(a, i[m], s)) &&
                    ((o = l(d, o, m)),
                    null === c ? (u = d) : (c.sibling = d),
                    (c = d));
                return aE && ay(a, m), u;
              }
              for (d = r(a, d); m < i.length; m++)
                null !== (g = h(d, a, m, i[m], s)) &&
                  (e &&
                    null !== g.alternate &&
                    d.delete(null === g.key ? m : g.key),
                  (o = l(g, o, m)),
                  null === c ? (u = g) : (c.sibling = g),
                  (c = g));
              return (
                e &&
                  d.forEach(function (e) {
                    return t(a, e);
                  }),
                aE && ay(a, m),
                u
              );
            })(s, u, c, m);
          if (B(c))
            return (function (a, o, i, s) {
              var u = B(i);
              if ('function' != typeof u) throw Error(d(150));
              if (null == (i = u.call(i))) throw Error(d(151));
              for (
                var c = (u = null), m = o, g = (o = 0), v = null, y = i.next();
                null !== m && !y.done;
                g++, y = i.next()
              ) {
                m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
                var b = p(a, m, y.value, s);
                if (null === b) {
                  null === m && (m = v);
                  break;
                }
                e && m && null === b.alternate && t(a, m),
                  (o = l(b, o, g)),
                  null === c ? (u = b) : (c.sibling = b),
                  (c = b),
                  (m = v);
              }
              if (y.done) return n(a, m), aE && ay(a, g), u;
              if (null === m) {
                for (; !y.done; g++, y = i.next())
                  null !== (y = f(a, y.value, s)) &&
                    ((o = l(y, o, g)),
                    null === c ? (u = y) : (c.sibling = y),
                    (c = y));
                return aE && ay(a, g), u;
              }
              for (m = r(a, m); !y.done; g++, y = i.next())
                null !== (y = h(m, a, g, y.value, s)) &&
                  (e &&
                    null !== y.alternate &&
                    m.delete(null === y.key ? g : y.key),
                  (o = l(y, o, g)),
                  null === c ? (u = y) : (c.sibling = y),
                  (c = y));
              return (
                e &&
                  m.forEach(function (e) {
                    return t(a, e);
                  }),
                aE && ay(a, g),
                u
              );
            })(s, u, c, m);
          az(s, c);
        }
        return ('string' == typeof c && '' !== c) || 'number' == typeof c
          ? ((c = '' + c),
            null !== u && 6 === u.tag
              ? (n(s, u.sibling), ((u = a(u, c)).return = s))
              : (n(s, u), ((u = sr(c, s.mode, m)).return = s)),
            o((s = u)))
          : n(s, u);
      };
    }
    var aU = a$(!0),
      aA = a$(!1),
      aB = r0(null),
      aW = null,
      aV = null,
      aH = null;
    function aK() {
      aH = aV = aW = null;
    }
    function aQ(e) {
      var t = aB.current;
      r1(aB), (e._currentValue = t);
    }
    function aq(e, t, n) {
      for (; null !== e; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
            : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function aG(e, t) {
      (aW = e),
        (aH = aV = null),
        null !== (e = e.dependencies) &&
          null !== e.firstContext &&
          (0 != (e.lanes & t) && (oy = !0), (e.firstContext = null));
    }
    function aY(e) {
      var t = e._currentValue;
      if (aH !== e) {
        if (((e = { context: e, memoizedValue: t, next: null }), null === aV)) {
          if (null === aW) throw Error(d(308));
          (aV = e), (aW.dependencies = { lanes: 0, firstContext: e });
        } else aV = aV.next = e;
      }
      return t;
    }
    var aX = null;
    function aJ(e) {
      null === aX ? (aX = [e]) : aX.push(e);
    }
    function aZ(e, t, n, r) {
      var a = t.interleaved;
      return (
        null === a ? ((n.next = n), aJ(t)) : ((n.next = a.next), (a.next = n)),
        (t.interleaved = n),
        a0(e, r)
      );
    }
    function a0(e, t) {
      e.lanes |= t;
      var n = e.alternate;
      for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        (e.childLanes |= t),
          null !== (n = e.alternate) && (n.childLanes |= t),
          (n = e),
          (e = e.return);
      return 3 === n.tag ? n.stateNode : null;
    }
    var a1 = !1;
    function a2(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function a3(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          });
    }
    function a6(e, t) {
      return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function a4(e, t, n) {
      var r = e.updateQueue;
      if (null === r) return null;
      if (((r = r.shared), 0 != (2 & io))) {
        var a = r.pending;
        return (
          null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
          (r.pending = t),
          a0(e, n)
        );
      }
      return (
        null === (a = r.interleaved)
          ? ((t.next = t), aJ(r))
          : ((t.next = a.next), (a.next = t)),
        (r.interleaved = t),
        a0(e, n)
      );
    }
    function a5(e, t, n) {
      if (
        null !== (t = t.updateQueue) &&
        ((t = t.shared), 0 != (4194240 & n))
      ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), tk(e, n);
      }
    }
    function a8(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (null !== r && n === (r = r.updateQueue)) {
        var a = null,
          l = null;
        if (null !== (n = n.firstBaseUpdate)) {
          do {
            var o = {
              eventTime: n.eventTime,
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: n.callback,
              next: null,
            };
            null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
          } while (null !== n);
          null === l ? (a = l = t) : (l = l.next = t);
        } else a = l = t;
        (n = {
          baseState: r.baseState,
          firstBaseUpdate: a,
          lastBaseUpdate: l,
          shared: r.shared,
          effects: r.effects,
        }),
          (e.updateQueue = n);
        return;
      }
      null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
    }
    function a9(e, t, n, r) {
      var a = e.updateQueue;
      a1 = !1;
      var l = a.firstBaseUpdate,
        o = a.lastBaseUpdate,
        i = a.shared.pending;
      if (null !== i) {
        a.shared.pending = null;
        var s = i,
          u = s.next;
        (s.next = null), null === o ? (l = u) : (o.next = u), (o = s);
        var c = e.alternate;
        null !== c &&
          (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
          (null === i ? (c.firstBaseUpdate = u) : (i.next = u),
          (c.lastBaseUpdate = s));
      }
      if (null !== l) {
        var d = a.baseState;
        for (o = 0, c = u = s = null, i = l; ; ) {
          var f = i.lane,
            p = i.eventTime;
          if ((r & f) === f) {
            null !== c &&
              (c = c.next =
                {
                  eventTime: p,
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                });
            e: {
              var h = e,
                m = i;
              switch (((f = t), (p = n), m.tag)) {
                case 1:
                  if ('function' == typeof (h = m.payload)) {
                    d = h.call(p, d, f);
                    break e;
                  }
                  d = h;
                  break e;
                case 3:
                  h.flags = (-65537 & h.flags) | 128;
                case 0:
                  if (
                    null ==
                    (f =
                      'function' == typeof (h = m.payload)
                        ? h.call(p, d, f)
                        : h)
                  )
                    break e;
                  d = en({}, d, f);
                  break e;
                case 2:
                  a1 = !0;
              }
            }
            null !== i.callback &&
              0 !== i.lane &&
              ((e.flags |= 64),
              null === (f = a.effects) ? (a.effects = [i]) : f.push(i));
          } else
            (p = {
              eventTime: p,
              lane: f,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            }),
              null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
              (o |= f);
          if (null === (i = i.next)) {
            if (null === (i = a.shared.pending)) break;
            (i = (f = i).next),
              (f.next = null),
              (a.lastBaseUpdate = f),
              (a.shared.pending = null);
          }
        }
        if (
          (null === c && (s = d),
          (a.baseState = s),
          (a.firstBaseUpdate = u),
          (a.lastBaseUpdate = c),
          null !== (t = a.shared.interleaved))
        ) {
          a = t;
          do (o |= a.lane), (a = a.next);
          while (a !== t);
        } else null === l && (a.shared.lanes = 0);
        (im |= o), (e.lanes = o), (e.memoizedState = d);
      }
    }
    function a7(e, t, n) {
      if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
          var r = e[t],
            a = r.callback;
          if (null !== a) {
            if (((r.callback = null), (r = n), 'function' != typeof a))
              throw Error(d(191, a));
            a.call(r);
          }
        }
    }
    var le = {},
      lt = r0(le),
      ln = r0(le),
      lr = r0(le);
    function la(e) {
      if (e === le) throw Error(d(174));
      return e;
    }
    function ll(e, t) {
      switch ((r2(lr, t), r2(ln, e), r2(lt, le), (e = t.nodeType))) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : eE(null, '');
          break;
        default:
          t = eE(
            (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
            (e = e.tagName)
          );
      }
      r1(lt), r2(lt, t);
    }
    function lo() {
      r1(lt), r1(ln), r1(lr);
    }
    function li(e) {
      la(lr.current);
      var t = la(lt.current),
        n = eE(t, e.type);
      t !== n && (r2(ln, e), r2(lt, n));
    }
    function ls(e) {
      ln.current === e && (r1(lt), r1(ln));
    }
    var lu = r0(0);
    function lc(e) {
      for (var t = e; null !== t; ) {
        if (13 === t.tag) {
          var n = t.memoizedState;
          if (
            null !== n &&
            (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)
          )
            return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
          if (0 != (128 & t.flags)) return t;
        } else if (null !== t.child) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    var ld = [];
    function lf() {
      for (var e = 0; e < ld.length; e++)
        ld[e]._workInProgressVersionPrimary = null;
      ld.length = 0;
    }
    var lp = j.ReactCurrentDispatcher,
      lh = j.ReactCurrentBatchConfig,
      lm = 0,
      lg = null,
      lv = null,
      ly = null,
      lb = !1,
      lx = !1,
      lw = 0,
      lk = 0;
    function lS() {
      throw Error(d(321));
    }
    function lE(e, t) {
      if (null === t) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!nG(e[n], t[n])) return !1;
      return !0;
    }
    function lC(e, t, n, r, a, l) {
      if (
        ((lm = l),
        (lg = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (lp.current = null === e || null === e.memoizedState ? l9 : l7),
        (e = n(r, a)),
        lx)
      ) {
        l = 0;
        do {
          if (((lx = !1), (lw = 0), 25 <= l)) throw Error(d(301));
          (l += 1),
            (ly = lv = null),
            (t.updateQueue = null),
            (lp.current = oe),
            (e = n(r, a));
        } while (lx);
      }
      if (
        ((lp.current = l8),
        (t = null !== lv && null !== lv.next),
        (lm = 0),
        (ly = lv = lg = null),
        (lb = !1),
        t)
      )
        throw Error(d(300));
      return e;
    }
    function lN() {
      var e = 0 !== lw;
      return (lw = 0), e;
    }
    function lj() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return null === ly ? (lg.memoizedState = ly = e) : (ly = ly.next = e), ly;
    }
    function l_() {
      if (null === lv) {
        var e = lg.alternate;
        e = null !== e ? e.memoizedState : null;
      } else e = lv.next;
      var t = null === ly ? lg.memoizedState : ly.next;
      if (null !== t) (ly = t), (lv = e);
      else {
        if (null === e) throw Error(d(310));
        (e = {
          memoizedState: (lv = e).memoizedState,
          baseState: lv.baseState,
          baseQueue: lv.baseQueue,
          queue: lv.queue,
          next: null,
        }),
          null === ly ? (lg.memoizedState = ly = e) : (ly = ly.next = e);
      }
      return ly;
    }
    function lP(e, t) {
      return 'function' == typeof t ? t(e) : t;
    }
    function lR(e) {
      var t = l_(),
        n = t.queue;
      if (null === n) throw Error(d(311));
      n.lastRenderedReducer = e;
      var r = lv,
        a = r.baseQueue,
        l = n.pending;
      if (null !== l) {
        if (null !== a) {
          var o = a.next;
          (a.next = l.next), (l.next = o);
        }
        (r.baseQueue = a = l), (n.pending = null);
      }
      if (null !== a) {
        (l = a.next), (r = r.baseState);
        var i = (o = null),
          s = null,
          u = l;
        do {
          var c = u.lane;
          if ((lm & c) === c)
            null !== s &&
              (s = s.next =
                {
                  lane: 0,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                }),
              (r = u.hasEagerState ? u.eagerState : e(r, u.action));
          else {
            var f = {
              lane: c,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            };
            null === s ? ((i = s = f), (o = r)) : (s = s.next = f),
              (lg.lanes |= c),
              (im |= c);
          }
          u = u.next;
        } while (null !== u && u !== l);
        null === s ? (o = r) : (s.next = i),
          nG(r, t.memoizedState) || (oy = !0),
          (t.memoizedState = r),
          (t.baseState = o),
          (t.baseQueue = s),
          (n.lastRenderedState = r);
      }
      if (null !== (e = n.interleaved)) {
        a = e;
        do (l = a.lane), (lg.lanes |= l), (im |= l), (a = a.next);
        while (a !== e);
      } else null === a && (n.lanes = 0);
      return [t.memoizedState, n.dispatch];
    }
    function lO(e) {
      var t = l_(),
        n = t.queue;
      if (null === n) throw Error(d(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        l = t.memoizedState;
      if (null !== a) {
        n.pending = null;
        var o = (a = a.next);
        do (l = e(l, o.action)), (o = o.next);
        while (o !== a);
        nG(l, t.memoizedState) || (oy = !0),
          (t.memoizedState = l),
          null === t.baseQueue && (t.baseState = l),
          (n.lastRenderedState = l);
      }
      return [l, r];
    }
    function lL() {}
    function lT(e, t) {
      var n = lg,
        r = l_(),
        a = t(),
        l = !nG(r.memoizedState, a);
      if (
        (l && ((r.memoizedState = a), (oy = !0)),
        (r = r.queue),
        lH(lF.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || l || (null !== ly && 1 & ly.memoizedState.tag))
      ) {
        if (
          ((n.flags |= 2048),
          lU(9, lI.bind(null, n, r, a, t), void 0, null),
          null === ii)
        )
          throw Error(d(349));
        0 != (30 & lm) || lM(n, t, a);
      }
      return a;
    }
    function lM(e, t, n) {
      (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = lg.updateQueue)
          ? ((t = { lastEffect: null, stores: null }),
            (lg.updateQueue = t),
            (t.stores = [e]))
          : null === (n = t.stores)
          ? (t.stores = [e])
          : n.push(e);
    }
    function lI(e, t, n, r) {
      (t.value = n), (t.getSnapshot = r), lz(t) && lD(e);
    }
    function lF(e, t, n) {
      return n(function () {
        lz(t) && lD(e);
      });
    }
    function lz(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !nG(e, n);
      } catch (e) {
        return !0;
      }
    }
    function lD(e) {
      var t = a0(e, 1);
      null !== t && iI(t, e, 1, -1);
    }
    function l$(e) {
      var t = lj();
      return (
        'function' == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: lP,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = l3.bind(null, lg, e)),
        [t.memoizedState, e]
      );
    }
    function lU(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = lg.updateQueue)
          ? ((t = { lastEffect: null, stores: null }),
            (lg.updateQueue = t),
            (t.lastEffect = e.next = e))
          : null === (n = t.lastEffect)
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function lA() {
      return l_().memoizedState;
    }
    function lB(e, t, n, r) {
      var a = lj();
      (lg.flags |= e),
        (a.memoizedState = lU(1 | t, n, void 0, void 0 === r ? null : r));
    }
    function lW(e, t, n, r) {
      var a = l_();
      r = void 0 === r ? null : r;
      var l = void 0;
      if (null !== lv) {
        var o = lv.memoizedState;
        if (((l = o.destroy), null !== r && lE(r, o.deps))) {
          a.memoizedState = lU(t, n, l, r);
          return;
        }
      }
      (lg.flags |= e), (a.memoizedState = lU(1 | t, n, l, r));
    }
    function lV(e, t) {
      return lB(8390656, 8, e, t);
    }
    function lH(e, t) {
      return lW(2048, 8, e, t);
    }
    function lK(e, t) {
      return lW(4, 2, e, t);
    }
    function lQ(e, t) {
      return lW(4, 4, e, t);
    }
    function lq(e, t) {
      return 'function' == typeof t
        ? (t((e = e())),
          function () {
            t(null);
          })
        : null != t
        ? ((e = e()),
          (t.current = e),
          function () {
            t.current = null;
          })
        : void 0;
    }
    function lG(e, t, n) {
      return (
        (n = null != n ? n.concat([e]) : null), lW(4, 4, lq.bind(null, t, e), n)
      );
    }
    function lY() {}
    function lX(e, t) {
      var n = l_();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && lE(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
    }
    function lJ(e, t) {
      var n = l_();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && lE(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function lZ(e, t, n) {
      return 0 == (21 & lm)
        ? (e.baseState && ((e.baseState = !1), (oy = !0)),
          (e.memoizedState = n))
        : (nG(n, t) ||
            ((n = tb()), (lg.lanes |= n), (im |= n), (e.baseState = !0)),
          t);
    }
    function l0(e, t) {
      var n = tS;
      (tS = 0 !== n && 4 > n ? n : 4), e(!0);
      var r = lh.transition;
      lh.transition = {};
      try {
        e(!1), t();
      } finally {
        (tS = n), (lh.transition = r);
      }
    }
    function l1() {
      return l_().memoizedState;
    }
    function l2(e, t, n) {
      var r = iM(e);
      (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        l6(e)
          ? l4(t, n)
          : null !== (n = aZ(e, t, n, r)) && (iI(n, e, r, iT()), l5(n, t, r));
    }
    function l3(e, t, n) {
      var r = iM(e),
        a = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (l6(e)) l4(t, a);
      else {
        var l = e.alternate;
        if (
          0 === e.lanes &&
          (null === l || 0 === l.lanes) &&
          null !== (l = t.lastRenderedReducer)
        )
          try {
            var o = t.lastRenderedState,
              i = l(o, n);
            if (((a.hasEagerState = !0), (a.eagerState = i), nG(i, o))) {
              var s = t.interleaved;
              null === s
                ? ((a.next = a), aJ(t))
                : ((a.next = s.next), (s.next = a)),
                (t.interleaved = a);
              return;
            }
          } catch (e) {
          } finally {
          }
        null !== (n = aZ(e, t, a, r)) && (iI(n, e, r, (a = iT())), l5(n, t, r));
      }
    }
    function l6(e) {
      var t = e.alternate;
      return e === lg || (null !== t && t === lg);
    }
    function l4(e, t) {
      lx = lb = !0;
      var n = e.pending;
      null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
    }
    function l5(e, t, n) {
      if (0 != (4194240 & n)) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), tk(e, n);
      }
    }
    var l8 = {
        readContext: aY,
        useCallback: lS,
        useContext: lS,
        useEffect: lS,
        useImperativeHandle: lS,
        useInsertionEffect: lS,
        useLayoutEffect: lS,
        useMemo: lS,
        useReducer: lS,
        useRef: lS,
        useState: lS,
        useDebugValue: lS,
        useDeferredValue: lS,
        useTransition: lS,
        useMutableSource: lS,
        useSyncExternalStore: lS,
        useId: lS,
        unstable_isNewReconciler: !1,
      },
      l9 = {
        readContext: aY,
        useCallback: function (e, t) {
          return (lj().memoizedState = [e, void 0 === t ? null : t]), e;
        },
        useContext: aY,
        useEffect: lV,
        useImperativeHandle: function (e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            lB(4194308, 4, lq.bind(null, t, e), n)
          );
        },
        useLayoutEffect: function (e, t) {
          return lB(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          return lB(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = lj();
          return (
            (t = void 0 === t ? null : t),
            (e = e()),
            (n.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, n) {
          var r = lj();
          return (
            (t = void 0 !== n ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }),
            (r.queue = e),
            (e = e.dispatch = l2.bind(null, lg, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          return (e = { current: e }), (lj().memoizedState = e);
        },
        useState: l$,
        useDebugValue: lY,
        useDeferredValue: function (e) {
          return (lj().memoizedState = e);
        },
        useTransition: function () {
          var e = l$(!1),
            t = e[0];
          return (e = l0.bind(null, e[1])), (lj().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
          var r = lg,
            a = lj();
          if (aE) {
            if (void 0 === n) throw Error(d(407));
            n = n();
          } else {
            if (((n = t()), null === ii)) throw Error(d(349));
            0 != (30 & lm) || lM(r, t, n);
          }
          a.memoizedState = n;
          var l = { value: n, getSnapshot: t };
          return (
            (a.queue = l),
            lV(lF.bind(null, r, l, e), [e]),
            (r.flags |= 2048),
            lU(9, lI.bind(null, r, l, n, t), void 0, null),
            n
          );
        },
        useId: function () {
          var e = lj(),
            t = ii.identifierPrefix;
          if (aE) {
            var n = av,
              r = ag;
            (t =
              ':' +
              t +
              'R' +
              (n = (r & ~(1 << (32 - td(r) - 1))).toString(32) + n)),
              0 < (n = lw++) && (t += 'H' + n.toString(32)),
              (t += ':');
          } else t = ':' + t + 'r' + (n = lk++).toString(32) + ':';
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      l7 = {
        readContext: aY,
        useCallback: lX,
        useContext: aY,
        useEffect: lH,
        useImperativeHandle: lG,
        useInsertionEffect: lK,
        useLayoutEffect: lQ,
        useMemo: lJ,
        useReducer: lR,
        useRef: lA,
        useState: function () {
          return lR(lP);
        },
        useDebugValue: lY,
        useDeferredValue: function (e) {
          return lZ(l_(), lv.memoizedState, e);
        },
        useTransition: function () {
          return [lR(lP)[0], l_().memoizedState];
        },
        useMutableSource: lL,
        useSyncExternalStore: lT,
        useId: l1,
        unstable_isNewReconciler: !1,
      },
      oe = {
        readContext: aY,
        useCallback: lX,
        useContext: aY,
        useEffect: lH,
        useImperativeHandle: lG,
        useInsertionEffect: lK,
        useLayoutEffect: lQ,
        useMemo: lJ,
        useReducer: lO,
        useRef: lA,
        useState: function () {
          return lO(lP);
        },
        useDebugValue: lY,
        useDeferredValue: function (e) {
          var t = l_();
          return null === lv
            ? (t.memoizedState = e)
            : lZ(t, lv.memoizedState, e);
        },
        useTransition: function () {
          return [lO(lP)[0], l_().memoizedState];
        },
        useMutableSource: lL,
        useSyncExternalStore: lT,
        useId: l1,
        unstable_isNewReconciler: !1,
      };
    function ot(e, t) {
      if (e && e.defaultProps)
        for (var n in ((t = en({}, t)), (e = e.defaultProps)))
          void 0 === t[n] && (t[n] = e[n]);
      return t;
    }
    function on(e, t, n, r) {
      (n = null == (n = n(r, (t = e.memoizedState))) ? t : en({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n);
    }
    var or = {
      isMounted: function (e) {
        return !!(e = e._reactInternals) && e6(e) === e;
      },
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = iT(),
          a = iM(e),
          l = a6(r, a);
        (l.payload = t),
          null != n && (l.callback = n),
          null !== (t = a4(e, l, a)) && (iI(t, e, a, r), a5(t, e, a));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = iT(),
          a = iM(e),
          l = a6(r, a);
        (l.tag = 1),
          (l.payload = t),
          null != n && (l.callback = n),
          null !== (t = a4(e, l, a)) && (iI(t, e, a, r), a5(t, e, a));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = iT(),
          r = iM(e),
          a = a6(n, r);
        (a.tag = 2),
          null != t && (a.callback = t),
          null !== (t = a4(e, a, r)) && (iI(t, e, r, n), a5(t, e, r));
      },
    };
    function oa(e, t, n, r, a, l, o) {
      return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, l, o)
        : !t.prototype ||
            !t.prototype.isPureReactComponent ||
            !nY(n, r) ||
            !nY(a, l);
    }
    function ol(e, t, n) {
      var r = !1,
        a = r3,
        l = t.contextType;
      return (
        'object' == typeof l && null !== l
          ? (l = aY(l))
          : ((a = r9(t) ? r5 : r6.current),
            (l = (r = null != (r = t.contextTypes)) ? r8(e, a) : r3)),
        (t = new t(n, l)),
        (e.memoizedState =
          null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = or),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
          (e.__reactInternalMemoizedMaskedChildContext = l)),
        t
      );
    }
    function oo(e, t, n, r) {
      (e = t.state),
        'function' == typeof t.componentWillReceiveProps &&
          t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && or.enqueueReplaceState(t, t.state, null);
    }
    function oi(e, t, n, r) {
      var a = e.stateNode;
      (a.props = n), (a.state = e.memoizedState), (a.refs = {}), a2(e);
      var l = t.contextType;
      'object' == typeof l && null !== l
        ? (a.context = aY(l))
        : ((l = r9(t) ? r5 : r6.current), (a.context = r8(e, l))),
        (a.state = e.memoizedState),
        'function' == typeof (l = t.getDerivedStateFromProps) &&
          (on(e, t, l, n), (a.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
          'function' == typeof a.getSnapshotBeforeUpdate ||
          ('function' != typeof a.UNSAFE_componentWillMount &&
            'function' != typeof a.componentWillMount) ||
          ((t = a.state),
          'function' == typeof a.componentWillMount && a.componentWillMount(),
          'function' == typeof a.UNSAFE_componentWillMount &&
            a.UNSAFE_componentWillMount(),
          t !== a.state && or.enqueueReplaceState(a, a.state, null),
          a9(e, n, a, r),
          (a.state = e.memoizedState)),
        'function' == typeof a.componentDidMount && (e.flags |= 4194308);
    }
    function os(e, t) {
      try {
        var n = '',
          r = t;
        do
          (n += (function (e) {
            switch (e.tag) {
              case 5:
                return er(e.type);
              case 16:
                return er('Lazy');
              case 13:
                return er('Suspense');
              case 19:
                return er('SuspenseList');
              case 0:
              case 2:
              case 15:
                return (e = el(e.type, !1));
              case 11:
                return (e = el(e.type.render, !1));
              case 1:
                return (e = el(e.type, !0));
              default:
                return '';
            }
          })(r)),
            (r = r.return);
        while (r);
        var a = n;
      } catch (e) {
        a = '\nError generating stack: ' + e.message + '\n' + e.stack;
      }
      return { value: e, source: t, stack: a, digest: null };
    }
    function ou(e, t, n) {
      return {
        value: e,
        source: null,
        stack: null != n ? n : null,
        digest: null != t ? t : null,
      };
    }
    function oc(e, t) {
      try {
        console.error(t.value);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    var od = 'function' == typeof WeakMap ? WeakMap : Map;
    function of(e, t, n) {
      ((n = a6(-1, n)).tag = 3), (n.payload = { element: null });
      var r = t.value;
      return (
        (n.callback = function () {
          iS || ((iS = !0), (iE = r)), oc(e, t);
        }),
        n
      );
    }
    function op(e, t, n) {
      (n = a6(-1, n)).tag = 3;
      var r = e.type.getDerivedStateFromError;
      if ('function' == typeof r) {
        var a = t.value;
        (n.payload = function () {
          return r(a);
        }),
          (n.callback = function () {
            oc(e, t);
          });
      }
      var l = e.stateNode;
      return (
        null !== l &&
          'function' == typeof l.componentDidCatch &&
          (n.callback = function () {
            oc(e, t),
              'function' != typeof r &&
                (null === iC ? (iC = new Set([this])) : iC.add(this));
            var n = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: null !== n ? n : '',
            });
          }),
        n
      );
    }
    function oh(e, t, n) {
      var r = e.pingCache;
      if (null === r) {
        r = e.pingCache = new od();
        var a = new Set();
        r.set(t, a);
      } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
      a.has(n) || (a.add(n), (e = i2.bind(null, e, t, n)), t.then(e, e));
    }
    function om(e) {
      do {
        var t;
        if (
          ((t = 13 === e.tag) &&
            (t = null === (t = e.memoizedState) || null !== t.dehydrated),
          t)
        )
          return e;
        e = e.return;
      } while (null !== e);
      return null;
    }
    function og(e, t, n, r, a) {
      return (
        0 == (1 & e.mode)
          ? e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (n.flags |= 131072),
              (n.flags &= -52805),
              1 === n.tag &&
                (null === n.alternate
                  ? (n.tag = 17)
                  : (((t = a6(-1, 1)).tag = 2), a4(n, t, 1))),
              (n.lanes |= 1))
          : ((e.flags |= 65536), (e.lanes = a)),
        e
      );
    }
    var ov = j.ReactCurrentOwner,
      oy = !1;
    function ob(e, t, n, r) {
      t.child = null === e ? aA(t, null, n, r) : aU(t, e.child, n, r);
    }
    function ox(e, t, n, r, a) {
      n = n.render;
      var l = t.ref;
      return (aG(t, a),
      (r = lC(e, t, n, r, l, a)),
      (n = lN()),
      null === e || oy)
        ? (aE && n && ax(t), (t.flags |= 1), ob(e, t, r, a), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          o$(e, t, a));
    }
    function ow(e, t, n, r, a) {
      if (null === e) {
        var l = n.type;
        return 'function' != typeof l ||
          i9(l) ||
          void 0 !== l.defaultProps ||
          null !== n.compare ||
          void 0 !== n.defaultProps
          ? (((e = se(n.type, null, r, t, t.mode, a)).ref = t.ref),
            (e.return = t),
            (t.child = e))
          : ((t.tag = 15), (t.type = l), ok(e, t, l, r, a));
      }
      if (((l = e.child), 0 == (e.lanes & a))) {
        var o = l.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : nY)(o, r) && e.ref === t.ref)
          return o$(e, t, a);
      }
      return (
        (t.flags |= 1),
        ((e = i7(l, r)).ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function ok(e, t, n, r, a) {
      if (null !== e) {
        var l = e.memoizedProps;
        if (nY(l, r) && e.ref === t.ref) {
          if (((oy = !1), (t.pendingProps = r = l), 0 == (e.lanes & a)))
            return (t.lanes = e.lanes), o$(e, t, a);
          0 != (131072 & e.flags) && (oy = !0);
        }
      }
      return oC(e, t, n, r, a);
    }
    function oS(e, t, n) {
      var r = t.pendingProps,
        a = r.children,
        l = null !== e ? e.memoizedState : null;
      if ('hidden' === r.mode) {
        if (0 == (1 & t.mode))
          (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            r2(id, ic),
            (ic |= n);
        else {
          if (0 == (0x40000000 & n))
            return (
              (e = null !== l ? l.baseLanes | n : n),
              (t.lanes = t.childLanes = 0x40000000),
              (t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null,
              }),
              (t.updateQueue = null),
              r2(id, ic),
              (ic |= e),
              null
            );
          (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (r = null !== l ? l.baseLanes : n),
            r2(id, ic),
            (ic |= r);
        }
      } else null !== l ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n), r2(id, ic), (ic |= r);
      return ob(e, t, a, n), t.child;
    }
    function oE(e, t) {
      var n = t.ref;
      ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function oC(e, t, n, r, a) {
      var l = r9(n) ? r5 : r6.current;
      return ((l = r8(t, l)),
      aG(t, a),
      (n = lC(e, t, n, r, l, a)),
      (r = lN()),
      null === e || oy)
        ? (aE && r && ax(t), (t.flags |= 1), ob(e, t, n, a), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          o$(e, t, a));
    }
    function oN(e, t, n, r, a) {
      if (r9(n)) {
        var l = !0;
        an(t);
      } else l = !1;
      if ((aG(t, a), null === t.stateNode))
        oD(e, t), ol(t, n, r), oi(t, n, r, a), (r = !0);
      else if (null === e) {
        var o = t.stateNode,
          i = t.memoizedProps;
        o.props = i;
        var s = o.context,
          u = n.contextType;
        u =
          'object' == typeof u && null !== u
            ? aY(u)
            : r8(t, (u = r9(n) ? r5 : r6.current));
        var c = n.getDerivedStateFromProps,
          d =
            'function' == typeof c ||
            'function' == typeof o.getSnapshotBeforeUpdate;
        d ||
          ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
            'function' != typeof o.componentWillReceiveProps) ||
          ((i !== r || s !== u) && oo(t, o, r, u)),
          (a1 = !1);
        var f = t.memoizedState;
        (o.state = f),
          a9(t, r, o, a),
          (s = t.memoizedState),
          i !== r || f !== s || r4.current || a1
            ? ('function' == typeof c &&
                (on(t, n, c, r), (s = t.memoizedState)),
              (i = a1 || oa(t, n, i, r, f, s, u))
                ? (d ||
                    ('function' != typeof o.UNSAFE_componentWillMount &&
                      'function' != typeof o.componentWillMount) ||
                    ('function' == typeof o.componentWillMount &&
                      o.componentWillMount(),
                    'function' == typeof o.UNSAFE_componentWillMount &&
                      o.UNSAFE_componentWillMount()),
                  'function' == typeof o.componentDidMount &&
                    (t.flags |= 4194308))
                : ('function' == typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = s)),
              (o.props = r),
              (o.state = s),
              (o.context = u),
              (r = i))
            : ('function' == typeof o.componentDidMount && (t.flags |= 4194308),
              (r = !1));
      } else {
        (o = t.stateNode),
          a3(e, t),
          (i = t.memoizedProps),
          (u = t.type === t.elementType ? i : ot(t.type, i)),
          (o.props = u),
          (d = t.pendingProps),
          (f = o.context),
          (s =
            'object' == typeof (s = n.contextType) && null !== s
              ? aY(s)
              : r8(t, (s = r9(n) ? r5 : r6.current)));
        var p = n.getDerivedStateFromProps;
        (c =
          'function' == typeof p ||
          'function' == typeof o.getSnapshotBeforeUpdate) ||
          ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
            'function' != typeof o.componentWillReceiveProps) ||
          ((i !== d || f !== s) && oo(t, o, r, s)),
          (a1 = !1),
          (f = t.memoizedState),
          (o.state = f),
          a9(t, r, o, a);
        var h = t.memoizedState;
        i !== d || f !== h || r4.current || a1
          ? ('function' == typeof p && (on(t, n, p, r), (h = t.memoizedState)),
            (u = a1 || oa(t, n, u, r, f, h, s) || !1)
              ? (c ||
                  ('function' != typeof o.UNSAFE_componentWillUpdate &&
                    'function' != typeof o.componentWillUpdate) ||
                  ('function' == typeof o.componentWillUpdate &&
                    o.componentWillUpdate(r, h, s),
                  'function' == typeof o.UNSAFE_componentWillUpdate &&
                    o.UNSAFE_componentWillUpdate(r, h, s)),
                'function' == typeof o.componentDidUpdate && (t.flags |= 4),
                'function' == typeof o.getSnapshotBeforeUpdate &&
                  (t.flags |= 1024))
              : ('function' != typeof o.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                'function' != typeof o.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = h)),
            (o.props = r),
            (o.state = h),
            (o.context = s),
            (r = u))
          : ('function' != typeof o.componentDidUpdate ||
              (i === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            'function' != typeof o.getSnapshotBeforeUpdate ||
              (i === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return oj(e, t, n, r, l, a);
    }
    function oj(e, t, n, r, a, l) {
      oE(e, t);
      var o = 0 != (128 & t.flags);
      if (!r && !o) return a && ar(t, n, !1), o$(e, t, l);
      (r = t.stateNode), (ov.current = t);
      var i =
        o && 'function' != typeof n.getDerivedStateFromError
          ? null
          : r.render();
      return (
        (t.flags |= 1),
        null !== e && o
          ? ((t.child = aU(t, e.child, null, l)), (t.child = aU(t, null, i, l)))
          : ob(e, t, i, l),
        (t.memoizedState = r.state),
        a && ar(t, n, !0),
        t.child
      );
    }
    function o_(e) {
      var t = e.stateNode;
      t.pendingContext
        ? ae(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && ae(e, t.context, !1),
        ll(e, t.containerInfo);
    }
    function oP(e, t, n, r, a) {
      return aT(), aM(a), (t.flags |= 256), ob(e, t, n, r), t.child;
    }
    var oR = { dehydrated: null, treeContext: null, retryLane: 0 };
    function oO(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function oL(e, t, n) {
      var r,
        a = t.pendingProps,
        l = lu.current,
        o = !1,
        i = 0 != (128 & t.flags);
      if (
        ((r = i) ||
          (r = (null === e || null !== e.memoizedState) && 0 != (2 & l)),
        r
          ? ((o = !0), (t.flags &= -129))
          : (null === e || null !== e.memoizedState) && (l |= 1),
        r2(lu, 1 & l),
        null === e)
      )
        return (aP(t),
        null !== (e = t.memoizedState) && null !== (e = e.dehydrated))
          ? (0 == (1 & t.mode)
              ? (t.lanes = 1)
              : '$!' === e.data
              ? (t.lanes = 8)
              : (t.lanes = 0x40000000),
            null)
          : ((i = a.children),
            (e = a.fallback),
            o
              ? ((a = t.mode),
                (o = t.child),
                (i = { mode: 'hidden', children: i }),
                0 == (1 & a) && null !== o
                  ? ((o.childLanes = 0), (o.pendingProps = i))
                  : (o = sn(i, a, 0, null)),
                (e = st(e, a, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = oO(n)),
                (t.memoizedState = oR),
                e)
              : oT(t, i));
      if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
        return (function (e, t, n, r, a, l, o) {
          if (n)
            return 256 & t.flags
              ? ((t.flags &= -257), oM(e, t, o, (r = ou(Error(d(422))))))
              : null !== t.memoizedState
              ? ((t.child = e.child), (t.flags |= 128), null)
              : ((l = r.fallback),
                (a = t.mode),
                (r = sn({ mode: 'visible', children: r.children }, a, 0, null)),
                (l = st(l, a, o, null)),
                (l.flags |= 2),
                (r.return = t),
                (l.return = t),
                (r.sibling = l),
                (t.child = r),
                0 != (1 & t.mode) && aU(t, e.child, null, o),
                (t.child.memoizedState = oO(o)),
                (t.memoizedState = oR),
                l);
          if (0 == (1 & t.mode)) return oM(e, t, o, null);
          if ('$!' === a.data) {
            if ((r = a.nextSibling && a.nextSibling.dataset)) var i = r.dgst;
            return (
              (r = i), oM(e, t, o, (r = ou((l = Error(d(419))), r, void 0)))
            );
          }
          if (((i = 0 != (o & e.childLanes)), oy || i)) {
            if (null !== (r = ii)) {
              switch (o & -o) {
                case 4:
                  a = 2;
                  break;
                case 16:
                  a = 8;
                  break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 0x1000000:
                case 0x2000000:
                case 0x4000000:
                  a = 32;
                  break;
                case 0x20000000:
                  a = 0x10000000;
                  break;
                default:
                  a = 0;
              }
              0 !== (a = 0 != (a & (r.suspendedLanes | o)) ? 0 : a) &&
                a !== l.retryLane &&
                ((l.retryLane = a), a0(e, a), iI(r, e, a, -1));
            }
            return iq(), oM(e, t, o, (r = ou(Error(d(421)))));
          }
          return '$?' === a.data
            ? ((t.flags |= 128),
              (t.child = e.child),
              (t = i6.bind(null, e)),
              (a._reactRetry = t),
              null)
            : ((e = l.treeContext),
              (aS = r$(a.nextSibling)),
              (ak = t),
              (aE = !0),
              (aC = null),
              null !== e &&
                ((ap[ah++] = ag),
                (ap[ah++] = av),
                (ap[ah++] = am),
                (ag = e.id),
                (av = e.overflow),
                (am = t)),
              (t = oT(t, r.children)),
              (t.flags |= 4096),
              t);
        })(e, t, i, a, r, l, n);
      if (o) {
        (o = a.fallback), (i = t.mode), (r = (l = e.child).sibling);
        var s = { mode: 'hidden', children: a.children };
        return (
          0 == (1 & i) && t.child !== l
            ? (((a = t.child).childLanes = 0),
              (a.pendingProps = s),
              (t.deletions = null))
            : ((a = i7(l, s)).subtreeFlags = 0xe00000 & l.subtreeFlags),
          null !== r
            ? (o = i7(r, o))
            : ((o = st(o, i, n, null)), (o.flags |= 2)),
          (o.return = t),
          (a.return = t),
          (a.sibling = o),
          (t.child = a),
          (a = o),
          (o = t.child),
          (i =
            null === (i = e.child.memoizedState)
              ? oO(n)
              : {
                  baseLanes: i.baseLanes | n,
                  cachePool: null,
                  transitions: i.transitions,
                }),
          (o.memoizedState = i),
          (o.childLanes = e.childLanes & ~n),
          (t.memoizedState = oR),
          a
        );
      }
      return (
        (e = (o = e.child).sibling),
        (a = i7(o, { mode: 'visible', children: a.children })),
        0 == (1 & t.mode) && (a.lanes = n),
        (a.return = t),
        (a.sibling = null),
        null !== e &&
          (null === (n = t.deletions)
            ? ((t.deletions = [e]), (t.flags |= 16))
            : n.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a
      );
    }
    function oT(e, t) {
      return (
        ((t = sn({ mode: 'visible', children: t }, e.mode, 0, null)).return =
          e),
        (e.child = t)
      );
    }
    function oM(e, t, n, r) {
      return (
        null !== r && aM(r),
        aU(t, e.child, null, n),
        (e = oT(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function oI(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      null !== r && (r.lanes |= t), aq(e.return, t, n);
    }
    function oF(e, t, n, r, a) {
      var l = e.memoizedState;
      null === l
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: a,
          })
        : ((l.isBackwards = t),
          (l.rendering = null),
          (l.renderingStartTime = 0),
          (l.last = r),
          (l.tail = n),
          (l.tailMode = a));
    }
    function oz(e, t, n) {
      var r = t.pendingProps,
        a = r.revealOrder,
        l = r.tail;
      if ((ob(e, t, r.children, n), 0 != (2 & (r = lu.current))))
        (r = (1 & r) | 2), (t.flags |= 128);
      else {
        if (null !== e && 0 != (128 & e.flags))
          e: for (e = t.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && oI(e, n, t);
            else if (19 === e.tag) oI(e, n, t);
            else if (null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        r &= 1;
      }
      if ((r2(lu, r), 0 == (1 & t.mode))) t.memoizedState = null;
      else
        switch (a) {
          case 'forwards':
            for (a = null, n = t.child; null !== n; )
              null !== (e = n.alternate) && null === lc(e) && (a = n),
                (n = n.sibling);
            null === (n = a)
              ? ((a = t.child), (t.child = null))
              : ((a = n.sibling), (n.sibling = null)),
              oF(t, !1, a, n, l);
            break;
          case 'backwards':
            for (n = null, a = t.child, t.child = null; null !== a; ) {
              if (null !== (e = a.alternate) && null === lc(e)) {
                t.child = a;
                break;
              }
              (e = a.sibling), (a.sibling = n), (n = a), (a = e);
            }
            oF(t, !0, n, null, l);
            break;
          case 'together':
            oF(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function oD(e, t) {
      0 == (1 & t.mode) &&
        null !== e &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function o$(e, t, n) {
      if (
        (null !== e && (t.dependencies = e.dependencies),
        (im |= t.lanes),
        0 == (n & t.childLanes))
      )
        return null;
      if (null !== e && t.child !== e.child) throw Error(d(153));
      if (null !== t.child) {
        for (
          n = i7((e = t.child), e.pendingProps), t.child = n, n.return = t;
          null !== e.sibling;

        )
          (e = e.sibling), ((n = n.sibling = i7(e, e.pendingProps)).return = t);
        n.sibling = null;
      }
      return t.child;
    }
    function oU(e, t) {
      if (!aE)
        switch (e.tailMode) {
          case 'hidden':
            t = e.tail;
            for (var n = null; null !== t; )
              null !== t.alternate && (n = t), (t = t.sibling);
            null === n ? (e.tail = null) : (n.sibling = null);
            break;
          case 'collapsed':
            n = e.tail;
            for (var r = null; null !== n; )
              null !== n.alternate && (r = n), (n = n.sibling);
            null === r
              ? t || null === e.tail
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function oA(e) {
      var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var a = e.child; null !== a; )
          (n |= a.lanes | a.childLanes),
            (r |= 0xe00000 & a.subtreeFlags),
            (r |= 0xe00000 & a.flags),
            (a.return = e),
            (a = a.sibling);
      else
        for (a = e.child; null !== a; )
          (n |= a.lanes | a.childLanes),
            (r |= a.subtreeFlags),
            (r |= a.flags),
            (a.return = e),
            (a = a.sibling);
      return (e.subtreeFlags |= r), (e.childLanes = n), t;
    }
    (a = function (e, t) {
      for (var n = t.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === t) break;
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === t) return;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }),
      (l = function () {}),
      (o = function (e, t, n, r) {
        var a = e.memoizedProps;
        if (a !== r) {
          (e = t.stateNode), la(lt.current);
          var l,
            o = null;
          switch (n) {
            case 'input':
              (a = ed(e, a)), (r = ed(e, r)), (o = []);
              break;
            case 'select':
              (a = en({}, a, { value: void 0 })),
                (r = en({}, r, { value: void 0 })),
                (o = []);
              break;
            case 'textarea':
              (a = eb(e, a)), (r = eb(e, r)), (o = []);
              break;
            default:
              'function' != typeof a.onClick &&
                'function' == typeof r.onClick &&
                (e.onclick = rP);
          }
          for (u in (eM(n, r), (n = null), a))
            if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u]) {
              if ('style' === u) {
                var i = a[u];
                for (l in i)
                  i.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
              } else
                'dangerouslySetInnerHTML' !== u &&
                  'children' !== u &&
                  'suppressContentEditableWarning' !== u &&
                  'suppressHydrationWarning' !== u &&
                  'autoFocus' !== u &&
                  (p.hasOwnProperty(u)
                    ? o || (o = [])
                    : (o = o || []).push(u, null));
            }
          for (u in r) {
            var s = r[u];
            if (
              ((i = null != a ? a[u] : void 0),
              r.hasOwnProperty(u) && s !== i && (null != s || null != i))
            ) {
              if ('style' === u) {
                if (i) {
                  for (l in i)
                    !i.hasOwnProperty(l) ||
                      (s && s.hasOwnProperty(l)) ||
                      (n || (n = {}), (n[l] = ''));
                  for (l in s)
                    s.hasOwnProperty(l) &&
                      i[l] !== s[l] &&
                      (n || (n = {}), (n[l] = s[l]));
                } else n || (o || (o = []), o.push(u, n)), (n = s);
              } else
                'dangerouslySetInnerHTML' === u
                  ? ((s = s ? s.__html : void 0),
                    (i = i ? i.__html : void 0),
                    null != s && i !== s && (o = o || []).push(u, s))
                  : 'children' === u
                  ? ('string' != typeof s && 'number' != typeof s) ||
                    (o = o || []).push(u, '' + s)
                  : 'suppressContentEditableWarning' !== u &&
                    'suppressHydrationWarning' !== u &&
                    (p.hasOwnProperty(u)
                      ? (null != s && 'onScroll' === u && rm('scroll', e),
                        o || i === s || (o = []))
                      : (o = o || []).push(u, s));
            }
          }
          n && (o = o || []).push('style', n);
          var u = o;
          (t.updateQueue = u) && (t.flags |= 4);
        }
      }),
      (i = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
      });
    var oB = !1,
      oW = !1,
      oV = 'function' == typeof WeakSet ? WeakSet : Set,
      oH = null;
    function oK(e, t) {
      var n = e.ref;
      if (null !== n) {
        if ('function' == typeof n)
          try {
            n(null);
          } catch (n) {
            i1(e, t, n);
          }
        else n.current = null;
      }
    }
    function oQ(e, t, n) {
      try {
        n();
      } catch (n) {
        i1(e, t, n);
      }
    }
    var oq = !1;
    function oG(e, t, n) {
      var r = t.updateQueue;
      if (null !== (r = null !== r ? r.lastEffect : null)) {
        var a = (r = r.next);
        do {
          if ((a.tag & e) === e) {
            var l = a.destroy;
            (a.destroy = void 0), void 0 !== l && oQ(t, n, l);
          }
          a = a.next;
        } while (a !== r);
      }
    }
    function oY(e, t) {
      if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
        var n = (t = t.next);
        do {
          if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
          }
          n = n.next;
        } while (n !== t);
      }
    }
    function oX(e) {
      var t = e.ref;
      if (null !== t) {
        var n = e.stateNode;
        e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e);
      }
    }
    function oJ(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }
    function oZ(e) {
      e: for (;;) {
        for (; null === e.sibling; ) {
          if (null === e.return || oJ(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

        ) {
          if (2 & e.flags || null === e.child || 4 === e.tag) continue e;
          (e.child.return = e), (e = e.child);
        }
        if (!(2 & e.flags)) return e.stateNode;
      }
    }
    var o0 = null,
      o1 = !1;
    function o2(e, t, n) {
      for (n = n.child; null !== n; ) o3(e, t, n), (n = n.sibling);
    }
    function o3(e, t, n) {
      if (tc && 'function' == typeof tc.onCommitFiberUnmount)
        try {
          tc.onCommitFiberUnmount(tu, n);
        } catch (e) {}
      switch (n.tag) {
        case 5:
          oW || oK(n, t);
        case 6:
          var r = o0,
            a = o1;
          (o0 = null),
            o2(e, t, n),
            (o0 = r),
            (o1 = a),
            null !== o0 &&
              (o1
                ? ((e = o0),
                  (n = n.stateNode),
                  8 === e.nodeType
                    ? e.parentNode.removeChild(n)
                    : e.removeChild(n))
                : o0.removeChild(n.stateNode));
          break;
        case 18:
          null !== o0 &&
            (o1
              ? ((e = o0),
                (n = n.stateNode),
                8 === e.nodeType
                  ? rD(e.parentNode, n)
                  : 1 === e.nodeType && rD(e, n),
                tK(e))
              : rD(o0, n.stateNode));
          break;
        case 4:
          (r = o0),
            (a = o1),
            (o0 = n.stateNode.containerInfo),
            (o1 = !0),
            o2(e, t, n),
            (o0 = r),
            (o1 = a);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !oW &&
            null !== (r = n.updateQueue) &&
            null !== (r = r.lastEffect)
          ) {
            a = r = r.next;
            do {
              var l = a,
                o = l.destroy;
              (l = l.tag),
                void 0 !== o &&
                  (0 != (2 & l) ? oQ(n, t, o) : 0 != (4 & l) && oQ(n, t, o)),
                (a = a.next);
            } while (a !== r);
          }
          o2(e, t, n);
          break;
        case 1:
          if (
            !oW &&
            (oK(n, t),
            'function' == typeof (r = n.stateNode).componentWillUnmount)
          )
            try {
              (r.props = n.memoizedProps),
                (r.state = n.memoizedState),
                r.componentWillUnmount();
            } catch (e) {
              i1(n, t, e);
            }
          o2(e, t, n);
          break;
        case 21:
        default:
          o2(e, t, n);
          break;
        case 22:
          1 & n.mode
            ? ((oW = (r = oW) || null !== n.memoizedState),
              o2(e, t, n),
              (oW = r))
            : o2(e, t, n);
      }
    }
    function o6(e) {
      var t = e.updateQueue;
      if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new oV()),
          t.forEach(function (t) {
            var r = i4.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
      }
    }
    function o4(e, t) {
      var n = t.deletions;
      if (null !== n)
        for (var r = 0; r < n.length; r++) {
          var a = n[r];
          try {
            var l = t,
              o = l;
            e: for (; null !== o; ) {
              switch (o.tag) {
                case 5:
                  (o0 = o.stateNode), (o1 = !1);
                  break e;
                case 3:
                case 4:
                  (o0 = o.stateNode.containerInfo), (o1 = !0);
                  break e;
              }
              o = o.return;
            }
            if (null === o0) throw Error(d(160));
            o3(e, l, a), (o0 = null), (o1 = !1);
            var i = a.alternate;
            null !== i && (i.return = null), (a.return = null);
          } catch (e) {
            i1(a, t, e);
          }
        }
      if (12854 & t.subtreeFlags)
        for (t = t.child; null !== t; ) o5(t, e), (t = t.sibling);
    }
    function o5(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((o4(t, e), o8(e), 4 & r)) {
            try {
              oG(3, e, e.return), oY(3, e);
            } catch (t) {
              i1(e, e.return, t);
            }
            try {
              oG(5, e, e.return);
            } catch (t) {
              i1(e, e.return, t);
            }
          }
          break;
        case 1:
          o4(t, e), o8(e), 512 & r && null !== n && oK(n, n.return);
          break;
        case 5:
          if (
            (o4(t, e),
            o8(e),
            512 & r && null !== n && oK(n, n.return),
            32 & e.flags)
          ) {
            var a = e.stateNode;
            try {
              e_(a, '');
            } catch (t) {
              i1(e, e.return, t);
            }
          }
          if (4 & r && null != (a = e.stateNode)) {
            var l = e.memoizedProps,
              o = null !== n ? n.memoizedProps : l,
              i = e.type,
              s = e.updateQueue;
            if (((e.updateQueue = null), null !== s))
              try {
                'input' === i &&
                  'radio' === l.type &&
                  null != l.name &&
                  ep(a, l),
                  eI(i, o);
                var u = eI(i, l);
                for (o = 0; o < s.length; o += 2) {
                  var c = s[o],
                    f = s[o + 1];
                  'style' === c
                    ? eL(a, f)
                    : 'dangerouslySetInnerHTML' === c
                    ? ej(a, f)
                    : 'children' === c
                    ? e_(a, f)
                    : N(a, c, f, u);
                }
                switch (i) {
                  case 'input':
                    eh(a, l);
                    break;
                  case 'textarea':
                    ew(a, l);
                    break;
                  case 'select':
                    var p = a._wrapperState.wasMultiple;
                    a._wrapperState.wasMultiple = !!l.multiple;
                    var h = l.value;
                    null != h
                      ? ey(a, !!l.multiple, h, !1)
                      : !!l.multiple !== p &&
                        (null != l.defaultValue
                          ? ey(a, !!l.multiple, l.defaultValue, !0)
                          : ey(a, !!l.multiple, l.multiple ? [] : '', !1));
                }
                a[rW] = l;
              } catch (t) {
                i1(e, e.return, t);
              }
          }
          break;
        case 6:
          if ((o4(t, e), o8(e), 4 & r)) {
            if (null === e.stateNode) throw Error(d(162));
            (a = e.stateNode), (l = e.memoizedProps);
            try {
              a.nodeValue = l;
            } catch (t) {
              i1(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            (o4(t, e),
            o8(e),
            4 & r && null !== n && n.memoizedState.isDehydrated)
          )
            try {
              tK(t.containerInfo);
            } catch (t) {
              i1(e, e.return, t);
            }
          break;
        case 4:
        default:
          o4(t, e), o8(e);
          break;
        case 13:
          o4(t, e),
            o8(e),
            8192 & (a = e.child).flags &&
              ((l = null !== a.memoizedState),
              (a.stateNode.isHidden = l),
              l &&
                (null === a.alternate || null === a.alternate.memoizedState) &&
                (ix = tn())),
            4 & r && o6(e);
          break;
        case 22:
          if (
            ((c = null !== n && null !== n.memoizedState),
            1 & e.mode ? ((oW = (u = oW) || c), o4(t, e), (oW = u)) : o4(t, e),
            o8(e),
            8192 & r)
          ) {
            if (
              ((u = null !== e.memoizedState),
              (e.stateNode.isHidden = u) && !c && 0 != (1 & e.mode))
            )
              for (oH = e, c = e.child; null !== c; ) {
                for (f = oH = c; null !== oH; ) {
                  switch (((h = (p = oH).child), p.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      oG(4, p, p.return);
                      break;
                    case 1:
                      oK(p, p.return);
                      var m = p.stateNode;
                      if ('function' == typeof m.componentWillUnmount) {
                        (r = p), (n = p.return);
                        try {
                          (t = r),
                            (m.props = t.memoizedProps),
                            (m.state = t.memoizedState),
                            m.componentWillUnmount();
                        } catch (e) {
                          i1(r, n, e);
                        }
                      }
                      break;
                    case 5:
                      oK(p, p.return);
                      break;
                    case 22:
                      if (null !== p.memoizedState) {
                        o7(f);
                        continue;
                      }
                  }
                  null !== h ? ((h.return = p), (oH = h)) : o7(f);
                }
                c = c.sibling;
              }
            e: for (c = null, f = e; ; ) {
              if (5 === f.tag) {
                if (null === c) {
                  c = f;
                  try {
                    (a = f.stateNode),
                      u
                        ? ((l = a.style),
                          'function' == typeof l.setProperty
                            ? l.setProperty('display', 'none', 'important')
                            : (l.display = 'none'))
                        : ((i = f.stateNode),
                          (o =
                            null != (s = f.memoizedProps.style) &&
                            s.hasOwnProperty('display')
                              ? s.display
                              : null),
                          (i.style.display = eO('display', o)));
                  } catch (t) {
                    i1(e, e.return, t);
                  }
                }
              } else if (6 === f.tag) {
                if (null === c)
                  try {
                    f.stateNode.nodeValue = u ? '' : f.memoizedProps;
                  } catch (t) {
                    i1(e, e.return, t);
                  }
              } else if (
                ((22 !== f.tag && 23 !== f.tag) ||
                  null === f.memoizedState ||
                  f === e) &&
                null !== f.child
              ) {
                (f.child.return = f), (f = f.child);
                continue;
              }
              if (f === e) break;
              for (; null === f.sibling; ) {
                if (null === f.return || f.return === e) break e;
                c === f && (c = null), (f = f.return);
              }
              c === f && (c = null),
                (f.sibling.return = f.return),
                (f = f.sibling);
            }
          }
          break;
        case 19:
          o4(t, e), o8(e), 4 & r && o6(e);
        case 21:
      }
    }
    function o8(e) {
      var t = e.flags;
      if (2 & t) {
        try {
          e: {
            for (var n = e.return; null !== n; ) {
              if (oJ(n)) {
                var r = n;
                break e;
              }
              n = n.return;
            }
            throw Error(d(160));
          }
          switch (r.tag) {
            case 5:
              var a = r.stateNode;
              32 & r.flags && (e_(a, ''), (r.flags &= -33));
              var l = oZ(e);
              !(function e(t, n, r) {
                var a = t.tag;
                if (5 === a || 6 === a)
                  (t = t.stateNode),
                    n ? r.insertBefore(t, n) : r.appendChild(t);
                else if (4 !== a && null !== (t = t.child))
                  for (e(t, n, r), t = t.sibling; null !== t; )
                    e(t, n, r), (t = t.sibling);
              })(e, l, a);
              break;
            case 3:
            case 4:
              var o = r.stateNode.containerInfo,
                i = oZ(e);
              !(function e(t, n, r) {
                var a = t.tag;
                if (5 === a || 6 === a)
                  (t = t.stateNode),
                    n
                      ? 8 === r.nodeType
                        ? r.parentNode.insertBefore(t, n)
                        : r.insertBefore(t, n)
                      : (8 === r.nodeType
                          ? (n = r.parentNode).insertBefore(t, r)
                          : (n = r).appendChild(t),
                        null != (r = r._reactRootContainer) ||
                          null !== n.onclick ||
                          (n.onclick = rP));
                else if (4 !== a && null !== (t = t.child))
                  for (e(t, n, r), t = t.sibling; null !== t; )
                    e(t, n, r), (t = t.sibling);
              })(e, i, o);
              break;
            default:
              throw Error(d(161));
          }
        } catch (t) {
          i1(e, e.return, t);
        }
        e.flags &= -3;
      }
      4096 & t && (e.flags &= -4097);
    }
    function o9(e) {
      for (; null !== oH; ) {
        var t = oH;
        if (0 != (8772 & t.flags)) {
          var n = t.alternate;
          try {
            if (0 != (8772 & t.flags))
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  oW || oY(5, t);
                  break;
                case 1:
                  var r = t.stateNode;
                  if (4 & t.flags && !oW) {
                    if (null === n) r.componentDidMount();
                    else {
                      var a =
                        t.elementType === t.type
                          ? n.memoizedProps
                          : ot(t.type, n.memoizedProps);
                      r.componentDidUpdate(
                        a,
                        n.memoizedState,
                        r.__reactInternalSnapshotBeforeUpdate
                      );
                    }
                  }
                  var l = t.updateQueue;
                  null !== l && a7(t, l, r);
                  break;
                case 3:
                  var o = t.updateQueue;
                  if (null !== o) {
                    if (((n = null), null !== t.child))
                      switch (t.child.tag) {
                        case 5:
                        case 1:
                          n = t.child.stateNode;
                      }
                    a7(t, o, n);
                  }
                  break;
                case 5:
                  var i = t.stateNode;
                  if (null === n && 4 & t.flags) {
                    n = i;
                    var s = t.memoizedProps;
                    switch (t.type) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        s.autoFocus && n.focus();
                        break;
                      case 'img':
                        s.src && (n.src = s.src);
                    }
                  }
                  break;
                case 6:
                case 4:
                case 12:
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                case 13:
                  if (null === t.memoizedState) {
                    var u = t.alternate;
                    if (null !== u) {
                      var c = u.memoizedState;
                      if (null !== c) {
                        var f = c.dehydrated;
                        null !== f && tK(f);
                      }
                    }
                  }
                  break;
                default:
                  throw Error(d(163));
              }
            oW || (512 & t.flags && oX(t));
          } catch (e) {
            i1(t, t.return, e);
          }
        }
        if (t === e) {
          oH = null;
          break;
        }
        if (null !== (n = t.sibling)) {
          (n.return = t.return), (oH = n);
          break;
        }
        oH = t.return;
      }
    }
    function o7(e) {
      for (; null !== oH; ) {
        var t = oH;
        if (t === e) {
          oH = null;
          break;
        }
        var n = t.sibling;
        if (null !== n) {
          (n.return = t.return), (oH = n);
          break;
        }
        oH = t.return;
      }
    }
    function ie(e) {
      for (; null !== oH; ) {
        var t = oH;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var n = t.return;
              try {
                oY(4, t);
              } catch (e) {
                i1(t, n, e);
              }
              break;
            case 1:
              var r = t.stateNode;
              if ('function' == typeof r.componentDidMount) {
                var a = t.return;
                try {
                  r.componentDidMount();
                } catch (e) {
                  i1(t, a, e);
                }
              }
              var l = t.return;
              try {
                oX(t);
              } catch (e) {
                i1(t, l, e);
              }
              break;
            case 5:
              var o = t.return;
              try {
                oX(t);
              } catch (e) {
                i1(t, o, e);
              }
          }
        } catch (e) {
          i1(t, t.return, e);
        }
        if (t === e) {
          oH = null;
          break;
        }
        var i = t.sibling;
        if (null !== i) {
          (i.return = t.return), (oH = i);
          break;
        }
        oH = t.return;
      }
    }
    var it = Math.ceil,
      ir = j.ReactCurrentDispatcher,
      ia = j.ReactCurrentOwner,
      il = j.ReactCurrentBatchConfig,
      io = 0,
      ii = null,
      is = null,
      iu = 0,
      ic = 0,
      id = r0(0),
      ip = 0,
      ih = null,
      im = 0,
      ig = 0,
      iv = 0,
      iy = null,
      ib = null,
      ix = 0,
      iw = 1 / 0,
      ik = null,
      iS = !1,
      iE = null,
      iC = null,
      iN = !1,
      ij = null,
      i_ = 0,
      iP = 0,
      iR = null,
      iO = -1,
      iL = 0;
    function iT() {
      return 0 != (6 & io) ? tn() : -1 !== iO ? iO : (iO = tn());
    }
    function iM(e) {
      return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & io) && 0 !== iu
        ? iu & -iu
        : null !== aI.transition
        ? (0 === iL && (iL = tb()), iL)
        : 0 !== (e = tS)
        ? e
        : (e = void 0 === (e = window.event) ? 16 : t0(e.type));
    }
    function iI(e, t, n, r) {
      if (50 < iP) throw ((iP = 0), (iR = null), Error(d(185)));
      tw(e, n, r),
        (0 == (2 & io) || e !== ii) &&
          (e === ii && (0 == (2 & io) && (ig |= n), 4 === ip && iU(e, iu)),
          iF(e, r),
          1 === n &&
            0 === io &&
            0 == (1 & t.mode) &&
            ((iw = tn() + 500), al && as()));
    }
    function iF(e, t) {
      var n,
        r = e.callbackNode;
      !(function (e, t) {
        for (
          var n = e.suspendedLanes,
            r = e.pingedLanes,
            a = e.expirationTimes,
            l = e.pendingLanes;
          0 < l;

        ) {
          var o = 31 - td(l),
            i = 1 << o,
            s = a[o];
          -1 === s
            ? (0 == (i & n) || 0 != (i & r)) &&
              (a[o] = (function (e, t) {
                switch (e) {
                  case 1:
                  case 2:
                  case 4:
                    return t + 250;
                  case 8:
                  case 16:
                  case 32:
                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                    return t + 5e3;
                  default:
                    return -1;
                }
              })(i, t))
            : s <= t && (e.expiredLanes |= i),
            (l &= ~i);
        }
      })(e, t);
      var a = tv(e, e === ii ? iu : 0);
      if (0 === a)
        null !== r && e7(r), (e.callbackNode = null), (e.callbackPriority = 0);
      else if (((t = a & -a), e.callbackPriority !== t)) {
        if ((null != r && e7(r), 1 === t))
          0 === e.tag
            ? ((n = iA.bind(null, e)), (al = !0), ai(n))
            : ai(iA.bind(null, e)),
            rF(function () {
              0 == (6 & io) && as();
            }),
            (r = null);
        else {
          switch (tE(a)) {
            case 1:
              r = ta;
              break;
            case 4:
              r = tl;
              break;
            case 16:
            default:
              r = to;
              break;
            case 0x20000000:
              r = ts;
          }
          r = e9(r, iz.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = r);
      }
    }
    function iz(e, t) {
      if (((iO = -1), (iL = 0), 0 != (6 & io))) throw Error(d(327));
      var n = e.callbackNode;
      if (iZ() && e.callbackNode !== n) return null;
      var r = tv(e, e === ii ? iu : 0);
      if (0 === r) return null;
      if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = iG(e, r);
      else {
        t = r;
        var a = io;
        io |= 2;
        var l = iQ();
        for (
          (ii !== e || iu !== t) && ((ik = null), (iw = tn() + 500), iH(e, t));
          ;

        )
          try {
            (function () {
              for (; null !== is && !te(); ) iY(is);
            })();
            break;
          } catch (t) {
            iK(e, t);
          }
        aK(),
          (ir.current = l),
          (io = a),
          null !== is ? (t = 0) : ((ii = null), (iu = 0), (t = ip));
      }
      if (0 !== t) {
        if (
          (2 === t && 0 !== (a = ty(e)) && ((r = a), (t = iD(e, a))), 1 === t)
        )
          throw ((n = ih), iH(e, 0), iU(e, r), iF(e, tn()), n);
        if (6 === t) iU(e, r);
        else {
          if (
            ((a = e.current.alternate),
            0 == (30 & r) &&
              !(function (e) {
                for (var t = e; ; ) {
                  if (16384 & t.flags) {
                    var n = t.updateQueue;
                    if (null !== n && null !== (n = n.stores))
                      for (var r = 0; r < n.length; r++) {
                        var a = n[r],
                          l = a.getSnapshot;
                        a = a.value;
                        try {
                          if (!nG(l(), a)) return !1;
                        } catch (e) {
                          return !1;
                        }
                      }
                  }
                  if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                    (n.return = t), (t = n);
                  else {
                    if (t === e) break;
                    for (; null === t.sibling; ) {
                      if (null === t.return || t.return === e) return !0;
                      t = t.return;
                    }
                    (t.sibling.return = t.return), (t = t.sibling);
                  }
                }
                return !0;
              })(a) &&
              (2 === (t = iG(e, r)) &&
                0 !== (l = ty(e)) &&
                ((r = l), (t = iD(e, l))),
              1 === t))
          )
            throw ((n = ih), iH(e, 0), iU(e, r), iF(e, tn()), n);
          switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
            case 0:
            case 1:
              throw Error(d(345));
            case 2:
            case 5:
              iJ(e, ib, ik);
              break;
            case 3:
              if (
                (iU(e, r), (0x7c00000 & r) === r && 10 < (t = ix + 500 - tn()))
              ) {
                if (0 !== tv(e, 0)) break;
                if (((a = e.suspendedLanes) & r) !== r) {
                  iT(), (e.pingedLanes |= e.suspendedLanes & a);
                  break;
                }
                e.timeoutHandle = rT(iJ.bind(null, e, ib, ik), t);
                break;
              }
              iJ(e, ib, ik);
              break;
            case 4:
              if ((iU(e, r), (4194240 & r) === r)) break;
              for (a = -1, t = e.eventTimes; 0 < r; ) {
                var o = 31 - td(r);
                (l = 1 << o), (o = t[o]) > a && (a = o), (r &= ~l);
              }
              if (
                ((r = a),
                10 <
                  (r =
                    (120 > (r = tn() - r)
                      ? 120
                      : 480 > r
                      ? 480
                      : 1080 > r
                      ? 1080
                      : 1920 > r
                      ? 1920
                      : 3e3 > r
                      ? 3e3
                      : 4320 > r
                      ? 4320
                      : 1960 * it(r / 1960)) - r))
              ) {
                e.timeoutHandle = rT(iJ.bind(null, e, ib, ik), r);
                break;
              }
              iJ(e, ib, ik);
              break;
            default:
              throw Error(d(329));
          }
        }
      }
      return iF(e, tn()), e.callbackNode === n ? iz.bind(null, e) : null;
    }
    function iD(e, t) {
      var n = iy;
      return (
        e.current.memoizedState.isDehydrated && (iH(e, t).flags |= 256),
        2 !== (e = iG(e, t)) && ((t = ib), (ib = n), null !== t && i$(t)),
        e
      );
    }
    function i$(e) {
      null === ib ? (ib = e) : ib.push.apply(ib, e);
    }
    function iU(e, t) {
      for (
        t &= ~iv,
          t &= ~ig,
          e.suspendedLanes |= t,
          e.pingedLanes &= ~t,
          e = e.expirationTimes;
        0 < t;

      ) {
        var n = 31 - td(t),
          r = 1 << n;
        (e[n] = -1), (t &= ~r);
      }
    }
    function iA(e) {
      if (0 != (6 & io)) throw Error(d(327));
      iZ();
      var t = tv(e, 0);
      if (0 == (1 & t)) return iF(e, tn()), null;
      var n = iG(e, t);
      if (0 !== e.tag && 2 === n) {
        var r = ty(e);
        0 !== r && ((t = r), (n = iD(e, r)));
      }
      if (1 === n) throw ((n = ih), iH(e, 0), iU(e, t), iF(e, tn()), n);
      if (6 === n) throw Error(d(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        iJ(e, ib, ik),
        iF(e, tn()),
        null
      );
    }
    function iB(e, t) {
      var n = io;
      io |= 1;
      try {
        return e(t);
      } finally {
        0 === (io = n) && ((iw = tn() + 500), al && as());
      }
    }
    function iW(e) {
      null !== ij && 0 === ij.tag && 0 == (6 & io) && iZ();
      var t = io;
      io |= 1;
      var n = il.transition,
        r = tS;
      try {
        if (((il.transition = null), (tS = 1), e)) return e();
      } finally {
        (tS = r), (il.transition = n), 0 == (6 & (io = t)) && as();
      }
    }
    function iV() {
      (ic = id.current), r1(id);
    }
    function iH(e, t) {
      (e.finishedWork = null), (e.finishedLanes = 0);
      var n = e.timeoutHandle;
      if ((-1 !== n && ((e.timeoutHandle = -1), rM(n)), null !== is))
        for (n = is.return; null !== n; ) {
          var r = n;
          switch ((aw(r), r.tag)) {
            case 1:
              null != (r = r.type.childContextTypes) && r7();
              break;
            case 3:
              lo(), r1(r4), r1(r6), lf();
              break;
            case 5:
              ls(r);
              break;
            case 4:
              lo();
              break;
            case 13:
            case 19:
              r1(lu);
              break;
            case 10:
              aQ(r.type._context);
              break;
            case 22:
            case 23:
              iV();
          }
          n = n.return;
        }
      if (
        ((ii = e),
        (is = e = i7(e.current, null)),
        (iu = ic = t),
        (ip = 0),
        (ih = null),
        (iv = ig = im = 0),
        (ib = iy = null),
        null !== aX)
      ) {
        for (t = 0; t < aX.length; t++)
          if (null !== (r = (n = aX[t]).interleaved)) {
            n.interleaved = null;
            var a = r.next,
              l = n.pending;
            if (null !== l) {
              var o = l.next;
              (l.next = a), (r.next = o);
            }
            n.pending = r;
          }
        aX = null;
      }
      return e;
    }
    function iK(e, t) {
      for (;;) {
        var n = is;
        try {
          if ((aK(), (lp.current = l8), lb)) {
            for (var r = lg.memoizedState; null !== r; ) {
              var a = r.queue;
              null !== a && (a.pending = null), (r = r.next);
            }
            lb = !1;
          }
          if (
            ((lm = 0),
            (ly = lv = lg = null),
            (lx = !1),
            (lw = 0),
            (ia.current = null),
            null === n || null === n.return)
          ) {
            (ip = 1), (ih = t), (is = null);
            break;
          }
          e: {
            var l = e,
              o = n.return,
              i = n,
              s = t;
            if (
              ((t = iu),
              (i.flags |= 32768),
              null !== s && 'object' == typeof s && 'function' == typeof s.then)
            ) {
              var u = s,
                c = i,
                f = c.tag;
              if (0 == (1 & c.mode) && (0 === f || 11 === f || 15 === f)) {
                var p = c.alternate;
                p
                  ? ((c.updateQueue = p.updateQueue),
                    (c.memoizedState = p.memoizedState),
                    (c.lanes = p.lanes))
                  : ((c.updateQueue = null), (c.memoizedState = null));
              }
              var h = om(o);
              if (null !== h) {
                (h.flags &= -257),
                  og(h, o, i, l, t),
                  1 & h.mode && oh(l, u, t),
                  (t = h),
                  (s = u);
                var m = t.updateQueue;
                if (null === m) {
                  var g = new Set();
                  g.add(s), (t.updateQueue = g);
                } else m.add(s);
                break e;
              }
              if (0 == (1 & t)) {
                oh(l, u, t), iq();
                break e;
              }
              s = Error(d(426));
            } else if (aE && 1 & i.mode) {
              var v = om(o);
              if (null !== v) {
                0 == (65536 & v.flags) && (v.flags |= 256),
                  og(v, o, i, l, t),
                  aM(os(s, i));
                break e;
              }
            }
            (l = s = os(s, i)),
              4 !== ip && (ip = 2),
              null === iy ? (iy = [l]) : iy.push(l),
              (l = o);
            do {
              switch (l.tag) {
                case 3:
                  (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                  var y = of(l, s, t);
                  a8(l, y);
                  break e;
                case 1:
                  i = s;
                  var b = l.type,
                    x = l.stateNode;
                  if (
                    0 == (128 & l.flags) &&
                    ('function' == typeof b.getDerivedStateFromError ||
                      (null !== x &&
                        'function' == typeof x.componentDidCatch &&
                        (null === iC || !iC.has(x))))
                  ) {
                    (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                    var w = op(l, i, t);
                    a8(l, w);
                    break e;
                  }
              }
              l = l.return;
            } while (null !== l);
          }
          iX(n);
        } catch (e) {
          (t = e), is === n && null !== n && (is = n = n.return);
          continue;
        }
        break;
      }
    }
    function iQ() {
      var e = ir.current;
      return (ir.current = l8), null === e ? l8 : e;
    }
    function iq() {
      (0 === ip || 3 === ip || 2 === ip) && (ip = 4),
        null === ii ||
          (0 == (0xfffffff & im) && 0 == (0xfffffff & ig)) ||
          iU(ii, iu);
    }
    function iG(e, t) {
      var n = io;
      io |= 2;
      var r = iQ();
      for ((ii !== e || iu !== t) && ((ik = null), iH(e, t)); ; )
        try {
          (function () {
            for (; null !== is; ) iY(is);
          })();
          break;
        } catch (t) {
          iK(e, t);
        }
      if ((aK(), (io = n), (ir.current = r), null !== is)) throw Error(d(261));
      return (ii = null), (iu = 0), ip;
    }
    function iY(e) {
      var t = s(e.alternate, e, ic);
      (e.memoizedProps = e.pendingProps),
        null === t ? iX(e) : (is = t),
        (ia.current = null);
    }
    function iX(e) {
      var t = e;
      do {
        var n = t.alternate;
        if (((e = t.return), 0 == (32768 & t.flags))) {
          if (
            null !==
            (n = (function (e, t, n) {
              var r = t.pendingProps;
              switch ((aw(t), t.tag)) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                  return oA(t), null;
                case 1:
                case 17:
                  return r9(t.type) && r7(), oA(t), null;
                case 3:
                  return (
                    (r = t.stateNode),
                    lo(),
                    r1(r4),
                    r1(r6),
                    lf(),
                    r.pendingContext &&
                      ((r.context = r.pendingContext),
                      (r.pendingContext = null)),
                    (null === e || null === e.child) &&
                      (aO(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated &&
                            0 == (256 & t.flags)) ||
                          ((t.flags |= 1024),
                          null !== aC && (i$(aC), (aC = null)))),
                    l(e, t),
                    oA(t),
                    null
                  );
                case 5:
                  ls(t);
                  var s = la(lr.current);
                  if (((n = t.type), null !== e && null != t.stateNode))
                    o(e, t, n, r, s),
                      e.ref !== t.ref &&
                        ((t.flags |= 512), (t.flags |= 2097152));
                  else {
                    if (!r) {
                      if (null === t.stateNode) throw Error(d(166));
                      return oA(t), null;
                    }
                    if (((e = la(lt.current)), aO(t))) {
                      (r = t.stateNode), (n = t.type);
                      var u = t.memoizedProps;
                      switch (
                        ((r[rB] = t), (r[rW] = u), (e = 0 != (1 & t.mode)), n)
                      ) {
                        case 'dialog':
                          rm('cancel', r), rm('close', r);
                          break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                          rm('load', r);
                          break;
                        case 'video':
                        case 'audio':
                          for (s = 0; s < rd.length; s++) rm(rd[s], r);
                          break;
                        case 'source':
                          rm('error', r);
                          break;
                        case 'img':
                        case 'image':
                        case 'link':
                          rm('error', r), rm('load', r);
                          break;
                        case 'details':
                          rm('toggle', r);
                          break;
                        case 'input':
                          ef(r, u), rm('invalid', r);
                          break;
                        case 'select':
                          (r._wrapperState = { wasMultiple: !!u.multiple }),
                            rm('invalid', r);
                          break;
                        case 'textarea':
                          ex(r, u), rm('invalid', r);
                      }
                      for (var c in (eM(n, u), (s = null), u))
                        if (u.hasOwnProperty(c)) {
                          var f = u[c];
                          'children' === c
                            ? 'string' == typeof f
                              ? r.textContent !== f &&
                                (!0 !== u.suppressHydrationWarning &&
                                  r_(r.textContent, f, e),
                                (s = ['children', f]))
                              : 'number' == typeof f &&
                                r.textContent !== '' + f &&
                                (!0 !== u.suppressHydrationWarning &&
                                  r_(r.textContent, f, e),
                                (s = ['children', '' + f]))
                            : p.hasOwnProperty(c) &&
                              null != f &&
                              'onScroll' === c &&
                              rm('scroll', r);
                        }
                      switch (n) {
                        case 'input':
                          es(r), em(r, u, !0);
                          break;
                        case 'textarea':
                          es(r), ek(r);
                          break;
                        case 'select':
                        case 'option':
                          break;
                        default:
                          'function' == typeof u.onClick && (r.onclick = rP);
                      }
                      (r = s),
                        (t.updateQueue = r),
                        null !== r && (t.flags |= 4);
                    } else {
                      (c = 9 === s.nodeType ? s : s.ownerDocument),
                        'http://www.w3.org/1999/xhtml' === e && (e = eS(n)),
                        'http://www.w3.org/1999/xhtml' === e
                          ? 'script' === n
                            ? (((e = c.createElement('div')).innerHTML =
                                '<script></script>'),
                              (e = e.removeChild(e.firstChild)))
                            : 'string' == typeof r.is
                            ? (e = c.createElement(n, { is: r.is }))
                            : ((e = c.createElement(n)),
                              'select' === n &&
                                ((c = e),
                                r.multiple
                                  ? (c.multiple = !0)
                                  : r.size && (c.size = r.size)))
                          : (e = c.createElementNS(e, n)),
                        (e[rB] = t),
                        (e[rW] = r),
                        a(e, t, !1, !1),
                        (t.stateNode = e);
                      e: {
                        switch (((c = eI(n, r)), n)) {
                          case 'dialog':
                            rm('cancel', e), rm('close', e), (s = r);
                            break;
                          case 'iframe':
                          case 'object':
                          case 'embed':
                            rm('load', e), (s = r);
                            break;
                          case 'video':
                          case 'audio':
                            for (s = 0; s < rd.length; s++) rm(rd[s], e);
                            s = r;
                            break;
                          case 'source':
                            rm('error', e), (s = r);
                            break;
                          case 'img':
                          case 'image':
                          case 'link':
                            rm('error', e), rm('load', e), (s = r);
                            break;
                          case 'details':
                            rm('toggle', e), (s = r);
                            break;
                          case 'input':
                            ef(e, r), (s = ed(e, r)), rm('invalid', e);
                            break;
                          case 'option':
                          default:
                            s = r;
                            break;
                          case 'select':
                            (e._wrapperState = { wasMultiple: !!r.multiple }),
                              (s = en({}, r, { value: void 0 })),
                              rm('invalid', e);
                            break;
                          case 'textarea':
                            ex(e, r), (s = eb(e, r)), rm('invalid', e);
                        }
                        for (u in (eM(n, s), (f = s)))
                          if (f.hasOwnProperty(u)) {
                            var h = f[u];
                            'style' === u
                              ? eL(e, h)
                              : 'dangerouslySetInnerHTML' === u
                              ? null != (h = h ? h.__html : void 0) && ej(e, h)
                              : 'children' === u
                              ? 'string' == typeof h
                                ? ('textarea' !== n || '' !== h) && e_(e, h)
                                : 'number' == typeof h && e_(e, '' + h)
                              : 'suppressContentEditableWarning' !== u &&
                                'suppressHydrationWarning' !== u &&
                                'autoFocus' !== u &&
                                (p.hasOwnProperty(u)
                                  ? null != h &&
                                    'onScroll' === u &&
                                    rm('scroll', e)
                                  : null != h && N(e, u, h, c));
                          }
                        switch (n) {
                          case 'input':
                            es(e), em(e, r, !1);
                            break;
                          case 'textarea':
                            es(e), ek(e);
                            break;
                          case 'option':
                            null != r.value &&
                              e.setAttribute('value', '' + eo(r.value));
                            break;
                          case 'select':
                            (e.multiple = !!r.multiple),
                              null != (u = r.value)
                                ? ey(e, !!r.multiple, u, !1)
                                : null != r.defaultValue &&
                                  ey(e, !!r.multiple, r.defaultValue, !0);
                            break;
                          default:
                            'function' == typeof s.onClick && (e.onclick = rP);
                        }
                        switch (n) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            r = !!r.autoFocus;
                            break e;
                          case 'img':
                            r = !0;
                            break e;
                          default:
                            r = !1;
                        }
                      }
                      r && (t.flags |= 4);
                    }
                    null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
                  }
                  return oA(t), null;
                case 6:
                  if (e && null != t.stateNode) i(e, t, e.memoizedProps, r);
                  else {
                    if ('string' != typeof r && null === t.stateNode)
                      throw Error(d(166));
                    if (((n = la(lr.current)), la(lt.current), aO(t))) {
                      if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[rB] = t),
                        (u = r.nodeValue !== n) && null !== (e = ak))
                      )
                        switch (e.tag) {
                          case 3:
                            r_(r.nodeValue, n, 0 != (1 & e.mode));
                            break;
                          case 5:
                            !0 !== e.memoizedProps.suppressHydrationWarning &&
                              r_(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                      u && (t.flags |= 4);
                    } else
                      ((r = (
                        9 === n.nodeType ? n : n.ownerDocument
                      ).createTextNode(r))[rB] = t),
                        (t.stateNode = r);
                  }
                  return oA(t), null;
                case 13:
                  if (
                    (r1(lu),
                    (r = t.memoizedState),
                    null === e ||
                      (null !== e.memoizedState &&
                        null !== e.memoizedState.dehydrated))
                  ) {
                    if (
                      aE &&
                      null !== aS &&
                      0 != (1 & t.mode) &&
                      0 == (128 & t.flags)
                    )
                      aL(), aT(), (t.flags |= 98560), (u = !1);
                    else if (
                      ((u = aO(t)), null !== r && null !== r.dehydrated)
                    ) {
                      if (null === e) {
                        if (!u) throw Error(d(318));
                        if (
                          !(u =
                            null !== (u = t.memoizedState)
                              ? u.dehydrated
                              : null)
                        )
                          throw Error(d(317));
                        u[rB] = t;
                      } else
                        aT(),
                          0 == (128 & t.flags) && (t.memoizedState = null),
                          (t.flags |= 4);
                      oA(t), (u = !1);
                    } else null !== aC && (i$(aC), (aC = null)), (u = !0);
                    if (!u) return 65536 & t.flags ? t : null;
                  }
                  if (0 != (128 & t.flags)) return (t.lanes = n), t;
                  return (
                    (r = null !== r) !=
                      (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) &&
                        (null === e || 0 != (1 & lu.current)
                          ? 0 === ip && (ip = 3)
                          : iq())),
                    null !== t.updateQueue && (t.flags |= 4),
                    oA(t),
                    null
                  );
                case 4:
                  return (
                    lo(),
                    l(e, t),
                    null === e && ry(t.stateNode.containerInfo),
                    oA(t),
                    null
                  );
                case 10:
                  return aQ(t.type._context), oA(t), null;
                case 19:
                  if ((r1(lu), null === (u = t.memoizedState)))
                    return oA(t), null;
                  if (
                    ((r = 0 != (128 & t.flags)), null === (c = u.rendering))
                  ) {
                    if (r) oU(u, !1);
                    else {
                      if (0 !== ip || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                          if (null !== (c = lc(e))) {
                            for (
                              t.flags |= 128,
                                oU(u, !1),
                                null !== (r = c.updateQueue) &&
                                  ((t.updateQueue = r), (t.flags |= 4)),
                                t.subtreeFlags = 0,
                                r = n,
                                n = t.child;
                              null !== n;

                            )
                              (u = n),
                                (e = r),
                                (u.flags &= 0xe00002),
                                null === (c = u.alternate)
                                  ? ((u.childLanes = 0),
                                    (u.lanes = e),
                                    (u.child = null),
                                    (u.subtreeFlags = 0),
                                    (u.memoizedProps = null),
                                    (u.memoizedState = null),
                                    (u.updateQueue = null),
                                    (u.dependencies = null),
                                    (u.stateNode = null))
                                  : ((u.childLanes = c.childLanes),
                                    (u.lanes = c.lanes),
                                    (u.child = c.child),
                                    (u.subtreeFlags = 0),
                                    (u.deletions = null),
                                    (u.memoizedProps = c.memoizedProps),
                                    (u.memoizedState = c.memoizedState),
                                    (u.updateQueue = c.updateQueue),
                                    (u.type = c.type),
                                    (e = c.dependencies),
                                    (u.dependencies =
                                      null === e
                                        ? null
                                        : {
                                            lanes: e.lanes,
                                            firstContext: e.firstContext,
                                          })),
                                (n = n.sibling);
                            return r2(lu, (1 & lu.current) | 2), t.child;
                          }
                          e = e.sibling;
                        }
                      null !== u.tail &&
                        tn() > iw &&
                        ((t.flags |= 128),
                        (r = !0),
                        oU(u, !1),
                        (t.lanes = 4194304));
                    }
                  } else {
                    if (!r) {
                      if (null !== (e = lc(c))) {
                        if (
                          ((t.flags |= 128),
                          (r = !0),
                          null !== (n = e.updateQueue) &&
                            ((t.updateQueue = n), (t.flags |= 4)),
                          oU(u, !0),
                          null === u.tail &&
                            'hidden' === u.tailMode &&
                            !c.alternate &&
                            !aE)
                        )
                          return oA(t), null;
                      } else
                        2 * tn() - u.renderingStartTime > iw &&
                          0x40000000 !== n &&
                          ((t.flags |= 128),
                          (r = !0),
                          oU(u, !1),
                          (t.lanes = 4194304));
                    }
                    u.isBackwards
                      ? ((c.sibling = t.child), (t.child = c))
                      : (null !== (n = u.last)
                          ? (n.sibling = c)
                          : (t.child = c),
                        (u.last = c));
                  }
                  if (null !== u.tail)
                    return (
                      (t = u.tail),
                      (u.rendering = t),
                      (u.tail = t.sibling),
                      (u.renderingStartTime = tn()),
                      (t.sibling = null),
                      (n = lu.current),
                      r2(lu, r ? (1 & n) | 2 : 1 & n),
                      t
                    );
                  return oA(t), null;
                case 22:
                case 23:
                  return (
                    iV(),
                    (r = null !== t.memoizedState),
                    null !== e &&
                      (null !== e.memoizedState) !== r &&
                      (t.flags |= 8192),
                    r && 0 != (1 & t.mode)
                      ? 0 != (0x40000000 & ic) &&
                        (oA(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                      : oA(t),
                    null
                  );
                case 24:
                case 25:
                  return null;
              }
              throw Error(d(156, t.tag));
            })(n, t, ic))
          ) {
            is = n;
            return;
          }
        } else {
          if (
            null !==
            (n = (function (e, t) {
              switch ((aw(t), t.tag)) {
                case 1:
                  return (
                    r9(t.type) && r7(),
                    65536 & (e = t.flags)
                      ? ((t.flags = (-65537 & e) | 128), t)
                      : null
                  );
                case 3:
                  return (
                    lo(),
                    r1(r4),
                    r1(r6),
                    lf(),
                    0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                      ? ((t.flags = (-65537 & e) | 128), t)
                      : null
                  );
                case 5:
                  return ls(t), null;
                case 13:
                  if (
                    (r1(lu),
                    null !== (e = t.memoizedState) && null !== e.dehydrated)
                  ) {
                    if (null === t.alternate) throw Error(d(340));
                    aT();
                  }
                  return 65536 & (e = t.flags)
                    ? ((t.flags = (-65537 & e) | 128), t)
                    : null;
                case 19:
                  return r1(lu), null;
                case 4:
                  return lo(), null;
                case 10:
                  return aQ(t.type._context), null;
                case 22:
                case 23:
                  return iV(), null;
                default:
                  return null;
              }
            })(n, t))
          ) {
            (n.flags &= 32767), (is = n);
            return;
          }
          if (null !== e)
            (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
          else {
            (ip = 6), (is = null);
            return;
          }
        }
        if (null !== (t = t.sibling)) {
          is = t;
          return;
        }
        is = t = e;
      } while (null !== t);
      0 === ip && (ip = 5);
    }
    function iJ(e, t, n) {
      var r = tS,
        a = il.transition;
      try {
        (il.transition = null),
          (tS = 1),
          (function (e, t, n, r) {
            do iZ();
            while (null !== ij);
            if (0 != (6 & io)) throw Error(d(327));
            n = e.finishedWork;
            var a = e.finishedLanes;
            if (null !== n) {
              if (
                ((e.finishedWork = null),
                (e.finishedLanes = 0),
                n === e.current)
              )
                throw Error(d(177));
              (e.callbackNode = null), (e.callbackPriority = 0);
              var l = n.lanes | n.childLanes;
              if (
                ((function (e, t) {
                  var n = e.pendingLanes & ~t;
                  (e.pendingLanes = t),
                    (e.suspendedLanes = 0),
                    (e.pingedLanes = 0),
                    (e.expiredLanes &= t),
                    (e.mutableReadLanes &= t),
                    (e.entangledLanes &= t),
                    (t = e.entanglements);
                  var r = e.eventTimes;
                  for (e = e.expirationTimes; 0 < n; ) {
                    var a = 31 - td(n),
                      l = 1 << a;
                    (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                  }
                })(e, l),
                e === ii && ((is = ii = null), (iu = 0)),
                (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                  iN ||
                  ((iN = !0),
                  (o = to),
                  (i = function () {
                    return iZ(), null;
                  }),
                  e9(o, i)),
                (l = 0 != (15990 & n.flags)),
                0 != (15990 & n.subtreeFlags) || l)
              ) {
                (l = il.transition), (il.transition = null);
                var o,
                  i,
                  s,
                  u,
                  c,
                  f = tS;
                tS = 1;
                var p = io;
                (io |= 4),
                  (ia.current = null),
                  (function (e, t) {
                    if (((rR = tq), n0((e = nZ())))) {
                      if ('selectionStart' in e)
                        var n = {
                          start: e.selectionStart,
                          end: e.selectionEnd,
                        };
                      else
                        e: {
                          var r =
                            (n =
                              ((n = e.ownerDocument) && n.defaultView) ||
                              window).getSelection && n.getSelection();
                          if (r && 0 !== r.rangeCount) {
                            n = r.anchorNode;
                            var a,
                              l = r.anchorOffset,
                              o = r.focusNode;
                            r = r.focusOffset;
                            try {
                              n.nodeType, o.nodeType;
                            } catch (e) {
                              n = null;
                              break e;
                            }
                            var i = 0,
                              s = -1,
                              u = -1,
                              c = 0,
                              f = 0,
                              p = e,
                              h = null;
                            t: for (;;) {
                              for (
                                ;
                                p !== n ||
                                  (0 !== l && 3 !== p.nodeType) ||
                                  (s = i + l),
                                  p !== o ||
                                    (0 !== r && 3 !== p.nodeType) ||
                                    (u = i + r),
                                  3 === p.nodeType && (i += p.nodeValue.length),
                                  null !== (a = p.firstChild);

                              )
                                (h = p), (p = a);
                              for (;;) {
                                if (p === e) break t;
                                if (
                                  (h === n && ++c === l && (s = i),
                                  h === o && ++f === r && (u = i),
                                  null !== (a = p.nextSibling))
                                )
                                  break;
                                h = (p = h).parentNode;
                              }
                              p = a;
                            }
                            n =
                              -1 === s || -1 === u
                                ? null
                                : { start: s, end: u };
                          } else n = null;
                        }
                      n = n || { start: 0, end: 0 };
                    } else n = null;
                    for (
                      rO = { focusedElem: e, selectionRange: n },
                        tq = !1,
                        oH = t;
                      null !== oH;

                    )
                      if (
                        ((e = (t = oH).child),
                        0 != (1028 & t.subtreeFlags) && null !== e)
                      )
                        (e.return = t), (oH = e);
                      else
                        for (; null !== oH; ) {
                          t = oH;
                          try {
                            var m = t.alternate;
                            if (0 != (1024 & t.flags))
                              switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                  break;
                                case 1:
                                  if (null !== m) {
                                    var g = m.memoizedProps,
                                      v = m.memoizedState,
                                      y = t.stateNode,
                                      b = y.getSnapshotBeforeUpdate(
                                        t.elementType === t.type
                                          ? g
                                          : ot(t.type, g),
                                        v
                                      );
                                    y.__reactInternalSnapshotBeforeUpdate = b;
                                  }
                                  break;
                                case 3:
                                  var x = t.stateNode.containerInfo;
                                  1 === x.nodeType
                                    ? (x.textContent = '')
                                    : 9 === x.nodeType &&
                                      x.documentElement &&
                                      x.removeChild(x.documentElement);
                                  break;
                                default:
                                  throw Error(d(163));
                              }
                          } catch (e) {
                            i1(t, t.return, e);
                          }
                          if (null !== (e = t.sibling)) {
                            (e.return = t.return), (oH = e);
                            break;
                          }
                          oH = t.return;
                        }
                    (m = oq), (oq = !1);
                  })(e, n),
                  o5(n, e),
                  (function (e) {
                    var t = nZ(),
                      n = e.focusedElem,
                      r = e.selectionRange;
                    if (
                      t !== n &&
                      n &&
                      n.ownerDocument &&
                      (function e(t, n) {
                        return (
                          !!t &&
                          !!n &&
                          (t === n ||
                            ((!t || 3 !== t.nodeType) &&
                              (n && 3 === n.nodeType
                                ? e(t, n.parentNode)
                                : 'contains' in t
                                ? t.contains(n)
                                : !!t.compareDocumentPosition &&
                                  !!(16 & t.compareDocumentPosition(n)))))
                        );
                      })(n.ownerDocument.documentElement, n)
                    ) {
                      if (null !== r && n0(n)) {
                        if (
                          ((t = r.start),
                          void 0 === (e = r.end) && (e = t),
                          'selectionStart' in n)
                        )
                          (n.selectionStart = t),
                            (n.selectionEnd = Math.min(e, n.value.length));
                        else if (
                          (e =
                            ((t = n.ownerDocument || document) &&
                              t.defaultView) ||
                            window).getSelection
                        ) {
                          e = e.getSelection();
                          var a = n.textContent.length,
                            l = Math.min(r.start, a);
                          (r = void 0 === r.end ? l : Math.min(r.end, a)),
                            !e.extend && l > r && ((a = r), (r = l), (l = a)),
                            (a = nJ(n, l));
                          var o = nJ(n, r);
                          a &&
                            o &&
                            (1 !== e.rangeCount ||
                              e.anchorNode !== a.node ||
                              e.anchorOffset !== a.offset ||
                              e.focusNode !== o.node ||
                              e.focusOffset !== o.offset) &&
                            ((t = t.createRange()).setStart(a.node, a.offset),
                            e.removeAllRanges(),
                            l > r
                              ? (e.addRange(t), e.extend(o.node, o.offset))
                              : (t.setEnd(o.node, o.offset), e.addRange(t)));
                        }
                      }
                      for (t = [], e = n; (e = e.parentNode); )
                        1 === e.nodeType &&
                          t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop,
                          });
                      for (
                        'function' == typeof n.focus && n.focus(), n = 0;
                        n < t.length;
                        n++
                      )
                        ((e = t[n]).element.scrollLeft = e.left),
                          (e.element.scrollTop = e.top);
                    }
                  })(rO),
                  (tq = !!rR),
                  (rO = rR = null),
                  (e.current = n),
                  (s = n),
                  (u = e),
                  (c = a),
                  (oH = s),
                  (function e(t, n, r) {
                    for (var a = 0 != (1 & t.mode); null !== oH; ) {
                      var l = oH,
                        o = l.child;
                      if (22 === l.tag && a) {
                        var i = null !== l.memoizedState || oB;
                        if (!i) {
                          var s = l.alternate,
                            u = (null !== s && null !== s.memoizedState) || oW;
                          s = oB;
                          var c = oW;
                          if (((oB = i), (oW = u) && !c))
                            for (oH = l; null !== oH; )
                              (u = (i = oH).child),
                                22 === i.tag && null !== i.memoizedState
                                  ? ie(l)
                                  : null !== u
                                  ? ((u.return = i), (oH = u))
                                  : ie(l);
                          for (; null !== o; )
                            (oH = o), e(o, n, r), (o = o.sibling);
                          (oH = l), (oB = s), (oW = c);
                        }
                        o9(t, n, r);
                      } else
                        0 != (8772 & l.subtreeFlags) && null !== o
                          ? ((o.return = l), (oH = o))
                          : o9(t, n, r);
                    }
                  })(s, u, c),
                  tt(),
                  (io = p),
                  (tS = f),
                  (il.transition = l);
              } else e.current = n;
              if (
                (iN && ((iN = !1), (ij = e), (i_ = a)),
                0 === (l = e.pendingLanes) && (iC = null),
                (function (e) {
                  if (tc && 'function' == typeof tc.onCommitFiberRoot)
                    try {
                      tc.onCommitFiberRoot(
                        tu,
                        e,
                        void 0,
                        128 == (128 & e.current.flags)
                      );
                    } catch (e) {}
                })(n.stateNode, r),
                iF(e, tn()),
                null !== t)
              )
                for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                  r((a = t[n]).value, {
                    componentStack: a.stack,
                    digest: a.digest,
                  });
              if (iS) throw ((iS = !1), (e = iE), (iE = null), e);
              0 != (1 & i_) && 0 !== e.tag && iZ(),
                0 != (1 & (l = e.pendingLanes))
                  ? e === iR
                    ? iP++
                    : ((iP = 0), (iR = e))
                  : (iP = 0),
                as();
            }
          })(e, t, n, r);
      } finally {
        (il.transition = a), (tS = r);
      }
      return null;
    }
    function iZ() {
      if (null !== ij) {
        var e = tE(i_),
          t = il.transition,
          n = tS;
        try {
          if (((il.transition = null), (tS = 16 > e ? 16 : e), null === ij))
            var r = !1;
          else {
            if (((e = ij), (ij = null), (i_ = 0), 0 != (6 & io)))
              throw Error(d(331));
            var a = io;
            for (io |= 4, oH = e.current; null !== oH; ) {
              var l = oH,
                o = l.child;
              if (0 != (16 & oH.flags)) {
                var i = l.deletions;
                if (null !== i) {
                  for (var s = 0; s < i.length; s++) {
                    var u = i[s];
                    for (oH = u; null !== oH; ) {
                      var c = oH;
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 15:
                          oG(8, c, l);
                      }
                      var f = c.child;
                      if (null !== f) (f.return = c), (oH = f);
                      else
                        for (; null !== oH; ) {
                          var p = (c = oH).sibling,
                            h = c.return;
                          if (
                            ((function e(t) {
                              var n = t.alternate;
                              null !== n && ((t.alternate = null), e(n)),
                                (t.child = null),
                                (t.deletions = null),
                                (t.sibling = null),
                                5 === t.tag &&
                                  null !== (n = t.stateNode) &&
                                  (delete n[rB],
                                  delete n[rW],
                                  delete n[rH],
                                  delete n[rK],
                                  delete n[rQ]),
                                (t.stateNode = null),
                                (t.return = null),
                                (t.dependencies = null),
                                (t.memoizedProps = null),
                                (t.memoizedState = null),
                                (t.pendingProps = null),
                                (t.stateNode = null),
                                (t.updateQueue = null);
                            })(c),
                            c === u)
                          ) {
                            oH = null;
                            break;
                          }
                          if (null !== p) {
                            (p.return = h), (oH = p);
                            break;
                          }
                          oH = h;
                        }
                    }
                  }
                  var m = l.alternate;
                  if (null !== m) {
                    var g = m.child;
                    if (null !== g) {
                      m.child = null;
                      do {
                        var v = g.sibling;
                        (g.sibling = null), (g = v);
                      } while (null !== g);
                    }
                  }
                  oH = l;
                }
              }
              if (0 != (2064 & l.subtreeFlags) && null !== o)
                (o.return = l), (oH = o);
              else
                for (; null !== oH; ) {
                  if (((l = oH), 0 != (2048 & l.flags)))
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        oG(9, l, l.return);
                    }
                  var y = l.sibling;
                  if (null !== y) {
                    (y.return = l.return), (oH = y);
                    break;
                  }
                  oH = l.return;
                }
            }
            var b = e.current;
            for (oH = b; null !== oH; ) {
              var x = (o = oH).child;
              if (0 != (2064 & o.subtreeFlags) && null !== x)
                (x.return = o), (oH = x);
              else
                for (o = b; null !== oH; ) {
                  if (((i = oH), 0 != (2048 & i.flags)))
                    try {
                      switch (i.tag) {
                        case 0:
                        case 11:
                        case 15:
                          oY(9, i);
                      }
                    } catch (e) {
                      i1(i, i.return, e);
                    }
                  if (i === o) {
                    oH = null;
                    break;
                  }
                  var w = i.sibling;
                  if (null !== w) {
                    (w.return = i.return), (oH = w);
                    break;
                  }
                  oH = i.return;
                }
            }
            if (
              ((io = a),
              as(),
              tc && 'function' == typeof tc.onPostCommitFiberRoot)
            )
              try {
                tc.onPostCommitFiberRoot(tu, e);
              } catch (e) {}
            r = !0;
          }
          return r;
        } finally {
          (tS = n), (il.transition = t);
        }
      }
      return !1;
    }
    function i0(e, t, n) {
      (t = of(e, (t = os(n, t)), 1)),
        (e = a4(e, t, 1)),
        (t = iT()),
        null !== e && (tw(e, 1, t), iF(e, t));
    }
    function i1(e, t, n) {
      if (3 === e.tag) i0(e, e, n);
      else
        for (; null !== t; ) {
          if (3 === t.tag) {
            i0(t, e, n);
            break;
          }
          if (1 === t.tag) {
            var r = t.stateNode;
            if (
              'function' == typeof t.type.getDerivedStateFromError ||
              ('function' == typeof r.componentDidCatch &&
                (null === iC || !iC.has(r)))
            ) {
              (e = op(t, (e = os(n, e)), 1)),
                (t = a4(t, e, 1)),
                (e = iT()),
                null !== t && (tw(t, 1, e), iF(t, e));
              break;
            }
          }
          t = t.return;
        }
    }
    function i2(e, t, n) {
      var r = e.pingCache;
      null !== r && r.delete(t),
        (t = iT()),
        (e.pingedLanes |= e.suspendedLanes & n),
        ii === e &&
          (iu & n) === n &&
          (4 === ip || (3 === ip && (0x7c00000 & iu) === iu && 500 > tn() - ix)
            ? iH(e, 0)
            : (iv |= n)),
        iF(e, t);
    }
    function i3(e, t) {
      0 === t &&
        (0 == (1 & e.mode)
          ? (t = 1)
          : ((t = tm), 0 == (0x7c00000 & (tm <<= 1)) && (tm = 4194304)));
      var n = iT();
      null !== (e = a0(e, t)) && (tw(e, t, n), iF(e, n));
    }
    function i6(e) {
      var t = e.memoizedState,
        n = 0;
      null !== t && (n = t.retryLane), i3(e, n);
    }
    function i4(e, t) {
      var n = 0;
      switch (e.tag) {
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          null !== a && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        default:
          throw Error(d(314));
      }
      null !== r && r.delete(t), i3(e, n);
    }
    function i5(e, t, n, r) {
      (this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function i8(e, t, n, r) {
      return new i5(e, t, n, r);
    }
    function i9(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function i7(e, t) {
      var n = e.alternate;
      return (
        null === n
          ? (((n = i8(e.tag, t, e.key, e.mode)).elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = 0xe00000 & e.flags),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function se(e, t, n, r, a, l) {
      var o = 2;
      if (((r = e), 'function' == typeof e)) i9(e) && (o = 1);
      else if ('string' == typeof e) o = 5;
      else
        e: switch (e) {
          case R:
            return st(n.children, a, l, t);
          case O:
            (o = 8), (a |= 8);
            break;
          case L:
            return (
              ((e = i8(12, n, t, 2 | a)).elementType = L), (e.lanes = l), e
            );
          case F:
            return ((e = i8(13, n, t, a)).elementType = F), (e.lanes = l), e;
          case z:
            return ((e = i8(19, n, t, a)).elementType = z), (e.lanes = l), e;
          case U:
            return sn(n, a, l, t);
          default:
            if ('object' == typeof e && null !== e)
              switch (e.$$typeof) {
                case T:
                  o = 10;
                  break e;
                case M:
                  o = 9;
                  break e;
                case I:
                  o = 11;
                  break e;
                case D:
                  o = 14;
                  break e;
                case $:
                  (o = 16), (r = null);
                  break e;
              }
            throw Error(d(130, null == e ? e : typeof e, ''));
        }
      return (
        ((t = i8(o, n, t, a)).elementType = e), (t.type = r), (t.lanes = l), t
      );
    }
    function st(e, t, n, r) {
      return ((e = i8(7, e, r, t)).lanes = n), e;
    }
    function sn(e, t, n, r) {
      return (
        ((e = i8(22, e, r, t)).elementType = U),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
      );
    }
    function sr(e, t, n) {
      return ((e = i8(6, e, null, t)).lanes = n), e;
    }
    function sa(e, t, n) {
      return (
        ((t = i8(4, null !== e.children ? e.children : [], e.key, t)).lanes =
          n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function sl(e, t, n, r, a) {
      (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = tx(0)),
        (this.expirationTimes = tx(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = tx(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = a),
        (this.mutableSourceEagerHydrationData = null);
    }
    function so(e, t, n, r, a, l, o, i, s) {
      return (
        (e = new sl(e, t, n, i, s)),
        1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
        (l = i8(3, null, null, t)),
        (e.current = l),
        (l.stateNode = e),
        (l.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        a2(l),
        e
      );
    }
    function si(e) {
      if (!e) return r3;
      e = e._reactInternals;
      e: {
        if (e6(e) !== e || 1 !== e.tag) throw Error(d(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if (r9(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          t = t.return;
        } while (null !== t);
        throw Error(d(171));
      }
      if (1 === e.tag) {
        var n = e.type;
        if (r9(n)) return at(e, n, t);
      }
      return t;
    }
    function ss(e, t, n, r, a, l, o, i, s) {
      return (
        ((e = so(n, r, !0, e, a, l, o, i, s)).context = si(null)),
        (n = e.current),
        ((l = a6((r = iT()), (a = iM(n)))).callback = null != t ? t : null),
        a4(n, l, a),
        (e.current.lanes = a),
        tw(e, a, r),
        iF(e, r),
        e
      );
    }
    function su(e, t, n, r) {
      var a = t.current,
        l = iT(),
        o = iM(a);
      return (
        (n = si(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = a6(l, o)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = a4(a, t, o)) && (iI(e, a, o, l), a5(e, a, o)),
        o
      );
    }
    function sc(e) {
      return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
    }
    function sd(e, t) {
      if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
      }
    }
    function sf(e, t) {
      sd(e, t), (e = e.alternate) && sd(e, t);
    }
    s = function (e, t, n) {
      if (null !== e) {
        if (e.memoizedProps !== t.pendingProps || r4.current) oy = !0;
        else {
          if (0 == (e.lanes & n) && 0 == (128 & t.flags))
            return (
              (oy = !1),
              (function (e, t, n) {
                switch (t.tag) {
                  case 3:
                    o_(t), aT();
                    break;
                  case 5:
                    li(t);
                    break;
                  case 1:
                    r9(t.type) && an(t);
                    break;
                  case 4:
                    ll(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    var r = t.type._context,
                      a = t.memoizedProps.value;
                    r2(aB, r._currentValue), (r._currentValue = a);
                    break;
                  case 13:
                    if (null !== (r = t.memoizedState)) {
                      if (null !== r.dehydrated)
                        return r2(lu, 1 & lu.current), (t.flags |= 128), null;
                      if (0 != (n & t.child.childLanes)) return oL(e, t, n);
                      return (
                        r2(lu, 1 & lu.current),
                        null !== (e = o$(e, t, n)) ? e.sibling : null
                      );
                    }
                    r2(lu, 1 & lu.current);
                    break;
                  case 19:
                    if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                      if (r) return oz(e, t, n);
                      t.flags |= 128;
                    }
                    if (
                      (null !== (a = t.memoizedState) &&
                        ((a.rendering = null),
                        (a.tail = null),
                        (a.lastEffect = null)),
                      r2(lu, lu.current),
                      !r)
                    )
                      return null;
                    break;
                  case 22:
                  case 23:
                    return (t.lanes = 0), oS(e, t, n);
                }
                return o$(e, t, n);
              })(e, t, n)
            );
          oy = 0 != (131072 & e.flags);
        }
      } else (oy = !1), aE && 0 != (1048576 & t.flags) && ab(t, af, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var r = t.type;
          oD(e, t), (e = t.pendingProps);
          var a = r8(t, r6.current);
          aG(t, n), (a = lC(null, t, r, e, a, n));
          var l = lN();
          return (
            (t.flags |= 1),
            'object' == typeof a &&
            null !== a &&
            'function' == typeof a.render &&
            void 0 === a.$$typeof
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                r9(r) ? ((l = !0), an(t)) : (l = !1),
                (t.memoizedState =
                  null !== a.state && void 0 !== a.state ? a.state : null),
                a2(t),
                (a.updater = or),
                (t.stateNode = a),
                (a._reactInternals = t),
                oi(t, r, e, n),
                (t = oj(null, t, r, !0, l, n)))
              : ((t.tag = 0),
                aE && l && ax(t),
                ob(null, t, a, n),
                (t = t.child)),
            t
          );
        case 16:
          r = t.elementType;
          e: {
            switch (
              (oD(e, t),
              (e = t.pendingProps),
              (r = (a = r._init)(r._payload)),
              (t.type = r),
              (a = t.tag =
                (function (e) {
                  if ('function' == typeof e) return i9(e) ? 1 : 0;
                  if (null != e) {
                    if ((e = e.$$typeof) === I) return 11;
                    if (e === D) return 14;
                  }
                  return 2;
                })(r)),
              (e = ot(r, e)),
              a)
            ) {
              case 0:
                t = oC(null, t, r, e, n);
                break e;
              case 1:
                t = oN(null, t, r, e, n);
                break e;
              case 11:
                t = ox(null, t, r, e, n);
                break e;
              case 14:
                t = ow(null, t, r, ot(r.type, e), n);
                break e;
            }
            throw Error(d(306, r, ''));
          }
          return t;
        case 0:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : ot(r, a)),
            oC(e, t, r, a, n)
          );
        case 1:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : ot(r, a)),
            oN(e, t, r, a, n)
          );
        case 3:
          e: {
            if ((o_(t), null === e)) throw Error(d(387));
            (r = t.pendingProps),
              (a = (l = t.memoizedState).element),
              a3(e, t),
              a9(t, r, null, n);
            var o = t.memoizedState;
            if (((r = o.element), l.isDehydrated)) {
              if (
                ((l = {
                  element: r,
                  isDehydrated: !1,
                  cache: o.cache,
                  pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                  transitions: o.transitions,
                }),
                (t.updateQueue.baseState = l),
                (t.memoizedState = l),
                256 & t.flags)
              ) {
                (a = os(Error(d(423)), t)), (t = oP(e, t, r, n, a));
                break e;
              }
              if (r !== a) {
                (a = os(Error(d(424)), t)), (t = oP(e, t, r, n, a));
                break e;
              }
              for (
                aS = r$(t.stateNode.containerInfo.firstChild),
                  ak = t,
                  aE = !0,
                  aC = null,
                  n = aA(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
            } else {
              if ((aT(), r === a)) {
                t = o$(e, t, n);
                break e;
              }
              ob(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            li(t),
            null === e && aP(t),
            (r = t.type),
            (a = t.pendingProps),
            (l = null !== e ? e.memoizedProps : null),
            (o = a.children),
            rL(r, a) ? (o = null) : null !== l && rL(r, l) && (t.flags |= 32),
            oE(e, t),
            ob(e, t, o, n),
            t.child
          );
        case 6:
          return null === e && aP(t), null;
        case 13:
          return oL(e, t, n);
        case 4:
          return (
            ll(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            null === e ? (t.child = aU(t, null, r, n)) : ob(e, t, r, n),
            t.child
          );
        case 11:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : ot(r, a)),
            ox(e, t, r, a, n)
          );
        case 7:
          return ob(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
          return ob(e, t, t.pendingProps.children, n), t.child;
        case 10:
          e: {
            if (
              ((r = t.type._context),
              (a = t.pendingProps),
              (l = t.memoizedProps),
              (o = a.value),
              r2(aB, r._currentValue),
              (r._currentValue = o),
              null !== l)
            ) {
              if (nG(l.value, o)) {
                if (l.children === a.children && !r4.current) {
                  t = o$(e, t, n);
                  break e;
                }
              } else
                for (null !== (l = t.child) && (l.return = t); null !== l; ) {
                  var i = l.dependencies;
                  if (null !== i) {
                    o = l.child;
                    for (var s = i.firstContext; null !== s; ) {
                      if (s.context === r) {
                        if (1 === l.tag) {
                          (s = a6(-1, n & -n)).tag = 2;
                          var u = l.updateQueue;
                          if (null !== u) {
                            var c = (u = u.shared).pending;
                            null === c
                              ? (s.next = s)
                              : ((s.next = c.next), (c.next = s)),
                              (u.pending = s);
                          }
                        }
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          aq(l.return, n, t),
                          (i.lanes |= n);
                        break;
                      }
                      s = s.next;
                    }
                  } else if (10 === l.tag)
                    o = l.type === t.type ? null : l.child;
                  else if (18 === l.tag) {
                    if (null === (o = l.return)) throw Error(d(341));
                    (o.lanes |= n),
                      null !== (i = o.alternate) && (i.lanes |= n),
                      aq(o, n, t),
                      (o = l.sibling);
                  } else o = l.child;
                  if (null !== o) o.return = l;
                  else
                    for (o = l; null !== o; ) {
                      if (o === t) {
                        o = null;
                        break;
                      }
                      if (null !== (l = o.sibling)) {
                        (l.return = o.return), (o = l);
                        break;
                      }
                      o = o.return;
                    }
                  l = o;
                }
            }
            ob(e, t, a.children, n), (t = t.child);
          }
          return t;
        case 9:
          return (
            (a = t.type),
            (r = t.pendingProps.children),
            aG(t, n),
            (r = r((a = aY(a)))),
            (t.flags |= 1),
            ob(e, t, r, n),
            t.child
          );
        case 14:
          return (
            (a = ot((r = t.type), t.pendingProps)),
            (a = ot(r.type, a)),
            ow(e, t, r, a, n)
          );
        case 15:
          return ok(e, t, t.type, t.pendingProps, n);
        case 17:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : ot(r, a)),
            oD(e, t),
            (t.tag = 1),
            r9(r) ? ((e = !0), an(t)) : (e = !1),
            aG(t, n),
            ol(t, r, a),
            oi(t, r, a, n),
            oj(null, t, r, !0, e, n)
          );
        case 19:
          return oz(e, t, n);
        case 22:
          return oS(e, t, n);
      }
      throw Error(d(156, t.tag));
    };
    var sp =
      'function' == typeof reportError
        ? reportError
        : function (e) {
            console.error(e);
          };
    function sh(e) {
      this._internalRoot = e;
    }
    function sm(e) {
      this._internalRoot = e;
    }
    function sg(e) {
      return !(
        !e ||
        (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
      );
    }
    function sv(e) {
      return !(
        !e ||
        (1 !== e.nodeType &&
          9 !== e.nodeType &&
          11 !== e.nodeType &&
          (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
      );
    }
    function sy() {}
    function sb(e, t, n, r, a) {
      var l = n._reactRootContainer;
      if (l) {
        var o = l;
        if ('function' == typeof a) {
          var i = a;
          a = function () {
            var e = sc(o);
            i.call(e);
          };
        }
        su(t, o, e, a);
      } else
        o = (function (e, t, n, r, a) {
          if (a) {
            if ('function' == typeof r) {
              var l = r;
              r = function () {
                var e = sc(o);
                l.call(e);
              };
            }
            var o = ss(t, r, e, 0, null, !1, !1, '', sy);
            return (
              (e._reactRootContainer = o),
              (e[rV] = o.current),
              ry(8 === e.nodeType ? e.parentNode : e),
              iW(),
              o
            );
          }
          for (; (a = e.lastChild); ) e.removeChild(a);
          if ('function' == typeof r) {
            var i = r;
            r = function () {
              var e = sc(s);
              i.call(e);
            };
          }
          var s = so(e, 0, !1, null, null, !1, !1, '', sy);
          return (
            (e._reactRootContainer = s),
            (e[rV] = s.current),
            ry(8 === e.nodeType ? e.parentNode : e),
            iW(function () {
              su(t, s, n, r);
            }),
            s
          );
        })(n, t, e, a, r);
      return sc(o);
    }
    (sm.prototype.render = sh.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(d(409));
        su(e, t, null, null);
      }),
      (sm.prototype.unmount = sh.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            iW(function () {
              su(null, e, null, null);
            }),
              (t[rV] = null);
          }
        }),
      (sm.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
          var t = t_();
          e = { blockedOn: null, target: e, priority: t };
          for (var n = 0; n < tz.length && 0 !== t && t < tz[n].priority; n++);
          tz.splice(n, 0, e), 0 === n && tA(e);
        }
      }),
      (tC = function (e) {
        switch (e.tag) {
          case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
              var n = tg(t.pendingLanes);
              0 !== n &&
                (tk(t, 1 | n),
                iF(t, tn()),
                0 == (6 & io) && ((iw = tn() + 500), as()));
            }
            break;
          case 13:
            iW(function () {
              var t = a0(e, 1);
              null !== t && iI(t, e, 1, iT());
            }),
              sf(e, 1);
        }
      }),
      (tN = function (e) {
        if (13 === e.tag) {
          var t = a0(e, 0x8000000);
          null !== t && iI(t, e, 0x8000000, iT()), sf(e, 0x8000000);
        }
      }),
      (tj = function (e) {
        if (13 === e.tag) {
          var t = iM(e),
            n = a0(e, t);
          null !== n && iI(n, e, t, iT()), sf(e, t);
        }
      }),
      (t_ = function () {
        return tS;
      }),
      (tP = function (e, t) {
        var n = tS;
        try {
          return (tS = e), t();
        } finally {
          tS = n;
        }
      }),
      (eD = function (e, t, n) {
        switch (t) {
          case 'input':
            if ((eh(e, n), (t = n.name), 'radio' === n.type && null != t)) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = rX(r);
                  if (!a) throw Error(d(90));
                  eu(r), eh(r, a);
                }
              }
            }
            break;
          case 'textarea':
            ew(e, n);
            break;
          case 'select':
            null != (t = n.value) && ey(e, !!n.multiple, t, !1);
        }
      }),
      (eV = iB),
      (eH = iW);
    var sx = {
        findFiberByHostInstance: rq,
        bundleType: 0,
        version: '18.3.1',
        rendererPackageName: 'react-dom',
      },
      sw = {
        bundleType: sx.bundleType,
        version: sx.version,
        rendererPackageName: sx.rendererPackageName,
        rendererConfig: sx.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: j.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return null === (e = e8(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
          sx.findFiberByHostInstance ||
          function () {
            return null;
          },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
      };
    if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var sk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!sk.isDisabled && sk.supportsFiber)
        try {
          (tu = sk.inject(sw)), (tc = sk);
        } catch (e) {}
    }
    (W = { usingClientEntryPoint: !1, Events: [rG, rY, rX, eB, eW, iB] }),
      (V = function (e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!sg(t)) throw Error(d(200));
        return (function (e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: P,
            key: null == r ? null : '' + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        })(e, t, null, n);
      }),
      (H = function (e, t) {
        if (!sg(e)) throw Error(d(299));
        var n = !1,
          r = '',
          a = sp;
        return (
          null != t &&
            (!0 === t.unstable_strictMode && (n = !0),
            void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
            void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
          (t = so(e, 1, !1, null, null, n, !1, r, a)),
          (e[rV] = t.current),
          ry(8 === e.nodeType ? e.parentNode : e),
          new sh(t)
        );
      }),
      (K = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
          if ('function' == typeof e.render) throw Error(d(188));
          throw Error(d(268, (e = Object.keys(e).join(','))));
        }
        return (e = null === (e = e8(t)) ? null : e.stateNode);
      }),
      (Q = function (e) {
        return iW(e);
      }),
      (q = function (e, t, n) {
        if (!sv(t)) throw Error(d(200));
        return sb(null, e, t, !0, n);
      }),
      (G = function (e, t, n) {
        if (!sg(e)) throw Error(d(405));
        var r = (null != n && n.hydratedSources) || null,
          a = !1,
          l = '',
          o = sp;
        if (
          (null != n &&
            (!0 === n.unstable_strictMode && (a = !0),
            void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
            void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
          (t = ss(t, null, e, 1, null != n ? n : null, a, !1, l, o)),
          (e[rV] = t.current),
          ry(e),
          r)
        )
          for (e = 0; e < r.length; e++)
            (a = (a = (n = r[e])._getVersion)(n._source)),
              null == t.mutableSourceEagerHydrationData
                ? (t.mutableSourceEagerHydrationData = [n, a])
                : t.mutableSourceEagerHydrationData.push(n, a);
        return new sm(t);
      }),
      (Y = function (e, t, n) {
        if (!sv(t)) throw Error(d(200));
        return sb(null, e, t, !1, n);
      }),
      (X = function (e) {
        if (!sv(e)) throw Error(d(40));
        return (
          !!e._reactRootContainer &&
          (iW(function () {
            sb(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[rV] = null);
            });
          }),
          !0)
        );
      }),
      (J = iB),
      (Z = function (e, t, n, r) {
        if (!sv(n)) throw Error(d(200));
        if (null == e || void 0 === e._reactInternals) throw Error(d(38));
        return sb(e, t, n, !1, r);
      }),
      (ee = '18.3.1-next-f1338f8080-20240426');
  }),
  k('fO90s', function (e, t) {
    e.exports = w('gcnCG');
  }),
  k('gcnCG', function (e, t) {
    function r(e, t) {
      var n = e.length;
      for (e.push(t); 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < o(a, t)) (e[r] = t), (e[n] = a), (n = r);
        else break;
      }
    }
    function a(e) {
      return 0 === e.length ? null : e[0];
    }
    function l(e) {
      if (0 === e.length) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
          var i = 2 * (r + 1) - 1,
            s = e[i],
            u = i + 1,
            c = e[u];
          if (0 > o(s, n))
            u < a && 0 > o(c, s)
              ? ((e[r] = c), (e[u] = n), (r = u))
              : ((e[r] = s), (e[i] = n), (r = i));
          else if (u < a && 0 > o(c, n)) (e[r] = c), (e[u] = n), (r = u);
          else break;
        }
      }
      return t;
    }
    function o(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return 0 !== n ? n : e.id - t.id;
    }
    if (
      (n(
        e.exports,
        'unstable_now',
        () => i,
        (e) => (i = e)
      ),
      n(
        e.exports,
        'unstable_IdlePriority',
        () => s,
        (e) => (s = e)
      ),
      n(
        e.exports,
        'unstable_ImmediatePriority',
        () => u,
        (e) => (u = e)
      ),
      n(
        e.exports,
        'unstable_LowPriority',
        () => c,
        (e) => (c = e)
      ),
      n(
        e.exports,
        'unstable_NormalPriority',
        () => d,
        (e) => (d = e)
      ),
      n(
        e.exports,
        'unstable_Profiling',
        () => f,
        (e) => (f = e)
      ),
      n(
        e.exports,
        'unstable_UserBlockingPriority',
        () => p,
        (e) => (p = e)
      ),
      n(
        e.exports,
        'unstable_cancelCallback',
        () => h,
        (e) => (h = e)
      ),
      n(
        e.exports,
        'unstable_continueExecution',
        () => m,
        (e) => (m = e)
      ),
      n(
        e.exports,
        'unstable_forceFrameRate',
        () => g,
        (e) => (g = e)
      ),
      n(
        e.exports,
        'unstable_getCurrentPriorityLevel',
        () => v,
        (e) => (v = e)
      ),
      n(
        e.exports,
        'unstable_getFirstCallbackNode',
        () => y,
        (e) => (y = e)
      ),
      n(
        e.exports,
        'unstable_next',
        () => b,
        (e) => (b = e)
      ),
      n(
        e.exports,
        'unstable_pauseExecution',
        () => x,
        (e) => (x = e)
      ),
      n(
        e.exports,
        'unstable_requestPaint',
        () => w,
        (e) => (w = e)
      ),
      n(
        e.exports,
        'unstable_runWithPriority',
        () => k,
        (e) => (k = e)
      ),
      n(
        e.exports,
        'unstable_scheduleCallback',
        () => S,
        (e) => (S = e)
      ),
      n(
        e.exports,
        'unstable_shouldYield',
        () => E,
        (e) => (E = e)
      ),
      n(
        e.exports,
        'unstable_wrapCallback',
        () => C,
        (e) => (C = e)
      ),
      'object' == typeof performance && 'function' == typeof performance.now)
    ) {
      var i,
        s,
        u,
        c,
        d,
        f,
        p,
        h,
        m,
        g,
        v,
        y,
        b,
        x,
        w,
        k,
        S,
        E,
        C,
        N,
        j = performance;
      i = function () {
        return j.now();
      };
    } else {
      var _ = Date,
        P = _.now();
      i = function () {
        return _.now() - P;
      };
    }
    var R = [],
      O = [],
      L = 1,
      T = null,
      M = 3,
      I = !1,
      F = !1,
      z = !1,
      D = 'function' == typeof setTimeout ? setTimeout : null,
      $ = 'function' == typeof clearTimeout ? clearTimeout : null,
      U = 'undefined' != typeof setImmediate ? setImmediate : null;
    function A(e) {
      for (var t = a(O); null !== t; ) {
        if (null === t.callback) l(O);
        else if (t.startTime <= e)
          l(O), (t.sortIndex = t.expirationTime), r(R, t);
        else break;
        t = a(O);
      }
    }
    function B(e) {
      if (((z = !1), A(e), !F)) {
        if (null !== a(R)) (F = !0), Z(W);
        else {
          var t = a(O);
          null !== t && ee(B, t.startTime - e);
        }
      }
    }
    function W(e, t) {
      (F = !1), z && ((z = !1), $(K), (K = -1)), (I = !0);
      var n = M;
      try {
        for (
          A(t), T = a(R);
          null !== T && (!(T.expirationTime > t) || (e && !G()));

        ) {
          var r = T.callback;
          if ('function' == typeof r) {
            (T.callback = null), (M = T.priorityLevel);
            var o = r(T.expirationTime <= t);
            (t = i()),
              'function' == typeof o ? (T.callback = o) : T === a(R) && l(R),
              A(t);
          } else l(R);
          T = a(R);
        }
        if (null !== T) var s = !0;
        else {
          var u = a(O);
          null !== u && ee(B, u.startTime - t), (s = !1);
        }
        return s;
      } finally {
        (T = null), (M = n), (I = !1);
      }
    }
    'undefined' != typeof navigator &&
      void 0 !== navigator.scheduling &&
      void 0 !== navigator.scheduling.isInputPending &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var V = !1,
      H = null,
      K = -1,
      Q = 5,
      q = -1;
    function G() {
      return !(i() - q < Q);
    }
    function Y() {
      if (null !== H) {
        var e = i();
        q = e;
        var t = !0;
        try {
          t = H(!0, e);
        } finally {
          t ? N() : ((V = !1), (H = null));
        }
      } else V = !1;
    }
    if ('function' == typeof U)
      N = function () {
        U(Y);
      };
    else if ('undefined' != typeof MessageChannel) {
      var X = new MessageChannel(),
        J = X.port2;
      (X.port1.onmessage = Y),
        (N = function () {
          J.postMessage(null);
        });
    } else
      N = function () {
        D(Y, 0);
      };
    function Z(e) {
      (H = e), V || ((V = !0), N());
    }
    function ee(e, t) {
      K = D(function () {
        e(i());
      }, t);
    }
    (s = 5),
      (u = 1),
      (c = 4),
      (d = 3),
      (f = null),
      (p = 2),
      (h = function (e) {
        e.callback = null;
      }),
      (m = function () {
        F || I || ((F = !0), Z(W));
      }),
      (g = function (e) {
        0 > e || 125 < e
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
            )
          : (Q = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (v = function () {
        return M;
      }),
      (y = function () {
        return a(R);
      }),
      (b = function (e) {
        switch (M) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = M;
        }
        var n = M;
        M = t;
        try {
          return e();
        } finally {
          M = n;
        }
      }),
      (x = function () {}),
      (w = function () {}),
      (k = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = M;
        M = e;
        try {
          return t();
        } finally {
          M = n;
        }
      }),
      (S = function (e, t, n) {
        var l = i();
        switch (
          ((n =
            'object' == typeof n &&
            null !== n &&
            'number' == typeof (n = n.delay) &&
            0 < n
              ? l + n
              : l),
          e)
        ) {
          case 1:
            var o = -1;
            break;
          case 2:
            o = 250;
            break;
          case 5:
            o = 0x3fffffff;
            break;
          case 4:
            o = 1e4;
            break;
          default:
            o = 5e3;
        }
        return (
          (o = n + o),
          (e = {
            id: L++,
            callback: t,
            priorityLevel: e,
            startTime: n,
            expirationTime: o,
            sortIndex: -1,
          }),
          n > l
            ? ((e.sortIndex = n),
              r(O, e),
              null === a(R) &&
                e === a(O) &&
                (z ? ($(K), (K = -1)) : (z = !0), ee(B, n - l)))
            : ((e.sortIndex = o), r(R, e), F || I || ((F = !0), Z(W))),
          e
        );
      }),
      (E = G),
      (C = function (e) {
        var t = M;
        return function () {
          var n = M;
          M = t;
          try {
            return e.apply(this, arguments);
          } finally {
            M = n;
          }
        };
      });
  }),
  k('hOzOt', function (e, t) {
    var n = w('kZO5c');
    function r() {}
    function a() {}
    (a.resetWarningCache = r),
      (e.exports = function () {
        function e(e, t, r, a, l, o) {
          if (o !== n) {
            var i = Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            );
            throw ((i.name = 'Invariant Violation'), i);
          }
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var l = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: a,
          resetWarningCache: r,
        };
        return (l.PropTypes = l), l;
      });
  }),
  k('kZO5c', function (e, t) {
    e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  });
var S = {};
S = w('1b2ls');
var E = {};
!(function e() {
  if (
    'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
    'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
    } catch (e) {
      console.error(e);
    }
})(),
  (f = (E = w('Xw6Mv')).createRoot),
  E.hydrateRoot;
var C = {};
!(
  /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function () {
    var e = {}.hasOwnProperty;
    function t() {
      for (var r = '', a = 0; a < arguments.length; a++) {
        var l = arguments[a];
        l &&
          (r = n(
            r,
            (function (r) {
              if ('string' == typeof r || 'number' == typeof r) return r;
              if ('object' != typeof r) return '';
              if (Array.isArray(r)) return t.apply(null, r);
              if (
                r.toString !== Object.prototype.toString &&
                !r.toString.toString().includes('[native code]')
              )
                return r.toString();
              var a = '';
              for (var l in r) e.call(r, l) && r[l] && (a = n(a, l));
              return a;
            })(l)
          ));
      }
      return r;
    }
    function n(e, t) {
      return t ? (e ? e + ' ' + t : e + t) : e;
    }
    C
      ? ((t.default = t), (C = t))
      : 'function' == typeof define &&
        'object' == typeof define.amd &&
        define.amd
      ? define('classnames', [], function () {
          return t;
        })
      : (window.classNames = t);
  })()
);
var N = (w('acw62'), w('acw62'));
const j = /*#__PURE__*/ N.createContext({
    prefixes: {},
    breakpoints: ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
    minBreakpoint: 'xs',
  }),
  { Consumer: _, Provider: P } = j;
function R(e, t) {
  let { prefixes: n } = (0, N.useContext)(j);
  return e || n[t] || t;
}
function O() {
  let { breakpoints: e } = (0, N.useContext)(j);
  return e;
}
function L() {
  let { minBreakpoint: e } = (0, N.useContext)(j);
  return e;
}
const T = /*#__PURE__*/ N.forwardRef(
  ({ bsPrefix: e, fluid: t = !1, as: n = 'div', className: a, ...l }, o) => {
    let i = R(e, 'container'),
      s = 'string' == typeof t ? `-${t}` : '-fluid';
    return /*#__PURE__*/ (0, S.jsx)(n, {
      ref: o,
      ...l,
      className: /*@__PURE__*/ r(C)(a, t ? `${i}${s}` : i),
    });
  }
);
T.displayName = 'Container';
/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var N = (w('acw62'), w('acw62'));
/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function M() {
  return (M = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
}
((l = p || (p = {})).Pop = 'POP'), (l.Push = 'PUSH'), (l.Replace = 'REPLACE');
const I = 'popstate';
function F(e, t) {
  if (!1 === e || null == e) throw Error(t);
}
function z(e, t) {
  if (!e) {
    'undefined' != typeof console && console.warn(t);
    try {
      throw Error(t);
    } catch (e) {}
  }
}
function D(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function $(e, t, n, r) {
  return (
    void 0 === n && (n = null),
    M(
      { pathname: 'string' == typeof e ? e : e.pathname, search: '', hash: '' },
      'string' == typeof t ? A(t) : t,
      {
        state: n,
        key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
      }
    )
  );
}
function U(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && '?' !== n && (t += '?' === n.charAt(0) ? n : '?' + n),
    r && '#' !== r && (t += '#' === r.charAt(0) ? r : '#' + r),
    t
  );
}
function A(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
((o = h || (h = {})).data = 'data'),
  (o.deferred = 'deferred'),
  (o.redirect = 'redirect'),
  (o.error = 'error');
const B = /^:[\w-]+$/,
  W = (e) => '*' === e;
function V(e, t) {
  var n, r, a;
  let l, o;
  'string' == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
  let [i, s] =
      ((n = e.path),
      (r = e.caseSensitive),
      (a = e.end),
      void 0 === r && (r = !1),
      void 0 === a && (a = !0),
      z(
        '*' === n || !n.endsWith('*') || n.endsWith('/*'),
        'Route path "' +
          n +
          '" will be treated as if it were "' +
          n.replace(/\*$/, '/*') +
          '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
          n.replace(/\*$/, '/*') +
          '".'
      ),
      (l = []),
      (o =
        '^' +
        n
          .replace(/\/*\*?$/, '')
          .replace(/^\/*/, '/')
          .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
          .replace(
            /\/:([\w-]+)(\?)?/g,
            (e, t, n) => (
              l.push({ paramName: t, isOptional: null != n }),
              n ? '/?([^\\/]+)?' : '/([^\\/]+)'
            )
          )),
      n.endsWith('*')
        ? (l.push({ paramName: '*' }),
          (o += '*' === n || '/*' === n ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
        : a
        ? (o += '\\/*$')
        : '' !== n && '/' !== n && (o += '(?:(?=\\/|$))'),
      [new RegExp(o, r ? void 0 : 'i'), l]),
    u = t.match(i);
  if (!u) return null;
  let c = u[0],
    d = c.replace(/(.)\/+$/, '$1'),
    f = u.slice(1);
  return {
    params: s.reduce((e, t, n) => {
      let { paramName: r, isOptional: a } = t;
      if ('*' === r) {
        let e = f[n] || '';
        d = c.slice(0, c.length - e.length).replace(/(.)\/+$/, '$1');
      }
      let l = f[n];
      return (
        a && !l ? (e[r] = void 0) : (e[r] = (l || '').replace(/%2F/g, '/')), e
      );
    }, {}),
    pathname: c,
    pathnameBase: d,
    pattern: e,
  };
}
function H(e, t) {
  if ('/' === t) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && '/' !== r ? null : e.slice(n) || '/';
}
function K(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t) +
    '` field [' +
    JSON.stringify(r) +
    '].  Please separate it out to the `to.' +
    n +
    '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Q(e, t) {
  let n = e.filter(
    (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
  );
  return t
    ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase))
    : n.map((e) => e.pathnameBase);
}
function q(e, t, n, r) {
  let a, l;
  void 0 === r && (r = !1),
    'string' == typeof e
      ? (a = A(e))
      : (F(
          !(a = M({}, e)).pathname || !a.pathname.includes('?'),
          K('?', 'pathname', 'search', a)
        ),
        F(
          !a.pathname || !a.pathname.includes('#'),
          K('#', 'pathname', 'hash', a)
        ),
        F(!a.search || !a.search.includes('#'), K('#', 'search', 'hash', a)));
  let o = '' === e || '' === a.pathname,
    i = o ? '/' : a.pathname;
  if (null == i) l = n;
  else {
    let e = t.length - 1;
    if (!r && i.startsWith('..')) {
      let t = i.split('/');
      for (; '..' === t[0]; ) t.shift(), (e -= 1);
      a.pathname = t.join('/');
    }
    l = e >= 0 ? t[e] : '/';
  }
  let s = (function (e, t) {
      let n;
      void 0 === t && (t = '/');
      let {
        pathname: r,
        search: a = '',
        hash: l = '',
      } = 'string' == typeof e ? A(e) : e;
      return {
        pathname: r
          ? r.startsWith('/')
            ? r
            : ((n = t.replace(/\/+$/, '').split('/')),
              r.split('/').forEach((e) => {
                '..' === e ? n.length > 1 && n.pop() : '.' !== e && n.push(e);
              }),
              n.length > 1 ? n.join('/') : '/')
          : t,
        search: X(a),
        hash: J(l),
      };
    })(a, l),
    u = i && '/' !== i && i.endsWith('/'),
    c = (o || '.' === i) && n.endsWith('/');
  return !s.pathname.endsWith('/') && (u || c) && (s.pathname += '/'), s;
}
const G = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Y = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  X = (e) => (e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : ''),
  J = (e) => (e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : '');
Symbol('deferred');
/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var N = w('acw62');
function Z() {
  return (Z = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
}
const ee = /*#__PURE__*/ N.createContext(null),
  et = /*#__PURE__*/ N.createContext(null),
  en = /*#__PURE__*/ N.createContext(null),
  er = /*#__PURE__*/ N.createContext(null),
  ea = /*#__PURE__*/ N.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1,
  }),
  el = /*#__PURE__*/ N.createContext(null);
function eo() {
  return null != N.useContext(er);
}
function ei() {
  return eo() || F(!1), N.useContext(er).location;
}
function es(e) {
  N.useContext(en).static || N.useLayoutEffect(e);
}
function eu() {
  let { isDataRoute: e } = N.useContext(ea);
  return e
    ? (function () {
        let e;
        let { router: t } =
            (eh.UseNavigateStable, (e = N.useContext(ee)) || F(!1), e),
          n = eg(em.UseNavigateStable),
          r = N.useRef(!1);
        return (
          es(() => {
            r.current = !0;
          }),
          N.useCallback(
            function (e, a) {
              void 0 === a && (a = {}),
                r.current &&
                  ('number' == typeof e
                    ? t.navigate(e)
                    : t.navigate(e, Z({ fromRouteId: n }, a)));
            },
            [t, n]
          )
        );
      })()
    : (function () {
        eo() || F(!1);
        let e = N.useContext(ee),
          { basename: t, future: n, navigator: r } = N.useContext(en),
          { matches: a } = N.useContext(ea),
          { pathname: l } = ei(),
          o = JSON.stringify(Q(a, n.v7_relativeSplatPath)),
          i = N.useRef(!1);
        return (
          es(() => {
            i.current = !0;
          }),
          N.useCallback(
            function (n, a) {
              if ((void 0 === a && (a = {}), !i.current)) return;
              if ('number' == typeof n) {
                r.go(n);
                return;
              }
              let s = q(n, JSON.parse(o), l, 'path' === a.relative);
              null == e &&
                '/' !== t &&
                (s.pathname = '/' === s.pathname ? t : G([t, s.pathname])),
                (a.replace ? r.replace : r.push)(s, a.state, a);
            },
            [t, r, o, l, e]
          )
        );
      })();
}
function ec(e, t) {
  let { relative: n } = void 0 === t ? {} : t,
    { future: r } = N.useContext(en),
    { matches: a } = N.useContext(ea),
    { pathname: l } = ei(),
    o = JSON.stringify(Q(a, r.v7_relativeSplatPath));
  return N.useMemo(() => q(e, JSON.parse(o), l, 'path' === n), [e, o, l, n]);
}
const ed = /*#__PURE__*/ N.createElement(function () {
  var e;
  let t, n, r, a;
  let l =
      ((n = N.useContext(el)),
      em.UseRouteError,
      (t = N.useContext(et)) || F(!1),
      (r = t),
      (a = eg(em.UseRouteError)),
      void 0 !== n ? n : null == (e = r.errors) ? void 0 : e[a]),
    o =
      null != l &&
      'number' == typeof l.status &&
      'string' == typeof l.statusText &&
      'boolean' == typeof l.internal &&
      'data' in l
        ? l.status + ' ' + l.statusText
        : l instanceof Error
        ? l.message
        : JSON.stringify(l),
    i = l instanceof Error ? l.stack : null;
  return /*#__PURE__*/ N.createElement(
    N.Fragment,
    null,
    /*#__PURE__*/ N.createElement('h2', null, 'Unexpected Application Error!'),
    /*#__PURE__*/ N.createElement('h3', { style: { fontStyle: 'italic' } }, o),
    i
      ? /*#__PURE__*/ N.createElement(
          'pre',
          {
            style: {
              padding: '0.5rem',
              backgroundColor: 'rgba(200,200,200, 0.5)',
            },
          },
          i
        )
      : null,
    null
  );
}, null);
class ef extends N.Component {
  constructor(e) {
    super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location ||
      ('idle' !== t.revalidation && 'idle' === e.revalidation)
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: void 0 !== e.error ? e.error : t.error,
          location: t.location,
          revalidation: e.revalidation || t.revalidation,
        };
  }
  componentDidCatch(e, t) {
    console.error(
      'React Router caught the following error during render',
      e,
      t
    );
  }
  render() {
    return void 0 !== this.state.error
      ? /*#__PURE__*/ N.createElement(
          ea.Provider,
          { value: this.props.routeContext },
          /*#__PURE__*/ N.createElement(el.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function ep(e) {
  let { routeContext: t, match: n, children: r } = e,
    a = N.useContext(ee);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = n.route.id),
    /*#__PURE__*/ N.createElement(ea.Provider, { value: t }, r)
  );
}
var eh =
    (((i = eh || {}).UseBlocker = 'useBlocker'),
    (i.UseRevalidator = 'useRevalidator'),
    (i.UseNavigateStable = 'useNavigate'),
    i),
  em =
    (((s = em || {}).UseBlocker = 'useBlocker'),
    (s.UseLoaderData = 'useLoaderData'),
    (s.UseActionData = 'useActionData'),
    (s.UseRouteError = 'useRouteError'),
    (s.UseNavigation = 'useNavigation'),
    (s.UseRouteLoaderData = 'useRouteLoaderData'),
    (s.UseMatches = 'useMatches'),
    (s.UseRevalidator = 'useRevalidator'),
    (s.UseNavigateStable = 'useNavigate'),
    (s.UseRouteId = 'useRouteId'),
    s);
function eg(e) {
  let t;
  let n = ((t = N.useContext(ea)) || F(!1), t),
    r = n.matches[n.matches.length - 1];
  return r.route.id || F(!1), r.route.id;
}
const ev = {};
function ey(e) {
  let { to: t, replace: n, state: r, relative: a } = e;
  eo() || F(!1);
  let { future: l, static: o } = N.useContext(en),
    { matches: i } = N.useContext(ea),
    { pathname: s } = ei(),
    u = eu(),
    c = JSON.stringify(q(t, Q(i, l.v7_relativeSplatPath), s, 'path' === a));
  return (
    N.useEffect(
      () => u(JSON.parse(c), { replace: n, state: r, relative: a }),
      [u, c, a, n, r]
    ),
    null
  );
}
function eb(e) {
  F(!1);
}
function ex(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: a = p.Pop,
    navigator: l,
    static: o = !1,
    future: i,
  } = e;
  eo() && F(!1);
  let s = t.replace(/^\/*/, '/'),
    u = N.useMemo(
      () => ({
        basename: s,
        navigator: l,
        static: o,
        future: Z({ v7_relativeSplatPath: !1 }, i),
      }),
      [s, i, l, o]
    );
  'string' == typeof r && (r = A(r));
  let {
      pathname: c = '/',
      search: d = '',
      hash: f = '',
      state: h = null,
      key: m = 'default',
    } = r,
    g = N.useMemo(() => {
      let e = H(c, s);
      return null == e
        ? null
        : {
            location: { pathname: e, search: d, hash: f, state: h, key: m },
            navigationType: a,
          };
    }, [s, c, d, f, h, m, a]);
  return null == g
    ? null
    : /*#__PURE__*/ N.createElement(
        en.Provider,
        { value: u },
        /*#__PURE__*/ N.createElement(er.Provider, { children: n, value: g })
      );
}
function ew(e) {
  let { children: t, location: n } = e;
  return (function (e, t, n, r) {
    var a, l;
    let o;
    eo() || F(!1);
    let { navigator: i } = N.useContext(en),
      { matches: s } = N.useContext(ea),
      u = s[s.length - 1],
      c = u ? u.params : {};
    u && u.pathname;
    let d = u ? u.pathnameBase : '/';
    u && u.route;
    let f = ei();
    if (t) {
      let e = 'string' == typeof t ? A(t) : t;
      '/' === d ||
        (null == (a = e.pathname) ? void 0 : a.startsWith(d)) ||
        F(!1),
        (o = e);
    } else o = f;
    let h = o.pathname || '/',
      m = h;
    if ('/' !== d) {
      let e = d.replace(/^\//, '').split('/');
      m = '/' + h.replace(/^\//, '').split('/').slice(e.length).join('/');
    }
    let g =
        (void 0 === l && (l = '/'),
        (function (e, t, n, r) {
          let a = H(('string' == typeof t ? A(t) : t).pathname || '/', n);
          if (null == a) return null;
          let l = (function e(t, n, r, a) {
            void 0 === n && (n = []),
              void 0 === r && (r = []),
              void 0 === a && (a = '');
            let l = (t, l, o) => {
              var i;
              let s,
                u,
                c = {
                  relativePath: void 0 === o ? t.path || '' : o,
                  caseSensitive: !0 === t.caseSensitive,
                  childrenIndex: l,
                  route: t,
                };
              c.relativePath.startsWith('/') &&
                (F(
                  c.relativePath.startsWith(a),
                  'Absolute route path "' +
                    c.relativePath +
                    '" nested under path "' +
                    a +
                    '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
                ),
                (c.relativePath = c.relativePath.slice(a.length)));
              let d = G([a, c.relativePath]),
                f = r.concat(c);
              t.children &&
                t.children.length > 0 &&
                (F(
                  !0 !== t.index,
                  'Index routes must not have child routes. Please remove all child routes from route path "' +
                    d +
                    '".'
                ),
                e(t.children, n, f, d)),
                (null != t.path || t.index) &&
                  n.push({
                    path: d,
                    score:
                      ((i = t.index),
                      (u = (s = d.split('/')).length),
                      s.some(W) && (u += -2),
                      i && (u += 2),
                      s
                        .filter((e) => !W(e))
                        .reduce(
                          (e, t) => e + (B.test(t) ? 3 : '' === t ? 1 : 10),
                          u
                        )),
                    routesMeta: f,
                  });
            };
            return (
              t.forEach((e, t) => {
                var n;
                if ('' !== e.path && null != (n = e.path) && n.includes('?'))
                  for (let n of (function e(t) {
                    let n = t.split('/');
                    if (0 === n.length) return [];
                    let [r, ...a] = n,
                      l = r.endsWith('?'),
                      o = r.replace(/\?$/, '');
                    if (0 === a.length) return l ? [o, ''] : [o];
                    let i = e(a.join('/')),
                      s = [];
                    return (
                      s.push(
                        ...i.map((e) => ('' === e ? o : [o, e].join('/')))
                      ),
                      l && s.push(...i),
                      s.map((e) => (t.startsWith('/') && '' === e ? '/' : e))
                    );
                  })(e.path))
                    l(e, t, n);
                else l(e, t);
              }),
              n
            );
          })(e);
          (function (e) {
            e.sort((e, t) => {
              var n, r;
              return e.score !== t.score
                ? t.score - e.score
                : ((n = e.routesMeta.map((e) => e.childrenIndex)),
                  (r = t.routesMeta.map((e) => e.childrenIndex)),
                  n.length === r.length &&
                  n.slice(0, -1).every((e, t) => e === r[t])
                    ? n[n.length - 1] - r[r.length - 1]
                    : 0);
            });
          })(l);
          let o = null;
          for (let e = 0; null == o && e < l.length; ++e) {
            let t = (function (e) {
              try {
                return e
                  .split('/')
                  .map((e) => decodeURIComponent(e).replace(/\//g, '%2F'))
                  .join('/');
              } catch (t) {
                return (
                  z(
                    !1,
                    'The URL path "' +
                      e +
                      '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                      t +
                      ').'
                  ),
                  e
                );
              }
            })(a);
            o = (function (e, t, n) {
              void 0 === n && (n = !1);
              let { routesMeta: r } = e,
                a = {},
                l = '/',
                o = [];
              for (let e = 0; e < r.length; ++e) {
                let i = r[e],
                  s = e === r.length - 1,
                  u = '/' === l ? t : t.slice(l.length) || '/',
                  c = V(
                    {
                      path: i.relativePath,
                      caseSensitive: i.caseSensitive,
                      end: s,
                    },
                    u
                  ),
                  d = i.route;
                if (
                  (!c &&
                    s &&
                    n &&
                    !r[r.length - 1].route.index &&
                    (c = V(
                      {
                        path: i.relativePath,
                        caseSensitive: i.caseSensitive,
                        end: !1,
                      },
                      u
                    )),
                  !c)
                )
                  return null;
                Object.assign(a, c.params),
                  o.push({
                    params: a,
                    pathname: G([l, c.pathname]),
                    pathnameBase: Y(G([l, c.pathnameBase])),
                    route: d,
                  }),
                  '/' !== c.pathnameBase && (l = G([l, c.pathnameBase]));
              }
              return o;
            })(l[e], t, r);
          }
          return o;
        })(e, { pathname: m }, l, !1)),
      v = (function (e, t, n, r) {
        var a, l;
        if (
          (void 0 === t && (t = []),
          void 0 === n && (n = null),
          void 0 === r && (r = null),
          null == e)
        ) {
          if (null == (l = n) || !l.errors) return null;
          e = n.matches;
        }
        let o = e,
          i = null == (a = n) ? void 0 : a.errors;
        if (null != i) {
          let e = o.findIndex(
            (e) => e.route.id && (null == i ? void 0 : i[e.route.id]) !== void 0
          );
          e >= 0 || F(!1), (o = o.slice(0, Math.min(o.length, e + 1)));
        }
        let s = !1,
          u = -1;
        if (n && r && r.v7_partialHydration)
          for (let e = 0; e < o.length; e++) {
            let t = o[e];
            if (
              ((t.route.HydrateFallback || t.route.hydrateFallbackElement) &&
                (u = e),
              t.route.id)
            ) {
              let { loaderData: e, errors: r } = n,
                a =
                  t.route.loader &&
                  void 0 === e[t.route.id] &&
                  (!r || void 0 === r[t.route.id]);
              if (t.route.lazy || a) {
                (s = !0), (o = u >= 0 ? o.slice(0, u + 1) : [o[0]]);
                break;
              }
            }
          }
        return o.reduceRight((e, r, a) => {
          var l;
          let c;
          let d = !1,
            f = null,
            p = null;
          n &&
            ((c = i && r.route.id ? i[r.route.id] : void 0),
            (f = r.route.errorElement || ed),
            s &&
              (u < 0 && 0 === a
                ? (ev[(l = 'route-fallback')] || (ev[l] = !0),
                  (d = !0),
                  (p = null))
                : u === a &&
                  ((d = !0), (p = r.route.hydrateFallbackElement || null))));
          let h = t.concat(o.slice(0, a + 1)),
            m = () => {
              let t;
              return (
                (t = c
                  ? f
                  : d
                  ? p
                  : r.route.Component
                  ? /*#__PURE__*/ N.createElement(r.route.Component, null)
                  : r.route.element
                  ? r.route.element
                  : e),
                /*#__PURE__*/ N.createElement(ep, {
                  match: r,
                  routeContext: {
                    outlet: e,
                    matches: h,
                    isDataRoute: null != n,
                  },
                  children: t,
                })
              );
            };
          return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === a)
            ? /*#__PURE__*/ N.createElement(ef, {
                location: n.location,
                revalidation: n.revalidation,
                component: f,
                error: c,
                children: m(),
                routeContext: { outlet: null, matches: h, isDataRoute: !0 },
              })
            : m();
        }, null);
      })(
        g &&
          g.map((e) =>
            Object.assign({}, e, {
              params: Object.assign({}, c, e.params),
              pathname: G([
                d,
                i.encodeLocation
                  ? i.encodeLocation(e.pathname).pathname
                  : e.pathname,
              ]),
              pathnameBase:
                '/' === e.pathnameBase
                  ? d
                  : G([
                      d,
                      i.encodeLocation
                        ? i.encodeLocation(e.pathnameBase).pathname
                        : e.pathnameBase,
                    ]),
            })
          ),
        s,
        void 0,
        void 0
      );
    return t && v
      ? /*#__PURE__*/ N.createElement(
          er.Provider,
          {
            value: {
              location: Z(
                {
                  pathname: '/',
                  search: '',
                  hash: '',
                  state: null,
                  key: 'default',
                },
                o
              ),
              navigationType: p.Pop,
            },
          },
          v
        )
      : v;
  })(
    (function e(t, n) {
      void 0 === n && (n = []);
      let r = [];
      return (
        N.Children.forEach(t, (t, a) => {
          if (!(/*#__PURE__*/ N.isValidElement(t))) return;
          let l = [...n, a];
          if (t.type === N.Fragment) {
            r.push.apply(r, e(t.props.children, l));
            return;
          }
          t.type !== eb && F(!1), t.props.index && t.props.children && F(!1);
          let o = {
            id: t.props.id || l.join('-'),
            caseSensitive: t.props.caseSensitive,
            element: t.props.element,
            Component: t.props.Component,
            index: t.props.index,
            path: t.props.path,
            loader: t.props.loader,
            action: t.props.action,
            errorElement: t.props.errorElement,
            ErrorBoundary: t.props.ErrorBoundary,
            hasErrorBoundary:
              null != t.props.ErrorBoundary || null != t.props.errorElement,
            shouldRevalidate: t.props.shouldRevalidate,
            handle: t.props.handle,
            lazy: t.props.lazy,
          };
          t.props.children && (o.children = e(t.props.children, l)), r.push(o);
        }),
        r
      );
    })(t),
    n
  );
}
N.startTransition;
var ek =
  (((u = ek || {})[(u.pending = 0)] = 'pending'),
  (u[(u.success = 1)] = 'success'),
  (u[(u.error = 2)] = 'error'),
  u);
function eS() {
  return (eS = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
}
new Promise(() => {});
const eE = [
  'onClick',
  'relative',
  'reloadDocument',
  'replace',
  'state',
  'target',
  'to',
  'preventScrollReset',
  'unstable_viewTransition',
];
try {
  window.__reactRouterVersion = '6';
} catch (e) {}
const eC = N.startTransition;
function eN(e) {
  let { basename: t, children: n, future: r, window: a } = e,
    l = N.useRef();
  null == l.current &&
    (l.current = (function (e, t, n, r) {
      void 0 === r && (r = {});
      let { window: a = document.defaultView, v5Compat: l = !1 } = r,
        o = a.history,
        i = p.Pop,
        s = null,
        u = c();
      function c() {
        return (o.state || { idx: null }).idx;
      }
      function d() {
        i = p.Pop;
        let e = c(),
          t = null == e ? null : e - u;
        (u = e), s && s({ action: i, location: h.location, delta: t });
      }
      function f(e) {
        let t =
            'null' !== a.location.origin ? a.location.origin : a.location.href,
          n = 'string' == typeof e ? e : U(e);
        return (
          F(
            t,
            'No window.location.(origin|href) available to create URL for href: ' +
              (n = n.replace(/ $/, '%20'))
          ),
          new URL(n, t)
        );
      }
      null == u && ((u = 0), o.replaceState(M({}, o.state, { idx: u }), ''));
      let h = {
        get action() {
          return i;
        },
        get location() {
          return e(a, o);
        },
        listen(e) {
          if (s) throw Error('A history only accepts one active listener');
          return (
            a.addEventListener(I, d),
            (s = e),
            () => {
              a.removeEventListener(I, d), (s = null);
            }
          );
        },
        createHref: (e) => t(a, e),
        createURL: f,
        encodeLocation(e) {
          let t = f(e);
          return { pathname: t.pathname, search: t.search, hash: t.hash };
        },
        push: function (e, t) {
          i = p.Push;
          let n = $(h.location, e, t),
            r = D(n, (u = c() + 1)),
            d = h.createHref(n);
          try {
            o.pushState(r, '', d);
          } catch (e) {
            if (e instanceof DOMException && 'DataCloneError' === e.name)
              throw e;
            a.location.assign(d);
          }
          l && s && s({ action: i, location: h.location, delta: 1 });
        },
        replace: function (e, t) {
          i = p.Replace;
          let n = $(h.location, e, t),
            r = D(n, (u = c())),
            a = h.createHref(n);
          o.replaceState(r, '', a),
            l && s && s({ action: i, location: h.location, delta: 0 });
        },
        go: (e) => o.go(e),
      };
      return h;
    })(
      function (e, t) {
        let { pathname: n, search: r, hash: a } = e.location;
        return $(
          '',
          { pathname: n, search: r, hash: a },
          (t.state && t.state.usr) || null,
          (t.state && t.state.key) || 'default'
        );
      },
      function (e, t) {
        return 'string' == typeof t ? t : U(t);
      },
      null,
      { window: a, v5Compat: !0 }
    ));
  let o = l.current,
    [i, s] = N.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = N.useCallback(
      (e) => {
        u && eC ? eC(() => s(e)) : s(e);
      },
      [s, u]
    );
  return (
    N.useLayoutEffect(() => o.listen(c), [o, c]),
    /*#__PURE__*/ N.createElement(ex, {
      basename: t,
      children: n,
      location: i.location,
      navigationType: i.action,
      navigator: o,
      future: r,
    })
  );
}
E.flushSync, N.useId;
const ej =
    'undefined' != typeof window &&
    void 0 !== window.document &&
    void 0 !== window.document.createElement,
  e_ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  eP = /*#__PURE__*/ N.forwardRef(function (e, t) {
    let n,
      {
        onClick: r,
        relative: a,
        reloadDocument: l,
        replace: o,
        state: i,
        target: s,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = e,
      f = (function (e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++)
          (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      })(e, eE),
      { basename: p } = N.useContext(en),
      h = !1;
    if ('string' == typeof u && e_.test(u) && ((n = u), ej))
      try {
        let e = new URL(window.location.href),
          t = new URL(u.startsWith('//') ? e.protocol + u : u),
          n = H(t.pathname, p);
        t.origin === e.origin && null != n
          ? (u = n + t.search + t.hash)
          : (h = !0);
      } catch (e) {}
    let m = (function (e, t) {
        let { relative: n } = void 0 === t ? {} : t;
        eo() || F(!1);
        let { basename: r, navigator: a } = N.useContext(en),
          { hash: l, pathname: o, search: i } = ec(e, { relative: n }),
          s = o;
        return (
          '/' !== r && (s = '/' === o ? r : G([r, o])),
          a.createHref({ pathname: s, search: i, hash: l })
        );
      })(u, { relative: a }),
      g = (function (e, t) {
        let {
            target: n,
            replace: r,
            state: a,
            preventScrollReset: l,
            relative: o,
            unstable_viewTransition: i,
          } = void 0 === t ? {} : t,
          s = eu(),
          u = ei(),
          c = ec(e, { relative: o });
        return N.useCallback(
          (t) => {
            0 !== t.button ||
              (n && '_self' !== n) ||
              t.metaKey ||
              t.altKey ||
              t.ctrlKey ||
              t.shiftKey ||
              (t.preventDefault(),
              s(e, {
                replace: void 0 !== r ? r : U(u) === U(c),
                state: a,
                preventScrollReset: l,
                relative: o,
                unstable_viewTransition: i,
              }));
          },
          [u, s, c, r, a, n, e, l, o, i]
        );
      })(u, {
        replace: o,
        state: i,
        target: s,
        preventScrollReset: c,
        relative: a,
        unstable_viewTransition: d,
      });
    return /*#__PURE__*/ N.createElement(
      'a',
      eS({}, f, {
        href: n || m,
        onClick:
          h || l
            ? r
            : function (e) {
                r && r(e), e.defaultPrevented || g(e);
              },
        ref: t,
        target: s,
      })
    );
  });
((c = m || (m = {})).UseScrollRestoration = 'useScrollRestoration'),
  (c.UseSubmit = 'useSubmit'),
  (c.UseSubmitFetcher = 'useSubmitFetcher'),
  (c.UseFetcher = 'useFetcher'),
  (c.useViewTransitionState = 'useViewTransitionState'),
  ((d = g || (g = {})).UseFetcher = 'useFetcher'),
  (d.UseFetchers = 'useFetchers'),
  (d.UseScrollRestoration = 'useScrollRestoration');
w('acw62');
var eR = {};
eR = w('hOzOt')();
var N = (w('acw62'), w('acw62'));
const eO = /*#__PURE__*/ N.forwardRef(
  ({ className: e, bsPrefix: t, as: n = 'div', ...a }, l) => (
    (t = R(t, 'card-body')),
    /*#__PURE__*/ (0, S.jsx)(n, {
      ref: l,
      className: /*@__PURE__*/ r(C)(e, t),
      ...a,
    })
  )
);
eO.displayName = 'CardBody';
var N = w('acw62');
const eL = /*#__PURE__*/ N.forwardRef(
  ({ className: e, bsPrefix: t, as: n = 'div', ...a }, l) => (
    (t = R(t, 'card-footer')),
    /*#__PURE__*/ (0, S.jsx)(n, {
      ref: l,
      className: /*@__PURE__*/ r(C)(e, t),
      ...a,
    })
  )
);
eL.displayName = 'CardFooter';
var N = (w('acw62'), w('acw62'));
const eT = /*#__PURE__*/ N.createContext(null);
eT.displayName = 'CardHeaderContext';
const eM = /*#__PURE__*/ N.forwardRef(
  ({ bsPrefix: e, className: t, as: n = 'div', ...a }, l) => {
    let o = R(e, 'card-header'),
      i = (0, N.useMemo)(() => ({ cardHeaderBsPrefix: o }), [o]);
    return /*#__PURE__*/ (0, S.jsx)(eT.Provider, {
      value: i,
      children: /*#__PURE__*/ (0, S.jsx)(n, {
        ref: l,
        ...a,
        className: /*@__PURE__*/ r(C)(t, o),
      }),
    });
  }
);
eM.displayName = 'CardHeader';
var N = w('acw62');
const eI = /*#__PURE__*/ N.forwardRef(
  ({ bsPrefix: e, className: t, variant: n, as: a = 'img', ...l }, o) => {
    let i = R(e, 'card-img');
    return /*#__PURE__*/ (0, S.jsx)(a, {
      ref: o,
      className: /*@__PURE__*/ r(C)(n ? `${i}-${n}` : i, t),
      ...l,
    });
  }
);
eI.displayName = 'CardImg';
var N = w('acw62');
const eF = /*#__PURE__*/ N.forwardRef(
  ({ className: e, bsPrefix: t, as: n = 'div', ...a }, l) => (
    (t = R(t, 'card-img-overlay')),
    /*#__PURE__*/ (0, S.jsx)(n, {
      ref: l,
      className: /*@__PURE__*/ r(C)(e, t),
      ...a,
    })
  )
);
eF.displayName = 'CardImgOverlay';
var N = w('acw62');
const ez = /*#__PURE__*/ N.forwardRef(
  ({ className: e, bsPrefix: t, as: n = 'a', ...a }, l) => (
    (t = R(t, 'card-link')),
    /*#__PURE__*/ (0, S.jsx)(n, {
      ref: l,
      className: /*@__PURE__*/ r(C)(e, t),
      ...a,
    })
  )
);
ez.displayName = 'CardLink';
var N = (w('acw62'), w('acw62')),
  eD = (e) =>
    /*#__PURE__*/ N.forwardRef((t, n) =>
      /*#__PURE__*/ (0, S.jsx)('div', {
        ...t,
        ref: n,
        className: /*@__PURE__*/ r(C)(t.className, e),
      })
    );
const e$ = eD('h6'),
  eU = /*#__PURE__*/ N.forwardRef(
    ({ className: e, bsPrefix: t, as: n = e$, ...a }, l) => (
      (t = R(t, 'card-subtitle')),
      /*#__PURE__*/ (0, S.jsx)(n, {
        ref: l,
        className: /*@__PURE__*/ r(C)(e, t),
        ...a,
      })
    )
  );
eU.displayName = 'CardSubtitle';
var N = w('acw62');
const eA = /*#__PURE__*/ N.forwardRef(
  ({ className: e, bsPrefix: t, as: n = 'p', ...a }, l) => (
    (t = R(t, 'card-text')),
    /*#__PURE__*/ (0, S.jsx)(n, {
      ref: l,
      className: /*@__PURE__*/ r(C)(e, t),
      ...a,
    })
  )
);
eA.displayName = 'CardText';
var N = w('acw62');
const eB = eD('h5'),
  eW = /*#__PURE__*/ N.forwardRef(
    ({ className: e, bsPrefix: t, as: n = eB, ...a }, l) => (
      (t = R(t, 'card-title')),
      /*#__PURE__*/ (0, S.jsx)(n, {
        ref: l,
        className: /*@__PURE__*/ r(C)(e, t),
        ...a,
      })
    )
  );
eW.displayName = 'CardTitle';
const eV = /*#__PURE__*/ N.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      bg: n,
      text: a,
      border: l,
      body: o = !1,
      children: i,
      as: s = 'div',
      ...u
    },
    c
  ) => {
    let d = R(e, 'card');
    return /*#__PURE__*/ (0, S.jsx)(s, {
      ref: c,
      ...u,
      className: /*@__PURE__*/ r(C)(
        t,
        d,
        n && `bg-${n}`,
        a && `text-${a}`,
        l && `border-${l}`
      ),
      children: o ? /*#__PURE__*/ (0, S.jsx)(eO, { children: i }) : i,
    });
  }
);
eV.displayName = 'Card';
var eH = Object.assign(eV, {
  Img: eI,
  Title: eW,
  Subtitle: eU,
  Body: eO,
  Link: ez,
  Text: eA,
  Header: eM,
  Footer: eL,
  ImgOverlay: eF,
});
const eK = ({ movie: e, showDescription: t }) =>
  /*#__PURE__*/ (0, S.jsx)(eP, {
    to: `/movies/${encodeURIComponent(e.id)}`,
    style: { textDecoration: 'none' },
    children: /*#__PURE__*/ (0, S.jsxs)(eH, {
      className: 'h-100',
      style: { width: '100%', cursor: 'pointer' },
      children: [
        /*#__PURE__*/ (0, S.jsx)('div', {
          style: { height: '100%' },
          children: /*#__PURE__*/ (0, S.jsx)(eH.Img, {
            variant: 'top',
            src: e.image,
            style: { width: '100%', height: '100%', objectFit: 'cover' },
          }),
        }),
        t &&
          /*#__PURE__*/ (0, S.jsx)(eH.Body, {
            children: /*#__PURE__*/ (0, S.jsx)(eH.Text, {
              children: 'Click for more details on this movie.',
            }),
          }),
      ],
    }),
  });
(eK.propTypes = {
  movie: /*@__PURE__*/ r(eR).shape({
    image: /*@__PURE__*/ r(eR).string,
    title: /*@__PURE__*/ r(eR).string.isRequired,
    release: /*@__PURE__*/ r(eR).string,
    description: /*@__PURE__*/ r(eR).string,
    rating: /*@__PURE__*/ r(eR).string,
    genreName: /*@__PURE__*/ r(eR).string,
    genreDescription: /*@__PURE__*/ r(eR).string,
    directorName: /*@__PURE__*/ r(eR).string.isRequired,
    directorBirthYear: /*@__PURE__*/ r(eR).string,
    directorBio: /*@__PURE__*/ r(eR).string,
  }).isRequired,
  showDescription: /*@__PURE__*/ r(eR).bool,
  onMovieClick: /*@__PURE__*/ r(eR).func,
}),
  (eK.defaultProps = { showDescription: !0 });
var N = (w('acw62'), w('acw62'));
const eQ = /*#__PURE__*/ N.forwardRef(
  ({ bsPrefix: e, className: t, as: n = 'div', ...a }, l) => {
    let o = R(e, 'row'),
      i = O(),
      s = L(),
      u = `${o}-cols`,
      c = [];
    return (
      i.forEach((e) => {
        let t;
        let n = a[e];
        delete a[e],
          null != n && 'object' == typeof n ? ({ cols: t } = n) : (t = n);
        let r = e !== s ? `-${e}` : '';
        null != t && c.push(`${u}${r}-${t}`);
      }),
      /*#__PURE__*/ (0, S.jsx)(n, {
        ref: l,
        ...a,
        className: /*@__PURE__*/ r(C)(t, o, ...c),
      })
    );
  }
);
eQ.displayName = 'Row';
var N = (w('acw62'), w('acw62'));
const eq = ['as', 'disabled'];
function eG({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: a,
  role: l,
  onClick: o,
  tabIndex: i = 0,
  type: s,
}) {
  e || (e = null != n || null != r || null != a ? 'a' : 'button');
  let u = { tagName: e };
  if ('button' === e) return [{ type: s || 'button', disabled: t }, u];
  let c = (r) => {
    var a;
    if (
      ((!t && ('a' !== e || ((a = n) && '#' !== a.trim()))) ||
        r.preventDefault(),
      t)
    ) {
      r.stopPropagation();
      return;
    }
    null == o || o(r);
  };
  return (
    'a' === e && (n || (n = '#'), t && (n = void 0)),
    [
      {
        role: null != l ? l : 'button',
        disabled: void 0,
        tabIndex: t ? void 0 : i,
        href: n,
        target: 'a' === e ? r : void 0,
        'aria-disabled': t || void 0,
        rel: 'a' === e ? a : void 0,
        onClick: c,
        onKeyDown: (e) => {
          ' ' === e.key && (e.preventDefault(), c(e));
        },
      },
      u,
    ]
  );
}
const eY = /*#__PURE__*/ N.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    a = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        a = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++)
        (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
    })(e, eq),
    [l, { tagName: o }] = eG(Object.assign({ tagName: n, disabled: r }, a));
  return /*#__PURE__*/ (0, S.jsx)(o, Object.assign({}, a, l, { ref: t }));
});
eY.displayName = 'Button';
const eX = /*#__PURE__*/ N.forwardRef(
  (
    {
      as: e,
      bsPrefix: t,
      variant: n = 'primary',
      size: a,
      active: l = !1,
      disabled: o = !1,
      className: i,
      ...s
    },
    u
  ) => {
    let c = R(t, 'btn'),
      [d, { tagName: f }] = eG({ tagName: e, disabled: o, ...s });
    return /*#__PURE__*/ (0, S.jsx)(f, {
      ...d,
      ...s,
      ref: u,
      disabled: o,
      className: /*@__PURE__*/ r(C)(
        i,
        c,
        l && 'active',
        n && `${c}-${n}`,
        a && `${c}-${a}`,
        s.href && o && 'disabled'
      ),
    });
  }
);
eX.displayName = 'Button';
var N = w('acw62');
/*@__PURE__*/ r(eR).string,
  /*@__PURE__*/ r(eR).bool,
  /*@__PURE__*/ r(eR).bool,
  /*@__PURE__*/ r(eR).bool,
  /*@__PURE__*/ r(eR).bool;
const eJ = /*#__PURE__*/ N.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      fluid: n = !1,
      rounded: a = !1,
      roundedCircle: l = !1,
      thumbnail: o = !1,
      ...i
    },
    s
  ) => (
    (e = R(e, 'img')),
    /*#__PURE__*/ (0, S.jsx)('img', {
      ref: s,
      ...i,
      className: /*@__PURE__*/ r(C)(
        t,
        n && `${e}-fluid`,
        a && 'rounded',
        l && 'rounded-circle',
        o && `${e}-thumbnail`
      ),
    })
  )
);
eJ.displayName = 'Image';
const eZ = ({ movies: e }) => {
  let [t, n] = (0, N.useState)([]),
    { movieId: r } = (function () {
      let { matches: e } = N.useContext(ea),
        t = e[e.length - 1];
      return t ? t.params : {};
    })(),
    a = e.find((e) => e.id === r);
  if (!a)
    return /*#__PURE__*/ (0, S.jsx)('div', { children: 'No movie found!' });
  let l = (e) => {
    console.log({ movie: e });
    let t = JSON.parse(localStorage.getItem('user'));
    console.log({ parsedUser: t }),
      fetch(
        `http://mymovies-alb-1448969138.us-east-1.elb.amazonaws.com/api/users/${t.Username}/movies/${e?.id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
        .then((e) => {
          e.ok && alert('This movie has been added to your Favorites!');
        })
        .catch((e) => {
          console.error('Error:', e), alert('Error adding movie to Favorites!');
        });
  };
  return /*#__PURE__*/ (0, S.jsxs)(eQ, {
    className: 'justify-content-md-center m-5',
    children: [
      /*#__PURE__*/ (0, S.jsx)('div', {
        children: /*#__PURE__*/ (0, S.jsx)(eJ, {
          className: 'w-100 mb-2',
          src: a.image,
          rounded: !0,
        }),
      }),
      /*#__PURE__*/ (0, S.jsxs)('div', {
        children: [
          /*#__PURE__*/ (0, S.jsx)('span', {
            style: { fontWeight: 'bold' },
            children: 'Title: ',
          }),
          /*#__PURE__*/ (0, S.jsx)('span', { children: a.title }),
        ],
      }),
      /*#__PURE__*/ (0, S.jsxs)('div', {
        children: [
          /*#__PURE__*/ (0, S.jsx)('span', {
            style: { fontWeight: 'bold' },
            children: 'Release: ',
          }),
          /*#__PURE__*/ (0, S.jsx)('span', { children: a.release }),
        ],
      }),
      /*#__PURE__*/ (0, S.jsxs)('div', {
        children: [
          /*#__PURE__*/ (0, S.jsx)('span', {
            style: { fontWeight: 'bold' },
            children: 'Description: ',
          }),
          /*#__PURE__*/ (0, S.jsx)('span', { children: a.description }),
        ],
      }),
      /*#__PURE__*/ (0, S.jsxs)('div', {
        children: [
          /*#__PURE__*/ (0, S.jsx)('span', {
            style: { fontWeight: 'bold' },
            children: 'Rating: ',
          }),
          /*#__PURE__*/ (0, S.jsx)('span', { children: a.rating }),
        ],
      }),
      /*#__PURE__*/ (0, S.jsxs)('div', {
        children: [
          /*#__PURE__*/ (0, S.jsx)('span', {
            style: { fontWeight: 'bold' },
            children: 'Genre: ',
          }),
          /*#__PURE__*/ (0, S.jsx)('span', { children: a.genre }),
        ],
      }),
      /*#__PURE__*/ (0, S.jsxs)('div', {
        children: [
          /*#__PURE__*/ (0, S.jsx)('span', {
            style: { fontWeight: 'bold' },
            children: 'Genre Description: ',
          }),
          /*#__PURE__*/ (0, S.jsx)('span', { children: a.genreDescription }),
        ],
      }),
      /*#__PURE__*/ (0, S.jsxs)('div', {
        children: [
          /*#__PURE__*/ (0, S.jsx)('span', {
            style: { fontWeight: 'bold' },
            children: 'Director: ',
          }),
          /*#__PURE__*/ (0, S.jsx)('span', { children: a.directorName }),
        ],
      }),
      /*#__PURE__*/ (0, S.jsxs)('div', {
        children: [
          /*#__PURE__*/ (0, S.jsx)('span', {
            style: { fontWeight: 'bold' },
            children: "Director's Birth Year: ",
          }),
          /*#__PURE__*/ (0, S.jsx)('span', { children: a.directorBirthYear }),
        ],
      }),
      /*#__PURE__*/ (0, S.jsxs)('div', {
        children: [
          /*#__PURE__*/ (0, S.jsx)('span', {
            style: { fontWeight: 'bold' },
            children: "Director's Bio: ",
          }),
          /*#__PURE__*/ (0, S.jsx)('span', { children: a.directorBio }),
        ],
      }),
      /*#__PURE__*/ (0, S.jsx)(eX, {
        className: 'w-100 m-2',
        variant: 'outline-primary',
        type: 'submit',
        style: { cursor: 'pointer' },
        href: '/',
        children: 'Back to Home Page',
      }),
      /*#__PURE__*/ (0, S.jsx)(eX, {
        className: 'w-100 m-2',
        variant: 'outline-secondary',
        type: 'submit',
        style: { cursor: 'pointer' },
        onClick: () => {
          l(a);
        },
        children: 'Add to Favorites!',
      }),
    ],
  });
};
var N = (w('acw62'), w('acw62'), w('acw62'), w('acw62'));
const e0 = {
    type: /*@__PURE__*/ r(eR).string,
    tooltip: /*@__PURE__*/ r(eR).bool,
    as: /*@__PURE__*/ r(eR).elementType,
  },
  e1 = /*#__PURE__*/ N.forwardRef(
    (
      { as: e = 'div', className: t, type: n = 'valid', tooltip: a = !1, ...l },
      o
    ) =>
      /*#__PURE__*/ (0, S.jsx)(e, {
        ...l,
        ref: o,
        className: /*@__PURE__*/ r(C)(t, `${n}-${a ? 'tooltip' : 'feedback'}`),
      })
  );
(e1.displayName = 'Feedback'), (e1.propTypes = e0);
var N = (w('acw62'), w('acw62'));
const e2 = /*#__PURE__*/ N.createContext({}),
  e3 = /*#__PURE__*/ N.forwardRef(
    (
      {
        id: e,
        bsPrefix: t,
        className: n,
        type: a = 'checkbox',
        isValid: l = !1,
        isInvalid: o = !1,
        as: i = 'input',
        ...s
      },
      u
    ) => {
      let { controlId: c } = (0, N.useContext)(e2);
      return (
        (t = R(t, 'form-check-input')),
        /*#__PURE__*/ (0, S.jsx)(i, {
          ...s,
          ref: u,
          type: a,
          id: e || c,
          className: /*@__PURE__*/ r(C)(
            n,
            t,
            l && 'is-valid',
            o && 'is-invalid'
          ),
        })
      );
    }
  );
e3.displayName = 'FormCheckInput';
var N = w('acw62');
const e6 = /*#__PURE__*/ N.forwardRef(
  ({ bsPrefix: e, className: t, htmlFor: n, ...a }, l) => {
    let { controlId: o } = (0, N.useContext)(e2);
    return (
      (e = R(e, 'form-check-label')),
      /*#__PURE__*/ (0, S.jsx)('label', {
        ...a,
        ref: l,
        htmlFor: n || o,
        className: /*@__PURE__*/ r(C)(t, e),
      })
    );
  }
);
e6.displayName = 'FormCheckLabel';
var N = w('acw62');
const e4 = /*#__PURE__*/ N.forwardRef(
  (
    {
      id: e,
      bsPrefix: t,
      bsSwitchPrefix: n,
      inline: a = !1,
      reverse: l = !1,
      disabled: o = !1,
      isValid: i = !1,
      isInvalid: s = !1,
      feedbackTooltip: u = !1,
      feedback: c,
      feedbackType: d,
      className: f,
      style: p,
      title: h = '',
      type: m = 'checkbox',
      label: g,
      children: v,
      as: y = 'input',
      ...b
    },
    x
  ) => {
    (t = R(t, 'form-check')), (n = R(n, 'form-switch'));
    let { controlId: w } = (0, N.useContext)(e2),
      k = (0, N.useMemo)(() => ({ controlId: e || w }), [w, e]),
      E =
        (!v && null != g && !1 !== g) ||
        N.Children.toArray(v).some(
          (e) => /*#__PURE__*/ N.isValidElement(e) && e.type === e6
        ),
      j = /*#__PURE__*/ (0, S.jsx)(e3, {
        ...b,
        type: 'switch' === m ? 'checkbox' : m,
        ref: x,
        isValid: i,
        isInvalid: s,
        disabled: o,
        as: y,
      });
    return /*#__PURE__*/ (0, S.jsx)(e2.Provider, {
      value: k,
      children: /*#__PURE__*/ (0, S.jsx)('div', {
        style: p,
        className: /*@__PURE__*/ r(C)(
          f,
          E && t,
          a && `${t}-inline`,
          l && `${t}-reverse`,
          'switch' === m && n
        ),
        children:
          v ||
          /*#__PURE__*/ (0, S.jsxs)(S.Fragment, {
            children: [
              j,
              E && /*#__PURE__*/ (0, S.jsx)(e6, { title: h, children: g }),
              c &&
                /*#__PURE__*/ (0, S.jsx)(e1, {
                  type: d,
                  tooltip: u,
                  children: c,
                }),
            ],
          }),
      }),
    });
  }
);
e4.displayName = 'FormCheck';
var e5 = Object.assign(e4, { Input: e3, Label: e6 }),
  N = w('acw62');
const e8 = /*#__PURE__*/ N.forwardRef(
  (
    {
      bsPrefix: e,
      type: t,
      size: n,
      htmlSize: a,
      id: l,
      className: o,
      isValid: i = !1,
      isInvalid: s = !1,
      plaintext: u,
      readOnly: c,
      as: d = 'input',
      ...f
    },
    p
  ) => {
    let { controlId: h } = (0, N.useContext)(e2);
    return (
      (e = R(e, 'form-control')),
      /*#__PURE__*/ (0, S.jsx)(d, {
        ...f,
        type: t,
        size: a,
        ref: p,
        readOnly: c,
        id: l || h,
        className: /*@__PURE__*/ r(C)(
          o,
          u ? `${e}-plaintext` : e,
          n && `${e}-${n}`,
          'color' === t && `${e}-color`,
          i && 'is-valid',
          s && 'is-invalid'
        ),
      })
    );
  }
);
e8.displayName = 'FormControl';
var e9 = Object.assign(e8, { Feedback: e1 }),
  N = w('acw62');
const e7 = /*#__PURE__*/ N.forwardRef(
  ({ className: e, bsPrefix: t, as: n = 'div', ...a }, l) => (
    (t = R(t, 'form-floating')),
    /*#__PURE__*/ (0, S.jsx)(n, {
      ref: l,
      className: /*@__PURE__*/ r(C)(e, t),
      ...a,
    })
  )
);
e7.displayName = 'FormFloating';
var N = w('acw62');
const te = /*#__PURE__*/ N.forwardRef(
  ({ controlId: e, as: t = 'div', ...n }, r) => {
    let a = (0, N.useMemo)(() => ({ controlId: e }), [e]);
    return /*#__PURE__*/ (0, S.jsx)(e2.Provider, {
      value: a,
      children: /*#__PURE__*/ (0, S.jsx)(t, { ...n, ref: r }),
    });
  }
);
te.displayName = 'FormGroup';
var N = (w('acw62'), w('acw62'));
const tt = /*#__PURE__*/ N.forwardRef((e, t) => {
  let [{ className: n, ...a }, { as: l = 'div', bsPrefix: o, spans: i }] =
    (function ({ as: e, bsPrefix: t, className: n, ...a }) {
      t = R(t, 'col');
      let l = O(),
        o = L(),
        i = [],
        s = [];
      return (
        l.forEach((e) => {
          let n, r, l;
          let u = a[e];
          delete a[e],
            'object' == typeof u && null != u
              ? ({ span: n, offset: r, order: l } = u)
              : (n = u);
          let c = e !== o ? `-${e}` : '';
          n && i.push(!0 === n ? `${t}${c}` : `${t}${c}-${n}`),
            null != l && s.push(`order${c}-${l}`),
            null != r && s.push(`offset${c}-${r}`);
        }),
        [
          { ...a, className: /*@__PURE__*/ r(C)(n, ...i, ...s) },
          { as: e, bsPrefix: t, spans: i },
        ]
      );
    })(e);
  return /*#__PURE__*/ (0, S.jsx)(l, {
    ...a,
    ref: t,
    className: /*@__PURE__*/ r(C)(n, !i.length && o),
  });
});
tt.displayName = 'Col';
const tn = /*#__PURE__*/ N.forwardRef(
  (
    {
      as: e = 'label',
      bsPrefix: t,
      column: n = !1,
      visuallyHidden: a = !1,
      className: l,
      htmlFor: o,
      ...i
    },
    s
  ) => {
    let { controlId: u } = (0, N.useContext)(e2);
    t = R(t, 'form-label');
    let c = 'col-form-label';
    'string' == typeof n && (c = `${c} ${c}-${n}`);
    let d = /*@__PURE__*/ r(C)(l, t, a && 'visually-hidden', n && c);
    return ((o = o || u), n)
      ? /*#__PURE__*/ (0, S.jsx)(tt, {
          ref: s,
          as: 'label',
          className: d,
          htmlFor: o,
          ...i,
        })
      : /*#__PURE__*/ (0, S.jsx)(e, { ref: s, className: d, htmlFor: o, ...i });
  }
);
tn.displayName = 'FormLabel';
var N = w('acw62');
const tr = /*#__PURE__*/ N.forwardRef(
  ({ bsPrefix: e, className: t, id: n, ...a }, l) => {
    let { controlId: o } = (0, N.useContext)(e2);
    return (
      (e = R(e, 'form-range')),
      /*#__PURE__*/ (0, S.jsx)('input', {
        ...a,
        type: 'range',
        ref: l,
        className: /*@__PURE__*/ r(C)(t, e),
        id: n || o,
      })
    );
  }
);
tr.displayName = 'FormRange';
var N = w('acw62');
const ta = /*#__PURE__*/ N.forwardRef(
  (
    {
      bsPrefix: e,
      size: t,
      htmlSize: n,
      className: a,
      isValid: l = !1,
      isInvalid: o = !1,
      id: i,
      ...s
    },
    u
  ) => {
    let { controlId: c } = (0, N.useContext)(e2);
    return (
      (e = R(e, 'form-select')),
      /*#__PURE__*/ (0, S.jsx)('select', {
        ...s,
        size: n,
        ref: u,
        className: /*@__PURE__*/ r(C)(
          a,
          e,
          t && `${e}-${t}`,
          l && 'is-valid',
          o && 'is-invalid'
        ),
        id: i || c,
      })
    );
  }
);
ta.displayName = 'FormSelect';
var N = w('acw62');
const tl = /*#__PURE__*/ N.forwardRef(
  ({ bsPrefix: e, className: t, as: n = 'small', muted: a, ...l }, o) => (
    (e = R(e, 'form-text')),
    /*#__PURE__*/ (0, S.jsx)(n, {
      ...l,
      ref: o,
      className: /*@__PURE__*/ r(C)(t, e, a && 'text-muted'),
    })
  )
);
tl.displayName = 'FormText';
var N = w('acw62');
const to = /*#__PURE__*/ N.forwardRef((e, t) =>
  /*#__PURE__*/ (0, S.jsx)(e5, { ...e, ref: t, type: 'switch' })
);
to.displayName = 'Switch';
var ti = Object.assign(to, { Input: e5.Input, Label: e5.Label }),
  N = w('acw62');
const ts = /*#__PURE__*/ N.forwardRef(
  (
    { bsPrefix: e, className: t, children: n, controlId: a, label: l, ...o },
    i
  ) => (
    (e = R(e, 'form-floating')),
    /*#__PURE__*/ (0, S.jsxs)(te, {
      ref: i,
      className: /*@__PURE__*/ r(C)(t, e),
      controlId: a,
      ...o,
      children: [
        n,
        /*#__PURE__*/ (0, S.jsx)('label', { htmlFor: a, children: l }),
      ],
    })
  )
);
ts.displayName = 'FloatingLabel';
const tu = {
    _ref: /*@__PURE__*/ r(eR).any,
    validated: /*@__PURE__*/ r(eR).bool,
    as: /*@__PURE__*/ r(eR).elementType,
  },
  tc = /*#__PURE__*/ N.forwardRef(
    ({ className: e, validated: t, as: n = 'form', ...a }, l) =>
      /*#__PURE__*/ (0, S.jsx)(n, {
        ...a,
        ref: l,
        className: /*@__PURE__*/ r(C)(e, t && 'was-validated'),
      })
  );
(tc.displayName = 'Form'), (tc.propTypes = tu);
var td = Object.assign(tc, {
  Group: te,
  Control: e9,
  Floating: e7,
  Check: e5,
  Switch: ti,
  Label: tn,
  Text: tl,
  Range: tr,
  Select: ta,
  FloatingLabel: ts,
});
const tf = ({ onLoggedIn: e }) => {
  let [t, n] = (0, N.useState)(''),
    [r, a] = (0, N.useState)('');
  return /*#__PURE__*/ (0, S.jsxs)(td, {
    className: 'm-3',
    onSubmit: (n) => {
      n.preventDefault(),
        fetch(
          'http://mymovies-alb-1448969138.us-east-1.elb.amazonaws.com/api/login',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Username: t, Password: r }),
          }
        )
          .then((e) => e.json())
          .then((t) => {
            console.log('Login response: ', t),
              t.user
                ? (localStorage.setItem('user', JSON.stringify(t.user)),
                  localStorage.setItem('token', t.token),
                  e(t.user, t.token))
                : alert(
                    'Please double check your Username and Password. Or if you are new, please Sign Up!.'
                  );
          })
          .catch((e) => {
            alert('Sorry, something went wrong.');
          });
    },
    children: [
      /*#__PURE__*/ (0, S.jsxs)(td.Group, {
        controlId: 'formUsername',
        children: [
          /*#__PURE__*/ (0, S.jsx)(td.Label, { children: 'Username:' }),
          /*#__PURE__*/ (0, S.jsx)(td.Control, {
            type: 'text',
            value: t,
            onChange: (e) => n(e.target.value),
            required: !0,
            minLength: '5',
          }),
        ],
      }),
      /*#__PURE__*/ (0, S.jsxs)(td.Group, {
        controlId: 'formPassword',
        children: [
          /*#__PURE__*/ (0, S.jsx)(td.Label, { children: 'Password:' }),
          /*#__PURE__*/ (0, S.jsx)(td.Control, {
            type: 'password',
            value: r,
            onChange: (e) => a(e.target.value),
            required: !0,
            maxLength: '20',
          }),
        ],
      }),
      /*#__PURE__*/ (0, S.jsx)(eX, {
        className: 'm-3',
        variant: 'primary',
        type: 'submit',
        children: 'Log In!',
      }),
    ],
  });
};
var N = w('acw62');
const tp = () => {
  let [e, t] = (0, N.useState)(''),
    [n, r] = (0, N.useState)(''),
    [a, l] = (0, N.useState)(''),
    [o, i] = (0, N.useState)('');
  return /*#__PURE__*/ (0, S.jsxs)(td, {
    className: 'm-3',
    onSubmit: (t) => {
      t.preventDefault(),
        fetch(
          'http://mymovies-alb-1448969138.us-east-1.elb.amazonaws.com/api/users/create',
          {
            method: 'POST',
            body: JSON.stringify({
              Username: e,
              Birthday: n,
              Email: a,
              Password: o,
            }),
            headers: { 'Content-Type': 'application/json' },
          }
        ).then((e) => {
          e.ok
            ? (alert("You're signed up!"), (window.location.href = '/login'))
            : alert('Sorry, signup failed.');
        });
    },
    children: [
      /*#__PURE__*/ (0, S.jsxs)(td.Group, {
        controlId: 'formUsername',
        children: [
          /*#__PURE__*/ (0, S.jsx)(td.Label, { children: 'Username:' }),
          /*#__PURE__*/ (0, S.jsx)(td.Control, {
            type: 'text',
            value: e,
            onChange: (e) => t(e.target.value),
            required: !0,
            minLength: '5',
          }),
        ],
      }),
      /*#__PURE__*/ (0, S.jsxs)(td.Group, {
        contolId: 'formBirthday',
        children: [
          /*#__PURE__*/ (0, S.jsx)(td.Label, { children: 'Birthday:' }),
          /*#__PURE__*/ (0, S.jsx)(td.Control, {
            type: 'date',
            value: n,
            onChange: (e) => r(e.target.value),
            required: !0,
          }),
        ],
      }),
      /*#__PURE__*/ (0, S.jsxs)(td.Group, {
        controlId: 'formEmail',
        children: [
          /*#__PURE__*/ (0, S.jsx)(td.Label, { children: 'Email:' }),
          /*#__PURE__*/ (0, S.jsx)(td.Control, {
            type: 'email',
            value: a,
            onChange: (e) => l(e.target.value),
            required: !0,
          }),
        ],
      }),
      /*#__PURE__*/ (0, S.jsxs)(td.Group, {
        controlId: 'formPassword',
        children: [
          /*#__PURE__*/ (0, S.jsx)(td.Label, { children: 'Password:' }),
          /*#__PURE__*/ (0, S.jsx)(td.Control, {
            type: 'password',
            value: o,
            onChange: (e) => i(e.target.value),
            required: !0,
            maxLength: '20',
          }),
        ],
      }),
      /*#__PURE__*/ (0, S.jsx)(eX, {
        className: 'm-3',
        variant: 'secondary',
        type: 'submit',
        children: 'Sign Up!',
      }),
    ],
  });
};
var N = (w('acw62'), w('acw62'), w('acw62'));
const th = /*#__PURE__*/ N.createContext(null),
  tm = (e, t = null) => (null != e ? String(e) : t || null);
function tg() {
  return (tg = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(null, arguments);
}
function tv(e, t) {
  if (null == e) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function ty(e) {
  return 'default' + e.charAt(0).toUpperCase() + e.substr(1);
}
function tb(e) {
  var t = (function (e, t) {
    if ('object' != typeof e || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
      var r = n.call(e, t || 'default');
      if ('object' != typeof r) return r;
      throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
  })(e, 'string');
  return 'symbol' == typeof t ? t : String(t);
}
function tx(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var a,
      l,
      o,
      i,
      s,
      u,
      c,
      d,
      f = n[ty(r)],
      p = n[r],
      h = tv(n, [ty(r), r].map(tb)),
      m = t[r],
      g =
        ((a = e[m]),
        (l = (0, N.useRef)(void 0 !== p)),
        (i = (o = (0, N.useState)(f))[0]),
        (s = o[1]),
        (u = void 0 !== p),
        (c = l.current),
        (l.current = u),
        !u && c && i !== f && s(f),
        [
          u ? p : i,
          (0, N.useCallback)(
            function (e) {
              for (
                var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              a && a.apply(void 0, [e].concat(n)), s(e);
            },
            [a]
          ),
        ]),
      v = g[0],
      y = g[1];
    return tg({}, h, (((d = {})[r] = v), (d[m] = y), d));
  }, e);
}
function tw(e, t) {
  return (tw = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
}
var N = (w('acw62'), w('acw62'), w('acw62'));
const tk = /*#__PURE__*/ N.forwardRef(
  ({ bsPrefix: e, className: t, as: n, ...a }, l) => {
    e = R(e, 'navbar-brand');
    let o = n || (a.href ? 'a' : 'span');
    return /*#__PURE__*/ (0, S.jsx)(o, {
      ...a,
      ref: l,
      className: /*@__PURE__*/ r(C)(t, e),
    });
  }
);
tk.displayName = 'NavbarBrand';
var N = w('acw62');
function tS(e) {
  return (e && e.ownerDocument) || document;
}
var tE = /([A-Z])/g,
  tC = /^ms-/;
function tN(e) {
  return e.replace(tE, '-$1').toLowerCase().replace(tC, '-ms-');
}
var tj =
    /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
  t_ = function (e, t) {
    var n,
      r = '',
      a = '';
    if ('string' == typeof t)
      return (
        e.style.getPropertyValue(tN(t)) ||
        (((n = tS(e)) && n.defaultView) || window)
          .getComputedStyle(e, void 0)
          .getPropertyValue(tN(t))
      );
    Object.keys(t).forEach(function (n) {
      var l = t[n];
      l || 0 === l
        ? n && tj.test(n)
          ? (a += n + '(' + l + ') ')
          : (r += tN(n) + ': ' + l + ';')
        : e.style.removeProperty(tN(n));
    }),
      a && (r += 'transform: ' + a + ';'),
      (e.style.cssText += ';' + r);
  },
  N = (w('acw62'), w('acw62')),
  tP = { disabled: !1 },
  N = w('acw62'),
  tR = /*@__PURE__*/ r(N).createContext(null),
  tO = 'unmounted',
  tL = 'exited',
  tT = 'entering',
  tM = 'entered',
  tI = 'exiting',
  tF = /*#__PURE__*/ (function (e) {
    function t(t, n) {
      r = e.call(this, t, n) || this;
      var r,
        a,
        l = n && !n.isMounting ? t.enter : t.appear;
      return (
        (r.appearStatus = null),
        t.in
          ? l
            ? ((a = tL), (r.appearStatus = tT))
            : (a = tM)
          : (a = t.unmountOnExit || t.mountOnEnter ? tO : tL),
        (r.state = { status: a }),
        (r.nextCallback = null),
        r
      );
    }
    (t.prototype = Object.create(e.prototype)),
      (t.prototype.constructor = t),
      tw(t, e),
      (t.getDerivedStateFromProps = function (e, t) {
        return e.in && t.status === tO ? { status: tL } : null;
      });
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (e) {
        var t = null;
        if (e !== this.props) {
          var n = this.state.status;
          this.props.in
            ? n !== tT && n !== tM && (t = tT)
            : (n === tT || n === tM) && (t = tI);
        }
        this.updateStatus(!1, t);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var e,
          t,
          n,
          r = this.props.timeout;
        return (
          (e = t = n = r),
          null != r &&
            'number' != typeof r &&
            ((e = r.exit),
            (t = r.enter),
            (n = void 0 !== r.appear ? r.appear : t)),
          { exit: e, enter: t, appear: n }
        );
      }),
      (n.updateStatus = function (e, t) {
        if ((void 0 === e && (e = !1), null !== t)) {
          if ((this.cancelNextCallback(), t === tT)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var n = this.props.nodeRef
                ? this.props.nodeRef.current
                : /*@__PURE__*/ r(E).findDOMNode(this);
              n && n.scrollTop;
            }
            this.performEnter(e);
          } else this.performExit();
        } else
          this.props.unmountOnExit &&
            this.state.status === tL &&
            this.setState({ status: tO });
      }),
      (n.performEnter = function (e) {
        var t = this,
          n = this.props.enter,
          a = this.context ? this.context.isMounting : e,
          l = this.props.nodeRef
            ? [a]
            : [/*@__PURE__*/ r(E).findDOMNode(this), a],
          o = l[0],
          i = l[1],
          s = this.getTimeouts(),
          u = a ? s.appear : s.enter;
        if ((!e && !n) || tP.disabled) {
          this.safeSetState({ status: tM }, function () {
            t.props.onEntered(o);
          });
          return;
        }
        this.props.onEnter(o, i),
          this.safeSetState({ status: tT }, function () {
            t.props.onEntering(o, i),
              t.onTransitionEnd(u, function () {
                t.safeSetState({ status: tM }, function () {
                  t.props.onEntered(o, i);
                });
              });
          });
      }),
      (n.performExit = function () {
        var e = this,
          t = this.props.exit,
          n = this.getTimeouts(),
          a = this.props.nodeRef
            ? void 0
            : /*@__PURE__*/ r(E).findDOMNode(this);
        if (!t || tP.disabled) {
          this.safeSetState({ status: tL }, function () {
            e.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: tI }, function () {
            e.props.onExiting(a),
              e.onTransitionEnd(n.exit, function () {
                e.safeSetState({ status: tL }, function () {
                  e.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        null !== this.nextCallback &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (e, t) {
        (t = this.setNextCallback(t)), this.setState(e, t);
      }),
      (n.setNextCallback = function (e) {
        var t = this,
          n = !0;
        return (
          (this.nextCallback = function (r) {
            n && ((n = !1), (t.nextCallback = null), e(r));
          }),
          (this.nextCallback.cancel = function () {
            n = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (e, t) {
        this.setNextCallback(t);
        var n = this.props.nodeRef
            ? this.props.nodeRef.current
            : /*@__PURE__*/ r(E).findDOMNode(this),
          a = null == e && !this.props.addEndListener;
        if (!n || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [n, this.nextCallback],
            o = l[0],
            i = l[1];
          this.props.addEndListener(o, i);
        }
        null != e && setTimeout(this.nextCallback, e);
      }),
      (n.render = function () {
        var e = this.state.status;
        if (e === tO) return null;
        var t = this.props,
          n = t.children,
          a =
            (t.in,
            t.mountOnEnter,
            t.unmountOnExit,
            t.appear,
            t.enter,
            t.exit,
            t.timeout,
            t.addEndListener,
            t.onEnter,
            t.onEntering,
            t.onEntered,
            t.onExit,
            t.onExiting,
            t.onExited,
            t.nodeRef,
            tv(t, [
              'children',
              'in',
              'mountOnEnter',
              'unmountOnExit',
              'appear',
              'enter',
              'exit',
              'timeout',
              'addEndListener',
              'onEnter',
              'onEntering',
              'onEntered',
              'onExit',
              'onExiting',
              'onExited',
              'nodeRef',
            ]));
        return /*#__PURE__*/ /*@__PURE__*/ r(N).createElement(
          tR.Provider,
          { value: null },
          'function' == typeof n
            ? n(e, a)
            : /*@__PURE__*/ r(N).cloneElement(
                /*@__PURE__*/ r(N).Children.only(n),
                a
              )
        );
      }),
      t
    );
  })(/*@__PURE__*/ r(N).Component);
function tz() {}
(tF.contextType = tR),
  (tF.propTypes = {}),
  (tF.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: tz,
    onEntering: tz,
    onEntered: tz,
    onExit: tz,
    onExiting: tz,
    onExited: tz,
  }),
  (tF.UNMOUNTED = tO),
  (tF.EXITED = tL),
  (tF.ENTERING = tT),
  (tF.ENTERED = tM),
  (tF.EXITING = tI);
var tD = !!(
    'undefined' != typeof window &&
    window.document &&
    window.document.createElement
  ),
  t$ = !1,
  tU = !1;
try {
  var tA = {
    get passive() {
      return (t$ = !0);
    },
    get once() {
      return (tU = t$ = !0);
    },
  };
  tD &&
    (window.addEventListener('test', tA, tA),
    window.removeEventListener('test', tA, !0));
} catch (e) {}
var tB = function (e, t, n, r) {
    if (r && 'boolean' != typeof r && !tU) {
      var a = r.once,
        l = r.capture,
        o = n;
      !tU &&
        a &&
        ((o =
          n.__once ||
          function e(r) {
            this.removeEventListener(t, e, l), n.call(this, r);
          }),
        (n.__once = o)),
        e.addEventListener(t, o, t$ ? r : l);
    }
    e.addEventListener(t, n, r);
  },
  tW = function (e, t, n, r) {
    var a = r && 'boolean' != typeof r ? r.capture : r;
    e.removeEventListener(t, n, a),
      n.__once && e.removeEventListener(t, n.__once, a);
  },
  tV = function (e, t, n, r) {
    return (
      tB(e, t, n, r),
      function () {
        tW(e, t, n, r);
      }
    );
  };
function tH(e, t, n, r) {
  null == n &&
    ((l =
      -1 === (a = t_(e, 'transitionDuration') || '').indexOf('ms') ? 1e3 : 1),
    (n = parseFloat(a) * l || 0));
  var a,
    l,
    o,
    i,
    s,
    u,
    c,
    d =
      ((o = n),
      void 0 === (i = r) && (i = 5),
      (s = !1),
      (u = setTimeout(function () {
        s ||
          (function (e, t, n, r) {
            if ((void 0 === n && (n = !1), void 0 === r && (r = !0), e)) {
              var a = document.createEvent('HTMLEvents');
              a.initEvent(t, n, r), e.dispatchEvent(a);
            }
          })(e, 'transitionend', !0);
      }, o + i)),
      (c = tV(
        e,
        'transitionend',
        function () {
          s = !0;
        },
        { once: !0 }
      )),
      function () {
        clearTimeout(u), c();
      }),
    f = tV(e, 'transitionend', t);
  return function () {
    d(), f();
  };
}
function tK(e, t) {
  let n = t_(e, t) || '',
    r = -1 === n.indexOf('ms') ? 1e3 : 1;
  return parseFloat(n) * r;
}
function tQ(e, t) {
  let n = tK(e, 'transitionDuration'),
    r = tK(e, 'transitionDelay'),
    a = tH(
      e,
      (n) => {
        n.target === e && (a(), t(n));
      },
      n + r
    );
}
var tq = function (...e) {
  return e
    .filter((e) => null != e)
    .reduce((e, t) => {
      if ('function' != typeof t)
        throw Error(
          'Invalid Argument Type, must only provide functions, undefined, or null.'
        );
      return null === e
        ? t
        : function (...n) {
            e.apply(this, n), t.apply(this, n);
          };
    }, null);
};
function tG(e) {
  e.offsetHeight;
}
var N = (w('acw62'), w('acw62'));
const tY = (e) =>
  e && 'function' != typeof e
    ? (t) => {
        e.current = t;
      }
    : e;
var tX = function (e, t) {
  return (0, N.useMemo)(
    () =>
      (function (e, t) {
        let n = tY(e),
          r = tY(t);
        return (e) => {
          n && n(e), r && r(e);
        };
      })(e, t),
    [e, t]
  );
};
const tJ = /*#__PURE__*/ /*@__PURE__*/ r(N).forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: a,
        onExiting: l,
        onExited: o,
        addEndListener: i,
        children: s,
        childRef: u,
        ...c
      },
      d
    ) => {
      let f = (0, N.useRef)(null),
        p = tX(f, u),
        h = (e) => {
          p(
            e && 'setState' in e
              ? /*@__PURE__*/ r(E).findDOMNode(e)
              : null != e
              ? e
              : null
          );
        },
        m = (e) => (t) => {
          e && f.current && e(f.current, t);
        },
        g = (0, N.useCallback)(m(e), [e]),
        v = (0, N.useCallback)(m(t), [t]),
        y = (0, N.useCallback)(m(n), [n]),
        b = (0, N.useCallback)(m(a), [a]),
        x = (0, N.useCallback)(m(l), [l]),
        w = (0, N.useCallback)(m(o), [o]),
        k = (0, N.useCallback)(m(i), [i]);
      return /*#__PURE__*/ (0, S.jsx)(tF, {
        ref: d,
        ...c,
        onEnter: g,
        onEntered: y,
        onEntering: v,
        onExit: b,
        onExited: w,
        onExiting: x,
        addEndListener: k,
        nodeRef: f,
        children:
          'function' == typeof s
            ? (e, t) => s(e, { ...t, ref: h })
            : /*#__PURE__*/ /*@__PURE__*/ r(N).cloneElement(s, { ref: h }),
      });
    }
  ),
  tZ = {
    height: ['marginTop', 'marginBottom'],
    width: ['marginLeft', 'marginRight'],
  };
function t0(e, t) {
  let n = t[`offset${e[0].toUpperCase()}${e.slice(1)}`],
    r = tZ[e];
  return n + parseInt(t_(t, r[0]), 10) + parseInt(t_(t, r[1]), 10);
}
const t1 = {
    [tL]: 'collapse',
    [tI]: 'collapsing',
    [tT]: 'collapsing',
    [tM]: 'collapse show',
  },
  t2 = /*#__PURE__*/ /*@__PURE__*/ r(N).forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: a,
        onExiting: l,
        className: o,
        children: i,
        dimension: s = 'height',
        in: u = !1,
        timeout: c = 300,
        mountOnEnter: d = !1,
        unmountOnExit: f = !1,
        appear: p = !1,
        getDimensionValue: h = t0,
        ...m
      },
      g
    ) => {
      let v = 'function' == typeof s ? s() : s,
        y = (0, N.useMemo)(
          () =>
            tq((e) => {
              e.style[v] = '0';
            }, e),
          [v, e]
        ),
        b = (0, N.useMemo)(
          () =>
            tq((e) => {
              let t = `scroll${v[0].toUpperCase()}${v.slice(1)}`;
              e.style[v] = `${e[t]}px`;
            }, t),
          [v, t]
        ),
        x = (0, N.useMemo)(
          () =>
            tq((e) => {
              e.style[v] = null;
            }, n),
          [v, n]
        ),
        w = (0, N.useMemo)(
          () =>
            tq((e) => {
              (e.style[v] = `${h(v, e)}px`), tG(e);
            }, a),
          [a, h, v]
        ),
        k = (0, N.useMemo)(
          () =>
            tq((e) => {
              e.style[v] = null;
            }, l),
          [v, l]
        );
      return /*#__PURE__*/ (0, S.jsx)(tJ, {
        ref: g,
        addEndListener: tQ,
        ...m,
        'aria-expanded': m.role ? u : null,
        onEnter: y,
        onEntering: b,
        onEntered: x,
        onExit: w,
        onExiting: k,
        childRef: i.ref,
        in: u,
        timeout: c,
        mountOnEnter: d,
        unmountOnExit: f,
        appear: p,
        children: (e, t) =>
          /*#__PURE__*/ /*@__PURE__*/ r(N).cloneElement(i, {
            ...t,
            className: /*@__PURE__*/ r(C)(
              o,
              i.props.className,
              t1[e],
              'width' === v && 'collapse-horizontal'
            ),
          }),
      });
    }
  );
var N = w('acw62');
const t3 = /*#__PURE__*/ N.createContext(null);
t3.displayName = 'NavbarContext';
const t6 = /*#__PURE__*/ N.forwardRef(
  ({ children: e, bsPrefix: t, ...n }, r) => {
    t = R(t, 'navbar-collapse');
    let a = (0, N.useContext)(t3);
    return /*#__PURE__*/ (0, S.jsx)(t2, {
      in: !!(a && a.expanded),
      ...n,
      children: /*#__PURE__*/ (0, S.jsx)('div', {
        ref: r,
        className: t,
        children: e,
      }),
    });
  }
);
t6.displayName = 'NavbarCollapse';
var N = (w('acw62'), w('acw62'), w('acw62')),
  t4 = function (e) {
    let t = (0, N.useRef)(e);
    return (
      (0, N.useEffect)(() => {
        t.current = e;
      }, [e]),
      t
    );
  };
function t5(e) {
  let t = t4(e);
  return (0, N.useCallback)(
    function (...e) {
      return t.current && t.current(...e);
    },
    [t]
  );
}
const t8 = /*#__PURE__*/ N.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: n,
      label: a = 'Toggle navigation',
      as: l = 'button',
      onClick: o,
      ...i
    },
    s
  ) => {
    e = R(e, 'navbar-toggler');
    let { onToggle: u, expanded: c } = (0, N.useContext)(t3) || {},
      d = t5((e) => {
        o && o(e), u && u();
      });
    return (
      'button' === l && (i.type = 'button'),
      /*#__PURE__*/ (0, S.jsx)(l, {
        ...i,
        ref: s,
        onClick: d,
        'aria-label': a,
        className: /*@__PURE__*/ r(C)(t, e, !c && 'collapsed'),
        children:
          n || /*#__PURE__*/ (0, S.jsx)('span', { className: `${e}-icon` }),
      })
    );
  }
);
t8.displayName = 'NavbarToggle';
var N = (w('acw62'), w('acw62'));
const t9 = void 0 !== y && y.navigator && 'ReactNative' === y.navigator.product;
var t7 = 'undefined' != typeof document || t9 ? N.useLayoutEffect : N.useEffect,
  N = w('acw62');
const ne = new WeakMap(),
  nt = (e, t) => {
    if (!e || !t) return;
    let n = ne.get(t) || new Map();
    ne.set(t, n);
    let r = n.get(e);
    return r || (((r = t.matchMedia(e)).refCount = 0), n.set(r.media, r)), r;
  };
var N = w('acw62');
const nn = (function (e) {
  let t = Object.keys(e);
  function n(e, t) {
    return e === t ? t : e ? `${e} and ${t}` : t;
  }
  return function (r, a, l) {
    let o;
    return (
      'object' == typeof r
        ? ((o = r), (l = a), (a = !0))
        : (o = { [r]: (a = a || !0) }),
      (function (e, t = 'undefined' == typeof window ? void 0 : window) {
        let n = nt(e, t),
          [r, a] = (0, N.useState)(() => !!n && n.matches);
        return (
          t7(() => {
            let n = nt(e, t);
            if (!n) return a(!1);
            let r = ne.get(t),
              l = () => {
                a(n.matches);
              };
            return (
              n.refCount++,
              n.addListener(l),
              l(),
              () => {
                n.removeListener(l),
                  n.refCount--,
                  n.refCount <= 0 && (null == r || r.delete(n.media)),
                  (n = void 0);
              }
            );
          }, [e]),
          r
        );
      })(
        (0, N.useMemo)(
          () =>
            Object.entries(o).reduce((r, [a, l]) => {
              if ('up' === l || !0 === l) {
                let t;
                r = n(
                  r,
                  ('number' == typeof (t = e[a]) && (t = `${t}px`),
                  `(min-width: ${t})`)
                );
              }
              if ('down' === l || !0 === l) {
                let l;
                r = n(
                  r,
                  ((l =
                    'number' ==
                    typeof (l = e[t[Math.min(t.indexOf(a) + 1, t.length - 1)]])
                      ? `${l - 0.2}px`
                      : `calc(${l} - 0.2px)`),
                  `(max-width: ${l})`)
                );
              }
              return r;
            }, ''),
          [JSON.stringify(o)]
        ),
        l
      )
    );
  };
})({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 });
function nr(e) {
  void 0 === e && (e = tS());
  try {
    var t = e.activeElement;
    if (!t || !t.nodeName) return null;
    return t;
  } catch (t) {
    return e.body;
  }
}
function na(e, t) {
  return e.contains
    ? e.contains(t)
    : e.compareDocumentPosition
    ? e === t || !!(16 & e.compareDocumentPosition(t))
    : void 0;
}
function nl(e) {
  let t = (function (e) {
    let t = (0, N.useRef)(e);
    return (t.current = e), t;
  })(e);
  (0, N.useEffect)(() => () => t.current(), []);
}
var N =
  (w('acw62'), w('acw62'), w('acw62'), w('acw62'), w('acw62'), w('acw62'));
function no(e) {
  return `data-rr-ui-${e}`;
}
const ni = no('modal-open');
var ns = class {
    constructor({
      ownerDocument: e,
      handleContainerOverflow: t = !0,
      isRTL: n = !1,
    } = {}) {
      (this.handleContainerOverflow = t),
        (this.isRTL = n),
        (this.modals = []),
        (this.ownerDocument = e);
    }
    getScrollbarWidth() {
      return (function (e = document) {
        return Math.abs(
          e.defaultView.innerWidth - e.documentElement.clientWidth
        );
      })(this.ownerDocument);
    }
    getElement() {
      return (this.ownerDocument || document).body;
    }
    setModalAttributes(e) {}
    removeModalAttributes(e) {}
    setContainerStyle(e) {
      let t = { overflow: 'hidden' },
        n = this.isRTL ? 'paddingLeft' : 'paddingRight',
        r = this.getElement();
      (e.style = { overflow: r.style.overflow, [n]: r.style[n] }),
        e.scrollBarWidth &&
          (t[n] = `${parseInt(t_(r, n) || '0', 10) + e.scrollBarWidth}px`),
        r.setAttribute(ni, ''),
        t_(r, t);
    }
    reset() {
      [...this.modals].forEach((e) => this.remove(e));
    }
    removeContainerStyle(e) {
      let t = this.getElement();
      t.removeAttribute(ni), Object.assign(t.style, e.style);
    }
    add(e) {
      let t = this.modals.indexOf(e);
      return (
        -1 !== t ||
          ((t = this.modals.length),
          this.modals.push(e),
          this.setModalAttributes(e),
          0 !== t ||
            ((this.state = {
              scrollBarWidth: this.getScrollbarWidth(),
              style: {},
            }),
            this.handleContainerOverflow &&
              this.setContainerStyle(this.state))),
        t
      );
    }
    remove(e) {
      let t = this.modals.indexOf(e);
      -1 !== t &&
        (this.modals.splice(t, 1),
        !this.modals.length &&
          this.handleContainerOverflow &&
          this.removeContainerStyle(this.state),
        this.removeModalAttributes(e));
    }
    isTopModal(e) {
      return !!this.modals.length && this.modals[this.modals.length - 1] === e;
    }
  },
  N = (w('acw62'), w('acw62'));
const nu = /*#__PURE__*/ (0, N.createContext)(tD ? window : void 0);
function nc() {
  return (0, N.useContext)(nu);
}
nu.Provider;
const nd = (e, t) =>
  tD
    ? null == e
      ? (t || tS()).body
      : ('function' == typeof e && (e = e()),
        e && 'current' in e && (e = e.current),
        e && ('nodeType' in e || e.getBoundingClientRect))
      ? e
      : null
    : null;
var N = (w('acw62'), w('acw62')),
  nf = function ({
    children: e,
    in: t,
    onExited: n,
    mountOnEnter: r,
    unmountOnExit: a,
  }) {
    let l = (0, N.useRef)(null),
      o = (0, N.useRef)(t),
      i = t5(n);
    (0, N.useEffect)(() => {
      t ? (o.current = !0) : i(l.current);
    }, [t, i]);
    let s = tX(l, e.ref),
      u = /*#__PURE__*/ (0, N.cloneElement)(e, { ref: s });
    return t ? u : a || (!o.current && r) ? null : u;
  },
  N = (w('acw62'), w('acw62'), w('acw62'));
const np = [
    'onEnter',
    'onEntering',
    'onEntered',
    'onExit',
    'onExiting',
    'onExited',
    'addEndListener',
    'children',
  ],
  nh = ['component'],
  nm = /*#__PURE__*/ N.forwardRef((e, t) => {
    let { component: n } = e,
      r = (function (e) {
        let {
            onEnter: t,
            onEntering: n,
            onEntered: r,
            onExit: a,
            onExiting: l,
            onExited: o,
            addEndListener: i,
            children: s,
          } = e,
          u = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, np),
          { major: c } = (function () {
            let e = N.version.split('.');
            return { major: +e[0], minor: +e[1], patch: +e[2] };
          })(),
          d = c >= 19 ? s.props.ref : s.ref,
          f = (0, N.useRef)(null),
          p = tX(f, 'function' == typeof s ? null : d),
          h = (e) => (t) => {
            e && f.current && e(f.current, t);
          },
          m = (0, N.useCallback)(h(t), [t]),
          g = (0, N.useCallback)(h(n), [n]),
          v = (0, N.useCallback)(h(r), [r]),
          y = (0, N.useCallback)(h(a), [a]),
          b = (0, N.useCallback)(h(l), [l]),
          x = (0, N.useCallback)(h(o), [o]),
          w = (0, N.useCallback)(h(i), [i]);
        return Object.assign(
          {},
          u,
          { nodeRef: f },
          t && { onEnter: m },
          n && { onEntering: g },
          r && { onEntered: v },
          a && { onExit: y },
          l && { onExiting: b },
          o && { onExited: x },
          i && { addEndListener: w },
          {
            children:
              'function' == typeof s
                ? (e, t) => s(e, Object.assign({}, t, { ref: p }))
                : /*#__PURE__*/ (0, N.cloneElement)(s, { ref: p }),
          }
        );
      })(
        (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            a = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a;
        })(e, nh)
      );
    return /*#__PURE__*/ (0, S.jsx)(n, Object.assign({ ref: t }, r));
  });
function ng({ children: e, in: t, onExited: n, onEntered: r, transition: a }) {
  let [l, o] = (0, N.useState)(!t);
  t && l && o(!1);
  let i = tX(
    (function ({ in: e, onTransition: t }) {
      let n = (0, N.useRef)(null),
        r = (0, N.useRef)(!0),
        a = t5(t);
      return (
        t7(() => {
          if (!n.current) return;
          let t = !1;
          return (
            a({
              in: e,
              element: n.current,
              initial: r.current,
              isStale: () => t,
            }),
            () => {
              t = !0;
            }
          );
        }, [e, a]),
        t7(
          () => (
            (r.current = !1),
            () => {
              r.current = !0;
            }
          ),
          []
        ),
        n
      );
    })({
      in: !!t,
      onTransition: (e) => {
        Promise.resolve(a(e)).then(
          () => {
            e.isStale() ||
              (e.in
                ? null == r || r(e.element, e.initial)
                : (o(!0), null == n || n(e.element)));
          },
          (t) => {
            throw (e.in || o(!0), t);
          }
        );
      },
    }),
    e.ref
  );
  return l && !t ? null : /*#__PURE__*/ (0, N.cloneElement)(e, { ref: i });
}
function nv(e, t, n) {
  return e
    ? /*#__PURE__*/ (0, S.jsx)(nm, Object.assign({}, n, { component: e }))
    : t
    ? /*#__PURE__*/ (0, S.jsx)(ng, Object.assign({}, n, { transition: t }))
    : /*#__PURE__*/ (0, S.jsx)(nf, Object.assign({}, n));
}
const ny = [
    'show',
    'role',
    'className',
    'style',
    'children',
    'backdrop',
    'keyboard',
    'onBackdropClick',
    'onEscapeKeyDown',
    'transition',
    'runTransition',
    'backdropTransition',
    'runBackdropTransition',
    'autoFocus',
    'enforceFocus',
    'restoreFocus',
    'restoreFocusOptions',
    'renderDialog',
    'renderBackdrop',
    'manager',
    'container',
    'onShow',
    'onHide',
    'onExit',
    'onExited',
    'onExiting',
    'onEnter',
    'onEntering',
    'onEntered',
  ],
  nb = /*#__PURE__*/ (0, N.forwardRef)((t, n) => {
    let {
        show: a = !1,
        role: l = 'dialog',
        className: o,
        style: i,
        children: s,
        backdrop: u = !0,
        keyboard: c = !0,
        onBackdropClick: d,
        onEscapeKeyDown: f,
        transition: p,
        runTransition: h,
        backdropTransition: m,
        runBackdropTransition: g,
        autoFocus: v = !0,
        enforceFocus: y = !0,
        restoreFocus: b = !0,
        restoreFocusOptions: x,
        renderDialog: w,
        renderBackdrop: k = (e) =>
          /*#__PURE__*/ (0, S.jsx)('div', Object.assign({}, e)),
        manager: C,
        container: j,
        onShow: _,
        onHide: P = () => {},
        onExit: R,
        onExited: O,
        onExiting: L,
        onEnter: T,
        onEntering: M,
        onEntered: I,
      } = t,
      F = (function (e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++)
          (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      })(t, ny),
      z = nc(),
      D = (function (e, t) {
        let n = nc(),
          [r, a] = (0, N.useState)(() =>
            nd(e, null == n ? void 0 : n.document)
          );
        if (!r) {
          let t = nd(e);
          t && a(t);
        }
        return (
          (0, N.useEffect)(() => {}, [void 0, r]),
          (0, N.useEffect)(() => {
            let t = nd(e);
            t !== r && a(t);
          }, [e, r]),
          r
        );
      })(j),
      $ = (function (t) {
        let n = nc(),
          r =
            t ||
            (e ||
              (e = new ns({ ownerDocument: null == n ? void 0 : n.document })),
            e),
          a = (0, N.useRef)({ dialog: null, backdrop: null });
        return Object.assign(a.current, {
          add: () => r.add(a.current),
          remove: () => r.remove(a.current),
          isTopModal: () => r.isTopModal(a.current),
          setDialogRef: (0, N.useCallback)((e) => {
            a.current.dialog = e;
          }, []),
          setBackdropRef: (0, N.useCallback)((e) => {
            a.current.backdrop = e;
          }, []),
        });
      })(C),
      U = (function () {
        let e = (0, N.useRef)(!0),
          t = (0, N.useRef)(() => e.current);
        return (
          (0, N.useEffect)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          t.current
        );
      })(),
      A = (function (e) {
        let t = (0, N.useRef)(null);
        return (
          (0, N.useEffect)(() => {
            t.current = e;
          }),
          t.current
        );
      })(a),
      [B, W] = (0, N.useState)(!a),
      V = (0, N.useRef)(null);
    (0, N.useImperativeHandle)(n, () => $, [$]),
      tD && !A && a && (V.current = nr(null == z ? void 0 : z.document)),
      a && B && W(!1);
    let H = t5(() => {
        if (
          ($.add(),
          (X.current = tV(document, 'keydown', G)),
          (Y.current = tV(document, 'focus', () => setTimeout(Q), !0)),
          _ && _(),
          v)
        ) {
          var e, t;
          let n = nr(
            null != (e = null == (t = $.dialog) ? void 0 : t.ownerDocument)
              ? e
              : null == z
              ? void 0
              : z.document
          );
          $.dialog &&
            n &&
            !na($.dialog, n) &&
            ((V.current = n), $.dialog.focus());
        }
      }),
      K = t5(() => {
        if (
          ($.remove(),
          null == X.current || X.current(),
          null == Y.current || Y.current(),
          b)
        ) {
          var e;
          null == (e = V.current) || null == e.focus || e.focus(x),
            (V.current = null);
        }
      });
    (0, N.useEffect)(() => {
      a && D && H();
    }, [a, D, H]),
      (0, N.useEffect)(() => {
        B && K();
      }, [B, K]),
      nl(() => {
        K();
      });
    let Q = t5(() => {
        if (!y || !U() || !$.isTopModal()) return;
        let e = nr(null == z ? void 0 : z.document);
        $.dialog && e && !na($.dialog, e) && $.dialog.focus();
      }),
      q = t5((e) => {
        e.target === e.currentTarget && (null == d || d(e), !0 === u && P());
      }),
      G = t5((e) => {
        c &&
          ('Escape' === e.code || 27 === e.keyCode) &&
          $.isTopModal() &&
          (null == f || f(e), e.defaultPrevented || P());
      }),
      Y = (0, N.useRef)(),
      X = (0, N.useRef)();
    if (!D) return null;
    let J = Object.assign(
        {
          role: l,
          ref: $.setDialogRef,
          'aria-modal': 'dialog' === l || void 0,
        },
        F,
        { style: i, className: o, tabIndex: -1 }
      ),
      Z = w
        ? w(J)
        : /*#__PURE__*/ (0, S.jsx)(
            'div',
            Object.assign({}, J, {
              children: /*#__PURE__*/ N.cloneElement(s, { role: 'document' }),
            })
          );
    Z = nv(p, h, {
      unmountOnExit: !0,
      mountOnEnter: !0,
      appear: !0,
      in: !!a,
      onExit: R,
      onExiting: L,
      onExited: (...e) => {
        W(!0), null == O || O(...e);
      },
      onEnter: T,
      onEntering: M,
      onEntered: I,
      children: Z,
    });
    let ee = null;
    return (
      u &&
        (ee = nv(m, g, {
          in: !!a,
          appear: !0,
          mountOnEnter: !0,
          unmountOnExit: !0,
          children: (ee = k({ ref: $.setBackdropRef, onClick: q })),
        })),
      /*#__PURE__*/ (0, S.jsx)(S.Fragment, {
        children: /*#__PURE__*/ /*@__PURE__*/ r(E).createPortal(
          /*#__PURE__*/ (0, S.jsxs)(S.Fragment, { children: [ee, Z] }),
          D
        ),
      })
    );
  });
nb.displayName = 'Modal';
var nx = Object.assign(nb, { Manager: ns }),
  N = w('acw62');
const nw = { [tT]: 'show', [tM]: 'show' },
  nk = /*#__PURE__*/ N.forwardRef(
    (
      {
        className: e,
        children: t,
        transitionClasses: n = {},
        onEnter: a,
        ...l
      },
      o
    ) => {
      let i = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          ...l,
        },
        s = (0, N.useCallback)(
          (e, t) => {
            tG(e), null == a || a(e, t);
          },
          [a]
        );
      return /*#__PURE__*/ (0, S.jsx)(tJ, {
        ref: o,
        addEndListener: tQ,
        ...i,
        onEnter: s,
        childRef: t.ref,
        children: (a, l) =>
          /*#__PURE__*/ N.cloneElement(t, {
            ...l,
            className: /*@__PURE__*/ r(C)(
              'fade',
              e,
              t.props.className,
              nw[a],
              n[a]
            ),
          }),
      });
    }
  );
nk.displayName = 'Fade';
var N = w('acw62');
const nS = /*#__PURE__*/ N.forwardRef(
  ({ className: e, bsPrefix: t, as: n = 'div', ...a }, l) => (
    (t = R(t, 'offcanvas-body')),
    /*#__PURE__*/ (0, S.jsx)(n, {
      ref: l,
      className: /*@__PURE__*/ r(C)(e, t),
      ...a,
    })
  )
);
nS.displayName = 'OffcanvasBody';
var N = w('acw62');
const nE = { [tT]: 'show', [tM]: 'show' },
  nC = /*#__PURE__*/ N.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        in: a = !1,
        mountOnEnter: l = !1,
        unmountOnExit: o = !1,
        appear: i = !1,
        ...s
      },
      u
    ) => (
      (e = R(e, 'offcanvas')),
      /*#__PURE__*/ (0, S.jsx)(tJ, {
        ref: u,
        addEndListener: tQ,
        in: a,
        mountOnEnter: l,
        unmountOnExit: o,
        appear: i,
        ...s,
        childRef: n.ref,
        children: (a, l) =>
          /*#__PURE__*/ N.cloneElement(n, {
            ...l,
            className: /*@__PURE__*/ r(C)(
              t,
              n.props.className,
              (a === tT || a === tI) && `${e}-toggling`,
              nE[a]
            ),
          }),
      })
    )
  );
nC.displayName = 'OffcanvasToggling';
var N = w('acw62');
const nN = /*#__PURE__*/ N.createContext({ onHide() {} });
var N = (w('acw62'), w('acw62'), w('acw62'));
const nj = {
    'aria-label': /*@__PURE__*/ r(eR).string,
    onClick: /*@__PURE__*/ r(eR).func,
    variant: /*@__PURE__*/ r(eR).oneOf(['white']),
  },
  n_ = /*#__PURE__*/ N.forwardRef(
    ({ className: e, variant: t, 'aria-label': n = 'Close', ...a }, l) =>
      /*#__PURE__*/ (0, S.jsx)('button', {
        ref: l,
        type: 'button',
        className: /*@__PURE__*/ r(C)('btn-close', t && `btn-close-${t}`, e),
        'aria-label': n,
        ...a,
      })
  );
(n_.displayName = 'CloseButton'), (n_.propTypes = nj);
const nP = /*#__PURE__*/ N.forwardRef(
    (
      {
        closeLabel: e = 'Close',
        closeVariant: t,
        closeButton: n = !1,
        onHide: r,
        children: a,
        ...l
      },
      o
    ) => {
      let i = (0, N.useContext)(nN),
        s = t5(() => {
          null == i || i.onHide(), null == r || r();
        });
      return /*#__PURE__*/ (0, S.jsxs)('div', {
        ref: o,
        ...l,
        children: [
          a,
          n &&
            /*#__PURE__*/ (0, S.jsx)(n_, {
              'aria-label': e,
              variant: t,
              onClick: s,
            }),
        ],
      });
    }
  ),
  nR = /*#__PURE__*/ N.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        closeLabel: n = 'Close',
        closeButton: a = !1,
        ...l
      },
      o
    ) => (
      (e = R(e, 'offcanvas-header')),
      /*#__PURE__*/ (0, S.jsx)(nP, {
        ref: o,
        ...l,
        className: /*@__PURE__*/ r(C)(t, e),
        closeLabel: n,
        closeButton: a,
      })
    )
  );
nR.displayName = 'OffcanvasHeader';
var N = w('acw62');
const nO = eD('h5'),
  nL = /*#__PURE__*/ N.forwardRef(
    ({ className: e, bsPrefix: t, as: n = nO, ...a }, l) => (
      (t = R(t, 'offcanvas-title')),
      /*#__PURE__*/ (0, S.jsx)(n, {
        ref: l,
        className: /*@__PURE__*/ r(C)(e, t),
        ...a,
      })
    )
  );
nL.displayName = 'OffcanvasTitle';
var nT = Function.prototype.bind.call(Function.prototype.call, [].slice);
function nM(e, t) {
  return nT(e.querySelectorAll(t));
}
function nI(e, t) {
  return e
    .replace(RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '');
}
const nF = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler',
};
class nz extends ns {
  adjustAndStore(e, t, n) {
    let r = t.style[e];
    (t.dataset[e] = r), t_(t, { [e]: `${parseFloat(t_(t, e)) + n}px` });
  }
  restore(e, t) {
    let n = t.dataset[e];
    void 0 !== n && (delete t.dataset[e], t_(t, { [e]: n }));
  }
  setContainerStyle(e) {
    var t, n;
    super.setContainerStyle(e);
    let r = this.getElement();
    if (
      ((n = 'modal-open'),
      (t = r).classList
        ? t.classList.add(n)
        : (t.classList
            ? n && t.classList.contains(n)
            : -1 !==
              (' ' + (t.className.baseVal || t.className) + ' ').indexOf(
                ' ' + n + ' '
              )) ||
          ('string' == typeof t.className
            ? (t.className = t.className + ' ' + n)
            : t.setAttribute(
                'class',
                ((t.className && t.className.baseVal) || '') + ' ' + n
              )),
      !e.scrollBarWidth)
    )
      return;
    let a = this.isRTL ? 'paddingLeft' : 'paddingRight',
      l = this.isRTL ? 'marginLeft' : 'marginRight';
    nM(r, nF.FIXED_CONTENT).forEach((t) =>
      this.adjustAndStore(a, t, e.scrollBarWidth)
    ),
      nM(r, nF.STICKY_CONTENT).forEach((t) =>
        this.adjustAndStore(l, t, -e.scrollBarWidth)
      ),
      nM(r, nF.NAVBAR_TOGGLER).forEach((t) =>
        this.adjustAndStore(l, t, e.scrollBarWidth)
      );
  }
  removeContainerStyle(e) {
    var t;
    super.removeContainerStyle(e);
    let n = this.getElement();
    (t = 'modal-open'),
      n.classList
        ? n.classList.remove(t)
        : 'string' == typeof n.className
        ? (n.className = nI(n.className, t))
        : n.setAttribute(
            'class',
            nI((n.className && n.className.baseVal) || '', t)
          );
    let r = this.isRTL ? 'paddingLeft' : 'paddingRight',
      a = this.isRTL ? 'marginLeft' : 'marginRight';
    nM(n, nF.FIXED_CONTENT).forEach((e) => this.restore(r, e)),
      nM(n, nF.STICKY_CONTENT).forEach((e) => this.restore(a, e)),
      nM(n, nF.NAVBAR_TOGGLER).forEach((e) => this.restore(a, e));
  }
}
function nD(e) {
  return t || (t = new nz(e)), t;
}
function n$(e) {
  return /*#__PURE__*/ (0, S.jsx)(nC, { ...e });
}
function nU(e) {
  return /*#__PURE__*/ (0, S.jsx)(nk, { ...e });
}
const nA = /*#__PURE__*/ N.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: n,
      'aria-labelledby': a,
      placement: l = 'start',
      responsive: o,
      show: i = !1,
      backdrop: s = !0,
      keyboard: u = !0,
      scroll: c = !1,
      onEscapeKeyDown: d,
      onShow: f,
      onHide: p,
      container: h,
      autoFocus: m = !0,
      enforceFocus: g = !0,
      restoreFocus: v = !0,
      restoreFocusOptions: y,
      onEntered: b,
      onExit: x,
      onExiting: w,
      onEnter: k,
      onEntering: E,
      onExited: j,
      backdropClassName: _,
      manager: P,
      renderStaticNode: O = !1,
      ...L
    },
    T
  ) => {
    let M = (0, N.useRef)();
    e = R(e, 'offcanvas');
    let { onToggle: I } = (0, N.useContext)(t3) || {},
      [F, z] = (0, N.useState)(!1),
      D = nn(o || 'xs', 'up');
    (0, N.useEffect)(() => {
      z(o ? i && !D : i);
    }, [i, o, D]);
    let $ = t5(() => {
        null == I || I(), null == p || p();
      }),
      U = (0, N.useMemo)(() => ({ onHide: $ }), [$]),
      A = (0, N.useCallback)(
        (t) =>
          /*#__PURE__*/ (0, S.jsx)('div', {
            ...t,
            className: /*@__PURE__*/ r(C)(`${e}-backdrop`, _),
          }),
        [_, e]
      ),
      B = (i) =>
        /*#__PURE__*/ (0, S.jsx)('div', {
          ...i,
          ...L,
          className: /*@__PURE__*/ r(C)(t, o ? `${e}-${o}` : e, `${e}-${l}`),
          'aria-labelledby': a,
          children: n,
        });
    return /*#__PURE__*/ (0, S.jsxs)(S.Fragment, {
      children: [
        !F && (o || O) && B({}),
        /*#__PURE__*/ (0, S.jsx)(nN.Provider, {
          value: U,
          children: /*#__PURE__*/ (0, S.jsx)(nx, {
            show: F,
            ref: T,
            backdrop: s,
            container: h,
            keyboard: u,
            autoFocus: m,
            enforceFocus: g && !c,
            restoreFocus: v,
            restoreFocusOptions: y,
            onEscapeKeyDown: d,
            onShow: f,
            onHide: $,
            onEnter: (e, ...t) => {
              e && (e.style.visibility = 'visible'), null == k || k(e, ...t);
            },
            onEntering: E,
            onEntered: b,
            onExit: x,
            onExiting: w,
            onExited: (e, ...t) => {
              e && (e.style.visibility = ''), null == j || j(...t);
            },
            manager:
              P ||
              (c
                ? (M.current ||
                    (M.current = new nz({ handleContainerOverflow: !1 })),
                  M.current)
                : nD()),
            transition: n$,
            backdropTransition: nU,
            renderBackdrop: A,
            renderDialog: B,
          }),
        }),
      ],
    });
  }
);
nA.displayName = 'Offcanvas';
var nB = Object.assign(nA, { Body: nS, Header: nR, Title: nL });
const nW = /*#__PURE__*/ N.forwardRef((e, t) => {
  let n = (0, N.useContext)(t3);
  return /*#__PURE__*/ (0, S.jsx)(nB, {
    ref: t,
    show: !!(null != n && n.expanded),
    ...e,
    renderStaticNode: !0,
  });
});
nW.displayName = 'NavbarOffcanvas';
var N = w('acw62');
const nV = /*#__PURE__*/ N.forwardRef(
  ({ className: e, bsPrefix: t, as: n = 'span', ...a }, l) => (
    (t = R(t, 'navbar-text')),
    /*#__PURE__*/ (0, S.jsx)(n, {
      ref: l,
      className: /*@__PURE__*/ r(C)(e, t),
      ...a,
    })
  )
);
nV.displayName = 'NavbarText';
const nH = /*#__PURE__*/ N.forwardRef((e, t) => {
  let {
      bsPrefix: n,
      expand: a = !0,
      variant: l = 'light',
      bg: o,
      fixed: i,
      sticky: s,
      className: u,
      as: c = 'nav',
      expanded: d,
      onToggle: f,
      onSelect: p,
      collapseOnSelect: h = !1,
      ...m
    } = tx(e, { expanded: 'onToggle' }),
    g = R(n, 'navbar'),
    v = (0, N.useCallback)(
      (...e) => {
        null == p || p(...e), h && d && (null == f || f(!1));
      },
      [p, h, d, f]
    );
  void 0 === m.role && 'nav' !== c && (m.role = 'navigation');
  let y = `${g}-expand`;
  'string' == typeof a && (y = `${y}-${a}`);
  let b = (0, N.useMemo)(
    () => ({
      onToggle: () => (null == f ? void 0 : f(!d)),
      bsPrefix: g,
      expanded: !!d,
      expand: a,
    }),
    [g, d, a, f]
  );
  return /*#__PURE__*/ (0, S.jsx)(t3.Provider, {
    value: b,
    children: /*#__PURE__*/ (0, S.jsx)(th.Provider, {
      value: v,
      children: /*#__PURE__*/ (0, S.jsx)(c, {
        ref: t,
        ...m,
        className: /*@__PURE__*/ r(C)(
          u,
          g,
          a && y,
          l && `${g}-${l}`,
          o && `bg-${o}`,
          s && `sticky-${s}`,
          i && `fixed-${i}`
        ),
      }),
    }),
  });
});
nH.displayName = 'Navbar';
var nK = Object.assign(nH, {
    Brand: tk,
    Collapse: t6,
    Offcanvas: nW,
    Text: nV,
    Toggle: t8,
  }),
  nQ = {};
Object.defineProperty(nQ, '__esModule', { value: !0 }),
  (nQ.default = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return (0, nG.default)(function () {
      for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
      var a = null;
      return (
        t.forEach(function (e) {
          if (null == a) {
            var t = e.apply(void 0, n);
            null != t && (a = t);
          }
        }),
        a
      );
    });
  });
var nq = {};
Object.defineProperty(nq, '__esModule', { value: !0 }),
  (nq.default = function (e) {
    function t(t, n, r, a, l, o) {
      var i = a || '<<anonymous>>',
        s = o || r;
      if (null == n[r])
        return t
          ? Error(
              'Required ' + l + ' `' + s + '` was not specified in `' + i + '`.'
            )
          : null;
      for (
        var u = arguments.length, c = Array(u > 6 ? u - 6 : 0), d = 6;
        d < u;
        d++
      )
        c[d - 6] = arguments[d];
      return e.apply(void 0, [n, r, i, l, s].concat(c));
    }
    var n = t.bind(null, !1);
    return (n.isRequired = t.bind(null, !0)), n;
  });
var nG = (a = nq = nq.default) && a.__esModule ? a : { default: a };
nQ = nQ.default;
var N = (w('acw62'), w('acw62'), w('acw62'), w('acw62'));
const nY = /*#__PURE__*/ N.createContext(null);
nY.displayName = 'NavContext';
var N = w('acw62');
const nX = /*#__PURE__*/ N.createContext(null);
var N = w('acw62');
const nJ = ['as', 'active', 'eventKey'];
function nZ({ key: e, onClick: t, active: n, id: r, role: a, disabled: l }) {
  let o = (0, N.useContext)(th),
    i = (0, N.useContext)(nY),
    s = (0, N.useContext)(nX),
    u = n,
    c = { role: a };
  if (i) {
    a || 'tablist' !== i.role || (c.role = 'tab');
    let t = i.getControllerId(null != e ? e : null),
      l = i.getControlledId(null != e ? e : null);
    (c[no('event-key')] = e),
      (c.id = t || r),
      ((u = null == n && null != e ? i.activeKey === e : n) ||
        (!(null != s && s.unmountOnExit) && !(null != s && s.mountOnEnter))) &&
        (c['aria-controls'] = l);
  }
  return (
    'tab' === c.role &&
      ((c['aria-selected'] = u),
      u || (c.tabIndex = -1),
      l && ((c.tabIndex = -1), (c['aria-disabled'] = !0))),
    (c.onClick = t5((n) => {
      l ||
        (null == t || t(n),
        null != e && o && !n.isPropagationStopped() && o(e, n));
    })),
    [c, { isActive: u }]
  );
}
const n0 = /*#__PURE__*/ N.forwardRef((e, t) => {
  let { as: n = eY, active: r, eventKey: a } = e,
    l = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        a = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++)
        (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
    })(e, nJ),
    [o, i] = nZ(Object.assign({ key: tm(a, l.href), active: r }, l));
  return (
    (o[no('active')] = i.isActive),
    /*#__PURE__*/ (0, S.jsx)(n, Object.assign({}, l, o, { ref: t }))
  );
});
n0.displayName = 'NavItem';
const n1 = ['as', 'onSelect', 'activeKey', 'role', 'onKeyDown'],
  n2 = () => {},
  n3 = no('event-key'),
  n6 = /*#__PURE__*/ N.forwardRef((e, t) => {
    let n,
      r,
      { as: a = 'div', onSelect: l, activeKey: o, role: i, onKeyDown: s } = e,
      u = (function (e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++)
          (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      })(e, n1),
      c = (function () {
        let [, e] = (0, N.useReducer)((e) => !e, !1);
        return e;
      })(),
      d = (0, N.useRef)(!1),
      f = (0, N.useContext)(th),
      p = (0, N.useContext)(nX);
    p &&
      ((i = i || 'tablist'),
      (o = p.activeKey),
      (n = p.getControlledId),
      (r = p.getControllerId));
    let h = (0, N.useRef)(null),
      m = (e) => {
        let t = h.current;
        if (!t) return null;
        let n = nM(t, `[${n3}]:not([aria-disabled=true])`),
          r = t.querySelector('[aria-selected=true]');
        if (!r || r !== document.activeElement) return null;
        let a = n.indexOf(r);
        if (-1 === a) return null;
        let l = a + e;
        return l >= n.length && (l = 0), l < 0 && (l = n.length - 1), n[l];
      },
      g = (e, t) => {
        null != e && (null == l || l(e, t), null == f || f(e, t));
      };
    (0, N.useEffect)(() => {
      if (h.current && d.current) {
        let e = h.current.querySelector(`[${n3}][aria-selected=true]`);
        null == e || e.focus();
      }
      d.current = !1;
    });
    let v = tX(t, h);
    return /*#__PURE__*/ (0, S.jsx)(th.Provider, {
      value: g,
      children: /*#__PURE__*/ (0, S.jsx)(nY.Provider, {
        value: {
          role: i,
          activeKey: tm(o),
          getControlledId: n || n2,
          getControllerId: r || n2,
        },
        children: /*#__PURE__*/ (0, S.jsx)(
          a,
          Object.assign({}, u, {
            onKeyDown: (e) => {
              let t;
              if ((null == s || s(e), p)) {
                switch (e.key) {
                  case 'ArrowLeft':
                  case 'ArrowUp':
                    t = m(-1);
                    break;
                  case 'ArrowRight':
                  case 'ArrowDown':
                    t = m(1);
                    break;
                  default:
                    return;
                }
                t &&
                  (e.preventDefault(),
                  g(t.dataset.rrUiEventKey || null, e),
                  (d.current = !0),
                  c());
              }
            },
            ref: v,
            role: i,
          })
        ),
      }),
    });
  });
n6.displayName = 'Nav';
var n4 = Object.assign(n6, { Item: n0 }),
  N = w('acw62');
const n5 = /*#__PURE__*/ N.forwardRef(
  ({ className: e, bsPrefix: t, as: n = 'div', ...a }, l) => (
    (t = R(t, 'nav-item')),
    /*#__PURE__*/ (0, S.jsx)(n, {
      ref: l,
      className: /*@__PURE__*/ r(C)(e, t),
      ...a,
    })
  )
);
n5.displayName = 'NavItem';
var N =
  (w('acw62'),
  w('acw62'),
  w('acw62'),
  w('acw62'),
  w('acw62'),
  w('acw62'),
  w('acw62'),
  w('acw62'),
  w('acw62'),
  w('acw62'));
new WeakMap();
const n8 = ['onKeyDown'],
  n9 = /*#__PURE__*/ N.forwardRef((e, t) => {
    var n;
    let { onKeyDown: r } = e,
      a = (function (e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++)
          (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      })(e, n8),
      [l] = eG(Object.assign({ tagName: 'a' }, a)),
      o = t5((e) => {
        l.onKeyDown(e), null == r || r(e);
      });
    return (n = a.href) && '#' !== n.trim() && 'button' !== a.role
      ? /*#__PURE__*/ (0, S.jsx)(
          'a',
          Object.assign({ ref: t }, a, { onKeyDown: r })
        )
      : /*#__PURE__*/ (0, S.jsx)(
          'a',
          Object.assign({ ref: t }, a, l, { onKeyDown: o })
        );
  });
n9.displayName = 'Anchor';
var n7 = n9;
const re = /*#__PURE__*/ N.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      as: n = n7,
      active: a,
      eventKey: l,
      disabled: o = !1,
      ...i
    },
    s
  ) => {
    e = R(e, 'nav-link');
    let [u, c] = nZ({ key: tm(l, i.href), active: a, disabled: o, ...i });
    return /*#__PURE__*/ (0, S.jsx)(n, {
      ...i,
      ...u,
      ref: s,
      disabled: o,
      className: /*@__PURE__*/ r(C)(
        t,
        e,
        o && 'disabled',
        c.isActive && 'active'
      ),
    });
  }
);
re.displayName = 'NavLink';
const rt = /*#__PURE__*/ N.forwardRef((e, t) => {
  let n, a;
  let {
      as: l = 'div',
      bsPrefix: o,
      variant: i,
      fill: s = !1,
      justify: u = !1,
      navbar: c,
      navbarScroll: d,
      className: f,
      activeKey: p,
      ...h
    } = tx(e, { activeKey: 'onSelect' }),
    m = R(o, 'nav'),
    g = !1,
    v = (0, N.useContext)(t3),
    y = (0, N.useContext)(eT);
  return (
    v
      ? ((n = v.bsPrefix), (g = null == c || c))
      : y && ({ cardHeaderBsPrefix: a } = y),
    /*#__PURE__*/ (0, S.jsx)(n4, {
      as: l,
      ref: t,
      activeKey: p,
      className: /*@__PURE__*/ r(C)(f, {
        [m]: !g,
        [`${n}-nav`]: g,
        [`${n}-nav-scroll`]: g && d,
        [`${a}-${i}`]: !!a,
        [`${m}-${i}`]: !!i,
        [`${m}-fill`]: s,
        [`${m}-justified`]: u,
      }),
      ...h,
    })
  );
});
rt.displayName = 'Nav';
var rn = Object.assign(rt, { Item: n5, Link: re });
function rr(e) {
  return Array.isArray ? Array.isArray(e) : '[object Array]' === rc(e);
}
const ra = 1 / 0;
function rl(e) {
  return 'string' == typeof e;
}
function ro(e) {
  return 'number' == typeof e;
}
function ri(e) {
  return 'object' == typeof e;
}
function rs(e) {
  return null != e;
}
function ru(e) {
  return !e.trim().length;
}
function rc(e) {
  return null == e
    ? void 0 === e
      ? '[object Undefined]'
      : '[object Null]'
    : Object.prototype.toString.call(e);
}
const rd = (e) => `Invalid value for key ${e}`,
  rf = (e) => `Pattern length exceeds max of ${e}.`,
  rp = (e) => `Missing ${e} property in key`,
  rh = (e) => `Property 'weight' in key '${e}' must be a positive integer`,
  rm = Object.prototype.hasOwnProperty;
class rg {
  constructor(e) {
    (this._keys = []), (this._keyMap = {});
    let t = 0;
    e.forEach((e) => {
      let n = rv(e);
      this._keys.push(n), (this._keyMap[n.id] = n), (t += n.weight);
    }),
      this._keys.forEach((e) => {
        e.weight /= t;
      });
  }
  get(e) {
    return this._keyMap[e];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function rv(e) {
  let t = null,
    n = null,
    r = null,
    a = 1,
    l = null;
  if (rl(e) || rr(e)) (r = e), (t = ry(e)), (n = rb(e));
  else {
    if (!rm.call(e, 'name')) throw Error(rp('name'));
    let o = e.name;
    if (((r = o), rm.call(e, 'weight') && (a = e.weight) <= 0))
      throw Error(rh(o));
    (t = ry(o)), (n = rb(o)), (l = e.getFn);
  }
  return { path: t, id: n, weight: a, src: r, getFn: l };
}
function ry(e) {
  return rr(e) ? e : e.split('.');
}
function rb(e) {
  return rr(e) ? e.join('.') : e;
}
var rx = {
  isCaseSensitive: !1,
  includeScore: !1,
  keys: [],
  shouldSort: !0,
  sortFn: (e, t) =>
    e.score === t.score ? (e.idx < t.idx ? -1 : 1) : e.score < t.score ? -1 : 1,
  includeMatches: !1,
  findAllMatches: !1,
  minMatchCharLength: 1,
  location: 0,
  threshold: 0.6,
  distance: 100,
  useExtendedSearch: !1,
  getFn: function (e, t) {
    let n = [],
      r = !1,
      a = (e, t, l) => {
        if (rs(e)) {
          if (t[l]) {
            var o, i;
            let s = e[t[l]];
            if (rs(s)) {
              if (
                l === t.length - 1 &&
                (rl(s) ||
                  ro(s) ||
                  !0 === (o = s) ||
                  !1 === o ||
                  (ri((i = o)) && null !== i && '[object Boolean]' == rc(o)))
              )
                n.push(
                  null == s
                    ? ''
                    : (function (e) {
                        if ('string' == typeof e) return e;
                        let t = e + '';
                        return '0' == t && 1 / e == -ra ? '-0' : t;
                      })(s)
                );
              else if (rr(s)) {
                r = !0;
                for (let e = 0, n = s.length; e < n; e += 1) a(s[e], t, l + 1);
              } else t.length && a(s, t, l + 1);
            }
          } else n.push(e);
        }
      };
    return a(e, rl(t) ? t.split('.') : t, 0), r ? n : n[0];
  },
  ignoreLocation: !1,
  ignoreFieldNorm: !1,
  fieldNormWeight: 1,
};
const rw = /[^ ]+/g;
class rk {
  constructor({
    getFn: e = rx.getFn,
    fieldNormWeight: t = rx.fieldNormWeight,
  } = {}) {
    (this.norm = (function (e = 1, t = 3) {
      let n = new Map(),
        r = Math.pow(10, t);
      return {
        get(t) {
          let a = t.match(rw).length;
          if (n.has(a)) return n.get(a);
          let l = parseFloat(Math.round((1 / Math.pow(a, 0.5 * e)) * r) / r);
          return n.set(a, l), l;
        },
        clear() {
          n.clear();
        },
      };
    })(t, 3)),
      (this.getFn = e),
      (this.isCreated = !1),
      this.setIndexRecords();
  }
  setSources(e = []) {
    this.docs = e;
  }
  setIndexRecords(e = []) {
    this.records = e;
  }
  setKeys(e = []) {
    (this.keys = e),
      (this._keysMap = {}),
      e.forEach((e, t) => {
        this._keysMap[e.id] = t;
      });
  }
  create() {
    !this.isCreated &&
      this.docs.length &&
      ((this.isCreated = !0),
      rl(this.docs[0])
        ? this.docs.forEach((e, t) => {
            this._addString(e, t);
          })
        : this.docs.forEach((e, t) => {
            this._addObject(e, t);
          }),
      this.norm.clear());
  }
  add(e) {
    let t = this.size();
    rl(e) ? this._addString(e, t) : this._addObject(e, t);
  }
  removeAt(e) {
    this.records.splice(e, 1);
    for (let t = e, n = this.size(); t < n; t += 1) this.records[t].i -= 1;
  }
  getValueForItemAtKeyId(e, t) {
    return e[this._keysMap[t]];
  }
  size() {
    return this.records.length;
  }
  _addString(e, t) {
    if (!rs(e) || ru(e)) return;
    let n = { v: e, i: t, n: this.norm.get(e) };
    this.records.push(n);
  }
  _addObject(e, t) {
    let n = { i: t, $: {} };
    this.keys.forEach((t, r) => {
      let a = t.getFn ? t.getFn(e) : this.getFn(e, t.path);
      if (rs(a)) {
        if (rr(a)) {
          let e = [],
            t = [{ nestedArrIndex: -1, value: a }];
          for (; t.length; ) {
            let { nestedArrIndex: n, value: r } = t.pop();
            if (rs(r)) {
              if (rl(r) && !ru(r)) {
                let t = { v: r, i: n, n: this.norm.get(r) };
                e.push(t);
              } else
                rr(r) &&
                  r.forEach((e, n) => {
                    t.push({ nestedArrIndex: n, value: e });
                  });
            }
          }
          n.$[r] = e;
        } else if (rl(a) && !ru(a)) {
          let e = { v: a, n: this.norm.get(a) };
          n.$[r] = e;
        }
      }
    }),
      this.records.push(n);
  }
  toJSON() {
    return { keys: this.keys, records: this.records };
  }
}
function rS(
  e,
  t,
  { getFn: n = rx.getFn, fieldNormWeight: r = rx.fieldNormWeight } = {}
) {
  let a = new rk({ getFn: n, fieldNormWeight: r });
  return a.setKeys(e.map(rv)), a.setSources(t), a.create(), a;
}
function rE(
  e,
  {
    errors: t = 0,
    currentLocation: n = 0,
    expectedLocation: r = 0,
    distance: a = rx.distance,
    ignoreLocation: l = rx.ignoreLocation,
  } = {}
) {
  let o = t / e.length;
  if (l) return o;
  let i = Math.abs(r - n);
  return a ? o + i / a : i ? 1 : o;
}
class rC {
  constructor(
    e,
    {
      location: t = rx.location,
      threshold: n = rx.threshold,
      distance: r = rx.distance,
      includeMatches: a = rx.includeMatches,
      findAllMatches: l = rx.findAllMatches,
      minMatchCharLength: o = rx.minMatchCharLength,
      isCaseSensitive: i = rx.isCaseSensitive,
      ignoreLocation: s = rx.ignoreLocation,
    } = {}
  ) {
    if (
      ((this.options = {
        location: t,
        threshold: n,
        distance: r,
        includeMatches: a,
        findAllMatches: l,
        minMatchCharLength: o,
        isCaseSensitive: i,
        ignoreLocation: s,
      }),
      (this.pattern = i ? e : e.toLowerCase()),
      (this.chunks = []),
      !this.pattern.length)
    )
      return;
    let u = (e, t) => {
        this.chunks.push({
          pattern: e,
          alphabet: (function (e) {
            let t = {};
            for (let n = 0, r = e.length; n < r; n += 1) {
              let a = e.charAt(n);
              t[a] = (t[a] || 0) | (1 << (r - n - 1));
            }
            return t;
          })(e),
          startIndex: t,
        });
      },
      c = this.pattern.length;
    if (c > 32) {
      let e = 0,
        t = c % 32,
        n = c - t;
      for (; e < n; ) u(this.pattern.substr(e, 32), e), (e += 32);
      if (t) {
        let e = c - 32;
        u(this.pattern.substr(e), e);
      }
    } else u(this.pattern, 0);
  }
  searchIn(e) {
    let { isCaseSensitive: t, includeMatches: n } = this.options;
    if ((t || (e = e.toLowerCase()), this.pattern === e)) {
      let t = { isMatch: !0, score: 0 };
      return n && (t.indices = [[0, e.length - 1]]), t;
    }
    let {
        location: r,
        distance: a,
        threshold: l,
        findAllMatches: o,
        minMatchCharLength: i,
        ignoreLocation: s,
      } = this.options,
      u = [],
      c = 0,
      d = !1;
    this.chunks.forEach(({ pattern: t, alphabet: f, startIndex: p }) => {
      let {
        isMatch: h,
        score: m,
        indices: g,
      } = (function (
        e,
        t,
        n,
        {
          location: r = rx.location,
          distance: a = rx.distance,
          threshold: l = rx.threshold,
          findAllMatches: o = rx.findAllMatches,
          minMatchCharLength: i = rx.minMatchCharLength,
          includeMatches: s = rx.includeMatches,
          ignoreLocation: u = rx.ignoreLocation,
        } = {}
      ) {
        let c;
        if (t.length > 32) throw Error(rf(32));
        let d = t.length,
          f = e.length,
          p = Math.max(0, Math.min(r, f)),
          h = l,
          m = p,
          g = i > 1 || s,
          v = g ? Array(f) : [];
        for (; (c = e.indexOf(t, m)) > -1; )
          if (
            ((h = Math.min(
              rE(t, {
                currentLocation: c,
                expectedLocation: p,
                distance: a,
                ignoreLocation: u,
              }),
              h
            )),
            (m = c + d),
            g)
          ) {
            let e = 0;
            for (; e < d; ) (v[c + e] = 1), (e += 1);
          }
        m = -1;
        let y = [],
          b = 1,
          x = d + f,
          w = 1 << (d - 1);
        for (let r = 0; r < d; r += 1) {
          let l = 0,
            i = x;
          for (; l < i; )
            rE(t, {
              errors: r,
              currentLocation: p + i,
              expectedLocation: p,
              distance: a,
              ignoreLocation: u,
            }) <= h
              ? (l = i)
              : (x = i),
              (i = Math.floor((x - l) / 2 + l));
          x = i;
          let s = Math.max(1, p - i + 1),
            c = o ? f : Math.min(p + i, f) + d,
            k = Array(c + 2);
          k[c + 1] = (1 << r) - 1;
          for (let l = c; l >= s; l -= 1) {
            let o = l - 1,
              i = n[e.charAt(o)];
            if (
              (g && (v[o] = +!!i),
              (k[l] = ((k[l + 1] << 1) | 1) & i),
              r && (k[l] |= ((y[l + 1] | y[l]) << 1) | 1 | y[l + 1]),
              k[l] & w &&
                (b = rE(t, {
                  errors: r,
                  currentLocation: o,
                  expectedLocation: p,
                  distance: a,
                  ignoreLocation: u,
                })) <= h)
            ) {
              if (((h = b), (m = o) <= p)) break;
              s = Math.max(1, 2 * p - m);
            }
          }
          if (
            rE(t, {
              errors: r + 1,
              currentLocation: p,
              expectedLocation: p,
              distance: a,
              ignoreLocation: u,
            }) > h
          )
            break;
          y = k;
        }
        let k = { isMatch: m >= 0, score: Math.max(0.001, b) };
        if (g) {
          let e = (function (e = [], t = rx.minMatchCharLength) {
            let n = [],
              r = -1,
              a = -1,
              l = 0;
            for (let o = e.length; l < o; l += 1) {
              let o = e[l];
              o && -1 === r
                ? (r = l)
                : o ||
                  -1 === r ||
                  ((a = l - 1) - r + 1 >= t && n.push([r, a]), (r = -1));
            }
            return e[l - 1] && l - r >= t && n.push([r, l - 1]), n;
          })(v, i);
          e.length ? s && (k.indices = e) : (k.isMatch = !1);
        }
        return k;
      })(e, t, f, {
        location: r + p,
        distance: a,
        threshold: l,
        findAllMatches: o,
        minMatchCharLength: i,
        includeMatches: n,
        ignoreLocation: s,
      });
      h && (d = !0), (c += m), h && g && (u = [...u, ...g]);
    });
    let f = { isMatch: d, score: d ? c / this.chunks.length : 1 };
    return d && n && (f.indices = u), f;
  }
}
class rN {
  constructor(e) {
    this.pattern = e;
  }
  static isMultiMatch(e) {
    return rj(e, this.multiRegex);
  }
  static isSingleMatch(e) {
    return rj(e, this.singleRegex);
  }
  search() {}
}
function rj(e, t) {
  let n = e.match(t);
  return n ? n[1] : null;
}
class r_ extends rN {
  constructor(
    e,
    {
      location: t = rx.location,
      threshold: n = rx.threshold,
      distance: r = rx.distance,
      includeMatches: a = rx.includeMatches,
      findAllMatches: l = rx.findAllMatches,
      minMatchCharLength: o = rx.minMatchCharLength,
      isCaseSensitive: i = rx.isCaseSensitive,
      ignoreLocation: s = rx.ignoreLocation,
    } = {}
  ) {
    super(e),
      (this._bitapSearch = new rC(e, {
        location: t,
        threshold: n,
        distance: r,
        includeMatches: a,
        findAllMatches: l,
        minMatchCharLength: o,
        isCaseSensitive: i,
        ignoreLocation: s,
      }));
  }
  static get type() {
    return 'fuzzy';
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(e) {
    return this._bitapSearch.searchIn(e);
  }
}
class rP extends rN {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'include';
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(e) {
    let t,
      n = 0,
      r = [],
      a = this.pattern.length;
    for (; (t = e.indexOf(this.pattern, n)) > -1; )
      (n = t + a), r.push([t, n - 1]);
    let l = !!r.length;
    return { isMatch: l, score: l ? 0 : 1, indices: r };
  }
}
const rR = [
    class extends rN {
      constructor(e) {
        super(e);
      }
      static get type() {
        return 'exact';
      }
      static get multiRegex() {
        return /^="(.*)"$/;
      }
      static get singleRegex() {
        return /^=(.*)$/;
      }
      search(e) {
        let t = e === this.pattern;
        return {
          isMatch: t,
          score: t ? 0 : 1,
          indices: [0, this.pattern.length - 1],
        };
      }
    },
    rP,
    class extends rN {
      constructor(e) {
        super(e);
      }
      static get type() {
        return 'prefix-exact';
      }
      static get multiRegex() {
        return /^\^"(.*)"$/;
      }
      static get singleRegex() {
        return /^\^(.*)$/;
      }
      search(e) {
        let t = e.startsWith(this.pattern);
        return {
          isMatch: t,
          score: t ? 0 : 1,
          indices: [0, this.pattern.length - 1],
        };
      }
    },
    class extends rN {
      constructor(e) {
        super(e);
      }
      static get type() {
        return 'inverse-prefix-exact';
      }
      static get multiRegex() {
        return /^!\^"(.*)"$/;
      }
      static get singleRegex() {
        return /^!\^(.*)$/;
      }
      search(e) {
        let t = !e.startsWith(this.pattern);
        return { isMatch: t, score: t ? 0 : 1, indices: [0, e.length - 1] };
      }
    },
    class extends rN {
      constructor(e) {
        super(e);
      }
      static get type() {
        return 'inverse-suffix-exact';
      }
      static get multiRegex() {
        return /^!"(.*)"\$$/;
      }
      static get singleRegex() {
        return /^!(.*)\$$/;
      }
      search(e) {
        let t = !e.endsWith(this.pattern);
        return { isMatch: t, score: t ? 0 : 1, indices: [0, e.length - 1] };
      }
    },
    class extends rN {
      constructor(e) {
        super(e);
      }
      static get type() {
        return 'suffix-exact';
      }
      static get multiRegex() {
        return /^"(.*)"\$$/;
      }
      static get singleRegex() {
        return /^(.*)\$$/;
      }
      search(e) {
        let t = e.endsWith(this.pattern);
        return {
          isMatch: t,
          score: t ? 0 : 1,
          indices: [e.length - this.pattern.length, e.length - 1],
        };
      }
    },
    class extends rN {
      constructor(e) {
        super(e);
      }
      static get type() {
        return 'inverse-exact';
      }
      static get multiRegex() {
        return /^!"(.*)"$/;
      }
      static get singleRegex() {
        return /^!(.*)$/;
      }
      search(e) {
        let t = -1 === e.indexOf(this.pattern);
        return { isMatch: t, score: t ? 0 : 1, indices: [0, e.length - 1] };
      }
    },
    r_,
  ],
  rO = rR.length,
  rL = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
  rT = new Set([r_.type, rP.type]),
  rM = [];
function rI(e, t) {
  for (let n = 0, r = rM.length; n < r; n += 1) {
    let r = rM[n];
    if (r.condition(e, t)) return new r(e, t);
  }
  return new rC(e, t);
}
const rF = { AND: '$and', OR: '$or' },
  rz = { PATH: '$path', PATTERN: '$val' },
  rD = (e) => !!(e[rF.AND] || e[rF.OR]),
  r$ = (e) => !!e[rz.PATH],
  rU = (e) => !rr(e) && ri(e) && !rD(e),
  rA = (e) => ({ [rF.AND]: Object.keys(e).map((t) => ({ [t]: e[t] })) });
function rB(e, t, { auto: n = !0 } = {}) {
  let r = (e) => {
    let a = Object.keys(e),
      l = r$(e);
    if (!l && a.length > 1 && !rD(e)) return r(rA(e));
    if (rU(e)) {
      let r = l ? e[rz.PATH] : a[0],
        o = l ? e[rz.PATTERN] : e[r];
      if (!rl(o)) throw Error(rd(r));
      let i = { keyId: rb(r), pattern: o };
      return n && (i.searcher = rI(o, t)), i;
    }
    let o = { children: [], operator: a[0] };
    return (
      a.forEach((t) => {
        let n = e[t];
        rr(n) &&
          n.forEach((e) => {
            o.children.push(r(e));
          });
      }),
      o
    );
  };
  return rD(e) || (e = rA(e)), r(e);
}
function rW(e, t) {
  let n = e.matches;
  (t.matches = []),
    rs(n) &&
      n.forEach((e) => {
        if (!rs(e.indices) || !e.indices.length) return;
        let { indices: n, value: r } = e,
          a = { indices: n, value: r };
        e.key && (a.key = e.key.src),
          e.idx > -1 && (a.refIndex = e.idx),
          t.matches.push(a);
      });
}
function rV(e, t) {
  t.score = e.score;
}
class rH {
  constructor(e, t = {}, n) {
    (this.options = { ...rx, ...t }),
      this.options.useExtendedSearch,
      (this._keyStore = new rg(this.options.keys)),
      this.setCollection(e, n);
  }
  setCollection(e, t) {
    if (((this._docs = e), t && !(t instanceof rk)))
      throw Error("Incorrect 'index' type");
    this._myIndex =
      t ||
      rS(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight,
      });
  }
  add(e) {
    rs(e) && (this._docs.push(e), this._myIndex.add(e));
  }
  remove(e = () => !1) {
    let t = [];
    for (let n = 0, r = this._docs.length; n < r; n += 1) {
      let a = this._docs[n];
      e(a, n) && (this.removeAt(n), (n -= 1), (r -= 1), t.push(a));
    }
    return t;
  }
  removeAt(e) {
    this._docs.splice(e, 1), this._myIndex.removeAt(e);
  }
  getIndex() {
    return this._myIndex;
  }
  search(e, { limit: t = -1 } = {}) {
    let {
        includeMatches: n,
        includeScore: r,
        shouldSort: a,
        sortFn: l,
        ignoreFieldNorm: o,
      } = this.options,
      i = rl(e)
        ? rl(this._docs[0])
          ? this._searchStringList(e)
          : this._searchObjectList(e)
        : this._searchLogical(e);
    return (
      !(function (e, { ignoreFieldNorm: t = rx.ignoreFieldNorm }) {
        e.forEach((e) => {
          let n = 1;
          e.matches.forEach(({ key: e, norm: r, score: a }) => {
            let l = e ? e.weight : null;
            n *= Math.pow(
              0 === a && l ? Number.EPSILON : a,
              (l || 1) * (t ? 1 : r)
            );
          }),
            (e.score = n);
        });
      })(i, { ignoreFieldNorm: o }),
      a && i.sort(l),
      ro(t) && t > -1 && (i = i.slice(0, t)),
      (function (
        e,
        t,
        {
          includeMatches: n = rx.includeMatches,
          includeScore: r = rx.includeScore,
        } = {}
      ) {
        let a = [];
        return (
          n && a.push(rW),
          r && a.push(rV),
          e.map((e) => {
            let { idx: n } = e,
              r = { item: t[n], refIndex: n };
            return (
              a.length &&
                a.forEach((t) => {
                  t(e, r);
                }),
              r
            );
          })
        );
      })(i, this._docs, { includeMatches: n, includeScore: r })
    );
  }
  _searchStringList(e) {
    let t = rI(e, this.options),
      { records: n } = this._myIndex,
      r = [];
    return (
      n.forEach(({ v: e, i: n, n: a }) => {
        if (!rs(e)) return;
        let { isMatch: l, score: o, indices: i } = t.searchIn(e);
        l &&
          r.push({
            item: e,
            idx: n,
            matches: [{ score: o, value: e, norm: a, indices: i }],
          });
      }),
      r
    );
  }
  _searchLogical(e) {
    let t = rB(e, this.options),
      n = (e, t, r) => {
        if (!e.children) {
          let { keyId: n, searcher: a } = e,
            l = this._findMatches({
              key: this._keyStore.get(n),
              value: this._myIndex.getValueForItemAtKeyId(t, n),
              searcher: a,
            });
          return l && l.length ? [{ idx: r, item: t, matches: l }] : [];
        }
        let a = [];
        for (let l = 0, o = e.children.length; l < o; l += 1) {
          let o = n(e.children[l], t, r);
          if (o.length) a.push(...o);
          else if (e.operator === rF.AND) return [];
        }
        return a;
      },
      r = this._myIndex.records,
      a = {},
      l = [];
    return (
      r.forEach(({ $: e, i: r }) => {
        if (rs(e)) {
          let o = n(t, e, r);
          o.length &&
            (a[r] || ((a[r] = { idx: r, item: e, matches: [] }), l.push(a[r])),
            o.forEach(({ matches: e }) => {
              a[r].matches.push(...e);
            }));
        }
      }),
      l
    );
  }
  _searchObjectList(e) {
    let t = rI(e, this.options),
      { keys: n, records: r } = this._myIndex,
      a = [];
    return (
      r.forEach(({ $: e, i: r }) => {
        if (!rs(e)) return;
        let l = [];
        n.forEach((n, r) => {
          l.push(...this._findMatches({ key: n, value: e[r], searcher: t }));
        }),
          l.length && a.push({ idx: r, item: e, matches: l });
      }),
      a
    );
  }
  _findMatches({ key: e, value: t, searcher: n }) {
    if (!rs(t)) return [];
    let r = [];
    if (rr(t))
      t.forEach(({ v: t, i: a, n: l }) => {
        if (!rs(t)) return;
        let { isMatch: o, score: i, indices: s } = n.searchIn(t);
        o &&
          r.push({ score: i, key: e, value: t, idx: a, norm: l, indices: s });
      });
    else {
      let { v: a, n: l } = t,
        { isMatch: o, score: i, indices: s } = n.searchIn(a);
      o && r.push({ score: i, key: e, value: a, norm: l, indices: s });
    }
    return r;
  }
}
(rH.version = '7.0.0'),
  (rH.createIndex = rS),
  (rH.parseIndex = function (
    e,
    { getFn: t = rx.getFn, fieldNormWeight: n = rx.fieldNormWeight } = {}
  ) {
    let { keys: r, records: a } = e,
      l = new rk({ getFn: t, fieldNormWeight: n });
    return l.setKeys(r), l.setIndexRecords(a), l;
  }),
  (rH.config = rx),
  (rH.parseQuery = rB),
  (function (...e) {
    rM.push(...e);
  })(
    class {
      constructor(
        e,
        {
          isCaseSensitive: t = rx.isCaseSensitive,
          includeMatches: n = rx.includeMatches,
          minMatchCharLength: r = rx.minMatchCharLength,
          ignoreLocation: a = rx.ignoreLocation,
          findAllMatches: l = rx.findAllMatches,
          location: o = rx.location,
          threshold: i = rx.threshold,
          distance: s = rx.distance,
        } = {}
      ) {
        (this.query = null),
          (this.options = {
            isCaseSensitive: t,
            includeMatches: n,
            minMatchCharLength: r,
            findAllMatches: l,
            ignoreLocation: a,
            location: o,
            threshold: i,
            distance: s,
          }),
          (this.pattern = t ? e : e.toLowerCase()),
          (this.query = (function (e, t = {}) {
            return e.split('|').map((e) => {
              let n = e
                  .trim()
                  .split(rL)
                  .filter((e) => e && !!e.trim()),
                r = [];
              for (let e = 0, a = n.length; e < a; e += 1) {
                let a = n[e],
                  l = !1,
                  o = -1;
                for (; !l && ++o < rO; ) {
                  let e = rR[o],
                    n = e.isMultiMatch(a);
                  n && (r.push(new e(n, t)), (l = !0));
                }
                if (!l)
                  for (o = -1; ++o < rO; ) {
                    let e = rR[o],
                      n = e.isSingleMatch(a);
                    if (n) {
                      r.push(new e(n, t));
                      break;
                    }
                  }
              }
              return r;
            });
          })(this.pattern, this.options));
      }
      static condition(e, t) {
        return t.useExtendedSearch;
      }
      searchIn(e) {
        let t = this.query;
        if (!t) return { isMatch: !1, score: 1 };
        let { includeMatches: n, isCaseSensitive: r } = this.options;
        e = r ? e : e.toLowerCase();
        let a = 0,
          l = [],
          o = 0;
        for (let r = 0, i = t.length; r < i; r += 1) {
          let i = t[r];
          (l.length = 0), (a = 0);
          for (let t = 0, r = i.length; t < r; t += 1) {
            let r = i[t],
              { isMatch: s, indices: u, score: c } = r.search(e);
            if (s) {
              if (((a += 1), (o += c), n)) {
                let e = r.constructor.type;
                rT.has(e) ? (l = [...l, ...u]) : l.push(u);
              }
            } else {
              (o = 0), (a = 0), (l.length = 0);
              break;
            }
          }
          if (a) {
            let e = { isMatch: !0, score: o / a };
            return n && (e.indices = l), e;
          }
        }
        return { isMatch: !1, score: 1 };
      }
    }
  );
const rK = ({
  user: e,
  onLoggedOut: t,
  setUser: n,
  setToken: r,
  movies: a,
}) => {
  let l = eu(),
    [o, i] = (0, N.useState)(''),
    s = new rH(a, { keys: ['title'], threshold: 0.4 });
  return /*#__PURE__*/ (0, S.jsx)(nK, {
    bg: 'primary',
    variant: 'dark',
    expand: 'lg',
    className: 'm-3',
    rounded: !0,
    children: /*#__PURE__*/ (0, S.jsxs)(T, {
      children: [
        /*#__PURE__*/ (0, S.jsx)(nK.Brand, {
          as: eP,
          to: '/',
          children: 'MyMovies App',
        }),
        /*#__PURE__*/ (0, S.jsx)(nK.Toggle, {
          'aria-controls': 'basic-navbar-nav',
        }),
        /*#__PURE__*/ (0, S.jsxs)(nK.Collapse, {
          id: 'basic-navbar-nav',
          children: [
            /*#__PURE__*/ (0, S.jsx)(rn, {
              className: 'me-auto',
              children: e
                ? /*#__PURE__*/ (0, S.jsxs)(S.Fragment, {
                    children: [
                      /*#__PURE__*/ (0, S.jsx)(rn.Link, {
                        as: eP,
                        to: '/',
                        children: 'Home',
                      }),
                      /*#__PURE__*/ (0, S.jsx)(rn.Link, {
                        as: eP,
                        to: '/users',
                        children: 'Profile',
                      }),
                      /*#__PURE__*/ (0, S.jsx)(rn.Link, {
                        onClick: () => {
                          n(null), r(null), localStorage.clear(), t();
                        },
                        children: 'Logout',
                      }),
                    ],
                  })
                : /*#__PURE__*/ (0, S.jsxs)(S.Fragment, {
                    children: [
                      /*#__PURE__*/ (0, S.jsx)(rn.Link, {
                        as: eP,
                        to: '/login',
                        children: 'Login',
                      }),
                      /*#__PURE__*/ (0, S.jsx)(rn.Link, {
                        as: eP,
                        to: '/signup',
                        children: 'Signup',
                      }),
                    ],
                  }),
            }),
            e &&
              /*#__PURE__*/ (0, S.jsxs)(td, {
                className: 'd-flex',
                onSubmit: (e) => {
                  e.preventDefault();
                  let t = s.search(o);
                  if (t.length > 0) {
                    let e = t[0].item;
                    l(`/movies/${encodeURIComponent(e.id)}`), i('');
                  } else alert('Sorry, no such movie was found.');
                },
                children: [
                  /*#__PURE__*/ (0, S.jsx)(e9, {
                    type: 'text',
                    placeholder: 'Search',
                    className: 'me-2',
                    value: o,
                    onChange: (e) => i(e.target.value),
                    id: 'searchInput',
                  }),
                  /*#__PURE__*/ (0, S.jsx)(eX, {
                    variant: 'outline-light',
                    type: 'submit',
                    children: 'Search',
                  }),
                ],
              }),
          ],
        }),
      ],
    }),
  });
};
function rQ(e) {
  if (((!v && 0 !== v) || e) && tD) {
    var t = document.createElement('div');
    (t.style.position = 'absolute'),
      (t.style.top = '-9999px'),
      (t.style.width = '50px'),
      (t.style.height = '50px'),
      (t.style.overflow = 'scroll'),
      document.body.appendChild(t),
      (v = t.offsetWidth - t.clientWidth),
      document.body.removeChild(t);
  }
  return v;
}
var N = (w('acw62'), w('acw62'), w('acw62'));
const rq = /*#__PURE__*/ N.forwardRef(
  ({ className: e, bsPrefix: t, as: n = 'div', ...a }, l) => (
    (t = R(t, 'modal-body')),
    /*#__PURE__*/ (0, S.jsx)(n, {
      ref: l,
      className: /*@__PURE__*/ r(C)(e, t),
      ...a,
    })
  )
);
rq.displayName = 'ModalBody';
var N = w('acw62');
const rG = /*#__PURE__*/ N.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      contentClassName: n,
      centered: a,
      size: l,
      fullscreen: o,
      children: i,
      scrollable: s,
      ...u
    },
    c
  ) => {
    e = R(e, 'modal');
    let d = `${e}-dialog`,
      f = 'string' == typeof o ? `${e}-fullscreen-${o}` : `${e}-fullscreen`;
    return /*#__PURE__*/ (0, S.jsx)('div', {
      ...u,
      ref: c,
      className: /*@__PURE__*/ r(C)(
        d,
        t,
        l && `${e}-${l}`,
        a && `${d}-centered`,
        s && `${d}-scrollable`,
        o && f
      ),
      children: /*#__PURE__*/ (0, S.jsx)('div', {
        className: /*@__PURE__*/ r(C)(`${e}-content`, n),
        children: i,
      }),
    });
  }
);
rG.displayName = 'ModalDialog';
var rY = rG,
  N = w('acw62');
const rX = /*#__PURE__*/ N.forwardRef(
  ({ className: e, bsPrefix: t, as: n = 'div', ...a }, l) => (
    (t = R(t, 'modal-footer')),
    /*#__PURE__*/ (0, S.jsx)(n, {
      ref: l,
      className: /*@__PURE__*/ r(C)(e, t),
      ...a,
    })
  )
);
rX.displayName = 'ModalFooter';
var N = w('acw62');
const rJ = /*#__PURE__*/ N.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      closeLabel: n = 'Close',
      closeButton: a = !1,
      ...l
    },
    o
  ) => (
    (e = R(e, 'modal-header')),
    /*#__PURE__*/ (0, S.jsx)(nP, {
      ref: o,
      ...l,
      className: /*@__PURE__*/ r(C)(t, e),
      closeLabel: n,
      closeButton: a,
    })
  )
);
rJ.displayName = 'ModalHeader';
var N = w('acw62');
const rZ = eD('h4'),
  r0 = /*#__PURE__*/ N.forwardRef(
    ({ className: e, bsPrefix: t, as: n = rZ, ...a }, l) => (
      (t = R(t, 'modal-title')),
      /*#__PURE__*/ (0, S.jsx)(n, {
        ref: l,
        className: /*@__PURE__*/ r(C)(e, t),
        ...a,
      })
    )
  );
function r1(e) {
  return /*#__PURE__*/ (0, S.jsx)(nk, { ...e, timeout: null });
}
function r2(e) {
  return /*#__PURE__*/ (0, S.jsx)(nk, { ...e, timeout: null });
}
r0.displayName = 'ModalTitle';
const r3 = /*#__PURE__*/ N.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      style: n,
      dialogClassName: a,
      contentClassName: l,
      children: o,
      dialogAs: i = rY,
      'data-bs-theme': s,
      'aria-labelledby': u,
      'aria-describedby': c,
      'aria-label': d,
      show: f = !1,
      animation: p = !0,
      backdrop: h = !0,
      keyboard: m = !0,
      onEscapeKeyDown: g,
      onShow: v,
      onHide: y,
      container: b,
      autoFocus: x = !0,
      enforceFocus: w = !0,
      restoreFocus: k = !0,
      restoreFocusOptions: E,
      onEntered: _,
      onExit: P,
      onExiting: O,
      onEnter: L,
      onEntering: T,
      onExited: M,
      backdropClassName: I,
      manager: F,
      ...z
    },
    D
  ) => {
    let [$, U] = (0, N.useState)({}),
      [A, B] = (0, N.useState)(!1),
      W = (0, N.useRef)(!1),
      V = (0, N.useRef)(!1),
      H = (0, N.useRef)(null),
      [K, Q] = (0, N.useState)(null),
      q = tX(D, Q),
      G = t5(y),
      Y = (function () {
        let { dir: e } = (0, N.useContext)(j);
        return 'rtl' === e;
      })();
    e = R(e, 'modal');
    let X = (0, N.useMemo)(() => ({ onHide: G }), [G]);
    function J() {
      return F || nD({ isRTL: Y });
    }
    function Z(e) {
      if (!tD) return;
      let t = J().getScrollbarWidth() > 0,
        n = e.scrollHeight > tS(e).documentElement.clientHeight;
      U({
        paddingRight: t && !n ? rQ() : void 0,
        paddingLeft: !t && n ? rQ() : void 0,
      });
    }
    let ee = t5(() => {
      K && Z(K.dialog);
    });
    nl(() => {
      tW(window, 'resize', ee), null == H.current || H.current();
    });
    let et = () => {
        W.current = !0;
      },
      en = (e) => {
        W.current && K && e.target === K.dialog && (V.current = !0),
          (W.current = !1);
      },
      er = () => {
        B(!0),
          (H.current = tH(K.dialog, () => {
            B(!1);
          }));
      },
      ea = (e) => {
        e.target === e.currentTarget && er();
      },
      el = (e) => {
        if ('static' === h) {
          ea(e);
          return;
        }
        if (V.current || e.target !== e.currentTarget) {
          V.current = !1;
          return;
        }
        null == y || y();
      },
      eo = (0, N.useCallback)(
        (t) =>
          /*#__PURE__*/ (0, S.jsx)('div', {
            ...t,
            className: /*@__PURE__*/ r(C)(`${e}-backdrop`, I, !p && 'show'),
          }),
        [p, I, e]
      ),
      ei = { ...n, ...$ };
    return (
      (ei.display = 'block'),
      /*#__PURE__*/ (0, S.jsx)(nN.Provider, {
        value: X,
        children: /*#__PURE__*/ (0, S.jsx)(nx, {
          show: f,
          ref: q,
          backdrop: h,
          container: b,
          keyboard: !0,
          autoFocus: x,
          enforceFocus: w,
          restoreFocus: k,
          restoreFocusOptions: E,
          onEscapeKeyDown: (e) => {
            m
              ? null == g || g(e)
              : (e.preventDefault(), 'static' === h && er());
          },
          onShow: v,
          onHide: y,
          onEnter: (e, t) => {
            e && Z(e), null == L || L(e, t);
          },
          onEntering: (e, t) => {
            null == T || T(e, t), tB(window, 'resize', ee);
          },
          onEntered: _,
          onExit: (e) => {
            null == H.current || H.current(), null == P || P(e);
          },
          onExiting: O,
          onExited: (e) => {
            e && (e.style.display = ''),
              null == M || M(e),
              tW(window, 'resize', ee);
          },
          manager: J(),
          transition: p ? r1 : void 0,
          backdropTransition: p ? r2 : void 0,
          renderBackdrop: eo,
          renderDialog: (n) =>
            /*#__PURE__*/ (0, S.jsx)('div', {
              role: 'dialog',
              ...n,
              style: ei,
              className: /*@__PURE__*/ r(C)(
                t,
                e,
                A && `${e}-static`,
                !p && 'show'
              ),
              onClick: h ? el : void 0,
              onMouseUp: en,
              'data-bs-theme': s,
              'aria-label': d,
              'aria-labelledby': u,
              'aria-describedby': c,
              children: /*#__PURE__*/ (0, S.jsx)(i, {
                ...z,
                onMouseDown: et,
                className: a,
                contentClassName: l,
                children: o,
              }),
            }),
        }),
      })
    );
  }
);
r3.displayName = 'Modal';
var r6 = Object.assign(r3, {
    Body: rq,
    Header: rJ,
    Title: r0,
    Footer: rX,
    Dialog: rY,
    TRANSITION_DURATION: 300,
    BACKDROP_TRANSITION_DURATION: 150,
  }),
  N = w('acw62');
const r4 = /*#__PURE__*/ N.forwardRef(
  (
    {
      bsPrefix: e,
      variant: t,
      animation: n = 'border',
      size: a,
      as: l = 'div',
      className: o,
      ...i
    },
    s
  ) => {
    e = R(e, 'spinner');
    let u = `${e}-${n}`;
    return /*#__PURE__*/ (0, S.jsx)(l, {
      ref: s,
      ...i,
      className: /*@__PURE__*/ r(C)(o, u, a && `${u}-${a}`, t && `text-${t}`),
    });
  }
);
r4.displayName = 'Spinner';
const r5 = ({ movies: e }) => {
  let [t, n] = (0, N.useState)({}),
    [r, a] = (0, N.useState)(),
    [l, o] = (0, N.useState)([]),
    [i, s] = (0, N.useState)({
      Username: '',
      Email: '',
      Password: '',
      Birthday: '',
    }),
    [u, c] = (0, N.useState)(!1),
    [d, f] = (0, N.useState)(!0),
    [p, h] = (0, N.useState)('original'),
    [m, g] = (0, N.useState)(null),
    [v, y] = (0, N.useState)(!1),
    [b, x] = (0, N.useState)(null),
    [w, k] = (0, N.useState)([]);
  (0, N.useEffect)(() => {
    f(!0);
    let t = JSON.parse(localStorage.getItem('user'));
    fetch(
      'http://mymovies-alb-1448969138.us-east-1.elb.amazonaws.com/api/users',
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    )
      .then((e) => e.json())
      .then((r) => {
        let a = r.find((e) => e._id === t._id);
        if (!a) throw Error('Unable to find user');
        o(e.filter((e) => a.FavoriteMovies.includes(e.id))),
          s({ ...a, Password: '' }),
          n({ ...a, Password: '' }),
          f(!1),
          P(p);
      })
      .catch((e) => {
        console.error('Error fetching user data:', e),
          alert('Error fetching user data; please try again later.'),
          f(!1);
      });
  }, [e, p]);
  let E = async () => {
      try {
        let e = prompt('Please, enter your password: ');
        (
          await fetch(
            `http://mymovies-alb-1448969138.us-east-1.elb.amazonaws.com/api/users/${t.Username}`,
            {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
              body: JSON.stringify({ Password: e }),
            }
          )
        ).ok
          ? (s(null),
            c(!1),
            localStorage.clear(),
            n(null),
            a(null),
            alert('User has been successfully deregistered.'))
          : (console.error('Error deregistering user:', error),
            alert('Error deleing your account; please try again later.'));
      } catch (e) {
        console.error('Error deregistering user:', e),
          alert('Error deleting your account; please try again later.');
      }
    },
    C = (e) => {
      s((t) => ({ ...t, [e.target.name]: e.target.value }));
    },
    j = () => {
      window.location.href = '/';
    },
    _ = (e) => {
      fetch(
        `http://mymovies-alb-1448969138.us-east-1.elb.amazonaws.com/api/users/${t.Username}/movies/${e}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
        .then((t) => {
          t.ok &&
            (o(l.filter((t) => t._id !== e)),
            alert(
              'This movie has successfully been removed from your Favorites!'
            ),
            j());
        })
        .catch((e) => {
          console.error('Error:', e),
            alert('Sorry, there was an error; please try again later.');
        });
    },
    P = async (e) => {
      try {
        let t = await fetch(`/images/${i.Username}?type=${e}`),
          n = await t.json();
        k(n);
      } catch (e) {
        console.error('Error fetching images:', e);
      }
    },
    R = (e) => {
      x(e), y(!0);
    },
    O = () => {
      y(!1), x(null);
    };
  return /*#__PURE__*/ (0, S.jsxs)('div', {
    children: [
      /*#__PURE__*/ (0, S.jsx)('h1', { children: 'Profile:' }),
      /*#__PURE__*/ (0, S.jsxs)(td, {
        children: [
          /*#__PURE__*/ (0, S.jsxs)(td.Group, {
            controlId: 'formUsername',
            children: [
              /*#__PURE__*/ (0, S.jsx)(td.Label, { children: 'Username:' }),
              u
                ? /*#__PURE__*/ (0, S.jsx)(td.Control, {
                    type: 'text',
                    name: 'Username',
                    defaultValue: i.Username,
                    onChange: C,
                  })
                : /*#__PURE__*/ (0, S.jsx)(td.Control, {
                    type: 'text',
                    name: 'Username',
                    value: i.Username,
                    readOnly: !0,
                  }),
            ],
          }),
          /*#__PURE__*/ (0, S.jsxs)(td.Group, {
            controlId: 'formBirthday',
            children: [
              /*#__PURE__*/ (0, S.jsx)(td.Label, { children: 'Birthday:' }),
              u
                ? /*#__PURE__*/ (0, S.jsx)(td.Control, {
                    type: 'date',
                    name: 'Birthday',
                    defaultValue: i.Birthday,
                    onChange: C,
                  })
                : /*#__PURE__*/ (0, S.jsx)(td.Control, {
                    type: 'date',
                    name: 'Birthday',
                    value: i.Birthday,
                    readOnly: !0,
                  }),
            ],
          }),
          /*#__PURE__*/ (0, S.jsxs)(td.Group, {
            controlId: 'formEmail',
            children: [
              /*#__PURE__*/ (0, S.jsx)(td.Label, { children: 'Email:' }),
              u
                ? /*#__PURE__*/ (0, S.jsx)(td.Control, {
                    type: 'email',
                    name: 'Email',
                    defaultValue: i.Email,
                    onChange: C,
                  })
                : /*#__PURE__*/ (0, S.jsx)(td.Control, {
                    type: 'email',
                    name: 'Email',
                    value: i.Email,
                    readOnly: !0,
                  }),
            ],
          }),
          /*#__PURE__*/ (0, S.jsxs)(td.Group, {
            controlId: 'formPassword',
            children: [
              /*#__PURE__*/ (0, S.jsx)(td.Label, { children: 'Password:' }),
              u
                ? /*#__PURE__*/ (0, S.jsx)(td.Control, {
                    type: 'password',
                    name: 'Password',
                    defaultValue: i.Password,
                    onChange: C,
                  })
                : /*#__PURE__*/ (0, S.jsx)(td.Control, {
                    type: 'password',
                    name: 'Password',
                    value: '***h*a*s*h*e*d***',
                    readOnly: !u,
                  }),
            ],
          }),
          u
            ? /*#__PURE__*/ (0, S.jsxs)(S.Fragment, {
                children: [
                  /*#__PURE__*/ (0, S.jsx)(eX, {
                    className: 'm-3',
                    variant: 'outline-primary',
                    onClick: (e) => {
                      e.preventDefault(), console.log(i);
                      let r = prompt('Please, enter your password: '),
                        a = {
                          Username: i.Username,
                          Birthday: i.Birthday,
                          Email: i.Email,
                          Password: r,
                        };
                      0 !== i.Password.trim().length &&
                        (a.Password = i.Password),
                        fetch(
                          `http://mymovies-alb-1448969138.us-east-1.elb.amazonaws.com/api/users/${t.Username}`,
                          {
                            method: 'PUT',
                            headers: {
                              'Content-Type': 'application/json',
                              Authorization: `Bearer ${localStorage.getItem(
                                'token'
                              )}`,
                            },
                            body: JSON.stringify(a),
                          }
                        )
                          .then((e) => {
                            if (e.status >= 200 && e.status < 300)
                              return e.json();
                            throw Error(e.errors);
                          })
                          .then((e) => {
                            console.log('data', e),
                              s({ ...e, Password: '' }),
                              n({ ...e, Password: '' }),
                              localStorage.setItem('user', JSON.stringify(e)),
                              c(!1),
                              alert(
                                'Your profile has been successfully updated.'
                              );
                          })
                          .catch((e) => {
                            console.error('Error updating user data:', e),
                              alert(
                                'Error updating user profile; please try again later.'
                              ),
                              f(!1);
                          });
                    },
                    children: 'Update',
                  }),
                  /*#__PURE__*/ (0, S.jsx)(eX, {
                    className: 'm-3',
                    variant: 'outline-danger',
                    onClick: () => c(!1),
                    children: 'Cancel',
                  }),
                  /*#__PURE__*/ (0, S.jsx)(eX, {
                    className: 'm-3',
                    variant: 'danger',
                    onClick: () => {
                      E();
                    },
                    children: 'Delete Account',
                  }),
                ],
              })
            : /*#__PURE__*/ (0, S.jsx)(eX, {
                className: 'm-3',
                variant: 'outline-primary',
                onClick: () => c(!0),
                children: 'Edit',
              }),
        ],
      }),
      /*#__PURE__*/ (0, S.jsxs)('div', {
        children: [
          /*#__PURE__*/ (0, S.jsx)('h1', { children: 'Favorite Movies:' }),
          d
            ? /*#__PURE__*/ (0, S.jsx)(r4, {
                animation: 'border',
                variant: 'primary',
              })
            : /*#__PURE__*/ (0, S.jsx)(eQ, {
                children:
                  l.length > 0
                    ? l.map((e) =>
                        /*#__PURE__*/ (0, S.jsxs)(
                          tt,
                          {
                            className: 'mt-3 mb-5',
                            md: 3,
                            children: [
                              /*#__PURE__*/ (0, S.jsx)(eK, {
                                movie: e,
                                showDescription: !1,
                              }),
                              /*#__PURE__*/ (0, S.jsx)(eX, {
                                className: 'mt-3 mb-5 d-block mx-auto',
                                variant: 'outline-danger',
                                onClick: () => _(e.id),
                                children: 'Remove from Favorites',
                              }),
                            ],
                          },
                          e.id
                        )
                      )
                    : /*#__PURE__*/ (0, S.jsx)(tt, {
                        children:
                          'You have not chosen any favorite movies yet!',
                      }),
              }),
        ],
      }),
      /*#__PURE__*/ (0, S.jsxs)('div', {
        className: 'image-upload-section',
        children: [
          /*#__PURE__*/ (0, S.jsx)('h2', { children: 'Upload New Image' }),
          /*#__PURE__*/ (0, S.jsxs)(td, {
            onSubmit: handleImageUpload,
            children: [
              /*#__PURE__*/ (0, S.jsxs)(td.Group, {
                controlId: 'formFile',
                className: 'mb-3',
                children: [
                  /*#__PURE__*/ (0, S.jsx)(td.Label, {
                    children: 'Choose an image to upload',
                  }),
                  /*#__PURE__*/ (0, S.jsx)(td.Control, {
                    type: 'file',
                    onChange: (e) => {
                      g(e.target.files[0]);
                    },
                  }),
                ],
              }),
              /*#__PURE__*/ (0, S.jsx)(eX, {
                variant: 'primary',
                type: 'submit',
                children: 'Upload Image',
              }),
            ],
          }),
        ],
      }),
      /*#__PURE__*/ (0, S.jsxs)('div', {
        className: 'image-type-selection',
        children: [
          /*#__PURE__*/ (0, S.jsx)('h3', { children: 'View Uploaded Images' }),
          /*#__PURE__*/ (0, S.jsxs)(td.Group, {
            children: [
              /*#__PURE__*/ (0, S.jsx)(td.Label, {
                children: 'Select Image Type:',
              }),
              /*#__PURE__*/ (0, S.jsxs)(td.Control, {
                as: 'select',
                value: p,
                onChange: (e) => h(e.target.value),
                children: [
                  /*#__PURE__*/ (0, S.jsx)('option', {
                    value: 'original',
                    children: 'Original Images',
                  }),
                  /*#__PURE__*/ (0, S.jsx)('option', {
                    value: 'resized',
                    children: 'Resized Images',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      /*#__PURE__*/ (0, S.jsxs)('div', {
        className: 'image-gallery',
        children: [
          /*#__PURE__*/ (0, S.jsx)('h2', { children: 'Your Uploaded Images' }),
          d
            ? /*#__PURE__*/ (0, S.jsx)(r4, {
                animation: 'border',
                variant: 'primary',
              })
            : w.length > 0
            ? /*#__PURE__*/ (0, S.jsx)(eQ, {
                children: w.map((e) =>
                  /*#__PURE__*/ (0, S.jsx)(
                    tt,
                    {
                      md: 3,
                      className: 'mb-3',
                      children: /*#__PURE__*/ (0, S.jsx)(eJ, {
                        src: `https://my-movies-react-images-bucket.s3.amazonaws.com/${e}`,
                        thumbnail: !0,
                        onClick: () =>
                          R({
                            url: `https://my-movies-react-images-bucket.s3.amazonaws.com/${e}`,
                            description: 'No description',
                          }),
                        className: 'image-thumbnail',
                      }),
                    },
                    e
                  )
                ),
              })
            : /*#__PURE__*/ (0, S.jsx)('p', {
                children: 'No images uploaded yet.',
              }),
        ],
      }),
      /*#__PURE__*/ (0, S.jsxs)(r6, {
        show: v,
        onHide: O,
        centered: !0,
        children: [
          /*#__PURE__*/ (0, S.jsx)(r6.Header, {
            closeButton: !0,
            children: /*#__PURE__*/ (0, S.jsx)(r6.Title, {
              children: 'View Image',
            }),
          }),
          /*#__PURE__*/ (0, S.jsx)(r6.Body, {
            children:
              b &&
              /*#__PURE__*/ (0, S.jsxs)('div', {
                children: [
                  /*#__PURE__*/ (0, S.jsx)(eJ, { src: b.url, fluid: !0 }),
                  /*#__PURE__*/ (0, S.jsxs)('p', {
                    className: 'mt-3',
                    children: ['Description: ', b.description],
                  }),
                ],
              }),
          }),
          /*#__PURE__*/ (0, S.jsx)(r6.Footer, {
            children: /*#__PURE__*/ (0, S.jsx)(eX, {
              variant: 'secondary',
              onClick: O,
              children: 'Close',
            }),
          }),
        ],
      }),
    ],
  });
};
w('acw62');
const r8 = () =>
    /*#__PURE__*/ (0, S.jsx)(T, {
      fluid: !0,
      className: 'vh-100 d-flex justify-content-center align-items-center',
      children: /*#__PURE__*/ (0, S.jsx)(eQ, {
        children: /*#__PURE__*/ (0, S.jsxs)(tt, {
          className: 'text-center',
          children: [
            /*#__PURE__*/ (0, S.jsx)('h1', {
              children: 'Welcome to MyMovies!',
            }),
            /*#__PURE__*/ (0, S.jsxs)('p', {
              children: [
                ' ',
                'If you are new here, please Sign Up; otherwise, you know what to do!.',
              ],
            }),
          ],
        }),
      }),
    }),
  r9 = () => {
    let [e, t] = (0, N.useState)(null),
      [n, r] = (0, N.useState)(null),
      [a, l] = (0, N.useState)([]),
      [o, i] = (0, N.useState)(!1),
      [s, u] = (0, N.useState)('');
    return (
      (0, N.useEffect)(() => {
        let e = JSON.parse(localStorage.getItem('user')),
          n = localStorage.getItem('token');
        t(e), r(n);
      }, [n]),
      (0, N.useEffect)(() => {
        n &&
          (i(!0),
          fetch(
            'http://mymovies-alb-1448969138.us-east-1.elb.amazonaws.com/api/movies',
            { headers: { Authorization: `Bearer ${n}` } }
          )
            .then((e) => e.json())
            .then((e) => {
              l(
                e.map((e) => ({
                  id: e._id,
                  title: e.Title,
                  release: e.Release,
                  description: e.Description,
                  rating: e.Rating,
                  genre: e.Genre.Name,
                  genreDescription: e.Genre.Description,
                  directorName: e.Director.Name,
                  directorBirthYear: e.Director.Birthyear,
                  directorBio: e.Director.Description,
                  image: e.Image,
                }))
              );
            })
            .catch((e) => {
              console.error('Error fetching data:', e);
            })
            .finally(() => {
              i(!1);
            }));
      }, [n]),
      /*#__PURE__*/ (0, S.jsxs)(eN, {
        children: [
          /*#__PURE__*/ (0, S.jsx)(rK, {
            user: e,
            onLoggedOut: () => {
              t(null), r(null), localStorage.clear();
            },
            setUser: t,
            setToken: r,
            movies: a,
            searchQuery: s,
            setSearchQuery: u,
          }),
          /*#__PURE__*/ (0, S.jsxs)(eQ, {
            className: 'justify-content-md-center',
            children: [
              /*#__PURE__*/ (0, S.jsxs)(ew, {
                children: [
                  /*#__PURE__*/ (0, S.jsx)(eb, {
                    path: '/signup',
                    element: /*#__PURE__*/ (0, S.jsx)(S.Fragment, {
                      children: e
                        ? /*#__PURE__*/ (0, S.jsx)(ey, { to: '/' })
                        : /*#__PURE__*/ (0, S.jsx)(tt, {
                            md: 5,
                            children: /*#__PURE__*/ (0, S.jsx)(tp, {}),
                          }),
                    }),
                  }),
                  /*#__PURE__*/ (0, S.jsx)(eb, {
                    path: '/login',
                    element: /*#__PURE__*/ (0, S.jsx)(S.Fragment, {
                      children: e
                        ? /*#__PURE__*/ (0, S.jsx)(ey, { to: '/' })
                        : /*#__PURE__*/ (0, S.jsx)(tt, {
                            md: 5,
                            children: /*#__PURE__*/ (0, S.jsx)(tf, {
                              onLoggedIn: (e, n) => {
                                t(e), r(n);
                              },
                            }),
                          }),
                    }),
                  }),
                  /*#__PURE__*/ (0, S.jsx)(eb, {
                    path: '/movies/:movieId',
                    element: /*#__PURE__*/ (0, S.jsx)(S.Fragment, {
                      children: /*#__PURE__*/ (0, S.jsx)(tt, {
                        md: 8,
                        children: /*#__PURE__*/ (0, S.jsx)(eZ, { movies: a }),
                      }),
                    }),
                  }),
                  /*#__PURE__*/ (0, S.jsx)(eb, {
                    path: '/movies/:movieId',
                    element: /*#__PURE__*/ (0, S.jsx)(S.Fragment, {
                      children: e
                        ? /*#__PURE__*/ (0, S.jsx)(tt, {
                            md: 8,
                            children: /*#__PURE__*/ (0, S.jsx)(eZ, {
                              movies: a,
                            }),
                          })
                        : /*#__PURE__*/ (0, S.jsx)(ey, {
                            to: '/login',
                            replace: !0,
                          }),
                    }),
                  }),
                  /*#__PURE__*/ (0, S.jsx)(eb, {
                    path: '/users',
                    element: /*#__PURE__*/ (0, S.jsx)(S.Fragment, {
                      children: e
                        ? /*#__PURE__*/ (0, S.jsx)(tt, {
                            md: 8,
                            className: 'mb-5',
                            children: /*#__PURE__*/ (0, S.jsx)(r5, {
                              movies: a,
                            }),
                          })
                        : /*#__PURE__*/ (0, S.jsx)(ey, {
                            to: '/users',
                            replace: !0,
                          }),
                    }),
                  }),
                  /*#__PURE__*/ (0, S.jsx)(eb, {
                    path: '/',
                    element: /*#__PURE__*/ (0, S.jsx)(S.Fragment, {
                      children: e
                        ? /*#__PURE__*/ (0, S.jsx)(S.Fragment, {
                            children: a.map((e) =>
                              /*#__PURE__*/ (0, S.jsx)(
                                tt,
                                {
                                  className: 'mt-3 mb-3',
                                  md: 3,
                                  children: /*#__PURE__*/ (0, S.jsx)(eK, {
                                    movie: e,
                                  }),
                                },
                                e.id
                              )
                            ),
                          })
                        : /*#__PURE__*/ (0, S.jsx)(r8, {}),
                    }),
                  }),
                ],
              }),
              o &&
                /*#__PURE__*/ (0, S.jsx)(r4, {
                  animation: 'border',
                  variant: 'primary',
                }),
            ],
          }),
          /*#__PURE__*/ (0, S.jsxs)('p', {
            className: 'mt-auto mb-3 text-center',
            children: [
              'designed and developed by:',
              ' ',
              /*#__PURE__*/ (0, S.jsx)('a', {
                href: 'https://leanneduyck.vercel.app/',
                target: '_blank',
                rel: 'noopener noreferrer',
                style: { textDecoration: 'none' },
                children: /*#__PURE__*/ (0, S.jsx)('u', {
                  children: 'Leanne Duyck',
                }),
              }),
            ],
          }),
        ],
      })
    );
  };
f(document.querySelector('#root')).render(
  /*#__PURE__*/ (0, S.jsx)(
    () =>
      /*#__PURE__*/ (0, S.jsx)(T, {
        children: /*#__PURE__*/ (0, S.jsx)(r9, {}),
      }),
    {}
  )
);
//# sourceMappingURL=index.bb3d3ff6.js.map
