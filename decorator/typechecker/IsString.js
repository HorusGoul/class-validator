"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.IS_STRING = "isString";
/**
 * Checks if a given value is a real string.
 */
function isString(value) {
    return value instanceof String || typeof value === "string";
}
exports.isString = isString;
/**
 * Checks if a value is a string.
 */
function IsString(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_STRING,
        validate: function (value) { return isString(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a string"; }, validationOptions)
    }, validationOptions);
}
exports.IsString = IsString;

//# sourceMappingURL=IsString.js.map
