import { CreditCardType } from './CreditCardValidator';
import { PostcodeLocale } from './PostCodeValidator'

export interface IStringValidationOptions {
    MinLength?: number;
    MaxLength?: number;
}

export interface INumberValidationOptions {
    Min?: number;
    Max?: number;
}

export interface IValidationOptions {
    Number?: INumberValidationOptions;
    String?: IStringValidationOptions;
    Email?: boolean;
    CreditCard?: CreditCardType[];
    Pattern?: RegExp;
    URL?: boolean;
    Time?: string;
    Postcode? : PostcodeLocale[];
}