"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsISO8601 = require("validator/lib/isISO8601");
exports.IS_ISO8601 = "isIso8601";
/**
 * Checks if the string is a valid ISO 8601 date.
 * If given value is not a string, then it returns false.
 */
function isISO8601(value) {
    return typeof value === "string" && validatorJsIsISO8601(value);
}
exports.isISO8601 = isISO8601;
/**
 * Checks if the string is a valid ISO 8601 date.
 */
function IsISO8601(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_ISO8601,
        validate: function (value) { return isISO8601(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a valid ISO 8601 date string"; }, validationOptions)
    }, validationOptions);
}
exports.IsISO8601 = IsISO8601;

//# sourceMappingURL=IsISO8601.js.map
