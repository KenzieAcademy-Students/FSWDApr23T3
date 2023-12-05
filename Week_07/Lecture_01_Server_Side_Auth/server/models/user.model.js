import { Schema, model } from "mongoose";

// Create Schema
const userSchema = new Schema({
  // We need a way to identify a user. This should be a unique field
  // and it will be the info needed upon login
  username: {
    type: String,
    required: true,
    unique: true,
  },
  // NEVER STORE RAW PASSWORD STRING IN THE DATABASE
  passwordHash: {
    type: String,
    required: true,
  },
  /**
   * OPTIONAL BUT USEFUL
   */
  role: {
    type: Number,
    min: 1,
    max: 3,
    default: 3,
  },
});

// Create model
const User = model("User", userSchema);

// Export model as default
export default User;
