import { User } from "../models";

export async function getUserById(id) {
  return await User.findById(id);
}

export async function getUserByUsername(username) {
  return await User.findOne({ username });
}

export async function createUser(username, passwordHash, role = 3) {
  return await User.create({ username, passwordHash, role });
}

export function sanitizeUser(user) {
  user = user.toJSON();
  delete user.passwordHash;
  delete user.role;
  return user;
}
