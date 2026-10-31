export function rangeSum(start, end) {
  let sum = 0;
  for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

export function iterationCount(a) {
  let count = 0;
  while (a > 0.1) {
    a = a / 2;
    count++;
  }
  return count;
}

export function symbolsReplace(message) {
  let result = '';
  let i = 0;
  do {
    if ((i + 1) % 3 === 0) {
      result += '_';
    } else {
      result += message[i];
    }
    i++;
  } while (i < message.length);
  return result;
}