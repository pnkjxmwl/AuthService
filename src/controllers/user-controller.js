const UserService = require('../services/user-service')

const userService =new UserService()
const create= async (req,resp)=>{
    try {
        const response =await userService.create({
            email:req.body.email,
            password:req.body.password
        })
        return resp.status(201).json({
            data:response,
            success:true,
            message:'Succesfully created user',
            err:{}
        })

    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            data:{},
            success:false,
            err:error
        })
    }
}
const signIn= async(req,resp)=>{
    try {
        const response =await userService.signIn(req.body.email,req.body.password)
        return resp.status(201).json({
            data:response,
            success:true,
            message:'Succesfully sign in user',
            err:{}
        })

    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            data:{},
            success:false,
            err:error
        })
    }
}
module.exports={
    create,
    signIn
}