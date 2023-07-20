const obj = {
    id: 1
}

const json = JSON.stringify(obj)
console.log(json)

const objFromJson = JSON.parse(json)
console.log(objFromJson)