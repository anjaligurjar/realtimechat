const express= require('express')
const app=express()
const http= require('http').createServer(app)

app.get('/',(req,res)=>{
res.send('hello world')
})
http.listen(3000,()=>{
    console.log('this is server')


})
