////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import compareDate from '../../../src/validators/impl/date-comparator';

describe('compareDate', () => {
  it('returns 0 when both dates are the same', () => {
    expect(compareDate('2023-10-01', '2023-10-01')).toBe(0);
  });

  it('returns a negative number when lhs is earlier than rhs', () => {
    expect(compareDate('2023-09-30', '2023-10-01')).toBeLessThan(0);
  });

  it('returns a positive number when lhs is later than rhs', () => {
    expect(compareDate('2023-10-02', '2023-10-01')).toBeGreaterThan(0);
  });

  it('handles Date objects correctly', () => {
    expect(compareDate(new Date('2023-10-01'), new Date('2023-10-01'))).toBe(0);
    expect(compareDate(new Date('2023-09-30'), new Date('2023-10-01'))).toBeLessThan(0);
    expect(compareDate(new Date('2023-10-02'), new Date('2023-10-01'))).toBeGreaterThan(0);
  });

  it('handles mixed string and Date object inputs', () => {
    expect(compareDate('2023-10-01', new Date('2023-10-01'))).toBe(0);
    expect(compareDate(new Date('2023-09-30'), '2023-10-01')).toBeLessThan(0);
    expect(compareDate('2023-10-02', new Date('2023-10-01'))).toBeGreaterThan(0);
  });

  it('handles invalid date strings gracefully', () => {
    expect(() => compareDate('invalid-date', '2023-10-01')).toThrow();
    expect(() => compareDate('2023-10-01', 'invalid-date')).toThrow();
  });

  it('handles invalid Date objects gracefully', () => {
    expect(() => compareDate(new Date('invalid-date'), '2023-10-01')).toThrow();
    expect(() => compareDate('2023-10-01', new Date('invalid-date'))).toThrow();
  });
});
