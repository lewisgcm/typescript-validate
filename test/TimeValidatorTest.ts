import "reflect-metadata";
import { Validator, Validate } from "../src/index";
import { SanitizationType, Sanitize, Sanitizor } from "../src/index";
import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import * as Chai from "chai";

@suite("TimeValidatorTestSuite")
class TimeValidatorTestSuite {

    constructor() {
    }

    before() {
    }

    @test("Time validator valid")
    TimeValidatorValid() {
        class Test {
            @Validate({
                Time: {
                    Format: "HH:MM:SS"
                }
            })
            private _id: string = "10:09:15";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }

    @test("Time validator invalid format")
    TimeValidatorInvalidFormat() {
        class Test {
            @Validate({
                Time: {
                    Format: "DD HH:MM:SS"
                }
            })
            private _id: string = "10:09:15";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("Time validator valid GB date")
    TimeValidatorValidGBDate() {
        class Test {
            @Validate({
                Time: {
                    Format: "DD-MM-YYYY"
                }
            })
            private _id: string = "20-09-2015";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }

    @test("Time validator valid US date")
    TimeValidatorValidUSDate() {
        class Test {
            @Validate({
                Time: {
                    Format: "MM-DD-YYYY"
                }
            })
            private _id: string = "10-20-2015";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }

    @test("Time validator invalid English text date")
    TimeValidatorInvalidENDate() {
        class Test {
            @Validate({
                Time: {
                    Format: "LLLL",
                    Locale: "en"
                }
            })
            private _id: string = "Freitag, 24. Juni 2016 01:42";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("Time validator invalid")
    TimeValidatorInvalid() {
        class Test {
            @Validate({
                Time: {
                    Format: "HH:MM:SS"
                }
            })
            private _id: string = "zzzz";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }
}