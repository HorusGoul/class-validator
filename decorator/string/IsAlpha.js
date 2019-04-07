"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsAlpha = require("validator/lib/isAlpha");
exports.IS_ALPHA = "isAlpha";
/**
 * Checks if the string contains only letters (a-zA-Z).
 * If given value is not a string, then it returns false.
 */
function isAlpha(value) {
    return typeof value === "string" && validatorJsIsAlpha(value);
}
exports.isAlpha = isAlpha;
/**
 * Checks if the string contains only letters (a-zA-Z).
 */
function IsAlpha(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_ALPHA,
        validate: function (value) { return isAlpha(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must contain only letters (a-zA-Z)"; }, validationOptions)
    }, validationOptions);
}
exports.IsAlpha = IsAlpha;

//# sourceMappingURL=IsAlpha.js.map
