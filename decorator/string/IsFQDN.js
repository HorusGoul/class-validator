"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsFQDN = require("validator/lib/isFQDN");
exports.IS_FQDN = "isFqdn";
/**
 * Checks if the string is a fully qualified domain name (e.g. domain.com).
 * If given value is not a string, then it returns false.
 */
function isFQDN(value, options) {
    return typeof value === "string" && validatorJsIsFQDN(value, options);
}
exports.isFQDN = isFQDN;
/**
 * Checks if the string is a fully qualified domain name (e.g. domain.com).
 */
function IsFQDN(options, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_FQDN,
        validate: function (value, args) { return isFQDN(value, args.constraints[0]); },
        constraints: [options],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a valid domain name"; }, validationOptions)
    }, validationOptions);
}
exports.IsFQDN = IsFQDN;

//# sourceMappingURL=IsFQDN.js.map
