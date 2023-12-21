////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import ValidationResult from '../../validation-result';

/**
 * Use the specified validation rule to validate a string field.
 *
 * @param {string} value
 *     The field value to be verified.
 * @param {object} rule
 *     The rule object used for verification. The object must provide a
 *     `isValid()` function to verify whether a string value conforms to the
 *     rule.
 * @param {Object} context
 *     The validation context, which is the context object provided by the
 *     second argument of the validator function. It may have the following
 *     properties:
 *     - `instance: object`: the object to which the field belongs.
 *     - `owner: string|undefined`: the name of the owner (a person) of the field.
 *     - `field: string`: the name of the field to be validated.
 *     - `type: function`: the constructor of the field to be validated. If the
 *        field is decorated by the `@Type` decorator, this property is the
 *        argument of the decorator, otherwise it is the constructor of the
 *        default value of the field. If the default value of the field is
 *        `null` or `undefined`, this property is set to `undefined`.
 *     - `label: string`: the display label of the field to be validated.
 *     - `nullable: boolean`: whether the field to be validated is nullable.
 *     - `nonEmpty: boolean`: whether the field to be validated is non-empty.
 *     - `extraMessage: string`: extra error message.
 * @return {ValidationResult}
 *     The validation result.
 * @author Haixing Hu
 */
function validateStringFieldByRule(value, rule, context) {
  if (typeof rule?.isValid !== 'function') {
    throw new Error('The rule object must provide a isValid() function');
  }
  const { owner, nullable, label, extraMessage } = context;
  const whose = (owner ? `${owner}的` : '');
  if (value === undefined || value === null || value === '') {
    if (nullable) {
      return new ValidationResult(true);
    } else {
      return new ValidationResult(false, `请填写${whose}${label}`);
    }
  }
  if ((typeof value !== 'string') && (!(value instanceof String))) {
    return new ValidationResult(false, `${whose}${label}必须以字符串形式表示`);
  }
  if (rule.isValid(value.valueOf())) {  // call rule.isValid() with a primitive string
    return new ValidationResult(true);
  } else {
    const message = (extraMessage ? `: ${extraMessage}` : '');
    return new ValidationResult(false, `${whose}${label}格式不正确${message}`);
  }
}

export default validateStringFieldByRule;
