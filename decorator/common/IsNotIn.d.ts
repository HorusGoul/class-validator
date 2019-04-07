import { ValidationOptions } from "../ValidationOptions";
export declare const IS_NOT_IN = "isNotIn";
/**
 * Checks if given value not in a array of allowed values.
 */
export declare function isNotIn(value: any, possibleValues: any[]): boolean;
/**
 * Checks if value is not in a array of disallowed values.
 */
export declare function IsNotIn(values: any[], validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=IsNotIn.d.ts.map