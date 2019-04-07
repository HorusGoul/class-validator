"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsURL = require("validator/lib/isURL");
exports.IS_URL = "isUrl";
/**
 * Checks if the string is an url.
 * If given value is not a string, then it returns false.
 */
function isURL(value, options) {
    return typeof value === "string" && validatorJsIsURL(value, options);
}
exports.isURL = isURL;
/**
 * Checks if the string is an url.
 */
function IsUrl(options, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_URL,
        validate: function (value, args) { return isURL(value, args.constraints[0]); },
        constraints: [options],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be an URL address"; }, validationOptions)
    }, validationOptions);
}
exports.IsUrl = IsUrl;

//# sourceMappingURL=IsUrl.js.map
