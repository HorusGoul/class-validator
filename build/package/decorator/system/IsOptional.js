"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationTypes_1 = require("../../validation/ValidationTypes");
var container_1 = require("../../container");
var MetadataStorage_1 = require("../../metadata/MetadataStorage");
var ValidationMetadata_1 = require("../../metadata/ValidationMetadata");
/**
 * Checks if value is missing and if so, ignores all validators.
 */
function IsOptional(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.CONDITIONAL_VALIDATION,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [function (object, value) {
                    return object[propertyName] !== null && object[propertyName] !== undefined;
                }],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.IsOptional = IsOptional;

//# sourceMappingURL=IsOptional.js.map
