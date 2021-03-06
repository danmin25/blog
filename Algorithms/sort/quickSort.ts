function quicksort(source: number[], low: number, high: number) {
  const array = source;
  if (low < high) {
    let i = low;
    let j = high;
    let x = array[low];
    while (i < j) {
      while (i < j && array[j] > x) {
        //从右往左找到第一个小于x的数
        --j;
      }

      array[i] = array[j];

      while (i < j && array[i] < x) {
        //从左往右找到第一个大于x的数
        ++i;
      }

      array[j] = array[i]; //降序排列
    }
    array[i] = x;
    quicksort(array, low, i - 1); //递归调用
    quicksort(array, i + 1, high);
  }
  return array;
}

console.log(quicksort([5, 3, 7, 8, 99], 0, 4));
