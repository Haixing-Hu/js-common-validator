////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import Url from '../rules/url';
import validateStringFieldByRule from './impl/validate-string-field-by-rule';

/**
 * Verify whether a field value of an object is a string representation of a
 * valid URL.
 *
 * @param {string} value
 *     The field value to be verified must be of string type; for other types,
 *     an error will be reported in the returned verification result.
 * @param {object} context
 *     The validation context.
 * @return {ValidationResult}
 *     The validation result.
 * @author Haixing Hu
 */
export default function validateUrlField(value, context = {}) {
  context.label = context.label || '网址';
  return validateStringFieldByRule(value, Url, context);
}
