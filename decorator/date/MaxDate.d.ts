import { ValidationOptions } from "../ValidationOptions";
export declare const MAX_DATE = "maxDate";
/**
 * Checks if the value is a date that's before the specified date.
 */
export declare function maxDate(date: Date, maxDate: Date): boolean;
/**
 * Checks if the value is a date that's before the specified date.
 */
export declare function MaxDate(date: Date, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=MaxDate.d.ts.map