# DB Module of powered by json files

### npm install drahovdb

## Functions

- **write(dataname,value,filename)**


- **get(dataname,filename)**


- **has(dataname,filename)**


- **delete(dataname,filename)**


- **backup(filename,filename2)**


- **plus(dataname,value,filename)**


- **minus(dataname,value,filename)**


- **deleteall(filename)**


## Descriptions
- **write:** Writes any value to dataname.


- **get:** Gets value by dataname from filename.


- **has:** Returnes true if the dataname has.


- **delete:** Deletes any data from file.


- **backup:** Copies the file to any file.


- **plus:** If the value is number and the data is value you can increase the data.


- **minus:** If the value is number and the data is value you can reduce the data.


- **deleteall:** Deletes all datas from file.


## Examples

```js
const db = require('drahovdb')

db.write('nick','drahov','nickdata') //returns true when the process is complete
db.get('nick','nickdata') //returns drahov 
db.has('name','nickdata') //returns false because nickdata doesnt have data of named name
db.delete('nick','nickdata') //deletes nick data from nickdata.json file
db.backup('nickdata','nickdata_copy') //copies nickdata file to nickdata_copy
db.plus('int','1','data') //1 increases int data in data.json
db.minus('int','1','data') //1 reduces int data in data.json
db.deleteall('data') //deletes all datas in data file
```


## Notice


**Please write filenames without .json**
