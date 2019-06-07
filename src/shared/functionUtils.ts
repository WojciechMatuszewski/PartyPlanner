import { isEqual } from 'lodash';

export const callAll = (...fns: any[]) => (arg: any) =>
  fns.forEach(fn => fn && fn(arg));

export function areObjectsEqual<ObjectsShape extends Record<any, any>>(
  source: ObjectsShape,
  target: ObjectsShape
) {
  // different amount of keys objects are sure different
  if (Object.keys(source).length !== Object.keys(target).length) return false;

  // check on key by key basis,
  // there are not much keys to check so we can afford doing it this way :)
  const areEqualOnKeyToKeyBasis = Object.entries(source).reduce(
    (acc: boolean, [key, filterObj]) => {
      const areKeysTheSame = isEqual(
        target[key].variablesValue,
        filterObj.variablesValue
      );
      if (!areKeysTheSame) {
        acc = false;
        return acc;
      }
      return acc;
    },
    true
  );

  return areEqualOnKeyToKeyBasis;
}

export function isObjectMissingKeys<ObjectShape extends object>(
  objectToCheck: ObjectShape,
  objectToCheckAgainst: ObjectShape
) {
  let hasMissingKeys = false;
  Object.keys(objectToCheckAgainst).forEach(key => {
    if (!(`${key}` in objectToCheck)) {
      hasMissingKeys = true;
    }
  });
  return hasMissingKeys;
}
