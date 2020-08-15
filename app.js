const express =require('express')
const app = express()
const bodyparser= require('body-parser')
const authRouter = require('./router/auth')
const mongoose = require('mongoose')
app.use(express.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*") 
    res.setHeader(
        "Acess-Control-Allow-Header",
        "Origin,X-Requested-With,Control-Type,Accept,Authorization"
    )
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PUT,DELETE"
    )
    res.header("Access-Control-Allow-Headers","*")
    next();
})

app.use(authRouter)

mongoose.connect("mongodb://localhost:27017/Article",{useNewUrlParser:true,useUnifiedTopology:true})
.then(result=>{
    console.log("Database connect")
}).catch(result=>{
    console.log("can't connect database")
})

app.listen(process.env.port ||3001,()=>{
    console.log('Login')
})