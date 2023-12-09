import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    playerRating: { type: Number, required: true },
    review: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    playerName: {type: String, required: true},
    datePosted: {type: Date, default: Date.now},
  },
  { collection: "reviews" });
export default reviewSchema;