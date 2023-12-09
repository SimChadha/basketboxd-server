import model from "./model.js";
export const createReview = (review) => model.create(review);
export const findAllReviews = () => model.find();
export const findReviewsByUserId = (userId) => model.find({userId: userId});
export const findReviewsByUsername = (username) =>
  model.find({ username: username });
export const findReviewsByPlayerName = (playerName) => model.find({playerName: playerName});
export const updateReview = (reviewId, review) =>
  model.updateOne({ _id: reviewId }, { $set: review });
export const deleteReview = (reviewId) => model.deleteOne({ _id: reviewId });