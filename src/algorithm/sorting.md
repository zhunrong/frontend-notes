# 排序算法

## 冒泡排序

时间复杂度：O(n^2)

```js
function bubbleSort(originalArray) {
  const array = [...originalArray];
  // n 个元素，只要比较 n-1 轮，每一轮冒泡一个最大值
  for (let i = 1; i < array.length; i++) {
    let swapped = false;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    // 没有交换说明顺序已经排好
    if (!swapped) {
      return array;
    }
  }
  return array;
}
```

## 选择排序

时间复杂度：O(n^2)

```js
function selectionSort(originalArray) {
  const array = [...originalArray];
  // 左边已排序，右边未排序
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    // 从右边选出最小元素放入左边末尾
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[minIndex], array[i]] = [array[i], array[minIndex]];
    }
  }
  return array;
}
```

## 插入排序

时间复杂度：O(n^2)

```js
function insertionSort(originalArray) {
  const array = [...originalArray];
  for (let i = 0; i < array.length; i++) {
    let current = i;
    // 从后往前扫描已排序队列
    while (current > 0 && array[current] < array[current - 1]) {
      [array[current], array[current - 1]] = [
        array[current - 1],
        array[current],
      ];
      current--;
    }
  }
  return array;
}
```

## 堆排序

## 归并排序

## 快速排序

## 希尔排序

## 计数排序

## 基数排序