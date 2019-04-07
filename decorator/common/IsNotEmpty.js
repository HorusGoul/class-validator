"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.IS_NOT_EMPTY = "isNotEmpty";
/**
 * Checks if given value is not empty (!== '', !== null, !== undefined).
 */
function isNotEmpty(value) {
    return value !== "" && value !== null && value !== undefined;
}
exports.isNotEmpty = isNotEmpty;
/**
 * Checks if given value is not empty (!== '', !== null, !== undefined).
 */
function IsNotEmpty(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_NOT_EMPTY,
        validate: function (value, args) { return isNotEmpty(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property should not be empty"; }, validationOptions),
    }, validationOptions);
}
exports.IsNotEmpty = IsNotEmpty;

//# sourceMappingURL=IsNotEmpty.js.map
