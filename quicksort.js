/* write a quick sort algorithm based on \begin{algorithm} \caption{Quicksort} \begin{algorithmic}\PROCEDURE{Quicksort}{$A, p, r$}   \IF{$p < r$}        \STATE $q = $ \CALL{Partition{$A, p, r$}        \STATE \CALL{Quicksort}{$A, p, q - 1$}        \STATE \CALL{Quicksort}{$A, q + 1, r$}    \ENDIF \ENDPROCEDURE\PROCEDURE{Partition}{$A, p, r$}    \STATE $x = A[r]$    \STATE $i = p - 1$     \FOR{$j = p$ \TO $r - 1$}      \IF{$A[j] < x$}            \STATE $i = i + 1$            \STATE exchange            $A[i]$ with $A[j]$        \ENDIF        \STATE exchange $A[i]$ with $A[r]$    \ENDFOR \ENDPROCEDURE \end{algorithmic} \end{algorithm}</textarea> */

///!!Code IT GENERATED

var quickSort = function(array, start, end) {
  if (start < end) {
    var pivot = partition(array, start, end);
    quickSort(array, start, pivot - 1);
    quickSort(array, pivot + 1, end);
  }
};
var partition = function(array, start, end) {
  var pivot = array[end];
  var i = start - 1;
  for (var j = start; j < end; j++) {
    if (array[j] < pivot) {
      i++;
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  var temp = array[i + 1];
  array[i + 1] = array[end];
  array[end] = temp;
  return i + 1;
};
var array = [5, 3, 7, 1, 9, 2, 4, 8, 6];
quickSort(array, 0, array.length - 1);
console.log(array);
