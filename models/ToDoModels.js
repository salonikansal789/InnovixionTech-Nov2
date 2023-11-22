const mongoose=require('mongoose')

const todoScheme= new mongoose.Schema({
    text:{
        type: Number,
        require:true
    }
})
module.exports=mongoose.model('ToDoContact',todoScheme)