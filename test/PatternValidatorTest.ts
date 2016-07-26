import "reflect-metadata";
import { Validator, Validate } from "../src/validator/index";
import { SanitizationType, Sanitize, Sanitizor } from "../src/sanitizor/index";
import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import * as Chai from "chai";

@suite("PatternValidatorTestSuite")
class PatternValidatorTestSuite {

    constructor() {
    }

    before() {
    }

    @test("Pattern validator valid")
    patternValidatorValid() {
        class Test {
            @Validate({
                Pattern: /[abcd]*/g
            })
            private _id: string = "abcd";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }

    @test("Pattern validator invalid")
    patternValidatorInvalid() {
        class Test {
            @Validate({
                Pattern: /[0-9]+/g
            })
            private _id: string = "zzzz";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }
}