import * as dotenv from'dotenv'
dotenv.config({})
import express from 'express'
import bootstrab from './src/app.controller.js'
const app =express()
const port=process.env.PORT||8000
bootstrab(app,express)






app.listen(port,()=>console.log('server run') )