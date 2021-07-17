function binarySearch(arr, target) {
  if (arr.length === 0) return false;

  let midIndex = Math.floor(arr.length / 2);
  let leftHalf = arr.slice(0, midIndex);
  let rightHalf = arr.slice(midIndex + 1);

  if (target < arr[midIndex]) {
    return binarySearch(leftHalf, target);
  } else if (target > arr[midIndex]) {
    return binarySearch(rightHalf, target);
  } else {
    return true;
  }
}
