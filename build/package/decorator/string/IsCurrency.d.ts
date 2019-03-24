/// <reference types="validator" />
import { ValidationOptions } from "../ValidationOptions";
export declare const IS_CURRENCY = "isCurrency";
/**
 * Checks if the string is a valid currency amount.
 * If given value is not a string, then it returns false.
 */
export declare function isCurrency(value: string, options?: ValidatorJS.IsCurrencyOptions): boolean;
/**
 * Checks if the string is a valid currency amount.
 */
export declare function IsCurrency(options?: ValidatorJS.IsCurrencyOptions, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=IsCurrency.d.ts.map