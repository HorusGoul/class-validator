"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsMultibyte = require("validator/lib/isMultibyte");
exports.IS_MULTIBYTE = "isMultibyte";
/**
 * Checks if the string contains one or more multibyte chars.
 * If given value is not a string, then it returns false.
 */
function isMultibyte(value) {
    return typeof value === "string" && validatorJsIsMultibyte(value);
}
exports.isMultibyte = isMultibyte;
/**
 * Checks if the string contains one or more multibyte chars.
 */
function IsMultibyte(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_MULTIBYTE,
        validate: function (value) { return isMultibyte(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must contain one or more multibyte chars"; }, validationOptions)
    }, validationOptions);
}
exports.IsMultibyte = IsMultibyte;

//# sourceMappingURL=IsMultibyte.js.map
