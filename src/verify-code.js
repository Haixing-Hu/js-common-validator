/*******************************************************************************
 *
 *    Copyright (c) 2017 - 2018
 *    Nanjing Smart Medical Investment Operation Service Co. Ltd.
 *    All rights reserved.
 *
 ******************************************************************************/

/**
 * 验证验证码合法性的正则表达式。
 *
 * 合法的验证码由6位数字组成
 *
 * @author 胡海星
 */
const VERIFY_CODE_REGEXP = /^[0-9]{6}$/;

export default {

  /**
   * 测试验证码是否合法
   *
   * @param {in} code
   *    待测试的验证码
   * @return
   *    若验证码合法则返回true；否则返回false。
   * @author 胡海星
   */
  isValid(code) {
    return VERIFY_CODE_REGEXP.test(code);
  },
};
