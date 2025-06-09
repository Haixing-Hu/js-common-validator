////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import * as allExports from '../src/index';

/**
 * 测试src/index.js的覆盖率
 *
 * @author 胡海星
 */
describe('index.js coverage', () => {
  test('确保所有导出内容被正确导入', () => {
    // 确保导出的内容不为空
    expect(allExports).not.toBeNull();
    expect(Object.keys(allExports).length).toBeGreaterThan(0);

    // 确保所有导出的内容都有正确的类型
    expect(typeof allExports.validateFieldByRule).toBe('function');
    expect(typeof allExports.validateAlphaNumberField).toBe('function');
    expect(typeof allExports.validateBoolField).toBe('function');
    expect(typeof allExports.validateDateField).toBe('function');
    expect(typeof allExports.validateTimeField).toBe('function');
    expect(typeof allExports.validateDateTimeField).toBe('function');
    expect(typeof allExports.validateEmailField).toBe('function');
    expect(typeof allExports.validateEnumField).toBe('function');
    expect(typeof allExports.validateNumberField).toBe('function');
    expect(typeof allExports.validateIntegerField).toBe('function');
    expect(typeof allExports.validateMobileField).toBe('function');
    expect(typeof allExports.validatePasswordField).toBe('function');
    expect(typeof allExports.validatePersonNameField).toBe('function');
    expect(typeof allExports.validatePhoneField).toBe('function');
    expect(typeof allExports.validateTimestampField).toBe('function');
    expect(typeof allExports.validateUppercaseAlphaNumberField).toBe('function');
    expect(typeof allExports.validateUrlField).toBe('function');
    expect(typeof allExports.validateUsernameField).toBe('function');
    expect(typeof allExports.Validator).toBe('function');

    // 确保默认导出是正确的
    expect(allExports.default).toBe(allExports.Validator);
  });

  test('确保能正确调用导出的函数', () => {
    // 尝试调用一些导出的函数，确保它们能正常工作
    const emailResult = allExports.validateEmailField('test@example.com');
    expect(emailResult.success).toBe(true);

    const urlResult = allExports.validateUrlField('https://example.com');
    expect(urlResult.success).toBe(true);

    // 调用其他函数
    const boolResult = allExports.validateBoolField('true');
    expect(boolResult.success).toBe(true);

    const numberResult = allExports.validateNumberField('123');
    expect(numberResult.success).toBe(true);

    const integerResult = allExports.validateIntegerField('123');
    expect(integerResult.success).toBe(true);

    // 不需要完整测试所有函数的功能，只需要确保它们被正确导出和可以调用
  });
});
