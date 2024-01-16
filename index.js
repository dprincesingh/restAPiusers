import express from "express";
import connectMongodb from "./src/Config/connection.js";
import useRouter from "./src/Routes/loanuser.js";

const app = express();
app.use(express.urlencoded({ extended: false }));
const port = 3000;


connectMongodb("mongodb://localhost:27017/loanuser")
  .then(() => console.log("Connected to MongoDb"))
  .catch((err) => console.error("something went wrong .. " + err));

app.use("/api/loanuser", useRouter);

app.listen(port, () => {
  console.log("Port is running at " + port);
});
