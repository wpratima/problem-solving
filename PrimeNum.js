//function to find a prime number
//Prime number is a natural number greater than 1 and which is divisible by iteself and 1.


function isPrime(num) {
    isPrime = true
    if (num === 1) {
        console.log("1 is not a prime/composite number")
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false
            break
        }
    }

    if (isPrime) {
        console.log(`${num} is a prime number.`)
    } else {
        console.log(`${num} is not a prime number.`)
    }
}

isPrime(19)