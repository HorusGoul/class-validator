"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsJSON = require("validator/lib/isJSON");
exports.IS_JSON = "isJson";
/**
 * Checks if the string is valid JSON (note: uses JSON.parse).
 * If given value is not a string, then it returns false.
 */
function isJSON(value) {
    return typeof value === "string" && validatorJsIsJSON(value);
}
exports.isJSON = isJSON;
/**
 * Checks if the string is valid JSON (note: uses JSON.parse).
 */
function IsJSON(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_JSON,
        validate: function (value) { return isJSON(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a json string"; }, validationOptions)
    }, validationOptions);
}
exports.IsJSON = IsJSON;

//# sourceMappingURL=IsJSON.js.map
