"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsHexColor = require("validator/lib/isHexColor");
exports.IS_HEX_COLOR = "isHexColor";
/**
 * Checks if the string is a hexadecimal color.
 * If given value is not a string, then it returns false.
 */
function isHexColor(value) {
    return typeof value === "string" && validatorJsIsHexColor(value);
}
exports.isHexColor = isHexColor;
/**
 * Checks if the string is a hexadecimal color.
 */
function IsHexColor(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_HEX_COLOR,
        validate: function (value) { return isHexColor(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a hexadecimal color"; }, validationOptions)
    }, validationOptions);
}
exports.IsHexColor = IsHexColor;

//# sourceMappingURL=IsHexColor.js.map
