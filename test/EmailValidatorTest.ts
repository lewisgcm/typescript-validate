import "reflect-metadata";
import { Validator, Validate } from "../src/index";
import { SanitizationType, Sanitize, Sanitizor } from "../src/index";
import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import * as Chai from "chai";

@suite("EmailValidatorTestSuite")
class EmailValidatorTestSuite {

    constructor() {
    }

    before() {
    }

    @test("Email validator valid")
    emailValidatorValid() {
        class Test {
            @Validate({
                Email: true
            })
            private _id: string = "lewisgcm@gmail.com";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }

    @test("Email validator invalid no domain")
    emailValidatorInvalidNoDomain() {
        class Test {
            @Validate({
                Email: true
            })
            private _id: string = "lewisgcm@";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("Email validator invalid no mailbox")
    emailValidatorInvalidNoMailbox() {
        class Test {
            @Validate({
                Email: true
            })
            private _id: string = "@gmail.com";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("Email validator invalid empty strings")
    emailValidatorInvalidEmptyString() {
        class Test {
            @Validate({
                Email: true
            })
            private _id: string = "";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("Email validator invalid no at")
    emailValidatorInvalidNoAt() {
        class Test {
            @Validate({
                Email: true
            })
            private _id: string = "lewisgcm";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("Email validator invalid no TLD")
    emailValidatorInvalidNoTLD() {
        class Test {
            @Validate({
                Email: true
            })
            private _id: string = "lewisgcm@gmail";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }
}