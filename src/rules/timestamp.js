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
 * 验证字符串是否表示合法的时间戳的正则表达式。
 *
 * @author 胡海星
 */
const TIMESTAMP_REGEXP = /^\s*[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}([ ]?T?[0-2]?[0-9]:[0-5]?[0-9](:[0-5]?[0-9](\.[0-9]{1,3})?)?)?([ ]*[Zz])?\s*$/;

export default {

  /**
   * 测试一个字符串是否表示一个合法的时间戳。
   *
   * 注意此函数允许字符串首位出现空格。
   *
   * 注意，此函数只考虑时间戳格式是否正确，不考虑时间戳的逻辑合理性（比如某个月
   * 超过了31天）。
   *
   * @param {String} str
   *    待测试的字符串。
   * @return
   *    若该字符串表示一个合法的时间戳则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(str) {
    if (isString(str)) {
      return TIMESTAMP_REGEXP.test(str);
    } else {
      return false;
    }
  },
};
