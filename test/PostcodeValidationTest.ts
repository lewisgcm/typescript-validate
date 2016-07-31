import "reflect-metadata";
import { Validator, Validate, PostcodeLocale } from "../src/validator/index";
import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import * as Chai from "chai";

@suite('PostcodeValidatorTestSuite')
class PostcodeValidatorTestSuite {
    constructor() {}

    before() {}

    @test('Postcode validator - Valid GB')
    postcodeValidGB() {
        class Test {
            @Validate({
                Postcode: [ PostcodeLocale.GB ]
            })
            public _test: string = 'G3 6QD';
        }

        var test = new Test();
        Chai.assert(Validator.Valid(test), 'Valid Postcode fails');
    }

    @test('Postcode validator - Valid GB')
    postcodeInValidGB() {
        class Test {
            @Validate({
                Postcode: [ PostcodeLocale.GB ]
            })
            public _test: string = 'SEW4 5TY';
        }

        var test = new Test();
        Chai.assert(Validator.Valid(test) === false, 'Invalid postcode fails');
    }

    @test('Postcode validator - Valid US')
    postcodeValidUS() {
        class Test {
            @Validate({
                Postcode: [PostcodeLocale.US]
            })
            public _test: string = '99501';
        }
        var test = new Test();
        Chai.assert(Validator.Valid(test), 'Valid US postcode fails')
    }

        @test('Postcode validator - Invalid US')
    postcodeInValidUS() {
        class Test {
            @Validate({
                Postcode: [PostcodeLocale.US]
            })
            public _test: string = 'SEW4 5TY';
        }
        var test = new Test();
        Chai.assert(Validator.Valid(test) === false, 'Invalid US postcode fails');
    }
}
