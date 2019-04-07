"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var libphonenumber = require("google-libphonenumber");
var phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
exports.IS_PHONE_NUMBER = "isPhoneNumber";
/**
 * Checks if the string is a valid phone number.
 * @param value the potential phone number string to test
 * @param {string} region 2 characters uppercase country code (e.g. DE, US, CH).
 * If users must enter the intl. prefix (e.g. +41), then you may pass "ZZ" or null as region.
 * See [google-libphonenumber, metadata.js:countryCodeToRegionCodeMap on github]{@link https://github.com/ruimarinho/google-libphonenumber/blob/1e46138878cff479aafe2ce62175c6c49cb58720/src/metadata.js#L33}
 */
function isPhoneNumber(value, region) {
    try {
        var phoneNum = phoneUtil.parseAndKeepRawInput(value, region);
        var result = phoneUtil.isValidNumber(phoneNum);
        return result;
    }
    catch (error) {
        // logging?
        return false;
    }
}
exports.isPhoneNumber = isPhoneNumber;
/**
 * Checks if the string is a valid phone number.
 * @param region 2 characters uppercase country code (e.g. DE, US, CH).
 * If users must enter the intl. prefix (e.g. +41), then you may pass "ZZ" or null as region.
 * See [google-libphonenumber, metadata.js:countryCodeToRegionCodeMap on github]{@link https://github.com/ruimarinho/google-libphonenumber/blob/1e46138878cff479aafe2ce62175c6c49cb58720/src/metadata.js#L33}
 */
function IsPhoneNumber(region, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_PHONE_NUMBER,
        constraints: [region],
        validate: function (value, args) { return isPhoneNumber(value, args.constraints[0]); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a valid phone number"; }, validationOptions),
    }, validationOptions);
}
exports.IsPhoneNumber = IsPhoneNumber;

//# sourceMappingURL=IsPhoneNumber.js.map
