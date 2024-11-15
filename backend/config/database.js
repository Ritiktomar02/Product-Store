const mongoose=require("mongoose");
require("dotenv").config();

exports.connect=()=>{

    mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log("Connection Successful");
    })
    .catch((err)=>{
        console.log("Connection not successful");
        console.error(err);
        process.exit(1);
    })
}