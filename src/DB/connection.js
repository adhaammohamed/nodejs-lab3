import mongoose from "mongoose";
const connection = ()=>{
mongoose.connect('mongodb://127.0.0.1:27017/sara7a')
.then(()=>console.log("connectioned" ))
.catch(()=>console.log("connection error"))
}
export default connection;