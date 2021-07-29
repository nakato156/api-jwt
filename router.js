const jwt = require('jsonwebtoken')
const {Router} = require('express')
const router = Router()

const secret  = process.env.SECRET

router.post('/api/verify_jwt', async(req,res)=>{
    const token = req.headers['x-access-token'] //comprobamos que el usuario se halla registrado
    if (!token) {
        return res.status(401).json({
            auth:false, message:'no token provided'
        })
    }
    try {
        jwt.verify(token,secret,{algorithm: "HS256"})
    } catch (error) {
        return res.json({message:"Error authentication", error:error})
    }

    const { token_, secret_ } = req.body //recogemos datos para la verificación
    if(token_ && secret_){
        const verify = jwt.verify(token_, secret_)
        return res.json({auth:true,verify})
    }
    else { return res.json({message:'no data provided Or no config data provided'})}
});

router.post('/api/generate_jwt', async(req,res)=>{
    const token = req.headers['x-access-token']
    if (!token) {
        return res.status(401).json({
            auth:false, message:'no token provided'
        })
    }
    const decode = jwt.verify(token,secret)
    if (req.body.Id && req.body.exp && req.body.secret) {
        const { Id,exp,secret} = req.body
        const api_token = jwt.sign({id: Id},secret,{expiresIn: exp, algorithm: "HS256"})
        return res.json({message:'create new JWT succesfull', token:api_token})
    }else{
        return res.json({message:'no data provided Or no config data provided'})
    }
})

module.exports = router