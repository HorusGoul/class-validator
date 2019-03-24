"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.EQUALS = "equals";
/**
 * Checks if value matches ("===") the comparison.
 */
function equals(value, comparison) {
    return value === comparison;
}
exports.equals = equals;
/**
 * Checks if the value match ("===") the comparison.
 */
function Equals(comparison, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.EQUALS,
        validate: function (value, args) { return equals(value, args.constraints[0]); },
        constraints: [comparison],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be equal to $constraint1"; }, validationOptions),
    }, validationOptions);
}
exports.Equals = Equals;

//# sourceMappingURL=Equals.js.map
