const { response } = require('express')
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
        //console.log(error);
        return resp.status(error.statusCode).json({
            data:{},
            success:false,
            message:error.message,
            err:error.explanation
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
const isAuthenticated= async (req,resp)=>{

    try {
        const token=req.headers['x-access-token'];
        const response=await userService.isAuthenticated(token)     
        return resp.status(200).json({
            success:true,
            err:{},
            data:response,
            message:'user is authenticated and token is valid'
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
const isAdmin=async (req,resp)=>{
    try {
       const response= await userService.isAdmin(req.body.id);
       return resp.status(200).json({
        data:response,
        success:false,
        err:{},
        message:'succesfully fetched is user a admin or not'
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
    signIn,
    isAuthenticated,
    isAdmin
}