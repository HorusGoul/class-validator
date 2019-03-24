"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationMetadata_1 = require("../metadata/ValidationMetadata");
var MetadataStorage_1 = require("../metadata/MetadataStorage");
var ValidationTypes_1 = require("../validation/ValidationTypes");
var container_1 = require("../container");
function Validate(constraintClass, constraintsOrValidationOptions, maybeValidationOptions) {
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.CUSTOM_VALIDATION,
            target: object.constructor,
            propertyName: propertyName,
            constraintCls: constraintClass,
            constraints: constraintsOrValidationOptions instanceof Array ? constraintsOrValidationOptions : undefined,
            validationOptions: !(constraintsOrValidationOptions instanceof Array) ? constraintsOrValidationOptions : maybeValidationOptions
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.Validate = Validate;

//# sourceMappingURL=Validate.js.map
