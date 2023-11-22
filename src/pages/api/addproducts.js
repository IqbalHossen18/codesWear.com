import Product from "../../../models/Product";
import connectToMongo from '../../../middleware/mongoose';

const handler = async(req , res) =>{
    if(req.method === 'POST'){
        console.log(req.body)
        for(let i = 0; i<req.body.length ; i++){
            let add = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                img: req.body[i].img,
                category: req.body[i].category,
                size: req.body[i].size,
                color: req.body[i].color,
                price: req.body[i].price,
                availableQty: req.body[i].availableQty,
            })
             await add.save()
        }
        res.status(200).json({success:'Products added'})
    }
    else{
        res.status(400).json({error:'method is not allowed'})
    }
}

export default connectToMongo(handler);
  