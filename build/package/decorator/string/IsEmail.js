"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsEmail = require("validator/lib/isEmail");
exports.IS_EMAIL = "isEmail";
/**
 * Checks if the string is an email.
 * If given value is not a string, then it returns false.
 */
function isEmail(value, options) {
    return typeof value === "string" && validatorJsIsEmail(value, options);
}
exports.isEmail = isEmail;
/**
 * Checks if the string is an email.
 */
function IsEmail(options, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_EMAIL,
        validate: function (value, args) { return isEmail(value, args.constraints[0]); },
        constraints: [options],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be an email"; }, validationOptions)
    }, validationOptions);
}
exports.IsEmail = IsEmail;

//# sourceMappingURL=IsEmail.js.map
