import { ValidationOptions } from "../ValidationOptions";
export declare const MATCHES = "matches";
/**
 * Checks if string matches the pattern. Either matches('foo', /foo/i) or matches('foo', 'foo', 'i').
 * If given value is not a string, then it returns false.
 */
export declare function matches(value: string, pattern: RegExp, modifiers?: string): boolean;
/**
 * Checks if string matches the pattern. Either matches('foo', /foo/i) or matches('foo', 'foo', 'i').
 */
export declare function Matches(pattern: RegExp, validationOptions?: ValidationOptions): Function;
export declare function Matches(pattern: RegExp, modifiers?: string, validationOptions?: ValidationOptions): Function;
//# sourceMappingURL=Matches.d.ts.map