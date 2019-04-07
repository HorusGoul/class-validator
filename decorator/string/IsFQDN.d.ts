/// <reference types="validator" />
import { ValidationOptions } from "../ValidationOptions";
export declare const IS_FQDN = "isFqdn";
/**
 * Checks if the string is a fully qualified domain name (e.g. domain.com).
 * If given value is not a string, then it returns false.
 */
export declare function isFQDN(value: string, options?: ValidatorJS.IsFQDNOptions): boolean;
/**
 * Checks if the string is a fully qualified domain name (e.g. domain.com).
 */
export declare function IsFQDN(options?: ValidatorJS.IsFQDNOptions, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=IsFQDN.d.ts.map