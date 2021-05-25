const fs = require('fs');

class Database {

   constructor(filename){
       this.filename = filename;
    }
   add(dataname,value){
       try{JSON.parse(fs.readFileSync(`${this.filename}.json`, 'utf-8'))}catch(e){throw new TypeError(`Unavailable file ${this.filename}.json \n` + __dirname)}
       var file = JSON.parse(fs.readFileSync(`${this.filename}.json`, 'utf8'))
       if(!value){
        throw new TypeError("Expected data\n" + __dirname)
       }
       if(!this.filename){
        throw new TypeError("Please type file name\n" + __dirname)
       }
       file[dataname] = value
       return fs.writeFileSync(`${this.filename}.json` , JSON.stringify(file, null, 2))
   }
   get(dataname){
       try{JSON.parse(fs.readFileSync(`${this.filename}.json`, 'utf-8'))}catch(e){throw new TypeError(`Unavailable file ${this.filename}.json \n` + __dirname)}
       var file = JSON.parse(fs.readFileSync(`${this.filename}.json`,'utf8'))
       if(!file[dataname]){
        throw new TypeError('The data you typed could not be found\n' + __dirname)
       }
       if(!dataname){
        throw new TypeError("Expected data\n" + __dirname)
       }
       return file[dataname]
   }
   has(dataname){
       try{JSON.parse(fs.readFileSync(`${this.filename}.json`, 'utf-8'))}catch(e){throw new TypeError(`Unavailable file ${this.filename}.json \n` + __dirname)}
       var file = JSON.parse(fs.readFileSync(`${this.filename}.json`, 'utf8'))
       if(!dataname){
        throw new TypeError("Expected data\n" + __dirname) 
       }     
       return file[dataname] ? true : false
   }
   remove(dataname){
    try{JSON.parse(fs.readFileSync(`${this.filename}.json`, 'utf-8'))}catch(e){throw new TypeError(`Unavailable file ${this.filename}.json \n` + __dirname)}
    var file = JSON.parse(fs.readFileSync(`${this.filename}.json`, 'utf8'))
    if(!file[dataname]){
       throw new TypeError('The data you typed could not be found\n' + __dirname)
    }
    if(!dataname){
        throw new TypeError("Expected data\n" + __dirname)
    }
    delete file[dataname]
    return fs.writeFileSync(`${this.filename}.json`, JSON.stringify(file,null,2))  
   } 
   copy(fileName){
       try{var file = JSON.parse(fs.readFileSync(`${this.filename}.json`, 'utf-8'))}catch(e){throw new TypeError(`Unavailable file ${this.filename}.json \n` + __dirname)}
       if(!fileName){
        throw new TypeError("Please type a filename")
       }
       return fs.writeFileSync(`${fileName}.json`, JSON.stringify(file, null, 2))
   }
   increase(dataname,value){
       try{
           JSON.parse(fs.readFileSync(`${this.filename}.json`,'utf-8'))
       }catch(e){
           throw new TypeError(`Unavailable file ${this.filename}.json\n${__dirname}`)
       }
       var file = JSON.parse(fs.readFileSync(`${this.filename}.json`,'utf-8'))
       if(!dataname) throw new TypeError('Type a data key\n' + __dirname)
       if(typeof value !== 'number') throw new TypeError("Please type a number as value")
       if(!this.has(dataname)) throw new TypeError('The data typed couldnt be found')
       if(typeof this.get(dataname) !== 'number') throw new TypeError('Only can increase a number')
       file[dataname] += value
       return fs.writeFileSync(`${this.filename}.json`,JSON.stringify(file,null,2))
   }
   reduce(dataname,value){
    try{
        JSON.parse(fs.readFileSync(`${this.filename}.json`,'utf-8'))
    }catch(e){
        throw new TypeError(`Unavailable file ${this.filename}.json\n${__dirname}`)
    }
    var file = JSON.parse(fs.readFileSync(`${this.filename}.json`,'utf-8'))
    if(!dataname) throw new TypeError('Type a data key\n' + __dirname)
    if(typeof value !== 'number') throw new TypeError("Please type a number as value")
    if(!this.has(dataname)) throw new TypeError('The data typed couldnt be found')
    if(typeof this.get(dataname) !== 'number') throw new TypeError('Only can reduce a number')
    file[dataname] -= value
    return fs.writeFileSync(`${this.filename}.json`,JSON.stringify(file,null,2))
   }
   clear(){
    try{
        JSON.parse(fs.readFileSync(`${this.filename}.json`, 'utf8'))
    }catch(e){
        //throw new TypeError(`Unavailable file ${this.filename}.json\n${__dirname}`)
        console.log(e)
    }
    var file = JSON.parse(fs.readFileSync(`${this.filename}.json`, 'utf8'))
    return fs.writeFileSync(`${this.filename}.json`, JSON.stringify({},null,2))
   }
}



module.exports.Database = Database
