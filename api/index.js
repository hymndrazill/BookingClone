import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import usersRoute from "./routes/users.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser";

const app = express()
app.use(express.json());
dotenv.config()
const connect = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO);
      } catch (error) {
        handleError(error);
      }
}

//middlewares
app.use(cookieParser());

app.use("/api/auth", authRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/users", usersRoute)
app.use("/api/rooms", roomsRoute)

// custom error handling middleware
app.use((err,req,res,next)=> {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong!"
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message: errorMessage,
    stack:err.stack
  })
})



app.listen(8800,()=> {
    connect()
    console.log( " backend is running")
})