import connection from "./DB/connection.js";
import authRouter from "./modules/auth/auth.controller.js";
import messageRoutes from "./modules/message/message.controller.js";

const bootstrab=(app,express)=>{
    app.use(express.json());
    app.get('/',(req,res)=> res.status(200).json({massage:"wellcome"}))



    connection()
    app.use('/auth', authRouter);
    app.use('/messages', messageRoutes); 


    app.all("*",(req,res)=>{
        return  res.status(400).json({massage:"api not found"})
    })
}

export default bootstrab;