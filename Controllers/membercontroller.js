const User = require('../models/Users')

const info = async (req, res) => { 
    console.log('testing')
    try {
        const user = await User.findById(req.userId)
        res.status(200).json({username: user.username, email: user.email, developer: user.developer })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    info
}