import mongoose from "mongoose";

const LensSchema = mongoose.Schema({
  img: { type: String },
  ratingV: { type: Number },
  ratingC: { type: Number },
  name: { type: String },
  size: { type: String },
  tags: { type: String },
  colorO: { type: Number },
  dprice: { type: Number },
  OgPrice: { type: Number },
  offer: { type: String },
});

export const LensModel = mongoose.model("lenses", LensSchema);
