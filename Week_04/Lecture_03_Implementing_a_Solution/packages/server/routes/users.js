import express from "express";
import bcrypt from "bcryptjs";
import { User } from "../models";

const router = express.Router();

router
  .route("/:userId")
  .get(async (request, response) => {
    const { userId } = request.params;
    const populateQuery = [
      {
        path: "orders",
        populate: { path: "items" },
      },
    ];

    const user = await User.findById(userId).populate(populateQuery).exec();
    if (user) {
      response.json(user.toJSON());
    } else {
      response.status(404).end();
    }
  })
  .put(async (request, response) => {
    const { password } = request.body;
    const { id } = request.params;

    const hashedpassword = await bcrypt.hash(password, 12);

    try {
      const userUpdate = await User.findByIdAndUpdate(
        {
          _id: id,
        },
        {
          passwordHash: hashedpassword,
        },
        {
          new: true,
        }
      );

      response.json(userUpdate.toJSON());
    } catch (error) {
      response.status(404).end();
    }
  });

module.exports = router;
