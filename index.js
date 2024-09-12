const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
dotenv.config();

async function connectDB() {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }

connectDB();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


<<<<<<< HEAD
app.get("/",(req,res)=>{
    res.send("Welcome to homepage")
})

app.get("/users",(req,res)=>{
    res.send("Welcome to user page")
})
=======
// app.get("/",(req,res)=>{
//     res.send("Welcome to homepage")
// })

// app.get("/users",(req,res)=>{
//     res.send("Welcome to user page")
// })
>>>>>>> d1eaae9 (Remove node_modules from repository)

app.listen(8800,()=>{
    console.log("Backend server is running!")
})