//Moving negative elements to the end of the array

var numbers = [12, -10, -15, 11, 14, 13, 16];
function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}

console.log(sort(numbers))





//
// let arr = [2, -1, 45, -66, 7]

// let newarr = arr.filter(item => item < 0)
// let positivearr = arr.filter(item => item > 0)
// let resultarr = positivearr.concat(newarr)
// console.log("output", resultarr);