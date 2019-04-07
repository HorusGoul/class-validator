import { ValidationOptions } from "../ValidationOptions";
export declare const IS_IP = "isIp";
/**
 * Checks if the string is an IP (version 4 or 6).
 * If given value is not a string, then it returns false.
 */
export declare function isIP(value: string, version?: "4" | "6"): boolean;
/**
 * Checks if the string is an IP (version 4 or 6).
 */
export declare function IsIP(version?: "4" | "6", validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=IsIP.d.ts.map