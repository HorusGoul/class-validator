import { ValidationOptions } from "../ValidationOptions";
export declare const IS_JSON = "isJson";
/**
 * Checks if the string is valid JSON (note: uses JSON.parse).
 * If given value is not a string, then it returns false.
 */
export declare function isJSON(value: string): boolean;
/**
 * Checks if the string is valid JSON (note: uses JSON.parse).
 */
export declare function IsJSON(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=IsJSON.d.ts.map