"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.ARRAY_MAX_SIZE = "arrayMaxSize";
/**
 * Checks if array's length is as maximal this number.
 * If null or undefined is given then this function returns false.
 */
function arrayMaxSize(array, max) {
    if (!(array instanceof Array)) {
        return false;
    }
    return array instanceof Array && array.length <= max;
}
exports.arrayMaxSize = arrayMaxSize;
/**
 * Checks if array's length is as maximal this number.
 */
function ArrayMaxSize(max, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.ARRAY_MAX_SIZE,
        validate: function (value, args) { return arrayMaxSize(value, args.constraints[0]); },
        constraints: [max],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must contain not more than $constraint1 elements"; }, validationOptions)
    }, validationOptions);
}
exports.ArrayMaxSize = ArrayMaxSize;

//# sourceMappingURL=ArrayMaxSize.js.map
