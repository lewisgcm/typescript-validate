import "reflect-metadata";
import { Validator, Validate } from "../validator/index";
import { SanitizationType, Sanitize, Sanitizor } from "../sanitizor/index";
import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import * as Chai from "chai";

@suite("CreditCardValidatorTestSuite")
class CreditCardValidatorTestSuite {

    constructor() {
    }

    before() {
    }

    @test("CreditCard validator valid")
    creditCardValidatorValid() {
        class Test {
            @Validate({
                CreditCard: true
            })
            private _id: string = "4556737586899855";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }

    @test("CreditCard validator invalid empty")
    creditCardValidatorInvalidEmpty() {
        class Test {
            @Validate({
                CreditCard: true
            })
            private _id: string = "";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("CreditCard validator invalid")
    creditCardValidatorInvalid() {
        class Test {
            @Validate({
                CreditCard: true
            })
            private _id: string = "45567375868998553";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }
}