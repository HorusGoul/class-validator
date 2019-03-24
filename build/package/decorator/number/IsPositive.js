"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.IS_POSITIVE = "isPositive";
/**
 * Checks if the value is a positive number.
 */
function isPositive(value) {
    return typeof value === "number" && value > 0;
}
exports.isPositive = isPositive;
/**
 * Checks if the value is a positive number.
 */
function IsPositive(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_POSITIVE,
        validate: function (value) { return isPositive(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a positive number"; }, validationOptions)
    }, validationOptions);
}
exports.IsPositive = IsPositive;

//# sourceMappingURL=IsPositive.js.map
