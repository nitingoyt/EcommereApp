import express from "express";
import cors from "cors";
import "dotenv/config";
import { connect } from "http2";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";

//App Config

const app = express();
const port = process.env.PORT || 4000;
connectDB();

//  Middleware

app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user', userRouter)

app.get('/', (req, res)=>{
    res.send('API Running')
})

app.listen(port, ()=> console.log(`Running on PORT: http://localhost:${port}`))