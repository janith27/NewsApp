import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://newsapp:4yo2RYGSkAmP8jPd@cluster0.kcpbuf0.mongodb.net/News?retryWrites=true&w=majority"
  )
  .then(() => app.listen(4000))
  .then(() => console.log("connect to database 4000"))
  .catch((err) => console.log(err));
