"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsAscii = require("validator/lib/isAscii");
exports.IS_ASCII = "isAscii";
/**
 * Checks if the string contains ASCII chars only.
 * If given value is not a string, then it returns false.
 */
function isAscii(value) {
    return typeof value === "string" && validatorJsIsAscii(value);
}
exports.isAscii = isAscii;
/**
 * Checks if the string contains ASCII chars only.
 */
function IsAscii(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_ASCII,
        validate: function (value) { return isAscii(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must contain only ASCII characters"; }, validationOptions)
    }, validationOptions);
}
exports.IsAscii = IsAscii;

//# sourceMappingURL=IsAscii.js.map
