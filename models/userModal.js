import mongoose from "mongoose";
const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    minLength: [2, "Password to short"],
  },
  about: {
    type: String,
    required: true,
  },
});

export default mongoose.model.Post || mongoose.model("Post", Schema);
