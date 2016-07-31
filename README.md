# TypeScript Validation and Sanitization Decorators

[![Build Status](https://travis-ci.org/lewisgcm/typescript-validate.svg?branch=master)](https://travis-ci.org/lewisgcm/typescript-validate)
[![npm version](https://badge.fury.io/js/typescript-validate.svg)](https://badge.fury.io/js/typescript-validate)
[![Coverage Status](https://coveralls.io/repos/github/lewisgcm/typescript-validate/badge.svg?branch=master)](https://coveralls.io/github/lewisgcm/typescript-validate?branch=master)
[![License Type](https://img.shields.io/badge/license-LGPL%203.0-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0.en.html)

## Getting Started
Using this package is simple and can be achevied with the following:
```bash
npm install typescript-validate
```

## Contributing
Please contribute if you have any additions.

## Quick Start 
```typescript
import { Sanitize, Validate, Sanitizor, Validator, SanitizationType } from "typescript-validate";

class User {

    @Sanitize([
        SanitizationType.AlphaNumeric
    ])
    @Validate({
        String: {
            MinLength: 1,
            MaxLength: 5
        }
    })
    public Username: string;

    @Validate({
        Number: {
            Min: 5,
            Max: 10
        }
    })
    public age: number;

    @Validate({
        URL: true,
        Pattern: /^.*google.com/
    })
    private website: string;

    @Validate({
        Time: "dd/mm/YY"
    })
    private dob: string;

    @Validate({
        Time: "HH:MM:SS"
    })
    private sentAt: string;

    @Validate({
        CreditCard: [ CreditCardType.Mastercard, CreditCardType.Visa ]
    })
    private _creditCard: string;
}

var user = new User();
t.Username = "Hello World"; //invalid
Sanitizor.Sanitize( user );
Validator.Valid( user ); //returns false
```

##Validators
Validators can be used on classes by adding the @Validate decorator to class properties.
The class can the be validated using the Validator.Valid function on the instantiated object of that class.
The following validators are supported:

* Email
* CreditCard
* Time
* Number
* String
* PostCode
* Pattern
* URL


##Sanitizors
Sanitizors are used for sanitizing class properties before operating on them.
Add sanitizors using the @Sanitize decorator to class properties and then call the Saniztor.Santize method on an instantiated object of that class.
The santizor will then update each of the decorator properties based on the santizor used.

* Trim - Trim trailing and leading spaces, tabs and newlines
* UpperCase - Transform the text to uppercase
* LowerCase - Transform the text to lowercase
* Numeric - Strip all non numeric
* Alpha - Strip all non alpha
* AlphaNumeric - Strip all non alpha and numeric
* NoSpaces - Strip all spaces