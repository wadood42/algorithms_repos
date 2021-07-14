function partition(array, pivot) {
  let left = array.filter((ele) => ele < pivot);
  let right = array.filter((ele) => ele >= pivot);
  return [left, right];
}

function quickSort(array) {
  if (array.length <= 1) return array;

  let pivot = array.shift();
  let left = array.filter((ele) => ele < pivot);
  let right = array.filter((ele) => ele >= pivot);

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  //   return leftSorted.concat([pivot]).concat(rightSorted);
  return [...leftSorted, pivot, ...rightSorted];
}

console.log(quickSort([5, 7, 3, 2, 9, 1]));
