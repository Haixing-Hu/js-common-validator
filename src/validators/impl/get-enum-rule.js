////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2025.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { isEnumClass } from '@qubit-ltd/common-decorator';

/**
 * Gets the validation rule object for the specified enumeration type.
 *
 * @param {Function} type
 *     The enumeration type, which must be a class decorated by the `@Enum`
 *     decorator.
 * @return {object}
 *     The validation rule object for the specified enumeration type.
 */
function getEnumRule(type) {
  return {
    isValid(value) {
      if (!type) {
        throw new Error('The type of the field must be specified in the context.');
      }
      if (!isEnumClass(type)) {
        throw new TypeError('The type of the field must be an enumeration type.');
      }
      if (value instanceof type) {
        return true;
      } else if ((typeof type.hasValue === 'function') && type.hasValue(value)) {
        // if the value is an enumerator of the enumeration type, or
        // is a string representing the value of an enumerator of the enumeration type,
        // it is valid.
        return true;
      } else {
        return false;
      }
    },
  };
}

export default getEnumRule;
