import express from 'express';
import nodemailer from 'nodemailer';
const app = express();
app.set("view engine","ejs");

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());// Middleware to parse JSON bodies

const transporter =nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'malaikaramzan52@gmail.com',
        pass:'iuvo ksfe zrar lslx'
    }
});

app.get("/mail", (req, res) => {
    console.log("Sending email...");
    res.render("mail");
});
app.post("/submit-email", (req, res) => {
    console.log(req.body);
    const mailOptions = {
        from:'malaikaramzan52@gmail.com',
        to:'malaikaramzan52@gmail.com',
        subject:req.body.subject,
        text:req.body.mail
    }
    transporter.sendMail(mailOptions,(error,info)=>{
          if(error){
            res.send("email operation failed,try again");
          }
          else{
            res.send("Email sent successfully");
          }
    })
    res.send("Email submitted successfully!");
});

app.listen(3000);
