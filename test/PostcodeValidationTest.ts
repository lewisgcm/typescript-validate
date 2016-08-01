import "reflect-metadata";
import { Validator, Validate, PostcodeLocale } from "../src/index";
import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import * as Chai from "chai";

@suite('PostcodeValidatorTestSuite')
class PostcodeValidatorTestSuite {
    constructor() {}

    before() {}

    @test('Postcode validator - AC')
    postcodeAC() {
        class Test {
            @Validate({
                Postcode: [PostcodeLocale.AC]
            })
            public postcode: string = 'ASCN 1ZZ';
        }
        var test = new Test();
        Chai.assert(Validator.Valid(test), 'Valid postcode fails');
        // Test for invlaid
        test.postcode = '0099';
        Chai.assert(Validator.Valid(test) === false, 'Invalid postcode fails');
    }

    @test('Postcode validator - AD')
    postcodeAD() {
        class Test {
            @Validate({
                Postcode: [PostcodeLocale.AD]
            })
            public postcode: string = 'AD123';
        }
        var test = new Test();
        Chai.assert(Validator.Valid(test), 'Valid postcode fails');
        // Test for invlaid
        test.postcode = '0099';
        Chai.assert(Validator.Valid(test) === false, 'Invalid postcode fails');
    }

    @test('Postcode validator - AE')
    postcodeAE() {
        class Test {
            @Validate({
                Postcode: [PostcodeLocale.AE]
            })
            public postcode: string = '';
        }
        var test = new Test();
        Chai.assert(Validator.Valid(test), 'Valid postcode fails');
        // Test for invlaid
        test.postcode = '0099';
        Chai.assert(Validator.Valid(test) === false, 'Invalid postcode fails');
    }

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
        // Test for invlaid
        test.postcode = '0099';
        Chai.assert(Validator.Valid(test) === false, 'Invalid postcode fails');
    }

    @test('Postcode validator - AG')
    postcodeAG() {
        class Test {
            @Validate({
                Postcode: [PostcodeLocale.AG]
            })
            public postcode: string = '';
        }
        var test = new Test();
        Chai.assert(Validator.Valid(test), 'Valid postcode fails');
        // Test for invlaid
        test.postcode = '0099';
        Chai.assert(Validator.Valid(test) === false, 'Invalid postcode fails');
    }

    @test('Postcode validator - AI')
    postcodeAI() {
        class Test {
            @Validate({
                Postcode: [PostcodeLocale.AI]
            })
            public postcode: string = 'AI-2640';
        }
        var test = new Test();
        Chai.assert(Validator.Valid(test), 'Valid postcode fails');
        // Test for invlaid
        test.postcode = '0099';
        Chai.assert(Validator.Valid(test) === false, 'Invalid postcode fails');
    }

    @test('Postcode validator - AL')
    postcodeAL() {
        class Test {
            @Validate({
                Postcode: [PostcodeLocale.AL]
            })
            public postcode: string = '2640';
        }
        var test = new Test();
        Chai.assert(Validator.Valid(test), 'Valid postcode fails');
        // Test for invlaid
        test.postcode = 'A099';
        Chai.assert(Validator.Valid(test) === false, 'Invalid postcode fails');
        test.postcode = '00099';
        Chai.assert(Validator.Valid(test) === false, 'Invalid long postcode fails');
    }

    @test('Postcode validator - AM')
    postcodeAM() {
        class Test {
            @Validate({
                Postcode: [PostcodeLocale.AM]
            })
            public postcode: string = '2640';
        }
        var test = new Test();
        Chai.assert(Validator.Valid(test), 'Valid postcode fails');
        // Test for invlaid
        test.postcode = 'A099';
        Chai.assert(Validator.Valid(test) === false, 'Invalid postcode fails');
        test.postcode = '00099';
        Chai.assert(Validator.Valid(test) === false, 'Invalid long postcode fails');
    }

    @test('Postcode validator - AO')
    postcodeAO() {
        class Test {
            @Validate({
                Postcode: [PostcodeLocale.AO]
            })
            public postcode: string = '';
        }
        var test = new Test();
        Chai.assert(Validator.Valid(test), 'Valid postcode fails');
        // Test for invlaid
        test.postcode = '0099';
        Chai.assert(Validator.Valid(test) === false, 'Invalid postcode fails');
    }

    @test('Postcode validator - AQ')
    postcodeAQ() {
        class Test {
            @Validate({
                Postcode: [PostcodeLocale.AQ]
            })
            public postcode: string = 'BIQQ 1ZZ';
        }
        var test = new Test();
        Chai.assert(Validator.Valid(test), 'Valid postcode fails');
        // Test for invlaid
        test.postcode = '0099';
        Chai.assert(Validator.Valid(test) === false, 'Invalid postcode fails');
    }

    @test('Postcode validator - AX')
    postcodeAX() {
        class Test {
            @Validate({
                Postcode: [PostcodeLocale.AX]
            })
            public postcode = '22345'
        }
        var test = new Test();
        Chai.assert(Validator.Valid(test), 'Valid postcode fails')
        // AX- is optional
        test.postcode = 'AX-22345';
        Chai.assert(Validator.Valid(test),
            'Valid postcode with correct optional country code fails');
        test.postcode = '11897';
        Chai.assert(Validator.Valid(test) === false, 'Invlaid postcode fails');
        test.postcode = 'AX-11897';
        Chai.assert(Validator.Valid(test) === false,
            'Invlaid postcode with correct optional country code fails');
        test.postcode = 'AB-22345';
        Chai.assert(Validator.Valid(test) === false,
            'Valid postcode with incorrect optional country code fails');
        test.postcode = 'AB-11897';
        Chai.assert(Validator.Valid(test) === false,
            'Inalid postcode with incorrect optional country code fails');
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
