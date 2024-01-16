// connection to loanuser  mongodb server
import mongoose from "mongoose";

async function connectMongodb(url) {
  mongoose
    .connect(url)
    .then(() => console.log("connected to mongodb .... "))
    .catch((err) => console.log(console.error("Porblem connecting.....")));
}

export default connectMongodb;
