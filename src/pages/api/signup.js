import User from '../../../models/User';
import connectToMongo from '../../../middleware/mongoose';
const CryptoJS = require("crypto-js");


const handler = async(req , res) =>{
    if(req.method==="POST"){
        const {email , name , password} = req.body;
        const encryptedpass = CryptoJS.AES.encrypt(password, 'secret123').toString()
        let ou = await User.find({"email":email})
        if(ou.length !== 1){
            let user = new User({name, email, password:encryptedpass}) 
            await user.save()       
            res.status(200).json({success:'User added', name:user.name , email:user.email, }) 
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
  