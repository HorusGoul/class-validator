"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.IS_INSTANCE = "isInstance";
/**
 * Checks if the value is an instance of the specified object.
 */
function isInstance(object, targetTypeConstructor) {
    return targetTypeConstructor
        && typeof targetTypeConstructor === "function"
        && object instanceof targetTypeConstructor;
}
exports.isInstance = isInstance;
/**
 * Checks if all array's values are unique. Comparison for objects is reference-based.
 */
function IsInstance(targetType, validationOptions) {
    var _this = this;
    return ValidateBy_1.ValidateBy({
        name: exports.IS_INSTANCE,
        validate: function (value, args) { return isInstance(value, args.constraints[0]); },
        constraints: [targetType],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix, args) {
            if (args.constraints[0]) {
                return eachPrefix + ("$property must be an instance of " + args.constraints[0].name);
            }
            else {
                return eachPrefix + (_this.IS_INSTANCE + " decorator expects and object as value, but got falsy value.");
            }
        }, validationOptions)
    }, validationOptions);
}
exports.IsInstance = IsInstance;

//# sourceMappingURL=IsInstance.js.map
