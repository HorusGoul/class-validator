import {ValidationOptions} from "../ValidationOptions";
import {buildMessage, ValidateBy} from "../ValidateBy";
import validatorJsIsHexColor = require("validator/lib/isHexColor");

export const IS_HEX_COLOR = "isHexColor";

/**
 * Checks if the string is a hexadecimal color.
 * If given value is not a string, then it returns false.
 */
export function isHexColor(value: string): boolean {
    return typeof value === "string" && validatorJsIsHexColor(value);
}

/**
 * Checks if the string is a hexadecimal color.
 */
export function IsHexColor(validationOptions?: ValidationOptions) {
    return ValidateBy({
            name: IS_HEX_COLOR,
            validate: (value) => isHexColor(value),
            defaultMessage: buildMessage((eachPrefix) => eachPrefix + "$property must be a hexadecimal color", validationOptions)
        },
        validationOptions
    );
}
