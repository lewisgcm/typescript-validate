import "reflect-metadata";
import { Validator, Validate, PostcodeLocale } from "../src/index";
import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import * as Chai from "chai";

@suite('PostcodeValidatorTestSuite')
class PostcodeValidatorTestSuite {
    constructor() {}

    before() {}

    @test('Postcode validator - Valid GB')
    postCodeValidGB() {
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
    postCodeInValidGB() {
        class Test {
            @Validate({
                Postcode: [ PostcodeLocale.GB ]
            })
            public _test: string = 'SEW4 5TY';
        }

        var test = new Test();
        Chai.assert(Validator.Valid(test) == false, 'Invalid postcode fails');
    }
}