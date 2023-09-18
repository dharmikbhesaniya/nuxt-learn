import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
});

const postModel = new mongoose.model("blog", postSchema);

export default postModel;
