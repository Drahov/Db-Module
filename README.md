# DB Module of powered by json files 

## Installation
```
npm install drahovdb
```

## Functions

- **add(dataname,value)**


- **get(dataname)**


- **has(dataname)**


- **remove(dataname)**


- **copy(filename)**


- **increase(dataname,value)**


- **reduce(dataname,value)**


- **clear()**


## Descriptions
- **add:** Writes any value to dataname.


- **get:** Gets value by dataname from filename.


- **has:** Returnes true if the dataname has.


- **remove:** Deletes any data from file.


- **copy:** Copies the file to any file.


- **increase:** If the value is number and the data is value you can increase the data.


- **reduce:** If the value is number and the data is value you can reduce the data.


- **clear:** Deletes all datas from file.


# Examples<br/>
### Constructor
```js
const { Database } = require('drahovdb')

const db = new Database('file') //write file name without .json!
```
### Add
```js
const { Database } = require('drahovdb')

const db = new Database('database')

db.add('nick','drahov') //adds database.json "nick":"drahov" data
```
### Get
```js
const { Database } = require('drahovdb')

const db = new Database('database')

db.get('nick') //returns drahov
```

### Has
```js
const { Database } = require('drahovdb')

const db = new Database('database')

db.has('nick') //returns true
```

### Remove
```js
const { Database } = require('drahovdb')

const db = new Database('database')

db.remove('nick') //deletes nick data
```

### Copy
```js
const { Database } = require('drahovdb')

const db = new Database('database')

db.copy('database_copy') //copies database.json to database_copy.json
```

### Increase
```js
const { Database } = require('drahovdb')

const db = new Database('database')

db.add('int',10)

db.increase('int',1) //increases int value 1
```

### Reduce
```js
const { Database } = require('drahovdb')

const db = new Database('database')

db.reduce('int',1) //reduces int value 1
```

### Copy
```js
const { Database } = require('drahovdb')

const db = new Database('database')

db.clear() //deletes all datas from database.json
```
# Notice


**Please write filenames without .json**

# Links

[github](https://github.com/Drahov/Db-Module)
