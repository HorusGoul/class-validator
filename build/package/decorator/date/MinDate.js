"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.MIN_DATE = "minDate";
/**
 * Checks if the value is a date that's after the specified date.
 */
function minDate(date, minDate) {
    return date && date.getTime() >= minDate.getTime();
}
exports.minDate = minDate;
/**
 * Checks if the value is a date that's after the specified date.
 */
function MinDate(date, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.MIN_DATE,
        validate: function (value, args) { return minDate(value, args.constraints[0]); },
        constraints: [date],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return "minimal allowed date for " + eachPrefix + "$property is $constraint1"; }, validationOptions)
    }, validationOptions);
}
exports.MinDate = MinDate;

//# sourceMappingURL=MinDate.js.map
