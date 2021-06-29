(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.something = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.init = _exports.doSomething = void 0;

  const doSomething = name => {
    return `Hello ${name}`;
  };

  _exports.doSomething = doSomething;

  const init = () => {
    let interceptor = null;
    return {
      setNewToken: token => {
        if (interceptor) {
          /* clear previously cached interceptor function */
        }

        interceptor = () => {
          /* intercept all HTTP requests here with new token */
        };
      }
    };
  };

  _exports.init = init;
});