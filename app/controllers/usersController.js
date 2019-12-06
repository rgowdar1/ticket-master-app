const { User }=require('../models/user')
const _=require('lodash')

module.exports.register=(req,res)=>{
    const body=_.pick(req.body, ['username','email','password'])
    const user=new User(body)
    user.save()
        .then((user)=>{
            res.json(_.pick(user,['_id','username','email']))
        })
        .catch((err)=>{
            res.send(err)
        })
}

module.exports.login=(req,res)=>{
    const body=_.pick(req.body,['email','password'])
    User.findByCredentials(body.email,body.password)
        .then(function(user) {
            return user.generateToken()
        })
        .then(function(token) {
            res.send({
                token
            })
        })
        .catch(function(err) {
            res.send(err)
        })
}

module.exports.account=(req,res) =>{
    const {user}=req
    res.send(_.pick(user,['_id','username','email']))
}




module.exports.logout=(req,res) =>{
    const {user,token}=req
    User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
        .then(function(user) {
            res.send({notice:'successfully logged out'})
        })
        .catch(function(err) {
            res.send(err)
        })
        
 }
