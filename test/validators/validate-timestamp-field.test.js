////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { ValidationResult } from '@haixing_hu/common-validation-rule';
import { validateTimestampField } from '../../src';

/**
 * 单元测试{@link validateTimestampField}。
 *
 * @author 胡海星
 */
describe('validateTimestampField', () => {
  test('undefined, nullable = false', () => {
    const str = undefined;
    const context = {
      label: '创建时间',
      nullable: false,
    };
    const expected = new ValidationResult(false, '请填写创建时间');
    expect(validateTimestampField(str, context)).toEqual(expected);
  });
  test('null, nullable = false', () => {
    const str = null;
    const context = {
      label: '创建时间',
      nullable: false,
    };
    const expected = new ValidationResult(false, '请填写创建时间');
    expect(validateTimestampField(str, context)).toEqual(expected);
  });
  test('"", nullable = false', () => {
    const str = '';
    const context = {
      label: '创建时间',
      nullable: false,
    };
    const expected = new ValidationResult(false, '请填写创建时间');
    expect(validateTimestampField(str, context)).toEqual(expected);
  });
  test('"", nullable = true', () => {
    const str = '';
    const context = {
      label: '创建时间',
      nullable: true,
    };
    const expected = new ValidationResult(true);
    expect(validateTimestampField(str, context)).toEqual(expected);
  });
  test('" 2021-01-12", nullable = false', () => {
    const str = ' 2021-01-12';
    const context = {
      label: '创建时间',
      nullable: false,
    };
    const expected = new ValidationResult(true);
    expect(validateTimestampField(str, context)).toEqual(expected);
  });
  test('" 2021-01-01T23:04:55.123Z", nullable = false', () => {
    const str = ' 2021-01-01T23:04:55.123Z';
    const context = {
      label: '创建时间',
      nullable: false,
    };
    const expected = new ValidationResult(true);
    expect(validateTimestampField(str, context)).toEqual(expected);
  });
  test('" 2021-01-01T23:04:55.1z", nullable = false', () => {
    const str = ' 2021-01-01T23:04:55.1z';
    const context = {
      label: '创建时间',
      nullable: false,
    };
    const expected = new ValidationResult(true);
    expect(validateTimestampField(str, context)).toEqual(expected);
  });
  test('" 2021-01-01T23", nullable = false', () => {
    const str = ' 2021-01-01T23';
    const context = {
      label: '创建时间',
      nullable: false,
    };
    const expected = new ValidationResult(false, '创建时间格式不正确');
    expect(validateTimestampField(str, context)).toEqual(expected);
  });
  test('" 2021-01-01T23", nullable = false', () => {
    const str = 123;
    const context = {
      nullable: false,
    };
    const expected = new ValidationResult(false, '时间戳格式不正确');
    expect(validateTimestampField(str, context)).toEqual(expected);
  });
  test('" 2021-01-01T23", no context', () => {
    const str = 123;
    const expected = new ValidationResult(false, '时间戳格式不正确');
    expect(validateTimestampField(str)).toEqual(expected);
  });
});
