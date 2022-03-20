//Find the mid of the array w/o using the length method

let arr = [2, 3, 54, 66, 54, 33, 23, 21]
let i, j;
for (i = 0, j = 0; ; i++, j = j + 2) {
    if (arr[j] == undefined) {
        //console.log(arr[j], j, i)
        break
    }
}
console.log("Mid of the array:", arr[i])