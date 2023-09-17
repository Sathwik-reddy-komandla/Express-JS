import express from "express";
import { allStudents, deleteStudent, newStudent, updateStudent } from "../controllers/student.js";

const router=express.Router()

// router.get('/all',(req,res)=>{
//     res.send("get students")
// })


// router.post('/create',(req,res)=>{
//     res.send("Create students")
// })


// router.put('/update',(req,res)=>{
//     res.send("update students")
// })



// router.delete('/delete',(req,res)=>{
//     res.send("delete students")
// })

router.get('/all',allStudents)

router.post('/create',newStudent)

router.put('/update',updateStudent)

router.delete('/delete',deleteStudent)


export default router