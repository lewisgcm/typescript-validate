import { Sanitization, SanitizationType } from "./Sanitization";
import "reflect-metadata";

export class Sanitizor {
    public static Sanitize( object: Object ) {
        for( var key in object ) {
            if( typeof key == "string" || typeof key == "number" || typeof key == "boolean" ) {
                var sanitize = <Sanitization>Reflect.getMetadata( "sanitize", object, key );
                if( sanitize !== undefined ) {
                    object[ key ] = sanitize.Sanitize( object[ key ] );
                }
            }
        }
    }
}

export function Sanitize( types: SanitizationType[] ) {
    return Reflect.metadata( "sanitize", new Sanitization( types ) );
}