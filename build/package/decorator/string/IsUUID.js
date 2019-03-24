"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsUUID = require("validator/lib/isUUID");
exports.IS_UUID = "isUuid";
/**
 * Checks if the string is a UUID (version 3, 4 or 5).
 * If given value is not a string, then it returns false.
 */
function isUUID(value, version) {
    return typeof value === "string" && validatorJsIsUUID(value, version);
}
exports.isUUID = isUUID;
/**
 * Checks if the string is a UUID (version 3, 4 or 5).
 */
function IsUUID(version, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_UUID,
        validate: function (value, args) { return isUUID(value, args.constraints[0]); },
        constraints: [version],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be an UUID"; }, validationOptions)
    }, validationOptions);
}
exports.IsUUID = IsUUID;

//# sourceMappingURL=IsUUID.js.map
