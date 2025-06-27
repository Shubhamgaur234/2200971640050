const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoutes = require("./routes/urlRoute");

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url")
  .then(() => console.log("MongoDB connected"));

app.use(express.json());

app.use("/url", urlRoutes);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
