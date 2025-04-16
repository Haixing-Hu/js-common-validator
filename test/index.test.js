////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import {
  validateFieldByRule,
  validateAlphaNumberField,
  validateBoolField,
  validateDateField,
  validateTimeField,
  validateDateTimeField,
  validateEmailField,
  validateEnumField,
  validateNumberField,
  validateIntegerField,
  validateMobileField,
  validatePasswordField,
  validatePersonNameField,
  validatePhoneField,
  validateTimestampField,
  validateUppercaseAlphaNumberField,
  validateUrlField,
  validateUsernameField,
  Validator,
} from '../src';
import defaultExport from '../src';

/**
 * 测试src/index.js的导出功能
 *
 * @author 胡海星
 */
describe('index.js exports', () => {
  test('命名导出应该正确导出所有验证器', () => {
    // 确保所有导出的函数都是函数类型
    expect(typeof validateFieldByRule).toBe('function');
    expect(typeof validateAlphaNumberField).toBe('function');
    expect(typeof validateBoolField).toBe('function');
    expect(typeof validateDateField).toBe('function');
    expect(typeof validateTimeField).toBe('function');
    expect(typeof validateDateTimeField).toBe('function');
    expect(typeof validateEmailField).toBe('function');
    expect(typeof validateEnumField).toBe('function');
    expect(typeof validateNumberField).toBe('function');
    expect(typeof validateIntegerField).toBe('function');
    expect(typeof validateMobileField).toBe('function');
    expect(typeof validatePasswordField).toBe('function');
    expect(typeof validatePersonNameField).toBe('function');
    expect(typeof validatePhoneField).toBe('function');
    expect(typeof validateTimestampField).toBe('function');
    expect(typeof validateUppercaseAlphaNumberField).toBe('function');
    expect(typeof validateUrlField).toBe('function');
    expect(typeof validateUsernameField).toBe('function');
    
    // 确保Validator是一个对象
    expect(typeof Validator).toBe('object');
    expect(Validator).not.toBeNull();
  });

  test('默认导出应该是Validator对象', () => {
    expect(defaultExport).toBe(Validator);
  });
}); 