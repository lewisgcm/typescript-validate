import { IValidationOptions, INumberValidationOptions, IStringValidationOptions } from "./IValidationOptions";
import { CreditCardType, CreditCardValidator } from "./CreditCardValidator";

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
        CreditCard: ( value: string, options: CreditCardType[] ) => {
            return CreditCardValidator.Validate( value, options );
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