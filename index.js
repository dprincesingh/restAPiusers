import mongoose from "mongoose";
import express from "express";
import loanuser from "./src/Models/loanuser.js";
import connectMongodb from "./src/Config/connection.js";
import useRouter from "./src/Routes/loanuser.js";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
connectMongodb("mongodb://localhost:27017/loanuser");

try {
  mongoose.connection.on("connected", () => {
    app.use("/loanuser", useRouter);
    app.listen(port, () => {
      console.log("Running at " + port);
    });
  });
} catch (error) {
  console.error("Error connecting to MongoDB:", error.message);
}
