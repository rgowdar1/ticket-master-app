const Ticket=require('../models/tickets')

module.exports.list=(req,res)=>{
    Ticket.find({user:req.user._id}).populate('customer').populate('department').populate('employee')
        .then((tickets)=>{
            res.json(tickets)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Ticket.findOne({_id:id,user:req.user._id}).populate('customer').populate('department').populate('employee')
        .then((ticket)=>{
            if(ticket) {
                res.json(ticket)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.create=(req,res)=>{
    const body=req.body
    const ticket=new Ticket(body)
    ticket.user=req.user._id
    ticket.save()
        .then((ticket)=>{
            if(ticket) {
                res.json(ticket)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Ticket.findOneAndUpdate({_id:id,user:req.user._id},body,{new:true,runValidators:true})
        .then((ticket)=>{
            if(ticket) {
                res.json(ticket)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Ticket.findOneAndDelete({_id:id,user:req.user._id})
        .then((ticket)=>{
            if(ticket) {
            res.json(ticket)
            } else {
                res.json({})
            }
        }) 
        .catch((err)=>{
            res.json(err)
        })
}

