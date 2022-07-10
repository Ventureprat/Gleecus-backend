const app = require("express")();
const mongoose = require("mongoose");
require("dotenv/config");

//cors error prevention
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.removeHeader("x-powered-by");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

//router import
const userData = require("./routers/userData");

//router middleware
app.use("/userData", userData);

//database connect
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Database connected");
});

app.get("/", (req, res) => {
  res.end("Welcome To The API");
});

app.listen(5000, () => {
  console.log("Server Started");
});
