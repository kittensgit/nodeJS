console.log('program start')

setTimeout(() => console.log('timeout 1'), 0)
setTimeout(() => console.log('timeout 2'), 10)

Promise.resolve().then(() => console.log('promise 1'))

console.log('program end')