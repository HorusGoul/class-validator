import { ValidationError } from "./validation/ValidationError";
import { ValidatorOptions } from "./validation/ValidatorOptions";
import { ValidationSchema } from "./validation-schema/ValidationSchema";
/**
 * Validates given object.
 */
export declare function validate(object: Object, validatorOptions?: ValidatorOptions): Promise<ValidationError[]>;
/**
 * Validates given object by a given validation schema.
 */
export declare function validate(schemaName: string, object: Object, validatorOptions?: ValidatorOptions): Promise<ValidationError[]>;
/**
 * Validates given object and reject on error.
 */
export declare function validateOrReject(object: Object, validatorOptions?: ValidatorOptions): Promise<void>;
/**
 * Validates given object by a given validation schema and reject on error.
 */
export declare function validateOrReject(schemaName: string, object: Object, validatorOptions?: ValidatorOptions): Promise<void>;
/**
 * Performs sync validation of the given object.
 * Note that this method completely ignores async validations.
 * If you want to properly perform validation you need to call validate method instead.
 */
export declare function validateSync(object: Object, validatorOptions?: ValidatorOptions): ValidationError[];
/**
 * Validates given object by a given validation schema.
 * Note that this method completely ignores async validations.
 * If you want to properly perform validation you need to call validate method instead.
 */
export declare function validateSync(schemaName: string, object: Object, validatorOptions?: ValidatorOptions): ValidationError[];
/**
 * Registers a new validation schema.
 */
export declare function registerSchema(schema: ValidationSchema): void;
//# sourceMappingURL=index.d.ts.map