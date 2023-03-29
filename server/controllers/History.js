
const HistoryModel = require('../models/History')
const jwt = require('jsonwebtoken')
exports.addUserHistory = async(req,res) =>{
    try {
        const {token} = req.cookies
        const {_id} = await jwt.verify(token,process.env.SECRET_KEY)
        const {id} = req.body
        const history = await (await HistoryModel.create({user:_id,card:id})).populate('card')

        return res.status(201).json({history})

    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
exports.getAllUserHistory = async(req,res) =>{
    try {
        const {token} = req.cookies
        if(!token)
            return res.status(404).json({message:"Invalid Request"})
        const {_id} = await jwt.verify(token,process.env.SECRET_KEY);

        const history = await HistoryModel.find({user:_id}).populate('user card')

        return res.status(200).json({history});

    } catch (error) {
      return res.status(500).json({message:error.message})  
    }
}