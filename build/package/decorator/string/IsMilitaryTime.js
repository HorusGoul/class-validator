"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var Matches_1 = require("./Matches");
exports.IS_MILITARY_TIME = "isMilitaryTime";
/**
 * Checks if the string represents a time without a given timezone in the format HH:MM (military)
 * If the given value does not match the pattern HH:MM, then it returns false.
 */
function isMilitaryTime(value) {
    return Matches_1.matches(value, /^([01]\d|2[0-3]):?([0-5]\d)$/);
}
exports.isMilitaryTime = isMilitaryTime;
/**
 * Checks if the string correctly represents a time in the format HH:MM
 */
function IsMilitaryTime(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_MILITARY_TIME,
        validate: function (value) { return isMilitaryTime(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a military time"; }, validationOptions)
    }, validationOptions);
}
exports.IsMilitaryTime = IsMilitaryTime;

//# sourceMappingURL=IsMilitaryTime.js.map
