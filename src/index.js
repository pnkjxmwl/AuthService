const express= require('express')
const bodyParser= require('body-parser')
const {PORT, JWT_KEY} = require('./config/serverConfig')
const app= express();
//const UserRepository = require('./repository/user-repository')
const apiRoutes= require('./routes/index')
const db=require('./models/index')
//const UserService= require('./services/user-service')



const prepareAndStartServer= ()=>{

    app.use(bodyParser.json( ))
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',apiRoutes)
    app.listen(PORT,async ()=>{
        console.log("server started")

        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true})
        }
        // const repo= new UserRepository()
        // const response= await repo.getById(6);
        // console.log(response)
        // const service= new UserService()
        // // const newToken= service.createToken({email:"pankaj@g",id:1})
        // // console.log('new token is',newToken)
        // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhbmthakBnIiwiaWQiOjEsImlhdCI6MTY4Mjk2MDc2OCwiZXhwIjoxNjgyOTY0MzY4fQ.GEZSkVzqBB34LGZ7Rzt0Z31qWtoQSsm7vrmXLoe5ES4"
        // const resp= service.verifyToken(token,JWT_KEY)
        // console.log(resp)

    })

}
prepareAndStartServer();