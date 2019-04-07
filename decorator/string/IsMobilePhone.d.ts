/// <reference types="validator" />
import { ValidationOptions } from "../ValidationOptions";
export declare const IS_MOBILE_PHONE = "isMobilePhone";
/**
 * Checks if the string is a mobile phone number. See ValidatorJS for a list of supported locales!
 * If given value is not a string, then it returns false.
 */
export declare function isMobilePhone(value: string, locale: ValidatorJS.MobilePhoneLocale | ValidatorJS.MobilePhoneLocale[] | "any"): boolean;
/**
 * Checks if the string is a mobile phone number. See ValidatorJS for a list of supported locales!
 */
export declare function IsMobilePhone(locale: ValidatorJS.MobilePhoneLocale | ValidatorJS.MobilePhoneLocale[] | any, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=IsMobilePhone.d.ts.map