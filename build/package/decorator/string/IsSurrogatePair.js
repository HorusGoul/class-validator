"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsSurrogatePair = require("validator/lib/isSurrogatePair");
exports.IS_SURROGATE_PAIR = "isSurrogatePair";
/**
 * Checks if the string contains any surrogate pairs chars.
 * If given value is not a string, then it returns false.
 */
function isSurrogatePair(value) {
    return typeof value === "string" && validatorJsIsSurrogatePair(value);
}
exports.isSurrogatePair = isSurrogatePair;
/**
 * Checks if the string contains any surrogate pairs chars.
 */
function IsSurrogatePair(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_SURROGATE_PAIR,
        validate: function (value) { return isSurrogatePair(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must contain any surrogate pairs chars"; }, validationOptions)
    }, validationOptions);
}
exports.IsSurrogatePair = IsSurrogatePair;

//# sourceMappingURL=IsSurrogatePair.js.map
