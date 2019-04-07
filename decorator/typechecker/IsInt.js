"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.IS_INT = "isInt";
/**
 * Checks if value is an integer.
 */
function isInt(val) {
    return Number.isInteger(val);
}
exports.isInt = isInt;
/**
 * Checks if the value is an integer number.
 */
function IsInt(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_INT,
        validate: function (value) { return isInt(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be an integer number"; }, validationOptions)
    }, validationOptions);
}
exports.IsInt = IsInt;

//# sourceMappingURL=IsInt.js.map
