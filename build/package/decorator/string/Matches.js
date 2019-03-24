"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateBy_1 = require("../ValidateBy");
var validatorJsMatches = require("validator/lib/matches");
exports.MATCHES = "matches";
/**
 * Checks if string matches the pattern. Either matches('foo', /foo/i) or matches('foo', 'foo', 'i').
 * If given value is not a string, then it returns false.
 */
function matches(value, pattern, modifiers) {
    return typeof value === "string" && validatorJsMatches(value, pattern, modifiers);
}
exports.matches = matches;
function Matches(pattern, modifiersOrAnnotationOptions, validationOptions) {
    var modifiers;
    if (modifiersOrAnnotationOptions && modifiersOrAnnotationOptions instanceof Object && !validationOptions) {
        validationOptions = modifiersOrAnnotationOptions;
    }
    else {
        modifiers = modifiersOrAnnotationOptions;
    }
    return ValidateBy_1.ValidateBy({
        name: exports.MATCHES,
        validate: function (value, args) { return matches(value, args.constraints[0]); },
        constraints: [pattern, modifiers],
        defaultMessage: ValidateBy_1.buildMessage(function (eachPrefix) { return eachPrefix + "$property must match $constraint1 regular expression"; }, validationOptions)
    }, validationOptions);
}
exports.Matches = Matches;

//# sourceMappingURL=Matches.js.map
