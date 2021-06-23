!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports['base-module'] = t())
    : (e['base-module'] = t());
})(self, function() {
  return (() => {
    'use strict';
    var e = {
        590: (e, t, o) => {
          Object.defineProperty(t, '__esModule', { value: !0 });
          var r = o(150);
          Object.keys(r).forEach(function(e) {
            'default' !== e &&
              '__esModule' !== e &&
              ((e in t && t[e] === r[e]) ||
                Object.defineProperty(t, e, {
                  enumerable: !0,
                  get: function() {
                    return r[e];
                  }
                }));
          });
        },
        150: (e, t, o) => {
          Object.defineProperty(t, '__esModule', { value: !0 });
          var r = o(192);
          Object.keys(r).forEach(function(e) {
            'default' !== e &&
              '__esModule' !== e &&
              ((e in t && t[e] === r[e]) ||
                Object.defineProperty(t, e, {
                  enumerable: !0,
                  get: function() {
                    return r[e];
                  }
                }));
          });
        },
        192: (e, t) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.doSomething = void 0),
            (t.doSomething = e => e);
        }
      },
      t = {};
    return (function o(r) {
      var n = t[r];
      if (void 0 !== n) return n.exports;
      var u = (t[r] = { exports: {} });
      return e[r](u, u.exports, o), u.exports;
    })(590);
  })();
});
