import { ValidationOptions } from "../ValidationOptions";
export declare const MIN_LENGTH = "minLength";
/**
 * Checks if the string's length is not less than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export declare function minLength(value: string, min: number): boolean;
/**
 * Checks if the string's length is not less than given number. Note: this function takes into account surrogate pairs.
 */
export declare function MinLength(min: number, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=MinLength.d.ts.map