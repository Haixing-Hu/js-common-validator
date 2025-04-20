////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Compare two values using the specified comparison function.
 *
 * @param {any} lhs
 *     The left-hand side value to compare.
 * @param {rhs} rhs
 *     The right-hand side value to compare.
 * @param {Function|undefined} comparator
 *     The optional comparison function used to compare the two values. If this parameter
 *     is provided, the two values will be compared by this function. The comparison
 *     function must have the following signature: `function compare(lhs: any, rhs: any): number`,
 *     and it must return a negative number if `lhs` is less than `rhs`, a positive number
 *     if `lhs` is greater than `rhs`, or zero if `lhs` is equal to `rhs`. If this parameter
 *     is not provided, the default less than operator will be used.
 * @return {number}
 *     A negative number if `lhs` is less than `rhs`, a positive number if `lhs` is greater
 *     than `rhs`, or zero if `lhs` is equal to `rhs`.
 * @private
 * @author Haixing Hu
 */
function compare(lhs, rhs, comparator) {
  if (comparator) {
    return comparator(lhs, rhs);
  } else if (lhs === rhs) {
    return 0;
  } else {
    return lhs < rhs ? -1 : 1;
  }
}

export default compare;
