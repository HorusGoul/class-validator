import { ValidationOptions } from "../ValidationOptions";
export declare const LENGTH = "length";
/**
 * Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export declare function length(value: string, min: number, max?: number): boolean;
/**
 * Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
 */
export declare function Length(min: number, max?: number, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=Length.d.ts.map