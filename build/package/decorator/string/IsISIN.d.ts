import { ValidationOptions } from "../ValidationOptions";
export declare const IS_ISIN = "isIsin";
/**
 * Checks if the string is an ISIN (stock/security identifier).
 * If given value is not a string, then it returns false.
 */
export declare function isISIN(value: string): boolean;
/**
 * Checks if the string is an ISIN (stock/security identifier).
 */
export declare function IsISIN(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=IsISIN.d.ts.map