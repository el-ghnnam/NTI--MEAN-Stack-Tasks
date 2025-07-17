const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const postRoute = require("./routes/postRoute"); // ✅ Correct path
const userRoute = require("./routes/userRoute"); // ✅ Add this

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("DB error:", err));

app.use(express.json());

// Register the routes
app.use("/api/post", postRoute);
app.use("/api/user", userRoute); // <-- THIS MUST BE PRESENT

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
