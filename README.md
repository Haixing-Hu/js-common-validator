# @qubit-ltd/common-validator

[![npm package](https://img.shields.io/npm/v/@qubit-ltd/common-validator.svg)](https://npmjs.com/package/@qubit-ltd/common-validator)
[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![中文文档](https://img.shields.io/badge/文档-中文版-blue.svg)](README.zh_CN.md)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Haixing-Hu/js-common-validator/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/Haixing-Hu/js-common-validator/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/Haixing-Hu/js-common-validator/badge.svg?branch=master)](https://coveralls.io/github/Haixing-Hu/js-common-validator?branch=master)

[@qubit-ltd/common-validator] is a JavaScript ES6 library of common field validators and validation rules. It provides a comprehensive set of validators for various data types and fields commonly used in web applications.

## Installation

```bash
# Using npm
npm install @qubit-ltd/common-validator

# Using yarn
yarn add @qubit-ltd/common-validator
```

## Features

- Validators for common field types (email, URL, phone, etc.)
- Validators for data types (number, integer, boolean, etc.)
- Date, time and timestamp validation
- Password validation with customizable rules
- Username, personal name validation
- Support for both synchronous and asynchronous validation
- Comprehensive error messages in both English and Chinese
- Support for custom validation rules and error messages

## Usage

### Basic Usage

```javascript
import { validateEmailField, validatePasswordField } from '@qubit-ltd/common-validator';

// Validate an email address
const emailResult = validateEmailField('user@example.com');
console.log(emailResult.success);  // true if valid, false if invalid
console.log(emailResult.description);  // Error message if invalid

// Validate a password
const passwordResult = validatePasswordField('Password123!');
console.log(passwordResult.success);
console.log(passwordResult.description);
```

### Validation with Context

```javascript
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
};

// Validate with owner name (useful for generating more specific error messages)
const result = validateEmailField(user.email, { 
  instance: user, 
  owner: user.name 
});

if (!result.success) {
  console.log(result.description); // "Please enter John Doe's email address" if empty
}
```

### Using Validator Class

```javascript
import { Validator } from '@qubit-ltd/common-validator';

// Create a custom validator
const validator = new Validator();

// Validate a form
const form = {
  username: 'johndoe',
  email: 'john.doe@example.com',
  password: 'Password123!'
};

const usernameResult = validator.validateUsername(form.username);
const emailResult = validator.validateEmail(form.email);
const passwordResult = validator.validatePassword(form.password);

if (usernameResult.success && emailResult.success && passwordResult.success) {
  // Form is valid
} else {
  // Form has errors
}
```

## Available Validators

- `validateAlphaNumberField`: Validates alphanumeric strings
- `validateBoolField`: Validates boolean values
- `validateDateField`: Validates date strings
- `validateTimeField`: Validates time strings
- `validateDateTimeField`: Validates datetime strings
- `validateEmailField`: Validates email addresses
- `validateEnumField`: Validates values in an enumeration
- `validateNumberField`: Validates numeric values
- `validateIntegerField`: Validates integer values
- `validateMobileField`: Validates mobile phone numbers
- `validatePasswordField`: Validates passwords
- `validatePersonNameField`: Validates person names
- `validatePhoneField`: Validates phone numbers
- `validateTimestampField`: Validates timestamps
- `validateUppercaseAlphaNumberField`: Validates uppercase alphanumeric strings
- `validateUrlField`: Validates URLs
- `validateUsernameField`: Validates usernames
- `validateFieldByRule`: Validates a field based on a validation rule

## <span id="contributing">Contributing</span>

If you find any issues or have suggestions for improvements, please feel free
to open an issue or submit a pull request to the [GitHub repository].

## <span id="license">License</span>

[@qubit-ltd/common-validator] is distributed under the Apache 2.0 license.
See the [LICENSE](LICENSE) file for more details.

[@qubit-ltd/common-validator]: https://npmjs.com/package/@qubit-ltd/common-validator
[GitHub repository]: https://github.com/Haixing-Hu/js-common-validator
