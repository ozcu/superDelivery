const fs = require('fs')

class BaseDatabase{
    constructor(model){
        this.model = model
        this.filename = model.constructor.name
        
    }
    save(objects) {
        fs.writeFileSync(`./${this.filename}.json`,JSON.stringify(objects,null,2))
    
    }
    
    load() {
        const file = fs.readFileSync(`./${this.filename}.json`,'utf8')
        return JSON.parse(file) 
    }
    
     insert(object) {
        const objects = this.load()
        save(objects.concat(object))
    }
    
    remove(index){
        const objects = this.load()
        objects.splice(index,1) 
        save(objects)
    }
     findByName(name){
        const objects = this.load()
    
        return objects.find(o=>o.name == name) // o-> object kısaltması
    
    }
}

module.exports = BaseDatabase