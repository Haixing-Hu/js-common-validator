////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { UsernameRule } from '@haixing_hu/common-validation-rule';
import validateFieldByRule from './validate-field-by-rule';

/**
 * Verify whether a field value of an object is a string representing a valid
 * username.
 *
 * @param {string} value
 *     The field value to be verified must be of string type; for other types,
 *     an error will be reported in the returned verification result.
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
 *     - `minLength: number`: the optional minimum length of the field value.
 *       If this property is provided, the field value must have at least this
 *       length.
 *     - `maxLength: number`: the optional maximum length of the field value.
 *       If this property is provided, the field value must have at most this
 *       length.
 *     - `start: any`: the optional start value of the field to be validated. If
 *        this property is provided, the field value must be greater than or equal
 *        to this value.
 *     - `end: any`: the optional end value of the field to be validated. If this
 *        property is provided, the field value must be less than or equal to this
 *        value.
 *     - `comparator: function`: the optional comparison function used to compare the
 *       field value with the `start` and `end` values. If this property is provided,
 *       the `start` and `end` properties will be compared with the field value by
 *       this function. The comparison function must have the following signature:
 *       `function compare(lhs: any, rhs: any): number`, and it must return a negative
 *       number if `lhs` is less than `rhs`, a positive number if `lhs` is greater
 *       than `rhs`, or zero if `lhs` is equal to `rhs`. If this property is not
 *       provided, the default less than operator will be used.
 *     - `nullMessage`: the error message to display if the field value is nullish
 *       but it is not nullable. This could be a message template, containing the
 *       `${whose}` and `${label}` placeholders. If it is not provided, the default
 *       message will be used.
 *     - `invalidMessage`: the error message to display if the field value is invalid
 *       according to the validation rule. This could be a message template, containing
 *       the `{whose}` and `{label}` placeholders. If it is not provided, the default
 *       message will be used.
 *     - `tooShortMessage`: the error message to display if the field value is shorter
 *       than the specified minimum length. This could be a message template, containing
 *       the `{whose}`, `{label}`, and `{min}` placeholders. If it is not provided, the
 *       default message will be used.
 *     - `tooLongMessage`: the error message to display if the field value is longer
 *       than the specified maximum length. This could be a message template, containing
 *       the `{whose}`, `{label}`, and `{max}` placeholders. If it is not provided, the
 *       default message will be used.
 *     - `outOfRangeMessage`: the error message to display if the field value is out of
 *       the specified range. This could be a message template, containing the `{whose}`,
 *       `{label}`, `{start}`, and `{end}` placeholders. If it is not provided, the default
 *       message will be used.
 *     - `beforeStartMessage`: the error message to display if the field value is less than
 *       the specified start value. This could be a message template, containing the `{whose}`,
 *       `{label}`, and `{start}` placeholders. If it is not provided, the default message
 *       will be used.
 *     - `afterEndMessage`: the error message to display if the field value is greater than
 *       the specified end value. This could be a message template, containing the `{whose}`,
 *       `{label}`, and `{end}` placeholders. If it is not provided, the default message will
 *       be used.
 * @return {ValidationResult}
 *     The validation result.
 * @author Haixing Hu
 */
function validateUsernameField(value, context = {}) {
  context.label ??= '用户名';
  context.minLength ??= UsernameRule.minLength;
  context.maxLength ??= UsernameRule.maxLength;
  context.invalidMessage ??= '{whose}{label}必须以字母或数字开头，只能包含字母、数字、下划线、连字符、点号和 @ 符号';
  context.tooShortMessage ??= '{whose}{label}不能少于{min}个字符';
  context.tooLongMessage ??= '{whose}{label}不能多于{max}个字符';
  return validateFieldByRule(value, UsernameRule, context);
}

export default validateUsernameField;