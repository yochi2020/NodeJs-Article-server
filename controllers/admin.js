const group = require("../models/group")
const article =require("../models/article")
const admin_addGroup =(req,res)=>{
    const topic=req.body.topic
    const addGroup = new group({
        group_name:topic
    })
    addGroup.save().then(result=>{
        res.send("Home Admin / "+req.body.topic)
    }).catch(()=>{
        console.log("can't addGroup")
    })
}
module.exports.admin_addGroup=admin_addGroup


const admin_getGroup=(req,res)=>{
    group.find()
    .then(result=>{
        res.send(result)
    })
}

module.exports.admin_getGroup=admin_getGroup

const admin_deleteGroup=(req,res)=>{
    const id = req.params.id
    group.deleteOne({_id:id},function(err,result){
        if(err) throw err
        res.send(result)
    })
}

module.exports.admin_deleteGroup=admin_deleteGroup

const admin_EditGroup=(req,res)=>{
    const id = req.params.id
    const group_name =req.params.group
    console.log(group_name)
    group.updateOne({_id:id},{$set:{group_name:group_name}},(err,result)=>{
        if(err) throw err
        res.send(result)
    })
}

module.exports.admin_EditGroup=admin_EditGroup


const admin_addArticle=(req,res)=>{
    const data = req.body
    const addArticle = new article({
        group_name:data.group_name,
        title:data.title,
        content:data.detail,
        date_time:new Date()
    })

    addArticle.save()
    .then(result=>{
        res.send(result)
    }).catch(err=>{
        console.log("error"+err)
    })
}

module.exports.admin_addArticle=admin_addArticle


const admin_getArticle =(req,res)=>{
    article.find({},function(err,result){
        if(err) throw err
        res.send(result)
    })
}


module.exports.admin_getArticle=admin_getArticle


const admin_getArticleById=(req,res)=>{
    article.findById({_id:req.params.id},(err,result)=>{
        if(err) throw err
        res.send(result)
    })
}

module.exports.admin_getArticleById=admin_getArticleById

const admin_deleteArticle=(req,res)=>{
    const id =req.params.id
    article.deleteOne({_id:id},(err,result)=>{
        res.send(result)
    })
}

module.exports.admin_deleteArticle=admin_deleteArticle