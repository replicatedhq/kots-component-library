"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = void 0;
var _react = _interopRequireDefault(require("react"));
var RadioButton = function RadioButton(_ref) {
  var name = _ref.name,
    title = _ref.title,
    group = _ref.group,
    checked = _ref.checked,
    disabled = _ref.disabled,
    onChange = _ref.onChange,
    inputClassName = _ref.inputClassName,
    divClassName = _ref.divClassName,
    labelClassName = _ref.labelClassName;
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "".concat(name, "-group"),
    className: "".concat(divClassName),
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    name: group,
    id: "".concat(group, "-").concat(name),
    value: name,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    className: inputClassName
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "".concat(group, "-").concat(name),
    className: "".concat(labelClassName, " ").concat(disabled ? "u-cursor--default" : "u-cursor--pointer")
  }, title));
};
exports.RadioButton = RadioButton;
RadioButton.defaultProps = {
  name: "name",
  title: "title",
  group: "group",
  checked: false,
  disabled: false,
  onChange: function onChange() {
    console.log("radio button changed cool");
  },
  divClassName: "",
  inputClassName: "",
  labelClassName: "u-marginLeft--5 header-color field-section-sub-header u-userSelect--none"
};