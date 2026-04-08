let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));
let found = -1;

function isPalindrome(num) {
    let str = num.toString();
    return str === str.split('').reverse().join('');
}

for (let X = 0; X <= 10000; X++) {
    let sum = N + X;
    if (sum % K === 0 && isPalindrome(sum)) {
        found = X;
        break;
    }
}
alert(found);