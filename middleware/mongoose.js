import mongoose from "mongoose";

const connectToMongo = (handler) => async (req, res) => {
  try {
    // Check if there's already a connection
    if (mongoose.connections[0].readyState) {
      return handler(req, res);
    }

    // If not, establish a new connection
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB"); // Add this line for logging

    return handler(req, res);
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default connectToMongo;
