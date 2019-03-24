"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
// strange module export :(
var validatorJsIsFullWidth = require("validator/lib/isFullWidth").default;
exports.IS_FULL_WIDTH = "isFullWidth";
/**
 * Checks if the string contains any full-width chars.
 * If given value is not a string, then it returns false.
 */
function isFullWidth(value) {
    return typeof value === "string" && validatorJsIsFullWidth(value);
}
exports.isFullWidth = isFullWidth;
/**
 * Checks if the string contains any full-width chars.
 */
function IsFullWidth(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_FULL_WIDTH,
        validate: function (value) { return isFullWidth(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must contain a full-width characters"; }, validationOptions)
    }, validationOptions);
}
exports.IsFullWidth = IsFullWidth;

//# sourceMappingURL=IsFullWidth.js.map
