////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import compareTime from '../../../src/validators/impl/time-comparator';

describe('compareTime', () => {
  it('returns 0 for equal times', () => {
    const lhs = '12:30:45';
    const rhs = '12:30:45';
    const result = compareTime(lhs, rhs);
    expect(result).toBe(0);
  });

  it('returns a positive number when lhs is greater than rhs', () => {
    const lhs = '13:30:45';
    const rhs = '12:30:45';
    const result = compareTime(lhs, rhs);
    expect(result).toBeGreaterThan(0);
  });

  it('returns a negative number when lhs is less than rhs', () => {
    const lhs = '11:30:45';
    const rhs = '12:30:45';
    const result = compareTime(lhs, rhs);
    expect(result).toBeLessThan(0);
  });

  it('returns a positive number when lhs minutes are greater than rhs', () => {
    const lhs = '12:31:45';
    const rhs = '12:30:45';
    const result = compareTime(lhs, rhs);
    expect(result).toBeGreaterThan(0);
  });

  it('returns a negative number when lhs minutes are less than rhs', () => {
    const lhs = '12:29:45';
    const rhs = '12:30:45';
    const result = compareTime(lhs, rhs);
    expect(result).toBeLessThan(0);
  });

  it('returns a positive number when lhs seconds are greater than rhs', () => {
    const lhs = '12:30:46';
    const rhs = '12:30:45';
    const result = compareTime(lhs, rhs);
    expect(result).toBeGreaterThan(0);
  });

  it('returns a negative number when lhs seconds are less than rhs', () => {
    const lhs = '12:30:44';
    const rhs = '12:30:45';
    const result = compareTime(lhs, rhs);
    expect(result).toBeLessThan(0);
  });

  it('returns 0 when both times are equal and seconds are not provided', () => {
    const lhs = '12:30';
    const rhs = '12:30';
    const result = compareTime(lhs, rhs);
    expect(result).toBe(0);
  });

  it('returns a positive number when lhs is greater than rhs and seconds are not provided', () => {
    const lhs = '12:31';
    const rhs = '12:30';
    const result = compareTime(lhs, rhs);
    expect(result).toBeGreaterThan(0);
  });

  it('returns a negative number when lhs is less than rhs and seconds are not provided', () => {
    const lhs = '12:29';
    const rhs = '12:30';
    const result = compareTime(lhs, rhs);
    expect(result).toBeLessThan(0);
  });
});
