"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
exports.IS_EMPTY = "isEmpty";
/**
 * Checks if given value is empty (=== '', === null, === undefined).
 */
function isEmpty(value) {
    return value === "" || value === null || value === undefined;
}
exports.isEmpty = isEmpty;
/**
 * Checks if given value is empty (=== '', === null, === undefined).
 */
function IsEmpty(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_EMPTY,
        validate: function (value, args) { return isEmpty(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be empty"; }, validationOptions),
    }, validationOptions);
}
exports.IsEmpty = IsEmpty;

//# sourceMappingURL=IsEmpty.js.map
