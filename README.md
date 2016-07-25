# TypeScript Validation and Sanitization Decorators

[![Build Status](https://travis-ci.org/lewisgcm/typescript-validate.svg?branch=master)](https://travis-ci.org/lewisgcm/typescript-validate)
[![npm version](https://badge.fury.io/js/validator-decorators.svg)](https://badge.fury.io/js/validator-decorators)
[![License Type](https://img.shields.io/badge/license-LGPL%203.0-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0.en.html)

## Getting Started
Using this package is simple and can be achevied with the following:
```bash
npm install validator-decorators
```

## Contributing
Please contribute if you have any additions.

## Quick Start 

```typescript
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
        CreditCard: [ CreditCardType.Mastercard, CreditCardType.Visa ]
    })
    private _creditCard: string;
}
```