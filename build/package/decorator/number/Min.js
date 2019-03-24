"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.MIN = "min";
/**
 * Checks if the first number is greater than or equal to the second/reference.
 */
function min(num, reference) {
    return typeof num === "number" && typeof reference === "number" && num >= reference;
}
exports.min = min;
/**
 * Checks if the given number is greater than or equal to reference number.
 */
function Min(reference, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.MIN,
        validate: function (value, args) { return min(value, args.constraints[0]); },
        constraints: [reference],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must not be less than $constraint1"; }, validationOptions)
    }, validationOptions);
}
exports.Min = Min;

//# sourceMappingURL=Min.js.map
