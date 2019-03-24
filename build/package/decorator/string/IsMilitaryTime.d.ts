import { ValidationOptions } from "../ValidationOptions";
export declare const IS_MILITARY_TIME = "isMilitaryTime";
/**
 * Checks if the string represents a time without a given timezone in the format HH:MM (military)
 * If the given value does not match the pattern HH:MM, then it returns false.
 */
export declare function isMilitaryTime(value: string): boolean;
/**
 * Checks if the string correctly represents a time in the format HH:MM
 */
export declare function IsMilitaryTime(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=IsMilitaryTime.d.ts.map