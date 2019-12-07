const mongoose=require('mongoose')

const connectDB=()=>{ mongoose.connect(process.env.MONGODB_URI_TICKET_MASTER,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
    .then(()=>{
        console.log('database connected:'+process.env.MONGODB_URI_TICKET_MASTER)
    }) 
    .catch((err)=>{
        console.log('error to db:'+process.env.MONGODB_URI_TICKET_MASTER)
    })        
}

module.exports=connectDB