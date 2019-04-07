"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsISBN = require("validator/lib/isISBN");
exports.IS_ISBN = "isIsbn";
/**
 * Checks if the string is an ISBN (version 10 or 13).
 * If given value is not a string, then it returns false.
 */
function isISBN(value, version) {
    // typings are wrong: JS actually allows string or number
    var versionNr = version ? Number(version) : undefined;
    return typeof value === "string" && validatorJsIsISBN(value, versionNr);
}
exports.isISBN = isISBN;
/**
 * Checks if the string is an ISBN (version 10 or 13).
 */
function IsISBN(version, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_ISBN,
        validate: function (value, args) { return isISBN(value, args.constraints[0]); },
        constraints: [version],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be an ISBN"; }, validationOptions)
    }, validationOptions);
}
exports.IsISBN = IsISBN;

//# sourceMappingURL=IsISBN.js.map
