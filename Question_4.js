let base = parseInt(prompt("Enter base fare:"));
let distance = parseFloat(prompt("Enter distance:"));
let minutesLate = parseInt(prompt("Enter minutes late:"));
let seed = parseInt(prompt("Enter seed:"));

let fare = base + 7 * distance;

if (minutesLate > 15) {
    fare += 20;
}

if (distance > 10) {
    fare += 0.10 * fare;
}

if (seed % 2 !== 0) {
    fare -= seed;
} else {
    fare += seed;
}

fare = Math.ceil(fare / 5) * 5;
alert(fare);