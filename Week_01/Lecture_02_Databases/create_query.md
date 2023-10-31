## Create query with MongoDB and Mongoose
```js
await Student.create({
  id: "87ad3fcb82043d3",
  name: "Marcus",
  age: 27,
  favoriteSubject: "music",
  numPets: 0,
  city: "Newark"
})
```

## Create query with SQL (known as an INSERT query)
```sql
INSERT INTO students 
  (id, name, age, favoriteSubject, numPets, city)
VALUES 
  ("87ad3fcb82043d3", "Marcus", 27, "music", 0, "Newark");
```