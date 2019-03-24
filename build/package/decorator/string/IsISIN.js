"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsISIN = require("validator/lib/isISIN");
exports.IS_ISIN = "isIsin";
/**
 * Checks if the string is an ISIN (stock/security identifier).
 * If given value is not a string, then it returns false.
 */
function isISIN(value) {
    return typeof value === "string" && validatorJsIsISIN(value);
}
exports.isISIN = isISIN;
/**
 * Checks if the string is an ISIN (stock/security identifier).
 */
function IsISIN(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_ISIN,
        validate: function (value) { return isISIN(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be an ISIN (stock/security identifier)"; }, validationOptions)
    }, validationOptions);
}
exports.IsISIN = IsISIN;

//# sourceMappingURL=IsISIN.js.map
