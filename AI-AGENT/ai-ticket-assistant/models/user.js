import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    role:{typr:String, default:"user",enum:["user","moderator","admin"]},
    skills:[String],
    createdAt:{type:Date, default:Date.now}
});

export default mongoose.model('User', userSchema);