/*

***DEPRECATED CONTENT MOVED INTO base-database.js***

const fs = require('fs')



const save = (filename, objects) => {
    fs.writeFileSync(`./${filename}.json`,JSON.stringify(objects,null,2))

}

const load = (filename) => {
    const file = fs.readFileSync(`./${filename}.json`,'utf8')
    return JSON.parse(file) 
}

const insert = (filename,object) => {
    const objects = load(filename)
    save(filename,objects.concat(object))
}

const remove = (filename,object) => {
    const objects = load(filename)
    objects.splice(1,1) //index not defined problemi var ilk argümana 
    save(filename,objects)
}
const findByName = (filename,name)=>{
    const objects = load(filename)

    return objects.find(o=>o.name == name) // o-> object kısaltması

}


module.exports = {save, load, insert, remove, findByName}*/