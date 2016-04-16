import Ember from 'ember';

export function every(array, predicate) {
  let index = -1;
  let length = array.length;

  while (++index < length) {
    if (!predicate(array[index])) {
      return false;
    }
  }
  return true;
}

export function some(array, predicate) {
  let index = -1;
  let length = array.length;

  while (++index < length) {
    if (predicate(array[index])) {
      return true;
    }
  }
  return false;
}

export function flatMap(array, callback) {
  return array.reduce((accum, item) => {
    return accum.concat(callback(item));
  }, []);
}

export function firstResult(array, fn) {
  let index = -1;
  let length = array.length;

  while (++index < length) {
    let result = fn(array[index], index);

    if (result) {
      return result;
    }
  }
}

export function messageOption(args) {
  let lastArg = args[args.length - 1];
  return lastArg && lastArg.message;
}

export function unique(array) {
  let ret = [];

  array.forEach((k) => {
    if (ret.indexOf(k) < 0) {
      ret.push(k);
    }
  });

  return ret;
}

export function flatten(array) {
  let result = [];
  let index = -1;

  while (++index < array.length) {
    var value = array[index];
    if (Array.isArray(value)) {
      result.push(...value);
    } else {
      result.push(value);
    }
  }
  return result;
}

export function last(array) {
  return array[array.length - 1];
}

export function some(array, predicate) {
  return firstResult(array, predicate) || false;
}