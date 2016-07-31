import "reflect-metadata";
import { Validator, Validate, CreditCardType } from "../src/index";
import { SanitizationType, Sanitize, Sanitizor } from "../src/index";
import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import * as Chai from "chai";

@suite("CreditCardValidatorTestSuite")
class CreditCardValidatorTestSuite {

    constructor() {
    }

    before() {
    }

    @test("CreditCard validator - Valid Visa")
    creditCardValidVisa() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.Visa ]
            })
            public _test: string = "4556737586899855";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }


    @test("CreditCard validator - Invalid Visa")
    creditCardInvalidVisa() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.Visa ]
            })
            public _test: string = "5556737586899855";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) === false );
    }

    @test("CreditCard validator - Valid Visa Electron")
    creditCardValidVisaElectron() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.VisaElectron ]
            })
            public _test: string = "4175007073118628";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }

    @test("CreditCard validator - Invalid Visa Electron")
    creditCardInvalidVisaElectron() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.VisaElectron ]
            })
            public _test: string = "5175007073118628";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) === false );
    }

    @test("CreditCard validator - Valid mastercard")
    creditCardValidatorMasterCard() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.MasterCard ]
            })
            public _test: string = "5256155352766911";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }


    @test("CreditCard validator - Invalid Mastercard")
    creditCardInvalidMasterCard() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.MasterCard ]
            })
            public _test: string = "5656155352766911";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) === false );
    }

    @test("CreditCard validator - Valid VisaElectronAndMasterCard")
    creditCardValidatorVisaElectronAndMasterCard() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.VisaElectron, CreditCardType.MasterCard ]
            })
            public _test: string = "4175007073118628";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }


    @test("CreditCard validator - Invalid VisaElectronAndMasterCard")
    creditCardInValidVisaElectronAndMasterCard() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.VisaElectron, CreditCardType.MasterCard ]
            })
            public _test: string = "5175007073118628";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) === false );
    }

    @test("CreditCard validator - Valid Maestro")
    creditCardValidMaestro() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.Maestro ]
            })
            public _test: string = "6759533087580411";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }

    @test("CreditCard validator - Invalid Maestro")
    creditCardInvalidMaestro() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.Maestro ]
            })
            public _test: string = "6859533087580411";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) === false);
    }

    @test("CreditCard validator - Valid Laser")
    creditCardValidLaser() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.Laser ]
            })
            public _test: string = "6709697384003921";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }

    @test("CreditCard validator - Invalid Laser")
    creditCardInvalidLaser() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.Laser ]
            })
            public _test: string = "6209697384003921";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) === false );
    }

    @test("CreditCard validator - Valid InstaPayment")
    creditCardValidInstaPayment() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.InstaPayment ]
            })
            public _test: string = "6382908315958024";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }


    @test("CreditCard validator - Invalid InstaPayment")
    creditCardInvalidInstaPayment() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.InstaPayment ]
            })
            public _test: string = "4382908315958024";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) === false );
    }

    @test("CreditCard validator - Valid Discover")
    creditCardValidDiscover() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.Discover ]
            })
            public _test: string = "6011661459031392";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }


    @test("CreditCard validator - Invalid Discover")
    creditCardInvalidDiscover() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.Discover ]
            })
            public _test: string = "4011661459031392";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) === false );
    }

    @test("CreditCard validator - Valid JCB")
    creditCardValidJCB() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.JCB ]
            })
            public _test: string = "3566002020360505";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }


    @test("CreditCard validator - Invalid JCB")
    creditCardInvalidJCB() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.JCB ]
            })
            public _test: string = "4011661459031392";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) === false );
    }

    @test("CreditCard validator - Valid AmericanExpress")
    creditCardValidAmericanExpress() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.AmericanExpress ]
            })
            public _test: string = "374933238994958";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) );
    }


    @test("CreditCard validator - Invalid AmericanExpress")
    creditCardInalidAmericanExpress() {
        class Test {
            @Validate({
                CreditCard: [ CreditCardType.AmericanExpress ]
            })
            public _test: string = "274933238994958";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) === false );
    }

    @test("CreditCard validator - Invalid Empty")
    creditCardValidatorInvalidEmpty() {
        class Test {
            @Validate({
                CreditCard: []
            })
            private _id: string = "";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) === false );
    }

    @test("CreditCard validator - Invalid")
    creditCardValidatorInvalid() {
        class Test {
            @Validate({
                CreditCard: []
            })
            private _id: string = "45567375868998553";
        }

        var t = new Test();
        Chai.assert( Validator.Valid( t ) === false );
    }
}