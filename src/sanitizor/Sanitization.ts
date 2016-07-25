export enum SanitizationType {
    Trim, Alpha, Numeric, AlphaNumeric, UpperCase, LowerCase, NoSpaces
}

export class Sanitization {

    private static _sanitizationRules = {
        Trim: ( value: string ) => {
            return (typeof value !== "string") ? value: value.trim();
        },
        UpperCase: ( value: string ) => {
            return (typeof value !== "string") ? value: value.toUpperCase();
        },
        LowerCase: ( value: string ) => {
            return (typeof value !== "string") ? value: value.toLowerCase();
        },
        Numeric: ( value: string ) => {
            return (typeof value !== "string") ? value: value.replace( /[^0-9.\- ]/g, '' );
        },
        Alpha: ( value: string ) => {
            return (typeof value !== "string") ? value: value.replace( /[^a-zA-Z ]/g, '' );
        },
        AlphaNumeric: ( value: string ) => {
            return (typeof value !== "string") ? value: value.replace( /[^a-zA-Z0-9 ]/g, '' );
        },
        NoSpaces: ( value: string ) => {
            return (typeof value !== "string") ? value: value.replace( /[\n\t\r ]/g, '' );
        }
    };

    constructor( private _sanitization: SanitizationType[] ) {
    }

    Sanitize( value: any ): any {
        for( var i = 0; i < this._sanitization.length; i++ ) {
            value = Sanitization._sanitizationRules[ SanitizationType[ this._sanitization[i] ] ]( value );
        }
        return value;
    }
}