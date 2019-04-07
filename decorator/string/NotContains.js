"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var Contains_1 = require("./Contains");
exports.NOT_CONTAINS = "notContains";
/**
 * Checks if the string does not contain the seed.
 * If given value is not a string, then it returns false.
 */
function notContains(value, seed) {
    return typeof value === "string" && !Contains_1.contains(value, seed);
}
exports.notContains = notContains;
/**
 * Checks if the string does not contain the seed.
 */
function NotContains(seed, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.NOT_CONTAINS,
        validate: function (value, args) { return notContains(value, args.constraints[0]); },
        constraints: [seed],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property should not contain a $constraint1 string"; }, validationOptions)
    }, validationOptions);
}
exports.NotContains = NotContains;

//# sourceMappingURL=NotContains.js.map
