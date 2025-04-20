////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import checkLength from '../../../src/validators/impl/check-length';

/**
 * 单元测试{@link checkLength}函数。
 *
 * @author 胡海星
 */
describe('checkLength()', () => {
  test('当对象长度小于最小长度时，应该返回-1', () => {
    const obj = 'abc';
    expect(checkLength(obj, 5, 10)).toBe(-1);
  });

  test('当对象长度大于最大长度时，应该返回1', () => {
    const obj = 'abcdefghijk';
    expect(checkLength(obj, 2, 10)).toBe(1);
  });

  test('当对象长度在最小和最大长度之间时，应该返回0', () => {
    const obj = 'abcdef';
    expect(checkLength(obj, 2, 10)).toBe(0);
  });

  test('当对象长度等于最小长度时，应该返回0', () => {
    const obj = 'abc';
    expect(checkLength(obj, 3, 10)).toBe(0);
  });

  test('当对象长度等于最大长度时，应该返回0', () => {
    const obj = 'abcdefghij';
    expect(checkLength(obj, 2, 10)).toBe(0);
  });

  test('当min不是数字类型时，应该忽略最小长度检查', () => {
    const obj = 'a';
    expect(checkLength(obj, '5', 10)).toBe(0);
    expect(checkLength(obj, null, 10)).toBe(0);
    expect(checkLength(obj, undefined, 10)).toBe(0);
    expect(checkLength(obj, NaN, 10)).toBe(0);
  });

  test('当max不是数字类型时，应该忽略最大长度检查', () => {
    const obj = 'abcdefghijklmnopqrst';
    expect(checkLength(obj, 1, '10')).toBe(0);
    expect(checkLength(obj, 1, null)).toBe(0);
    expect(checkLength(obj, 1, undefined)).toBe(0);
    expect(checkLength(obj, 1, NaN)).toBe(0);
  });

  test('当对象没有length属性时，应该忽略长度检查', () => {
    const obj = 123;
    expect(checkLength(obj, 5, 10)).toBe(0);
  });

  test('当对象的length属性不是数字类型时，应该忽略长度检查', () => {
    const obj = { length: '5' };
    expect(checkLength(obj, 1, 10)).toBe(0);
  });

  test('当min和max都不提供时，应该返回0', () => {
    const obj = 'abcde';
    expect(checkLength(obj)).toBe(0);
  });

  test('当只提供min时，只检查最小长度', () => {
    const obj = 'a';
    expect(checkLength(obj, 5)).toBe(-1);

    const obj2 = 'abcdefg';
    expect(checkLength(obj2, 5)).toBe(0);
  });

  test('当只提供max时，只检查最大长度', () => {
    const obj = 'abcdefghijk';
    expect(checkLength(obj, undefined, 5)).toBe(1);

    const obj2 = 'abc';
    expect(checkLength(obj2, undefined, 5)).toBe(0);
  });
});
