const express=require('express')
const connectDB=require('./config/database')
const router=require('./config/routes')
const cors=require('cors')
const path=require('path')

const port=process.env.PORT || 3030;

const app=express()

connectDB()

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, './client/build/')))
app.use('/api',router)
app.get('*',(req,res)=> {
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
});


app.listen(port,()=>{
    console.log('listening port:',port)
})