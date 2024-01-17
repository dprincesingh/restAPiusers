import express from "express";
import connectMongodb from "./src/Config/connection.js";
import useRouter from "./src/Routes/loanuser.js";
import "dotenv/config";

const app = express();
app.use(express.urlencoded({ extended: false }));
const port = 4000;


connectMongodb("mongodb://localhost:27017/loanuser")
  .then(() => {
    console.log("mongodb connected successfully ");
  })
  .catch((error) => {
    console.error("connecting...." + error);
  });

app.use("/api/loanuser", useRouter);

app.listen(process.env.PORT, () => {
  console.log(            
    `Port is running http://localhost:${process.env.PORT}/api/loanuser`
  );
});
