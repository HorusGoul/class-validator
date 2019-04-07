import { ValidationOptions } from "../ValidationOptions";
export declare const CONTAINS = "contains";
/**
 * Checks if the string contains the seed.
 * If given value is not a string, then it returns false.
 */
export declare function contains(value: string, seed: string): boolean;
/**
 * Checks if the string contains the seed.
 */
export declare function Contains(seed: string, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=Contains.d.ts.map