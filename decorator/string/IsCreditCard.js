"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsCreditCard = require("validator/lib/isCreditCard");
exports.IS_CREDIT_CARD = "isCreditCard";
/**
 * Checks if the string is a credit card.
 * If given value is not a string, then it returns false.
 */
function isCreditCard(value) {
    return typeof value === "string" && validatorJsIsCreditCard(value);
}
exports.isCreditCard = isCreditCard;
/**
 * Checks if the string is a credit card.
 */
function IsCreditCard(validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_CREDIT_CARD,
        validate: function (value) { return isCreditCard(value); },
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be a credit card"; }, validationOptions)
    }, validationOptions);
}
exports.IsCreditCard = IsCreditCard;

//# sourceMappingURL=IsCreditCard.js.map
