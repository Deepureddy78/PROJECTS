import nodemailer from 'nodemailer';

export const sendMail = async(toString,subject,text)=>{
    try{
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_SMTP_HOST,
            port: process.env.MAILTRAP_SMTP_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.MAILTRAP_SMTP_USER, // generated ethereal user
                pass: process.env.MAILTRAP_SMTP_PASS, // generated ethereal password
            }, 
        });

        const info =await transporter.sendMail({
            from: ' "Inngest TMS',
            to,
            subject,
            text,
        });
    console.log("Message sent: %s", info.messageId);
    return info;
    } 
    catch(err){
        console.error("Error sending email:", err.message);
        throw err;
    }
}