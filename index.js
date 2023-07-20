const fecthData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())        
        .then(data => console.log(data))
    return data
}

console.log(fecthData())