////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import validateAlphaNumberField from './validate-alphanumber-field';
import validateBoolField from './validate-bool-field';
import validateDateField from './validate-date-field';
import validateEmailField from './validate-email-field';
import validateEnumField from './validate-enum-field';
import validateNumberField from './validate-number-field';
import validateIntegerField from './validate-integer-field';
import validateMobileField from './validate-mobile-field';
import validatePersonNameField from './validate-person-name-field';
import validatePhoneField from './validate-phone-field';
import validateTimestampField from './validate-timestamp-field';
import validateUppercaseAlphaNumberField from './validate-uppercase-alphanumber-field';
import validateUrlField from './validate-url-field';

const Validator = {
  alphaNum: validateAlphaNumberField,
  bool: validateBoolField,
  date: validateDateField,
  email: validateEmailField,
  enum: validateEnumField,
  number: validateNumberField,
  id: validateIntegerField,
  int: validateIntegerField,
  mobile: validateMobileField,
  money: validateNumberField,
  personName: validatePersonNameField,
  phone: validatePhoneField,
  timestamp: validateTimestampField,
  upperAlphaNum: validateUppercaseAlphaNumberField,
  url: validateUrlField,
};

export default Validator;
