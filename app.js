import express from "express";
const app = express()
const port = 4000

app.get('/', (req,res)=>{
    res.send('index site')
})
app.listen(port, ()=>{
    console.log('aktiw')
})