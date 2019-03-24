"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.IS_ENUM = "isEnum";
/**
 * Checks if a given value is an enum
 */
function isEnum(value, entity) {
    var enumValues = Object.keys(entity)
        .map(function (k) { return entity[k]; });
    return enumValues.indexOf(value) >= 0;
}
exports.isEnum = isEnum;
/**
 * Checks if a value is a number enum.
 */
function IsEnum(entity, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_ENUM,
        validate: function (value, args) { return isEnum(value, args.constraints[0]); },
        constraints: [entity],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a valid enum value"; }, validationOptions)
    }, validationOptions);
}
exports.IsEnum = IsEnum;

//# sourceMappingURL=IsEnum.js.map
