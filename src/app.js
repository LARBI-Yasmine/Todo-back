require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const indexRouter = require("./routes/index");
const tacheRouter = require("./routes/tache");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");

app.use("/api", indexRouter);
app.use("/api", tacheRouter);
app.use("/api", authRouter);
app.use("/api", userRouter);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));

module.exports = {
  app,
};
