/*******************************************************************************
 *
 *    Copyright (c) 2017 - 2020
 *    Nanjing Smart Medical Investment Operation Service Co. Ltd.
 *    All rights reserved.
 *
 ******************************************************************************/
import { LocalDate } from '@/index';

/**
 * 单元测试{@link LocalDate.isValid}。
 *
 * @author 胡海星
 */
describe('LocalDate.isValid()', () => {
  test('undefined', () => {
    const str = undefined;
    expect(LocalDate.isValid(str)).toBe(false);
  });
  test('null', () => {
    const str = null;
    expect(LocalDate.isValid(str)).toBe(false);
  });
  test('""', () => {
    const str = '';
    expect(LocalDate.isValid(str)).toBe(false);
  });
  test('"123 "', () => {
    const str = '123';
    expect(LocalDate.isValid(str)).toBe(false);
  });
  test('" 2021-01-12"', () => {
    const str = ' 2021-01-31';
    expect(LocalDate.isValid(str)).toBe(true);
  });
  test('" 2021-1-1 "', () => {
    const str = ' 2021-1-1 ';
    expect(LocalDate.isValid(str)).toBe(true);
  });
  test('" 21-1-1 "', () => {
    const str = ' 21-1-1 ';
    expect(LocalDate.isValid(str)).toBe(false);
  });
});
