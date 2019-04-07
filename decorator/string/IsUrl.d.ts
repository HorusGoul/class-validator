/// <reference types="validator" />
import { ValidationOptions } from "../ValidationOptions";
export declare const IS_URL = "isUrl";
/**
 * Checks if the string is an url.
 * If given value is not a string, then it returns false.
 */
export declare function isURL(value: string, options?: ValidatorJS.IsURLOptions): boolean;
/**
 * Checks if the string is an url.
 */
export declare function IsUrl(options?: ValidatorJS.IsURLOptions, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=IsUrl.d.ts.map