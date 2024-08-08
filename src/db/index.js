import mongoose from "mongoose";
import "dotenv/config";

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.uxxmpv3.mongodb.net/`;
mongoose.connect(url);

export default mongoose;
