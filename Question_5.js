let N = parseInt(prompt("Enter N:"));
let seed = parseInt(prompt("Enter seed:"));

let m = 0;
let sum = 0;

while (sum < N) {
    m++;
    if (m % (seed + 2) !== 0) {
        sum += m;
    }
}

alert(m + " " + sum);