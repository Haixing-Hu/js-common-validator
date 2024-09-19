////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import isNotNullish from './is-not-nullish';
import compare from './compare';

/**
 * Check whether a value is within the specified range.
 *
 * @param {any} value
 *     The value to check.
 * @param {object} rule
 *     The rule object used for verification. The object must provide a
 *     `isValid()` function to verify whether a string value conforms to the
 *     rule.
 * @param {any|undefined} start
 *     The optional start value of the range. If this parameter is provided, the value
 *     must be greater than or equal to this value. The default value is `undefined`.
 * @param {any|undefined} end
 *     The optional end value of the range. If this parameter is provided, the value
 *     must be less than or equal to this value. The default value is `undefined`.
 * @param {Function|undefined} comparator
 *     The optional comparison function used to compare the value with the `start` and
 *     `end` values. If this parameter is provided, the `start` and `end` values will be
 *     compared with the value by this function. The comparison function must have the
 *     following signature: `function compare(lhs: any, rhs: any): number`, and it must
 *     return a negative number if `lhs` is less than `rhs`, a positive number if `lhs`
 *     is greater than `rhs`, or zero if `lhs` is equal to `rhs`. If this parameter is
 *     not provided, the default less than operator will be used. The default value is
 *     `undefined`.
 * @return {boolean}
 *     `true` if the value is within the specified range; otherwise, `false`.
 * @private
 * @author Haixing Hu
 */
function withinRange(value, rule, start = undefined, end = undefined, comparator = undefined) {
  if (isNotNullish(start) && isNotNullish(end) && rule.isValid(start) && rule.isValid(end)) {
    return compare(value, start, comparator) >= 0 && compare(value, end, comparator) <= 0;
  } else if (isNotNullish(start) && rule.isValid(start)) {
    return compare(value, start, comparator) >= 0;
  } else if (isNotNullish(end) && rule.isValid(end)) {
    return compare(value, end, comparator) <= 0;
  } else {
    return true;
  }
}

export default withinRange;
