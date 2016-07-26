import "reflect-metadata";
import { Validator, Validate } from "../validator/index";
import { SanitizationType, Sanitize, Sanitizor } from "../sanitizor/index";
import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import * as Chai from "chai";

@suite("URLValidatorTestSuite")
class URLValidatorTestSuite {

    constructor() {
    }

    before() {
    }

    @test("URL validator valid")
    URLValidatorValid() {
        class Test {
            @Validate({
                URL: true
            })
            private _id: string = "http://google.com";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }

    @test("URL validator invalid")
    URLValidatorInvalid() {
        class Test {
            @Validate({
                URL: true
            })
            private _id: string = "zzzz";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }
}