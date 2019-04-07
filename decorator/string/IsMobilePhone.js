"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsMobilePhone = require("validator/lib/isMobilePhone");
exports.IS_MOBILE_PHONE = "isMobilePhone";
/**
 * Checks if the string is a mobile phone number. See ValidatorJS for a list of supported locales!
 * If given value is not a string, then it returns false.
 */
function isMobilePhone(value, locale) {
    // typings are wrong: current ValidatorJS.isMobilePhone supports both one locale and an array of locales!
    return typeof value === "string" && validatorJsIsMobilePhone(value, locale);
}
exports.isMobilePhone = isMobilePhone;
/**
 * Checks if the string is a mobile phone number. See ValidatorJS for a list of supported locales!
 */
function IsMobilePhone(locale, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_MOBILE_PHONE,
        validate: function (value, args) { return isMobilePhone(value, args.constraints[0]); },
        constraints: [locale],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a phone number"; }, validationOptions)
    }, validationOptions);
}
exports.IsMobilePhone = IsMobilePhone;

//# sourceMappingURL=IsMobilePhone.js.map
