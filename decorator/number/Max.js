"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.MAX = "max";
/**
 * Checks if the first number is less than or equal to the second/reference.
 */
function max(num, reference) {
    return typeof num === "number" && typeof reference === "number" && num <= reference;
}
exports.max = max;
/**
 * Checks if the given number is less than or equal to the reference number.
 */
function Max(reference, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.MAX,
        validate: function (value, args) { return max(value, args.constraints[0]); },
        constraints: [reference],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must not be greater than $constraint1"; }, validationOptions)
    }, validationOptions);
}
exports.Max = Max;

//# sourceMappingURL=Max.js.map
