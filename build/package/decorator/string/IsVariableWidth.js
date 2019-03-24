"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsVariableWidth = require("validator/lib/isVariableWidth");
exports.IS_VARIABLE_WIDTH = "isVariableWidth";
/**
 * Checks if the string contains variable-width chars.
 * If given value is not a string, then it returns false.
 */
function isVariableWidth(value) {
    return typeof value === "string" && validatorJsIsVariableWidth(value);
}
exports.isVariableWidth = isVariableWidth;
/**
 * Checks if the string contains a mixture of full and half-width chars.
 */
function IsVariableWidth(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_VARIABLE_WIDTH,
        validate: function (value) { return isVariableWidth(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must contain a full-width and half-width characters"; }, validationOptions)
    }, validationOptions);
}
exports.IsVariableWidth = IsVariableWidth;

//# sourceMappingURL=IsVariableWidth.js.map
