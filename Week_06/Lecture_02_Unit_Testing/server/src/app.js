import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(
    "mongodb+srv://someperson:somepassword@cluster0.y6yq3tk.mongodb.net/unit-tests?retryWrites=true"
  )
  .then(() => console.log("DB Connection established"))
  .catch((err) => console.log("DB Connection failed:", err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(3001, () => console.log("Server listening."));
