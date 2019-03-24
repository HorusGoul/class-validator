"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsUppercase = require("validator/lib/isUppercase");
exports.IS_UPPERCASE = "isUppercase";
/**
 * Checks if the string is uppercase.
 * If given value is not a string, then it returns false.
 */
function isUppercase(value) {
    return typeof value === "string" && validatorJsIsUppercase(value);
}
exports.isUppercase = isUppercase;
/**
 * Checks if the string is uppercase.
 */
function IsUppercase(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_UPPERCASE,
        validate: function (value) { return isUppercase(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be uppercase"; }, validationOptions)
    }, validationOptions);
}
exports.IsUppercase = IsUppercase;

//# sourceMappingURL=IsUppercase.js.map
