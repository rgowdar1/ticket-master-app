const express=require('express')
const connectDB=require('./config/database')
const router=require('./config/routes')
const cors=require('cors')
const port=3030

const app=express()

connectDB()

app.use(express.json())
app.use(cors())
app.use('/',router)


app.listen(port,()=>{
    console.log('listening port:',port)
})