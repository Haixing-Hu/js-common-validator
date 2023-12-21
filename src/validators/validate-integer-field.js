////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import Integer from '../rules/integer';
import ValidationResult from '../validation-result';

/**
 * Verify whether a field value of an object is an integer number or a string
 * representation of an integer number.
 *
 * @param {string|number} value
 *     The field value to be verified must be of string type or number type;
 *     for other types, an error will be reported in the returned verification
 *     result.
 * @param {object} context
 *     The validation context.
 * @return {ValidationResult}
 *     The validation result.
 * @author Haixing Hu
 */
export default function validateIntegerField(value, context = {}) {
  const { owner, nullable, label, extraMessage } = context;
  const whose = (owner ? `${owner}的` : '');
  if (value === undefined || value === null || value === '') {
    if (nullable) {
      return new ValidationResult(true);
    } else {
      return new ValidationResult(false, `请填写${whose}${label}`);
    }
  }
  const message = (extraMessage ? `: ${extraMessage}` : '');
  const type = (typeof value);
  let valid = false;
  if ((type === 'number') || (value instanceof Number)) {
    valid = Number.isInteger(value.valueOf());
  } else if ((type === 'string') || (value instanceof String)) {
    valid = Integer.isValid(value.valueOf());
  } else {
    return new ValidationResult(false, `${whose}${label}必须以数字或字符串形式表示${message}`);
  }
  if (valid) {
    return new ValidationResult(true);
  } else {
    return new ValidationResult(false, `${whose}${label}必须是整数${message}`);
  }
}
