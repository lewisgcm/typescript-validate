import { CreditCardType } from './CreditCardValidator';
import { PostcodeLocale } from './PostcodeValidator'

export interface IStringValidationOptions {
    MinLength?: number;
    MaxLength?: number;
}

export interface INumberValidationOptions {
    Min?: number;
    Max?: number;
}

export interface ITimeValidationOptions {
    Format: string;
    Locale?: string;
}

export interface IValidationOptions {
    Number?: INumberValidationOptions;
    String?: IStringValidationOptions;
    Email?: boolean;
    CreditCard?: CreditCardType[];
    Pattern?: RegExp;
    URL?: boolean;
    Time?: ITimeValidationOptions;
    Postcode? : PostcodeLocale[];
}