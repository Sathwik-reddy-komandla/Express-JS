import express from 'express';
import path from 'path';
import userCredentials from './middlewares/logs.js';



const app=express()
app.use(express.static('./public'))


app.get('/',(req,res)=>{
    res.sendFile(path.join(process.cwd(),"./public/index.html"))
})


app.listen(3000,()=>{
    console.log("Server Up ")
})