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
import validateFloatField from './validate-float-field';
import validateIntegerField from './validate-integer-field';
import validateMobileField from './validate-mobile-field';
import validatePhoneField from './validate-phone-field';
import validateTimestampField from './validate-timestamp-field';
import validateUppercaseAlphaNumberField from './validate-uppercase-alphanumber-field';
import validateUrlField from './validate-url-field';

const Validator = {
  alphaNumber: validateAlphaNumberField,
  bool: validateBoolField,
  date: validateDateField,
  float: validateFloatField,
  integer: validateIntegerField,
  mobile: validateMobileField,
  phone: validatePhoneField,
  timestamp: validateTimestampField,
  uppercaseAlphaNumber: validateUppercaseAlphaNumberField,
  url: validateUrlField,
};

export default Validator;
