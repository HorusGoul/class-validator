"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.ARRAY_UNIQUE = "arrayUnique";
/**
 * Checks if all array's values are unique. Comparison for objects is reference-based.
 * If null or undefined is given then this function returns false.
 */
function arrayUnique(array) {
    if (!(array instanceof Array)) {
        return false;
    }
    var uniqueItems = array.filter(function (a, b, c) { return c.indexOf(a) === b; });
    return array.length === uniqueItems.length;
}
exports.arrayUnique = arrayUnique;
/**
 * Checks if all array's values are unique. Comparison for objects is reference-based.
 */
function ArrayUnique(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.ARRAY_UNIQUE,
        validate: function (value) { return arrayUnique(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "All $property's elements must be unique"; }, validationOptions)
    }, validationOptions);
}
exports.ArrayUnique = ArrayUnique;

//# sourceMappingURL=ArrayUnique.js.map
