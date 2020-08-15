const mongoose =require("mongoose")

const article =  mongoose.Schema({
    group_name:{type:String},
    title:{type:String},
    content:{type:String},
    date_time:{type:Date}
})

module.exports=mongoose.model("article",article)
