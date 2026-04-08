let N = parseInt(prompt("Enter N:"));
let seed = parseInt(prompt("Enter seed:"));
let current = N;

for (let i = 0; i < 3; i++) {
    if (current % 2 === 0) {
        current = Math.floor(current / 2) + seed;
    } else {
        current = current * 3 - seed;
    }
}

let isValid = false;
if (current >= 100 && current <= 999) {
    let midDigit = Math.floor((current / 10) % 10);
    if (midDigit === seed) {
        isValid = true;
    }
}

if (isValid) {
    alert("YES, " + current);
} else {
    alert("NO");
}