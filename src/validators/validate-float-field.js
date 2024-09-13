////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import Float from '../rules/float';
import ValidationResult from '../validation-result';

/**
 * Verify whether a field value of an object is a floating point number or a
 * string representation of a floating point number. Note that NaN and Infinite
 * are considered as incorrect.
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
function validateFloatField(value, context = {}) {
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
  if ((type === 'number') || (value instanceof Number)) {
    const val = value.valueOf();
    if (Number.isNaN(val)) {
      return new ValidationResult(false, `${whose}${label}的取值不能是NaN${message}`);
    } else if (!Number.isFinite(val)) {
      return new ValidationResult(false, `${whose}${label}的取值必须是有限的${message}`);
    } else {
      return new ValidationResult(true);
    }
  } else if ((type === 'string') || (value instanceof String)) {
    const val = value.valueOf();
    if (Float.isValid(val)) {
      return new ValidationResult(true);
    } else if (val.trim() === 'NaN') {
      return new ValidationResult(false, `${whose}${label}的取值不能是NaN${message}`);
    } else if (val.trim() === 'Infinity') {
      return new ValidationResult(false, `${whose}${label}的取值必须是有限的${message}`);
    } else {
      return new ValidationResult(false, `${whose}${label}必须是浮点数${message}`);
    }
  } else {
    return new ValidationResult(false, `${whose}${label}必须以数字或字符串形式表示${message}`);
  }
}

export default validateFloatField;
