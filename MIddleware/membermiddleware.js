const jwt = require('jsonwebtoken')

function authorizemember (req, res, next){
    try {
        let token = req.header('Authorization')
        if (!token){
            throw new Error('no token provided')
        }

        token = token.replace ("Bearer ", '')
        console.log(token)
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        console.log(payload)

        if (payload.error) {
            throw new Error(payload.error.message)
        }
        req.userId = payload.id
        req.user= payload.user
        req.developer = payload.developer

        next()
    } catch (error) {
        res.status(403).json({error: error.message})
    }
}

module.exports = {
    authorizemember
}