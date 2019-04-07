"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.IS_ARRAY = "isArray";
/**
 * Checks if a given value is an array
 */
function isArray(value) {
    return value instanceof Array;
}
exports.isArray = isArray;
/**
 * Checks if a value is an array.
 */
function IsArray(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_ARRAY,
        validate: function (value) { return isArray(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be an array"; }, validationOptions)
    }, validationOptions);
}
exports.IsArray = IsArray;

//# sourceMappingURL=IsArray.js.map
