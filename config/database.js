const mongoose=require('mongoose')

const connectDB=()=>{ mongoose.connect('mongodb://localhost:27017/july-ticket-master-app',{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
    .then(()=>{
        console.log('database connected')
    }) 
    .catch((err)=>{
        console.log(err)
    })        
}

module.exports=connectDB