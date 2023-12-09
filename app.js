// const express = require("express");
import express from "express";
import cors from "cors";
import "dotenv/config";
import UserRoutes from "./users/routes.js";
import ReviewRoutes from "./reviews/routes.js";
import mongoose from "mongoose";
import session from "express-session";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/basketboxd'
mongoose.connect(CONNECTION_STRING);

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}

app.use(
  session(sessionOptions)
);

app.use(express.json());

UserRoutes(app);
ReviewRoutes(app);
app.get('/', (req, res) => {
  res.send('Welcome to Basketboxd API!')
})

app.listen(process.env.PORT || 4000);
