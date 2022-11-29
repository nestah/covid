const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri = "mongodb+srv://phestusdb:mypassword321@webmapcluster.jz3qxnm.mongodb.net/?retryWrites=true&w=majority"


//awaiting dbserver connection
async function connect() {
try {
await mongoose.connect(uri);
console.log("connected to the db")
} catch(error){
console.error(error)
}
}
connect();
//listen to port 
app.listen(8000, () =>{
    console.log("server connected to port 8000")
});
