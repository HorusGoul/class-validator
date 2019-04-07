import { ValidationOptions } from "../ValidationOptions";
export declare const IS_INSTANCE = "isInstance";
/**
 * Checks if the value is an instance of the specified object.
 */
export declare function isInstance(object: any, targetTypeConstructor: new (...args: any[]) => any): boolean;
/**
 * Checks if all array's values are unique. Comparison for objects is reference-based.
 */
export declare function IsInstance(targetType: new (...args: any[]) => any, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=IsInstance.d.ts.map