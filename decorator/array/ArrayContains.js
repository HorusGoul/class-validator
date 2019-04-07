"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.ARRAY_CONTAINS = "arrayContains";
/**
 * Checks if array contains all values from the given array of values.
 * If null or undefined is given then this function returns false.
 */
function arrayContains(array, values) {
    if (!(array instanceof Array)) {
        return false;
    }
    return !array || values.every(function (value) { return array.indexOf(value) !== -1; });
}
exports.arrayContains = arrayContains;
/**
 * Checks if array contains all values from the given array of values.
 */
function ArrayContains(values, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.ARRAY_CONTAINS,
        validate: function (value, args) { return arrayContains(value, args.constraints[0]); },
        constraints: [values],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must contain $constraint1 values"; }, validationOptions)
    }, validationOptions);
}
exports.ArrayContains = ArrayContains;

//# sourceMappingURL=ArrayContains.js.map
