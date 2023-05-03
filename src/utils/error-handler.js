const { StatusCodes}= require('http-status-codes')
class AppErrors extends Error {

    constructor(name='AppError',message='Something Went Wrong 2',explanation='Something Went Wrong 2',statusCode=StatusCodes.INTERNAL_SERVER_ERROR)
    {
        super()
        this.message=message,
        this.explanation=explanation,
        this.name=name,
        this.statusCode=statusCode
    }


}

module.exports= AppErrors;