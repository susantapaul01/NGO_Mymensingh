import nodemailer from 'nodemailer';
import { EMAIL_HOST, EMAIL_PASSWORD, EMAIL_PORT, EMAIL_SECURITY, EMAIL_USER } from '../config/config.js';

export const SendEmailOTP = async (emailTo, EmailSebject, EmailText) => {
    let transporter = nodemailer.createTransport({
        host: EMAIL_HOST,
        port: EMAIL_PORT,
        secure: EMAIL_SECURITY,
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    let emailOptions = {
        from: `<${EMAIL_USER}>`,
        to: emailTo,
        subject: EmailSebject,
        text: EmailText
    }
    let sendUserEmail = await transporter.sendMail(emailOptions);
    return sendUserEmail;
}