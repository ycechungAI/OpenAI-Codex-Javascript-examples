/* write an merge sort algorithm */
var mergeSort = function(array) {
  if (array.length > 1) {
    var middle = Math.floor(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);
    mergeSort(left);
    mergeSort(right);
    merge(array, left, right);
  }
};
var merge = function(array, left, right) {
  var leftIndex = 0;
  var rightIndex = 0;
  var arrayIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[arrayIndex] = left[leftIndex];
      leftIndex++;
    } else {
      array[arrayIndex] = right[rightIndex];
      rightIndex++;
    }
    arrayIndex++;
  }
  while (leftIndex < left.length) {
    array[arrayIndex] = left[leftIndex];
    leftIndex++;
    arrayIndex++;
  }
  while (rightIndex < right.length) {
    array[arrayIndex] = right[rightIndex];
    rightIndex++;
    arrayIndex++;
  }
};
var array = [5, 3, 7, 1, 9, 2, 4, 8, 6];
mergeSort(array);
console.log(array);
