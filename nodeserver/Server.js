const express= require('express');
const cors=require('cors');
const bodyParser=require('body-parser');

const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Bazar');
    console.log('db connected')
}
const userSchema = new mongoose.Schema({
    email: String,
    password:String,
    
  });
  const User = mongoose.model('user', userSchema);


const server =express();
server.use(cors());
server.use(bodyParser.json());


server.post('/Bazar',async(req,res)=>{

    let user=new User();
    user.email=req.body.email;
    user.password=req.body.password;
    const doc = await user.save();

    console.log(doc);
    res.json(doc);
})

server.get('/Bazar',async(req,res)=>{
    const docs = await User.find({});
    res.json(docs)
})

server.listen(7000,()=>{
    console.log('server started')
})