import * as dao from "./dao.js";
import * as usersDao from "../users/dao.js";
import { ObjectId } from 'mongodb';

function ReviewRoutes(app) {
  const createReview = async (req, res) => {
    const review = await dao.createReview(req.body);
    res.json(review);
  };
  const findAllReviews = async (req, res) => {
    const reviews = await dao.findAllReviews();
    res.json(reviews);
  };
  const findReviewsByUserId = async (req, res) => {
    const reviews = await dao.findReviewsByUserId(req.params.userId);
    res.json(reviews);
  };
  const findReviewsByUsername = async (req, res) => {
    const user = await usersDao.findUserByUsername(req.params.username);
    const reviews = await dao.findReviewsByUserId(new ObjectId(user._id));
    res.json(reviews);
  };
  const findReviewsByPlayerName = async (req, res) => {
    const reviews = await dao.findReviewsByPlayerName(req.params.playerName);
    res.json(reviews);
  };
  const findReviewById = async (req, res) => {
    console.log("By id")
    const review = await dao.findReviewById(req.params.reviewId);
    res.json(review);
  };
  const updateReview = async (req, res) => {
    const { reviewId } = req.params;
    const status = await dao.updateReview(reviewId, req.body);
    res.json(status);
  };
  const deleteReview = async (req, res) => {
    const status = await dao.deleteReview(req.params.reviewId);
    res.json(status);
  };
  app.post("/api/reviews", createReview);
  app.get("/api/reviews", findAllReviews);
  app.get("/api/reviews/:userId", findReviewsByUserId);
  app.get("/api/reviews/username/:username", findReviewsByUsername);
  app.get("/api/reviews/playerName/:playerName", findReviewsByPlayerName);
  app.get("api/reviews/id/:reviewId", findReviewById);
  app.put("/api/reviews/:reviewId", updateReview);
  app.delete("/api/reviews/:reviewId", deleteReview);
}
export default ReviewRoutes;