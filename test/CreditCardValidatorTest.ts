import "reflect-metadata";
import { Validator, Validate, CreditCardType } from "../src/validator/index";
import { SanitizationType, Sanitize, Sanitizor } from "../src/sanitizor/index";
import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import * as Chai from "chai";

@suite("CreditCardValidatorTestSuite")
class CreditCardValidatorTestSuite {

    constructor() {
    }

    before() {
    }

    @test("CreditCard validator visa")
    creditCardValidatorVisa() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.Visa ]
            })
            public _test: string = "4556737586899855";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
        t._test = "5556737586899855";
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("CreditCard validator visa electron")
    creditCardValidatorVisaElectron() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.VisaElectron ]
            })
            public _test: string = "4175007073118628";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
        t._test = "5175007073118628";
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("CreditCard validator mastercard")
    creditCardValidatorMasterCard() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.MasterCard ]
            })
            public _test: string = "5256155352766911";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
        t._test = "5656155352766911";
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("CreditCard validator VisaElectronAndMasterCard")
    creditCardValidatorVisaElectronAndMasterCard() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.VisaElectron, CreditCardType.MasterCard ]
            })
            public _test: string = "4175007073118628";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
        t._test = "5175007073118628";
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("CreditCard validator Maestro")
    creditCardValidatorMaestro() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.Maestro ]
            })
            public _test: string = "6759533087580411";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
        t._test = "6859533087580411";
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("CreditCard validator Laser")
    creditCardValidatorLaser() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.Laser ]
            })
            public _test: string = "6709697384003921";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
        t._test = "6209697384003921";
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("CreditCard validator InstaPayment")
    creditCardValidatorInstaPayment() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.InstaPayment ]
            })
            public _test: string = "6382908315958024";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
        t._test = "4382908315958024";
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("CreditCard validator Discover")
    creditCardValidatorDiscover() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.Discover ]
            })
            public _test: string = "6011661459031392";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
        t._test = "4011661459031392";
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("CreditCard validator JCB")
    creditCardValidatorJCB() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.JCB ]
            })
            public _test: string = "3566002020360505";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
        t._test = "4011661459031392";
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("CreditCard validator AmericanExpress")
    creditCardValidatorAmericanExpress() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.AmericanExpress ]
            })
            public _test: string = "374933238994958";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
        t._test = "274933238994958";
        Chai.assert( Validator.Valid( t ) == false );
    }

    @test("CreditCard validator invalid empty")
    creditCardValidatorInvalidEmpty() {
        class Test {
            @Validate({
                CreditCard: []
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
                CreditCard: []
            })
            private _id: string = "45567375868998553";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) == false );
    }
}