import "reflect-metadata";
import { Validator, Validate } from "./validator/index";
import { SanitizationType, Sanitize, Sanitizor } from "./sanitizor/index";

class C {

    @Sanitize([
        SanitizationType.Trim,
        SanitizationType.UpperCase
    ])
    private _username: string = "  hello world   ";

    @Sanitize([
        SanitizationType.Alpha,
        SanitizationType.Trim
    ])
    private _name: string = "lewis - ) mai( sdsd)    ";

    @Sanitize([
        SanitizationType.AlphaNumeric,
        SanitizationType.UpperCase,
        SanitizationType.Trim,
        SanitizationType.NoSpaces
    ])
    private _postcode: string = "fk1 - 2El   +   ";

    @Sanitize([
        SanitizationType.Numeric
    ])
    @Validate({
        Number: {
            Min: 4,
            Max: 5
        }
    })
    private _account: number = -3.45;
}

console.log( "Replacing" );
var c = new C();
Sanitizor.Sanitize( c );
console.log( Validator.Valid( c ) );
console.log( c );