import { CreditCardType } from "./CreditCardValidator";

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
}