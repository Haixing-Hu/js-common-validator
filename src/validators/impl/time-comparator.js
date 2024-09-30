////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Parse a time string to hours, minutes and seconds.
 *
 * @param {string} timeStr
 *     The time string to parse.
 * @return {{hours: number, seconds: (number|number), minutes: number}}
 *     The parsed time object.
 * @private
 * @author Haixing Hu
 */
function parseTime(timeStr) {
  // parse the time string into hours, minutes and seconds
  const parts = timeStr.split(':');
  // get the hours, minutes and seconds parts, the seconds part is default to 0 if not provided
  const hours = parseInt(parts[0], 10);  // the hours part
  const minutes = parseInt(parts[1], 10); // the minutes part
  const seconds = parts.length === 3 ? parseInt(parts[2], 10) : 0; // parse the seconds part if it provided, otherwise default to 0
  return { hours, minutes, seconds };
}

/**
 * Compare two time values.
 *
 * @param {string|Date} lhs
 *     The left hand side date value.
 * @param {string|Date} rhs
 *     The right hand side date value.
 * @return {number}
 *     A negative number if `lhs` is less than `rhs`, a positive number if `lhs` is greater
 *     than `rhs`, or zero if `lhs` is equal to `rhs`.
 * @private
 * @author Haixing Hu
 */
function compareTime(lhs, rhs) {
  const t1 = parseTime(lhs);
  const t2 = parseTime(rhs);
  // compare the hours
  if (t1.hours !== t2.hours) {
    return t1.hours > t2.hours ? 1 : -1;
  }
  // compare the minutes
  if (t1.minutes !== t2.minutes) {
    return t1.minutes > t2.minutes ? 1 : -1;
  }
  // compare the seconds
  if (t1.seconds !== t2.seconds) {
    return t1.seconds > t2.seconds ? 1 : -1;
  }
  return 0;
}

export default compareTime;
