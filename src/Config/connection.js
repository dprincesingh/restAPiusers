// connection to loanuser  mongodb server
import mongoose from "mongoose";

async function connectMongodb(url) {
  await mongoose
    .connect(url)
    // .then(()=>{console.log("Connecting to Server")})
    // .catch(error=>{console.error("something went wrong ")+error})
 
}

export default connectMongodb;
