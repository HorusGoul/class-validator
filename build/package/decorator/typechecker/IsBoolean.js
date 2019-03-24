"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.IS_BOOLEAN = "isBoolean";
/**
 * Checks if a given value is a real boolean.
 */
function isBoolean(value) {
    return value instanceof Boolean || typeof value === "boolean";
}
exports.isBoolean = isBoolean;
/**
 * Checks if a value is a boolean.
 */
function IsBoolean(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_BOOLEAN,
        validate: function (value) { return isBoolean(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a boolean value"; }, validationOptions)
    }, validationOptions);
}
exports.IsBoolean = IsBoolean;

//# sourceMappingURL=IsBoolean.js.map
