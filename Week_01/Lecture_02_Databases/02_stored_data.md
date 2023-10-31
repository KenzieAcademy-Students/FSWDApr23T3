# Mongoose Schema
```js
const Students = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  favoriteSubject: {
    type: String,
    required: true,
  },
  numPets: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
})
```

## MongoDB Document
```json
{
  "id": "6aef239db73238cef",
  "name": "Cody Thaller",
  "age": 32, 
  "favoriteSubject": "programming",
  "numPets": 1,
  "city": "Boise"
}
```

## SQL Records

### Students
id | name | age | favoriteSubject | numPets | city 
--- | --- | --- | --- | --- | ---
6aef239db73238cef | Cody Thaller | 32 | 4 | 1 | 1

### Subjects
id | name
--- | ---
4 | programming

### Cities
id | name 
--- | ---
1 | Boise