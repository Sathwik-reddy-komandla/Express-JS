// import express from "express";
// import students from './routes/student.js'
// import students from './routes/student.js';

// const app=express()
// app.use('/students',students)


// app.get('/students',(req,res)=>{
//     res.send("get all students")
// })

// app.post('/students',(req,res)=>{
//     res.send("Post new student")
// })


// app.put('/students',(req,res)=>{
//     res.send("Update student")
// })


// app.delete('/students',(req,res)=>{
//     res.send("delete students")
// })

//Refactor
// app.route('/student')
//     .get((req,res)=>res.send("Get students"))
//     .post((req,res)=>res.send("Post students"))
//     .put((req,res)=>res.send("Put students"))
//     .delete((req,res)=>res.send("Delete students"))
//     .patch((req,res)=>res.send("Patch students"))

//Advanced Routes
// 1. Create ROutes folder and put the routes in a seperate file
// 2. Create instance of express.Router()
// 3. Instead of ap.method chnage that to "router.method" 
// 4. Export Router
// 5. Import Router
// 6. use the (app.use) built in middle ware and porvide the routes


// Route Params
// ecom/products/iphone/:id
// app.get('/student/:id',(req,res)=>{
//     res.send(req.params.id)
// })
// app.get('/student/:student_class/:student_id',(req,res)=>{
//     const { student_class, student_id}=req.params
//     res.send(`Student is from ${student_class} and id is ${student_id}`)
// })

// app.param("id",(req,res,next,id)=>{
//     console.log("id",id)
//     next()
// })
// app.get('/user/:id',(req,res)=>{
//     console.log("This is user Id path")
//     res.send("Response Ok")
// })

// app.listen(3000,()=>{
//     console.log("Listening at 3000")
// })