"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var register_decorator_1 = require("../register-decorator");
function buildMessage(impl, validationOptions) {
    return function (validationArguments) {
        var eachPrefix = validationOptions && validationOptions.each
            ? "each value in "
            : "";
        return impl(eachPrefix, validationArguments);
    };
}
exports.buildMessage = buildMessage;
function ValidateBy(validator, validationOptions) {
    return function (object, propertyName) {
        register_decorator_1.registerDecorator({
            name: validator.name,
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: validator.constraints,
            validator: {
                validate: validator.validate,
                defaultMessage: validator.defaultMessage
            }
        });
    };
}
exports.ValidateBy = ValidateBy;

//# sourceMappingURL=ValidateBy.js.map
