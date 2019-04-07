"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsLowercase = require("validator/lib/isLowercase");
exports.IS_LOWERCASE = "isLowercase";
/**
 * Checks if the string is lowercase.
 * If given value is not a string, then it returns false.
 */
function isLowercase(value) {
    return typeof value === "string" && validatorJsIsLowercase(value);
}
exports.isLowercase = isLowercase;
/**
 * Checks if the string is lowercase.
 */
function IsLowercase(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_LOWERCASE,
        validate: function (value) { return isLowercase(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a lowercase string"; }, validationOptions)
    }, validationOptions);
}
exports.IsLowercase = IsLowercase;

//# sourceMappingURL=IsLowercase.js.map
