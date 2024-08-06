import mongoose from "mongoose";

const url = `mongodb+srv://admin:admin@cluster0.uxxmpv3.mongodb.net/`;
mongoose.connect(url);

export default mongoose;
