import connection from "./DB/connection.js";












const bootstrab=(app,express)=>{
    app.use(express.json());
    app.get('/',(req,res)=> res.status(200).json({massage:"wellcome"}))



        connection
    app.all("*",(req,res)=>{
        return  res.status(400).json({massage:"api not found"})
    })
}

export default bootstrab;