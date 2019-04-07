import { ValidationOptions } from "../ValidationOptions";
export declare const MAX_LENGTH = "maxLength";
/**
 * Checks if the string's length is not more than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export declare function maxLength(value: string, max: number): boolean;
/**
 * Checks if the string's length is not more than given number. Note: this function takes into account surrogate pairs.
 */
export declare function MaxLength(max: number, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=MaxLength.d.ts.map