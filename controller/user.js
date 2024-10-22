const userservice = require('../services/users');

exports.createUser = async(req,res)=>{
   
    try{

        const user = await userservice.createUser(req.body);
        res.status(201).json(user);
    }catch(error){
        res.status(201).json({messgae:error.message});
    }
};

exports.getUser = async(req,res)=>{
    try{
        const user = await userservice.getUser(req.body);
        if(user){
            res.status(201).json(user)
        }else{
            res.status(201).json({message:"Data not found"})
        }
        
    }
    catch(error){
        res.status(201).json({message:error.message})
    }
}


exports.loginNow = async(req,res)=>{
    try{
        const user = await userservice.LoginNow(req.body);
        if(user){
            res.status(201).json({message:"success",data:user})
        }else{
            res.status(201).json({message:"Data not found"})
        }
        
    }
    catch(error){
        res.status(201).json({message:error.message})
    }
}