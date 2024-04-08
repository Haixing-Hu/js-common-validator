////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { Bool } from '../../src';

/**
 * 单元测试{@link Bool.isValid}。
 *
 * @author 胡海星
 */
describe('Bool.isValid()', () => {
  test('undefined', () => {
    const str = undefined;
    expect(Bool.isValid(str)).toBe(false);
  });
  test('null', () => {
    const str = null;
    expect(Bool.isValid(str)).toBe(false);
  });
  test('empty string', () => {
    const str = '';
    expect(Bool.isValid(str)).toBe(false);
  });
  test('non string', () => {
    const str = 123;
    expect(Bool.isValid(str)).toBe(false);
  });
  test('"123 "', () => {
    const str = '123';
    expect(Bool.isValid(str)).toBe(false);
  });
  test('"true "', () => {
    const str = 'true ';
    expect(Bool.isValid(str)).toBe(true);
  });
  test('" false "', () => {
    const str = ' false ';
    expect(Bool.isValid(str)).toBe(true);
  });
  test('" tRue "', () => {
    const str = ' tRue ';
    expect(Bool.isValid(str)).toBe(true);
  });
  test('" fALse "', () => {
    const str = ' fALse ';
    expect(Bool.isValid(str)).toBe(true);
  });
  test('" xxx "', () => {
    const str = ' xxx ';
    expect(Bool.isValid(str)).toBe(false);
  });
  test('" true. "', () => {
    const str = ' true. ';
    expect(Bool.isValid(str)).toBe(false);
  });
});
