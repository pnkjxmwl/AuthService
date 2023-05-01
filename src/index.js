const express= require('express')
const bodyParser= require('body-parser')
const {PORT} = require('./config/serverConfig')
const app= express();
//const UserRepository = require('./repository/user-repository')
const apiRoutes= require('./routes/index')
const prepareAndStartServer= ()=>{

    app.use(bodyParser.json( ))
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',apiRoutes)
    app.listen(PORT,async ()=>{
        console.log("server started")
        // const repo= new UserRepository()
        // const response= await repo.getById(6);
        // console.log(response)
    })

}
prepareAndStartServer();