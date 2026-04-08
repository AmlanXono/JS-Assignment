let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));
let count = 0;

function prime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let x = L; x < R; x++) {
   
    if (x % K === 0 && !x.toString().includes('0')) {
    
        let sumDigits = x.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
        
    
        if (prime(sumDigits)) {
            count++;
        }
    }
}
alert(count);