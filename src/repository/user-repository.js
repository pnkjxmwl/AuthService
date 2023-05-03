const { StatusCodes } = require('http-status-codes');
const {User,Role} =require('../models/index');
const ClientError = require('../utils/client-error');
const ValidationError = require('../utils/validation-error');

class UserRepository{

    async create(data){
        try {
            const user= await User.create(data);
            return user
        } catch (error){
            console.log('error happen');
            if(error.name=='SequelizeValidationError'){
              throw new ValidationError(error)
             }
            console.log("something wrong in user repo");
            throw error
        }
    }

    async destroy(userId){
        try {
            const user= await User.destroy({
                where:{
                    id:userId
                }
            });
            return true
        } catch (error) {
            console.log("something wrong in user repo");
            throw error
        }
    }
    async getById(userId)
    {
        try {
           const user= await User.findByPk(userId,{
            attributes:['email','id']
           })
           return user
        } catch (error) {
            console.log("something wrong in user repo");
            throw error
        }

    }
    async isAdmin(userId)
    {
        try {
            const user=await User.findByPk(userId)
            const adminRole= await Role.findOne({
                where:{
                    name:"ADMIN"
                }
            })
           return user.hasRole(adminRole)
         } catch (error) {
             console.log("something wrong in user repo");
             throw error
         }

    }
    async getByEmail(email){
        try {
            const user= await User.findOne({
                where:{
                    email:email
                }
            })
            if(!user){
                
                throw new ClientError(
                    {
                    name:'AttributeNotFound',
                    message:'Invalid Email Sent in Request',
                    explanation:'Please check if email is registered',
                    statusCode:StatusCodes.NOT_FOUND
                    }
                )
            }
            return user
         } catch (error) {
             console.log("something wrong in user repo");
             throw error
         }
    }
}

module.exports= UserRepository