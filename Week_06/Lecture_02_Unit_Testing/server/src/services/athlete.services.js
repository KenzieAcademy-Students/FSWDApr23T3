import { Athlete } from "../models";

export const findAllAthletes = async () => await Athlete.find();

export const findAthleteById = async (id) => {};

export const createAthlete = async (name, jerseyNum) =>
  await Athlete.create({ name, jerseyNum });

export const updateAthleteById = async (id, updateBody) => {};

export const deleteAthleteById = async (id) => {};
