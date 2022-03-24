// reverse a string using recursion

function revString(str) {

    if (str.length <= 1) {
        return str
    } else {
        return str[str.length - 1] + revString(str.slice(0, str.length - 1))
    }
}

console.log(revString('javascript', 10))

function reverseString(str, len) {

    if (len <= 1) {
        return str[0]
    } else {
        return str[len - 1] + reverseString(str, len - 1)
    }
}

console.log(reverseString('javascript', 10))