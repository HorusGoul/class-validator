import { ValidationOptions } from "../ValidationOptions";
export declare const ARRAY_CONTAINS = "arrayContains";
/**
 * Checks if array contains all values from the given array of values.
 * If null or undefined is given then this function returns false.
 */
export declare function arrayContains(array: any[], values: any[]): boolean;
/**
 * Checks if array contains all values from the given array of values.
 */
export declare function ArrayContains(values: any[], validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=ArrayContains.d.ts.map