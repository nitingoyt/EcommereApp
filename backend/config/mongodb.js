import mongoose from "mongoose";

const connectDB = async () =>{
    mongoose.connection.on('connected', ()=>{
        console.log('DB Conneceted')
    })
    await mongoose.connect(`mongodb://localhost:27017/`)

 
}

export default connectDB;