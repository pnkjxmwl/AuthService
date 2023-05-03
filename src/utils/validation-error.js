const AppErrors =require('./error-handler')
const { StatusCodes}= require('http-status-codes')

class ValidationError extends AppErrors{

    constructor(error){

        let errorName=error.name;
        let explanation=[];
        //console.log(error.errors);
        error.errors.forEach((err) => {
            explanation.push(err.message)
        });
        super(
            errorName,
            'Not able to validate ',
            explanation,
            StatusCodes.BAD_REQUEST
        )
    }


}
module.exports=ValidationError