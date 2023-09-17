import express from 'express';
import { join } from 'path';
import route from './routes/route.js'


const app=express()
app.set("view engine","ejs")
app.use(express.static(join(process.cwd(),'./public')))
app.use("/",route)




app.listen(3000,()=>{
    console.log("Server Up ")
})