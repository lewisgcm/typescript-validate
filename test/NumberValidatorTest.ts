import "reflect-metadata";
import { Validator, Validate } from "../src/validator/index";
import { SanitizationType, Sanitize, Sanitizor } from "../src/sanitizor/index";
import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import * as Chai from "chai";

@suite("NumberValidatorTestSuite")
class NumberValidatorTestSuite {

    constructor() {
    }

    before() {
    }

    @test("Number validator not a number invalid")
    numberValidatorNotANumberInvalid() {
        class Test {
            @Validate({
                Number: {
                    Min: 1
                }
            })
            private _id: number = <any>"Hello World";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("Number validator min only valid")
    numberValidatorMinValid() {
        class Test {
            @Validate({
                Number: {
                    Min: 1
                }
            })
            private _id: number = 5;
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }

    @test("Number validator max only valid")
    numberValidatorMaxValid() {
        class Test {
            @Validate({
                Number: {
                    Max: 6
                }
            })
            private _id: number = 5;
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }

    @test("Number validator max only invalid")
    numberValidatorMaxInvalid() {
        class Test {
            @Validate({
                Number: {
                    Max: 6
                }
            })
            private _id: number = 10;
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("Number validator min only invalid")
    numberValidatorMinInvalid() {
        class Test {
            @Validate({
                Number: {
                    Min: 6
                }
            })
            private _id: number = 1;
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("Number validator min and max invalid")
    numberValidatorMinMaxInvalid() {
        class Test {
            @Validate({
                Number: {
                    Min: 6,
                    Max: 10
                }
            })
            private _id: number = 1;
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("Number validator min and max valid")
    numberValidatorMinMaxValid() {
        class Test {
            @Validate({
                Number: {
                    Min: 6,
                    Max: 10
                }
            })
            private _id: number = 8;
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }
}