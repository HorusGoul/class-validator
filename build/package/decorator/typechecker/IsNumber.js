"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.IS_NUMBER = "isNumber";
/**
 * Checks if a given value is a number.
 */
function isNumber(value, options) {
    if (options === void 0) { options = {}; }
    if (value === Infinity || value === -Infinity) {
        return options.allowInfinity;
    }
    if (Number.isNaN(value)) {
        return options.allowNaN;
    }
    return Number.isFinite(value);
}
exports.isNumber = isNumber;
/**
 * Checks if a value is a number.
 */
function IsNumber(options, validationOptions) {
    if (options === void 0) { options = {}; }
    return ValidateBy_1.ValidateBy({
        name: exports.IS_NUMBER,
        validate: function (value, args) { return isNumber(value, args.constraints[0]); },
        constraints: [options],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a number"; }, validationOptions)
    }, validationOptions);
}
exports.IsNumber = IsNumber;

//# sourceMappingURL=IsNumber.js.map
