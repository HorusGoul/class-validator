"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsHexadecimal = require("validator/lib/isHexadecimal");
exports.IS_HEXADECIMAL = "isHexadecimal";
/**
 * Checks if the string is a hexadecimal number.
 * If given value is not a string, then it returns false.
 */
function isHexadecimal(value) {
    return typeof value === "string" && validatorJsIsHexadecimal(value);
}
exports.isHexadecimal = isHexadecimal;
/**
 * Checks if the string is a hexadecimal number.
 */
function IsHexadecimal(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_HEXADECIMAL,
        validate: function (value) { return isHexadecimal(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a hexadecimal number"; }, validationOptions)
    }, validationOptions);
}
exports.IsHexadecimal = IsHexadecimal;

//# sourceMappingURL=IsHexadecimal.js.map
