const mongoose =require('mongoose')
const addGroup = mongoose.Schema({
    group_name:{type:String}
})

module.exports=mongoose.model("group",addGroup)