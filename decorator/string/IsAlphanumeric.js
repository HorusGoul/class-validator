"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsAlphanumeric = require("validator/lib/isAlphanumeric");
exports.IS_ALPHANUMERIC = "isAlphanumeric";
/**
 * Checks if the string contains only letters and numbers.
 * If given value is not a string, then it returns false.
 */
function isAlphanumeric(value) {
    return typeof value === "string" && validatorJsIsAlphanumeric(value);
}
exports.isAlphanumeric = isAlphanumeric;
/**
 * Checks if the string contains only letters and numbers.
 */
function IsAlphanumeric(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_ALPHANUMERIC,
        validate: function (value) { return isAlphanumeric(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must contain only letters and numbers"; }, validationOptions)
    }, validationOptions);
}
exports.IsAlphanumeric = IsAlphanumeric;

//# sourceMappingURL=IsAlphanumeric.js.map
