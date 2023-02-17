import express from "express";
import mongoose from "mongoose";

const app = express();
mongoose
  .connect(
    "mongodb+srv://newsapp:4yo2RYGSkAmP8jPd@cluster0.kcpbuf0.mongodb.net/News?retryWrites=true&w=majority"
  )
  .then(() => app.listen(4000))
  .then(() => console.log("connect to database"))
  .catch((err)=>console.log(err));
// app.listen(4000);

// 4yo2RYGSkAmP8jPd
