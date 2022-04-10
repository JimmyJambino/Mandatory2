// TESTING EMAIL FUNCTIONALITY WITH ENVIRONMENTAL VARIABLES

import dotenv from "dotenv"
dotenv.config()
import nodemailer from "nodemailer"
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
})
let mailDetails = {
    from: process.env.EMAIL_USER,
    to: 'jimm6757@stud.kea.dk',
    subject: 'Test mail',
    text: 'Test Content for email service'
}

transporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
})
