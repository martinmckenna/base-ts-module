(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./something"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./something"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.something);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _something) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.keys(_something).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (key in _exports && _exports[key] === _something[key]) return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function () {
        return _something[key];
      }
    });
  });
});