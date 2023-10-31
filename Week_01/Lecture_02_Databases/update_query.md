## Update query with MongoDB and Mongoose
```js
await Student.findOneAndUpdate(
  { id: "87ad3fcb82043d3" }, 
  { age: 28 }
)
```

## Update query with SQL (known as an UPDATE query)
```sql
UPDATE students
SET age = 28
WHERE id = "87ad3fcb82043d3";
```