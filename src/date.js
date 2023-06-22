/*******************************************************************************
 *
 *    Copyright (c) 2017 - 2018
 *    Nanjing Smart Medical Investment Operation Service Co. Ltd.
 *    All rights reserved.
 *
 ******************************************************************************/

/**
 * 验证字符串是否表示合法的日期的正则表达式。
 *
 * @author 胡海星
 */
const DATE_REGEXP = /^\s*[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}\s*$/;

export default {

  /**
   * 测试一个字符串是否表示一个合法的日期。
   *
   * 注意此函数允许字符串首位出现空格。
   *
   * 注意，此函数只考虑日期格式是否正确，不考虑日期的逻辑合理性（比如某个月超过了
   * 31天）。
   *
   * @param {String} str
   *    待测试的字符串。
   * @return
   *    若该字符串表示一个合法的日期则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(str) {
    if (str === undefined || str === null || str === '') {
      return false;
    }
    return DATE_REGEXP.test(str);
  },
};
