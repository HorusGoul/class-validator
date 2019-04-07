"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
// strange module export :(
var validatorJsIsHalfWidth = require("validator/lib/isHalfWidth").default;
exports.IS_HALF_WIDTH = "isHalfWidth";
/**
 * Checks if the string contains any half-width chars.
 * If given value is not a string, then it returns false.
 */
function isHalfWidth(value) {
    return typeof value === "string" && validatorJsIsHalfWidth(value);
}
exports.isHalfWidth = isHalfWidth;
/**
 * Checks if the string contains any half-width chars.
 */
function IsHalfWidth(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_HALF_WIDTH,
        validate: function (value) { return isHalfWidth(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must contain a half-width characters"; }, validationOptions)
    }, validationOptions);
}
exports.IsHalfWidth = IsHalfWidth;

//# sourceMappingURL=IsHalfWidth.js.map
