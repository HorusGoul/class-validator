"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var Length_1 = require("./Length");
exports.MAX_LENGTH = "maxLength";
/**
 * Checks if the string's length is not more than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
function maxLength(value, max) {
    return typeof value === "string" && Length_1.length(value, 0, max);
}
exports.maxLength = maxLength;
/**
 * Checks if the string's length is not more than given number. Note: this function takes into account surrogate pairs.
 */
function MaxLength(max, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.MAX_LENGTH,
        validate: function (value, args) { return maxLength(value, args.constraints[0]); },
        constraints: [max],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be shorter than or equal to $constraint1 characters"; }, validationOptions)
    }, validationOptions);
}
exports.MaxLength = MaxLength;

//# sourceMappingURL=MaxLength.js.map
