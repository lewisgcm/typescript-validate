export enum PostcodeLocale {
    AF, AX, GB, US
}

export class PostcodeValidator {
    private static _postcodeLocale: any = {
        AF: (postcode: string): boolean => {
            return (/^(\b((4[0-3]|[1-3][0-9])(?:[0-9][0-9]))\b)$/.test(postcode));
        },
        AX: (postcode: string): boolean => {
            return (/^(\b(22(?:[0-9][0-9][0-9])))$/.test(postcode));
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
