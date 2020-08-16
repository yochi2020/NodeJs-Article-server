const mongoose =require("mongoose")

const article =  mongoose.Schema({
    group_id:{type:String},
    title:{type:String},
    content:{type:String},
    img_article:{type:String},
    date_time:{type:Date}
})

module.exports=mongoose.model("article",article)
