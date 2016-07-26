import "reflect-metadata";
import { Validator, Validate } from "../validator/index";
import { SanitizationType, Sanitize, Sanitizor } from "../sanitizor/index";
import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import * as Chai from "chai";

@suite("SanitizorTestSuite")
class SanitizorTestSuite {

    @test("sanitize Alpha")
    sanitizeAlpha() {
        class Test {
            @Sanitize([
                SanitizationType.Alpha
            ])
            public _value: string = "http://google. com";
        }

        var t = new Test();
        Sanitizor.Sanitize( t );
        Chai.assert( t._value === "httpgoogle com" );
    }

    @test("sanitize Alpha NoSpace")
    sanitizeAlphaNoSpace() {
        class Test {
            @Sanitize([
                SanitizationType.Alpha, SanitizationType.NoSpaces
            ])
            public _value: string = "http://google. com     \t";
        }

        var t = new Test();
        Sanitizor.Sanitize( t );
        Chai.assert( t._value === "httpgooglecom" );
    }

    @test("sanitize AlphaNumeric")
    sanitizeAlphaNumeric() {
        class Test {
            @Sanitize([
                SanitizationType.AlphaNumeric
            ])
            public _value: string = "http://google. com234";
        }

        var t = new Test();
        Sanitizor.Sanitize( t );
        Chai.assert( t._value === "httpgoogle com234" );
    }

    @test("sanitize AlphaNumeric NoSpace")
    sanitizeAlphaNumericNoSpace() {
        class Test {
            @Sanitize([
                SanitizationType.AlphaNumeric
            ])
            public _value: string = "http://google.com234";
        }

        var t = new Test();
        Sanitizor.Sanitize( t );
        Chai.assert( t._value === "httpgooglecom234" );
    }

    @test("sanitize LowerCase")
    sanitizeLowerCase() {
        class Test {
            @Sanitize([
                SanitizationType.LowerCase
            ])
            public _value: string = "Hello World";
        }

        var t = new Test();
        Sanitizor.Sanitize( t );
        Chai.assert( t._value === "hello world" );
    }

    @test("sanitize LowerCase NoSpace")
    sanitizeLowerCaseNoSpace() {
        class Test {
            @Sanitize([
                SanitizationType.LowerCase, SanitizationType.NoSpaces
            ])
            public _value: string = "Hello World";
        }

        var t = new Test();
        Sanitizor.Sanitize( t );
        Chai.assert( t._value === "helloworld" );
    }

    @test("sanitize Numeric")
    sanitizeNumeric() {
        class Test {
            @Sanitize([
                SanitizationType.Numeric
            ])
            public _value: string = "Hello World23523";
        }

        var t = new Test();
        Sanitizor.Sanitize( t );
        Chai.assert( t._value === " 23523" );
    }

    @test("sanitize Numeric NoSpace")
    sanitizeNumericNoSpace() {
        class Test {
            @Sanitize([
                SanitizationType.Numeric, SanitizationType.NoSpaces
            ])
            public _value: string = "Hello World23523";
        }

        var t = new Test();
        Sanitizor.Sanitize( t );
        Chai.assert( t._value === "23523" );
    }

    @test("sanitize Trim")
    sanitizeTrim() {
        class Test {
            @Sanitize([
                SanitizationType.Trim
            ])
            public _value: string = "      Hello World23523     ";
        }

        var t = new Test();
        Sanitizor.Sanitize( t );
        Chai.assert( t._value === "Hello World23523" );
    }

    @test("sanitize UpperCase")
    sanitizeUpperCase() {
        class Test {
            @Sanitize([
                SanitizationType.UpperCase
            ])
            public _value: string = "hellO World";
        }

        var t = new Test();
        Sanitizor.Sanitize( t );
        Chai.assert( t._value === "HELLO WORLD" );
    }
}