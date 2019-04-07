import { ValidationOptions } from "../ValidationOptions";
/**
 * Objects / object arrays marked with this decorator will also be validated.
 */
export declare function ValidateIf(condition: (object: any, value: any) => boolean, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=ValidateIf.d.ts.map