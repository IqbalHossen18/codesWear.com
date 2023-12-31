import User from '../../../models/User';
import connectToMongo from '../../../middleware/mongoose';
const CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async(req , res) =>{
    if(req.method==="POST"){

        const{email, password } = req.body;
                
        let check = await User.findOne({email})
        const encryptedPassword = check.password;
        const secretKey = 'secret123'; // Replace with your actual secret key
        
        // Decrypt the password
        const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
        const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
        
        if(check){
            if(check.email === email && password === decryptedPassword){
                var token = jwt.sign({email:check.email, name:check.name}, 'jwtsecret' , { expiresIn: '2days' });
                res.status(200).json({success:'success' , token})
            }
            else{
                res.status(400).json({error:'Invalid Credintials'})
            }

        }
        else{
            res.status(400).json({error:'User not found'})
        }
    }
    else{
        res.status(401).json({error:'This method is not allowed'})
    }

}

export default connectToMongo(handler);
  