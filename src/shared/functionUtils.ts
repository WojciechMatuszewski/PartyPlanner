export const callAll = (...fns: any[]) => (arg: any) =>
  fns.forEach(fn => fn && fn(arg));
