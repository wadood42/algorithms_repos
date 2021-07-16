function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let curElement = array[i];

    for (let j = i - 1; j >= 0 && curElement < array[j]; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = curElement;
  }

  return array;
}
