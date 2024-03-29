const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRouter = require("./routes/userRoutes");
const messageRouter = require("./routes/messageRoutes");
const chatRoute = require("./routes/chatRoutes");

dotenv.config();
const app = express();
connectDB();
app.use(cors({ origin: "*" }));
app.use(express.json()); // to accept json data

app.use("/api/user", userRouter);
app.use("/api/message", messageRouter);
app.use("/api/chat", chatRoute);

app.get("/", (req, res) => {
  res.send("API Running!");
});

app.listen(process.env.PORT, () => {
  console.log(`app started on the port no ${process.env.PORT}`);
});
