"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = Badge;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _styles = require("./shared/styles");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var BadgeWrapper = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  vertical-align: top;\n  font-size: 11px;\n  line-height: 12px;\n  padding: 4px 12px;\n  border-radius: 3em;\n  font-weight: ", ";\n\n  svg {\n    height: 12px;\n    width: 12px;\n    margin-right: 4px;\n    margin-top: -2px;\n  }\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"])), _styles.typography.weight.bold, function (props) {
  return props.status === 'positive' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n      color: ", ";\n      background: ", ";\n    "])), _styles.color.positive, _styles.background.positive);
}, function (props) {
  return props.status === 'negative' && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n      color: ", ";\n      background: ", ";\n    "])), _styles.color.negative, _styles.background.negative);
}, function (props) {
  return props.status === 'warning' && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n      color: ", ";\n      background: ", ";\n    "])), _styles.color.warning, _styles.background.warning);
}, function (props) {
  return props.status === 'error' && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n      color: ", ";\n      background: ", ";\n    "])), _styles.color.lightest, _styles.color.negative);
}, function (props) {
  return props.status === 'neutral' && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n      color: ", ";\n      background: ", ";\n    "])), _styles.color.dark, _styles.color.mediumlight);
});

/**
 * **Badges?!** We don't need no stinkin' badges!!
 */
function Badge(_ref) {
  var props = Object.assign({}, _ref);
  return /*#__PURE__*/_react.default.createElement(BadgeWrapper, props);
}
Badge.defaultProps = {
  status: 'neutral'
};