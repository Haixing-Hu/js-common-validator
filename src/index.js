////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import ValidationResult from './validation-result';
import AlphaNumber from './rules/alpha-number';
import Bool from './rules/bool';
import Email from './rules/email';
import Float from './rules/float';
import IdentityCard from './rules/identity-card';
import Integer from './rules/integer';
import Number from './rules/number';
import LocalDate from './rules/local-date';
import Mobile from './rules/mobile';
import OfficerCard from './rules/officer-card';
import OtherCredential from './rules/other-credential';
import Passport from './rules/passport';
import PersonName from './rules/person-name';
import Phone from './rules/phone';
import Timestamp from './rules/timestamp';
import UppercaseAlphaNumber from './rules/uppercase-alpha-number';
import Url from './rules/url';
import VerifyCode from './rules/verify-code';
import validateAlphaNumberField from './validators/validate-alphanumber-field';
import validateBoolField from './validators/validate-bool-field';
import validateDateField from './validators/validate-date-field';
import validateEmailField from './validators/validate-email-field';
import validateFloatField from './validators/validate-float-field';
import validateIntegerField from './validators/validate-integer-field';
import validateMobileField from './validators/validate-mobile-field';
import validatePhoneField from './validators/validate-phone-field';
import validateStringFieldByRule from './validators/impl/validate-string-field-by-rule';
import validateTimestampField from './validators/validate-timestamp-field';
import validateUppercaseAlphaNumberField from './validators/validate-uppercase-alphanumber-field';
import validateUrlField from './validators/validate-url-field';
import Validator from './validators/validator';

export {
  ValidationResult,
  AlphaNumber,
  Bool,
  Email,
  Float,
  IdentityCard,
  Integer,
  Number,
  LocalDate,
  Mobile,
  OfficerCard,
  OtherCredential,
  Passport,
  PersonName,
  Phone,
  Timestamp,
  UppercaseAlphaNumber,
  Url,
  VerifyCode,
  validateAlphaNumberField,
  validateBoolField,
  validateDateField,
  validateEmailField,
  validateFloatField,
  validateIntegerField,
  validateMobileField,
  validatePhoneField,
  validateStringFieldByRule,
  validateTimestampField,
  validateUppercaseAlphaNumberField,
  validateUrlField,
  Validator,
};

export default Validator;
