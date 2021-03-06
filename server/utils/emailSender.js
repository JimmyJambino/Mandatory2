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
let mailDetails = {}
export function sendMail(email, name) {
    mailDetails = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Beerlicious Signup (NO REPLY)',
        text: 'Welcome to Beerlicious ' + name + '! \nThis is the only mail you will receive for now.'
    }
    transporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs');
        } else {
            console.log('Email sent successfully');
        }
    })
}