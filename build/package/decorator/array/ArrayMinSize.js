"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.ARRAY_MIN_SIZE = "arrayMinSize";
/**
 * Checks if array's length is as minimal this number.
 * If null or undefined is given then this function returns false.
 */
function arrayMinSize(array, min) {
    if (!(array instanceof Array)) {
        return false;
    }
    return array instanceof Array && array.length >= min;
}
exports.arrayMinSize = arrayMinSize;
/**
 * Checks if array's length is as minimal this number.
 */
function ArrayMinSize(min, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.ARRAY_MIN_SIZE,
        validate: function (value, args) { return arrayMinSize(value, args.constraints[0]); },
        constraints: [min],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must contain at least $constraint1 elements"; }, validationOptions)
    }, validationOptions);
}
exports.ArrayMinSize = ArrayMinSize;

//# sourceMappingURL=ArrayMinSize.js.map
