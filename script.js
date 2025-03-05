//iterative fib;

function fibs(n) {
    const result = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const a = result[i - 1];
      const b = result[i - 2];
  
      result.push(a + b);
    }
  
    return result;
  }

console.log(fibs(8));


//recursive fib;

function fibsRecursive(n) {
  if (n === 1) return [0];
  if (n === 2) return [0,1];

  return [...fibsRecursive(n-1), fibsRecursive(n-1)[n - 2] + fibsRecursive(n-1)[n - 3]];

  }

console.log(fibsRecursive(8));



function sumRange(n) {
    if (n == 1) {return 1};
    return n + sumRange(n-1);
}

//Merge Sort

function mergeSort(arr) {
  if (arr.length <= 1) {return arr};

  let half = Math.floor(arr.length / 2);
  let firstHalf = mergeSort(arr.slice(0, half));
  let secondHalf = mergeSort(arr.slice(half, arr.length));
  return merge(firstHalf, secondHalf)
  
}

function merge(first, second) {
  const merged = [];

  while (first.length > 0 && second.length > 0) {
    const lesserArray = first[0] < second[0] ? first : second;
    const mergeArrays = lesserArray.shift();
    merged.push(mergeArrays);
  }
  return merged.concat(first, second);


}

console.log(mergeSort([105, 79, 100, 2000, 110]))
