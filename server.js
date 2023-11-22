const express=require('express')
const mongoose=require('mongoose')
const cors=require("cors")
const app=express();
const routes=require('./routes/ToDoRoutes')
require('dotenv').config();
app.use(express.json())
app.use(cors())
const PORT=process.env.PORT||8001

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("connected"))
.catch((err)=>console.log(err))
app.use(routes)
app.listen(PORT,()=>{
    console.log("listening on port");
})