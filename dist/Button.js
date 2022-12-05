"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VARIANT = exports.Button = exports.BTN_SIZES = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _excluded = ["children"];
var _templateObject;
var VARIANT = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  LINK: "link"
};
exports.VARIANT = VARIANT;
var BTN_SIZES = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl"
};
exports.BTN_SIZES = BTN_SIZES;
var StyledButton = _styledComponents.default.button(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  padding: \"8px\";\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  transition: all 150ms ease-out;\n  transform: translate3d(0, 0, 0);\n  vertical-align: top;\n  white-space: nowrap;\n  user-select: none;\n  opacity: 1;\n  margin: 0;\n  background: blue;\n  color: white;\n\n  font-size: 12px;\n\n  font-weight: 500;\n  line-height: 1;\n"])));
var onClick = function onClick() {
  alert("hello");
};

/**
 * Primary UI component for user interaction
 */
var Button = function Button(_ref) {
  var children = _ref.children,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(StyledButton, Object.assign({}, props, {
    onClick: onClick
  }), children);
};
exports.Button = Button;
Button.defaultProps = {
  variant: "primary",
  size: "md",
  isDisabled: false,
  onlyIcon: false,
  bgColor: "blue",
  // set to synth color ,
  color: "#fff"
};