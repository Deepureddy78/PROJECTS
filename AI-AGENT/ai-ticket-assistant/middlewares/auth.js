import jwt from "jsonwebtoken";

export const authenticate =(req,res,next)=>{
    const token =req.headers.authorization?.spilt(" "[1])

    if(!token){
        return res.status(401).json({error:"Access Denied.No token found."})
    }

    try{
        jwt.verify(token, process.env.JWT_SECRET);
        req.user=decoded
        next();
    }catch(error){
        res.status(401).json({eroor:"Invalid token"})
    }
}