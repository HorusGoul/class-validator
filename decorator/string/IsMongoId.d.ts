import { ValidationOptions } from "../ValidationOptions";
export declare const IS_MONGO_ID = "isMongoId";
/**
 * Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.
 * If given value is not a string, then it returns false.
 */
export declare function isMongoId(value: string): boolean;
/**
 * Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.
 */
export declare function IsMongoId(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=IsMongoId.d.ts.map