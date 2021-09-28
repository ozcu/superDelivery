const fs = require('fs')

class BaseDatabase{
    constructor(model){
        this.model = model
        this.filename = model.name.toLowerCase()
        
    }
    save(objects) {
        fs.writeFileSync(`./${this.filename}.json`,JSON.stringify(objects,null,2))
   
    }
    
    load() {
        const file = fs.readFileSync(`./${this.filename}.json`,'utf8')
        const objects = JSON.parse(file) 
        return objects.map(this.model.create)
    }
    
     insert(object) {
        const objects = this.load()
        this.save(objects.concat(object))
    }
    
    remove(index){
        const objects = this.load()
        objects.splice(index,1) 
        this.save(objects)
    }
     findByName(name){
        const objects = this.load()
    
        return objects.find(o=>o.name == name) // o-> object kısaltması
    }
    update(object){
        const objects = this.load()
        const index = objects.findIndex(o => o.id == object.id )
        objects.splice(index,1,object)
        this.save(objects)
    }

}

module.exports = BaseDatabase