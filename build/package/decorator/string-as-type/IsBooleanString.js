"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsBoolean = require("validator/lib/isBoolean");
exports.IS_BOOLEAN_STRING = "isBooleanString";
/**
 * Checks if a string is a boolean.
 * If given value is not a string, then it returns false.
 */
function isBooleanString(value) {
    return typeof value === "string" && validatorJsIsBoolean(value);
}
exports.isBooleanString = isBooleanString;
/**
 * Checks if a string is a boolean.
 */
function IsBooleanString(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_BOOLEAN_STRING,
        validate: function (value) { return isBooleanString(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + eachPrefix + "$property must be a boolean string"; }, validationOptions)
    }, validationOptions);
}
exports.IsBooleanString = IsBooleanString;

//# sourceMappingURL=IsBooleanString.js.map
