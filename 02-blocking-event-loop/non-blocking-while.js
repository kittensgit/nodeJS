let isRunning = true;

setTimeout(() => isRunning = false, 100)
process.nextTick(() => console.log('next tick'))

function setImmediatePromise() {
    return new Promise((resolve, reject) => {
        setImmediate(() => resolve())
    })
}
async function whileLoop() {
    while (isRunning) {
        console.log('While loop is running...')
        await setImmediatePromise()
    }
}

whileLoop().then(() => console.log('while ended'))