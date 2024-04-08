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
 * 验证字符串是否表示合法的浮点数的正则表达式。
 *
 * 浮点数可以是正数或者负数，可以是科学计数法，并且只考虑十进制。
 *
 * 注意，此正则表达式不考虑 NaN 和 Infinity
 *
 * @author 胡海星
 */
const FLOAT_REGEXP = /^\s*[+-]?(?:\d+\.?|\d*\.\d+)(?:[E|e][+|-]?\d+)?\s*$/;

export default {

  /**
   * 默认测试选项。
   */
  DEFAULT_OPTION: {
    /**
     * 是否表示将字符串 'NaN' 也看做是一个表示浮点数的合法字符串。
     */
    allow_nan: false,
    /**
     * 是否表示将字符串 'Inifinity' （注意大小写）也看做是一个表示浮点数的合法字符串。
     */
    allow_infinity: false,
  },

  /**
   * 测试一个字符串是否表示一个合法的浮点数。
   *
   * 浮点数可以是正数或者负数，可以是科学计数法，并且只考虑十进制。
   *
   * 注意此函数允许字符串首位出现空格。
   *
   * @param {String} str
   *    待测试的字符串。
   * @param {Object} option
   *    测试选项，表示是否将 ‘NaN’ 或 ‘Infinity’ 也看做是合法的浮点数字符串表示。
   *    默认值为 this.DEFAULT_OPTION。
   * @return
   *    若该字符串表示一个合法的浮点数则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(str, option = this.DEFAULT_OPTION) {
    if (!isString(str)) {
      return false;
    }
    if (str.length === 0) {
      return false;
    }
    if (FLOAT_REGEXP.test(str)) {
      return true;
    }
    if (option.allow_nan && str.trim() === 'NaN') {
      return true;
    }
    if (option.allow_infinity && str.trim() === 'Infinity') {
      return true;
    }
    return false;
  },
};
