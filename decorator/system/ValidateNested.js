"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationTypes_1 = require("../../validation/ValidationTypes");
var container_1 = require("../../container");
var MetadataStorage_1 = require("../../metadata/MetadataStorage");
var ValidationMetadata_1 = require("../../metadata/ValidationMetadata");
/**
 * Objects / object arrays marked with this decorator will also be validated.
 */
function ValidateNested(validationOptions) {
    var opts = __assign({}, validationOptions);
    var eachPrefix = opts.each ? "each value in " : "";
    opts.message = opts.message || eachPrefix + "nested property $property must be either object or array";
    return function (object, propertyName) {
        var args = {
            type: ValidationTypes_1.ValidationTypes.NESTED_VALIDATION,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: opts,
        };
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addValidationMetadata(new ValidationMetadata_1.ValidationMetadata(args));
    };
}
exports.ValidateNested = ValidateNested;

//# sourceMappingURL=ValidateNested.js.map
