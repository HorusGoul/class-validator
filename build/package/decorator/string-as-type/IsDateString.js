"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var IsString_1 = require("../typechecker/IsString");
exports.IS_DATE_STRING = "isDateString";
/**
 * Checks if a given value is a ISOString date.
 */
function isDateString(value) {
    var regex = /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z|\+[0-2]\d(?:\:[0-5]\d)?)?$/g;
    return IsString_1.isString(value) && regex.test(value);
}
exports.isDateString = isDateString;
function IsDateString(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_DATE_STRING,
        validate: function (value) { return isDateString(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a ISOString"; }, validationOptions)
    }, validationOptions);
}
exports.IsDateString = IsDateString;

//# sourceMappingURL=IsDateString.js.map
