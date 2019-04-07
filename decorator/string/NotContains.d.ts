import { ValidationOptions } from "../ValidationOptions";
export declare const NOT_CONTAINS = "notContains";
/**
 * Checks if the string does not contain the seed.
 * If given value is not a string, then it returns false.
 */
export declare function notContains(value: string, seed: string): boolean;
/**
 * Checks if the string does not contain the seed.
 */
export declare function NotContains(seed: string, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=NotContains.d.ts.map