"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.ARRAY_NOT_CONTAINS = "arrayNotContains";
/**
 * Checks if array does not contain any of the given values.
 * If null or undefined is given then this function returns false.
 */
function arrayNotContains(array, values) {
    if (!(array instanceof Array)) {
        return false;
    }
    return !array || values.every(function (value) { return array.indexOf(value) === -1; });
}
exports.arrayNotContains = arrayNotContains;
/**
 * Checks if array does not contain any of the given values.
 */
function ArrayNotContains(values, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.ARRAY_NOT_CONTAINS,
        validate: function (value, args) { return arrayNotContains(value, args.constraints[0]); },
        constraints: [values],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property should not contain $constraint1 values"; }, validationOptions)
    }, validationOptions);
}
exports.ArrayNotContains = ArrayNotContains;

//# sourceMappingURL=ArrayNotContains.js.map
