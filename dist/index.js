"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _something = require("./something");

Object.keys(_something).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _something[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _something[key];
    }
  });
});