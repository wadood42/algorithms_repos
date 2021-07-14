function merge(arr1, arr2) {
  let merged = [];

  while (arr1.length || arr2.length) {
    let eleOne = arr1.length ? arr1[0] : Infinity;
    let eleTwo = arr2.length ? arr2[0] : Infinity;

    let next;
    if (eleOne < eleTwo) {
      next = arr1.shift();
    } else {
      next = arr2.shift();
    }
    merged.push(next);
  }

  return merged;
}

let merged = merge([3, 4, 5], [7, 8, 9, 10]);

function mergeSortRecursive(arr) {
  if (arr.length <= 1) return arr;

  let midIdx = Math.floor(arr.length / 2);

  let leftHalf = arr.slice(0, midIdx);
  let rightHalf = arr.slice(midIdx);

  let sortedLeft = mergeSortRecursive(leftHalf);
  let sortedRight = mergeSortRecursive(rightHalf);

  return merge(sortedLeft, sortedRight);
}

console.log(mergeSortRecursive([5, 2, 1, 8, 6]));
