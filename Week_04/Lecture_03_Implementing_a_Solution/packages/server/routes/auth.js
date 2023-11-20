import express from "express";
import bcrypt from "bcryptjs";
import { User } from "../models";
import keys from "../config/keys";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!password || !email || !confirmPassword) {
    return res.status(422).json({ error: "please add all the fields" });
  }

  if (password !== confirmPassword) {
    return res.status(422).json({ error: "passwords do not match" });
  }

  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "user already exists with that email" });
      }
      bcrypt.hash(password, 12).then((hashedpassword) => {
        const user = new User({
          email,
          passwordHash: hashedpassword,
        });

        user
          .save()
          .then((user) => {
            res.json({ message: "saved successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "missing email or password" });
  }

  const user = await User.findOne({ email: email });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: "invalid email or password",
    });
  }

  const userForToken = {
    email: user.email,
    id: user._id,
  };

  const token = jwt.sign(userForToken, keys.jwt.secret);
  res.status(200).send({ token, user: { email, id: user.id } });
});

module.exports = router;
