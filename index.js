import express from 'express';
// import products from './products.js'
import userCredentials from './middlewares/logs.js';



const app=express()
app.use(userCredentials)

//Query String
// app.get('/product',(req,res)=>{
//     const {category,id}=req.query
//     res.send(`Response ok ${category} and ${id}`)
// })

app.get('/',(req,res)=>{
    res.send("you are auhthenticated")
})

//sending Json
// app.get('/products',(req,res)=>{
//     res.json(products)
// })

app.listen(3000,()=>{
    console.log("Server Up ")
})