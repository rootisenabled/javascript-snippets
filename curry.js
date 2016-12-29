const curry = fn => {
  let n = fn.length;

  return (...originalArgs) => {
    return (...fnArgs) => {
      const totalArgs = [...originalArgs, ...fnArgs];
      return originalArgs.length < n ? fn(...totalArgs) : fn(...originalArgs);
    }
  }
}

// Usage:

const filter = curry((predicate, arr) => arr.filter(predicate));
const isEven = x => x % 2 === 0;
const getAllOdds = filter(isEven);

const result = getAllOdds(Array.from(Array(10), (x, i) => i)); // [0, 2, 4, 6, 8]
