"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationTypes_1 = require("../../validation/ValidationTypes");
var container_1 = require("../../container");
var MetadataStorage_1 = require("../../metadata/MetadataStorage");
var ValidationMetadata_1 = require("../../metadata/ValidationMetadata");
/**
 * If object has both allowed and not allowed properties a validation error will be thrown.
 */
function Allow(validationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.WHITELIST,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.Allow = Allow;

//# sourceMappingURL=Allow.js.map
