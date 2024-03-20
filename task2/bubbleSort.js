function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 1; i < n; i++) {
            // If the previous element is larger than the current one, swap them in places
            if (arr[i - 1] > arr[i]) {
                let temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
                swapped = true;
            }
        }
        // Decrease n by 1, since the last element is already in its place
        n--;
    } while (swapped);
    return arr;
}

// Example of use
let arr = [52, 37, 63, 14, 17, 8, 6, 25, 41, 22, 30, 19, 45, 48, 12, 28, 33, 26, 10, 55, 11, 31, 7, 9, 15, 36, 20, 44, 16, 24, 3, 40, 34, 50, 32];
console.log("Unsorted array:", arr);

let sortedArr = bubbleSort(arr);
console.log("Sorted array:", sortedArr);

