/// <reference types="validator" />
import { ValidationOptions } from "../ValidationOptions";
export declare const IS_NUMBER_STRING = "isNumberString";
/**
 * Checks if the string is numeric.
 * If given value is not a string, then it returns false.
 */
export declare function isNumberString(value: string, options?: ValidatorJS.IsNumericOptions): boolean;
/**
 * Checks if the string is a number.
 */
export declare function IsNumberString(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=IsNumberString.d.ts.map