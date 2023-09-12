const express= require('express')
const app=express()
const mongoose=require('mongoose')
const Url='mongodb+srv://Aakashverma:Aakash90331999@cluster0.qliqygt.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(Url).then((data)=>{
  console.log("Mongodb is connected")
}).catch((err)=>{
    console.log(err)
})