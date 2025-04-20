////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import compare from '../../../src/validators/impl/compare';
import dateComparator from '../../../src/validators/impl/date-comparator';

describe('compare', () => {
  it('returns 0 when both values are the same and no comparator is provided', () => {
    expect(compare(5, 5)).toBe(0);
  });

  it('returns a negative number when lhs is less than rhs and no comparator is provided', () => {
    expect(compare(3, 5)).toBeLessThan(0);
  });

  it('returns a positive number when lhs is greater than rhs and no comparator is provided', () => {
    expect(compare(7, 5)).toBeGreaterThan(0);
  });

  it('uses the provided comparator function', () => {
    const comparator = (a, b) => a.length - b.length;
    expect(compare('short', 'longer', comparator)).toBeLessThan(0);
    expect(compare('longer', 'short', comparator)).toBeGreaterThan(0);
    expect(compare('same', 'size', comparator)).toBe(0);
  });

  it('uses the provided comparator function for dates', () => {
    const date1 = '2020-01-01';
    const date2 = new Date('2020-01-02');
    expect(compare(date1, date2, dateComparator)).toBeLessThan(0);
    expect(compare(date2, date1, dateComparator)).toBeGreaterThan(0);
    expect(compare(date1, date1, dateComparator)).toBe(0);
  });

  // it('handles mixed types correctly without a comparator', () => {
  //   expect(compare('5', 5)).toBeGreaterThan(0);
  //   expect(compare(5, '5')).toBe(0);
  // });

  // it('handles null and undefined values correctly without a comparator', () => {
  //   expect(compare(null, undefined)).toBe(0);
  //   expect(compare(undefined, null)).toBe(0);
  //   expect(compare(null, null)).toBe(0);
  //   expect(compare(undefined, undefined)).toBe(0);
  // });

  // it('handles NaN values correctly without a comparator', () => {
  //   expect(compare(NaN, NaN)).toBe(0);
  //   expect(compare(NaN, 5)).toBeGreaterThan(0);
  //   expect(compare(5, NaN)).toBeLessThan(0);
  // });

  it('handles boolean values correctly without a comparator', () => {
    expect(compare(true, false)).toBeGreaterThan(0);
    expect(compare(false, true)).toBeLessThan(0);
    expect(compare(true, true)).toBe(0);
    expect(compare(false, false)).toBe(0);
  });
});
