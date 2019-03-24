/// <reference types="validator" />
import { ValidationOptions } from "../ValidationOptions";
export declare const IS_EMAIL = "isEmail";
/**
 * Checks if the string is an email.
 * If given value is not a string, then it returns false.
 */
export declare function isEmail(value: string, options?: ValidatorJS.IsEmailOptions): boolean;
/**
 * Checks if the string is an email.
 */
export declare function IsEmail(options?: ValidatorJS.IsEmailOptions, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=IsEmail.d.ts.map