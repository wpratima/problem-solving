//find the running sum of the elements in the array


function getRunningSum(arr, resultArr) {

    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = 0; j <= i; j++) {

            sum += arr[j]
        }
        resultArr[i] = sum;
    }

    return resultArr;
}

let a = [2, 33, 45, 12, 10]
let b = []

console.log("Running sum for given array: ", getRunningSum(a, b))