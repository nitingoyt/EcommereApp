import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoute.js";

//App Config

const app = express();
const port = process.env.PORT || 4000;
connectDB();

// static files from server
app.use("/uploads", express.static("uploads"));

//  Middleware

app.use(express.json())
app.use(cors())


// api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res)=>{
    res.send('API Running')
})

app.listen(port, ()=> console.log(`Running on PORT: http://localhost:${port}`))