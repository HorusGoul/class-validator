"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationTypes_1 = require("../../validation/ValidationTypes");
var container_1 = require("../../container");
var MetadataStorage_1 = require("../../metadata/MetadataStorage");
var ValidationMetadata_1 = require("../../metadata/ValidationMetadata");
/**
 * Objects / object arrays marked with this decorator will also be validated.
 */
function ValidateIf(condition, validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.CONDITIONAL_VALIDATION,
            target: object.constructor,
            propertyName: propertyName,
            constraints: [condition],
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.ValidateIf = ValidateIf;

//# sourceMappingURL=ValidateIf.js.map
