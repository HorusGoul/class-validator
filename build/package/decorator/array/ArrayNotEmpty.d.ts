import { ValidationOptions } from "../ValidationOptions";
export declare const ARRAY_NOT_EMPTY = "arrayNotEmpty";
/**
 * Checks if given array is not empty.
 * If null or undefined is given then this function returns false.
 */
export declare function arrayNotEmpty(array: any[]): boolean;
/**
 * Checks if given array is not empty.
 */
export declare function ArrayNotEmpty(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=ArrayNotEmpty.d.ts.map