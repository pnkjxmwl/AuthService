const jwt= require('jsonwebtoken')
const UserRepository =require('../repository/user-repository')
const {JWT_KEY} =require("../config/serverConfig")
class UserService {

    constructor(){
        this.userRepository= new UserRepository()
    }

    async create(data)
    {
        try {
            const user= await this.userRepository.create(data);
            return user;
        } 
        catch (error) {
            throw error
        }
    }

     createToken(user){
            try {

                const result= jwt.sign(user,JWT_KEY,{expiresIn:'1d'});
                return result;

            } catch (error) {
                console.log('something wrong in token creation')
                throw error
            }

     }

     verifyToken(token){

        try {

            const response=jwt.verify(token,JWT_KEY)
            return response;

        } catch (error) {
            console.log('something wrong in verify token')
            throw error
        }

     }

}
module.exports=UserService