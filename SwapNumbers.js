//swap numbers using third variable

function swap(a, b) {
    a = a + b
    b = a - b
    a = a - b

    console.log("output:", "a:", a, "b:", b)
}

swap(-22, 50)


//second method
function swapNumbers(a, b) {
    a = a * b
    b = a / b
    a = a / b
    console.log("output:", "a:", a, "b:", b)
}

swapNumbers(111, 56)

