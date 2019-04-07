"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.IS_DATE = "isDate";
/**
 * Checks if a given value is a real date.
 */
function isDate(value) {
    return value instanceof Date && !isNaN(value.getTime());
}
exports.isDate = isDate;
/**
 * Checks if a value is a date.
 */
function IsDate(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_DATE,
        validate: function (value) { return isDate(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a Date instance"; }, validationOptions)
    }, validationOptions);
}
exports.IsDate = IsDate;

//# sourceMappingURL=IsDate.js.map
