import mongoose from "mongoose";
const Schema = mongoose.Schema;
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  briefdescription: {
    type: String,
    required: true,
  },
  fulldescription: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Blog", blogSchema);
