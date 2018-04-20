import "es6-shim";
import {expect, should} from "chai";
import {IsInt, Min, Max, IsDefined} from "../../src/decorator/decorators";
import {Validator} from "../../src/validation/Validator";
import {ValidatorOptions} from "../../src/validation/ValidatorOptions";

should(); // make IDE support running this file directly

// -------------------------------------------------------------------------
// Helper functions
// -------------------------------------------------------------------------

export function checkValidValues(object: { someProperty: any }, values: any[], done: Function, validatorOptions?: ValidatorOptions) {
    const validator = new Validator();
    const promises = values.map(value => {
        object.someProperty = value;
        return validator
            .validate(object, validatorOptions)
            .then(errors => errors.length.should.be.equal(0));
    });
    Promise.all(promises).then(() => done(), err => done(err));
}

export function checkInvalidValues(object: { someProperty: any }, values: any[], done: Function, validatorOptions?: ValidatorOptions) {
    const validator = new Validator();
    const promises = values.map(value => {
        object.someProperty = value;
        return validator
            .validate(object, validatorOptions)
            .then(errors => errors.length.should.be.equal(1));
    });
    Promise.all(promises).then(() => done(), err => done(err));
}

export interface IDictionary {
    [id: string]: string;
}

export function checkReturnedError(object: { someProperty: any },
                                   values: any[],
                                   expectedErrors: IDictionary,
                                   done: Function,
                                   validatorOptions?: ValidatorOptions) {

    const validator = new Validator();
    const promises = values.map(value => {
        object.someProperty = value;
        return validator
            .validate(object, validatorOptions)
            .then(errors => {
                errors.length.should.be.equal(1);
                errors[0].target.should.be.equal(object);
                errors[0].property.should.be.equal("someProperty");
                errors[0].constraints.should.be.eql(expectedErrors);
                expect(errors[0].value).to.be.equal(value);
            });
    });
    Promise.all(promises).then(() => done(), err => done(err));
}

// -------------------------------------------------------------------------
// Setup
// -------------------------------------------------------------------------

// const validator = new Validator();

// -------------------------------------------------------------------------
// Specifications: common decorators
// -------------------------------------------------------------------------

describe("Combinations of validations", function () {

    const INVALID_MISSING: any[] = [null, undefined];
    const INVALID_FRACTION = 0.5;
    const INVALID_SMALL = 1;

    const validValues = [5, 100];
    const invalidValues: any[] = [INVALID_FRACTION, INVALID_SMALL, ...INVALID_MISSING];

    class MyClass {
        @IsDefined()
        @IsInt()
        @Min(5)
        @Max(100)
        someProperty: number;
    }

    it("should not fail if validator.validate said that its valid", function (done) {
        checkValidValues(new MyClass(), validValues, done);
    });

    it("should fail if validator.validate said that its invalid", function (done) {
        checkInvalidValues(new MyClass(), invalidValues, done);
    });

    it("should return error object with proper data for !IsDefined", function (done) {
        const expectedError: IDictionary = {
            "isDefined": "someProperty should not be null or undefined"
        };
        checkReturnedError(new MyClass(), INVALID_MISSING, expectedError, done);
    });

    it("should return error object with proper data for !IsInt", function (done) {
        const expectedError: IDictionary = {
            "min": "someProperty must be greater than 5"
        };
        checkReturnedError(new MyClass(), [INVALID_SMALL], expectedError, done);
    });

    it("should return correct error object with proper data for both !IsInt && !Min", function (done) {
        const expectedErrors: IDictionary = {
            "isInt": "someProperty must be an integer number",
        };
        checkReturnedError(new MyClass(), [INVALID_FRACTION], expectedErrors, done);
    });

});

