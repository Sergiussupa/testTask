function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // Compare each element of the left array with each element of the right array
    // and add the smaller of the two to the result.
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // Сдвигаем указатель в левом массиве
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // Сдвигаем указатель в правом массиве
        }
    }

    // Merge the remaining elements after passing through one of the arrays
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

// Example of use
let arr = [52, 37, 63, 14, 17, 8, 6, 25, 41, 22, 30, 19, 45, 48, 12, 28, 33, 26, 10, 55, 11, 31, 7, 9, 15, 36, 20, 44, 16, 24, 3, 40, 34, 50, 32];
console.log("Unsorted array:", arr);

let sortedArr = mergeSort(arr);
console.log("Sorted array:", sortedArr);

