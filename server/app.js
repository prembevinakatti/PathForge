const cookieParser = require("cookie-parser");
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");
const authRoute = require("./routes/auth.route");
const roadmapRoute = require("./routes/roadmap.route");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

app.use("/api/path/auth", authRoute);
app.use("/api/path/roadmap", roadmapRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server Is Running On PORT ${PORT}`);
});
