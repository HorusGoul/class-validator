import { ValidationOptions } from "../decorator/ValidationOptions";
/**
 * Constructor arguments for ValidationMetadata class.
 */
export interface ValidationMetadataArgs {
    /**
     * Validation type.
     */
    type: string;
    /**
     * Object that is used to be validated.
     */
    target: Function | string;
    /**
     * Property of the object to be validated.
     */
    propertyName: string;
    /**
     * Constraint class that performs validation. Used only for custom validations.
     */
    constraintCls?: Function;
    /**
     * Array of constraints of this validation.
     */
    constraints?: any[];
    /**
     * Validation options.
     */
    validationOptions?: ValidationOptions;
    /**
     * Extra options specific to validation type.
     */
    validationTypeOptions?: any;
    /**
     * A transient set of data passed through to the validation result for response mapping
     */
    context?: any;
}
//# sourceMappingURL=ValidationMetadataArgs.d.ts.map