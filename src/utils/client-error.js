const AppErrors =require('./error-handler')
const { StatusCodes}= require('http-status-codes')

class ClientError extends AppErrors{

    constructor(error){
       // console.log(error)
        super(
            error.name,
            error.message,
            error.explanation,
            error.statusCode
        )
    }


}
module.exports=ClientError