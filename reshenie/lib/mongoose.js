import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_DB_URI, {
  dbName: process.env.MONGO_DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose.connection;
