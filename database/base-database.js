const fs = require('fs')
const {filehandle} = require('fs/promises')


class BaseDatabase{
    constructor(model){
        this.model = model
        this.filename = model.name.toLowerCase()
        
    }
    save(objects) {
       return new Promise((resolve,reject) => {

            fs.writeFile(`${__dirname}/${this.filename}.json`,JSON.stringify(objects,null,2),(err) => {
                if (err) return reject(err)
                resolve()
            }) 
        })
        
        
   
    }


    
    load() {
        return new Promise((resolve, reject) => {
         fs.readFile(`${__dirname}/${this.filename}.json`, 'utf8', (err, file) => {
            
            if (err) return reject(err)

            const objects = JSON.parse(file)
            
            resolve(objects)
         // resolve([objects].map(this.model.create))
          
          })
        })
      }
        
    
   
   async  insert(object) {
        const objects = await this.load()
        const identicalProduct = objects.find(o => o.name == object.name) //check if identical product name is available no lowercase/uppercase case control yet
        if(identicalProduct == undefined)
        {
            return this.save(objects.concat(object))
        }
        else{
            throw new Error(`"${this.model.name}" name: "${object.name}" is already available in the database!`)
        }
        
    }
    


    async findByName(name){
        const objects = await this.load()
        return objects.find(o=>o.name == name) // o-> object kısaltması
    }
    
    async remove(index){
        const objects = await this.load()
        objects.splice(index,1) 
       return this.save(objects)
    }
    async find(id){
        const objects = await this.load() 
       return objects.find(o=>o.id == id)
    }
    async findBy(property,value){
        const objects = await this.load()
        return objects.find(o =>o[property] == value)

    }

    
    async update(object){
        const objects = await this.load()
        const index = await objects.findIndex(o => o.id == object.id )
        if (index == -1) throw new Error(`Cannot find ${this.model.name} instance with ID ${object.id}`)
        objects.splice(index,1,object)
        return this.save(objects)

    }

}

module.exports = BaseDatabase