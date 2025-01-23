import { createTransport } from "nodemailer";
import { emailTemp } from "./emailTempalte.js";
import * as dotenv from 'dotenv'
dotenv.config({})
const transporter = createTransport({
  service:"gmail",
  auth: {
    user: process.env.SEND_EMAIL,
    pass: process.env.SEND_EMAIL_PASSWIRD
  },
});


export default async function sendEmail(email) {
      // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"sa7a app" <maddison53@ethereal.email>', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: emailTemp(), // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>


    
  }

