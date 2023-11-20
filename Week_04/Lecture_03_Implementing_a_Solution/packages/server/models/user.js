import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  passwordHash: {
    type: String,
  },
  orders: [
    {
      type: ObjectId,
      ref: "Order",
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
