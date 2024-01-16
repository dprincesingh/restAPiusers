// connection to loanuser  mongodb server
import mongoose from "mongoose";

async function connectMongodb(url) {
  mongoose
    .connect(url)
 
}

export default connectMongodb;
