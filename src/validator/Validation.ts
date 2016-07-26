import { IValidationOptions, INumberValidationOptions, IStringValidationOptions } from "./IValidationOptions";
import { CreditCardType, CreditCardValidator } from "./CreditCardValidator";
import * as Moment from "moment";

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
        },
        Pattern: ( value: any, regex: RegExp ) => {
            return regex.test( value );
        },
        URL: ( value: any ) => {
            return /\(?(?:(http|https|ftp):\/\/)?(?:((?:[^\W\s]|\.|-|[:]{1})+)@{1})?((?:www.)?(?:[^\W\s]|\.|-)+[\.][^\W\s]{2,4}|localhost(?=\/)|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d*))?([\/]?[^\s\?]*[\/]{1})*(?:\/?([^\s\n\?\[\]\{\}\#]*(?:(?=\.)){1}|[^\s\n\?\[\]\{\}\.\#]*)?([\.]{1}[^\s\?\#]*)?)?(?:\?{1}([^\s\n\#\[\]]*))?([\#][^\s\n]*)?\)?/gi.test( value );
        },
        Time: ( value:string, format:string ) => {
            return Moment( value, format ).isValid();
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