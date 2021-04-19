const fs = require('fs')

class DB {

   constructor(){

   }
   write(veri,değer,fileName){
       const dosya = JSON.parse(fs.readFileSync(`${fileName}.json`, 'utf8'))
       dosya[veri] = değer
       return fs.writeFileSync(`${fileName}.json` , JSON.stringify(dosya, null, 1))
       if(!veri) throw new TypeError("Expected data\n" + __dirname)
       if(!fileName) throw new TypeError("Please type file name\n" + __dirname)
   }
   get(veri,fileName){
       const dosya = JSON.parse(fs.readFileSync(`${fileName}.json`,'utf8'))
       if(!dosya[veri]) throw new TypeError('The data you typed could not be found\n' + __dirname)
       if(!veri) throw new TypeError("Expected data\n" + __dirname)
       return dosya[veri]
   }
   has(veri,fileName){
       const dosya = JSON.parse(fs.readFileSync(`${fileName}.json`, 'utf8'))
       if(!veri) throw new TypeError("Expected data\n" + __dirname)    
       return dosya[veri] ? true : false
   }
   delete(veri,fileName){
    const dosya = JSON.parse(fs.readFileSync(`${fileName}.json`, 'utf8'))
    if(!dosya[veri]) throw new TypeError('The data you typed could not be found\n' + __dirname)
    if(!veri) throw new TypeError("Expected data\n" + __dirname)
    delete dosya[veri]
    return fs.writeFileSync('database.json', JSON.stringify(dosya,null,2))  
   } 
   backup(dosyaAdı,fileName){
    const dosya = JSON.parse(fs.readFileSync(`${fileName}.json`, 'utf8'))
    return fs.writeFileSync(`${dosyaAdı}.json`, JSON.stringify(dosya,null,2))
    if(!veri) throw new TypeError("Expected data\n"  + __dirname)
    if(!değer) throw new TypeError("Expected value\n" + __dirname)
   }
   plus(veri,değer,fileName){
       if(!veri) throw new TypeError("Expected data\n" + __dirname)
       if(typeof değer !== 'number') throw new TypeError("Please type a number\n" + __dirname)
       if(!this.get(veri)) throw new TypeError("The data you typed could not be found\n" + __dirname)
       if(typeof this.find(veri) !== 'number') throw new TypeError("Please type number value\n" + __dirname)
       const dosya = JSON.parse(fs.readFileSync(`${fileName}.json`, 'utf8'))
       dosya[veri] += değer
       return fs.writeFileSync(`${fileName}.json`, JSON.stringify(dosya,null,2))
   }
   minus(veri,değer,fileName){
    if(!veri) throw new TypeError("Expected data\n" + __dirname)
    if(typeof değer !== 'number') throw new TypeError("Please type a number\n" + __dirname)
    if(!this.control(veri)) throw new TypeError("The data you typed could not be found\n" + __dirname)
    if(typeof this.find(veri) !== 'number') throw new TypeError("Please type number value\n" + __dirname)
    const dosya = JSON.parse(fs.readFileSync(`${fileName}.json`, 'utf8'))
    dosya[veri] -= değer
    return fs.writeFileSync(`${fileName}.json`, JSON.stringify(dosya,null,2))
   }
   deleteall(fileName){
    const dosya = JSON.parse(fs.readFileSync(`${fileName}.json`, 'utf8'))
    return fs.writeFileSync(`${fileName}.json`, JSON.stringify(dosya,null,2))
   }
}



module.exports = new DB()