const fs = require('fs')

function timestamp () {
    return performance.now().toFixed(2)
}

console.log('program start')

setTimeout(() => console.log('timeout 1', timestamp()), 0)
setTimeout(() => console.log('timeout 2', timestamp()), 10)

fs.writeFile('./test.txt', 'hello world', () => console.log('file written', timestamp()))

Promise.resolve().then(() => console.log('promise 1', timestamp()))

process.nextTick(() => console.log('next tick 1', timestamp()))

setImmediate(()=>console.log('immediate 1', timestamp()))

console.log('program end')