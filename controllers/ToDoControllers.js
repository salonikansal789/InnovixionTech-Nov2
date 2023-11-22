const ToDoModel=require('../models/ToDoModels')

module.exports.getToDo= async(req,res)=>{
    const ToDo= await  ToDoModel.find()
    res.send(ToDo);
}
module.exports.saveToDo= async(req,res)=>{
    const {text}=req.body;
    ToDoModel
    .create({text})
    .then((data)=>{
        console.log("Added Successfully");
        console.log(data)
        res.send(data)
    })
}
module.exports.updateToDo= async(req,res)=>{
    const {id,text}=req.body;
    ToDoModel
    .findByIdAndUpdate(id,{text})
    .then(()=>{res.send("Successfully Updated")})
    .catch((err)=>console.log(err))
}
module.exports.deleteToDo= async(req,res)=>{
    const {id}=req.body;
    ToDoModel
    .findByIdAndDelete(id)
    .then(()=>{res.send("Successfully Deleted")})
    .catch((err)=>console.log(err))
}