

const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares

app.use(express.json());
app.use(cors());
app.use("/books", router);

app.get('/' ,(req,res)=>{
res.send("Book store App.... ")
})

const databaseConnection = async() => {
 
  try {
    const connection = await mongoose.connect("mongodb+srv://admin:X3l66mbVjfnAW1Nb@cluster0.omkc6tc.mongodb.net/Book-StoreretryWrites=true&w=majority")
    console.log("Connected to the mongoDB");
   

} catch (error) {
    console.log(error);
}
 
}

databaseConnection();


app.listen(4000, () =>{
console.log("App is listening on this...")
})







// admin

// X3l66mbVjfnAW1Nb


// new pwd --> F94P9SFL1sAMAcDJ
