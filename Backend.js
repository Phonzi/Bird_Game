const express = require('express')

const app=express()

app.get("/",(req,res) => {
	res.sendFile(__dirname+'/Game.html');
})

app.use("/", express.static('.'))

app.listen(8080, ()=>{})



