"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var Length_1 = require("./Length");
exports.MIN_LENGTH = "minLength";
/**
 * Checks if the string's length is not less than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
function minLength(value, min) {
    return typeof value === "string" && Length_1.length(value, min);
}
exports.minLength = minLength;
/**
 * Checks if the string's length is not less than given number. Note: this function takes into account surrogate pairs.
 */
function MinLength(min, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.MIN_LENGTH,
        validate: function (value, args) { return minLength(value, args.constraints[0]); },
        constraints: [min],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be longer than or equal to $constraint1 characters"; }, validationOptions)
    }, validationOptions);
}
exports.MinLength = MinLength;

//# sourceMappingURL=MinLength.js.map
