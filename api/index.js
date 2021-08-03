const express = require("express");
const dotev = require("dotenv").config();

const mongoose = require("mongoose");
const app = express();

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log({ msg: "connected to mongo cloud" });
  })
  .catch((err) => {
    msg: err.message;
  });

// middle ware

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

app.listen(process.env.PORT, () => {
  console.log("server is listening now " + process.env.PORT);
});
