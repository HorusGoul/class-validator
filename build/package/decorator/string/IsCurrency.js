"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsCurrency = require("validator/lib/isCurrency");
exports.IS_CURRENCY = "isCurrency";
/**
 * Checks if the string is a valid currency amount.
 * If given value is not a string, then it returns false.
 */
function isCurrency(value, options) {
    return typeof value === "string" && validatorJsIsCurrency(value, options);
}
exports.isCurrency = isCurrency;
/**
 * Checks if the string is a valid currency amount.
 */
function IsCurrency(options, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_CURRENCY,
        validate: function (value, args) { return isCurrency(value, args.constraints[0]); },
        constraints: [options],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a currency"; }, validationOptions)
    }, validationOptions);
}
exports.IsCurrency = IsCurrency;

//# sourceMappingURL=IsCurrency.js.map
