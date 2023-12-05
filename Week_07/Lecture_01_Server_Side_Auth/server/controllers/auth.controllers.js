import {
  createUser,
  getUserByUsername,
  sanitizeUser,
} from "../services/auth.services";
import { comparePassword, hashPassword, signJwt } from "../utils/auth.utils";

export async function handleSignUp(req, res) {
  const { username, password } = req.body;

  let user = await getUserByUsername(username);
  if (user) {
    return res.status(422).json({ username: "Username taken." });
  }

  const passwordHash = hashPassword(password);

  user = await createUser(username, passwordHash);
  user = sanitizeUser(user);

  res.status(201).json(user);
}

export async function handleSignIn(req, res) {
  const { username, password } = req.body;

  let user = await getUserByUsername(username);
  if (!user || !comparePassword(password, user.passwordHash)) {
    return res.status(422).json({ error: "Invalid username/password" });
  }

  const accessToken = signJwt(user);
  user = sanitizeUser(user);

  res.status(200).json({ user, accessToken });
}
