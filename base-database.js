const fs = require('fs')

class BaseDatabase{
    constructor(model){
        this.model = model
        this.filename = model.name
        
    }
    save(objects) {
        fs.writeFileSync(`./${this.filename}.json`,JSON.stringify(objects,null,2))
    //this.filename functiona dönüyor neden? 
    }
    
    load() {
        const file = fs.readFileSync(`./${this.filename}.json`,'utf8')
        const objects = JSON.parse(file) 
        return objects.map(this.model.create)
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