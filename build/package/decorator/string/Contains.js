"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsContains = require("validator/lib/contains");
exports.CONTAINS = "contains";
/**
 * Checks if the string contains the seed.
 * If given value is not a string, then it returns false.
 */
function contains(value, seed) {
    return typeof value === "string" && validatorJsContains(value, seed);
}
exports.contains = contains;
/**
 * Checks if the string contains the seed.
 */
function Contains(seed, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.CONTAINS,
        validate: function (value, args) { return contains(value, args.constraints[0]); },
        constraints: [seed],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must contain a $constraint1 string"; }, validationOptions),
    }, validationOptions);
}
exports.Contains = Contains;

//# sourceMappingURL=Contains.js.map
