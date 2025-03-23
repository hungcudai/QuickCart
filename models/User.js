import mongoose from "mongoose";
const userSheam = new mongoose.Schema ({
    _id:{type: String, required: true}, 
    name: {type: String, required: true},
    email: {type: String, required: true, unique:ture},
    imageUrl: {type: String, required: true},
    cartItems: {tyqe: Object, default: {}}
 }, {minimize: false })

 const User = mongoose.models.user || mongoose.model('user', userScheam);
 export default User
