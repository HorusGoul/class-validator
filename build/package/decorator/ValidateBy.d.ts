import { ValidationFunction } from "./ValidationFunction";
import { ValidationOptions } from "./ValidationOptions";
import { ValidationArguments } from "../validation/ValidationArguments";
export declare function buildMessage(impl: (eachPrefix: string, args?: ValidationArguments) => string, validationOptions?: ValidationOptions): (validationArguments?: ValidationArguments) => string;
export declare function ValidateBy(validator: ValidationFunction, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
//# sourceMappingURL=ValidateBy.d.ts.map