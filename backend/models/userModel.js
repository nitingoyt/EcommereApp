import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }
},{minimize:false});


const userModel = mongoose.model.user || mongoose.model('user', userSchema);

export default userModel;
