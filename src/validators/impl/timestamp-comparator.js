////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Compare two timestamp values.
 *
 * The date time value can be a string or a `Date` object. If it is a string,
 * it must be in the format of `YYYY-[M]M-[D]D[[Z][H]H:[m]m[:[s]s][.s[s[s]]]`. The comparison is
 * based on the UTC time zone.
 *
 * @param {string|Date} lhs
 *     The left hand side date value.
 * @param {string|Date} rhs
 *     The right hand side date value.
 * @return {number}
 *     A negative number if `lhs` is less than `rhs`, a positive number if `lhs` is greater
 *     than `rhs`, or zero if `lhs` is equal to `rhs`.
 * @private
 * @author Haixing Hu
 */
function compareTimestamp(lhs, rhs) {
  if (lhs instanceof Date) {
    if (rhs instanceof Date) {
      return lhs.getTime() - rhs.getTime();
    } else if ((typeof rhs === 'string') || (rhs instanceof String)) {
      return lhs.getTime() - Date.parse(rhs);
    } else {
      throw new Error('The right hand side value must be a string or a Date object.');
    }
  } else if ((typeof lhs === 'string') || (lhs instanceof String)) {
    if (rhs instanceof Date) {
      return Date.parse(lhs) - rhs.getTime();
    } else if ((typeof rhs === 'string') || (rhs instanceof String)) {
      return Date.parse(lhs) - Date.parse(rhs);
    } else {
      throw new Error('The right hand side value must be a string or a Date object.');
    }
  } else {
    throw new Error('The left hand side value must be a string or a Date object.');
  }
}

export default compareTimestamp;
