"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.MAX_DATE = "maxDate";
/**
 * Checks if the value is a date that's before the specified date.
 */
function maxDate(date, maxDate) {
    return date && date.getTime() <= maxDate.getTime();
}
exports.maxDate = maxDate;
/**
 * Checks if the value is a date that's before the specified date.
 */
function MaxDate(date, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.MAX_DATE,
        validate: function (value, args) { return maxDate(value, args.constraints[0]); },
        constraints: [date],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return "maximal allowed date for " + eachPrefix + "$property is $constraint1"; }, validationOptions)
    }, validationOptions);
}
exports.MaxDate = MaxDate;

//# sourceMappingURL=MaxDate.js.map
