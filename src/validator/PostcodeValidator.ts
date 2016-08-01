export enum PostcodeLocale {
    AC, AD, AE, AF, AG, AI, AL, AM, AO, AQ, AX, GB, US
}

export class PostcodeValidator {
    private static _postcodeLocale: any = {
        // Asention Island
        AC: (postcode: string): boolean => {
            return (/^\bASCN(\s)?1ZZ$/.test(postcode));
        },
        // Androra
        AD: (postcode: string): boolean => {
            return (/^\bAD[0-9]{3}$/.test(postcode));
        },
        // UAE
        AE: (postcode: string): boolean => {
            return postcode.trim().length === 0; // No Postcodes
        },
        // Afghanistan
        AF: (postcode: string): boolean => {
            return (/^(\b((4[0-3]|[1-3][0-9])(?:[0-9][0-9]))\b)$/.test(postcode));
        },
        // Antigua and Barbuda
        AG: (postcode: string): boolean => {
            return postcode.trim().length === 0; // No Postcodes
        },
        // Anguilla
        AI: (postcode: string): boolean => {
            return (/^\bAI-2640$/.test(postcode));
        },
        // Albania
        AL: (postcode: string): boolean => {
            return (/^\d{4}$/.test(postcode));
        },
        // Armenia
        AM: (postcode: string): boolean => {
            return (/^\d{4}$/.test(postcode));
        },
        // Angola
        AO: (postcode: string): boolean => {
            return postcode.trim().length === 0; // No Postcodes
        },
        // British Antartic Territory
        AQ: (postcode: string): boolean => {
            return (/^\bBIQQ\s1ZZ$/.test(postcode));
        },
        // Aland Islands
        AX: (postcode: string): boolean => {
            return (/^(\b(AX-)?(22(?:[0-9][0-9][0-9])))$/.test(postcode));
        },
        GB: (postcode: string): boolean => {
            return (/^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)$/.test(postcode));
        },
        US: (postcode: string): boolean => {
            return (/^\d{5}(-\d{4})?$/.test(postcode));
        }
    }

    public static Validate(postcode: string, local: PostcodeLocale[]): boolean {
        // TODO: add validation for Any alphanumeric
        var valid = false;
        for (var i = 0; i < local.length; i++) {
            if(PostcodeValidator._postcodeLocale[PostcodeLocale[local[i]]] (postcode) ===  true) {
                valid = true;
            }
        }
        return valid;
    }
}
