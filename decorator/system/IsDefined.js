"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var ValidationTypes_1 = require("../../validation/ValidationTypes");
// isDefined is (yet) a special case
exports.IS_DEFINED = ValidationTypes_1.ValidationTypes.IS_DEFINED;
/**
 * Checks if value is defined (!== undefined, !== null).
 */
function isDefined(value) {
    return value !== undefined && value !== null;
}
exports.isDefined = isDefined;
/**
 * Checks if given value is defined (!== undefined, !== null).
 */
function IsDefined(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_DEFINED,
        validate: function (value) { return isDefined(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property should not be null or undefined"; }, validationOptions)
    }, validationOptions);
}
exports.IsDefined = IsDefined;

//# sourceMappingURL=IsDefined.js.map
