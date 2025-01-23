import mongoose from "mongoose";
const connection = ()=>{
mongoose.connect('mongodb://127.0.0.1:27017/sar7a')
.then(()=>console.log("connectioned DB" ))
.catch(()=>console.log("connection error"))

}
export default connection;