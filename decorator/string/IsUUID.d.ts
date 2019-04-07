import { ValidationOptions } from "../ValidationOptions";
export declare const IS_UUID = "isUuid";
/**
 * Checks if the string is a UUID (version 3, 4 or 5).
 * If given value is not a string, then it returns false.
 */
export declare function isUUID(value: string, version?: 3 | 4 | 5 | "3" | "4" | "5" | "all"): boolean;
/**
 * Checks if the string is a UUID (version 3, 4 or 5).
 */
export declare function IsUUID(version?: 3 | 4 | 5 | "3" | "4" | "5" | "all", validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=IsUUID.d.ts.map