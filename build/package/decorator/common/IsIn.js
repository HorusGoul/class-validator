"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.IS_IN = "isIn";
/**
 * Checks if given value is in a array of allowed values.
 */
function isIn(value, possibleValues) {
    return !(possibleValues instanceof Array) || possibleValues.some(function (possibleValue) { return possibleValue === value; });
}
exports.isIn = isIn;
/**
 * Checks if value is in a array of allowed values.
 */
function IsIn(values, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_IN,
        constraints: [values],
        validate: function (value, args) { return isIn(value, args.constraints[0]); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be one of the following values: $constraint1"; }, validationOptions),
    }, validationOptions);
}
exports.IsIn = IsIn;

//# sourceMappingURL=IsIn.js.map
