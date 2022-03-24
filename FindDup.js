//remove the duplicate elementes from array

function findDup(a) {

    let dupFound = 0, i, j;

    for (i = 0; i < a.length; i++) {
        for (j = i + 1; j < a.length; j++) {
            if (a[i] == a[j]) {
                dupFound++;
            }
        }
        if (dupFound >= 1) {
            a.splice(i, 1);
            i--;
            dupFound = 0;
        } else {
            dupFound = 0;

        }

    }
    console.log("array with unique els", a)

}

let a = [1, 1, 1, 45, 15, 26, 111, 15];
findDup(a)