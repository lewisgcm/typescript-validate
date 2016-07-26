import "reflect-metadata";
import { Validator, Validate } from "../validator/index";
import { SanitizationType, Sanitize, Sanitizor } from "../sanitizor/index";
import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import * as Chai from "chai";

@suite("StringValidatorTestSuite")
class StringValidatorTestSuite {

    constructor() {
    }

    before() {
    }

    @test("Number validator not a string invalid")
    numberValidatorNotAStringInvalid() {
        class Test {
            @Validate({
                String: {
                    MinLength: 1
                }
            })
            private _id: string = <any>0.5;
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("String validator min only valid")
    stringValidatorMinValid() {
        class Test {
            @Validate({
                String: {
                    MinLength: 1
                }
            })
            private _id: string = "lol";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }

    @test("String validator min only invalid")
    stringValidatorMinInvalid() {
        class Test {
            @Validate({
                String: {
                    MinLength: 5
                }
            })
            private _id: string = "lol";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("String validator max only invalid")
    stringValidatorMaxInvalid() {
        class Test {
            @Validate({
                String: {
                    MaxLength: 5
                }
            })
            private _id: string = "HelloWorld";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("String validator max only valid")
    stringValidatorMaxValid() {
        class Test {
            @Validate({
                String: {
                    MaxLength: 5
                }
            })
            private _id: string = "lol";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }

    @test("String validator max and min valid")
    stringValidatorMaxMinValid() {
        class Test {
            @Validate({
                String: {
                    MaxLength: 5,
                    MinLength: 1
                }
            })
            private _id: string = "lol";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }

    @test("String validator max and min invalid")
    stringValidatorMaxMinInvalid() {
        class Test {
            @Validate({
                String: {
                    MaxLength: 5,
                    MinLength: 1
                }
            })
            private _id: string = "l";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }
}