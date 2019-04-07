import { ValidationOptions } from "../ValidationOptions";
export declare const IS_BYTE_LENGTH = "isByteLength";
/**
 * Checks if the string's length (in bytes) falls in a range.
 * If given value is not a string, then it returns false.
 */
export declare function isByteLength(value: string, min: number, max?: number): boolean;
/**
 * Checks if the string's length (in bytes) falls in a range.
 */
export declare function IsByteLength(min: number, max?: number, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=IsByteLength.d.ts.map