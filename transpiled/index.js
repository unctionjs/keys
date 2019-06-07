"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keys;

var _flip = require("@unction/flip");

var _flip2 = _interopRequireDefault(_flip);

var _append = require("@unction/append");

var _append2 = _interopRequireDefault(_append);

var _reducekeys = require("@unction/reducekeys");

var _reducekeys2 = _interopRequireDefault(_reducekeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function keys(keyed) {
  return (0, _reducekeys2.default)((0, _flip2.default)(_append2.default))([])(keyed);
}