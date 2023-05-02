const validateUserAuth= (req,resp,next)=>{
    if(!req.body.email || !req.body.password)
    {
        return resp.status(400).json({
            success:false,
            data:{},
            message:'something went wrong',
            err: 'email or password missing '
        })
    }
    next()
}

module.exports={

    validateUserAuth

}