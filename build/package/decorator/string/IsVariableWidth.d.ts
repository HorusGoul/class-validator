import { ValidationOptions } from "../ValidationOptions";
export declare const IS_VARIABLE_WIDTH = "isVariableWidth";
/**
 * Checks if the string contains variable-width chars.
 * If given value is not a string, then it returns false.
 */
export declare function isVariableWidth(value: string): boolean;
/**
 * Checks if the string contains a mixture of full and half-width chars.
 */
export declare function IsVariableWidth(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=IsVariableWidth.d.ts.map