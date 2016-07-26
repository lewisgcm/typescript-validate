import { Validation } from "./Validation";
import { IValidationOptions, INumberValidationOptions, IStringValidationOptions } from "./IValidationOptions";
import "reflect-metadata";

export class Validator {

    public static Valid( object: Object ) {
        for( var key in object ) {
            if( typeof key == "string" || typeof key == "number" || typeof key == "boolean" ) {
                var validate = <Validation>Reflect.getMetadata( "validate", object, key );
                if( validate !== undefined ) {
                    if( validate.Validate( object[ key ] ) == false )
                        return false;
                }
            }
        }
        return true;
    }
}


export function Validate( options: IValidationOptions ) {
    return Reflect.metadata( "validate", new Validation( options ) );
}