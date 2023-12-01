import { beforeEach } from "mocha";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const MONGODB_URI =
  "mongodb+srv://someperson:somepassword@cluster0.y6yq3tk.mongodb.net/unit-tests-test-db?retryWrites=true";
mongoose.connect(MONGODB_URI);

mongoose.connection
  .once("open", () => console.log("Connected!"))
  .on("error", (error) => console.warn("Error:", error));

beforeEach((done) => {
  mongoose.connection.collections.athletes.drop(() => done());
});
