import { Schema, model } from "mongoose";

const AthleteSchema = new Schema({
  name: String,
  jerseyNum: Number,
});

const Athlete = model("Athlete", AthleteSchema);

export default Athlete;
