import { ValidationOptions } from "./ValidationOptions";
/**
 * Performs validation based on the given custom validation class.
 * Validation class must be decorated with ValidatorConstraint decorator.
 */
export declare function Validate(constraintClass: Function, validationOptions?: ValidationOptions): Function;
export declare function Validate(constraintClass: Function, constraints?: any[], validationOptions?: ValidationOptions): Function;
//# sourceMappingURL=Validate.d.ts.map