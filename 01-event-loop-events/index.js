const fs = require('fs');
const dns = require('dns');

function info(text) {
    console.log(text, performance.now().toFixed(2));
}

console.log('program start');

// Timeouts
setTimeout(() => info('timeout 1'), 0);
setTimeout(() => {
    process.nextTick(() => info('next tick 2'));
    info('timeout 2');
}, 100);

// Intervals
let intervalCount = 0;
const intervalId = setInterval(() => {
    info(`Interval ${(intervalCount += 1)}`);
    if (intervalCount === 2) clearInterval(intervalId);
}, 50);

// Close events
fs.writeFile('./test.txt', 'hello world', () => info('file written'));

// Promises
Promise.resolve().then(() => info('promise 1'));

// Next tick
process.nextTick(() => info('next tick 1'));

// setImmediate (check)
setImmediate(() => info('immediate 1'));

// I/O Events
dns.lookup('localhost', (err, address, family) => {
    info('DNS 1 localhost');
    Promise.resolve().then(() => info('promise 2'));
    process.nextTick(() => info('next tick 3'));
});

console.log('program end');
