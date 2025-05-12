const mongoose=require('mongoose');
const express=require('express');
const dotenv=require('dotenv');
const Routes=require('./Routes/resartRoues');
dotenv.config()
// const app=express();
const app=express.json();
PORT=5000;
MONGO_URI=process.env.MONGO_URI;

app.connect(MONGO_URI)
     .then("conneted")
     .catch("error")
app.use("/api/resart",Routes);
app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`)
});