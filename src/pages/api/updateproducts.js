import Product from "../../../models/Product";
import connectToMongo from '../../../middleware/mongoose';

const handler = async(req , res) =>{
    if(req.method === 'POST'){
        console.log(req.body)
        for(let i = 0; i<req.body.length ; i++){
            let update = await Product.findByIdAndUpdate(req.body[i]._id , req.body[i])
        }
        res.status(200).json({success:'Products updated'})
    }
    else{
        res.status(400).json({error:'method is not allowed'})
    }
}

export default connectToMongo(handler);
  