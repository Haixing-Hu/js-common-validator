////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { AlphaNumber } from '../../src';

/**
 * 单元测试{@link AlphaNumber.isValid}。
 *
 * @author 胡海星
 */
describe('AlphaNumber.isValid()', () => {
  test('undefined', () => {
    const str = undefined;
    expect(AlphaNumber.isValid(str)).toBe(false);
  });
  test('null', () => {
    const str = null;
    expect(AlphaNumber.isValid(str)).toBe(false);
  });
  test('empty string', () => {
    const str = '';
    expect(AlphaNumber.isValid(str)).toBe(false);
  });
  test('non string', () => {
    const str = 123;
    expect(AlphaNumber.isValid(str)).toBe(false);
  });
  test('"abc123"', () => {
    const str = 'abc123';
    expect(AlphaNumber.isValid(str)).toBe(true);
  });
  test('"123"', () => {
    const str = '123';
    expect(AlphaNumber.isValid(str)).toBe(true);
  });
  test('"  12a3 "', () => {
    const str = '  12a3 ';
    expect(AlphaNumber.isValid(str)).toBe(true);
  });
  test('"  12-a3 "', () => {
    const str = '  12-a3 ';
    expect(AlphaNumber.isValid(str)).toBe(false);
  });
});
