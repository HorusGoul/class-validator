import { ValidationOptions } from "../ValidationOptions";
export declare const IS_ISBN = "isIsbn";
/**
 * Checks if the string is an ISBN (version 10 or 13).
 * If given value is not a string, then it returns false.
 */
export declare function isISBN(value: string, version?: "10" | "13"): boolean;
/**
 * Checks if the string is an ISBN (version 10 or 13).
 */
export declare function IsISBN(version?: "10" | "13", validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=IsISBN.d.ts.map