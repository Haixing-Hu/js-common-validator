////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Tests whether the specified value is not nullish.
 *
 * @param {any} value
 *     the value to be tested.
 * @return {boolean}
 *     `true` if the value is not nullish; `false` otherwise.
 * @private
 * @author Haixing Hu
 */
function isNotNullish(value) {
  return (value !== undefined) && (value !== null);
}

export default isNotNullish;
