export enum CreditCardType {
    AmericanExpress, Discover, InstaPayment, JCB, Laser, Maestro, MasterCard, Visa, VisaElectron
}

export class CreditCardValidator {

    private static _validateType = {
        AmericanExpress: ( card: string ): boolean => {
            return (/^(34|37){1}.*$/.test(card) && card.length === 15);
        },
        Discover: ( card: string ): boolean => {
            return (/^(6011|(62212[6-9]|6221[3-9][0-9]|622[2-8][0-9]{2}|6229[01][0-9]|62292[0-5])|644|645|646|647|648|649|65){1}.*$/.test(card) && card.length === 16);
        },
        InstaPayment: ( card: string ): boolean => {
            return (/^(637|638|639){1}.*$/.test(card) && card.length === 16); //Done
        },
        JCB: ( card: string ): boolean => {
            return (/^(352[89]|35[3-8][0-9]){1}.*$/.test(card) && card.length === 16); //Done
        },
        Laser: ( card: string ): boolean => {
            return (/^(6304|6706|6771|6709){1}.*$/.test(card) && card.length >= 16 && card.length <= 19); //Done
        },
        Maestro: ( card: string ): boolean => {
            return (/^(5018|5020|5038|5893|6304|6759|6761|6762|6763){1}.*$/.test(card) && card.length >= 16 && card.length <= 19); //Done
        },
        MasterCard: ( card: string ): boolean => {
            return (/^(51|52|53|54|55){1}.*$/.test(card) && card.length >= 16 && card.length <= 19); //Done
        },
        Visa: ( card: string ): boolean => {
            return (/^(4){1}.*$/.test(card) && card.length >= 13 && card.length <= 16); //Done
        },
        VisaElectron: ( card: string ): boolean => {
            return (/^(4026|417500|4508|4844|4913|4917){1}.*$/.test(card) && card.length === 16); //Done
        },
        Any:( value:string ) : boolean => {
            //As per http://www.freeformatter.com/credit-card-number-generator-validator.html
            //and https://gist.github.com/DiegoSalazar/4075533
            // accept only digits, dashes or spaces
            if (/[^0-9-\s]+/.test(value) || value.length == 0) return false;
            var nCheck = 0, nDigit = 0, bEven = false;
            value = value.replace(/\D/g, "");

            for (var n = value.length - 1; n >= 0; n--) {
                var cDigit = value.charAt(n),
                        nDigit = parseInt(cDigit, 10);

                if (bEven) {
                    if ((nDigit *= 2) > 9) nDigit -= 9;
                }

                nCheck += nDigit;
                bEven = !bEven;
            }

            return (nCheck % 10) == 0;
        }
    }

    public static Validate( card: string, types: CreditCardType[] ): boolean {
        if( CreditCardValidator._validateType.Any( card ) == false) {
            return false;
        }
        var valid = false;
        for( var i = 0; i < types.length; i++ ) {
            if( CreditCardValidator._validateType[ CreditCardType[ types[i] ] ]( card ) == true ) {
                valid = true;
            }
        }
        return valid;
    }
}