"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.ARRAY_NOT_EMPTY = "arrayNotEmpty";
/**
 * Checks if given array is not empty.
 * If null or undefined is given then this function returns false.
 */
function arrayNotEmpty(array) {
    if (!(array instanceof Array)) {
        return false;
    }
    return array instanceof Array && array.length > 0;
}
exports.arrayNotEmpty = arrayNotEmpty;
/**
 * Checks if given array is not empty.
 */
function ArrayNotEmpty(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.ARRAY_NOT_EMPTY,
        validate: function (value) { return arrayNotEmpty(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property should not be empty"; }, validationOptions)
    }, validationOptions);
}
exports.ArrayNotEmpty = ArrayNotEmpty;

//# sourceMappingURL=ArrayNotEmpty.js.map
