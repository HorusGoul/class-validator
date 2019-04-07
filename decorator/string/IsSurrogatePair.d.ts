import { ValidationOptions } from "../ValidationOptions";
export declare const IS_SURROGATE_PAIR = "isSurrogatePair";
/**
 * Checks if the string contains any surrogate pairs chars.
 * If given value is not a string, then it returns false.
 */
export declare function isSurrogatePair(value: string): boolean;
/**
 * Checks if the string contains any surrogate pairs chars.
 */
export declare function IsSurrogatePair(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=IsSurrogatePair.d.ts.map