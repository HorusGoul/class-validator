"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConstraintMetadata_1 = require("../metadata/ConstraintMetadata");
var container_1 = require("../container");
var MetadataStorage_1 = require("../metadata/MetadataStorage");
/**
 * Registers custom validator class.
 */
function ValidatorConstraint(options) {
    return function (target) {
        var isAsync = options && options.async ? true : false;
        var name = options && options.name ? options.name : "";
        if (!name) {
            name = target.name;
            if (!name) // generate name if it was not given
                name = name.replace(/\.?([A-Z]+)/g, function (x, y) { return "_" + y.toLowerCase(); }).replace(/^_/, "");
        }
        var metadata = new ConstraintMetadata_1.ConstraintMetadata(target, name, isAsync);
        container_1.getFromContainer(MetadataStorage_1.MetadataStorage).addConstraintMetadata(metadata);
    };
}
exports.ValidatorConstraint = ValidatorConstraint;

//# sourceMappingURL=ValidatorConstraint.js.map
