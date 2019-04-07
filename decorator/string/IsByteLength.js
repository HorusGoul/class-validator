"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsByteLength = require("validator/lib/isByteLength");
exports.IS_BYTE_LENGTH = "isByteLength";
/**
 * Checks if the string's length (in bytes) falls in a range.
 * If given value is not a string, then it returns false.
 */
function isByteLength(value, min, max) {
    return typeof value === "string" && validatorJsIsByteLength(value, min, max);
}
exports.isByteLength = isByteLength;
/**
 * Checks if the string's length (in bytes) falls in a range.
 */
function IsByteLength(min, max, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_BYTE_LENGTH,
        validate: function (value, args) { return isByteLength(value, args.constraints[0], args.constraints[1]); },
        constraints: [min, max],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property's byte length must fall into ($constraint1, $constraint2) range"; }, validationOptions)
    }, validationOptions);
}
exports.IsByteLength = IsByteLength;

//# sourceMappingURL=IsByteLength.js.map
