////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Checks the length of an object.
 *
 * @param {any} obj
 *     The object to be checked.
 * @param {any} min
 *     The minimum length of the object. If this parameter is not a number or
 *     is not specified, then the minimum length is not checked.
 * @param {any} max
 *     The maximum length of the object. If this parameter is not a number or
 *     is not specified, then the maximum length is not checked.
 * @return {number}
 *     If the length of the object is less than the minimum length, then return
 *     `-1`; if the length of the object is greater than the maximum length, then
 *     return `1`; otherwise, return `0`. If the object does not have a length
 *     property, then return `0`.
 */
function checkLength(obj, min, max) {
  if (typeof min === 'number') {
    if (typeof obj.length === 'number') {
      if (obj.length < min) {
        return -1;
      }
    }
  }
  if (typeof max === 'number') {
    if (typeof obj.length === 'number') {
      if (obj.length > max) {
        return 1;
      }
    }
  }
  return 0;
}

export default checkLength;
