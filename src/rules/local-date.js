////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import isString from './impl/is-string';

/**
 * The regular expression of a valid local date.
 *
 * @author Haixing Hu
 */
const DATE_REGEXP = /^\s*[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}\s*$/;

export default {

  /**
   * Tests whether a value represents a valid local date.
   *
   * The value could be a string representing a valid local date, or a built-in
   * `Date` object.
   *
   * If the value is a string, it will be trimmed before testing.
   *
   * Note that this function only tests the format of the date, but not its
   * logical value (e.g. whether a month exceeds 31 days).
   *
   * @param {any} value
   *    The value to be tested. It could be a string primitive, a built-in
   *    `String` object, or a built-in `Date` object.
   * @return
   *    `true` if the value represents a valid local date; `false` otherwise.
   * @author Haixing Hu
   */
  isValid(value) {
    if (value instanceof Date) {
      return true;
    }
    if (isString(value)) {
      return DATE_REGEXP.test(value.trim());
    } else {
      return false;
    }
  },
};
