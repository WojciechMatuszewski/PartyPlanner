import { CheckboxChangeEvent } from 'antd/lib/checkbox';

export const callAll = (...fns: any[]) => (arg: any) =>
  fns.forEach(fn => fn && fn(arg));

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

export const trapEvent = (fnToRun: (...args: any[]) => any) => {
  return function(e: React.SyntheticEvent<any> | CheckboxChangeEvent) {
    e.preventDefault();
    e.stopPropagation();
    fnToRun(e);
  };
};
