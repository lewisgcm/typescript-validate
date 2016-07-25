import { IValidationOptions, INumberValidationOptions, IStringValidationOptions } from "./IValidationOptions";

export class Validation {

    private static _validationRules = {
        Number: ( value: number, options: INumberValidationOptions ) => {
            if( typeof value !== "number" )
                return false;
            
            if( options.Max !== undefined && options.Min !== undefined )
                return value < options.Max && value > options.Min;
            
            return ( options.Max !== undefined && value < options.Max ) || 
                   ( options.Min !== undefined && value > options.Min );
        },
        String: ( value: string , options: IStringValidationOptions ) => {
            if( typeof value !== "string" )
                return false;
            
            if( options.MaxLength !== undefined && options.MinLength !== undefined )
                return value.length < options.MaxLength && value.length > options.MinLength;
            
            return ( options.MaxLength !== undefined && value.length < options.MaxLength ) || 
                   ( options.MinLength !== undefined && value.length > options.MinLength );
        },
        Email: ( value: string, b ) => {
            return ( typeof value === "string" && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( value ) );
        },
        CreditCard: ( value: string ) => {
            //As per http://www.freeformatter.com/credit-card-number-generator-validator.html
            var numbers:number[] = <any>value.replace( /[^1234567890]/g ,'').split('');
            var lastNumber = numbers.pop();
            numbers.reverse();
            var total = 0;
            for( var i = 0; i < numbers.length; i++ ) {
                numbers[i] = parseInt( <any>numbers[i] );
                if( i % 2 == 0 ) {
                    numbers[i] = numbers[i] * 2;
                    if( numbers[i] > 9 ) {
                        numbers[i] -= 9;
                    }
                }
                total += numbers[i];
            }

            return (total % 10 == lastNumber);
        }
    };

    constructor( private _options: IValidationOptions ) {
    }

    Validate( value: any ): boolean {
        for( var key in this._options ) {
            if( Validation._validationRules[ key ]( value, this._options[ key ] ) === false ) {
                return false;
            }
        }
        return true;
    }
}