## Read query with MongoDB and Mongoose
```js
const marcus = await Student.findOne({ id: "87ad3fcb82043d3" });
```

## Read query with SQL (known as an SELECT query)
```sql
SELECT 
  * 
FROM 
  students
WHERE
  id = "87ad3fcb82043d3";
```