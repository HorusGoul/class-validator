import { ValidationOptions } from "../ValidationOptions";
export declare const MIN_DATE = "minDate";
/**
 * Checks if the value is a date that's after the specified date.
 */
export declare function minDate(date: Date, minDate: Date): boolean;
/**
 * Checks if the value is a date that's after the specified date.
 */
export declare function MinDate(date: Date, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=MinDate.d.ts.map