////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import LocalDate from '../rules/local-date';
import ValidationResult from '../validation-result';

/**
 * Verify whether a field value of an object represents a valid local date.
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
function validateDateField(value, context = {}) {
  const { owner, nullable, label, extraMessage, startDate, endDate } = context;
  const whose = (owner ? `${owner}的` : '');
  if (value === undefined || value === null || value === '') {
    if (nullable) {
      return new ValidationResult(true);
    } else {
      return new ValidationResult(false, `请填写或选择${whose}${label}`);
    }
  }
  const message = (extraMessage ? `: ${extraMessage}` : '');
  if (!LocalDate.isValid(value)) {
    return new ValidationResult(false, `${whose}${label}格式不正确${message}`);
  }
  if (LocalDate.isValid(startDate)) {
    const start = new Date(startDate);
    start.setUTCHours(0, 0, 0, 0);
    const current = new Date(value);
    if (current.getTime() < start.getTime()) {
      return new ValidationResult(false, `${whose}${label}不能早于${startDate}`);
    }
  }
  if (LocalDate.isValid(endDate)) {
    const end = new Date(endDate);
    end.setUTCHours(23, 59, 59, 999);
    const current = new Date(value);
    if (current.getTime() > end.getTime()) {
      return new ValidationResult(false, `${whose}${label}不能迟于${endDate}`);
    }
  }
  return new ValidationResult(true);
}

export default validateDateField;
