"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsIsIP = require("validator/lib/isIP");
exports.IS_IP = "isIp";
/**
 * Checks if the string is an IP (version 4 or 6).
 * If given value is not a string, then it returns false.
 */
function isIP(value, version) {
    // typings for isIP are wrong: JS actually accepts strings and numbers
    var versionNr = version ? Number(version) : undefined;
    return typeof value === "string" && validatorJsIsIP(value, versionNr);
}
exports.isIP = isIP;
/**
 * Checks if the string is an IP (version 4 or 6).
 */
function IsIP(version, validationOptions) {
    return ValidateBy_1.ValidateBy({
        name: exports.IS_IP,
        validate: function (value, args) { return isIP(value, args.constraints[0]); },
        constraints: [version],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must be an ip address"; }, validationOptions)
    }, validationOptions);
}
exports.IsIP = IsIP;

//# sourceMappingURL=IsIP.js.map
