//function to generate a fibonacci series using recursion
let n0 = 0, n1 = 1, n2 = 0;

function findFiboannaci(count) {
    if (count > 0) {
        n2 = n0 + n1;
        n0 = n1;
        n1 = n2;
        console.log(n2, count);
        findFiboannaci(count - 1);
    }
}

findFiboannaci(10)