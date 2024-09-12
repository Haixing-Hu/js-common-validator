////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import isString from './impl/is-string';

/**
 * 验证字符串是否表示合法的数字的正则表达式。
 *
 * @author 胡海星
 * @see http://stackoverflow.com/questions/13340717/json-numbers-regular-expression
 */
const NUMBER_REGEX = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;

export default {
  /**
   * 测试一个字符串是否表示一个合法的数字。
   *
   * 注意此函数允许字符串首位出现空格。
   *
   * @param {String} str
   *    待测试的字符串。
   * @return
   *    若该字符串表示一个合法的数字则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(str) {
    if (isString(str)) {
      return NUMBER_REGEX.test(str);
    } else {
      return false;
    }
  },
};
