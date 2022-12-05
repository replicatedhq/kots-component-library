"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.All = void 0;
var _react = _interopRequireDefault(require("react"));
var _RadioButton = require("./RadioButton");
var _default = {
  title: "Design System/RadioButton",
  component: _RadioButton.RadioButton
};
exports.default = _default;
var All = function All(args) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_RadioButton.RadioButton, null));
};
exports.All = All;