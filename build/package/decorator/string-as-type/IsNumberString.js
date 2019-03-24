"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsNumeric = require("validator/lib/isNumeric");
exports.IS_NUMBER_STRING = "isNumberString";
/**
 * Checks if the string is numeric.
 * If given value is not a string, then it returns false.
 */
function isNumberString(value, options) {
    return typeof value === "string" && validatorJsIsNumeric(value, options);
}
exports.isNumberString = isNumberString;
/**
 * Checks if the string is a number.
 */
function IsNumberString(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_NUMBER_STRING,
        validate: function (value) { return isNumberString(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a number string"; }, validationOptions)
    }, validationOptions);
}
exports.IsNumberString = IsNumberString;

//# sourceMappingURL=IsNumberString.js.map
