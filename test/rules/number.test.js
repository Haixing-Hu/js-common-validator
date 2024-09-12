////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { Number } from '../../src';

describe('Number', () => {
  it('returns true for a valid positive integer string', () => {
    expect(Number.isValid('123')).toBe(true);
  });

  it('returns true for a valid negative integer string', () => {
    expect(Number.isValid('-123')).toBe(true);
  });

  it('returns true for a valid positive decimal string', () => {
    expect(Number.isValid('123.45')).toBe(true);
  });

  it('returns true for a valid negative decimal string', () => {
    expect(Number.isValid('-123.45')).toBe(true);
  });

  it('returns true for a valid number in scientific notation', () => {
    expect(Number.isValid('1.23e4')).toBe(true);
    expect(Number.isValid('-1.23e-4')).toBe(true);
  });

  it('returns false for a string with non-numeric characters', () => {
    expect(Number.isValid('12a3')).toBe(false);
  });

  it('returns false for an empty string', () => {
    expect(Number.isValid('')).toBe(false);
  });

  it('returns false for a string with only a sign', () => {
    expect(Number.isValid('+')).toBe(false);
    expect(Number.isValid('-')).toBe(false);
  });

  it('returns false for a string with multiple decimal points', () => {
    expect(Number.isValid('123.45.67')).toBe(false);
  });

  it('returns false for a string with spaces', () => {
    expect(Number.isValid(' 123 ')).toBe(false);
  });

  it('returns false for a string with leading zeros', () => {
    expect(Number.isValid('0123')).toBe(false);
  });
});
