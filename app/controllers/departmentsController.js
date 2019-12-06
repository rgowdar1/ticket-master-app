
const Department=require('../models/departments')
//const Ticket=require('../models/tickets')
module.exports.list=(req,res)=>{
    Department.find({user:req.user._id})
        .then((departments)=>{
            res.json(departments)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Department.findOne({_id:id,user:req.user._id})
        .then((department)=>{
            if(department) {
            res.json(department)
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
    const department=new Department(body)
    department.user=req.user.id
    department.save()
        .then((department)=>{
            res.json(department)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Department.findOneAndUpdate({_id:id,user:req.user._id},body,{new:true,runValidators:true})
        .then((department)=>{
            if(department) {
            res.json(department)
            } else {
                res.json({})
            }
        })
}

module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Department.findOneAndDelete({_id:id,user:req.user._id})
        .then((department)=>{
            if(department) {
                res.json(department)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}


// //find tickets belongs to department
// module.exports.find=(req,res)=>{
//     const id=req.params.id
//     Promise.all([Department.findById(id),Ticket.find({department:id})]).then(values=>{
   // const [department,ticket]=values
    //        res.json({department,ticket})
//})
//        
// }
