import "reflect-metadata";
import { Validator, Validate, PostcodeLocale } from "../src/index";
import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import * as Chai from "chai";

@suite('PostcodeValidatorTestSuite')
class PostcodeValidatorTestSuite {
    constructor() {}

    before() {}

    @test('Postcode validator - AF')
    postcodeAF() {
        class Test {
            @Validate({
                Postcode: [PostcodeLocale.AF]
            })
            public postcode: string = '1012';
        }
        var test = new Test();
        Chai.assert(Validator.Valid(test), 'Valid postcode fails');
        // update to invalid
        test.postcode = '0099';
        Chai.assert(Validator.Valid(test) === false, 'Invalid postcode fails');
    }

    @test('Postcoed validator - AX')
    postcodeAX() {
        class Test {
            @Validate({
                Postcode: [PostcodeLocale.AX]
            })
            public postcode = '22345'
        }
        var test = new Test();
        Chai.assert(Validator.Valid(test), 'Valid postcode fails')
        test.postcode = '11897';
        Chai.assert(Validator.Valid(test) === false, 'Invlaid postcode fails');
    }

    @test('Postcode validator - GB')
    postcodeValidGB() {
        class Test {
            @Validate({
                Postcode: [PostcodeLocale.GB]
            })
            public postcode: string = 'G3 6QD';
        }

        var test = new Test();
        Chai.assert(Validator.Valid(test), 'Valid Postcode fails');
        test.postcode = 'SEW4 5TY';
        Chai.assert(Validator.Valid(test) === false, 'Invalid postcode fails');

    }

    @test('Postcode validator - US')
    postcodeValidUS() {
        class Test {
            @Validate({
                Postcode: [PostcodeLocale.US]
            })
            public postcode: string = '99501';
        }
        var test = new Test();
        Chai.assert(Validator.Valid(test), 'Valid US postcode fails')
        test.postcode = 'SEW4 5TY'
        Chai.assert(Validator.Valid(test) === false, 'Invalid US postcode fails');
    }
}
