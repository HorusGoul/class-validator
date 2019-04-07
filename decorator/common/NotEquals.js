"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.NOT_EQUALS = "notEquals";
/**
 * Checks if value does not match ("!==") the comparison.
 */
function notEquals(value, comparison) {
    return value !== comparison;
}
exports.notEquals = notEquals;
/**
 * Checks if the value does not match ("!==") the comparison.
 */
function NotEquals(comparison, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.NOT_EQUALS,
        constraints: [comparison],
        validate: function (value, args) { return notEquals(value, args.constraints[0]); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property should not be equal to $constraint1"; }, validationOptions)
    }, validationOptions);
}
exports.NotEquals = NotEquals;

//# sourceMappingURL=NotEquals.js.map
