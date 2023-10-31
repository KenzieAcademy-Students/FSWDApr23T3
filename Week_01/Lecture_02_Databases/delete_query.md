## Delete query with MongoDB and Mongoose
```js
await Student.findOneAndDelete({ id: "87ad3fcb82043d3" });
```

## Delete query with SQL (known as a DELETE query)
```sql
DELETE FROM students 
WHERE id = "87ad3fcb82043d3";
```