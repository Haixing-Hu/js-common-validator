////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Compare two date values.
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
function compareDate(lhs, rhs) {
  const a = new Date(lhs);
  a.setUTCHours(0, 0, 0, 0);
  const b = new Date(rhs);
  b.setUTCHours(0, 0, 0, 0);
  if (Number.isNaN(a.getTime())) {
    throw new TypeError(`Invalid date value: ${lhs}`);
  }
  if (Number.isNaN(b.getTime())) {
    throw new TypeError(`Invalid date value: ${rhs}`);
  }
  return a.getTime() - b.getTime();
}

export default compareDate;
