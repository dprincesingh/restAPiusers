import express from "express";
import connectMongodb from "./src/Config/connection.js";
import useRouter from "./src/Routes/loanuser.js";
import 'dotenv/config'

const app = express();
app.use(express.urlencoded({ extended: false }));
const port = 4000;


try{

  connectMongodb("mongodb://localhost:27017/loanuser")
}catch(err){
  console.log(err);
}
  

app.use("/api/loanuser", useRouter);

app.listen(process.env.PORT, () => {
  console.log("Port is running at " + port);
});
