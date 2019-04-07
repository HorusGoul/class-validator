import { ValidationOptions } from "../ValidationOptions";
export declare const ARRAY_NOT_CONTAINS = "arrayNotContains";
/**
 * Checks if array does not contain any of the given values.
 * If null or undefined is given then this function returns false.
 */
export declare function arrayNotContains(array: any[], values: any[]): boolean;
/**
 * Checks if array does not contain any of the given values.
 */
export declare function ArrayNotContains(values: any[], validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=ArrayNotContains.d.ts.map