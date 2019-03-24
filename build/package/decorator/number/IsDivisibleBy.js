"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorIsDivisibleBy = require("validator/lib/isDivisibleBy");
exports.IS_DIVISIBLE_BY = "isDivisibleBy";
/**
 * Checks if value is a number that's divisible by another.
 */
function isDivisibleBy(value, num) {
    return typeof value === "number" &&
        typeof num === "number" &&
        validatorIsDivisibleBy(String(value), num);
}
exports.isDivisibleBy = isDivisibleBy;
/**
 * Checks if the value is a number that's divisible by another.
 */
function IsDivisibleBy(num, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_DIVISIBLE_BY,
        validate: function (value, args) { return isDivisibleBy(value, args.constraints[0]); },
        constraints: [num],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be divisible by $constraint1"; }, validationOptions)
    }, validationOptions);
}
exports.IsDivisibleBy = IsDivisibleBy;

//# sourceMappingURL=IsDivisibleBy.js.map
