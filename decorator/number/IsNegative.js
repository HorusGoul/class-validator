"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.IS_NEGATIVE = "isNegative";
/**
 * Checks if the value is a negative number.
 */
function isNegative(value) {
    return typeof value === "number" && value < 0;
}
exports.isNegative = isNegative;
/**
 * Checks if the value is a negative number.
 */
function IsNegative(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_NEGATIVE,
        validate: function (value) { return isNegative(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a negative number"; }, validationOptions)
    }, validationOptions);
}
exports.IsNegative = IsNegative;

//# sourceMappingURL=IsNegative.js.map
