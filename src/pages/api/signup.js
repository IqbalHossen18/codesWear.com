import User from '../../../models/User';
import connectToMongo from '../../../middleware/mongoose';
const CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');


const handler = async(req , res) =>{
    if(req.method==="POST"){
        const {email , name , password} = req.body;
        const encryptedpass = CryptoJS.AES.encrypt(password, 'secret123').toString()
        let user = await User.find({"email":email})
        if(user){
            let newuser = new User({name, email, password:encryptedpass}) 
            await newuser.save()       
            var token = jwt.sign({ name:user.name , email:user.email }, 'jwtsecret',  { expiresIn: '2days' });
            res.status(200).json({success:'success', token}) 
        }        
        else{
            res.status(200).json({error:'User already exists'})
        }
    }
    else{ 
        res.status(400).json({error:'This method is not allowed'})
    }

}

export default connectToMongo(handler);
  