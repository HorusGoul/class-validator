"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsBase64 = require("validator/lib/isBase64");
exports.IS_BASE64 = "isBase64";
/**
 * Checks if a string is base64 encoded.
 * If given value is not a string, then it returns false.
 */
function isBase64(value) {
    return typeof value === "string" && validatorJsIsBase64(value);
}
exports.isBase64 = isBase64;
/**
 * Checks if a string is base64 encoded.
 */
function IsBase64(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_BASE64,
        validate: function (value) { return isBase64(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be base64 encoded"; }, validationOptions)
    }, validationOptions);
}
exports.IsBase64 = IsBase64;

//# sourceMappingURL=IsBase64.js.map
