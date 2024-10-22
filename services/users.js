
const { Error } = require('mongoose');
const Users = require('../module/users');


class UserSerivece {
   
   async createUser(userData){

    const saveuser ={
        name:userData.name,
        email:userData.email,
        password:userData.password,
        created_at : new Date()
    }
    
        try{
            const user = new Users(saveuser);
            await user.save();
            return ('success :' +user);
        }catch(error){
            throw new Error('something went wrong : '+error.message)
        }
    }

    async getUser(userData){
        console.log(userData)
        try{
            const user = new Users(userData)
           const hgghg=  await Users.findOne({email:userData.email});
           
            return hgghg;

        }
        catch(error){
            throw new Error('Something went wrong ' + error.message)
        }     
    }

    async LoginNow(userdata){

        try{
            const user = await Users.findOne({
                email: userdata.email,
                password: userdata.password
            });
            
            return user; 

        }
        catch(error){
            throw new Error('Something went wrong ' + error.message)
        }
    }
}

module.exports = new UserSerivece();