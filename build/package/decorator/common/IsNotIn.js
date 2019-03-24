"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.IS_NOT_IN = "isNotIn";
/**
 * Checks if given value not in a array of allowed values.
 */
function isNotIn(value, possibleValues) {
    return !(possibleValues instanceof Array) || !possibleValues.some(function (possibleValue) { return possibleValue === value; });
}
exports.isNotIn = isNotIn;
/**
 * Checks if value is not in a array of disallowed values.
 */
function IsNotIn(values, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_NOT_IN,
        validate: function (value, args) { return isNotIn(value, args.constraints[0]); },
        constraints: [values],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property should not be one of the following values: $constraint1"; }, validationOptions),
    }, validationOptions);
}
exports.IsNotIn = IsNotIn;

//# sourceMappingURL=IsNotIn.js.map
