"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsMongoId = require("validator/lib/isMongoId");
exports.IS_MONGO_ID = "isMongoId";
/**
 * Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.
 * If given value is not a string, then it returns false.
 */
function isMongoId(value) {
    return typeof value === "string" && validatorJsIsMongoId(value);
}
exports.isMongoId = isMongoId;
/**
 * Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.
 */
function IsMongoId(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_MONGO_ID,
        validate: function (value) { return isMongoId(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a mongodb id"; }, validationOptions)
    }, validationOptions);
}
exports.IsMongoId = IsMongoId;

//# sourceMappingURL=IsMongoId.js.map
