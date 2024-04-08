////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { Float } from '../../src';

/**
  * 单元测试{@link Float.isValid}。
  *
  * @author 胡海星
  */
describe('Float.isValid()', () => {
  test('undefined', () => {
    const str = undefined;
    expect(Float.isValid(str)).toBe(false);
  });
  test('null', () => {
    const str = null;
    expect(Float.isValid(str)).toBe(false);
  });
  test('empty string', () => {
    const str = '';
    expect(Float.isValid(str)).toBe(false);
  });
  test('non string', () => {
    const str = 123;
    expect(Float.isValid(str)).toBe(false);
  });
  test('"123 "', () => {
    const str = '123 ';
    expect(Float.isValid(str)).toBe(true);
  });
  test('"  +123"', () => {
    const str = '  +123';
    expect(Float.isValid(str)).toBe(true);
  });
  test('"  -123  "', () => {
    const str = '  -123  ';
    expect(Float.isValid(str)).toBe(true);
  });
  test('"  123.4 "', () => {
    const str = '  123.4 ';
    expect(Float.isValid(str)).toBe(true);
  });
  test('"   123. "', () => {
    const str = '   123. ';
    expect(Float.isValid(str)).toBe(true);
  });
  test('"\f +123.4\n"', () => {
    const str = '\f +123.4\n';
    expect(Float.isValid(str)).toBe(true);
  });
  test('" .123"', () => {
    const str = ' .123';
    expect(Float.isValid(str)).toBe(true);
  });
  test('"-123."', () => {
    const str = '-123.';
    expect(Float.isValid(str)).toBe(true);
  });
  test('"+123."', () => {
    const str = '+123.';
    expect(Float.isValid(str)).toBe(true);
  });
  test('"123.345e2"', () => {
    const str = '123.345e2';
    expect(Float.isValid(str)).toBe(true);
  });
  test('"123.345e-2"', () => {
    const str = '123.345e-2';
    expect(Float.isValid(str)).toBe(true);
  });
  test('"123.345e+23"', () => {
    const str = '123.345e+23';
    expect(Float.isValid(str)).toBe(true);
  });

  test('"+"', () => {
    const str = '+';
    expect(Float.isValid(str)).toBe(false);
  });
  test('"-"', () => {
    const str = '-';
    expect(Float.isValid(str)).toBe(false);
  });
  test('"12a3"', () => {
    const str = '12a3';
    expect(Float.isValid(str)).toBe(false);
  });
  test('"#123"', () => {
    const str = '#123';
    expect(Float.isValid(str)).toBe(false);
  });
  test('"12039485897233498274329483948310984321094732198574634598430958."', () => {
    const str = '12039485897233498274329483948310984321094732198574634598430958.';
    expect(Float.isValid(str)).toBe(true);
  });
  test('"-1203948589723349827432948394831098432.1094732198574634598430958"', () => {
    const str = '-1203948589723349827432948394831098432.1094732198574634598430958';
    expect(Float.isValid(str)).toBe(true);
  });
  test('"- 12039485897233498274329483948310984321094732198574634598430958"', () => {
    const str = '- 12039485897233498274329483948310984321094732198574634598430958';
    expect(Float.isValid(str)).toBe(false);
  });
  test('" NaN ", option.allow_nan = false', () => {
    const str = ' NaN ';
    expect(Float.isValid(str)).toBe(false);
  });
  test('" NaN ", option.allow_nan = true', () => {
    const str = ' NaN ';
    expect(Float.isValid(str, { allow_nan: true })).toBe(true);
  });
  test('" Nan ", option.allow_nan = true', () => {
    const str = ' Nan ';
    expect(Float.isValid(str, { allow_nan: true })).toBe(false);
  });
  test('" Infinity ", option.allow_infinity = false', () => {
    const str = ' Infinity ';
    expect(Float.isValid(str)).toBe(false);
  });
  test('" Infinity ", option.allow_infinity = true', () => {
    const str = ' Infinity ';
    expect(Float.isValid(str, { allow_infinity: true })).toBe(true);
  });
  test('" infinity ", option.allow_infinity = true', () => {
    const str = ' infinity ';
    expect(Float.isValid(str, { allow_infinity: true })).toBe(false);
  });
  test('" NaN ", option.allow_nan = true, option.allow_infinity = true', () => {
    const str = ' NaN ';
    expect(Float.isValid(str, { allow_nan: true, allow_infinity: true })).toBe(true);
  });
  test('" Infinity ", option.allow_nan = true, option.allow_infinity = true', () => {
    const str = ' Infinity ';
    expect(Float.isValid(str, { allow_nan: true, allow_infinity: true })).toBe(true);
  });
});
