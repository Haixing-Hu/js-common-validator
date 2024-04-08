////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { LocalDate } from '../../src';

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
  test('empty string', () => {
    const str = '';
    expect(LocalDate.isValid(str)).toBe(false);
    expect(LocalDate.isValid(new String(str))).toBe(false);
  });
  test('non string', () => {
    const str = 123;
    expect(LocalDate.isValid(str)).toBe(false);
  });
  test('"123 "', () => {
    const str = '123';
    expect(LocalDate.isValid(str)).toBe(false);
    expect(LocalDate.isValid(new String(str))).toBe(false);
  });
  test('" 2021-01-12"', () => {
    const str = ' 2021-01-31';
    expect(LocalDate.isValid(str)).toBe(true);
    expect(LocalDate.isValid(new String(str))).toBe(true);
  });
  test('" 2021-1-1 "', () => {
    const str = ' 2021-1-1 ';
    expect(LocalDate.isValid(str)).toBe(true);
    expect(LocalDate.isValid(new String(str))).toBe(true);
  });
  test('" 21-1-1 "', () => {
    const str = ' 21-1-1 ';
    expect(LocalDate.isValid(str)).toBe(false);
    expect(LocalDate.isValid(new String(str))).toBe(false);
  });
  test('Date', () => {
    const value = new Date();
    expect(LocalDate.isValid(value)).toBe(true);
  });
  test('boolean', () => {
    expect(LocalDate.isValid(true)).toBe(false);
  });
  test('number', () => {
    expect(LocalDate.isValid(123)).toBe(false);
  });
  test('RegExp', () => {
    expect(LocalDate.isValid(/.*/)).toBe(false);
  });
});
